/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Art Deco™](https://www.artd.eco)',
    },
  ],
  pages: '../pages',
  elements: ['elements'],
  blocks: ['blocks'],
  // which prefixes to keep in the main CSS
  prefixes: ['-webkit-hyphens', '-ms-hyphens'],
  // for sitemap and social-buttons
  url: 'https://art-deco.github.io/blog/',
  // required when pages are at org.github.io/pages-name
  mount: '/blog/',
  potracePath: '~/.splendid/potrace',
}

export default config