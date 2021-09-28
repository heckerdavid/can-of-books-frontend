import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  handleAddBookclick =()=>{
    this.setState({
      showBookForm: true
    });
  }
  hideForm = ()=>{
    this.setState({
      showBookForm: false
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks />
              <Button onClick = {this.handleAddBookclick}>Add Book</Button>
           {this.state.showBookForm && <BookFormModal
            hideForm={this.hideForm} />}
            </Route>
            <Route path="/profile">
              <h1>hi from profile</h1>
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
