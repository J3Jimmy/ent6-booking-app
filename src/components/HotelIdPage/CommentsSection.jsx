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
      <div>comments sections</div>
      <div>
        {
          reviews?.map(reviewInfo => (
            <p key={reviewInfo.id}>{reviewInfo.comment}</p>
            ))
        }
      </div>
    </div>
  );
};

export default CommentsSection;
