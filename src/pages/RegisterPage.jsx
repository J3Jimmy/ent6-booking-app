import { useForm } from "react-hook-form"
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const { handleSubmit,reset, register } = useForm()
  
  const submit = data => {

  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>First Name</span>
          <input {...register('firstName')} type="text" />
        </label>
        <label>
          <span>Last Name</span>
          <input {...register('lastName')} type="text" />
        </label>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <label>
          <span>Gender</span>
          <select {...register('gender')}>
            <option value="other">Prefer not say</option>
            <option value="female">Female</option>
            <option value="male">Male </option>
           </select>
          </label>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
