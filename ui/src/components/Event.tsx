import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";

export interface EventProps {
  readonly year: string;
  readonly company: string;
  readonly title: string;
  readonly description: string;
}

const useStyles = makeStyles((theme) => ({
  date: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    marginBottom: 0,
    marginTop: 10,
  },
  header3: {
    color: "#414141",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: "center",
    marginBottom: 0,
    marginToo: 0,
  },
  header4: {
    color: "#878787",
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.1,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 30,
  },
  description: {
    textAlign: "center",
    wordWrap: "break-word",
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 1),
  },
}));

export const Event: FunctionComponent<EventProps> = ({
  year,
  company,
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.date}>{year}</div>
      <h3 className={classes.header3}>{company}</h3>
      <h4 className={classes.header4}>{title}</h4>
      <p className={classes.description}>{description}</p>
    </Paper>
  );
};
