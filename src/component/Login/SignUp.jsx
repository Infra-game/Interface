import React, { Component } from 'react'
import LoginControl from "./LoginControle"


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUp: false,
      newUser: null
    }
  }


  NewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if(password1 === password2){
      if(username !== ""){
          if(password1 !=="")
        this.setState({
          isSignUp: true,
          newUser: {username: username, password: password1}
        });
        else {
            alert("Un mot de passe doit être défini")
        }
      }else{
        alert("Un nom d'utilisateur doit être défini")
      }
    }
    else{
      alert("Les mots de passe ne correspondent pas");
    }
  }


  render() {
    return (
      <div>
      {
        this.state.isSignUp ?
        <LoginControl newUser={this.state.newUser}/>
        :
        <div className="main_box--main--signUp">
          <input type="text" id="signUpUsername" className="form-control" placeholder="Nom d'utilisateur" autoComplete="false"></input>
          <input type="password" id="signUpPassword1" className="form-control" placeholder="Mot de passe" ></input>
          <input type="password" id="signUpPassword2" className="form-control" placeholder="Confirmez votre mot de" ></input>
          <button className="btn btn-success" onClick={this.NewUser}>SIGN UP</button>
        </div>  
      }
      </div>
    )
  }
}

export default Signup;