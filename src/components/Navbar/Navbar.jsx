import React from 'react'
import './Navbar.css'
import logo_light from  '../../assets/logo.png'
import logo_dark from  '../../assets/logo.png'
import toggle_light from  '../../assets/night.png'
import toggle_dark from  '../../assets/day.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = ({theme, setTheme}) => {


    const toggle_mode = () => {
        theme == 'light'? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

        <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/reserve'>Reserve</CustomLink>
            <CustomLink to='/store'>Loja</CustomLink>
            <CustomLink to='/About'>Sobre</CustomLink>
        </ul>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>

    </div>
  )
}


function CustomLink({ to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar;