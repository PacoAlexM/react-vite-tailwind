import { useEffect, useState } from 'react';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const Header = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [dark]);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-bold tracking-[0.5em]">Todo</h1>
                <button onClick={ () => setDark(!dark) }>
                    { dark ? <SunIcon fill="#fff" /> : <MoonIcon fill="#fff" /> }
                </button>
            </div>
        </header>
    )
};

export default Header;
