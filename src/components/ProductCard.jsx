import { Card, Button, Form, Row, Col} from 'react-bootstrap'

const ProductCard = (props) => {   //props.product is the product we have in our data
    const product = props.product
  return (
    <Card>
      <Card.Body>
        <Card.Title>
        {product.name}
        </Card.Title>
        <Card.Title>
        Rs.{product.price}
        </Card.Title>
        <Button variant='primary'>
            Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
