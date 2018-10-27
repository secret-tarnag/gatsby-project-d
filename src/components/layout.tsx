import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import './header.css';

const Layout = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: '' },
            {
              name: 'keywords',
              content:
                'demokrácia, független, média, szabad, sajtó, propaganda, álhír',
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Cabin+Sketch"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Slabo+27px|Comfortaa|Roboto+Condensed"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="/assets/icon/designedIco.ico"
            type="image/gif"
          />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

export default Layout;
