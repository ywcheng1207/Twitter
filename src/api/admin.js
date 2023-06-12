import axios from 'axios'

const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api/admin/'

export const deleteTweet = async (id, authToken) => {
  try {
    const { data } = await axios.delete(`${baseURL}/tweets/${id}`, {
      headers: { Authorization: 'Bearer ' + authToken }
    })
    return data
  } catch (error) {
    console.error('[DELETE TWEET FAILED]', error)
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
