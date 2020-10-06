import React, { Component } from 'react'

class FormManagement extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName : "",
             email : "",
             address : "",
             country : "",
        }
        
    }
    
    handleUserName = (event) => {
        this.setState ({
            userName : event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState ({
            email : event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState ({
            address : event.target.value
        })
    }

    handleSubmit = (event) => {
       console.log(this.state)
       console.log("Submitted!!!!!!!")
       event.preventDefault()
    }

    render() {
        return (
            <div>
                Form Management
                <form name = "FormManagement"  onSubmit={this.handleSubmit} >
                <div>
                    <label> UserName</label>
                    <input type= "text" name={this.state.name} onChange={this.handleUserName} />
                </div>
                <div>
                    <label> Email</label>
                    <input type= "text" name={this.state.email} onChange={this.handleEmail} />
                </div>
                <div>
                    <label> Address</label>
                    <textarea name={this.state.address} onChange={this.handleAddress} />
                </div>
               <div>
                <label> Country</label>
                    <select id="country"  name={this.state.address}> 
                    <option value="India"> India</option>
                    <option value="US"> US</option>
                    <option value="germany"> Germany</option>
                    </select>
               </div>
               <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}

export default FormManagement
