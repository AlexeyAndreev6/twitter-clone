// @ts-nocheck
import { call, put, takeLatest } from "redux-saga/effects";
import { TweetsApi } from "./../../../services/api/tweetsApi";
import { AddFormState, LoadingState } from "./contracts/state";
import {
  addTweet,
  setAddFormState,
  setTweets,
  setTweetsLoadingState,
} from "./actionCreators";
import {
  FetchAddTweetActionInterface,
  TweetsActionsType,
} from "./contracts/actionTypes";

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
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
