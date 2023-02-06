import React from "react";

import { Button, Typography, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListIcon from "@mui/icons-material/ListAltOutlined";
import UserIcon from "@mui/icons-material/PermIdentityOutlined";
import CreateIcon from "@mui/icons-material/Create";

import { useHomeStyles } from "../pages/Home/theme";
import { ModalBlock } from "./ModalBlock";
import AddTweetForm from "./AddTweetForm";
import { Link } from "react-router-dom";

const SideMenu: React.FC = (): React.ReactElement => {
  const { classes } = useHomeStyles();

  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true);
  };

  const OnCloseAddTweet = () => {
    setVisibleAddTweet(false);
  };

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton color="primary" className={classes.logo}>
            <TwitterIcon color="primary" className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneOutlinedIcon
            className={classes.sideMenuListItemIcon}
          />
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            className={classes.sideMenuListItemLabel}
            variant="h6"
          >
            Профиль
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          fullWidth
          color="primary"
        >
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            Твитнуть
          </Typography>
          <Typography sx={{ display: { md: "none", xs: "block" } }}>
            <CreateIcon />
          </Typography>
        </Button>
        <ModalBlock onClose={OnCloseAddTweet} visible={visibleAddTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};

export default SideMenu;
