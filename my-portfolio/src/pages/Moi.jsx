export default function Moi(props){
    return(
    <>
    <div className="moii">
        <div className="moi">
            <img src={props.img} alt={props.img}/>
        </div>
        <div className="moi">
            <p>Derrière chaque interface, une intention. La mienne ? Grandir, apprendre et contribuer au bon endroit.</p>
            <p>Étudiante en Développement Web à la Web Academy by Epitech (94270 Le Kremlin-Bicêtre), je suis à la 
                recherche d'une alternance en back-end , en front-end ou en full-stack pour compléter ma formation 
                par une expérience pratique.</p>
                <p>Je suis passionnée par le développement informatique.</p>
                <p>Ce choix découle de l'influence de mon entourage et de ma propre affinité pour la logique et la créativité que le développement
                    exige.</p>
                    <p>J'apprécie la possibilité de créer quelque chose de concret à partir de lignes de code, et je suis convaincue que 
                     cette voie me permettra de continuer à apprendre et à relever des défis stimulants.</p>
                
        </div>
    </div>
    <h1 className="moiTitre">Mes centres d'intêrets</h1>
    </>
    );
}