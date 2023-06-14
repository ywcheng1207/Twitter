import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import Button from 'component/element/element_basic/Button/Button'
import styles from './LoginPage.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { useState } from 'react'
import { login } from 'api/auth'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = () => {
  const [loginStatus, setLoginStatus] = useState('')
  const [wrongMessage, setWrongMessage] = useState('')
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    const { success, token, id, avatar } = await login({ account, password })
    if (success) {
      localStorage.setItem('authToken', token)
      localStorage.setItem('id', id)
      localStorage.setItem('avatar', avatar)
      console.log('登入成功')
      navigate('/user/home/main')
      console.log(token)
    }
    const { message, status } = await login({ account, password })
    setLoginStatus(status)
    setWrongMessage(message)
  }

  return (
        <div className={styles.registerContainer}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.title}>
            <h3 className='Bold'>
             登入 Alphitter
            </h3>
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'帳號'}
              placeholder={'請輸入帳號'}
              value={account}
              onChange={(value) => {
                setAccount(value)
              }}
            />
            {loginStatus === 'error' &&
              <span className={styles.wrong}>{wrongMessage}</span>
            }
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'密碼'}
              placeholder={'請輸入密碼'}
              value={password}
              type={'password'}
              onChange={(value) => {
                setPassword(value)
              }}
            />
          </div>

          <div className={styles.buttonContainer} onClick={handleClick}>
            <Button type={'fullPill'} value={'登入'} />
          </div>
          <div className={styles.notice}>
            <Link to='/register'>
              <p className={styles.register}>註冊</p>
            </Link>
            <p>．</p>
            <Link to='/admin'>
              <p className={styles.backend}>後台登入</p>
            </Link>
          </div>

        </div>
  )
}

export default LoginPage
