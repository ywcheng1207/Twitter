import styles from './InfoSetting.module.scss'
import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import { useState, useEffect } from 'react'
import Button from 'component/element/element_basic/Button/Button'
import { getAccountInfo, putAccountInfo } from 'api/user'

const InfoSetting = () => {
  const { container, inputContainer, btnContainer, btn } = styles

  const [userInfo, setUserInfo] = useState('')
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
    try {
      const authToken = localStorage.getItem('authToken')
      const id = localStorage.getItem('id')
      await putAccountInfo(id, authToken, userInfo)
      console.log('儲存成功')
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
        console.log('成功取得使用者資料')
        setUserInfo(data)
      } catch (error) {
        console.error(error)
      }
    }
    getAccountInfoAsync()
  }, [])

  return (
    <div className={container}>
      <header>
        <h4 className='Bold'>帳戶設定</h4>
      </header>
      <main>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'帳號'}
            value={userInfo.account}
            onChange={handleAccountChange}
          />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'名稱'}
            value={userInfo.name}
            onChange={handleNameChange}
          />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'Email'}
            value={userInfo.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼'}
              type={'password'}
              placeholder={'請設定密碼'}
              value={''}
              onChange={handlePasswordChange}
            />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼再確認'}
              type={'password'}
              placeholder={'請再次輸入密碼'}
              value={''}
              onChange={handlePasswordCheckChange}
            />
        </div>
        <div className={btnContainer} onSave={handleSave}>
          <div className={btn}>
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
