import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            fontSize: 13
        }
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this);
    }

    setColor = (param) => {
        this.setState({
            color: param
        })
    }

    onChangeSize(value){
        this.setState({
            fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize +value : this.state.fontSize
        })
    }

    onSettingDefault(abc){
        if(abc){
            this.setState({
                color: 'red',
                fontSize: 12
            })
        }
    }

  render() {
    return (
      <div className= "container">
          <div id="root">
              <div className="container mt-50">
                  <div className="row">
                      <ColorPicker mau={ this.state.color } onReviceColor={ this.setColor}/>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <SizeSetting fontSize={ this.state.fontSize} onChangeSize={ this.onChangeSize}/>
                          <Reset onSettingDefault={ this.onSettingDefault} />
                      </div>
                      <Result olor={ this.state.color} ontSize={ this.state.fontSize}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
