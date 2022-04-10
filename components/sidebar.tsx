import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='w-24 bg-black opacity-50 absolute top-9 bottom-0 left-0'>
      <div className='w-full h-24 hover:bg-white rounded-2xl'>
        <Image
          src='/icons/com.visualstudio.code.png'
          alt='vscode'
          width='90%'
          height='90%'
          className='m-auto'
        />
      </div>
    </div>
  )
}

export default Sidebar
