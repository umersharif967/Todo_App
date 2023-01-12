import React from 'react';
import { useDispatch } from 'react-redux';
import  { deleteTodoAction }   from '../store/actions/actionCreator';

const TodoTable = ({ lists, setText,setIndex_Of_Editable }) => {
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
								// console.log(todos.data);
								return (
									<tr key = {todos.id}>
										<th>{index}</th>
										<td key = {todos.id}>{todos.data}</td>
										<td>
											<button className="border-0" onClick={()=>{setText(todos.data),setIndex_Of_Editable(index);}}>
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
