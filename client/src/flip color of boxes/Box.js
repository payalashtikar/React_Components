import React, { useState } from 'react';

export default function Box() {
    const [colors, setColors] = useState(['red', 'red', 'red', 'red']);

    const changeColor = (index) => {
        const newColors = [...colors];
        newColors[index] = newColors[index] === 'red' ? 'green' : 'red';
        setColors(newColors);
    };

    return (
        <div>
            <div className='container'>
                {colors.map((color, index) => (
                    <div
                        key={`box${index + 1}`}
                        onClick={() => changeColor(index)}
                        style={{
                            background: color,
                            width: '200px',
                            height: '20vh',
                            margin: '5px',
                            padding: '5px',
                            cursor: 'pointer',
                        }}
                        className={`box${index + 1}`}
                    >{`box${index + 1}`}</div>
                ))}
            </div>
        </div>
    );
}
