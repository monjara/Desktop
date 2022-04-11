import React from 'react'
import { apps } from './desktop'

type SidebarProps = {
  toggleAppOpen: (id: number) => void
}

const Sidebar = ({ toggleAppOpen }: SidebarProps) => {
  const baseDir = process.env.NODE_ENV === 'production' ? '/Desktop' : ''

  return (
    <div className='w-24 bg-black bg-zinc-900/75 absolute top-9 bottom-0 left-0'>
      {apps.map((app, index) => {
        return (
          <div
            key={index.toString()}
            className='w-full h-24 hover:bg-white rounded-2xl flex justify-center'
            onClick={() => toggleAppOpen(app.id)}
          >
            <img
              src={baseDir + app.src}
              alt={app.alt}
              width='80%'
              height='80%'
              className='m-auto'
            />
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Sidebar)
