import { notFound } from 'next/navigation'
import { Client } from '@/lib/client'
import fs from 'fs/promises'
import path from 'path'
import '../../global.css'
import Editor from '@/components/Demo'

export default async function Page() {
  const filePath = path.join(process.cwd(), 'src/lib', 'database.json')
  const fileContents = await fs.readFile(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  const pageData = data['/']

  if (!pageData) {
    return notFound()
  }

  return (
    <div>
      <Editor />
      {/* <Client data={pageData} /> */}
    </div>
  )
}

export const dynamic = 'force-static'
