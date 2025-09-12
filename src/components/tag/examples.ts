import {
  createButtonTag,
  createH1Tag,
  createParagraphTag,
  createSpanTag,
  createDivTag,
  createFlexDiv,
  createTextNode,
  Tag,
} from './index'

// Example: Creating a simple button
export const exampleButton: Tag = createButtonTag('Click Me', { onClick: 'handleClick()' }, [
  'btn',
  'btn-primary',
  'px-4',
  'py-2',
])

// Example: Creating a header
export const exampleHeader: Tag = createH1Tag('Welcome to My App', {}, [
  'text-3xl',
  'font-bold',
  'text-center',
])

// Example: Creating a paragraph with text
export const exampleParagraph: Tag = createParagraphTag(
  'This is a sample paragraph with some text content.',
  {},
  ['text-gray-700', 'mb-4'],
)

// Example: Creating a span with inline content
export const exampleSpan: Tag = createSpanTag('Important text', {}, [
  'font-semibold',
  'text-red-500',
])

// Example: Creating a complex div structure
export const exampleComplexDiv: Tag = createFlexDiv(
  [
    createDivTag(
      {},
      ['w-1/2', 'p-4'],
      [
        createH1Tag('Left Column', {}, ['text-xl', 'mb-2']),
        createParagraphTag('Content for left side', {}, ['text-sm']),
      ],
    ),
    createDivTag(
      {},
      ['w-1/2', 'p-4'],
      [
        createH1Tag('Right Column', {}, ['text-xl', 'mb-2']),
        createParagraphTag('Content for right side', {}, ['text-sm']),
      ],
    ),
  ],
  'row',
  ['container', 'mx-auto'],
)

// Example: Creating nested components with text nodes
export const exampleNestedStructure: Tag = createDivTag(
  {},
  ['card', 'p-6', 'shadow-lg'],
  [
    createH1Tag('Card Title', {}, ['text-2xl', 'font-bold', 'mb-4']),
    createSpanTag(
      undefined,
      {},
      ['flex', 'items-center', 'mb-2'],
      [
        createTextNode('Status: '),
        createSpanTag('Active', {}, ['text-green-500', 'font-semibold']),
      ],
    ),
    createParagraphTag(
      'This is a card component with nested elements demonstrating the tag structure.',
      {},
      ['text-gray-600'],
    ),
    createButtonTag('Learn More', { href: '#learn-more' }, ['btn', 'btn-secondary', 'mt-4']),
  ],
)
