import React from 'react';
import withCounter from './withCounter';

const ClickCounter = (props) => {
    return (
        <div>
           <button className="btn btn-info" onClick={props.increment}>Clicked {props.counter} Times</button> 
        </div>
    );
};

export default withCounter(ClickCounter);