import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class NewCard extends Component {
    render() {
        return <div className="new-card">
            This is a new card
            <input className="new-card-title" placeholder="Please enter a title..."/>
        </div>
    }
}

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

    newCardOrNothing() {
        if (this.state.addingNewCard)
            return <NewCard/>
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
