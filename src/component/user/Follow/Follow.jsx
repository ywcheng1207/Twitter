import UserFollowItem from 'component/element/element_mid/UserFollowItem/UserFollowItem'
import styles from './Follow.module.scss'
import { ReactComponent as LeftArrow } from 'assets/icons/leftArrow.svg'
import TweetSwitchTab from 'component/element/element_basic/TweetSwitchTab/TweetSwitchTab'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const dummyData = [
  {
    tweetId: 7,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    isFollowed: true
  },
  {
    tweetId: 1,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  },
  {
    tweetId: 2,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdfaaaaaaaaaaaa',
    isFollowed: true
  },
  {
    tweetId: 3,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  },
  {
    tweetId: 4,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  },
  {
    tweetId: 5,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  },
  {
    tweetId: 6,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  }, {
    tweetId: 7,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  }, {
    tweetId: 8,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  }, {
    tweetId: 9,
    name: 'ddd fie',
    avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
    introduction: 'asdfasdfasdfasdfasdfasdf',
    isFollowed: false
  }
]
const followingDummyData = [{
  tweetId: 10,
  name: 'ddd fie',
  avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
  introduction: 'asdfasdfasdfasdfasdfasdf',
  isFollowed: true
},
{
  tweetId: 11,
  name: 'ddd fie',
  avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
  introduction: 'asdfasdfasdfasdfasdfasdf',
  isFollowed: true
},
{
  tweetId: 12,
  name: 'ddd fie',
  avatar: 'https://loremflickr.com/639/200/mountain/?random=61.42141615044277',
  introduction: 'asdfasdfasdfasdfasdfasdf',
  isFollowed: true
}]

const Follow = () => {
  const { container, headerText, tweetsCount, headerName, tweetsContainer, arrow } = styles
  const [status, setStatus] = useState(0)
  const [data, setData] = useState(dummyData)
  const navigate = useNavigate()

  const handleClick = (id) => {
    setData(data.map(item => {
      if (item.tweetId === id) {
        return {
          ...item,
          isFollowed: !item.isFollowed
        }
      } else {
        return item
      }
    }))
  }

  const handleSwitchClick = (index) => {
    setStatus(index)
    if (index === 1) {
      setData(followingDummyData)
    } else if (index === 0) {
      setData(dummyData)
    }
  }

  return (
    <div className={container}>
      <header>
        <LeftArrow className={arrow} onClick={() => navigate(-1)}/>
        <div className={headerText}>
        <h4 className={headerName}>john dopw</h4>
        <span className={tweetsCount}>25 推文</span>
        </div>
      </header>
      <TweetSwitchTab
        list={['追隨者', '正在追隨']}
        status = {status}
        onClick={handleSwitchClick}
      />
      <div className={tweetsContainer}>
        {data.map(item => {
          return (
            <UserFollowItem key={item.tweetId} item={item} onClick={handleClick} />
          )
        })
        }
      </div>

    </div>
  )
}

export default Follow
