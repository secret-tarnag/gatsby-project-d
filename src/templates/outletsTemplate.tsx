import * as React from 'react';
import { graphql } from 'gatsby';
import { css } from 'emotion';

import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import './css/outlets.css';
import TitleAndLogo from '../components/outlets/TitleAndLogo';
import Properties from '../components/outlets/Properties';
import OutletFooter from '../components/outlets/OutletFooter';
import Sources from '../components/outlets/Sources';
import Description from '../components/outlets/Description';
import Contacts from '../components/outlets/Contacts';

export interface KeyValue {
  key: string;
  value: string;
}

interface OutletTemplateProps {
  data: {
    outlet: {
      html: string;
      frontmatter: {
        title: string;
        lang: 'en' | 'hu';
        logo: string;
        slug: string;
        properties: KeyValue[];
        contact: {
          name: string;
          fields: KeyValue[];
        };
        sources: Array<{ text: string; link: string }>;
      };
    };
  };
}

const gridContainer = css({
  width: '90%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  gridTemplateRows: 'auto',
});

export default ({ data }: OutletTemplateProps) => {
  const { outlet } = data;
  const { frontmatter, html } = outlet;
  return (
    <Layout>
      <Navbar
        id=""
        isHomePage={false}
        lng={frontmatter.lang}
        urlSlug={`outlets/${frontmatter.slug}`}
      />
      <div id="main-content" className="barlow">
        <TitleAndLogo {...frontmatter} />
        <Properties {...frontmatter} />
        <Description description={html} />
        <div className={gridContainer}>
          <Sources {...frontmatter} />
          <Contacts {...frontmatter.contact} />
        </div>
      </div>
      <OutletFooter lang={frontmatter.lang} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query OutletByPath($path: String!) {
    outlet: markdownRemark(
      fileAbsolutePath: { glob: "**/src/pages/outlets/*" }
      fields: { slug: { eq: $path } }
    ) {
      html
      frontmatter {
        title
        lang
        logo
        slug
        properties {
          key
          value
        }
        contact {
          name
          fields {
            key
            value
          }
        }
        sources {
          text
          link
        }
      }
    }
  }
`;
