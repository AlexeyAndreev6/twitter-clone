import React from 'react';

import { useHomeStyles } from '../pages/Home';

import { Button, Typography } from '@mui/material';
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListIcon from '@mui/icons-material/ListAltOutlined';
import UserIcon from '@mui/icons-material/PermIdentityOutlined';


const SideMenu: React.FC = (): React.ReactElement => {
    const { classes } = useHomeStyles();
    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton color="primary" className={classes.logo}>
                    <TwitterIcon color="primary" className={classes.logoIcon} />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton >
                        <SearchIcon className={classes.sideMenuListItemIcon} />
                    </IconButton>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton >
                        <NotificationsNoneOutlinedIcon className={classes.sideMenuListItemIcon} />
                    </IconButton >
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton >
                        <EmailOutlinedIcon className={classes.sideMenuListItemIcon} />
                    </IconButton>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton >
                        <BookmarkIcon className={classes.sideMenuListItemIcon} />
                    </IconButton>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton >
                        <ListIcon className={classes.sideMenuListItemIcon} />
                    </IconButton>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <IconButton>
                        <UserIcon className={classes.sideMenuListItemIcon} />
                    </IconButton>
                    <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button variant='contained' fullWidth color='primary'>Твитнуть</Button>
            </li>
        </ul>
    );
};

export default SideMenu;