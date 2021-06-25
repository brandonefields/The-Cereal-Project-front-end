import React from 'react';
import { useState, useEffect } from 'react'
import CerealCardsContainer from './CerealCardsContainer'
import CerealForm from './CerealForm'


function CerealPage() {
    const [cereals, setCereals] = useState([])
    //const [cereal_rating, setCereal_rating] = useState(0)
    

    useEffect(() => {
        fetch('http://localhost:3000/cereals')
            .then(res => res.json())
            .then(cereals => setCereals(cereals))
    }, [])

    // useEffect(() => {
    //     fetch('http://localhost:3000/cereals')
    //         .then(res => res.json())
    //         .then(c => setCereal_rating(c))

    // }, [])


    // const options = {
    //     method: 'POST',
    //     headers: {
    //         "Accept": 'application/json',
    //         "Content-Type": 'application/json'
    //     },
    //     body: JSON.stringify({
    //         cereal_rating
    //     })
    // }

    const changeCerealRating = (ratingButton) => {
        // let newRatings = cereals.filter(cere => console.log(cere.id.cereal_rating))
        // fetch(`http://localhost:3000/cereals/${ratingButton.cereal_rating}`, options)
        console.log(ratingButton.cereal_rating,"ratings button pressed")
    }

    const removeCereal = (deleteButton) => {
        let newCereals = cereals.filter(cer => cer.id !== deleteButton.id);
        setCereals(newCereals);
        fetch(`http://localhost:3000/cereals/${deleteButton.id}`, { method: 'DELETE' })
    }

    // const  changeCerealRating = (ratingButton) => {
    //     // let newRatings  = cereals.filter(rating => rating.id !== ratingButton.id);
    //     // setCereal_rating(newRatings);
    //     // fetch(`http://localhost:3000/cereals/${deleteButton.id}`, { method: 'DELETE' })
    //     console.log(ratingButton.id, "im here in the page")
    // }




    return (
        <div className="cereal-page">
            <CerealForm
                changeRating={changeCerealRating}
                changeCerealRating={changeCerealRating}
                cereals={cereals}
                removeCereal={removeCereal} />

            <CerealCardsContainer
                changeCerealRating={changeCerealRating}
                removeCereal={removeCereal}
                cereals={cereals} />
        
        </div>
        
    );
}

export default CerealPage;

