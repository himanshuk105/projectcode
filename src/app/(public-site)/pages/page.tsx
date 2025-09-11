'use client'

import { PageManage } from '@/components/Main_Comp/PagesComponents/PagesManage'
import { Sidebar } from '@/components/Main_Comp/Sidebar'
import { useState } from 'react'

export default function Pages() {
  const [selected, setSelected] = useState(1)

  const handleSelectedTab = (id: number) => {
    setSelected(id)
  }

  const renderContent = () => {
    switch (selected) {
      case 1:
        return <PageManage />
      case 2:
        return <div>Assets Library</div>
      case 3:
        return <div>Scheduler</div>
      case 4:
        return <div>Insights</div>
      case 5:
        return <div>Plugins</div>
      case 6:
        return <div>Help</div>
      default:
        return <div>Not Found</div>
    }
  }

  return (
    <div className="flex">
      <Sidebar handleSelectedTab={handleSelectedTab} selected={selected} />
      {renderContent()}
    </div>
  )
}
