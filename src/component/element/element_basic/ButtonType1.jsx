import styles from './ButtonType1.module.scss'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Button1 = ({ value }) => {
  return <button className={`${styles.Button1}`}>{value}</button>
}

export default Button1
