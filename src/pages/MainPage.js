import React from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';

const MainPage = () => {
	return (
		<div className="container">
			<Inputfield />
			<div className="container mt-5">
				<TodoTable />
			</div>
		</div>
	);
};
export default MainPage;
