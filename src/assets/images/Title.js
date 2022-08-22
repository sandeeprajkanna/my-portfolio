import * as React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Title = (props) => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h1" color="initial">
        SANDEEP RAJ
      </Typography>
    </>
  );
};

export default Title;
