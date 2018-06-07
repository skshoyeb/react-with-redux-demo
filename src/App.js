import React, { Component } from 'react';
import InputBox from './components/InputBox.js';
import OutputBox from './components/OutputBox.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <InputBox />
                <OutputBox />
            </div>
        );
    }
}

export default App;
