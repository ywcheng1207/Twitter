const HoursPassed = ({ item }) => {
  const pastTime = new Date(item)
  const currentTime = new Date()

  const timeDiff = Math.abs(currentTime - pastTime)
  const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60))

  return (
          <span>{hoursPassed}小時</span>
  )
}

export default HoursPassed
