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
