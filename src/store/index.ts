import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers:
import {DialogsReducer} from "./Reducers/Dialogs/dialogs-reducer";


// Root reducer:
const rootReducer = combineReducers({
	dialogs: DialogsReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
	const middlewares = [thunkMiddleware];
	const middleWareEnhancer = applyMiddleware(...middlewares);
	
	const store = createStore(
		rootReducer,
		composeWithDevTools(middleWareEnhancer)
	);
	
	return store;
}