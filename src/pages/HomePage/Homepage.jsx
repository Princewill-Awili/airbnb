import './homepage.css'
import Topbar from '../../components/Topbar/Topbar'
import { useContext } from 'react'

import {homes, beachfronts} from '../../utils/dummyData'

import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

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
            filterMode === 'shared' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCategory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          } 

          {
            filterMode ==="omg" && (
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
            filterMode === 'mansions' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCategory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          }

          {
            filterMode ==="country" && (
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
            filterMode === 'iconic' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCategory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          }

          {
            filterMode ==="design" && (
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
            filterMode === 'caves' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCategory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          }

          {
            filterMode ==="tropical" && (
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
            filterMode === 'house' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCategory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          }

          {
            filterMode ==="amazing" && (
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
            filterMode === 'bed' && (
              <>
              {
                homes.map((item,index)=>(
                  <Card key={index} {...item} searchCategory="Apartments in Lekki"/>
                ))
              }
              </>
            )
          }

         
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage