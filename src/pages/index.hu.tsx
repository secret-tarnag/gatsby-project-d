import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import SearchField from '../components/homepage/SearchField';

import './css/index.css';
import './css/search.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import { AllOutletsQueryType } from './index.en';

const links = [
  {
    text: 'Hogy miért is van ez az oldal? ...',
    to: '/hu/cselekves#cause',
  },
  {
    text: 'Miért rossz, ami nem független? ...',
    to: '/hu/cselekves#summary',
  },
  {
    text: 'A nem igazmondás fajtái ...',
    to: '/hu/cselekves#variety',
  },
  {
    text: 'Mit tehetünk, ha nem akarunk valótlanságokat olvasni? ...',
    to: '/hu/cselekves#possibilities',
  },
];

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    {' '}
    <Navbar id="hideonscroll" isHomePage={true} lng="hu" urlSlug="" />
    <header id="heading" role="banner">
      <h1 className="header-title">Democrable</h1>
    </header>
    <SearchField newsOutlets={data.outlets.edges} lang={'hu'} />
    <div id="main-content" role="main">
    </div>
    <Footer lng="hu" id="" />
  </Layout>
);

export const pageQuery = graphql`
  query HomePageQueryHu {
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
