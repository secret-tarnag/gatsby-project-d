import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

interface OutletTemplateProps {
  data: {
    outlet: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

export default function Template({ data }: OutletTemplateProps) {
  const { outlet } = data;
  const { frontmatter, html } = outlet;
  return (
    <Layout>
      <div>
        <h3>{frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query OutletByTitle($title: String!) {
    outlet: markdownRemark(
      fileAbsolutePath: { glob: "**/content/outlets/*" }
      frontmatter: { title: { eq: $title } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;
