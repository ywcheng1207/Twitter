import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import Button from 'component/element/element_basic/Button/Button'
import styles from './LoginPage.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { useState } from 'react'
import { login } from '../../api/auth'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    const { success, token } = await login({ account, password })
    if (success) {
      localStorage.setItem('authToken', token)
      console.log('登入成功')
      navigate('/user/home/main')
      console.log(token)
    } else {
      console.log('登入失敗')
    }
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
              <a href="" className={styles.register}>註冊</a>
            </Link>
            <p>．</p>
            <Link to='/admin'>
              <a href="" className={styles.backend}>後台登入</a>
            </Link>
          </div>

        </div>
  )
}

export default LoginPage
