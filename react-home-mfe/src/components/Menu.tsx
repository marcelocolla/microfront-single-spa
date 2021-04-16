import React from "react";
import { useHistory } from "react-router-dom";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const Menu = () => {
  const history = useHistory();

  const handleMenu = (url: string) => {
    history.push(url);
  };

  return (
    <MenuList>
      <MenuItem onClick={() => handleMenu("/")}>Dashboard</MenuItem>
      <MenuItem onClick={() => handleMenu("/users")}>Users</MenuItem>
      <MenuItem onClick={() => handleMenu("/product")}>Product</MenuItem>
    </MenuList>
  );
};

export default Menu;
