// import { Component } from 'react'
import Button from 'react-bootstrap/Button'
// import LoginForm from './LoginForm.js'

// import { withAuth0 } from '@auth0/auth0-react';

// class LoginButton extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       showLogin: false
//     }
//   }


//   handleLogin = () => {
//     this.setState({
//       showLogin: true
//     })
//   }
//   render() {
//     const {
//       isAuthenticated,
//       loginWithRedirect,
//     } = useAuth0();


//     return (
//       <>
//         {/* {this.state.showLogin ? (
//           <LoginForm loginHandler={this.props.loginHandler}/>
//         ) : (
//           <Button onClick={this.handleLogin}>Login</Button>
//         )} */}

//         {!isAuthenticated && (
//           <Button onClick={loginWithRedirect}>Log in</Button>
//         )}
//       </>
//     )
//   }
// }
// export default withAuth0(LoginButton);
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return (
    <Button onClick={loginWithRedirect}>Log in</Button>
  );
}

export default LoginButton;
