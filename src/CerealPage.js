import React from 'react';
import { useState, useEffect } from 'react'
import CerealCardsContainer from './CerealCardsContainer'
import CerealForm from './CerealForm'


function CerealPage() {
    const [cereals, setCereals] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cereals')
            .then(res => res.json())
            .then(cereals => setCereals(cereals))
    }, [])

    console.log(cereals)

    const removeCereal = (deleteButton) => {
        let newCereals = cereals.filter(cer => cer.id !== deleteButton.id);
        setCereals(newCereals);
        fetch(`http://localhost:3000/cereals/${deleteButton.id}`, { method: 'DELETE' })
    }



    return (
        <div className="cereal-page">
            <CerealForm
                cereals={cereals}
                removeCereal={removeCereal} />

            <CerealCardsContainer
                removeCereal={removeCereal}
                cereals={cereals} />
        </div>
    );
}

export default CerealPage;

