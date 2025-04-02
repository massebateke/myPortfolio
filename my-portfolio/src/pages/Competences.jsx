export default function Competences(props){

    return(
        <div className="competences">
           <h2>{props.title}</h2>
            <img src={props.img} alt={props.img}/>
        </div>
    );

}
