import React,{useState}from "react";
import Inputfield from "../components/Inputfield";
import TodoTable from "../components/TodoTable";


const MainPage = () => {
   const [text, setText] = useState();
   const [edit,setEdit]= useState(false);
   const[indexOfEditable,setIndexOfEditable] = useState("")
   
  return (
    <div className="container">
      <h1 className="text-center text-danger mt-3"> Todo</h1>
      <Inputfield
        text={text}
        setText={setText}
        setEdit={setEdit}
        edit={edit}
        // setIndexOfEditable={setIndexOfEditable}
        indexOfEditable={indexOfEditable}
      />
      <div className="container mt-4">
        <TodoTable
          setText={setText}
          setEdit={setEdit}
          indexOfEditable={indexOfEditable}
          setIndexOfEditable={setIndexOfEditable}
        />
      </div>
    </div>
  );
}
export default MainPage;