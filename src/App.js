import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  const addTitle = (event) => {
    setText(event.target.value);
  };
  const addBody = (event) => {
    setText2(event.target.value);
  };
  const addText = () => {
    setTitle([...title, text]);
    setBody([...body, text2]);
    setText("");
    setText2("");
  };
  return (
    <>
      <h1 className="text-center text-danger">Updated ToDo</h1>
      <InputGroup className=" w-25 m-auto" type="text">
        <Form.Control
          placeholder="Enter Title here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="text"
          value={text}
          onChange={addTitle}
        />
        <Form.Control
          placeholder="Enter Body here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="text"
          value={text2}
          onChange={addBody}
        />
        <Button
          variant="outline-secondary text-light btn-dark text-capitalize"
          id="button-addon2"
          onClick={addText}
        >
          save
        </Button>
      </InputGroup>
      <div className="d-flex text-center justify-content-around">
        <p className="text-center mt-5 text-black">Title: {title}</p>
        <p className="text-center mt-5 text-black ">Body: {body}</p>
      </div>
    </>
  );
}

export default App;
