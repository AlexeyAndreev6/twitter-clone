import { Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { withStyles } from "tss-react/mui";

export const SearchTextField = withStyles(TextField, (theme:Theme) => ({
    root: {
      "& .MuiOutlinedInput-root": {
        borderRadius: 30,
        backgroundColor: "#E6ECF0",
        padding: 0,
        paddingLeft: 15,
        "& .Mui-focused": {
          backgroundColor: "#fff",
          "& fieldset": {
            borderWidth: 1,
            borderColor: theme.palette.secondary.main,
          },
          "& svg path": {
            fill: theme.palette.primary.main,
          },
        },
        "&:hover": {
          "& fieldset": {
            borderColor: "transparent",
          },
        },
        "& fieldset": {
          borderColor: "transparent",
          borderWidth: 1,
        },
      },
      "& .MuiOutlinedInput-input": {
        padding: "12px 14px 14px 5px",
      },
    },
  }));