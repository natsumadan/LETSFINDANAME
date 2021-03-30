import React from 'react';
import './Cards.css';
const namecheapUrl="https://www.namecheap.com/domains/registration/results/?domain=%27%3B"
const CardName  = ({suggestedName}) => {
    return (
        <a target="_blank" rel="noreferrer" classname = "card-link" href={`${namecheapUrl}${suggestedName}`}>
           
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p> 
            </div>
        </a>

        
    );
}
export default CardName;