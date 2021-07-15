import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                Yayy { this.props.match.params.myName }'s homepage
            </div>
        )
    }
}

export default Home