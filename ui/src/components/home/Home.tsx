import { Grid, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { useMatch } from "react-router";
// @ts-ignore
import background from "../../resources/home.jpg";
import { Contact } from "../contact/Contact";
import { Resume } from "../resume/Resume";
import { Services } from "../services/Services";
import { HomeDetails } from "./HomeDetails";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  },
}));

export const Home: FunctionComponent = () => {
  const classes = useStyles();
  const match = useMatch("/:page");

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HomeDetails />
        <Grid item>
          <ListItem>
            <Services active={match?.params.page === "services"} />
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
            <Resume active={match?.params.page === "resume"} />
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
            <Contact active={match?.params.page === "contact"} />
          </ListItem>
        </Grid>
      </Grid>
    </Paper>
  );
};
