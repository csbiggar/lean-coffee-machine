import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import {LocalStorageBoardRepository} from './BoardRepositories';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App persistenceAdaptor={new LocalStorageBoardRepository()}/>,
    document.getElementById('root')
);

registerServiceWorker();
