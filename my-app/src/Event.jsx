import React from 'react';

function Event() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    const handleKeyDown = (e) => {
        alert(`Key pressed: ${e.key}`);
    };

    const handleKeyUp = (e) => {
        alert(`Key released: ${e.key}`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <button 
                onClick={handleClick}
                style={{ padding: '10px 20px', marginRight: '15px' }}
            >
                Click Me
            </button>
            <button 
                onKeyDown={handleKeyDown}
                style={{ padding: '10px 20px', marginRight: '15px' }}
            >
                Key Down
            </button>
            <button 
                onKeyUp={handleKeyUp}
                style={{ padding: '10px 20px' }}
            >
                Key Up
            </button>
        </div>
    );
}

export default Event;