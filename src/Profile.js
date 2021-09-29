import { Component } from "react";

export default class Profile extends Component {
  render() {
   
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    
    if(this.props.user){return (<>
      <h1>Username: {this.props.user.userName}</h1>
      <h1>Email: {this.props.user.email}</h1>
    </>
    )
    }else{
      return(
        <h1>Please Login</h1>
      )
    }
  };
}
