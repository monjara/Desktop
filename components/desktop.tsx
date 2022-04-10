import { Fragment, useState } from 'react'
import Vscode from './apps/vscode'

import Header from './header'
import Sidebar from './sidebar'
import Window from './window'

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

const apps = [{ appName: 'Visual Studio Code', appContent: <Vscode /> }]

const Desktop = () => {
  const [backgroundImageKey, setBackgroundImageKey] = useState(backgroundImages[0])

  return (
    <div className={`h-screen w-screen bg-cover ${backgroundImageKey}`}>
      <Header />
      <Sidebar />
      {apps.map((app, index) => {
        return (
          <Fragment key={index.toString()}>
            <Window appName={app.appName} appContent={app.appContent} />
          </Fragment>
        )
      })}
    </div>
  )
}

export default Desktop
