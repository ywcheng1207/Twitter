import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import Button from 'component/element/element_basic/Button/Button'
import styles from './SignUpPage.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { useState } from 'react'
import { register } from 'api/auth'

const SignUpPage = () => {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const handleClick = async () => {
    if (account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || checkPassword.length === 0) {
      return
    }
    const { success } = await register({ account, name, email, password, checkPassword })
    if (success) {
      console.log('註冊成功')
    } else {
      console.log('註冊失敗')
    }
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
              onChange={(value) => {
                setAccount(value)
              }}
            />
            {account.length > 10 &&
              <div className={styles.errorMessage}>
                    字數超出上限！
              </div>
            }
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'名稱'}
              placeholder={'請輸入使用者名稱'}
              value={name}
              wordLimit={50}
              onChange={(value) => {
                setName(value)
              }}
            />
            {name.length > 50 &&
              <div className={styles.errorMessage}>
                    字數超出上限！
              </div>
            }
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'Email'}
              placeholder={'請輸入 Email'}
              value={email}
              onChange={(value) => {
                setEmail(value)
              }}
            />
            {email.length > 10 &&
              <div className={styles.errorMessage}>
                    字數超出上限！
              </div>
            }
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'密碼'}
              placeholder={'請設定密碼'}
              type={'password'}
              value={password}
              onChange={(value) => {
                setPassword(value)
              }}
            />
            {password.length > 10 &&
              <div className={styles.errorMessage}>
                    字數超出上限！
              </div>
            }
          </div>
          <div className={styles.inputContainer}>
            <DefaultInputItem
              label={'密碼確認'}
              placeholder={'請再次輸入密碼'}
              type={'password'}
              value={checkPassword}
              onChange={(value) => {
                setCheckPassword(value)
              }}
            />
            {checkPassword.length > 10 &&
              <div className={styles.errorMessage}>
                    字數超出上限！
              </div>
            }
          </div>
          <div className={styles.buttonContainer} onClick={handleClick}>
            <Button type={'fullPill'} value={'註冊'} />
          </div>
          <a href="" className={styles.cancel}>取消</a>
        </div>
  )
}

export default SignUpPage
