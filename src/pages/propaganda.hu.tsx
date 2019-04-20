import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { AllOutletsQueryType } from './index.en';
import Navbar from '../components/Navbar';
import { css } from 'emotion';
import Footer from '../components/Footer';
import LogoTiles from '../components/LogoTiles';

export default ({ data }: AllOutletsQueryType) => (
  <Layout>
    <Navbar id="hideonscroll" isHomePage={false} lng="hu" urlSlug="propaganda" />
    <div
      className={css({
        marginTop: 100,
      })}
    >
      <LogoTiles
        lang="hu"
        items={data.outlets.edges
          .filter(
            outlet =>
              outlet.node.frontmatter.lang === 'hu' &&
              !outlet.node.frontmatter.isIndependent,
          )
          .map(outlet => outlet.node.frontmatter)}
      />
    </div>
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
            slug
            lang
            logo
            dailyReach
            isIndependent
          }
        }
      }
    }
  }
`;
