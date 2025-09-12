'use client'
import React, { useEffect, useState } from 'react'
import { Editor, EditorConfig } from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import GjsEditor, { Canvas, ModalProvider, useEditor } from '@grapesjs/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { MAIN_BORDER_COLOR } from './components/common'
import RightSidebar from './components/RightSidebar'
import CustomModal from './components/CustomModal'

import Topbar from './components/Topbar'
import AISidebar from './components/LeftSide'
import { Data, data1, Dynamic } from '@/lib/Page'
import axios from 'axios'
import temp1Data from './template/temp1'
import { convertTemp1DataToGrapesJS } from '@/lib/convertTagToGrapesJS'
import { addAllBlocks } from './blocks'
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const gjsOptions: EditorConfig = {
  height: '100vh',
  container: '#gjs',
  plugins: [], // Remove the problematic plugin
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  canvas: {
    styles: ['https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'],
  },
}

const DefaultEditor = () => {
  const [filtered, setFiltered] = useState('sports')
  const [prData, setPrData] = useState(null)
  const [selectedPage, setSelectedPage] = useState(null)

  // const handleSelectTempalte = async (id: string) => {
  //   const data = structuredClone(prData)
  //   if (data != null) {
  //     const pageData = data.find((d: any) => d.id == id)
  //     setSelectedPage(pageData)
  //     final.loadProjectData(pageData)
  //   }
  // }

  const onEditor = async (editor: Editor) => {
    console.log('Editor loaded')

    // Add all custom blocks FIRST
    console.log('About to add custom blocks...')
    addAllBlocks(editor)
    console.log('Custom blocks added')

    // const fi = await payloadInstance.find({
    //   collection: 'pagetemplate',
    //   where: { ['Template Type.Category Name']: { equals: 'sports' } },
    // })

    editor.BlockManager.add('hero-split-tailwindcsss', {
      label: 'Hero',
      category: 'Major',
      media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
          </svg>`,
      content: `
    <section class="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 gap-10 bg-blue-500">
      <!-- Text Content -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Design Without Limits
        </h1>
        <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
          Create responsive, modern websites with just a few clicks using our editor.
        </p>
        <a href="#learn-more"
           class="inline-block bg-red-500 hover:bg-emerald-600 text-black text-base font-medium px-8 py-3 rounded-lg shadow-md transition duration-300">
          Learn More
        </a>
      </div>

      <!-- Image -->
      <div class="flex-1 flex justify-center">
        <img src="https://via.placeholder.com/500x350"
             alt="Hero Illustration"
             class="max-w-full rounded-xl shadow-lg" />
      </div>
    </section>
  `,
    })

    editor.BlockManager.add('product-list', {
      label: 'Product List',
      category: 'Ecommerce',
      media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,12H21V14H3V12M3,18H21V20H3V18Z" />
            </svg>`,
      content: { type: 'product-list', attributes: { 'data-limit': '6' } },
    })

    // ✅ Define dynamic component type
    editor.DomComponents.addType('product-list', {
      model: {
        defaults: {
          droppable: true,
          editable: true,
          removable: true,
          script: function () {
            // Runs inside GrapesJS canvas iframe
            const limit = this.getAttribute('data-limit') || 6
            fetch(`https://dummyjson.com/products?limit=5`)
              .then((res) => res.json())
              .then((data) => {
                const el = this
                el.innerHTML = `
                <div class="grid grid-cols-3 gap-4">
                  ${data.products
                    .map(
                      (p: any) => `
                        <div class="border rounded p-2 shadow-sm">
                          <img src="${p.thumbnail}" class="w-full h-40 object-cover rounded"/>
                          <h3 class="font-semibold mt-2">${p.title}</h3>
                          <p class="text-gray-700">$${p.price}</p>
                        </div>
                      `,
                    )
                    .join('')}
                </div>
              `
              })
          },
        },
      },
    })

    const data = await axios(
      'http://localhost:3000/api/pagetemplate?where[Template_Type.slug][equals]=sports',
    )

    const respone = data.data
    setPrData(respone.docs)

    // console.log(respone)

    // editor.loadProjectData(selectedPage!)
    editor.loadProjectData(Dynamic)
    ;(window as any).editor = editor
  }

  // When clicking download, get JSON data

  return (
    <>
      <ThemeProvider theme={theme}>
        <GjsEditor
          className="gjs-custom-editor text-white bg-slate-900"
          grapesjs="https://unpkg.com/grapesjs"
          grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
          options={gjsOptions}
          plugins={[
            {
              id: 'gjs-blocks-basic',
              src: 'https://unpkg.com/grapesjs-blocks-basic',
            },
          ]}
          onEditor={onEditor}
        >
          <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
            <AISidebar />

            <div className="gjs-column-m flex flex-col flex-grow">
              <Topbar className="min-h-[48px]" />

              <Canvas className="flex-grow gjs-custom-editor-canvas" />
            </div>

            <RightSidebar
              className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`}
              prData={prData}
            />
          </div>
          <ModalProvider>
            {({ open, title, content, close }) => (
              <CustomModal open={open} title={title} children={content} close={close} />
            )}
          </ModalProvider>
          {/* <AssetsProvider>
            {({ assets, select, close, Container }) => (
              <Container>
                <CustomAssetManager assets={assets} select={select} close={close} />
              </Container>
            )}
          </AssetsProvider> */}
        </GjsEditor>
      </ThemeProvider>
    </>
  )
}

export default DefaultEditor
