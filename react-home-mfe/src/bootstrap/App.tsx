import React from "react";
import { BrowserRouter } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Routes from "./Routes";

const App = () => {
  return (
    <BrowserRouter basename="/home">
      <Box padding={1}>
        <Routes />
      </Box>
    </BrowserRouter>
  );
};

export default App;
