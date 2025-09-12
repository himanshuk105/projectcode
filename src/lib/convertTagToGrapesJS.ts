import { Tag } from '../types/Tag'

// Convert our custom Tag structure to GrapesJS component format
export function convertTagToGrapesJS(tag: Tag): any {
  // Handle text nodes
  if (tag.type === 'textnode' || tag.content) {
    return {
      type: 'textnode',
      content: tag.content || '',
    }
  }

  // Handle other components
  const component: any = {}

  // Set component type - for standard HTML elements, don't set type, just tagName
  if (tag.tagName && tag.tagName !== 'div') {
    component.tagName = tag.tagName
  }

  // Handle special types
  if (tag.type === 'link') {
    component.type = 'link'
  } else if (tag.type === 'image') {
    component.type = 'image'
  }

  // Set attributes
  if (tag.attributes && Object.keys(tag.attributes).length > 0) {
    component.attributes = { ...tag.attributes }
  }

  // Set classes
  if (tag.classes && tag.classes.length > 0) {
    component.classes = [...tag.classes]
  }

  // Convert child components
  if (tag.components && tag.components.length > 0) {
    component.components = tag.components.map((child) => convertTagToGrapesJS(child))
  }

  return component
}

// Convert the entire temp1Data structure to GrapesJS format
export function convertTemp1DataToGrapesJS(temp1Data: any) {
  return {
    dataSources: temp1Data.dataSources || [],
    assets: temp1Data.assets || [],
    styles: temp1Data.styles || [],
    pages: temp1Data.pages.map((page: any) => ({
      ...page,
      frames: page.frames.map((frame: any) => ({
        ...frame,
        component: {
          type: 'wrapper',
          attributes: { id: 'pageWrapper' },
          components: [convertTagToGrapesJS(frame.component)],
          head: { type: 'head' },
          docEl: { tagName: 'html' },
        },
      })),
    })),
  }
}
