import React from'react';
import CardName from '../Cards/Cards';
import './Results.css';
const Results = ({suggestedNames}) => {
    const suggestedNameJs = suggestedNames.map(suggestedName => {
        return <CardName key={suggestedName} suggestedName={suggestedName} />
    })

    return (
        <div className= "results">
            <p>{suggestedNameJs}</p>
        </div>
    );
}

export default Results;