import { Editor } from 'grapesjs'
import { addHeaderBlocks } from './headerBlocks'
import { addRichTextEnhancements, addFontFamilySelector } from './richTextEnhancements'

export const addAllBlocks = (editor: Editor) => {
  // Add header blocks
  addHeaderBlocks(editor)


}

export { addHeaderBlocks } from './headerBlocks'
export { addRichTextEnhancements } from './richTextEnhancements'
