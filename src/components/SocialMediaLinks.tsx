import * as React from 'react';
import { css, cx } from 'emotion';

const icon = css({
  width: '2.6rem',
  height: '2.6rem',
  margin: '0 0.3rem',
  ':hover': {
    opacity: 0.85,
  },
});
const github = css({
  width: '2rem',
  height: '2rem',
  position: 'relative',
  bottom: '0.4rem',
});

export default () => (
  <div>
    <a href="https://www.facebook.com/Democrable" target="_blank">
      <img
        className={icon}
        alt="Facebook logo"
        src="/assets/if_facebook_2136487.svg"
      />
    </a>
    <a href="https://twitter.com/democrable" target="_blank">
      <img
        className={icon}
        alt="Twitter logo"
        src="/assets/if_twitter_2136496.svg"
      />
    </a>
    <a href="https://www.youtube.com/channel/UCL55wcXTkwrUZvdoK5HUazQ?view_as=subscriber" target="_blank">
      <img
        className={icon}
        alt="Youtube logo"
        src="/assets/if_youtube-social-media_765195.svg"
      />
    </a>
    <a href="https://github.com/daroczypal/project-d-." target="_blank">
      <img
        className={cx(icon, github)}
        alt="Github logo"
        src="/assets/if_icon-social-github_211904.svg"
      />
    </a>
  </div>

);
