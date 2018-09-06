import React, {Component} from 'react'
import Header from './Header'
import Board from './Board'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path='/board' component={Board}/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}

export default App;
