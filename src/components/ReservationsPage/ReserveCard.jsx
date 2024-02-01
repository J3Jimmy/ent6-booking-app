import useCrud from "../../hooks/useCrud";
import getDaysFromDates from "../../services/getDaysFromDates";

const ReserveCard = ({ reserve, deleteReservation, setReserveSelected }) => {
  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut);

  const handleDelete = () => {
    deleteReservation("/bookings", reserve.id);
  };

  const handleReviews = () => {
    setReserveSelected(reserve)
  }

  return (
    <div>
      <header>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
        <div>
          <div onClick={handleReviews} className="reserve__rating">Rate and comment this visit...</div>
          <span>Reservations Days:</span> <span>{reservationsDays}</span>
        </div>
        <div>
          <span>subtotal price:</span>{" "}
          <span>{Number(reserve.hotel.price) + reservationsDays}</span>
        </div>
      </section>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ReserveCard;
