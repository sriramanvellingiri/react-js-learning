import React, { Component } from 'react'
import ErrorHandler from '../ErrorHandler'
import Child from './Child'
import Child1 from './Child1'

class propsManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parent : "Parent Name"            
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parent} from ${childName}`)
    }

    render() {
        return (
            <div>
                Props  
                <Child greetHandler= {this.greetParent}/>
                <ErrorHandler>
                    <Child1 name="sriraman" />
                    <Child1 name="Apple" />
                </ErrorHandler>
            </div>
        )
    }
}

export default propsManagement
