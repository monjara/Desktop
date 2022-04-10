import React from 'react'
import { apps } from './desktop'

type SidebarProps = {
toggleAppOpen: (id: number) => void
}

const Sidebar = ({toggleAppOpen}: SidebarProps) => {
  const baseDir = process.env.NODE_ENV === 'production' ? '/Desktop' : ''

  return (
    <div className='w-24 bg-black opacity-50 absolute top-9 bottom-0 left-0'>
      {apps.map((app, index) => {
        return (
          <div 
            key={index.toString()} 
            className='w-full h-24 hover:bg-white rounded-2xl'
            onClick={() => toggleAppOpen(app.id)}
          >
            <img
              src={baseDir + app.src}
              alt={app.alt}
              width='90%'
              height='90%'
              className='m-auto'
            />
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(Sidebar)
