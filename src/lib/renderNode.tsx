// utils/renderNode.tsx
import React from 'react'

export function RenderNode(node: any) {
  if (!node) return null

  // If it's just text
  if (node.type === 'textnode') {
    return <>{node.content}</>
  }

  // Handle image
  if (node.type === 'image') {
    return <img {...node.attributes} className={node.classes?.join(' ')} />
  }

  // Handle link
  if (node.type === 'link') {
    return (
      <a {...node.attributes} className={node.classes?.join(' ')}>
        {node.components?.map((child: any, i: number) => (
          <RenderNode key={i} {...child} />
        ))}
      </a>
    )
  }

  // Default HTML element (section, p, h1, div, etc.)
  const Tag = node.tagName || 'div'

  return (
    <Tag {...node.attributes} className={node.classes?.join(' ')}>
      {node.components?.map((child: any, i: number) => (
        <RenderNode key={i} {...child} />
      ))}
    </Tag>
  )
}
