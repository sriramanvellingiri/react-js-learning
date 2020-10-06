
//import React, { useState } from 'react'
// import logo from './logo.svg';
//import './App.css';

import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//const arr = [1,2,3,4,5]

// function ComponentOne() {
//   return (
//   <h2>I am H2 {arr.map(val => <div> {val *2}</div>)}</h2>
//   )
// }

// function ButtonClicked() {

//   const [Counter, SetCounter] = useState(5)

//   function buttonWasClicked(event){
//     SetCounter(Counter + 1)
//   }

//   return (
//     <div>
//         <h2>Button Count : {Counter}</h2>
//         <button onClick={buttonWasClicked}> Button</button>
//     </div>
//   )
// }

// function LoginForm(props) {
 
//   const [name,SetName] = useState('')
//   const [password,SetPassword] = useState('')

//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h3> {name  === 'admin' && password === 'admin' && 'Hello Admin!'} </h3>
//       <input type="text" value={name} onChange={SetNameField} />      
//       <input type="password" value={password} onChange={SetPasswordField} /> 
//       <button onClick={submitForm}> Submit </button>
//     </div>
//   )

//   function submitForm(){
//     console.log(name, password)
//   }

//   function SetNameField(event){
//     SetName(event.target.value)
//   }

//   function SetPasswordField(event){
//     SetPassword(event.target.value)
//   }
// }

// function ListComponent() {

//   const arr = [
//     {
//       firstname : 'Sriraman',
//       lastname : 'Vellingiri'
//     },
//     {
//       firstname : 'Atharva',
//       lastname : 'Sriraman'
//     }
//   ]

//   return (
//     <ul>
//       { arr.map(elem => <li key = {elem.firstname}> 
//         {elem.firstname} {elem.lastname} </li> ) }
//     </ul>
//   )
// }

import Home from './components/Home'
import About from './components/About'
import Greet from './components/Greet'
import Statemanagement from './components/Statemanagement'
import propsManagement from './components/propsManagement'
import CompManagement from './components/CompManagement'
import FormManagement from './components/FormManagement'
import RefManagement from './components/RefManagement'
import Portal from './components/Portal'
import RenderProps from './components/RenderProps'
import UseStateHook from './components/UseStateHook'



function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/about' exact component = {About} />
          <Route path = '/Statemanagement' exact component = {Statemanagement} />
          <Route path = '/propsManagement' exact component = {propsManagement} />
          <Route path = '/CompManagement' exact component = {CompManagement} />
          <Route path = '/FormManagement' exact component = {FormManagement} />
          <Route path = '/RefManagement' exact component = {RefManagement} />
          <Route path = '/RenderProps' exact component = {RenderProps} />
          <Route path = '/UseStateHook' exact component = {UseStateHook} />
          <Route path = '/greet/:name' exact component = {Greet} />
        </Switch>
      </Router>
      <Portal />
    </div>
  );
}

export default App;
