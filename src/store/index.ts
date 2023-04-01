import { combineReducers, createStore } from "redux";

import { characterReducer } from "./characters";
import { layoutReducer } from "./layout";

const rootReducer = combineReducers({
  characters: characterReducer,
  layout: layoutReducer,
});

const store = createStore(rootReducer);

export default store;

export type IRootState = ReturnType<typeof store.getState>;

export type IAppDispatch = typeof store.dispatch;
