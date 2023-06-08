import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import Button from 'component/element/element_basic/Button/Button'
import styles from './AdminLoginPage.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminLogin } from 'api/auth'

const AdminLoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    const { success, token } = await adminLogin({ account, password })
    if (success) {
      console.log('登入成功')
      console.log(token)
      navigate('/admin_main')
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
             後台登入
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
            <a href="" className={styles.register}>前台登入</a>
          </div>

        </div>
  )
}

export default AdminLoginPage
