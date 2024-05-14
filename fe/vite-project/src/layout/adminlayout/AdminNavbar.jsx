import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
        <ul>
          <li><Link to={"/adminpanel"}>adminpanel</Link></li> ------
          <li><Link to={"/adminpanel/Add"}>addpages</Link></li>
        </ul>
    </div>
  )
}

export default AdminNavbar