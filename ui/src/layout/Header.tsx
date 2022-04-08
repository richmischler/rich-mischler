import { Grid, Link, ListItem, ListItemIcon } from "@material-ui/core";
import { HomeOutlined, Subject } from "@material-ui/icons";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <Grid container justifyContent={"flex-end"}>
      <Grid item>
        <Grid container>
          <Grid item>
            <Link href={`/resume`}>
              <ListItem>
                <ListItemIcon>
                  <Subject />
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
