import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import {SampleBoardRepository} from './BoardRepositories';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App persistenceAdaptor={new SampleBoardRepository()}/>,
    document.getElementById('root')
);

registerServiceWorker();
