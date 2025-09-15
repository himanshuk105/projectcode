import { Editor } from 'grapesjs'
import { addHeaderBlocks } from './headerBlocks'

import {
  addAutoCarouselBlock,
  addCardBlock,
  addCustomBlocks,
  addModernHeroSections,
  addModernListBlock,
  addNavigation,
  addSingleColumn,
  addTestimonial,
  addTwoColumn,
  createLandingPageComponents,
  customulTag,
} from '@/Layouts/SingleColumn'

export const addAllBlocks = (editor: Editor) => {
  // Add header blocks
  addHeaderBlocks(editor)
  addSingleColumn(editor)
  addCustomBlocks(editor)
  addAutoCarouselBlock(editor)
  addCardBlock(editor)
  addTwoColumn(editor)
  customulTag(editor)
  addModernHeroSections(editor)
  addModernListBlock(editor)
  addTestimonial(editor)
  addNavigation(editor)
  createLandingPageComponents(editor)
}

export { addHeaderBlocks } from './headerBlocks'
export { addRichTextEnhancements } from './richTextEnhancements'
