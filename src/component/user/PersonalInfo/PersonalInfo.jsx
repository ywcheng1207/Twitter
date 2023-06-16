import styles from './PersonInfo.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import PersonalInfoHead from 'component/element/element_mid/PersonalInfoHead/PersonalInfoHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
// import PersonInfoModal from 'component/element/element_mid/PersonlInfoModal/PersonInfoModal'
import { useState, useEffect, useRef } from 'react'
import { getUserTweets, getUserReplyTweets, getUserLikeTweets, getAccountInfo, putPersonalInfo } from 'api/user'
import { useNavigate } from 'react-router-dom'
// putPersonalInfo
const ContentItem = ({ render, postList, replyList, userLikeList, onPostList, onUserLikeList, onAvatarClick }) => {
  if (render === '推文') {
    return (
      postList.map((item) => (
        <HomeContentItem tweet={item} key={item.TweetId} TweetId={item.TweetId} onPostList={onPostList} onAvatarClick={(clickId) => onAvatarClick?.(clickId)} />
      ))
    )
  } else if (render === '回覆') {
    return (
      replyList.map((item) => (
        <PostContentItem tweet={item} key={item.reaplyId} />
      ))
    )
  } else if (render === '喜歡的內容') {
    return (
      userLikeList.map((item) => (
        <HomeContentItem tweet={item} key={item.TweetId} TweetId={item.TweetId} onUserLikeList={onUserLikeList} onAvatarClick={(clickId) => onAvatarClick?.(clickId)} />
      ))
    )
  }
}

const PersonalInfo = () => {
  const { container, contentItemContainer, switchTab } = styles
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('推文')
  // 資料
  const [postList, setPostList] = useState([])
  const [replyList, setReplyList] = useState([])
  const [userLikeList, setUserLikeList] = useState([])
  const formData = new FormData()

  // 編輯資料頭像狀態
  const [userHead, setUserHead] = useState({})
  const [theUserName, setTheUserName] = useState('')
  const [inroduction, setIntorduction] = useState('')
  const [followerCount, setFollowerCount] = useState('')
  const [followingCount, setFollowingCount] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [userCover, setUserCover] = useState('')

  // 上傳照片狀態
  const [coverStatus, setCoverStatus] = useState(false)
  const [avatarStatus, setAvatarStatus] = useState(false)

  const navigate = useNavigate()
  const list = ['推文', '回覆', '喜歡的內容']
  // head回到上一頁按鈕
  const handleText = () => { navigate(-1) }
  // 個資頁面底下切換tab功能
  const handleClick = (index, item) => {
    setStatus(index)
    setRender(item)
  }
  // 呼叫編輯modal
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    if (userHead.introduction === null) {
      setIntorduction('請輸入自我介紹')
    } else {
      setIntorduction(userHead.introduction)
    }
    setTheUserName(userHead.name)
  }
  const handleShow = () => setShow(true)
  const handleSaveInfo = () => {
    if (theUserName.length > 0 &&
      inroduction.length > 0 &&
       theUserName.length <= 50 &&
       inroduction.length <= 160) {
      handleSaveClick()
      handleClose()
    }
  }

  // 上傳照片功能
  const inputfileref = useRef(userCover)
  const handleOnClickUpload = () => {
    inputfileref.current.click()
  }
  const [imageSrc, setImageSrc] = useState('')
  const handleOnPreview = (event) => {
    const file = event.target.files[0]
    setUserCover(file)
    const reader = new FileReader()

    reader.addEventListener('load', function () {
      // convert image file to base64 string
      setImageSrc(reader.result)
    }, false)
    setCoverStatus(true)

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  const handleDeletePreview = () => {
    setImageSrc('')
    setCoverStatus(false)
    handleRemoveFile()
    setUserCover(inputfileref.current)
  }
  const handleRemoveFile = () => {
    inputfileref.current.value = ''
  }

  // 上傳 avatar 功能
  const [modalAvatar, setModalAvatar] = useState('')
  const handleOnAvatar = (event) => {
    const file = event.target.files[0]
    setUserAvatar(file)
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      // convert image file to base64 string
      setModalAvatar(reader.result)
      localStorage.setItem('avatar', reader.result)
      setAvatarStatus(true)
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  // modal 更換名字與介紹
  const handleNameChange = (changeName) => {
    setTheUserName(changeName)
  }

  const handleIntrodrctionChange = (changeIntroduction) => {
    setIntorduction(changeIntroduction)
  }

  // modal 點擊儲存
  const handleSaveClick = () => {
    const id = localStorage.getItem('id')
    const authToken = localStorage.getItem('authToken')
    setUserHead({
      ...userHead,
      name: theUserName,
      introduction: inroduction,
      cover: imageSrc,
      avatar: modalAvatar
    })
    formData.append('name', theUserName)
    formData.append('introduction', inroduction)
    formData.append('cover', userCover)
    formData.append('avatar', userAvatar)
    console.log(formData)
    putPersonalInfoAsync(authToken, id, formData)
    setTimeout(function () {
      navigate('/user/personalinfo/main')
    }, 1000)
  }

  const putPersonalInfoAsync = async (authToken, id, formData) => {
    try {
      await putPersonalInfo(authToken, id, formData)
      console.log('修改完成')
      navigate(0)
    } catch (error) {
      console.error(error)
    }
  }

  // ----------------- OLD
  // show編輯資料modal
  // const [show, setShow] = useState(false)
  // const formData = new FormData()
  // const handleClose = () => { setShow(false) }
  // const handleShow = () => { setShow(true) }
  // const handleNameChange = (username) => {
  //   setTheUserName(username)
  // }

  // const handleIntroductionChange = (introduction) => {
  //   setIntorduction(introduction)
  // }

  // const handleBtnClick = (image, avatar) => {
  //   const id = localStorage.getItem('id')
  //   const authToken = localStorage.getItem('authToken')
  //   formData.append('name', theUserName)
  //   formData.append('introduction', inroduction)
  //   formData.append('followerCount', followerCount)
  //   formData.append('followingCount', followingCount)
  //   setUserHead(() => {
  //     return {
  //       ...userHead,
  //       name: theUserName,
  //       introduction: inroduction,
  //       avatar,
  //       cover: image
  //     }
  //   })
  //   putPersonalInfoAsync(authToken, id, formData)
  // }

  // const putPersonalInfoAsync = async (authToken, id, formData) => {
  //   try {
  //     const data = await putPersonalInfo(authToken, id, formData)
  //     console.log('修改完成')
  //     setUserHead(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // ----------------- OLD

  const handlePostList = ({ TweetId, count }) => {
    setPostList(pre => {
      return pre.map(item => {
        if (item.TweetId === TweetId) {
          console.log(item)
          return { ...item, isLiked: !item.isLiked, likeCount: item.likeCount + count }
        } else {
          return item
        }
      })
    })
  }
  const handleUserLikeList = ({ TweetId, count }) => {
    setUserLikeList(pre => {
      return pre.map(item => {
        if (item.TweetId === TweetId) {
          return { ...item, isLiked: !item.isLiked, likeCount: item.likeCount + count }
        } else {
          return item
        }
      })
    })
  }

  // 點擊 avatar 至 other 頁面
  const handleAvatarClick = (clickId) => {
    console.log(clickId)
    const userId = localStorage.getItem('id')
    if (Number(clickId) === Number(userId)) {
      navigate('/user/personalinfo/main')
    } else {
      localStorage.setItem('otherId', clickId)
      navigate('/user/other/main')
    }
  }

  useEffect(() => {
    const getAccountInfoAsync = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        const id = localStorage.getItem('id')
        const data = await getAccountInfo(authToken, id)
        console.log('成功取得使用者資料')
        console.log(data)

        setUserHead(data)
        setTheUserName(data.name)
        if (data.introduction === null) {
          setIntorduction('請輸入自我介紹')
        } else {
          setIntorduction(data.introduction)
        }
        setFollowerCount(data.followerCount)
        setFollowingCount(data.followingCount)
        setImageSrc(data.cover)
        setUserCover(data.cover)
        setModalAvatar(data.avatar)
        localStorage.setItem('tweetCount', data.tweetCount)
        localStorage.setItem('userName', data.name)
      } catch (error) {
        console.error(error)
      }
    }
    getAccountInfoAsync()
  }, [navigate])

  useEffect(() => {
    const getUserDataAsync = async (authToken, id) => {
      try {
        const postListData = await getUserTweets(authToken, id)
        const replyListData = await getUserReplyTweets(authToken, id)
        const userLikeListData = await getUserLikeTweets(authToken, id)
        if (postListData.message === '無推文資料') {
          setPostList([])
        } else {
          setPostList(postListData)
        }
        if (replyListData.message === '無回覆資料') {
          setReplyList([])
        } else {
          setReplyList(replyListData)
        }
        if (userLikeListData.message === '無Like資料') {
          setUserLikeList([])
        } else {
          setUserLikeList(userLikeListData)
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'), localStorage.getItem('id'))
    }
  }, [render, navigate])
  return (
    <div className={container}>
      <PersonalInfoHead
        userHead={userHead}
        theUserName={theUserName}
        // onEditClick={handleShow}
        inroduction={inroduction}
        followerCount={followerCount}
        followingCount={followingCount}
        onTextClick={handleText}

        show={show}
        onClose={handleClose}
        onShow={handleShow}
        imageSrc={imageSrc}
        modalAvatar={modalAvatar}
        onOnPreview={handleOnPreview}
        onOnAvatar={handleOnAvatar}
        onDeletePreview={handleDeletePreview}
        onNameChange={handleNameChange}
        onIntroductionChange={handleIntrodrctionChange}
        onSaveClick={handleSaveClick}
        avatarStatus={avatarStatus}
        coverStatus={coverStatus}
        onClickUpload={handleOnClickUpload}
        inputfileref={inputfileref}
        onSaveInfo={handleSaveInfo}
      />
      <TweetSwitchTab
        list={list}
        status={status}
        onClick={handleClick}
        render={render}
        className={switchTab}
      />
      <div className={contentItemContainer}>
        <ContentItem
          render={render}
          postList={postList}
          replyList={replyList}
          userLikeList={userLikeList}
          onPostList={handlePostList}
          onUserLikeList={handleUserLikeList}
          onAvatarClick={handleAvatarClick}
        />
      </div>
      {/* <PersonInfoModal
        show={show}
        onClose={handleClose}
        onShow={handleShow}
        onNameChange={handleNameChange}
        onIntroductionChange={handleIntroductionChange}
        onBtnClick={handleBtnClick}
        userHead={userHead}
        formData={formData}
        onTextClick={handleText}
        /> */}
    </div>

  )
}

export default PersonalInfo
