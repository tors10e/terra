import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TerraCard(props) {
  return (
    <Card bg='secondary'>
      <Card.Body>
        <Card.Title>{props.card_title}</Card.Title>
        <Card.Text>{props.card_text}</Card.Text>
        <Button variant="primary" href={props.button_href}>{props.button_text}</Button>
      </Card.Body>
    </Card>
  );
}

export default TerraCard;