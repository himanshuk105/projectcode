'use client'
import React, { useRef } from 'react'
import { Editor, EditorConfig } from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import GjsEditor, { AssetsProvider, Canvas, ModalProvider } from '@grapesjs/react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { MAIN_BORDER_COLOR } from './components/common'
import RightSidebar from './components/RightSidebar'
import CustomModal from './components/CustomModal'
import CustomAssetManager from './components/CustomAssetManager'
import Topbar from './components/Topbar'
import AISidebar from './components/LeftSide'
import { Data } from '@/lib/Page'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const gjsOptions: EditorConfig = {
  height: '100vh',
  container: '#gjs',
  plugins: ['gjs-preset-webpage'],
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  canvas: {
    styles: ['https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'],
  },
  // projectData: Data,
  // projectData: {
  //   assets: [
  //     'https://via.placeholder.com/350x250/78c5d6/fff',
  //     'https://via.placeholder.com/350x250/459ba8/fff',
  //     'https://via.placeholder.com/350x250/79c267/fff',
  //     'https://via.placeholder.com/350x250/c5d647/fff',
  //     'https://via.placeholder.com/350x250/f28c33/fff',
  //   ],
  //   pages: [
  //     {
  //       name: 'Home page',
  //       component: `<h1>GrapesJS React Custom UI</h1>`,
  //     },
  //   ],
  // },
}

const DefaultEditor = () => {
  const editorRef = useRef<Editor | null>(null)

  const onEditor = (editor: Editor) => {
    console.log('Editor loaded')

    editor.loadProjectData(Data)

    editor.BlockManager.add('hero-split', {
      label: 'Hero Split',
      category: 'Hero Sections',
      media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
        </svg>`,
      content: `
          <section style="display:flex; align-items:center; justify-content:space-between;
                          padding:80px 40px; background:#ffffff; gap:40px;">
            <div style="flex:1;">
              <h1 style="font-size:42px; font-weight:700; margin-bottom:20px; color:#0f172a;">
                Design Without Limits
              </h1>
              <p style="font-size:18px; color:#334155; margin-bottom:30px;">
                Create responsive, modern websites with just a few clicks using our editor.
              </p>
              <a href="#learn-more"
                 style="display:inline-block; padding:12px 28px; background:#10b981; color:#fff;
                        font-size:16px; border-radius:8px; text-decoration:none;">
                Learn More
              </a>
            </div>
            <div style="flex:1; text-align:center;">
              <img src="https://via.placeholder.com/500x350"
                   alt="Hero Illustration"
                   style="max-width:100%; border-radius:12px;
                          box-shadow:0 4px 10px rgba(0,0,0,0.1);"/>
            </div>
          </section>
        `,
    })
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

            <RightSidebar className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`} />
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
