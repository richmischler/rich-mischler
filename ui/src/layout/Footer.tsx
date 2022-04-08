import { Grid, Link, ListItem, ListItemIcon } from "@material-ui/core";
import { Email, LinkedIn, Phone } from "@material-ui/icons";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  const email = "richmischer@gmail.com";
  const li = "https://www.linkedin.com/in/richardmischler/";
  const phone = "317-658-3828";

  return (
    <>
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
              <Link href={`mailto:${email}`}>
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Grid>
            <Grid item>
              <Link href={li} target="_blank">
                <ListItem>
                  <ListItemIcon>
                    <LinkedIn />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Grid>
            <Grid item>
              <Link href={`tel:${phone}`} target="_blank">
                <ListItem>
                  <ListItemIcon>
                    <Phone />
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
