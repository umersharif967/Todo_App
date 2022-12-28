import React from "react";
import Inputfield from "../components/Inputfield";
import TodoTable from "../components/TodoTable";
// import { useSelector } from "react-redux";


const MainPage = () => {
   const ACTION_EDIT_TODO = ()=>{
    return
   }
  return (
    <div className="container">
      <h1 className="text-center text-danger mt-3"> Todo</h1>
      <Inputfield ACTION_EDIT_TODO={ACTION_EDIT_TODO()} />
      <div className="container mt-5">
        <TodoTable ACTION_EDIT_TODO={ACTION_EDIT_TODO()} />
      </div>
    </div>
  );
}
export default MainPage;