import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const linkTree= [
  {
    id: 1,
    name: "Home",
    href: "/"
  },
  {
    id: 2,
    name: "About",
    href: "/about"
  },
  {
    id :3,
    name: "Products",
    href: "/products"
  }
]

const Header = () => {
  
  return (
    <header>
      <nav className= "d-flex m-3 align-items-center justify-content-between">
        <div className="logo">logo</div>
        <h1>MyFakeStore.com</h1>
        <div className="nav-links">
          <ul className='list-unstyled d-flex '>
            {linkTree.map((link)=>{
              return(
                <li className='me-3' key={link.id}>
                  <NavLink className={location.pathname === link.href ? "link active" : "link"} to={link.href}>{link.name} </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header