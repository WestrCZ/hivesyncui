import {
  AppBar, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography,
} from "@mui/material";
import {
  Outlet, NavLink,
} from "react-router";
import useUserStore from "../../stores/useUserStore";
import paths from "../../paths";
import PathDefinition from "../../PathDefinition";

const drawerWidth = 240;

interface NavigationElement {
  name: string;
  path: PathDefinition;
}

const navigation: NavigationElement[] = [{
  name: "Bagr",
  path: paths.bagr,
}];

const Layout: React.FC = () => {
  const userDetail = useUserStore((state) => state.userDetail);

  return userDetail
    ? (
      <Box sx={
        {
          display: "flex",
        }
      }
      >
        <AppBar
          position="fixed"
          sx={
            {
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }
          }
        >
          <Toolbar>
            <Typography component="div" noWrap variant="h6">
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            [`& .MuiDrawer-paper`]: {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            flexShrink: 0,
            width: drawerWidth,
          }}
          variant="permanent"
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {navigation.map((navElement) => (
                <ListItem disablePadding key={navElement.name}>
                  <ListItemButton component={NavLink} to={navElement.path.generate()}>
                    <ListItemText primary={navElement.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    )
    : (
      <Outlet />
    );
};

export default Layout;
