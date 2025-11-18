import { useState } from 'react';
import './Hook2.css'; // Import a CSS file for styles

function Hook2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        const next = count + 1;
        console.log(`You clicked ${next}`);
        alert('Clicked');
        setCount(next);
    };

    const decrement = () => {
        const next = count > 0 ? count - 1 : 0; // Prevent count from going below zero
        console.log(`You clicked ${next}`);
        alert('Clicked');
        setCount(next);
    };

    return (
        <div className="counter-container">
            <h1>Increment Decrement Counter</h1>
            <div className="button-container">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <p className="count-display">Current Count: {count}</p>
        </div>
    );
}

export default Hook2;
