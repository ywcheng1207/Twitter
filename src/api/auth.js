import axios from 'axios'

// const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api'
const baseURL = 'https://tschiang23.alwaysdata.net/api'
export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, { account, name, email, password, checkPassword })
    const { status } = data
    if (status === 'success') {
      return { success: true, ...data }
    }
    return data
  } catch (error) {
    console.error(error)
    if (error.response) {
      return (error.response.data)
    }
  }
}

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseURL}/users/signin`, { account, password })
    const { status } = data
    const token = data.data.token
    const id = data.data.user.id
    const avatar = data.data.user.avatar
    if (status === 'success') {
      return { success: true, token, id, avatar, ...data }
    }
    return data
  } catch (error) {
    if (error.response) {
      console.error(error)
      return (error.response.data)
    }
  }
}

export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseURL}/admin/login`, { account, password })
    const { status } = data
    const token = data.data.token
    if (status === 'success') {
      return { success: true, token, ...data }
    }
    return data
  } catch (error) {
    console.error(error)
    if (error.response) {
      return (error.response.data)
    }
  }
}
