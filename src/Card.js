import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.textInputRef = React.createRef();
    }

    render() {
        return (
            <div className="card" onClick={(e) => this.props.onClick(this.props.cardId, this.textInputRef)}>
            <p className="card-id">#{this.props.cardId}</p>
            {this.props.editable ?
                (<textarea className="card-editor"
                           placeholder="Please enter something..."
                           value={this.props.content}
                           onBlur={(e) => this.props.onBlur(this.props.cardId)}
                           onChange={(e) => this.props.onChange(e, this.props.cardId)}
                           ref={this.textInputRef}/>) :
                (<pre className="card-detail">{this.props.content}</pre>)
            }
        </div>);
    }

    componentDidMount() {
        if (this.props.editable && this.textInputRef.current) {
            this.textInputRef.current.focus()
        }
    }
}

export default Card;
