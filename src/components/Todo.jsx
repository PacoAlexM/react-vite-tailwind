import CrossIcon from './CrossIcon';
import Check from './Check';

const Todo = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400 dark:border-b-gray-700 duration-500">
            <button className={ `flex-none rounded-full border-gray-300 border-2 w-5 h-5 ${ completed ? 'grid place-items-center bg-gradient-to-r from-cyan-500 to-purple-500' : 'inline-block' }` } onClick={ () => updateTodo(id) }>
                { completed && <Check /> }
            </button>
            <p className={ `text-gray-600 dark:text-gray-400 duration-500 grow ${ completed && 'line-through' }` }>{ title }</p>
            <button className="flex-none" onClick={ () => removeTodo(id) }>
                <CrossIcon />
            </button>
        </article>
    );
};

export default Todo;
