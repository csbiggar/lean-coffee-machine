import React, {Component} from 'react';
import NewCard from './NewCard';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingNewCard: false
        }
    }

    handleAddCardClick() {
        this.setState(
            {
                addingNewCard: true
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

    newCardOrNothing() {
        if (this.state.addingNewCard)
            return <NewCard onChange={(e) => this.handleCardTitleChange(e)}/>
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Lean Coffee Machine</h1>
                </header>
                <main>
                    <button id="add-a-card" onClick={() => this.handleAddCardClick()}>Add a card</button>
                    {this.newCardOrNothing()}
                </main>
            </div>
        );
    }
}

export default App;
