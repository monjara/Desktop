import React, { useState } from 'react'
import Draggable, { ControlPosition, DraggableData, DraggableEvent } from 'react-draggable'
import DraggableComponent from './utils/draggableComponent'

type WindowProps = {
  appName: string
  appContent: React.ReactNode
}

const Window = ({ appName, appContent }: WindowProps) => {
  const [corsorType, setCursorType] = useState('cursor-default')
  const [currentPosition, setCurrentPosition] = useState<ControlPosition>({ x: 120, y: 40 })

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
      <div className='handle w-2/4 h-4/5 '>
        <div className='bg-black h-8 rounded-t-lg'>
          <p className='text-white text-center'>{appName}</p>
        </div>
        {appContent}
      </div>
    </DraggableComponent>
  )
}

export default Window
