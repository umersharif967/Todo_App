import React, { useState } from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';
import { useSelector } from 'react-redux';

const MainPage = () => {
	const [text, setText] = useState('');
	const[index_Of_Editable, setIndex_Of_Editable] = useState('');
	const lists = useSelector((event)=>{
		return (event.todoReducer.list);
	});
	return (
		<div className="container">
			<h1 className="text-center text-danger mt-3"> Todo</h1>
			<Inputfield setText={setText} text= {text} index_Of_Editable={index_Of_Editable} setIndex_Of_Editable={setIndex_Of_Editable}/>
			<div className="container mt-5">
				<TodoTable setText={setText} text= {text} lists={lists} index_Of_Editable={index_Of_Editable} setIndex_Of_Editable={setIndex_Of_Editable}/>
			</div>
		</div>
	);
};
export default MainPage;
