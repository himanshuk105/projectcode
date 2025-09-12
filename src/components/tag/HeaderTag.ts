import { Tag } from '../../types/Tag'

export const createH1Tag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `h1-${Date.now()}`,
    type: 'header',
    tagName: 'h1',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createH2Tag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `h2-${Date.now()}`,
    type: 'header',
    tagName: 'h2',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createH3Tag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `h3-${Date.now()}`,
    type: 'header',
    tagName: 'h3',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createH4Tag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `h4-${Date.now()}`,
    type: 'header',
    tagName: 'h4',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createH5Tag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `h5-${Date.now()}`,
    type: 'header',
    tagName: 'h5',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}

export const createH6Tag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `h6-${Date.now()}`,
    type: 'header',
    tagName: 'h6',
    attributes: attributes || {},
    classes: classes || [],
    content,
  }
}
