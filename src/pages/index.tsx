import React from 'react';
import { graphql } from 'gatsby';
import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from 'gatsby-link';

// Automatically detects user language and redirects to appropriate site
class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const { langs, defaultLangKey } = args.data.site.siteMetadata.languages;
      const langKey = getUserLangKey(langs, defaultLangKey);
      const homeUrl = withPrefix(`/${langKey}/`);

      (window as any).location.replace(homeUrl);
    }
  }

  render() {
    return <div />;
  }
}

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
