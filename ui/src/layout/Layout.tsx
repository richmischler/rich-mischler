import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../components/Home";
import { Footer } from "./Footer";
import { Header } from "./Header";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
}));

export const Layout: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <Header />
      </Grid>
      <Grid>
        <Home>
          <Outlet />
        </Home>
      </Grid>
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
};
