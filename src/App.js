import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <p><span>用户名：</span><input placeholder={"请输入用户名"}/></p>
            <p><span>密&nbsp;&nbsp;码：</span><input placeholder={"请输入密码"}/></p>
            <button>确定</button>
        </div>
      </div>
    );
  }
}

export default App;
