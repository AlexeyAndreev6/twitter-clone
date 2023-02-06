// @ts-nocheck
import { Tweet } from './../../tweets/contracts/state';
import { FetchTweetDataActionInterface } from "./contracts/actionType";
import { TweetsApi } from "./../../../services/api/tweetsApi";

import { setTweetData, setTweetLoadingState } from "../tweet/actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingState } from "./contracts/state";
import { TweetActionsType } from "../tweet/contracts/actionTypes";

export function* fetchTweetDataRequest({
  payload: tweetId,
}: FetchTweetDataActionInterface) {
  try {
    const data:Tweet = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
