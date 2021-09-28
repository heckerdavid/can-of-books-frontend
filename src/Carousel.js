import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default class BookCarousel extends React.Component {
  render() {
    return (
      <Carousel>
        {this.props.books.map((book) => (
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://place-hold.it/200"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
