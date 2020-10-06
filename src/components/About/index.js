import React, {useEffect, useRef, useState} from 'react'


export default function About() {
    const h1ref = useRef()
    const [counter, setCounter] = useState(0)
    const [counterOne, setCounterOne] = useState(0)

    // component did mount
    useEffect(() => {
        console.log(h1ref)
    },[counter, counterOne])
    
    return (<div ref = {h1ref}>
            <h1> {counter}</h1>
            <h1> {counterOne}</h1>
            <button onClick={()=> setCounter(counter => counter + 1)}> Counter1 </button>
            <button onClick={()=> setCounterOne(counterOne => counterOne + 1)}> Counter2 </button>
        </div>)
}  