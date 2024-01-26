import { useForm } from "react-hook-form"


const LoginPage = () => {

  const { handleSubmit, reset, register } =  useForm()

  const submit = data => {

    reset({
      email: '',
      password: ''
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Email</span>
          <input {...register('email')} type="email" />
        </label>
        <label>
          <span>Password</span>
          <input {...register('password')} type="password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage
