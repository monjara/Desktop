import { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'

import Draggable from 'react-draggable'

const backgroundImages = [
  'bg-warty-final-ubuntu',
  'bg-jj_light_by_Hiking93',
  'bg-jj_dark_by_Hiking93',
  'bg-Jammy-Jellyfish_WP_4096x2304_Grey',
  'bg-ubuntu-default-greyscale-wallpaper',
  'bg-ubuntu_by_arman1992',
  'bg-ubuntu2_by_arman1992',
  'bg-Blue_flower_by_Elena_Stravoravdi',
  'bg-Cherry_Tree_in_Lakones_by_elenastravoravdi',
  'bg-Mirror_by_Uday_Nakade',
  'bg-DSC2943_by_kcpru',
  'bg-canvas_by_roytanck',
  'bg-Optical_Fibers_in_Dark_by_Elena_Stravoravdi',
]

const Desktop = () => {
  const [backgroundImageKey, setBackgroundImageKey] = useState(backgroundImages[0])
  const [corsorType, setCursorType] = useState('cursor-default')

  const changeCursorToDefault = () => {
    setCursorType('cursor-default')
  }

  return (
    <div className={`h-screen w-screen bg-cover ${backgroundImageKey}`}>
      <Header />
      <Sidebar />
      <Draggable
        axis='both'
        handle='.handle'
        defaultPosition={{ x: 120, y: 40 }}
        grid={[25, 25]}
        scale={1}
        onStop={changeCursorToDefault}
      >
        <div className='handle w-2/4 h-4/5 '>
          <div className='bg-black h-8 rounded-t-lg'>
            <p className='text-white text-center'>Visual Studio Code</p>
          </div>
          <div className='h-full bg-white'>
            <iframe
              src='https://github1s.com/monjara/Desktop'
              frameBorder='0'
              className='h-full w-full bg-ub-cool-grey'
            />
          </div>
        </div>
      </Draggable>
    </div>
  )
}

export default Desktop
