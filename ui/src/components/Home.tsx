import { Grid, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
// @ts-ignore
import background from "../resources/home.png";
import { Resume } from "./Resume";

const useStyles = makeStyles(() => ({
  paperContainer: {
    backgroundImage: `url(${background})`,
    minHeight: "100vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  },
}));

export const Home: FunctionComponent = () => {
  const classes = useStyles();
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
                <Resume />
              </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
