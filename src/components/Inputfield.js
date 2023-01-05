import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Inputfield = (props) => {
  console.log('dsd');
  return (
    <>
      <div className="container w-25 m-auto mt-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Form.Control
          placeholder="Enter Title here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2" zxccv
          name="title"
          value={props.text.title}
          onChange={props.handleChange}
        />
        <div className="ms-2">
          {props.change ? (
            <Button
              variant="outline-secondary text-light btn-dark text-capitalize"
              id="button-addon2"
              onClick={props.editText}>
              Edit
            </Button>
          ) : (
            <Button
              variant="outline-secondary text-light btn-dark text-capitalize"
              id="button-addon2"
              onClick={props.addText}
            >
              save
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Inputfield;