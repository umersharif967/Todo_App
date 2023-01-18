import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import  { deleteTodoAction,editState }   from '../store/actions/actionCreator';

const TodoTable = ({ setText,setIndex_Of_Editable }) => {
	const dispatch = useDispatch();
	const lists = useSelector((event)=>{
		return (event.todoReducer.list);
	});
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
							{lists.map((TODOS,INDEX)=>{
								return (
									<tr key = {TODOS.id}>
										<th>{INDEX}</th>
										<td key = {TODOS.id}>{TODOS.data}</td>
										<td>
											<button className="border-0" onClick={()=>{setText(TODOS.data),setIndex_Of_Editable(INDEX),dispatch(editState(false));}}>
												<i className="bi bi-pencil-square"></i>
											</button>
										</td>
										<td>
											<button className="border-0" 
												onClick={()=>dispatch(deleteTodoAction(INDEX))}
											>
												<i className="bi bi-x-square"></i>
											</button>
										</td>
						   		</tr>);
							})}
						</tbody>
					</table>
				 )} 
				
			</div>
		</>
	);
};

export default TodoTable;