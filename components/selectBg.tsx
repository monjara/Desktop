import { backgroundImages } from './desktop'
import Window from './window'

type SelectBgProps = {
  selectBackgoundImage: (index: number) => void
  toggleAppOpen: (id: number) => void
}

const SelectBg = ({ selectBackgoundImage, toggleAppOpen }: SelectBgProps) => {
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/Desktop' : ''
  const baseDir = urlPrefix + '/backgrounds/'

  const AppContent = () => {
    const selectImage = (index: number) => {
      selectBackgoundImage(index)
    }

    return (
      <div className='h-full bg-white'>
        <div className='w-11/12 mx-auto'>
          <div className='pt-4 grid grid-cols-1 lg:grid-cols-3'>
            {backgroundImages.map((bgImage, index) => {
              const imagePath = baseDir + bgImage.filename
              return (
                <div
                  key={index.toString()}
                  className='m-2 justify-center'
                  onClick={() => selectImage(index)}
                >
                  <img src={`${imagePath}`} alt={'bg'} className='m-1' />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  // setting
  const appId = 4
  const appName = 'Setting'
  return (
    <Window
      appId={appId}
      appName={appName}
      appContent={<AppContent />}
      toggleAppOpen={toggleAppOpen}
      isSetting={true}
    />
  )
}

export default SelectBg
