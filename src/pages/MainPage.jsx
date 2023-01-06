import React, { useState } from 'react';
import Inputfield from '../components/Inputfield';
import TodoTable from '../components/TodoTable';
const MainPage = () => {

	const [text, setText] = useState({
		title: '',
	});
	const [todo, setTodo] = useState([]);
	const [indexxx, setIndexxx] = useState('');
	const [change, setChange] = useState(false);


	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setText({ text, [name]: value });
	};

	const addText = (e) => {
		e.preventDefault();
		if (text.title === '' || text.body === '') {
			alert('Please enter a title ');
		} else {
			setTodo([...todo, text]);
			setText({ title: '', body: '' });
		}
	};
	const editText = () => {
		const edits = [...todo];
		edits.splice(indexxx, 1, text);
		setTodo(edits);
		setText({ title: '', body: '' });
		setChange(false);
	};
	const deleteOnClick = (index) => {
		const deleted = [...todo];
		deleted.splice(index, 1);
		setTodo(deleted);
	};
	const editOnClick = (index) => {
		const edited = todo.at(index);
		setText(edited);
		setIndexxx(index);
		setChange(true);
	};
	return (
		<div className="container">
			<h1 className="text-center text-danger mt-3">Updated ToDo</h1>
			<Inputfield handleChange={handleChange} addText={addText} editText={editText} text={text} change={change} />
			<div className="container mt-5">
				{todo.length > 0 && (
					<TodoTable deleteOnClick={deleteOnClick} editOnClick={editOnClick} todo={todo} />
				)}
			</div>
		</div>
	);
};
export default MainPage;