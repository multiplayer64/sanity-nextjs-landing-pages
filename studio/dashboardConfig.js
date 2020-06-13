export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ee49912d464fd2b3eef3880',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ibjmjxvu',
                  apiId: 'cbb32fdd-e7e0-431b-a337-91a1c5febc42'
                },
                {
                  buildHookId: '5ee49912f938de15e728135f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-un2gwupc',
                  apiId: '8354fdff-13ab-4561-9113-f3b5c7af84b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/multiplayer64/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-un2gwupc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
