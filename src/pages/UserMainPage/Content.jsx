// -- import
// 元件
import InfoSetting from 'component/user/InfoSetting/InfoSetting'
import Home from 'component/user/Home/Home'
import PersonalInfo from 'component/user/PersonalInfo/PersonalInfo'
import Other from 'component/user/Other/Other'
import ReplyList from 'component/user/ReplyList/ReplyList'
import Follow from 'component/user/Follow/Follow'
// 樣式/套件
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// -- 元件
export default function Content () {
  const { page } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (page !== 'home' && page !== 'personalinfo' &&
     page !== 'infosetting' && page !== 'replylist' &&
     page !== 'follow' && page !== 'other') {
      navigate('/user/home/main')
    }
  }, [page, navigate])

  if (page === 'home') {
    return <Home />
  } else if (page === 'infosetting') {
    return <InfoSetting />
  } else if (page === 'personalinfo') {
    return <PersonalInfo />
  } else if (page === 'replylist') {
    return <ReplyList />
  } else if (page === 'other') {
    return <Other />
  } else if (page === 'follow') {
    return <Follow />
  }
}
