import { mdiDrag, mdiFileQuestion, mdiFilter } from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'

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
      status: 'Published',
      updated: '20/05/2025',
    },
  ])

  const handleChecked = (e: any, index: number, def = 'single') => {
    const cloned = [...current]
    if (def !== 'single') {
      if (e.target.checked != true) {
        cloned.forEach((d) => {
          d.checked = false
        })
      } else {
        cloned.forEach((d) => {
          d.checked = true
        })
      }
    } else {
      if (cloned[index]) {
        cloned[index].checked = !cloned[index].checked
      }
    }
    setCurrent(cloned)
  }

  return (
    <div className="p-5 w-full border-2 flex flex-col gap-2">
      <div className="w-40 h-10 border-2 flex items-center justify-center">Jane Doe</div>
      <div className="w-full border"></div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <button className="p-3 text-xl flex justify-center items-center gap-2">
            Content
            <Icon
              className="border border-gray-300 p-1 rounded-lg hover:bg-gray-300"
              size={1.2}
              path={mdiFileQuestion}
              color={'gray'}
            />
          </button>
          <div className="flex gap-5">
            <button className="p-2 w-35 hover:bg-gray-200 cursor-pointer  text-lg bg-white font-bold rounded-lg text-gray-600 border-2 border-gray-600">
              Filter
            </button>
            <button className="p-2 w-35 hover:bg-blue-950 cursor-pointer  text-lg bg-blue-500 font-bold rounded-lg text-white">
              + New Entry
            </button>
          </div>
        </div>
        <div className="border border-gray-400 flex flex-col divide-y divide-gray-400">
          <ul className="flex items-center gap-10 p-2  flex-1">
            <li className="">
              <input onChange={(e) => handleChecked(e, 0, 'all')} type="checkbox" name="" id="" />
            </li>
            <li>
              <Icon size={0.7} path={mdiFilter} />
            </li>
            <li className=" flex-1">Name</li>
            <li className="md:block hidden">Target</li>
            <li className="md:block hidden">Updated At</li>
            <li className="">Status</li>
          </ul>
          {current.map((data: any, index) => {
            return (
              <ul key={data.id} className="flex items-center gap-10 p-2  flex-1">
                <li className="">
                  <input
                    checked={data.checked}
                    onChange={(e) => handleChecked(e, index)}
                    type="checkbox"
                    name=""
                    id=""
                  />
                </li>
                <li>
                  <Icon size={0.7} path={mdiDrag} />
                </li>
                <li className="flex-1">{data.name}</li>
                <li className="md:block hidden">{data.target}</li>
                <li className="md:block hidden">{data.updated}</li>
                <li className="">{data.status}</li>
              </ul>
            )
          })}
        </div>
      </div>
      <div></div>
    </div>
  )
}
