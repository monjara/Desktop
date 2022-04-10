const apps = [{ alt: 'vscode', src: '/icons/com.visualstudio.code.png' }]

const Sidebar = () => {
  const baseDir = process.env.NODE_ENV === 'production' ? '/Desktop' : ''

  return (
    <div className='w-24 bg-black opacity-50 absolute top-9 bottom-0 left-0'>
      {apps.map((app, index) => {
        return (
          <div key={index.toString()} className='w-full h-24 hover:bg-white rounded-2xl'>
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

export default Sidebar
