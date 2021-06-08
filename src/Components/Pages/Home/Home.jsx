import HomeHeader from './HomeHeader'
import HomeBody from './HomeBody'
import HomeFooter from './HomeFooter'
import './Home.css'

function Home() {
  return (
    <div className='HomeContainer'>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </div>
  )
}

export default Home;