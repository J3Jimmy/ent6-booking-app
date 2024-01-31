const getConfigToken = () => {
  return {
    headers: {
      Autorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

export default getConfigToken