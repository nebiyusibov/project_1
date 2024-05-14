import React, { useContext, useEffect, useState } from 'react'
import "../../pages/Card.scss"
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvaider'

function HomePages() {
  const {addBasket}=useContext(MainContext)
  const [user,setuser]=useState([])
  const [search,setsearch]=useState("")

  async function getUser() {
    const res=await fetch("http://localhost:3000/user")
    const data=await res.json()
    setuser(data)
  }
  useEffect(()=>{
    getUser()
  },[])

function inc(item) {
  setuser([...user].sort((a,b) => (a[[item]] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0)))
}
function dec(item) {
  setuser([...user].sort((a,b) => (a[[item]] < b[item]) ? 1 : ((b[item] < a[item]) ? -1 : 0)))
}

  return (
    <div>
      <input type="text"  value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <button onClick={()=>inc("name")}>A-z</button>
      <button onClick={()=>dec("name")}>Z-a</button>
      <div className='container'>
      {[...user]
      .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
      .map((x)=>(

        <div className='card'>
          <h3>{x.name}</h3>
          <h3>{x.surname}</h3>
          <h3>{x.job}</h3>
          <h3>{x.age}</h3>
          {<Link to={`/Detail/${x._id}`}>add detail</Link>} <br />
          <button onClick={()=>addBasket(x) }>add basket</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default HomePages