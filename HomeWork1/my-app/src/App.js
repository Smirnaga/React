import React, { Component } from 'react'
import myPhoto from './myPhoto.jpg';
import './App.css';

export default class App extends Component  {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={myPhoto} className="App-logo" alt="logo" />
        <p>
        <h2>Hi, I'm <span>Kirill</span> . I start learning React. This is my first homework on this course. A little bit about yourself. I love sports, but  there is no time yet, since quarantine and children are at home) I like new technologies, films  and delicious food  =)</h2>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React   
        </a>
      </header>
    </div>
    )
  }
}
