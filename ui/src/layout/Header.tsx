import {
  Grid,
  Link,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <Grid container justifyContent={"flex-end"}>
      <Grid item>
        <Grid container>
          <Grid item>
            <Link href={`/services`}>
              <ListItem>
                <ListItemIcon>
                  <Typography>Services</Typography>
                </ListItemIcon>
              </ListItem>
            </Link>
          </Grid>
          <Grid item>
            <Link href={`/resume`}>
              <ListItem>
                <ListItemIcon>
                  <Typography>Resume</Typography>
                </ListItemIcon>
              </ListItem>
            </Link>
          </Grid>
          <Grid item>
            <Link href={`/contact`}>
              <ListItem>
                <ListItemIcon>
                  <Typography>Contact</Typography>
                </ListItemIcon>
              </ListItem>
            </Link>
          </Grid>
          <Grid item>
            <Link href={`/`}>
              <ListItem>
                <ListItemIcon>
                  <HomeOutlined />
                </ListItemIcon>
              </ListItem>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
