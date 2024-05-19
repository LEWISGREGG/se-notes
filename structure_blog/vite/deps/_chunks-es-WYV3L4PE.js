import {
  BackLink,
  Pane,
  PaneHeader$1,
  PaneHeaderActions,
  usePane,
  useStructureTool
} from "./chunk-VED4F63Z.js";
import "./chunk-453DJBPG.js";
import {
  ArrowLeftIcon,
  Box,
  Button2 as Button,
  pt,
  require_react_is,
  useI18nText
} from "./chunk-I5MQMVJ3.js";
import {
  require_jsx_runtime
} from "./chunk-ZJRBQQU2.js";
import {
  require_react
} from "./chunk-ZRWYN6LL.js";
import "./chunk-QWZQRRZG.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/sanity/lib/_chunks-es/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_is = __toESM(require_react_is(), 1);
var Root = pt(Box)`
  position: relative;
`;
function UserComponentPaneContent(props) {
  const { children } = props, { collapsed } = usePane();
  return (0, import_jsx_runtime.jsx)(Root, { hidden: collapsed, height: "fill", overflow: "auto", children });
}
function UserComponentPaneHeader(props) {
  const { actionHandlers, index, menuItems, menuItemGroups, title } = props, { features } = useStructureTool();
  return !(menuItems != null && menuItems.length) && !title ? null : (0, import_jsx_runtime.jsx)(
    PaneHeader$1,
    {
      actions: (0, import_jsx_runtime.jsx)(
        PaneHeaderActions,
        {
          menuItems,
          menuItemGroups,
          actionHandlers
        }
      ),
      backButton: features.backButton && index > 0 && (0, import_jsx_runtime.jsx)(
        Button,
        {
          as: BackLink,
          "data-as": "a",
          icon: ArrowLeftIcon,
          mode: "bleed",
          tooltipProps: { content: "Back" }
        }
      ),
      title
    }
  );
}
function UserComponentPane(props) {
  const { index, pane, paneKey, ...restProps } = props, {
    child,
    component,
    menuItems,
    menuItemGroups,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type: _unused,
    ...restPane
  } = pane, [ref, setRef] = (0, import_react.useState)(null), { title = "" } = useI18nText(pane);
  return (0, import_jsx_runtime.jsxs)(Pane, { id: paneKey, minWidth: 320, selected: restProps.isSelected, children: [
    (0, import_jsx_runtime.jsx)(
      UserComponentPaneHeader,
      {
        actionHandlers: ref == null ? void 0 : ref.actionHandlers,
        index,
        menuItems,
        menuItemGroups,
        title
      }
    ),
    (0, import_jsx_runtime.jsxs)(UserComponentPaneContent, { children: [
      (0, import_react_is.isValidElementType)(component) && (0, import_react.createElement)(component, {
        ...restProps,
        ...restPane,
        ref: setRef,
        child,
        // @todo: Fix typings
        paneKey
      }),
      (0, import_react.isValidElement)(component) && component
    ] })
  ] });
}
export {
  UserComponentPane as default
};
//# sourceMappingURL=_chunks-es-WYV3L4PE.js.map
