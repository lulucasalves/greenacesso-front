import { combineReducers, createStore } from "redux";

import { characterReducer } from "./characters";

const rootReducer = combineReducers({
  characters: characterReducer,
});

const store = createStore(rootReducer);

export default store;

export type IRootState = ReturnType<typeof store.getState>;

export type IAppDispatch = typeof store.dispatch;
