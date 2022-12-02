import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export function MainPage() {

  const [text, setText] = useState({
    title: "",
  });
  const [todo, setTodo] = useState([]);
  const [indexxx, setIndexxx] = useState("");
  const [change, setChange] = useState(false);


  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setText({ text, [name]: value });
  };

  const addText = (e) => {
    e.preventDefault();
    if (text.title === "" || text.body === "") {
      alert("Please enter a title ");
    } else {
      setTodo([...todo, text]);
      setText({ title: "", body: "" });
    }
  };
  const editText = () => {
    const edits = [...todo];
    edits.splice(indexxx, 1, text);
    setTodo(edits);
    setText({ title: "", body: "" });
    setChange(false);
  };
  const deleteOnClick = (index) => {
    const deleted = [...todo];
    deleted.splice(index, 1);
    setTodo(deleted);
  };
  const editOnClick = (index) => {
    const edited = todo.at(index);
    setText(edited);
    setIndexxx(index);
    setChange(true);
  };
  return (
    <div className="container">
      <h1 className="text-center text-danger mt-3">Updated ToDo</h1>
      {/* <h1 className="text-center text-danger mt-3">Make your code clean and use relavent variable names</h1>
      <h1 className="text-center text-danger mt-3">follow this type of structure</h1> */}
      <div className="container w-25 m-auto mt-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Form.Control
          placeholder="Enter Title here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="title"
          value={text.title}
          onChange={handleChange}
        />
        <div className="ms-2">
          {change ? (
            <Button
              variant="outline-secondary text-light btn-dark text-capitalize"
              id="button-addon2"
              onClick={editText}>
              Edit
            </Button>
          ) : (
            <Button
              variant="outline-secondary text-light btn-dark text-capitalize"
              id="button-addon2"
              onClick={addText}
            >
              save
            </Button>
          )}
        </div>
      </div>
      <div className="container mt-5">
        {todo.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title: </th>
                {/* <th>Body:</th> */}
                <th>Edit </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {todo.map((elem, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{elem.title}</td>
                  <td>
                    <button
                      onClick={() => editOnClick(index)}
                      className="border-0"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteOnClick(index)}
                      className="border-0"
                    >
                      <i className="bi bi-x-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

