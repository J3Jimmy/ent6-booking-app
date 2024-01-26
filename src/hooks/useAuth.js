import axios from "axios"

const useAuth = () => {

  const createNewUser = data =>  {
    const url = 'https://hotels-api.academlo.tech/users'
    axios.post(url, data )
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  const loginUser = (data) => {
    const url = 'https://hotels-api.academlo.tech/login'
    axios.post(url, data)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  }

  return { createNewUser, loginUser }

}

export default useAuth