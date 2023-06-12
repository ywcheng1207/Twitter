import styles from './InfoSetting.module.scss'
import DefaultInputItem from 'component/element/element_basic/DefaultInputItem/DefaultInputItem'
import { useState } from 'react'
import Button from 'component/element/element_basic/Button/Button'
// import { getAccountInfo } from 'api/user'

const dummyData = {
  account: 'rachen',
  name: 'raychen',
  email: 'rayray@gmail.com',
  password: '12345678',
  checkPassword: '12345678'
}

const InfoSetting = () => {
  const { container, inputContainer, btnContainer, btn } = styles

  const [userInfo, setUserInfo] = useState(dummyData)
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
              defaultValue={''}
              onChange={handlePasswordChange}
            />
        </div>
        <div className={inputContainer}>
          <DefaultInputItem
            label={'密碼再確認'}
              type={'password'}
              placeholder={'請再次輸入密碼'}
              defaultValue={''}
              onChange={handlePasswordCheckChange}
            />
        </div>
        <div className={btnContainer}>
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
