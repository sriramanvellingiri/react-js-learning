import React, { useState } from 'react'

function UseStateHook() {

    const [ inputValue, SetInput] = useState({
        firstName : '',
        lastName : '',
    })

    return (
        <div>
            <form>
                <input type='text' 
                value={inputValue.firstName} 
                onChange={(e)=> SetInput({...inputValue, firstName : e.target.value})}/>
                 <input type='text' 
                value={inputValue.lastName} 
                onChange={(e)=> SetInput({...inputValue, lastName : e.target.value})}/>
            </form>
           
            <h2>
               Your First Name is : {inputValue.firstName} 
            </h2>
            <h2>
               Your last Name is : {inputValue.lastName} 
            </h2>
        </div>
    )
}


export default UseStateHook