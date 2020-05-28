import React from 'react'
import { Link } from 'react-router-dom';

class TopBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">Futebol</Link>
            </nav>
        )
    }
}

export default TopBar;