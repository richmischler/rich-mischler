import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
  content: {},
}));

export interface LayoutProps {
  disableHeader?: boolean;
  disableFooter?: boolean;
}

export const Layout: FunctionComponent<LayoutProps> = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction={"row"}
      alignContent={"space-between"}
      className={classes.root}
    >
      <Grid item xs={12}>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignContent={"space-between"}
          className={classes.content}
        >
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={11} lg={11}>
            <Outlet />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};
