import MoonIcon from './MoonIcon';

const Header = () => (
    <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
            <h1 className="uppercase text-white text-2xl font-bold tracking-[0.5em]">Todo</h1>
            <button><MoonIcon fill="#fff" /></button>
        </div>
    </header>
);

export default Header;
