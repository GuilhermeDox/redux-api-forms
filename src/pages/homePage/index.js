import React from 'react'
import TopBar from '../topBar'
import SideBar from '../sideBar'

class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="col-3">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <h1>Home Page</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage