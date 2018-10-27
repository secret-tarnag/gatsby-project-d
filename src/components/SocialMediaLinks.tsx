import * as React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div>
    <a href="https://www.facebook.com/Democrable" target="_blank">
      <img
        className="social-media-icon"
        alt="Facebook logo"
        src="/assets/if_facebook_2136487.svg"
      />
    </a>
    <a href="https://twitter.com/democrable" target="_blank">
      <img
        className="social-media-icon"
        alt="Twitter logo"
        src="/assets/if_twitter_2136496.svg"
      />
    </a>
    <a href="https://www.youtube.com/channel/UCL55wcXTkwrUZvdoK5HUazQ?view_as=subscriber" target="_blank">
      <img
        className="social-media-icon"
        alt="Youtube logo"
        src="/assets/if_youtube-social-media_765195.svg"
      />
    </a>
    <a href="https://github.com/daroczypal/project-d-." target="_blank">
      <img
        id="github"
        className="social-media-icon"
        alt="Github logo"
        src="/assets/if_icon-social-github_211904.svg"
      />
    </a>
  </div>

);
