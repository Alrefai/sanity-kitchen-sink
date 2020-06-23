export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef18d62bc2d89444d8c5dff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vai4s969',
                  apiId: '8d689bb5-7274-4bce-8766-ac5b10082a58'
                },
                {
                  buildHookId: '5ef18d620a6eff49dc7a95d3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pyask1fa',
                  apiId: '51cbffb8-5be9-4fe6-9ce6-8788176ab114'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alrefai/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pyask1fa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
