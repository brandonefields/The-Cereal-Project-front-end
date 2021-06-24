

function CerealCard( props ) {

    const removeCerealWithButton = (event) => {
        props.removeCereal(props.cereal);
    }


    return (
        <div className="cereal-card">
            <div className="cereal-card-name">
                <label className="cereal-card-name">
                    Cereal Name:
                </label>
                <p className="cereal-card-name">{props.cereal.cereal_name} </p>
            </div>
            <div className="cereal-card-rating">
                <label className="cereal-card-rating">
                    Cereal Rating:  
                </label>
                <p className="cereal-card-rating">{props.cereal.cereal_rating}</p>
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