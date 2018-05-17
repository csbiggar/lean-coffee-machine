import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addingNewCard: false
        }
    }

    handleAddCardClick() {
        console.log("card added")
        this.setState(
            {
                addingNewCard: true
            }
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

                    { this.state.addingNewCard &&
                        <div className="new-card">
                            This is a new card
                        </div>
                    }
                </main>
            </div>
        );
    }
}

export default App;
