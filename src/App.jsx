import Header from './components/Header';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useEffect, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';

const initTodos = JSON.parse(localStorage.getItem('todos')) || [
    { id: 1, title: 'Learn React, Node.js, Vue and many javascript frameworks', completed: true },
    { id: 2, title: 'Complete a Microsoft Azure certification', completed: false },
    { id: 3, title: 'Find a better paid job', completed: false },
    { id: 4, title: 'Practice Taekwondo', completed: false },
    { id: 5, title: 'Get a fursuit 😎', completed: false },
];

const orderTodoList = (todoList, start, end) => {
    const result = [ ...todoList ];
    const [ deleted ] = result.splice(start, 1);
    result.splice(end, 0, deleted)

    return result;
};

const App = () => {
    const [ todos, setTodos ] = useState(initTodos);
    const [ filter, setFilter ] = useState(-1);

    const createTodo = title => setTodos([ ...todos, { id: Date.now(), title, completed: false } ]);
    const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id));
    const updateTodo = id => setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    const todosLeft = todos.filter(todo => !todo.completed).length;
    const clearCompleted = _ => setTodos(todos.filter(todo => !todo.completed));
    const filteredTodos = _ => (filter === 0 ? todos.filter(todo => !todo.completed) : filter === 1 ? todos.filter(todo => todo.completed) : todos);
    const filterTodos = filter => setFilter(filter);

    useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [todos]);
    
    const todoOnDragEnd = ({ destination, source }) => {
        if (!destination || (source.index === destination.index && source.droppableId === destination.droppableId)) return;

        setTodos(prev => orderTodoList(prev, source.index, destination.index));
    };

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-200 dark:bg-gray-900 duration-500">
            <Header />

            <main className="container md:max-w-xl mx-auto mt-8 px-4">
                <TodoForm createTodo={ createTodo } />
                <DragDropContext onDragEnd={ todoOnDragEnd }>
                    <TodoList todos={ filteredTodos() } removeTodo={ removeTodo } updateTodo={ updateTodo } />
                </DragDropContext>
                <TodoComputed todosLeft={ todosLeft } clearCompleted={ clearCompleted } todos={ filteredTodos() } />
                <TodoFilter filterTodos={ filterTodos } filter={ filter } />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-500">Drag and drop to reorder list</footer>
        </div>
    );
};

export default App;
