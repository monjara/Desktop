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
  "bg-ubuntu-default",
  "bg-ubuntu-grey",
  "bg-brad",
  "bg-hardy",
  "bg-joshua",
  "bg-matt",
  "bg-ryan"
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
//# sourceMappingURL=/build/routes/index-73T2P55N.js.map
