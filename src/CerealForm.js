import { useState, useEffect } from 'react'



function CerealForm(props) {

    const [cereal_name, setCereal_name] = useState("")
    const [cereal_rating, setCereal_rating] = useState(0)
    const [cereal_image, setCereal_image] = useState("")
    const [cereal_brand, setCereal_brand] = useState("")
    //you have a state for cereal bc you passed it down in CerealPage


    function betterDropDown() {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        return arr.map(num => <option value={num}>{num}</option>)
    }

    useEffect(() => {
        fetch('http://localhost:3000/cereals')
            .then(res => res.json())
            .then(console.log)
        //.then(brands => setCereals(brands))
    }, [])

    console.log(props.cereals[1])


    //useEffect(getBrands, [])


    const options = {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            cereal_name,
            cereal_rating,
            cereal_image
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch(`http://localhost:3000/cereals`, options)
        console.log("submit button pressed")
    }

    return (
        <form
            className="new-cereal-form"
            onSubmit={handleSubmit}>
            <label
                className="form-label"
                htmlfor="cereal_name">

                	
            &#10034; Insert Your Preferred Cereal Here :

            </label>
            <input
                id="cereal_name"
                className="form-input-box"
                type="text"
                placeholder="cereal here"
                name="cereal_name"
                value={cereal_name}
                onChange={(event) => setCereal_name(event.target.value)}
            ></input>

            <label
                className="form-label"
                htmlFor="cereal_brand">

            &#10034; Insert Your Preferred Cereals Brand :

            </label>
            <input
                id="cereal-brand"
                className="form-input-box"
                type="text"
                placeholder="cereal brand here"
                name="cereal-brand-name"
                value={cereal_brand}
                onChange={(event) => setCereal_brand(event.target.value)}
            ></input>


            <label className="form-label">

            &#10034; Choose your Cereals Rating :

            </label>
            <select onChange={(event) => setCereal_rating(event.target.value)} value={cereal_rating}>
                {betterDropDown()}
            </select>

            <label
                className="form-label"
                htmlFor="cereal_brand">

            &#10034; Insert Cereal Image URL :

            </label>
            <input
                id="cereal-brand"
                className="form-input-box"
                type="text"
                placeholder="cereal image here"
                name="cereal-brand-name"
                value={cereal_image}
                onChange={(event) => setCereal_image(event.target.value)}
            ></input>

            <input type="submit" ></input>
        </form>

    )
}

export default CerealForm