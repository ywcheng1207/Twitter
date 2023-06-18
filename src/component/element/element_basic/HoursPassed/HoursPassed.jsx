const HoursPassed = ({ item }) => {
  const pastTime = new Date(item)
  const currentTime = new Date()

  const timeDiff = Math.abs(currentTime - pastTime)
  const minutesPassed = Math.floor(timeDiff / (1000 * 60))
  const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60))
  const dayPassed = Math.floor(hoursPassed / 24)

  return (
    <span>
      {timeDiff < 60000 && '剛剛'}
      { minutesPassed >= 1 && minutesPassed < 60 && `${minutesPassed}分鐘` }
      {hoursPassed >= 1 && hoursPassed < 24 && `${hoursPassed}小時`}
      {dayPassed > 0 && `${dayPassed}天`}
    </span>
  )
}

export default HoursPassed
