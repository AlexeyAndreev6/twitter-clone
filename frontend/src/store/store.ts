import { TweetState } from "./ducks/tweet/contracts/state";
import { TagsState } from "./ducks/tags/contracts/state";
import { TweetsState } from "./ducks/tweets/contracts/state";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet: TweetState;
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
