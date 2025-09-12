// Button Tags
export { createButtonTag, createSubmitButtonTag, createLinkButtonTag } from './ButtonTag'

// Header Tags
export {
  createH1Tag,
  createH2Tag,
  createH3Tag,
  createH4Tag,
  createH5Tag,
  createH6Tag,
} from './HeaderTag'

// Text Tags
export {
  createTextNode,
  createParagraphTag,
  createStrongTag,
  createEmTag,
  createSmallTag,
} from './TextTag'

// Span Tags
export { createSpanTag, createInlineSpanTag, createBlockSpanTag } from './SpanTag'

// Div Tags
export {
  createDivTag,
  createContainerDiv,
  createFlexDiv,
  createGridDiv,
  createSectionDiv,
} from './DivTag'

// Re-export the Tag interface
export type { Tag } from '../../types/Tag'
