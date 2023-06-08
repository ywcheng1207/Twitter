import styles from './DefaultInputItem.module.scss'
import clsx from 'clsx'

const DefaultInputItem = ({ label, value, placeholder, type, onChange, wordLimit }) => {
  const isError = false
  const { defaultInputContainer, error, lengthRule, tooMuchWord } = styles
  return (
    <>
      <div className={clsx(defaultInputContainer, { [error]: isError })} >
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
            { value.length > wordLimit &&
              <div className={styles.errorMessage}>
                字數超出上限！
              </div>
            }
            <div className={clsx(lengthRule, { [tooMuchWord]: [value.length] > 10 })}>
              {value.length}/{wordLimit || 10}
            </div>
          </div>
        }

      </div>

    </>

  )
}

export default DefaultInputItem
