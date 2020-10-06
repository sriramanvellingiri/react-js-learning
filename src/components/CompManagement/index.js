import React, { Component } from 'react'
import ChildComponent from './childComponent'

class CompManagement extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message : 'Hello'
        }
        console.log("Parent Constructor")
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("Parent getDerivedStateFromProps")
        return null
    }


    componentDidMount() {
        console.log("Parent Component did mount")
    }


     //update
    shouldComponentUpdate(){
        console.log("parent Should Component Updated")
        return true
    }

    // update
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("parent getSnapshotBeforeUpdate")
        return null
    }
    
    // update
    componentDidUpdate(){
        console.log("parent Component Did update")
    }

     // update
     ChangeState(){
        console.log("Changing the State")
        this.setState({message:'hello1'})
    }
    

    render() {
        console.log("Parent Render")
        return (
            <div>
                <ChildComponent />
                LifeCycle
                {this.state.message}
                <button onClick= {() => this.ChangeState()}> Change State </button>
            </div>
        )
    }
}

export default CompManagement
