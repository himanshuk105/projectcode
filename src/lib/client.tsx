'use client'

import { Puck, type Data } from '@measured/puck'
import config from 'puck.config'
import '@measured/puck/puck.css'

export function Client({ data }: { data: Data }) {
  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        console.log(data)
      }}
    />
  )
}
