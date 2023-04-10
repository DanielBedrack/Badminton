//import React, { useEffect, useState } from 'react'
import LoginForm from '../../Components/Forms/Login'
//import RegisterForm from '../../Components/Forms/Registration'
import './login.css'

const Login = () => {
  // const [users, setUsers] = useState(null)

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch('http://localhost:4000/api/users')
  //     const json = await response.json()

  //     if(response.ok){
  //       setUsers(json)
  //     }
  //   }
  //   fetchUsers()
  // }, [])
  return (
    <div className='login'>
      <LoginForm />
      {/* <RegisterForm /> */}
    </div>
  )
}

export default Login
