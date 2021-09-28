import axios from "axios";
import React from "react";
import BookCarousel from './Carousel.js';
import Carousel from 'react-bootstrap/Carousel';
require("dotenv").config();

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    const booksURL = "http://localhost:3001/books";

    let booksResponse = await axios.get(booksURL);
    let bookData = booksResponse.data;
    this.setState({ books: bookData });
    console.log("book data" + booksResponse.data[0].title);
  };

  render() {
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2 onClick={this.getBooks}>
          My Essential Lifelong Learning &amp; Formation Shelf
        </h2>

        {this.state.books[0] ? (

          <BookCarousel books={this.state.books} />

        ) : (
          <h3>No Books Found</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
