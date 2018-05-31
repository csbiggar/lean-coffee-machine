import React, {Component} from 'react';

class NewCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="new-card">
            This is a new card
            <input className="new-card-title" placeholder="Please enter a title..." onChange={(e) => this.props.onChange(e)}/>
        </div>);
    }
}

export default NewCard;
