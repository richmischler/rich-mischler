import { List, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";

export interface DetailsProps {
  readonly title: string;
  readonly detailOne: string;
  readonly detailTwo: string;
  readonly detailThree: string;
  readonly detailFour: string;
}

const useStyles = makeStyles((theme) => ({
  header3: {
    color: "#414141",
    fontSize: 22,
    fontWeight: 400,
    lineHeight: 1.1,
    textAlign: "center",
    marginBottom: 0,
    marginToo: 0,
  },
  detail: {
    textAlign: "center",
    wordWrap: "break-word",
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 1),
  },
}));

export const Details: FunctionComponent<DetailsProps> = ({
  title,
  detailOne,
  detailTwo,
  detailThree,
  detailFour,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List>
        <h3 className={classes.header3}>{title}</h3>
        <p className={classes.detail}>{detailOne}</p>
        <p className={classes.detail}>{detailTwo}</p>
        <p className={classes.detail}>{detailThree}</p>
        <p className={classes.detail}>{detailFour}</p>
      </List>
    </Paper>
  );
};
