import axios from 'axios'

// const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api'
const baseURL = 'https://rocky-reef-54442.herokuapp.com/api'

export const getTweets = async (authToken) => {
  try {
    const res = await axios.get(`${baseURL}/tweets`, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get Tweets failed]', error)
  }
}

export const userAddTweets = async (payload) => {
  const { description } = payload
  const authToken = localStorage.getItem('authToken')
  try {
    const res = await axios.post(`${baseURL}/tweets`, { description }, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Create Tweets failed]: ', error)
  }
}

export const userLikeTweet = async ({ authToken, TweetId }) => {
  try {
    const res = await axios.post(`${baseURL}/tweets/${TweetId}/like/`, null, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[LikeTweet failed]: ', error)
  }
}

export const userUnLikeTweet = async ({ authToken, TweetId }) => {
  try {
    const res = await axios.post(`${baseURL}/tweets/${TweetId}/unlike`, null, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[UnLikeTweet failed]: ', error)
  }
}

// -- 個人資料頁底下的推文串
export const getUserTweets = async (authToken, id) => {
  try {
    const res = await axios.get(`${baseURL}/users/${id}/tweets `, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get UserTweets failed]', error)
  }
}

// -- 個人資料頁底下的回覆串
export const getUserReplyTweets = async (authToken, id) => {
  try {
    const res = await axios.get(`${baseURL}/users/${id}/replied_tweets `, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get UserReplyTweets failed]', error)
  }
}

// -- 個人資料頁底下的喜歡串
export const getUserLikeTweets = async (authToken, id) => {
  try {
    const res = await axios.get(`${baseURL}/users/${id}/likes `, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[Get UserLikeTweets failed]', error)
  }
}

// -- 設定頁 post 更改使用者帳號資料
export const putAccountInfo = async (authToken, id, userInfo) => {
  try {
    const { account, name, email, password, checkPassword } = userInfo
    const res = await axios.post(`${baseURL}/users/${id}`, {
      account,
      name,
      email,
      password,
      checkPassword
    }, { headers: { Authorization: 'Bearer ' + authToken } })
    return res.data
  } catch (error) {
    console.error('[postAccountInfo failed]', error)
  }
}

// -- 許多頁取得使用者資料
export const getAccountInfo = async (authToken, id) => {
  try {
    const { data } = await axios.get(`${baseURL}/users/${id}`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[getAccountInfo failed]', error)
  }
}

// -- 取得ReplyList頁面的回覆串
export const getSingleTweet = async ({ authToken, TweetId }) => {
  try {
    const { data } = await axios.get(`${baseURL}/tweets/${TweetId}/replies`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[getAccountInfo failed]', error)
  }
}

export const getSingleTweetInfo = async ({ authToken, TweetId }) => {
  try {
    const { data } = await axios.get(`${baseURL}/tweets/${TweetId}`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[getAccountInfo failed]', error)
  }
}

// -- Other頁面取得 Other 資料

// // -- Other 頁底下的推文串
// export const getOtherTweets = async (authToken, id) => {
//   try {
//     const res = await axios.get(`${baseURL}/users/${id}/tweets `, { headers: { Authorization: 'Bearer ' + authToken } })
//     return res.data
//   } catch (error) {
//     console.error('[Get OtherTweets failed]', error)
//   }
// }
// // -- Other 頁底下的回覆串
// export const getOtherReplyTweets = async (authToken, id) => {
//   try {
//     const res = await axios.get(`${baseURL}/users/${id}/replied_tweets `, { headers: { Authorization: 'Bearer ' + authToken } })
//     return res.data
//   } catch (error) {
//     console.error('[Get OtherTweets failed]', error)
//   }
// }
// // -- Other 頁底下的喜歡串
// export const getOtherLikeTweets = async (authToken, id) => {
//   try {
//     const res = await axios.get(`${baseURL}/users/${id}/likes `, { headers: { Authorization: 'Bearer ' + authToken } })
//     return res.data
//   } catch (error) {
//     console.error('[Get OtherTweets failed]', error)
//   }
// }
