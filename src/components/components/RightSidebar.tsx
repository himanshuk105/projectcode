import * as React from 'react'
import {
  BlocksProvider,
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
  WithEditor,
} from '@grapesjs/react'
import {
  mdiBrush,
  mdiLayers,
  mdiViewGridPlus,
  mdiTextBoxMultiple,
  mdiCog,
  mdiPageLayoutBody,
} from '@mdi/js'
import Icon from '@mdi/react'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'
import CustomBlockManager from './CustomBlockManager'
import { MAIN_BORDER_COLOR, cx } from './common'
import CustomPageManager from './CustomPageManager'
import CustomLayerManager from './CustomLayerManager'
import CustomSelectorManager from './CustomSelectorManager'
import CustomStyleManager from './CustomStyleManager'
import CustomTraitManager from './CustomTraitManager'

const defaultTabProps = {
  className: '!min-w-0',
}

export default function RightSidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={cx('gjs-right-sidebar flex flex-col', className)}>
      <Tabs value={selectedTab} onChange={(_, v) => setSelectedTab(v)} variant="fullWidth">
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiBrush} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiCog} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiLayers} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiViewGridPlus} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiTextBoxMultiple} />} />
        <Tab {...defaultTabProps} label={<Icon size={1} path={mdiPageLayoutBody} />} />
      </Tabs>
      <div className={cx('overflow-y-auto flex-grow border-t', MAIN_BORDER_COLOR)}>
        {selectedTab === 0 && (
          <>
            <SelectorsProvider>{(props) => <CustomSelectorManager {...props} />}</SelectorsProvider>
            <StylesProvider>{(props) => <CustomStyleManager {...props} />}</StylesProvider>
          </>
        )}
        {selectedTab === 1 && (
          <TraitsProvider>{(props) => <CustomTraitManager {...props} />}</TraitsProvider>
        )}
        {selectedTab === 2 && (
          <LayersProvider>{(props) => <CustomLayerManager {...props} />}</LayersProvider>
        )}
        {selectedTab === 3 && (
          <BlocksProvider>{(props) => <CustomBlockManager {...props} />}</BlocksProvider>
        )}
        {selectedTab === 4 && (
          <PagesProvider>{(props) => <CustomPageManager {...props} />}</PagesProvider>
        )}
        {selectedTab === 5 && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Template Gallery</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { id: 1, name: 'Portfolio', img: '/templates/portfolio.png' },
                { id: 2, name: 'Business', img: '/templates/business.png' },
                { id: 3, name: 'E-Commerce', img: '/templates/ecommerce.png' },
                { id: 4, name: 'Landing Page', img: '/templates/landing.png' },
                { id: 5, name: 'Blog', img: '/templates/blog.png' },
              ].map((template) => (
                <div
                  key={template.id}
                  className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={template.img}
                    alt={template.name}
                    className="w-full h-30 object-cover"
                  />
                  <div className="p-3 flex flex-col items-center">
                    <p className="font-medium text-gray-800">{template.name}</p>
                    <button
                      className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => console.log('Selected:', template.name)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
