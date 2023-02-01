import React, { useState } from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';

const MainPage = () => {
	const [text, setText] = useState('');
	return (
		<div className="container">
			<Inputfield setText={setText} text={text} />
			<div className="container mt-5">
				<TodoTable setText={setText} />
			</div>
		</div>
	);
};
export default MainPage;
