import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Shop = () => {
  return (
    <>
      <h3 className="text-center my-5">Withdraw/Deposit Amount</h3>
      <Container className="d-flex justify-content-center align-items-center my-3">
        <Button variant="outline-dark" className="mx-2">
          -
        </Button>
        Update Balance
        <Button variant="outline-dark" className="mx-2">
          +
        </Button>
      </Container>
    </>
  );
};

export default Shop;
