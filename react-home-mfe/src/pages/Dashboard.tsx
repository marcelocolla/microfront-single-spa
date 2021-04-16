import React from "react";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const Dashboard = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h3">Dashboard</Typography>

      <Divider />

      <Box padding="24px 0">
        <Typography variant="body1">Shrimp and Chorizo Paella</Typography>
        <Typography color="textSecondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
