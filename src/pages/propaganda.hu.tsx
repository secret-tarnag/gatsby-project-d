import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { AllOutletsQueryType } from './index.en';
import Navbar from '../components/Navbar';
import { css } from 'emotion';
import Footer from '../components/Footer';

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    <Navbar isHomePage={false} lng="hu" urlSlug="propaganda" />
    <ul
      className={css({
        marginTop: 100,
      })}
    >
      {data.outlets.edges
        .filter(
          outlet =>
            outlet.node.frontmatter.lang === 'hu' &&
            !outlet.node.frontmatter.isIndependent,
        )
        .map(outlet => (
          <li key={outlet.node.frontmatter.title}>
            <h2>{outlet.node.frontmatter.title}</h2>
          </li>
        ))}
    </ul>
    <Footer lng="hu" />
  </Layout>
);

export const pageQuery = graphql`
  query PropagPageQueryHu {
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
