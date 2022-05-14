import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import about from "../../resources/about.json";

const useStyles = makeStyles((theme) => ({
  header2: {
    color: theme.palette.secondary.contrastText,
    fontSize: 50,
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: 0,
    marginToo: 0,
    textAlign: "center",
  },
  description: {
    color: theme.palette.secondary.contrastText,
    fontSize: 20,
    textAlign: "center",
    wordWrap: "break-word",
    width: "100%",
  },
}));

export const HomeDetails: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <h2 className={classes.header2}>{about.me.name}</h2>
      <p className={classes.description}>{about.me.description}</p>
    </>
  );
};
