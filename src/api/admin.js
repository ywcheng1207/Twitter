import axios from 'axios'

// const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api/admin/'
const baseURL = 'https://tschiang23.alwaysdata.net/api'
export const deleteTweet = async (id, authToken) => {
  try {
    const { data } = await axios.delete(`${baseURL}/admin/tweets/${id}`, {
      headers: { Authorization: 'Bearer ' + authToken }
    })
    return data
  } catch (error) {
    console.error('[deleteTweet failed]', error)
  }
}

export const getUsers = async (authToken) => {
  try {
    const { data } = await axios.get(`${baseURL}/admin/users`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[GET USERS FAILED]', error)
  }
}
