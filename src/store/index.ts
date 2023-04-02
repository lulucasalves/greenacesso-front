import { combineReducers, createStore } from "redux";

import { favoriteReducer } from "./favorites";
import { characterReducer } from "./filters";
import { layoutReducer } from "./layout";

const rootReducer = combineReducers({
  characters: characterReducer,
  layout: layoutReducer,
  favorites: favoriteReducer,
});

const store = createStore(rootReducer);

export default store;

export type IRootState = ReturnType<typeof store.getState>;

export type IAppDispatch = typeof store.dispatch;
