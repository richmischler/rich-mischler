import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
}));

export interface LayoutProps {
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const Layout: FunctionComponent<LayoutProps> = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <Outlet />
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};
