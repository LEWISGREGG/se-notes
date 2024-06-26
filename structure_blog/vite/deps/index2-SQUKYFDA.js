import {
  BackLink,
  Pane,
  PaneContent,
  PaneHeader$1,
  PaneHeaderActions,
  PaneItem,
  _DEBUG,
  usePane,
  usePaneLayout,
  useStructureTool
} from "./chunk-VED4F63Z.js";
import "./chunk-453DJBPG.js";
import {
  ArrowLeftIcon,
  Box,
  Button2 as Button,
  CommandList,
  pt,
  useGetI18nText,
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

// node_modules/sanity/lib/_chunks-es/index2.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var Divider = pt.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;
function ListPaneContent(props) {
  const { childItemId, items, isActive, layout, showIcons, title } = props, { collapsed: layoutCollapsed } = usePaneLayout(), getI18nText = useGetI18nText(
    items == null ? void 0 : items.filter(
      (item) => item.type !== "divider"
    )
  ), getItemDisabled = (0, import_react.useCallback)(
    (itemIndex) => {
      var _a;
      return ((_a = items == null ? void 0 : items.find((_, i) => i === itemIndex)) == null ? void 0 : _a.type) === "divider";
    },
    [items]
  ), shouldShowIconForItem = (0, import_react.useCallback)(
    (item) => {
      var _a;
      const itemShowIcon = (_a = item.displayOptions) == null ? void 0 : _a.showIcon;
      return typeof itemShowIcon < "u" ? itemShowIcon !== false : showIcons !== false;
    },
    [showIcons]
  ), renderItem = (0, import_react.useCallback)(
    (item, ctx) => {
      const { virtualIndex: itemIndex } = ctx;
      if (item.type === "divider")
        return (
          // eslint-disable-next-line react/no-array-index-key
          (0, import_jsx_runtime.jsx)(Box, { marginBottom: 1, children: (0, import_jsx_runtime.jsx)(Divider, {}) }, `divider-${itemIndex}`)
        );
      const pressed = !isActive && childItemId === item.id, selected = isActive && childItemId === item.id, value = item._id && item.schemaType ? { _id: item._id, _type: item.schemaType.name, title: item.title } : void 0;
      return (0, import_jsx_runtime.jsx)(
        PaneItem,
        {
          icon: shouldShowIconForItem(item) ? item.icon : false,
          id: item.id,
          layout,
          marginBottom: 1,
          pressed,
          schemaType: item.schemaType,
          selected,
          title: getI18nText(item).title,
          value
        },
        item.id
      );
    },
    [childItemId, getI18nText, isActive, layout, shouldShowIconForItem]
  );
  return (0, import_jsx_runtime.jsx)(PaneContent, { overflow: layoutCollapsed ? "hidden" : "auto", children: items && items.length > 0 && (0, import_jsx_runtime.jsx)(
    CommandList,
    {
      activeItemDataAttr: "data-hovered",
      ariaLabel: title,
      canReceiveFocus: true,
      getItemDisabled,
      itemHeight: 51,
      items,
      onlyShowSelectionWhenActive: true,
      paddingBottom: 1,
      paddingX: 3,
      renderItem,
      wrapAround: false
    }
  ) });
}
var ListPaneHeader = ({ index, menuItems, menuItemGroups, title }) => {
  const { features } = useStructureTool(), { collapsed, isLast } = usePane(), tabIndex = isLast && !collapsed ? -1 : 0;
  return (0, import_jsx_runtime.jsx)(
    PaneHeader$1,
    {
      actions: (0, import_jsx_runtime.jsx)(PaneHeaderActions, { menuItems, menuItemGroups }),
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
      tabIndex,
      title
    }
  );
};
function ListPane(props) {
  const { childItemId, index, isActive, isSelected, pane, paneKey } = props, { defaultLayout, displayOptions, items, menuItems, menuItemGroups } = pane, showIcons = (displayOptions == null ? void 0 : displayOptions.showIcons) !== false, { title } = useI18nText(pane);
  return (0, import_jsx_runtime.jsxs)(
    Pane,
    {
      currentMaxWidth: 350,
      "data-testid": "structure-tool-list-pane",
      "data-ui": "ListPane",
      id: paneKey,
      maxWidth: 640,
      minWidth: 320,
      selected: isSelected,
      children: [
        _DEBUG,
        (0, import_jsx_runtime.jsx)(
          ListPaneHeader,
          {
            index,
            menuItems,
            menuItemGroups,
            title
          }
        ),
        (0, import_jsx_runtime.jsx)(
          ListPaneContent,
          {
            childItemId,
            isActive,
            items,
            layout: defaultLayout,
            showIcons,
            title
          },
          paneKey
        )
      ]
    }
  );
}
export {
  ListPane as default
};
//# sourceMappingURL=index2-SQUKYFDA.js.map
