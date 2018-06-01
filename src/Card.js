import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="card">
            <p className="card-id">#{this.props.cardId}</p>
            <textarea className="card-title"
                   placeholder="Please enter a title..."
                   value={this.props.title}
                   onChange={(e) => this.props.onChange(e, this.props.cardId)}/>
        </div>);
    }
}

export default Card;
