import React from 'react';
import CerealCard from './CerealCard'

//changed ({ cereals }) to props to check it out
function CerealCardsContainer( props ) {

    const cerealCards = () => props.cereals.map(cereal => {
        return <CerealCard 
        key={cereal.id} 
        cereal={cereal}
        removeCereal={props.removeCereal} 
        />
    })

    return (
        <div className="cereal-cards-container">
            {cerealCards()}
        </div>
    );
}

export default CerealCardsContainer;
