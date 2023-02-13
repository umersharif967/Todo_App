import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAction, setEdit, setIndex, inputText, insertTodoAction } from '../store/actions/actionCreator';

const TodoTable = () => {
	const dispatch = useDispatch();
	const lists = useSelector((event) => {
		return (event.todoReducer.list);
	});
	const fetchData = useSelector((e) => {
		return (e.fetchReducer.fetchData);
	});
	lists.push(...fetchData);
	useEffect(() => {
		dispatch(insertTodoAction((fetchData)));

	}, []);

	// console.log(lists);
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
							{lists.map((todos, index) => {
								return (
									<tr key={todos.id}>
										<th>{index}</th>
										<td>{todos.title}</td>
										<td>
											<button className="border-0" onClick={() => { dispatch(setIndex(index)), dispatch(setEdit(true)), dispatch(inputText(todos.title)); }}>
												<i className="bi bi-pencil-square"></i>
											</button>
										</td>
										<td>
											<button className="border-0"
												onClick={() => dispatch(deleteTodoAction(index))}
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