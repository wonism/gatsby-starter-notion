import { globalHistory } from '@reach/router';

const id = 'disqus-sdk';

export const onPreRouteUpdate = ({ location: { pathname } }) => {
  if (pathname === '/') {
    return;
  }

  const d = document;
  const dsq = document.getElementById(id);

  if (dsq) {
    d.body.removeChild(dsq);

    if (global && global.DISQUS) {
      window.DISQUS.reset({});
    }

    try {
      delete global.DISQUS;
    } catch (error) {
      global.DISQUS = undefined;
    }
  }

  const s = d.createElement('script');

  s.src = 'https://gatsby-starter-notion.disqus.com/embed.js';
  s.id = id;
  s.setAttribute('data-timestamp', Date.now());
  d.body.appendChild(s);
}

export const onInitialClientRender = () => {
  globalHistory._onTransitionComplete();
};
