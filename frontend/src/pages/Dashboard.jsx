import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'


function Dashboard() {

  const navigate = useNavigate()
  const {user}  = useSelector((state)=>state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div>dashboard</div>
  )
}

export default Dashboard