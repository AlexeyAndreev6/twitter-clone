import { AddFormState, LoadingState, TweetsState } from "./contracts/state";
import { RootState } from "../../store";
import { createSelector } from "reselect";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweets(state).addFormState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
