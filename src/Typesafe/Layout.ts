export interface TwoColumnLayoutProps {
  leftColumn: {
    heading?: string
    subheading?: string
    description?: string
    buttonText?: string
    buttonUrl?: string
    secondaryButtonText?: string
    secondaryButtonUrl?: string
    imageUrl?: string
    imageAlt?: string
    listItems?: string[]
    listTitle?: string
  }
  rightColumn: {
    heading?: string
    subheading?: string
    description?: string
    buttonText?: string
    buttonUrl?: string
    secondaryButtonText?: string
    secondaryButtonUrl?: string
    imageUrl?: string
    imageAlt?: string
    listItems?: string[]
    listTitle?: string
  }
  layout: 'equal' | 'left-heavy' | 'right-heavy'
  alignment: 'top' | 'center' | 'bottom'
  spacing: 'tight' | 'normal' | 'loose'
  backgroundColor: string
  textColor: string
}
