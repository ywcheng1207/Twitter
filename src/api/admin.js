import axios from 'axios'

// const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api/admin/'
const baseURL = 'https://rocky-reef-54442.herokuapp.com/api/admin'

export const deleteTweet = async (id, authToken) => {
  try {
    const { data } = await axios.delete(`${baseURL}/tweets/${id}`, {
      headers: { Authorization: 'Bearer ' + authToken }
    })
    return data
  } catch (error) {
    console.error('[deleteTweet failed]', error)
  }
}

export const getUsers = async (authToken) => {
  try {
    const { data } = await axios.get(`${baseURL}/users`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[GET USERS FAILED]', error)
  }
}
