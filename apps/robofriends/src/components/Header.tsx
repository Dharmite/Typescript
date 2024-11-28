import React from 'react';
import Counter from './Counter';

const Header = () => {
    return (
        <>
            <h1 className='f1'>RoboFriends</h1>
            <Counter color='red' />
        </>
    );
};

export default React.memo(Header);