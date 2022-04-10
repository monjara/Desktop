import { Fragment, useState } from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Window from './window'
import Vscode from './apps/vscode'
import Chrome from './apps/chrome'
import Folder from './apps/folder'
import Setting from './apps/setting'

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

export const apps = [
  {
    id: 1,
    appName: 'Visual Studio Code',
    appContent: <Vscode />,
    alt: 'vscode',
    src: '/icons/com.visualstudio.code.png',
  },
  {
    id: 2,
    appName: 'Google Chrome',
    appContent: <Chrome />,
    alt: 'google-chrome',
    src: '/icons/google-chrome.png',
  },
  {
    id: 3,
    appName: 'Folder',
    appContent: <Folder />,
    alt: 'folder',
    src: '/icons/folder.png',
  },
  {
    id: 4,
    appName: 'Setting',
    appContent: <Setting />,
    alt: 'setting',
    src: '/icons/system-settings.png',
  },
]

const Desktop = () => {
  const [backgroundImageKey, setBackgroundImageKey] = useState(backgroundImages[0])
  const [openAppIds, setOpenAppIds] = useState<number[]>([])

  const toggleAppOpen = (id: number) => {
    openAppIds.includes(id)
      ? setOpenAppIds(openAppIds.filter((appId) => appId !== id))
      : setOpenAppIds([id, ...openAppIds])
  }

  return (
    <div className={`h-screen w-screen bg-cover ${backgroundImageKey}`}>
      <Header />
      <Sidebar toggleAppOpen={toggleAppOpen} />
      {apps.map((app, index) => {
        const isShow = openAppIds.includes(app.id)
        return isShow ? (
          <Fragment key={index.toString()}>
            <Window
              appId={app.id}
              appName={app.appName}
              appContent={app.appContent}
              toggleAppOpen={toggleAppOpen}
            />
          </Fragment>
        ) : (
          <Fragment key={index.toString()} />
        )
      })}
    </div>
  )
}

export default Desktop
