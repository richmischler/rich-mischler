import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import services from "../../resources/services.json";
// @ts-ignore
import site from "../../resources/site.jpg";

export interface ServicesProps {
  readonly active?: boolean | undefined;
}

export const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.dark,
  },
  card: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 1, 1, 1),
    maxWidth: "100vh",
    minWidth: 350,
  },
  media: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "100vh",
    minHeight: 250,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    variant: "body2",
  },
}));

export const Services: FunctionComponent<ServicesProps> = ({ active }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/contact");
  };

  if (!active) {
    return <div />;
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Card className={classes.card}>
        <CardMedia className={classes.media}>
          <img src={site} alt={"site"} />
        </CardMedia>
        <CardContent>
          <Typography className={classes.title}>{services.ui.title}</Typography>
          <Typography className={classes.desc}>
            {" "}
            {services.ui.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            variant={"outlined"}
            onClick={handleClick}
            size="small"
          >
            Contact Me
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
