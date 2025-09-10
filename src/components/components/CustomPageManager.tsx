// import * as React from 'react'
// import { PagesResultProps } from '@grapesjs/react'
// import { BTN_CLS, MAIN_BORDER_COLOR, cx } from './common'
// import Icon from '@mdi/react'
// import { mdiDelete } from '@mdi/js'
// import { Page } from 'grapesjs'

// export default function CustomPageManager({
//   pages,
//   selected,
//   add,
//   select,
//   remove,
// }: PagesResultProps) {
//   const addNewPage = async () => {
//     const nextIndex = pages.length + 1
//     const page: Page = add({
//       name: `New page ${nextIndex}`,
//       component: `<h1>Page content ${nextIndex}</h1>`,
//     })!
//     select(page)
//   }

//   return (
//     <div className="gjs-custom-page-manager">
//       <div className="p-2">
//         <button type="button" className={BTN_CLS} onClick={addNewPage}>
//           Add new page
//         </button>
//       </div>
//       {pages.map((page, index) => (
//         <div
//           key={page.getId()}
//           className={cx(
//             'flex items-center py-2 px-4 border-b',
//             index === 0 && 'border-t',
//             MAIN_BORDER_COLOR,
//           )}
//         >
//           <button type="button" className="flex-grow text-left" onClick={() => select(page)}>
//             {page.getName() || 'Untitled page'}
//           </button>
//           {selected !== page && (
//             <button type="button" onClick={() => remove(page)}>
//               <Icon size={0.7} path={mdiDelete} />
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

'use client'

import { PagesResultProps } from '@grapesjs/react'
import { BTN_CLS, MAIN_BORDER_COLOR, cx } from './common'
import Icon from '@mdi/react'
import { mdiChevronDoubleDown, mdiDelete } from '@mdi/js'
import { Page } from 'grapesjs'
import { useEffect, useState } from 'react'

type Templates = {
  PageTemplates: any
  Components: any
}

export default function CustomPageManager({
  pages,
  selected,
  add,
  select,
  remove,
}: PagesResultProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const [templatess, setTemplates] = useState<Templates | null>(null)

  useEffect(() => {
    const fetchTemplates = async () => {}
  }, [])

  const templates = {
    Components: [
      { name: 'Hero Section', html: '<section><h1>Hero Section</h1></section>' },
      { name: 'About Section', html: '<section><p>About us content...</p></section>' },
    ],
    'Page Templates': [
      { name: 'Landing Page', html: '<div><h1>Landing Page</h1></div>' },
      { name: 'Contact Page', html: '<div><h1>Contact Page</h1></div>' },
    ],
  }

  const addPageFromTemplate = (tpl: { name: string; html: string }) => {
    const nextIndex = pages.length + 1
    const page: Page = add({
      name: tpl.name || `New page ${nextIndex}`,
      component: tpl.html,
    })!
    select(page)
    setIsModalOpen(false)
  }

  return (
    <div className="gjs-custom-page-manager">
      {/* Add Button */}
      <div className="p-2">
        <button type="button" className={BTN_CLS} onClick={() => setIsModalOpen(true)}>
          Add new page
        </button>
      </div>

      {/* Page List */}
      {pages.map((page, index) => (
        <div
          key={page.getId()}
          className={cx(
            'flex items-center py-2 px-4 border-b',
            index === 0 && 'border-t',
            MAIN_BORDER_COLOR,
          )}
        >
          <button type="button" className="flex-grow text-left" onClick={() => select(page)}>
            {page.getName() || 'Untitled page'}
          </button>
          {selected !== page && (
            <button type="button" onClick={() => remove(page)}>
              <Icon size={0.7} path={mdiDelete} />
            </button>
          )}
        </div>
      ))}

      {/* Modal (pure Tailwind) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#1e1e1e] text-gray-100 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">
            <h2 className="text-lg font-bold mb-4 text-white">Select Page Template</h2>

            {/* Expandable Categories */}
            <div className="space-y-4">
              {Object.entries(templates).map(([category, items]) => (
                <div key={category} className="border border-gray-700 rounded-lg">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-3 text-left font-medium text-gray-200 hover:bg-gray-700/50"
                    onClick={() => setOpenCategory(openCategory === category ? null : category)}
                  >
                    {category}
                    <Icon
                      size={0.7}
                      path={mdiChevronDoubleDown}
                      className={`transition-transform ${
                        openCategory === category ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openCategory === category && (
                    <div className="p-3 grid grid-cols-2 gap-3 bg-[#2a2a2a]">
                      {items.map((tpl) => (
                        <div
                          key={tpl.name}
                          className="cursor-pointer rounded-lg border border-gray-700 p-3 text-center hover:bg-gray-700/70"
                          onClick={() => addPageFromTemplate(tpl)}
                        >
                          <div className="h-20 flex items-center justify-center bg-gray-800 border border-gray-600 rounded mb-2">
                            <span className="text-xs text-gray-400">Preview</span>
                          </div>
                          <p className="text-sm text-gray-200">{tpl.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-right">
              <button
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-gray-200"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
