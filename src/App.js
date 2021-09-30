import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Profile from './Profile.js';
import Login from './Login.js';
import EditFormModal from './EditForm';
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
      showEditForm: false
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  handleAddBookclick = () => {
    this.setState({
      showBookForm: true,
    });
  };

  hideForm = () => {
    this.setState({
      showBookForm: false,
    });
  };

  handleDelete = async (please) => {
    console.log(please);

    const deleteURL = "http://localhost:3001/books";
    await axios.delete(deleteURL + "/" + please._id);
    this.getBooks();
  };

  handleEdit = async () => {
    this.setState({
      showEditForm: true
    })
    // const editURL = "http://localhost:3001/books";
    // await axios.put(editURL + "/" + please._id);
    // this.getBooks();
  };

  getBooks = async () => {
    const booksURL = "http://localhost:3001/books";

    let booksResponse = await axios.get(booksURL);
    let bookData = booksResponse.data;
    this.setState({ books: bookData });
    console.log("book data" + booksResponse.data[0].title);
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? (
                <>
                  <BestBooks onEdit={this.handleEdit} onDelete={this.handleDelete} getBooks={this.getBooks} books={this.state.books} />
                  <Button onClick={this.handleAddBookclick}>Add Book</Button>
                  {this.state.showBookForm && (
                    <BookFormModal hideForm={this.hideForm} getBooks={this.getBooks} />
                  )}
                  {this.state.showEditForm && 
                    <EditFormModal getBooks={this.getBooks} hideForm={this.handleEdit}/>
                  }
                </>
              ) : (
                <Login loginHandler={this.loginHandler}/>
              )
              }
            </Route>
            <Route path="/profile">
             <Profile user={this.state.user}/>
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
