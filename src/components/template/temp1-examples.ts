import { temp1Template, temp1Data } from './temp1'
import { Tag } from '../../types/Tag'

/**
 * Example Usage of temp1 Template
 *
 * This file demonstrates how to use the comprehensive template created
 * that showcases all the tag functions we built.
 */

// Example 1: Using individual template components
export const exampleUsage1 = () => {
  // Use just the navigation component
  const navigation = temp1Template.navigation

  // Use just the hero section
  const hero = temp1Template.heroSection

  // Use just the features section
  const features = temp1Template.featuresSection

  return {
    navigation,
    hero,
    features,
  }
}

// Example 2: Using the complete page template
export const exampleUsage2 = () => {
  // Get the complete page structure
  const completePage = temp1Template.completePage

  return completePage
}

// Example 3: Using the full data structure (similar to original Page.ts)
export const exampleUsage3 = () => {
  // This mimics how the original Page.ts was structured
  return temp1Data
}

// Example 4: Customizing the template
export const exampleCustomTemplate = (): Tag => {
  // You can mix and match components and create custom layouts
  return {
    id: 'customPage',
    type: 'wrapper',
    tagName: 'div',
    attributes: { id: 'customWrapper' },
    classes: ['min-h-screen', 'bg-gradient-to-br', 'from-indigo-50', 'to-white'],
    components: [
      temp1Template.navigation,
      temp1Template.heroSection,
      temp1Template.featuresSection,
      // Skip rooms section for a simpler page
      temp1Template.ctaSection,
      temp1Template.footer,
    ],
  }
}

// Example 5: Tag demonstration - shows usage of all tag types
export const tagDemonstration = {
  // Button Tags Demo
  buttons: {
    primary: temp1Template.navigation, // Contains button examples
    secondary: temp1Template.heroSection, // Contains button examples
  },

  // Header Tags Demo (H1-H6)
  headers: {
    h1: temp1Template.heroSection, // Contains H1 example
    h2: temp1Template.featuresSection, // Contains H2 example
    h3: temp1Template.roomsSection, // Contains H3 examples
    h4: temp1Template.footer, // Contains H4 example
    h5: temp1Template.footer, // Contains H5 examples
  },

  // Text Tags Demo
  text: {
    paragraphs: temp1Template.featuresSection, // Contains paragraph examples
    textNodes: temp1Template.navigation, // Contains text node examples
    formatting: temp1Template.ctaSection, // Contains strong, em, small examples
  },

  // Span Tags Demo
  spans: {
    inline: temp1Template.heroSection, // Contains inline spans
    block: temp1Template.featuresSection, // Contains block spans
    general: temp1Template.roomsSection, // Contains general spans
  },

  // Div Tags Demo
  divs: {
    containers: temp1Template.navigation, // Contains container divs
    flex: temp1Template.roomsSection, // Contains flex layouts
    grid: temp1Template.featuresSection, // Contains grid layouts
    sections: temp1Template.completePage, // Contains section divs
  },
}

// Export usage examples
export const templateExamples = {
  individual: exampleUsage1(),
  complete: exampleUsage2(),
  dataStructure: exampleUsage3(),
  custom: exampleCustomTemplate(),
  tagDemo: tagDemonstration,
}

// Example of how you might use this in a real application
export const renderTemplate = (templateName: keyof typeof templateExamples) => {
  const selectedTemplate = templateExamples[templateName]

  // This would be where you'd convert the Tag structure to actual HTML/JSX
  // For example, you might have a function like:
  // return renderTagToHTML(selectedTemplate);

  console.log(`Rendering template: ${templateName}`, selectedTemplate)
  return selectedTemplate
}

export default templateExamples
