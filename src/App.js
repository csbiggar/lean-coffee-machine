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
        cards.push({});

        this.setState(
            {
                cards: cards
            }
        )
    }

    handleCardTitleChange(event) {
        this.setState(
            {
                card: {title: event.target.value}
            }
        )
    }

    renderCards() {
        return (
            <div>
                {this.state.cards.map((card, i) =>
                    <Card key={i}
                          onChange={(e) => this.handleCardTitleChange(e)}
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
