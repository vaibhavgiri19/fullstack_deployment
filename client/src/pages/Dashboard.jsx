
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import API from '../api/api'

export default function Dashboard(){

 const [posts,setPosts]=useState([])
 const [title,setTitle]=useState("")
 const [content,setContent]=useState("")
 const navigate = useNavigate()

 const fetchPosts = async()=>{
  const res = await API.get("/api/posts")
  setPosts(res.data)
 }

 useEffect(()=>{
  fetchPosts()
 },[])

 const createPost = async(e)=>{
  e.preventDefault()
  await API.post("/api/posts",{title,content})
  fetchPosts()
 }

 const deletePost = async(id)=>{
  if(confirm("Delete post?")){
   await API.delete(`/api/posts/${id}`)
   fetchPosts()
  }
 }

 return(
  <div>
   <h2>Dashboard</h2>

   <form onSubmit={createPost}>
    <input placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
    <input placeholder="Content" onChange={e=>setContent(e.target.value)}/>
    <button>Create</button>
   </form>

   {posts.map(p=>(
    <div key={p._id}>
     <h3>{p.title}</h3>
     <p>{p.content}</p>
     <button onClick={()=>navigate(`/edit/${p._id}`)}>Edit</button>
     <button onClick={()=>deletePost(p._id)}>Delete</button>
    </div>
   ))}

  </div>
 )
}
