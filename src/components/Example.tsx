import { final } from '@/lib/getPage'
import { RenderNode } from '@/lib/renderNode'

function StyleRenderer({ styles }: { styles: any[] }) {
  const css = styles
    .map((s) => {
      const selector = s.selectors?.join(', ')
      const rules = Object.entries(s.style)
        .map(([k, v]) => `${k}: ${v};`)
        .join(' ')
      return `${selector} { ${rules} }`
    })
    .join('\n')

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}

export default function WebsitePage({ page, projectData }: { page: any; projectData?: any }) {
  // Use projectData if provided, otherwise fallback to final
  const data = projectData || final

  // If no page is provided, use the first page from the data
  const currentPage = page || data.pages[0]

  if (!currentPage || !currentPage.frames || !currentPage.frames[0]) {
    return <div>No page data available</div>
  }

  const frame = currentPage.frames[0]
  const root = frame.component

  if (!root || !root.components) {
    return <div>No components to render</div>
  }

  return (
    <main>
      <StyleRenderer styles={data.styles} />
      {root.components.map((child: any, i: number) => (
        <RenderNode key={i} {...child} />
      ))}
    </main>
  )
}
