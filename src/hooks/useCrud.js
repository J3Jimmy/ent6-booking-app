import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import axios from "axios"


const useCrud = () => {
  
const [response, setResponse] = useState()

const baseUrl = `https://hotels-api.academlo.tech`

//Get
const getApi = (path) => {
  const url = `${baseUrl}${path}`
  axios.get(url, getConfigToken())
  .then(res => setResponse(res.data))
  .catch(err => console.log(err))
}

//Post
const postApi = (path, data) => {
  const url = `${baseUrl}${path}`
  axios.post(url, data, getConfigToken())
.then(res => setResponse(res.data))
.catch(err => console.log(err))
}

//Delete
const deleteApi = (path, id) => {
  const url = `${baseUrl}${path}/${id}`
  axios.delete(url, getConfigToken())
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
}

//Update
const updateApi = (path, id, data) => {
  const url = `${baseUrl}${path}/${id}`;
  axios.patch(url, data, getConfigToken())  
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}


return [response, getApi, postApi, deleteApi, updateApi]
}

export default useCrud
