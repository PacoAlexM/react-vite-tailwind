const TodoComputed = ({ todos }) => (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{ todos.length } items left</span>
        <button className="text-gray-400">Clear completed</button>
    </section>
);

export default TodoComputed;
