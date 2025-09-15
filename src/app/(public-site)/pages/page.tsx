'use client'

import { AssetsLibrary } from '@/components/Main_Comp/PagesComponents/AssetManager'
import { PageManage } from '@/components/Main_Comp/PagesComponents/PagesManage'
import { Sidebar } from '@/components/Main_Comp/Sidebar'
import {
  mdiCalendar,
  mdiConnection,
  mdiFileSettings,
  mdiHeart,
  mdiHelp,
  mdiInformation,
  mdiLink,
} from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'

export default function Dashboard() {
  const [selected, setSelected] = useState(1)

  const handleSelectedTab = (id: number) => {
    setSelected(id)
  }

  const renderContent = () => {
    switch (selected) {
      case 1:
        return <PageManage />
      case 2:
        return <AssetsLibrary />
      case 3:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiCalendar} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Scheduler</h2>
              <p className="text-gray-600">Content scheduling features coming soon</p>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiInformation} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Insights</h2>
              <p className="text-gray-600">Analytics and insights dashboard coming soon</p>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiLink} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Plugins</h2>
              <p className="text-gray-600">Plugin management system coming soon</p>
            </div>
          </div>
        )
      case 6:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiHelp} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Help Center</h2>
              <p className="text-gray-600">Documentation and support resources</p>
            </div>
          </div>
        )
      case 7:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiConnection} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscription</h2>
              <p className="text-gray-600">Manage your subscription and billing</p>
            </div>
          </div>
        )
      case 8:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiFileSettings} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
              <p className="text-gray-600">Configure your application preferences</p>
            </div>
          </div>
        )
      case 9:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Icon size={3} path={mdiHeart} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Give Suggestion</h2>
              <p className="text-gray-600">Share your feedback and suggestions with us</p>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
              <p className="text-gray-600">The requested page could not be found</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex w-full min-h-screen overflow-x-hidden bg-gray-100">
      <Sidebar handleSelectedTab={handleSelectedTab} selected={selected} />
      <main className="flex-1 min-w-0">{renderContent()}</main>
    </div>
  )
}
