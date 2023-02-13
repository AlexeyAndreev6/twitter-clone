import React from "react";

import { Typography, Paper, Avatar, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepostIcon from "@mui/icons-material/RepeatOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareIcon from "@mui/icons-material/ReplyOutlined";

import classNames from "classnames";
import { useHomeStyles } from "../pages/Home/theme";
import { Link } from "react-router-dom";

interface TweetProps {
  _id: string;
  text: string;
  // classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
}: TweetProps): React.ReactElement => {
  const { classes } = useHomeStyles();
  return (
    <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
      <Paper
        className={classNames(classes.tweetsHeader, classes.tweet)}
        variant="outlined"
      >
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetsUserName}>@{user.username}</span>
            &nbsp;
            <span className={classes.tweetsUserName}>·</span>&nbsp;
            <span className={classes.tweetsUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>{text}</Typography>
          <div className={classes.tweetFooter}>
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
          </div>
        </div>
      </Paper>
    </Link>
  );
};

export default Tweet;
