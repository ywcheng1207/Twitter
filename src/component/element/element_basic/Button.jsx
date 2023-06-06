import styles from './Button.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = ({ value, type }) => {
  const { full, hole } = styles

  if (type === 'fullPill') {
    return (
        <button className={`${full} rounded-pill`}>
            {value}
        </button>
    )
  } else if (type === 'holePill') {
    return (
        <button className={`${hole} rounded-pill`} >
            {value}
        </button>
    )
  } else if (type === 'fullSquare') {
    return (
        <button className={full} >
            {value}
        </button>
    )
  } else {
    return (
        <button className={hole} >
            {value}
        </button>
    )
  }
}

export default Button
