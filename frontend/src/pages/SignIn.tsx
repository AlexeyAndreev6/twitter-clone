import * as React from "react";
import { makeStyles } from "tss-react/mui";
import { Typography, Button } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MessageIcon from "@mui/icons-material/ModeCommentOutlined";

import { ModalBlock } from "../components/ModalBlock";

export const useStylesSignIn = makeStyles()((theme) => {
  return {
    wrapper: {
      display: "flex",
      height: "100vh",
    },
    blueSide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#71C9F8",
      flex: "0 0 50%",
      overflow: "hidden",
      position: "relative",
    },
    blueSideBigIcon: {
      position: "absolute",
      left: "50%",
      top: "53%",
      transform: "translate(-50%,-50%)",
      height: "300%",
      width: "300%",
    },
    blueSideListInfo: {
      position: "relative",
      listStyle: "none",
      margin: 0,
      padding: 0,
      width: 380,
      "& h6": {
        display: "flex",
        alignItems: "center",
        color: "white",
        fontWeight: 700,
        fontSize: 20,
      },
    },
    blueSideListInfoIcon: {
      fontSize: 32,
      marginRight: 15,
    },
    blueSideListInfoItem: {
      marginBottom: 40,
    },
    loginSide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 50%",
      overflow: "hidden",
    },
    loginSideTwitterIcon: {
      fontSize: 45,
    },
    loginSideWrapper: {
      width: 380,
    },
    loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 60,
      marginTop: 20,
    },
    loginSideField: {
      marginBottom: 18,
    },
    registerField: {
      marginBottom: theme.spacing(5),
    },
    loginFormControl: {
      marginBottom: theme.spacing(2),
    },
  };
});

export const SignIn: React.FC = (): React.ReactElement => {
  const { classes } = useStylesSignIn();
  const [visibleModal, setVisibleModal] = React.useState<"signIn" | "signUp">();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal("signIn");
  };
  const handleClickOpenSignUp = (): void => {
    setVisibleModal("signUp");
  };
  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас.
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickOpenSignIn}
            fullWidth
          >
            Войти
          </Button>
          <ModalBlock
            visible={visibleModal === "signIn"}
            onClose={handleCloseModal}
            title="Войти в аккаунт"
          >
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  type="email"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  type="password"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCloseModal}
                >
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === "signUp"}
            onClose={handleCloseModal}
            title="Создайте учетную запись"
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Имя"
                  type="name"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  type="email"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  type="password"
                  fullWidth
                  variant="filled"
                  InputLabelProps={{ shrink: true }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCloseModal}
                >
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
}

