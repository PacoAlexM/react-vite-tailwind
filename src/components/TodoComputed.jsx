const TodoComputed = ({ todosLeft, clearCompleted, todos }) => {
    return (
    <section className={ `py-4 px-4 flex justify-between bg-white ${ todos.length >= 1 ? 'rounded-b-md' : 'rounded-md' } dark:bg-gray-800 duration-500 shadow-lg` }>
        <span className="text-gray-400">{ todosLeft } items left</span>
        <button className="text-gray-400" onClick={ () => clearCompleted() }>Clear completed</button>
    </section>
)};

export default TodoComputed;
