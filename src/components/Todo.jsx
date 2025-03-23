import CrossIcon from './CrossIcon';

const Todo = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none rounded-full border-gray-300 border-2 w-5 h-5 inline-block"></button>
            <p className={ completed ? 'text-gray-600 grow line-through' : 'text-gray-600 grow' }>{ title }</p>
            <CrossIcon />
        </article>
    );
};

export default Todo;
