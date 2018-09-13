import React, {Component} from 'react';
import Card from './Card';

class Board extends Component {

    constructor(props) {
        super(props);

        this.persistenceAdaptor = props.persistenceAdaptor;

        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        if (this.persistenceAdaptor) {
            const savedCards = this.persistenceAdaptor.load();
            this.setState( { cards: savedCards } );
        }
    }

    handleAddCardClick() {
        const cards = this.state.cards.slice();
        cards.push({editable: true});

        this.setState(
            {
                cards: cards
            }
        )
    }

    handleCardBlur(cardIndex) {
        let cards = this.state.cards.slice();
        let card = cards[cardIndex];

        if (card.content) {
            card.editable = false;
        } else {
            // Remove the card
            cards.splice(cardIndex, 1);
        }

        this.setState(
            {
                cards: cards
            }
        )

        if (this.persistenceAdaptor) {
            this.persistenceAdaptor.saveCard({
                cardId: card.cardId,
                content: card.content
            })
        }
    }


    handleCardClick(cardIndex, textInputRef) {
        const cards = this.state.cards.slice();

        cards[cardIndex].editable = true;

        this.setState(
            {
                cards: cards
            },
            () => {
                textInputRef.current.focus();
            }
        )
    }

    handleCardContentChange(event, cardIndex) {
        const cards = this.state.cards.slice();

        cards[cardIndex].content = event.target.value;

        this.setState(
            {
                cards: cards
            }
        )
    }

    renderCards() {
        return (
            <div className="board">
                {this.state.cards.map((card, i) =>
                    <Card key={i}
                          cardId={i}
                          onChange={(e, cardIndex) => this.handleCardContentChange(e, cardIndex)}
                          onBlur={(cardIndex) => this.handleCardBlur(cardIndex)}
                          onClick={(cardIndex, textInputRef) => this.handleCardClick(cardIndex, textInputRef)}
                          editable={card.editable}
                          content={card.content}
                    />)
                }
            </div>
        )
    }

    render() {
        return (
            <main>
                <button id="add-a-card" onClick={() => this.handleAddCardClick()}>Add a card</button>
                {this.renderCards()}
            </main>
        );
    }
}

export default Board;