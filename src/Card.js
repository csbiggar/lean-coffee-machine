import React from 'react';

function Card(props) {
    return (<div className="card">
        <p className="card-id">#{props.cardId}</p>
        <textarea className="card-editor"
                  placeholder="Please enter something..."
                  value={props.content}
                  onChange={(e) => props.onChange(e, props.cardId)}/>
    </div>);
}

export default Card;
