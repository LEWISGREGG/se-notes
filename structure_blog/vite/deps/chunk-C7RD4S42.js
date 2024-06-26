import {
  EyeOpenIcon,
  defineLocaleResourceBundle,
  definePlugin,
  route
} from "./chunk-I5MQMVJ3.js";
import {
  require_react
} from "./chunk-ZRWYN6LL.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/@sanity/vision/lib/_chunks-es/index.mjs
var import_react = __toESM(require_react(), 1);
var visionLocaleNamespace = "vision";
var visionUsEnglishLocaleBundle = defineLocaleResourceBundle({
  locale: "en-US",
  namespace: visionLocaleNamespace,
  resources: () => import("./resources-JCPEZ6JD.js")
});
var visionTool = definePlugin((options) => {
  const { name, title, icon, ...config } = options || {};
  return {
    name: "@sanity/vision",
    tools: [
      {
        name: name || "vision",
        title: title || "Vision",
        icon: icon || EyeOpenIcon,
        component: (0, import_react.lazy)(() => import("./SanityVision-E5T2GA43.js")),
        options: config,
        router: route.create("/*")
      }
    ],
    i18n: {
      bundles: [visionUsEnglishLocaleBundle]
    }
  };
});

export {
  visionLocaleNamespace,
  visionTool
};
//# sourceMappingURL=chunk-C7RD4S42.js.map
