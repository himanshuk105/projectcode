import { data } from 'website'

export async function getPage(domain: string, slug: string) {
  if (data.domain === domain) {
    return data.pages.find((p) => p.slug === slug)
  }
  return null
}

// export const final = {
//   dataSources: [],
//   assets: [],
//   styles: [
//     {
//       selectors: ['#is7p'],
//       style: {
//         'font-size': '42px',
//         'font-weight': '700',
//         'margin-bottom': '20px',
//         color: '#0f172a',
//       },
//     },
//     {
//       selectors: ['#iso7'],
//       style: {
//         'font-size': '18px',
//         color: '#334155',
//         'margin-bottom': '30px',
//       },
//     },
//     {
//       selectors: ['#iz4n'],
//       style: {
//         display: 'inline-block',
//         padding: '12px 28px',
//         background: '#10b981',
//         color: '#fff',
//         'font-size': '16px',
//         'border-radius': '8px',
//         'text-decoration': 'none',
//       },
//     },
//     {
//       selectors: ['#iuph'],
//       style: {
//         flex: '1',
//       },
//     },
//     {
//       selectors: ['#izj5o'],
//       style: {
//         'max-width': '100%',
//         'border-radius': '12px',
//         'box-shadow': '0 4px 10px rgba(0,0,0,0.1)',
//       },
//     },
//     {
//       selectors: ['#ir80r'],
//       style: {
//         flex: '1',
//         'text-align': 'center',
//       },
//     },
//     {
//       selectors: ['#iruu'],
//       style: {
//         display: 'flex',
//         'align-items': 'center',
//         'justify-content': 'space-between',
//         padding: '80px 40px',
//         background: '#ffffff',
//         gap: '40px',
//       },
//     },
//     {
//       selectors: ['#iqii'],
//       wrapper: 1,
//       style: {},
//     },
//   ],
//   pages: [
//     {
//       frames: [
//         {
//           component: {
//             type: 'wrapper',
//             stylable: [
//               'background',
//               'background-color',
//               'background-image',
//               'background-repeat',
//               'background-attachment',
//               'background-position',
//               'background-size',
//             ],
//             attributes: {
//               id: 'iqii',
//             },
//             components: [
//               {
//                 tagName: 'section',
//                 attributes: {
//                   id: 'iruu',
//                 },
//                 components: [
//                   {
//                     attributes: {
//                       id: 'iuph',
//                     },
//                     components: [
//                       {
//                         tagName: 'h1',
//                         type: 'text',
//                         attributes: {
//                           id: 'is7p',
//                         },
//                         components: [
//                           {
//                             type: 'textnode',
//                             content: '\n              Design Without Limits\n            ',
//                           },
//                         ],
//                       },
//                       {
//                         tagName: 'p',
//                         type: 'text',
//                         attributes: {
//                           id: 'iso7',
//                         },
//                         components: [
//                           {
//                             type: 'textnode',
//                             content:
//                               '\n              Create responsive, modern websites with just a few clicks using our editor.\n            ',
//                           },
//                         ],
//                       },
//                       {
//                         type: 'link',
//                         attributes: {
//                           href: '#learn-more',
//                           id: 'iz4n',
//                         },
//                         components: [
//                           {
//                             type: 'textnode',
//                             content: '\n              Learn More\n            ',
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                   {
//                     attributes: {
//                       id: 'ir80r',
//                     },
//                     components: [
//                       {
//                         type: 'image',
//                         resizable: {
//                           ratioDefault: 1,
//                         },
//                         attributes: {
//                           src: 'https://via.placeholder.com/500x350',
//                           alt: 'Hero Illustration',
//                           id: 'izj5o',
//                         },
//                       },
//                     ],
//                   },
//                 ],
//               },
//               {
//                 tagName: 'section',
//                 classes: [
//                   'flex',
//                   'items-center',
//                   'justify-between',
//                   'px-10',
//                   'py-20',
//                   'bg-white',
//                   'gap-10',
//                 ],
//                 components: [
//                   {
//                     classes: ['flex-1'],
//                     components: [
//                       {
//                         tagName: 'h1',
//                         type: 'text',
//                         classes: ['text-5xl', 'font-bold', 'mb-5', 'text-gray-900'],
//                         components: [
//                           {
//                             type: 'textnode',
//                             content: '\n          Design Without Limits\n        ',
//                           },
//                         ],
//                       },
//                       {
//                         tagName: 'p',
//                         type: 'text',
//                         classes: ['text-lg', 'text-gray-600', 'mb-8'],
//                         components: [
//                           {
//                             type: 'textnode',
//                             content:
//                               '\n          Create responsive, modern websites with just a few clicks using our editor.\n        ',
//                           },
//                         ],
//                       },
//                       {
//                         type: 'link',
//                         classes: [
//                           'inline-block',
//                           'px-6',
//                           'py-3',
//                           'bg-green-500',
//                           'text-white',
//                           'rounded-lg',
//                           'hover:bg-green-600',
//                         ],
//                         attributes: {
//                           href: '#learn-more',
//                         },
//                         components: [
//                           {
//                             type: 'textnode',
//                             content: '\n          Learn More\n        ',
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                   {
//                     classes: ['flex-1', 'text-center'],
//                     components: [
//                       {
//                         type: 'image',
//                         resizable: {
//                           ratioDefault: 1,
//                         },
//                         classes: ['max-w-full', 'rounded-xl', 'shadow-lg'],
//                         attributes: {
//                           src: 'https://via.placeholder.com/500x350',
//                           alt: 'Hero Illustration',
//                         },
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//             head: {
//               type: 'head',
//             },
//             docEl: {
//               tagName: 'html',
//             },
//           },
//           id: 'xN9kg4Vqd5YiZBbZ',
//         },
//       ],
//       type: 'main',
//       id: '8UEIYANiiOBbf86G',
//     },
//   ],
//   symbols: [],
// }

export const final = {
  dataSources: [],
  assets: [],
  styles: [
    {
      selectors: ['#is7p'],
      style: {
        'font-size': '42px',
        'font-weight': '700',
        'margin-bottom': '20px',
        color: '#0f172a',
      },
    },
    {
      selectors: ['#iso7'],
      style: {
        'font-size': '18px',
        color: '#334155',
        'margin-bottom': '30px',
      },
    },
    {
      selectors: ['#iz4n'],
      style: {
        display: 'inline-block',
        padding: '12px 28px',
        background: '#10b981',
        color: '#fff',
        'font-size': '16px',
        'border-radius': '8px',
        'text-decoration': 'none',
      },
    },
    {
      selectors: ['#iuph'],
      style: { flex: '1' },
    },
    {
      selectors: ['#izj5o'],
      style: {
        'max-width': '100%',
        'border-radius': '12px',
        'box-shadow': '0 4px 10px rgba(0,0,0,0.1)',
      },
    },
    {
      selectors: ['#ir80r'],
      style: { flex: '1', 'text-align': 'center' },
    },
    {
      selectors: ['#iruu'],
      style: {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'space-between',
        padding: '80px 40px',
        background: '#ffffff',
        gap: '40px',
      },
    },
    {
      selectors: ['#aboutSection'],
      style: {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'min-height': '100vh',
        padding: '60px 20px',
        background: '#f9fafb',
        'text-align': 'center',
      },
    },
    {
      selectors: ['#aboutHeading'],
      style: {
        'font-size': '36px',
        'font-weight': '700',
        'margin-bottom': '20px',
        color: '#1e293b',
      },
    },
    {
      selectors: ['#aboutText'],
      style: {
        'font-size': '18px',
        color: '#475569',
        'margin-bottom': '20px',
        'max-width': '700px',
      },
    },
    {
      selectors: ['#backHome'],
      style: {
        display: 'inline-block',
        padding: '10px 24px',
        background: '#3b82f6',
        color: '#fff',
        'border-radius': '8px',
        'font-size': '16px',
        'text-decoration': 'none',
      },
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            attributes: { id: 'iqii' },
            components: [
              {
                tagName: 'section',
                attributes: { id: 'iruu' },
                components: [
                  {
                    attributes: { id: 'iuph' },
                    components: [
                      {
                        tagName: 'h1',
                        type: 'text',
                        attributes: { id: 'is7p' },
                        components: [{ type: 'textnode', content: 'Design Without Limits' }],
                      },
                      {
                        tagName: 'p',
                        type: 'text',
                        attributes: { id: 'iso7' },
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'Create responsive, modern websites with just a few clicks using our editor.',
                          },
                        ],
                      },
                      {
                        type: 'link',
                        attributes: { href: '#learn-more', id: 'iz4n' },
                        components: [{ type: 'textnode', content: 'Learn More' }],
                      },
                      {
                        type: 'link',
                        attributes: { href: 'about', id: 'navAbout' },
                        components: [{ type: 'textnode', content: 'Go to About Page' }],
                      },
                    ],
                  },
                  {
                    attributes: { id: 'ir80r' },
                    components: [
                      {
                        type: 'image',
                        resizable: { ratioDefault: 1 },
                        attributes: {
                          src: 'https://via.placeholder.com/500x350',
                          alt: 'Hero Illustration',
                          id: 'izj5o',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            head: { type: 'head' },
            docEl: { tagName: 'html' },
          },
          id: 'pageMain',
        },
      ],
      type: 'main',
      id: '8UEIYANiiOBbf86G',
    },
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            components: [
              {
                tagName: 'section',
                attributes: { id: 'aboutSection' },
                components: [
                  {
                    tagName: 'h1',
                    type: 'text',
                    attributes: { id: 'aboutHeading' },
                    components: [{ type: 'textnode', content: 'About Us' }],
                  },
                  {
                    tagName: 'p',
                    type: 'text',
                    attributes: { id: 'aboutText' },
                    components: [
                      {
                        type: 'textnode',
                        content:
                          'We are dedicated to helping businesses build modern digital experiences. Our mission is to provide tools that empower creators to design, develop, and deploy websites with ease.',
                      },
                    ],
                  },
                  {
                    tagName: 'p',
                    type: 'text',
                    attributes: { id: 'aboutText' },
                    components: [
                      {
                        type: 'textnode',
                        content:
                          'Our values: Innovation, Simplicity, and Collaboration. Together, we build the future of the web.',
                      },
                    ],
                  },
                  {
                    type: 'link',
                    attributes: { href: 'main', id: 'backHome' },
                    components: [{ type: 'textnode', content: '← Back to Home' }],
                  },
                ],
              },
            ],
          },
          id: 'pageAbout',
        },
      ],
      type: 'about',
      id: 'AboutPage123',
    },
  ],
  symbols: [],
}
