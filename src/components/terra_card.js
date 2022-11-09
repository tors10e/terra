import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function TerraCard(props) {
  return (
    <Card bg='light gray'>
      <Card.Body>
      <Card.Img variant="top" src={props.card_image} />
        <Card.Title>{props.card_title}</Card.Title>
        <Card.Text>{props.card_text}</Card.Text>
        <Button variant="primary" href={props.button_href}>{props.button_text}</Button>
      </Card.Body>
    </Card>
  );
}
