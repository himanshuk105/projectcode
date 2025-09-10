import { Render } from '@measured/puck'
import { final, getPage } from '@/lib/getPage'
import config from 'puck.config'
import WebsitePage from '../../../../components/Example'

export default async function Page({ params }: { params: { domain: string; slug: string } }) {
  const projectData = final
  const pages = projectData.pages.find((d) => d.type == params.slug)

  // if (!page) return <h1>404 - Page Not Found</h1>

  return (
    <main className="min-h-screen">
      {/* <Render config={config} data={page.layout_json} /> */}
      <WebsitePage page={pages} />
    </main>
  )
}
