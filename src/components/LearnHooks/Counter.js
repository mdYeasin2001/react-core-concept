import React from 'react';

const Counter = ({counterContent, count}) => {
    console.log(`rendering ${counterContent}`);
    return (
        <div>
          {counterContent}: {count}  
        </div>
    );
};

export default React.memo(Counter);