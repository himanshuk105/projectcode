import { Tag } from '../../types/Tag'

export const createTextNode = (content: string, id?: string): Tag => {
  return {
    id: id || `text-${Date.now()}`,
    type: 'textnode',
    content,
  }
}

export const createParagraphTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `p-${Date.now()}`,
    type: 'text',
    tagName: 'p',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createStrongTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `strong-${Date.now()}`,
    type: 'text',
    tagName: 'strong',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createEmTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `em-${Date.now()}`,
    type: 'text',
    tagName: 'em',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createSmallTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `small-${Date.now()}`,
    type: 'text',
    tagName: 'small',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}
