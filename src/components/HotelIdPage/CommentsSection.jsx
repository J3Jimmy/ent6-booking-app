import { useEffect } from "react";
import useCrud from "../../hooks/useCrud";

const CommentsSection = ({ hotelId }) => {
  const [reviews, getReviews] = useCrud();

  useEffect(() => {
    if (hotelId) {
      getReviews(`/reviews?hotelId=${hotelId}`);
    }
  }, [hotelId]);

  console.log(reviews);

  return (
    <div>
      
      <div>
        {
          reviews?.map(reviewInfo => (
            <div key={reviewInfo.id}>
              <div>{reviewInfo.rating}⭐</div>
              <div>{reviewInfo.createdAt}</div>
            <p>{reviewInfo.comment}</p>
            </div>
            ))
        }
      </div>
    </div>
  );
};

export default CommentsSection;
