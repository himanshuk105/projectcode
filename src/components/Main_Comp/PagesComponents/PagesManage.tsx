import {
  mdiArrowRight,
  mdiDrag,
  mdiFileQuestion,
  mdiFilter,
  mdiLayersOutline,
  mdiPlus,
  mdiSearchWeb,
} from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'

export const ExpandableType = ({ handleExpand, expand, anydata, id }: any) => {
  return (
    <div className="overflow-hidden">
      <button
        onClick={() => handleExpand(id)}
        className="flex items-center gap-2 w-full text-left py-2 hover:text-blue-600 transition-colors"
      >
        <Icon
          size={0.8}
          path={mdiArrowRight}
          className={`transition-transform duration-200 ${expand === id ? 'rotate-90' : ''}`}
        />
        <span className="font-medium text-gray-700">{anydata.title}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          expand === id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-gray-600 ml-6 pb-2 leading-relaxed">{anydata.para}</p>
      </div>
    </div>
  )
}

export const PageManage = () => {
  const [current, setCurrent] = useState([
    {
      id: 1,
      checked: false,
      name: 'Home',
      target: '/',
      status: 'Published',
      updated: '20/05/2025',
    },
    {
      id: 2,
      checked: false,
      name: 'About',
      target: '/about',
      status: 'Published',
      updated: '20/05/2025',
    },
    {
      id: 3,
      checked: false,
      name: 'Contact',
      target: '/contact',
      status: 'Draft',
      updated: '18/05/2025',
    },
  ])

  const [activetab, setActiveTab] = useState(1)
  const [expand, setExpand] = useState<number | null>(null)

  const handleExpand = (id: number) => {
    setExpand(id === expand ? null : id)
  }

  const handleActiveTab = (id: number) => {
    setActiveTab(id)
  }

  const handleChecked = (e: any, index: number, def = 'single') => {
    const cloned = [...current]
    if (def !== 'single') {
      const checked = e.target.checked
      cloned.forEach((d) => {
        d.checked = checked
      })
    } else {
      if (cloned[index]) {
        cloned[index].checked = !cloned[index].checked
      }
    }
    setCurrent(cloned)
  }

  return (
    <div className="p-6 flex flex-col gap-6 flex-1 min-w-0 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">JD</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Jane Doe</h2>
            <p className="text-sm text-gray-500">Content Manager</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex flex-col gap-4 lg:w-8/12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-semibold text-gray-900">Content Management</h1>
                  <Icon
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    size={1}
                    path={mdiFileQuestion}
                  />
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    <Icon size={0.8} path={mdiFilter} className="inline mr-2" />
                    Filter
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                    <Icon size={0.8} path={mdiPlus} className="inline mr-2" />
                    New Entry
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="p-4 text-left">
                      <input
                        onChange={(e) => handleChecked(e, 0, 'all')}
                        type="checkbox"
                        className="rounded"
                      />
                    </th>
                    <th className="p-4 text-left">
                      <Icon size={0.8} path={mdiDrag} className="text-gray-400" />
                    </th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 hidden md:table-cell">
                      Target
                    </th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700 hidden md:table-cell">
                      Updated
                    </th>
                    <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {current.map((data: any, index) => (
                    <tr key={data.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <input
                          checked={data.checked}
                          onChange={(e) => handleChecked(e, index)}
                          type="checkbox"
                          className="rounded"
                        />
                      </td>
                      <td className="p-4">
                        <Icon size={0.8} path={mdiDrag} className="text-gray-400 cursor-move" />
                      </td>
                      <td className="p-4 font-medium text-gray-900">{data.name}</td>
                      <td className="p-4 text-gray-600 hidden md:table-cell font-mono text-sm">
                        {data.target}
                      </td>
                      <td className="p-4 text-gray-600 hidden md:table-cell text-sm">
                        {data.updated}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            data.status === 'Published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {data.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-4/12 flex flex-col gap-4">
          {/* Search */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg bg-gray-50">
              <Icon size={0.9} color="rgb(107 114 128)" path={mdiSearchWeb} />
              <input
                className="border-0 flex-1 focus:outline-0 bg-transparent text-gray-700 placeholder-gray-500"
                type="text"
                placeholder="Search pages..."
              />
            </div>

            <div className="mt-4 space-y-3">
              <ExpandableType
                anydata={{
                  title: 'Folder Management',
                  para: 'Organize your content into structured folders for better navigation and management. Create hierarchical structures that make sense for your workflow.',
                }}
                handleExpand={handleExpand}
                expand={expand}
                id={1}
              />
              <ExpandableType
                anydata={{
                  title: 'View Options',
                  para: 'Customize how your content is displayed with different view modes. Switch between list, grid, and detailed views to match your preference.',
                }}
                handleExpand={handleExpand}
                expand={expand}
                id={2}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => handleActiveTab(1)}
                  className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activetab === 1
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Content Type
                </button>
                <button
                  onClick={() => handleActiveTab(2)}
                  className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activetab === 2
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Page Hierarchy
                </button>
              </div>
            </div>

            <div className="p-4">
              {activetab === 1 ? (
                <div className="space-y-3">
                  <ExpandableType
                    anydata={{
                      title: 'Page Models',
                      para: 'Define the structure and fields for different types of pages. Create templates that ensure consistency across your content.',
                    }}
                    handleExpand={handleExpand}
                    expand={expand}
                    id={3}
                  />
                  <ExpandableType
                    anydata={{
                      title: 'Sections',
                      para: 'Break down your pages into manageable sections. Each section can have its own content types and styling options.',
                    }}
                    handleExpand={handleExpand}
                    expand={expand}
                    id={4}
                  />
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon size={2} path={mdiLayersOutline} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Page hierarchy visualization coming soon</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
