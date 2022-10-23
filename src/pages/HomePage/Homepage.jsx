import './homepage.css'
import Topbar from '../../components/Topbar/Topbar'
import {homes} from '../../utils/dummyData'
import Card from '../../components/Card/Card'

const Homepage = () => {

  console.log(homes.length)

  return (
    <div className='homepage'>
        <Topbar/>
        <div className="cardsContainer">
          {
            homes.map((home,index)=>(
              <Card key={index} {...home} searchCategory="Apartment in Lekki"/>
            ))
          }
          
        </div>
    </div>
  )
}

export default Homepage