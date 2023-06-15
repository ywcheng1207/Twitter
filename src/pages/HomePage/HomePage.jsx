import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (typeof localStorage.getItem('authToken') !== 'undefined') {
      navigate('/user/home/main')
    } else {
      navigate('/login')
    }
  }, [navigate])
}

export default HomePage
