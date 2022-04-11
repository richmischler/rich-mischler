import { Grid, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { useMatch } from "react-router";
// @ts-ignore
import background from "../../resources/home.jpg";
import { Resume } from "../resume/Resume";

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
        <Grid item>
          <ListItem>
            <Resume active={match?.params.page === "resume"} />
          </ListItem>
        </Grid>
      </Grid>
    </Paper>
  );
};
