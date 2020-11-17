import { combineReducers} from 'redux';
import productosReducer from './productoReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});