import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import Router from './Router';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools({realtime: true, port: '8000'})(
    applyMiddleware(reduxThunk)
));

const SeriesApp = (props) => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;