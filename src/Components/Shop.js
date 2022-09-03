import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const balance = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      <h3 className="text-center my-5">Withdraw/Deposit Amount</h3>
      <Container className="d-flex justify-content-center align-items-center my-3">
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => withdrawMoney(100)}
        >
          -
        </Button>
        Update Balance ({balance})
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => depositMoney(100)}
        >
          +
        </Button>
        {/* Without bindActionCreators */}
        {/* <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            dispatch(actionCreators.withdrawMoney(100));
          }}
        >
          -
        </Button>
        Update Balance
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            dispatch(actionCreators.depositMoney(100));
          }}
        >
          +
        </Button> */}
      </Container>
    </>
  );
};

export default Shop;
