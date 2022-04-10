import React, { useState } from 'react'
import { ControlPosition, DraggableData, DraggableEvent } from 'react-draggable'
import DraggableComponent from './utils/draggableComponent'

type WindowProps = {
  appId: number
  appName: string
  appContent: React.ReactNode
  toggleAppOpen: (id: number) => void
}

const Window = ({ appId, appName, appContent, toggleAppOpen }: WindowProps) => {
  const [corsorType, setCursorType] = useState('cursor-default')
  const [currentPosition, setCurrentPosition] = useState<ControlPosition>({ x: 120, y: 40 })

  const baseDir = process.env.NODE_ENV === 'production' ? '/Desktop' : ''

  const changeCursorToDefault = () => {
    setCursorType('cursor-default')
  }

  const changeCurrentPostion = (_e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x: data.x, y: data.y })
  }

  return (
    <DraggableComponent
      axis='both'
      handle='.handle'
      defaultPosition={{ x: 120, y: 40 }}
      grid={[25, 25]}
      scale={1}
      onStop={changeCursorToDefault}
      onDrag={(e, data) => changeCurrentPostion(e, data)}
      position={currentPosition}
    >
      <div className='handle w-2/4 h-4/5'>
        <div className='bg-slate-300 h-8 rounded-t-lg flex justify-center'>
          <p className='text-black text-center m-auto'>{appName}</p>
          <div className='absolute select-none right-0 top-0 mt-1 mr-1 flex justify-center items-center'>
            <span
              onClick={() => toggleAppOpen(appId)}
              className='mx-1.5 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center'
            >
              <img
                src={`${baseDir}/icons/window-minimize-symbolic.svg`}
                alt='minimize'
                className='h-5 w-5 inline'
              />
            </span>
            <span className='mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center'>
              <img
                src={`${baseDir}/icons/window-maximize-symbolic.svg`}
                alt='maximize'
                className='h-5 w-5 inline'
              />
            </span>
            <button
              onClick={() => toggleAppOpen(appId)}
              className='mx-1.5 focus:outline-none cursor-default bg-ub-orange bg-opacity-90 hover:bg-opacity-100 rounded-full flex justify-center mt-1 h-5 w-5 items-center'
            >
              <img
                src={`${baseDir}/icons/window-close-symbolic.svg`}
                alt='close'
                className='h-5 w-5 inline'
              />
            </button>
          </div>
        </div>
        {appContent}
      </div>
    </DraggableComponent>
  )
}

export default Window
