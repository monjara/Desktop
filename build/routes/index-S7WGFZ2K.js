import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/home/runner/work/Desktop/Desktop/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/desktop.tsx
init_react();
var import_react = __toESM(require_react());
var backgroundImages = [
  "bg-warty-final-ubuntu",
  "bg-jj_light_by_Hiking93",
  "bg-jj_dark_by_Hiking93",
  "bg-Jammy-Jellyfish_WP_4096x2304_Grey",
  "bg-ubuntu-default-greyscale-wallpaper",
  "bg-ubuntu_by_arman1992",
  "bg-ubuntu2_by_arman1992",
  "bg-Blue_flower_by_Elena_Stravoravdi",
  "bg-Cherry_Tree_in_Lakones_by_elenastravoravdi",
  "bg-Mirror_by_Uday_Nakade",
  "bg-DSC2943_by_kcpru",
  "bg-canvas_by_roytanck",
  "bg-Optical_Fibers_in_Dark_by_Elena_Stravoravdi"
];
function Desktop() {
  const [backgroundImageKey, setBackgroundImageKey] = (0, import_react.useState)(backgroundImages[0]);
  return /* @__PURE__ */ React.createElement("div", {
    className: `h-screen w-screen bg-cover ${backgroundImageKey}`
  });
}

// app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Desktop, null);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-S7WGFZ2K.js.map
