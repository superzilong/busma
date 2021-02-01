import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getProductList } from "../store/entities";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CreatePurchaseOrder() {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const [vendorName, setVendorName] = useState("");
  // const [vendorAddress, setVendorAddress] = useState("");
  const [vendorId, setVendorId] = useState(9);
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const productList = useSelector((state) => state.entities.products);

  return (
    <div
      style={{ width: "600px" }}
      className="bg-light mx-auto py-5 rounded mt-5"
    >
      <h1 className="text-center mb-5">Create Purchase Order</h1>
      <Form style={{ width: "350px" }} className="mx-auto">
        <Form.Group controlId="vendor">
          <Form.Label>Vendor</Form.Label>
          <Form.Control
            as="select"
            value={vendorId}
            onChange={(e) => {
              setVendorId(e.target.value);
            }}
            custom
          >
            {productList.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          className="w-100"
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
