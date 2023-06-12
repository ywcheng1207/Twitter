import styles from './Other.module.scss'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
// import HomeContentItem from 'component/element/element_mid/HomeContentItem/HomeContentItem'
// import PostContentItem from 'component/element/element_mid/PostContentItem/PostContentItem'
import OtherHead from 'component/element/element_mid/OtherHead/OtherHead'

import { useState } from 'react'

// import { getUserTweets, getUserReplyTweets, getUserLikeTweets } from 'api/user'

// import homepageDummy from 'dummyData/homepageDummy'

// const dummyData = {
//   "id": 304,
//   "name": "ray",
//   "account": "ray",
//   "email": "ray@example.com",
//   "avatar": "https://i.imgur.com/q6bwDGO.png",
//   "cover": "https://i.imgur.com/1jDf2Me.png",
//   "role": "user",
//   "introduction": null,
//   "createdAt": "2023-06-12T12:48:48.000Z",
//   "updatedAt": "2023-06-12T12:48:48.000Z",
//   "tweetCount": 0,
//   "followerCount": 0,
//   "followingCount": 0,
//   "followed": false
// }

// const ContentItem = ({ render, postList, replyList, userLikeList }) => {
//   if (render === '推文') {
//     return (
//       postList.map((item) => (
//         <HomeContentItem tweet={item} key={item.TweetId} />
//       ))
//     )
//   } else if (render === '回覆') {
//     return (
//       replyList.map((item) => (
//         <PostContentItem key={item.reaplyId} />
//       ))
//     )
//   } else if (render === '喜歡的內容') {
//     return (
//       userLikeList.map((item) => (
//         <HomeContentItem tweet={item} key={item.TweetId} />
//       ))
//     )
//   }
// }

const Other = () => {
  const { container, contentItemContainer, switchTab } = styles
  const [status, setStatus] = useState(0)
  const [render, setRender] = useState('推文')
  // const [postList, setPostList] = useState([])
  // const [replyList, setReplyList] = useState([])
  // const [userLikeList, setUserLikeList] = useState([])

  const list = ['推文', '回覆', '喜歡的內容']

  const handleClick = (index, item) => {
    setStatus(index)
    setRender(item)
  }

  // useEffect(() => {
  //   const getUserDataAsync = async (authToken, id) => {
  //     try {
  //       const postListData = await getUserTweets(authToken, id)
  //       const replyListData = await getUserReplyTweets(authToken, id)
  //       const userLikeListData = await getUserLikeTweets(authToken, id)
  //       console.log('成功取得個人資料頁的個人推文串')
  //       console.log('成功取得個人資料頁的回覆推文串')
  //       console.log('成功取得個人資料頁的Like推文串')

  //       setPostList(postListData)
  //       setReplyList(replyListData)
  //       setUserLikeList(userLikeListData)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   if (localStorage.getItem('authToken')) {
  //     getUserDataAsync(localStorage.getItem('authToken'), localStorage.getItem('id'))
  //   }
  // }, [])

  return (
    <div className={container}>
      <OtherHead/>
      <TweetSwitchTab
        list={list}
        status={status}
        onClick={handleClick}
        render={render}
        className={switchTab}
      />
      <div className={contentItemContainer}>
        {/* <ContentItem render={render} postList={postList} replyList={replyList} userLikeList={userLikeList} /> */}
      </div>
    </div>
  )
}

export default Other
