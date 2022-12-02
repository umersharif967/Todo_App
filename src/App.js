// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";

// function App() {
//   const [text, setText] = useState({
//     title: "",
//     // body: "",
//   });
//   const [todo, setTodo] = useState([]);
//   const [indexxx, setIndexxx] = useState("");
//   const [change, setChange] = useState(false);
//   // const [dataa, setDataa] = useState("");

//   // axios

//   useEffect(() => {
//     try {
//       getData();
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   const getData = async () => {
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
//     setTodo(res.data);
//     // console.log(res.data);
//   };
//   const handleChange = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setText({ ...text, [name]: value });
//   };
//   const addText = (e) => {
//     e.preventDefault();
//     if (
//       text.title === ""
//       // || text.body === ""
//     ) {
//       alert("Please enter a title and body of Todo");
//     } else {
//       setTodo([...todo, text]);
//       setText({ title: "", body: "" });
//     }
//   };
//   const editText = () => {
//     const edits = [...todo];
//     edits.splice(indexxx, 1, text);
//     setTodo(edits);
//     setText({ title: "", body: "" });
//     setChange(false);
//   };
//   const deleteOnClick = (index) => {
//     // var deleteData = axios.delete(`https://jsonplaceholder.typicode.com/todos/`);
//     // setTodo(deleteData);
//      deleteData = [...todo];
//     deleteData.splice(index, 1);
//     setTodo(deleteData);
//   };
//   const editOnClick = (index) => {
//     const edited = todo.at(index);
//     setText(edited);
//     setIndexxx(index);
//     setChange(true);
//   };
//   return (
//     <>
//       <h1 className="text-center text-danger">Updated ToDo</h1>
//       <div className=" w-25 m-auto" type="text">
//         <Form.Control
//           className="mt-3"
//           placeholder="Enter Title here..."
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//           name="title"
//           value={text.title}
//           onChange={handleChange}
//         />
//         {/* <Form.Control
//           className="mt-3 w-auto"
//           placeholder="Enter Body here..."
//           aria-label="Recipient's username"
//           aria-describedby="basic-addon2"
//           name="body"
//           value={text.body}
//           onChange={handleChange}
//         /> */}
//         <div>
//           {change ? (
//             <Button
//               variant="outline-secondary text-light btn-dark mt-2 text-capitalize"
//               id="button-addon2"
//               onClick={editText}
//             >
//               Edit
//             </Button>
//           ) : (
//             <Button
//               variant="outline-secondary text-light btn-dark mt-2 text-capitalize"
//               id="button-addon2"
//               onClick={addText}
//             >
//               save
//             </Button>
//           )}
//         </div>
//         {todo.length > 0 && (
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Id#</th>
//                 <th>Title: </th>
//                 {/* <th>Body:</th> */}
//                 <th>Edit </th>
//                 <th>Delete </th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* {console.log(todo)} */}
//               {todo.map((elem, index) => (
//                 <>
//                   <tr key={index}>
//                     <th>{index + 1}</th>
//                     <td>{elem.title}</td>
//                     {/* <td>{elem.body}</td> */}
//                     <td>
//                       <button
//                         onClick={() => editOnClick(index)}
//                         className="border-0"
//                       >
//                         <i className="bi bi-pencil-square"></i>
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         onClick={() => deleteOnClick(index)}
//                         className="border-0"
//                       >
//                         <i className="bi bi-x-square"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 </>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
