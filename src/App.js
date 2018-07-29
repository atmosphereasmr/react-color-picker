import React, {Component} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import logo from './logo.svg';
import "./App.css"

const colors = require("./colorArray.js");
const darkColors = require("./darkColorArray.js");

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      dropdownOpen: false,
      color: "#a60303",
      menuTitle: "Red",
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

  render() {
    return (
      <div className="App no-active no-focus">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Reactstrap Color Selector</h1>
      </header>
      <div className="color-picker-container">
        <Dropdown style={{width: "350px", height: "50px", margin: "auto"}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
                    <div style={{backgroundColor: `${item.hex}`}} className={`color-box`} key={item.title} onClick={() => this.setState({color: item.hex, menuBorderColor: item.hex, menuTitle: item.title, menuTextColor: item.textColor})}>
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
                    <div style={{backgroundColor: `${item.hex}`}} className={`color-box`} key={item.title} onClick={() => this.setState({color: item.hex, menuBorderColor: item.hex, menuTitle: item.title, menuTextColor: item.textColor})}>
                      <span style={{backgroundColor: `${item.hex}`, color: `${item.textColor}`}} className={`tooltiptext`}>{item.title}</span>
                    </div> 
                  );
                })}
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <button onClick={() => window.location = "http://www.panthercode.com/react-color-selector"} style={{marginTop: "15px"}} className="btn btn-primary">
      Back to Panthercode
      </button>
      </div>
    );
  }
}