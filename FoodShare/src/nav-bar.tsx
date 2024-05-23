import { NavLink } from "react-router-dom"

import "./nav-bar.css"

const NavBar = () => {
    return(
        
            <ul>
            <li>
                <NavLink to = "/">Admin</NavLink>
            </li>
            <li>
                <NavLink to = "/donate">Donate</NavLink>
            </li>
            <li>
                <NavLink to = "/benefit">Benefit</NavLink>
            </li>
            </ul>
        
    )
}
export default NavBar