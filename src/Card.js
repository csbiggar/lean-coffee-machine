import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="card">
            This is a new card
            <input className="card-title" placeholder="Please enter a title..." onChange={(e) => this.props.onChange(e)}/>
        </div>);
    }
}

export default Card;
