import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email, LinkedIn, Map, Phone } from "@material-ui/icons";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import about from "../../resources/about.json";
// @ts-ignore
import pic from "../../resources/me.png";

export interface ContactProps {
  readonly active?: boolean;
}

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginBottom: theme.spacing(1),
  },
  card: {
    display: "flex",
    flexDirection: "row",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Contact: FunctionComponent<ContactProps> = ({ active }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClose = () => {
    return navigate("/");
  };

  if (!active) {
    return <div />;
  }

  return (
    <Dialog
      open={active}
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby={"contact-dialog-title"}
    >
      <DialogTitle id={"contact-dialog-title"}>Contact Me</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Grid
          container
          justifyContent={"center"}
          className={classes.cardContainer}
        >
          <Card raised className={classes.card}>
            <CardMedia>
              <img src={pic} alt={"Contact Photo"} />
            </CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography variant={"h3"}>{about.me.name}</Typography>
              <Typography variant={"subtitle1"}>
                {about.me.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container direction={"column"} justifyContent={"center"}>
          <Grid item>
            <Link href={`mailto:${about.me.email}`} target="_blank">
              <ListItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText>
                  <Typography component="span" variant="subtitle2">
                    {about.me.email}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </Grid>
          <Grid item>
            <Link href={about.me.linkedin} target="_blank">
              <ListItem>
                <ListItemIcon>
                  <LinkedIn />
                </ListItemIcon>
                <ListItemText>
                  <Typography component="span" variant="subtitle2">
                    LinkedIn
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </Grid>
          <Grid item>
            <Link href={`tel:${about.me.phone}`} target="_blank">
              <ListItem>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText>
                  <Typography component="span" variant="subtitle2">
                    {about.me.phone}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </Grid>
          <Grid item>
            <ListItem>
              <ListItemIcon>
                <Map />
              </ListItemIcon>
              <ListItemText>
                <Typography component="span" variant="subtitle2">
                  {about.me.location}
                </Typography>
              </ListItemText>
            </ListItem>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
