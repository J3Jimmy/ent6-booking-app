import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/states/hotels.state"
import { useDispatch } from "react-redux"

const FilterCities = () => {

    
    const url = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(url)
    

    useEffect(() => {
      getCities()
    }, [])
    
    console.log(cities)
  
    const dispatch = useDispatch()

  const handleFilterCities = (id) => {
    let url = 'https://hotels-api.academlo.tech/hotels'
    if(id !== 'all cities') {
      url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`
     }
    dispatch(getHotelsThunk(url))
  }

  return (
    <div>
      <h3>Cities</h3>
      <ul>
        <li onClick={() => handleFilterCities('all cities')}>All Cities</li> 
        {
        cities?.map( city => (
          <li onClick={() => handleFilterCities(city.id)} key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FilterCities
