import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { AllOutletsQueryType } from './index.en';
import Navbar from '../components/Navbar';
import { css } from 'emotion';
import Footer from '../components/Footer';

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    <Navbar id="hideonscroll" isHomePage={false} lng="en" urlSlug="propaganda" />
    <ul
      className={css({
        marginTop: 100,
      })}
    >
      {data.outlets.edges
        .filter(
          outlet =>
            outlet.node.frontmatter.lang === 'en' &&
            !outlet.node.frontmatter.isIndependent,
        )
        .map(outlet => (
          <li key={outlet.node.frontmatter.title}>
            <h2>{outlet.node.frontmatter.title}</h2>
          </li>
        ))}
    </ul>
    <Footer lng="en" />
  </Layout>
);

export const pageQuery = graphql`
  query PropagPageQueryEn {
    outlets: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/pages/outlets/*" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            lang
            isIndependent
          }
        }
      }
    }
  }
`;
