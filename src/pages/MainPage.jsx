import React, { useState } from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';
import { useSelector } from 'react-redux';

const MainPage = () => {
	const [text, setText] = useState('');
	const lists = useSelector((event)=>{
		return (event.todoReducer.list);
	});
	return (
		<div className="container">
			<h1 className="text-center text-danger mt-3"> Todo</h1>
			<Inputfield setText={setText} text= {text} lists={lists}/>
			<div className="container mt-5">
				<TodoTable setText={setText} text= {text} lists={lists}/>
			</div>
		</div>
	);
};
export default MainPage;
