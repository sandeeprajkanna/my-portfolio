import * as React from "react";
import { useTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const Logo = (props) => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h5" color="initial">
        My Portfolio
      </Typography>
    </>
  );
};

export default Logo;
