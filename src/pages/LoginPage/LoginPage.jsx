// -- import
// API
import { login } from 'api/auth'
// 元件
import Button from 'component/element/element_basic/Button/Button'
import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
// 樣式/套件
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './LoginPage.module.scss'
// 圖片
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import checkIcon from 'assets/icons/notiCheck.svg'
import errorIcon from 'assets/icons/notiError.svg'

// -- 元件
const LoginPage = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState({
    account: false,
    password: false
  })

  const resetError = inputName => {
    setError({ ...error, [inputName]: false })
  }

  const handleKeyDown = async e => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    if (e.key === 'Enter') {
      const data = await login({ account, password })
      if (data.success) {
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('id', data.id)
        localStorage.setItem('avatar', data.avatar)
        navigate('/user/home/main')

        Swal.fire({
          position: 'top',
          timer: 1000,
          title: `
          <div "${styles.customSwal}">
            <div class="${styles.text}">登入成功！</div>
            <div class="${styles.successIconContainer}">
              <img src="${checkIcon}" class="${styles.icon}" alt="Success" />
            </div>
          </div>
        `,
          showConfirmButton: false,
          customClass: {
            popup: styles.customSwal
          }
        })
      } else {
        const updatedErrors = { ...error }
        data.message.forEach(errorMessage => {
          updatedErrors[errorMessage.path] = {
            error: true,
            message: errorMessage.msg
          }
        })
        setError(updatedErrors)

        Swal.fire({
          position: 'top',
          timer: 1000,
          title: `
          <div "${styles.customSwal}">
            <div class="${styles.text}">登入失敗！</div>
            <div class="${styles.errorIconContainer}">
              <img src="${errorIcon}" class="${styles.icon}" alt="Success" />
            </div>
          </div>
        `,
          showConfirmButton: false,
          customClass: {
            popup: styles.customSwal
          }
        })
      }
    }
  }

  const handleClick = async () => {
    if (account.length === 0 || password.length === 0) {
      return
    }
    const data = await login({ account, password })
    if (data.success) {
      localStorage.setItem('authToken', data.token)
      localStorage.setItem('id', data.id)
      localStorage.setItem('avatar', data.avatar)
      navigate('/user/home/main')

      Swal.fire({
        position: 'top',
        timer: 1000,
        title: `
          <div "${styles.customSwal}">
            <div class="${styles.text}">登入成功！</div>
            <div class="${styles.successIconContainer}">
              <img src="${checkIcon}" class="${styles.icon}" alt="Success" />
            </div>
          </div>
        `,
        showConfirmButton: false,
        customClass: {
          popup: styles.customSwal
        }
      })
    } else {
      const updatedErrors = { ...error }
      data.message.forEach(errorMessage => {
        updatedErrors[errorMessage.path] = {
          error: true,
          message: errorMessage.msg
        }
      })
      setError(updatedErrors)

      Swal.fire({
        position: 'top',
        timer: 1000,
        title: `
          <div "${styles.customSwal}">
            <div class="${styles.text}">登入失敗！</div>
            <div class="${styles.errorIconContainer}">
              <img src="${errorIcon}" class="${styles.icon}" alt="Success" />
            </div>
          </div>
        `,
        showConfirmButton: false,
        customClass: {
          popup: styles.customSwal
        }
      })
    }
  }

  return (
    <div className={styles.registerContainer} onKeyDown={handleKeyDown}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.title}>
        <h3 className='Bold'>登入 Alphitter</h3>
      </div>
      <div className={styles.inputContainer}>
        <DefaultInputItem
          label={'帳號'}
          placeholder={'請輸入帳號'}
          value={account}
          inputName={'account'}
          onChange={(value, inputName) => {
            resetError(inputName)
            setAccount(value)
          }}
          status={error.account ? 'error' : ''}
        />
        <div className={styles.messageContainer}>
          {error.account.error && (
            <span className={styles.error}>{error.account.message}</span>
          )}
        </div>
      </div>
      <div className={styles.inputContainer}>
        <DefaultInputItem
          label={'密碼'}
          placeholder={'請輸入密碼'}
          value={password}
          type={'password'}
          inputName={'password'}
          onChange={(value, inputName) => {
            resetError(inputName)
            setPassword(value)
          }}
          status={error.password ? 'error' : ''}
        />
        <div className={styles.messageContainer}>
          {error.password.error && (
            <span className={styles.error}>{error.password.message}</span>
          )}
        </div>
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
