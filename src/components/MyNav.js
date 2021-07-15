import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class MyNav extends Component {
    render() {
        return (
            <div>
                <span>
                   <Link to="/" >Landing</Link>
                </span>
                <span>
                    <Link to="/home" >Home</Link>
                </span>
                <span>
                    <Link to="/about" >About</Link>
                </span>
            </div>
        )
    }
}

export default MyNav
