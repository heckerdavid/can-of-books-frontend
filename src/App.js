import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks.js";
import Button from "react-bootstrap/Button";
import BookFormModal from "./BookFormModal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Profile from "./Profile.js";
import Login from "./Login.js";
import EditFormModal from "./EditForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showEditForm: false,
      editBookid: null,
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
    const deleteURL = "https://bookshelf301.herokuapp.com/books";
    await axios.delete(deleteURL + "/" + please._id);
    this.getBooks();
  };

  hideEdit = () => {
    this.setState({
      showEditForm: false,
    });
  };

  showEdit = async (book) => {
    this.setState({
      showEditForm: true,
      editBookid: book._id,
    });
  };

  getBooks = async () => {
    const booksURL = "https://bookshelf301.herokuapp.com/books";

    let booksResponse = await axios.get(booksURL);
    let bookData = booksResponse.data;
    this.setState({ books: bookData });
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.user ? (
                <>
                  <BestBooks
                    onEdit={this.handleEdit}
                    showEdit={this.showEdit}
                    onDelete={this.handleDelete}
                    getBooks={this.getBooks}
                    books={this.state.books}
                  />
                  <Button onClick={this.handleAddBookclick}>Add Book</Button>
                  {this.state.showBookForm && (
                    <BookFormModal
                      hideForm={this.hideForm}
                      getBooks={this.getBooks}
                      onEdit={this.handleEdit}
                    />
                  )}
                  {this.state.showEditForm && (
                    <EditFormModal
                      getBooks={this.getBooks}
                      hideForm={this.hideEdit}
                      user={this.state.user}
                      id={this.state.editBookid}
                    />
                  )}
                </>
              ) : (
                <Login loginHandler={this.loginHandler} />
              )}
            </Route>
            <Route path="/profile">
              <Profile user={this.state.user} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
