import React from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';

const MainPage = () => {
	// const [text, setText] = useState('');
	return (
		<div className="container">
			{/* <h1 className="text-center text-danger mt-3"> Todo</h1> */}
			<Inputfield  />
			<div className="container mt-5">
				<TodoTable />
			</div>
		</div>
	);
};
export default MainPage;
