import styles from './ButtonType2.module.scss'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Button2 = ({ value }) => {
  return <button className={`${styles.Button2}`}>{value}</button>
}

export default Button2
