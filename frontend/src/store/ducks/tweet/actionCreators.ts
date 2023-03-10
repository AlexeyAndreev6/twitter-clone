import { Tweet } from "./../tweets/contracts/state";
import { LoadingState, TweetState } from "./contracts/state";
import {
  FetchTweetDataActionInterface,
  SetTweetDataActionInterface,
  SetTweetLoadingStateInterface,
  TweetActionsType,
} from "./contracts/actionTypes";

export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateInterface => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweetData = (payload: string): FetchTweetDataActionInterface => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
});

export type TweetActions =
  | SetTweetDataActionInterface
  | FetchTweetDataActionInterface
  | SetTweetLoadingStateInterface;
