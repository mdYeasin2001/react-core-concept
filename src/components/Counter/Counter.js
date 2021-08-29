import React, { useState } from 'react';

const Counter = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            {show && <h1>Show it to the user interface.</h1>}
        </div>
    );
};

export default Counter;