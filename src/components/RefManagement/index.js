import React, { Component } from 'react'

export default class RefManagement extends Component {
    constructor(props) {
        super(props)
       this.inputRef = React.createRef()
       this.curRef = null
    //    this.setCurRef =(element) => {
    //         this.curRef = element
    //    }
    }

   
    componentDidMount() {
        console.log('Component Did mount')
        this.inputRef.current.focus()
        // if(!this.curRef) {
        //     this.curRef.focus()
        // }
    }

    changeRef() {
        
    }
    

    render() {
        return (
            <div>
                Ref Management
                <input type = "text" ref= {this.inputRef} />
                {/* <input type = "text" ref= {this.setCurRef} /> */}
                <button type="submit" onClick={() => this.changeRef()} >Submit</button>
            </div>
        )
    }
}
