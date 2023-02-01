import React from 'react';
import { Typography, Paper, Grid, Container, styled, InputBase, Theme } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import { grey } from '@mui/material/colors';

import Tweet from '../components/Tweet';
import SideMenu from '../components/SideMenu';


export const useHomeStyles = makeStyles()((theme: Theme) => {
    return {
        wrapper: {
            height: '100vh'
        },
        logo: {
            margin: '10px 0',
        },
        logoIcon: {
            fontSize: 36,
        },
        sideMenuList: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
            width:230,
        },
        sideMenuListItem: {
            cursor: 'pointer',
            '&:hover': {
                '& div': {
                    backgroundColor: 'rgba(29,161,242,0.1)',
                    'h6':{
                        color: theme.palette.primary.main,
                    },
                    '& svg path':{
                        fill: theme.palette.primary.main,
                    }
                }
            },
            '& div': {
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 25px 0 20px',
                position: 'relative',
                left: -10,
                borderRadius: 30,
                height: 55,
                marginBottom: 1,
                transition:'bacground-color 0.1s ease-in-out',
            }
        },
        sideMenuListItemLabel: {
            fontWeight: 700,
            fontSize: 20,
            marginLeft: 15,
        },
        sideMenuListItemIcon: {
            fontSize: 28,
            marginLeft: -5,
        },
        sideMenuTweetButton: {
            padding: theme.spacing(3),
            marginTop: theme.spacing(4),
        },
        tweetsWrapper: {
            borderRadius: 0,
            height: '100%',
            borderTop: 0,
            borderBottom: 0,
        },
        tweetsHeader: {
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
            '& h6': {
                fontWeight: 800,
            }
        },
        tweet: {
            cursor: 'pointer',
            paddingTop: 15,
            paddingLeft: 20,
            '&:hover': {
                backgroundColor: 'rgb(245,248,250)',
            }
        },
        tweetsUserName: {
            color: grey[500],
        },
        tweetAvatar: {
            width: 40,
            height: 40,
        },
        tweetFooter: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
        }
    };
});

const SearchTextField = styled(InputBase)(() => ({
    input: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        height: 45,
        padding: 0,
    }
}));

export const Home = () => {
    const { classes } = useHomeStyles();

    return (
        <section>
            <Container maxWidth="lg" className={classes.wrapper}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <SideMenu />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.tweetsWrapper} variant='outlined'>
                            <Paper className={classes.tweetsHeader} variant='outlined'>
                                <Typography variant='h6'>Главная</Typography>
                            </Paper>
                            {
                                [...new Array(20).fill(<Tweet text='Lorem' user={{
                                    fullname: 'Alexey Andreev',
                                    username: 'AlexeyAndreev311',
                                    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                                }} />)]
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <SearchTextField placeholder="Поиск по Твиттеру" fullWidth />
                    </Grid>
                </Grid>
            </Container>

        </section>
    )
}