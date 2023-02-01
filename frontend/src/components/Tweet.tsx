import React from 'react';
import { useHomeStyles } from '../pages/Home';

import { Typography, Paper, Grid, Avatar, IconButton } from '@mui/material';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import LikeIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/ReplyOutlined';

import classNames from 'classnames';

interface TweetProps {
    text: string;
    // classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

const Tweet: React.FC<TweetProps> = ({ text, user }: TweetProps): React.ReactElement => {
    const { classes } = useHomeStyles();
    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
            <Grid container spacing={3}>
                <Grid item xs={1}><Avatar className={classes.tweetAvatar} alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarUrl} />
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullname}</b>
                        <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetsUserName}>·</span>&nbsp;
                        <span className={classes.tweetsUserName}>1 ч</span>
                        </Typography>
                    <Typography variant='body1'>{text}</Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton color="primary">
                                <CommentIcon style={{ fontSize: 20 }} />
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <RepostIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <LikeIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color="primary">
                                <ShareIcon style={{ fontSize: 20 }} />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Tweet;