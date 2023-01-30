import React,{ useState } from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';

const MainPage = () => {
	const [text, setText] = useState('');
	return (
		<div className="container">
			{/* <h1 className="text-center text-danger mt-3"> Todo</h1> */}
			<Inputfield  setText={setText} text={text}/>
			<div className="container mt-5">
				<TodoTable setText={setText}/>
			</div>
		</div>
	);
};
export default MainPage;
