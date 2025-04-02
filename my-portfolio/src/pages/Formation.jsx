export default function Formation(props){

    return(
        <div className="formation">
           <h2>{props.title}</h2>
            <img src={props.img} alt={props.img}/>
            <p>{props.description}</p>
        </div>
    );

}
