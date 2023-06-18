// -- import
// 樣式
import styles from './Button.module.scss'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = ({ value, type }) => {
  const { full, hole } = styles

  if (type === 'fullPill') {
    return (
        <button className={`${full} rounded-pill`}>
            <p>{value}</p>
        </button>
    )
  } else if (type === 'holePill') {
    return (
        <button className={`${hole} rounded-pill`} >
            <p>{value}</p>
        </button>
    )
  } else if (type === 'fullSquare') {
    return (
        <button className={full} >
            <p>{value}</p>
        </button>
    )
  } else {
    return (
        <button className={hole}>
            <p>{value}</p>
        </button>
    )
  }
}

export default Button
