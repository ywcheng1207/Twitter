import styles from './ButtonType3.module.scss'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Button3 = ({ value }) => {
  return <button className={`${styles.Button3} rounded-pill`}>{value}</button>
}

export default Button3
