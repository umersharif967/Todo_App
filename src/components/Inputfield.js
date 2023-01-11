import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { insertTodoAction,updateTodoAction }  from '../store/actions/actionCreator';

const Inputfield = ({ text,setText,index_Of_Editable }) => {
	const dispatch = useDispatch();
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
				<div className="ms-2">
					<Button
						variant="outline-secondary text-light btn-dark text-capitalize"
						id="button-addon2"
						 onClick={()=>dispatch(insertTodoAction(text),setText('')) } 
						 >
            save
					</Button>
					<Button
						variant="outline-secondary text-light btn-dark text-capitalize"
						id="button-addon2"
						 onClick={()=>dispatch(updateTodoAction(text,index_Of_Editable),setText('')) } 
						 >
            edit
					</Button>	
				</div>
			</div>
		</>
	);
};

export default Inputfield;