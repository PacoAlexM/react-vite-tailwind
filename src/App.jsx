import Header from './components/Header';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useState } from 'react';

// const initTodos = JSON.parse(localStorage.getItem('todos')) || [];
const initTodos = [
    {
        id: 1,
        title: 'Learn React, Node.js, Vue and many javascript frameworks.',
        completed: false
    },
    {
        id: 2,
        title: 'Complete a Microsoft Azure certification.',
        completed: false
    },
    {
        id: 3,
        title: 'Find a better paid job.',
        completed: false
    },
    {
        id: 4,
        title: 'Practice Taekwondo.',
        completed: true
    },
    {
        id: 5,
        title: 'Get a fursuit 😎.',
        completed: false
    },
];

const App = () => {
    const [ todos, setTodos ] = useState(initTodos);

    const createTodo = title => setTodos([ ...todos, { id: Date.now(), title, completed: false } ]);

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-200">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoForm createTodo={ createTodo } />
                <TodoList todos={ todos } />
                <TodoComputed todos={ todos } />
                <TodoFilter />
            </main>

            <footer className="text-center mt-8">Drag and drop to reorder list</footer>
        </div>
    );
};

export default App;
