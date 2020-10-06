import React, { Component } from 'react'

class HoverHandler extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h1 onMouseOver={incrementCount}> Click {count} times </h1>
            </div>
        )
    }
}

export default HoverHandler
