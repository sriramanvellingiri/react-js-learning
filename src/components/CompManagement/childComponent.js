import React, { Component } from 'react'

class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }
        console.log("child Constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("child getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("child Component did mount")
    }

    //update
    shouldComponentUpdate(){
        console.log("Child Should Component Updated")
        return true
    }

    // update
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Child getSnapshotBeforeUpdate")
        return null
    }
    
    // update
    componentDidUpdate(){
        console.log("Child Component Did update")
    }
    

    render() {
        console.log("child Render")
        return (
            <div>
                Child LifeCycle
            </div>
        )
    }
}

export default ChildComponent
