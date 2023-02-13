import {
  Avatar,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";

import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchTweetData,
  setTweetData,
} from "../../../store/ducks/tweet/actionCreators";
import {
  selectIsTweetLoading,
  selectTweetData,
} from "../../../store/ducks/tweet/selectors";
import { useHomeStyles } from "../theme";

export const FullTweet: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetData);
  const isLoading = useSelector(selectIsTweetLoading);
  const params: { id?: string } = useParams();
  const id = params.id;
  const { classes } = useHomeStyles();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.tweetsCentered}>
        <CircularProgress />
      </div>
    );
  }

  if (tweetData) {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classNames(classes.tweetsHeaderUser)}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <Typography>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetsUserName}>
                @{tweetData.user.username}
              </span>
              &nbsp;
              <span className={classes.tweetsUserName}>·</span>&nbsp;
              <span className={classes.tweetsUserName}>1 ч</span>
            </div>
          </Typography>

          {/*   <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div> */}
        </div>
        <Typography className={classes.fullTweetText} variant="body1" gutterBottom>
          {tweetData.text}
        </Typography>
      </Paper>
    );
  }

  return null;
};
