import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from 'react-redux';
import { insertTodoAction,updateTodoAction,editState }  from '../store/actions/actionCreator';
const Inputfield = ({ setText,text }) => {
	const dispatch = useDispatch();
	const editStates = useSelector((event)=>{
		return (event.stateReducer.edit);
	});
	const setIndexes = useSelector((event)=>{
		return (event.stateReducer.index);
	});
	// const text = useSelector((event)=>{
	// 	return(event.stateReducer.text);
	// });
	const Updated = () => {
		dispatch(updateTodoAction(setIndexes,text),setText(''));
		dispatch(editState(true));
	};
	// const todo = (e) =>{
	// 	let todos = e.target.value;
	// 	setText(todos);
	// };
	// console.log(text);
	return (
		<>
			<div className="container w-25 m-auto mt-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Form.Control
					placeholder="Enter Title here..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					name="title"
					value={text} 
					onChange={(e)=>{setText(e.target.value);}}
				/>
				{editStates ? (
					<div className="ms-2">
						<Button
							variant="outline-secondary text-light btn-dark text-capitalize"
						 	onClick={()=>{dispatch(insertTodoAction(text),setText(''));} } 
						>
            save
						</Button>
					</div>
				):(	<div className="ms-2">
					<Button
						variant="outline-secondary text-light btn-dark text-capitalize"
						 onClick={Updated}
				 >
				update
					</Button>
				</div>)}
			</div>
		</>
	);
};

export default Inputfield;