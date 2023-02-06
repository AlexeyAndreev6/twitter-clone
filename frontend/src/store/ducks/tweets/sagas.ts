// @ts-nocheck

import { TweetsApi } from "./../../../services/api/tweetsApi";
import {
  setTweets,
  setTweetsLoadingState,
  TweetsActionsType,
  addTweet,
  FetchAddTweetActionInterface,
} from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { LoadingState } from "./contracts/state";

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}
export function* fetchAddTweetRequest({
  payload,
}: FetchAddTweetActionInterface) {
  try {
    const data = {
      _id: Math.random().toString(36).substring(2),
      text: payload,
      user: {
        fullname: "Test user",
        username: "test",
        avatarUrl: "https://source.unsplash.com/random/100x100?5",
      },
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
