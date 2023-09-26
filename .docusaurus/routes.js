import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '989'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '71b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '78a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'a58'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '3ba'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f71'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '215'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'c54'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '83b'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '481'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a61'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '243'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c7d'),
    routes: [
      {
        path: '/docs/basi-dati/sql',
        component: ComponentCreator('/docs/basi-dati/sql', '853'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/C-Sharp/lancio-di-dadi',
        component: ComponentCreator('/docs/C-Sharp/lancio-di-dadi', '05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/basi-di-dati-relazionali',
        component: ComponentCreator('/docs/category/basi-di-dati-relazionali', '8c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/c',
        component: ComponentCreator('/docs/category/c', '879'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/curriculum',
        component: ComponentCreator('/docs/category/curriculum', '4d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/docker',
        component: ComponentCreator('/docs/category/docker', '14c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/java',
        component: ComponentCreator('/docs/category/java', '364'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/linux',
        component: ComponentCreator('/docs/category/linux', 'c77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/php',
        component: ComponentCreator('/docs/category/php', '7bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/curriculum/',
        component: ComponentCreator('/docs/curriculum/', 'bf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docker/sql',
        component: ComponentCreator('/docs/docker/sql', 'b7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Linux/installazione-composer',
        component: ComponentCreator('/docs/Linux/installazione-composer', '378'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Linux/installazione-server',
        component: ComponentCreator('/docs/Linux/installazione-server', '62e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/array-chiave-valore',
        component: ComponentCreator('/docs/tutorial-basics/array-chiave-valore', '4ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/array-in-php',
        component: ComponentCreator('/docs/tutorial-basics/array-in-php', '771'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/classi-oggetti',
        component: ComponentCreator('/docs/tutorial-basics/classi-oggetti', '9c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/oggetti',
        component: ComponentCreator('/docs/tutorial-extras/oggetti', 'd98'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
