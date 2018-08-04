import React, { Component } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import logo from './logo.svg';
import "./App.css"

const colors = require("./colorArray.js");
const darkColors = require("./darkColorArray.js");

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      color: "#ff69b4",
      menuTitle: "Pink",
      menuTextColor: "white",
      colors: colors,
      darkColors: darkColors
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  componentDidUpdate() {
    const flag = document.getElementById("flag")
    flag.style = `background: linear-gradient(to right, transparent, ${this.state.color}, transparent)`
  }

  render() {
    return (



      // <ButtonDropdown style={{marginTop: "100px", marginLeft: "100px"}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      //   <DropdownToggle caret>
      //     Color Selector
      //   </DropdownToggle>
      //   <DropdownMenu>
      //     <DropdownItem header>
      //       Select a color
      //     </DropdownItem>
      //     <DropdownItem>
      //       ...
      //     </DropdownItem>
//       //     <DropdownItem>
//       //       ...
//       //     </DropdownItem>
//       //   </DropdownMenu>
//       // </ButtonDropdown>


// <div>


// <div 
//   style={{backgroundColor: "red"}}
//   className={`color-box`} 
//   key="red" 
//   onClick={() => 
//   this.setState({color: "red", menuBorderColor: "red", menuTitle: "Red", menuTextColor: "White"})}
// >
// <span style={{backgroundColor: "red", color: "white"}} className={`tooltiptext`}>
// Red
// </span>
// </div>
// <div 
//   style={{backgroundColor: "blue"}}
//   className={`color-box`} 
//   key="blue" 
//   onClick={() => 
//   this.setState({color: "blue", menuBorderColor: "blue", menuTitle: "Blue", menuTextColor: "White"})}
// >
// <span style={{backgroundColor: "blue", color: "white"}} className={`tooltiptext`}>
// Blue
// </span>
// </div> 
// <div 
//   style={{backgroundColor: "green"}}
//   className={`color-box`} 
//   key="green" 
//   onClick={() 
//   => this.setState({color: "green", menuBorderColor: "green", menuTitle: "Green", menuTextColor: "White"})}
// >
// <span style={{backgroundColor: "green", color: "white"}} className={`tooltiptext`}>
// Green
// </span>
// </div> 
// <div 
//   style={{backgroundColor: "yellow"}}
//   className={`color-box`} 
//   key="yellow" 
//   onClick={() => 
//   this.setState({color: "yellow", menuBorderColor: "yellow", menuTitle: "Yellow", menuTextColor: "White"})}
// >
// <span style={{backgroundColor: "yellow", color: "white"}} className={`tooltiptext`}>
// Yellow
// </span>
// </div> 

// </div>









              // <DropdownItem className="no-hover">
              // <div className="color-holder">
              //   {this.state.colors.map(item => {
              //     return (
              //       <div style={{
              //         backgroundColor: `${item.hex}`}} 
              //         className={`color-box`} key={item.title} 
              //         onClick={() => this.setState({
              //           color: item.hex, 
              //           menuBorderColor: item.hex, 
              //           menuTitle: item.title, menuTextColor: 
              //           item.textColor})}>
              //         <span style={{
              //           backgroundColor: `${item.hex}`, 
              //           color: `${item.textColor}`}} 
              //           className={`tooltiptext`}>{item.title}</span>
              //       </div> 
              //     );
              //   })}
              // </div>
              // </DropdownItem>


      <div className="App no-active no-focus">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Color Selector</h1>
      </header>
      <div className="color-picker-container">
      
      <div className="color-flag" style={{background: `linear-gradient(to right, #${this.state.color1}, ${this.state.color2}, #${this.state.color3})`}} id="flag">
      Hello world!
      </div>

        <ButtonDropdown style={{width: "350px", height: "50px", margin: "auto"}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle style={{backgroundColor: this.state.color, color: this.state.menuTextColor, width: "100%", marginTop: "5px"}} className="btn btn-primary" caret>
            {this.state.menuTitle}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select a color</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem className="no-hover">
              <div className="color-holder">
                {this.state.colors.map(item => {
                  return (
                    <div style={{backgroundColor: `${item.hex}`}} className={`color-box`} key={item.title} onClick={() => this.setState({color: item.hex, color1: item.hex, menuBorderColor: item.hex, menuTitle: item.title, menuTextColor: item.textColor})}>
                      <span style={{backgroundColor: `${item.hex}`, color: `${item.textColor}`}} className={`tooltiptext`}>{item.title}</span>
                    </div> 
                  );
                })}
              </div>
              </DropdownItem>
              <DropdownItem divider/>
              <DropdownItem className="no-hover">
              <div className="color-holder">
                {this.state.darkColors.map(item => {
                  return (
                    <div style={{backgroundColor: `${item.hex}`}} className={`color-box`} key={item.title} onClick={() => this.setState({color: item.hex, color1: item.hex, menuBorderColor: item.hex, menuTitle: item.title, menuTextColor: item.textColor})}>
                      <span style={{backgroundColor: `${item.hex}`, color: `${item.textColor}`}} className={`tooltiptext`}>{item.title}</span>
                    </div> 
                  );
                })}
              </div>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        
      </div>
      <button onClick={() => window.location = "http://www.panthercode.com/react-color-selector"} style={{marginTop: "15px"}} className="btn btn-primary">
      Back to Panthercode
      </button>
      </div>
    );
  }
}