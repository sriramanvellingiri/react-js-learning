import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() { 
        return (
        <div>
        <p>Please choose click on the topics</p>
        <ul>
            <li><Link to="/Statemanagement">State management</Link></li>
        </ul>
        <ul>
            <li><Link to="/propsManagement">Props management</Link></li>
        </ul>
        <ul>
            <li><Link to="/FormManagement">Form management</Link></li>
        </ul>
        <ul>
            <li><Link to="/RefManagement">Reference management</Link></li>
        </ul>
        <ul>
            <li><Link to="/CompManagement">Component management</Link></li>
        </ul>
        <ul>
            <li><Link to="/RenderProps">Render Props</Link></li>
        </ul>
        <ul>
            <li><Link to="/UseStateHook">UseState</Link></li>
        </ul>
        </div>
        )
    }
}
 
export default Home;