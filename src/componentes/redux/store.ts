import { combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

// Importamos applyMiddleware de Redux, para poder agregar Thunk o Saga como Middleware
import { createStore, applyMiddleware } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";

// Importamos el thunk de redux-thunk
import thunk from "redux-thunk";
import { reduceEachLeadingCommentRange } from "typescript";
import favoritosReducer from "./favoritosReducers";

const rootReducer = combineReducers({
  personajes: reducer,
  favoritos: favoritosReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos el hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //
);
