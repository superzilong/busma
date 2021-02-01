import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createVendor } from "../store/entities";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function CreateVendor() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [vendorName, setVendorName] = useState("");
  const [vendorAddress, setVendorAddress] = useState("");
  const [vendorPhoneNumber, setVendorPhoneNumber] = useState("");
  return (
    <div
      style={{ width: "400px" }}
      className="bg-light mx-auto py-5 rounded mt-5"
    >
      <h1 className="text-center mb-5">Create Vendor</h1>
      <Form style={{ width: "350px" }} className="mx-auto">
        <Form.Group controlId="vendorName">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vendor name"
            value={vendorName}
            onChange={(e) => {
              setVendorName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="vendorAddress">
          <Form.Label>Vendor Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vendor address"
            value={vendorAddress}
            onChange={(e) => {
              setVendorAddress(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="vendorPhoneNumber">
          <Form.Label>Vendor phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter vendor phone number"
            value={vendorPhoneNumber}
            onChange={(e) => {
              setVendorPhoneNumber(e.target.value);
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
              createVendor({
                name: vendorName,
                address: vendorAddress,
                phoneNumber: parseInt(vendorPhoneNumber, 10),
              })
            ).then((data) => {
              console.log(data);
              history.push("/success");
            });
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
