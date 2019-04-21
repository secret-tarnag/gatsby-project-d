import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import SearchField from '../components/homepage/SearchField';

import './css/index.css';
import './css/search.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import { KeyValue } from '../templates/outletsTemplate';

export interface NewsOutletNodes {
  node: {
    frontmatter: {
      title: string;
      lang: 'en' | 'hu';
      isIndependent: boolean;
      slug: string;
      logo: string;
      properties: KeyValue[];
    };
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
    <Navbar id="hideonscroll" isHomePage={true} lng="en" urlSlug="" />
    <header id="heading" role="banner">
      <h1 className="header-title">Democrable</h1>
    </header>
    <SearchField newsOutlets={data.outlets.edges} lang={'en'} />
    <div id="main-content" role="main">
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
            logo
            properties {
              key
              value
            }
          }
        }
      }
    }
  }
`;
