import type { NextPage } from 'next'
import Desktop from '../components/desktop'

const Home: NextPage = () => {
  return (
    <div className='hidden-scrollbar'>
      <Desktop />
    </div>
  )
}

export default Home
