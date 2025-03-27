const TodoComputed = ({ todosLeft, clearCompleted }) => (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 duration-500">
        <span className="text-gray-400">{ todosLeft } items left</span>
        <button className="text-gray-400" onClick={ () => clearCompleted() }>Clear completed</button>
    </section>
);

export default TodoComputed;
