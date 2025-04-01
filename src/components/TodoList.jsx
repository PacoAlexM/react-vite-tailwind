import Todo from './Todo';
import { Droppable, Draggable } from '@hello-pangea/dnd';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId='todos'>
            {
                (droppable) => (
                    <div className="bg-white dark:bg-gray-800 duration-500 rounded-t-md mt-8 [&>article]:p-4" ref={ droppable.innerRef } { ...droppable.droppableProps }>
                        {
                            todos.map((todo, id) => (
                                <Draggable index={ id } key={ todo.id } draggableId={ `${ todo.id }` }>
                                    {
                                        (draggable) => (
                                            <Todo ref={ draggable.innerRef } todo={ todo } removeTodo={ removeTodo } updateTodo={ updateTodo } { ...draggable.dragHandleProps } { ...draggable.draggableProps } />
                                        )
                                    }
                                </Draggable>
                            ))
                        }
                        { droppable.placeholder }
                    </div>
                )
            }
        </Droppable>
    )
};

export default TodoList;
