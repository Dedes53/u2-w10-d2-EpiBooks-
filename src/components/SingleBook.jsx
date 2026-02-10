import { Card } from 'react-bootstrap'

const SingleBook = (props) => {


  return (
    <>
      <Card
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          boxShadow:
            props.selectedBook === props.book.asin
              ? '0 0 10px yellow'
              : 'none',
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
