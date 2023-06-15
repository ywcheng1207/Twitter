import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import Button from 'component/element/element_basic/Button/Button'
import styles from './SignUpPage.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { useState } from 'react'
import { register } from 'api/auth'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState({
    account: false,
    name: false,
    email: false,
    password: false,
    checkPassword: false
  })
  const handleClick = async () => {
    if (account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || checkPassword.length === 0) {
      return
    }
    const { success } = await register({ account, name, email, password, checkPassword })
    if (success) {
      console.log('註冊成功')
      navigate('/login')
    } else {
      const { message } = await register({ account, name, email, password, checkPassword })
      console.log(message)
      const updatedErrors = { ...error }
      message.forEach((errorMessage) => {
        updatedErrors[errorMessage.path] = {
          error: true,
          message: errorMessage.msg
        }
      })
      setError(updatedErrors)
    }
  }
  const [activeStates, setActiveStates] = useState({
    account: false,
    name: false,
    password: false,
    checkPassword: false
  })
  const handleFocus = (inputName) => {
    setActiveStates({ ...activeStates, [inputName]: true })
  }

  const handleBlur = (inputName) => {
    setActiveStates({ ...activeStates, [inputName]: false })
  }
  return (
        <div className={styles.registerContainer}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <div className={styles.title}>
            <h3 className='Bold'>
             建立你的帳號
            </h3>
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'帳號'}
              placeholder={'請輸入帳號'}
              value={account}
              onChange={(value) => setAccount(value)}
              status={error.account ? 'error' : ''}
              onFocus={handleFocus}
              onBlur={handleBlur}
              inputName='account'
            />
          </div>
          <div className={styles.messageContainer}>
              {error.account.error &&
                <span className={styles.error}>{error.account.message}</span>
              }
              {activeStates.account &&
                <span className={styles.typeCount}>
                  {account.length}/20
              </span>}
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'名稱'}
              placeholder={'請輸入使用者名稱'}
              value={name}
              onChange={(value) => setName(value)}
              status={error.name ? 'error' : ''}
              onFocus={handleFocus}
              onBlur={handleBlur}
              inputName='name'
            />
            <div className={styles.messageContainer}>
              {error.name.error &&
                <span className={styles.error}>{error.name.message}</span>
              }
              {activeStates.name &&
                <span className={styles.typeCount}>
                  {name.length}/50
                </span>}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'Email'}
              placeholder={'請輸入 Email'}
              value={email}
              onChange={(value) => setEmail(value)}
              status={error.email ? 'error' : ''}
            />
            {error.email.error &&
            <span className={styles.error}>{error.email.message}</span>
            }
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'密碼'}
              placeholder={'請設定密碼'}
              type={'password'}
              value={password}
              onChange={(value) => setPassword(value)}
              status={error.password ? 'error' : ''}
              onFocus={handleFocus}
              onBlur={handleBlur}
              inputName='password'
            />
            <div className={styles.messageContainer}>
              {error.password.error &&
                <span className={styles.error}>{error.password.message}</span>
              }
              {activeStates.password &&
                <span className={styles.typeCount}>
                  {password.length}/20
                </span>}
            </div>
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'密碼確認'}
              placeholder={'請再次輸入密碼'}
              type={'password'}
              value={checkPassword}
              wordLimit={10}
              onChange={(value) => setCheckPassword(value)}
              status={error.checkPassword ? 'error' : ''}
              onFocus={handleFocus}
              onBlur={handleBlur}
              inputName='checkPassword'
            />
            <div className={styles.messageContainer}>
              {error.checkPassword.error &&
                <span className={styles.error}>{error.checkPassword.message}</span>
              }
              {activeStates.checkPassword &&
                <span className={styles.typeCount}>
                  {checkPassword.length}/20
              </span>}
            </div>
          </div>
          <div className={styles.buttonContainer} onClick={handleClick}>
            <Button type={'fullPill'} value={'註冊'} />
          </div>
          <Link to='/login' className={styles.cancel}>
            <span className={styles.cancel}>取消</span>
          </Link>

      </div>

  )
}

export default SignUpPage
