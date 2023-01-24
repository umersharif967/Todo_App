import React ,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from 'react-redux';
import { insertTodoAction,updateTodoAction,editState,setText } from '../store/actions/actionCreator';
const Inputfield = () => {
	const dispatch = useDispatch();
	const Edit_state = useSelector((event)=>{
		return (event.stateReducer.edit);
	});
	const [input, setInput] = useState();
	let index = useSelector((e)=>{
		return(e.stateReducer.index);
	});
	
	// console.log(text);
	const Updated = () => {
		dispatch(updateTodoAction(index,input));
		dispatch(setText(''));
		dispatch(editState(true));
	};
	const SaveInput=(e)=>{
		setInput(e.target.value);
		dispatch(setText(input));
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
					value={input} 
					onChange={SaveInput}
				/>
				{Edit_state ? (
					<div className="ms-2">
						<Button
							variant="outline-secondary text-light btn-dark text-capitalize"
						 	onClick={()=>{dispatch(insertTodoAction(input)),setInput('');} } 
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