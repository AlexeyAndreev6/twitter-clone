import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextareaAutosize,
  CircularProgress,
  IconButton,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Alert from "@mui/material/Alert";

import { useHomeStyles } from "../pages/Home/theme";
import { useDispatch } from "react-redux";
import { fetchAddTweet } from "../store/ducks/tweets/actionCreators";
import { useSelector } from "react-redux";
import { selectAddFormState } from "../store/ducks/tweets/selectors";
import { AddFormState } from "../store/ducks/tweets/contracts/state";

interface AddTweetFormProps {
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  maxRows,
}): React.ReactElement => {
  const { classes } = useHomeStyles();
  const dispatch = useDispatch();

  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = useState<string>("");
  const textLimitPercent = (text.length / 280) * 100;
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (e: React.FormEvent<HTMLButtonElement>): void => {
    dispatch(fetchAddTweet(text));
    setText("");
    e.preventDefault();
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          maxRows={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classes.addFormBottomActions}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={textLimitPercent > 100 ? { color: "red" } : undefined}
                />
                <CircularProgress
                  style={{ color: "rgba(0,0,0,0.1)" }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            disabled={!text || textLimitPercent > 100}
            color="primary"
            variant="contained"
            onClick={handleClickAddTweet}
          >
            {addFormState === AddFormState.LOADING ? (
              <CircularProgress color="primary" size={16}/>
            ) : (
              "Твитнуть"
            )}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">Возникла ошибка при добавлении твита :(</Alert>
      )}
    </div>
  );
};

export default AddTweetForm;
