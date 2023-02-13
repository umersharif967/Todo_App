import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { insertTodoAction, updateTodoAction, setEdit, inputText } from '../store/actions/actionCreator';
const Inputfield = () => {
	const getInputData = useRef();
	const dispatch = useDispatch();
	

	const text = useSelector((state) => state.stateReducer.text);
	const edit = useSelector( (e) => {
		return (e.stateReducer.edit);
	});

	let index = useSelector((e) => {
		return (e.stateReducer.index);
	});

	const getInputValue = (e) => {
		dispatch(inputText(e.target.value));
	};

	const onUpdate = () => {
		dispatch(updateTodoAction(index, text));
		dispatch(inputText(''));
		dispatch(setEdit(false));
	};

	const onSave = () => {
		dispatch(insertTodoAction(text));
		dispatch(inputText(''));
	};

	return (
		<>
			<div className="container w-25 m-auto mt-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Form.Control
					placeholder="Enter Title here..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					ref={getInputData}
					name="title"
					value={text}
					onChange={(e) => getInputValue(e)}
				/>
				{!edit ? (
					<div className="ms-2">
						<Button
							variant="outline-secondary text-light btn-dark text-capitalize"
							onClick={onSave}
						>
							save
						</Button>
					</div>
				) : (<div className="ms-2">
					<Button
						variant="outline-secondary text-light btn-dark text-capitalize"
						onClick={onUpdate}>
						update
					</Button>
				</div>)}
			</div>
		</>
	);
};

export default Inputfield;