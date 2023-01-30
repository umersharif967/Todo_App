import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import  { deleteTodoAction,editState,setIndex }   from '../store/actions/actionCreator';

const TodoTable = ({ setText }) => {
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
							{lists.map((todos,index)=>{
								return (
									<tr key = {todos.id}>
										<th>{index}</th>
										<td key = {todos.id}>{todos.data}</td>
										<td>
											<button className="border-0" onClick={()=>{setText(todos.data),dispatch(editState(false)),dispatch(setIndex(index));}}>
												<i className="bi bi-pencil-square"></i>
											</button>
										</td>
										<td>
											<button className="border-0" 
												onClick={()=>dispatch(deleteTodoAction(index))}
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