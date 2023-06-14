import styles from './PersonInfo.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
import PersonalInfoHead from 'component/element/element_mid/PersonalInfoHead/PersonalInfoHead'
import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import PersonInfoModal from 'component/element/element_mid/PersonlInfoModal/PersonInfoModal'
import { useState, useEffect } from 'react'
import { getUserTweets, getUserReplyTweets, getUserLikeTweets, getAccountInfo } from 'api/user'
import { useNavigate } from 'react-router-dom'
// putPersonalInfo
const ContentItem = ({ render, postList, replyList, userLikeList, onPostList, onUserLikeList }) => {
  if (render === '推文') {
    return (
      postList.map((item) => (
        <HomeContentItem tweet={item} key={item.TweetId} TweetId={item.TweetId} onPostList={onPostList} />
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
        <HomeContentItem tweet={item} key={item.TweetId} TweetId={item.TweetId} onUserLikeList={onUserLikeList} />
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

  // 編輯資料頭像狀態
  const [userHead, setUserHead] = useState({})
  const [theUserName, setTheUserName] = useState('')
  const [inroduction, setIntorduction] = useState('')

  // show編輯資料modal
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const formData = new FormData()

  const list = ['推文', '回覆', '喜歡的內容']
  const handleClose = () => { setShow(false) }
  const handleShow = () => { setShow(true) }
  const handleText = () => { navigate(-1) }

  const handleClick = (index, item) => {
    setStatus(index)
    setRender(item)
  }

  const handleNameChange = (username) => {
    // setUserHead({
    //   ...userHead,
    //   name: value
    // })
    setTheUserName(username)
  }

  const handleIntroductionChange = (introduction) => {
    setIntorduction(introduction)
  }

  const handleBtnClick = (image, avatar) => {
    // const id = localStorage.getItem('id')
    // const authToken = localStorage.getItem('authToken')
    // setUserHead({
    //   ...userHead,
    //   avatar,
    //   cover: image
    // })
    setUserHead(() => {
      return {
        ...userHead,
        name: theUserName,
        introduction: inroduction,
        avatar,
        cover: image
      }
    })
    // formData.append('name', userHead.name)
    // formData.append('introduction', userHead.introduction)
    // formData.append('avatar', userHead.avatar)
    // formData.append('cover', userHead.cover)

    // const putPersonalInfoAsync = async (authToken, id) => {
    //   try {
    //     const { success, data } = await putPersonalInfo(authToken, id, formData)
    //     if (success) {
    //       setUserHead(data)
    //       console.log('修改完成')
    //     }
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
    // putPersonalInfoAsync(authToken, id, formData)
    // navigate('/user/personalinfo/main')
  }

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
  useEffect(() => {
    const getAccountInfoAsync = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        const id = localStorage.getItem('id')
        const data = await getAccountInfo(authToken, id)
        console.log('成功取得使用者資料')
        const { cover, avatar } = data
        localStorage.setItem('modalCover', cover)
        localStorage.setItem('modalAvatar', avatar)
        setUserHead(data)
        setIntorduction(data.introduction)
        console.log(userHead)
      } catch (error) {
        console.error(error)
      }
    }
    getAccountInfoAsync()
  }, [])

  useEffect(() => {
    const getUserDataAsync = async (authToken, id) => {
      try {
        const postListData = await getUserTweets(authToken, id)
        const replyListData = await getUserReplyTweets(authToken, id)
        const userLikeListData = await getUserLikeTweets(authToken, id)

        setPostList(postListData)
        setReplyList(replyListData)
        setUserLikeList(userLikeListData)
      } catch (error) {
        console.error(error)
      }
    }
    if (localStorage.getItem('authToken')) {
      getUserDataAsync(localStorage.getItem('authToken'), localStorage.getItem('id'))
    }
  }, [render])

  return (
    <div className={container}>
      <PersonalInfoHead
        userHead={userHead}
        theUserName={theUserName}
        onEditClick={handleShow}
        inroduction={inroduction}
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
        />
      </div>
      <PersonInfoModal
             show={show}
             onClose={handleClose}
             onShow={handleShow}
             onNameChange={handleNameChange}
             onIntroductionChange={handleIntroductionChange}
             onBtnClick={handleBtnClick}
             userHead={userHead}
             formData={formData}
             onTextClick={handleText}

        />
    </div>

  )
}

export default PersonalInfo
