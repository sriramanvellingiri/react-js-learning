import React from 'react'

export default function Child1(props) {

    if(props.name === 'Apple') {
        throw new Error('Not an Name')
    }

    return (
        <div>
           {props.name} 
        </div>
    )
}
