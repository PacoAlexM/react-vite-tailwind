import Todo from "./Todo";

const TodoList = ({ todos }) => (
    <div className="bg-white rounded-t-md mt-8 [&>article]:p-4">
        {
            todos.map(todo => (<Todo key={ todo.id } todo={ todo } />))
        }
    </div>
);

export default TodoList;
