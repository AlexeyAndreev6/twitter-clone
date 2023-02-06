import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();

  const handleClickButton = () => {
    history.goBack();
  };

  return (
    <IconButton
      onClick={handleClickButton}
      color="primary"
      style={{ marginRight: 15 }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;
