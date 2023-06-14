import styles from './DefaultInputItem.module.scss'
import clsx from 'clsx'

const DefaultInputItem = ({ label, value, placeholder, type, onChange, wordLimit, defaultValue, inputNotice, errorMessage, lengthRule, status, onFocus, onBlur, inputName }) => {
  const { defaultInputContainer, error } = styles
  return (
    <>
      <div className={clsx(defaultInputContainer, { [error]: status === 'error' })} >
        <p className={styles.defaultInputLabel}>{label}</p>
        <input
          className={`${styles.defaultInput} `}
          type={type || 'text'}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={e => {
            onChange?.(e.target.value)
          }}
          onFocus={() => onFocus?.(inputName)}
          onBlur={() => onBlur?.(inputName)}
        />
      </div>

    </>

  )
}

export default DefaultInputItem
