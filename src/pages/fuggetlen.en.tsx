import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { AllOutletsQueryType } from './index.en';
import Navbar from '../components/Navbar';
import { css } from 'emotion';

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    <Navbar isHomePage={false} lng="en" urlSlug="fuggetlen" />
    <ul
      className={css({
        marginTop: 100,
      })}
    >
      {data.outlets.edges
        .filter(
          outlet =>
            outlet.node.frontmatter.lang === 'en' &&
            outlet.node.frontmatter.isIndependent
        )
        .map(outlet => (
          <li key={outlet.node.frontmatter.title}>
            <h2>{outlet.node.frontmatter.title}</h2>
          </li>
        ))}
    </ul>
  </Layout>
);

export const pageQuery = graphql`
  query IndepPageQueryEn {
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
