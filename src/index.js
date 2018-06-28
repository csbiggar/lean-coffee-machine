import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import BoardRepository from './BoardRepository';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App persistenceAdaptor={new BoardRepository()}/>, document.getElementById('root'));
registerServiceWorker();
