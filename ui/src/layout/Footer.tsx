import { Grid, Link, ListItem, ListItemIcon, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email, Phone, Web } from "@material-ui/icons";
import { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1, 1, 1, 1),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    "& a": {
      color: "inherit",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      "& svg": {
        fontSize: "0.9rem",
        marginRight: 2,
      },
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

export const Footer: FunctionComponent = () => {
  const classes = useStyles();
  const email = "richmischer@gmail.com";
  const phone = "317-658-3828";
  const li = "https://www.linkedin.com/in/richardmischler/";

  return (
    <>
      <Grid
        component={"footer"}
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        className={classes.footer}
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Link href={`mailto:${email}`}>
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Grid>
            <Grid item>
              <Link href={`tel:${phone}`}>
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Grid>
            <Grid item>
              <Link href={li} target="_blank">
                <ListItem>
                  <ListItemIcon>
                    <Web />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
