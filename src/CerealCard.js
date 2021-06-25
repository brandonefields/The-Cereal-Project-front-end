

function CerealCard( props ) {

    const removeCerealWithButton = (event) => {
        props.removeCereal(props.cereal);
    }

    const alertButton = ()=> {
       return alert("Please, try again at a later time.")
    }


    return (
        <div className="cereal-card">
            <div className="cereal-card-name">
                <label className="cereal-card-name-label">
                    Cereal Name :
                </label>
                <p className="cereal-card-name">{props.cereal.cereal_name} </p>
            </div>
            <div className="cereal-card-rating">
                <label className="cereal-card-rating-label">
                    Cereal Rating :  
                </label>
                <p className="cereal-card-rating">{props.cereal.cereal_rating}</p>
                <button 
                    placeholder="vote new rating?" 
                    className="rating-button"
                    type="button">change rating
                    onClick={alertButton}
                </button>
                <input placeholder="vote new rating?">
                    
                </input>
                
            </div>
                <img className="card-image" src={props.cereal.cereal_image} alt="image of selected cereal" />
            <div className="cereal-card-buttons">
                <button
                onClick={removeCerealWithButton}
                className="cereal-card-buttons">
                    Delete this Cereal</button>
            </div>
        </div>
    )
}

export default CerealCard