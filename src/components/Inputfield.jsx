import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { ACTION_ADD_TODO} from "../Redux/Actions/TodoAction";

const Inputfield = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="container w-25 m-auto mt-5"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
          <Form.Control
            placeholder="Enter Title here..."
            name="title"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        <div className="ms-2 d-flex">
          <Button
            className="outline-secondary text-light btn-dark text-capitalize"
            id="button-addon2"
            onClick={() => dispatch(ACTION_ADD_TODO(text), setText(""))}
          >
            save
          </Button>
        </div>
      </div>
    </>
  );
};

export default Inputfield;