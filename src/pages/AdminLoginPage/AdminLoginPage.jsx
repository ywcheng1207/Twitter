import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import Button from 'component/element/element_basic/Button/Button'
import styles from './AdminLoginPage.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { adminLogin } from 'api/auth'

const AdminLoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState({
    account: false,
    password: false
  })

  const resetError = (inputName) => {
    setError({ ...error, [inputName]: false })
  }

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    const { success, token } = await adminLogin({ account, password })
    if (success) {
      console.log('登入成功')
      localStorage.setItem('authToken', token)
      navigate('/admin/main')
    } else {
      console.log('wrong')
      const { message } = await adminLogin({ account, password })
      const updatedErrors = { ...error }
      message.forEach((errorMessage) => {
        updatedErrors[errorMessage.path] = {
          error: true,
          message: errorMessage.msg
        }
      })
      setError(updatedErrors)
      console.log(error)
    }
  }
  const handleKeyDown = async (e) => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    if (e.key === 'Enter') {
      const { success, token } = await adminLogin({ account, password })
      if (success) {
        console.log('登入成功')
        console.log(token)
        navigate('/admin/main')
      } else {
        console.log('wrong')
        const { message } = await adminLogin({ account, password })
        const updatedErrors = { ...error }
        message.forEach((errorMessage) => {
          updatedErrors[errorMessage.path] = {
            error: true,
            message: errorMessage.msg
          }
        })
        setError(updatedErrors)
        console.log(error)
      }
    }
  }

  return (
        <div className={styles.registerContainer} onKeyDown={handleKeyDown} >
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.title}>
            <h3 className='Bold'>
             後台登入
            </h3>
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'帳號'}
              placeholder={'請輸入帳號'}
              value={account}
              wordLimit={10}
              inputName='account'
              onChange={(value, inputName) => {
                resetError(inputName)
                setAccount(value)
              }}
              status={error.account ? 'error' : ''}
            />
             <div className={styles.messageContainer}>
              {error.account.error &&
                  <span className={styles.error}>{error.account.message}</span>
                }
            </div>
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'密碼'}
              placeholder={'請輸入密碼'}
              value={password}
              type={'password'}
              wordLimit={10}
              inputName='password'
              onChange={(value, inputName) => {
                resetError(inputName)
                setPassword(value)
              }}
              status={error.password ? 'error' : ''}
            />
            <div className={styles.messageContainer}>
              {error.password.error &&
                  <span className={styles.error}>{error.password.message}</span>
                }
              </div>
          </div>

          <div className={styles.buttonContainer} onClick={handleClick} >
            <Button type={'fullPill'} value={'登入'} />
          </div>
          <div className={styles.notice}>
          <Link to="/login" className={styles.notice}>前台登入</Link>
          </div>

        </div>
  )
}

export default AdminLoginPage
