import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { ACTION_ADD_TODO, ACTION_EDIT_TODO } from "../Redux/Actions/TodoAction";

const Inputfield = ({
  text,
  setText,
  edit,
  setEdit,
  indexOfEditable,
}) => {
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
          {edit ? (
            <Button
              className="outline-secondary text-light btn-dark text-capitalize"
              id="button-addon2"
              onClick={() =>
                dispatch(
                  ACTION_EDIT_TODO(text, indexOfEditable),
                  setText(""),
                  setEdit(false)
                )
              }
            >
              edit
            </Button>
          ) : (
            <Button
              className="outline-secondary text-light btn-dark text-capitalize"
              id="button-addon2"
              onClick={() => dispatch(ACTION_ADD_TODO(text), setText(""))}
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