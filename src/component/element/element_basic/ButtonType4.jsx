import styles from './ButtonType4.module.scss'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Button4 = ({ value }) => {
  return <button className={`${styles.Button4} rounded-pill`}>{value}</button>
}

export default Button4
