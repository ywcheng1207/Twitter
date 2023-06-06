import styles from './Notification.module.scss'
import { ReactComponent as NotiAlert } from 'assets/icons/notiAlert.svg'
import { ReactComponent as NotiCheck } from 'assets/icons/notiCheck.svg'
import { ReactComponent as NotiError } from 'assets/icons/notiError.svg'
import { ReactComponent as NotiNews } from 'assets/icons/notiNews.svg'

const NotiItem = ({ type }) => {
  const { notificationLabel, notiSymbol, check, alert, news, error } = styles

  if (type === 'NotiAlert') {
    return (
      <>
        <label className={notificationLabel}>網絡連線中斷</label>
        <div className={`${notiSymbol} ${alert}`}>
          <NotiAlert />
        </div>
      </>
    )
  } else if (type === 'NotiCheck') {
    return (
      <>
        <label className={notificationLabel}>推文發送成功</label>
        <div className={`${notiSymbol} ${check}`}>
          <NotiCheck />
        </div>
      </>
    )
  } else if (type === 'NotiError') {
    return (
      <>
        <label className={notificationLabel}>Email 已重複註冊</label>
        <div className={`${notiSymbol} ${error}`}>
          <NotiError />
        </div>
      </>
    )
  } else if (type === 'NotiNews') {
    return (
      <>
        <label className={notificationLabel}>收到新的貼文</label>
        <div className={`${notiSymbol} ${news}`}>
          <NotiNews />
        </div>
      </>
    )
  } else {
    return <label className={notificationLabel}>通知訊息</label>
  }
}

const Notification = ({ type }) => {
  const { notificationContainer } = styles
  return (
    <div className={notificationContainer}>
      <NotiItem type={type || ''}/>
    </div>
  )
}

export default Notification
