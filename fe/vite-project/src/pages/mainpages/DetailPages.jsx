import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailPages() {
  const { id } = useParams()

  const [user, setuser] = useState(id)

  async function getDetail() {
    const res = await fetch(`http://localhost:3000/user/${id}`)
    const data = await res.json()
    setuser(data)
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    
      <div className='container'>
          <div className='card'>
            <h3>{user.name}</h3>
            <h3>{user.surname}</h3>
            <h3>{user.job}</h3>
            <h3>{user.age}</h3>
          </div>
      </div>
  )
}

export default DetailPages