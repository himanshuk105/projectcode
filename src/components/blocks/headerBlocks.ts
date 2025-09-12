import { Editor } from 'grapesjs'

export const addHeaderBlocks = (editor: Editor) => {

  try {
    // header blocks will be added here h1
    editor.BlockManager.add('header1', {
      label: 'H1 Header',
      content: '<h1 class="text-4xl font-bold text-gray-800">Heading 1</h1>',
      media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,4H7V10H17V4H21V18H17V12H7V18H3V4Z" />
      </svg>`,
      category: 'Basic',
    })

   
    // List all blocks to verify
    const allBlocks = editor.BlockManager.getAll()
  
  } catch (error) {
    console.error('Error adding header block:', error)
  }
}
