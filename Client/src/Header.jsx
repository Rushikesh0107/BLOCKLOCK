import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className='flex w-full bg-purple-700 text-white justify-between text-2xl font-bold p-4'>
            <h1>BLOCKLOCK</h1>
                <ul className='flex gap-3'>
                    <li><a href="#">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
