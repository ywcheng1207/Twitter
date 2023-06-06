import axios from 'axios'

const baseURL = 'https://rocky-reef-54442.herokuapp.com/api'

export const register = async ({ account, name, email, password, checkPassword }) => {
  try {
    const { data } = await axios.post(`${baseURL}/users`, { account, name, email, password, checkPassword })
    const { status } = data
    if (status === 'success') {
      return { success: true, ...data }
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
    if (status === 'success') {
      return { success: true, token, ...data }
    }
    return data
  } catch (error) {
    console.error('[login failed]', error)
  }
}
