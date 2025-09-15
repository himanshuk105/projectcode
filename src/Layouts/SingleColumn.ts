import { Editor } from 'grapesjs'

// export const addSingleColumn = (editor: Editor) => {
//   editor.BlockManager.add('single-column-block', {
//     label: 'Single Column Layout',
//     category: 'Layout',
//     media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,4H7V10H17V4H21V18H17V12H7V18H3V4Z" /></svg>`,
//     content: { type: 'single_column' },
//   })

//   editor.Components.addType('single_column', {
//     extend: 'default',
//     model: {
//       defaults: {
//         tagName: 'section',
//         classes: [
//           'relative',
//           'w-full',
//           'bg-gradient-to-b',
//           'from-green-50',
//           'to-white',
//           'py-16',
//           'px-6',
//           'md:px-12',
//           'lg:px-24',
//           'text-center',
//         ],
//         components: [
//           {
//             tagName: 'div',
//             classes: ['max-w-3xl', 'mx-auto', 'flex', 'flex-col', 'items-center'],
//             components: [
//               {
//                 type: 'text',
//                 tagName: 'p',
//                 content: 'EMPOWERING YOUR BUSINESS WITH CUTTING-EDGE SOFTWARE SOLUTIONS',
//                 classes: [
//                   'text-sm',
//                   'md:text-base',
//                   'font-semibold',
//                   'text-green-600',
//                   'uppercase',
//                   'tracking-wide',
//                   'mb-4',
//                 ],
//               },
//               {
//                 type: 'text',
//                 tagName: 'h1',
//                 content: 'Digital Solutions for Businesses',
//                 classes: [
//                   'text-3xl',
//                   'md:text-5xl',
//                   'font-extrabold',
//                   'text-gray-900',
//                   'leading-tight',
//                   'mb-6',
//                 ],
//               },
//               {
//                 type: 'text',
//                 tagName: 'p',
//                 content:
//                   'At Gaurik, we specialize in delivering innovative digital solutions tailored to businesses in the UK & US. Our expertise in website development, mobile applications, and custom software solutions enables businesses to streamline operations, enhance user experiences, and achieve scalable growth. With a commitment to technological excellence and a customer-first approach, we empower businesses to thrive in the digital landscape.',
//                 classes: ['text-base', 'md:text-lg', 'text-gray-700', 'leading-relaxed', 'mb-8'],
//               },
//               {
//                 type: 'link',
//                 tagName: 'a',
//                 content: "Let's Talk Now",
//                 classes: [
//                   'bg-green-500',
//                   'hover:bg-green-600',
//                   'text-white',
//                   'font-medium',
//                   'py-3',
//                   'px-6',
//                   'rounded-lg',
//                   'shadow-md',
//                   'transition',
//                   'duration-200',
//                 ],
//               },
//             ],
//           },
//         ],
//         droppable: true,
//       },
//     },
//   })
// }

export const addSingleColumn = (editor: Editor) => {
  editor.BlockManager.add('single-column-block', {
    label: 'Single Column Layout',
    category: 'Layout',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,4H7V10H17V4H21V18H17V12H7V18H3V4Z" /></svg>`,
    content: { type: 'single_column' },
  })

  editor.Components.addType('single_column', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'section',
        classes: [
          'relative',
          'w-full',
          'bg-gradient-to-b',
          'from-green-50',
          'to-white',
          'py-16',
          'px-6',
          'md:px-12',
          'lg:px-24',
          'text-center',
        ],
        components: [
          {
            tagName: 'div',
            classes: ['max-w-3xl', 'mx-auto', 'flex', 'flex-col', 'items-center'],
            components: [
              {
                type: 'text',
                tagName: 'p',
                content: 'EMPOWERING YOUR BUSINESS WITH CUTTING-EDGE SOFTWARE SOLUTIONS',
                classes: [
                  'text-sm',
                  'md:text-base',
                  'font-semibold',
                  'text-green-600',
                  'uppercase',
                  'tracking-wide',
                  'mb-4',
                ],
              },
              {
                type: 'text',
                tagName: 'h1',
                content: 'Digital Solutions for Businesses',
                classes: [
                  'text-3xl',
                  'md:text-5xl',
                  'font-extrabold',
                  'text-gray-900',
                  'leading-tight',
                  'mb-6',
                ],
              },
              {
                type: 'text',
                tagName: 'p',
                content:
                  'At Gaurik, we specialize in delivering innovative digital solutions tailored to businesses in the UK & US. Our expertise in website development, mobile applications, and custom software solutions enables businesses to streamline operations, enhance user experiences, and achieve scalable growth. With a commitment to technological excellence and a customer-first approach, we empower businesses to thrive in the digital landscape.',
                classes: ['text-base', 'md:text-lg', 'text-gray-700', 'leading-relaxed', 'mb-8'],
              },
              {
                type: 'link',
                tagName: 'a',
                content: "Let's Talk Now",
                classes: [
                  'bg-green-500',
                  'hover:bg-green-600',
                  'text-white',
                  'font-medium',
                  'py-3',
                  'px-6',
                  'rounded-lg',
                  'shadow-md',
                  'transition',
                  'duration-200',
                ],
              },
            ],
          },
        ],
        droppable: true,
        // Define the traits for different hero variants
        traits: [
          {
            type: 'select',
            label: 'Hero Style',
            name: 'hero-style',
            options: [
              { id: 'default', value: 'default', name: 'Default Green' },
              { id: 'dark-modern', value: 'dark-modern', name: 'Dark Modern' },
              { id: 'minimal-blue', value: 'minimal-blue', name: 'Minimal Blue' },
              { id: 'bold-gradient', value: 'bold-gradient', name: 'Bold Gradient' },
            ],
          },
        ],
      },
    },
    view: {
      onRender() {
        this.listenTo(this.model, 'change:attributes', this.updateStyle)
      },

      updateStyle() {
        const m = this.model.get('attributes')!
        const heroStyle = m['hero-style'] || 'default'
        const element = this.el

        // Remove all existing style classes
        element.className = element.className.replace(/hero-\w+/g, '')

        // Apply base classes
        const baseClasses = [
          'relative',
          'w-full',
          'py-16',
          'px-6',
          'md:px-12',
          'lg:px-24',
          'text-center',
        ]
        element.classList.add(...baseClasses)

        // Apply variant-specific styles
        switch (heroStyle) {
          case 'dark-modern':
            this.applyDarkModernStyle()
            break
          case 'minimal-blue':
            this.applyMinimalBlueStyle()
            break
          case 'bold-gradient':
            this.applyBoldGradientStyle()
            break
          default:
            this.applyDefaultStyle()
        }
      },

      applyDefaultStyle() {
        const classes = ['bg-gradient-to-b', 'from-green-50', 'to-white', 'hero-default']
        this.el.classList.add(...classes)

        // Update text colors for default style
        this.updateTextColors({
          subtitle: 'text-green-600',
          title: 'text-gray-900',
          description: 'text-gray-700',
          button: 'bg-green-500 hover:bg-green-600 text-white',
        })
      },

      applyDarkModernStyle() {
        const classes = [
          'bg-gradient-to-br',
          'from-gray-900',
          'via-gray-800',
          'to-black',
          'hero-dark-modern',
        ]
        this.el.classList.add(...classes)

        this.updateTextColors({
          subtitle: 'text-blue-400',
          title: 'text-white',
          description: 'text-gray-300',
          button: 'bg-blue-600 hover:bg-blue-700 text-white',
        })
      },

      applyMinimalBlueStyle() {
        const classes = ['bg-gradient-to-r', 'from-blue-50', 'to-indigo-100', 'hero-minimal-blue']
        this.el.classList.add(...classes)

        this.updateTextColors({
          subtitle: 'text-blue-600',
          title: 'text-gray-800',
          description: 'text-gray-600',
          button: 'bg-blue-500 hover:bg-blue-600 text-white',
        })
      },

      applyBoldGradientStyle() {
        const classes = [
          'bg-gradient-to-r',
          'from-purple-500',
          'via-pink-500',
          'to-red-500',
          'hero-bold-gradient',
        ]
        this.el.classList.add(...classes)

        this.updateTextColors({
          subtitle: 'text-white',
          title: 'text-white',
          description: 'text-gray-100',
          button: 'bg-white hover:bg-gray-100 text-purple-600',
        })
      },

      updateTextColors(colors: any) {
        const container = this.el.querySelector('div')
        if (!container) return

        // Update subtitle
        const subtitle = container.querySelector('p:first-child')
        if (subtitle) {
          subtitle.className = subtitle.className.replace(/text-\w+-\d+/g, '')
          subtitle.classList.add(...colors.subtitle.split(' '))
        }

        // Update title
        const title = container.querySelector('h1')
        if (title) {
          title.className = title.className.replace(/text-\w+-\d+/g, '')
          title.classList.add(...colors.title.split(' '))
        }

        // Update description
        const description = container.querySelector('p:nth-child(3)')
        if (description) {
          description.className = description.className.replace(/text-\w+-\d+/g, '')
          description.classList.add(...colors.description.split(' '))
        }

        // Update button
        const button = container.querySelector('a')
        if (button) {
          button.className = button.className.replace(/(bg|hover:bg|text)-\w+-\d+/g, '')
          const buttonClasses = colors.button.split(' ')
          button.classList.add(...buttonClasses)
        }
      },

      init() {
        // Apply initial style based on default trait value
        this.updateStyle()
      },
    },
  })
}

export const addCustomBlocks = (editor: Editor) => {
  editor.Components.addType('text_section', {
    extend: 'text',
    model: {
      defaults: {
        tagName: 'p',
        content: 'Your text here',
        traits: [
          {
            type: 'select',
            label: 'Text Type',
            name: 'tagName',
            options: [
              { id: 'h1', name: 'H1' },
              { id: 'h2', name: 'H2' },
              { id: 'h3', name: 'H3' },
              { id: 'h4', name: 'H4' },
              { id: 'h5', name: 'H5' },
              { id: 'h6', name: 'H6' },
              { id: 'p', name: 'Paragraph' },
              { id: 'span', name: 'Span' },
              { id: 'pre', name: 'Pre' },
            ],
            changeProp: true,
          },
          {
            type: 'select',
            label: 'Text Style',
            name: 'textStyle',
            options: [
              { id: 'default', name: 'Default' },
              { id: 'center', name: 'Centered' },
              { id: 'gradient', name: 'Gradient' },
              { id: 'shadow', name: 'Shadow' },
              { id: 'uppercase', name: 'Uppercase' },
              { id: 'tracking', name: 'Wide Tracking' },
            ],
            changeProp: true,
          },
        ],
      },
      // Tailwind per tag
      getTextClassForTag(tagName: string) {
        const classMap: Record<string, string[]> = {
          h1: ['text-4xl', 'font-bold', 'text-gray-900'],
          h2: ['text-3xl', 'font-bold', 'text-gray-900'],
          h3: ['text-2xl', 'font-semibold', 'text-gray-800'],
          h4: ['text-xl', 'font-semibold', 'text-gray-700'],
          h5: ['text-lg', 'font-medium', 'text-gray-700'],
          h6: ['text-base', 'font-medium', 'text-gray-600'],
          p: ['text-base', 'text-gray-700'],
          span: ['text-base', 'text-gray-700'],
          pre: ['text-base', 'font-mono', 'bg-gray-100', 'p-2', 'rounded'],
        }
        return classMap[tagName] || classMap['p']
      },
      // Tailwind per style
      getStyleClasses(style: string) {
        const styleMap: Record<string, string[]> = {
          default: [],
          center: ['text-center'],
          gradient: [
            'bg-gradient-to-r',
            'from-green-400',
            'to-blue-500',
            'bg-clip-text',
            'text-transparent',
          ],
          shadow: ['drop-shadow-lg'],
          uppercase: ['uppercase'],
          tracking: ['tracking-wider'],
        }
        return styleMap[style] || []
      },
      //   init() {
      //     this.on('change:tagName change:textStyle', () => {
      //       const tag = this.get('tagName')
      //       const style = this.get('textStyle') || 'default'
      //       const tagClasses = this.getTextClassForTag(tag)
      //       const styleClasses = this.getStyleClasses(style)
      //       this.set({ classes: [...tagClasses, ...styleClasses] })
      //     })
      //   },
      init() {
        this.on('change:tagName change:textStyle', () => {
          const tag = this.get('tagName')
          const style = this.get('textStyle') || 'default'
          const tagClasses = this.getTextClassForTag(tag)
          const styleClasses = this.getStyleClasses(style)

          // ✅ Fix: Apply classes via attributes.class
          this.set({
            tagName: tag,
            attributes: {
              class: [...tagClasses, ...styleClasses].join(' '),
            },
          })
        })
      },
    },
  })

  // Block
  editor.BlockManager.add('text-section-block', {
    label: 'Text Section',
    category: 'Text',
    media: `<svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z"/>
    </svg>`,
    content: { type: 'text_section' },
  })
}

// --- CARD COMPONENT ---
export const addCardBlock = (editor: Editor) => {
  editor.Components.addType('card_component', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class:
            'flex flex-col items-center justify-center p-4 rounded-xl shadow-lg bg-white w-44 hover:shadow-2xl transition-shadow duration-300',
        },
        components: [
          {
            type: 'image',
            tagName: 'img',
            attributes: {
              src: 'https://via.placeholder.com/100x100',
              alt: 'Logo',
              class: 'h-20 w-20 object-contain mb-3 rounded-full border-2 border-gray-200',
            },
          },
          {
            type: 'text',
            tagName: 'h3',
            content: 'Card Title',
            attributes: {
              class: 'text-base font-bold text-gray-900 text-center mb-1',
            },
          },
          {
            tagName: 'p',
            type: 'text',
            content: 'Card description goes here.',
            attributes: {
              class: 'text-sm text-gray-600 text-center',
            },
          },
        ],
        traits: [
          { type: 'text', label: 'Title', name: 'title', changeProp: true },
          { type: 'text', label: 'Description', name: 'description', changeProp: true },
          { type: 'text', label: 'Image URL', name: 'imgSrc', changeProp: true },
        ],
      },
      init() {
        this.on('change:title change:description change:imgSrc', () => {
          const title = this.get('title') || 'Card Title'
          const desc = this.get('description') || 'Card description goes here.'
          const imgSrc = this.get('imgSrc') || 'https://via.placeholder.com/100x100'

          const img = this.find('img')[0]
          const h3 = this.find('h3')[0]
          const p = this.find('p')[0]

          if (img) img.addAttributes({ src: imgSrc })
          if (h3) h3.components(title)
          if (p) p.components(desc)
        })
      },
    },
  })

  // Block
  editor.BlockManager.add('card-block', {
    label: 'Simple Card',
    category: 'Cards',
    media: `<svg viewBox="0 0 24 24" width="24" height="24">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"/>
    </svg>`,
    content: { type: 'card_component' },
  })
}

// --- AUTO CAROUSEL SECTION ---
export const addAutoCarouselBlock = (editor: Editor) => {
  editor.Components.addType('auto_carousel_section', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'section',
        editable: true,
        attributes: { class: 'w-full py-10 bg-gray-50' },
        components: [
          {
            tagName: 'h2',
            type: 'text',
            content: 'Our Features',
            attributes: { class: 'text-2xl font-bold text-center mb-6 text-gray-800' },
          },
          {
            tagName: 'div',
            attributes: {
              class:
                'carousel-track flex overflow-x-auto gap-6 px-6 scroll-smooth scrollbar-hide items-center',
            },
            components: [
              { type: 'card_component' },
              { type: 'card_component' },
              { type: 'card_component' },
              { type: 'card_component' },
              { type: 'card_component' },
            ],
          },
        ],
      },
    },
  })

  // Block
  editor.BlockManager.add('auto-carousel-block', {
    label: 'Simple Slider',
    category: 'Sliders',
    media: `<svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="currentColor" d="M4 6h16v12H4z"/>
    </svg>`,
    content: { type: 'auto_carousel_section' },
  })
}

export const addTwoColumn = (editor: Editor) => {
  editor.BlockManager.add('two-column-block', {
    label: 'Two Column Layout',
    category: 'Layout',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,4H21V10H3V4M3,14H21V20H3V14Z" /></svg>`,
    content: { type: 'two_column' },
  })

  editor.Components.addType('two_column', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'section',
        classes: ['relative', 'w-full', 'bg-green-50', 'py-16', 'px-6', 'md:px-12', 'lg:px-24'],
        components: [
          {
            tagName: 'div',
            classes: ['max-w-7xl', 'mx-auto', 'grid', 'md:grid-cols-2', 'gap-12', 'items-start'],
            components: [
              // Left Column
              {
                type: 'wrapper',
                tagName: 'div',
                classes: ['flex', 'flex-col', 'justify-center'],
                components: [
                  {
                    type: 'text',
                    tagName: 'p',
                    content: 'OUR SERVICES',
                    classes: ['text-sm', 'font-semibold', 'text-green-600', 'uppercase', 'mb-2'],
                  },
                  {
                    type: 'text',
                    tagName: 'h2',
                    content: 'Why Choose Gaurik',
                    classes: ['text-3xl', 'md:text-5xl', 'font-extrabold', 'text-gray-900', 'mb-4'],
                  },
                  {
                    type: 'text',
                    tagName: 'p',
                    content:
                      'Gaurik is a leading IT services company that stands out for its innovative solutions and commitment to excellence. Here’s why you should choose Gaurik for your technology needs:',
                    classes: ['text-gray-700', 'text-base', 'md:text-lg', 'mb-6'],
                  },
                  {
                    type: 'image',
                    src: '/path-to-image.jpg', // Replace with default or placeholder image
                    classes: ['rounded-lg', 'shadow-lg'],
                  },
                ],
              },
              // Right Column (List)
              {
                tagName: 'div',
                type: 'wrapper',
                classes: ['flex', 'flex-col', 'space-y-6'],
                components: [
                  {
                    type: 'text',
                    tagName: 'div',
                    content: `<div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 class="font-bold text-gray-900">Expertise & Experience:</h3>
                          <p class="text-gray-700">Gaurik provides innovative IT solutions with expertise, precision, and a commitment to business success.</p>
                        </div>
                      </div>`,
                  },
                  {
                    type: 'text',
                    tagName: 'div',
                    content: `<div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 class="font-bold text-gray-900">Tailored Solutions:</h3>
                          <p class="text-gray-700">Gaurik offers IT solutions: development, consulting, cloud services, and integration.</p>
                        </div>
                      </div>`,
                  },
                  // Add other list items similarly
                ],
              },
            ],
          },
        ],
        droppable: true,
      },
    },
    view: {},
  })
}

export const customulTag = (editor: Editor) => {
  editor.BlockManager.add('ul-layout', {
    label: 'List Layout',
    category: 'Layout',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,4H21V10H3V4M3,14H21V20H3V14Z" /></svg>`,
    content: { type: 'list_layout' },
  })

  editor.Components.addType('list_layout', {
    extend: 'default',
    model: {
      defaults: {
        type: 'wrapper',
        tagName: 'ul',
        classes: ['flex', 'flex-col', 'space-y-6'],
        components: [
          {
            tagName: 'li',
            type: 'text',
            classes: ['flex', 'flex-col', 'space-y-6'],
            content: 'hi',
          },
          {
            tagName: 'li',
            classes: ['flex', 'flex-col', 'space-y-6'],
            content: 'hi',
            type: 'text',
          },
        ],

        droppable: true,
      },
    },
    view: {},
  })
}

export const customliTag = (editor: Editor) => {
  editor.BlockManager.add('ul-layout', {
    label: 'Li Tag Layout',
    category: 'Basic',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,4H21V10H3V4M3,14H21V20H3V14Z" /></svg>`,
    content: { type: 'list_layout' },
  })

  editor.Components.addType('list_layout', {
    extend: 'default',
    model: {
      defaults: {
        type: 'wrapper',
        tagName: 'ul',
        classes: ['flex', 'flex-col', 'space-y-6'],
        components: [
          {
            tagName: 'li',
            type: 'text',
            classes: ['flex', 'flex-col', 'space-y-6'],
            content: 'hi',
          },
          {
            tagName: 'li',
            classes: ['flex', 'flex-col', 'space-y-6'],
            content: 'hi',
            type: 'text',
          },
        ],

        droppable: true,
      },
    },
    view: {},
  })
}

export const addModernHeroSections = (editor: Editor) => {
  // ========== HERO 1: Modern Hero with Background Image ==========
  editor.BlockManager.add('modern-hero-image', {
    label: 'Modern Hero (Image Background)',
    category: 'Layout',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h18v14H3z"/></svg>`,
    content: { type: 'modern_hero_image' },
  })

  editor.Components.addType('modern_hero_image', {
    extend: 'default',
    model: {
      defaults: {
        type: 'wrapper',
        tagName: 'section',
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

        components: [
          {
            tagName: 'div',
            classes: ['bg-black/60', 'p-10', 'rounded-xl', 'max-w-4xl', 'mx-auto'],
            components: [
              {
                type: 'text',
                tagName: 'h1',
                content: 'Innovating the Future of Business',
                classes: ['text-4xl', 'md:text-6xl', 'font-extrabold', 'mb-6', 'leading-tight'],
              },
              {
                type: 'text',
                tagName: 'p',
                content:
                  'Discover how cutting-edge technology and design come together to elevate your digital presence.',
                classes: ['text-lg', 'md:text-xl', 'mb-8', 'text-gray-200'],
              },
              {
                type: 'link',
                tagName: 'a',
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
              },
            ],
          },
        ],
      },
    },
  })

  // ========== HERO 2: Split Hero (Text + Side Image) ==========
  editor.BlockManager.add('modern-hero-split', {
    label: 'Modern Hero (Split)',
    category: 'Layout',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h8v14H3V5m10 0h8v14h-8V5Z" /></svg>`,
    content: { type: 'modern_hero_split' },
  })

  editor.Components.addType('modern_hero_split', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'section',
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
            tagName: 'div',
            classes: ['flex', 'flex-col', 'justify-center'],
            components: [
              {
                type: 'text',
                tagName: 'p',
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
              },
              {
                type: 'text',
                tagName: 'h1',
                content: 'Modern Solutions for a Digital World',
                classes: [
                  'text-3xl',
                  'md:text-5xl',
                  'font-extrabold',
                  'text-gray-900',
                  'leading-tight',
                  'mb-6',
                ],
              },
              {
                type: 'text',
                tagName: 'p',
                content:
                  'From websites to mobile apps, we deliver tailored digital solutions that help businesses grow, scale, and succeed globally.',
                classes: ['text-base', 'md:text-lg', 'text-gray-700', 'leading-relaxed', 'mb-8'],
              },
              {
                type: 'link',
                tagName: 'a',
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
              },
            ],
          },
          {
            tagName: 'div',
            classes: ['w-full', 'h-96', 'rounded-xl', 'overflow-hidden', 'shadow-lg'],
            components: [
              {
                type: 'image',
                tagName: 'img',
                attributes: {
                  src: 'https://images.unsplash.com/photo-1618005198919-5_ZuxsChDng?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                  alt: 'Abstract digital landscape',
                  class: 'w-full h-full object-cover',
                },
              },
            ],
          },
        ],
      },
    },
  })
}

export const addModernListBlock = (editor: Editor) => {
  editor.BlockManager.add('modern-list-block', {
    label: 'Modern List',
    category: 'Layout',
    media: `<svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 5h14v2H7V5m0 6h14v2H7v-2m0 6h14v2H7v-2M3 5h2v2H3V5m0 6h2v2H3v-2m0 6h2v2H3v-2Z"/>
            </svg>`,
    content: { type: 'modern_list' },
  })

  editor.Components.addType('modern_list', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'ul',
        classes: ['space-y-4', 'list-none'],
        droppable: true,
        components: [
          {
            type: 'list_item',
          },
          {
            type: 'list_item',
          },
          {
            type: 'list_item',
          },
        ],
        traits: [
          {
            type: 'select',
            label: 'List Style',
            name: 'list-style',
            options: [
              { id: 'check', name: 'Check Icons', value: 'check' },
              { id: 'bullet', name: 'Bullets', value: 'bullet' },
              { id: 'number', name: 'Numbered', value: 'number' },
            ],
          },
        ],
      },
    },
    view: {
      onRender() {
        this.listenTo(this.model, 'change:attributes', this.updateListStyle)
      },
      updateListStyle() {
        const style = this.model.get('attributes')?.['list-style'] || 'check'
        const items = this.el.querySelectorAll('li')

        items.forEach((li, index) => {
          const iconSpan = li.querySelector('span.list-icon')
          if (!iconSpan) return

          iconSpan.innerHTML = '' // reset
          iconSpan.className = 'list-icon flex-shrink-0 text-green-600'

          if (style === 'check') {
            iconSpan.innerHTML =
              '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>'
          } else if (style === 'bullet') {
            iconSpan.innerHTML =
              '<span class="w-2 h-2 bg-gray-600 rounded-full inline-block"></span>'
          } else if (style === 'number') {
            iconSpan.innerHTML = `<span class="font-bold">${index + 1}.</span>`
          }
        })
      },
      init() {
        this.updateListStyle()
      },
    },
  })

  // Define reusable list item
  editor.Components.addType('list_item', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'li',
        classes: ['flex', 'items-start', 'gap-3'],
        components: [
          {
            tagName: 'span',
            classes: ['list-icon', 'flex-shrink-0', 'text-green-600'],
          },
          {
            type: 'text',
            tagName: 'p',
            content: 'Your feature or list item goes here',
            classes: ['text-base', 'text-gray-700', 'leading-relaxed'],
          },
        ],
        draggable: false,
      },
    },
  })
}

export const addTestimonial = (editor: Editor) => {
  editor.BlockManager.add('testimonial-section', {
    label: 'Testimonials',
    category: 'Sections',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 11h2V9H9v2m0 4h2v-2H9v2m-4-6h2V7H5v2m0 4h2v-2H5v2m0 4h2v-2H5v2m8-10h6v2h-6V7m0 4h6v2h-6v-2m0 4h6v2h-6v-2Z"/></svg>`,
    content: { type: 'testimonial_section' },
  })

  editor.Components.addType('testimonial_section', {
    extend: 'default',
    model: {
      defaults: {
        tagName: 'section',
        classes: ['bg-gray-50', 'py-20', 'px-6', 'md:px-12', 'lg:px-24'],
        components: [
          {
            tagName: 'div',
            classes: ['max-w-4xl', 'mx-auto', 'text-center'],
            components: [
              {
                type: 'text',
                tagName: 'h2',
                content: 'What Our Clients Say',
                classes: ['text-3xl', 'font-bold', 'mb-8'],
              },
              {
                tagName: 'div',
                classes: ['grid', 'md:grid-cols-2', 'gap-8'],
                components: [
                  {
                    tagName: 'div',
                    classes: ['bg-white', 'p-6', 'rounded-lg', 'shadow'],
                    components: [
                      {
                        type: 'text',
                        tagName: 'p',
                        content:
                          '“This team transformed our digital presence. Highly recommended!”',
                        classes: ['text-gray-700', 'mb-4'],
                      },
                      {
                        type: 'text',
                        tagName: 'p',
                        content: '- Alex Johnson, CEO of TechCorp',
                        classes: ['text-sm', 'text-gray-500'],
                      },
                    ],
                  },
                  {
                    tagName: 'div',
                    classes: ['bg-white', 'p-6', 'rounded-lg', 'shadow'],
                    components: [
                      {
                        type: 'text',
                        tagName: 'p',
                        content:
                          '“Incredible performance and modern design — exactly what we needed.”',
                        classes: ['text-gray-700', 'mb-4'],
                      },
                      {
                        type: 'text',
                        tagName: 'p',
                        content: '- Sarah Lee, Founder of StartUpX',
                        classes: ['text-sm', 'text-gray-500'],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  })
}

import { Component } from 'grapesjs'

interface NavbarComponent extends Component {
  handleComponentChange(): void
}

interface ComponentDefaults {
  tagName: string
  attributes: Record<string, string>
  content?: string
  components?: Array<{ type: string; content?: string; attributes?: Record<string, string> }>
  droppable?: string
}

interface ComponentTypeDefinition {
  model: {
    defaults: ComponentDefaults
    init?(): void
    handleComponentChange?(): void
  }
}

interface BlockDefinition {
  label: string
  category: string
  content: { type: string }
  media?: string
}

export const addNavigation = (editor: Editor): void => {
  // Logo component
  editor.Components.addType('navbar-logo', {
    model: {
      defaults: {
        type: 'textnode',
        tagName: 'div',
        attributes: {
          class:
            'text-2xl font-bold text-blue-600 cursor-pointer select-none flex items-center transition-all duration-300 hover:text-blue-700 hover:scale-105',
        },
        components: [
          {
            type: 'text',
            content: 'Brand',
          },
        ],
      },
    },
  })
  // Individual nav link
  editor.Components.addType('navbar-link', {
    model: {
      defaults: {
        type: 'link',
        editable: true,
        tagName: 'a',
        attributes: {
          href: '#',
          class:
            'text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5',
        },
        components: [
          {
            type: 'text',
            content: 'Home',
          },
        ],
      },
    },
  })

  // CTA Button component
  editor.Components.addType('navbar-cta', {
    model: {
      defaults: {
        tagName: 'button',
        type: 'textnode',
        attributes: {
          class:
            'bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800',
        },
        components: [
          {
            type: 'text',
            content: 'Get Started',
          },
        ],
      },
    },
  })

  // Navigation links container
  editor.Components.addType('navbar-links', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'hidden md:flex items-center space-x-1',
        },
        droppable: '[data-gjs-type=navbar-link]',
        components: [
          { type: 'navbar-link', content: 'Home' },
          { type: 'navbar-link', content: 'About' },
          { type: 'navbar-link', content: 'Services' },
          { type: 'navbar-link', content: 'Contact' },
        ],
      },
    },
  })

  // Mobile menu (hidden by default, shown when hamburger is clicked)
  editor.Components.addType('navbar-mobile-menu', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class:
            'hidden md:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl p-6 space-y-2 animate-in slide-in-from-top-2 duration-300',
        },
        droppable: '[data-gjs-type=navbar-link]',
        components: [
          {
            type: 'navbar-link',
            content: 'Home',
            attributes: {
              class:
                'block w-full text-center py-3 px-4 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50',
            },
          },
          {
            type: 'navbar-link',
            content: 'About',
            attributes: {
              class:
                'block w-full text-center py-3 px-4 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50',
            },
          },
          {
            type: 'navbar-link',
            content: 'Services',
            attributes: {
              class:
                'block w-full text-center py-3 px-4 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50',
            },
          },
          {
            type: 'navbar-link',
            content: 'Contact',
            attributes: {
              class:
                'block w-full text-center py-3 px-4 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50',
            },
          },
          {
            type: 'navbar-cta',
            attributes: {
              class:
                'w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer transition-all duration-300 shadow-lg shadow-blue-600/30',
            },
          },
        ],
      },
    },
  })

  // Right section with CTA
  editor.Components.addType('navbar-actions', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'hidden md:flex items-center space-x-4',
        },
        components: [{ type: 'navbar-cta' }],
      },
    },
  })

  // Modern hamburger menu
  editor.Components.addType('navbar-toggle', {
    model: {
      defaults: {
        tagName: 'button',
        attributes: {
          class: 'md:hidden flex flex-col justify-center items-center w-6 h-6 cursor-pointer group',
        },
        content: `
          <span class="hamburger-line w-full h-0.5 bg-gray-700 transition-all duration-300 group-hover:bg-blue-600"></span>
          <span class="hamburger-line w-full h-0.5 bg-gray-700 mt-1 transition-all duration-300 group-hover:bg-blue-600"></span>
          <span class="hamburger-line w-full h-0.5 bg-gray-700 mt-1 transition-all duration-300 group-hover:bg-blue-600"></span>
        `,
      },
    },
  })

  // Main navbar container
  editor.Components.addType('navbar', {
    model: {
      defaults: {
        tagName: 'nav',
        attributes: {
          class:
            'sticky top-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 relative',
        },
        components: [
          { type: 'navbar-logo' },
          { type: 'navbar-links' },
          { type: 'navbar-actions' },
          { type: 'navbar-toggle' },
          { type: 'navbar-mobile-menu' },
        ],
      },
      init(this: NavbarComponent): void {
        this.listenTo(this, 'change:components', this.handleComponentChange)
      },

      handleComponentChange(this: NavbarComponent): void {
        // Add mobile menu toggle functionality after component is added to DOM
        setTimeout((): void => {
          const element: HTMLElement | null = this.view?.el || null
          if (!element) return

          const toggle: HTMLButtonElement | null = element.querySelector('.navbar-toggle')
          const mobileMenu: HTMLElement | null = element.querySelector(
            '[class*="navbar-mobile-menu"]',
          )

          if (toggle && mobileMenu && !toggle.hasAttribute('data-listener-added')) {
            toggle.setAttribute('data-listener-added', 'true')

            toggle.addEventListener('click', (): void => {
              const isHidden: boolean = mobileMenu.classList.contains('hidden')

              if (isHidden) {
                mobileMenu.classList.remove('hidden')
                // Transform hamburger to X
                const lines: NodeListOf<HTMLSpanElement> =
                  toggle.querySelectorAll('.hamburger-line')
                if (lines.length >= 3) {
                  lines[0].style.transform = 'rotate(45deg) translate(3px, 3px)'
                  lines[1].style.opacity = '0'
                  lines[2].style.transform = 'rotate(-45deg) translate(4px, -4px)'
                }
              } else {
                mobileMenu.classList.add('hidden')
                // Reset hamburger
                const lines: NodeListOf<HTMLSpanElement> =
                  toggle.querySelectorAll('.hamburger-line')
                if (lines.length >= 3) {
                  lines[0].style.transform = 'none'
                  lines[1].style.opacity = '1'
                  lines[2].style.transform = 'none'
                }
              }
            })
          }
        }, 100)
      },
    },
  })

  // Add the navbar block to the blocks panel
  editor.Blocks.add('modern-navbar-block', {
    label: 'Modern Navbar',
    category: 'Navigation',
    content: { type: 'navbar' },
    media: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
    </svg>`,
  } as BlockDefinition)
}

export const createLandingPageComponents = (editor: Editor) => {
  const domc = editor.DomComponents
  const bm = editor.Blocks

  // Modern Heading Component
  domc.addType('modern-heading', {
    isComponent: (el) => el.tagName && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName),

    model: {
      defaults: {
        tagName: 'h2',
        attributes: {
          class: 'text-3xl md:text-4xl font-bold text-gray-900 mb-4',
        },
        type: 'textnode',
        components: [{ type: 'text', content: 'Modern Heading' }],
        traits: [
          {
            type: 'select',
            name: 'tagName',
            label: 'Heading Level',
            options: [
              { value: 'h1', name: 'H1' },
              { value: 'h2', name: 'H2' },
              { value: 'h3', name: 'H3' },
              { value: 'h4', name: 'H4' },
              { value: 'h5', name: 'H5' },
              { value: 'h6', name: 'H6' },
            ],
          },
          {
            type: 'select',
            name: 'size',
            label: 'Size',
            options: [
              { value: 'small', name: 'Small' },
              { value: 'medium', name: 'Medium' },
              { value: 'large', name: 'Large' },
              { value: 'extra-large', name: 'Extra Large' },
            ],
            changeProp: 1,
          },
        ],
      },

      init() {
        this.on('change:size', this.updateSize)
      },

      updateSize() {
        const size = this.get('size')
        const sizeClasses = {
          small: 'text-lg md:text-xl',
          medium: 'text-2xl md:text-3xl',
          large: 'text-3xl md:text-4xl',
          'extra-large': 'text-4xl md:text-6xl',
        }

        const currentClass = this.get('attributes').class || ''
        const newClass = currentClass.replace(/text-\w+/g, '') + ' ' + sizeClasses[size]
        this.addAttributes({ class: newClass.trim() })
      },
    },
  })

  // Modern Paragraph Component
  domc.addType('modern-paragraph', {
    isComponent: (el) => el.tagName === 'P',

    model: {
      defaults: {
        tagName: 'p',
        attributes: {
          class: 'text-lg text-gray-600 leading-relaxed mb-6',
        },
        type: 'textnode',
        components: [
          {
            type: 'text',
            content: 'I am modern p',
          },
        ],
        traits: [
          {
            type: 'select',
            name: 'variant',
            label: 'Style',
            options: [
              { value: 'default', name: 'Default' },
              { value: 'lead', name: 'Lead' },
              { value: 'small', name: 'Small' },
              { value: 'muted', name: 'Muted' },
            ],
            changeProp: 1,
          },
        ],
      },

      init() {
        this.on('change:variant', this.updateVariant)
      },

      updateVariant() {
        const variant = this.get('variant')
        const variantClasses = {
          default: 'text-lg text-gray-600 leading-relaxed',
          lead: 'text-xl text-gray-700 leading-relaxed font-medium',
          small: 'text-sm text-gray-500 leading-normal',
          muted: 'text-base text-gray-400 leading-normal',
        }

        this.addAttributes({ class: variantClasses[variant] + ' mb-6' })
      },
    },
  })

  // Modern Button Component
  domc.addType('modern-button', {
    isComponent: (el) =>
      el.tagName === 'BUTTON' || (el.tagName === 'A' && el.classList.contains('btn')),

    model: {
      defaults: {
        tagName: 'button',
        attributes: {
          class:
            'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg',
        },
        type: 'textnode',
        components: [{ type: 'text', content: 'Get Started' }],
        traits: [
          { name: 'href', label: 'Link (if applicable)' },
          {
            type: 'select',
            name: 'variant',
            label: 'Style',
            options: [
              { value: 'primary', name: 'Primary' },
              { value: 'secondary', name: 'Secondary' },
              { value: 'outline', name: 'Outline' },
              { value: 'ghost', name: 'Ghost' },
            ],
            changeProp: 1,
          },
          {
            type: 'select',
            name: 'size',
            label: 'Size',
            options: [
              { value: 'small', name: 'Small' },
              { value: 'medium', name: 'Medium' },
              { value: 'large', name: 'Large' },
            ],
            changeProp: 1,
          },
        ],
      },

      init() {
        this.on('change:variant change:size', this.updateStyles)
        this.on('change:href', this.updateTagName)
      },

      updateTagName() {
        const href = this.get('href')
        if (href && href.trim()) {
          this.set('tagName', 'a')
          this.addAttributes({ href })
        } else {
          this.set('tagName', 'button')
          this.removeAttributes('href')
        }
      },

      updateStyles() {
        const variant = this.get('variant') || 'primary'
        const size = this.get('size') || 'medium'

        const variantClasses = {
          primary: 'bg-blue-600 hover:bg-blue-700 text-white',
          secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
          outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
          ghost: 'text-blue-600 hover:bg-blue-50',
        }

        const sizeClasses = {
          small: 'py-2 px-4 text-sm',
          medium: 'py-3 px-8 text-base',
          large: 'py-4 px-12 text-lg',
        }

        const baseClasses =
          'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
        const newClass = `${variantClasses[variant]} ${sizeClasses[size]} ${baseClasses}`

        this.addAttributes({ class: newClass })
      },
    },
  })

  // Modern Card Component
  domc.addType('modern-card', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class:
            'bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1',
        },
        components: [
          {
            tagName: 'div',
            attributes: { class: 'mb-4' },
            components: [{ type: 'modern-heading' }],
          },
          {
            type: 'modern-paragraph',
          },
        ],
        traits: [
          {
            type: 'select',
            name: 'variant',
            label: 'Card Style',
            options: [
              { value: 'default', name: 'Default' },
              { value: 'bordered', name: 'Bordered' },
              { value: 'elevated', name: 'Elevated' },
            ],
            changeProp: 1,
          },
        ],
      },

      init() {
        this.on('change:variant', this.updateVariant)
      },

      updateVariant() {
        const variant = this.get('variant')
        const variantClasses = {
          default: 'bg-white rounded-xl shadow-lg hover:shadow-xl',
          bordered:
            'bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-md',
          elevated: 'bg-white rounded-xl shadow-2xl hover:shadow-3xl',
        }

        const baseClasses = 'p-6 transition-all duration-300 transform hover:-translate-y-1'
        this.addAttributes({ class: `${variantClasses[variant]} ${baseClasses}` })
      },
    },
  })

  domc.addType('container', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        },
        editable: true,
        droppable: true,
        type: 'textnode',
        components: [{ type: 'text', content: 'Container content goes here' }],
      },
    },
  })

  // Section Component
  domc.addType('section', {
    model: {
      defaults: {
        tagName: 'section',
        attributes: {
          class: 'py-16 lg:py-24',
        },
        droppable: true,
        type: 'default',
        components: [
          {
            type: 'container',
          },
        ],
      },
    },
  })

  domc.addType('hero-section', {
    model: {
      defaults: {
        tagName: 'section',

        attributes: {
          class:
            'relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white',
        },
        components: [
          {
            type: 'container',
            components: [
              {
                tagName: 'div',
                attributes: { class: 'text-center max-w-4xl mx-auto' },
                components: [
                  {
                    type: 'modern-heading',
                    attributes: { class: 'text-5xl md:text-7xl font-bold mb-6 text-white' },
                    // components: [{ type: 'textnode', content: 'Build Amazing Landing Pages' }],
                  },
                  {
                    type: 'modern-paragraph',
                    // attributes: { class: 'text-xl md:text-2xl mb-8 text-blue-100' },
                    // components: [
                    //   {
                    //     type: 'textnode',
                    //     content:
                    //       'Create stunning, responsive landing pages with our modern component library.',
                    //   },
                    // ],
                  },
                  {
                    tagName: 'div',
                    attributes: { class: 'flex flex-col md:flex-row gap-4 justify-center' },
                    components: [
                      {
                        type: 'modern-button',
                        attributes: {
                          class:
                            'bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg',
                        },
                      },
                      {
                        type: 'modern-button',
                        attributes: {
                          class:
                            'border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  })

  // Service Card Component
  domc.addType('service-card', {
    model: {
      defaults: {
        tagName: 'div',
        attributes: {
          class:
            'bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2',
        },
        components: [
          {
            tagName: 'img',
            type: 'image',
            attributes: {
              class:
                'w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6',
              src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              alt: 'Avatar-image',
            },
          },
          {
            type: 'modern-heading',
            attributes: { class: 'text-2xl font-bold mb-4 text-gray-900' },
          },
          {
            type: 'modern-paragraph',
            attributes: { class: 'text-gray-600' },
            content: 'Lightning-fast loading speeds and optimized',
          },
        ],
        traits: [{ name: 'icon', label: 'Icon (emoji or text)' }],
      },

      init() {
        this.on('change:icon', this.updateIcon)
      },

      updateIcon() {
        const icon = this.get('icon')
        if (icon) {
          const iconElement = this.find('span')[0]
          if (iconElement) {
            iconElement.components([{ type: 'textnode', content: icon }])
          }
        }
      },
    },
  })

  // Services Section Component
  domc.addType('services-section', {
    model: {
      defaults: {
        type: 'section',
        attributes: {
          class: 'py-16 lg:py-24 bg-gray-50',
        },
        components: [
          {
            type: 'container',
            components: [
              {
                tagName: 'div',
                attributes: { class: 'text-center mb-16' },
                components: [
                  {
                    type: 'modern-heading',
                    attributes: { class: 'text-4xl md:text-5xl font-bold mb-6' },
                  },
                  {
                    type: 'modern-paragraph',
                    attributes: { class: 'text-xl text-gray-600 max-w-3xl mx-auto' },
                  },
                ],
              },
              {
                tagName: 'div',
                attributes: { class: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
                components: [
                  { type: 'service-card' },
                  {
                    type: 'service-card',
                  },
                  {
                    type: 'service-card',
                  },
                  {
                    type: 'service-card',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  })

  // Testimonial Card Component
  domc.addType('testimonial-card', {
    model: {
      defaults: {
        tagName: 'div',
        type: 'wrapper',
        attributes: {
          class: 'bg-white rounded-xl shadow-lg p-8',
        },
        components: [
          {
            tagName: 'div',
            attributes: { class: 'flex items-center mb-6' },
            components: [
              {
                tagName: 'div',
                type: 'text',
                attributes: { class: 'flex text-yellow-400 mr-4' },
                components: [{ type: 'textnode', content: '⭐⭐⭐⭐⭐' }],
              },
            ],
          },
          {
            type: 'modern-paragraph',
            attributes: { class: 'text-lg text-gray-700 mb-6 italic' },
          },
          {
            tagName: 'div',
            attributes: { class: 'flex items-center' },
            components: [
              {
                tagName: 'div',

                attributes: { class: 'w-12 h-12 bg-gray-300 rounded-full mr-4' },
              },
              {
                tagName: 'div',
                components: [
                  {
                    tagName: 'h4',
                    type: 'text',
                    attributes: { class: 'font-semibold text-gray-900' },
                    components: [{ type: 'textnode', content: 'John Doe' }],
                  },
                  {
                    tagName: 'p',
                    type: 'text',
                    attributes: { class: 'text-gray-600 text-sm' },
                    components: [{ type: 'textnode', content: 'CEO, Company Inc.' }],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  })

  // Testimonials Section Component
  domc.addType('testimonials-section', {
    model: {
      defaults: {
        type: 'section',
        attributes: {
          class: 'py-16 lg:py-24',
        },
        components: [
          {
            type: 'container',
            components: [
              {
                tagName: 'div',
                attributes: { class: 'text-center mb-16' },
                components: [
                  {
                    type: 'modern-heading',
                    attributes: { class: 'text-4xl md:text-5xl font-bold mb-6' },
                    components: [{ type: 'textnode', content: 'What Our Clients Say' }],
                  },
                  {
                    type: 'modern-paragraph',
                    attributes: { class: 'text-xl text-gray-600 max-w-3xl mx-auto' },
                    components: [
                      {
                        type: 'textnode',
                        content:
                          "Don't just take our word for it. Here's what our satisfied customers have to say.",
                      },
                    ],
                  },
                ],
              },
              {
                tagName: 'div',
                attributes: { class: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
                components: [
                  { type: 'testimonial-card' },
                  { type: 'testimonial-card' },
                  { type: 'testimonial-card' },
                ],
              },
            ],
          },
        ],
      },
    },
  })

  // Footer Component
  domc.addType('footer-section', {
    model: {
      defaults: {
        tagName: 'footer',
        attributes: {
          class: 'bg-gray-900 text-white py-16',
        },
        components: [
          {
            type: 'container',
            components: [
              {
                tagName: 'div',
                attributes: { class: 'grid md:grid-cols-4 gap-8 mb-8' },
                components: [
                  {
                    tagName: 'div',
                    components: [
                      {
                        type: 'modern-heading',
                        attributes: { class: 'text-2xl font-bold mb-4 text-white' },
                      },
                      {
                        type: 'modern-paragraph',
                        attributes: { class: 'text-gray-400' },
                      },
                    ],
                  },
                  {
                    tagName: 'div',
                    components: [
                      {
                        tagName: 'h4',
                        attributes: { class: 'text-lg font-semibold mb-4' },
                        type: 'text',
                        components: [{ type: 'textnode', content: 'Quick Links' }],
                      },
                      {
                        tagName: 'ul',
                        attributes: { class: 'space-y-2' },
                        components: [
                          {
                            tagName: 'li',
                            components: [
                              {
                                tagName: 'a',
                                attributes: {
                                  href: '#',
                                  class: 'text-gray-400 hover:text-white transition-colors',
                                },
                                type: 'link',
                                components: [{ type: 'textnode', content: 'Home' }],
                              },
                            ],
                          },
                          {
                            tagName: 'li',
                            components: [
                              {
                                tagName: 'a',
                                type: 'link',
                                attributes: {
                                  href: '#',
                                  class: 'text-gray-400 hover:text-white transition-colors',
                                },
                                components: [{ type: 'textnode', content: 'About' }],
                              },
                            ],
                          },
                          {
                            tagName: 'li',
                            components: [
                              {
                                tagName: 'a',
                                type: 'link',
                                attributes: {
                                  href: '#',
                                  class: 'text-gray-400 hover:text-white transition-colors',
                                },
                                components: [{ type: 'textnode', content: 'Services' }],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tagName: 'div',
                    components: [
                      {
                        tagName: 'h4',
                        type: 'text',
                        attributes: { class: 'text-lg font-semibold mb-4' },
                        components: [{ type: 'textnode', content: 'Contact' }],
                      },
                      {
                        tagName: 'div',
                        attributes: { class: 'space-y-2 text-gray-400' },
                        components: [
                          {
                            tagName: 'p',
                            type: 'text',
                            components: [{ type: 'textnode', content: 'hello@company.com' }],
                          },
                          {
                            tagName: 'p',
                            type: 'text',
                            components: [{ type: 'textnode', content: '+1 (555) 123-4567' }],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    tagName: 'div',
                    components: [
                      {
                        tagName: 'h4',
                        type: 'text',
                        attributes: { class: 'text-lg font-semibold mb-4' },
                        components: [{ type: 'textnode', content: 'Follow Us' }],
                      },
                      {
                        tagName: 'div',
                        attributes: { class: 'flex space-x-4' },
                        components: [
                          {
                            tagName: 'a',
                            type: 'link',
                            attributes: {
                              href: '#',
                              class: 'text-gray-400 hover:text-white transition-colors',
                            },
                            components: [{ type: 'textnode', content: 'Twitter' }],
                          },
                          {
                            tagName: 'a',
                            type: 'link',
                            attributes: {
                              href: '#',
                              class: 'text-gray-400 hover:text-white transition-colors',
                            },
                            components: [{ type: 'textnode', content: 'LinkedIn' }],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                tagName: 'div',
                attributes: { class: 'border-t border-gray-800 pt-8 text-center text-gray-400' },
                components: [
                  {
                    tagName: 'p',
                    type: 'text',
                    components: [
                      { type: 'textnode', content: '© 2024 Your Company. All rights reserved.' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  })

  bm.add('modern-heading-block', {
    label: 'Modern Heading',
    category: 'Basic',
    content: { type: 'modern-heading' },
    media:
      '<svg viewBox="0 0 24 24"><text x="2" y="18" font-size="18" font-weight="bold">H</text></svg>',
  })

  bm.add('modern-paragraph-block', {
    label: 'Modern Paragraph',
    category: 'Basic',
    content: { type: 'modern-paragraph' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="2"/><rect x="2" y="12" width="16" height="2"/><rect x="2" y="16" width="18" height="2"/></svg>',
  })

  bm.add('modern-button-block', {
    label: 'Modern Button',
    category: 'Basic',
    content: { type: 'modern-button' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="3" y="9" width="18" height="6" rx="3" fill="currentColor"/></svg>',
  })

  bm.add('modern-card-block', {
    label: 'Modern Card',
    category: 'Basic',
    content: { type: 'modern-card' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor"/></svg>',
  })

  bm.add('section-block', {
    label: 'Section',
    category: 'Layout',
    content: { type: 'section' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="1" y="6" width="22" height="12" rx="1" stroke="currentColor" fill="none"/></svg>',
  })

  bm.add('container-block', {
    label: 'Container',
    category: 'Layout',
    content: { type: 'container' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" stroke="currentColor" fill="none"/></svg>',
  })

  bm.add('section-block', {
    label: 'Section',
    category: 'Layout',
    content: { type: 'section' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" stroke="currentColor" fill="none"/></svg>',
  })

  // Complex Components Blocks
  bm.add('hero-section-block', {
    label: 'Hero Section',
    category: 'Sections',
    content: { type: 'hero-section' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" stroke="currentColor" fill="none"/><text x="6" y="16" font-size="6">Hero</text></svg>',
  })

  bm.add('services-section-block', {
    label: 'Services Section',
    category: 'Sections',
    content: { type: 'services-section' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" stroke="currentColor" fill="none"/><text x="6" y="16" font-size="6">Srv</text></svg>',
  })

  bm.add('testimonials-section-block', {
    label: 'Testimonials Section',
    category: 'Sections',
    content: { type: 'testimonials-section' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" stroke="currentColor" fill="none"/><text x="3" y="16" font-size="6">Tst</text></svg>',
  })

  bm.add('footer-section-block', {
    label: 'Footer',
    category: 'Sections',
    content: { type: 'footer-section' },
    media:
      '<svg viewBox="0 0 24 24"><rect x="2" y="18" width="20" height="4" stroke="currentColor" fill="none"/></svg>',
  })
}
