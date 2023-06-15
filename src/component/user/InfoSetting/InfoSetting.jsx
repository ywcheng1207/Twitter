import styles from './InfoSetting.module.scss'
import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import { useState, useEffect } from 'react'
import Button from 'component/element/element_basic/Button/Button'
import { getAccountInfo, patchAccountInfo } from 'api/user'

const PasswordCount = ({ userInfo }) => {
  if (typeof userInfo.password !== 'undefined') {
    return <span>{userInfo.password.length}/20</span>
  }
}

const InfoSetting = () => {
  const { container, inputContainer, btnContainer, btn } = styles
  const [userInfo, setUserInfo] = useState({
    account: '',
    name: '',
    email: '',
    password: '',
    checkPassword: ''
  })
  const [error, setError] = useState({
    account: false,
    name: false,
    email: false,
    password: false,
    checkPassword: false
  })

  const handleAccountChange = (value) => {
    setUserInfo({
      ...userInfo,
      account: value
    })
  }
  const handleNameChange = (value) => {
    setUserInfo({
      ...userInfo,
      name: value
    })
  }
  const handleEmailChange = (value) => {
    setUserInfo({
      ...userInfo,
      email: value
    })
  }
  const handlePasswordChange = (value) => {
    setUserInfo({
      ...userInfo,
      password: value
    })
  }
  const handlePasswordCheckChange = (value) => {
    setUserInfo({
      ...userInfo,
      checkPassword: value
    })
  }

  const handleSave = async () => {
    const authToken = localStorage.getItem('authToken')
    const id = localStorage.getItem('id')
    try {
      const data = await patchAccountInfo(authToken, id, userInfo)
      // console.log(data.message)

      if (data.status === 'success') {
        alert('修改完成')
        setUserInfo(() => (
          {
            ...userInfo,
            password: '',
            checkPassword: ''
          }
        ))
        location.reload(true)
      } else {
        const updatedErrors = { ...error }
        data.message.forEach((errorMessage) => {
          updatedErrors[errorMessage.path] = {
            error: true,
            message: errorMessage.msg
          }
        })

        setError(updatedErrors)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getAccountInfoAsync = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        const id = localStorage.getItem('id')
        const data = await getAccountInfo(authToken, id)
        const { account, name, email, password, checkPassword } = data
        console.log('成功取得使用者資料')
        setUserInfo({
          account,
          name,
          email,
          password,
          checkPassword
        })
      } catch (error) {
        console.error(error)
      }
    }
    getAccountInfoAsync()
  }, [])

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
    <div className={container}>
      <header>
        <h4 className='Bold'>帳戶設定</h4>
      </header>
      <main>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'帳號'}
            defaultValue={userInfo.account}
            onChange={handleAccountChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            inputName='account'
            status={error.account ? 'error' : ''}
          />
          <div className={styles.messageContainer}>
              {error.account.error &&
                <span className={styles.error}>{error.account.message}</span>
              }
              {activeStates.account &&
                <span className={styles.typeCount}>
                  {userInfo.account.length}/20
              </span>}
          </div>
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'名稱'}
            defaultValue={userInfo.name}
            onChange={handleNameChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            inputName='name'
            status={error.name ? 'error' : ''}
          />
          <div className={styles.messageContainer}>
            {error.name.error &&
               <span className={styles.error}>{error.name.message}</span>
            }
            {activeStates.name &&
              <span className={styles.typeCount}>
                  {userInfo.name.length}/50
              </span>}
          </div>
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'Email'}
            defaultValue={userInfo.email}
            onChange={handleEmailChange}
            status={error.email ? 'error' : ''}
          />
          <div className={styles.messageContainer}>
            {error.email.error &&
               <span className={styles.error}>{error.email.message}</span>
            }
          </div>
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼'}
              type={'password'}
              placeholder={'請設定密碼'}
              defaultValue={userInfo.password}
              onChange={handlePasswordChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              inputName='password'
              status={error.password ? 'error' : ''}
            />
            <div className={styles.messageContainer}>
              {error.password.error &&
                <span className={styles.error}>{error.password.message}</span>
              }
              {activeStates.password &&
                <span className={styles.typeCount}>
                  <PasswordCount userInfo={userInfo} />
                </span>}
            </div>
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼再確認'}
              type={'password'}
              placeholder={'請再次輸入密碼'}
              defaultValue={userInfo.checkPassword}
              onChange={handlePasswordCheckChange}
              status={error.checkPassword ? 'error' : ''}
            />
        </div>
        <div className={btnContainer}>
          <div className={btn} onClick={handleSave}>
            <Button
              type={'fullPill'}
              value={'儲存'}
            />
          </div>
        </div>
      </main>

    </div>
  )
}

export default InfoSetting
