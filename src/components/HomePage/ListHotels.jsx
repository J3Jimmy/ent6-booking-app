import HotelCard from "./HotelCard"


const ListHotels = ({hotels}) => {
  return (
    <div>
      {
        hotels?.results.map(hotel => (
          <HotelCard
          key={hotel.id}
          hotel={hotel}
           />
        ))
      }
    </div>
  )
}

export default ListHotels
