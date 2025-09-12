import { Tag } from '../../types/Tag'

export const createSpanTag = (
  content?: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  components?: Tag[],
  id?: string,
): Tag => {
  return {
    id: id || `span-${Date.now()}`,
    type: 'span',
    tagName: 'span',
    attributes: attributes || {},
    classes: classes || [],
    components: components || [],
    content,
  }
}

export const createInlineSpanTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `inline-span-${Date.now()}`,
    type: 'span',
    tagName: 'span',
    attributes: {
      style: 'display: inline;',
      ...attributes,
    },
    classes: classes || [],
    content,
  }
}

export const createBlockSpanTag = (
  content?: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  components?: Tag[],
  id?: string,
): Tag => {
  return {
    id: id || `block-span-${Date.now()}`,
    type: 'span',
    tagName: 'span',
    attributes: {
      style: 'display: block;',
      ...attributes,
    },
    classes: classes || [],
    components: components || [],
    content,
  }
}
