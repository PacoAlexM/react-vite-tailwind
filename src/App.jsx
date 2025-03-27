import Header from './components/Header';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useEffect, useState } from 'react';

/**
 * 
 * Comentar el primer const initTodos y descomentar
 * el segundo const initTodos para cargar la lista
 * de todos.
 * 
 * Despues comentar el segundo const initTodos para
 * y descomentar el primer const initTodos para que no
 * se esten agregando los mismos todos cada que cargue
 * la pagina.
 */
const initTodos = JSON.parse(localStorage.getItem('todos')) || [];
// const initTodos = [
//     { id: 1, title: 'Learn React, Node.js, Vue and many javascript frameworks.', completed: true },
//     { id: 2, title: 'Complete a Microsoft Azure certification.', completed: false },
//     { id: 3, title: 'Find a better paid job.', completed: false },
//     { id: 4, title: 'Practice Taekwondo.', completed: false },
//     { id: 5, title: 'Get a fursuit 😎.', completed: false },
// ];

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

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-200 dark:bg-gray-900 duration-500">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoForm createTodo={ createTodo } />
                <TodoList todos={ filteredTodos() } removeTodo={ removeTodo } updateTodo={ updateTodo } />
                <TodoComputed todosLeft={ todosLeft } clearCompleted={ clearCompleted } />
                <TodoFilter filterTodos={ filterTodos } filter={ filter } />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400 transition-all duration-500">Drag and drop to reorder list</footer>
        </div>
    );
};

export default App;
