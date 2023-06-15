import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
    if (localStorage.getItem('authToken')) {
      navigate('/user/home/main')
    }
  }, [navigate])
}

export default HomePage
