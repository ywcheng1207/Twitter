import styles from './InfoSetting.module.scss'
import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import { useState, useEffect } from 'react'
import Button from 'component/element/element_basic/Button/Button'
import { getAccountInfo, patchAccountInfo } from 'api/user'

const InfoSetting = () => {
  const { container, inputContainer, btnContainer, btn } = styles
  const [userInfo, setUserInfo] = useState({
    account: '',
    name: '',
    email: '',
    password: '',
    checkPassword: ''
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
    try {
      const authToken = localStorage.getItem('authToken')
      const id = localStorage.getItem('id')
      const data = await patchAccountInfo(authToken, id, userInfo)
      console.log(data.message)
      alert('修改完成')
      setUserInfo({
        ...userInfo,
        password: '',
        checkPassword: ''
      })
    } catch (error) {
      console.error(error)
      return error.data
    }
  }

  useEffect(() => {
    const getAccountInfoAsync = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        const id = localStorage.getItem('id')
        const data = await getAccountInfo(authToken, id)
        const { account, name, email } = data
        console.log('成功取得使用者資料')
        setUserInfo({
          account,
          name,
          email
        })
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
            defaultValue={userInfo.account}
            onChange={handleAccountChange}
          />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'名稱'}
            defaultValue={userInfo.name}
            onChange={handleNameChange}
          />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'Email'}
            defaultValue={userInfo.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼'}
              type={'password'}
              placeholder={'請設定密碼'}
              defaultValue={userInfo.password}
              onChange={handlePasswordChange}
            />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼再確認'}
              type={'password'}
              placeholder={'請再次輸入密碼'}
              defaultValue={userInfo.checkPassword}
              onChange={handlePasswordCheckChange}
            />
        </div>
        <div className={btnContainer} onClick={handleSave}>
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
