import React from 'react';

const Button = ({buttonContent, handleButtonClick}) => {
    console.log(`rendering ${buttonContent}`);
    return (
        <div>
            <button className="btn btn-danger" onClick={handleButtonClick}>{buttonContent}</button>
        </div>
    );
};

export default React.memo(Button);