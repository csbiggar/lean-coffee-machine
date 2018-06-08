import React, {Component} from 'react';
import Card from './Card';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: []
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
        const cards = this.state.cards.slice();

        cards[cardIndex].editable = false;

        this.setState(
            {
                cards: cards
            }
        )
    }

    handleCardClick(cardIndex, textInputRef) {
        const cards = this.state.cards.slice();

        cards[cardIndex].editable = true;

        this.setState(
            {
                cards: cards
            },
            () => {   textInputRef.current.focus();}
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
            <div>
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
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Lean Coffee Machine</h1>
                </header>
                <main>
                    <button id="add-a-card" onClick={() => this.handleAddCardClick()}>Add a card</button>
                    {this.renderCards()}
                </main>
            </div>
        );
    }
}

export default App;
