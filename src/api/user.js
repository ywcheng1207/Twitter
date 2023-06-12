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

// export const createTweets = async (payload) => {
//   const { description } = payload
//   try {
//     const res = await axios.post(`${baseURL}/tweets`, { description })
//     return res.data
//   } catch (error) {
//     console.error('[Create Tweets failed]: ', error)
//   }
// }

// -- 個人資料頁底下的推文串
export const getUserTweets = async (authToken, id) => {
  try {
    const res = await axios.get(`${baseURL}/users/${id}/tweets `, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get Tweets failed]', error)
  }
}
// -- 個人資料頁底下的回覆串

// -- 個人資料頁底下的喜歡串
