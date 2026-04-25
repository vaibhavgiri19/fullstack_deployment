
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import API from '../api/api'

export default function Login(){

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const navigate = useNavigate()

 const handleSubmit = async(e)=>{
  e.preventDefault()

  const res = await API.post("/api/auth/login",{email,password})

  localStorage.setItem("token",res.data.token)
  navigate("/dashboard")
 }

 return(
  <form onSubmit={handleSubmit}>
   <h2>Login</h2>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
   <button>Login</button>
   <p><Link to="/register">Register</Link></p>
  </form>
 )
}
