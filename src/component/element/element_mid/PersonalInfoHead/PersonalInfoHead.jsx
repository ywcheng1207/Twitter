import styles from './PersonalInfoHead.module.scss'
import Button from 'component/element/element_basic/Button/Button'
import { ReactComponent as LeftArrow } from 'assets/icons/leftArrow.svg'
import { Link } from 'react-router-dom'
import PersonInfoModal from '../PersonlInfoModal/PersonInfoModal'
import { useState } from 'react'

const PersonalInfoHead = () => {
  const { container, headerText, selfInfoContainer, backgroundImg, btnContainer, selfInfo, avatar, name, account, description, followContainer, following, follower, tweetsCount, btnWidth } = styles

  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState('hoe dow')
  const [discription, setDiscription] = useState('12345687545')

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => setShow(true)

  const handleNameChange = value => {
    setUserName(value)
  }
  const handleDiscriptionChange = (value) => {
    setDiscription(value)
  }

  return (
    <div calssName={container}>
        <header>
            <LeftArrow />
            <div className={headerText}>
            <h4 className='Bold'>john dopw</h4>
            <span className={tweetsCount}>25 推文</span>
            </div>
        </header>
        <div className={selfInfoContainer}>
            <div className={backgroundImg}>
            <img src="https://loremflickr.com/639/200/mountain/?random=61.42141615044277" alt="" />
            </div>
            <div className={btnContainer} onClick={handleShow}>
            <div className={btnWidth}>
                <Button value={'編輯個人資料'} type={'holePill'}/>
            </div>

            </div>
            <img className={avatar} src="https://loremflickr.com/320/240/people/?random=0.2306345450590208" alt="avatar" />
            <div className={selfInfo} >
            <p className={name}>jofn dow</p>
            <p className={account}>@jeyjohn</p>
            <p className={description} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            <div className={followContainer} >
                <p className={following}>
                    <Link to >34個</Link> <span>追隨中</span>
                </p>
                <p className={follower}>
                <Link to >59位</Link> <span>跟隨者</span>
                </p>
            </div>
            </div>
        </div>
        <PersonInfoModal
             show={show}
             onClose={handleClose}
             onShow={handleShow}
             userName={userName}
             discription={discription}
             onNameChange={handleNameChange}
             onDiscriptionChange={handleDiscriptionChange}
        />

    </div>
  )
}

export default PersonalInfoHead
