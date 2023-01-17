import React, { useState } from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';

const MainPage = () => {
	const [text, setText] = useState('');
	// const[edit,setEdit] = useState(false);
	const[index_Of_Editable, setIndex_Of_Editable] = useState('');
	return (
		<div className="container">
			<h1 className="text-center text-danger mt-3"> Todo</h1>
			<Inputfield setText={setText} text= {text}  index_Of_Editable={index_Of_Editable}/>
			<div className="container mt-5">
				<TodoTable setText={setText} setIndex_Of_Editable={setIndex_Of_Editable}/>
			</div>
		</div>
	);
};
export default MainPage;
