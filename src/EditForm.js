import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class EditFormModal extends React.Component {

  handleSubmit = async (event) => {
    event.preventDefault();
    const bookInfo = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: event.target.email.value
    }
    this.props.hideForm();
    const booURL = "http://localhost:3001/books";
    const newBookData = await axios.put(booURL, bookInfo);
    
    this.props.getBooks();
  }
  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="title" placeholder="Title of the book"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="description" placeholder="description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control type="status" placeholder="status"/>
        </Form.Group>

        <Button variant="primary" type="submit" >
          Edit
        </Button>
      </Form>
    )
  }

}