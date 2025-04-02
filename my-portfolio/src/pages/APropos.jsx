export default function APropos(props) {
    return (
        <div className="APropos">
            <div className="AProposs">
                <p>{props.description}</p>
                {props.link && (
                    <a href={props.link} target="_blank" rel="noopener noreferrer">Demo</a>
                )}
            </div>
        </div>
    );
}

