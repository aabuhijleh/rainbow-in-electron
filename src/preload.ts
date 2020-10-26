// to make node work with ES6 modules
import esm from "esm";
require = esm(module);

// because we are in the preload script
// wait until their deps have been loaded
window.addEventListener("DOMContentLoaded", () => {
  const rainbow = require("rainbow-web-sdk").default;
  // console.log("rainbowSdk", rainbow);
  // you can now use the sdk
});
