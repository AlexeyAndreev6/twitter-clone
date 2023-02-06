import { Action } from "redux";
import { Tweet } from "../../tweets/contracts/state";
import { LoadingState, TweetState } from "./state";

export enum TweetActionsType {
  FETCH_TWEET_DATA = "tweet/FETCH_TWEET_DATA",
  SET_TWEET_DATA = "tweet/SET_DATA",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET_DATA;
  payload: TweetState["data"];
}
export interface FetchTweetDataActionInterface
  extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET_DATA;
  payload: string;
}
export interface SetTweetLoadingStateInterface
  extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

// {
//   type: 'tweet/FETCH_TWEET_DATA',
//     payload:'63dba36bf8a070c447566b94'
// }
