import {
  // Button Tags
  createButtonTag,
  createSubmitButtonTag,
  createLinkButtonTag,
  // Header Tags
  createH1Tag,
  createH2Tag,
  createH3Tag,
  createH4Tag,
  createH5Tag,
  createH6Tag,
  // Text Tags
  createTextNode,
  createParagraphTag,
  createStrongTag,
  createEmTag,
  createSmallTag,
  // Span Tags
  createSpanTag,
  createInlineSpanTag,
  createBlockSpanTag,
  // Div Tags
  createDivTag,
  createContainerDiv,
  createFlexDiv,
  createGridDiv,
  createSectionDiv,
  // Type
  Tag,
} from '../tag/index'

// Navigation Component using various tags
export const createNavigation = (): Tag => {
  return createDivTag(
    { id: 'navbar' },
    ['fixed', 'top-0', 'w-full', 'z-50', 'bg-white/95', 'backdrop-blur-sm', 'border-b'],
    [
      createContainerDiv(
        [
          createFlexDiv(
            [
              // Logo using span with gradient text
              createSpanTag('Grand Hotel', { id: 'logo' }, [
                'text-2xl',
                'font-bold',
                'bg-gradient-to-r',
                'from-blue-500',
                'to-purple-600',
                'bg-clip-text',
                'text-transparent',
              ]),
              // Navigation Links using flex div
              createFlexDiv(
                [
                  createLinkButtonTag('Home', '#home', { id: 'navLink' }, ['nav-link', 'mx-2']),
                  createLinkButtonTag('Rooms', '#rooms', { id: 'navLink' }, ['nav-link', 'mx-2']),
                  createLinkButtonTag('Amenities', '#amenities', { id: 'navLink' }, [
                    'nav-link',
                    'mx-2',
                  ]),
                  createLinkButtonTag('Contact', '#contact', { id: 'navLink' }, [
                    'nav-link',
                    'mx-2',
                  ]),
                ],
                'row',
                ['gap-4'],
              ),
            ],
            'row',
            ['justify-between', 'items-center', 'h-20'],
          ),
        ],
        ['max-w-7xl', 'mx-auto', 'px-6'],
      ),
    ],
  )
}

// Hero Section using all header tags and various components
export const createHeroSection = (): Tag => {
  return createSectionDiv(
    [
      // Background overlay div
      createDivTag({ id: 'heroOverlay' }, ['absolute', 'inset-0', 'bg-black/20']),
      // Hero content container
      createDivTag(
        { id: 'heroContent' },
        ['relative', 'z-10', 'text-center', 'text-white', 'px-6', 'max-w-4xl', 'mx-auto'],
        [
          // Main hero title with H1
          createDivTag(
            { id: 'heroTitle' },
            ['text-6xl', 'md:text-8xl', 'font-bold', 'mb-8', 'leading-tight'],
            [
              createTextNode('Welcome to '),
              createSpanTag('Grand Hotel', { id: 'heroGradientText' }, [
                'block',
                'bg-gradient-to-r',
                'from-yellow-400',
                'to-orange-500',
                'bg-clip-text',
                'text-transparent',
              ]),
            ],
          ),
          // Hero subtitle with paragraph
          createParagraphTag(
            'Experience unparalleled luxury and sophistication in the heart of the city. Where every moment becomes a cherished memory.',
            { id: 'heroSubtitle' },
            ['text-xl', 'mb-12', 'opacity-90', 'max-w-3xl', 'mx-auto', 'leading-relaxed'],
          ),
          // Hero buttons container
          createFlexDiv(
            [
              createButtonTag('Explore Rooms', { id: 'heroPrimaryBtn' }, [
                'bg-white',
                'text-gray-900',
                'px-8',
                'py-4',
                'rounded-full',
                'font-semibold',
                'text-lg',
                'hover:bg-gray-100',
                'transition-all',
                'duration-300',
                'shadow-lg',
              ]),
              createButtonTag('View Gallery', { id: 'heroSecondaryBtn' }, [
                'border-2',
                'border-white',
                'text-white',
                'px-8',
                'py-4',
                'rounded-full',
                'font-semibold',
                'text-lg',
                'hover:bg-white',
                'hover:text-gray-900',
                'transition-all',
                'duration-300',
              ]),
            ],
            'column',
            ['gap-4', 'sm:flex-row', 'sm:justify-center'],
            { id: 'heroButtons' },
          ),
        ],
      ),
    ],
    [
      'relative',
      'min-h-screen',
      'flex',
      'items-center',
      'justify-center',
      'bg-gradient-to-br',
      'from-blue-500',
      'via-purple-600',
      'to-pink-500',
    ],
    { id: 'heroSection' },
  )
}

// Features Section demonstrating grid layout and various text elements
export const createFeaturesSection = (): Tag => {
  return createSectionDiv(
    [
      createContainerDiv(
        [
          // Features header
          createDivTag(
            { id: 'featuresHeader' },
            ['text-center', 'mb-16'],
            [
              createDivTag(
                { id: 'featuresTitle' },
                ['text-5xl', 'font-bold', 'text-gray-900', 'mb-6'],
                [
                  createTextNode('Why Choose '),
                  createSpanTag('Grand Hotel', {}, [
                    'bg-gradient-to-r',
                    'from-blue-500',
                    'to-purple-600',
                    'bg-clip-text',
                    'text-transparent',
                  ]),
                ],
              ),
              createParagraphTag(
                'Discover what sets us apart and makes your stay truly exceptional',
                { id: 'featuresSubtitle' },
                ['text-xl', 'text-gray-600', 'max-w-2xl', 'mx-auto'],
              ),
            ],
          ),
          // Features grid
          createGridDiv(
            [
              // Feature Card 1 - Luxury Suites
              createDivTag(
                { id: 'featureCard' },
                [
                  'text-center',
                  'p-8',
                  'rounded-3xl',
                  'bg-white',
                  'shadow-lg',
                  'hover:shadow-xl',
                  'transition-all',
                  'duration-300',
                ],
                [
                  createDivTag(
                    {
                      id: 'featureIcon',
                      style: { background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' },
                    },
                    [
                      'w-20',
                      'h-20',
                      'mx-auto',
                      'mb-6',
                      'rounded-2xl',
                      'flex',
                      'items-center',
                      'justify-center',
                      'text-4xl',
                      'text-white',
                    ],
                    [createTextNode('🏨')],
                  ),
                  createH3Tag('Luxury Suites', { id: 'featureTitle' }, [
                    'text-2xl',
                    'font-bold',
                    'text-gray-900',
                    'mb-4',
                  ]),
                  createParagraphTag(
                    'Elegantly designed rooms with premium amenities, breathtaking city views, and personalized service that exceeds expectations.',
                    { id: 'featureText' },
                    ['text-gray-600', 'leading-relaxed'],
                  ),
                ],
              ),
              // Feature Card 2 - Gourmet Dining
              createDivTag(
                { id: 'featureCard' },
                [
                  'text-center',
                  'p-8',
                  'rounded-3xl',
                  'bg-white',
                  'shadow-lg',
                  'hover:shadow-xl',
                  'transition-all',
                  'duration-300',
                ],
                [
                  createDivTag(
                    {
                      id: 'featureIcon',
                      style: { background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                    },
                    [
                      'w-20',
                      'h-20',
                      'mx-auto',
                      'mb-6',
                      'rounded-2xl',
                      'flex',
                      'items-center',
                      'justify-center',
                      'text-4xl',
                      'text-white',
                    ],
                    [createTextNode('🍽️')],
                  ),
                  createH3Tag('Gourmet Dining', { id: 'featureTitle' }, [
                    'text-2xl',
                    'font-bold',
                    'text-gray-900',
                    'mb-4',
                  ]),
                  createParagraphTag(
                    'Award-winning restaurants featuring world-class chefs, exquisite cuisine, and an extensive selection of fine wines.',
                    { id: 'featureText' },
                    ['text-gray-600', 'leading-relaxed'],
                  ),
                ],
              ),
              // Feature Card 3 - Premium Facilities
              createDivTag(
                { id: 'featureCard' },
                [
                  'text-center',
                  'p-8',
                  'rounded-3xl',
                  'bg-white',
                  'shadow-lg',
                  'hover:shadow-xl',
                  'transition-all',
                  'duration-300',
                ],
                [
                  createDivTag(
                    {
                      id: 'featureIcon',
                      style: { background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
                    },
                    [
                      'w-20',
                      'h-20',
                      'mx-auto',
                      'mb-6',
                      'rounded-2xl',
                      'flex',
                      'items-center',
                      'justify-center',
                      'text-4xl',
                      'text-white',
                    ],
                    [createTextNode('🏊‍♂️')],
                  ),
                  createH3Tag('Premium Facilities', { id: 'featureTitle' }, [
                    'text-2xl',
                    'font-bold',
                    'text-gray-900',
                    'mb-4',
                  ]),
                  createParagraphTag(
                    'Rooftop infinity pool, world-class spa, state-of-the-art fitness center, and 24/7 concierge service at your disposal.',
                    { id: 'featureText' },
                    ['text-gray-600', 'leading-relaxed'],
                  ),
                ],
              ),
            ],
            3,
            ['gap-8'],
            {},
            'featuresGrid',
          ),
        ],
        ['max-w-7xl', 'mx-auto', 'px-6'],
      ),
    ],
    ['py-20', 'bg-gray-50'],
    { id: 'featuresSection' },
  )
}

// Rooms Section demonstrating complex nested structures
export const createRoomsSection = (): Tag => {
  return createSectionDiv(
    [
      createContainerDiv(
        [
          // Rooms header
          createDivTag(
            { id: 'roomsHeader' },
            ['text-center', 'mb-16'],
            [
              createDivTag(
                { id: 'roomsTitle' },
                ['text-5xl', 'font-bold', 'text-gray-900', 'mb-6'],
                [
                  createTextNode('Our '),
                  createSpanTag('Luxury Suites', {}, [
                    'bg-gradient-to-r',
                    'from-blue-500',
                    'to-purple-600',
                    'bg-clip-text',
                    'text-transparent',
                  ]),
                ],
              ),
              createParagraphTag(
                'Choose from our collection of meticulously designed rooms and suites, each crafted to provide the ultimate in comfort and elegance.',
                { id: 'roomsSubtitle' },
                ['text-xl', 'text-gray-600', 'max-w-3xl', 'mx-auto'],
              ),
            ],
          ),
          // Rooms grid
          createGridDiv(
            [
              // Deluxe Room Card
              createDivTag(
                { id: 'roomCard' },
                [
                  'bg-white',
                  'rounded-3xl',
                  'shadow-lg',
                  'overflow-hidden',
                  'hover:shadow-xl',
                  'transition-all',
                  'duration-300',
                ],
                [
                  // Room image container
                  createDivTag(
                    {
                      id: 'roomImageContainer',
                      style: { background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' },
                    },
                    ['relative', 'h-64', 'flex', 'items-center', 'justify-center', 'text-6xl'],
                    [
                      createTextNode('🏙️'),
                      createSpanTag('Popular Choice', { id: 'roomBadge' }, [
                        'absolute',
                        'top-4',
                        'right-4',
                        'bg-yellow-400',
                        'text-yellow-900',
                        'px-3',
                        'py-1',
                        'rounded-full',
                        'text-sm',
                        'font-semibold',
                      ]),
                    ],
                  ),
                  // Room content
                  createDivTag(
                    { id: 'roomContent' },
                    ['p-8'],
                    [
                      createH3Tag('Deluxe Room', { id: 'roomName' }, [
                        'text-2xl',
                        'font-bold',
                        'text-gray-900',
                        'mb-4',
                      ]),
                      createParagraphTag(
                        'Spacious and elegantly designed room with king-size bed, premium city views, modern amenities, and marble bathroom with luxury toiletries.',
                        { id: 'roomDescription' },
                        ['text-gray-600', 'mb-6', 'leading-relaxed'],
                      ),
                      createFlexDiv(
                        [
                          createSpanTag('$299', { id: 'roomPrice' }, [
                            'text-3xl',
                            'font-bold',
                            'text-blue-600',
                          ]),
                          createSmallTag('/night', {}, ['text-gray-500', 'ml-1']),
                          createButtonTag('Book Now', { id: 'bookBtn' }, [
                            'ml-auto',
                            'bg-blue-600',
                            'text-white',
                            'px-6',
                            'py-2',
                            'rounded-full',
                            'font-semibold',
                            'hover:bg-blue-700',
                            'transition-colors',
                          ]),
                        ],
                        'row',
                        ['items-center', 'justify-between'],
                      ),
                    ],
                  ),
                ],
              ),
              // Executive Suite Card
              createDivTag(
                { id: 'roomCard' },
                [
                  'bg-white',
                  'rounded-3xl',
                  'shadow-lg',
                  'overflow-hidden',
                  'hover:shadow-xl',
                  'transition-all',
                  'duration-300',
                ],
                [
                  createDivTag(
                    {
                      id: 'roomImageContainer',
                      style: { background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
                    },
                    ['relative', 'h-64', 'flex', 'items-center', 'justify-center', 'text-6xl'],
                    [createTextNode('🌟')],
                  ),
                  createDivTag(
                    { id: 'roomContent' },
                    ['p-8'],
                    [
                      createH3Tag('Executive Suite', { id: 'roomName' }, [
                        'text-2xl',
                        'font-bold',
                        'text-gray-900',
                        'mb-4',
                      ]),
                      createParagraphTag(
                        'Luxurious suite with separate living area, premium furnishings, panoramic views, private balcony, and exclusive concierge service.',
                        { id: 'roomDescription' },
                        ['text-gray-600', 'mb-6', 'leading-relaxed'],
                      ),
                      createFlexDiv(
                        [
                          createSpanTag('$499', { id: 'roomPrice' }, [
                            'text-3xl',
                            'font-bold',
                            'text-green-600',
                          ]),
                          createSmallTag('/night', {}, ['text-gray-500', 'ml-1']),
                          createButtonTag('Book Now', { id: 'bookBtn' }, [
                            'ml-auto',
                            'bg-green-600',
                            'text-white',
                            'px-6',
                            'py-2',
                            'rounded-full',
                            'font-semibold',
                            'hover:bg-green-700',
                            'transition-colors',
                          ]),
                        ],
                        'row',
                        ['items-center', 'justify-between'],
                      ),
                    ],
                  ),
                ],
              ),
            ],
            2,
            ['gap-8'],
            {},
            'roomsGrid',
          ),
        ],
        ['max-w-7xl', 'mx-auto', 'px-6'],
      ),
    ],
    ['py-20', 'bg-white'],
    { id: 'roomsSection' },
  )
}

// CTA Section using various text formatting
export const createCTASection = (): Tag => {
  return createSectionDiv(
    [
      createContainerDiv(
        [
          createH2Tag('Ready for an Unforgettable Experience?', { id: 'ctaTitle' }, [
            'text-4xl',
            'md:text-5xl',
            'font-bold',
            'text-white',
            'mb-6',
            'text-center',
          ]),
          createDivTag(
            { id: 'ctaSubtitle' },
            ['text-xl', 'text-gray-300', 'mb-8', 'text-center', 'max-w-2xl', 'mx-auto'],
            [
              createTextNode('Book your '),
              createStrongTag('luxury stay', {}, ['text-white']),
              createTextNode(' today and discover what '),
              createEmTag('true hospitality', {}, ['text-yellow-400']),
              createTextNode(' means.'),
            ],
          ),
          createDivTag(
            {},
            ['text-center'],
            [
              createButtonTag('Book Your Stay Now', { id: 'ctaButton' }, [
                'bg-yellow-400',
                'text-gray-900',
                'px-8',
                'py-4',
                'rounded-full',
                'font-bold',
                'text-lg',
                'hover:bg-yellow-300',
                'transition-all',
                'duration-300',
                'shadow-lg',
                'hover:shadow-xl',
              ]),
            ],
          ),
        ],
        ['max-w-4xl', 'mx-auto', 'px-6', 'text-center'],
      ),
    ],
    ['py-20', 'bg-gradient-to-r', 'from-gray-900', 'to-gray-700'],
    { id: 'ctaSection' },
  )
}

// Footer Section demonstrating comprehensive tag usage
export const createFooter = (): Tag => {
  return createDivTag(
    { tagName: 'footer' },
    ['bg-gray-900', 'text-white', 'py-16'],
    [
      createContainerDiv(
        [
          createGridDiv(
            [
              // Company Info Column
              createDivTag(
                {},
                [],
                [
                  createH4Tag('Grand Hotel', {}, [
                    'text-2xl',
                    'font-bold',
                    'mb-4',
                    'bg-gradient-to-r',
                    'from-blue-400',
                    'to-purple-500',
                    'bg-clip-text',
                    'text-transparent',
                  ]),
                  createParagraphTag('Experience luxury redefined in the heart of the city.', {}, [
                    'text-gray-400',
                    'mb-4',
                  ]),
                  createDivTag(
                    {},
                    ['flex', 'space-x-4'],
                    [
                      createLinkButtonTag('📧', '#email', {}, ['text-2xl', 'hover:text-blue-400']),
                      createLinkButtonTag('📱', '#phone', {}, ['text-2xl', 'hover:text-blue-400']),
                      createLinkButtonTag('📍', '#location', {}, [
                        'text-2xl',
                        'hover:text-blue-400',
                      ]),
                    ],
                  ),
                ],
              ),
              // Quick Links Column
              createDivTag(
                {},
                [],
                [
                  createH5Tag('Quick Links', {}, ['text-lg', 'font-semibold', 'mb-4']),
                  createDivTag(
                    {},
                    ['space-y-2'],
                    [
                      createLinkButtonTag('About Us', '#about', {}, [
                        'text-gray-400',
                        'hover:text-white',
                        'block',
                      ]),
                      createLinkButtonTag('Rooms & Suites', '#rooms', {}, [
                        'text-gray-400',
                        'hover:text-white',
                        'block',
                      ]),
                      createLinkButtonTag('Amenities', '#amenities', {}, [
                        'text-gray-400',
                        'hover:text-white',
                        'block',
                      ]),
                      createLinkButtonTag('Contact', '#contact', {}, [
                        'text-gray-400',
                        'hover:text-white',
                        'block',
                      ]),
                    ],
                  ),
                ],
              ),
              // Services Column
              createDivTag(
                {},
                [],
                [
                  createH5Tag('Services', {}, ['text-lg', 'font-semibold', 'mb-4']),
                  createDivTag(
                    {},
                    ['space-y-2'],
                    [
                      createSpanTag('Room Service', {}, ['text-gray-400', 'block']),
                      createSpanTag('Concierge', {}, ['text-gray-400', 'block']),
                      createSpanTag('Valet Parking', {}, ['text-gray-400', 'block']),
                      createSpanTag('Spa & Wellness', {}, ['text-gray-400', 'block']),
                    ],
                  ),
                ],
              ),
              // Contact Column
              createDivTag(
                {},
                [],
                [
                  createH5Tag('Contact Info', {}, ['text-lg', 'font-semibold', 'mb-4']),
                  createDivTag(
                    {},
                    ['space-y-2'],
                    [
                      createParagraphTag('123 Luxury Avenue', {}, ['text-gray-400']),
                      createParagraphTag('Downtown City, DC 12345', {}, ['text-gray-400']),
                      createParagraphTag('+1 (555) 123-4567', {}, ['text-gray-400']),
                      createParagraphTag('info@grandhotel.com', {}, ['text-gray-400']),
                    ],
                  ),
                ],
              ),
            ],
            4,
            ['gap-8', 'mb-8'],
          ),
          // Copyright
          createDivTag(
            {},
            ['border-t', 'border-gray-800', 'pt-8', 'text-center'],
            [
              createDivTag(
                {},
                ['text-gray-400'],
                [
                  createTextNode('© 2025 '),
                  createStrongTag('Grand Hotel', {}, ['text-white']),
                  createTextNode('. All rights reserved. Built with '),
                  createEmTag('luxury', {}, ['text-yellow-400']),
                  createTextNode(' in mind.'),
                ],
              ),
            ],
          ),
        ],
        ['max-w-7xl', 'mx-auto', 'px-6'],
      ),
    ],
  )
}

// Main Template Structure - Complete Page Template
export const createCompletePageTemplate = (): Tag => {
  return createDivTag(
    { id: 'pageWrapper' },
    ['min-h-screen', 'bg-gray-50'],
    [
      createNavigation(),
      createHeroSection(),
      createFeaturesSection(),
      createRoomsSection(),
      createCTASection(),
      createFooter(),
    ],
  )
}

// Export all template components
export const temp1Template = {
  navigation: createNavigation(),
  heroSection: createHeroSection(),
  featuresSection: createFeaturesSection(),
  roomsSection: createRoomsSection(),
  ctaSection: createCTASection(),
  footer: createFooter(),
  completePage: createCompletePageTemplate(),
}

// Data structure similar to the original Page.ts but using our tag system
export const temp1Data = {
  dataSources: [],
  assets: [],
  styles: [
    // You can add custom styles here if needed
    // The template above uses Tailwind classes, but you can also add custom CSS
  ],
  pages: [
    {
      frames: [
        {
          component: temp1Template.completePage,
          id: 'pageMain',
        },
      ],
      type: 'main',
      id: 'GrandHotelHomePage',
    },
  ],
}

export default temp1Data
