export const data = {
  id: 1,
  domain: 'novasoftlabs.com',
  name: 'NovaSoft Labs',
  pages: [
    {
      id: 1,
      slug: 'home',
      title: 'home',
      layout_json: {
        root: {
          props: {
            title: '',
          },
        },
        content: [
          {
            type: 'HeroBlock',
            props: {
              heading: 'Build Website with Us',
              subheading: 'Wow',
              buttontext: 'Visit Us',
              imageurl:
                'https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?q=80&w=1031&auto=format&fit=crop',
              buttonOther: 'Learn More',
              backgroundType: 'right',
              id: 'HeroBlock-f9cbd00a-134c-449f-8444-e323253fcfd9',
            },
          },
          {
            type: 'HeroBlockBackGround',
            props: {
              heading: 'Experience the Future of ',
              subheading: 'Join us in creating next-generation applications with blazing speed.',
              buttontext: 'Get Started',
              highlightText: ' Technology',
              id: 'HeroBlockBackGround-6b358fee-fc1f-4f6e-a5dd-100875a9b9f6',
            },
          },
        ],
        zones: {},
      },
    },
  ],
}
