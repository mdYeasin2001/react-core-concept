import React, { useState } from 'react';

const withCounter = (OriginalComponent) => {
    const NewComponent = () => {
        const [counter, setCounter] = useState(0);

        const increment = () => {
            setCounter(prev => prev + 1)
        }
        return <OriginalComponent counter={counter} increment={increment}/>
    }
    return NewComponent;
};

export default withCounter;