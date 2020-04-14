import React from "react";

interface myLoginProps {}

interface myLoginState {
  userName: string;
  password: string;
  logged: boolean;
}

export default class Loginpage extends React.Component< myLoginProps, myLoginState> {
  constructor(props: myLoginProps) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      logged: false
      
    };
  }

  updateLogin = (event: any) => {
    event.preventDefault();

    let userNameString: string, passwordString: string;

    const userName: HTMLInputElement | any = document.querySelector(
      '[name="user-name"]'
    );
    const password: HTMLInputElement | any = document.querySelector(
      '[name="password"]'
    );

    if (userName === "Taiwo"){ userNameString = userName.value;
    } else {
    userNameString = "incorrect";
    console.log(userName);
  }
    
    if (password === "taiwo1234"){ passwordString = password.value;
    }else {
    passwordString = "invalid";
    console.log(password)
  }
  
  this.setState({
      userName: userNameString,
      password: passwordString,
      logged: this.state.logged,
    });
  }

    loggedin = () => {
      this.setState({
        userName: this.state.userName,
        password: this.state.password,
        logged: !this.state.logged // Switch boolean to the opposite (!)
      });
    };

  Login = () => {
    return (
        <div>
            <form onSubmit={this.updateLogin}>
                  <label htmlFor="user-name">User Name:</label>
                <input type="text" name="first-name" defaultValue={this.state.userName} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" defaultValue={this.state.password} />
                <input type="submit"  value="SignIn" />
                </form>
            <button onClick={this.loggedin}>
              Login
             </button>
        </div>
    );
}

Logout = () => {
  return (
      <div>
          <form onSubmit={this.updateLogin}>             
              <label htmlFor="user-name">User Name:</label>
              <input type="text" name="user-name" defaultValue={this.state.userName} />
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" defaultValue={this.state.password} />
              <input type="submit"  value="SignOut" />
                
               </form>
          <button onClick={this.loggedin}>
                   Logout
           </button>
           
      </div>
  );
}

render () {
  if ( this.state.logged )
      return this.Login();
  else
      return this.Logout();
}
}