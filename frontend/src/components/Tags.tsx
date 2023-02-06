import React from "react";

import {
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { useHomeStyles } from "../pages/Home/theme";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsTagsLoaded, selectTagsItems } from "../store/ducks/tags/selectors";

const Tags: React.FC = (): React.ReactElement | null => {
  const { classes } = useHomeStyles();
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  console.log(isLoaded, 222);

  if (!isLoaded) return null;

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((obj) => (
          <React.Fragment key={obj._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${obj.name}`}>
                <ListItemText
                  primary={obj.name}
                  secondary={
                    <Typography component="span" variant="body1">
                      Твитов: {obj.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Tags;
