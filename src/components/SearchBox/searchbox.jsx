import React from 'react';
import './searchbox.css';

const SeachBox = ({onInputChange}) => {
    return (
        <div className="search-container">
            <input 
            onChange={(event) => onInputChange(event.target.value) } 
            placeholder="Type Keywords" className="search-input" 
        
        
        />
        </div>
        // This is not important change 
        
    );
};


export default SeachBox;