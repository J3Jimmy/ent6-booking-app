import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"

const FormReviews = ( { reserveSelected, setReserveSelected } ) => {

  const { handleSubmit, register, reset }  = useForm()

  const [ ,,createReview ] = useCrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId: reserveSelected?.hotelId,
      rating: +data.rating
    }
    createReview('/reviews', obj)
    reset(
      {
        name: "5",
        comment:'',
      }
    )
    setReserveSelected()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Form Reviews</h3>
        <label>
          <span>Rating</span>
          <select {...register('rating')}>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register('comment')} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormReviews
