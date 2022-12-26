import React from 'react'
import { ACTION_DEL_TODO } from "../Redux/Actions/TodoAction";
import { useDispatch, useSelector } from "react-redux";

const TodoTable = ({}) => {
  const lists = useSelector((event)=>{
    return event.TodoReducers.list;
  });
  const dispatch = useDispatch();
  console.log(lists);
  return (
    <>
      <div className="container mt-5">
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
              return (
                <tr key={index}>
                  <td>{list.index}</td>
                  <td>{list.data}</td>
                  <td>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-delete-left"
                      onClick={() => dispatch(ACTION_DEL_TODO(index))}
                    ></i>
                  </td>
                </tr>
              );
            }
              
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoTable
