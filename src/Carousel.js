import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
// import axios from "axios";

export default class BookCarousel extends React.Component {
  render() {
    return (
      <Carousel className="w-50">
        {this.props.books.map((book) => (
          <Carousel.Item key={book._id}>
            <Book
              key={book._id}
              info={book}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
              showEdit={this.props.showEdit}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

class Book extends React.Component {
  handleDelete = () => this.props.onDelete(this.props.info);
  handleEdit = () => this.props.showEdit(this.props.info);

  render() {
    return (
      <>
        <img
          className="d-block w-100 h-50"
          src="https://place-hold.it/200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.info.title}</h3>
          <p>{this.props.info.description}</p>
          <Button onClick={this.handleDelete}>DELETE</Button>
          <Button onClick={this.handleEdit}>EDIT</Button>
        </Carousel.Caption>
      </>
    );
  }
}
