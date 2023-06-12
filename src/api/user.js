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

// -- 設定頁取得使用者 帳號 密碼 Email
export const getAccountInfo = async (authToken) => {
  const id = localStorage.getItem('id')
  try {
    const { data } = await axios.get(`${baseURL}/users/${id}`, { headers: { Authorization: 'Bearer ' + authToken } })
    return data
  } catch (error) {
    console.error('[getAccountInfo failed]', error)
  }
}
