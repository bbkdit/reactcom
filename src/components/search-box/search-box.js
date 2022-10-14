import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder, handelSearch}) =>(
    <div className='search'>
        <input type='search' placeholder={placeholder} onChange={handelSearch} />
    </div>
);

