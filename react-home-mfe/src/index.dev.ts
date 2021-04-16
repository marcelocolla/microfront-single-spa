import { registerApplication, start } from "single-spa";

import * as rootConfig from "./techtalking-root-config";

registerApplication({
  name: "@techtalking/react-home-mfe",
  app: rootConfig,
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
