import { Grid, Link, ListItem, ListItemIcon } from "@material-ui/core";
import { Email, LinkedIn } from "@material-ui/icons";
import { FunctionComponent } from "react";
import about from "../resources/about.json";

export const Footer: FunctionComponent = () => {
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
              <Link href={`mailto:${about.me.email}`} target={"_blank"}>
                <ListItem>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Grid>
            <Grid item>
              <Link href={about.me.linkedin} target="_blank">
                <ListItem>
                  <ListItemIcon>
                    <LinkedIn />
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
