import styles from './DefaultInputItem.module.scss'
import clsx from 'clsx'
import { useRef } from 'react'

const DefaultInputItem = ({ label, value, placeholder, type, onChange, wordLimit, defaultValue, inputNotice, errorMessage, lengthRule }) => {
  const targetLength = useRef(0)

  const { defaultInputContainer, error } = styles
  return (
    <>
      <div className={clsx(defaultInputContainer, { [error]: [targetLength.current] > wordLimit })} >
        <p className={styles.defaultInputLabel}>{label}</p>
        <input
          className={`${styles.defaultInput} `}
          type={type || 'text'}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={e => {
            onChange?.(e.target.value)
          }}
        />
        {/* {targetLength !== 0 &&
          <div className={clsx(inputNotice, { [error]: [targetLength.current] > wordLimit })} >
            <div className={errorMessage}>
              字數超過上限!
            </div>
            <div className={lengthRule}>
              {value.length}/{wordLimit || '10'}
            </div>
          </div>
        } */}
      </div>

    </>

  )
}

export default DefaultInputItem
