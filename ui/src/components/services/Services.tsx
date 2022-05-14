import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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

export const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 438,
  },
  media: {
    height: 292,
  },
  type: {
    variant: "h5",
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
    <Card className={classes.card}>
      <CardMedia className={classes.media}>
        <img src={site} />
      </CardMedia>
      <CardContent>
        <Typography className={classes.type} gutterBottom component="div">
          {services.ui.title}
        </Typography>
        <Typography variant="body2">{services.ui.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">
          Contact Me
        </Button>
      </CardActions>
    </Card>
  );
};
