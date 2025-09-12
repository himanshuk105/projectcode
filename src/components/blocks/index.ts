import { Editor } from 'grapesjs'
import { addHeaderBlocks } from './headerBlocks'

export const addAllBlocks = (editor: Editor) => {
  // Add header blocks
  addHeaderBlocks(editor)

  // You can add more block categories here in the future
  // addButtonBlocks(editor)
  // addLayoutBlocks(editor)
  // addMediaBlocks(editor)
}

export { addHeaderBlocks } from './headerBlocks'
