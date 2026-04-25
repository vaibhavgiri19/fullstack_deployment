
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import EditPost from './pages/EditPost.jsx'

function App(){
 return(
  <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
   <Route path="/edit/:id" element={<EditPost/>}/>
  </Routes>
 )
}

export default App
