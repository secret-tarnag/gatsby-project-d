import * as _ from 'lodash';
import * as path from 'path';

interface CreatePagesArgs {
  boundActionCreators: {
    createPage: (config: PageConfig) => void;
  };
  graphql: (query: string) => Promise<{ data: any }>;
}

interface PageConfig {
  path: string;
  component: string;
  layout?: string;
  context?: {
    [field: string]: any;
  };
}

interface FileNode {
  name: string;
  relativeDirectory: string;
}

interface MarkdownNode {
  parent: FileNode;
  frontmatter: any;
}

export const createPages = async ({
  boundActionCreators,
  graphql,
}: CreatePagesArgs) => {
  const { createPage } = boundActionCreators;

  const markdownTitles = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { glob: "**/content/**" } }
      ) {
        edges {
          node {
            parent {
              ... on File {
                relativeDirectory
                name
              }
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const pageConfigs = await Promise.all(
    markdownTitles.data.allMarkdownRemark.edges.map(
      async ({ node }: { node: MarkdownNode }) =>
        node.parent.relativeDirectory
          ? await createConfigForCategoryPage(node)
          : createConfigForStandalonePage(node)
    )
  );

  console.log(pageConfigs);
  pageConfigs.forEach((pageConfigArray: PageConfig[]) => {
    pageConfigArray.forEach((pageConfig: PageConfig) => {
      createPage(pageConfig);
    });
  });
};

async function createConfigForCategoryPage({
  parent: fileNode,
  frontmatter,
}: MarkdownNode) {
  const extraTemplates = {
    // If you need more pages for an .md file put the templates here
    // name: [ { template: pathToTemplate, path: URL } ]
  };

  const resolvedTemplates = _(['outlets'])
    .keyBy()
    .mapValues(async identifier => {
      const extras = _.get(extraTemplates, identifier, []);
      return [
        {
          template: path.resolve(`src/templates/${identifier}Template.tsx`),
          path: await formatURL(fileNode),
        },
        ...extras,
      ];
    });

  const templates = await resolvedTemplates.get(fileNode.relativeDirectory);

  console.log(templates);
  if (templates.length === 0) {
    console.error(
      `No template component specified for ${fileNode.relativeDirectory}
Skipping markdown file ${fileNode.relativeDirectory}/${fileNode.name}`
    );
    return [];
  }

  return templates.map(c => ({
    path: c.path,
    component: c.template,
    context: {
      title: frontmatter.title,
    },
  }));
}

function formatURL(fileNode: FileNode): string {
  switch (fileNode.relativeDirectory) {
    case 'outlets':
      return `outlets/${fileNode.name}`;
  }
}

function createConfigForStandalonePage({
  parent: fileNode,
}: MarkdownNode): PageConfig[] {
  const routePath = fileNode.name === 'index' ? '/' : fileNode.name;
  return [
    {
      path: routePath,
      component: path.resolve(`src/templates/${fileNode.name}.tsx`),
    },
  ];
}
