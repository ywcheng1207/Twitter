import styles from './DefaultInputItem.module.scss'
import clsx from 'clsx'

const DefaultInputItem = ({ label, value, placeholder, type, onChange }) => {
  const isError = true
  return (
    <>
      <div className={`${styles.defaultInputContainer} ${clsx({ [styles.error]: isError })}`} >
        <p className={styles.defaultInputLabel}>{label}</p>
        <input
          className={`${styles.defaultInput} `}
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            onChange?.(e.target.value)
          }}
        />
        {value.length !== 0 &&
          <div className={styles.inputNotice}>
          <div className={styles.errorState}>
            帳號不存在
            </div>
          <div className={styles.lengthRule}>{value.length}/10</div>
        </div>
        }

      </div>

    </>

  )
}

export default DefaultInputItem
