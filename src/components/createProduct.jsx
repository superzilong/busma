import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createProduct } from "../store/entities";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [productName, setProductName] = useState("");
  const [productUnit, setProductUnit] = useState("");
  return (
    <div
      style={{ width: "400px" }}
      className="bg-light mx-auto py-5 rounded mt-5"
    >
      <h1 className="text-center mb-5">Create Product</h1>
      <Form style={{ width: "350px" }} className="mx-auto">
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="productUnit">
          <Form.Label>Product Unit</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product unit"
            value={productUnit}
            onChange={(e) => {
              setProductUnit(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          className="w-100"
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              createProduct({ name: productName, unit: productUnit })
            ).then(() => history.push("/success"));
            //   .catch((error) => {
            //     console.log(error);
            //     toast.error(error.message);
            //   });
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
