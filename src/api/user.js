import axios from 'axios'

const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api'

export const getTweets = async (authToken) => {
  try {
    const res = await axios.get(`${baseURL}/tweets`, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get Tweets failed]', error)
  }
}

export const createTweets = async (payload) => {
  const { description } = payload
  try {
    const res = await axios.post(`${baseURL}/tweets`, { description })
    return res.data
  } catch (error) {
    console.error('[Create Tweets failed]: ', error)
  }
}