import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps"
import OtherHotels from "../components/HotelIdPage/OtherHotels";
import ReservationsHotel from "../components/HotelIdPage/ReservationsHotel";
import SlidersImgs from "../components/HotelIdPage/SlidersImgs";
import CommentsSection from "../components/HotelIdPage/CommentsSection";

const HotelIdPage = () => {
  const { id } = useParams();

  const url = `https://hotels-api.academlo.tech/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [url]);


  return (
    <div>
      <header>
        <h2>{hotel?.name}</h2>
      </header>
      <SlidersImgs hotel={hotel} />
      <div>
        {
      hotel && (
      <Map defaultCenter={[ Number(hotel.lat), +hotel.lon]} height={300} zoom={16} >
          <Marker
           width={50}
           color="aquamarine"
           anchor={[Number(hotel.lat), +hotel.lon]}
           />
           <ZoomControl />
      </Map>
          )
        }
      </div>
      <div>
        <div>
          <span>{hotel?.city.name}</span>
          <span>{hotel?.city.country}</span>
        </div>
        <div>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </div>
        <p>{hotel?.description}</p>
      </div>
      <CommentsSection 
      hotelId={hotel?.id}
      />
      <ReservationsHotel 
        hotelId={hotel?.id}
        />
      <OtherHotels 
      cityId={hotel?.city.id}
        hotelId={hotel?.id}
      />
    </div>
  );
};

export default HotelIdPage;
