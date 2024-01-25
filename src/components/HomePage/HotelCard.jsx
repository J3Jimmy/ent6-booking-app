import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ( {hotel} ) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/hotel/${hotel.id}`)
  }

  return (
    <article>
      <header>
        <img src={hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{hotel.name}</h3>
        <span>rating</span>
        <p>{hotel.city.name}, {hotel.city.country}</p>
        <div>{hotel.price}</div>
      </section>
      <button onClick={handleNavigate}>See More...</button>
    </article>
    
  )
}

export default HotelCard
