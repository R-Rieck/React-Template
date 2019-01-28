import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Styles/style.scss'

class App extends React.Component{
    render(){
        return (
            <div>
                <h2>This is a React Template</h2>
                <br/>
                <p>Included Packages:</p>
                <ul>
                    <li>Yarn</li>
                    <li>Babel</li>
                    <li>Validator</li>
                    <li>Webpack</li>
                    <li>URL-Loader</li>
                    <li>Style-Loader</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))