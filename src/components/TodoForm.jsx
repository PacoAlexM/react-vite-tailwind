import { useState } from "react";

const TodoForm = ({ createTodo }) => {
    const [ title, setTitle ] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Must capture a TODO title!!!');
            return;
        }

        createTodo(title);

        setTitle('');
    };

    return (
        <form onSubmit={ onFormSubmit } className="bg-white dark:bg-gray-800 duration-500 rounded-md mt-8 overflow-hidden py-4 flex gap-4 items-center px-4">
            <span className="rounded-full border-2 border-gray-300 w-5 h-5 inline-block"></span>
            <input type="text" className="w-full text-gray-400 outline-none" placeholder="Create a new todo..." value={ title } onChange={ (e) => setTitle(e.target.value) } />
        </form>
    );
};

export default TodoForm;
