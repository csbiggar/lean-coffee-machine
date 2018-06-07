import React from 'react';

function Card(props) {
    return (<div className="card">
        <p className="card-id">#{props.cardId}</p>
        {props.editable ?
            (<textarea className="card-editor"
                       placeholder="Please enter something..."
                       value={props.content}
                       onChange={(e) => props.onChange(e, props.cardId)}/>) :
            (<pre className="card-detail">{props.content}</pre>)
        }
    </div>);
}

export default Card;
