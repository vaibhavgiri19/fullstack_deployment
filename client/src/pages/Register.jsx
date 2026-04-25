
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import API from '../api/api'

export default function Register(){

 const [name,setName]=useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 const navigate = useNavigate()

 const handleSubmit = async(e)=>{
  e.preventDefault()

  const res = await API.post("/api/auth/register",{name,email,password})

  localStorage.setItem("token",res.data.token)
  navigate("/dashboard")
 }

 return(
  <form onSubmit={handleSubmit}>
   <h2>Register</h2>
   <input placeholder="Name" onChange={e=>setName(e.target.value)}/>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
   <button>Register</button>
  </form>
 )
}
