import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(prev => prev + 1);
    }

    function handleDecrement() {
        setCount(prev => prev - 1);
    }

    function handleMultiply() {
        setCount(prev => prev * 2);
    }

    function handleDivide() {
        setCount(prev => (prev !== 0 ? prev / 2 : 0)); // Защита от деления на 0
    }

    return (
        <div className="wrapper">
            <h1 className="heading">
                {count}
            </h1>
            <div className="buttons">
                <button className="button" onClick={handleIncrement}>
                    +
                </button>
                <button className="button" onClick={handleDecrement}>
                    -
                </button>
                <button className="button" onClick={handleMultiply}>
                    *
                </button>
                <button className="button" onClick={handleDivide}>
                    /
                </button>
            </div>
            <h3>
                sldaldsaldls
            </h3>
        </div>
    );
}

export default App;


