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
export const getUserReplyTweets = async (authToken, id) => {
  try {
    const res = await axios.get(`${baseURL}/users/${id}/replied_tweets `, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get Tweets failed]', error)
  }
}
// -- 個人資料頁底下的喜歡串
export const getUserLikeTweets = async (authToken, id) => {
  try {
    const res = await axios.get(`${baseURL}/users/${id}/likes `, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get Tweets failed]', error)
  }
}

// -- 設定頁取得使用者 帳號 密碼 Email
export const getAccountInfo = async (authToken, id) => {
  try {
    const { data } = await axios.get(`${baseURL}/users/${id}`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[getAccountInfo failed]', error)
  }
}

// -- 設定頁 post 更改使用者帳號資料
export const putAccountInfo = async (payload, id, authToken) => {
  try {
    const { account, name, email, password, checkPassword } = payload
    const res = await axios.post(`${baseURL}/users${id}`, { headers: { Authorization: 'Bearer ' + authToken } }, {
      account,
      name,
      email,
      password,
      checkPassword
    })
    return res.data
  } catch (error) {
    console.error('[postAccountInfo failed]', error)
  }
}
