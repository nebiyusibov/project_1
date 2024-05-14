import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminPanel() {

  const [user,setuser]=useState([])

    async function getUser() {
      const res=await fetch("http://localhost:3000/user")
      const data=await res.json()
      setuser(data)
    }

    useEffect(()=>{
      getUser()
    },[])

    async function getDelete(id) {
      const res=await fetch("http://localhost:3000/user/"+id,{
        method:"delete"
      })
      const data=await res.json()
      getUser()
    }
  
  return (
    <div className='tableadmin'>
       <table border={"1px"}>
          <thead>
            <tr>
              <th>name</th>
              <th>surname</th>
              <th>job</th>
              <th>age</th>
              <th>edit/delete</th>
            </tr>
          </thead>
      {user.map((x)=>(
       <tbody>
       <tr>
         <td>{x.name}</td>
         <td>{x.surname}</td>
         <td>{x.job}</td>
         <td>{x.age}</td>
         <td><Link to={`/adminpanel/Update/${x._id}`}>edit</Link><button onClick={()=>getDelete(x._id)}>x</button></td>
       </tr>
     </tbody>
      ))}
          
        </table>
    </div>
  )
}

export default AdminPanel