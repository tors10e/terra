import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function TerraCard(props) {
  return (
    <Card style={{width: '36rem'}}>
      <Card.Body>
        <Card.Img variant="top" src={props.card_image} />
        <Card.Title>{props.card_title}</Card.Title>
        <Card.Text>{props.card_text}</Card.Text>
        <Button variant={props.button_variant} href={props.button_href}>{props.button_text}</Button>
      </Card.Body>
    </Card>
  );
}
