import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name_first" placeholder="First Name *" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name_last" placeholder="Last Name *" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone" placeholder="Phone Number" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
      </Form.Group>

       <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}




export default ContactForm;