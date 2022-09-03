import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

const TopBar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">SBS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
          </Nav>
          <Button
            className="d-flex justify-content-end disabled"
            variant="outline-light"
          >
            Balance: {amount}
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
