import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, updateTodo }) => (
    <div className="bg-white rounded-t-md mt-8 [&>article]:p-4">
        {
            todos.map(todo => (<Todo key={ todo.id } todo={ todo } removeTodo={ removeTodo } updateTodo={ updateTodo } />))
        }
    </div>
);

export default TodoList;
