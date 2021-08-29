import React from 'react';

const Header = () => {
    console.log('render header');

    return (
        <div>
            <h1 className="text-center display-6 text-success">Learning useCallback & useMemo</h1>
        </div>
    );
};

export default React.memo(Header);