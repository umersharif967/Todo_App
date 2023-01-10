import React from 'react';
import { useDispatch } from 'react-redux';
import  deleteTodoAction   from '../../store/actions/actionCreator';
// import { useSelector } from 'react-redux';

const TodoTable = ({ lists }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="container mt-5">
				{lists.length > 0 &&(
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
							{lists.map((todos,index)=>{
								return (<tr key={todos.id}>
							   <th>{index}</th>
								 <td>{todos.data}</td>
							   <td>
								  <button className="border-0">
									 <i className="bi bi-pencil-square"></i>
								  </button>
							   </td>
							  <td>
								 <button className="border-0" onClick={()=>dispatch(deleteTodoAction(index))}>
									 <i className="bi bi-x-square"></i>
								 </button>
							  </td>
						   </tr>)
								;})}
						</tbody>
					</table>
				)}
				
			</div>
		</>
	);
};

export default TodoTable;
