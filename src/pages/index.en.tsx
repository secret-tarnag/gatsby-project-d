import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import SearchField from '../components/homepage/SearchField';

import './css/index.css';
import './css/search.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import { NewsOutlet } from '../outlet';

export interface NewsOutletNodes {
  node: {
    frontmatter: NewsOutlet;
  };
}

export interface AllOutletsQueryType {
  data: {
    outlets: {
      edges: NewsOutletNodes[];
    };
  };
}

const links = [
  {
    text: 'Why was this page created? ...',
    to: '/en/cselekves#cause',
  },
  {
    text: 'What is the problem with non-independent media? ...',
    to: '/en/cselekves#summary',
  },
  {
    text: 'Types of not telling the truth ...',
    to: '/en/cselekves#variety',
  },
  {
    text: 'What can I do to avoid fake news? ...',
    to: '/en/cselekves#possibilities',
  },
];

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    {' '}
    <Navbar id="" isHomePage={true} lng="en" urlSlug="" />
    <header id="heading" role="banner">
      <h1>Democrable</h1>
    </header>
    <SearchField newsOutlets={data.outlets.edges} lang={'en'} />
    <div id="main-content" role="main">
      <LinkList links={links} />
    </div>
    <Footer lng="en" id="" />
  </Layout>
);

export const pageQuery = graphql`
  query HomePageQuery {
    outlets: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/pages/outlets/*" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            lang
            isIndependent
            slug
          }
        }
      }
    }
  }
`;
