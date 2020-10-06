import React, { Component } from 'react';


class Statemanagement extends Component {

    constructor(){
        super()
        this.state = {
            count : 0,
            message : "Welcome State management"
        }

    }
    ChangeMessage() {
        console.log('Button Clicked')
        this.setState({
            message : "Message Changed!"
        })
    }

    Increment() {
        // First Way
        // Setting a value is a first Argument , passing a call back to get the current state value 
        // this.setState({
        //     count : this.state.count + 1
        // }, () => { 
        //     console.log("Callback Value", this.state.count)
        // })

        // Second Way
        // Passing function as an argument and incrementing the count based on the previous vaile 
        // this.setState((prevState, props) => ({
        //     count : prevState.count + 1
        // }))
        // console.log(this.state.count)
    }

    render() { 
        return (

            <div>
                {this.state.message}
                <button onClick= {() => this.ChangeMessage()}> Submit </button>

                <div>

                {this.state.count}
                <button onClick= {() => this.Increment()}> Increment </button>
                </div>
            </div>

            
        )
    }
}
 
export default Statemanagement;