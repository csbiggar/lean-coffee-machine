import React, {Component} from 'react';
import Board from './Board'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Lean Coffee Machine</h1>
                </header>

                <Board/>
            </div>
        );
    }
}

export default App;
