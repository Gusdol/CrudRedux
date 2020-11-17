import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk),
        // cuando la extension de redux no esta instalado se utiliza este codigo para que funcione en cualquier navegador
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f
    )
);

export default store;
