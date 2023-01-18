import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from 'react-redux';
import { insertTodoAction,updateTodoAction,editState }  from '../store/actions/actionCreator';
const Inputfield = ({ text,setText,index_Of_Editable }) => {
	const dispatch = useDispatch();
	const EDITSTATE = useSelector((event)=>{
		return (event.stateReducer.edit);
	});
	const Updated = () => {
		dispatch(updateTodoAction(index_Of_Editable,text));
		dispatch(editState(true));
	};
	return (
		<>
			<div className="container w-25 m-auto mt-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Form.Control
					placeholder="Enter Title here..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					name="title"
					value={text} 
					onChange={(e) => setText(e.target.value)}
				/>
				{EDITSTATE ? (
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
				 onClick={Updated}>
				update
					</Button>
				</div>)}
			</div>
		</>
	);
};

export default Inputfield;