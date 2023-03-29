import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Mynav() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand Link to="/">LOGIN/SIGNUP FIREBASE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='nav-link' to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/signup">SignUp</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/login">Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
