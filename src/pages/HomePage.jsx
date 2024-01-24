import React, { useEffect } from 'react'
import { getHotelsThunk } from '../store/states/hotels.state'
import { useDispatch, useSelector } from 'react-redux'
import ListHotels from '../components/HomePage/ListHotels'

const HomePage = () => {

  const hotels = useSelector( states => states.hotels )

 const dispatch = useDispatch()
 
  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
    
  }, [])
  
  console.log(hotels)

  return (
    <div>
      <ListHotels hotels={hotels}/>
    </div>
  )
}

export default HomePage
