import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Container,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Button,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAddAlt1Outlined";

import Tweet from "../../components/Tweet";
import SideMenu from "../../components/SideMenu";
import AddTweetForm from "../../components/AddTweetForm";
import { useHomeStyles } from "./theme";
import { SearchTextField } from "../../components/SearchTextField";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";
import Tags from "../../components/Tags";
import { Route } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { fetchTags } from "../../store/ducks/tags/actionCreators";
import { FullTweet } from "./components/FullTweet";

export const Home = (): React.ReactElement => {
  const { classes } = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <section>
      <Container maxWidth="lg" className={classes.wrapper}>
        <Grid container spacing={3}>
          <Grid item sm={1} md={3}>
            <SideMenu />
          </Grid>
          <Grid item sm={8} md={6}>
            <Paper className={classes.tweetsWrapper} variant="outlined">
              <Paper className={classes.tweetsHeader} variant="outlined">
                <Route path="/home/:any">
                  <BackButton />
                </Route>

                <Route path={["/home", "/home/search"]} exact>
                  <Typography variant="h6">Твиты</Typography>
                </Route>

                <Route path="/home/tweet">
                  <Typography variant="h6">Твитнуть</Typography>
                </Route>
              </Paper>

              <Route path={["/home", "/home/search"]} exact>
                <Paper>
                  <div className={classes.addForm}>
                    <AddTweetForm />
                  </div>
                  <div className={classes.addFormBottomLine} />
                </Paper>
              </Route>
              <Route path="/home/tweet/:id" exact component={FullTweet} />
              <Route path="/home" exact>
                {isLoading ? (
                  <div className={classes.tweetsCentered}>
                    <CircularProgress />
                  </div>
                ) : (
                  tweets.map((tweet) => <Tweet {...tweet} key={tweet._id} />)
                )}
              </Route>
            </Paper>
          </Grid>
          <Grid item sm={3} md={3}>
            <div className={classes.rightSide}>
              <SearchTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Поиск по Твиттеру"
                fullWidth
              />
              <Tags />
              <Paper className={classes.rightSideBlock}>
                <Paper
                  className={classes.rightSideBlockHeader}
                  variant="outlined"
                >
                  <b>Кого читать?</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Alexey Andreev"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Dock"
                      secondary={
                        <Typography component="span" variant="body1">
                          @Dock
                        </Typography>
                      }
                    />
                    <Button color="primary">
                      <PersonAddIcon />
                    </Button>
                  </ListItem>
                  <Divider component="li" />
                </List>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
