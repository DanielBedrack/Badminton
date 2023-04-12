import React, { useEffect, useState } from 'react'
import LoginForm from '../../Components/Forms/LoginForm'
import './login.css'

const Login = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4000/api/user')
      const json = await response.json()

      if(response.ok){
        setUsers(json)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className='login'>
      <LoginForm users={users} />
    </div>
  )
}

export default Login
