
import {useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import API from '../api/api'

export default function EditPost(){

 const {id}=useParams()
 const navigate=useNavigate()

 const [title,setTitle]=useState("")
 const [content,setContent]=useState("")

 useEffect(()=>{
  API.get(`/api/posts/${id}`).then(res=>{
   setTitle(res.data.title)
   setContent(res.data.content)
  })
 },[])

 const handleSubmit = async(e)=>{
  e.preventDefault()
  await API.put(`/api/posts/${id}`,{title,content})
  navigate("/dashboard")
 }

 return(
  <form onSubmit={handleSubmit}>
   <h2>Edit Post</h2>
   <input value={title} onChange={e=>setTitle(e.target.value)}/>
   <input value={content} onChange={e=>setContent(e.target.value)}/>
   <button>Update</button>
  </form>
 )
}
