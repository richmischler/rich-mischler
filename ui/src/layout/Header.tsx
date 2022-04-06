import { AppBar, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";

const useStyles = makeStyles(() => ({
  header: {
    gridArea: "header",
    boxShadow: "0 0 3px 0 rgba(0,0,0, 0.1)",
  },
}));

export const Header: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.header}
      position="sticky"
      color="inherit"
      data-testid="app-header"
    >
      <Grid container justifyContent={"flex-end"} alignItems={"center"}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Typography variant="h3" color="inherit" component="div"></Typography>
        </IconButton>
      </Grid>
    </AppBar>
  );
};
