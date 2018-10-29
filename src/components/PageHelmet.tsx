import * as React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
  <Helmet
      title={'Democrable'}
      meta={[
        { name: 'description', content: '' },
        {
          name: 'keywords',
          content:
            'demokrácia, független, média, szabad, sajtó, propaganda, álhír',
        },
      ]}
    >
      <a
        href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed|Cabin+Sketch"
        rel="stylesheet"
      />
      <a
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Helmet>
);
