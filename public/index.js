import 'isomorphic-fetch';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(thunk, logger)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
