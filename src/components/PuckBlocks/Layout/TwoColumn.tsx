import { TwoColumnLayoutProps } from '@/Typesafe/Layout'
import React from 'react'

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftColumn,
  rightColumn,
  layout = 'equal',
  alignment = 'top',
  spacing = 'normal',
  backgroundColor = 'transparent',
  textColor = '#000000',
}) => {
  const getColumnClasses = () => {
    switch (layout) {
      case 'left-heavy':
        return 'grid-cols-1 lg:grid-cols-3'
      case 'right-heavy':
        return 'grid-cols-1 lg:grid-cols-3'
      default:
        return 'grid-cols-1 lg:grid-cols-2'
    }
  }

  const getColumnSpan = (column: 'left' | 'right') => {
    if (layout === 'left-heavy') {
      return column === 'left' ? 'lg:col-span-2' : 'lg:col-span-1'
    }
    if (layout === 'right-heavy') {
      return column === 'left' ? 'lg:col-span-1' : 'lg:col-span-2'
    }
    return ''
  }

  const getAlignmentClasses = () => {
    switch (alignment) {
      case 'center':
        return 'items-center'
      case 'bottom':
        return 'items-end'
      default:
        return 'items-start'
    }
  }

  const getSpacingClasses = () => {
    switch (spacing) {
      case 'tight':
        return 'gap-4 p-4'
      case 'loose':
        return 'gap-12 p-12'
      default:
        return 'gap-8 p-8'
    }
  }

  const renderButton = (text?: string, url?: string, isPrimary = true) => {
    if (!text) return null

    return (
      <a
        href={url || '#'}
        className={`inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          isPrimary
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        {text}
      </a>
    )
  }

  const renderList = (items?: string[], title?: string) => {
    if (!items || items.length === 0) return null

    return (
      <div>
        {title && (
          <h4 className="text-lg font-semibold mb-3" style={{ color: textColor }}>
            {title}
          </h4>
        )}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span style={{ color: textColor }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderImage = (imageUrl?: string, alt?: string) => {
    if (!imageUrl) return null

    return (
      <div className="w-full">
        <img
          src={imageUrl}
          alt={alt || 'Column image'}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    )
  }

  const renderColumnContent = (column: typeof leftColumn) => {
    return (
      <div className="space-y-4">
        {column.heading && (
          <h2 className="text-3xl font-bold" style={{ color: textColor }}>
            {column.heading}
          </h2>
        )}

        {column.subheading && (
          <h3 className="text-xl font-medium" style={{ color: textColor }}>
            {column.subheading}
          </h3>
        )}

        {column.description && (
          <p className="text-base leading-relaxed" style={{ color: textColor }}>
            {column.description}
          </p>
        )}

        {renderImage(column.imageUrl, column.imageAlt)}

        {renderList(column.listItems, column.listTitle)}

        {(column.buttonText || column.secondaryButtonText) && (
          <div className="flex flex-wrap gap-4">
            {renderButton(column.buttonText, column.buttonUrl, true)}
            {renderButton(column.secondaryButtonText, column.secondaryButtonUrl, false)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full" style={{ backgroundColor, color: textColor }}>
      <div className={`grid ${getColumnClasses()} ${getAlignmentClasses()} ${getSpacingClasses()}`}>
        <div className={`${getColumnSpan('left')}`}>{renderColumnContent(leftColumn)}</div>

        <div className={`${getColumnSpan('right')}`}>{renderColumnContent(rightColumn)}</div>
      </div>
    </div>
  )
}

export default TwoColumnLayout
