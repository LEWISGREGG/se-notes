import {
  require_json_inspector,
  require_quick_lru
} from "./chunk-453DJBPG.js";
import {
  AddCircleIcon,
  AddIcon,
  ArrowLeftIcon,
  AvatarStack,
  Badge,
  BoundaryElementProvider,
  Box,
  Button,
  Button2,
  COMMENTS_INSPECTOR_NAME,
  Card,
  ChangeConnectorRoot,
  ChangeFieldWrapper,
  ChangeList,
  CheckmarkCircleIcon,
  CheckmarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  Code,
  CommandList,
  CommentsEnabledProvider,
  CommentsIntentProvider,
  CommentsProvider,
  Container,
  ContextMenuButton,
  CopyIcon,
  DEFAULT_STUDIO_CLIENT_OPTIONS,
  Dialog,
  Dialog2,
  DialogProvider,
  DiffTooltip,
  DocumentChangeContext,
  DocumentIcon,
  DocumentPaneContext,
  DocumentPreviewPresence,
  DocumentStatus,
  DocumentStatusIndicator,
  DocumentsIcon,
  EMPTY,
  EMPTY_ARRAY$t,
  EMPTY_OBJECT,
  EarthAmericasIcon,
  EditIcon,
  ErrorBoundary,
  ErrorOutlineIcon,
  FieldActionsProvider,
  FieldActionsResolver,
  Flex,
  FolderIcon,
  FormBuilder,
  GetHookCollectionState,
  Grid,
  Heading,
  Hotkeys,
  InfoOutlineIcon,
  Inline,
  InsufficientPermissionsMessage,
  IntentLink,
  IsLastPaneProvider,
  JsonIcon,
  Layer,
  LayerProvider,
  LegacyLayerProvider,
  LoadingBlock,
  MasterDetailIcon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  NoChanges,
  PaneContext,
  PaneLayoutContext,
  PaneRouterContext,
  Popover,
  Popover2,
  PortalProvider,
  PresenceOverlay,
  PreviewCard,
  PublishIcon,
  ReadOnlyIcon,
  ReferenceInputOptionsProvider,
  ResetIcon,
  RestoreIcon,
  SanityDefaultPreview,
  ScrollContainer,
  SearchIcon,
  SortIcon,
  SourceProvider,
  Spinner,
  SpinnerIcon,
  SplitVerticalIcon,
  Stack,
  StackCompactIcon,
  StackIcon,
  StateLink,
  StatusButton,
  StructureToolContext,
  Subject,
  SyncIcon,
  Tab,
  TabList,
  TabPanel,
  Text,
  TextInput,
  TextSkeleton,
  TextWithTone,
  Tooltip2 as Tooltip,
  TooltipDelayGroupProvider,
  TooltipOfDisabled,
  Translate,
  TrashIcon,
  UnknownIcon,
  UnpublishIcon,
  UserAvatar,
  VirtualizerScrollInstanceProvider,
  WarningOutlineIcon,
  _raf2,
  asyncScheduler,
  catchError,
  collate,
  concat,
  createHookFromObservableFactory,
  createPatchChannel,
  createSearch,
  ct,
  debounce,
  debounceTime,
  decodeJsonParams,
  defer,
  defineEvent,
  defineLocaleResourceBundle,
  definePlugin,
  delay,
  distinctUntilChanged,
  encodeJsonParams,
  exhaustMapWithTrailing,
  filter,
  firstValueFrom,
  focusFirstDescendant,
  from,
  fromEvent,
  fromMutationPatches,
  fromString,
  ft,
  generateHelpUrl,
  get,
  getConfigContextFromSource,
  getDraftId,
  getExpandOperations,
  getPreviewStateObservable$1,
  getPreviewValueWithFallback,
  getPublishedId,
  getSearchableTypes,
  isActionEnabled,
  isArray,
  isDeprecatedSchemaType,
  isDev,
  isHotkey,
  isIndexSegment,
  isKeySegment,
  isRecord$4,
  isReferenceSchemaType,
  isSanityDocument,
  isString,
  isValidationError,
  isValidationErrorMarker,
  isValidationWarning,
  map,
  mapTo,
  merge,
  mergeMap,
  motion,
  of,
  parse,
  partition,
  pt,
  rem,
  require_baseGetTag,
  require_capitalize,
  require_createCompounder,
  require_find,
  require_isEqual,
  require_isObjectLike,
  require_isString,
  require_negate,
  require_omit,
  require_react_fast_compare,
  require_react_is,
  require_shallow_equals,
  require_speakingurl,
  require_startCase,
  require_throttle,
  require_uniq,
  require_uniqBy,
  require_uniqueId,
  resizeObserver,
  resolveKeyedPath,
  rgba,
  route,
  scan,
  setAtPath,
  share,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  throttleTime,
  throwError,
  timer,
  toMutationPatches,
  toString,
  useAsObservable,
  useClickOutside,
  useClient,
  useCommentsEnabled,
  useConfigContextFromSource,
  useConnectionState,
  useCurrentUser,
  useDateTimeFormat,
  useDocumentOperation,
  useDocumentOperationEvent,
  useDocumentPairPermissions,
  useDocumentPresence,
  useDocumentPreview,
  useDocumentPreviewStore,
  useDocumentStore,
  useDocumentType,
  useDocumentValuePermissions,
  useEditState,
  useElementRect,
  useFieldActions,
  useFormState,
  useForwardedRef,
  useGetI18nText,
  useGlobalKeyDown,
  useI18nText,
  useInitialValue,
  useIntentLink,
  useKeyValueStore,
  useLayer,
  useListFormat,
  useMemoObservable,
  useMiddlewareComponents,
  useObservableCallback,
  usePortal,
  usePresenceStore,
  useRelativeTime,
  useRouter,
  useSchema,
  useSearchMaxFieldDepth,
  useSource,
  useSyncState,
  useTelemetry,
  useTemplatePermissions,
  useTemplates,
  useTimelineSelector,
  useTimelineStore,
  useToast,
  useTranslation,
  useTranslation2,
  useUnique,
  useValidationStatus,
  useWorkspace,
  useZIndex,
  v4_default,
  visitDiff
} from "./chunk-I5MQMVJ3.js";
import {
  require_jsx_runtime
} from "./chunk-ZJRBQQU2.js";
import {
  require_react
} from "./chunk-ZRWYN6LL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// node_modules/react-copy-to-clipboard/lib/Component.js
var require_Component = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/Component.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CopyToClipboard = void 0;
    var _react = _interopRequireDefault(require_react());
    var _copyToClipboard = _interopRequireDefault(require_copy_to_clipboard());
    var _excluded = ["text", "onCopy", "options", "children"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var CopyToClipboard2 = function(_React$PureComponent) {
      _inherits(CopyToClipboard3, _React$PureComponent);
      var _super = _createSuper(CopyToClipboard3);
      function CopyToClipboard3() {
        var _this;
        _classCallCheck(this, CopyToClipboard3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
          var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
          var elem = _react["default"].Children.only(children);
          var result = (0, _copyToClipboard["default"])(text, options);
          if (onCopy) {
            onCopy(text, result);
          }
          if (elem && elem.props && typeof elem.props.onClick === "function") {
            elem.props.onClick(event);
          }
        });
        return _this;
      }
      _createClass(CopyToClipboard3, [{
        key: "render",
        value: function render() {
          var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);
          var elem = _react["default"].Children.only(children);
          return _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
            onClick: this.onClick
          }));
        }
      }]);
      return CopyToClipboard3;
    }(_react["default"].PureComponent);
    exports.CopyToClipboard = CopyToClipboard2;
    _defineProperty(CopyToClipboard2, "defaultProps", {
      onCopy: void 0,
      options: void 0
    });
  }
});

// node_modules/react-copy-to-clipboard/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/index.js"(exports, module) {
    "use strict";
    var _require = require_Component();
    var CopyToClipboard2 = _require.CopyToClipboard;
    CopyToClipboard2.CopyToClipboard = CopyToClipboard2;
    module.exports = CopyToClipboard2;
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber2(value) {
      return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    module.exports = isNumber2;
  }
});

// node_modules/lodash/camelCase.js
var require_camelCase = __commonJS({
  "node_modules/lodash/camelCase.js"(exports, module) {
    var capitalize = require_capitalize();
    var createCompounder = require_createCompounder();
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    module.exports = camelCase2;
  }
});

// node_modules/lodash/kebabCase.js
var require_kebabCase = __commonJS({
  "node_modules/lodash/kebabCase.js"(exports, module) {
    var createCompounder = require_createCompounder();
    var kebabCase2 = createCompounder(function(result, word, index) {
      return result + (index ? "-" : "") + word.toLowerCase();
    });
    module.exports = kebabCase2;
  }
});

// node_modules/sanity/lib/_chunks-es/StructureToolProvider.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_react_json_inspector = __toESM(require_json_inspector(), 1);
var import_quick_lru = __toESM(require_quick_lru(), 1);
var import_omit = __toESM(require_omit(), 1);
var import_throttle = __toESM(require_throttle(), 1);
var import_react_fast_compare = __toESM(require_react_fast_compare(), 1);
var import_isEqual = __toESM(require_isEqual(), 1);
var import_shallow_equals = __toESM(require_shallow_equals(), 1);
var import_react_copy_to_clipboard = __toESM(require_lib(), 1);
var import_isNumber = __toESM(require_isNumber(), 1);
var import_isString = __toESM(require_isString(), 1);
var import_uniqBy = __toESM(require_uniqBy(), 1);
var import_negate = __toESM(require_negate(), 1);
var import_uniqueId = __toESM(require_uniqueId(), 1);
var import_react_is = __toESM(require_react_is(), 1);
var import_camelCase = __toESM(require_camelCase(), 1);
var import_speakingurl = __toESM(require_speakingurl(), 1);
var import_uniq = __toESM(require_uniq(), 1);
var import_kebabCase = __toESM(require_kebabCase(), 1);
var import_find = __toESM(require_find(), 1);
var import_startCase = __toESM(require_startCase(), 1);
var structureLocaleNamespace = "structure";
var structureUsEnglishLocaleBundle = defineLocaleResourceBundle({
  locale: "en-US",
  namespace: structureLocaleNamespace,
  resources: () => import("./resources3-VEG7ODM4.js")
});
function DocTitle(props) {
  const { document: documentValue } = props, schemaType = useSchema().get(documentValue._type), { t } = useTranslation2(structureLocaleNamespace), { error, value } = useDocumentPreview({
    schemaType,
    value: documentValue
  });
  return schemaType ? error ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("doc-title.error.text", { errorMessage: error.message }) }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (value == null ? void 0 : value.title) || (0, import_jsx_runtime.jsx)("span", { style: { color: "var(--card-muted-fg-color)" }, children: t("doc-title.fallback.text") }) }) : (0, import_jsx_runtime.jsx)("code", { children: t("doc-title.unknown-schema-type.text", { schemaType: documentValue._type }) });
}
var ChevronWrapper = pt(Box)`
  margin-left: auto;
`;
var CrossDatasetReferencesDetails = pt.details`
  flex: none;

  &[open] ${ChevronWrapper} {
    transform: rotate(180deg);
  }
`;
var CrossDatasetReferencesSummary = pt.summary`
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;
var Table = pt.table`
  width: 100%;
  text-align: left;
  padding: 0 ${({ theme }) => rem(theme.sanity.space[2])};
  border-collapse: collapse;

  th {
    padding: ${({ theme }) => rem(theme.sanity.space[1])};
  }

  td {
    padding: 0 ${({ theme }) => rem(theme.sanity.space[1])};
  }

  tr > *:last-child {
    text-align: right;
  }
`;
var DocumentIdFlex = pt(Flex)`
  min-height: 33px;
`;
var OtherReferenceCount = (props) => {
  const { t } = useTranslation2(structureLocaleNamespace), difference = props.totalCount - props.references.length;
  return difference ? (0, import_jsx_runtime.jsx)(Box, { padding: 2, children: (0, import_jsx_runtime.jsxs)(Inline, { space: 2, children: [
    (0, import_jsx_runtime.jsx)(Text, { size: 1, muted: true, children: t("confirm-delete-dialog.other-reference-count.title", { count: difference }) }),
    (0, import_jsx_runtime.jsx)(
      Tooltip,
      {
        portal: true,
        placement: "top",
        content: t("confirm-delete-dialog.other-reference-count.tooltip"),
        children: (0, import_jsx_runtime.jsx)(Text, { size: 1, muted: true, children: (0, import_jsx_runtime.jsx)(InfoOutlineIcon, {}) })
      }
    )
  ] }) }) : null;
};
function PaneItemPreview(props) {
  const { icon, layout, presence, schemaType, value } = props, title = isRecord$4(value.title) && (0, import_react.isValidElement)(value.title) || (0, import_isString.default)(value.title) || (0, import_isNumber.default)(value.title) ? value.title : null, { draft, published, isLoading } = useMemoObservable(
    () => getPreviewStateObservable$1(props.documentPreviewStore, schemaType, value._id, title),
    [props.documentPreviewStore, schemaType, value._id, title]
  ), status = isLoading ? null : (0, import_jsx_runtime.jsx)(TooltipDelayGroupProvider, { children: (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 3, children: [
    presence && presence.length > 0 && (0, import_jsx_runtime.jsx)(DocumentPreviewPresence, { presence }),
    (0, import_jsx_runtime.jsx)(DocumentStatusIndicator, { draft, published })
  ] }) }), tooltip = (0, import_jsx_runtime.jsx)(DocumentStatus, { draft, published });
  return (0, import_jsx_runtime.jsx)(
    SanityDefaultPreview,
    {
      ...getPreviewValueWithFallback({ value, draft, published }),
      isPlaceholder: isLoading,
      icon,
      layout,
      status,
      tooltip
    }
  );
}
var BackLink = (0, import_react.forwardRef)(function(props, ref) {
  const { routerPanesState, groupIndex } = (0, import_react.useContext)(PaneRouterContext), panes = (0, import_react.useMemo)(() => routerPanesState.slice(0, groupIndex), [groupIndex, routerPanesState]), state2 = (0, import_react.useMemo)(() => ({ panes }), [panes]);
  return (0, import_jsx_runtime.jsx)(StateLink, { ...props, ref, state: state2 });
});
function usePaneLayout() {
  const pane = (0, import_react.useContext)(PaneLayoutContext);
  if (!pane)
    throw new Error("PaneLayout: missing context value");
  return pane;
}
var ChildLink = (0, import_react.forwardRef)(function(props, ref) {
  const { childId, childPayload, childParameters, ...rest } = props, { routerPanesState, groupIndex } = (0, import_react.useContext)(PaneRouterContext);
  return (0, import_jsx_runtime.jsx)(
    StateLink,
    {
      ...rest,
      ref,
      state: {
        panes: [
          ...routerPanesState.slice(0, groupIndex + 1),
          [{ id: childId, params: childParameters, payload: childPayload }]
        ]
      }
    }
  );
});
var ParameterizedLink = (0, import_react.forwardRef)(function(props, ref) {
  const { routerPanesState: currentPanes, groupIndex, siblingIndex } = (0, import_react.useContext)(PaneRouterContext), { params, payload, ...rest } = props, nextParams = useUnique(params), nextPayload = useUnique(payload), nextState = (0, import_react.useMemo)(() => {
    const currentGroup = currentPanes[groupIndex], currentSibling = currentGroup[siblingIndex], nextSibling = {
      ...currentSibling,
      params: nextParams != null ? nextParams : currentSibling.params,
      payload: nextPayload != null ? nextPayload : currentSibling.payload
    }, nextGroup = [
      ...currentGroup.slice(0, siblingIndex),
      nextSibling,
      ...currentGroup.slice(siblingIndex + 1)
    ];
    return { panes: [
      ...currentPanes.slice(0, groupIndex),
      nextGroup,
      ...currentPanes.slice(groupIndex + 1)
    ] };
  }, [currentPanes, groupIndex, nextParams, nextPayload, siblingIndex]);
  return (0, import_jsx_runtime.jsx)(StateLink, { ref, ...rest, state: nextState });
});
var ReferenceChildLink = (0, import_react.forwardRef)(function({ documentId, documentType, parentRefPath, children, template, ...rest }, ref) {
  return (0, import_jsx_runtime.jsx)(
    ChildLink,
    {
      ...rest,
      ref,
      childId: documentId,
      childPayload: template == null ? void 0 : template.params,
      childParameters: {
        type: documentType,
        parentRefPath: toString(parentRefPath),
        ...template && { template: template == null ? void 0 : template.id }
      },
      children
    }
  );
});
function usePaneRouter() {
  return (0, import_react.useContext)(PaneRouterContext);
}
var EMPTY_ARRAY$2 = [];
function ReferencePreviewLink(props) {
  const { onClick, type, value } = props, publishedId = getPublishedId(value == null ? void 0 : value._id), documentPresence = useDocumentPresence(publishedId), documentPreviewStore = useDocumentPreviewStore(), { ReferenceChildLink: ReferenceChildLink2 } = usePaneRouter(), Link = (0, import_react.useCallback)(
    function(linkProps) {
      return (0, import_jsx_runtime.jsx)(
        ReferenceChildLink2,
        {
          documentId: value == null ? void 0 : value._id,
          documentType: type == null ? void 0 : type.name,
          parentRefPath: EMPTY_ARRAY$2,
          ...linkProps
        }
      );
    },
    [ReferenceChildLink2, type == null ? void 0 : type.name, value == null ? void 0 : value._id]
  );
  return (0, import_jsx_runtime.jsx)(PreviewCard, { __unstable_focusRing: true, as: Link, "data-as": "a", onClick, radius: 2, children: (0, import_jsx_runtime.jsx)(
    PaneItemPreview,
    {
      documentPreviewStore,
      icon: type == null ? void 0 : type.icon,
      layout: "compact",
      presence: (documentPresence == null ? void 0 : documentPresence.length) > 0 ? documentPresence : EMPTY_ARRAY$2,
      schemaType: type,
      value
    }
  ) });
}
function ConfirmDeleteDialogBody({
  crossDatasetReferences,
  internalReferences,
  documentTitle,
  totalCount,
  action,
  datasetNames,
  hasUnknownDatasetNames,
  onReferenceLinkClick
}) {
  const schema = useSchema(), toast = useToast(), { t } = useTranslation2(structureLocaleNamespace), renderPreviewItem = (0, import_react.useCallback)(
    (item) => {
      const type = schema.get(item._type);
      return type ? (0, import_jsx_runtime.jsx)(ReferencePreviewLink, { type, value: item, onClick: onReferenceLinkClick }) : (
        // Padding added to match the ReferencePreviewLink styling
        (0, import_jsx_runtime.jsx)(Box, { padding: 2, children: (0, import_jsx_runtime.jsx)(
          SanityDefaultPreview,
          {
            icon: UnknownIcon,
            title: t("confirm-delete-dialog.preview-item.preview-unavailable.title"),
            subtitle: t("confirm-delete-dialog.preview-item.preview-unavailable.subtitle", {
              documentId: item._id
            }),
            layout: "default"
          }
        ) })
      );
    },
    [schema, t, onReferenceLinkClick]
  );
  if ((internalReferences == null ? void 0 : internalReferences.totalCount) === 0 && (crossDatasetReferences == null ? void 0 : crossDatasetReferences.totalCount) === 0)
    return (0, import_jsx_runtime.jsx)(Text, { as: "p", size: 1, children: (0, import_jsx_runtime.jsx)(
      Translate,
      {
        t,
        i18nKey: "confirm-delete-dialog.confirmation.text",
        context: action,
        components: { DocumentTitle: () => (0, import_jsx_runtime.jsx)("strong", { children: documentTitle }) }
      }
    ) });
  const normalizedDatasetNames = [
    ...datasetNames,
    ...hasUnknownDatasetNames ? ["unavailable"] : []
  ], datasetSubtitle = t("confirm-delete-dialog.cdr-summary.subtitle", {
    count: normalizedDatasetNames.length,
    datasets: normalizedDatasetNames.join(", "),
    context: hasUnknownDatasetNames && normalizedDatasetNames.length ? "unavailable" : ""
  });
  return (0, import_jsx_runtime.jsxs)(Flex, { direction: "column", gap: 4, children: [
    (0, import_jsx_runtime.jsx)(Card, { padding: 3, radius: 2, tone: "caution", flex: "none", children: (0, import_jsx_runtime.jsxs)(Flex, { children: [
      (0, import_jsx_runtime.jsx)(Text, { "aria-hidden": "true", size: 1, children: (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {}) }),
      (0, import_jsx_runtime.jsx)(Box, { flex: 1, marginLeft: 3, children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          i18nKey: "confirm-delete-dialog.referring-document-count.text",
          components: { DocumentTitle: () => documentTitle },
          t,
          values: { count: totalCount }
        }
      ) }) })
    ] }) }),
    (0, import_jsx_runtime.jsx)(Box, { flex: "none", children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: (0, import_jsx_runtime.jsx)(
      Translate,
      {
        i18nKey: "confirm-delete-dialog.referring-documents-descriptor.text",
        t,
        context: action,
        components: { DocumentTitle: () => documentTitle }
      }
    ) }) }),
    (0, import_jsx_runtime.jsx)(Card, { radius: 2, shadow: 1, flex: "auto", padding: 2, children: (0, import_jsx_runtime.jsxs)(Flex, { direction: "column", children: [
      internalReferences.totalCount > 0 && (0, import_jsx_runtime.jsxs)(Stack, { as: "ul", marginBottom: 2, space: 2, "data-testid": "internal-references", children: [
        internalReferences == null ? void 0 : internalReferences.references.map((item) => (0, import_jsx_runtime.jsx)(Box, { as: "li", children: renderPreviewItem(item) }, item._id)),
        internalReferences.totalCount > internalReferences.references.length && (0, import_jsx_runtime.jsx)(Box, { as: "li", padding: 3, children: (0, import_jsx_runtime.jsx)(OtherReferenceCount, { ...internalReferences }) })
      ] }),
      crossDatasetReferences.totalCount > 0 && (0, import_jsx_runtime.jsxs)(
        CrossDatasetReferencesDetails,
        {
          "data-testid": "cross-dataset-references",
          style: {
            // only add the border if needed
            borderTop: internalReferences.totalCount > 0 ? "1px solid var(--card-shadow-outline-color)" : void 0
          },
          children: [
            (0, import_jsx_runtime.jsx)(CrossDatasetReferencesSummary, { children: (0, import_jsx_runtime.jsx)(
              Card,
              {
                as: "a",
                marginTop: internalReferences.totalCount > 0 ? 2 : 0,
                radius: 2,
                shadow: 1,
                paddingY: 1,
                children: (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 3, paddingX: 3, paddingY: 1, children: [
                  (0, import_jsx_runtime.jsx)(Text, { size: 1, children: (0, import_jsx_runtime.jsx)(DocumentsIcon, {}) }),
                  (0, import_jsx_runtime.jsxs)(Stack, { space: 2, children: [
                    (0, import_jsx_runtime.jsx)(Text, { textOverflow: "ellipsis", size: 1, children: t("confirm-delete-dialog.cdr-summary.title", {
                      count: normalizedDatasetNames.length,
                      documentCount: t("confirm-delete-dialog.cdr-summary.document-count", {
                        count: crossDatasetReferences.totalCount
                      })
                    }) }),
                    (0, import_jsx_runtime.jsx)(Text, { title: datasetSubtitle, textOverflow: "ellipsis", size: 1, muted: true, children: datasetSubtitle })
                  ] }),
                  (0, import_jsx_runtime.jsx)(ChevronWrapper, { children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}) }) })
                ] })
              }
            ) }),
            (0, import_jsx_runtime.jsxs)(Box, { overflow: "auto", paddingTop: 2, children: [
              (0, import_jsx_runtime.jsxs)(Table, { children: [
                (0, import_jsx_runtime.jsx)("thead", { children: (0, import_jsx_runtime.jsxs)("tr", { children: [
                  (0, import_jsx_runtime.jsx)("th", { children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, style: { minWidth: "5rem" }, weight: "medium", children: t("confirm-delete-dialog.cdr-table.project-id.label") }) }),
                  (0, import_jsx_runtime.jsx)("th", { children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, weight: "medium", children: t("confirm-delete-dialog.cdr-table.dataset.label") }) }),
                  (0, import_jsx_runtime.jsx)("th", { children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, weight: "medium", children: t("confirm-delete-dialog.cdr-table.document-id.label") }) })
                ] }) }),
                (0, import_jsx_runtime.jsx)("tbody", { children: crossDatasetReferences.references.filter((reference) => "projectId" in reference).map(({ projectId, datasetName, documentId }, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  (0, import_jsx_runtime.jsxs)("tr", { children: [
                    (0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: projectId }) }),
                    (0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: datasetName || "unavailable" }) }),
                    (0, import_jsx_runtime.jsx)("td", { children: (0, import_jsx_runtime.jsxs)(DocumentIdFlex, { align: "center", gap: 2, justify: "flex-end", children: [
                      (0, import_jsx_runtime.jsx)(Text, { textOverflow: "ellipsis", size: 1, children: documentId || "unavailable" }),
                      documentId && (0, import_jsx_runtime.jsx)(
                        import_react_copy_to_clipboard.default,
                        {
                          text: documentId,
                          onCopy: () => {
                            toast.push({
                              title: t(
                                "confirm-delete-dialog.cdr-table.id-copied-toast.title"
                              ),
                              status: "success"
                            });
                          },
                          children: (0, import_jsx_runtime.jsx)(
                            Button2,
                            {
                              mode: "bleed",
                              icon: CopyIcon,
                              tooltipProps: {
                                content: t(
                                  "confirm-delete-dialog.cdr-table.copy-id-button.tooltip"
                                )
                              }
                            }
                          )
                        }
                      )
                    ] }) })
                  ] }, `${documentId}-${index}`)
                )) })
              ] }),
              (0, import_jsx_runtime.jsx)(OtherReferenceCount, { ...crossDatasetReferences })
            ] })
          ]
        }
      )
    ] }) }),
    (0, import_jsx_runtime.jsx)(Box, { flex: "none", children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: (0, import_jsx_runtime.jsx)(
      Translate,
      {
        i18nKey: "confirm-delete-dialog.referential-integrity-disclaimer.text",
        t,
        context: action,
        components: { DocumentTitle: () => documentTitle }
      }
    ) }) })
  ] });
}
function isClientError(e) {
  return typeof e != "object" || !e ? false : "statusCode" in e && "response" in e;
}
var POLL_INTERVAL = 5e3;
var visiblePoll$;
var getVisiblePoll$ = () => (visiblePoll$ || (visiblePoll$ = fromEvent(document, "visibilitychange").pipe(
  // add empty emission to have this fire on creation
  startWith(null),
  map(() => document.visibilityState === "visible"),
  distinctUntilChanged(),
  switchMap(
    (visible) => visible ? (
      // using timer instead of interval since timer will emit on creation
      timer(0, POLL_INTERVAL)
    ) : EMPTY
  ),
  shareReplay({ refCount: true, bufferSize: 1 })
)), visiblePoll$);
function getDocumentExistence(documentId, { versionedClient }) {
  const draftId = getDraftId(documentId), publishedId = getPublishedId(documentId), requestOptions = {
    uri: versionedClient.getDataUrl("doc", `${draftId},${publishedId}`),
    json: true,
    query: { excludeContent: "true" },
    tag: "use-referring-documents.document-existence"
  };
  return versionedClient.observable.request(requestOptions).pipe(
    map(({ omitted }) => {
      const nonExistant = omitted.filter((doc) => doc.reason === "existence");
      if (nonExistant.length !== 2)
        return nonExistant.length === 0 || nonExistant.some((doc) => doc.id === draftId) ? publishedId : draftId;
    })
  );
}
function fetchCrossDatasetReferences(documentId, context) {
  const { versionedClient } = context;
  return getVisiblePoll$().pipe(
    switchMap(() => getDocumentExistence(documentId, context)),
    switchMap((checkDocumentId) => {
      if (!checkDocumentId)
        return of({ totalCount: 0, references: [] });
      const currentDataset = versionedClient.config().dataset;
      return versionedClient.observable.request({
        url: `/data/references/${currentDataset}/documents/${checkDocumentId}/to?excludeInternalReferences=true&excludePaths=true`,
        tag: "use-referring-documents.external"
      }).pipe(
        catchError((e) => {
          if (isClientError(e) && e.statusCode === 404)
            return of({ totalCount: 0, references: [] });
          throw e;
        })
      );
    })
  );
}
var useInternalReferences = createHookFromObservableFactory(
  ([documentId, documentStore]) => documentStore.listenQuery(
    { fetch: '{"references":*[references($documentId)][0...100]{_id,_type},"totalCount":count(*[references($documentId)])}', listen: "*[references($documentId)]" },
    { documentId },
    { tag: "use-referring-documents", transitions: ["appear", "disappear"], throttleTime: 5e3 }
  )
);
var useCrossDatasetReferences = createHookFromObservableFactory(
  ([documentId, versionedClient]) => getVisiblePoll$().pipe(
    switchMap(
      () => fetchCrossDatasetReferences(documentId, {
        versionedClient
      })
    )
  )
);
function useReferringDocuments(documentId) {
  const versionedClient = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS), documentStore = useDocumentStore(), publishedId = getPublishedId(documentId), [internalReferences, isInternalReferencesLoading] = useInternalReferences(
    (0, import_react.useMemo)(() => [publishedId, documentStore], [documentStore, publishedId])
  ), [crossDatasetReferences, isCrossDatasetReferencesLoading] = useCrossDatasetReferences(
    (0, import_react.useMemo)(() => [publishedId, versionedClient], [publishedId, versionedClient])
  ), projectIds = (0, import_react.useMemo)(() => Array.from(
    new Set(
      crossDatasetReferences == null ? void 0 : crossDatasetReferences.references.map((crossDatasetReference) => crossDatasetReference.projectId).filter(Boolean)
    )
  ).sort(), [crossDatasetReferences == null ? void 0 : crossDatasetReferences.references]), datasetNames = (0, import_react.useMemo)(() => Array.from(
    new Set(
      crossDatasetReferences == null ? void 0 : crossDatasetReferences.references.map((crossDatasetReference) => (crossDatasetReference == null ? void 0 : crossDatasetReference.datasetName) || "").filter((datasetName) => !!datasetName && datasetName !== "")
    )
  ).sort(), [crossDatasetReferences == null ? void 0 : crossDatasetReferences.references]), hasUnknownDatasetNames = (0, import_react.useMemo)(() => !!(crossDatasetReferences != null && crossDatasetReferences.references.some(
    (crossDatasetReference) => typeof crossDatasetReference.datasetName != "string"
  )), [crossDatasetReferences == null ? void 0 : crossDatasetReferences.references]);
  return {
    totalCount: ((internalReferences == null ? void 0 : internalReferences.totalCount) || 0) + ((crossDatasetReferences == null ? void 0 : crossDatasetReferences.totalCount) || 0),
    projectIds,
    datasetNames,
    hasUnknownDatasetNames,
    internalReferences,
    crossDatasetReferences,
    isLoading: isInternalReferencesLoading || isCrossDatasetReferencesLoading
  };
}
var DialogBody = pt(Box)`
  box-sizing: border-box;
`;
var LoadingContainer = pt(Flex).attrs({
  align: "center",
  direction: "column",
  justify: "center"
})`
  height: 110px;
`;
function ConfirmDeleteDialog({
  id,
  type,
  action = "delete",
  onCancel,
  onConfirm
}) {
  const { t } = useTranslation2(structureLocaleNamespace), dialogId = `deletion-confirmation-${(0, import_react.useId)()}`, {
    internalReferences,
    crossDatasetReferences,
    isLoading,
    totalCount,
    projectIds,
    datasetNames,
    hasUnknownDatasetNames
  } = useReferringDocuments(id), documentTitle = (0, import_jsx_runtime.jsx)(DocTitle, { document: (0, import_react.useMemo)(() => ({ _id: id, _type: type }), [id, type]) }), showConfirmButton = !isLoading;
  return (0, import_jsx_runtime.jsx)(
    Dialog2,
    {
      width: 1,
      id: dialogId,
      header: t("confirm-delete-dialog.header.text", { context: action }),
      footer: {
        cancelButton: {
          onClick: onCancel,
          text: t("confirm-delete-dialog.cancel-button.text")
        },
        confirmButton: showConfirmButton ? {
          text: totalCount > 0 ? t("confirm-delete-dialog.confirm-anyway-button.text", { context: action }) : t("confirm-delete-dialog.confirm-button.text", { context: action }),
          onClick: onConfirm
        } : void 0
      },
      onClose: onCancel,
      onClickOutside: onCancel,
      children: (0, import_jsx_runtime.jsx)(DialogBody, { children: crossDatasetReferences && internalReferences && !isLoading ? (0, import_jsx_runtime.jsx)(
        ConfirmDeleteDialogBody,
        {
          crossDatasetReferences,
          internalReferences,
          documentTitle,
          isLoading,
          totalCount,
          action,
          projectIds,
          datasetNames,
          hasUnknownDatasetNames,
          onReferenceLinkClick: onCancel
        }
      ) : (0, import_jsx_runtime.jsx)(LoadingContainer, { "data-testid": "loading-container", children: (0, import_jsx_runtime.jsx)(LoadingBlock, { showText: true, title: t("confirm-delete-dialog.loading.text") }) }) })
    }
  );
}
function ConfirmDeleteDialogContainer(props) {
  const { t } = useTranslation2(structureLocaleNamespace), id = (0, import_react.useId)(), [error, setError] = (0, import_react.useState)(null), handleRetry = (0, import_react.useCallback)(() => setError(null), []);
  return error ? (0, import_jsx_runtime.jsx)(
    Dialog2,
    {
      id: `dialog-error-${id}`,
      "data-testid": "confirm-delete-error-dialog",
      header: t("confirm-delete-dialog.error.title.text"),
      footer: {
        confirmButton: {
          text: t("confirm-delete-dialog.error.retry-button.text"),
          onClick: handleRetry,
          tone: "default"
        }
      },
      onClose: props.onCancel,
      children: (0, import_jsx_runtime.jsx)(Box, { padding: 4, children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: t("confirm-delete-dialog.error.message.text") }) })
    }
  ) : (0, import_jsx_runtime.jsx)(ErrorBoundary, { onCatch: setError, children: (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, { ...props }) });
}
function Delay({
  children,
  ms = 0
}) {
  const [ready, setReady] = (0, import_react.useState)(ms <= 0);
  return (0, import_react.useEffect)(() => {
    if (ms <= 0)
      return;
    const timeoutId = setTimeout(() => setReady(true), ms);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [ms]), !ready || !children ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}) : typeof children == "function" ? children() : children;
}
var PANE_DEBUG = false;
var PANE_COLLAPSED_WIDTH = 51;
var PANE_DEFAULT_MIN_WIDTH = 204;
var Root$b = pt(Layer)`
  position: relative;
  width: 1px;
  min-width: 1px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1px;
    background-color: var(--card-border-color);
  }

  &:not([data-disabled]) {
    cursor: ew-resize;
    width: 9px;
    min-width: 9px;
    margin: 0 -4px;

    &:before {
      left: 4px;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 9px;
      bottom: 0;
      background-color: var(--card-border-color);
      opacity: 0;
      transition: opacity 150ms;
    }

    &[data-dragging]:after,
    &:hover:after {
      opacity: 0.2;
    }
  }
`;
function PaneDivider({
  disabled,
  element
}) {
  const { resize } = usePaneLayout(), [dragging, setDragging] = (0, import_react.useState)(false), handleMouseDown = (0, import_react.useCallback)(
    (event) => {
      if (!element)
        return;
      setDragging(true), event.preventDefault();
      const startX = event.pageX;
      resize("start", element, 0);
      const handleMouseMove = (e) => {
        e.preventDefault();
        const deltaX = e.pageX - startX;
        resize("move", element, deltaX);
      }, handleMouseUp = (e) => {
        e.preventDefault(), setDragging(false), window.removeEventListener("mousemove", handleMouseMove), window.removeEventListener("mouseup", handleMouseUp), resize("end", element, 0);
      };
      window.addEventListener("mousemove", handleMouseMove), window.addEventListener("mouseup", handleMouseUp);
    },
    [element, resize]
  );
  return (0, import_jsx_runtime.jsx)(
    Root$b,
    {
      "data-disabled": disabled ? "" : void 0,
      "data-dragging": dragging ? "" : void 0,
      onMouseDown: handleMouseDown
    }
  );
}
var Root$a = pt(Card)`
  outline: none;

  // NOTE: This will render a border to the right side of each pane
  // without taking up physical space.
  box-shadow: 1px 0 0 var(--card-border-color);
`;
var Pane = (0, import_react.forwardRef)(function(props, ref) {
  var _a, _b, _c;
  const {
    children,
    currentMinWidth: currentMinWidthProp,
    currentMaxWidth: currentMaxWidthProp,
    flex: flexProp = 1,
    id,
    minWidth: minWidthProp,
    maxWidth: maxWidthProp,
    selected = false,
    ...restProps
  } = props, [rootElement, setRootElement] = (0, import_react.useState)(null), {
    collapse,
    collapsed: layoutCollapsed,
    expand,
    expandedElement,
    mount,
    panes
  } = usePaneLayout(), pane = panes.find((p) => p.element === rootElement), paneIndex = pane && panes.indexOf(pane), nextPane = typeof paneIndex == "number" ? panes[paneIndex + 1] : void 0, isLast = paneIndex === panes.length - 1, collapsed = layoutCollapsed ? false : (pane == null ? void 0 : pane.collapsed) || false, nextCollapsed = (nextPane == null ? void 0 : nextPane.collapsed) || false, forwardedRef = useForwardedRef(ref), flex = (_a = pane == null ? void 0 : pane.flex) != null ? _a : flexProp, currentMinWidth = (_b = pane == null ? void 0 : pane.currentMinWidth) != null ? _b : currentMinWidthProp, currentMaxWidth = (_c = pane == null ? void 0 : pane.currentMaxWidth) != null ? _c : currentMaxWidthProp, setRef = (0, import_react.useCallback)(
    (refValue) => {
      setRootElement(refValue), forwardedRef.current = refValue;
    },
    [forwardedRef]
  );
  (0, import_react.useEffect)(() => {
    if (rootElement)
      return mount(rootElement, {
        currentMinWidth: currentMinWidthProp,
        currentMaxWidth: currentMaxWidthProp,
        flex: flexProp,
        id,
        minWidth: minWidthProp,
        maxWidth: maxWidthProp
      });
  }, [
    currentMinWidthProp,
    currentMaxWidthProp,
    flexProp,
    id,
    minWidthProp,
    maxWidthProp,
    mount,
    rootElement
  ]);
  const handleCollapse = (0, import_react.useCallback)(() => {
    rootElement && collapse(rootElement);
  }, [collapse, rootElement]), handleExpand = (0, import_react.useCallback)(() => {
    rootElement && expand(rootElement);
  }, [expand, rootElement]), contextValue = (0, import_react.useMemo)(
    () => ({
      collapse: handleCollapse,
      collapsed: layoutCollapsed ? false : collapsed,
      expand: handleExpand,
      index: paneIndex,
      isLast,
      rootElement
    }),
    [collapsed, handleCollapse, handleExpand, isLast, layoutCollapsed, paneIndex, rootElement]
  ), minWidth = (0, import_react.useMemo)(() => {
    if (!layoutCollapsed)
      return collapsed ? PANE_COLLAPSED_WIDTH : currentMinWidth === 0 || isLast ? minWidthProp || PANE_DEFAULT_MIN_WIDTH : currentMinWidth || minWidthProp || PANE_DEFAULT_MIN_WIDTH;
  }, [collapsed, currentMinWidth, isLast, layoutCollapsed, minWidthProp]), maxWidth = (0, import_react.useMemo)(() => {
    if (collapsed)
      return PANE_COLLAPSED_WIDTH;
    if (!(layoutCollapsed && isLast))
      return isLast ? maxWidthProp ? currentMaxWidth != null ? currentMaxWidth : maxWidthProp : void 0 : currentMaxWidth != null ? currentMaxWidth : maxWidthProp;
  }, [collapsed, currentMaxWidth, isLast, layoutCollapsed, maxWidthProp]), hidden = layoutCollapsed && !isLast, divider = (0, import_react.useMemo)(
    () => !isLast && !layoutCollapsed && (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "paneResizer", children: (0, import_jsx_runtime.jsx)(PaneDivider, { disabled: collapsed || nextCollapsed, element: rootElement }) }),
    [collapsed, isLast, layoutCollapsed, nextCollapsed, rootElement]
  ), style = (0, import_react.useMemo)(
    () => ({
      flex,
      minWidth,
      maxWidth: maxWidth === 1 / 0 ? void 0 : maxWidth
    }),
    [flex, minWidth, maxWidth]
  );
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "pane", children: (0, import_jsx_runtime.jsx)(PaneContext.Provider, { value: contextValue, children: (0, import_jsx_runtime.jsx)(IsLastPaneProvider, { isLastPane: isLast, children: (0, import_jsx_runtime.jsxs)(
      Root$a,
      {
        "data-testid": "pane",
        "data-ui": "Pane",
        tone: "inherit",
        hidden,
        id,
        overflow: layoutCollapsed ? void 0 : "hidden",
        ...restProps,
        "data-pane-collapsed": collapsed ? "" : void 0,
        "data-pane-index": paneIndex,
        "data-pane-selected": selected ? "" : void 0,
        ref: setRef,
        style,
        children: [
          PANE_DEBUG,
          (0, import_jsx_runtime.jsx)(BoundaryElementProvider, { element: rootElement, children: !hidden && (0, import_jsx_runtime.jsx)(Flex, { direction: "column", height: "fill", children }) })
        ]
      }
    ) }) }) }),
    divider
  ] });
});
var Root$9 = pt(Card)`
  position: relative;
  outline: none;
`;
Root$9.displayName = "PaneContent__root";
function usePane() {
  const pane = (0, import_react.useContext)(PaneContext);
  if (!pane)
    throw new Error("Pane: missing context value");
  return pane;
}
var PaneContent = (0, import_react.forwardRef)(function(props, ref) {
  const { as, children, overflow, padding, ...restProps } = props, { collapsed } = usePane(), { collapsed: layoutCollapsed } = usePaneLayout();
  return (0, import_jsx_runtime.jsx)(
    Root$9,
    {
      "data-testid": "pane-content",
      forwardedAs: as,
      ...restProps,
      flex: 1,
      hidden: collapsed,
      overflow: layoutCollapsed ? void 0 : overflow,
      padding,
      ref,
      tone: "inherit",
      children
    }
  );
});
var MENU_GROUP_POPOVER_PROPS = {
  constrainSize: true,
  placement: "left-start",
  portal: true
};
function PaneMenuButtonItem(props) {
  const { disabled, isAfterGroup, node } = props, getI18nText = useGetI18nText("i18n" in node ? node : void 0);
  if (node.type === "divider")
    return (0, import_jsx_runtime.jsx)(MenuDivider, {});
  const { title } = getI18nText(node);
  return node.type === "group" ? node.children.length === 0 ? null : node.expanded ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    isAfterGroup && (0, import_jsx_runtime.jsx)(MenuDivider, {}),
    node.children.map((child, childIndex) => {
      var _a;
      return (0, import_jsx_runtime.jsx)(
        PaneMenuButtonItem,
        {
          disabled: disabled || !!node.disabled,
          isAfterGroup: ((_a = node.children[childIndex - 1]) == null ? void 0 : _a.type) === "group",
          node: child
        },
        child.key
      );
    })
  ] }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    isAfterGroup && (0, import_jsx_runtime.jsx)(MenuDivider, {}),
    (0, import_jsx_runtime.jsx)(
      MenuGroup,
      {
        disabled,
        icon: node.icon,
        popover: MENU_GROUP_POPOVER_PROPS,
        text: title,
        children: node.children.map((child, childIndex) => {
          var _a;
          return (0, import_jsx_runtime.jsx)(
            PaneMenuButtonItem,
            {
              disabled: disabled || !!node.disabled,
              isAfterGroup: ((_a = node.children[childIndex - 1]) == null ? void 0 : _a.type) === "group",
              node: child
            },
            child.key
          );
        })
      }
    )
  ] }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    isAfterGroup && (0, import_jsx_runtime.jsx)(MenuDivider, {}),
    (0, import_jsx_runtime.jsx)(PaneContextMenuItemResolver, { disabled, node })
  ] });
}
function PaneContextMenuItemResolver(props) {
  const { node } = props;
  return node.intent ? (0, import_jsx_runtime.jsx)(PaneContextIntentMenuItem, { ...props, intent: node.intent }) : (0, import_jsx_runtime.jsx)(PaneContextMenuItem, { ...props });
}
function PaneContextMenuItem(props) {
  var _a;
  const { disabled, node } = props, tooltipContent = typeof node.disabled == "object" && (0, import_jsx_runtime.jsx)(Text, { size: 1, children: node.disabled.reason }), { title } = useI18nText(node);
  return (0, import_jsx_runtime.jsx)(TooltipOfDisabled, { content: tooltipContent, placement: "left", children: (0, import_jsx_runtime.jsx)(
    MenuItem,
    {
      disabled: disabled || !!node.disabled,
      hotkeys: (_a = node.hotkey) == null ? void 0 : _a.split("+"),
      icon: node.icon,
      iconRight: node.iconRight || node.selected && CheckmarkIcon,
      onClick: node.onAction,
      pressed: node.selected,
      text: title,
      tone: node.tone
    }
  ) });
}
function PaneContextIntentMenuItem(props) {
  var _a;
  const { disabled, intent, node } = props, tooltipContent = typeof node.disabled == "object" && (0, import_jsx_runtime.jsx)(Text, { size: 1, children: node.disabled.reason }), intentLink = useIntentLink({ intent: intent.type, params: intent.params }), handleClick = (0, import_react.useCallback)(
    (event) => {
      intentLink.onClick(event), node.onAction();
    },
    [intentLink, node]
  ), { title } = useI18nText(node);
  return (0, import_jsx_runtime.jsx)(TooltipOfDisabled, { content: tooltipContent, placement: "left", children: (0, import_jsx_runtime.jsx)(
    MenuItem,
    {
      as: "a",
      disabled: disabled || !!node.disabled,
      hotkeys: (_a = node.hotkey) == null ? void 0 : _a.split("+"),
      href: intentLink.href,
      icon: node.icon,
      iconRight: node.selected ? CheckmarkIcon : void 0,
      onClick: handleClick,
      pressed: node.selected,
      text: title,
      tone: node.tone
    }
  ) });
}
var CONTEXT_MENU_POPOVER_PROPS = {
  constrainSize: true,
  placement: "bottom",
  portal: true
};
function nodesHasTone(nodes, tone) {
  return nodes.some((node) => node.type === "item" && node.tone === tone || node.type === "group" && nodesHasTone(node.children, tone));
}
function PaneContextMenuButton(props) {
  const { nodes, actionsNodes } = props, id = (0, import_react.useId)(), hasCritical = nodesHasTone(nodes, "critical"), hasCaution = nodesHasTone(nodes, "caution");
  return (0, import_jsx_runtime.jsx)(
    MenuButton,
    {
      button: (0, import_jsx_runtime.jsx)(
        ContextMenuButton,
        {
          tone: hasCritical ? "critical" : hasCaution ? "caution" : void 0,
          "data-testid": "pane-context-menu-button"
        }
      ),
      id,
      menu: (0, import_jsx_runtime.jsxs)(Menu, { children: [
        actionsNodes && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          actionsNodes,
          (0, import_jsx_runtime.jsx)(MenuDivider, {})
        ] }),
        nodes.map((node, nodeIndex) => {
          var _a;
          const isAfterGroup = ((_a = nodes[nodeIndex - 1]) == null ? void 0 : _a.type) === "group";
          return (0, import_jsx_runtime.jsx)(PaneMenuButtonItem, { isAfterGroup, node }, node.key);
        })
      ] }),
      popover: CONTEXT_MENU_POPOVER_PROPS
    }
  );
}
var Root$8 = pt(Layer)`
  position: sticky;
  bottom: 0;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    border-bottom: 1px solid var(--card-border-color);
  }
`;
var RootCard = pt(Card)`
  padding-bottom: env(safe-area-inset-bottom);
`;
var PaneFooter = (0, import_react.forwardRef)(function(props, ref) {
  const { children, padding } = props, { collapsed } = usePane();
  return (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "paneFooter", children: (0, import_jsx_runtime.jsx)(Root$8, { "data-testid": "pane-footer", hidden: collapsed, ref, children: (0, import_jsx_runtime.jsx)(RootCard, { tone: "inherit", children: (0, import_jsx_runtime.jsx)(Box, { padding, children }) }) }) });
});
var Root$7 = pt(Layer)(({ $border }) => ct`
    line-height: 0;
    position: sticky;
    top: 0;

    &:not([data-collapsed]):after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      border-bottom: 1px solid ${$border ? "var(--card-border-color)" : "transparent"};
      opacity: 1;
    }
  `);
var Layout = pt(Flex)`
  transform-origin: calc(51px / 2);

  [data-collapsed] > div > & {
    transform: rotate(90deg);
  }
`;
var TitleCard = pt(Card)(({ theme }) => {
  const { fg, bg } = theme.sanity.color.card.enabled;
  return ct`
    background-color: ${bg};

    [data-ui='Text'] {
      color: ${fg};
    }
  `;
});
var TitleTextSkeleton = pt(TextSkeleton)`
  width: 66%;
  max-width: 175px;
`;
var TitleText = pt(Text)`
  cursor: default;
  outline: none;
`;
var TabsBox = pt(Box)(({ theme }) => {
  const { color, space } = theme.sanity;
  return ct`
    overflow: hidden;
    overflow: clip;
    position: relative;

    & > div {
      white-space: nowrap;
      overflow: auto;
      /* Hide scrollbars */
      scrollbar-width: none;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    /* right padding */
    & > div:after {
      content: '';
      display: inline-block;
      top: 0;
      right: 0;
      bottom: 0;
      width: ${space[3]}px;
      height: 1px;
    }

    /* Gradient that makes it look like tabs disappear into nothing (looks nicer) */
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right, ${rgba(color.base.bg, 0)}, var(--card-bg-color));
      width: ${space[3]}px;
      pointer-events: none;
    }
  `;
});
var PaneHeader$1 = (0, import_react.forwardRef)(function(props, ref) {
  const { actions, backButton, border, contentAfter, loading, subActions, tabs, tabIndex, title } = props, { collapse, collapsed, expand, rootElement: paneElement } = usePane(), paneRect = useElementRect(paneElement || null), layoutStyle = (0, import_react.useMemo)(
    () => ({
      width: collapsed ? (paneRect == null ? void 0 : paneRect.height) || window.innerHeight : void 0
    }),
    [collapsed, paneRect]
  ), handleTitleClick = (0, import_react.useCallback)(() => {
    collapsed || collapse();
  }, [collapse, collapsed]), handleLayoutClick = (0, import_react.useCallback)(() => {
    collapsed && expand();
  }, [collapsed, expand]);
  return (0, import_jsx_runtime.jsx)(LayerProvider, { zOffset: 100, children: (0, import_jsx_runtime.jsx)(
    Root$7,
    {
      $border: border,
      "data-collapsed": collapsed ? "" : void 0,
      "data-testid": "pane-header",
      ref,
      children: (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "paneHeader", children: (0, import_jsx_runtime.jsxs)(Card, { "data-collapsed": collapsed ? "" : void 0, tone: "inherit", children: [
        (0, import_jsx_runtime.jsxs)(
          Layout,
          {
            gap: 1,
            onClick: handleLayoutClick,
            padding: 3,
            paddingBottom: collapsed ? 3 : 2,
            sizing: "border",
            style: layoutStyle,
            children: [
              backButton && (0, import_jsx_runtime.jsx)(Box, { flex: "none", children: backButton }),
              (0, import_jsx_runtime.jsxs)(
                TitleCard,
                {
                  __unstable_focusRing: true,
                  flex: 1,
                  forwardedAs: "button",
                  onClick: handleTitleClick,
                  paddingLeft: backButton ? 1 : 2,
                  padding: 2,
                  tabIndex,
                  children: [
                    loading && (0, import_jsx_runtime.jsx)(TitleTextSkeleton, { animated: true, radius: 1, size: 1 }),
                    !loading && (0, import_jsx_runtime.jsx)(TitleText, { size: 1, textOverflow: "ellipsis", weight: "semibold", children: title })
                  ]
                }
              ),
              actions && (0, import_jsx_runtime.jsx)(Flex, { align: "center", hidden: collapsed, children: (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "paneHeader", children: actions }) })
            ]
          }
        ),
        !!(!collapsed && (tabs || subActions)) && (0, import_jsx_runtime.jsxs)(
          Flex,
          {
            align: "center",
            hidden: collapsed,
            overflow: "auto",
            paddingBottom: 3,
            paddingX: 3,
            children: [
              (0, import_jsx_runtime.jsx)(TabsBox, { flex: 1, marginRight: subActions ? 3 : 0, children: tabs }),
              subActions && subActions
            ]
          }
        ),
        !collapsed && contentAfter && contentAfter
      ] }) })
    }
  ) });
});
function getDisabledReason$1(node) {
  var _a;
  if (!node.disabled)
    return { disabledReason: void 0, ariaLabel: void 0, isDisabled: false };
  const disabledReason = typeof node.disabled == "object" ? node.disabled.reason : void 0, ariaLabel = typeof node.disabled == "object" && typeof ((_a = node.disabled) == null ? void 0 : _a.reason) == "string" ? node.disabled.reason : "This is disabled";
  return { disabledReason, ariaLabel, isDisabled: !!node.disabled };
}
function PaneHeaderActionButton(props) {
  const { node } = props;
  return node.type === "item" ? (0, import_jsx_runtime.jsx)(PaneHeaderMenuItemActionButton, { node }) : node.type === "group" ? (0, import_jsx_runtime.jsx)(PaneHeaderMenuGroupActionButton, { node }) : (console.warn('unknown menu node (expected `type: "item" | "group"`):', node), null);
}
function PaneHeaderMenuItemActionButton(props) {
  const { node } = props, { title } = useI18nText(node), { t } = useTranslation2();
  if (node.intent)
    return (0, import_jsx_runtime.jsx)(PaneHeaderActionIntentButton, { ...props, intent: node.intent });
  const { disabledReason, ariaLabel, isDisabled } = getDisabledReason$1(node);
  return (0, import_jsx_runtime.jsx)(
    StatusButton,
    {
      disabled: isDisabled,
      icon: node.icon,
      onClick: node.onAction,
      selected: node.selected,
      tone: node.tone,
      "aria-label": ariaLabel || title || t("status-button.aria-label"),
      tooltipProps: {
        hotkeys: !isDisabled && node.hotkey ? node.hotkey.split("+") : void 0,
        content: isDisabled ? disabledReason : title
      }
    }
  );
}
function PaneHeaderActionIntentButton(props) {
  const { intent, node } = props, intentLink = useIntentLink({ intent: intent.type, params: intent.params }), { t } = useTranslation2(), handleClick = (0, import_react.useCallback)(
    (event) => {
      intentLink.onClick(event), node.onAction();
    },
    [intentLink, node]
  ), { disabledReason, ariaLabel, isDisabled } = getDisabledReason$1(node);
  return (0, import_jsx_runtime.jsx)(
    StatusButton,
    {
      forwardedAs: "a",
      disabled: isDisabled,
      href: intentLink.href,
      icon: node.icon,
      onClick: handleClick,
      selected: node.selected,
      tone: node.tone,
      "aria-label": ariaLabel || node.title || t("status-button.aria-label"),
      tooltipProps: {
        hotkeys: !isDisabled && node.hotkey ? node.hotkey.split("+") : void 0,
        content: isDisabled ? disabledReason : node.title,
        placement: "bottom",
        portal: true
      }
    }
  );
}
function PaneHeaderMenuGroupActionButton(props) {
  var _a;
  const { node } = props, { title } = useI18nText(node);
  return (0, import_jsx_runtime.jsx)(
    MenuButton,
    {
      button: (0, import_jsx_runtime.jsx)(
        Button2,
        {
          disabled: !!node.disabled,
          icon: (_a = node.icon) != null ? _a : UnknownIcon,
          label: title,
          mode: "bleed",
          tooltipProps: { content: node.title, portal: true }
        }
      ),
      id: (0, import_react.useId)(),
      menu: (0, import_jsx_runtime.jsx)(Menu, { children: node.children.map((child, idx) => {
        var _a2;
        return (0, import_jsx_runtime.jsx)(
          PaneMenuButtonItem,
          {
            disabled: !!node.disabled,
            isAfterGroup: ((_a2 = node.children[idx - 1]) == null ? void 0 : _a2.type) === "group",
            node: child
          },
          child.key
        );
      }) })
    }
  );
}
var Root$6 = pt(Card)`
  transition: opacity 200ms;
  position: relative;
  z-index: 1;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  opacity: 0;

  &:not([hidden]) {
    display: flex;
  }

  &:not([data-collapsed]) {
    overflow: auto;
  }

  &[data-mounted] {
    opacity: 1;
  }

  &[data-resizing] {
    pointer-events: none;
  }
`;
function _calcPaneResize(cache, left, right, deltaX) {
  var _a, _b;
  const sum = {
    flex: cache.left.flex + cache.right.flex,
    width: cache.left.width + cache.right.width
  }, leftMinWidth = (_a = left.minWidth) != null ? _a : PANE_DEFAULT_MIN_WIDTH, rightMinWidth = (_b = right.minWidth) != null ? _b : PANE_DEFAULT_MIN_WIDTH, leftMaxWidth = Math.min(left.maxWidth || 1 / 0, sum.width - rightMinWidth), rightMaxWidth = Math.min(right.maxWidth || 1 / 0, sum.width - leftMinWidth);
  let minDeltaX = leftMinWidth - cache.left.width;
  const rightMinDeltaX = cache.right.width - rightMaxWidth;
  minDeltaX < rightMinDeltaX && (minDeltaX = rightMinDeltaX);
  let maxDeltaX = cache.right.width - rightMinWidth;
  const leftMaxDeltaX = leftMaxWidth - cache.left.width;
  maxDeltaX > leftMaxDeltaX && (maxDeltaX = leftMaxDeltaX);
  const _deltaX = Math.min(Math.max(deltaX, minDeltaX), maxDeltaX), leftW = cache.left.width + _deltaX, rightW = cache.right.width - _deltaX, leftFlex = leftW / sum.width * sum.flex, rightFlex = rightW / sum.width * sum.flex;
  return { leftFlex, leftW, rightFlex, rightW };
}
function _getDOMPath(rootElement, el) {
  const path = [];
  let e = el;
  for (; e !== rootElement; ) {
    const parentElement = e.parentElement;
    if (!parentElement)
      return path;
    const index = Array.from(parentElement.childNodes).indexOf(e);
    if (path.unshift(index), parentElement === rootElement)
      return path;
    e = parentElement;
  }
  return path;
}
var EMPTY_PATH = [];
function _sortElements(rootElement, elements) {
  const map2 = /* @__PURE__ */ new WeakMap();
  for (const element of elements)
    map2.set(element, _getDOMPath(rootElement, element));
  const _sortByElementPath = (a, b) => {
    const _a = map2.get(a) || EMPTY_PATH, _b = map2.get(b) || EMPTY_PATH, len = Math.max(_a.length, _b.length);
    for (let i = 0; i < len; i += 1) {
      const aIndex = _a[i] || -1, bIndex = _b[i] || -1;
      if (aIndex !== bIndex)
        return aIndex - bIndex;
    }
    return 0;
  };
  elements.sort(_sortByElementPath);
}
function createPaneLayoutController() {
  const observers = [], elements = [], optionsMap = /* @__PURE__ */ new WeakMap(), userCollapsedElementSet = /* @__PURE__ */ new Set(), cache = {};
  let rootElement = null, rootWidth = 0, expandedElement = null, resizeDataMap = /* @__PURE__ */ new Map(), resizing = false;
  function collapse(element) {
    userCollapsedElementSet.add(element), expandedElement === element && (expandedElement = null), _notifyObservers();
  }
  function expand(element) {
    userCollapsedElementSet.delete(element), expandedElement = element, _notifyObservers();
  }
  function mount(element, options) {
    return optionsMap.set(element, { ...options, original: options }), elements.push(element), rootElement && _sortElements(rootElement, elements), expand(element), () => {
      const idx = elements.indexOf(element);
      idx > -1 && elements.splice(idx, 1), optionsMap.delete(element), _notifyObservers();
    };
  }
  function resize(type, leftElement, deltaX) {
    var _a, _b, _c, _d;
    const leftIndex = elements.indexOf(leftElement), leftOptions = optionsMap.get(leftElement);
    if (!leftOptions)
      return;
    const rightElement = elements[leftIndex + 1], rightOptions = optionsMap.get(rightElement);
    if (rightOptions) {
      if (type === "start" && (resizing = true, cache.left = {
        element: leftElement,
        flex: leftOptions.flex || 1,
        width: leftElement.offsetWidth
      }, cache.right = {
        element: rightElement,
        flex: rightOptions.flex || 1,
        width: rightElement.offsetWidth
      }, _notifyObservers()), type === "move" && cache.left && cache.right) {
        resizeDataMap = /* @__PURE__ */ new Map();
        const { leftW, rightW, leftFlex, rightFlex } = _calcPaneResize(
          cache,
          leftOptions,
          rightOptions,
          deltaX
        );
        resizeDataMap.set(leftElement, { flex: leftFlex, width: leftW }), resizeDataMap.set(rightElement, { flex: rightFlex, width: rightW }), _notifyObservers();
      }
      if (type === "end") {
        resizing = false;
        const leftResizeData = resizeDataMap.get(leftElement), rightResizeData = resizeDataMap.get(rightElement);
        optionsMap.set(leftElement, {
          ...leftOptions,
          currentMinWidth: 0,
          currentMaxWidth: (_a = leftOptions.maxWidth) != null ? _a : 1 / 0,
          flex: (_b = leftResizeData == null ? void 0 : leftResizeData.flex) != null ? _b : leftOptions.flex
        }), optionsMap.set(rightElement, {
          ...rightOptions,
          currentMinWidth: 0,
          currentMaxWidth: (_c = leftOptions.maxWidth) != null ? _c : 1 / 0,
          flex: (_d = rightResizeData == null ? void 0 : rightResizeData.flex) != null ? _d : rightOptions.flex
        }), resizeDataMap = /* @__PURE__ */ new Map(), delete cache.left, delete cache.right, _notifyObservers();
      }
    }
  }
  function setRootElement(nextRootElement) {
    rootElement = nextRootElement;
  }
  function setRootWidth(nextRootWidth) {
    rootWidth = nextRootWidth, _notifyObservers();
  }
  function subscribe(observer) {
    return observers.push(observer), () => {
      const idx = observers.push(observer);
      idx > -1 && observers.splice(idx, 1);
    };
  }
  return { collapse, expand, mount, resize, setRootElement, setRootWidth, subscribe };
  function _notifyObservers() {
    var _a, _b, _c, _d;
    if (!rootWidth)
      return;
    const _elements = [];
    for (const element of elements)
      element !== expandedElement && _elements.unshift(element);
    expandedElement && _elements.unshift(expandedElement);
    const dataMap = /* @__PURE__ */ new WeakMap(), len = _elements.length, lastElement = _elements[0], collapsedWidth = (len - 1) * PANE_COLLAPSED_WIDTH;
    let remaingWidth = rootWidth - collapsedWidth;
    for (const element of _elements) {
      const options = optionsMap.get(element);
      if (!options)
        continue;
      const minWidth = options.currentMinWidth || options.minWidth || PANE_DEFAULT_MIN_WIDTH, isLast = element === lastElement, userCollapsed = userCollapsedElementSet.has(element), sizeCollapsed = minWidth > remaingWidth, collapsed = isLast ? false : userCollapsed || sizeCollapsed, resizeData = resizeDataMap.get(element);
      dataMap.set(element, {
        element,
        collapsed,
        currentMinWidth: (_a = resizeData == null ? void 0 : resizeData.width) != null ? _a : options.currentMinWidth,
        currentMaxWidth: (_b = resizeData == null ? void 0 : resizeData.width) != null ? _b : options.currentMaxWidth,
        flex: (_d = (_c = resizeData == null ? void 0 : resizeData.flex) != null ? _c : options.flex) != null ? _d : 1
      }), collapsed ? remaingWidth -= PANE_COLLAPSED_WIDTH : remaingWidth -= minWidth - PANE_COLLAPSED_WIDTH;
    }
    const panes = [];
    for (const element of elements) {
      const data = dataMap.get(element);
      data && panes.push(data);
    }
    for (const observer of observers)
      observer({
        expandedElement: expandedElement || elements[elements.length - 1] || null,
        panes,
        resizing
      });
  }
}
function PaneLayout(props) {
  const { children, minWidth, onCollapse, onExpand, ...restProps } = props, controller = (0, import_react.useMemo)(() => createPaneLayoutController(), []), [rootElement, setRootElement] = (0, import_react.useState)(null), rootRect = useElementRect(rootElement), width = (rootRect == null ? void 0 : rootRect.width) || 0, collapsed = width === void 0 || !minWidth ? void 0 : width < minWidth, [state2, setState] = (0, import_react.useState)({
    expandedElement: null,
    panes: [],
    resizing: false
  });
  (0, import_react.useEffect)(() => controller.setRootElement(rootElement), [controller, rootElement]), (0, import_react.useEffect)(() => controller.setRootWidth(width), [controller, width]), (0, import_react.useEffect)(() => controller.subscribe(setState), [controller]), (0, import_react.useEffect)(() => {
    collapsed !== void 0 && (collapsed && onCollapse && onCollapse(), !collapsed && onExpand && onExpand());
  }, [collapsed, onCollapse, onExpand]);
  const paneLayout = (0, import_react.useMemo)(
    () => ({
      collapse: controller.collapse,
      collapsed,
      expand: controller.expand,
      expandedElement: state2.expandedElement,
      mount: controller.mount,
      panes: state2.panes,
      resize: controller.resize,
      resizing: state2.resizing
    }),
    [collapsed, controller, state2.expandedElement, state2.panes, state2.resizing]
  );
  return (0, import_jsx_runtime.jsx)(PaneLayoutContext.Provider, { value: paneLayout, children: (0, import_jsx_runtime.jsx)(
    Root$6,
    {
      "data-ui": "PaneLayout",
      ...restProps,
      "data-collapsed": collapsed ? "" : void 0,
      "data-resizing": state2.resizing ? "" : void 0,
      "data-mounted": width ? "" : void 0,
      ref: setRootElement,
      children
    }
  ) });
}
function isMenuNodeButton(node) {
  return (node.type === "item" || node.type === "group") && node.renderAsButton;
}
var isNotMenuNodeButton = (0, import_negate.default)(isMenuNodeButton);
function resolveMenuNodes(params) {
  var _a, _b;
  const { fieldActions = [], menuItems, menuItemGroups } = params, nodes = [];
  let keyOffset = 0;
  for (let i = 0; i < fieldActions.length; i += 1) {
    const a = fieldActions[i];
    nodes.push(mapFieldActionToPaneMenuNode(a, `${i}-${a.type}`));
  }
  keyOffset += nodes.length;
  const groups = [];
  for (const itemGroup of menuItemGroups)
    groups.find((g) => g.key === itemGroup.id) || groups.push({
      type: "group",
      key: itemGroup.id,
      children: [],
      expanded: true,
      renderAsButton: false,
      title: itemGroup.title,
      i18n: itemGroup.i18n
    });
  const ungroupedItems = [];
  for (let i = 0; i < menuItems.length; i += 1) {
    const item = menuItems[i];
    let group = item.group && groups.find((g) => g.key === item.group);
    item.group && !group && (group = {
      type: "group",
      key: item.group,
      expanded: true,
      icon: item.icon,
      title: item.group,
      children: [],
      renderAsButton: false
    }, groups.push(group)), group ? group.children.push({
      type: "item",
      key: `${keyOffset + i}-item`,
      hotkey: item.shortcut,
      icon: item.icon,
      intent: item.intent,
      onAction: () => params.actionHandler(item),
      renderAsButton: (_a = item.showAsAction) != null ? _a : false,
      selected: item.selected,
      title: item.title,
      i18n: item.i18n,
      tone: item.tone
    }) : ungroupedItems.push({
      type: "item",
      key: `${keyOffset + i}-item`,
      hotkey: item.shortcut,
      icon: item.icon,
      intent: item.intent,
      onAction: () => params.actionHandler(item),
      renderAsButton: (_b = item.showAsAction) != null ? _b : false,
      selected: item.selected,
      title: item.title,
      i18n: item.i18n,
      tone: item.tone
    });
  }
  return [...ungroupedItems, ...groups, ...nodes];
}
function mapFieldActionToPaneMenuNode(a, key) {
  var _a, _b, _c;
  return a.type === "divider" ? {
    type: "divider",
    key
  } : a.type === "group" ? {
    type: "group",
    key,
    children: a.children.map(
      (child, childIdx) => mapFieldActionToPaneMenuNode(child, `${key}-${childIdx}-${child.type}`)
    ),
    disabled: a.disabled,
    expanded: (_a = a.expanded) != null ? _a : true,
    icon: a.icon,
    title: a.title,
    i18n: a.i18n,
    renderAsButton: (_b = a.renderAsButton) != null ? _b : false
  } : {
    type: "item",
    key,
    intent: a.intent,
    disabled: a.disabled,
    icon: a.icon,
    iconRight: a.iconRight,
    onAction: a.onAction,
    renderAsButton: (_c = a.renderAsButton) != null ? _c : false,
    selected: a.selected,
    title: a.title,
    i18n: a.i18n,
    tone: a.tone
  };
}
var IntentButton = (0, import_react.forwardRef)(function(props, ref) {
  const { intent, ...restProps } = props, Link = (0, import_react.useMemo)(
    () => (
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (0, import_react.forwardRef)(function(linkProps, linkRef) {
        return (0, import_jsx_runtime.jsx)(IntentLink, { ...linkProps, intent: intent.type, params: intent.params, ref: linkRef });
      })
    ),
    [intent]
  );
  return props.disabled ? (0, import_jsx_runtime.jsx)(Button2, { ...restProps, as: "a", role: "link", "aria-disabled": "true" }) : (0, import_jsx_runtime.jsx)(Button2, { ...restProps, as: Link, "data-as": "a", ref });
});
function InsufficientPermissionsMessageTooltip({
  reveal,
  context,
  loading,
  children
}) {
  const currentUser = useCurrentUser(), { t } = useTranslation2(structureLocaleNamespace);
  return reveal ? (0, import_jsx_runtime.jsx)(
    Tooltip,
    {
      content: loading ? t("insufficient-permissions-message-tooltip.loading-text") : (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, { context, currentUser }),
      portal: true,
      children: (0, import_jsx_runtime.jsx)("div", { children })
    }
  ) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var POPOVER_PROPS = {
  constrainSize: true,
  placement: "bottom",
  portal: true
};
var getIntent = (schema, templates, item) => {
  var _a;
  const typeName = (_a = templates.find((t) => t.id === item.templateId)) == null ? void 0 : _a.schemaType;
  if (!typeName)
    return null;
  const baseParams = {
    template: item.templateId,
    type: typeName,
    id: item.initialDocumentId
  };
  return {
    type: "create",
    params: item.parameters ? [baseParams, item.parameters] : baseParams
  };
};
function PaneHeaderCreateButton({ templateItems }) {
  const schema = useSchema(), templates = useTemplates(), { t } = useTranslation2(structureLocaleNamespace), getI18nText = useGetI18nText([...templateItems, ...templates]), [templatePermissions, isTemplatePermissionsLoading] = useTemplatePermissions({
    templateItems
  }), nothingGranted = (0, import_react.useMemo)(() => !isTemplatePermissionsLoading && (templatePermissions == null ? void 0 : templatePermissions.every((permission) => !permission.granted)), [isTemplatePermissionsLoading, templatePermissions]), permissionsById = (0, import_react.useMemo)(() => templatePermissions ? templatePermissions.reduce(
    (acc, permission) => (acc[permission.id] = permission, acc),
    {}
  ) : {}, [templatePermissions]);
  if (nothingGranted)
    return (0, import_jsx_runtime.jsx)(
      InsufficientPermissionsMessageTooltip,
      {
        context: "create-document-type",
        reveal: true,
        loading: isTemplatePermissionsLoading,
        children: (0, import_jsx_runtime.jsx)(
          Button2,
          {
            "aria-label": t("pane-header.disabled-created-button.aria-label"),
            icon: AddIcon,
            "data-testid": "action-intent-button",
            disabled: true,
            mode: "bleed",
            tooltipProps: null
          }
        )
      }
    );
  if (templateItems.length === 1) {
    const firstItem = templateItems[0], permissions = permissionsById[firstItem.id], disabled = !(permissions != null && permissions.granted), intent = getIntent(schema, templates, firstItem);
    return intent ? (0, import_jsx_runtime.jsx)(
      InsufficientPermissionsMessageTooltip,
      {
        reveal: disabled,
        loading: isTemplatePermissionsLoading,
        context: "create-document-type",
        children: (0, import_jsx_runtime.jsx)(
          IntentButton,
          {
            "aria-label": getI18nText(firstItem).title,
            icon: firstItem.icon || AddIcon,
            intent,
            mode: "bleed",
            disabled,
            "data-testid": "action-intent-button",
            tooltipProps: disabled ? null : { content: t("pane-header.create-new-button.tooltip") }
          }
        )
      }
    ) : null;
  }
  return (0, import_jsx_runtime.jsx)(
    MenuButton,
    {
      button: (0, import_jsx_runtime.jsx)(
        Button2,
        {
          icon: AddIcon,
          mode: "bleed",
          "data-testid": "multi-action-intent-button",
          tooltipProps: { content: t("pane-header.create-new-button.tooltip") }
        }
      ),
      id: "create-menu",
      menu: (0, import_jsx_runtime.jsx)(Menu, { children: templateItems.map((item, itemIndex) => {
        const permissions = permissionsById[item.id], disabled = !(permissions != null && permissions.granted), intent = getIntent(schema, templates, item), template = templates.find((i) => i.id === item.templateId);
        if (!template || !intent)
          return null;
        const Link = (0, import_react.forwardRef)(
          (linkProps, linkRef) => disabled ? (0, import_jsx_runtime.jsx)("button", { type: "button", disabled: true, ...linkProps, ref: linkRef }) : (0, import_jsx_runtime.jsx)(
            IntentLink,
            {
              ...linkProps,
              intent: intent.type,
              params: intent.params,
              ref: linkRef
            }
          )
        );
        Link.displayName = "Link";
        const { title } = getI18nText({
          ...item,
          // replace the title with the template title
          title: item.title || getI18nText(template).title
        });
        return (0, import_jsx_runtime.jsx)(
          InsufficientPermissionsMessageTooltip,
          {
            context: "create-document-type",
            reveal: disabled,
            loading: isTemplatePermissionsLoading,
            children: (0, import_jsx_runtime.jsx)(
              MenuItem,
              {
                as: Link,
                "data-as": disabled ? "button" : "a",
                text: title,
                "aria-label": disabled ? t("pane-header.disabled-created-button.aria-label") : title,
                disabled,
                "data-testid": `action-intent-button-${itemIndex}`
              }
            )
          },
          item.id
        );
      }) }),
      popover: POPOVER_PROPS
    }
  );
}
function isNonNullable(value) {
  return value != null;
}
var hashObject = (value) => {
  const sortObject = (v) => typeof v != "object" || !v ? v : Array.isArray(v) ? v.map(sortObject) : Object.entries(v).sort(([keyA], [keyB]) => keyA.localeCompare(keyB, "en"));
  return JSON.stringify(sortObject(((v) => JSON.parse(JSON.stringify(v)))(value)));
};
var PaneHeaderActions = (0, import_react.memo)(function(props) {
  const {
    initialValueTemplateItems: initialValueTemplateItemsFromStructure = EMPTY_ARRAY$t,
    menuItems = EMPTY_ARRAY$t,
    menuItemGroups = EMPTY_ARRAY$t,
    actionHandlers = EMPTY_OBJECT
  } = props, templates = useTemplates(), handleAction = (0, import_react.useCallback)(
    (item) => {
      if (typeof item.action == "string" && !(item.action in actionHandlers))
        return console.warn("No handler for action:", item.action), false;
      const handler = (
        // eslint-disable-next-line no-nested-ternary
        typeof item.action == "function" ? item.action : typeof item.action == "string" ? actionHandlers[item.action] : null
      );
      return handler ? (handler(item.params), true) : false;
    },
    [actionHandlers]
  ), menuNodes = (0, import_react.useMemo)(
    () => resolveMenuNodes({
      actionHandler: handleAction,
      menuItemGroups,
      menuItems: menuItems.filter((item) => {
        var _a;
        return ((_a = item.intent) == null ? void 0 : _a.type) !== "create";
      })
    }),
    [handleAction, menuItemGroups, menuItems]
  ), actionNodes = (0, import_react.useMemo)(() => menuNodes.filter(isMenuNodeButton), [menuNodes]), contextMenuNodes = (0, import_react.useMemo)(() => menuNodes.filter(isNotMenuNodeButton), [menuNodes]), initialValueTemplateItemFromMenuItems = (0, import_react.useMemo)(() => menuItems.map((item, menuItemIndex) => {
    var _a;
    if (((_a = item.intent) == null ? void 0 : _a.type) !== "create")
      return null;
    const { params } = item.intent;
    if (!params)
      return null;
    const intentParams = Array.isArray(params) ? params[0] : params, templateParams = Array.isArray(params) ? params[1] : void 0, templateId = intentParams.template || intentParams.type;
    if (!templateId)
      return null;
    const template = templates.find((t) => t.id === templateId);
    if (!template)
      return null;
    const initialDocumentId = intentParams.id;
    return {
      item,
      template,
      templateParams,
      menuItemIndex,
      initialDocumentId
    };
  }).filter(isNonNullable).map(({ initialDocumentId, item, template, menuItemIndex, templateParams }) => ({
    id: `menuItem${menuItemIndex}`,
    initialDocumentId,
    templateId: template.id,
    type: "initialValueTemplateItem",
    title: item.title || template.title,
    i18n: item.i18n || template.i18n,
    icon: item.icon,
    description: template.description,
    parameters: templateParams,
    schemaType: template.schemaType
  })), [menuItems, templates]), combinedInitialValueTemplates = (0, import_react.useMemo)(() => (0, import_uniqBy.default)(
    [...initialValueTemplateItemFromMenuItems, ...initialValueTemplateItemsFromStructure],
    (item) => hashObject([item.initialDocumentId, item.templateId, item.parameters])
  ), [initialValueTemplateItemFromMenuItems, initialValueTemplateItemsFromStructure]);
  return (0, import_jsx_runtime.jsxs)(Flex, { gap: 1, children: [
    combinedInitialValueTemplates.length > 0 && (0, import_jsx_runtime.jsx)(PaneHeaderCreateButton, { templateItems: combinedInitialValueTemplates }),
    actionNodes.map((node) => (0, import_jsx_runtime.jsx)(PaneHeaderActionButton, { node }, node.key)),
    contextMenuNodes.length > 0 && (0, import_jsx_runtime.jsx)(PaneContextMenuButton, { nodes: contextMenuNodes })
  ] });
});
function MissingSchemaType(props) {
  const { t } = useTranslation2(structureLocaleNamespace), { layout, value } = props;
  return (0, import_jsx_runtime.jsx)(
    SanityDefaultPreview,
    {
      title: (0, import_jsx_runtime.jsx)("em", { children: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          t,
          i18nKey: "pane-item.missing-schema-type.title",
          components: { Code: "code" },
          values: { documentType: value._type }
        }
      ) }),
      subtitle: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          t,
          i18nKey: "pane-item.missing-schema-type.subtitle",
          components: { Code: "code" },
          values: { documentId: value._id }
        }
      ),
      media: () => (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {}),
      layout
    }
  );
}
function getIconWithFallback(icon, schemaType, defaultIcon) {
  return icon === false ? false : icon || schemaType && schemaType.icon || defaultIcon || false;
}
function PaneItem(props) {
  const {
    icon,
    id,
    layout = "default",
    pressed,
    schemaType,
    selected,
    title,
    value,
    margin,
    marginBottom,
    marginTop
  } = props, schema = useSchema(), documentPreviewStore = useDocumentPreviewStore(), { ChildLink: ChildLink2 } = usePaneRouter(), documentPresence = useDocumentPresence(id), hasSchemaType = !!(schemaType && schemaType.name && schema.get(schemaType.name)), [clicked, setClicked] = (0, import_react.useState)(false), preview = (0, import_react.useMemo)(() => value && isSanityDocument(value) ? !schemaType || !hasSchemaType ? (0, import_jsx_runtime.jsx)(MissingSchemaType, { value }) : (0, import_jsx_runtime.jsx)(
    PaneItemPreview,
    {
      documentPreviewStore,
      icon: getIconWithFallback(icon, schemaType, DocumentIcon),
      layout,
      schemaType,
      value,
      presence: documentPresence
    }
  ) : (0, import_jsx_runtime.jsx)(
    SanityDefaultPreview,
    {
      status: (0, import_jsx_runtime.jsx)(Box, { style: { opacity: 0.5 }, children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: (0, import_jsx_runtime.jsx)(ChevronRightIcon, {}) }) }),
      icon: getIconWithFallback(icon, schemaType, FolderIcon),
      layout: "compact",
      title
    }
  ), [
    documentPreviewStore,
    hasSchemaType,
    icon,
    layout,
    schemaType,
    title,
    value,
    documentPresence
  ]), Link = (0, import_react.useMemo)(
    () => function(linkProps) {
      return (0, import_jsx_runtime.jsx)(ChildLink2, { ...linkProps, childId: id });
    },
    [ChildLink2, id]
  ), handleClick = (0, import_react.useCallback)((e) => {
    if (e.metaKey) {
      setClicked(false);
      return;
    }
    setClicked(true);
  }, []);
  return (0, import_react.useEffect)(() => setClicked(false), [selected]), (0, import_jsx_runtime.jsx)(
    PreviewCard,
    {
      "data-testid": `pane-item-${title}`,
      __unstable_focusRing: true,
      as: Link,
      "data-as": "a",
      margin,
      marginBottom,
      marginTop,
      onClick: handleClick,
      pressed,
      radius: 2,
      selected: selected || clicked,
      sizing: "border",
      tabIndex: -1,
      tone: "inherit",
      children: preview
    }
  );
}
var RenderActionCollectionState = (props) => {
  const { actions, children, actionProps, onActionComplete, group } = props;
  return (0, import_jsx_runtime.jsx)(
    GetHookCollectionState,
    {
      onReset: onActionComplete,
      hooks: actions,
      args: actionProps,
      group,
      children
    }
  );
};
var RenderBadgeCollectionState = (props) => {
  const { badges, children, badgeProps, ...rest } = props;
  return (0, import_jsx_runtime.jsx)(GetHookCollectionState, { ...rest, hooks: badges, args: badgeProps, children });
};
function ErrorPane(props) {
  const {
    children,
    currentMinWidth,
    flex,
    minWidth,
    paneKey,
    title = "Error",
    tone = "critical"
  } = props;
  return (0, import_jsx_runtime.jsxs)(
    Pane,
    {
      currentMinWidth,
      flex,
      id: paneKey,
      minWidth,
      tone,
      children: [
        (0, import_jsx_runtime.jsx)(PaneHeader$1, { title }),
        (0, import_jsx_runtime.jsx)(PaneContent, { overflow: "auto", children: (0, import_jsx_runtime.jsx)(Box, { paddingX: 4, paddingY: 5, children }) })
      ]
    }
  );
}
function getWaitMessages(path) {
  const thresholds = [
    { ms: 300, messageKey: "panes.resolving.default-message" },
    { ms: 5e3, messageKey: "panes.resolving.slow-resolve-message" }
  ];
  if (isDev) {
    const message = [
      "Check console for errors?",
      "Is your observable/promise resolving?",
      path.length > 0 ? `Structure path: ${path.join(" ➝ ")}` : ""
    ];
    thresholds.push({
      ms: 1e4,
      message: message.join(`
`)
    });
  }
  const src = of(null);
  return merge(
    ...thresholds.map(
      (threshold) => src.pipe(
        mapTo(
          "messageKey" in threshold ? { messageKey: threshold.messageKey } : { message: threshold.message }
        ),
        delay(threshold.ms)
      )
    )
  );
}
var DEFAULT_MESSAGE_KEY = "panes.resolving.default-message";
var Content$1 = pt(Flex)`
  opacity: 0;
  transition: opacity 200ms;

  &[data-mounted] {
    opacity: 1;
  }
`;
var LoadingPane = (0, import_react.memo)((props) => {
  const {
    delay: delay2 = 300,
    flex,
    message: messageProp = getWaitMessages,
    minWidth,
    paneKey,
    path,
    selected,
    title,
    tone
  } = props, { t } = useTranslation2(structureLocaleNamespace), resolvedMessage = (0, import_react.useMemo)(() => typeof messageProp == "function" ? messageProp(path ? path.split(";") : []) : messageProp, [messageProp, path]), [currentMessage, setCurrentMessage] = (0, import_react.useState)(() => typeof resolvedMessage == "string" ? resolvedMessage : t(DEFAULT_MESSAGE_KEY));
  (0, import_react.useEffect)(() => {
    if (typeof resolvedMessage != "object" || typeof resolvedMessage.subscribe != "function")
      return;
    const sub = resolvedMessage.subscribe((message) => {
      setCurrentMessage("messageKey" in message ? t(message.messageKey) : message.message);
    });
    return () => sub.unsubscribe();
  }, [resolvedMessage, t]);
  const [contentElement, setContentElement] = (0, import_react.useState)(null), [mounted, setMounted] = (0, import_react.useState)(false);
  return (0, import_react.useEffect)(() => {
    if (contentElement)
      return _raf2(() => setMounted(true));
  }, [contentElement]), (0, import_jsx_runtime.jsx)(Pane, { flex, id: paneKey, minWidth, selected, tone, children: (0, import_jsx_runtime.jsx)(PaneContent, { children: (0, import_jsx_runtime.jsx)(
    Content$1,
    {
      align: "center",
      "data-mounted": mounted ? "" : void 0,
      direction: "column",
      height: "fill",
      justify: "center",
      ref: setContentElement,
      children: (0, import_jsx_runtime.jsx)(LoadingBlock, { showText: true, title: title || currentMessage })
    }
  ) }) });
});
LoadingPane.displayName = "LoadingPane";
function useDocumentPane() {
  const documentPane = (0, import_react.useContext)(DocumentPaneContext);
  if (!documentPane)
    throw new Error("DocumentPane: missing context value");
  return documentPane;
}
function CommentsWrapper(props) {
  const { children, documentId, documentType } = props;
  return (0, import_jsx_runtime.jsx)(CommentsEnabledProvider, { documentId, documentType, children: (0, import_jsx_runtime.jsx)(CommentsProviderWrapper, { documentId, documentType, children }) });
}
function CommentsProviderWrapper(props) {
  const { children, documentId, documentType } = props, { enabled } = useCommentsEnabled(), { connectionState, onPathOpen, inspector, openInspector } = useDocumentPane(), { params, setParams, createPathWithParams } = usePaneRouter(), selectedCommentId = params == null ? void 0 : params.comment, paramsRef = (0, import_react.useRef)(params);
  (0, import_react.useLayoutEffect)(() => {
    paramsRef.current = params;
  }, [params]);
  const getCommentLink = (0, import_react.useCallback)(
    (commentId) => {
      const path = createPathWithParams({
        ...paramsRef.current,
        comment: commentId,
        inspect: COMMENTS_INSPECTOR_NAME
      });
      return `${window.location.origin}${path}`;
    },
    [createPathWithParams]
  ), handleClearSelectedComment = (0, import_react.useCallback)(() => {
    setParams({ ...paramsRef.current, comment: void 0 });
  }, [setParams]), handleOpenCommentsInspector = (0, import_react.useCallback)(() => {
    (inspector == null ? void 0 : inspector.name) !== COMMENTS_INSPECTOR_NAME && openInspector(COMMENTS_INSPECTOR_NAME);
  }, [inspector == null ? void 0 : inspector.name, openInspector]);
  return enabled ? (0, import_jsx_runtime.jsx)(
    CommentsProvider,
    {
      documentId,
      documentType,
      getCommentLink,
      isCommentsOpen: (inspector == null ? void 0 : inspector.name) === COMMENTS_INSPECTOR_NAME,
      isConnecting: connectionState === "connecting",
      onClearSelectedComment: handleClearSelectedComment,
      onCommentsOpen: handleOpenCommentsInspector,
      onPathOpen,
      selectedCommentId,
      sortOrder: "desc",
      type: "field",
      children
    }
  ) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var _DEBUG = false;
var EMPTY_PARAMS$2 = {};
var LOADING_PANE = Symbol("LOADING_PANE");
var DOCUMENT_PANEL_PORTAL_ELEMENT = "documentPanelPortalElement";
function useStructureTool() {
  const structureTool2 = (0, import_react.useContext)(StructureToolContext);
  if (!structureTool2)
    throw new Error("StructureTool: missing context value");
  return structureTool2;
}
var DOCUMENT_PANEL_MIN_WIDTH = 320;
var DOCUMENT_PANEL_INITIAL_MIN_WIDTH = 600;
var DOCUMENT_INSPECTOR_MIN_WIDTH = 320;
var DOCUMENT_INSPECTOR_MAX_WIDTH = 540;
var EMPTY_PARAMS$1 = {};
var INSPECT_ACTION_PREFIX = "inspect:";
var DEFAULT_MENU_ITEM_GROUPS = [{ id: "inspectors" }, { id: "links" }];
var HISTORY_INSPECTOR_NAME = "sanity/structure/history";
var VALIDATION_INSPECTOR_NAME = "sanity/structure/validation";
var InspectorMenuItem = (0, import_react.memo)(function(props) {
  const { documentId, documentType, index, setMenuItem, useMenuItem: useMenuItem2 } = props, node = useUnique(
    useMenuItem2({
      documentId,
      documentType
    })
  );
  return (0, import_react.useEffect)(() => {
    setMenuItem(index, node);
  }, [index, node, setMenuItem]), (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
});
function DocumentInspectorMenuItemsResolver(props) {
  const { documentId, documentType, inspectors: inspectors2, onMenuItems } = props, len = inspectors2.length, lenRef = (0, import_react.useRef)(len), [menuItems, setMenuItems] = (0, import_react.useState)(
    () => Array.from(new Array(len))
  ), menuItemsRef = (0, import_react.useRef)(menuItems);
  (0, import_react.useEffect)(() => {
    if (lenRef.current !== len) {
      const newFieldActions = Array.from(new Array(len));
      for (let i = 0; i < len; i++)
        newFieldActions[i] = menuItemsRef.current[i];
      lenRef.current = len, setMenuItems(() => (menuItemsRef.current = newFieldActions, newFieldActions));
    }
  }, [len]);
  const setMenuItem = (0, import_react.useCallback)((index, node) => {
    setMenuItems((prev) => {
      const next = [...prev];
      return next[index] = node, menuItemsRef.current = next, next;
    });
  }, []);
  return (0, import_react.useEffect)(() => {
    onMenuItems(menuItems.filter(Boolean));
  }, [menuItems, onMenuItems]), (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: inspectors2.map(
    (inspector, inspectorIndex) => inspector.useMenuItem && (0, import_jsx_runtime.jsx)(
      InspectorMenuItem,
      {
        documentId,
        documentType,
        index: inspectorIndex,
        setMenuItem,
        useMenuItem: inspector.useMenuItem
      },
      inspector.name
    )
  ) });
}
function useDocumentTitle() {
  const { connectionState, schemaType, title, value: documentValue } = useDocumentPane(), subscribed = !!documentValue && connectionState !== "connecting", { error, value } = useDocumentPreview({
    enabled: subscribed,
    schemaType,
    value: documentValue
  });
  return connectionState === "connecting" ? { error: void 0, title: void 0 } : title ? { error: void 0, title } : documentValue ? error ? { error: `Error: ${error.message}`, title: void 0 } : { error: void 0, title: value == null ? void 0 : value.title } : { error: void 0, title: `New ${(schemaType == null ? void 0 : schemaType.title) || (schemaType == null ? void 0 : schemaType.name)}` };
}
var IGNORE_OPS = ["patch", "commit"];
var DocumentOperationResults = (0, import_react.memo)(function() {
  const { push: pushToast } = useToast(), { documentId, documentType } = useDocumentPane(), { title } = useDocumentTitle(), event = useDocumentOperationEvent(documentId, documentType), prevEvent = (0, import_react.useRef)(event), paneRouter = usePaneRouter(), { t } = useTranslation2(structureLocaleNamespace), documentTitleBase = title || t("panes.document-operation-results.operation-undefined-title"), documentTitle = documentTitleBase.length > 25 ? `${documentTitleBase.slice(0, 25)}...` : documentTitleBase;
  return (0, import_react.useEffect)(() => {
    if (!event || event === prevEvent.current)
      return;
    let cleanupId;
    return event.type === "error" && pushToast({
      closable: true,
      duration: 3e4,
      // 30s
      status: "error",
      title: t("panes.document-operation-results.operation-error", { context: event.op }),
      description: (0, import_jsx_runtime.jsxs)("details", { children: [
        (0, import_jsx_runtime.jsx)("summary", { children: t("panes.document-operation-results.error.summary.title") }),
        event.error.message
      ] })
    }), event.type === "success" && !IGNORE_OPS.includes(event.op) && pushToast({
      closable: true,
      status: "success",
      title: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          context: event.op,
          i18nKey: "panes.document-operation-results.operation-success",
          t,
          values: {
            title: documentTitle
          },
          components: {
            Strong: "strong"
          }
        }
      )
    }), event.type === "success" && event.op === "delete" && (cleanupId = setTimeout(() => paneRouter.closeCurrentAndAfter(), 0)), prevEvent.current = event, () => clearTimeout(cleanupId);
  }, [event, paneRouter, pushToast, t, documentTitle]), null;
});
var Root$5 = pt(Card)({
  position: "relative",
  zIndex: 1,
  lineHeight: 0
});
function DocumentInspectorHeader(props) {
  const { as: forwardedAs, children, closeButtonLabel, onClose, title, ...restProps } = props, { t } = useTranslation2(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsxs)(Root$5, { ...restProps, as: forwardedAs, children: [
    (0, import_jsx_runtime.jsxs)(Flex, { padding: 2, children: [
      (0, import_jsx_runtime.jsx)(Box, { flex: 1, padding: 3, children: (0, import_jsx_runtime.jsx)(Text, { as: "h1", size: 1, weight: "medium", children: title }) }),
      (0, import_jsx_runtime.jsx)(Box, { flex: "none", padding: 1, children: (0, import_jsx_runtime.jsx)(
        Button2,
        {
          "aria-label": closeButtonLabel,
          icon: CloseIcon,
          mode: "bleed",
          onClick: onClose,
          tooltipProps: { content: t("document-inspector.close-button.tooltip") }
        }
      ) })
    ] }),
    children
  ] });
}
var Root$4 = pt.div`
  position: absolute;
  top: 0;
  left: -4px;
  bottom: 0;
  width: 9px;
  z-index: 201;
  cursor: ew-resize;

  /* Border */
  & > span:nth-child(1) {
    display: block;
    border-left: 1px solid var(--card-border-color);
    position: absolute;
    top: 0;
    left: 4px;
    bottom: 0;
    transition: opacity 200ms;
  }

  /* Hover effect */
  & > span:nth-child(2) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 9px;
    bottom: 0;
    background-color: var(--card-border-color);
    opacity: 0;
    transition: opacity 150ms;
  }

  @media (hover: hover) {
    &:hover > span:nth-child(2) {
      opacity: 0.2;
    }
  }
`;
function Resizer(props) {
  const { onResize, onResizeStart } = props, mouseXRef = (0, import_react.useRef)(0), handleMouseDown = (0, import_react.useCallback)(
    (event) => {
      event.preventDefault(), mouseXRef.current = event.pageX, onResizeStart();
      const handleMouseMove = (e) => {
        e.preventDefault(), onResize(e.pageX - mouseXRef.current);
      }, handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove), window.removeEventListener("mouseup", handleMouseUp);
      };
      window.addEventListener("mousemove", handleMouseMove), window.addEventListener("mouseup", handleMouseUp);
    },
    [onResize, onResizeStart]
  );
  return (0, import_jsx_runtime.jsxs)(Root$4, { onMouseDown: handleMouseDown, children: [
    (0, import_jsx_runtime.jsx)("span", {}),
    (0, import_jsx_runtime.jsx)("span", {})
  ] });
}
var Root$3 = pt(Box)`
  position: relative;
  flex: 1;
  padding-left: 1px;
`;
function Resizable(props) {
  const { as: forwardedAs, children, minWidth, maxWidth, ...restProps } = props, [element, setElement] = (0, import_react.useState)(null), elementWidthRef = (0, import_react.useRef)(), [targetWidth, setTargetWidth] = (0, import_react.useState)(), handleResizeStart = (0, import_react.useCallback)(() => {
    elementWidthRef.current = element == null ? void 0 : element.offsetWidth;
  }, [element]), handleResize = (0, import_react.useCallback)(
    (deltaX) => {
      const w = elementWidthRef.current;
      w && setTargetWidth(Math.min(Math.max(w - deltaX, minWidth), maxWidth));
    },
    [minWidth, maxWidth]
  ), style = (0, import_react.useMemo)(
    () => targetWidth ? { flex: "none", width: targetWidth } : { minWidth, maxWidth },
    [minWidth, maxWidth, targetWidth]
  );
  return (0, import_jsx_runtime.jsxs)(Root$3, { as: forwardedAs, ...restProps, ref: setElement, style, children: [
    children,
    (0, import_jsx_runtime.jsx)(Resizer, { onResize: handleResize, onResizeStart: handleResizeStart })
  ] });
}
function DocumentInspectorPanel(props) {
  const { documentId, documentType, flex } = props, { collapsed } = usePane(), { closeInspector, inspector } = useDocumentPane(), { features } = useStructureTool(), handleClose = (0, import_react.useCallback)(() => {
    inspector && closeInspector(inspector.name);
  }, [closeInspector, inspector]);
  if (collapsed || !inspector)
    return null;
  const element = (0, import_react.createElement)(inspector.component, {
    onClose: handleClose,
    documentId,
    documentType
  });
  return features.resizablePanes ? (0, import_jsx_runtime.jsx)(
    Resizable,
    {
      as: "aside",
      "data-ui": "DocumentInspectorPanel",
      flex,
      maxWidth: DOCUMENT_INSPECTOR_MAX_WIDTH,
      minWidth: DOCUMENT_INSPECTOR_MIN_WIDTH,
      children: element
    }
  ) : (0, import_jsx_runtime.jsx)(Box, { as: "aside", "data-ui": "DocumentInspectorPanel", flex, children: element });
}
var STRUCTURE_TOOL_NAMESPACE = "studio.structure-tool";
function useStructureToolSetting(namespace, key, defaultValue) {
  const keyValueStore = useKeyValueStore(), [value, setValue] = (0, import_react.useState)(defaultValue), keyValueStoreKey = [STRUCTURE_TOOL_NAMESPACE, namespace, key].filter(Boolean).join("."), settings = (0, import_react.useMemo)(() => keyValueStore.getKey(keyValueStoreKey), [keyValueStore, keyValueStoreKey]);
  (0, import_react.useEffect)(() => {
    const sub = settings.pipe(
      startWith(defaultValue),
      map((fetchedValue) => fetchedValue === null ? defaultValue : fetchedValue)
    ).subscribe({
      next: setValue
    });
    return () => sub == null ? void 0 : sub.unsubscribe();
  }, [defaultValue, keyValueStoreKey, settings]);
  const set = (0, import_react.useCallback)(
    (newValue) => {
      newValue !== value && (setValue(newValue), keyValueStore.setKey(keyValueStoreKey, newValue));
    },
    [keyValueStore, keyValueStoreKey, value]
  );
  return (0, import_react.useMemo)(() => [value, set], [set, value]);
}
var VIEW_MODE_PARSED = { id: "parsed", title: "document-inspector.view-mode.parsed" };
var VIEW_MODE_RAW = { id: "raw", title: "document-inspector.view-mode.raw-json" };
var VIEW_MODES = [VIEW_MODE_PARSED, VIEW_MODE_RAW];
var lru = new import_quick_lru.default({ maxSize: 1e3 });
function isExpanded(keyPath, value) {
  const cached = lru.get(keyPath);
  return cached === void 0 ? (lru.set(keyPath, Array.isArray(value) || isRecord$4(value)), isExpanded(keyPath, value)) : cached;
}
function toggleExpanded(event) {
  const { path } = event, current = lru.get(path);
  current !== void 0 && lru.set(path, !current);
}
function selectElement(element) {
  const sel = window.getSelection();
  if (sel) {
    const range = document.createRange();
    sel.removeAllRanges(), range.selectNodeContents(element), sel.addRange(range);
  }
}
function select(event) {
  selectElement(event.currentTarget);
}
function maybeSelectAll(event) {
  event.keyCode === 65 && (event.metaKey || event.ctrlKey) && (event.preventDefault(), selectElement(event.currentTarget));
}
function isDocumentLike(value) {
  return isRecord$4(value) && isString(value._id) && isString(value._type);
}
var JSONInspectorWrapper = pt.div(({ theme }) => {
  const { color, fonts, space } = theme.sanity;
  return ct`
    & .json-inspector,
    & .json-inspector .json-inspector__selection {
      font-family: ${fonts.code.family};
      font-size: ${fonts.code.sizes[1].fontSize}px;
      line-height: ${fonts.code.sizes[1].lineHeight}px;
      color: var(--card-code-fg-color);
    }

    & .json-inspector .json-inspector__leaf {
      padding-left: ${rem(space[4])};
    }

    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {
      padding-top: ${rem(space[3])};
      padding-left: 0;
    }

    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {
      display: none;
    }

    & .json-inspector .json-inspector__line {
      display: block;
      position: relative;
      cursor: default;
    }

    & .json-inspector .json-inspector__line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -200px;
      right: -50px;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }

    & .json-inspector .json-inspector__line:hover::after {
      background: var(--card-code-bg-color);
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {
      cursor: pointer;
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {
      content: '▸ ';
      margin-left: calc(0 - ${rem(space[4])} + 3px);
      font-size: ${fonts.code.sizes[1].fontSize}px;
      line-height: ${fonts.code.sizes[1].lineHeight}px;
    }

    &
      .json-inspector
      .json-inspector__leaf_expanded.json-inspector__leaf_composite
      > .json-inspector__line::before {
      content: '▾ ';
      font-size: ${fonts.code.sizes[1].fontSize}px;
      line-height: ${fonts.code.sizes[1].lineHeight}px;
    }

    & .json-inspector .json-inspector__radio,
    & .json-inspector .json-inspector__flatpath {
      display: none;
    }

    & .json-inspector .json-inspector__value {
      margin-left: ${rem(space[4] / 2)};
    }

    &
      .json-inspector
      > .json-inspector__leaf_root
      > .json-inspector__line
      > .json-inspector__key
      + .json-inspector__value {
      margin: 0;
    }

    & .json-inspector .json-inspector__key {
      color: ${color.syntax.property};
    }

    & .json-inspector .json-inspector__value_helper,
    & .json-inspector .json-inspector__value_null {
      color: ${color.syntax.constant};
    }

    & .json-inspector .json-inspector__not-found {
      padding-top: ${rem(space[3])};
    }

    & .json-inspector .json-inspector__value_string {
      color: ${color.syntax.string};
    }

    & .json-inspector .json-inspector__value_boolean {
      color: ${color.syntax.boolean};
    }

    & .json-inspector .json-inspector__value_number {
      color: ${color.syntax.number};
    }

    & .json-inspector .json-inspector__show-original {
      display: inline-block;
      padding: 0 6px;
      cursor: pointer;
    }

    & .json-inspector .json-inspector__show-original:hover {
      color: inherit;
    }

    & .json-inspector .json-inspector__show-original::before {
      content: '↔';
    }

    & .json-inspector .json-inspector__show-original:hover::after {
      content: ' expand';
    }
  `;
});
function Search(props) {
  const { onChange, query } = props, handleChange = (0, import_react.useCallback)(
    (event) => onChange(event.target.value),
    [onChange]
  ), { t } = useTranslation2(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsx)(
    TextInput,
    {
      icon: SearchIcon,
      onChange: handleChange,
      placeholder: t("document-inspector.search.placeholder"),
      radius: 2,
      value: query || ""
    }
  );
}
function InspectDialog(props) {
  const { value } = props, { onInspectClose, paneKey } = useDocumentPane(), dialogIdPrefix = `${paneKey}_inspect_`, [viewModeId, onViewModeChange] = useStructureToolSetting(
    "inspect-view-mode",
    null,
    "parsed"
  ), viewMode = VIEW_MODES.find((mode) => mode.id === viewModeId), setParsedViewMode = (0, import_react.useCallback)(() => {
    onViewModeChange(VIEW_MODE_PARSED.id);
  }, [onViewModeChange]), setRawViewMode = (0, import_react.useCallback)(() => {
    onViewModeChange(VIEW_MODE_RAW.id);
  }, [onViewModeChange]), { t } = useTranslation2(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsx)(
    Dialog2,
    {
      bodyHeight: "fill",
      id: `${dialogIdPrefix}dialog`,
      header: isDocumentLike(value) ? (0, import_jsx_runtime.jsx)(
        Translate,
        {
          t,
          i18nKey: "document-inspector.dialog.title",
          components: {
            DocumentTitle: () => (0, import_jsx_runtime.jsx)("em", { children: (0, import_jsx_runtime.jsx)(DocTitle, { document: value }) })
          }
        }
      ) : (0, import_jsx_runtime.jsx)("em", { children: t("document-inspector.dialog.title-no-value") }),
      onClose: onInspectClose,
      onClickOutside: onInspectClose,
      padding: false,
      width: 2,
      children: (0, import_jsx_runtime.jsxs)(Flex, { direction: "column", height: "fill", children: [
        (0, import_jsx_runtime.jsx)(
          Card,
          {
            padding: 3,
            paddingTop: 0,
            shadow: 1,
            style: { position: "sticky", bottom: 0, zIndex: 3 },
            children: (0, import_jsx_runtime.jsxs)(TabList, { space: 1, children: [
              (0, import_jsx_runtime.jsx)(
                Tab,
                {
                  "aria-controls": `${dialogIdPrefix}tabpanel`,
                  id: `${dialogIdPrefix}tab-${VIEW_MODE_PARSED.id}`,
                  label: t(VIEW_MODE_PARSED.title),
                  onClick: setParsedViewMode,
                  selected: viewMode === VIEW_MODE_PARSED
                }
              ),
              (0, import_jsx_runtime.jsx)(
                Tab,
                {
                  "aria-controls": `${dialogIdPrefix}tabpanel`,
                  id: `${dialogIdPrefix}tab-${VIEW_MODE_RAW.id}`,
                  label: t(VIEW_MODE_RAW.title),
                  onClick: setRawViewMode,
                  selected: viewMode === VIEW_MODE_RAW
                }
              )
            ] })
          }
        ),
        (0, import_jsx_runtime.jsxs)(
          TabPanel,
          {
            "aria-labelledby": `${dialogIdPrefix}tab-${viewModeId}`,
            flex: 1,
            id: `${dialogIdPrefix}tabpanel`,
            overflow: "auto",
            padding: 4,
            style: { outline: "none" },
            children: [
              viewMode === VIEW_MODE_PARSED && (0, import_jsx_runtime.jsx)(JSONInspectorWrapper, { children: (0, import_jsx_runtime.jsx)(
                import_react_json_inspector.default,
                {
                  data: value,
                  isExpanded,
                  onClick: toggleExpanded,
                  search: Search,
                  filterOptions: { ignoreCase: true }
                }
              ) }),
              viewMode === VIEW_MODE_RAW && (0, import_jsx_runtime.jsx)(
                Code,
                {
                  language: "json",
                  tabIndex: 0,
                  onKeyDown: maybeSelectAll,
                  onDoubleClick: select,
                  onFocus: select,
                  size: 1,
                  children: JSON.stringify(value, null, 2)
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function SpacerButton({ size }) {
  return (0, import_jsx_runtime.jsx)(
    Button2,
    {
      "aria-hidden": true,
      disabled: true,
      size,
      style: {
        pointerEvents: "none",
        visibility: "hidden",
        width: 0
      },
      text: "-"
    }
  );
}
function Banner(props) {
  const { action, content, icon: Icon, tone = "transparent", ...rest } = props;
  return (0, import_jsx_runtime.jsx)(Card, { borderBottom: true, paddingX: 4, paddingY: 2, tone, ...rest, children: (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 3, children: [
    Icon && (0, import_jsx_runtime.jsx)(Text, { size: 0, children: (0, import_jsx_runtime.jsx)(Icon, {}) }),
    (0, import_jsx_runtime.jsx)(Flex, { align: "center", flex: 1, gap: 2, paddingY: 3, children: content }),
    (0, import_jsx_runtime.jsx)(SpacerButton, {}),
    action && (0, import_jsx_runtime.jsx)(
      Button2,
      {
        as: action == null ? void 0 : action.as,
        mode: "ghost",
        onClick: action == null ? void 0 : action.onClick,
        text: action.text,
        tone: action.tone || "default"
      }
    )
  ] }) });
}
function DeletedDocumentBanner({ revisionId }) {
  const { documentId, documentType } = useDocumentPane(), { restore } = useDocumentOperation(documentId, documentType), { navigateIntent } = useRouter(), handleRestore = (0, import_react.useCallback)(() => {
    revisionId && (restore.execute(revisionId), navigateIntent("edit", { id: documentId, type: documentType }));
  }, [documentId, documentType, navigateIntent, restore, revisionId]), { t } = useTranslation2(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsx)(
    Banner,
    {
      action: revisionId ? {
        onClick: handleRestore,
        text: t("banners.deleted-document-banner.restore-button.text")
      } : void 0,
      content: (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: t("banners.deleted-document-banner.text") }),
      "data-testid": "deleted-document-banner",
      icon: ReadOnlyIcon
    }
  );
}
function DeprecatedDocumentTypeBanner() {
  const { schemaType } = useDocumentPane(), { t } = useTranslation2(structureLocaleNamespace);
  return isDeprecatedSchemaType(schemaType) ? (0, import_jsx_runtime.jsx)(
    Banner,
    {
      content: (0, import_jsx_runtime.jsxs)(Text, { size: 1, weight: "medium", children: [
        (0, import_jsx_runtime.jsx)(Translate, { t, i18nKey: "banners.deprecated-document-type-banner.text" }),
        " ",
        schemaType.deprecated.reason
      ] }),
      "data-testid": "deprecated-document-type-banner",
      icon: ErrorOutlineIcon
    }
  ) : null;
}
function PermissionCheckBanner({ granted, requiredPermission }) {
  const currentUser = useCurrentUser(), listFormat = useListFormat({ style: "short" }), { t } = useTranslation2(structureLocaleNamespace);
  if (granted)
    return null;
  const roleTitles = ((currentUser == null ? void 0 : currentUser.roles) || []).map((role) => role.title), roles = listFormat.formatToParts(roleTitles).map(
    (part) => part.type === "element" ? (0, import_jsx_runtime.jsx)("code", { children: part.value }, part.value) : part.value
  );
  return (0, import_jsx_runtime.jsx)(
    Banner,
    {
      content: (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          t,
          i18nKey: "banners.permission-check-banner.missing-permission",
          components: { Roles: () => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: roles }) },
          values: { count: roles.length, roles: roleTitles },
          context: requiredPermission
        }
      ) }),
      "data-testid": "permission-check-banner",
      icon: ReadOnlyIcon
    }
  );
}
var ReferenceChangedBanner = (0, import_react.memo)(() => {
  var _a, _b, _c, _d, _e, _f, _g;
  const documentPreviewStore = useDocumentPreviewStore(), { params, groupIndex, routerPanesState, replaceCurrent, BackLink: BackLink2 } = usePaneRouter(), routerReferenceId = (_a = routerPanesState[groupIndex]) == null ? void 0 : _a[0].id, parentGroup = routerPanesState[groupIndex - 1], parentSibling = parentGroup == null ? void 0 : parentGroup[0], parentId = parentSibling == null ? void 0 : parentSibling.id, hasHistoryOpen = !!((_b = parentSibling == null ? void 0 : parentSibling.params) != null && _b.rev), parentRefPath = (0, import_react.useMemo)(() => (params == null ? void 0 : params.parentRefPath) && fromString(params.parentRefPath) || null, [params == null ? void 0 : params.parentRefPath]), { t } = useTranslation2(structureLocaleNamespace), referenceInfo = useMemoObservable(
    () => {
      const parentRefPathSegment = parentRefPath == null ? void 0 : parentRefPath[0];
      if (!parentId || !parentRefPathSegment || !parentRefPath)
        return of({ loading: false });
      const publishedId = getPublishedId(parentId), path = fromString(parentRefPathSegment), keyedSegmentIndex = path.findIndex(
        (p) => typeof p == "object" && "_key" in p
      );
      return concat(
        // emit a loading state instantly
        of({ loading: true }),
        // then emit the values from watching the published ID's path
        documentPreviewStore.unstable_observePathsDocumentPair(
          publishedId,
          keyedSegmentIndex === -1 ? path : path.slice(0, keyedSegmentIndex)
        ).pipe(
          // this debounce time is needed to prevent flashing banners due to
          // the router state updating faster than the content-lake state. we
          // debounce to wait for more emissions because the value pulled
          // initially could be stale.
          debounceTime(750),
          map(
            ({ draft, published }) => {
              var _a2;
              return {
                loading: false,
                result: {
                  availability: {
                    draft: draft.availability,
                    published: published.availability
                  },
                  refValue: (_a2 = get(draft.snapshot || published.snapshot, parentRefPath)) == null ? void 0 : _a2._ref
                }
              };
            }
          )
        )
      );
    },
    [documentPreviewStore, parentId, parentRefPath],
    { loading: true }
  ), handleReloadReference = (0, import_react.useCallback)(() => {
    var _a2;
    referenceInfo.loading || (_a2 = referenceInfo.result) != null && _a2.refValue && replaceCurrent({
      id: referenceInfo.result.refValue,
      params
    });
  }, [referenceInfo.loading, referenceInfo.result, replaceCurrent, params]);
  return (
    // if `parentId` or `parentRefPath` is not present then this banner is n/a
    !parentId || !parentRefPath || // if viewing this pane via history, then hide
    hasHistoryOpen || // if loading, hide
    referenceInfo.loading || // if the parent document is not available (e.g. due to permission denied or
    // not found) we don't want to display a warning here, but instead rely on the
    // parent view to display the appropriate message
    !((_c = referenceInfo.result) != null && _c.availability.draft.available) && !((_d = referenceInfo.result) != null && _d.availability.published.available) || // if the references are the same, then hide the reference changed banner
    ((_e = referenceInfo.result) == null ? void 0 : _e.refValue) === routerReferenceId ? null : (0, import_jsx_runtime.jsx)(
      Banner,
      {
        action: (_f = referenceInfo.result) != null && _f.refValue ? {
          onClick: handleReloadReference,
          icon: SyncIcon,
          text: t("banners.reference-changed-banner.reason-changed.reload-button.text")
        } : {
          as: BackLink2,
          icon: CloseIcon,
          text: t("banners.reference-changed-banner.reason-removed.close-button.text")
        },
        "data-testid": "reference-changed-banner",
        content: (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: (_g = referenceInfo.result) != null && _g.refValue ? t("banners.reference-changed-banner.reason-changed.text") : t("banners.reference-changed-banner.reason-removed.text") }),
        icon: WarningOutlineIcon,
        tone: "caution"
      }
    )
  );
});
ReferenceChangedBanner.displayName = "ReferenceChangedBanner";
var TitleContainer = pt(Stack)`
  ${({ theme }) => ct`
      @supports not (container-type: inline-size) {
        display: none !important;
      }

      container-type: inline-size;

      [data-heading] {
        font-size: ${theme.sanity.fonts.heading.sizes[4].fontSize}px;
        line-height: ${theme.sanity.fonts.heading.sizes[4].lineHeight}px;
        overflow-wrap: break-word;
        text-wrap: pretty;
      }

      @container (max-width: 560px) {
        [data-heading] {
          font-size: ${theme.sanity.fonts.heading.sizes[3].fontSize}px;
          line-height: ${theme.sanity.fonts.heading.sizes[3].lineHeight}px;
        }
      }

      @container (max-width: 420px) {
        [data-heading] {
          font-size: ${theme.sanity.fonts.heading.sizes[2].fontSize}px;
          line-height: ${theme.sanity.fonts.heading.sizes[2].lineHeight}px;
        }
      }
    `}
`;
var FormHeader = ({ documentId, schemaType, title }) => {
  var _a;
  const isSingleton = documentId === schemaType.name, { t } = useTranslation(structureLocaleNamespace);
  return schemaType.__experimental_formPreviewTitle === false ? null : (0, import_jsx_runtime.jsxs)(TitleContainer, { marginBottom: 6, space: 4, children: [
    !isSingleton && (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: (_a = schemaType.title) != null ? _a : schemaType.name }),
    (0, import_jsx_runtime.jsx)(Heading, { as: "h2", "data-heading": true, muted: !title, "data-testid": "document-panel-document-title", children: title != null ? title : t("document-view.form-view.form-title-fallback") })
  ] });
};
function usePrevious(value) {
  const ref = (0, import_react.useRef)();
  return (0, import_react.useEffect)(() => {
    ref.current = value;
  }, [value]), ref.current;
}
var LONG_ENOUGH_BUT_NOT_TOO_LONG = 1e3 * 60 * 60 * 24 * 24;
function useConditionalToast(params) {
  const toast = useToast(), wasEnabled = usePrevious(params.enabled);
  (0, import_react.useEffect)(() => {
    !wasEnabled && params.enabled && toast.push({ ...params, duration: LONG_ENOUGH_BUT_NOT_TOO_LONG }), wasEnabled && !params.enabled && toast.push({
      ...params,
      // Note: @sanity/ui fallbacks to the default duration of 4s in case of falsey values
      duration: 0.01
    });
  }, [params, toast, wasEnabled]);
}
var preventDefault = (ev) => ev.preventDefault();
var FormView = (0, import_react.forwardRef)(function(props, ref) {
  var _a;
  const { hidden, margins } = props, {
    collapsedFieldSets,
    collapsedPaths,
    displayed: value,
    editState,
    documentId,
    documentType,
    fieldActions,
    onChange,
    validation,
    ready,
    formState,
    onFocus,
    connectionState,
    onBlur,
    onSetCollapsedPath,
    onPathOpen,
    onSetCollapsedFieldSet,
    onSetActiveFieldGroup
  } = useDocumentPane(), documentStore = useDocumentStore(), presence = useDocumentPresence(documentId), { title } = useDocumentTitle(), patchChannel = (0, import_react.useMemo)(() => createPatchChannel(), []), isLocked = (_a = editState == null ? void 0 : editState.transactionSyncLock) == null ? void 0 : _a.enabled, { t } = useTranslation2(structureLocaleNamespace);
  useConditionalToast({
    id: `sync-lock-${documentId}`,
    status: "warning",
    enabled: isLocked,
    title: t("document-view.form-view.sync-lock-toast.title"),
    description: t("document-view.form-view.sync-lock-toast.description")
  }), (0, import_react.useEffect)(() => {
    const sub = documentStore.pair.documentEvents(documentId, documentType).pipe(
      tap((event) => {
        event.type === "mutation" && patchChannel.publish(prepareMutationEvent(event)), event.type === "rebase" && patchChannel.publish(prepareRebaseEvent(event));
      })
    ).subscribe();
    return () => {
      sub.unsubscribe();
    };
  }, [documentId, documentStore, documentType, patchChannel]);
  const hasRev = !!(value != null && value._rev);
  (0, import_react.useEffect)(() => {
    hasRev && patchChannel.publish({
      type: "mutation",
      patches: [],
      snapshot: value
    });
  }, [hasRev]);
  const [formRef, setFormRef] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    ready && !(formState != null && formState.focusPath.length) && formRef && focusFirstDescendant(formRef);
  }, [ready]);
  const setRef = (0, import_react.useCallback)(
    (node) => {
      setFormRef(node), typeof ref == "function" ? ref(node) : ref && (ref.current = node);
    },
    [ref]
  );
  return (0, import_jsx_runtime.jsx)(
    Container,
    {
      hidden,
      paddingX: 4,
      paddingTop: 5,
      paddingBottom: 9,
      sizing: "border",
      width: 1,
      children: (0, import_jsx_runtime.jsx)(PresenceOverlay, { margins, children: (0, import_jsx_runtime.jsx)(Box, { as: "form", onSubmit: preventDefault, ref: setRef, children: connectionState === "connecting" ? (0, import_jsx_runtime.jsx)(Delay, { ms: 300, children: (0, import_jsx_runtime.jsxs)(Flex, { align: "center", direction: "column", height: "fill", justify: "center", children: [
        (0, import_jsx_runtime.jsx)(Spinner, { muted: true }),
        (0, import_jsx_runtime.jsx)(Box, { marginTop: 3, children: (0, import_jsx_runtime.jsx)(Text, { align: "center", muted: true, size: 1, children: t("document-view.form-view.loading") }) })
      ] }) }) : formState === null || hidden ? (0, import_jsx_runtime.jsx)(Box, { padding: 2, children: (0, import_jsx_runtime.jsx)(Text, { children: t("document-view.form-view.form-hidden") }) }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        (0, import_jsx_runtime.jsx)(FormHeader, { documentId, schemaType: formState.schemaType, title }),
        (0, import_jsx_runtime.jsx)(
          FormBuilder,
          {
            __internal_fieldActions: fieldActions,
            __internal_patchChannel: patchChannel,
            collapsedFieldSets,
            collapsedPaths,
            focusPath: formState.focusPath,
            changed: formState.changed,
            focused: formState.focused,
            groups: formState.groups,
            id: "root",
            members: formState.members,
            onChange,
            onFieldGroupSelect: onSetActiveFieldGroup,
            onPathBlur: onBlur,
            onPathFocus: onFocus,
            onPathOpen,
            onSetFieldSetCollapsed: onSetCollapsedFieldSet,
            onSetPathCollapsed: onSetCollapsedPath,
            presence,
            readOnly: connectionState === "reconnecting" || formState.readOnly,
            schemaType: formState.schemaType,
            validation,
            value: (
              // note: the form state doesn't have a typed concept of a "document" value
              // but these should be compatible
              formState.value
            )
          }
        )
      ] }) }) })
    }
  );
});
function prepareMutationEvent(event) {
  const patches = event.mutations.map((mut) => mut.patch).filter(Boolean);
  return {
    type: "mutation",
    snapshot: event.document,
    patches: fromMutationPatches(event.origin, patches)
  };
}
function prepareRebaseEvent(event) {
  const remotePatches = event.remoteMutations.map((mut) => mut.patch).filter(Boolean), localPatches = event.localMutations.map((mut) => mut.patch).filter(Boolean);
  return {
    type: "rebase",
    snapshot: event.document,
    patches: fromMutationPatches("remote", remotePatches).concat(
      fromMutationPatches("local", localPatches)
    )
  };
}
var DocumentBox = pt(Box)({
  position: "relative"
});
var Scroller$1 = pt(ScrollContainer)(({ $disabled }) => $disabled ? { height: "100%" } : ct`
    height: 100%;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;
    outline: none;
  `);
var DocumentPanel = function(props) {
  const { footerHeight, headerHeight, isInspectOpen, rootElement, setDocumentPanelPortalElement } = props, {
    activeViewId,
    displayed,
    documentId,
    editState,
    inspector,
    value,
    views: views2,
    ready,
    schemaType,
    permissions,
    isPermissionsLoading,
    isDeleting,
    isDeleted,
    timelineStore
  } = useDocumentPane(), { collapsed: layoutCollapsed } = usePaneLayout(), { collapsed } = usePane(), parentPortal = usePortal(), { features } = useStructureTool(), portalRef = (0, import_react.useRef)(null), [documentScrollElement, setDocumentScrollElement] = (0, import_react.useState)(null), formContainerElement = (0, import_react.useRef)(null), requiredPermission = value._createdAt ? "update" : "create", activeView = (0, import_react.useMemo)(
    () => views2.find((view) => view.id === activeViewId) || views2[0] || { type: "form" },
    [activeViewId, views2]
  ), portalElement = features.splitPanes && portalRef.current || parentPortal.element, margins = (0, import_react.useMemo)(() => layoutCollapsed ? [headerHeight || 0, 0, footerHeight ? footerHeight + 2 : 2, 0] : [0, 0, 2, 0], [layoutCollapsed, footerHeight, headerHeight]), formViewHidden = activeView.type !== "form", activeViewNode = (0, import_react.useMemo)(
    () => activeView.type === "component" && activeView.component && (0, import_react.createElement)(activeView.component, {
      document: {
        draft: (editState == null ? void 0 : editState.draft) || null,
        displayed: displayed || value,
        historical: displayed,
        published: (editState == null ? void 0 : editState.published) || null
      },
      documentId,
      options: activeView.options,
      schemaType
    }),
    [activeView, displayed, documentId, editState == null ? void 0 : editState.draft, editState == null ? void 0 : editState.published, schemaType, value]
  ), lastNonDeletedRevId = useTimelineSelector(
    timelineStore,
    (state2) => state2.lastNonDeletedRevId
  );
  (0, import_react.useEffect)(() => {
    documentScrollElement != null && documentScrollElement.scrollTo && documentScrollElement.scrollTo(0, 0);
  }, [documentId, documentScrollElement]), (0, import_react.useEffect)(() => {
    portalElement && setDocumentPanelPortalElement(portalElement);
  }, [portalElement, setDocumentPanelPortalElement]);
  const inspectDialog = (0, import_react.useMemo)(() => isInspectOpen ? (0, import_jsx_runtime.jsx)(InspectDialog, { value: displayed || value }) : null, [isInspectOpen, displayed, value]), showInspector = !!(!collapsed && inspector);
  return (0, import_jsx_runtime.jsx)(PaneContent, { children: (0, import_jsx_runtime.jsxs)(Flex, { height: "fill", children: [
    (features.resizablePanes || !showInspector) && (0, import_jsx_runtime.jsx)(DocumentBox, { flex: 2, overflow: "hidden", children: (0, import_jsx_runtime.jsx)(
      PortalProvider,
      {
        element: portalElement,
        __unstable_elements: { documentScrollElement },
        children: (0, import_jsx_runtime.jsx)(BoundaryElementProvider, { element: documentScrollElement, children: (0, import_jsx_runtime.jsxs)(
          VirtualizerScrollInstanceProvider,
          {
            scrollElement: documentScrollElement,
            containerElement: formContainerElement,
            children: [
              activeView.type === "form" && !isPermissionsLoading && ready && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                (0, import_jsx_runtime.jsx)(
                  PermissionCheckBanner,
                  {
                    granted: !!(permissions != null && permissions.granted),
                    requiredPermission
                  }
                ),
                !isDeleting && isDeleted && (0, import_jsx_runtime.jsx)(DeletedDocumentBanner, { revisionId: lastNonDeletedRevId }),
                (0, import_jsx_runtime.jsx)(ReferenceChangedBanner, {}),
                (0, import_jsx_runtime.jsx)(DeprecatedDocumentTypeBanner, {})
              ] }),
              (0, import_jsx_runtime.jsxs)(
                Scroller$1,
                {
                  $disabled: layoutCollapsed || false,
                  "data-testid": "document-panel-scroller",
                  ref: setDocumentScrollElement,
                  children: [
                    (0, import_jsx_runtime.jsx)(
                      FormView,
                      {
                        hidden: formViewHidden,
                        margins,
                        ref: formContainerElement
                      },
                      documentId + (ready ? "_ready" : "_pending")
                    ),
                    activeViewNode
                  ]
                }
              ),
              inspectDialog,
              (0, import_jsx_runtime.jsx)("div", { "data-testid": "document-panel-portal", ref: portalRef })
            ]
          }
        ) })
      }
    ) }),
    showInspector && (0, import_jsx_runtime.jsx)(BoundaryElementProvider, { element: rootElement, children: (0, import_jsx_runtime.jsx)(
      DocumentInspectorPanel,
      {
        documentId,
        documentType: schemaType.name,
        flex: 1
      }
    ) })
  ] }) });
};
var POPOVER_FALLBACK_PLACEMENTS = ["left", "bottom"];
var DIALOG_WIDTH_TO_UI_WIDTH = {
  small: 0,
  medium: 1,
  large: 2,
  full: "auto"
};
function ConfirmDialog(props) {
  const { dialog, referenceElement } = props;
  return (0, import_jsx_runtime.jsx)(
    Popover,
    {
      content: (0, import_jsx_runtime.jsx)(ConfirmDialogContent, { dialog }),
      fallbackPlacements: POPOVER_FALLBACK_PLACEMENTS,
      open: true,
      placement: "top",
      portal: true,
      preventOverflow: true,
      referenceElement
    }
  );
}
function ConfirmDialogContent(props) {
  const { dialog } = props, {
    cancelButtonIcon,
    cancelButtonText,
    confirmButtonIcon,
    confirmButtonText,
    // color,
    message,
    onCancel,
    onConfirm,
    tone
  } = dialog, { t } = useTranslation2(structureLocaleNamespace), { isTopLayer } = useLayer(), [element, setElement] = (0, import_react.useState)(null), handleClickOutside = (0, import_react.useCallback)(() => {
    isTopLayer && onCancel();
  }, [isTopLayer, onCancel]), handleGlobalKeyDown = (0, import_react.useCallback)(
    (event) => {
      event.key === "Escape" && isTopLayer && onCancel();
    },
    [isTopLayer, onCancel]
  );
  return useClickOutside(handleClickOutside, [element]), useGlobalKeyDown(handleGlobalKeyDown), (0, import_jsx_runtime.jsxs)(Flex, { direction: "column", ref: setElement, style: { minWidth: 304, maxWidth: 400 }, children: [
    (0, import_jsx_runtime.jsx)(Box, { flex: 1, overflow: "auto", padding: 4, children: (0, import_jsx_runtime.jsx)(Text, { children: message }) }),
    (0, import_jsx_runtime.jsx)(Box, { paddingX: 4, paddingY: 3, style: { borderTop: "1px solid var(--card-border-color)" }, children: (0, import_jsx_runtime.jsxs)(Grid, { columns: 2, gap: 2, children: [
      (0, import_jsx_runtime.jsx)(
        Button,
        {
          icon: cancelButtonIcon,
          onClick: onCancel,
          mode: "ghost",
          text: cancelButtonText || t("confirm-dialog.cancel-button.fallback-text")
        }
      ),
      (0, import_jsx_runtime.jsx)(
        Button,
        {
          icon: confirmButtonIcon,
          onClick: onConfirm,
          text: confirmButtonText || t("confirm-dialog.confirm-button.fallback-text"),
          tone
        }
      )
    ] }) })
  ] });
}
function ModalDialog(props) {
  const { dialog } = props, dialogId = (0, import_react.useId)(), footer = dialog.footer && (0, import_jsx_runtime.jsx)(Box, { paddingX: 4, paddingY: 3, children: dialog.footer });
  return (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "fullscreen", children: (0, import_jsx_runtime.jsx)(
    Dialog,
    {
      animate: true,
      __unstable_hideCloseButton: dialog.showCloseButton === false,
      footer,
      header: dialog.header,
      id: dialogId,
      onClose: dialog.onClose,
      onClickOutside: dialog.onClose,
      width: dialog.width === void 0 ? 1 : DIALOG_WIDTH_TO_UI_WIDTH[dialog.width],
      children: (0, import_jsx_runtime.jsx)(Box, { padding: 4, children: dialog.content })
    }
  ) });
}
function PopoverDialog(props) {
  const { dialog, referenceElement } = props;
  return (0, import_jsx_runtime.jsx)(
    Popover,
    {
      content: (0, import_jsx_runtime.jsx)(PopoverDialogContent, { dialog }),
      fallbackPlacements: POPOVER_FALLBACK_PLACEMENTS,
      open: true,
      placement: "top",
      portal: true,
      preventOverflow: true,
      referenceElement
    }
  );
}
function PopoverDialogContent(props) {
  const { dialog } = props, { content, onClose } = dialog, { isTopLayer } = useLayer(), [element, setElement] = (0, import_react.useState)(null), handleClickOutside = (0, import_react.useCallback)(() => {
    isTopLayer && onClose();
  }, [isTopLayer, onClose]), handleGlobalKeyDown = (0, import_react.useCallback)(
    (event) => {
      event.key === "Escape" && isTopLayer && onClose();
    },
    [isTopLayer, onClose]
  );
  return useClickOutside(handleClickOutside, [element]), useGlobalKeyDown(handleGlobalKeyDown), (0, import_jsx_runtime.jsx)("div", { ref: setElement, children: content });
}
function DocumentActionPortalProvider(props) {
  const { children } = props, { element, elements } = usePortal(), portalElement = (elements == null ? void 0 : elements[DOCUMENT_PANEL_PORTAL_ELEMENT]) || element;
  return (0, import_jsx_runtime.jsx)(PortalProvider, { element: portalElement, children });
}
function ActionStateDialog(props) {
  const { dialog, referenceElement = null } = props, modalId = (0, import_react.useId)();
  if (dialog.type === "confirm")
    return (0, import_jsx_runtime.jsx)(ConfirmDialog, { dialog, referenceElement });
  if (dialog.type === "popover")
    return (0, import_jsx_runtime.jsx)(PopoverDialog, { dialog, referenceElement });
  if (dialog.type === "dialog" || !dialog.type)
    return (0, import_jsx_runtime.jsx)(DocumentActionPortalProvider, { children: (0, import_jsx_runtime.jsx)(ModalDialog, { dialog }) });
  if (dialog.type === "custom")
    return (0, import_jsx_runtime.jsx)(DocumentActionPortalProvider, { children: dialog == null ? void 0 : dialog.component });
  const unknownModal = dialog;
  return console.warn(`Unsupported modal type ${unknownModal.type}`), (0, import_jsx_runtime.jsx)(
    Dialog2,
    {
      id: modalId,
      onClose: unknownModal.onClose,
      onClickOutside: unknownModal.onClose,
      width: 1,
      children: unknownModal.content || // eslint-disable-next-line i18next/no-literal-string
      (0, import_jsx_runtime.jsxs)(Text, { size: 1, children: [
        "Unexpected modal type (",
        (0, import_jsx_runtime.jsx)("code", { children: unknownModal.type }),
        ")"
      ] })
    }
  );
}
function ActionDialogWrapper({
  actionStates,
  children,
  referenceElement
}) {
  const [actionIndex, setActionIndex] = (0, import_react.useState)(-1), currentAction = actionStates[actionIndex], handleAction = (0, import_react.useCallback)((idx) => {
    setActionIndex(idx);
  }, []);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    currentAction && currentAction.dialog && (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "paneFooter", children: (0, import_jsx_runtime.jsx)(ActionStateDialog, { dialog: currentAction.dialog, referenceElement }) }),
    children({ handleAction })
  ] });
}
function ActionMenuButton(props) {
  const { actionStates, disabled } = props, idPrefix = (0, import_react.useId)(), [referenceElement, setReferenceElement] = (0, import_react.useState)(null), popoverProps = (0, import_react.useMemo)(
    () => ({
      placement: "top-end",
      portal: true,
      preventOverflow: true
    }),
    []
  ), { t } = useTranslation2(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsx)(ActionDialogWrapper, { actionStates, referenceElement, children: ({ handleAction }) => (0, import_jsx_runtime.jsx)(
    MenuButton,
    {
      id: `${idPrefix}-action-menu`,
      button: (0, import_jsx_runtime.jsx)(
        ContextMenuButton,
        {
          "aria-label": t("buttons.action-menu-button.aria-label"),
          disabled,
          "data-testid": "action-menu-button",
          size: "large",
          tooltipProps: { content: t("buttons.action-menu-button.tooltip") }
        }
      ),
      menu: (0, import_jsx_runtime.jsx)(Menu, { padding: 1, children: actionStates.map((actionState, idx) => (0, import_jsx_runtime.jsx)(
        ActionMenuListItem,
        {
          actionState,
          disabled,
          index: idx,
          onAction: handleAction
        },
        idx
      )) }),
      popover: popoverProps,
      ref: setReferenceElement
    }
  ) });
}
function ActionMenuListItem(props) {
  const { actionState, disabled, index, onAction } = props, { onHandle } = actionState, handleClick = (0, import_react.useCallback)(() => {
    onAction(index), onHandle && onHandle();
  }, [index, onAction, onHandle]), hotkeys = (0, import_react.useMemo)(() => actionState.shortcut ? String(actionState.shortcut).split("+").map((s) => s.slice(0, 1).toUpperCase() + s.slice(1)) : void 0, [actionState.shortcut]);
  return (0, import_jsx_runtime.jsx)(
    MenuItem,
    {
      "data-testid": `action-${actionState.label.replace(" ", "")}`,
      disabled: disabled || !!actionState.disabled,
      hotkeys,
      icon: actionState.icon,
      onClick: handleClick,
      text: actionState.label,
      tone: actionState.tone,
      ...actionState.disabled && { tooltipProps: { content: actionState.title } }
    }
  );
}
var TIMELINE_ICON_COMPONENTS = {
  create: AddCircleIcon,
  delete: TrashIcon,
  discardDraft: CloseIcon,
  initial: AddCircleIcon,
  editDraft: EditIcon,
  editLive: EditIcon,
  publish: PublishIcon,
  unpublish: UnpublishIcon
};
function getTimelineEventIconComponent(type) {
  return TIMELINE_ICON_COMPONENTS[type];
}
var StackWrapper = pt(Stack)`
  max-width: 200px;
`;
var ListWrapper = pt(Flex)`
  max-height: calc(100vh - 198px);
  min-width: 244px;
`;
var Root$2 = pt(Box)(({ $visible }) => ct`
    opacity: 0;
    pointer-events: none;

    ${$visible && ct`
      opacity: 1;
      pointer-events: auto;
    `}
  `);
var TIMELINE_ITEM_I18N_KEY_MAPPING = {
  initial: "timeline.operation.created-initial",
  create: "timeline.operation.created",
  publish: "timeline.operation.published",
  editLive: "timeline.operation.edited-live",
  editDraft: "timeline.operation.edited-draft",
  unpublish: "timeline.operation.unpublished",
  discardDraft: "timeline.operation.draft-discarded",
  delete: "timeline.operation.deleted"
};
var IconWrapper = pt(Flex)(({ theme }) => {
  var _a;
  const borderColor = (_a = theme.sanity.color.base.skeleton) == null ? void 0 : _a.from;
  return ct`
    --timeline-hairline-width: 1px;
    position: relative;
    z-index: 2;
    margin: 0;
    padding: 0;

    &::before {
      position: absolute;
      content: '';
      height: 100%;
      width: var(--timeline-hairline-width);
      background: ${borderColor};
      top: 0;
      left: calc((100% - var(--timeline-hairline-width)) / 2);
      z-index: 1;
    }
  `;
});
var Root$1 = pt(Button)(({ $selected, $disabled }) => ct`
    position: relative;
    width: 100%;

    /* Line styling */
    &[data-first] ${IconWrapper}::before {
      height: 50%;
      top: unset;
      bottom: 0;
    }

    &[data-last] ${IconWrapper}::before {
      height: 50%;
    }

    ${$selected && ct`
      ${IconWrapper}::before {
        background: transparent;
      }
    `}

    ${$disabled && ct`
      cursor: not-allowed;
    `}
  `);
var IconBox = pt(Box)`
  background: var(--card-bg-color);
  border-radius: 50px;
  position: relative;
  z-index: 2;
`;
var TimestampBox = pt(Box)`
  min-width: 1rem;
  margin-left: ${({ theme }) => `-${rem(theme.sanity.space[1])}`};
`;
function UserAvatarStack({ maxLength, userIds }) {
  return (0, import_jsx_runtime.jsx)(AvatarStack, { maxLength, children: userIds.map((userId) => (0, import_jsx_runtime.jsx)(UserAvatar, { user: userId, withTooltip: true }, userId)) });
}
var TIMELINE_ITEM_EVENT_TONE = {
  initial: "primary",
  create: "primary",
  publish: "positive",
  editLive: "caution",
  editDraft: "caution",
  unpublish: "critical",
  discardDraft: "critical",
  delete: "critical",
  withinSelection: "primary"
};
function TimelineItem({
  chunk,
  isFirst,
  isLast,
  isLatest,
  isSelected,
  onSelect,
  timestamp,
  type
}) {
  const { t } = useTranslation2("studio"), iconComponent = getTimelineEventIconComponent(type), authorUserIds = Array.from(chunk.authors), isSelectable = type !== "delete", dateFormat = useDateTimeFormat({ dateStyle: "medium", timeStyle: "short" }), formattedTimestamp = (0, import_react.useMemo)(() => {
    const parsedDate = new Date(timestamp);
    return dateFormat.format(parsedDate);
  }, [timestamp, dateFormat]), handleClick = (0, import_react.useCallback)(
    (evt) => {
      evt.preventDefault(), evt.stopPropagation(), isSelectable && onSelect(chunk);
    },
    [onSelect, chunk, isSelectable]
  );
  return (0, import_jsx_runtime.jsx)(
    Root$1,
    {
      $selected: isSelected,
      $disabled: !isSelectable,
      "data-chunk-id": chunk.id,
      "data-first": isFirst ? true : void 0,
      "data-last": isLast ? true : void 0,
      "data-ui": "timelineItem",
      mode: isSelected ? "default" : "bleed",
      onClick: handleClick,
      padding: 0,
      radius: 2,
      tone: isSelected ? "primary" : TIMELINE_ITEM_EVENT_TONE[chunk.type],
      children: (0, import_jsx_runtime.jsx)(Box, { paddingX: 2, children: (0, import_jsx_runtime.jsxs)(Flex, { align: "stretch", children: [
        (0, import_jsx_runtime.jsx)(IconWrapper, { align: "center", children: (0, import_jsx_runtime.jsx)(IconBox, { padding: 2, children: (0, import_jsx_runtime.jsx)(Text, { size: 2, children: iconComponent && (0, import_react.createElement)(iconComponent) }) }) }),
        (0, import_jsx_runtime.jsxs)(Stack, { space: 2, margin: 2, children: [
          isLatest && (0, import_jsx_runtime.jsx)(Flex, { children: (0, import_jsx_runtime.jsx)(
            Card,
            {
              padding: 1,
              radius: 2,
              shadow: 1,
              tone: isSelected ? "primary" : TIMELINE_ITEM_EVENT_TONE[chunk.type],
              children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 0, weight: "medium", children: t("timeline.latest") })
            }
          ) }),
          (0, import_jsx_runtime.jsx)(Box, { children: (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: t(TIMELINE_ITEM_I18N_KEY_MAPPING[type]) || (0, import_jsx_runtime.jsx)("code", { children: type }) }) }),
          (0, import_jsx_runtime.jsx)(TimestampBox, { paddingX: 1, children: (0, import_jsx_runtime.jsx)(Text, { as: "time", size: 0, muted: true, dateTime: timestamp, children: formattedTimestamp }) })
        ] }),
        (0, import_jsx_runtime.jsx)(Flex, { flex: 1, justify: "flex-end", align: "center", children: (0, import_jsx_runtime.jsx)(UserAvatarStack, { maxLength: 3, userIds: authorUserIds }) })
      ] }) })
    }
  );
}
var Timeline = ({
  chunks,
  disabledBeforeFirstChunk,
  hasMoreChunks,
  lastChunk,
  onLoadMore,
  onSelect,
  firstChunk
}) => {
  const [mounted, setMounted] = (0, import_react.useState)(false), { t } = useTranslation2("studio"), filteredChunks = (0, import_react.useMemo)(() => chunks.filter((c) => disabledBeforeFirstChunk && firstChunk ? c.index < firstChunk.index : true), [chunks, disabledBeforeFirstChunk, firstChunk]), selectedIndex = (0, import_react.useMemo)(
    () => lastChunk != null && lastChunk.id ? filteredChunks.findIndex((c) => c.id === lastChunk.id) : -1,
    [lastChunk == null ? void 0 : lastChunk.id, filteredChunks]
  ), renderItem = (0, import_react.useCallback)(
    (chunk, { activeIndex }) => {
      const isFirst = activeIndex === 0, isLast = filteredChunks && activeIndex === filteredChunks.length - 1 || false;
      return (0, import_jsx_runtime.jsxs)(Box, { paddingBottom: isLast ? 1 : 0, paddingTop: isFirst ? 1 : 0, paddingX: 1, children: [
        (0, import_jsx_runtime.jsx)(
          TimelineItem,
          {
            chunk,
            isFirst,
            isLast,
            isLatest: activeIndex === 0 && !disabledBeforeFirstChunk,
            isSelected: activeIndex === selectedIndex,
            onSelect,
            timestamp: chunk.endTimestamp,
            type: chunk.type
          }
        ),
        activeIndex === filteredChunks.length - 1 && hasMoreChunks && (0, import_jsx_runtime.jsx)(LoadingBlock, {})
      ] });
    },
    [disabledBeforeFirstChunk, filteredChunks, hasMoreChunks, onSelect, selectedIndex]
  );
  return (0, import_react.useEffect)(() => setMounted(true), []), (0, import_jsx_runtime.jsxs)(
    Root$2,
    {
      $visible: !selectedIndex || mounted,
      "data-ui": "timeline",
      children: [
        filteredChunks.length === 0 && (0, import_jsx_runtime.jsxs)(StackWrapper, { padding: 3, space: 3, children: [
          (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: t("timeline.error.no-document-history-title") }),
          (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: t("timeline.error.no-document-history-description") })
        ] }),
        filteredChunks.length > 0 && (0, import_jsx_runtime.jsx)(ListWrapper, { direction: "column", children: (0, import_jsx_runtime.jsx)(
          CommandList,
          {
            activeItemDataAttr: "data-hovered",
            ariaLabel: t("timeline.list.aria-label"),
            autoFocus: "list",
            initialIndex: selectedIndex,
            initialScrollAlign: "center",
            itemHeight: 40,
            items: filteredChunks,
            onEndReached: onLoadMore,
            onEndReachedIndexOffset: 20,
            overscan: 5,
            renderItem,
            wrapAround: false
          }
        ) })
      ]
    }
  );
};
Timeline.displayName = "Timeline";
function TimelineError() {
  const { t } = useTranslation2("studio");
  return (0, import_jsx_runtime.jsxs)(Flex, { align: "flex-start", gap: 3, padding: 4, children: [
    (0, import_jsx_runtime.jsx)(TextWithTone, { tone: "critical", children: (0, import_jsx_runtime.jsx)(ErrorOutlineIcon, {}) }),
    (0, import_jsx_runtime.jsxs)(Stack, { space: 4, children: [
      (0, import_jsx_runtime.jsx)(TextWithTone, { size: 1, tone: "critical", weight: "medium", children: t("timeline.error.load-document-changes-title") }),
      (0, import_jsx_runtime.jsx)(TextWithTone, { size: 1, tone: "critical", children: t("timeline.error.load-document-changes-description") })
    ] })
  ] });
}
var Root = pt(Popover2)`
  overflow: hidden;
  overflow: clip;
`;
function TimelineMenu({ chunk, mode, placement }) {
  const { setTimelineRange, setTimelineMode, timelineError, ready, timelineStore } = useDocumentPane(), [open, setOpen] = (0, import_react.useState)(false), [button, setButton] = (0, import_react.useState)(null), [popover, setPopover] = (0, import_react.useState)(null), toast = useToast(), chunks = useTimelineSelector(timelineStore, (state2) => state2.chunks), loading = useTimelineSelector(timelineStore, (state2) => state2.isLoading), hasMoreChunks = useTimelineSelector(timelineStore, (state2) => state2.hasMoreChunks), realRevChunk = useTimelineSelector(timelineStore, (state2) => state2.realRevChunk), sinceTime = useTimelineSelector(timelineStore, (state2) => state2.sinceTime), { t } = useTranslation2("studio"), handleOpen = (0, import_react.useCallback)(() => {
    setTimelineMode(mode), setOpen(true);
  }, [mode, setTimelineMode]), handleClose = (0, import_react.useCallback)(() => {
    setTimelineMode("closed"), setOpen(false);
  }, [setTimelineMode]), handleClickOutside = (0, import_react.useCallback)(() => {
    open && handleClose();
  }, [handleClose, open]), handleGlobalKeyDown = (0, import_react.useCallback)(
    (event) => {
      open && (event.key === "Escape" || event.key === "Tab") && (handleClose(), button == null || button.focus());
    },
    [button, handleClose, open]
  );
  useClickOutside(handleClickOutside, [button, popover]), useGlobalKeyDown(handleGlobalKeyDown);
  const selectRev = (0, import_react.useCallback)(
    (revChunk) => {
      try {
        const [sinceId, revId] = timelineStore.findRangeForRev(revChunk);
        setTimelineMode("closed"), setTimelineRange(sinceId, revId);
      } catch (err) {
        toast.push({
          closable: true,
          description: err.message,
          status: "error",
          title: t("timeline.error.unable-to-load-revision")
        });
      }
    },
    [setTimelineMode, setTimelineRange, t, timelineStore, toast]
  ), selectSince = (0, import_react.useCallback)(
    (sinceChunk) => {
      try {
        const [sinceId, revId] = timelineStore.findRangeForSince(sinceChunk);
        setTimelineMode("closed"), setTimelineRange(sinceId, revId);
      } catch (err) {
        toast.push({
          closable: true,
          description: err.message,
          status: "error",
          title: t("timeline.error.unable-to-load-revision")
        });
      }
    },
    [setTimelineMode, setTimelineRange, t, timelineStore, toast]
  ), handleLoadMore = (0, import_react.useCallback)(() => {
    loading || timelineStore.loadMore();
  }, [loading, timelineStore]), content = timelineError ? (0, import_jsx_runtime.jsx)(TimelineError, {}) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    mode === "rev" && (0, import_jsx_runtime.jsx)(
      Timeline,
      {
        chunks,
        firstChunk: realRevChunk,
        hasMoreChunks,
        lastChunk: realRevChunk,
        onLoadMore: handleLoadMore,
        onSelect: selectRev
      }
    ),
    mode === "since" && (0, import_jsx_runtime.jsx)(
      Timeline,
      {
        chunks,
        disabledBeforeFirstChunk: true,
        firstChunk: realRevChunk,
        hasMoreChunks,
        lastChunk: sinceTime,
        onLoadMore: handleLoadMore,
        onSelect: selectSince
      }
    )
  ] }), formatParams = {
    timestamp: { dateStyle: "medium", timeStyle: "short" }
  }, revLabel = chunk ? t(TIMELINE_ITEM_I18N_KEY_MAPPING[chunk.type], {
    context: "timestamp",
    timestamp: new Date(chunk == null ? void 0 : chunk.endTimestamp),
    formatParams
  }) : t("timeline.latest-version"), sinceLabel = chunk ? t("timeline.since", {
    timestamp: new Date(chunk == null ? void 0 : chunk.endTimestamp),
    formatParams
  }) : t("timeline.since-version-missing");
  return (0, import_jsx_runtime.jsx)(
    Root,
    {
      constrainSize: true,
      content: open && content,
      "data-ui": "versionMenu",
      open,
      placement,
      portal: true,
      ref: setPopover,
      children: (0, import_jsx_runtime.jsx)(
        Button2,
        {
          disabled: !ready,
          mode: "bleed",
          iconRight: ChevronDownIcon,
          onClick: open ? handleClose : handleOpen,
          ref: setButton,
          selected: open,
          style: { maxWidth: "100%" },
          text: ready ? mode === "rev" ? revLabel : sinceLabel : t("timeline.loading-history")
        }
      )
    }
  );
}
function DocumentHeaderTabs() {
  const { activeViewId, paneKey, views: views2 } = useDocumentPane(), tabPanelId = `${paneKey}tabpanel`;
  return (0, import_jsx_runtime.jsx)(TabList, { space: 1, children: views2.map((view, index) => {
    var _a;
    return (0, import_jsx_runtime.jsx)(
      DocumentHeaderTab,
      {
        icon: view.icon,
        id: `${paneKey}tab-${view.id}`,
        isActive: activeViewId === view.id,
        label: view.title,
        tabPanelId,
        viewId: index === 0 ? null : (_a = view.id) != null ? _a : null
      },
      view.id
    );
  }) });
}
function DocumentHeaderTab(props) {
  const { icon, id, isActive, label, tabPanelId, viewId, ...rest } = props, { ready } = useDocumentPane(), { setView } = usePaneRouter(), handleClick = (0, import_react.useCallback)(() => setView(viewId), [setView, viewId]);
  return (0, import_jsx_runtime.jsx)(
    Tab,
    {
      ...rest,
      "aria-controls": tabPanelId,
      disabled: !ready,
      icon,
      id,
      label,
      onClick: handleClick,
      selected: isActive
    }
  );
}
function DocumentHeaderTitle() {
  const { connectionState, schemaType, title, value: documentValue } = useDocumentPane(), subscribed = !!documentValue && connectionState !== "connecting", { error, value } = useDocumentPreview({
    enabled: subscribed,
    schemaType,
    value: documentValue
  }), { t } = useTranslation2(structureLocaleNamespace);
  return connectionState === "connecting" ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}) : title ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: title }) : documentValue ? error ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("panes.document-header-title.error.text", { error: error.message }) }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (value == null ? void 0 : value.title) || (0, import_jsx_runtime.jsx)("span", { style: { color: "var(--card-muted-fg-color)" }, children: t("panes.document-header-title.untitled.text") }) }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("panes.document-header-title.new.text", {
    schemaType: (schemaType == null ? void 0 : schemaType.title) || (schemaType == null ? void 0 : schemaType.name)
  }) });
}
var DocumentPanelHeader = (0, import_react.memo)(
  (0, import_react.forwardRef)(function(_props, ref) {
    const { menuItems } = _props, {
      actions,
      editState,
      onMenuAction,
      onPaneClose,
      onPaneSplit,
      menuItemGroups,
      schemaType,
      timelineStore,
      connectionState,
      views: views2,
      unstable_languageFilter
    } = useDocumentPane(), { features } = useStructureTool(), { index, BackLink: BackLink2, hasGroupSiblings } = usePaneRouter(), { actions: fieldActions } = useFieldActions(), [referenceElement, setReferenceElement] = (0, import_react.useState)(null), menuNodes = (0, import_react.useMemo)(
      () => resolveMenuNodes({ actionHandler: onMenuAction, fieldActions, menuItems, menuItemGroups }),
      [onMenuAction, fieldActions, menuItemGroups, menuItems]
    ), menuButtonNodes = (0, import_react.useMemo)(() => menuNodes.filter(isMenuNodeButton), [menuNodes]), contextMenuNodes = (0, import_react.useMemo)(() => menuNodes.filter(isNotMenuNodeButton), [menuNodes]), showTabs = views2.length > 1, rev = useTimelineSelector(timelineStore, (state2) => state2.revTime), { collapsed, isLast } = usePane(), tabIndex = isLast && !collapsed ? -1 : 0, showSplitPaneButton = features.splitViews && onPaneSplit && views2.length > 1, showSplitPaneCloseButton = showSplitPaneButton && hasGroupSiblings, showBackButton = features.backButton && index > 0, showPaneGroupCloseButton = !showSplitPaneCloseButton && !showBackButton && !!BackLink2, { t } = useTranslation2(structureLocaleNamespace);
    return (0, import_jsx_runtime.jsx)(TooltipDelayGroupProvider, { children: (0, import_jsx_runtime.jsx)(
      PaneHeader$1,
      {
        border: true,
        ref,
        loading: connectionState === "connecting",
        title: (0, import_jsx_runtime.jsx)(DocumentHeaderTitle, {}),
        tabs: showTabs && (0, import_jsx_runtime.jsx)(DocumentHeaderTabs, {}),
        tabIndex,
        backButton: showBackButton && (0, import_jsx_runtime.jsx)(
          Button2,
          {
            as: BackLink2,
            "data-as": "a",
            icon: ArrowLeftIcon,
            mode: "bleed",
            tooltipProps: { content: t("pane-header.back-button.text") }
          }
        ),
        subActions: (0, import_jsx_runtime.jsx)(TimelineMenu, { chunk: rev, mode: "rev", placement: "bottom-end" }),
        actions: (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 1, children: [
          unstable_languageFilter.length > 0 && (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: unstable_languageFilter.map((languageFilterComponent, idx) => (0, import_react.createElement)(languageFilterComponent, {
            // eslint-disable-next-line react/no-array-index-key
            key: `language-filter-${idx}`,
            schemaType
          })) }),
          menuButtonNodes.map((item) => (0, import_jsx_runtime.jsx)(PaneHeaderActionButton, { node: item }, item.key)),
          editState && (0, import_jsx_runtime.jsx)(
            RenderActionCollectionState,
            {
              actions: actions || [],
              actionProps: editState,
              group: "paneActions",
              children: ({ states }) => (0, import_jsx_runtime.jsx)(ActionDialogWrapper, { actionStates: states, referenceElement, children: ({ handleAction }) => (0, import_jsx_runtime.jsx)("div", { ref: setReferenceElement, children: (0, import_jsx_runtime.jsx)(
                PaneContextMenuButton,
                {
                  nodes: contextMenuNodes,
                  actionsNodes: states.length > 0 ? states.map((actionState, actionIndex) => (0, import_jsx_runtime.jsx)(
                    ActionMenuListItem,
                    {
                      actionState,
                      disabled: !!actionState.disabled,
                      index: actionIndex,
                      onAction: handleAction
                    },
                    actionState.label
                  )) : void 0
                },
                "context-menu"
              ) }) })
            }
          ),
          showSplitPaneButton && (0, import_jsx_runtime.jsx)(
            Button2,
            {
              "aria-label": t("buttons.split-pane-button.aria-label"),
              icon: SplitVerticalIcon,
              mode: "bleed",
              onClick: onPaneSplit,
              tooltipProps: { content: t("buttons.split-pane-button.tooltip") }
            },
            "split-pane-button"
          ),
          showSplitPaneCloseButton && (0, import_jsx_runtime.jsx)(
            Button2,
            {
              icon: CloseIcon,
              mode: "bleed",
              onClick: onPaneClose,
              tooltipProps: { content: t("buttons.split-pane-close-button.title") }
            },
            "close-view-button"
          ),
          showPaneGroupCloseButton && (0, import_jsx_runtime.jsx)(
            Button2,
            {
              icon: CloseIcon,
              mode: "bleed",
              tooltipProps: { content: t("buttons.split-pane-close-group-button.title") },
              as: BackLink2
            },
            "close-view-button"
          )
        ] })
      }
    ) });
  })
);
var BADGE_TONES = {
  primary: "primary",
  success: "positive",
  warning: "caution",
  danger: "critical"
};
function DocumentBadgesInner({ states }) {
  return states.length === 0 ? null : (0, import_jsx_runtime.jsx)(Inline, { space: 1, children: states.map((badge, index) => (0, import_jsx_runtime.jsx)(
    Tooltip,
    {
      content: badge.title,
      disabled: !badge.title,
      placement: "top",
      portal: true,
      children: (0, import_jsx_runtime.jsx)(
        Badge,
        {
          fontSize: 1,
          mode: "outline",
          paddingX: 2,
          paddingY: 1,
          radius: 4,
          tone: badge.color ? BADGE_TONES[badge.color] : void 0,
          style: { whiteSpace: "nowrap" },
          children: badge.label
        }
      )
    },
    String(index)
  )) });
}
function DocumentBadges() {
  const { badges, editState } = useDocumentPane();
  return !editState || !badges ? null : (0, import_jsx_runtime.jsx)(RenderBadgeCollectionState, { badges, badgeProps: editState, children: ({ states }) => (0, import_jsx_runtime.jsx)(DocumentBadgesInner, { states }) });
}
var DISABLED_REASON_TITLE_KEY$1 = {
  NOTHING_TO_DELETE: "action.delete.disabled.nothing-to-delete",
  NOT_READY: "action.delete.disabled.not-ready"
};
var DeleteAction = ({ id, type, draft, onComplete }) => {
  const { setIsDeleting: paneSetIsDeleting } = useDocumentPane(), { delete: deleteOp } = useDocumentOperation(id, type), [isDeleting, setIsDeleting] = (0, import_react.useState)(false), [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false), { t } = useTranslation2(structureLocaleNamespace), handleCancel = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(false), onComplete();
  }, [onComplete]), handleConfirm = (0, import_react.useCallback)(() => {
    setIsDeleting(true), setConfirmDialogOpen(false), paneSetIsDeleting(true), deleteOp.execute(), onComplete();
  }, [deleteOp, onComplete, paneSetIsDeleting]), handle = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(true);
  }, []), [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "delete"
  }), currentUser = useCurrentUser();
  return !isPermissionsLoading && !(permissions != null && permissions.granted) ? {
    tone: "critical",
    icon: TrashIcon,
    disabled: true,
    label: t("action.delete.label"),
    title: (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, { context: "delete-document", currentUser })
  } : {
    tone: "critical",
    icon: TrashIcon,
    disabled: isDeleting || !!deleteOp.disabled || isPermissionsLoading,
    title: deleteOp.disabled && t(DISABLED_REASON_TITLE_KEY$1[deleteOp.disabled]) || "",
    label: t(isDeleting ? "action.delete.running.label" : "action.delete.label"),
    shortcut: "Ctrl+Alt+D",
    onHandle: handle,
    dialog: isConfirmDialogOpen && {
      type: "custom",
      component: (0, import_jsx_runtime.jsx)(
        ConfirmDeleteDialogContainer,
        {
          action: "delete",
          id: (draft == null ? void 0 : draft._id) || id,
          type,
          onCancel: handleCancel,
          onConfirm: handleConfirm
        }
      )
    }
  };
};
DeleteAction.action = "delete";
var DISABLED_REASON_KEY$2 = {
  NO_CHANGES: "action.discard-changes.disabled.no-changes",
  NOT_PUBLISHED: "action.discard-changes.disabled.not-published",
  NOT_READY: "action.discard-changes.disabled.not-ready"
};
var DiscardChangesAction = ({
  id,
  type,
  published,
  liveEdit,
  onComplete
}) => {
  const { discardChanges } = useDocumentOperation(id, type), [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false), [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "discardDraft"
  }), currentUser = useCurrentUser(), { t } = useTranslation2(structureLocaleNamespace), handleConfirm = (0, import_react.useCallback)(() => {
    discardChanges.execute(), onComplete();
  }, [discardChanges, onComplete]), handle = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(true);
  }, []), dialog = (0, import_react.useMemo)(
    () => isConfirmDialogOpen && {
      type: "confirm",
      tone: "critical",
      onCancel: onComplete,
      onConfirm: handleConfirm,
      message: t("action.discard-changes.confirm-dialog.confirm-discard-changes")
    },
    [handleConfirm, isConfirmDialogOpen, onComplete, t]
  );
  return !published || liveEdit ? null : !isPermissionsLoading && !(permissions != null && permissions.granted) ? {
    tone: "critical",
    icon: ResetIcon,
    disabled: true,
    label: t("action.discard-changes.label"),
    title: (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, { context: "discard-changes", currentUser })
  } : {
    tone: "critical",
    icon: ResetIcon,
    disabled: !!discardChanges.disabled || isPermissionsLoading,
    title: discardChanges.disabled && DISABLED_REASON_KEY$2[discardChanges.disabled] || "",
    label: t("action.discard-changes.label"),
    onHandle: handle,
    dialog
  };
};
DiscardChangesAction.action = "discardChanges";
var DISABLED_REASON_KEY$1 = {
  NOTHING_TO_DUPLICATE: "action.duplicate.disabled.nothing-to-duplicate",
  NOT_READY: "action.duplicate.disabled.not-ready"
};
var DuplicateAction = ({ id, type, onComplete }) => {
  const documentStore = useDocumentStore(), { duplicate } = useDocumentOperation(id, type), { navigateIntent } = useRouter(), [isDuplicating, setDuplicating] = (0, import_react.useState)(false), [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "duplicate"
  }), { t } = useTranslation2(structureLocaleNamespace), currentUser = useCurrentUser(), handle = (0, import_react.useCallback)(async () => {
    const dupeId = v4_default();
    setDuplicating(true);
    const duplicateSuccess = firstValueFrom(
      documentStore.pair.operationEvents(id, type).pipe(filter((e) => e.op === "duplicate" && e.type === "success"))
    );
    duplicate.execute(dupeId), await duplicateSuccess, navigateIntent("edit", { id: dupeId, type }), onComplete();
  }, [documentStore.pair, duplicate, id, navigateIntent, onComplete, type]);
  return !isPermissionsLoading && !(permissions != null && permissions.granted) ? {
    icon: CopyIcon,
    disabled: true,
    label: t("action.duplicate.label"),
    title: (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, { context: "duplicate-document", currentUser })
  } : {
    icon: CopyIcon,
    disabled: isDuplicating || !!duplicate.disabled || isPermissionsLoading,
    label: t(isDuplicating ? "action.duplicate.running.label" : "action.duplicate.label"),
    title: duplicate.disabled ? t(DISABLED_REASON_KEY$1[duplicate.disabled]) : "",
    onHandle: handle
  };
};
DuplicateAction.action = "duplicate";
var HistoryRestoreAction = ({ id, type, revision, onComplete }) => {
  const { restore } = useDocumentOperation(id, type), event = useDocumentOperationEvent(id, type), { navigateIntent } = useRouter(), prevEvent = (0, import_react.useRef)(event), [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false), { t } = useTranslation2(structureLocaleNamespace), handleConfirm = (0, import_react.useCallback)(() => {
    restore.execute(revision), onComplete();
  }, [restore, revision, onComplete]);
  (0, import_react.useEffect)(() => {
    !event || event === prevEvent.current || (event.type === "success" && event.op === "restore" && navigateIntent("edit", { id, type }), prevEvent.current = event);
  }, [event, id, navigateIntent, type]);
  const handle = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(true);
  }, []), dialog = (0, import_react.useMemo)(() => isConfirmDialogOpen ? {
    type: "confirm",
    tone: "critical",
    onCancel: onComplete,
    onConfirm: handleConfirm,
    message: t("action.restore.confirm.message")
  } : null, [handleConfirm, isConfirmDialogOpen, onComplete, t]), isRevisionInitialVersion = revision === "@initial";
  return revision === void 0 ? null : {
    label: t("action.restore.label"),
    color: "primary",
    onHandle: handle,
    title: t(
      isRevisionInitialVersion ? "action.restore.disabled.cannot-restore-initial" : "action.restore.tooltip"
    ),
    icon: RestoreIcon,
    dialog,
    disabled: isRevisionInitialVersion
  };
};
HistoryRestoreAction.action = "restore";
var DocumentPublished = defineEvent({
  name: "Document Published",
  version: 1,
  description: 'User clicked the "Publish" button in the document pane'
});
var DISABLED_REASON_TITLE_KEY = {
  LIVE_EDIT_ENABLED: "action.publish.live-edit.publish-disabled",
  ALREADY_PUBLISHED: "action.publish.already-published.no-time-ago.tooltip",
  NO_CHANGES: "action.publish.no-changes.tooltip",
  NOT_READY: "action.publish.disabled.not-ready"
};
function getDisabledReason(reason, publishedAt, t) {
  return reason === "ALREADY_PUBLISHED" && publishedAt ? (0, import_jsx_runtime.jsx)(AlreadyPublished, { publishedAt }) : t(DISABLED_REASON_TITLE_KEY[reason]);
}
function AlreadyPublished({ publishedAt }) {
  const { t } = useTranslation2(structureLocaleNamespace), timeSincePublished = useRelativeTime(publishedAt, { useTemporalPhrase: true });
  return (0, import_jsx_runtime.jsx)("span", { children: t("action.publish.already-published.tooltip", { timeSincePublished }) });
}
var PublishAction = (props) => {
  var _a;
  const { id, type, liveEdit, draft, published } = props, [publishState, setPublishState] = (0, import_react.useState)(null), { publish } = useDocumentOperation(id, type), validationStatus = useValidationStatus(id, type), syncState = useSyncState(id, type), { changesOpen, onHistoryOpen, documentId, documentType } = useDocumentPane(), editState = useEditState(documentId, documentType), { t } = useTranslation2(structureLocaleNamespace), revision = ((editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || {})._rev, hasValidationErrors = validationStatus.validation.some(isValidationErrorMarker), [publishScheduled, setPublishScheduled] = (0, import_react.useState)(false), isSyncing = syncState.isSyncing, isValidating = validationStatus.isValidating, [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "publish"
  }), currentUser = useCurrentUser(), title = publish.disabled ? getDisabledReason(publish.disabled, (published || {})._updatedAt, t) || "" : hasValidationErrors ? t("action.publish.validation-issues.tooltip") : "", hasDraft = !!draft, doPublish = (0, import_react.useCallback)(() => {
    publish.execute(), setPublishState("publishing");
  }, [publish]);
  (0, import_react.useEffect)(() => {
    const validationComplete = validationStatus.isValidating === false && validationStatus.revision !== revision;
    !publishScheduled || isSyncing || !validationComplete || (hasValidationErrors || doPublish(), setPublishScheduled(false));
  }, [
    isSyncing,
    doPublish,
    hasValidationErrors,
    publishScheduled,
    validationStatus.revision,
    revision,
    isValidating,
    validationStatus.isValidating
  ]), (0, import_react.useEffect)(() => {
    const didPublish = publishState === "publishing" && !hasDraft;
    didPublish && changesOpen && onHistoryOpen();
    const nextState = didPublish ? "published" : null, timer2 = setTimeout(() => {
      setPublishState(nextState);
    }, didPublish ? 200 : 4e3);
    return () => clearTimeout(timer2);
  }, [changesOpen, publishState, hasDraft, onHistoryOpen]);
  const telemetry = useTelemetry(), handle = (0, import_react.useCallback)(() => {
    telemetry.log(DocumentPublished, {
      publishedImmediately: !(draft != null && draft._createdAt),
      previouslyPublished: !!published
    }), syncState.isSyncing || validationStatus.isValidating || validationStatus.revision !== revision ? setPublishScheduled(true) : doPublish();
  }, [
    telemetry,
    draft == null ? void 0 : draft._createdAt,
    published,
    syncState.isSyncing,
    validationStatus.isValidating,
    validationStatus.revision,
    revision,
    doPublish
  ]);
  if (liveEdit)
    return {
      tone: "default",
      icon: PublishIcon,
      label: t("action.publish.live-edit.label"),
      title: t("action.publish.live-edit.tooltip"),
      disabled: true
    };
  if (!isPermissionsLoading && !(permissions != null && permissions.granted))
    return {
      tone: "default",
      icon: PublishIcon,
      label: "Publish",
      title: (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, { context: "publish-document", currentUser }),
      disabled: true
    };
  const disabled = !!(publishScheduled || (_a = editState == null ? void 0 : editState.transactionSyncLock) != null && _a.enabled || publishState === "publishing" || publishState === "published" || hasValidationErrors || publish.disabled);
  return {
    disabled: disabled || isPermissionsLoading,
    tone: "default",
    label: (
      // eslint-disable-next-line no-nested-ternary
      t(publishState === "published" ? "action.publish.published.label" : publishScheduled || publishState === "publishing" ? "action.publish.running.label" : "action.publish.draft.label")
    ),
    // @todo: Implement loading state, to show a `<Button loading />` state
    // loading: publishScheduled || publishState === 'publishing',
    icon: PublishIcon,
    // eslint-disable-next-line no-nested-ternary
    title: publishScheduled ? t("action.publish.waiting") : publishState === "published" || publishState === "publishing" ? null : title,
    shortcut: disabled || publishScheduled ? null : "Ctrl+Alt+P",
    onHandle: handle
  };
};
PublishAction.action = "publish";
var DISABLED_REASON_KEY = {
  NOT_PUBLISHED: "action.unpublish.disabled.not-published",
  NOT_READY: "action.unpublish.disabled.not-ready",
  LIVE_EDIT_ENABLED: "action.unpublish.disabled.live-edit-enabled"
};
var UnpublishAction = ({
  id,
  type,
  draft,
  onComplete,
  liveEdit
}) => {
  const { unpublish } = useDocumentOperation(id, type), [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false), [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "unpublish"
  }), currentUser = useCurrentUser(), { t } = useTranslation2(structureLocaleNamespace), handleCancel = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(false), onComplete();
  }, [onComplete]), handleConfirm = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(false), unpublish.execute(), onComplete();
  }, [onComplete, unpublish]), dialog = (0, import_react.useMemo)(() => isConfirmDialogOpen ? {
    type: "dialog",
    onClose: onComplete,
    content: (0, import_jsx_runtime.jsx)(
      ConfirmDeleteDialogContainer,
      {
        id: (draft == null ? void 0 : draft._id) || id,
        type,
        action: "unpublish",
        onCancel: handleCancel,
        onConfirm: handleConfirm
      }
    )
  } : null, [draft, id, handleCancel, handleConfirm, isConfirmDialogOpen, onComplete, type]);
  return liveEdit ? null : !isPermissionsLoading && !(permissions != null && permissions.granted) ? {
    tone: "critical",
    icon: UnpublishIcon,
    label: "Unpublish",
    title: (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, { context: "unpublish-document", currentUser }),
    disabled: true
  } : {
    tone: "critical",
    icon: UnpublishIcon,
    disabled: !!unpublish.disabled || isPermissionsLoading,
    label: t("action.unpublish.label"),
    title: unpublish.disabled ? t(DISABLED_REASON_KEY[unpublish.disabled]) : "",
    onHandle: () => setConfirmDialogOpen(true),
    dialog
  };
};
UnpublishAction.action = "unpublish";
function DocumentStatusBarActionsInner(props) {
  const { disabled, showMenu, states } = props, { __internal_tasks } = useDocumentPane(), [firstActionState, ...menuActionStates] = states, [buttonElement, setButtonElement] = (0, import_react.useState)(null), tooltipContent = (0, import_react.useMemo)(() => !firstActionState || !firstActionState.title && !firstActionState.shortcut ? null : (0, import_jsx_runtime.jsxs)(Flex, { style: { maxWidth: 300 }, align: "center", gap: 3, children: [
    firstActionState.title && (0, import_jsx_runtime.jsx)(Text, { size: 1, children: firstActionState.title }),
    firstActionState.shortcut && (0, import_jsx_runtime.jsx)(
      Hotkeys,
      {
        fontSize: 1,
        style: { marginTop: -4, marginBottom: -4 },
        keys: String(firstActionState.shortcut).split("+").map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
      }
    )
  ] }), [firstActionState]);
  return (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 1, children: [
    __internal_tasks && __internal_tasks.footerAction,
    firstActionState && (0, import_jsx_runtime.jsx)(LayerProvider, { zOffset: 200, children: (0, import_jsx_runtime.jsx)(Tooltip, { disabled: !tooltipContent, content: tooltipContent, placement: "top", children: (0, import_jsx_runtime.jsx)(Stack, { children: (0, import_jsx_runtime.jsx)(
      Button2,
      {
        "data-testid": `action-${firstActionState.label}`,
        disabled: disabled || !!firstActionState.disabled,
        icon: firstActionState.icon,
        onClick: firstActionState.onHandle,
        ref: setButtonElement,
        size: "large",
        text: firstActionState.label,
        tone: firstActionState.tone || "primary"
      }
    ) }) }) }),
    showMenu && menuActionStates.length > 0 && (0, import_jsx_runtime.jsx)(ActionMenuButton, { actionStates: menuActionStates, disabled }),
    firstActionState && firstActionState.dialog && (0, import_jsx_runtime.jsx)(ActionStateDialog, { dialog: firstActionState.dialog, referenceElement: buttonElement })
  ] });
}
var DocumentStatusBarActions = (0, import_react.memo)(function() {
  const { actions, connectionState, documentId, editState } = useDocumentPane();
  return !actions || !editState ? null : (0, import_jsx_runtime.jsx)(
    RenderActionCollectionState,
    {
      actions,
      actionProps: editState,
      group: "default",
      children: ({ states }) => (0, import_jsx_runtime.jsx)(
        DocumentStatusBarActionsInner,
        {
          disabled: connectionState !== "connected",
          showMenu: actions.length > 1,
          states
        },
        documentId
      )
    }
  );
});
var HistoryStatusBarActions = (0, import_react.memo)(function() {
  const { connectionState, editState, timelineStore } = useDocumentPane(), revTime = useTimelineSelector(timelineStore, (state2) => state2.revTime), revision = (revTime == null ? void 0 : revTime.id) || "", disabled = ((editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || {})._rev === revision, actionProps = (0, import_react.useMemo)(() => ({ ...editState || {}, revision }), [editState, revision]), historyActions = (0, import_react.useMemo)(() => [HistoryRestoreAction], []);
  return (0, import_jsx_runtime.jsx)(
    RenderActionCollectionState,
    {
      actions: historyActions,
      actionProps,
      group: "default",
      children: ({ states }) => (0, import_jsx_runtime.jsx)(
        DocumentStatusBarActionsInner,
        {
          disabled: connectionState !== "connected" || !!disabled,
          showMenu: false,
          states
        }
      )
    }
  );
});
var StyledMotionPath = pt(motion.path)`
  transform-origin: center;
`;
var Circle = (props) => (0, import_jsx_runtime.jsx)(motion.circle, { fill: "none", r: "8", cx: "12.5", cy: "12.5", strokeWidth: "1.2", ...props });
var Arrows = (props) => (0, import_jsx_runtime.jsx)(
  StyledMotionPath,
  {
    fill: "none",
    d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
    ...props
  }
);
var Checkmark = (props) => (0, import_jsx_runtime.jsx)(motion.path, { d: "M9.5 12.1316L11.7414 14.5L16 10", ...props });
var rotateAnimation = ft`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
var RotateGroup = pt.g`
  transform-origin: center;

  &[data-rotate] {
    animation: ${rotateAnimation} 1s ease-in-out infinite;
  }
`;
var root = {
  syncing: {
    scale: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    scale: [1, 0.8, 1.2, 0.9, 1.1, 0.95, 1.05, 0.99, 1],
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  changes: { transition: { duration: 0 } }
};
var circle = {
  syncing: {
    strokeDasharray: "0, 0, 23, 3, 23, 3",
    strokeDashoffset: 10,
    opacity: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    strokeDasharray: "0, 0, 23, 0, 23, 0",
    strokeDashoffset: 10,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  changes: {
    strokeDasharray: "0, 60, 23, 0, 23, 0",
    strokeDashoffset: 0,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};
var arrows = {
  syncing: {
    opacity: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  changes: {
    opacity: 0
  }
};
var checkmark = {
  syncing: {
    pathLength: 0,
    transition: { duration: 0 }
  },
  saved: {
    pathLength: 1,
    transition: {
      delay: 0.4,
      duration: 0.3
    }
  },
  changes: {
    pathLength: 0,
    transition: {
      duration: 0.2
    }
  }
};
function AnimatedStatusIcon(props) {
  const { status } = props;
  return status ? (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2",
      "data-sanity-icon": "animated-status-icon",
      children: (0, import_jsx_runtime.jsxs)(motion.g, { variants: root, initial: status, animate: status, children: [
        (0, import_jsx_runtime.jsxs)(RotateGroup, { "data-rotate": status === "changes" ? void 0 : "", children: [
          (0, import_jsx_runtime.jsx)(Arrows, { variants: arrows, initial: status, animate: status }),
          (0, import_jsx_runtime.jsx)(Circle, { variants: circle, initial: status, animate: status })
        ] }),
        (0, import_jsx_runtime.jsx)(Checkmark, { variants: checkmark, initial: status, animate: status })
      ] })
    }
  ) : null;
}
var STATUS_DICTIONARY = {
  saved: {
    i18nKey: "status-bar.document-status-pulse.status.saved.text",
    tone: "positive"
  },
  syncing: {
    i18nKey: "status-bar.document-status-pulse.status.syncing.text",
    tone: "default"
  }
};
var DocumentStatusPulse = (props) => {
  const { status } = props, { t } = useTranslation2(structureLocaleNamespace);
  if (status !== "saved" && status !== "syncing")
    return null;
  const currentStatus = STATUS_DICTIONARY[status];
  return (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 2, children: [
    (0, import_jsx_runtime.jsx)(TextWithTone, { size: 1, tone: currentStatus.tone, children: (0, import_jsx_runtime.jsx)(AnimatedStatusIcon, { status }) }),
    (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: t(currentStatus.i18nKey) })
  ] });
};
var SYNCING_TIMEOUT = 1e3;
var SAVED_TIMEOUT = 3e3;
function DocumentStatusLine({ singleLine }) {
  const { documentId, documentType, editState, value } = useDocumentPane(), [status, setStatus] = (0, import_react.useState)(null), syncState = useSyncState(documentId, documentType), lastUpdated = value == null ? void 0 : value._updatedAt;
  return (0, import_react.useEffect)(() => {
    if (status === "syncing" && !syncState.isSyncing) {
      const timerId = setTimeout(() => setStatus("saved"), SYNCING_TIMEOUT);
      return () => clearTimeout(timerId);
    }
    if (status === "saved") {
      const timerId = setTimeout(() => setStatus(null), SAVED_TIMEOUT);
      return () => clearTimeout(timerId);
    }
  }, [status, lastUpdated, syncState.isSyncing]), (0, import_react.useLayoutEffect)(() => {
    setStatus(null);
  }, [documentId]), (0, import_react.useLayoutEffect)(() => {
    syncState.isSyncing && setStatus("syncing");
  }, [syncState.isSyncing, lastUpdated]), status ? (0, import_jsx_runtime.jsx)(DocumentStatusPulse, { status: status || void 0 }) : (0, import_jsx_runtime.jsx)(
    Tooltip,
    {
      content: (0, import_jsx_runtime.jsx)(DocumentStatus, { absoluteDate: true, draft: editState == null ? void 0 : editState.draft, published: editState == null ? void 0 : editState.published }),
      placement: "top",
      children: (0, import_jsx_runtime.jsxs)(Flex, { align: "center", gap: 3, children: [
        (0, import_jsx_runtime.jsx)(DocumentStatusIndicator, { draft: editState == null ? void 0 : editState.draft, published: editState == null ? void 0 : editState.published }),
        (0, import_jsx_runtime.jsx)(
          DocumentStatus,
          {
            draft: editState == null ? void 0 : editState.draft,
            published: editState == null ? void 0 : editState.published,
            singleLine
          }
        )
      ] })
    }
  );
}
function useResizeObserver({
  element,
  onResize
}) {
  (0, import_react.useLayoutEffect)(() => (element && resizeObserver.observe(element, onResize), () => {
    element && resizeObserver.unobserve(element);
  }), [element, onResize]);
}
var CONTAINER_BREAKPOINT = 480;
function DocumentStatusBar(props) {
  const { actionsBoxRef } = props, { editState, timelineStore } = useDocumentPane(), showingRevision = useTimelineSelector(timelineStore, (state2) => state2.onOlderRevision), [collapsed, setCollapsed] = (0, import_react.useState)(null), [rootElement, setRootElement] = (0, import_react.useState)(null), handleResize = (0, import_react.useCallback)((event) => {
    setCollapsed(event.contentRect.width < CONTAINER_BREAKPOINT);
  }, []);
  useResizeObserver({ element: rootElement, onResize: handleResize });
  const shouldRender = (editState == null ? void 0 : editState.ready) && typeof collapsed == "boolean";
  return (0, import_jsx_runtime.jsx)(Flex, { direction: "column", ref: setRootElement, sizing: "border", children: shouldRender && (0, import_jsx_runtime.jsxs)(
    Flex,
    {
      align: "stretch",
      gap: 1,
      justify: "space-between",
      paddingY: 2,
      paddingLeft: 4,
      paddingRight: 3,
      children: [
        (0, import_jsx_runtime.jsxs)(Flex, { align: "center", flex: 1, gap: collapsed ? 2 : 3, wrap: "wrap", paddingRight: 3, children: [
          (0, import_jsx_runtime.jsxs)(Flex, { align: "center", children: [
            (0, import_jsx_runtime.jsx)(DocumentStatusLine, { singleLine: !collapsed }),
            (0, import_jsx_runtime.jsx)(SpacerButton, { size: "large" })
          ] }),
          (0, import_jsx_runtime.jsx)(DocumentBadges, {})
        ] }),
        (0, import_jsx_runtime.jsxs)(
          Flex,
          {
            align: "flex-start",
            justify: "flex-end",
            ref: actionsBoxRef,
            style: { flexShrink: 0, marginLeft: "auto" },
            children: [
              (0, import_jsx_runtime.jsx)(SpacerButton, { size: "large" }),
              showingRevision ? (0, import_jsx_runtime.jsx)(HistoryStatusBarActions, {}) : (0, import_jsx_runtime.jsx)(DocumentStatusBarActions, {})
            ]
          }
        )
      ]
    }
  ) });
}
function KeyboardShortcutResponder(props) {
  const {
    actionsBoxElement,
    activeIndex,
    as = "div",
    children,
    id,
    onActionStart,
    onKeyDown,
    rootRef,
    states,
    ...rest
  } = props, activeAction = states[activeIndex], handleKeyDown = (0, import_react.useCallback)(
    (event) => {
      const matchingStates = states.filter(
        (state2) => state2.shortcut && isHotkey(state2.shortcut, event)
      ), matchingState = matchingStates[0];
      if (matchingStates.length > 1 && console.warn(
        `Keyboard shortcut conflict: More than one document action matches the shortcut "${matchingState.shortcut}"`
      ), matchingState && !matchingState.disabled && matchingState.onHandle) {
        event.preventDefault(), matchingState.onHandle(), onActionStart(states.indexOf(matchingState));
        return;
      }
      onKeyDown && onKeyDown(event);
    },
    [onActionStart, onKeyDown, states]
  );
  return (0, import_react.createElement)(
    as,
    {
      id,
      onKeyDown: handleKeyDown,
      tabIndex: -1,
      ...rest,
      ref: rootRef
    },
    [
      children,
      activeAction && activeAction.dialog && (0, import_jsx_runtime.jsx)(LegacyLayerProvider, { zOffset: "paneFooter", children: (0, import_jsx_runtime.jsx)(ActionStateDialog, { dialog: activeAction.dialog, referenceElement: actionsBoxElement }) })
    ]
  );
}
var DocumentActionShortcuts = (0, import_react.memo)(
  (props) => {
    const { actionsBoxElement, as = "div", children, ...rest } = props, { actions, editState } = useDocumentPane(), [activeIndex, setActiveIndex] = (0, import_react.useState)(-1), onActionStart = (0, import_react.useCallback)((idx) => {
      setActiveIndex(idx);
    }, []), actionProps = (0, import_react.useMemo)(
      () => editState && {
        ...editState,
        // @todo: what to call here?
        onComplete: () => {
        },
        // @todo: get revision string
        revision: void 0
      },
      [editState]
    );
    return !actionProps || !actions ? null : (0, import_jsx_runtime.jsx)(RenderActionCollectionState, { actionProps, actions, children: ({ states }) => (0, import_jsx_runtime.jsx)(
      KeyboardShortcutResponder,
      {
        ...rest,
        activeIndex,
        actionsBoxElement,
        as,
        onActionStart,
        states,
        children
      }
    ) });
  }
);
DocumentActionShortcuts.displayName = "DocumentActionShortcuts";
function getInspectorItems({
  currentInspector,
  hasValue,
  inspectors: inspectors2,
  inspectorMenuItems
}) {
  return inspectors2.map((inspector, index) => {
    var _a;
    const menuItem = inspectorMenuItems[index];
    return !menuItem || menuItem.hidden ? null : {
      action: `${INSPECT_ACTION_PREFIX}${inspector.name}`,
      group: menuItem.showAsAction ? void 0 : "inspectors",
      icon: menuItem.icon,
      isDisabled: !hasValue,
      selected: (currentInspector == null ? void 0 : currentInspector.name) === inspector.name,
      shortcut: (_a = menuItem.hotkeys) == null ? void 0 : _a.join("+"),
      showAsAction: menuItem.showAsAction,
      title: menuItem.title,
      tone: menuItem.tone
    };
  }).filter(Boolean);
}
function getInspectItem({ hasValue, t }) {
  return {
    action: "inspect",
    group: "inspectors",
    title: t("document-inspector.menu-item.title"),
    icon: JsonIcon,
    isDisabled: !hasValue,
    shortcut: "Ctrl+Alt+I"
  };
}
function getProductionPreviewItem({ previewUrl, t }) {
  return previewUrl ? {
    action: "production-preview",
    group: "links",
    title: t("production-preview.menu-item.title"),
    icon: EarthAmericasIcon,
    shortcut: "Ctrl+Alt+O"
  } : null;
}
function getMenuItems(params) {
  const inspectorItems = getInspectorItems(params), items = [
    // Get production preview item
    getProductionPreviewItem(params)
  ].filter(Boolean);
  return [
    ...inspectorItems,
    // TODO: convert to inspector or document view?
    getInspectItem(params),
    ...items
  ];
}
var isSanityDocument2 = (value) => isRecord$4(value) && typeof value._id == "string" && typeof value._type == "string";
function usePreviewUrl(value) {
  const [previewUrl, setPreviewUrl] = (0, import_react.useState)(void 0), [error, setError] = (0, import_react.useState)(null), { resolveProductionUrl } = useSource().document, value$ = useAsObservable(value);
  if (error)
    throw error;
  return (0, import_react.useEffect)(() => {
    value$.pipe(
      // this so that the preview URL isn't fetched on every keystroke
      debounceTime(500),
      switchMap(
        (document2) => isSanityDocument2(document2) ? from(resolveProductionUrl({ document: document2 })) : of(void 0)
      ),
      catchError((e) => {
        const message = isRecord$4(e) && typeof e.message == "string" ? e.message : "Unknown error";
        throw new Error(`An error was thrown while trying to get your preview url: ${message}`);
      })
    ).subscribe({
      next: setPreviewUrl,
      error: setError
    });
  }, [resolveProductionUrl, value$]), previewUrl;
}
function DocumentLayoutError(props) {
  const { documentType, value, currentMinWidth, paneKey, minWidth } = props, { t } = useTranslation2();
  return (0, import_jsx_runtime.jsx)(
    ErrorPane,
    {
      currentMinWidth,
      flex: 2.5,
      minWidth,
      paneKey,
      title: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          t,
          i18nKey: "panes.document-pane.document-unknown-type.title",
          values: { documentType }
        }
      ),
      tone: "caution",
      children: (0, import_jsx_runtime.jsxs)(Stack, { space: 4, children: [
        documentType && (0, import_jsx_runtime.jsx)(Text, { as: "p", children: (0, import_jsx_runtime.jsx)(
          Translate,
          {
            t,
            i18nKey: "panes.document-pane.document-unknown-type.text",
            values: { documentType }
          }
        ) }),
        !documentType && (0, import_jsx_runtime.jsx)(Text, { as: "p", children: t("panes.document-pane.document-unknown-type.without-schema.text") }),
        isDev && value && /* eslint-disable i18next/no-literal-string */
        (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          (0, import_jsx_runtime.jsx)(Text, { as: "p", children: "Here is the JSON representation of the document:" }),
          (0, import_jsx_runtime.jsx)(Card, { padding: 3, overflow: "auto", radius: 2, shadow: 1, tone: "inherit", children: (0, import_jsx_runtime.jsx)(Code, { language: "json", size: [1, 1, 2], children: JSON.stringify(value, null, 2) }) })
        ] })
      ] })
    }
  );
}
var EMPTY_ARRAY$1 = [];
var DIALOG_PROVIDER_POSITION = [
  // We use the `position: fixed` for dialogs on narrower screens (first two media breakpoints).
  "fixed",
  "fixed",
  // And we use the `position: absolute` strategy (within panes) on wide screens.
  "absolute"
];
var StyledChangeConnectorRoot = pt(ChangeConnectorRoot)`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`;
function DocumentLayout() {
  const {
    changesOpen,
    documentId,
    documentType,
    fieldActions,
    inspectOpen,
    inspector,
    inspectors: inspectors2,
    onFocus,
    onHistoryOpen,
    onMenuAction,
    onPathOpen,
    paneKey,
    schemaType,
    value
  } = useDocumentPane(), { features } = useStructureTool(), { t } = useTranslation(structureLocaleNamespace), { collapsed: layoutCollapsed } = usePaneLayout(), zOffsets = useZIndex(), previewUrl = usePreviewUrl(value), [rootElement, setRootElement] = (0, import_react.useState)(null), [footerElement, setFooterElement] = (0, import_react.useState)(null), [headerElement, setHeaderElement] = (0, import_react.useState)(null), [actionsBoxElement, setActionsBoxElement] = (0, import_react.useState)(null), [documentPanelPortalElement, setDocumentPanelPortalElement] = (0, import_react.useState)(
    null
  ), [inspectorMenuItems, setInspectorMenuItems] = (0, import_react.useState)([]), [rootFieldActionNodes, setRootFieldActionNodes] = (0, import_react.useState)([]), footerRect = useElementRect(footerElement), headerRect = useElementRect(headerElement), footerHeight = footerRect == null ? void 0 : footerRect.height, headerHeight = headerRect == null ? void 0 : headerRect.height, currentMinWidth = DOCUMENT_PANEL_INITIAL_MIN_WIDTH + (inspector ? DOCUMENT_INSPECTOR_MIN_WIDTH : 0), minWidth = DOCUMENT_PANEL_MIN_WIDTH + (inspector ? DOCUMENT_INSPECTOR_MIN_WIDTH : 0), currentInspector = (0, import_react.useMemo)(
    () => inspectors2 == null ? void 0 : inspectors2.find((i) => i.name === (inspector == null ? void 0 : inspector.name)),
    [inspectors2, inspector == null ? void 0 : inspector.name]
  ), hasValue = !!value, menuItems = (0, import_react.useMemo)(
    () => getMenuItems({
      currentInspector,
      features,
      hasValue,
      inspectorMenuItems,
      inspectors: inspectors2,
      previewUrl,
      t
    }),
    [currentInspector, features, hasValue, inspectorMenuItems, inspectors2, previewUrl, t]
  ), handleKeyUp = (0, import_react.useCallback)(
    (event) => {
      for (const item of menuItems)
        if (item.shortcut && isHotkey(item.shortcut, event)) {
          event.preventDefault(), event.stopPropagation(), onMenuAction(item);
          return;
        }
    },
    [onMenuAction, menuItems]
  ), onConnectorSetFocus = (0, import_react.useCallback)(
    (path) => {
      onPathOpen(path), onFocus(path);
    },
    [onPathOpen, onFocus]
  );
  return schemaType ? (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    inspectors2.length > 0 && (0, import_jsx_runtime.jsx)(
      DocumentInspectorMenuItemsResolver,
      {
        documentId,
        documentType,
        inspectors: inspectors2,
        onMenuItems: setInspectorMenuItems
      }
    ),
    fieldActions.length > 0 && schemaType && (0, import_jsx_runtime.jsx)(
      FieldActionsResolver,
      {
        actions: fieldActions,
        documentId,
        documentType,
        onActions: setRootFieldActionNodes,
        path: EMPTY_ARRAY$1,
        schemaType
      }
    ),
    (0, import_jsx_runtime.jsx)(FieldActionsProvider, { actions: rootFieldActionNodes, path: EMPTY_ARRAY$1, children: (0, import_jsx_runtime.jsxs)(
      DocumentActionShortcuts,
      {
        actionsBoxElement,
        as: Pane,
        currentMinWidth,
        "data-testid": "document-pane",
        flex: 2.5,
        id: paneKey,
        minWidth,
        onKeyUp: handleKeyUp,
        rootRef: setRootElement,
        children: [
          (0, import_jsx_runtime.jsx)(DocumentPanelHeader, { ref: setHeaderElement, menuItems }),
          (0, import_jsx_runtime.jsx)(DialogProvider, { position: DIALOG_PROVIDER_POSITION, zOffset: zOffsets.paneDialog, children: (0, import_jsx_runtime.jsx)(Flex, { direction: "column", flex: 1, height: layoutCollapsed ? void 0 : "fill", children: (0, import_jsx_runtime.jsx)(
            StyledChangeConnectorRoot,
            {
              "data-testid": "change-connector-root",
              isReviewChangesOpen: changesOpen,
              onOpenReviewChanges: onHistoryOpen,
              onSetFocus: onConnectorSetFocus,
              children: (0, import_jsx_runtime.jsx)(
                DocumentPanel,
                {
                  footerHeight: footerHeight || null,
                  headerHeight: headerHeight || null,
                  isInspectOpen: inspectOpen,
                  rootElement,
                  setDocumentPanelPortalElement
                }
              )
            }
          ) }) }),
          (0, import_jsx_runtime.jsx)(
            PortalProvider,
            {
              __unstable_elements: { [DOCUMENT_PANEL_PORTAL_ELEMENT]: documentPanelPortalElement },
              children: (0, import_jsx_runtime.jsx)(DialogProvider, { position: DIALOG_PROVIDER_POSITION, zOffset: zOffsets.portal, children: (0, import_jsx_runtime.jsx)(PaneFooter, { ref: setFooterElement, children: (0, import_jsx_runtime.jsx)(TooltipDelayGroupProvider, { children: (0, import_jsx_runtime.jsx)(DocumentStatusBar, { actionsBoxRef: setActionsBoxElement }) }) }) })
            }
          ),
          (0, import_jsx_runtime.jsx)(DocumentOperationResults, {})
        ]
      }
    ) })
  ] }) : (0, import_jsx_runtime.jsx)(
    DocumentLayoutError,
    {
      currentMinWidth,
      documentType,
      minWidth,
      paneKey,
      value
    }
  );
}
function pick(plugin) {
  var _a, _b;
  return (_b = (_a = plugin.document) == null ? void 0 : _a.components) == null ? void 0 : _b.unstable_layout;
}
function useDocumentLayoutComponent() {
  return useMiddlewareComponents({
    pick,
    defaultComponent: DocumentLayout
  });
}
function getInitialValueTemplateOpts(templates, opts) {
  const payload = opts.panePayload || {}, structureNodeTemplate = opts.templateName;
  opts.urlTemplate && structureNodeTemplate && structureNodeTemplate !== opts.urlTemplate && console.warn(
    `Conflicting templates: URL says "${opts.urlTemplate}", structure node says "${structureNodeTemplate}". Using "${structureNodeTemplate}".`
  );
  const template = structureNodeTemplate || opts.urlTemplate, typeTemplates = templates.filter((t) => t.schemaType === opts.documentType), templateParams = {
    ...opts.templateParams,
    ...typeof payload == "object" ? payload || {} : {}
  };
  let templateName = template;
  return !template && typeTemplates.length === 1 && (templateName = typeTemplates[0].id), { templateName, templateParams };
}
var DocumentPaneProvider = (0, import_react.memo)((props) => {
  const { children, index, pane, paneKey, onFocusPath } = props, schema = useSchema(), templates = useTemplates(), {
    __internal_tasks,
    document: {
      actions: documentActions2,
      badges: documentBadges2,
      unstable_fieldActions: fieldActionsResolver,
      unstable_languageFilter: languageFilterResolver,
      inspectors: inspectorsResolver
    }
  } = useSource(), presenceStore = usePresenceStore(), paneRouter = usePaneRouter(), setPaneParams = paneRouter.setParams, { features } = useStructureTool(), { push: pushToast } = useToast(), {
    options,
    menuItemGroups = DEFAULT_MENU_ITEM_GROUPS,
    title = null,
    views: viewsProp = []
  } = pane, paneOptions = useUnique(options), documentIdRaw = paneOptions.id, documentId = getPublishedId(documentIdRaw), documentType = options.type, params = useUnique(paneRouter.params) || EMPTY_PARAMS$1, panePayload = useUnique(paneRouter.payload), { templateName, templateParams } = (0, import_react.useMemo)(
    () => getInitialValueTemplateOpts(templates, {
      documentType,
      templateName: paneOptions.template,
      templateParams: paneOptions.templateParameters,
      panePayload,
      urlTemplate: params.template
    }),
    [documentType, paneOptions, params, panePayload, templates]
  ), initialValueRaw = useInitialValue({
    documentId,
    documentType,
    templateName,
    templateParams
  }), initialValue = useUnique(initialValueRaw), { patch } = useDocumentOperation(documentId, documentType), editState = useEditState(documentId, documentType), { validation: validationRaw } = useValidationStatus(documentId, documentType), connectionState = useConnectionState(documentId, documentType), schemaType = schema.get(documentType), value = (editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || initialValue.value, [isDeleting, setIsDeleting] = (0, import_react.useState)(false), actions = (0, import_react.useMemo)(
    () => documentActions2({ schemaType: documentType, documentId }),
    [documentActions2, documentId, documentType]
  ), badges = (0, import_react.useMemo)(
    () => documentBadges2({ schemaType: documentType, documentId }),
    [documentBadges2, documentId, documentType]
  ), languageFilter = (0, import_react.useMemo)(
    () => languageFilterResolver({ schemaType: documentType, documentId }),
    [documentId, documentType, languageFilterResolver]
  ), validation = useUnique(validationRaw), views2 = useUnique(viewsProp), [focusPath, setFocusPath] = (0, import_react.useState)(
    () => params.path ? fromString(params.path) : EMPTY_ARRAY$t
  ), focusPathRef = (0, import_react.useRef)([]), activeViewId = params.view || views2[0] && views2[0].id || null, [timelineMode, setTimelineMode] = (0, import_react.useState)("closed"), [timelineError, setTimelineError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    params.prefersLatestPublished && editState.published && setPaneParams({
      //ensure we only run on first load
      ...(0, import_omit.default)(params, "prefersLatestPublished"),
      rev: `${editState.published._updatedAt}/${editState.published._rev}`
    });
  }, [editState, setPaneParams, params]);
  const timelineStore = useTimelineStore({
    documentId,
    documentType,
    onError: setTimelineError,
    rev: params.rev,
    since: params.since
  }), onOlderRevision = useTimelineSelector(timelineStore, (state2) => state2.onOlderRevision), revTime = useTimelineSelector(timelineStore, (state2) => state2.revTime), sinceAttributes = useTimelineSelector(timelineStore, (state2) => state2.sinceAttributes), timelineDisplayed = useTimelineSelector(timelineStore, (state2) => state2.timelineDisplayed), timelineReady = useTimelineSelector(timelineStore, (state2) => state2.timelineReady), isPristine = useTimelineSelector(timelineStore, (state2) => state2.isPristine), isDeleted = (0, import_react.useMemo)(() => timelineReady ? !(editState != null && editState.draft) && !(editState != null && editState.published) && !isPristine : false, [editState == null ? void 0 : editState.draft, editState == null ? void 0 : editState.published, isPristine, timelineReady]), previewUrl = usePreviewUrl(value), [presence, setPresence] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const subscription = presenceStore.documentPresence(documentId).subscribe((nextPresence) => {
      setPresence(nextPresence);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [documentId, presenceStore]);
  const inspectors2 = (0, import_react.useMemo)(
    () => inspectorsResolver({ documentId, documentType }),
    [documentId, documentType, inspectorsResolver]
  ), [inspectorName, setInspectorName] = (0, import_react.useState)(() => params.inspect || null), inspectParamRef = (0, import_react.useRef)(params.inspect);
  (0, import_react.useEffect)(() => {
    inspectParamRef.current !== params.inspect && (inspectParamRef.current = params.inspect, setInspectorName(params.inspect || null));
  }, [params.inspect]);
  const currentInspector = inspectors2 == null ? void 0 : inspectors2.find((i) => i.name === inspectorName), resolvedChangesInspector = inspectors2.find((i) => i.name === HISTORY_INSPECTOR_NAME), changesOpen = (currentInspector == null ? void 0 : currentInspector.name) === HISTORY_INSPECTOR_NAME, { t } = useTranslation2(structureLocaleNamespace), inspectOpen = params.inspect === "on", compareValue = changesOpen ? sinceAttributes : (editState == null ? void 0 : editState.published) || null, fieldActions = (0, import_react.useMemo)(
    () => schemaType ? fieldActionsResolver({ documentId, documentType, schemaType }) : [],
    [documentId, documentType, fieldActionsResolver, schemaType]
  ), ready = connectionState === "connected" && editState.ready && (timelineReady || !!timelineError), displayed = (0, import_react.useMemo)(
    () => onOlderRevision ? timelineDisplayed || { _id: value._id, _type: value._type } : value,
    [onOlderRevision, timelineDisplayed, value]
  ), setTimelineRange = (0, import_react.useCallback)(
    (newSince, newRev) => {
      setPaneParams({
        ...params,
        since: newSince,
        rev: newRev || void 0
      });
    },
    [params, setPaneParams]
  ), handleBlur = (0, import_react.useCallback)(
    (blurredPath) => {
      disableBlurRef.current || (setFocusPath(EMPTY_ARRAY$t), focusPathRef.current !== EMPTY_ARRAY$t && (focusPathRef.current = EMPTY_ARRAY$t, onFocusPath == null || onFocusPath(EMPTY_ARRAY$t)));
    },
    [onFocusPath, setFocusPath]
  ), patchRef = (0, import_react.useRef)(() => {
    throw new Error("Nope");
  });
  patchRef.current = (event) => {
    patch.execute(toMutationPatches(event.patches), initialValue.value);
  };
  const handleChange = (0, import_react.useCallback)((event) => patchRef.current(event), []), closeInspector = (0, import_react.useCallback)(
    (closeInspectorName) => {
      var _a, _b, _c, _d;
      const inspector = closeInspectorName && inspectors2.find((i) => i.name === closeInspectorName);
      if (closeInspectorName && !inspector) {
        console.warn(`No inspector named "${closeInspectorName}"`);
        return;
      }
      if (currentInspector) {
        if (inspector) {
          const result = (_b = (_a = inspector.onClose) == null ? void 0 : _a.call(inspector, { params })) != null ? _b : { params };
          setInspectorName(null), inspectParamRef.current = void 0, setPaneParams({ ...result.params, inspect: void 0 });
          return;
        }
        if (currentInspector) {
          const result = (_d = (_c = currentInspector.onClose) == null ? void 0 : _c.call(currentInspector, { params })) != null ? _d : { params };
          setInspectorName(null), inspectParamRef.current = void 0, setPaneParams({ ...result.params, inspect: void 0 });
        }
      }
    },
    [currentInspector, inspectors2, params, setPaneParams]
  ), openInspector = (0, import_react.useCallback)(
    (nextInspectorName, paneParams) => {
      var _a, _b, _c, _d;
      const nextInspector = inspectors2.find((i) => i.name === nextInspectorName);
      if (!nextInspector) {
        console.warn(`No inspector named "${nextInspectorName}"`);
        return;
      }
      if ((currentInspector == null ? void 0 : currentInspector.name) === nextInspector.name) {
        setPaneParams({ ...params, ...paneParams, inspect: nextInspector.name });
        return;
      }
      let currentParams = params;
      currentInspector && (currentParams = ((_b = (_a = nextInspector.onClose) == null ? void 0 : _a.call(nextInspector, { params: currentParams })) != null ? _b : {
        params: currentParams
      }).params);
      const result = (_d = (_c = nextInspector.onOpen) == null ? void 0 : _c.call(nextInspector, { params: currentParams })) != null ? _d : { params: currentParams };
      setInspectorName(nextInspector.name), inspectParamRef.current = nextInspector.name, setPaneParams({ ...result.params, ...paneParams, inspect: nextInspector.name });
    },
    [currentInspector, inspectors2, params, setPaneParams]
  ), handleHistoryClose = (0, import_react.useCallback)(() => {
    resolvedChangesInspector && closeInspector(resolvedChangesInspector.name);
  }, [closeInspector, resolvedChangesInspector]), handleHistoryOpen = (0, import_react.useCallback)(() => {
    features.reviewChanges && resolvedChangesInspector && openInspector(resolvedChangesInspector.name);
  }, [features.reviewChanges, openInspector, resolvedChangesInspector]), handlePaneClose = (0, import_react.useCallback)(() => paneRouter.closeCurrent(), [paneRouter]), handlePaneSplit = (0, import_react.useCallback)(() => paneRouter.duplicateCurrent(), [paneRouter]), toggleLegacyInspect = (0, import_react.useCallback)(
    (toggle = !inspectOpen) => {
      setPaneParams(toggle ? { ...params, inspect: "on" } : (0, import_omit.default)(params, "inspect"));
    },
    [inspectOpen, params, setPaneParams]
  ), handleMenuAction = (0, import_react.useCallback)(
    (item) => {
      if (item.action === "production-preview" && previewUrl)
        return window.open(previewUrl), true;
      if (item.action === "inspect")
        return toggleLegacyInspect(true), true;
      if (item.action === "reviewChanges")
        return handleHistoryOpen(), true;
      if (typeof item.action == "string" && item.action.startsWith(INSPECT_ACTION_PREFIX)) {
        const nextInspectorName = item.action.slice(INSPECT_ACTION_PREFIX.length), nextInspector = inspectors2.find((i) => i.name === nextInspectorName);
        if (nextInspector)
          return nextInspector.name === inspectorName ? closeInspector(nextInspector.name) : openInspector(nextInspector.name), true;
      }
      return false;
    },
    [
      closeInspector,
      handleHistoryOpen,
      inspectorName,
      inspectors2,
      openInspector,
      previewUrl,
      toggleLegacyInspect
    ]
  ), handleLegacyInspectClose = (0, import_react.useCallback)(
    () => toggleLegacyInspect(false),
    [toggleLegacyInspect]
  ), [openPath, onSetOpenPath] = (0, import_react.useState)([]), [fieldGroupState, onSetFieldGroupState] = (0, import_react.useState)(), [collapsedPaths, onSetCollapsedPath] = (0, import_react.useState)(), [collapsedFieldSets, onSetCollapsedFieldSets] = (0, import_react.useState)(), handleOnSetCollapsedPath = (0, import_react.useCallback)((path, collapsed) => {
    onSetCollapsedPath((prevState) => setAtPath(prevState, path, collapsed));
  }, []), handleOnSetCollapsedFieldSet = (0, import_react.useCallback)((path, collapsed) => {
    onSetCollapsedFieldSets((prevState) => setAtPath(prevState, path, collapsed));
  }, []), handleSetActiveFieldGroup = (0, import_react.useCallback)(
    (path, groupName) => onSetFieldGroupState((prevState) => setAtPath(prevState, path, groupName)),
    []
  ), requiredPermission = value._createdAt ? "update" : "create", liveEdit = !!(schemaType != null && schemaType.liveEdit), docId = value._id ? value._id : "dummy-id", docPermissionsInput = (0, import_react.useMemo)(() => ({
    ...value,
    _id: liveEdit ? getPublishedId(docId) : getDraftId(docId)
  }), [liveEdit, value, docId]), [permissions, isPermissionsLoading] = useDocumentValuePermissions({
    document: docPermissionsInput,
    permission: requiredPermission
  }), isNonExistent = !(value != null && value._id), readOnly = (0, import_react.useMemo)(() => {
    var _a;
    const hasNoPermission = !isPermissionsLoading && !(permissions != null && permissions.granted), updateActionDisabled = !isActionEnabled(schemaType, "update"), createActionDisabled = isNonExistent && !isActionEnabled(schemaType, "create"), reconnecting = connectionState === "reconnecting", isLocked = (_a = editState.transactionSyncLock) == null ? void 0 : _a.enabled;
    return !ready || revTime !== null || hasNoPermission || updateActionDisabled || createActionDisabled || reconnecting || isLocked || isDeleting || isDeleted;
  }, [
    connectionState,
    editState.transactionSyncLock,
    isNonExistent,
    isDeleted,
    isDeleting,
    isPermissionsLoading,
    permissions == null ? void 0 : permissions.granted,
    ready,
    revTime,
    schemaType
  ]), formState = useFormState(schemaType, {
    value: displayed,
    readOnly,
    comparisonValue: compareValue,
    focusPath,
    openPath,
    collapsedPaths,
    presence,
    validation,
    collapsedFieldSets,
    fieldGroupState,
    changesOpen
  }), formStateRef = (0, import_react.useRef)(formState);
  formStateRef.current = formState;
  const setOpenPath = (0, import_react.useCallback)(
    (path) => {
      getExpandOperations(formStateRef.current, path).forEach((op) => {
        op.type === "expandPath" && onSetCollapsedPath((prevState) => setAtPath(prevState, op.path, false)), op.type === "expandFieldSet" && onSetCollapsedFieldSets((prevState) => setAtPath(prevState, op.path, false)), op.type === "setSelectedGroup" && onSetFieldGroupState((prevState) => setAtPath(prevState, op.path, op.groupName));
      }), onSetOpenPath(path);
    },
    [formStateRef]
  ), updatePresence = (0, import_react.useCallback)(
    (nextFocusPath, payload) => {
      presenceStore.setLocation([
        {
          type: "document",
          documentId,
          path: nextFocusPath,
          lastActiveAt: (/* @__PURE__ */ new Date()).toISOString(),
          selection: payload == null ? void 0 : payload.selection
        }
      ]);
    },
    [documentId, presenceStore]
  ), updatePresenceThrottled = (0, import_react.useMemo)(
    () => (0, import_throttle.default)(updatePresence, 1e3, { leading: true, trailing: true }),
    [updatePresence]
  ), handleFocus = (0, import_react.useCallback)(
    (nextFocusPath, payload) => {
      setFocusPath(nextFocusPath), (0, import_react_fast_compare.default)(focusPathRef.current, nextFocusPath) || (setOpenPath(nextFocusPath.slice(0, -1)), focusPathRef.current = nextFocusPath, onFocusPath == null || onFocusPath(nextFocusPath)), updatePresenceThrottled(nextFocusPath, payload);
    },
    [onFocusPath, setOpenPath, updatePresenceThrottled]
  ), documentPane = (0, import_react.useMemo)(
    () => ({
      actions,
      activeViewId,
      badges,
      changesOpen,
      closeInspector,
      collapsedFieldSets,
      collapsedPaths,
      compareValue,
      connectionState,
      displayed,
      documentId,
      documentIdRaw,
      documentType,
      editState,
      fieldActions,
      focusPath,
      inspector: currentInspector || null,
      inspectors: inspectors2,
      __internal_tasks,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      onPathOpen: setOpenPath,
      onHistoryClose: handleHistoryClose,
      onHistoryOpen: handleHistoryOpen,
      onInspectClose: handleLegacyInspectClose,
      onMenuAction: handleMenuAction,
      onPaneClose: handlePaneClose,
      onPaneSplit: handlePaneSplit,
      onSetActiveFieldGroup: handleSetActiveFieldGroup,
      onSetCollapsedPath: handleOnSetCollapsedPath,
      onSetCollapsedFieldSet: handleOnSetCollapsedFieldSet,
      openInspector,
      index,
      inspectOpen,
      validation,
      menuItemGroups: menuItemGroups || [],
      paneKey,
      previewUrl,
      ready,
      schemaType,
      isPermissionsLoading,
      permissions,
      setTimelineMode,
      setTimelineRange,
      setIsDeleting,
      isDeleting,
      isDeleted,
      timelineError,
      timelineMode,
      timelineStore,
      title,
      value,
      views: views2,
      formState,
      unstable_languageFilter: languageFilter
    }),
    [
      __internal_tasks,
      actions,
      activeViewId,
      badges,
      changesOpen,
      closeInspector,
      collapsedFieldSets,
      collapsedPaths,
      compareValue,
      connectionState,
      currentInspector,
      displayed,
      documentId,
      documentIdRaw,
      documentType,
      editState,
      fieldActions,
      focusPath,
      formState,
      handleBlur,
      handleChange,
      handleFocus,
      handleHistoryClose,
      handleHistoryOpen,
      handleLegacyInspectClose,
      handleMenuAction,
      handleOnSetCollapsedFieldSet,
      handleOnSetCollapsedPath,
      handlePaneClose,
      handlePaneSplit,
      handleSetActiveFieldGroup,
      index,
      inspectOpen,
      inspectors2,
      isDeleted,
      isDeleting,
      isPermissionsLoading,
      languageFilter,
      menuItemGroups,
      openInspector,
      paneKey,
      permissions,
      previewUrl,
      ready,
      schemaType,
      setOpenPath,
      setTimelineRange,
      timelineError,
      timelineMode,
      timelineStore,
      title,
      validation,
      value,
      views2
    ]
  );
  (0, import_react.useEffect)(() => {
    connectionState === "reconnecting" && pushToast({
      id: "sanity/structure/reconnecting",
      status: "warning",
      title: t("panes.document-pane-provider.reconnecting.title")
    });
  }, [connectionState, pushToast, t]);
  const disableBlurRef = (0, import_react.useRef)(false);
  return (0, import_react.useEffect)(() => {
    var _a;
    if (ready && params.path) {
      const { path, ...restParams } = params, pathFromUrl = resolveKeyedPath((_a = formStateRef.current) == null ? void 0 : _a.value, fromString(path));
      disableBlurRef.current = true, (0, import_react_fast_compare.default)(focusPathRef.current, pathFromUrl) || (setFocusPath(pathFromUrl), setOpenPath(pathFromUrl), focusPathRef.current = pathFromUrl, onFocusPath == null || onFocusPath(pathFromUrl));
      const timeout = setTimeout(() => {
        disableBlurRef.current = false;
      }, 0);
      return paneRouter.setParams(restParams), () => clearTimeout(timeout);
    }
  }, [params, documentId, onFocusPath, setOpenPath, ready, paneRouter]), (0, import_jsx_runtime.jsx)(DocumentPaneContext.Provider, { value: documentPane, children });
});
DocumentPaneProvider.displayName = "DocumentPaneProvider";
var DocumentPane = (0, import_react.memo)(function(props) {
  const { name: parentSourceName } = useSource();
  return (0, import_jsx_runtime.jsx)(SourceProvider, { name: props.pane.source || parentSourceName, children: (0, import_jsx_runtime.jsx)(DocumentPaneInner, { ...props }) });
});
function DocumentPaneInner(props) {
  var _a;
  const { pane, paneKey } = props, { resolveNewDocumentOptions } = useSource().document, paneRouter = usePaneRouter(), options = usePaneOptions(pane.options, paneRouter.params), { documentType, isLoaded: isDocumentLoaded } = useDocumentType(options.id, options.type), DocumentLayout2 = useDocumentLayoutComponent(), templateItems = (0, import_react.useMemo)(() => resolveNewDocumentOptions({
    type: "document",
    documentId: options.id,
    schemaType: options.type
  }), [options.id, options.type, resolveNewDocumentOptions]), [templatePermissions, isTemplatePermissionsLoading] = useTemplatePermissions({
    templateItems
  }), isLoaded = isDocumentLoaded && !isTemplatePermissionsLoading, providerProps = (0, import_react.useMemo)(() => isLoaded && documentType && options.type !== documentType ? mergeDocumentType(props, options, documentType) : props, [props, documentType, isLoaded, options]), { ReferenceChildLink: ReferenceChildLink2, handleEditReference, groupIndex, routerPanesState } = paneRouter, childParams = ((_a = routerPanesState[groupIndex + 1]) == null ? void 0 : _a[0].params) || {}, routerPanesStateLength = routerPanesState.length, { parentRefPath } = childParams, activePath = (0, import_react.useMemo)(() => parentRefPath ? {
    path: fromString(parentRefPath),
    state: (
      // eslint-disable-next-line no-nested-ternary
      groupIndex >= routerPanesStateLength - 1 ? "none" : groupIndex >= routerPanesStateLength - 2 ? "selected" : "pressed"
    )
  } : { path: [], state: "none" }, [parentRefPath, groupIndex, routerPanesStateLength]), { t } = useTranslation2(structureLocaleNamespace);
  return options.type === "*" && !isLoaded ? (0, import_jsx_runtime.jsx)(
    LoadingPane,
    {
      flex: 2.5,
      minWidth: 320,
      paneKey,
      title: t("panes.document-pane.document-not-found.loading")
    }
  ) : documentType ? (0, import_jsx_runtime.jsx)(
    DocumentPaneProvider,
    {
      ...providerProps,
      children: (0, import_jsx_runtime.jsx)(
        ReferenceInputOptionsProvider,
        {
          EditReferenceLinkComponent: ReferenceChildLink2,
          onEditReference: handleEditReference,
          initialValueTemplateItems: templatePermissions,
          activePath,
          children: (0, import_jsx_runtime.jsx)(CommentsWrapper, { documentId: options.id, documentType: options.type, children: (0, import_jsx_runtime.jsx)(DocumentLayout2, { documentId: options.id, documentType: options.type }) })
        }
      )
    },
    `${documentType}-${options.id}`
  ) : (0, import_jsx_runtime.jsx)(
    ErrorPane,
    {
      flex: 2.5,
      minWidth: 320,
      paneKey,
      title: t("panes.document-pane.document-not-found.title"),
      children: (0, import_jsx_runtime.jsx)(Stack, { space: 4, children: (0, import_jsx_runtime.jsx)(Text, { as: "p", children: (0, import_jsx_runtime.jsx)(
        Translate,
        {
          t,
          i18nKey: "panes.document-pane.document-not-found.text",
          values: { id: options.id }
        }
      ) }) })
    }
  );
}
function usePaneOptions(options, params = {}) {
  const templates = useTemplates();
  return (0, import_react.useMemo)(() => {
    if (options.type && options.type !== "*")
      return options;
    const templateName = options.template || params.template, template = templateName ? templates.find((t) => t.id === templateName) : void 0, documentType = template == null ? void 0 : template.schemaType;
    return documentType ? { ...options, type: documentType } : options;
  }, [options, params.template, templates]);
}
function mergeDocumentType(props, options, documentType) {
  return {
    ...props,
    pane: {
      ...props.pane,
      options: { ...options, type: documentType }
    }
  };
}
var PARTIAL_PAGE_LIMIT = 100;
var FULL_LIST_LIMIT = 2e3;
var DEFAULT_ORDERING = { by: [{ field: "_updatedAt", direction: "desc" }] };
var EMPTY_RECORD = {};
var RootBox = pt(Box)`
  position: relative;
`;
var CommandListBox = pt(Box)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
var SKELETON_ITEMS = [...Array(30).keys()];
function LoadingView(props) {
  const { layout } = props;
  return (0, import_jsx_runtime.jsx)(Stack, { paddingX: 3, paddingY: 2, paddingTop: 0, space: 1, children: SKELETON_ITEMS.map((num) => (0, import_jsx_runtime.jsx)(SanityDefaultPreview, { isPlaceholder: true, layout }, num)) });
}
function DocumentListPaneContent(props) {
  const {
    childItemId,
    error,
    filterIsSimpleTypeConstraint,
    hasMaxItems,
    hasSearchQuery,
    isActive,
    isLazyLoading,
    isLoading,
    items,
    layout,
    loadingVariant,
    onListChange,
    onRetry,
    paneTitle,
    searchInputElement,
    showIcons
  } = props, schema = useSchema(), { collapsed: layoutCollapsed } = usePaneLayout(), { collapsed, index } = usePane(), [shouldRender, setShouldRender] = (0, import_react.useState)(false), { t } = useTranslation2(structureLocaleNamespace), handleEndReached = (0, import_react.useCallback)(() => {
    isLoading || isLazyLoading || !shouldRender || onListChange();
  }, [isLazyLoading, isLoading, onListChange, shouldRender]);
  (0, import_react.useEffect)(() => {
    if (collapsed)
      return;
    const timer2 = setTimeout(() => {
      setShouldRender(true);
    }, 0);
    return () => {
      clearTimeout(timer2);
    };
  }, [collapsed, items]);
  const renderItem = (0, import_react.useCallback)(
    (item, { activeIndex }) => {
      const publishedId = getPublishedId(item._id), isSelected = childItemId === publishedId, pressed = !isActive && isSelected, selected = isActive && isSelected, isLastItem = activeIndex === items.length - 1, showSpinner = isLastItem && isLazyLoading, showMaxItemsMessage = isLastItem && hasMaxItems;
      return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        (0, import_jsx_runtime.jsx)(
          PaneItem,
          {
            icon: showIcons === false ? false : void 0,
            id: publishedId,
            layout,
            marginBottom: 1,
            pressed,
            schemaType: schema.get(item._type),
            selected,
            value: item
          }
        ),
        showSpinner && (0, import_jsx_runtime.jsx)(LoadingBlock, {}),
        showMaxItemsMessage && (0, import_jsx_runtime.jsx)(Box, { marginY: 1, paddingX: 3, paddingY: 4, children: (0, import_jsx_runtime.jsx)(Text, { align: "center", muted: true, size: 1, children: t("panes.document-list-pane.max-items.text", { limit: FULL_LIST_LIMIT }) }) })
      ] });
    },
    [childItemId, isActive, items.length, layout, schema, showIcons, hasMaxItems, isLazyLoading, t]
  ), noDocumentsContent = (0, import_react.useMemo)(() => hasSearchQuery ? (0, import_jsx_runtime.jsx)(Flex, { align: "center", direction: "column", height: "fill", justify: "center", children: (0, import_jsx_runtime.jsx)(Container, { width: 1, children: (0, import_jsx_runtime.jsx)(Box, { paddingX: 4, paddingY: 5, children: (0, import_jsx_runtime.jsx)(Text, { align: "center", muted: true, children: t("panes.document-list-pane.no-documents.text") }) }) }) }) : (0, import_jsx_runtime.jsx)(Flex, { align: "center", direction: "column", height: "fill", justify: "center", children: (0, import_jsx_runtime.jsx)(Container, { width: 1, children: (0, import_jsx_runtime.jsx)(Box, { paddingX: 4, paddingY: 5, children: (0, import_jsx_runtime.jsx)(Text, { align: "center", muted: true, children: t(filterIsSimpleTypeConstraint ? "panes.document-list-pane.no-documents-of-type.text" : "panes.document-list-pane.no-matching-documents.text") }) }) }) }), [filterIsSimpleTypeConstraint, hasSearchQuery, t]), mainContent = (0, import_react.useMemo)(() => {
    if (!shouldRender)
      return null;
    if (error)
      return (0, import_jsx_runtime.jsx)(Flex, { align: "center", direction: "column", height: "fill", justify: "center", children: (0, import_jsx_runtime.jsx)(Container, { width: 1, children: (0, import_jsx_runtime.jsxs)(Stack, { paddingX: 4, paddingY: 5, space: 4, children: [
        (0, import_jsx_runtime.jsx)(Heading, { as: "h3", children: t("panes.document-list-pane.error.title") }),
        (0, import_jsx_runtime.jsx)(Text, { as: "p", children: (0, import_jsx_runtime.jsx)(
          Translate,
          {
            t,
            i18nKey: "panes.document-list-pane.error.text",
            values: { error: error.message },
            components: { Code: ({ children }) => (0, import_jsx_runtime.jsx)("code", { children }) }
          }
        ) }),
        onRetry && (0, import_jsx_runtime.jsx)(Box, { children: (0, import_jsx_runtime.jsx)(
          Button2,
          {
            icon: SyncIcon,
            onClick: onRetry,
            text: t("panes.document-list-pane.error.retry-button.text"),
            tone: "primary"
          }
        ) })
      ] }) }) });
    if (!isLoading && items.length === 0)
      return noDocumentsContent;
    if (loadingVariant === "initial" && isLoading)
      return (0, import_jsx_runtime.jsx)(Delay, { ms: 300, children: (0, import_jsx_runtime.jsx)(LoadingView, { layout }) });
    if (loadingVariant === "spinner" && isLoading)
      return null;
    const key = `${index}-${collapsed}`;
    return (0, import_jsx_runtime.jsx)(RootBox, { overflow: "hidden", height: "fill", children: (0, import_jsx_runtime.jsx)(CommandListBox, { children: (0, import_jsx_runtime.jsx)(
      CommandList,
      {
        activeItemDataAttr: "data-hovered",
        ariaLabel: paneTitle,
        canReceiveFocus: true,
        inputElement: searchInputElement,
        itemHeight: 51,
        items,
        onEndReached: handleEndReached,
        onlyShowSelectionWhenActive: true,
        overscan: 10,
        paddingBottom: 1,
        paddingX: 3,
        renderItem,
        wrapAround: false
      },
      key
    ) }) });
  }, [
    collapsed,
    error,
    handleEndReached,
    index,
    isLoading,
    items,
    layout,
    loadingVariant,
    // noDocumentsContent,
    onRetry,
    renderItem,
    searchInputElement,
    shouldRender
  ]);
  return (0, import_jsx_runtime.jsx)(
    PaneContent,
    {
      "data-testid": "document-list-pane",
      overflow: layoutCollapsed || loadingVariant === "initial" ? "hidden" : "auto",
      children: mainContent
    }
  );
}
function removePublishedWithDrafts(documents) {
  return collate(documents).map((entry) => ({
    ...entry.draft || entry.published,
    hasPublished: !!entry.published,
    hasDraft: !!entry.draft
  }));
}
function applyOrderingFunctions(order, schemaType) {
  const orderBy = order.by.map((by) => {
    if (by.mapWith)
      return by;
    const fieldType = tryResolveSchemaTypeForPath(schemaType, by.field);
    return fieldType ? fieldExtendsType(fieldType, "datetime") ? { ...by, mapWith: "dateTime" } : fieldType.jsonType === "string" ? { ...by, mapWith: "lower" } : by : by;
  });
  return orderBy.every((item, index) => item === order.by[index]) ? order : { ...order, by: orderBy };
}
function tryResolveSchemaTypeForPath(baseType, path) {
  const pathSegments = fromString(path);
  let current = baseType;
  for (const segment of pathSegments) {
    if (!current)
      return;
    if (typeof segment == "string") {
      current = getFieldTypeByName(current, segment);
      continue;
    }
    if (!(isKeySegment(segment) || isIndexSegment(segment)) || current.jsonType !== "array")
      return;
    const [memberType, otherType] = current.of || [];
    if (otherType || !memberType)
      return;
    if (!isReferenceSchemaType(memberType)) {
      current = memberType;
      continue;
    }
    const [refType, otherRefType] = memberType.to || [];
    if (otherRefType || !refType)
      return;
    current = refType;
  }
  return current;
}
function getFieldTypeByName(type, fieldName) {
  if (!("fields" in type))
    return;
  const fieldType = type.fields.find((field) => field.name === fieldName);
  return fieldType ? fieldType.type : void 0;
}
function fieldExtendsType(field, ofType) {
  let current = field.type;
  for (; current; ) {
    if (current.name === ofType || !current.type && current.jsonType === ofType)
      return true;
    current = current.type;
  }
  return false;
}
function findTypes(node) {
  switch (node.type) {
    case "OpCall": {
      const { left, right } = node;
      switch (node.op) {
        case "==":
          return left.type === "AccessAttribute" && left.name === "_type" && !left.base ? right.type !== "Value" || typeof right.value != "string" ? null : /* @__PURE__ */ new Set([right.value]) : right.type === "AccessAttribute" && right.name === "_type" && !right.base ? left.type !== "Value" || typeof left.value != "string" ? null : /* @__PURE__ */ new Set([left.value]) : null;
        case "in": {
          if (left.type !== "AccessAttribute" || left.name !== "_type" || left.base || right.type !== "Array")
            return null;
          const types = /* @__PURE__ */ new Set();
          for (const element of right.elements) {
            if (element.isSplat || element.value.type !== "Value" || typeof element.value.value != "string")
              return null;
            types.add(element.value.value);
          }
          return types.size ? types : null;
        }
        default:
          return null;
      }
    }
    case "Group":
      return findTypes(node.base);
    case "Or": {
      const left = findTypes(node.left);
      if (!left)
        return null;
      const right = findTypes(node.right);
      return right ? /* @__PURE__ */ new Set([...left, ...right]) : null;
    }
    case "And": {
      const left = findTypes(node.left), right = findTypes(node.right);
      return !left && !right ? null : /* @__PURE__ */ new Set([...left || [], ...right || []]);
    }
    default:
      return null;
  }
}
function findStaticTypesInFilter(filter2, params = {}) {
  try {
    const types = findTypes(parse(filter2, { params }));
    return types ? Array.from(types).sort() : null;
  } catch {
    return null;
  }
}
var IMPLICIT_SCHEMA_TYPE_FIELDS = ["_id", "_type", "_createdAt", "_updatedAt", "_rev"];
function joinReferences(schemaType, path, strict = false) {
  const [head, ...tail] = path;
  if (!("fields" in schemaType))
    return "";
  const schemaField = schemaType.fields.find((field) => field.name === head);
  if (!schemaField) {
    if (!IMPLICIT_SCHEMA_TYPE_FIELDS.includes(head)) {
      const errorMessage = `The current ordering config targeted the nonexistent field "${head}" on schema type "${schemaType.name}". It should be one of ${schemaType.fields.map((field) => field.name).join(", ")}`;
      if (strict)
        throw new Error(errorMessage);
      console.warn(errorMessage);
    }
    return "";
  }
  if ("to" in schemaField.type && schemaField.type.name === "reference") {
    const refTypes = schemaField.type.to;
    return `${head}->{${refTypes.map((refType) => joinReferences(refType, tail)).join(",")}}`;
  }
  const tailFields = tail.length > 0 && joinReferences(schemaField.type, tail), tailWrapper = tailFields ? `{${tailFields}}` : "";
  return tail.length > 0 ? `${head}${tailWrapper}` : head;
}
function getExtendedProjection(schemaType, orderBy, strict = false) {
  return orderBy.map((ordering) => joinReferences(schemaType, ordering.field.split("."), strict)).join(", ");
}
function listenSearchQuery(options) {
  const {
    client,
    schema,
    sort,
    limit,
    params,
    filter: filter2,
    searchQuery,
    staticTypeNames,
    maxFieldDepth,
    enableLegacySearch
  } = options, sortBy = sort.by, extendedProjection = sort == null ? void 0 : sort.extendedProjection, events$ = defer(() => client.listen(`*[${filter2}]`, params, {
    events: ["welcome", "mutation", "reconnect"],
    includeResult: false,
    visibility: "query"
  })).pipe(
    mergeMap((ev, i) => i === 0 && ev.type !== "welcome" ? throwError(
      () => new Error(
        ev.type === "reconnect" ? "Could not establish EventSource connection" : `Received unexpected type of first event "${ev.type}"`
      )
    ) : of(ev)),
    share()
  ), [welcome$, mutationAndReconnect$] = partition(events$, (ev) => ev.type === "welcome");
  return merge(
    welcome$.pipe(take(1)),
    mutationAndReconnect$.pipe(throttleTime(1e3, asyncScheduler, { leading: true, trailing: true }))
  ).pipe(
    exhaustMapWithTrailing((event) => (staticTypeNames ? of(staticTypeNames) : client.observable.fetch(`array::unique(*[${filter2}][]._type)`, params)).pipe(
      mergeMap((typeNames) => {
        const types = getSearchableTypes(schema).filter((type) => typeNames.includes(type.name) ? (getExtendedProjection(type, sort.by, true), true) : false), search = createSearch(types, client, {
          filter: filter2,
          params,
          enableLegacySearch,
          maxDepth: maxFieldDepth
        }), doFetch = () => search({
          query: searchQuery || "",
          types
        }, {
          __unstable_extendedProjection: extendedProjection,
          comments: [`findability-source: ${searchQuery ? "list-query" : "list"}`],
          limit,
          skipSortByScore: true,
          sort: sortBy
        }).pipe(
          map(
            (result) => (
              // eslint-disable-next-line max-nested-callbacks
              result.hits.map(({ hit }) => hit)
            )
          )
        );
        return event.type === "mutation" && event.visibility !== "query" ? timer(1200).pipe(mergeMap(doFetch)) : doFetch();
      })
    ))
  );
}
var EMPTY_ARRAY = [];
var INITIAL_STATE = {
  error: null,
  onRetry: void 0,
  result: null
};
var INITIAL_QUERY_RESULTS = {
  result: null,
  error: null
};
function useDocumentList(opts) {
  const { filter: filter2, params: paramsProp, sortOrder, searchQuery, apiVersion } = opts, client = useClient({
    ...DEFAULT_STUDIO_CLIENT_OPTIONS,
    apiVersion: apiVersion || DEFAULT_STUDIO_CLIENT_OPTIONS.apiVersion
  }), { enableLegacySearch = false } = useWorkspace().search, schema = useSchema(), maxFieldDepth = useSearchMaxFieldDepth(), [resultState, setResult] = (0, import_react.useState)(INITIAL_STATE), { onRetry, error, result } = resultState, documents = result == null ? void 0 : result.documents, items = (0, import_react.useMemo)(
    () => documents ? removePublishedWithDrafts(documents) : EMPTY_ARRAY,
    [documents]
  ), [isLazyLoading, setIsLazyLoading] = (0, import_react.useState)(false), [hasFullList, setHasFullList] = (0, import_react.useState)(false), [shouldFetchFullList, setShouldFetchFullList] = (0, import_react.useState)(false), typeNameFromFilter = (0, import_react.useMemo)(
    () => findStaticTypesInFilter(filter2, paramsProp),
    [filter2, paramsProp]
  ), isLoading = result === null && !error, hasMaxItems = (documents == null ? void 0 : documents.length) === FULL_LIST_LIMIT, onListChange = (0, import_react.useCallback)(() => {
    isLoading || hasFullList || shouldFetchFullList || setShouldFetchFullList(true);
  }, [isLoading, hasFullList, shouldFetchFullList]), handleSetResult = (0, import_react.useCallback)(
    (res) => {
      var _a, _b;
      if (res.error) {
        setResult(res);
        return;
      }
      const documentsLength = ((_b = (_a = res.result) == null ? void 0 : _a.documents) == null ? void 0 : _b.length) || 0;
      if (!res.error && (res == null ? void 0 : res.result) === null && shouldFetchFullList) {
        setIsLazyLoading(true);
        return;
      }
      if (documentsLength < PARTIAL_PAGE_LIMIT && documentsLength !== 0 && !shouldFetchFullList && setHasFullList(true), (res == null ? void 0 : res.result) === null) {
        setResult((prev) => ({ ...prev.error ? res : prev }));
        return;
      }
      setIsLazyLoading(false), setResult(res);
    },
    [shouldFetchFullList]
  ), queryResults$ = (0, import_react.useMemo)(() => {
    const onRetry$ = new Subject(), _onRetry = () => onRetry$.next();
    return listenSearchQuery({
      client,
      filter: filter2,
      limit: shouldFetchFullList ? FULL_LIST_LIMIT : PARTIAL_PAGE_LIMIT,
      params: paramsProp,
      schema,
      searchQuery: searchQuery || "",
      sort: sortOrder || DEFAULT_ORDERING,
      staticTypeNames: typeNameFromFilter,
      maxFieldDepth,
      enableLegacySearch
    }).pipe(
      map((results) => ({
        result: { documents: results },
        error: null
      })),
      startWith(INITIAL_QUERY_RESULTS),
      catchError((err) => err instanceof ProgressEvent ? throwError(() => new Error("Request error")) : throwError(() => err)),
      catchError((err, caught$) => concat(
        of({ result: null, error: err }),
        merge(fromEvent(window, "online"), onRetry$).pipe(
          take(1),
          mergeMap(() => caught$)
        )
      )),
      scan((prev, next) => ({ ...prev, ...next, onRetry: _onRetry }))
    );
  }, [
    shouldFetchFullList,
    sortOrder,
    client,
    filter2,
    paramsProp,
    schema,
    searchQuery,
    typeNameFromFilter,
    maxFieldDepth,
    enableLegacySearch
  ]);
  (0, import_react.useEffect)(() => {
    const sub = queryResults$.subscribe(handleSetResult);
    return () => {
      sub.unsubscribe();
    };
  }, [handleSetResult, queryResults$]);
  const reset = (0, import_react.useCallback)(() => {
    setHasFullList(false), setIsLazyLoading(false), setResult(INITIAL_STATE), setShouldFetchFullList(false);
  }, []);
  return (0, import_react.useEffect)(() => {
    reset();
  }, [reset, filter2, paramsProp, sortOrder, searchQuery]), {
    error,
    hasMaxItems,
    isLazyLoading,
    isLoading,
    isSearchReady: !error,
    items,
    onListChange,
    onRetry
  };
}
var rotate = ft`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
var AnimatedSpinnerIcon = pt(SpinnerIcon)`
  animation: ${rotate} 500ms linear infinite;
`;
var DocumentListPane = (0, import_react.memo)(function(props) {
  const { childItemId, isActive, pane, paneKey, sortOrder: sortOrderRaw, layout } = props, schema = useSchema(), { displayOptions, options } = pane, { apiVersion, filter: filter2 } = options, params = useShallowUnique(options.params || EMPTY_RECORD), typeName = (0, import_react.useMemo)(() => {
    const staticTypes = findStaticTypesInFilter(filter2, params);
    return (staticTypes == null ? void 0 : staticTypes.length) === 1 ? staticTypes[0] : null;
  }, [filter2, params]), showIcons = (displayOptions == null ? void 0 : displayOptions.showIcons) !== false, { t } = useTranslation2(structureLocaleNamespace), { title } = useI18nText(pane), [searchQuery, setSearchQuery] = (0, import_react.useState)(""), [searchInputValue, setSearchInputValue] = (0, import_react.useState)(""), [searchInputElement, setSearchInputElement] = (0, import_react.useState)(null), showSearchLoadingRef = (0, import_react.useRef)(false), sortWithOrderingFn = typeName && sortOrderRaw ? applyOrderingFunctions(sortOrderRaw, schema.get(typeName)) : sortOrderRaw, sortOrder = useUnique(sortWithOrderingFn), {
    error,
    hasMaxItems,
    isLazyLoading,
    isLoading,
    isSearchReady,
    items,
    onListChange,
    onRetry
  } = useDocumentList({
    apiVersion,
    filter: filter2,
    params,
    searchQuery: searchQuery == null ? void 0 : searchQuery.trim(),
    sortOrder
  }), handleQueryChange = useObservableCallback(
    (event$) => event$.pipe(
      map((event) => event.target.value),
      tap(setSearchInputValue),
      debounce((value) => value === "" ? of("") : timer(300)),
      tap(setSearchQuery)
    ),
    []
  ), handleClearSearch = (0, import_react.useCallback)(() => {
    setSearchQuery(""), setSearchInputValue("");
  }, []), handleSearchKeyDown = (0, import_react.useCallback)(
    (event) => {
      event.key === "Escape" && handleClearSearch();
    },
    [handleClearSearch]
  );
  (0, import_react.useEffect)(() => (showSearchLoadingRef.current === false && !isLoading && (showSearchLoadingRef.current = true), () => {
    showSearchLoadingRef.current = false;
  }), [isLoading]), (0, import_react.useEffect)(() => {
    handleClearSearch(), showSearchLoadingRef.current = false;
  }, [paneKey, handleClearSearch]);
  const loadingVariant = (0, import_react.useMemo)(() => isLoading && items.length === 0 && showSearchLoadingRef.current ? "spinner" : "initial", [isLoading, items.length]);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    (0, import_jsx_runtime.jsx)(Box, { paddingX: 3, paddingBottom: 3, children: (0, import_jsx_runtime.jsx)(
      TextInput,
      {
        "aria-label": t("panes.document-list-pane.search-input.aria-label"),
        autoComplete: "off",
        border: false,
        clearButton: !!searchQuery,
        disabled: !isSearchReady,
        fontSize: [2, 2, 1],
        icon: loadingVariant === "spinner" ? AnimatedSpinnerIcon : SearchIcon,
        onChange: handleQueryChange,
        onClear: handleClearSearch,
        onKeyDown: handleSearchKeyDown,
        padding: 2,
        placeholder: t("panes.document-list-pane.search-input.placeholder"),
        radius: 2,
        ref: setSearchInputElement,
        spellCheck: false,
        value: searchInputValue
      }
    ) }),
    (0, import_jsx_runtime.jsx)(
      DocumentListPaneContent,
      {
        childItemId,
        error,
        filterIsSimpleTypeConstraint: !!typeName,
        hasMaxItems,
        hasSearchQuery: !!searchQuery,
        isActive,
        isLazyLoading,
        isLoading,
        items,
        layout,
        loadingVariant,
        onListChange,
        onRetry,
        paneTitle: title,
        searchInputElement,
        showIcons
      },
      paneKey
    )
  ] });
});
function DocumentSheetListPane() {
  return (0, import_jsx_runtime.jsx)("div", { "data-testid": "document-sheet-list-pane", children: (0, import_jsx_runtime.jsx)(Text, { children: "SheetList view" }) });
}
var PaneHeader = (0, import_react.memo)(
  ({
    contentAfter,
    index,
    initialValueTemplates = [],
    menuItemGroups = [],
    menuItems = [],
    setLayout,
    setSortOrder,
    title
  }) => {
    const { features } = useStructureTool(), { collapsed, isLast } = usePane(), tabIndex = isLast && !collapsed ? -1 : 0, actionHandlers = (0, import_react.useMemo)(() => ({
      setLayout: ({ layout: value }) => {
        setLayout(value);
      },
      setSortOrder: (sort) => {
        setSortOrder(sort);
      }
    }), [setLayout, setSortOrder]);
    return (0, import_jsx_runtime.jsx)(TooltipDelayGroupProvider, { children: (0, import_jsx_runtime.jsx)(
      PaneHeader$1,
      {
        actions: (0, import_jsx_runtime.jsx)(
          PaneHeaderActions,
          {
            initialValueTemplateItems: initialValueTemplates,
            actionHandlers,
            menuItemGroups,
            menuItems
          }
        ),
        backButton: features.backButton && index > 0 && (0, import_jsx_runtime.jsx)(
          Button2,
          {
            as: BackLink,
            "data-as": "a",
            icon: ArrowLeftIcon,
            mode: "bleed",
            tooltipProps: { content: "Back" }
          }
        ),
        contentAfter,
        tabIndex,
        title
      }
    ) });
  }
);
PaneHeader.displayName = "PaneHeader";
var addSelectedStateToMenuItems = (options) => {
  const { menuItems, sortOrderRaw, layout } = options;
  return menuItems == null ? void 0 : menuItems.map((item) => {
    var _a, _b, _c, _d;
    return (_a = item.params) != null && _a.layout ? {
      ...item,
      selected: layout === ((_b = item.params) == null ? void 0 : _b.layout)
    } : (_c = item == null ? void 0 : item.params) != null && _c.by ? {
      ...item,
      selected: (0, import_isEqual.default)(sortOrderRaw == null ? void 0 : sortOrderRaw.by, ((_d = item == null ? void 0 : item.params) == null ? void 0 : _d.by) || EMPTY_ARRAY$t)
    } : { ...item, selected: false };
  });
};
function useShallowUnique(value) {
  const valueRef = (0, import_react.useRef)(value);
  return (0, import_shallow_equals.default)(valueRef.current, value) || (valueRef.current = value), valueRef.current;
}
var PaneContainer = (0, import_react.memo)(function(props) {
  const { index, isSelected, pane, paneKey } = props, { name: parentSourceName } = useSource(), {
    defaultLayout = "default",
    initialValueTemplates = EMPTY_ARRAY$t,
    menuItemGroups,
    menuItems,
    options
  } = pane, { defaultOrdering = EMPTY_ARRAY$t, filter: filter2 } = options, params = useShallowUnique(options.params || EMPTY_RECORD), sourceName = pane.source, typeName = (0, import_react.useMemo)(() => {
    const staticTypes = findStaticTypesInFilter(filter2, params);
    return (staticTypes == null ? void 0 : staticTypes.length) === 1 ? staticTypes[0] : null;
  }, [filter2, params]), [layout, setLayout] = useStructureToolSetting(
    "layout",
    typeName != null ? typeName : pane.id,
    //pane.id for anything that is not documentTypeList
    defaultLayout
  ), { title } = useI18nText(pane), defaultSortOrder = (0, import_react.useMemo)(() => (defaultOrdering == null ? void 0 : defaultOrdering.length) > 0 ? { by: defaultOrdering } : DEFAULT_ORDERING, [defaultOrdering]), [sortOrderRaw, setSortOrder] = useStructureToolSetting(
    "sort-order",
    typeName != null ? typeName : pane.id,
    //pane.id for anything that is not documentTypeList
    defaultSortOrder
  ), menuItemsWithSelectedState = (0, import_react.useMemo)(
    () => addSelectedStateToMenuItems({
      menuItems,
      sortOrderRaw,
      layout
    }),
    [layout, menuItems, sortOrderRaw]
  ), isSheetListLayout = layout === "sheetList", paneLayout = isSheetListLayout ? (0, import_jsx_runtime.jsx)(DocumentSheetListPane, {}) : (0, import_jsx_runtime.jsx)(DocumentListPane, { ...props, sortOrder: sortOrderRaw, layout });
  return (0, import_jsx_runtime.jsx)(SourceProvider, { name: sourceName || parentSourceName, children: (0, import_jsx_runtime.jsxs)(
    Pane,
    {
      "data-ui": "DocumentListPane",
      id: paneKey,
      minWidth: 320,
      ...isSheetListLayout ? {} : { currentMaxWidth: 350, maxWidth: 640 },
      selected: isSelected,
      children: [
        _DEBUG,
        (0, import_jsx_runtime.jsx)(
          PaneHeader,
          {
            index,
            initialValueTemplates,
            menuItemGroups,
            menuItems: menuItemsWithSelectedState,
            setLayout,
            setSortOrder,
            title
          }
        ),
        paneLayout
      ]
    }
  ) });
});
var __defProp$e = Object.defineProperty;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$e = (obj, key, value) => __defNormalProp$e(obj, typeof key != "symbol" ? key + "" : key, value);
var SerializeError = class extends Error {
  constructor(message, parentPath, pathSegment, hint) {
    super(message), __publicField$e(this, "path"), __publicField$e(this, "helpId"), this.name = "SerializeError";
    const segment = typeof pathSegment > "u" ? "<unknown>" : `${pathSegment}`;
    this.path = (parentPath || []).concat(hint ? `${segment} (${hint})` : segment);
  }
  withHelpUrl(id) {
    return this.helpId = id, this;
  }
};
var HELP_URL = ((HELP_URL2) => (HELP_URL2.ID_REQUIRED = "structure-node-id-required", HELP_URL2.TITLE_REQUIRED = "structure-title-required", HELP_URL2.FILTER_REQUIRED = "structure-filter-required", HELP_URL2.INVALID_LIST_ITEM = "structure-invalid-list-item", HELP_URL2.COMPONENT_REQUIRED = "structure-view-component-required", HELP_URL2.DOCUMENT_ID_REQUIRED = "structure-document-id-required", HELP_URL2.DOCUMENT_TYPE_REQUIRED = "structure-document-type-required", HELP_URL2.SCHEMA_TYPE_REQUIRED = "structure-schema-type-required", HELP_URL2.SCHEMA_TYPE_NOT_FOUND = "structure-schema-type-not-found", HELP_URL2.LIST_ITEMS_MUST_BE_ARRAY = "structure-list-items-must-be-array", HELP_URL2.QUERY_PROVIDED_FOR_FILTER = "structure-query-provided-for-filter", HELP_URL2.ACTION_OR_INTENT_REQUIRED = "structure-action-or-intent-required", HELP_URL2.LIST_ITEM_IDS_MUST_BE_UNIQUE = "structure-list-item-ids-must-be-unique", HELP_URL2.ACTION_AND_INTENT_MUTUALLY_EXCLUSIVE = "structure-action-and-intent-mutually-exclusive", HELP_URL2.API_VERSION_REQUIRED_FOR_CUSTOM_FILTER = "structure-api-version-required-for-custom-filter", HELP_URL2))(HELP_URL || {});
var ORDER_BY_UPDATED_AT = {
  title: "Last edited",
  i18n: {
    title: {
      key: "menu-items.sort-by.last-edited",
      ns: structureLocaleNamespace
    }
  },
  name: "lastEditedDesc",
  by: [{ field: "_updatedAt", direction: "desc" }]
};
var ORDER_BY_CREATED_AT = {
  title: "Created",
  i18n: {
    title: {
      key: "menu-items.sort-by.created",
      ns: structureLocaleNamespace
    }
  },
  name: "lastCreatedDesc",
  by: [{ field: "_createdAt", direction: "desc" }]
};
var DEFAULT_SELECTED_ORDERING_OPTION = ORDER_BY_UPDATED_AT;
var DEFAULT_ORDERING_OPTIONS = [
  ORDER_BY_UPDATED_AT,
  // _updatedAt
  ORDER_BY_CREATED_AT
  // _createdAt
];
var __defProp$d = Object.defineProperty;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$d = (obj, key, value) => __defNormalProp$d(obj, key + "", value);
function maybeSerializeMenuItem(item, index, path) {
  return item instanceof MenuItemBuilder ? item.serialize({ path, index }) : item;
}
var MenuItemBuilder = class _MenuItemBuilder {
  constructor(_context, spec) {
    this._context = _context, __publicField$d(this, "spec"), this.spec = spec || {};
  }
  /**
   * Set menu item action
   * @param action - menu item action. See {@link MenuItemActionType}
   * @returns menu item builder based on action provided. See {@link MenuItemBuilder}
   */
  action(action) {
    return this.clone({ action });
  }
  /**
   * Get menu item action
   * @returns menu item builder action. See {@link PartialMenuItem}
   */
  getAction() {
    return this.spec.action;
  }
  /**
   * Set menu item intent
   * @param intent - menu item intent. See {@link Intent}
   * @returns menu item builder based on intent provided. See {@link MenuItemBuilder}
   */
  intent(intent) {
    return this.clone({ intent });
  }
  /**
   * Get menu item intent
   * @returns menu item intent. See {@link PartialMenuItem}
   */
  getIntent() {
    return this.spec.intent;
  }
  /**
   * Set menu item title
   * @param title - menu item title
   * @returns menu item builder based on title provided. See {@link MenuItemBuilder}
   */
  title(title) {
    return this.clone({ title });
  }
  /**
   * Get menu item title. Note that the `i18n` configuration will take
   * precedence and this title is left here for compatibility.
   * @returns menu item title
   */
  getTitle() {
    return this.spec.title;
  }
  /**
   * Set the i18n key and namespace used to populate the localized title.
   * @param i18n - object with i18n key and related namespace
   * @returns menu item builder based on i18n config provided. See {@link MenuItemBuilder}
   */
  i18n(i18n) {
    return this.clone({ i18n });
  }
  /**
   * Get the i18n key and namespace used to populate the localized title.
   * @returns the i18n key and namespace used to populate the localized title.
   */
  getI18n() {
    return this.spec.i18n;
  }
  /**
   * Set menu item group
   * @param group - menu item group
   * @returns menu item builder based on group provided. See {@link MenuItemBuilder}
   */
  group(group) {
    return this.clone({ group });
  }
  /**
   * Get menu item group
   * @returns menu item group. See {@link PartialMenuItem}
   */
  getGroup() {
    return this.spec.group;
  }
  /**
   * Set menu item icon
   * @param icon - menu item icon
   * @returns menu item builder based on icon provided. See {@link MenuItemBuilder}
   */
  icon(icon) {
    return this.clone({ icon });
  }
  /**
   * Get menu item icon
   * @returns menu item icon. See {@link PartialMenuItem}
   */
  getIcon() {
    return this.spec.icon;
  }
  /**
   * Set menu item parameters
   * @param params - menu item parameters. See {@link MenuItemParamsType}
   * @returns menu item builder based on parameters provided. See {@link MenuItemBuilder}
   */
  params(params) {
    return this.clone({ params });
  }
  /**
   * Get meny item parameters
   * @returns menu item parameters. See {@link PartialMenuItem}
   */
  getParams() {
    return this.spec.params;
  }
  /**
   * Set menu item to show as action
   * @param showAsAction - determine if menu item should show as action
   * @returns menu item builder based on if it should show as action. See {@link MenuItemBuilder}
   */
  showAsAction(showAsAction = true) {
    return this.clone({ showAsAction: !!showAsAction });
  }
  /**
   * Check if menu item should show as action
   * @returns true if menu item should show as action, false if not. See {@link PartialMenuItem}
   */
  getShowAsAction() {
    return this.spec.showAsAction;
  }
  /** Serialize menu item builder
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns menu item node based on path provided in options. See {@link MenuItem}
   */
  serialize(options = { path: [] }) {
    const { title, action, intent } = this.spec;
    if (!title) {
      const hint = typeof action == "string" ? `action: "${action}"` : void 0;
      throw new SerializeError(
        "`title` is required for menu item",
        options.path,
        options.index,
        hint
      ).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    }
    if (!action && !intent)
      throw new SerializeError(
        `\`action\` or \`intent\` required for menu item with title ${this.spec.title}`,
        options.path,
        options.index,
        `"${title}"`
      ).withHelpUrl(HELP_URL.ACTION_OR_INTENT_REQUIRED);
    if (intent && action)
      throw new SerializeError(
        "cannot set both `action` AND `intent`",
        options.path,
        options.index,
        `"${title}"`
      ).withHelpUrl(HELP_URL.ACTION_AND_INTENT_MUTUALLY_EXCLUSIVE);
    return { ...this.spec, title };
  }
  /** Clone menu item builder
   * @param withSpec - menu item options. See {@link PartialMenuItem}
   * @returns menu item builder based on context and spec provided. See {@link MenuItemBuilder}
   */
  clone(withSpec) {
    const builder = new _MenuItemBuilder(this._context);
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
function getOrderingMenuItem(context, { by, title, i18n }, extendedProjection) {
  let builder = new MenuItemBuilder(context).group("sorting").title(
    context.i18n.t("default-menu-item.fallback-title", {
      // note this lives in the `studio` bundle because that one is loaded by default
      ns: "studio",
      replace: { title }
      // replaces the `{{title}}` option
    })
  ).icon(SortIcon).action("setSortOrder").params({ by, extendedProjection });
  return i18n && (builder = builder.i18n(i18n)), builder;
}
function getOrderingMenuItemsForSchemaType(context, typeName) {
  const { schema } = context, type = typeof typeName == "string" ? schema.get(typeName) : typeName;
  return !type || !("orderings" in type) ? [] : (type.orderings ? type.orderings.concat(DEFAULT_ORDERING_OPTIONS) : DEFAULT_ORDERING_OPTIONS).map(
    (ordering) => getOrderingMenuItem(context, ordering, getExtendedProjection(type, ordering.by))
  );
}
var __defProp$c = Object.defineProperty;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$c = (obj, key, value) => __defNormalProp$c(obj, typeof key != "symbol" ? key + "" : key, value);
function maybeSerializeMenuItemGroup(item, index, path) {
  return item instanceof MenuItemGroupBuilder ? item.serialize({ path, index }) : item;
}
var MenuItemGroupBuilder = class _MenuItemGroupBuilder {
  constructor(_context, spec) {
    this._context = _context, __publicField$c(this, "_id"), __publicField$c(this, "_title"), __publicField$c(this, "_i18n"), this._id = spec ? spec.id : "", this._title = spec ? spec.title : "", this._i18n = spec ? spec.i18n : void 0;
  }
  /**
   * Set menu item group ID
   * @param id - menu item group ID
   * @returns menu item group builder based on ID provided. See {@link MenuItemGroupBuilder}
   */
  id(id) {
    return new _MenuItemGroupBuilder(this._context, { id, title: this._title, i18n: this._i18n });
  }
  /**
   * Get menu item group ID
   * @returns menu item group ID
   */
  getId() {
    return this._id;
  }
  /**
   * Set menu item group title
   * @param title - menu item group title
   * @returns menu item group builder based on title provided. See {@link MenuItemGroupBuilder}
   */
  title(title) {
    return new _MenuItemGroupBuilder(this._context, { title, id: this._id, i18n: this._i18n });
  }
  /**
   * Get menu item group title
   * @returns menu item group title
   */
  getTitle() {
    return this._title;
  }
  /**
   * Set the i18n key and namespace used to populate the localized title.
   * @param i18n - object with i18n key and related namespace
   * @returns menu item group builder based on i18n info provided. See {@link MenuItemGroupBuilder}
   */
  i18n(i18n) {
    return new _MenuItemGroupBuilder(this._context, { i18n, id: this._id, title: this._title });
  }
  /**
   * Get the i18n key and namespace used to populate the localized title.
   * @returns the i18n key and namespace used to populate the localized title.
   */
  getI18n() {
    return this._i18n;
  }
  /**
   * Serialize menu item group builder
   * @param options - serialization options (path). See {@link SerializeOptions}
   * @returns menu item group based on path provided in options. See {@link MenuItemGroup}
   */
  serialize(options = { path: [] }) {
    const { _id, _title, _i18n } = this;
    if (!_id)
      throw new SerializeError(
        "`id` is required for a menu item group",
        options.path,
        options.index,
        _title
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!_title)
      throw new SerializeError(
        "`title` is required for a menu item group",
        options.path,
        _id
      ).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    return {
      id: _id,
      title: _title,
      i18n: _i18n
    };
  }
};
var disallowedPattern = /([^A-Za-z0-9-_.])/;
function validateId(id, parentPath, pathSegment) {
  if (typeof id != "string")
    throw new SerializeError(
      `Structure node id must be of type string, got ${typeof id}`,
      parentPath,
      pathSegment
    );
  const [disallowedChar] = id.match(disallowedPattern) || [];
  if (disallowedChar)
    throw new SerializeError(
      `Structure node id cannot contain character "${disallowedChar}"`,
      parentPath,
      pathSegment
    );
  if (id.startsWith("__edit__"))
    throw new SerializeError(
      "Structure node id cannot start with __edit__",
      parentPath,
      pathSegment
    );
  return id;
}
function getStructureNodeId(title, id) {
  if (id)
    return id;
  const camelCased = (0, import_camelCase.default)(title);
  return disallowedPattern.test(camelCased) ? (0, import_camelCase.default)((0, import_speakingurl.default)(title)) : camelCased;
}
var __defProp$b = Object.defineProperty;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$b = (obj, key, value) => __defNormalProp$b(obj, key + "", value);
var ComponentBuilder = class _ComponentBuilder {
  constructor(spec) {
    __publicField$b(this, "spec"), this.spec = { options: {}, ...spec || {} };
  }
  /** Set Component ID
   * @param id - component ID
   * @returns component builder based on ID provided
   */
  id(id) {
    return this.clone({ id });
  }
  /** Get ID
   * @returns ID
   */
  getId() {
    return this.spec.id;
  }
  /** Set Component title
   * @param title - component title
   * @returns component builder based on title provided (and ID)
   */
  title(title) {
    return this.clone({ title, id: getStructureNodeId(title, this.spec.id) });
  }
  /** Get Component title
   * @returns title
   */
  getTitle() {
    return this.spec.title;
  }
  /** Set the i18n key and namespace used to populate the localized title.
   * @param i18n - the key and namespaced used to populate the localized title.
   * @returns component builder based on i18n key and ns provided
   */
  i18n(i18n) {
    return this.clone({ i18n });
  }
  /** Get i18n key and namespace used to populate the localized title
   * @returns the i18n key and namespace used to populate the localized title
   */
  getI18n() {
    return this.spec.i18n;
  }
  /** Set Component child
   * @param child - child component
   * @returns component builder based on child component provided
   */
  child(child) {
    return this.clone({ child });
  }
  /** Get Component child
   * @returns child component
   */
  getChild() {
    return this.spec.child;
  }
  /** Set component
   * @param component - user built component
   * @returns component builder based on component provided
   */
  component(component2) {
    return this.clone({ component: component2 });
  }
  /** Get Component
   * @returns component
   */
  getComponent() {
    return this.spec.component;
  }
  /** Set Component options
   * @param options - component options
   * @returns component builder based on options provided
   */
  options(options) {
    return this.clone({ options });
  }
  /** Get Component options
   * @returns component options
   */
  getOptions() {
    return this.spec.options || {};
  }
  /** Set Component menu items
   * @param menuItems - component menu items
   * @returns component builder based on menuItems provided
   */
  menuItems(menuItems) {
    return this.clone({ menuItems });
  }
  /** Get Component menu items
   * @returns menu items
   */
  getMenuItems() {
    return this.spec.menuItems;
  }
  /** Set Component menu item groups
   * @param menuItemGroups - component menu item groups
   * @returns component builder based on menuItemGroups provided
   */
  menuItemGroups(menuItemGroups) {
    return this.clone({ menuItemGroups });
  }
  /** Get Component menu item groups
   * @returns menu item groups
   */
  getMenuItemGroups() {
    return this.spec.menuItemGroups;
  }
  canHandleIntent(canHandleIntent) {
    return this.clone({ canHandleIntent });
  }
  /** Serialize component
   * @param options - serialization options
   * @returns component object based on path provided in options
   *
   */
  serialize(options = { path: [] }) {
    const { id, title, child, options: componentOptions, component: component2 } = this.spec;
    if (!id)
      throw new SerializeError(
        "`id` is required for `component` structure item",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!component2)
      throw new SerializeError(
        "`component` is required for `component` structure item",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    return {
      id: validateId(id, options.path, options.index),
      title,
      type: "component",
      child,
      component: component2,
      canHandleIntent: this.spec.canHandleIntent,
      options: componentOptions || {},
      menuItems: (this.spec.menuItems || []).map(
        (item, i) => maybeSerializeMenuItem(item, i, options.path)
      ),
      menuItemGroups: (this.spec.menuItemGroups || []).map(
        (item, i) => maybeSerializeMenuItemGroup(item, i, options.path)
      )
    };
  }
  /** Clone component builder (allows for options overriding)
   * @param withSpec - component builder options
   * @returns cloned builder
   */
  clone(withSpec) {
    const builder = new _ComponentBuilder();
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
async function resolveTypeForDocument(getClient, id) {
  const query = "*[_id in [$documentId, $draftId]]._type", documentId = getPublishedId(id), draftId = getDraftId(id);
  return (await getClient(DEFAULT_STUDIO_CLIENT_OPTIONS).fetch(
    query,
    { documentId, draftId },
    { tag: "structure.resolve-type" }
  ))[0];
}
var __defProp$a = Object.defineProperty;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$a = (obj, key, value) => __defNormalProp$a(obj, key + "", value);
var GenericViewBuilder = class {
  constructor() {
    __publicField$a(this, "spec", {});
  }
  /** Set generic view ID
   * @param id - generic view ID
   * @returns generic view builder based on ID provided.
   */
  id(id) {
    return this.clone({ id });
  }
  /** Get generic view ID
   * @returns generic view ID
   */
  getId() {
    return this.spec.id;
  }
  /** Set generic view title
   * @param title - generic view title
   * @returns generic view builder based on title provided and (if provided) its ID.
   */
  title(title) {
    return this.clone({ title, id: this.spec.id || (0, import_kebabCase.default)(title) });
  }
  /** Get generic view title
   * @returns generic view title
   */
  getTitle() {
    return this.spec.title;
  }
  /** Set generic view icon
   * @param icon - generic view icon
   * @returns generic view builder based on icon provided.
   */
  icon(icon) {
    return this.clone({ icon });
  }
  /** Get generic view icon
   * @returns generic view icon
   */
  getIcon() {
    return this.spec.icon;
  }
  /** Serialize generic view
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns generic view object based on path provided in options. See {@link BaseView}
   */
  serialize(options = { path: [] }) {
    const { id, title, icon } = this.spec;
    if (!id)
      throw new SerializeError(
        "`id` is required for view item",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!title)
      throw new SerializeError(
        "`title` is required for view item",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    return {
      id: validateId(id, options.path, options.index),
      title,
      icon
    };
  }
};
function isSerializable(view) {
  return typeof view.serialize == "function";
}
function maybeSerializeView(item, index, path) {
  return isSerializable(item) ? item.serialize({ path, index }) : item;
}
var __defProp$9 = Object.defineProperty;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$9 = (obj, key, value) => __defNormalProp$9(obj, key + "", value);
var isComponentSpec = (spec) => isRecord$4(spec) && spec.type === "component";
var ComponentViewBuilder = class _ComponentViewBuilder extends GenericViewBuilder {
  constructor(componentOrSpec) {
    const spec = isComponentSpec(componentOrSpec) ? { ...componentOrSpec } : { options: {} };
    super(), __publicField$9(this, "spec"), this.spec = spec;
    const userComponent = typeof componentOrSpec == "function" ? componentOrSpec : this.spec.component;
    userComponent && (this.spec = this.component(userComponent).spec);
  }
  /** Set view Component
   * @param component - component view component. See {@link UserViewComponent}
   * @returns component view builder based on component view provided. See {@link ComponentViewBuilder}
   */
  component(component2) {
    return this.clone({ component: component2 });
  }
  /** Get view Component
   * @returns Partial component view. See {@link ComponentView}
   */
  getComponent() {
    return this.spec.component;
  }
  /** Set view Component options
   * @param options - component view options
   * @returns component view builder based on options provided. See {@link ComponentViewBuilder}
   */
  options(options) {
    return this.clone({ options });
  }
  /** Get view Component options
   * @returns component view options. See {@link ComponentView}
   */
  getOptions() {
    return this.spec.options || {};
  }
  /** Serialize view Component
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns component view based on path provided in options. See {@link ComponentView}
   *
   */
  serialize(options = { path: [] }) {
    const base = super.serialize(options), component2 = this.spec.component;
    if (typeof component2 != "function")
      throw new SerializeError(
        "`component` is required and must be a function for `component()` view item",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.COMPONENT_REQUIRED);
    return {
      ...base,
      component: component2,
      options: this.spec.options || {},
      type: "component"
    };
  }
  /** Clone Component view builder (allows for options overriding)
   * @param withSpec - partial for component view option. See {@link ComponentView}
   * @returns component view builder. See {@link ComponentViewBuilder}
   */
  clone(withSpec) {
    const builder = new _ComponentViewBuilder();
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
var __defProp$8 = Object.defineProperty;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$8 = (obj, key, value) => __defNormalProp$8(obj, key + "", value);
var FormViewBuilder = class _FormViewBuilder extends GenericViewBuilder {
  constructor(spec) {
    super(), __publicField$8(this, "spec"), this.spec = { id: "editor", title: "Editor", ...spec || {} };
  }
  /**
   * Serialize Form view builder
   * @param options - Serialize options. See {@link SerializeOptions}
   * @returns form view builder based on path provided in options. See {@link FormView}
   */
  serialize(options = { path: [] }) {
    return {
      ...super.serialize(options),
      type: "form"
    };
  }
  /**
   * Clone Form view builder (allows for options overriding)
   * @param withSpec - Partial form view builder options. See {@link FormView}
   * @returns form view builder. See {@link FormViewBuilder}
   */
  clone(withSpec) {
    const builder = new _FormViewBuilder();
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
var form = (spec) => new FormViewBuilder(spec);
var component = (componentOrSpec) => new ComponentViewBuilder(componentOrSpec);
var views = Object.freeze({
  __proto__: null,
  ComponentViewBuilder,
  FormViewBuilder,
  GenericViewBuilder,
  component,
  form,
  maybeSerializeView
});
var __defProp$7 = Object.defineProperty;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$7 = (obj, key, value) => __defNormalProp$7(obj, key + "", value);
var createDocumentChildResolver = ({ resolveDocumentNode, getClient }) => async (itemId, { params, path }) => {
  let type = params.type;
  const parentPath = path.slice(0, path.length - 1), currentSegment = path[path.length - 1];
  if (type || (type = await resolveTypeForDocument(getClient, itemId)), !type)
    throw new SerializeError(
      "Failed to resolve document, and no type provided in parameters.",
      parentPath,
      currentSegment
    );
  return resolveDocumentNode({ documentId: itemId, schemaType: type });
};
var DocumentBuilder = class _DocumentBuilder {
  constructor(_context, spec) {
    this._context = _context, __publicField$7(this, "spec"), this.spec = spec || {};
  }
  /** Set Document Builder ID
   * @param id - document builder ID
   * @returns document builder based on ID provided. See {@link DocumentBuilder}
   */
  id(id) {
    return this.clone({ id });
  }
  /** Get Document Builder ID
   * @returns document ID. See {@link PartialDocumentNode}
   */
  getId() {
    return this.spec.id;
  }
  /** Set Document title
   * @param title - document title
   * @returns document builder based on title provided (and ID). See {@link DocumentBuilder}
   */
  title(title) {
    return this.clone({ title, id: getStructureNodeId(title, this.spec.id) });
  }
  /** Get Document title
   * @returns document title. See {@link PartialDocumentNode}
   */
  getTitle() {
    return this.spec.title;
  }
  /** Set the i18n key and namespace used to populate the localized title.
   * @param i18n - the key and namespaced used to populate the localized title.
   * @returns component builder based on i18n key and ns provided
   */
  i18n(i18n) {
    return this.clone({ i18n });
  }
  /** Get i18n key and namespace used to populate the localized title
   * @returns the i18n key and namespace used to populate the localized title
   */
  getI18n() {
    return this.spec.i18n;
  }
  /** Set Document child
   * @param child - document child
   * @returns document builder based on child provided. See {@link DocumentBuilder}
   */
  child(child) {
    return this.clone({ child });
  }
  /** Get Document child
   * @returns document child. See {@link PartialDocumentNode}
   */
  getChild() {
    return this.spec.child;
  }
  /** Set Document ID
   * @param documentId - document ID
   * @returns document builder with document based on ID provided. See {@link DocumentBuilder}
   */
  documentId(documentId) {
    const paneId = this.spec.id || documentId;
    return this.clone({
      id: paneId,
      options: {
        ...this.spec.options || {},
        id: documentId
      }
    });
  }
  /** Get Document ID
   * @returns document ID. See {@link DocumentOptions}
   */
  getDocumentId() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.id;
  }
  /** Set Document Type
   * @param documentType - document type
   * @returns document builder with document based on type provided. See {@link DocumentBuilder}
   */
  schemaType(documentType) {
    return this.clone({
      options: {
        ...this.spec.options || {},
        type: typeof documentType == "string" ? documentType : documentType.name
      }
    });
  }
  /** Get Document Type
   * @returns document type. See {@link DocumentOptions}
   */
  getSchemaType() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.type;
  }
  /** Set Document Template
   * @param templateId - document template ID
   * @param parameters - document template parameters
   * @returns document builder with document based on template provided. See {@link DocumentBuilder}
   */
  initialValueTemplate(templateId, parameters) {
    return this.clone({
      options: {
        ...this.spec.options || {},
        template: templateId,
        templateParameters: parameters
      }
    });
  }
  /** Get Document Template
   * @returns document template. See {@link DocumentOptions}
   */
  getInitialValueTemplate() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.template;
  }
  /** Get Document's initial value Template parameters
   * @returns document template parameters. See {@link DocumentOptions}
   */
  getInitialValueTemplateParameters() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.templateParameters;
  }
  /** Set Document views
   * @param views - document views. See {@link ViewBuilder} and {@link View}
   * @returns document builder with document based on views provided. See {@link DocumentBuilder}
   */
  views(views2) {
    return this.clone({ views: views2 });
  }
  /** Get Document views
   * @returns document views. See {@link ViewBuilder} and {@link View}
   */
  getViews() {
    return this.spec.views || [];
  }
  /** Serialize Document builder
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns document node based on path, index and hint provided in options. See {@link DocumentNode}
   */
  serialize({ path = [], index, hint } = { path: [] }) {
    const urlId = path[index || path.length - 1], id = this.spec.id || urlId && `${urlId}` || "", options = {
      id,
      type: void 0,
      template: void 0,
      templateParameters: void 0,
      ...this.spec.options
    };
    if (typeof id != "string" || !id)
      throw new SerializeError(
        "`id` is required for document nodes",
        path,
        index,
        hint
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!options || !options.id)
      throw new SerializeError(
        "document id (`id`) is required for document nodes",
        path,
        id,
        hint
      ).withHelpUrl(HELP_URL.DOCUMENT_ID_REQUIRED);
    if (!options || !options.type)
      throw new SerializeError(
        "document type (`schemaType`) is required for document nodes",
        path,
        id,
        hint
      );
    const views2 = (this.spec.views && this.spec.views.length > 0 ? this.spec.views : [form()]).map(
      (item, i) => maybeSerializeView(item, i, path)
    ), viewIds = views2.map((view) => view.id), dupes = (0, import_uniq.default)(viewIds.filter((viewId, i) => viewIds.includes(viewId, i + 1)));
    if (dupes.length > 0)
      throw new SerializeError(
        `document node has views with duplicate IDs: ${dupes.join(",  ")}`,
        path,
        id,
        hint
      );
    return {
      ...this.spec,
      child: this.spec.child || createDocumentChildResolver(this._context),
      id: validateId(id, path, index),
      type: "document",
      options: getDocumentOptions(options),
      views: views2
    };
  }
  /** Clone Document builder
   * @param withSpec - partial document node specification used to extend the cloned builder. See {@link PartialDocumentNode}
   * @returns document builder based on context and spec provided. See {@link DocumentBuilder}
   */
  clone(withSpec = {}) {
    const builder = new _DocumentBuilder(this._context), options = { ...this.spec.options || {}, ...withSpec.options || {} };
    return builder.spec = { ...this.spec, ...withSpec, options }, builder;
  }
};
function getDocumentOptions(spec) {
  const opts = {
    id: spec.id || "",
    type: spec.type || "*"
  };
  return spec.template && (opts.template = spec.template), spec.templateParameters && (opts.templateParameters = spec.templateParameters), opts;
}
function documentFromEditor(context, spec) {
  let doc = spec != null && spec.type ? (
    // Use user-defined document fragment as base if possible
    context.resolveDocumentNode({ schemaType: spec.type })
  ) : (
    // Fall back to plain old document builder
    new DocumentBuilder(context)
  );
  if (!spec)
    return doc;
  const { id, type, template, templateParameters } = spec.options;
  return doc = doc.id(spec.id).documentId(id), type && (doc = doc.schemaType(type)), template && (doc = doc.initialValueTemplate(template, templateParameters)), spec.child && (doc = doc.child(spec.child)), doc;
}
function documentFromEditorWithInitialValue({ resolveDocumentNode, templates }, templateId, parameters) {
  const template = templates.find((t) => t.id === templateId);
  if (!template)
    throw new Error(`Template with ID "${templateId}" not defined`);
  return resolveDocumentNode({ schemaType: template.schemaType }).initialValueTemplate(
    templateId,
    parameters
  );
}
var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => __defNormalProp$6(obj, key + "", value);
var InitialValueTemplateItemBuilder = class _InitialValueTemplateItemBuilder {
  constructor(_context, spec) {
    this._context = _context, __publicField$6(this, "spec"), this.spec = spec || {};
  }
  /** Set initial value template item builder ID
   * @param id - initial value template item ID
   * @returns initial value template item based on ID provided. See {@link InitialValueTemplateItemBuilder}
   */
  id(id) {
    return this.clone({ id });
  }
  /** Get initial value template item builder ID
   * @returns initial value template item ID. See {@link InitialValueTemplateItem}
   */
  getId() {
    return this.spec.id;
  }
  /** Set initial value template item title
   * @param title - initial value template item title
   * @returns initial value template item based on title provided. See {@link InitialValueTemplateItemBuilder}
   */
  title(title) {
    return this.clone({ title });
  }
  /** Get initial value template item title
   * @returns initial value template item title. See {@link InitialValueTemplateItem}
   */
  getTitle() {
    return this.spec.title;
  }
  /** Set initial value template item description
   * @param description - initial value template item description
   * @returns initial value template item builder based on description provided. See {@link InitialValueTemplateItemBuilder}
   */
  description(description) {
    return this.clone({ description });
  }
  /** Get initial value template item description
   * @returns initial value template item description. See {@link InitialValueTemplateItem}
   */
  getDescription() {
    return this.spec.description;
  }
  /** Set initial value template ID
   * @param templateId - initial value template item template ID
   * @returns initial value template item based builder on template ID provided. See {@link InitialValueTemplateItemBuilder}
   */
  templateId(templateId) {
    const paneId = this.spec.id || templateId;
    return this.clone({
      id: paneId,
      templateId
    });
  }
  /** Get initial value template item template ID
   * @returns initial value template item ID. See {@link InitialValueTemplateItem}
   */
  getTemplateId() {
    return this.spec.templateId;
  }
  /** Get initial value template item template parameters
   * @param parameters - initial value template item parameters
   * @returns initial value template item builder based on parameters provided. See {@link InitialValueTemplateItemBuilder}
   */
  parameters(parameters) {
    return this.clone({ parameters });
  }
  /** Get initial value template item template parameters
   * @returns initial value template item parameters. See {@link InitialValueTemplateItem}
   */
  getParameters() {
    return this.spec.parameters;
  }
  /** Serialize initial value template item
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns initial value template item object based on the path, index and hint provided in options. See {@link InitialValueTemplateItem}
   */
  serialize({ path = [], index, hint } = { path: [] }) {
    const { spec, _context } = this, { templates } = _context;
    if (typeof spec.id != "string" || !spec.id)
      throw new SerializeError(
        "`id` is required for initial value template item nodes",
        path,
        index,
        hint
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!spec.templateId)
      throw new SerializeError(
        "template id (`templateId`) is required for initial value template item nodes",
        path,
        spec.id,
        hint
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    const template = templates.find((t) => t.id === spec.templateId);
    if (!template)
      throw new SerializeError(
        "template id (`templateId`) is required for initial value template item nodes",
        path,
        spec.id,
        hint
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    return {
      id: spec.id,
      templateId: spec.id,
      schemaType: template.schemaType,
      type: "initialValueTemplateItem",
      description: spec.description || template.description,
      title: spec.title || template.title,
      subtitle: spec.subtitle,
      icon: spec.icon || template.icon,
      initialDocumentId: spec.initialDocumentId,
      parameters: spec.parameters
    };
  }
  /** Clone generic view builder (allows for options overriding)
   * @param withSpec - initial value template item builder options. See {@link InitialValueTemplateItemBuilder}
   * @returns initial value template item builder based on the context and options provided. See {@link InitialValueTemplateItemBuilder}
   */
  clone(withSpec = {}) {
    const builder = new _InitialValueTemplateItemBuilder(this._context);
    return builder.spec = { ...this.spec, ...withSpec }, builder;
  }
};
function defaultInitialValueTemplateItems(context) {
  const { schema, getStructureBuilder, templates } = context, typeNames = schema.getTypeNames();
  return templates.filter((tpl) => {
    var _a;
    return !((_a = tpl.parameters) != null && _a.length);
  }).sort((a, b) => typeNames.indexOf(a.schemaType) - typeNames.indexOf(b.schemaType)).map((tpl) => getStructureBuilder().initialValueTemplateItem(tpl.id));
}
function maybeSerializeInitialValueTemplateItem(item, index, path) {
  return item instanceof InitialValueTemplateItemBuilder ? item.serialize({ path, index }) : item;
}
function menuItemsFromInitialValueTemplateItems(context, templateItems) {
  const { schema, templates } = context;
  return templateItems.map((item) => {
    const template = templates.find((t) => t.id === item.templateId), title = item.title || (template == null ? void 0 : template.title) || "Create", params = {};
    template && template.schemaType && (params.type = template.schemaType), item.templateId && (params.template = item.templateId);
    const intentParams = item.parameters ? [params, item.parameters] : params, schemaType = template && schema.get(template.schemaType), i18n = item.i18n || (template == null ? void 0 : template.i18n);
    let builder = new MenuItemBuilder(context).title(title).icon(template && template.icon || (schemaType == null ? void 0 : schemaType.icon) || AddIcon).intent({ type: "create", params: intentParams });
    return i18n && (builder = builder.i18n(i18n)), builder.serialize();
  });
}
var DEFAULT_INTENT_HANDLER = Symbol("Document type list canHandleIntent");
var defaultIntentChecker = (intentName, params, { pane }) => {
  var _a, _b;
  const isEdit = intentName === "edit", isCreate = intentName === "create", typedSpec = pane, paneFilter = ((_a = typedSpec.options) == null ? void 0 : _a.filter) || "", paneParams = ((_b = typedSpec.options) == null ? void 0 : _b.params) || {}, typeNames = typedSpec.schemaTypeName ? [typedSpec.schemaTypeName] : getTypeNamesFromFilter(paneFilter, paneParams), initialValueTemplates = typedSpec.initialValueTemplates || [];
  return isCreate && params.template ? initialValueTemplates.some((tpl) => tpl.templateId === params.template) : isEdit && params.id && typeNames.includes(params.type) || isCreate && typeNames.includes(params.type);
};
defaultIntentChecker.identity = DEFAULT_INTENT_HANDLER;
var layoutOptions = ["default", "card", "media", "detail", "block"];
var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, typeof key != "symbol" ? key + "" : key, value);
function noChildResolver() {
}
var shallowIntentChecker = (intentName, params, { pane, index }) => index <= 1 && defaultIntentChecker(intentName, params, { pane, index });
var GenericListBuilder = class {
  constructor() {
    __publicField$5(this, "initialValueTemplatesSpecified", false), __publicField$5(this, "spec", {});
  }
  /** Set generic list ID
   * @param id - generic list ID
   * @returns generic list builder based on ID provided.
   */
  id(id) {
    return this.clone({ id });
  }
  /** Get generic list ID
   * @returns generic list ID
   */
  getId() {
    return this.spec.id;
  }
  /** Set generic list title
   * @param title - generic list title
   * @returns generic list builder based on title and ID provided.
   */
  title(title) {
    return this.clone({ title, id: getStructureNodeId(title, this.spec.id) });
  }
  /** Get generic list title
   * @returns generic list title
   */
  getTitle() {
    return this.spec.title;
  }
  /** Set the i18n key and namespace used to populate the localized title.
   * @param i18n - the key and namespaced used to populate the localized title.
   * @returns component builder based on i18n key and ns provided
   */
  i18n(i18n) {
    return this.clone({ i18n });
  }
  /** Get i18n key and namespace used to populate the localized title
   * @returns the i18n key and namespace used to populate the localized title
   */
  getI18n() {
    return this.spec.i18n;
  }
  /** Set generic list layout
   * @param defaultLayout - generic list layout key.
   * @returns generic list builder based on layout provided.
   */
  defaultLayout(defaultLayout) {
    return this.clone({ defaultLayout });
  }
  /** Get generic list layout
   * @returns generic list layout
   */
  getDefaultLayout() {
    return this.spec.defaultLayout;
  }
  /** Set generic list menu items
   * @param menuItems - generic list menu items. See {@link MenuItem} and {@link MenuItemBuilder}
   * @returns generic list builder based on menu items provided.
   */
  menuItems(menuItems) {
    return this.clone({ menuItems });
  }
  /** Get generic list menu items
   * @returns generic list menu items
   */
  getMenuItems() {
    return this.spec.menuItems;
  }
  /** Set generic list menu item groups
   * @param menuItemGroups - generic list menu item groups. See {@link MenuItemGroup} and {@link MenuItemGroupBuilder}
   * @returns generic list builder based on menu item groups provided.
   */
  menuItemGroups(menuItemGroups) {
    return this.clone({ menuItemGroups });
  }
  /** Get generic list menu item groups
   * @returns generic list menu item groups
   */
  getMenuItemGroups() {
    return this.spec.menuItemGroups;
  }
  /** Set generic list child
   * @param child - generic list child. See {@link Child}
   * @returns generic list builder based on child provided (clone).
   */
  child(child) {
    return this.clone({ child });
  }
  /** Get generic list child
   * @returns generic list child
   */
  getChild() {
    return this.spec.child;
  }
  /** Set generic list can handle intent
   * @param canHandleIntent - generic list intent checker. See {@link IntentChecker}
   * @returns generic list builder based on can handle intent provided.
   */
  canHandleIntent(canHandleIntent) {
    return this.clone({ canHandleIntent });
  }
  /** Get generic list can handle intent
   * @returns generic list can handle intent
   */
  getCanHandleIntent() {
    return this.spec.canHandleIntent;
  }
  /** Set generic list display options
   * @param enabled - allow / disallow for showing icons
   * @returns generic list builder based on display options (showIcons) provided.
   */
  showIcons(enabled = true) {
    return this.clone({
      displayOptions: { ...this.spec.displayOptions || {}, showIcons: enabled }
    });
  }
  /** Get generic list display options
   * @returns generic list display options (specifically showIcons)
   */
  getShowIcons() {
    return this.spec.displayOptions ? this.spec.displayOptions.showIcons : void 0;
  }
  /** Set generic list initial value templates
   * @param templates - generic list initial value templates. See {@link InitialValueTemplateItemBuilder}
   * @returns generic list builder based on templates provided.
   */
  initialValueTemplates(templates) {
    return this.initialValueTemplatesSpecified = true, this.clone({ initialValueTemplates: Array.isArray(templates) ? templates : [templates] });
  }
  /** Get generic list initial value templates
   * @returns generic list initial value templates
   */
  getInitialValueTemplates() {
    return this.spec.initialValueTemplates;
  }
  /** Serialize generic list
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns generic list object based on path provided in options. See {@link GenericList}
   */
  serialize(options = { path: [] }) {
    const id = this.spec.id || "", path = options.path, defaultLayout = this.spec.defaultLayout;
    if (defaultLayout && !layoutOptions.includes(defaultLayout))
      throw new SerializeError(
        `\`layout\` must be one of ${layoutOptions.map((item) => `"${item}"`).join(", ")}`,
        path,
        id || options.index,
        this.spec.title
      );
    const initialValueTemplates = (this.spec.initialValueTemplates || []).map(
      (item, i) => maybeSerializeInitialValueTemplateItem(item, i, path)
    );
    return {
      id: validateId(id, options.path, id || options.index),
      title: this.spec.title,
      i18n: this.spec.i18n,
      type: "genericList",
      defaultLayout,
      child: this.spec.child || noChildResolver,
      canHandleIntent: this.spec.canHandleIntent || shallowIntentChecker,
      displayOptions: this.spec.displayOptions,
      initialValueTemplates,
      menuItems: (this.spec.menuItems || []).map(
        (item, i) => maybeSerializeMenuItem(item, i, path)
      ),
      menuItemGroups: (this.spec.menuItemGroups || []).map(
        (item, i) => maybeSerializeMenuItemGroup(item, i, path)
      )
    };
  }
};
var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, key + "", value);
var validateFilter = (spec, options) => {
  var _a;
  const filter2 = ((_a = spec.options) == null ? void 0 : _a.filter.trim()) || "";
  if (["*", "{"].includes(filter2[0]))
    throw new SerializeError(
      `\`filter\` cannot start with \`${filter2[0]}\` - looks like you are providing a query, not a filter`,
      options.path,
      spec.id,
      spec.title
    ).withHelpUrl(HELP_URL.QUERY_PROVIDED_FOR_FILTER);
  return filter2;
};
var createDocumentChildResolverForItem = (context) => (itemId, options) => {
  var _a;
  const parentItem = options.parent, template = (_a = options.params) != null && _a.template ? context.templates.find((tpl) => tpl.id === options.params.template) : void 0, type = template ? template.schemaType : parentItem.schemaTypeName || resolveTypeForDocument(context.getClient, itemId);
  return Promise.resolve(type).then(
    (schemaType) => schemaType ? context.resolveDocumentNode({ schemaType, documentId: itemId }) : new DocumentBuilder(context).id("editor").documentId(itemId).schemaType("")
  );
};
var DocumentListBuilder = class _DocumentListBuilder extends GenericListBuilder {
  constructor(_context, spec) {
    super(), this._context = _context, __publicField$4(this, "spec"), this.spec = spec || {}, this.initialValueTemplatesSpecified = !!(spec != null && spec.initialValueTemplates);
  }
  /** Set API version
   * @param apiVersion - API version
   * @returns document list builder based on the options and API version provided. See {@link DocumentListBuilder}
   */
  apiVersion(apiVersion) {
    return this.clone({ options: { ...this.spec.options || { filter: "" }, apiVersion } });
  }
  /** Get API version
   * @returns API version
   */
  getApiVersion() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.apiVersion;
  }
  /** Set Document list filter
   * @param filter - filter
   * @returns document list builder based on the options and filter provided. See {@link DocumentListBuilder}
   */
  filter(filter2) {
    return this.clone({ options: { ...this.spec.options || {}, filter: filter2 } });
  }
  /** Get Document list filter
   * @returns filter
   */
  getFilter() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.filter;
  }
  /** Set Document list schema type name
   * @param type - schema type name.
   * @returns document list builder based on the schema type name provided. See {@link DocumentListBuilder}
   */
  schemaType(type) {
    const schemaTypeName = typeof type == "string" ? type : type.name;
    return this.clone({ schemaTypeName });
  }
  /** Get Document list schema type name
   * @returns schema type name
   */
  getSchemaType() {
    return this.spec.schemaTypeName;
  }
  /** Set Document list options' parameters
   * @param params - parameters
   * @returns document list builder based on the options provided. See {@link DocumentListBuilder}
   */
  params(params) {
    return this.clone({
      options: { ...this.spec.options || { filter: "" }, params }
    });
  }
  /** Get Document list options' parameters
   * @returns options
   */
  getParams() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.params;
  }
  /** Set Document list default ordering
   * @param ordering - default sort ordering array. See {@link SortOrderingItem}
   * @returns document list builder based on ordering provided. See {@link DocumentListBuilder}
   */
  defaultOrdering(ordering) {
    if (!Array.isArray(ordering))
      throw new Error("`defaultOrdering` must be an array of order clauses");
    return this.clone({
      options: { ...this.spec.options || { filter: "" }, defaultOrdering: ordering }
    });
  }
  /** Get Document list default ordering
   * @returns default ordering. See {@link SortOrderingItem}
   */
  getDefaultOrdering() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.defaultOrdering;
  }
  /** Serialize Document list
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns document list object based on path provided in options. See {@link DocumentList}
   */
  serialize(options = { path: [] }) {
    var _a;
    if (typeof this.spec.id != "string" || !this.spec.id)
      throw new SerializeError(
        "`id` is required for document lists",
        options.path,
        options.index,
        this.spec.title
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!this.spec.options || !this.spec.options.filter)
      throw new SerializeError(
        "`filter` is required for document lists",
        options.path,
        this.spec.id,
        this.spec.title
      ).withHelpUrl(HELP_URL.FILTER_REQUIRED);
    return ((_a = this.spec.options) == null ? void 0 : _a.filter) !== "_type == $type" && this.spec.options.filter && !this.spec.options.apiVersion && console.warn(
      `No apiVersion specified for document type list with custom filter: \`${this.spec.options.filter}\`. This will be required in the future. See %s for more info.`,
      generateHelpUrl(HELP_URL.API_VERSION_REQUIRED_FOR_CUSTOM_FILTER)
    ), {
      ...super.serialize(options),
      type: "documentList",
      schemaTypeName: this.spec.schemaTypeName,
      child: this.spec.child || createDocumentChildResolverForItem(this._context),
      options: {
        ...this.spec.options,
        // @todo: make specifying .apiVersion required when using custom (non-simple) filters in v4
        apiVersion: this.spec.options.apiVersion || DEFAULT_STUDIO_CLIENT_OPTIONS.apiVersion,
        filter: validateFilter(this.spec, options)
      }
    };
  }
  /** Clone Document list builder (allows for options overriding)
   * @param withSpec - override document list spec. See {@link PartialDocumentList}
   * @returns document list builder. See {@link DocumentListBuilder}
   */
  clone(withSpec) {
    const builder = new _DocumentListBuilder(this._context);
    return builder.spec = { ...this.spec, ...withSpec || {} }, this.initialValueTemplatesSpecified || (builder.spec.initialValueTemplates = inferInitialValueTemplates(this._context, builder.spec)), builder.spec.schemaTypeName || (builder.spec.schemaTypeName = inferTypeName(builder.spec)), builder;
  }
  /** Get Document list spec
   * @returns document list spec. See {@link PartialDocumentList}
   */
  getSpec() {
    return this.spec;
  }
};
function inferInitialValueTemplates(context, spec) {
  const { document: document2 } = context, { schemaTypeName, options } = spec, { filter: filter2, params } = options || { filter: "", params: {} }, typeNames = schemaTypeName ? [schemaTypeName] : Array.from(new Set(getTypeNamesFromFilter(filter2, params)));
  if (typeNames.length !== 0)
    return typeNames.flatMap(
      (schemaType) => document2.resolveNewDocumentOptions({
        type: "structure",
        schemaType
      })
    ).map((option) => ({ ...option, icon: AddIcon }));
}
function inferTypeName(spec) {
  const { options } = spec, { filter: filter2, params } = options || { filter: "", params: {} }, typeNames = getTypeNamesFromFilter(filter2, params);
  return typeNames.length === 1 ? typeNames[0] : void 0;
}
function getTypeNamesFromFilter(filter2, params = {}) {
  let typeNames = getTypeNamesFromEqualityFilter(filter2, params);
  return typeNames.length === 0 && (typeNames = getTypeNamesFromInTypesFilter(filter2, params)), typeNames;
}
function getTypeNamesFromEqualityFilter(filter2, params = {}) {
  const pattern = /\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type/g, matches = [];
  let match;
  for (; (match = pattern.exec(filter2)) !== null; )
    matches.push(match[1] || match[2]);
  return matches.map((candidate) => ((candidate[0] === "$" ? params[candidate.slice(1)] : candidate) || "").trim().replace(/^["']|["']$/g, "")).filter(Boolean);
}
function getTypeNamesFromInTypesFilter(filter2, params = {}) {
  const pattern = /\b_type\s+in\s+\[(.*?)\]/, matches = filter2.match(pattern);
  return matches ? matches[1].split(/,\s*/).map((match) => match.trim().replace(/^["']+|["']+$/g, "")).map((item) => item[0] === "$" ? params[item.slice(1)] : item).filter(Boolean) : [];
}
var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, key + "", value);
var getArgType = (thing) => thing instanceof ListBuilder ? "ListBuilder" : isPromise(thing) ? "Promise" : Array.isArray(thing) ? "array" : typeof thing;
var isListItem = (item) => item.type === "listItem";
var defaultCanHandleIntent = (intentName, params, context) => (context.pane.items || []).filter(isDocumentListItem).some((item) => item.schemaType.name === params.type && item._id === params.id) || shallowIntentChecker(intentName, params, context);
var resolveChildForItem = (itemId, options) => {
  const target = (options.parent.items.filter(isListItem).find((item) => item.id === itemId) || { child: void 0 }).child;
  return !target || typeof target != "function" ? target : typeof target == "function" ? target(itemId, options) : target;
};
function maybeSerializeListItem(item, index, path) {
  if (item instanceof ListItemBuilder)
    return item.serialize({ path, index });
  const listItem = item;
  if (listItem && listItem.type === "divider")
    return item;
  if (!listItem || listItem.type !== "listItem") {
    const gotWhat = listItem && listItem.type || getArgType(listItem), helpText = gotWhat === "array" ? " - did you forget to spread (...moreItems)?" : "";
    throw new SerializeError(
      `List items must be of type "listItem", got "${gotWhat}"${helpText}`,
      path,
      index
    ).withHelpUrl(HELP_URL.INVALID_LIST_ITEM);
  }
  return item;
}
function isPromise(thing) {
  return isRecord$4(thing) && typeof thing.then == "function";
}
var ListBuilder = class _ListBuilder extends GenericListBuilder {
  constructor(_context, spec) {
    super(), this._context = _context, __publicField$3(this, "spec"), this.spec = spec || {}, this.initialValueTemplatesSpecified = !!(spec && spec.initialValueTemplates);
  }
  /**
   * Set list builder based on items provided
   * @param items - list items. See {@link ListItemBuilder}, {@link ListItem} and {@link Divider}
   * @returns list builder based on items provided. See {@link ListBuilder}
   */
  items(items) {
    return this.clone({ items });
  }
  /** Get list builder items
   * @returns list items. See {@link BuildableList}
   */
  getItems() {
    return this.spec.items;
  }
  /** Serialize list builder
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns list based on path in options. See {@link List}
   */
  serialize(options = { path: [] }) {
    const id = this.spec.id;
    if (typeof id != "string" || !id)
      throw new SerializeError(
        "`id` is required for lists",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    const items = typeof this.spec.items > "u" ? [] : this.spec.items;
    if (!Array.isArray(items))
      throw new SerializeError(
        "`items` must be an array of items",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.LIST_ITEMS_MUST_BE_ARRAY);
    const path = (options.path || []).concat(id), serializedItems = items.map((item, index) => maybeSerializeListItem(item, index, path)), dupes = serializedItems.filter((val, i) => (0, import_find.default)(serializedItems, { id: val.id }, i + 1));
    if (dupes.length > 0) {
      const dupeIds = dupes.map((item) => item.id).slice(0, 5), dupeDesc = dupes.length > 5 ? `${dupeIds.join(", ")}...` : dupeIds.join(", ");
      throw new SerializeError(
        `List items with same ID found (${dupeDesc})`,
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.LIST_ITEM_IDS_MUST_BE_UNIQUE);
    }
    return {
      ...super.serialize(options),
      type: "list",
      canHandleIntent: this.spec.canHandleIntent || defaultCanHandleIntent,
      child: this.spec.child || resolveChildForItem,
      items: serializedItems
    };
  }
  /**
   * Clone list builder and return new list builder based on context and spec provided
   * @param withSpec - list options. See {@link BuildableList}
   * @returns new list builder based on context and spec provided. See {@link ListBuilder}
   */
  clone(withSpec) {
    const builder = new _ListBuilder(this._context);
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, key + "", value);
var ListItemBuilder = class _ListItemBuilder {
  constructor(_context, spec) {
    this._context = _context, __publicField$2(this, "spec"), this.spec = spec || {};
  }
  /**
   * Set list item ID
   * @returns list item builder based on ID provided. See {@link ListItemBuilder}
   */
  id(id) {
    return this.clone({ id });
  }
  /**
   * Get list item ID
   * @returns list item ID. See {@link PartialListItem}
   */
  getId() {
    return this.spec.id;
  }
  /**
   * Set list item title
   * @returns list item builder based on title provided. See {@link ListItemBuilder}
   */
  title(title) {
    return this.clone({ title, id: getStructureNodeId(title, this.spec.id) });
  }
  /**
   * Get list item title
   * @returns list item title. See {@link PartialListItem}
   */
  getTitle() {
    return this.spec.title;
  }
  /** Set the i18n key and namespace used to populate the localized title.
   * @param i18n - the key and namespaced used to populate the localized title.
   * @returns component builder based on i18n key and ns provided
   */
  i18n(i18n) {
    return this.clone({ i18n });
  }
  /** Get i18n key and namespace used to populate the localized title
   * @returns the i18n key and namespace used to populate the localized title
   */
  getI18n() {
    return this.spec.i18n;
  }
  /**
   * Set list item icon
   * @returns list item builder based on icon provided. See {@link ListItemBuilder}
   */
  icon(icon) {
    return this.clone({ icon });
  }
  /**
   * Set if list item should show icon
   * @returns list item builder based on showIcon provided. See {@link ListItemBuilder}
   */
  showIcon(enabled = true) {
    return this.clone({
      displayOptions: { ...this.spec.displayOptions || {}, showIcon: enabled }
    });
  }
  /**
   * Check if list item should show icon
   * @returns true if it should show the icon, false if not, undefined if not set
   */
  getShowIcon() {
    return this.spec.displayOptions ? this.spec.displayOptions.showIcon : void 0;
  }
  /**
   *Get list item icon
   * @returns list item icon. See {@link PartialListItem}
   */
  getIcon() {
    return this.spec.icon;
  }
  /**
   * Set list item child
   * @param child - list item child. See {@link UnserializedListItemChild}
   * @returns list item builder based on child provided. See {@link ListItemBuilder}
   */
  child(child) {
    return this.clone({ child });
  }
  /**
   * Get list item child
   * @returns list item child. See {@link PartialListItem}
   */
  getChild() {
    return this.spec.child;
  }
  /**
   * Set list item schema type
   * @param schemaType - list item schema type. See {@link SchemaType}
   * @returns list item builder based on schema type provided. See {@link ListItemBuilder}
   */
  schemaType(schemaType) {
    return this.clone({ schemaType });
  }
  /**
   * Get list item schema type
   * @returns list item schema type. See {@link PartialListItem}
   */
  getSchemaType() {
    const schemaType = this.spec.schemaType;
    return typeof schemaType == "string" ? this._context.schema.get(schemaType) : this.spec.schemaType;
  }
  /** Serialize list item builder
   * @param options - serialization options. See {@link ListItemSerializeOptions}
   * @returns list item node based on path provided in options. See {@link ListItem}
   */
  serialize(options = { path: [] }) {
    const { id, title, child } = this.spec;
    if (typeof id != "string" || !id)
      throw new SerializeError(
        "`id` is required for list items",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.ID_REQUIRED);
    if (!options.titleIsOptional && (typeof title != "string" || !title))
      throw new SerializeError("`title` is required for list items", options.path, id).withHelpUrl(
        HELP_URL.TITLE_REQUIRED
      );
    let schemaType = this.spec.schemaType;
    if (typeof schemaType == "string") {
      const type = this._context.schema.get(schemaType);
      if (!type)
        throw new SerializeError(
          `Could not find type "${schemaType}" in schema`,
          options.path,
          id
        ).withHelpUrl(HELP_URL.SCHEMA_TYPE_NOT_FOUND);
      schemaType = type;
    }
    const serializeOptions = { path: options.path.concat(id), hint: "child" };
    let listChild = child instanceof ComponentBuilder || child instanceof DocumentListBuilder || child instanceof DocumentBuilder || child instanceof ListBuilder ? child.serialize(serializeOptions) : child;
    if (typeof listChild == "function") {
      const originalChild = listChild;
      listChild = (itemId, childOptions) => originalChild(itemId, { ...childOptions, serializeOptions });
    }
    return {
      ...this.spec,
      id: validateId(id, options.path, options.index),
      schemaType,
      child: listChild,
      title,
      type: "listItem"
    };
  }
  /** Clone list item builder
   * @param withSpec - partial list item options. See {@link PartialListItem}
   * @returns list item builder based on context and spec provided. See {@link ListItemBuilder}
   */
  clone(withSpec) {
    const builder = new _ListItemBuilder(this._context);
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, key + "", value);
var createDefaultChildResolver = (context, spec) => (documentId) => {
  const schemaType = spec.schemaType && (typeof spec.schemaType == "string" ? spec.schemaType : spec.schemaType.name);
  return schemaType ? context.resolveDocumentNode({ schemaType, documentId }) : new DocumentBuilder(context).id("documentEditor").documentId(documentId);
};
var DocumentListItemBuilder = class _DocumentListItemBuilder extends ListItemBuilder {
  constructor(_context, spec) {
    super(_context, spec), this._context = _context, __publicField$1(this, "spec"), this.spec = spec || {};
  }
  /**
   * Serialize document list item
   * @param options - serialization options. See {@link SerializeOptions}
   * @returns document list item object based on path provided in options. See {@link DocumentListItem}
   */
  serialize(options = { path: [] }) {
    const spec = super.serialize({ ...options, titleIsOptional: true });
    if (!spec.schemaType)
      throw new SerializeError(
        "`schemaType` is required for document list items",
        options.path,
        options.index
      ).withHelpUrl(HELP_URL.SCHEMA_TYPE_REQUIRED);
    const child = spec.child || createDefaultChildResolver(this._context, spec);
    return { ...spec, child, schemaType: spec.schemaType, _id: spec.id };
  }
  /** Clone Document list item builder (allows for options overriding)
   * @param withSpec - Document list item builder options. See {@link PartialDocumentListItem}
   * @returns document list item builder. See {@link DocumentListItemBuilder}
   */
  clone(withSpec) {
    const builder = new _DocumentListItemBuilder(this._context);
    return builder.spec = { ...this.spec, ...withSpec || {} }, builder;
  }
};
function isDocumentListItem(item) {
  return isRecord$4(item) && typeof item.schemaType < "u" && typeof item._id == "string";
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, key + "", value);
var DocumentTypeListBuilder = class _DocumentTypeListBuilder extends DocumentListBuilder {
  constructor(_context, spec) {
    super(_context), this._context = _context, __publicField(this, "spec"), this.spec = spec || {};
  }
  /**
   * Set Document type list child
   * @param child - Child component. See {@link Child}
   * @returns document type list builder based on child component provided without default intent handler. See {@link DocumentTypeListBuilder}
   */
  child(child) {
    return this.cloneWithoutDefaultIntentHandler({ child });
  }
  /** Clone Document type list builder (allows for options overriding)
   * @param withSpec - Document type list builder options. See {@link PartialDocumentList}
   * @returns document type list builder. See {@link DocumentTypeListBuilder}
   */
  clone(withSpec) {
    const parent = super.clone(withSpec), builder = new _DocumentTypeListBuilder(this._context);
    return builder.spec = { ...this.spec, ...parent.getSpec(), ...withSpec || {} }, builder;
  }
  /** Clone Document type list builder (allows for options overriding) and remove default intent handler
   * @param withSpec - Document type list builder options. See {@link PartialDocumentList}
   * @returns document type list builder without default intent handler. See {@link DocumentTypeListBuilder}
   */
  cloneWithoutDefaultIntentHandler(withSpec) {
    const parent = super.clone(withSpec), builder = new _DocumentTypeListBuilder(this._context), canHandleIntent = this.spec.canHandleIntent, override = canHandleIntent && canHandleIntent.identity === DEFAULT_INTENT_HANDLER ? { canHandleIntent: void 0 } : {};
    return builder.spec = {
      ...parent.getSpec(),
      ...this.spec,
      ...withSpec || {},
      ...override
    }, builder;
  }
};
var BUNDLED_DOC_TYPES = ["sanity.imageAsset", "sanity.fileAsset"];
function isBundledDocType(typeName) {
  return BUNDLED_DOC_TYPES.includes(typeName);
}
function isDocumentType(schemaType) {
  var _a;
  return ((_a = schemaType.type) == null ? void 0 : _a.name) === "document";
}
function isList(collection) {
  return collection.type === "list";
}
function getDocumentTypes({ schema }) {
  return schema.getTypeNames().filter((n) => {
    const schemaType = schema.get(n);
    return schemaType && isDocumentType(schemaType);
  }).filter((n) => !isBundledDocType(n));
}
function getDocumentTypeListItems(context) {
  return getDocumentTypes(context).map((typeName) => getDocumentTypeListItem(context, typeName));
}
function getDocumentTypeListItem(context, typeName) {
  const { schema } = context, type = schema.get(typeName);
  if (!type)
    throw new Error(`Schema type with name "${typeName}" not found`);
  const title = type.title || (0, import_startCase.default)(typeName);
  return new ListItemBuilder(context).id(typeName).title(title).schemaType(type).child((id, childContext) => {
    const parent = childContext.parent, parentItem = isList(parent) ? parent.items.find((item) => item.id === id) : null;
    let list = getDocumentTypeList(context, typeName);
    return parentItem && parentItem.title && (list = list.title(parentItem.title)), list;
  });
}
function getDocumentTypeList(context, typeNameOrSpec) {
  const { schema, resolveDocumentNode } = context, schemaType = typeof typeNameOrSpec == "string" ? typeNameOrSpec : typeNameOrSpec.schemaType, typeName = typeof schemaType == "string" ? schemaType : schemaType.name, spec = typeof typeNameOrSpec == "string" ? { schemaType } : typeNameOrSpec, type = schema.get(typeName);
  if (!type)
    throw new Error(`Schema type with name "${typeName}" not found`);
  const title = type.title || (0, import_startCase.default)(typeName);
  return new DocumentTypeListBuilder(context).id(spec.id || typeName).title(spec.title || title).filter("_type == $type").params({ type: typeName }).schemaType(type).defaultOrdering(DEFAULT_SELECTED_ORDERING_OPTION.by).menuItemGroups(
    spec.menuItemGroups || [
      {
        id: "sorting",
        title: "Sort",
        i18n: { title: { key: "menu-item-groups.actions-group", ns: structureLocaleNamespace } }
      },
      {
        id: "layout",
        title: "Layout",
        i18n: { title: { key: "menu-item-groups.layout-group", ns: structureLocaleNamespace } }
      },
      {
        id: "actions",
        title: "Actions",
        i18n: { title: { key: "menu-item-groups.sorting-group", ns: structureLocaleNamespace } }
      }
    ]
  ).child(
    spec.child || ((documentId) => resolveDocumentNode({ schemaType: typeName, documentId }))
  ).canHandleIntent(spec.canHandleIntent || defaultIntentChecker).menuItems(
    spec.menuItems || [
      // Create new (from action button) will be added in serialization step of GenericList
      // Sort by <Y>
      ...getOrderingMenuItemsForSchemaType(context, type),
      // Display as <Z>
      new MenuItemBuilder(context).group("layout").i18n({ title: { key: "menu-items.layout.compact-view", ns: structureLocaleNamespace } }).title("Compact view").icon(StackCompactIcon).action("setLayout").params({ layout: "default" }),
      new MenuItemBuilder(context).group("layout").i18n({ title: { key: "menu-items.layout.detailed-view", ns: structureLocaleNamespace } }).title("Detailed view").icon(StackIcon).action("setLayout").params({ layout: "detail" })
      // Create new (from menu) will be added in serialization step of GenericList
    ]
  );
}
function hasIcon(schemaType) {
  return !schemaType || typeof schemaType == "string" ? false : !!schemaType.icon;
}
function getDefaultStructure(context) {
  const items = getDocumentTypeListItems(context);
  return new ListBuilder(context).id("__root__").title("Content").i18n({ title: { key: "default-definition.content-title", ns: structureLocaleNamespace } }).items(items).showIcons(items.some((item) => hasIcon(item.getSchemaType())));
}
function createStructureBuilder({
  defaultDocumentNode,
  source
}) {
  const configContext = getConfigContextFromSource(source), context = {
    ...source,
    getStructureBuilder: () => structureBuilder,
    resolveDocumentNode: (options) => {
      let builder = (defaultDocumentNode == null ? void 0 : defaultDocumentNode(structureBuilder, { ...options, ...configContext })) || new DocumentBuilder(context);
      return builder.getId() || (builder = builder.id("documentEditor")), options.documentId && (builder = builder.documentId(getPublishedId(options.documentId))), builder.schemaType(options.schemaType);
    }
  }, structureBuilder = {
    defaults: () => getDefaultStructure(context),
    documentTypeList: (...args) => getDocumentTypeList(context, ...args),
    documentTypeListItem: (...args) => getDocumentTypeListItem(context, ...args),
    documentTypeListItems: (...args) => getDocumentTypeListItems(context, ...args),
    document: (...args) => new DocumentBuilder(context, ...args),
    documentWithInitialValueTemplate: (...args) => documentFromEditorWithInitialValue(context, ...args),
    defaultDocument: context.resolveDocumentNode,
    list: (...args) => new ListBuilder(context, ...args),
    listItem: (...args) => new ListItemBuilder(context, ...args),
    menuItem: (...args) => new MenuItemBuilder(context, ...args),
    menuItemGroup: (...args) => new MenuItemGroupBuilder(context, ...args),
    menuItemsFromInitialValueTemplateItems: (...args) => menuItemsFromInitialValueTemplateItems(context, ...args),
    documentList: (...args) => new DocumentListBuilder(context, ...args),
    documentListItem: (...args) => new DocumentListItemBuilder(context, ...args),
    orderingMenuItem: (...args) => getOrderingMenuItem(context, ...args),
    orderingMenuItemsForType: (...args) => getOrderingMenuItemsForSchemaType(context, ...args),
    editor: (...args) => documentFromEditor(context, ...args),
    defaultInitialValueTemplateItems: (...args) => defaultInitialValueTemplateItems(context, ...args),
    initialValueTemplateItem: (templateId, parameters) => new InitialValueTemplateItemBuilder(context, {
      id: templateId,
      parameters,
      templateId
    }),
    component: (spec) => (0, import_react_is.isValidElementType)(spec) ? new ComponentBuilder().component(spec) : new ComponentBuilder(spec),
    divider: () => ({ id: (0, import_uniqueId.default)("__divider__"), type: "divider" }),
    view: views,
    context
  };
  return structureBuilder;
}
var LiveEditBadge = (props) => {
  const { liveEdit } = props;
  return liveEdit ? {
    label: "Live",
    color: "danger"
  } : null;
};
var state = { activePanes: [] };
function setActivePanes(panes) {
  state.activePanes = panes;
}
function getIntentState(intent, params, routerState, payload) {
  var _a;
  const panes = (routerState == null ? void 0 : routerState.panes) || [], activePanes = state.activePanes || [], editDocumentId = params.id || v4_default(), isTemplate = intent === "create" && params.template;
  for (let i = activePanes.length - 1; i >= 0; i--) {
    const pane = activePanes[i];
    if (typeof pane == "object" && ((_a = pane.canHandleIntent) != null && _a.call(pane, intent, params, {
      pane,
      index: i
    }) || // see `resolveIntent.ts` for more info
    pane.type === "documentList" && pane.schemaTypeName === params.type && pane.options.filter === "_type == $type")) {
      const paneParams = isTemplate ? { template: params.template } : EMPTY_PARAMS$2;
      return {
        panes: panes.slice(0, i).concat([[{ id: editDocumentId, params: paneParams, payload }]])
      };
    }
  }
  return { intent, params, payload };
}
function collectLatestAuthorAnnotations(diff) {
  const authorMap = /* @__PURE__ */ new Map();
  return visitDiff(diff, (child) => {
    if (child.action === "unchanged" || !("annotation" in child) || !child.annotation)
      return true;
    const { author, timestamp } = child.annotation, previous = authorMap.get(author);
    return (!previous || previous.timestamp < timestamp) && authorMap.set(author, child.annotation), true;
  }), Array.from(authorMap.values()).sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);
}
var Scroller = pt(ScrollContainer)`
  height: 100%;
  overflow: auto;
  position: relative;
  scroll-behavior: smooth;
`;
function ChangesInspector(props) {
  const { onClose } = props, { documentId, schemaType, timelineError, timelineStore, value } = useDocumentPane(), scrollRef = (0, import_react.useRef)(null), diff = useTimelineSelector(timelineStore, (state2) => state2.diff), onOlderRevision = useTimelineSelector(timelineStore, (state2) => state2.onOlderRevision), selectionState = useTimelineSelector(timelineStore, (state2) => state2.selectionState), sinceTime = useTimelineSelector(timelineStore, (state2) => state2.sinceTime), loading = selectionState === "loading", isComparingCurrent = !onOlderRevision, { t } = useTranslation2("studio"), documentContext = (0, import_react.useMemo)(
    () => ({
      documentId,
      schemaType,
      FieldWrapper: ChangeFieldWrapper,
      rootDiff: diff,
      isComparingCurrent,
      value
    }),
    [documentId, diff, isComparingCurrent, schemaType, value]
  ), changeAnnotations = (0, import_react.useMemo)(
    () => diff ? collectLatestAuthorAnnotations(diff) : [],
    [diff]
  );
  return (0, import_jsx_runtime.jsxs)(Flex, { "data-testid": "review-changes-pane", direction: "column", height: "fill", overflow: "hidden", children: [
    (0, import_jsx_runtime.jsx)(
      DocumentInspectorHeader,
      {
        as: "header",
        closeButtonLabel: t("changes.action.close-label"),
        flex: "none",
        onClose,
        title: t("changes.title"),
        children: (0, import_jsx_runtime.jsxs)(Flex, { gap: 1, padding: 3, paddingTop: 0, paddingBottom: 2, children: [
          (0, import_jsx_runtime.jsx)(Box, { flex: 1, children: (0, import_jsx_runtime.jsx)(TimelineMenu, { mode: "since", chunk: sinceTime, placement: "bottom-start" }) }),
          (0, import_jsx_runtime.jsx)(Box, { flex: "none", children: (0, import_jsx_runtime.jsx)(
            DiffTooltip,
            {
              annotations: changeAnnotations,
              description: t("changes.changes-by-author"),
              portal: true,
              children: (0, import_jsx_runtime.jsx)(AvatarStack, { maxLength: 4, "aria-label": t("changes.changes-by-author"), children: changeAnnotations.map(({ author }) => (0, import_jsx_runtime.jsx)(UserAvatar, { user: author }, author)) })
            }
          ) })
        ] })
      }
    ),
    (0, import_jsx_runtime.jsx)(Card, { flex: 1, children: (0, import_jsx_runtime.jsx)(BoundaryElementProvider, { element: scrollRef.current, children: (0, import_jsx_runtime.jsx)(Scroller, { "data-ui": "Scroller", ref: scrollRef, children: (0, import_jsx_runtime.jsx)(Box, { flex: 1, padding: 4, children: (0, import_jsx_runtime.jsx)(
      Content,
      {
        diff,
        documentContext,
        error: timelineError,
        loading,
        schemaType
      }
    ) }) }) }) })
  ] });
}
function Content({
  error,
  diff,
  documentContext,
  loading,
  schemaType
}) {
  return error ? (0, import_jsx_runtime.jsx)(NoChanges, {}) : loading ? (0, import_jsx_runtime.jsx)(LoadingBlock, { showText: true }) : diff ? (0, import_jsx_runtime.jsx)(DocumentChangeContext.Provider, { value: documentContext, children: (0, import_jsx_runtime.jsx)(ChangeList, { diff, schemaType }) }) : (0, import_jsx_runtime.jsx)(NoChanges, {});
}
var changesInspector = {
  name: HISTORY_INSPECTOR_NAME,
  useMenuItem: () => {
    const { features } = useStructureTool(), { t } = useTranslation2();
    return {
      hidden: !features.reviewChanges,
      icon: RestoreIcon,
      title: t("changes.title")
    };
  },
  component: ChangesInspector,
  onClose: ({ params }) => ({ params: { ...params, since: void 0 } }),
  onOpen: ({ params }) => ({ params: { ...params, since: "@lastPublished" } })
};
function getPathTitles(options) {
  const { path, schemaType, value } = options, result = [];
  let s = schemaType, v = value;
  for (const segment of path) {
    if (typeof segment == "string") {
      if (!isRecord$4(v) && v !== void 0)
        throw new Error(`Parent value is not an object, cannot get path segment: .${segment}`);
      if (s.jsonType !== "object")
        throw new Error(
          `Parent type is not an object schema type, cannot get path segment: .${segment}`
        );
      v = v == null ? void 0 : v[segment];
      const field = s.fields.find((f) => f.name === segment);
      if (!field)
        return result.push({ name: segment }), result;
      s = field.type, result.push(s);
      continue;
    }
    if (typeof segment == "number") {
      if (!isArray(v) && v !== void 0)
        throw new Error(`Parent value is not an array, cannot get path segment: [${segment}]`);
      if (s.jsonType !== "array")
        throw new Error(
          `Parent type is not an array schema type, cannot get path segment: [${segment}]`
        );
      v = v == null ? void 0 : v[segment];
      const itemType = s.of.find((ofType) => typeof v == "string" ? ofType.jsonType === "string" : typeof v == "number" ? ofType.jsonType === "number" : typeof v == "boolean" ? ofType.jsonType === "boolean" : isRecord$4(v) ? ofType.name === (v == null ? void 0 : v._type) : false);
      if (!itemType)
        throw new Error(`Item type not found: [${segment}]`);
      s = itemType, result.push(s);
      continue;
    }
    if (isRecord$4(segment) && segment._key) {
      if (!isArray(v))
        throw new Error(
          `Parent value is not an array, cannot get path segment: [_key == ${segment}]`
        );
      if (s.jsonType !== "array")
        throw new Error(
          `Parent type is not an array schema type, cannot get path segment: .${segment}`
        );
      if (v = (v != null ? v : []).find((i) => isRecord$4(i) && i._key === segment._key), !isRecord$4(v))
        throw new Error(`Array item not found: [_key == ${segment._key}]`);
      const ofType = s.of.find((i) => isRecord$4(v) && i.name === (v == null ? void 0 : v._type));
      if (!ofType)
        throw new Error(`Array item type not found: .${v == null ? void 0 : v._type}`);
      s = ofType, result.push(s);
      continue;
    }
    throw new Error(`Invalid path segment: ${JSON.stringify(segment)}`);
  }
  return result;
}
var MARKER_ICON = {
  error: ErrorOutlineIcon,
  warning: WarningOutlineIcon,
  info: InfoOutlineIcon
};
var MARKER_TONE = {
  error: "critical",
  warning: "caution",
  info: "primary"
};
function ValidationInspector(props) {
  const { onClose } = props, { onFocus, onPathOpen, schemaType, validation, value } = useDocumentPane(), { t } = useTranslation2("validation"), handleOpen = (0, import_react.useCallback)(
    (path) => {
      onPathOpen(path), onFocus(path);
    },
    [onFocus, onPathOpen]
  );
  return (0, import_jsx_runtime.jsxs)(Flex, { direction: "column", height: "fill", overflow: "hidden", children: [
    (0, import_jsx_runtime.jsx)(
      DocumentInspectorHeader,
      {
        as: "header",
        closeButtonLabel: t("panel.close-button-aria-label"),
        flex: "none",
        onClose,
        title: t("panel.title")
      }
    ),
    (0, import_jsx_runtime.jsxs)(Card, { flex: 1, overflow: "auto", padding: 3, children: [
      validation.length === 0 && (0, import_jsx_runtime.jsx)(Box, { padding: 2, children: (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: t("panel.no-errors-message") }) }),
      validation.length > 0 && (0, import_jsx_runtime.jsx)(Stack, { space: 2, children: validation.map((marker, i) => (0, import_jsx_runtime.jsx)(
        ValidationCard,
        {
          marker,
          onOpen: handleOpen,
          schemaType,
          value
        },
        i
      )) })
    ] })
  ] });
}
function ValidationCard(props) {
  const { marker, onOpen, schemaType, value } = props, handleOpen = (0, import_react.useCallback)(() => onOpen(marker.path), [marker, onOpen]), [errorInfo, setErrorInfo] = (0, import_react.useState)(null);
  return (0, import_jsx_runtime.jsxs)(ErrorBoundary, { onCatch: setErrorInfo, children: [
    errorInfo && (0, import_jsx_runtime.jsx)(Card, { padding: 3, radius: 2, tone: "critical", children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: errorInfo.error.message }) }),
    !errorInfo && (0, import_jsx_runtime.jsx)(
      Card,
      {
        __unstable_focusRing: true,
        as: "button",
        onClick: handleOpen,
        padding: 3,
        radius: 2,
        tone: MARKER_TONE[marker.level],
        children: (0, import_jsx_runtime.jsxs)(Flex, { align: "flex-start", gap: 3, children: [
          (0, import_jsx_runtime.jsx)(Box, { flex: "none", children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: (0, import_react.createElement)(MARKER_ICON[marker.level]) }) }),
          (0, import_jsx_runtime.jsxs)(Stack, { flex: 1, space: 2, children: [
            (0, import_jsx_runtime.jsx)(
              DocumentNodePathBreadcrumbs,
              {
                path: marker.path,
                schemaType,
                value
              }
            ),
            (0, import_jsx_runtime.jsx)(Text, { muted: true, size: 1, children: marker.message })
          ] })
        ] })
      }
    )
  ] });
}
function DocumentNodePathBreadcrumbs(props) {
  const { path, schemaType, value } = props, pathTitles = (0, import_react.useMemo)(() => {
    try {
      return getPathTitles({ path, schemaType, value });
    } catch (e) {
      console.error(e);
    }
    return null;
  }, [path, schemaType, value]);
  return pathTitles != null && pathTitles.length ? (0, import_jsx_runtime.jsx)(Text, { size: 1, children: pathTitles.map((t, i) => (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
    i > 0 && (0, import_jsx_runtime.jsx)("span", { style: { color: "var(--card-muted-fg-color)", opacity: 0.5 }, children: " / " }),
    (0, import_jsx_runtime.jsx)("span", { style: { fontWeight: 500 }, children: t.title || t.name })
  ] }, i)) }) : null;
}
function useMenuItem(props) {
  const { documentId, documentType } = props, { t } = useTranslation2("validation"), { validation: validationMarkers } = useValidationStatus(documentId, documentType), validation = (0, import_react.useMemo)(
    () => validationMarkers.map((item) => ({
      level: item.level,
      message: item.message,
      path: item.path
    })),
    [validationMarkers]
  ), hasErrors = validation.some(isValidationError), hasWarnings = validation.some(isValidationWarning), icon = (0, import_react.useMemo)(() => hasErrors ? ErrorOutlineIcon : hasWarnings ? WarningOutlineIcon : CheckmarkCircleIcon, [hasErrors, hasWarnings]), tone = (0, import_react.useMemo)(() => hasErrors ? "critical" : hasWarnings ? "caution" : "positive", [hasErrors, hasWarnings]);
  return {
    hidden: validation.length === 0,
    icon,
    title: t("panel.title"),
    tone,
    showAsAction: true
  };
}
var validationInspector = {
  name: VALIDATION_INSPECTOR_NAME,
  component: ValidationInspector,
  useMenuItem
};
var EMPTY_PARAMS = {};
function legacyEditParamsToState(params) {
  try {
    return JSON.parse(decodeURIComponent(params));
  } catch {
    return console.warn("Failed to parse JSON parameters"), {};
  }
}
function encodePanesSegment(panes) {
  return (panes || []).map((group) => group.map(encodeChunks).join("|")).map(encodeURIComponent).join(";");
}
function legacyEditParamsToPath(params) {
  return JSON.stringify(params);
}
function toState(pathSegment) {
  return parsePanesSegment(decodeURIComponent(pathSegment));
}
function toPath(panes) {
  return encodePanesSegment(panes);
}
var router = route.create("/", [
  // "Asynchronous intent resolving" route
  route.intents("/intent"),
  // Legacy fallback route, will be redirected to new format
  route.create("/edit/:type/:editDocumentId", [
    route.create({
      path: "/:params",
      transform: { params: { toState: legacyEditParamsToState, toPath: legacyEditParamsToPath } }
    })
  ]),
  // The regular path - when the intent can be resolved to a specific pane
  route.create({
    path: "/:panes",
    // Legacy URLs, used to handle redirects
    children: [route.create("/:action", route.create("/:legacyEditDocumentId"))],
    transform: {
      panes: { toState, toPath }
    }
  })
]);
var panePattern = /^([.a-z0-9_-]+),?({.*?})?(?:(;|$))/i;
var isParam = (str) => /^[a-z0-9]+=[^=]+/i.test(str);
var isPayloadLike = (str) => /^[A-Za-z0-9\-_]+(?:={0,2})$/.test(str);
var exclusiveParams = ["view", "since", "rev", "inspect", "comment"];
var isTruthy = Boolean;
function parseChunks(chunks, initial) {
  const sibling = { ...initial, params: EMPTY_PARAMS, payload: void 0 };
  return chunks.reduce((pane, chunk) => {
    if (isParam(chunk)) {
      const key = chunk.slice(0, chunk.indexOf("=")), value = chunk.slice(key.length + 1);
      pane.params = { ...pane.params, [decodeURIComponent(key)]: decodeURIComponent(value) };
    } else
      isPayloadLike(chunk) ? pane.payload = tryParseBase64Payload(chunk) : console.warn("Unknown pane segment: %s - skipping", chunk);
    return pane;
  }, sibling);
}
function encodeChunks(pane, index, group) {
  const { payload, params = {}, id } = pane, [firstSibling] = group, paneIsFirstSibling = pane === firstSibling, sameAsFirst = index !== 0 && id === firstSibling.id, encodedPayload = typeof payload > "u" ? void 0 : encodeJsonParams(payload), encodedParams = Object.entries(params).filter((entry) => {
    var _a;
    const [key, value] = entry;
    if (!value)
      return false;
    if (paneIsFirstSibling)
      return true;
    const valueFromFirstSibling = (_a = firstSibling.params) == null ? void 0 : _a[key];
    return !(value === valueFromFirstSibling && !exclusiveParams.includes(key));
  }).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  return [sameAsFirst ? "" : id].concat([encodedParams.length > 0 && encodedParams, encodedPayload].filter(isTruthy).flat()).join(",") || ",";
}
function parsePanesSegment(str) {
  return str.indexOf(",{") !== -1 ? parseOldPanesSegment(str) : str.split(";").map((group) => {
    const [firstSibling, ...restOfSiblings] = group.split("|").map((segment) => {
      const [id, ...chunks] = segment.split(",");
      return parseChunks(chunks, { id });
    });
    return [
      firstSibling,
      ...restOfSiblings.map((sibling) => ({
        ...firstSibling,
        ...sibling,
        id: sibling.id || firstSibling.id,
        params: { ...(0, import_omit.default)(firstSibling.params, exclusiveParams), ...sibling.params },
        payload: sibling.payload || firstSibling.payload
      }))
    ];
  }).filter((group) => group.length > 0);
}
function parseOldPanesSegment(str) {
  const chunks = [];
  let buffer = str;
  for (; buffer.length; ) {
    const [match, id, payloadChunk] = buffer.match(panePattern) || [];
    if (!match) {
      buffer = buffer.slice(1);
      continue;
    }
    const payload = payloadChunk && tryParsePayload(payloadChunk);
    chunks.push({ id, payload }), buffer = buffer.slice(match.length);
  }
  return [chunks];
}
function tryParsePayload(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.warn(`Failed to parse parameters: ${err.message}`);
    return;
  }
}
function tryParseBase64Payload(data) {
  try {
    return data ? decodeJsonParams(data) : void 0;
  } catch (err) {
    console.warn(`Failed to parse parameters: ${err.message}`);
    return;
  }
}
var documentActions = [
  PublishAction,
  UnpublishAction,
  DiscardChangesAction,
  DuplicateAction,
  DeleteAction,
  HistoryRestoreAction
];
var documentBadges = [LiveEditBadge];
var inspectors = [validationInspector, changesInspector];
var structureTool = definePlugin((options) => {
  const icon = (options == null ? void 0 : options.icon) || MasterDetailIcon;
  return {
    name: "sanity/structure",
    document: {
      actions: (prevActions) => Array.from(/* @__PURE__ */ new Set([...prevActions, ...documentActions])),
      badges: (prevBadges) => Array.from(/* @__PURE__ */ new Set([...prevBadges, ...documentBadges])),
      inspectors: (prevInspectors) => Array.from(/* @__PURE__ */ new Set([...prevInspectors, ...inspectors]))
    },
    tools: [
      {
        name: (options == null ? void 0 : options.name) || "structure",
        title: (options == null ? void 0 : options.title) || "Structure",
        icon,
        component: (0, import_react.lazy)(() => import("./index3-SDFOLBFY.js")),
        canHandleIntent: (intent, params) => intent === "create" ? canHandleCreateIntent(params) : intent === "edit" ? canHandleEditIntent(params) : false,
        getIntentState,
        // Controlled by sanity/src/structure/components/structureTool/StructureTitle.tsx
        controlsDocumentTitle: true,
        options,
        router
      }
    ],
    i18n: {
      bundles: [structureUsEnglishLocaleBundle]
    }
  };
});
function canHandleCreateIntent(params) {
  return "type" in params ? "template" in params ? { template: true } : true : false;
}
function canHandleEditIntent(params) {
  return "id" in params ? "mode" in params ? { mode: params.mode === "structure" } : true : false;
}
function StructureToolProvider({
  defaultDocumentNode,
  structure: resolveStructure,
  children
}) {
  const [layoutCollapsed, setLayoutCollapsed] = (0, import_react.useState)(false), source = useSource(), configContext = useConfigContextFromSource(source), documentStore = useDocumentStore(), S = (0, import_react.useMemo)(() => createStructureBuilder({
    defaultDocumentNode,
    source
  }), [defaultDocumentNode, source]), rootPaneNode = (0, import_react.useMemo)(() => resolveStructure ? resolveStructure(S, {
    ...configContext,
    documentStore
  }) : S.defaults(), [S, resolveStructure, configContext, documentStore]), features = (0, import_react.useMemo)(
    () => ({
      backButton: layoutCollapsed,
      resizablePanes: !layoutCollapsed,
      reviewChanges: !layoutCollapsed,
      splitPanes: !layoutCollapsed,
      splitViews: !layoutCollapsed
    }),
    [layoutCollapsed]
  ), structureTool2 = (0, import_react.useMemo)(() => ({
    features,
    layoutCollapsed,
    setLayoutCollapsed,
    rootPaneNode,
    structureContext: S.context
  }), [features, layoutCollapsed, rootPaneNode, S.context]);
  return (0, import_jsx_runtime.jsx)(StructureToolContext.Provider, { value: structureTool2, children });
}

// node_modules/sanity/lib/structure.mjs
var CommentsIntentProvider2 = CommentsIntentProvider;

export {
  structureLocaleNamespace,
  BackLink,
  usePaneLayout,
  ChildLink,
  ParameterizedLink,
  ReferenceChildLink,
  usePaneRouter,
  ConfirmDeleteDialogContainer,
  Pane,
  usePane,
  PaneContent,
  PaneHeader$1,
  PaneLayout,
  PaneHeaderActions,
  PaneItem,
  LoadingPane,
  useDocumentPane,
  _DEBUG,
  LOADING_PANE,
  useStructureTool,
  useDocumentTitle,
  DocumentInspectorHeader,
  DocumentPaneProvider,
  DocumentPane,
  PaneContainer,
  SerializeError,
  HELP_URL,
  maybeSerializeMenuItem,
  MenuItemBuilder,
  getOrderingMenuItem,
  getOrderingMenuItemsForSchemaType,
  maybeSerializeMenuItemGroup,
  MenuItemGroupBuilder,
  ComponentBuilder,
  GenericViewBuilder,
  maybeSerializeView,
  ComponentViewBuilder,
  FormViewBuilder,
  form,
  component,
  DocumentBuilder,
  documentFromEditor,
  documentFromEditorWithInitialValue,
  InitialValueTemplateItemBuilder,
  defaultInitialValueTemplateItems,
  maybeSerializeInitialValueTemplateItem,
  menuItemsFromInitialValueTemplateItems,
  DEFAULT_INTENT_HANDLER,
  defaultIntentChecker,
  shallowIntentChecker,
  GenericListBuilder,
  DocumentListBuilder,
  getTypeNamesFromFilter,
  ListBuilder,
  ListItemBuilder,
  DocumentListItemBuilder,
  isDocumentListItem,
  DocumentTypeListBuilder,
  createStructureBuilder,
  setActivePanes,
  structureTool,
  StructureToolProvider,
  CommentsIntentProvider2 as CommentsIntentProvider
};
//# sourceMappingURL=chunk-VED4F63Z.js.map
