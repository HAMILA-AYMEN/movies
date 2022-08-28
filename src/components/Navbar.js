import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';



function BasicExample(props) {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Medi@Land</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              className='form-control'
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              placeholder='Type to search...'
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default BasicExample;