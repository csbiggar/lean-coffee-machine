import React, {Component} from 'react'
import Header from './Header'
import Board from './Board'
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path='/board' render={() => this.renderBoard(this.props.persistenceAdaptor)}/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }

    renderBoard(repository) {
        return (<Board persistenceAdaptor={repository}/>)
    }
}

export default App;
