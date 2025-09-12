import { Editor } from 'grapesjs'

export const addHeaderBlocks = (editor: Editor) => {
  editor.BlockManager.add('header1', {
    label: 'Text+',
    category: 'Basic',
    media: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3,4H7V10H17V4H21V18H17V12H7V18H3V4Z" /></svg>`,
    content: { type: 'header-block' }, // content points to custom type
  })

  editor.Components.addType('header-block', {
    model: {
      defaults: {
        tagName: 'h1',
        editable: true,
        // Initial content as child text node
        components: 'Editable Heading',
        // Set CSS classes if needed
        classes: ['text-4xl', 'font-bold', 'text-gray-800'],
        traits: [
          {
            type: 'select',
            label: 'Header Type',
            name: 'tagName',
            options: [
              { id: 'h1', value: 'h1', name: 'H1' },
              { id: 'h2', value: 'h2', name: 'H2' },
              { id: 'h3', value: 'h3', name: 'H3' },
              { id: 'h4', value: 'h4', name: 'H4' },
              { id: 'h5', value: 'h5', name: 'H5' },
              { id: 'h6', value: 'h6', name: 'H6' },
              { id: 'p', value: 'p', name: 'Paragraph' },//add span
        
              { id: 'span', value: 'span', name: 'Span' },//add span
              { id: 'pre', value: 'pre', name: 'Preformatted' },//add pre
             
            ],
            changeProp: true,
          },
        ],
        // Make sure this is editable
      },
      // Method to get appropriate classes based on tag
      getTextClassForTag(tagName: string) {
        const classMap: Record<string, string[]> = {
          h1: ['text-4xl', 'font-bold', 'text-gray-800'],
          h2: ['text-3xl', 'font-bold', 'text-gray-800'],
          h3: ['text-2xl', 'font-semibold', 'text-gray-800'],
          h4: ['text-xl', 'font-semibold', 'text-gray-700'],
          h5: ['text-lg', 'font-medium', 'text-gray-700'],
          h6: ['text-base', 'font-medium', 'text-gray-600'],
          p: ['text-base', 'text-gray-700'], //classes for paragraph
          span: ['text-base', 'text-gray-700'], //classes for span
          pre: ['text-base', 'font-mono', 'bg-gray-100', 'p-2', 'rounded'], //classes for pre
        }
        return classMap[tagName] || classMap['h1']
      },
      // Listen for trait change and update tagName and classes dynamically
      init() {
        this.on('change:tagName', () => {
          const newTagName = this.get('tagName')
          const newClasses = this.getTextClassForTag(newTagName)
          this.set({
            tagName: newTagName,
            classes: newClasses,
          })
        })
      },
    },
    view: {
      onRender({ el, model }) {
        // Makes the text content editable in the canvas
        el.setAttribute('contenteditable', 'true')
        // Optional: update classes dynamically or other view logic here
      },
    },
  })
}
