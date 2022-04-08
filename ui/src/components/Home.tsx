import { Grid, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { useMatch } from "react-router";
// @ts-ignore
import background from "../resources/home.jpg";
import { Resume } from "./Resume";

const useStyles = makeStyles(() => ({
  paperContainer: {
    backgroundImage: `url(${background})`,
    minHeight: "100vh",
    backgroundSize: "cover",
  },
}));

export const Home: FunctionComponent = () => {
  const classes = useStyles();
  const match = useMatch("/:page");

  return (
    <Paper className={classes.paperContainer}>
      <Grid
        component={"footer"}
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <ListItem>
                <Resume active={match?.params.page === "resume"} />
              </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
