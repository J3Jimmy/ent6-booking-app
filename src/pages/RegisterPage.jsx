import { useForm } from "react-hook-form"
import './styles/RegisterPage.css'
import useAuth from "../hooks/useAuth"

const RegisterPage = () => {

  const { handleSubmit,reset, register } = useForm()

  const { createNewUser } =  useAuth()
  
  const submit = data => {
    createNewUser(data)
    reset ({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })
  }

  return (
    <div className="register__container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submit)} className="form__register">
        <label>
          <span>First Name</span>
          <input {...register('firstName')} type="text" className="input__register"/>
        </label>
        <label>
          <span>Last Name</span>
          <input {...register('lastName')} type="text" className="input__register"/>
        </label>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" className="input__register"/>
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" className="input__register"/>
        </label>
        <label>
          <span>Gender</span>
          <select {...register('gender')} className="select__register">
            <option value="other">Prefer not say</option>
            <option value="female">Female</option>
            <option value="male">Male </option>
           </select>
          </label>
          <button className="button__register">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage
