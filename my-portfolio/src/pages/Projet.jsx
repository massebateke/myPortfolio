export default function Projet(props){

    return(
        <div className="projet">
            <a href={props.lien}>
            <h2>{props.title}</h2>
            <div className="projett">
            <div className="projettt">
            <img src={props.img} alt={props.img}/>
            </div>
            <div className="projetimg">
            <img src={props.imgdemo} alt={props.imgdemo} />
            </div>
            </div>
            <p>{props.description}</p>
            <p>{props.date}</p>
            </a>
        </div>
    );

}

 
