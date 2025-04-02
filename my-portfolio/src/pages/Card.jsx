import profilePic from '../assets/ok.png';

function Card(){

    return(
        <div className="card">
            <img src={profilePic} alt="oui" />
            <h2>Masse</h2>
            <p>Etudiante en dev Web a la Web Academy</p>

        </div>
    );
}

export default Card