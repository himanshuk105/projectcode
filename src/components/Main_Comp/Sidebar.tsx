import {
  mdiArrowRight,
  mdiDrag,
  mdiFileQuestion,
  mdiFilter,
  mdiSearchWeb,
  mdiBook,
  mdiCalendar,
  mdiConnection,
  mdiFileSettings,
  mdiHeart,
  mdiHelp,
  mdiInformation,
  mdiLayersOutline,
  mdiLink,
  mdiImage,
  mdiVideo,
  mdiFileDocument,
  mdiMusic,
  mdiDownload,
  mdiEye,
  mdiDelete,
  mdiPlus,
  mdiDotsVertical,
} from '@mdi/js'
import Icon from '@mdi/react'
import { useState, useEffect } from 'react'

// Sidebar Component
export const Sidebar = ({
  handleSelectedTab,
  selected,
}: {
  handleSelectedTab: (id: number) => void
  selected: number
}) => {
  const firstdiv = [
    { icon: mdiLayersOutline, name: 'Pages', id: 1 },
    { icon: mdiBook, name: 'Assets Library', id: 2 },
    { icon: mdiCalendar, name: 'Scheduler', id: 3 },
    { icon: mdiInformation, name: 'Insights', id: 4 },
    { icon: mdiLink, name: 'Plugins', id: 5 },
  ]

  const secondiv = [
    { icon: mdiHelp, name: 'Help', id: 6 },
    { icon: mdiConnection, name: 'Subscription', id: 7 },
    { icon: mdiFileSettings, name: 'Settings', id: 8 },
    { icon: mdiHeart, name: 'Give Suggestion', id: 9 },
  ]

  const [hover, setHover] = useState(false)
  const [mobileopen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Sidebar */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`
          bg-slate-900 h-screen flex flex-col justify-between cursor-pointer
          ${hover ? 'md:w-[280px] p-4' : 'md:w-[80px] pl-4 py-4'}
          z-40 md:static border-r border-slate-700 md:flex transition-all duration-300
          ${mobileopen ? 'fixed left-0 top-0 bottom-0 w-64' : 'hidden md:block'}
        `}
      >
        {/* Top Section */}
        <div className="flex flex-col gap-4">
          {/* Logo */}
          <div
            className={`h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center ${hover ? '' : 'mr-4'}`}
          >
            <span
              className={`text-white font-bold text-lg ${hover || mobileopen ? 'block' : 'hidden'}`}
            >
              CMS
            </span>
            <span
              className={`text-white font-bold text-lg ${hover || mobileopen ? 'hidden' : 'block'}`}
            >
              C
            </span>
          </div>

          <div className={`border-b border-slate-700 ${hover ? '' : 'mr-4'}`}></div>

          <ul className="flex flex-col gap-1">
            {firstdiv.map((data) => {
              return (
                <li
                  onClick={() => handleSelectedTab(data.id)}
                  className={`
                    ${
                      selected === data.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    } 
                    flex gap-3 pl-3 py-3 rounded-lg transition-all duration-200 cursor-pointer
                  `}
                  key={data.id}
                >
                  <Icon size={1.1} path={data.icon} />
                  <span
                    className={`${hover || mobileopen ? 'opacity-100 w-auto' : 'opacity-0 w-0'} 
                      whitespace-nowrap overflow-hidden transition-all duration-300 font-medium
                    `}
                  >
                    {data.name}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-1">
          <ul className="flex flex-col gap-1">
            {secondiv.map((data) => {
              return (
                <li
                  onClick={() => handleSelectedTab(data.id)}
                  className={`
                    ${
                      selected === data.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    } 
                    flex gap-3 pl-3 py-3 rounded-lg transition-all duration-200 cursor-pointer
                  `}
                  key={data.id}
                >
                  <Icon size={1.1} path={data.icon} />
                  <span
                    className={`${hover || mobileopen ? 'opacity-100 w-auto' : 'opacity-0 w-0'} 
                      whitespace-nowrap overflow-hidden transition-all duration-300 font-medium
                    `}
                  >
                    {data.name}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="fixed bottom-5 left-5 bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-full w-12 h-12 flex md:hidden items-center justify-center z-50 shadow-lg transition-colors"
      >
        <Icon
          size={1}
          path={mdiArrowRight}
          className={`${mobileopen ? 'rotate-180' : ''} transition-transform`}
        />
      </button>
    </>
  )
}
