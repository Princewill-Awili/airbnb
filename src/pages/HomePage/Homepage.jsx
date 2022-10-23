import './homepage.css'
import Topbar from '../../components/Topbar/Topbar'
import { useContext } from 'react'

import {homes, beachfronts} from '../../utils/dummyData'

import Card from '../../components/Card/Card'
import { states } from '../../utils/context'


const Homepage = () => {

  const { filterMode } = useContext(states);

  return (
    <div className='homepage'>
        <Topbar/>
        <div className="cardsContainer">
          {
            filterMode ==="beach" && (
              <>
                {
                  beachfronts.map((item,index)=>(
                    <Card key={index} {...item} searchCategory="Beach front Apartments in Lekki"/>
                  ))
                }
              </>
            )
          }

          {
            filterMode === 'sharedHomes' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCAtegory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          } 
        </div>
    </div>
  )
}

export default Homepage