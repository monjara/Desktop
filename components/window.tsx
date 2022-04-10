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
  const [windowArea, setWindowArea] = useState({ width: 'w-2/4', height: 'h-4/5' })
  const [draggDisable, setDraggDisable] = useState(false)

  const baseDir = process.env.NODE_ENV === 'production' ? '/Desktop' : ''

  const changeCursorToDefault = () => {
    setCursorType('cursor-default')
  }

  const changeCurrentPostion = (_e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x: data.x, y: data.y })
  }

  const toggleWindowSize = () => {
    windowArea.width !== 'w-screen'
      ? (setCurrentPosition({ x: 0, y: -36 }),
        setWindowArea({ width: 'w-screen', height: 'h-full' }),
        setDraggDisable(true))
      : (setCurrentPosition({ x: 120, y: 40 }),
        setWindowArea({ width: 'w-2/4', height: 'h-4/5' }),
        setDraggDisable(false))
  }

  const ButtonArea = () => {
    return (
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
        <span
          onClick={() => toggleWindowSize()}
          className='mx-2 bg-white bg-opacity-0 hover:bg-opacity-10 rounded-full flex justify-center mt-1 h-5 w-5 items-center'
        >
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
    )
  }

  const WindowHeader = () => {
    return (
      <div className='bg-slate-300 h-8 rounded-t-lg flex justify-center'>
        <p className='text-black text-center m-auto'>{appName}</p>
        <ButtonArea />
      </div>
    )
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
      disabled={draggDisable}
    >
      <div className={`handle ${windowArea.width} ${windowArea.height}`}>
        <WindowHeader />
        {appContent}
      </div>
    </DraggableComponent>
  )
}

export default Window
