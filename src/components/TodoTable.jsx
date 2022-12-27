import React ,{useState}from 'react'
import { ACTION_DEL_TODO } from "../Redux/Actions/TodoAction";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoTable = () => {
  
  const lists = useSelector((event)=>{
    return event.TodoReducers.list;
  });
  const dispatche = useDispatch();
  const handleeditTodo = (index) => {
    const edit = lists.data.splice(index, 0);
    return edit;
  };
  return (
    <>
      <div className="container mt-5">
        {lists.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title: </th>
                <th>Edit </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {lists.map((list, index) => {
                console.log(lists);
                return (
                  <tr key={list.id}>
                    <td>{index}</td>
                    <td>{list.data}</td>
                    <td>
                      <button
                        className="border-0 bg-light"
                        onClick={handleeditTodo(index)}
                      >
                        <EditIcon />
                      </button>
                    </td>
                    <td>
                      <button
                        className="border-0 bg-light"
                        onClick={() => dispatche(ACTION_DEL_TODO(index))}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TodoTable
