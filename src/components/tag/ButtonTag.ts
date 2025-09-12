import { Tag } from '../../types/Tag'

export const createButtonTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `button-${Date.now()}`,
    type: 'button',
    tagName: 'button',
    attributes: {
      type: 'button',
      ...attributes,
    },
    classes: classes || [],
    content,
  }
}

export const createSubmitButtonTag = (
  content: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `submit-button-${Date.now()}`,
    type: 'button',
    tagName: 'button',
    attributes: {
      type: 'submit',
      ...attributes,
    },
    classes: classes || [],
    content,
  }
}

export const createLinkButtonTag = (
  content: string,
  href: string,
  attributes?: { [key: string]: any },
  classes?: string[],
  id?: string,
): Tag => {
  return {
    id: id || `link-button-${Date.now()}`,
    type: 'link',
    tagName: 'a',
    attributes: {
      href,
      role: 'button',
      ...attributes,
    },
    classes: classes || [],
    content,
  }
}
