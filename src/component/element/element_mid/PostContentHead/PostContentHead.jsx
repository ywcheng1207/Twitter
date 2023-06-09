import styles from './PostContentHead.module.scss'
import replyIcon from 'assets/icons/reply.svg'
import likeIcon from 'assets/icons/like.svg'
const avatarUrl = 'https://loremflickr.com/320/240/people/?random=7.976051090916994&lock=999'

const PostContentHead = () => {
  const {
    PostContentHeadContainer, postHead, info, postDescription,
    postTime, postCount, postIcon, reply, like, replyBtn, likeBtn
  } = styles

  return (
    <div className={PostContentHeadContainer}>
      <div className={postHead}>
        <img src={avatarUrl} alt="" />
        <div className={info}>
          <div>Apple</div>
          <span>@apple</span>
        </div>
      </div>
      <div className={postDescription}>
          Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor.
           Voluptate exercitation incididunt aliquip deserunt.
      </div>
      <div className={postTime}>
        <span>上午 10:05・2021年11月10日</span>
      </div>
      <div className={postCount}>
        <div className={reply}>
          <span>34</span>
          <a>回覆</a>
        </div>
        <div className={like}>
          <span>808</span>
          <a>喜歡次數</a>
        </div>
      </div>
      <div className={postIcon}>
        <img className={replyBtn} src={replyIcon} alt="" />
        <img className={likeBtn} src={likeIcon} alt="" />
      </div>
    </div>
  )
}
export default PostContentHead
