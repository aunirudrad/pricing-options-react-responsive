import React from 'react';

const Links = ({items}) => {
    return (
        <ul>
            <li key={items.id}><a href={items.path}>{items.name}</a></li>
        </ul>
    );
};

export default Links;