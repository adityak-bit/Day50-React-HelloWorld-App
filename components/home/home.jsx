import logo from "./logo.svg";
import "./home.css";
import React from "react";

class App extends React.Component{
  url="https://HelloWorld.com/";  
  constructor(){
      super()
      this.state={userName:"",nameError:""}
  }
  //onClick function
  onClick=($event)=>{
      console.log("save button is clicked!!",$event);
      window.open(this.url,"_blank");
  }
  onNameChange=(event)=>{
      console.log("value is ",event.target.value);
      const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
      //set the title using setState method
      if(nameRegex.test(event.target.value)){
          this.setState({nameError:""})
          this.setState({userName:event.target.value})
      }else{
          this.setState({nameError:"Name is Incorrect"})
      }
  }  
  render(){
      return <div className="app-main">
          <div className="main">
              <div>
                  <h1>Hello {this.state.userName} from BridgeLabz!</h1>
                  <img src={logo} onClick={this.onClick} alt="logo" />
              </div>
              <div className="text-box">
                  <input onChange={this.onNameChange} />
                  <span className="error-output">{this.state.nameError}</span>
              </div>
              <div>
                  <p>At BridgeLabz, we're a techie community of</p>
                  <ul>
                      <li>technologists</li>
                      <li>thinkers</li>
                      <li>builders</li>
                  </ul>
                  <p>Working together to keep the Tech Employability of Engineers alive and accesible.</p>
                  <p>To know about us, visit <a href="https://www.bridgelabz.com/"><i>BridgeLabz</i></a></p>
              </div>
          </div>
      </div>
  }
}

export default App;