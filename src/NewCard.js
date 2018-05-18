import React, {Component} from 'react';

class NewCard extends Component {
    render() {
        return (<div className="new-card">
            This is a new card
            <input className="new-card-title" placeholder="Please enter a title..."/>
        </div>);
    }
}

export default NewCard;
