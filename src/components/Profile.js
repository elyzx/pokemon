import React, { Component } from 'react'

class Profile extends Component {
    render() {
        console.log('Profile props ', this.props)
        return (
            <div>
                My Profile
            </div>
        )
    }
}

export default Profile