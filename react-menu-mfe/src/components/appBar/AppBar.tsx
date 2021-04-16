import React from "react";
import { navigateToUrl } from "single-spa";

import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";

const AppBar = () => {
  const handleMenu = (url: string) => navigateToUrl(url);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => handleMenu("/")}
        >
          <AppsIcon />
        </IconButton>

        <Box flex="1">
          <Typography variant="h6">Tech Talking sdad</Typography>
        </Box>

        <Button color="inherit" onClick={() => handleMenu("/")}>
          Welcome
        </Button>
        <Button color="inherit" onClick={() => handleMenu("/home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleMenu("/users")}>
          Users
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
