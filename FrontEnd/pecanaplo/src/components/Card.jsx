const Card = (props) => {
    return(
        <div className="card">
            <h5>Id: {props.id}</h5>
            <h1>Fogás: {props.halFaj}</h1>
            <h2>Fogó: {props.fogoNeve}</h2>
            <p>Hal hossz: {props.halHossz} cm<br/>
                Hal súly: {props.halSuly} g<br/>
                Helyszin: {props.helyszin}<br/>
            </p>
        </div>
    )
}
export default Card;