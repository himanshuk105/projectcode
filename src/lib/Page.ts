export const Data = {
  dataSources: [],
  assets: [],
  styles: [
    // Global body styles
    {
      selectors: ['body'],
      style: {
        'font-family': 'Inter, system-ui, sans-serif',
        background: '#f8fafc',
        'line-height': '1.6',
        color: '#1f2937',
        margin: '0',
        padding: '0',
      },
    },
    // Navigation Bar Styles
    {
      selectors: ['#navbar'],
      style: {
        position: 'fixed',
        top: '0',
        width: '100%',
        'z-index': '50',
        background: 'rgba(255, 255, 255, 0.95)',
        'backdrop-filter': 'blur(12px)',
        'border-bottom': '1px solid rgba(229, 231, 235, 0.3)',
        transition: 'all 0.3s ease',
      },
    },
    {
      selectors: ['#navContainer'],
      style: {
        'max-width': '1280px',
        margin: '0 auto',
        padding: '0 24px',
      },
    },
    {
      selectors: ['#navContent'],
      style: {
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
        height: '80px',
      },
    },
    {
      selectors: ['#logo'],
      style: {
        'font-size': '32px',
        'font-weight': '700',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        'text-decoration': 'none',
        cursor: 'pointer',
      },
    },
    {
      selectors: ['#navLinks'],
      style: {
        display: 'flex',
        gap: '32px',
        'list-style': 'none',
        margin: '0',
        padding: '0',
      },
    },
    {
      selectors: ['#navLink'],
      style: {
        color: '#374151',
        'text-decoration': 'none',
        'font-weight': '500',
        padding: '8px 16px',
        'border-radius': '8px',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      },
    },
    // Hero Section Styles
    {
      selectors: ['#heroSection'],
      style: {
        position: 'relative',
        'min-height': '100vh',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        overflow: 'hidden',
      },
    },
    {
      selectors: ['#heroOverlay'],
      style: {
        position: 'absolute',
        inset: '0',
        background: 'rgba(0, 0, 0, 0.2)',
      },
    },
    {
      selectors: ['#heroContent'],
      style: {
        position: 'relative',
        'z-index': '10',
        'text-align': 'center',
        color: 'white',
        padding: '0 24px',
        'max-width': '1024px',
        margin: '0 auto',
      },
    },
    {
      selectors: ['#heroTitle'],
      style: {
        'font-size': 'clamp(48px, 8vw, 112px)',
        'font-weight': '700',
        'margin-bottom': '32px',
        'line-height': '1.1',
        animation: 'fadeInUp 0.8s ease-out',
      },
    },
    {
      selectors: ['#heroGradientText'],
      style: {
        background: 'linear-gradient(45deg, #fde047, #fb923c)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        display: 'block',
      },
    },
    {
      selectors: ['#heroSubtitle'],
      style: {
        'font-size': 'clamp(18px, 3vw, 24px)',
        'margin-bottom': '48px',
        opacity: '0.9',
        'max-width': '768px',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'line-height': '1.6',
        animation: 'fadeInUp 1s ease-out 0.2s both',
      },
    },
    {
      selectors: ['#heroButtons'],
      style: {
        display: 'flex',
        'flex-direction': 'column',
        gap: '16px',
        animation: 'fadeInUp 1.2s ease-out 0.4s both',
      },
    },
    {
      selectors: ['#heroPrimaryBtn'],
      style: {
        display: 'inline-block',
        background: 'white',
        color: '#1f2937',
        padding: '16px 32px',
        'border-radius': '9999px',
        'font-weight': '600',
        'font-size': '18px',
        'text-decoration': 'none',
        transition: 'all 0.3s ease',
        'box-shadow': '0 10px 25px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        border: 'none',
      },
    },
    {
      selectors: ['#heroSecondaryBtn'],
      style: {
        display: 'inline-block',
        border: '2px solid white',
        color: 'white',
        padding: '16px 32px',
        'border-radius': '9999px',
        'font-weight': '600',
        'font-size': '18px',
        'text-decoration': 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: 'transparent',
      },
    },
    // Features Section
    {
      selectors: ['#featuresSection'],
      style: {
        padding: '80px 24px',
        background: 'white',
      },
    },
    {
      selectors: ['#featuresContainer'],
      style: {
        'max-width': '1280px',
        margin: '0 auto',
      },
    },
    {
      selectors: ['#featuresHeader'],
      style: {
        'text-align': 'center',
        'margin-bottom': '64px',
      },
    },
    {
      selectors: ['#featuresTitle'],
      style: {
        'font-size': 'clamp(36px, 5vw, 60px)',
        'font-weight': '700',
        color: '#111827',
        'margin-bottom': '24px',
      },
    },
    {
      selectors: ['#featuresSubtitle'],
      style: {
        'font-size': '20px',
        color: '#6b7280',
        'max-width': '512px',
        margin: '0 auto',
      },
    },
    {
      selectors: ['#featuresGrid'],
      style: {
        display: 'grid',
        'grid-template-columns': 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '32px',
      },
    },
    {
      selectors: ['#featureCard'],
      style: {
        'text-align': 'center',
        padding: '32px',
        'border-radius': '24px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        background: 'white',
        'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
    {
      selectors: ['#featureIcon'],
      style: {
        width: '80px',
        height: '80px',
        margin: '0 auto 24px',
        'border-radius': '20px',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '32px',
        color: 'white',
        transition: 'transform 0.3s ease',
      },
    },
    {
      selectors: ['#featureTitle'],
      style: {
        'font-size': '24px',
        'font-weight': '700',
        color: '#111827',
        'margin-bottom': '16px',
      },
    },
    {
      selectors: ['#featureText'],
      style: {
        color: '#6b7280',
        'line-height': '1.6',
        'font-size': '16px',
      },
    },
    // CTA Section
    {
      selectors: ['#ctaSection'],
      style: {
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
        color: 'white',
        'text-align': 'center',
      },
    },
    {
      selectors: ['#ctaContainer'],
      style: {
        'max-width': '1024px',
        margin: '0 auto',
      },
    },
    {
      selectors: ['#ctaTitle'],
      style: {
        'font-size': 'clamp(36px, 5vw, 60px)',
        'font-weight': '700',
        'margin-bottom': '32px',
      },
    },
    {
      selectors: ['#ctaSubtitle'],
      style: {
        'font-size': '20px',
        'margin-bottom': '40px',
        opacity: '0.9',
      },
    },
    {
      selectors: ['#ctaButton'],
      style: {
        display: 'inline-block',
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        color: 'white',
        padding: '16px 40px',
        'border-radius': '9999px',
        'font-weight': '600',
        'font-size': '18px',
        'text-decoration': 'none',
        transition: 'all 0.3s ease',
        'box-shadow': '0 10px 25px rgba(99, 102, 241, 0.3)',
        cursor: 'pointer',
        border: 'none',
      },
    },
    // Rooms Page Styles
    {
      selectors: ['#roomsSection'],
      style: {
        padding: '128px 24px 80px',
        'min-height': '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      },
    },
    {
      selectors: ['#roomsContainer'],
      style: {
        'max-width': '1280px',
        margin: '0 auto',
      },
    },
    {
      selectors: ['#roomsHeader'],
      style: {
        'text-align': 'center',
        'margin-bottom': '64px',
      },
    },
    {
      selectors: ['#roomsTitle'],
      style: {
        'font-size': 'clamp(48px, 6vw, 96px)',
        'font-weight': '700',
        color: '#111827',
        'margin-bottom': '24px',
      },
    },
    {
      selectors: ['#roomsSubtitle'],
      style: {
        'font-size': '20px',
        color: '#6b7280',
        'max-width': '768px',
        margin: '0 auto',
        'line-height': '1.6',
      },
    },
    {
      selectors: ['#roomsGrid'],
      style: {
        display: 'grid',
        'grid-template-columns': 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '32px',
      },
    },
    {
      selectors: ['#roomCard'],
      style: {
        background: 'white',
        'border-radius': '24px',
        overflow: 'hidden',
        'box-shadow': '0 10px 25px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      },
    },
    {
      selectors: ['#roomImageContainer'],
      style: {
        position: 'relative',
        height: '280px',
        overflow: 'hidden',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '64px',
        color: 'white',
      },
    },
    {
      selectors: ['#roomBadge'],
      style: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'rgba(0, 0, 0, 0.7)',
        'backdrop-filter': 'blur(8px)',
        color: 'white',
        padding: '6px 12px',
        'border-radius': '20px',
        'font-size': '12px',
        'font-weight': '500',
      },
    },
    {
      selectors: ['#roomContent'],
      style: {
        padding: '32px',
      },
    },
    {
      selectors: ['#roomName'],
      style: {
        'font-size': '28px',
        'font-weight': '700',
        color: '#111827',
        'margin-bottom': '12px',
      },
    },
    {
      selectors: ['#roomDescription'],
      style: {
        color: '#6b7280',
        'margin-bottom': '24px',
        'line-height': '1.6',
        'font-size': '16px',
      },
    },
    {
      selectors: ['#roomPrice'],
      style: {
        'font-size': '24px',
        'font-weight': '700',
        color: '#ef4444',
        'margin-bottom': '24px',
      },
    },
    {
      selectors: ['#bookBtn'],
      style: {
        display: 'inline-block',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '12px 28px',
        'border-radius': '12px',
        'font-weight': '600',
        'text-decoration': 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: 'none',
        'box-shadow': '0 4px 15px rgba(16, 185, 129, 0.3)',
      },
    },
    // Utility classes for gradients
    {
      selectors: ['#deluxeGradient'],
      style: {
        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      },
    },
    {
      selectors: ['#suiteGradient'],
      style: {
        background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
      },
    },
    {
      selectors: ['#presidentialGradient'],
      style: {
        background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      },
    },
    // Responsive styles
    {
      selectors: ['@media (min-width: 768px)'],
      style: {
        '#heroButtons': {
          'flex-direction': 'row',
          'justify-content': 'center',
          gap: '24px',
        },
        '#navLinks': {
          display: 'flex',
        },
        '#featureCard:hover': {
          transform: 'translateY(-8px)',
          'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1)',
        },
        '#roomCard:hover': {
          transform: 'translateY(-8px)',
          'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.15)',
        },
        '#heroPrimaryBtn:hover': {
          background: '#f3f4f6',
          transform: 'scale(1.05)',
        },
        '#heroSecondaryBtn:hover': {
          background: 'white',
          color: '#1f2937',
        },
        '#ctaButton:hover': {
          transform: 'scale(1.05)',
          background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
        },
        '#bookBtn:hover': {
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          transform: 'translateY(-2px)',
        },
        '#navLink:hover': {
          color: '#6366f1',
          background: '#f3f4f6',
        },
      },
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            attributes: { id: 'homeWrapper' },
            components: [
              // Navigation Bar
              {
                tagName: 'nav',
                attributes: { id: 'navbar' },
                components: [
                  {
                    attributes: { id: 'navContainer' },
                    components: [
                      {
                        attributes: { id: 'navContent' },
                        components: [
                          {
                            attributes: { id: 'logo' },
                            components: [{ type: 'textnode', content: 'Grand Hotel' }],
                          },
                          {
                            tagName: 'ul',
                            attributes: { id: 'navLinks' },
                            components: [
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    type: 'link',
                                    attributes: { href: 'main', id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Home' }],
                                  },
                                ],
                              },
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    type: 'link',
                                    attributes: { href: 'rooms', id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Rooms' }],
                                  },
                                ],
                              },
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    attributes: { id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Amenities' }],
                                  },
                                ],
                              },
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    attributes: { id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Contact' }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              // Hero Section
              {
                tagName: 'section',
                attributes: { id: 'heroSection' },
                components: [
                  {
                    attributes: { id: 'heroOverlay' },
                  },
                  {
                    attributes: { id: 'heroContent' },
                    components: [
                      {
                        tagName: 'h1',
                        attributes: { id: 'heroTitle' },
                        components: [
                          { type: 'textnode', content: 'Welcome to ' },
                          {
                            tagName: 'span',
                            attributes: { id: 'heroGradientText' },
                            components: [{ type: 'textnode', content: 'Grand Hotel' }],
                          },
                        ],
                      },
                      {
                        tagName: 'p',
                        attributes: { id: 'heroSubtitle' },
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'Experience unparalleled luxury and sophistication in the heart of the city. Where every moment becomes a cherished memory.',
                          },
                        ],
                      },
                      {
                        attributes: { id: 'heroButtons' },
                        components: [
                          {
                            type: 'link',
                            attributes: { href: 'rooms', id: 'heroPrimaryBtn' },
                            components: [{ type: 'textnode', content: 'Explore Rooms' }],
                          },
                          {
                            attributes: { id: 'heroSecondaryBtn' },
                            components: [{ type: 'textnode', content: 'View Gallery' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              // Features Section
              {
                tagName: 'section',
                attributes: { id: 'featuresSection' },
                components: [
                  {
                    attributes: { id: 'featuresContainer' },
                    components: [
                      {
                        attributes: { id: 'featuresHeader' },
                        components: [
                          {
                            tagName: 'h2',
                            attributes: { id: 'featuresTitle' },
                            components: [
                              { type: 'textnode', content: 'Why Choose ' },
                              {
                                tagName: 'span',
                                style: {
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  '-webkit-background-clip': 'text',
                                  '-webkit-text-fill-color': 'transparent',
                                },
                                components: [{ type: 'textnode', content: 'Grand Hotel' }],
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            attributes: { id: 'featuresSubtitle' },
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Discover what sets us apart and makes your stay truly exceptional',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        attributes: { id: 'featuresGrid' },
                        components: [
                          {
                            attributes: { id: 'featureCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'featureIcon',
                                  style: {
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                  },
                                },
                                components: [{ type: 'textnode', content: '🏨' }],
                              },
                              {
                                tagName: 'h3',
                                attributes: { id: 'featureTitle' },
                                components: [{ type: 'textnode', content: 'Luxury Suites' }],
                              },
                              {
                                tagName: 'p',
                                attributes: { id: 'featureText' },
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Elegantly designed rooms with premium amenities, breathtaking city views, and personalized service that exceeds expectations.',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            attributes: { id: 'featureCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'featureIcon',
                                  style: {
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                  },
                                },
                                components: [{ type: 'textnode', content: '🍽️' }],
                              },
                              {
                                tagName: 'h3',
                                attributes: { id: 'featureTitle' },
                                components: [{ type: 'textnode', content: 'Gourmet Dining' }],
                              },
                              {
                                tagName: 'p',
                                attributes: { id: 'featureText' },
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Award-winning restaurants featuring world-class chefs, exquisite cuisine, and an extensive selection of fine wines.',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            attributes: { id: 'featureCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'featureIcon',
                                  style: {
                                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                  },
                                },
                                components: [{ type: 'textnode', content: '🏊‍♂️' }],
                              },
                              {
                                tagName: 'h3',
                                attributes: { id: 'featureTitle' },
                                components: [{ type: 'textnode', content: 'Premium Facilities' }],
                              },
                              {
                                tagName: 'p',
                                attributes: { id: 'featureText' },
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Rooftop infinity pool, world-class spa, state-of-the-art fitness center, and 24/7 concierge service at your disposal.',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              // CTA Section
              {
                tagName: 'section',
                attributes: { id: 'ctaSection' },
                components: [
                  {
                    attributes: { id: 'ctaContainer' },
                    components: [
                      {
                        tagName: 'h2',
                        attributes: { id: 'ctaTitle' },
                        components: [
                          { type: 'textnode', content: 'Ready for an Unforgettable Experience?' },
                        ],
                      },
                      {
                        tagName: 'p',
                        attributes: { id: 'ctaSubtitle' },
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'Book your luxury stay today and discover what true hospitality means.',
                          },
                        ],
                      },
                      {
                        type: 'link',
                        attributes: { href: 'rooms', id: 'ctaButton' },
                        components: [{ type: 'textnode', content: 'Book Your Stay Now' }],
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
      id: 'HomePage123',
    },
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            attributes: { id: 'roomsWrapper' },
            components: [
              // Navigation Bar (same as home page)
              {
                tagName: 'nav',
                attributes: { id: 'navbar' },
                components: [
                  {
                    attributes: { id: 'navContainer' },
                    components: [
                      {
                        attributes: { id: 'navContent' },
                        components: [
                          {
                            attributes: { id: 'logo' },
                            components: [{ type: 'textnode', content: 'Grand Hotel' }],
                          },
                          {
                            tagName: 'ul',
                            attributes: { id: 'navLinks' },
                            components: [
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    type: 'link',
                                    attributes: { href: 'main', id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Home' }],
                                  },
                                ],
                              },
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    type: 'link',
                                    attributes: { href: 'rooms', id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Rooms' }],
                                  },
                                ],
                              },
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    attributes: { id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Amenities' }],
                                  },
                                ],
                              },
                              {
                                tagName: 'li',
                                components: [
                                  {
                                    attributes: { id: 'navLink' },
                                    components: [{ type: 'textnode', content: 'Contact' }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              // Rooms Section
              {
                tagName: 'section',
                attributes: { id: 'roomsSection' },
                components: [
                  {
                    attributes: { id: 'roomsContainer' },
                    components: [
                      {
                        attributes: { id: 'roomsHeader' },
                        components: [
                          {
                            tagName: 'h1',
                            attributes: { id: 'roomsTitle' },
                            components: [
                              { type: 'textnode', content: 'Our ' },
                              {
                                tagName: 'span',
                                style: {
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  '-webkit-background-clip': 'text',
                                  '-webkit-text-fill-color': 'transparent',
                                },
                                components: [{ type: 'textnode', content: 'Luxury Suites' }],
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            attributes: { id: 'roomsSubtitle' },
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Choose from our collection of meticulously designed rooms and suites, each crafted to provide the ultimate in comfort and elegance.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        attributes: { id: 'roomsGrid' },
                        components: [
                          // Deluxe Room
                          {
                            attributes: { id: 'roomCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'roomImageContainer',
                                  style: {
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                                  },
                                },
                                components: [
                                  { type: 'textnode', content: '🏙️' },
                                  {
                                    attributes: { id: 'roomBadge' },
                                    components: [{ type: 'textnode', content: 'Popular Choice' }],
                                  },
                                ],
                              },
                              {
                                attributes: { id: 'roomContent' },
                                components: [
                                  {
                                    tagName: 'h3',
                                    attributes: { id: 'roomName' },
                                    components: [{ type: 'textnode', content: 'Deluxe Room' }],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomDescription' },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content:
                                          'Spacious and elegantly designed room with king-size bed, premium city views, modern amenities, and marble bathroom with luxury toiletries.',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomPrice' },
                                    components: [{ type: 'textnode', content: '$299/night' }],
                                  },
                                  {
                                    type: 'link',
                                    attributes: { href: '#book', id: 'bookBtn' },
                                    components: [{ type: 'textnode', content: 'Book Now' }],
                                  },
                                ],
                              },
                            ],
                          },
                          // Executive Suite
                          {
                            attributes: { id: 'roomCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'roomImageContainer',
                                  style: {
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
                                  },
                                },
                                components: [
                                  { type: 'textnode', content: '✨' },
                                  {
                                    attributes: { id: 'roomBadge' },
                                    components: [
                                      { type: 'textnode', content: 'Business Preferred' },
                                    ],
                                  },
                                ],
                              },
                              {
                                attributes: { id: 'roomContent' },
                                components: [
                                  {
                                    tagName: 'h3',
                                    attributes: { id: 'roomName' },
                                    components: [{ type: 'textnode', content: 'Executive Suite' }],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomDescription' },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content:
                                          'Luxurious suite featuring separate living area, executive workspace, premium furnishings, panoramic city views, and complimentary breakfast.',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomPrice' },
                                    components: [{ type: 'textnode', content: '$499/night' }],
                                  },
                                  {
                                    type: 'link',
                                    attributes: { href: '#book', id: 'bookBtn' },
                                    components: [{ type: 'textnode', content: 'Book Now' }],
                                  },
                                ],
                              },
                            ],
                          },
                          // Presidential Suite
                          {
                            attributes: { id: 'roomCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'roomImageContainer',
                                  style: {
                                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                                  },
                                },
                                components: [
                                  { type: 'textnode', content: '👑' },
                                  {
                                    attributes: { id: 'roomBadge' },
                                    components: [{ type: 'textnode', content: 'Ultimate Luxury' }],
                                  },
                                ],
                              },
                              {
                                attributes: { id: 'roomContent' },
                                components: [
                                  {
                                    tagName: 'h3',
                                    attributes: { id: 'roomName' },
                                    components: [
                                      { type: 'textnode', content: 'Presidential Suite' },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomDescription' },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content:
                                          'The pinnacle of luxury with private terrace, marble bathroom with jacuzzi, personal butler service, dining room, and exclusive amenities.',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomPrice' },
                                    components: [{ type: 'textnode', content: '$1,299/night' }],
                                  },
                                  {
                                    type: 'link',
                                    attributes: { href: '#book', id: 'bookBtn' },
                                    components: [{ type: 'textnode', content: 'Book Now' }],
                                  },
                                ],
                              },
                            ],
                          },
                          // Garden Villa
                          {
                            attributes: { id: 'roomCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'roomImageContainer',
                                  style: {
                                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                                  },
                                },
                                components: [
                                  { type: 'textnode', content: '🌿' },
                                  {
                                    attributes: { id: 'roomBadge' },
                                    components: [{ type: 'textnode', content: 'Garden View' }],
                                  },
                                ],
                              },
                              {
                                attributes: { id: 'roomContent' },
                                components: [
                                  {
                                    tagName: 'h3',
                                    attributes: { id: 'roomName' },
                                    components: [{ type: 'textnode', content: 'Garden Villa' }],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomDescription' },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content:
                                          'Serene villa overlooking lush gardens with private entrance, outdoor seating area, spacious bedroom, and tranquil atmosphere perfect for relaxation.',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomPrice' },
                                    components: [{ type: 'textnode', content: '$699/night' }],
                                  },
                                  {
                                    type: 'link',
                                    attributes: { href: '#book', id: 'bookBtn' },
                                    components: [{ type: 'textnode', content: 'Book Now' }],
                                  },
                                ],
                              },
                            ],
                          },
                          // Penthouse Suite
                          {
                            attributes: { id: 'roomCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'roomImageContainer',
                                  style: {
                                    background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                                  },
                                },
                                components: [
                                  { type: 'textnode', content: '🏢' },
                                  {
                                    attributes: { id: 'roomBadge' },
                                    components: [{ type: 'textnode', content: 'Top Floor' }],
                                  },
                                ],
                              },
                              {
                                attributes: { id: 'roomContent' },
                                components: [
                                  {
                                    tagName: 'h3',
                                    attributes: { id: 'roomName' },
                                    components: [{ type: 'textnode', content: 'Penthouse Suite' }],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomDescription' },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content:
                                          'Exclusive top-floor suite with 360-degree city views, private elevator access, rooftop terrace, full kitchen, and unmatched luxury amenities.',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomPrice' },
                                    components: [{ type: 'textnode', content: '$1,899/night' }],
                                  },
                                  {
                                    type: 'link',
                                    attributes: { href: '#book', id: 'bookBtn' },
                                    components: [{ type: 'textnode', content: 'Book Now' }],
                                  },
                                ],
                              },
                            ],
                          },
                          // Romantic Suite
                          {
                            attributes: { id: 'roomCard' },
                            components: [
                              {
                                attributes: {
                                  id: 'roomImageContainer',
                                  style: {
                                    background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                                  },
                                },
                                components: [
                                  { type: 'textnode', content: '💕' },
                                  {
                                    attributes: { id: 'roomBadge' },
                                    components: [{ type: 'textnode', content: 'Couples Retreat' }],
                                  },
                                ],
                              },
                              {
                                attributes: { id: 'roomContent' },
                                components: [
                                  {
                                    tagName: 'h3',
                                    attributes: { id: 'roomName' },
                                    components: [{ type: 'textnode', content: 'Romantic Suite' }],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomDescription' },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content:
                                          'Intimate suite designed for couples with private hot tub, fireplace, champagne service, rose petal turndown, and breathtaking sunset views.',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    attributes: { id: 'roomPrice' },
                                    components: [{ type: 'textnode', content: '$899/night' }],
                                  },
                                  {
                                    type: 'link',
                                    attributes: { href: '#book', id: 'bookBtn' },
                                    components: [{ type: 'textnode', content: 'Book Now' }],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            head: { type: 'head' },
            docEl: { tagName: 'html' },
          },
          id: 'pageRooms',
        },
      ],
      type: 'rooms',
      id: 'RoomsPage123',
    },
  ],
  symbols: [],
}

export const data1 = {
  dataSources: [],
  assets: [],
  styles: [
    {
      selectors: ['body'],
      style: {
        'font-family': 'Inter, system-ui, sans-serif',
        background: '#0f172a',
        'line-height': '1.6',
        color: '#f8fafc',
        margin: '0',
        padding: '0',
      },
    },
    {
      selectors: ['#heroGradient'],
      style: {
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      },
    },
    {
      selectors: ['#strengthGradient'],
      style: {
        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      },
    },
    {
      selectors: ['#fitnessGradient'],
      style: {
        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      },
    },
    {
      selectors: [
        {
          name: '@media-(min-width:-768px)',
          label: '@media (min-width: 768px)',
        },
      ],
      style: {
        '#heroButtons': {
          'flex-direction': 'row',
          'justify-content': 'center',
          gap: '24px',
        },
        '#navLinks': {
          display: 'flex',
        },
        '#featureCard:hover': {
          transform: 'translateY(-8px)',
          'box-shadow': '0 20px 40px rgba(239, 68, 68, 0.3)',
        },
        '#programCard:hover': {
          transform: 'translateY(-8px)',
          'box-shadow': '0 20px 40px rgba(139, 92, 246, 0.3)',
        },
        '#heroPrimaryBtn:hover': {
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          transform: 'scale(1.05)',
        },
        '#heroSecondaryBtn:hover': {
          background: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
        },
        '#ctaButton:hover': {
          transform: 'scale(1.05)',
          background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        },
        '#joinBtn:hover': {
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          transform: 'translateY(-2px)',
        },
        '#navLink:hover': {
          color: '#ef4444',
          background: 'rgba(239, 68, 68, 0.1)',
        },
      },
    },
    {
      selectors: ['#mainWrapper'],
      wrapper: 1,
      style: {},
    },
  ],
  pages: [
    {
      name: 'Home - Elite Fitness',
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
              'width',
              'height',
            ],
            attributes: {
              id: 'mainWrapper',
            },
            components: [
              {
                type: 'comment',
                content: ' Navigation Header ',
              },
              {
                tagName: 'nav',
                classes: [
                  'fixed',
                  'top-0',
                  'w-full',
                  'z-50',
                  'bg-slate-900',
                  'bg-opacity-95',
                  'backdrop-blur-sm',
                  'border-b',
                  'border-red-500',
                  'border-opacity-30',
                ],
                components: [
                  {
                    classes: [
                      'container',
                      'mx-auto',
                      'px-6',
                      'py-4',
                      'flex',
                      'justify-between',
                      'items-center',
                    ],
                    components: [
                      {
                        tagName: 'h2',
                        type: 'text',
                        classes: ['text-2xl', 'font-bold', 'text-red-500'],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Elite Fitness',
                          },
                        ],
                      },
                      {
                        classes: ['hidden', 'md:flex', 'space-x-8'],
                        attributes: {
                          id: 'navLinks',
                        },
                        components: [
                          {
                            type: 'link',
                            classes: [
                              'text-white',
                              'hover:text-red-500',
                              'px-3',
                              'py-2',
                              'rounded-lg',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#home',
                              id: 'navLink',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Home',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'text-white',
                              'hover:text-red-500',
                              'px-3',
                              'py-2',
                              'rounded-lg',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#programs',
                              id: 'navLink',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Programs',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'text-white',
                              'hover:text-red-500',
                              'px-3',
                              'py-2',
                              'rounded-lg',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#about',
                              id: 'navLink',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'About',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'bg-red-500',
                              'text-white',
                              'px-6',
                              'py-2',
                              'rounded-lg',
                              'hover:bg-red-600',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#join',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Join Now',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'comment',
                content: ' Hero Section 1 - Main Landing ',
              },
              {
                tagName: 'section',
                classes: [
                  'flex',
                  'flex-col',
                  'md:flex-row',
                  'items-center',
                  'justify-between',
                  'px-6',
                  'md:px-16',
                  'lg:px-24',
                  'py-32',
                  'pt-40',
                  'gap-12',
                  'min-h-screen',
                ],
                attributes: {
                  id: 'heroGradient',
                },
                components: [
                  {
                    type: 'comment',
                    content: ' Text Content ',
                  },
                  {
                    classes: ['flex-1', 'text-center', 'md:text-left', 'z-10'],
                    components: [
                      {
                        tagName: 'h1',
                        type: 'text',
                        classes: [
                          'text-5xl',
                          'lg:text-7xl',
                          'font-black',
                          'text-white',
                          'mb-6',
                          'leading-tight',
                          'drop-shadow-2xl',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'TRANSFORM YOUR BODY',
                          },
                        ],
                      },
                      {
                        tagName: 'p',
                        type: 'text',
                        classes: [
                          'text-xl',
                          'text-red-100',
                          'mb-10',
                          'max-w-lg',
                          'mx-auto',
                          'md:mx-0',
                          'font-medium',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'Join Elite Fitness and unlock your potential with world-class equipment, expert trainers, and personalized workout programs.',
                          },
                        ],
                      },
                      {
                        classes: [
                          'flex',
                          'flex-col',
                          'md:flex-row',
                          'gap-6',
                          'justify-center',
                          'md:justify-start',
                        ],
                        attributes: {
                          id: 'heroButtons',
                        },
                        components: [
                          {
                            type: 'link',
                            classes: [
                              'inline-block',
                              'bg-white',
                              'text-red-600',
                              'text-lg',
                              'font-bold',
                              'px-10',
                              'py-4',
                              'rounded-xl',
                              'shadow-2xl',
                              'transition',
                              'duration-300',
                              'transform',
                            ],
                            attributes: {
                              href: '#membership',
                              id: 'heroPrimaryBtn',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Start Your Journey',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'inline-block',
                              'border-2',
                              'border-white',
                              'text-white',
                              'text-lg',
                              'font-semibold',
                              'px-10',
                              'py-4',
                              'rounded-xl',
                              'transition',
                              'duration-300',
                              'hover:bg-white',
                              'hover:text-red-600',
                            ],
                            attributes: {
                              href: '#tour',
                              id: 'heroSecondaryBtn',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Take a Tour',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'comment',
                    content: ' Hero Image ',
                  },
                  {
                    classes: ['flex-1', 'flex', 'justify-center', 'relative'],
                    components: [
                      {
                        type: 'image',
                        resizable: {
                          ratioDefault: 1,
                        },
                        classes: [
                          'max-w-full',
                          'h-auto',
                          'rounded-2xl',
                          'shadow-2xl',
                          'transform',
                          'hover:scale-105',
                          'transition',
                          'duration-500',
                        ],
                        attributes: {
                          src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                          alt: 'Fitness Training',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: 'comment',
                content: ' Features Section ',
              },
              {
                tagName: 'section',
                classes: ['py-20', 'px-6', 'md:px-16', 'lg:px-24', 'bg-slate-800'],
                components: [
                  {
                    tagName: 'h2',
                    type: 'text',
                    classes: ['text-4xl', 'font-bold', 'text-center', 'text-white', 'mb-16'],
                    components: [
                      {
                        type: 'textnode',
                        content: 'Why Choose Elite Fitness?',
                      },
                    ],
                  },
                  {
                    classes: ['grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8'],
                    components: [
                      {
                        classes: [
                          'bg-slate-700',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-xl',
                          'transition',
                          'duration-300',
                        ],
                        attributes: {
                          id: 'featureCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-red-500', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'Expert Trainers',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-gray-300'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Certified professionals ready to guide your fitness journey with personalized training programs.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-slate-700',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-xl',
                          'transition',
                          'duration-300',
                        ],
                        attributes: {
                          id: 'featureCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-red-500', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'Modern Equipment',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-gray-300'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'State-of-the-art fitness equipment and facilities to maximize your workout potential.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-slate-700',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-xl',
                          'transition',
                          'duration-300',
                        ],
                        attributes: {
                          id: 'featureCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-red-500', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: '24/7 Access',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-gray-300'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Train on your schedule with round-the-clock gym access for ultimate flexibility.',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            head: {
              type: 'head',
            },
            docEl: {
              tagName: 'html',
            },
          },
          id: 'homePageFrame',
        },
      ],
      id: 'homePage',
    },
    {
      name: 'Programs - Elite Fitness',
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
            attributes: {
              id: 'programsWrapper',
            },
            components: [
              {
                type: 'comment',
                content: ' Navigation Header ',
              },
              {
                tagName: 'nav',
                classes: [
                  'fixed',
                  'top-0',
                  'w-full',
                  'z-50',
                  'bg-slate-900',
                  'bg-opacity-95',
                  'backdrop-blur-sm',
                  'border-b',
                  'border-purple-500',
                  'border-opacity-30',
                ],
                components: [
                  {
                    classes: [
                      'container',
                      'mx-auto',
                      'px-6',
                      'py-4',
                      'flex',
                      'justify-between',
                      'items-center',
                    ],
                    components: [
                      {
                        tagName: 'h2',
                        type: 'text',
                        classes: ['text-2xl', 'font-bold', 'text-purple-500'],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Elite Fitness',
                          },
                        ],
                      },
                      {
                        classes: ['hidden', 'md:flex', 'space-x-8'],
                        components: [
                          {
                            type: 'link',
                            classes: [
                              'text-white',
                              'hover:text-purple-500',
                              'px-3',
                              'py-2',
                              'rounded-lg',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#home',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Home',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'text-purple-500',
                              'px-3',
                              'py-2',
                              'rounded-lg',
                              'bg-purple-500',
                              'bg-opacity-20',
                            ],
                            attributes: {
                              href: '#programs',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Programs',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'text-white',
                              'hover:text-purple-500',
                              'px-3',
                              'py-2',
                              'rounded-lg',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#about',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'About',
                              },
                            ],
                          },
                          {
                            type: 'link',
                            classes: [
                              'bg-purple-500',
                              'text-white',
                              'px-6',
                              'py-2',
                              'rounded-lg',
                              'hover:bg-purple-600',
                              'transition',
                              'duration-300',
                            ],
                            attributes: {
                              href: '#join',
                              id: 'joinBtn',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Join Now',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'comment',
                content: ' Hero Section 2 - Programs Page ',
              },
              {
                tagName: 'section',
                classes: [
                  'flex',
                  'flex-col',
                  'md:flex-row',
                  'items-center',
                  'justify-between',
                  'px-6',
                  'md:px-16',
                  'lg:px-24',
                  'py-32',
                  'pt-40',
                  'gap-12',
                  'min-h-screen',
                ],
                attributes: {
                  id: 'fitnessGradient',
                },
                components: [
                  {
                    type: 'comment',
                    content: ' Text Content ',
                  },
                  {
                    classes: ['flex-1', 'text-center', 'md:text-left', 'z-10'],
                    components: [
                      {
                        tagName: 'h1',
                        type: 'text',
                        classes: [
                          'text-5xl',
                          'lg:text-7xl',
                          'font-black',
                          'text-white',
                          'mb-6',
                          'leading-tight',
                          'drop-shadow-2xl',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'ELITE PROGRAMS',
                          },
                        ],
                      },
                      {
                        tagName: 'p',
                        type: 'text',
                        classes: [
                          'text-xl',
                          'text-purple-100',
                          'mb-10',
                          'max-w-lg',
                          'mx-auto',
                          'md:mx-0',
                          'font-medium',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'Discover specialized training programs designed to help you achieve your fitness goals faster and more effectively.',
                          },
                        ],
                      },
                      {
                        type: 'link',
                        classes: [
                          'inline-block',
                          'bg-white',
                          'text-purple-600',
                          'text-lg',
                          'font-bold',
                          'px-10',
                          'py-4',
                          'rounded-xl',
                          'shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                          'hover:scale-105',
                        ],
                        attributes: {
                          href: '#explore-programs',
                          id: 'ctaButton',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Explore Programs',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'comment',
                    content: ' Hero Image ',
                  },
                  {
                    classes: ['flex-1', 'flex', 'justify-center', 'relative'],
                    components: [
                      {
                        type: 'image',
                        resizable: {
                          ratioDefault: 1,
                        },
                        classes: [
                          'max-w-full',
                          'h-auto',
                          'rounded-2xl',
                          'shadow-2xl',
                          'transform',
                          'hover:scale-105',
                          'transition',
                          'duration-500',
                        ],
                        attributes: {
                          src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                          alt: 'Fitness Programs',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: 'comment',
                content: ' Programs Grid Section ',
              },
              {
                tagName: 'section',
                classes: ['py-20', 'px-6', 'md:px-16', 'lg:px-24', 'bg-slate-800'],
                components: [
                  {
                    tagName: 'h2',
                    type: 'text',
                    classes: ['text-4xl', 'font-bold', 'text-center', 'text-white', 'mb-16'],
                    components: [
                      {
                        type: 'textnode',
                        content: 'Our Training Programs',
                      },
                    ],
                  },
                  {
                    classes: ['grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8'],
                    components: [
                      {
                        classes: [
                          'bg-gradient-to-br',
                          'from-orange-500',
                          'to-red-600',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                        ],
                        attributes: {
                          id: 'programCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-white', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'Strength Training',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-orange-100', 'mb-6'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Build muscle, increase power, and transform your physique with our comprehensive strength training program.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-gradient-to-br',
                          'from-blue-500',
                          'to-cyan-600',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                        ],
                        attributes: {
                          id: 'programCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-white', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'Cardio Blast',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-blue-100', 'mb-6'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'High-intensity cardiovascular workouts designed to burn fat and improve endurance.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-gradient-to-br',
                          'from-green-500',
                          'to-emerald-600',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                        ],
                        attributes: {
                          id: 'programCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-white', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'Yoga & Flexibility',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-green-100', 'mb-6'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Improve flexibility, balance, and mental wellness through our guided yoga and stretching sessions.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-gradient-to-br',
                          'from-purple-500',
                          'to-pink-600',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                        ],
                        attributes: {
                          id: 'programCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-white', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'HIIT Bootcamp',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-purple-100', 'mb-6'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'High-intensity interval training that maximizes calorie burn and builds functional strength.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-gradient-to-br',
                          'from-yellow-500',
                          'to-orange-600',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                        ],
                        attributes: {
                          id: 'programCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-white', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'Personal Training',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-yellow-100', 'mb-6'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'One-on-one coaching tailored to your specific goals and fitness level for maximum results.',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'bg-gradient-to-br',
                          'from-indigo-500',
                          'to-purple-600',
                          'p-8',
                          'rounded-xl',
                          'text-center',
                          'hover:shadow-2xl',
                          'transition',
                          'duration-300',
                          'transform',
                        ],
                        attributes: {
                          id: 'programCard',
                        },
                        components: [
                          {
                            tagName: 'h3',
                            type: 'text',
                            classes: ['text-2xl', 'font-bold', 'text-white', 'mb-4'],
                            components: [
                              {
                                type: 'textnode',
                                content: 'CrossFit Elite',
                              },
                            ],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            classes: ['text-indigo-100', 'mb-6'],
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Functional fitness combining strength, cardio, and agility for complete athletic development.',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'comment',
                content: ' Call to Action Section ',
              },
              {
                tagName: 'section',
                classes: ['py-20', 'px-6', 'md:px-16', 'lg:px-24', 'bg-slate-900', 'text-center'],
                components: [
                  {
                    tagName: 'h2',
                    type: 'text',
                    classes: ['text-4xl', 'font-bold', 'text-white', 'mb-6'],
                    components: [
                      {
                        type: 'textnode',
                        content: 'Ready to Start Your Fitness Journey?',
                      },
                    ],
                  },
                  {
                    tagName: 'p',
                    type: 'text',
                    classes: ['text-xl', 'text-gray-300', 'mb-10', 'max-w-2xl', 'mx-auto'],
                    components: [
                      {
                        type: 'textnode',
                        content:
                          'Join thousands of members who have transformed their lives at Elite Fitness. Your journey to a stronger, healthier you starts here.',
                      },
                    ],
                  },
                  {
                    type: 'link',
                    classes: [
                      'inline-block',
                      'bg-gradient-to-r',
                      'from-purple-500',
                      'to-pink-600',
                      'text-white',
                      'text-lg',
                      'font-bold',
                      'px-12',
                      'py-4',
                      'rounded-xl',
                      'shadow-2xl',
                      'transition',
                      'duration-300',
                      'transform',
                      'hover:scale-105',
                    ],
                    attributes: {
                      href: '#membership',
                    },
                    components: [
                      {
                        type: 'textnode',
                        content: 'Get Membership Now',
                      },
                    ],
                  },
                ],
              },
            ],
            head: {
              type: 'head',
            },
            docEl: {
              tagName: 'html',
            },
          },
          id: 'programsPageFrame',
        },
      ],
      id: 'programsPage',
    },
  ],
  symbols: [],
}

export const Dynamic = {
  dataSources: [],
  assets: [],
  styles: [
    {
      selectors: ['#i01f'],
      wrapper: 1,
      style: {},
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
            attributes: {
              id: 'i01f',
            },
            components: [
              {
                type: 'product-list',
                attributes: {
                  'data-limit': '2',
                  id: 'ifr5',
                },
              },
            ],
            head: {
              type: 'head',
            },
            docEl: {
              tagName: 'html',
            },
          },
          id: 'CxNLIwP4d2GujUH8',
        },
      ],
      type: 'main',
      id: 'LT3g8RUxPZ7xHoeb',
    },
  ],
  symbols: [],
}

export const dynamic2 = {
  dataSources: [],
  assets: [],
  styles: [
    {
      selectors: ['#iktj'],
      style: {},
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
            components: [
              {
                type: 'navbar',
                classes: [
                  'sticky',
                  'top-0',
                  'z-50',
                  'flex',
                  'justify-between',
                  'items-center',
                  'px-6',
                  'md:px-8',
                  'py-4',
                  'bg-white/95',
                  'backdrop-blur-md',
                  'border-b',
                  'border-gray-100',
                  'transition-all',
                  'duration-300',
                  'relative',
                ],
                attributes: {},
                components: [
                  {
                    type: 'navbar-logo',
                    classes: [
                      'text-2xl',
                      'font-bold',
                      'text-blue-600',
                      'cursor-pointer',
                      'select-none',
                      'flex',
                      'items-center',
                      'transition-all',
                      'duration-300',
                      'hover:text-blue-700',
                      'hover:scale-105',
                    ],
                    attributes: {},
                    components: [
                      {
                        type: 'textnode',
                        content: 'Brand Logo',
                      },
                    ],
                  },
                  {
                    type: 'navbar-links',
                    classes: ['hidden', 'md:flex', 'items-center', 'space-x-1'],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-link',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'About',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'About',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Services',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Services',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Contact',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Contact',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-actions',
                    classes: ['hidden', 'md:flex', 'items-center', 'space-x-4'],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-cta',
                        classes: [
                          'bg-gradient-to-r',
                          'from-blue-600',
                          'to-blue-700',
                          'text-white',
                          'px-6',
                          'py-2.5',
                          'rounded-xl',
                          'font-semibold',
                          'text-sm',
                          'cursor-pointer',
                          'transition-all',
                          'duration-300',
                          'shadow-lg',
                          'shadow-blue-600/30',
                          'hover:-translate-y-0.5',
                          'hover:shadow-xl',
                          'hover:shadow-blue-600/40',
                          'hover:from-blue-700',
                          'hover:to-blue-800',
                        ],
                        attributes: {},
                        components: [
                          {
                            type: 'textnode',
                            content: 'Get Started',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-toggle',
                    classes: [
                      'md:hidden',
                      'flex',
                      'flex-col',
                      'justify-center',
                      'items-center',
                      'w-6',
                      'h-6',
                      'cursor-pointer',
                      'group',
                    ],
                    attributes: {},
                  },
                  {
                    type: 'navbar-mobile-menu',
                    classes: [
                      'hidden',
                      'md:hidden',
                      'absolute',
                      'top-full',
                      'left-0',
                      'w-full',
                      'bg-white',
                      'shadow-xl',
                      'rounded-b-2xl',
                      'p-6',
                      'space-y-2',
                      'animate-in',
                      'slide-in-from-top-2',
                      'duration-300',
                    ],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-link',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'About',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'About',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Services',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Services',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Contact',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Contact',
                          },
                        ],
                      },
                      {
                        type: 'navbar-cta',
                        classes: [
                          'w-full',
                          'mt-4',
                          'bg-gradient-to-r',
                          'from-blue-600',
                          'to-blue-700',
                          'text-white',
                          'px-6',
                          'py-3',
                          'rounded-xl',
                          'font-semibold',
                          'text-sm',
                          'cursor-pointer',
                          'transition-all',
                          'duration-300',
                          'shadow-lg',
                          'shadow-blue-600/30',
                        ],
                        attributes: {},
                        components: [
                          {
                            type: 'textnode',
                            content: 'Get Started',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'modern_hero_image',
                classes: [
                  'relative',
                  'w-full',
                  'min-h-screen',
                  'flex',
                  'items-center',
                  'justify-center',
                  'text-center',
                  'bg-cover',
                  'bg-center',
                  'bg-no-repeat',
                  'text-black',
                  'bg-[url(https://images.unsplash.com/photo-1618005198919-5_ZuxsChDng?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)]',
                ],
                attributes: {
                  id: 'iktj',
                },
                components: [
                  {
                    classes: ['bg-black/60', 'p-10', 'rounded-xl', 'max-w-4xl', 'mx-auto'],
                    components: [
                      {
                        tagName: 'h1',
                        type: 'text',
                        content: 'Innovating the Future of Business',
                        classes: [
                          'text-4xl',
                          'md:text-6xl',
                          'font-extrabold',
                          'mb-6',
                          'leading-tight',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Innovating the Future of Business',
                          },
                        ],
                      },
                      {
                        tagName: 'p',
                        type: 'text',
                        content:
                          'Discover how cutting-edge technology and design come together to elevate your digital presence.',
                        classes: ['text-lg', 'md:text-xl', 'mb-8', 'text-gray-200'],
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'Discover how cutting-edge technology and design come together to elevate your digital presence.',
                          },
                        ],
                      },
                      {
                        type: 'link',
                        content: 'Get Started',
                        classes: [
                          'bg-green-500',
                          'hover:bg-green-600',
                          'text-white',
                          'font-medium',
                          'py-3',
                          'px-8',
                          'rounded-lg',
                          'shadow-lg',
                          'transition',
                          'duration-200',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Get Started',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'modern_hero_split',
                classes: [
                  'relative',
                  'w-full',
                  'py-20',
                  'px-6',
                  'md:px-12',
                  'lg:px-24',
                  'grid',
                  'md:grid-cols-2',
                  'items-center',
                  'gap-12',
                ],
                components: [
                  {
                    classes: ['flex', 'flex-col', 'justify-center'],
                    components: [
                      {
                        tagName: 'p',
                        type: 'text',
                        content: 'Transform Your Business',
                        classes: [
                          'text-sm',
                          'md:text-base',
                          'font-semibold',
                          'text-indigo-600',
                          'uppercase',
                          'tracking-wide',
                          'mb-4',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Transform Your Business',
                          },
                        ],
                      },
                      {
                        tagName: 'h1',
                        type: 'text',
                        content: 'Modern Solutions for a Digital World',
                        classes: [
                          'text-3xl',
                          'md:text-5xl',
                          'font-extrabold',
                          'text-gray-900',
                          'leading-tight',
                          'mb-6',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Modern Solutions for a Digital World',
                          },
                        ],
                      },
                      {
                        tagName: 'p',
                        type: 'text',
                        content:
                          'From websites to mobile apps, we deliver tailored digital solutions that help businesses grow, scale, and succeed globally.',
                        classes: [
                          'text-base',
                          'md:text-lg',
                          'text-gray-700',
                          'leading-relaxed',
                          'mb-8',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content:
                              'From websites to mobile apps, we deliver tailored digital solutions that help businesses grow, scale, and succeed globally.',
                          },
                        ],
                      },
                      {
                        type: 'link',
                        content: 'Contact Us',
                        classes: [
                          'bg-indigo-600',
                          'hover:bg-indigo-700',
                          'text-white',
                          'font-medium',
                          'py-3',
                          'px-6',
                          'rounded-lg',
                          'shadow-md',
                          'transition',
                          'duration-200',
                        ],
                        components: [
                          {
                            type: 'textnode',
                            content: 'Contact Us',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    classes: ['w-full', 'h-96', 'rounded-xl', 'overflow-hidden', 'shadow-lg'],
                    components: [
                      {
                        type: 'image',
                        resizable: {
                          ratioDefault: 1,
                        },
                        classes: ['w-full', 'h-full', 'object-cover'],
                        attributes: {
                          src: 'https://images.unsplash.com/photo-1618005198919-5_ZuxsChDng?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                          alt: 'Abstract digital landscape',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            head: {
              type: 'head',
            },
            docEl: {
              tagName: 'html',
            },
          },
          id: '8Vsoa9AERNqxfKOv',
        },
      ],
      type: 'main',
      id: 'rTDd9TNONwAeMGCZ',
    },
  ],
  symbols: [],
}

export const dynamic3 = {
  dataSources: [],
  assets: [],
  styles: [
    {
      selectors: ['#iso3c'],
      mediaText: '(max-width: 480px)',
      atRuleType: 'media',
      style: {},
    },
    {
      selectors: ['#ixbnd'],
      mediaText: '(max-width: 480px)',
      atRuleType: 'media',
      style: {},
    },
    {
      selectors: ['#ixbnd'],
      style: {},
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
            components: [
              {
                type: 'navbar',
                classes: [
                  'sticky',
                  'top-0',
                  'z-50',
                  'flex',
                  'justify-between',
                  'items-center',
                  'px-6',
                  'md:px-8',
                  'py-4',
                  'bg-white/95',
                  'backdrop-blur-md',
                  'border-b',
                  'border-gray-100',
                  'transition-all',
                  'duration-300',
                  'relative',
                ],
                attributes: {},
                components: [
                  {
                    type: 'navbar-logo',
                    classes: [
                      'text-2xl',
                      'font-bold',
                      'text-blue-600',
                      'cursor-pointer',
                      'select-none',
                      'flex',
                      'items-center',
                      'transition-all',
                      'duration-300',
                      'hover:text-blue-700',
                      'hover:scale-105',
                    ],
                    attributes: {},
                    components: [
                      {
                        type: 'textnode',
                        content: 'Brand Logo',
                      },
                    ],
                  },
                  {
                    type: 'navbar-links',
                    classes: ['hidden', 'md:flex', 'items-center', 'space-x-1'],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-link',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'About',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'About',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Services',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Services',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Contact',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Contact',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-actions',
                    classes: ['hidden', 'md:flex', 'items-center', 'space-x-4'],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-cta',
                        classes: [
                          'bg-gradient-to-r',
                          'from-blue-600',
                          'to-blue-700',
                          'text-white',
                          'px-6',
                          'py-2.5',
                          'rounded-xl',
                          'font-semibold',
                          'text-sm',
                          'cursor-pointer',
                          'transition-all',
                          'duration-300',
                          'shadow-lg',
                          'shadow-blue-600/30',
                          'hover:-translate-y-0.5',
                          'hover:shadow-xl',
                          'hover:shadow-blue-600/40',
                          'hover:from-blue-700',
                          'hover:to-blue-800',
                        ],
                        attributes: {},
                        components: [
                          {
                            type: 'textnode',
                            content: 'Get Started',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-toggle',
                    classes: [
                      'md:hidden',
                      'flex',
                      'flex-col',
                      'justify-center',
                      'items-center',
                      'w-6',
                      'h-6',
                      'cursor-pointer',
                      'group',
                    ],
                    attributes: {},
                  },
                  {
                    type: 'navbar-mobile-menu',
                    classes: [
                      'hidden',
                      'md:hidden',
                      'absolute',
                      'top-full',
                      'left-0',
                      'w-full',
                      'bg-white',
                      'shadow-xl',
                      'rounded-b-2xl',
                      'p-6',
                      'space-y-2',
                      'animate-in',
                      'slide-in-from-top-2',
                      'duration-300',
                    ],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-link',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'About',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'About',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Services',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Services',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Contact',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Contact',
                          },
                        ],
                      },
                      {
                        type: 'navbar-cta',
                        classes: [
                          'w-full',
                          'mt-4',
                          'bg-gradient-to-r',
                          'from-blue-600',
                          'to-blue-700',
                          'text-white',
                          'px-6',
                          'py-3',
                          'rounded-xl',
                          'font-semibold',
                          'text-sm',
                          'cursor-pointer',
                          'transition-all',
                          'duration-300',
                          'shadow-lg',
                          'shadow-blue-600/30',
                        ],
                        attributes: {},
                        components: [
                          {
                            type: 'textnode',
                            content: 'Get Started',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'hero-section',
                classes: [
                  'relative',
                  'min-h-screen',
                  'flex',
                  'items-center',
                  'justify-center',
                  'bg-gradient-to-br',
                  'from-blue-600',
                  'to-purple-700',
                  'text-white',
                ],
                attributes: {},
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['text-center', 'max-w-4xl', 'mx-auto'],
                        components: [
                          {
                            type: 'modern-heading',
                            classes: ['text-5xl', 'md:text-7xl', 'font-bold', 'mb-6', 'text-white'],
                            attributes: {},
                            components: [
                              {
                                type: 'textnode',
                                content: 'Build Amazing Landing Pages',
                              },
                            ],
                            size: '',
                          },
                          {
                            type: 'modern-paragraph',
                            classes: ['text-xl', 'md:text-2xl', 'mb-8', 'text-blue-100'],
                            attributes: {},
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'Create stunning, responsive landing pages with our modern component library.',
                              },
                            ],
                            variant: '',
                          },
                          {
                            classes: ['flex', 'flex-col', 'md:flex-row', 'gap-4', 'justify-center'],
                            components: [
                              {
                                type: 'modern-button',
                                classes: [
                                  'bg-white',
                                  'text-blue-600',
                                  'hover:bg-blue-50',
                                  'font-semibold',
                                  'py-4',
                                  'px-8',
                                  'rounded-lg',
                                  'transition-all',
                                  'duration-300',
                                  'transform',
                                  'hover:scale-105',
                                  'shadow-lg',
                                ],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Get Started',
                                  },
                                ],
                                variant: '',
                                size: '',
                              },
                              {
                                type: 'modern-button',
                                classes: [
                                  'border-2',
                                  'border-white',
                                  'text-white',
                                  'hover:bg-white',
                                  'hover:text-blue-600',
                                  'font-semibold',
                                  'py-4',
                                  'px-8',
                                  'rounded-lg',
                                  'transition-all',
                                  'duration-300',
                                  'transform',
                                  'hover:scale-105',
                                ],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Learn More',
                                  },
                                ],
                                variant: '',
                                size: '',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'services-section',
                classes: ['py-16', 'lg:py-24', 'bg-gray-50'],
                attributes: {},
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['text-center', 'mb-16'],
                        components: [
                          {
                            type: 'modern-heading',
                            classes: ['text-4xl', 'md:text-5xl', 'font-bold', 'mb-6'],
                            attributes: {},
                            components: [
                              {
                                type: 'textnode',
                                content: 'Our Services',
                              },
                            ],
                            size: '',
                          },
                          {
                            type: 'modern-paragraph',
                            classes: ['text-xl', 'text-gray-600', 'max-w-3xl', 'mx-auto'],
                            attributes: {},
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  'We provide comprehensive solutions to help your business grow and succeed.',
                              },
                            ],
                            variant: '',
                          },
                        ],
                      },
                      {
                        classes: ['grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8'],
                        components: [
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-blue-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                components: [
                                  {
                                    tagName: 'span',
                                    classes: ['text-3xl'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '🚀',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Fast Performance',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Lightning-fast loading speeds and optimized performance for better user experience.',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-green-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                components: [
                                  {
                                    tagName: 'span',
                                    classes: ['text-3xl'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '🎨',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Beautiful Design',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Modern, clean designs that captivate your audience and drive conversions.',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-purple-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                components: [
                                  {
                                    tagName: 'span',
                                    classes: ['text-3xl'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '📱',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Responsive',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Fully responsive designs that look great on all devices and screen sizes.',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            type: 'modern-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-6',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-1',
                            ],
                            attributes: {},
                            components: [
                              {
                                classes: ['mb-4'],
                                components: [
                                  {
                                    type: 'modern-heading',
                                    classes: [
                                      'text-3xl',
                                      'md:text-4xl',
                                      'font-bold',
                                      'text-gray-900',
                                      'mb-4',
                                    ],
                                    attributes: {},
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'Card Title',
                                      },
                                    ],
                                    size: '',
                                  },
                                ],
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-lg', 'text-gray-600', 'leading-relaxed', 'mb-6'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Card description goes here. This is a flexible card component.',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                            variant: '',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'footer-section',
                classes: ['bg-gray-900', 'text-white', 'py-16'],
                attributes: {},
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['grid', 'md:grid-cols-4', 'gap-8', 'mb-8'],
                        attributes: {
                          id: 'iso3c',
                        },
                        components: [
                          {
                            components: [
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-white'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Your Brand',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-gray-400'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Building amazing digital experiences for modern businesses.',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            components: [
                              {
                                tagName: 'h4',
                                classes: ['text-lg', 'font-semibold', 'mb-4'],
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Quick Links',
                                  },
                                ],
                              },
                              {
                                tagName: 'ul',
                                classes: ['space-y-2'],
                                components: [
                                  {
                                    tagName: 'li',
                                    components: [
                                      {
                                        tagName: 'a',
                                        classes: [
                                          'text-gray-400',
                                          'hover:text-white',
                                          'transition-colors',
                                        ],
                                        attributes: {
                                          href: '#',
                                        },
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'Home',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'li',
                                    components: [
                                      {
                                        tagName: 'a',
                                        classes: [
                                          'text-gray-400',
                                          'hover:text-white',
                                          'transition-colors',
                                        ],
                                        attributes: {
                                          href: '#',
                                        },
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'About',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'li',
                                    components: [
                                      {
                                        tagName: 'a',
                                        classes: [
                                          'text-gray-400',
                                          'hover:text-white',
                                          'transition-colors',
                                        ],
                                        attributes: {
                                          href: '#',
                                        },
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'Services',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            components: [
                              {
                                tagName: 'h4',
                                classes: ['text-lg', 'font-semibold', 'mb-4'],
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Contact',
                                  },
                                ],
                              },
                              {
                                classes: ['space-y-2', 'text-gray-400'],
                                components: [
                                  {
                                    tagName: 'p',
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'hello@company.com',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '+1 (555) 123-4567',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            components: [
                              {
                                tagName: 'h4',
                                classes: ['text-lg', 'font-semibold', 'mb-4'],
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Follow Us',
                                  },
                                ],
                              },
                              {
                                classes: ['flex', 'space-x-4'],
                                components: [
                                  {
                                    tagName: 'a',
                                    classes: [
                                      'text-gray-400',
                                      'hover:text-white',
                                      'transition-colors',
                                    ],
                                    attributes: {
                                      href: '#',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'Twitter',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'a',
                                    classes: [
                                      'text-gray-400',
                                      'hover:text-white',
                                      'transition-colors',
                                    ],
                                    attributes: {
                                      href: '#',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'LinkedIn',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'border-t',
                          'border-gray-800',
                          'pt-8',
                          'text-center',
                          'text-gray-400',
                        ],
                        components: [
                          {
                            tagName: 'p',
                            components: [
                              {
                                type: 'textnode',
                                content: '© 2024 Your Company. All rights reserved.',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            head: {
              type: 'head',
            },
            docEl: {
              tagName: 'html',
            },
          },
          id: 'YGmyLaFP0xoxOJzm',
        },
      ],
      type: 'main',
      id: 'XvP0GibHFsmcQatH',
    },
  ],
  symbols: [],
}

export const dyanmo = {
  dataSources: [],
  assets: [],
  styles: [
    {
      selectors: ['#iiz6'],
      style: {},
    },
    {
      selectors: ['#i6a4k'],
      style: {},
    },
    {
      selectors: ['#ikuit'],
      style: {},
    },
    {
      selectors: ['#imzkv'],
      style: {},
    },
    {
      selectors: ['#isg9f'],
      style: {},
    },
    {
      selectors: ['#i5sl'],
      wrapper: 1,
      style: {},
    },
    {
      selectors: ['#iczmg'],
      style: {},
    },
    {
      selectors: ['#it1u7'],
      style: {},
    },
    {
      selectors: ['#iu5kh'],
      style: {},
    },
    {
      selectors: ['#ibj3j'],
      style: {},
    },
    {
      selectors: ['#i29id'],
      style: {},
    },
    {
      selectors: ['#i3kdg'],
      style: {},
    },
    {
      selectors: ['#iu98n'],
      style: {},
    },
    {
      selectors: ['#imtmv'],
      style: {},
    },
    {
      selectors: ['#iv5oh'],
      style: {},
    },
    {
      selectors: ['#il5to7'],
      style: {},
    },
    {
      selectors: ['#icxjy8'],
      style: {},
    },
  ],
  pages: [
    {
      frames: [
        {
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
            attributes: {
              id: 'i5sl',
            },
            components: [
              {
                type: 'navbar',
                classes: [
                  'sticky',
                  'top-0',
                  'z-50',
                  'flex',
                  'justify-between',
                  'items-center',
                  'px-6',
                  'md:px-8',
                  'py-4',
                  'bg-white/95',
                  'backdrop-blur-md',
                  'border-b',
                  'border-gray-100',
                  'transition-all',
                  'duration-300',
                  'relative',
                ],
                attributes: {},
                components: [
                  {
                    type: 'navbar-logo',
                    classes: [
                      'text-2xl',
                      'font-bold',
                      'text-blue-600',
                      'cursor-pointer',
                      'select-none',
                      'flex',
                      'items-center',
                      'transition-all',
                      'duration-300',
                      'hover:text-blue-700',
                      'hover:scale-105',
                    ],
                    attributes: {},
                    components: [
                      {
                        type: 'text',
                        attributes: {
                          id: 'iiz6',
                        },
                        components: [
                          {
                            type: 'textnode',
                            content: 'Codified',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-links',
                    classes: ['hidden', 'md:flex', 'items-center', 'space-x-1'],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-link',
                        content: 'Home',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },

                        components: [
                          {
                            type: 'text',
                            attributes: {
                              id: 'i6a4k',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Home',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'About',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            attributes: {
                              id: 'i6a4k',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'About',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Services',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            attributes: {
                              id: 'ikuit',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Contact',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Contact',
                        classes: [
                          'text-gray-700',
                          'font-medium',
                          'px-4',
                          'py-2',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                          'hover:-translate-y-0.5',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            attributes: {
                              id: 'imzkv',
                            },
                            components: [
                              {
                                type: 'textnode',
                                content: 'Service',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-actions',
                    classes: ['hidden', 'md:flex', 'items-center', 'space-x-4'],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-cta',
                        classes: [
                          'bg-gradient-to-r',
                          'from-blue-600',
                          'to-blue-700',
                          'text-white',
                          'px-6',
                          'py-2.5',
                          'rounded-xl',
                          'font-semibold',
                          'text-sm',
                          'cursor-pointer',
                          'transition-all',
                          'duration-300',
                          'shadow-lg',
                          'shadow-blue-600/30',
                          'hover:-translate-y-0.5',
                          'hover:shadow-xl',
                          'hover:shadow-blue-600/40',
                          'hover:from-blue-700',
                          'hover:to-blue-800',
                        ],
                        attributes: {},
                        components: [
                          {
                            type: 'text',
                            content: 'Get Started',
                            attributes: {
                              id: 'isg9f',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'navbar-toggle',
                    classes: [
                      'md:hidden',
                      'flex',
                      'flex-col',
                      'justify-center',
                      'items-center',
                      'w-6',
                      'h-6',
                      'cursor-pointer',
                      'group',
                    ],
                    attributes: {},
                  },
                  {
                    type: 'navbar-mobile-menu',
                    classes: [
                      'hidden',
                      'md:hidden',
                      'absolute',
                      'top-full',
                      'left-0',
                      'w-full',
                      'bg-white',
                      'shadow-xl',
                      'rounded-b-2xl',
                      'p-6',
                      'space-y-2',
                      'animate-in',
                      'slide-in-from-top-2',
                      'duration-300',
                    ],
                    attributes: {},
                    components: [
                      {
                        type: 'navbar-link',
                        content: 'Home',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'About',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Services',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-link',
                        content: 'Contact',
                        classes: [
                          'block',
                          'w-full',
                          'text-center',
                          'py-3',
                          'px-4',
                          'text-gray-700',
                          'font-medium',
                          'rounded-lg',
                          'transition-all',
                          'duration-300',
                          'hover:text-blue-600',
                          'hover:bg-blue-50',
                        ],
                        attributes: {
                          href: '#',
                        },
                        components: [
                          {
                            type: 'text',
                            content: 'Home',
                          },
                        ],
                      },
                      {
                        type: 'navbar-cta',
                        classes: [
                          'w-full',
                          'mt-4',
                          'bg-gradient-to-r',
                          'from-blue-600',
                          'to-blue-700',
                          'text-white',
                          'px-6',
                          'py-3',
                          'rounded-xl',
                          'font-semibold',
                          'text-sm',
                          'cursor-pointer',
                          'transition-all',
                          'duration-300',
                          'shadow-lg',
                          'shadow-blue-600/30',
                        ],
                        attributes: {},
                        components: [
                          {
                            type: 'text',
                            content: 'Get Started',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'hero-section',
                classes: [
                  'relative',
                  'min-h-screen',
                  'flex',
                  'items-center',
                  'justify-center',
                  'bg-gradient-to-br',
                  'from-blue-600',
                  'to-purple-700',
                  'text-white',
                ],
                attributes: {
                  id: 'i29id',
                },
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['text-center', 'max-w-4xl', 'mx-auto'],
                        components: [
                          {
                            type: 'modern-heading',
                            classes: ['text-5xl', 'md:text-7xl', 'font-bold', 'mb-6', 'text-white'],
                            attributes: {},
                            components: [
                              {
                                type: 'text',
                                attributes: {
                                  id: 'iczmg',
                                },
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'We Build Modern',
                                  },
                                ],
                              },
                            ],
                            size: '',
                          },
                          {
                            type: 'modern-paragraph',
                            classes: ['text-lg', 'text-gray-600', 'leading-relaxed', 'mb-6'],
                            attributes: {},
                            components: [
                              {
                                type: 'text',
                                attributes: {
                                  id: 'it1u7',
                                },
                                components: [
                                  {
                                    type: 'textnode',
                                    content:
                                      'Continually negotiate virtual potentialities through cross functional testing procedures. Assertively reconceptualize just in time human capital whereas principle-centered methods.',
                                  },
                                ],
                              },
                            ],
                            variant: '',
                          },
                          {
                            classes: ['flex', 'flex-col', 'md:flex-row', 'gap-4', 'justify-center'],
                            components: [
                              {
                                type: 'modern-button',
                                classes: [
                                  'bg-white',
                                  'text-blue-600',
                                  'hover:bg-blue-50',
                                  'font-semibold',
                                  'py-4',
                                  'px-8',
                                  'rounded-lg',
                                  'transition-all',
                                  'duration-300',
                                  'transform',
                                  'hover:scale-105',
                                  'shadow-lg',
                                ],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    attributes: {
                                      id: 'iu5kh',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'Click Me',
                                      },
                                    ],
                                  },
                                ],
                                variant: '',
                                size: '',
                              },
                              {
                                type: 'modern-button',
                                classes: [
                                  'border-2',
                                  'border-white',
                                  'text-white',
                                  'hover:bg-white',
                                  'hover:text-blue-600',
                                  'font-semibold',
                                  'py-4',
                                  'px-8',
                                  'rounded-lg',
                                  'transition-all',
                                  'duration-300',
                                  'transform',
                                  'hover:scale-105',
                                ],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    attributes: {
                                      id: 'ibj3j',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'About Us',
                                      },
                                    ],
                                  },
                                ],
                                variant: '',
                                size: '',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'services-section',
                classes: ['py-16', 'lg:py-24', 'bg-gray-50'],
                attributes: {},
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['text-center', 'mb-16'],
                        components: [
                          {
                            type: 'modern-heading',
                            classes: ['text-4xl', 'md:text-5xl', 'font-bold', 'mb-6'],
                            attributes: {},
                            components: [
                              {
                                type: 'text',
                                attributes: {
                                  id: 'i3kdg',
                                },
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Out Services',
                                  },
                                ],
                              },
                            ],
                            size: '',
                          },
                          {
                            type: 'modern-paragraph',
                            classes: ['text-xl', 'text-gray-600', 'max-w-3xl', 'mx-auto'],
                            attributes: {},
                            components: [
                              {
                                type: 'text',
                                attributes: {
                                  id: 'iu98n',
                                },
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'We make problems look small.',
                                  },
                                ],
                              },
                            ],
                            variant: '',
                          },
                        ],
                      },
                      {
                        classes: ['grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8'],
                        components: [
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                type: 'image',
                                resizable: {
                                  ratioDefault: 1,
                                },
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-blue-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                attributes: {
                                  src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                  alt: 'Avatar-image',
                                },
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    attributes: {
                                      id: 'imtmv',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'AI/ML',
                                      },
                                    ],
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                content: 'Lightning-fast loading speeds and optimized',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                type: 'image',
                                resizable: {
                                  ratioDefault: 1,
                                },
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-blue-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                attributes: {
                                  src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                  alt: 'Avatar-image',
                                },
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'Modern Heading',
                                    attributes: {
                                      id: 'iv5oh',
                                    },
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                content: 'Lightning-fast loading speeds and optimized',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                type: 'image',
                                resizable: {
                                  ratioDefault: 1,
                                },
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-blue-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                attributes: {
                                  src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                  alt: 'Avatar-image',
                                },
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'Modern Heading',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                content: 'Lightning-fast loading speeds and optimized',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            type: 'service-card',
                            classes: [
                              'bg-white',
                              'rounded-xl',
                              'shadow-lg',
                              'p-8',
                              'text-center',
                              'hover:shadow-xl',
                              'transition-all',
                              'duration-300',
                              'transform',
                              'hover:-translate-y-2',
                            ],
                            attributes: {},
                            components: [
                              {
                                type: 'image',
                                resizable: {
                                  ratioDefault: 1,
                                },
                                classes: [
                                  'w-16',
                                  'h-16',
                                  'bg-blue-100',
                                  'rounded-full',
                                  'flex',
                                  'items-center',
                                  'justify-center',
                                  'mx-auto',
                                  'mb-6',
                                ],
                                attributes: {
                                  src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                                  alt: 'Avatar-image',
                                },
                              },
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-gray-900'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'Modern Heading',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                content: 'Lightning-fast loading speeds and optimized',
                                classes: ['text-gray-600'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'testimonials-section',
                classes: ['py-16', 'lg:py-24'],
                attributes: {},
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['text-center', 'mb-16'],
                        components: [
                          {
                            type: 'modern-heading',
                            classes: ['text-4xl', 'md:text-5xl', 'font-bold', 'mb-6'],
                            attributes: {},
                            components: [
                              {
                                type: 'textnode',
                                content: 'What Our Clients Say',
                              },
                            ],
                            size: '',
                          },
                          {
                            type: 'modern-paragraph',
                            classes: ['text-xl', 'text-gray-600', 'max-w-3xl', 'mx-auto'],
                            attributes: {},
                            components: [
                              {
                                type: 'textnode',
                                content:
                                  "Don't just take our word for it. Here's what our satisfied customers have to say.",
                              },
                            ],
                            variant: '',
                          },
                        ],
                      },
                      {
                        classes: ['grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8'],
                        components: [
                          {
                            type: 'testimonial-card',
                            classes: ['bg-white', 'rounded-xl', 'shadow-lg', 'p-8'],
                            attributes: {},
                            components: [
                              {
                                classes: ['flex', 'items-center', 'mb-6'],
                                components: [
                                  {
                                    type: 'text',
                                    classes: ['flex', 'text-yellow-400', 'mr-4'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '⭐⭐⭐⭐⭐',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-lg', 'text-gray-700', 'mb-6', 'italic'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                              {
                                classes: ['flex', 'items-center'],
                                components: [
                                  {
                                    classes: [
                                      'w-12',
                                      'h-12',
                                      'bg-gray-300',
                                      'rounded-full',
                                      'mr-4',
                                    ],
                                  },
                                  {
                                    components: [
                                      {
                                        tagName: 'h4',
                                        type: 'text',
                                        classes: ['font-semibold', 'text-gray-900'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'John Doe',
                                          },
                                        ],
                                      },
                                      {
                                        tagName: 'p',
                                        type: 'text',
                                        classes: ['text-gray-600', 'text-sm'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'CEO, Company Inc.',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'testimonial-card',
                            classes: ['bg-white', 'rounded-xl', 'shadow-lg', 'p-8'],
                            attributes: {
                              id: 'il5to7',
                            },
                            components: [
                              {
                                classes: ['flex', 'items-center', 'mb-6'],
                                components: [
                                  {
                                    type: 'text',
                                    classes: ['flex', 'text-yellow-400', 'mr-4'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '⭐⭐⭐⭐⭐',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-lg', 'text-gray-700', 'mb-6', 'italic'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                              {
                                classes: ['flex', 'items-center'],
                                components: [
                                  {
                                    classes: [
                                      'w-12',
                                      'h-12',
                                      'bg-gray-300',
                                      'rounded-full',
                                      'mr-4',
                                    ],
                                  },
                                  {
                                    components: [
                                      {
                                        tagName: 'h4',
                                        type: 'text',
                                        classes: ['font-semibold', 'text-gray-900'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'John Doe',
                                          },
                                        ],
                                      },
                                      {
                                        tagName: 'p',
                                        type: 'text',
                                        classes: ['text-gray-600', 'text-sm'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'CEO, Company Inc.',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'testimonial-card',
                            classes: ['bg-white', 'rounded-xl', 'shadow-lg', 'p-8'],
                            attributes: {
                              id: 'icxjy8',
                            },
                            components: [
                              {
                                classes: ['flex', 'items-center', 'mb-6'],
                                components: [
                                  {
                                    type: 'text',
                                    classes: ['flex', 'text-yellow-400', 'mr-4'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '⭐⭐⭐⭐⭐',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-lg', 'text-gray-700', 'mb-6', 'italic'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                              {
                                classes: ['flex', 'items-center'],
                                components: [
                                  {
                                    classes: [
                                      'w-12',
                                      'h-12',
                                      'bg-gray-300',
                                      'rounded-full',
                                      'mr-4',
                                    ],
                                  },
                                  {
                                    components: [
                                      {
                                        tagName: 'h4',
                                        type: 'text',
                                        classes: ['font-semibold', 'text-gray-900'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'John Doe',
                                          },
                                        ],
                                      },
                                      {
                                        tagName: 'p',
                                        type: 'text',
                                        classes: ['text-gray-600', 'text-sm'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'CEO, Company Inc.',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            type: 'testimonial-card',
                            classes: ['bg-white', 'rounded-xl', 'shadow-lg', 'p-8'],
                            attributes: {},
                            components: [
                              {
                                classes: ['flex', 'items-center', 'mb-6'],
                                components: [
                                  {
                                    type: 'text',
                                    classes: ['flex', 'text-yellow-400', 'mr-4'],
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '⭐⭐⭐⭐⭐',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-lg', 'text-gray-700', 'mb-6', 'italic'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                              {
                                classes: ['flex', 'items-center'],
                                components: [
                                  {
                                    classes: [
                                      'w-12',
                                      'h-12',
                                      'bg-gray-300',
                                      'rounded-full',
                                      'mr-4',
                                    ],
                                  },
                                  {
                                    components: [
                                      {
                                        tagName: 'h4',
                                        type: 'text',
                                        classes: ['font-semibold', 'text-gray-900'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'John Doe',
                                          },
                                        ],
                                      },
                                      {
                                        tagName: 'p',
                                        type: 'text',
                                        classes: ['text-gray-600', 'text-sm'],
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'CEO, Company Inc.',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: 'footer-section',
                classes: ['bg-gray-900', 'text-white', 'py-16'],
                attributes: {},
                components: [
                  {
                    type: 'container',
                    classes: ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'],
                    attributes: {},
                    components: [
                      {
                        classes: ['grid', 'md:grid-cols-4', 'gap-8', 'mb-8'],
                        components: [
                          {
                            components: [
                              {
                                type: 'modern-heading',
                                classes: ['text-2xl', 'font-bold', 'mb-4', 'text-white'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'Modern Heading',
                                  },
                                ],
                                size: '',
                              },
                              {
                                type: 'modern-paragraph',
                                classes: ['text-gray-400'],
                                attributes: {},
                                components: [
                                  {
                                    type: 'text',
                                    content: 'I am modern p',
                                  },
                                ],
                                variant: '',
                              },
                            ],
                          },
                          {
                            components: [
                              {
                                tagName: 'h4',
                                type: 'text',
                                classes: ['text-lg', 'font-semibold', 'mb-4'],
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Quick Links',
                                  },
                                ],
                              },
                              {
                                tagName: 'ul',
                                classes: ['space-y-2'],
                                components: [
                                  {
                                    tagName: 'li',
                                    components: [
                                      {
                                        type: 'link',
                                        classes: [
                                          'text-gray-400',
                                          'hover:text-white',
                                          'transition-colors',
                                        ],
                                        attributes: {
                                          href: '#',
                                        },
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'Home',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'li',
                                    components: [
                                      {
                                        type: 'link',
                                        classes: [
                                          'text-gray-400',
                                          'hover:text-white',
                                          'transition-colors',
                                        ],
                                        attributes: {
                                          href: '#',
                                        },
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'About',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'li',
                                    components: [
                                      {
                                        type: 'link',
                                        classes: [
                                          'text-gray-400',
                                          'hover:text-white',
                                          'transition-colors',
                                        ],
                                        attributes: {
                                          href: '#',
                                        },
                                        components: [
                                          {
                                            type: 'textnode',
                                            content: 'Services',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            components: [
                              {
                                tagName: 'h4',
                                type: 'text',
                                classes: ['text-lg', 'font-semibold', 'mb-4'],
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Contact',
                                  },
                                ],
                              },
                              {
                                classes: ['space-y-2', 'text-gray-400'],
                                components: [
                                  {
                                    tagName: 'p',
                                    type: 'text',
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'hello@company.com',
                                      },
                                    ],
                                  },
                                  {
                                    tagName: 'p',
                                    type: 'text',
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: '+1 (555) 123-4567',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            components: [
                              {
                                tagName: 'h4',
                                type: 'text',
                                classes: ['text-lg', 'font-semibold', 'mb-4'],
                                components: [
                                  {
                                    type: 'textnode',
                                    content: 'Follow Us',
                                  },
                                ],
                              },
                              {
                                classes: ['flex', 'space-x-4'],
                                components: [
                                  {
                                    type: 'link',
                                    classes: [
                                      'text-gray-400',
                                      'hover:text-white',
                                      'transition-colors',
                                    ],
                                    attributes: {
                                      href: '#',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'Twitter',
                                      },
                                    ],
                                  },
                                  {
                                    type: 'link',
                                    classes: [
                                      'text-gray-400',
                                      'hover:text-white',
                                      'transition-colors',
                                    ],
                                    attributes: {
                                      href: '#',
                                    },
                                    components: [
                                      {
                                        type: 'textnode',
                                        content: 'LinkedIn',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        classes: [
                          'border-t',
                          'border-gray-800',
                          'pt-8',
                          'text-center',
                          'text-gray-400',
                        ],
                        components: [
                          {
                            tagName: 'p',
                            type: 'text',
                            components: [
                              {
                                type: 'textnode',
                                content: '© 2024 Your Company. All rights reserved.',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            head: {
              type: 'head',
            },
            docEl: {
              tagName: 'html',
            },
          },
          id: 'fQPoJ8IckffQgDub',
        },
      ],
      type: 'main',
      id: 'Mqy9KuhaZhQyCGBJ',
    },
  ],
  symbols: [],
}
