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

export default function WebsitePage({ page }: any) {
  const projectData = final
  // const page = projectData.pages[1]
  const frame = page.frames[0]
  const root = frame.component

  return (
    <main>
      <StyleRenderer styles={projectData.styles} />
      {root.components.map((child: any, i: number) => (
        <RenderNode key={i} {...child} />
      ))}
    </main>
  )
}
