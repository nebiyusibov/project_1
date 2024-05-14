import React from 'react'
import { Link } from 'react-router-dom'
import "../../layout/Navbar.scss"

function MainNavbar() {
  return (
    <div>
        <ul>
          <li><Link to={"/"}>HomePages</Link></li> ------
          <li><Link to={"/Basket"}>Basket</Link></li>
        </ul>
    </div>
  )
}

export default MainNavbar