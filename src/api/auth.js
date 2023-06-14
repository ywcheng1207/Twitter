import axios from 'axios'

// const baseURL = 'https://arcane-mesa-58606.herokuapp.com/api'
const baseURL = 'https://rocky-reef-54442.herokuapp.com/api'

export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, { account, name, email, password, checkPassword })
    const { status } = data
    if (status === 'success') {
      return { success: true, ...data }
    } else if (status === 'error') {
      const { message } = data
      return { success: false, message, ...data }
    }
    return data
  } catch (error) {
    console.error('[register failed]', error)
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
    console.error('[adminLogin failed]', error)
  }
}
