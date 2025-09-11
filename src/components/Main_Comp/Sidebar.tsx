// 'use client'
// import {
//   mdiArrowRight,
//   mdiBook,
//   mdiCalendar,
//   mdiConnection,
//   mdiDatabase,
//   mdiFileSettings,
//   mdiHeart,
//   mdiHelp,
//   mdiInformation,
//   mdiLayersOutline,
//   mdiLink,
//   mdiPageFirst,
// } from '@mdi/js'
// import Icon from '@mdi/react'
// import { useState } from 'react'

// export const Sidebar = () => {
//   const firstdiv = [
//     { icon: mdiLayersOutline, name: 'Pages', id: 1 },
//     { icon: mdiBook, name: 'Assets Library', id: 2 },
//     { icon: mdiCalendar, name: 'Scheduler', id: 3 },
//     { icon: mdiInformation, name: 'Insights', id: 4 },
//     { icon: mdiLink, name: 'Plugins', id: 5 },
//   ]

//   const secondiv = [
//     { icon: mdiHelp, name: 'Help', id: 6 },
//     { icon: mdiConnection, name: 'Subscription', id: 7 },
//     { icon: mdiFileSettings, name: 'Settings', id: 8 },
//     { icon: mdiHeart, name: 'Give Suggestion', id: 9 },
//   ]

//   const [hover, setHover] = useState(false)
//   const [mobileopen, setMobileOpen] = useState(false)

//   const mouseEnter = () => {
//     setHover(true)
//   }

//   const mouseLeave = () => {
//     setHover(false)
//   }

//   const handleOpenandClose = () => {
//     setMobileOpen((prev) => !prev)
//   }

//   const [selected, setSelected] = useState(1)

//   return (
//     <>
//       <div
//         onMouseEnter={mouseEnter}
//         onMouseLeave={mouseLeave}
//         className={`bg-[#ebebeb] ${mobileopen ? 'hidden' : 'w-[50%]'}  ${hover ? 'md:w-[300px] p-4' : 'md:w-[100px] pl-4 py-4'} transition-all duration-300 h-screen cursor-pointer flex flex-col justify-between`}
//       >
//         <div className=" flex flex-col gap-2 box-border ">
//           <div className={`border-2 h-15 bg-red-200 ${hover ? '' : 'mr-4'}`}></div>
//           <div className={`border ${hover ? '' : 'mr-4'}`}></div>
//           <ul className="flex flex-col gap-2">
//             {firstdiv.map((data) => {
//               return (
//                 <li
//                   className={`${selected == data.id ? 'bg-blue-300' : ''} flex gap-2 pl-4 py-2 ${hover ? 'rounded-lg' : 'rounded-l-lg'}`}
//                   key={data.id}
//                 >
//                   <Icon size={1} path={data.icon} />
//                   <span
//                     className={`${hover ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
//       whitespace-nowrap overflow-hidden transition-all duration-300`}
//                   >
//                     {data.name}
//                   </span>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//         <div className=" flex flex-col gap-2 box-border ">
//           <ul className="flex flex-col gap-2">
//             {secondiv.map((data) => {
//               return (
//                 <li
//                   className={`${selected == data.id ? 'bg-blue-300' : ''} flex gap-2 pl-4 py-2 ${hover ? 'rounded-lg' : 'rounded-l-lg'}`}
//                   key={data.id}
//                 >
//                   <Icon size={1} path={data.icon} />
//                   <span
//                     className={`${hover ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
//       whitespace-nowrap overflow-hidden transition-all duration-300`}
//                   >
//                     {data.name}
//                   </span>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </div>
//       <button
//         onClick={handleOpenandClose}
//         className={`fixed bottom-15 bg-black text-white border-2 rounded-full size-10 flex md:hidden items-center justify-center`}
//       >
//         <Icon size={1} path={mdiArrowRight} />
//       </button>
//     </>
//   )
// }

'use client'
import {
  mdiArrowRight,
  mdiBook,
  mdiCalendar,
  mdiConnection,
  mdiDatabase,
  mdiFileSettings,
  mdiHeart,
  mdiHelp,
  mdiInformation,
  mdiLayersOutline,
  mdiLink,
  mdiPageFirst,
} from '@mdi/js'
import Icon from '@mdi/react'
import { useEffect, useState } from 'react'

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
    handleResize() // run on mount
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
          bg-[#ebebeb] h-screen flex flex-col justify-between cursor-pointer
          
          /* Desktop */
          ${hover ? 'md:w-[300px] p-4' : 'md:w-[80px] pl-4 py-4'}
          
          /* Mobile drawer */
          z-40 w-[250px] md:static
          transform ${mobileopen ? ' translate-x-0' : 'hidden -translate-x-full'}
          md:translate-x-0 md:flex transition-all duration-300 
        `}
      >
        {/* Top Section */}
        <div className=" flex flex-col gap-2 box-border ">
          <div className={`border-2 h-15 bg-red-200 ${hover ? '' : 'mr-4'}`}></div>
          <div className={`border ${hover ? '' : 'mr-4'}`}></div>
          <ul className="flex flex-col gap-2">
            {firstdiv.map((data) => {
              return (
                <li
                  onClick={() => handleSelectedTab(data.id)}
                  className={`${selected == data.id ? 'bg-blue-500' : ''} flex gap-2 pl-4 py-2 ${hover ? 'rounded-lg' : 'rounded-l-lg'} ${selected == data.id ? '' : 'hover:bg-gray-400'}`}
                  key={data.id}
                >
                  <Icon size={1} path={data.icon} />
                  <button
                    className={`${hover || mobileopen ? 'opacity-100 w-auto' : 'opacity-0 w-0'} 
      whitespace-nowrap overflow-hidden transition-all duration-300 cursor-pointer `}
                  >
                    {data.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className=" flex flex-col gap-2 box-border ">
          <ul className="flex flex-col gap-2">
            {secondiv.map((data) => {
              return (
                <li
                  onClick={() => handleSelectedTab(data.id)}
                  className={`${selected == data.id ? 'bg-blue-500' : ''} flex gap-2 pl-4 py-2 ${hover ? 'rounded-lg' : 'rounded-l-lg'} ${selected == data.id ? '' : 'hover:bg-gray-400'}`}
                  key={data.id}
                >
                  <Icon size={1} path={data.icon} />
                  <button
                    className={`${hover || mobileopen ? 'opacity-100 w-auto' : 'opacity-0 w-0'} 
      whitespace-nowrap overflow-hidden transition-all duration-300 cursor-pointer`}
                  >
                    {data.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="fixed bottom-5 left-5 bg-black text-white border-2 rounded-full size-10 flex md:hidden items-center justify-center z-50"
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
