const TodoFilter = ({ filterTodos, filter }) => (
    <section className="container mx-auto mt-8">
        <div className="bg-white dark:bg-gray-800 duration-500 flex justify-center gap-4 rounded-md p-4">
            <button className={ `font-bold hover:text-blue-600 ${ filter === -1 ? 'text-blue-600' : 'text-gray-400' }` } onClick={ () => filterTodos(-1) }>All</button>
            <button className={ `font-bold hover:text-blue-600 ${ filter === 0 ? 'text-blue-600' : 'text-gray-400' }` } onClick={ () => filterTodos(0) }>Active</button>
            <button className={ `font-bold hover:text-blue-600 ${ filter === 1 ? 'text-blue-600' : 'text-gray-400' }` } onClick={ () => filterTodos(1) }>Completed</button>
        </div>
    </section>
);

export default TodoFilter;
