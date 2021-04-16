import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (localtion) => localtion.pathname === "/",
  customProps: {
    domElement: document.getElementById("root"),
  },
});

registerApplication({
  name: "@techtalking/react-home-mfe",
  app: () => System.import("@techtalking/react-home-mfe"),
  activeWhen: (localtion) => localtion.pathname.startsWith("/home"),
  customProps: {
    domElement: document.getElementById("root"),
  },
});

registerApplication({
  name: "@techtalking/react-menu-mfe",
  app: () => System.import("@techtalking/react-menu-mfe"),
  activeWhen: () => true,
  customProps: {
    domElement: document.getElementById("menu"),
  },
});

start({
  urlRerouteOnly: true,
});
