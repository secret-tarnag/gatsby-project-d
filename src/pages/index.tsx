import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import SearchField from '../components/homepage/SearchField';

export interface NewsOutletNodes {
  node: {
    frontmatter: {
      title: string;
    };
  };
}

interface MainPageProps {
  data: {
    outlets: {
      edges: NewsOutletNodes[];
    };
  };
}

export default ({ data }: MainPageProps) => (
  <div>
    {' '}
    <Navbar isHomePage={true} />
    <header id="heading" role="banner">
      <h1>Democrable</h1>
    </header>
    <SearchField newsOutlets={data.outlets.edges} />
  </div>
);

export const pageQuery = graphql`
  query HomePageQuery {
    outlets: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/content/outlets/*" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
