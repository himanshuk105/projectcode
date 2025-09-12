import { Tag } from '../../types/Tag'

export const createDivTag = (
  attributes?: { [key: string]: any },
  classes?: string[],
  components?: Tag[],
  content?: string,
  id?: string,
): Tag => {
  return {
    id: id || `div-${Date.now()}`,
    type: 'div',
    tagName: 'div',
    attributes: attributes || {},
    classes: classes || [],
    components: components || [],
    content,
  }
}

export const createContainerDiv = (
  components?: Tag[],
  classes?: string[],
  attributes?: { [key: string]: any },
  id?: string,
): Tag => {
  return {
    id: id || `container-${Date.now()}`,
    type: 'div',
    tagName: 'div',
    attributes: attributes || {},
    classes: ['container', ...(classes || [])],
    components: components || [],
  }
}

export const createFlexDiv = (
  components?: Tag[],
  direction: 'row' | 'column' = 'row',
  classes?: string[],
  attributes?: { [key: string]: any },
  id?: string,
): Tag => {
  return {
    id: id || `flex-${Date.now()}`,
    type: 'div',
    tagName: 'div',
    attributes: {
      style: `display: flex; flex-direction: ${direction};`,
      ...attributes,
    },
    classes: ['flex', `flex-${direction}`, ...(classes || [])],
    components: components || [],
  }
}

export const createGridDiv = (
  components?: Tag[],
  columns?: number,
  classes?: string[],
  attributes?: { [key: string]: any },
  id?: string,
): Tag => {
  const gridStyle = columns
    ? `display: grid; grid-template-columns: repeat(${columns}, 1fr);`
    : 'display: grid;'

  return {
    id: id || `grid-${Date.now()}`,
    type: 'div',
    tagName: 'div',
    attributes: {
      style: gridStyle,
      ...attributes,
    },
    classes: ['grid', ...(classes || [])],
    components: components || [],
  }
}

export const createSectionDiv = (
  components?: Tag[],
  classes?: string[],
  attributes?: { [key: string]: any },
  id?: string,
): Tag => {
  return {
    id: id || `section-${Date.now()}`,
    type: 'div',
    tagName: 'section',
    attributes: attributes || {},
    classes: ['section', ...(classes || [])],
    components: components || [],
  }
}
