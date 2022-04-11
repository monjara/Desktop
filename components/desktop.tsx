import { Fragment, useEffect, useState } from 'react'

import Header from './header'
import Sidebar from './sidebar'
import Window from './window'
import Vscode from './apps/vscode'
import Chrome from './apps/chrome'
import Folder from './apps/folder'
import SelectBg from './selectBg'

export const backgroundImages = [
  { name: 'bg-warty-final-ubuntu', filename: 'warty-final-ubuntu.png' },
  {
    name: 'bg-Jammy-Jellyfish_WP_4096x2304_Grey',
    filename: 'Jammy-Jellyfish_WP_4096x2304_Grey.png',
  },
  { name: 'bg-jj_light_by_Hiking93', filename: 'jj_light_by_Hiking93.jpg' },
  { name: 'bg-jj_dark_by_Hiking93', filename: 'jj_dark_by_Hiking93.jpg' },
  { name: 'bg-ubuntu_by_arman1992', filename: 'ubuntu_by_arman1992.jpg' },
  { name: 'bg-ubuntu2_by_arman1992', filename: 'ubuntu2_by_arman1992.jpg' },
  { name: 'bg-Blue_flower_by_Elena_Stravoravdi', filename: 'Blue_flower_by_Elena_Stravoravdi.jpg' },
  {
    name: 'bg-Cherry_Tree_in_Lakones_by_elenastravoravdi',
    filename: 'Cherry_Tree_in_Lakones_by_elenastravoravdi.jpg',
  },
  { name: 'bg-Mirror_by_Uday_Nakade', filename: 'Mirror_by_Uday_Nakade.jpg' },
  { name: 'bg-DSC2943_by_kcpru', filename: 'DSC2943_by_kcpru.jpg' },
  { name: 'bg-canvas_by_roytanck', filename: 'canvas_by_roytanck.jpg' },
  {
    name: 'bg-Optical_Fibers_in_Dark_by_Elena_Stravoravdi',
    filename: 'Optical_Fibers_in_Dark_by_Elena_Stravoravdi.jpg',
  },
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
    appContent: <></>,
    alt: 'setting',
    src: '/icons/system-settings.png',
  },
]

const Desktop = () => {
  const [backgroundImageKey, setBackgroundImageKey] = useState(0)
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0])
  const [openAppIds, setOpenAppIds] = useState<number[]>([])

  useEffect(() => {
    setBackgroundImage(backgroundImages[backgroundImageKey])
  }, [backgroundImageKey])

  const toggleAppOpen = (id: number) => {
    openAppIds.includes(id)
      ? setOpenAppIds(openAppIds.filter((appId) => appId !== id))
      : setOpenAppIds([id, ...openAppIds])
  }

  const selectBackgoundImage = (key: number) => {
    setBackgroundImageKey(key)
  }

  return (
    <div className={`h-screen w-screen bg-cover ${backgroundImage.name}`}>
      <Header />
      <Sidebar toggleAppOpen={toggleAppOpen} />
      {apps.map((app, index) => {
        const isShow = openAppIds.includes(app.id)
        return isShow ? (
          app.appName === 'Setting' ? (
            <Fragment key={index.toString()}>
              <SelectBg selectBackgoundImage={selectBackgoundImage} toggleAppOpen={toggleAppOpen} />
            </Fragment>
          ) : (
            <Fragment key={index.toString()}>
              <Window
                appId={app.id}
                appName={app.appName}
                appContent={app.appContent}
                toggleAppOpen={toggleAppOpen}
              />
            </Fragment>
          )
        ) : (
          <Fragment key={index.toString()} />
        )
      })}
    </div>
  )
}

export default Desktop
