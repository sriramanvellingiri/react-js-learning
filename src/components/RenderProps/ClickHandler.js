import React, { Component } from 'react'

class ClickHandler extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
               <button onClick= {incrementCount}> Click {count} times </button> 
            </div>
        )
    }
}

export default ClickHandler
