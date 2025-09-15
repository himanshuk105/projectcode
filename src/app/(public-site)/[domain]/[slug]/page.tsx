import { Render } from '@measured/puck'
import { final, getPage } from '@/lib/getPage'
import config from 'puck.config'
import WebsitePage from '../../../../components/Example'
import { Data, dyanmo, dynamic2, dynamic3 } from '@/lib/Page'

export default async function Page({ params }: { params: { domain: string; slug: string } }) {
  const projectData = dyanmo
  const page = projectData.pages.find((d) => d.type == params.slug)

  if (!page) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">404 - Page Not Found</h1>
          <p className="text-gray-600">No page found for "{params.slug}"</p>
          <p className="text-sm text-gray-500 mt-2">
            Available pages: {projectData.pages.map((p) => p.type).join(', ')}
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <WebsitePage page={page} projectData={projectData} />
    </main>
  )
}
