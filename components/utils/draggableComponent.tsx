import React from 'react'
import Draggable, { DraggableProps } from 'react-draggable'

interface DraggableComponentProps extends DraggableProps {
  children: React.ReactNode
}

const DraggableComponent = ({ children, ...rest }: Partial<DraggableComponentProps>) => {
  return <Draggable {...rest}>{children}</Draggable>
}

export default DraggableComponent
