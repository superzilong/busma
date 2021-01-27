import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Create() {
  const history = useHistory();
  const [formType, setFormType] = useState("product");
  function handleClickCreateButton(e) {
    e.preventDefault();
    history.push("/" + formType + "/new");
  }

  return (
    <div
      className="mx-auto mt-5 p-5 bg-light rounded"
      style={{ width: "400px" }}
    >
      <h1 className="mb-5">Begin to create...</h1>
      <Form className="">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Form type select</Form.Label>
          <Form.Control
            as="select"
            value={formType}
            onChange={(e) => setFormType(e.target.value)}
            custom
          >
            <option value="product">product</option>
            <option value="customer">customer</option>
            <option value="purchaseOrder">purchase order</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" onClick={handleClickCreateButton}>
          Create
        </Button>
      </Form>
    </div>
  );
}
