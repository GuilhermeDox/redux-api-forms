import React from 'react'
import { Link } from 'react-router-dom'

import './sideBar.css'

class SideBar extends React.Component {
    render() {
        return (
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to='/' className="btn btn-secondary" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/jogadores' className="btn btn-secondary">Jogadores</Link>
                </li>
            </ul>
        )
    }
}

export default SideBar;