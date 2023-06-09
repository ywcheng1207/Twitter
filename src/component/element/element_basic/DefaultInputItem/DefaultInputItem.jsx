import styles from './DefaultInputItem.module.scss'
import clsx from 'clsx'
import { useRef } from 'react'

const DefaultInputItem = ({ label, value, placeholder, type, onChange, wordLimit }) => {
  const length = useRef(0)

  const { defaultInputContainer, error, inputNotice, errorMessage, lengthRule } = styles
  return (
    <>
      <div className={clsx(defaultInputContainer, { [error]: [length.current] > wordLimit })} >
        <p className={styles.defaultInputLabel}>{label}</p>
        <input
          className={`${styles.defaultInput} `}
          type={type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            length.current = e.target.value.length
            onChange?.(e.target.value)
          }}
        />
        {value.length !== 0 &&
          <div className={clsx(inputNotice, { [error]: [length.current] > wordLimit })} >
            <div className={errorMessage}>
              字數超過上限!
            </div>
            <div className={lengthRule}>
              {value.length}/{wordLimit || '10'}
            </div>
          </div>
        }
      </div>

    </>

  )
}

export default DefaultInputItem
