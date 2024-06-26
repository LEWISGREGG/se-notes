import {
  BackLink,
  ChildLink,
  DocumentPane,
  LOADING_PANE,
  LoadingPane,
  Pane,
  PaneContainer,
  PaneContent,
  PaneHeader$1,
  PaneLayout,
  ParameterizedLink,
  ReferenceChildLink,
  SerializeError,
  StructureToolProvider,
  setActivePanes,
  structureLocaleNamespace,
  usePaneLayout,
  useStructureTool
} from "./chunk-VED4F63Z.js";
import "./chunk-453DJBPG.js";
import {
  Box,
  Button2 as Button,
  Card,
  Code,
  Container,
  ErrorBoundary,
  Flex,
  Heading,
  NEVER,
  PaneRouterContext,
  PortalProvider,
  ReplaySubject,
  SourceProvider,
  Stack,
  SyncIcon,
  Text,
  Translate,
  WarningOutlineIcon,
  _isCustomDocumentTypeDefinition,
  concat,
  distinctUntilChanged,
  firstValueFrom,
  from,
  generateHelpUrl,
  isHotkey,
  isObservable,
  isRecord$4,
  map,
  nanoid,
  of,
  pairwise,
  pt,
  publishReplay,
  refCount,
  require_isEqual,
  require_omit,
  scan,
  startWith,
  switchMap,
  toString,
  useDocumentPreview,
  useDocumentStore,
  useEditState,
  useRouter,
  useRouterState,
  useSchema,
  useTheme,
  useToast,
  useTranslation2 as useTranslation,
  useWorkspace,
  v4_default
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

// node_modules/sanity/lib/_chunks-es/index3.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var import_omit = __toESM(require_omit(), 1);
var import_isEqual = __toESM(require_isEqual(), 1);
var emptyArray = [];
function PaneRouterProvider(props) {
  const { children, flatIndex, index, params, payload, siblingIndex } = props, { navigate, navigateIntent, resolvePathFromState } = useRouter(), routerState = useRouterState(), { panes, expand } = usePaneLayout(), routerPaneGroups = (0, import_react.useMemo)(
    () => (routerState == null ? void 0 : routerState.panes) || emptyArray,
    [routerState == null ? void 0 : routerState.panes]
  ), lastPane = (0, import_react.useMemo)(() => panes == null ? void 0 : panes[panes.length - 2], [panes]), groupIndex = index - 1, createNextRouterState = (0, import_react.useCallback)(
    (modifier) => {
      const currentGroup = routerPaneGroups[groupIndex] || [], currentItem = currentGroup[siblingIndex], nextGroup = modifier(currentGroup, currentItem), nextPanes = [
        ...routerPaneGroups.slice(0, groupIndex),
        nextGroup,
        ...routerPaneGroups.slice(groupIndex + 1)
      ];
      return { ...routerState || {}, panes: nextPanes };
    },
    [groupIndex, routerPaneGroups, routerState, siblingIndex]
  ), modifyCurrentGroup = (0, import_react.useCallback)(
    (modifier) => {
      const nextRouterState = createNextRouterState(modifier);
      return setTimeout(() => navigate(nextRouterState), 0), nextRouterState;
    },
    [createNextRouterState, navigate]
  ), createPathWithParams = (0, import_react.useCallback)(
    (nextParams) => {
      const nextRouterState = createNextRouterState((siblings, item) => [
        ...siblings.slice(0, siblingIndex),
        { ...item, params: nextParams },
        ...siblings.slice(siblingIndex + 1)
      ]);
      return resolvePathFromState(nextRouterState);
    },
    [createNextRouterState, resolvePathFromState, siblingIndex]
  ), setPayload = (0, import_react.useCallback)(
    (nextPayload) => {
      modifyCurrentGroup((siblings, item) => [
        ...siblings.slice(0, siblingIndex),
        { ...item, payload: nextPayload },
        ...siblings.slice(siblingIndex + 1)
      ]);
    },
    [modifyCurrentGroup, siblingIndex]
  ), setParams = (0, import_react.useCallback)(
    (nextParams) => {
      modifyCurrentGroup((siblings, item) => [
        ...siblings.slice(0, siblingIndex),
        { ...item, params: nextParams },
        ...siblings.slice(siblingIndex + 1)
      ]);
    },
    [modifyCurrentGroup, siblingIndex]
  ), handleEditReference = (0, import_react.useCallback)(
    ({ id, parentRefPath, type, template }) => {
      navigate({
        panes: [
          ...routerPaneGroups.slice(0, groupIndex + 1),
          [
            {
              id,
              params: { template: template.id, parentRefPath: toString(parentRefPath), type },
              payload: template.params
            }
          ]
        ]
      });
    },
    [groupIndex, navigate, routerPaneGroups]
  ), ctx = (0, import_react.useMemo)(
    () => ({
      // Zero-based index (position) of pane, visually
      index: flatIndex,
      // Zero-based index of pane group (within URL structure)
      groupIndex,
      // Zero-based index of pane within sibling group
      siblingIndex,
      // Payload of the current pane
      payload,
      // Params of the current pane
      params,
      // Whether or not the pane has any siblings (within the same group)
      hasGroupSiblings: routerPaneGroups[groupIndex] ? routerPaneGroups[groupIndex].length > 1 : false,
      // The length of the current group
      groupLength: routerPaneGroups[groupIndex] ? routerPaneGroups[groupIndex].length : 0,
      // Current router state for the "panes" property
      routerPanesState: routerPaneGroups,
      // Curried StateLink that passes the correct state automatically
      ChildLink,
      // Curried StateLink that pops off the last pane group
      // Only pass if this is not the first pane
      BackLink: flatIndex ? BackLink : void 0,
      // A specialized `ChildLink` that takes in the needed props to open a
      // referenced document to the right
      ReferenceChildLink,
      // Similar to `ReferenceChildLink` expect without the wrapping component
      handleEditReference,
      // Curried StateLink that passed the correct state, but merges params/payload
      ParameterizedLink,
      // Replaces the current pane with a new one
      replaceCurrent: (opts = {}) => {
        modifyCurrentGroup(() => [
          { id: opts.id || "", payload: opts.payload, params: opts.params || {} }
        ]);
      },
      // Removes the current pane from the group
      closeCurrent: () => {
        modifyCurrentGroup(
          (siblings, item) => siblings.length > 1 ? siblings.filter((sibling) => sibling !== item) : siblings
        );
      },
      // Removes all panes to the right including current
      closeCurrentAndAfter: (expandLast = true) => {
        expandLast && lastPane && expand(lastPane.element), navigate(
          {
            panes: [...routerPaneGroups.slice(0, groupIndex)]
          },
          { replace: true }
        );
      },
      // Duplicate the current pane, with optional overrides for payload, parameters
      duplicateCurrent: (options) => {
        modifyCurrentGroup((siblings, item) => {
          const duplicatedItem = {
            ...item,
            payload: (options == null ? void 0 : options.payload) || item.payload,
            params: (options == null ? void 0 : options.params) || item.params
          };
          return [
            ...siblings.slice(0, siblingIndex),
            duplicatedItem,
            ...siblings.slice(siblingIndex)
          ];
        });
      },
      // Set the view for the current pane
      setView: (viewId) => {
        const restParams = (0, import_omit.default)(params, "view");
        return setParams(viewId ? { ...restParams, view: viewId } : restParams);
      },
      // Set the parameters for the current pane
      setParams,
      // Set the payload for the current pane
      setPayload,
      // A function that returns a path with the given parameters
      createPathWithParams,
      // Proxied navigation to a given intent. Consider just exposing `router` instead?
      navigateIntent
    }),
    [
      flatIndex,
      groupIndex,
      siblingIndex,
      payload,
      params,
      routerPaneGroups,
      handleEditReference,
      setParams,
      setPayload,
      createPathWithParams,
      navigateIntent,
      modifyCurrentGroup,
      lastPane,
      navigate,
      expand
    ]
  );
  return (0, import_jsx_runtime.jsx)(PaneRouterContext.Provider, { value: ctx, children });
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value);
var PaneResolutionError = class extends Error {
  constructor({ message, context, helpId, cause }) {
    super(message), __publicField(this, "cause"), __publicField(this, "context"), __publicField(this, "helpId"), this.name = "PaneResolutionError", this.context = context, this.helpId = helpId, this.cause = cause;
  }
};
var randomIdCache = /* @__PURE__ */ new WeakMap();
function assignId(obj) {
  const cachedValue = randomIdCache.get(obj);
  if (cachedValue)
    return cachedValue;
  const id = nanoid();
  return randomIdCache.set(obj, id), id;
}
var isPromise = (thing) => !!thing && typeof (thing == null ? void 0 : thing.then) == "function";
var isSerializable = (thing) => isRecord$4(thing) ? typeof thing.serialize == "function" : false;
var rethrowWithPaneResolutionErrors = (next) => (unresolvedPane, context, flatIndex) => {
  try {
    return next(unresolvedPane, context, flatIndex);
  } catch (e) {
    throw e instanceof PaneResolutionError ? e : new PaneResolutionError({
      message: typeof (e == null ? void 0 : e.message) == "string" ? e.message : "",
      context,
      cause: e
    });
  }
};
var wrapWithPublishReplay = (next) => (...args) => next(...args).pipe(
  // need to add publishReplay + refCount to ensure new subscribers always
  // get an emission. without this, memoized observables may get stuck
  // waiting for their first emissions resulting in a loading pane
  publishReplay(1),
  refCount()
);
function createPaneResolver(middleware) {
  const resolvePane = rethrowWithPaneResolutionErrors(
    wrapWithPublishReplay(
      middleware((unresolvedPane, context, flatIndex) => {
        if (!unresolvedPane)
          throw new PaneResolutionError({
            message: "Pane returned no child",
            context,
            helpId: "structure-item-returned-no-child"
          });
        return isPromise(unresolvedPane) || isObservable(unresolvedPane) ? from(unresolvedPane).pipe(
          switchMap((result) => resolvePane(result, context, flatIndex))
        ) : isSerializable(unresolvedPane) ? resolvePane(unresolvedPane.serialize(context), context, flatIndex) : typeof unresolvedPane == "function" ? resolvePane(unresolvedPane(context.id, context), context, flatIndex) : of(unresolvedPane);
      })
    )
  );
  return resolvePane;
}
var bindCache = /* @__PURE__ */ new WeakMap();
function memoBind(obj, methodKey) {
  const boundMethods = bindCache.get(obj) || /* @__PURE__ */ new Map();
  if (boundMethods) {
    const bound2 = boundMethods.get(methodKey);
    if (bound2)
      return bound2;
  }
  const method = obj[methodKey];
  if (typeof method != "function")
    throw new Error(
      `Expected property \`${methodKey}\` to be a function but got ${typeof method} instead.`
    );
  const bound = method.bind(obj);
  return boundMethods.set(methodKey, bound), bindCache.set(obj, boundMethods), bound;
}
async function resolveIntent(options) {
  const resolvedPaneCache = /* @__PURE__ */ new Map(), resolvePane = createPaneResolver((nextFn) => (unresolvedPane, context, flatIndex) => {
    const key = unresolvedPane && `${assignId(unresolvedPane)}-${context.path.join("__")}`, cachedResolvedPane = key && resolvedPaneCache.get(key);
    if (cachedResolvedPane)
      return cachedResolvedPane;
    const result = nextFn(unresolvedPane, context, flatIndex);
    return key && resolvedPaneCache.set(key, result), result;
  }), fallbackEditorPanes = [
    [
      {
        id: `__edit__${options.params.id}`,
        params: { ...(0, import_omit.default)(options.params, ["id"]), type: options.params.type },
        payload: options.payload
      }
    ]
  ];
  async function traverse({
    currentId,
    flatIndex,
    intent,
    params,
    parent: parent2,
    path,
    payload,
    unresolvedPane,
    levelIndex,
    structureContext
  }) {
    var _a;
    if (!unresolvedPane)
      return [];
    const { id: targetId, type: schemaTypeName, ...otherParams } = params, resolvedPane = await firstValueFrom(resolvePane(unresolvedPane, {
      id: currentId,
      splitIndex: 0,
      parent: parent2,
      path,
      index: flatIndex,
      params: {},
      payload: void 0,
      structureContext
    }, flatIndex));
    return resolvedPane.type === "document" && resolvedPane.id === targetId ? [
      {
        panes: [
          ...path.slice(0, path.length - 1).map((i) => [{ id: i }]),
          [{ id: targetId, params: otherParams, payload }]
        ],
        depthIndex: path.length,
        levelIndex
      }
    ] : (
      // if the resolve pane's `canHandleIntent` returns true, then resolve
      (_a = resolvedPane.canHandleIntent) != null && _a.call(resolvedPane, intent, params, {
        pane: resolvedPane,
        index: flatIndex
      }) || // if the pane's `canHandleIntent` did not return true, then match against
      // this default case. we will resolve the intent if:
      resolvedPane.type === "documentList" && // 1. the schema type matches (this required for the document to render)
      resolvedPane.schemaTypeName === schemaTypeName && // 2. the filter is the default filter.
      //
      // NOTE: this case is to prevent false positive matches where the user
      // has configured a more specific filter for a particular type. In that
      // case, the user can implement their own `canHandleIntent` function
      resolvedPane.options.filter === "_type == $type" ? [
        {
          panes: [
            // map the current path to router panes
            ...path.map((id) => [{ id }]),
            // then augment with the intents IDs and params
            [{ id: params.id, params: otherParams, payload }]
          ],
          depthIndex: path.length,
          levelIndex
        }
      ] : resolvedPane.type === "list" && resolvedPane.child && resolvedPane.items ? (await Promise.all(
        resolvedPane.items.map((item, nextLevelIndex) => item.type === "divider" ? Promise.resolve([]) : traverse({
          currentId: item._id || item.id,
          flatIndex: flatIndex + 1,
          intent,
          params,
          parent: resolvedPane,
          path: [...path, item.id],
          payload,
          unresolvedPane: typeof resolvedPane.child == "function" ? memoBind(resolvedPane, "child") : resolvedPane.child,
          levelIndex: nextLevelIndex,
          structureContext
        }))
      )).flat() : []
    );
  }
  const closestPaneToRoot = (await traverse({
    currentId: "root",
    flatIndex: 0,
    levelIndex: 0,
    intent: options.intent,
    params: options.params,
    parent: null,
    path: [],
    payload: options.payload,
    unresolvedPane: options.rootPaneNode,
    structureContext: options.structureContext
  })).sort((a, b) => a.depthIndex === b.depthIndex ? a.levelIndex - b.levelIndex : a.depthIndex - b.depthIndex)[0];
  return closestPaneToRoot ? closestPaneToRoot.panes : fallbackEditorPanes;
}
var fallbackEditorChild = (nodeId, context) => {
  const id = nodeId.replace(/^__edit__/, ""), {
    params,
    payload,
    structureContext: { resolveDocumentNode }
  } = context, { type, template } = params;
  if (!type)
    throw new Error(
      `Document type for document with ID ${id} was not provided in the router params.`
    );
  let defaultDocumentBuilder = resolveDocumentNode({ schemaType: type, documentId: id }).id("editor");
  return template && (defaultDocumentBuilder = defaultDocumentBuilder.initialValueTemplate(
    template,
    payload
  )), defaultDocumentBuilder.serialize();
};
function hashContext(context) {
  var _a, _b;
  return `contextHash(${JSON.stringify({
    id: context.id,
    parentId: parent && assignId(parent),
    path: context.path,
    index: context.index,
    splitIndex: context.splitIndex,
    serializeOptionsIndex: (_a = context.serializeOptions) == null ? void 0 : _a.index,
    serializeOptionsPath: (_b = context.serializeOptions) == null ? void 0 : _b.path
  })})`;
}
var hashResolvedPaneMeta = (meta) => {
  const normalized = {
    type: meta.type,
    id: meta.routerPaneSibling.id,
    params: meta.routerPaneSibling.params || {},
    payload: meta.routerPaneSibling.payload || null,
    flatIndex: meta.flatIndex,
    groupIndex: meta.groupIndex,
    siblingIndex: meta.siblingIndex,
    path: meta.path,
    paneNode: meta.type === "resolvedMeta" ? assignId(meta.paneNode) : null
  };
  return `metaHash(${JSON.stringify(normalized)})`;
};
function resolvePaneTree({
  unresolvedPane,
  flattenedRouterPanes,
  parent: parent2,
  path,
  resolvePane,
  structureContext
}) {
  const [current, ...rest] = flattenedRouterPanes, next = rest[0], context = {
    id: current.routerPaneSibling.id,
    splitIndex: current.siblingIndex,
    parent: parent2,
    path: [...path, current.routerPaneSibling.id],
    index: current.flatIndex,
    params: current.routerPaneSibling.params || {},
    payload: current.routerPaneSibling.payload,
    structureContext
  };
  try {
    return resolvePane(unresolvedPane, context, current.flatIndex).pipe(
      // this switch map receives a resolved pane
      switchMap((paneNode) => {
        const resolvedPaneMeta = {
          type: "resolvedMeta",
          ...current,
          paneNode,
          path: context.path
        }, loadingPanes = rest.map((i, restIndex) => ({
          type: "loading",
          path: [
            ...context.path,
            ...rest.slice(restIndex).map((_, currentIndex) => `[${i.flatIndex + currentIndex}]`)
          ],
          paneNode: null,
          ...i
        }));
        if (!rest.length)
          return of([resolvedPaneMeta]);
        let nextStream;
        return (
          /* the fallback editor case */
          next != null && next.routerPaneSibling.id.startsWith("__edit__") ? nextStream = resolvePaneTree({
            unresolvedPane: fallbackEditorChild,
            flattenedRouterPanes: rest,
            parent: parent2,
            path: context.path,
            resolvePane,
            structureContext
          }) : current.groupIndex === (next == null ? void 0 : next.groupIndex) ? nextStream = resolvePaneTree({
            unresolvedPane,
            flattenedRouterPanes: rest,
            parent: parent2,
            path,
            resolvePane,
            structureContext
          }) : nextStream = resolvePaneTree({
            unresolvedPane: typeof paneNode.child == "function" ? memoBind(paneNode, "child") : paneNode.child,
            flattenedRouterPanes: rest,
            parent: paneNode,
            path: context.path,
            resolvePane,
            structureContext
          }), concat(
            // we emit the loading panes first in a concat (this emits immediately)
            of([resolvedPaneMeta, ...loadingPanes]),
            // then whenever the next stream is done, the results will be combined.
            nextStream.pipe(map((nextResolvedPanes) => [resolvedPaneMeta, ...nextResolvedPanes]))
          )
        );
      })
    );
  } catch (e) {
    if (e instanceof PaneResolutionError && (e.context && console.warn(
      `Pane resolution error at index ${e.context.index}${e.context.splitIndex > 0 ? ` for split pane index ${e.context.splitIndex}` : ""}: ${e.message}${e.helpId ? ` - see ${generateHelpUrl(e.helpId)}` : ""}`,
      e
    ), e.helpId === "structure-item-returned-no-child"))
      return of([]);
    throw e;
  }
}
function createResolvedPaneNodeStream({
  routerPanesStream,
  rootPaneNode,
  initialCacheState = {
    cacheKeysByFlatIndex: [],
    flattenedRouterPanes: [],
    resolvedPaneCache: /* @__PURE__ */ new Map(),
    resolvePane: () => NEVER
  },
  structureContext
}) {
  return routerPanesStream.pipe(
    // add in implicit "root" router pane
    map((rawRouterPanes) => [[{ id: "root" }], ...rawRouterPanes]),
    // create flattened router panes
    map((routerPanes) => routerPanes.flatMap(
      (routerPaneGroup, groupIndex) => routerPaneGroup.map((routerPaneSibling, siblingIndex) => ({
        routerPaneSibling,
        groupIndex,
        siblingIndex
      }))
    ).map((i, index) => ({ ...i, flatIndex: index }))),
    // calculate a "diffIndex" used for clearing the memo cache
    startWith([]),
    pairwise(),
    map(([prev, curr]) => {
      for (let i = 0; i < curr.length; i++) {
        const prevValue = prev[i], currValue = curr[i];
        if (!(0, import_isEqual.default)(prevValue, currValue))
          return {
            flattenedRouterPanes: curr,
            diffIndex: i
          };
      }
      return {
        flattenedRouterPanes: curr,
        diffIndex: curr.length
      };
    }),
    // create the memoized `resolvePane` function and manage the memo cache
    scan((acc, next) => {
      const { cacheKeysByFlatIndex, resolvedPaneCache } = acc, { flattenedRouterPanes, diffIndex } = next, beforeDiffIndex = cacheKeysByFlatIndex.slice(0, diffIndex + 1), afterDiffIndex = cacheKeysByFlatIndex.slice(diffIndex + 1), keysToKeep = new Set(beforeDiffIndex.flatMap((keySet) => Array.from(keySet))), keysToDelete = afterDiffIndex.flatMap((keySet) => Array.from(keySet)).filter((key) => !keysToKeep.has(key));
      for (const key of keysToDelete)
        resolvedPaneCache.delete(key);
      return {
        flattenedRouterPanes,
        cacheKeysByFlatIndex,
        resolvedPaneCache,
        resolvePane: createPaneResolver((nextFn) => (unresolvedPane, context, flatIndex) => {
          const key = unresolvedPane && `${assignId(unresolvedPane)}-${hashContext(context)}`, cachedResolvedPane = key && resolvedPaneCache.get(key);
          if (cachedResolvedPane)
            return cachedResolvedPane;
          const result = nextFn(unresolvedPane, context, flatIndex);
          if (!key)
            return result;
          const cacheKeySet = cacheKeysByFlatIndex[flatIndex] || /* @__PURE__ */ new Set();
          return cacheKeySet.add(key), cacheKeysByFlatIndex[flatIndex] = cacheKeySet, resolvedPaneCache.set(key, result), result;
        })
      };
    }, initialCacheState),
    // run the memoized, recursive resolving
    switchMap(
      ({ flattenedRouterPanes, resolvePane }) => resolvePaneTree({
        unresolvedPane: rootPaneNode,
        flattenedRouterPanes,
        parent: null,
        path: [],
        resolvePane,
        structureContext
      })
    )
  ).pipe(
    // this diffs the previous emission with the current one. if there is a new
    // loading pane at the same position where a previous pane already had a
    // resolved value (looking at the IDs to compare), then return the previous
    // pane instead of the loading pane
    scan(
      (prev, next) => next.map((nextPane, index) => {
        const prevPane = prev[index];
        return !prevPane || nextPane.type !== "loading" ? nextPane : prevPane.routerPaneSibling.id === nextPane.routerPaneSibling.id ? prevPane : nextPane;
      }),
      []
    ),
    // this prevents duplicate emissions
    distinctUntilChanged((prev, next) => {
      if (prev.length !== next.length)
        return false;
      for (let i = 0; i < next.length; i++) {
        const prevValue = prev[i], nextValue = next[i];
        if (hashResolvedPaneMeta(prevValue) !== hashResolvedPaneMeta(nextValue))
          return false;
      }
      return true;
    })
  );
}
function useRouterPanesStream() {
  const routerStateSubject = (0, import_react.useMemo)(() => new ReplaySubject(1), []), routerPanes$ = (0, import_react.useMemo)(
    () => routerStateSubject.asObservable().pipe(map((_routerState) => (_routerState == null ? void 0 : _routerState.panes) || [])),
    [routerStateSubject]
  ), { state: routerState } = useRouter();
  return (0, import_react.useEffect)(() => {
    routerStateSubject.next(routerState);
  }, [routerState, routerStateSubject]), routerPanes$;
}
function useResolvedPanes() {
  const [error, setError] = (0, import_react.useState)();
  if (error)
    throw error;
  const { structureContext, rootPaneNode } = useStructureTool(), [data, setData] = (0, import_react.useState)({
    paneDataItems: [],
    resolvedPanes: [],
    routerPanes: []
  }), routerPanesStream = useRouterPanesStream();
  return (0, import_react.useEffect)(() => {
    const subscription = createResolvedPaneNodeStream({
      rootPaneNode,
      routerPanesStream,
      structureContext
    }).pipe(
      map((resolvedPanes) => {
        const routerPanes = resolvedPanes.reduce((acc, next) => {
          const currentGroup = acc[next.groupIndex] || [];
          return currentGroup[next.siblingIndex] = next.routerPaneSibling, acc[next.groupIndex] = currentGroup, acc;
        }, []), groupsLen = routerPanes.length, paneDataItems = resolvedPanes.map((pane2) => {
          var _a;
          const { groupIndex, flatIndex, siblingIndex, routerPaneSibling, path } = pane2, itemId = routerPaneSibling.id, nextGroup = routerPanes[groupIndex + 1];
          return {
            active: groupIndex === groupsLen - 2,
            childItemId: (_a = nextGroup == null ? void 0 : nextGroup[0].id) != null ? _a : null,
            index: flatIndex,
            itemId: routerPaneSibling.id,
            groupIndex,
            key: `${pane2.type === "loading" ? "unknown" : pane2.paneNode.id}-${itemId}-${siblingIndex}`,
            pane: pane2.type === "loading" ? LOADING_PANE : pane2.paneNode,
            params: routerPaneSibling.params || {},
            path: path.join(";"),
            payload: routerPaneSibling.payload,
            selected: flatIndex === resolvedPanes.length - 1,
            siblingIndex
          };
        });
        return {
          paneDataItems,
          routerPanes,
          resolvedPanes: paneDataItems.map((pane2) => pane2.pane)
        };
      })
    ).subscribe({
      next: (result) => setData(result),
      error: (e) => setError(e)
    });
    return () => subscription.unsubscribe();
  }, [rootPaneNode, routerPanesStream, structureContext]), data;
}
async function ensureDocumentIdAndType(documentStore, id, type) {
  if (id && type)
    return { id, type };
  if (!id && type)
    return { id: v4_default(), type };
  if (id && !type) {
    const resolvedType = await firstValueFrom(
      documentStore.resolveTypeForDocument(id)
    );
    return { id, type: resolvedType };
  }
  throw new PaneResolutionError({
    message: "Neither document `id` or `type` was provided when trying to resolve intent."
  });
}
var EMPTY_RECORD = {};
var IntentResolver = (0, import_react.memo)(function() {
  const { navigate } = useRouter(), maybeIntent = useRouterState(
    (0, import_react.useCallback)((routerState) => {
      const intentName = typeof routerState.intent == "string" ? routerState.intent : void 0;
      return intentName ? {
        intent: intentName,
        params: isRecord$4(routerState.params) ? routerState.params : EMPTY_RECORD,
        payload: routerState.payload
      } : void 0;
    }, [])
  ), { rootPaneNode, structureContext } = useStructureTool(), documentStore = useDocumentStore(), [error, setError] = (0, import_react.useState)(null);
  if (error)
    throw error;
  return (0, import_react.useEffect)(() => {
    if (maybeIntent) {
      const { intent, params, payload } = maybeIntent;
      let cancelled = false;
      async function effect() {
        const { id, type } = await ensureDocumentIdAndType(
          documentStore,
          typeof params.id == "string" ? params.id : void 0,
          typeof params.type == "string" ? params.type : void 0
        );
        if (cancelled)
          return;
        const panes = await resolveIntent({
          intent,
          params: { ...params, id, type },
          payload,
          rootPaneNode,
          structureContext
        });
        cancelled || navigate({ panes }, { replace: true });
      }
      return effect().catch(setError), () => {
        cancelled = true;
      };
    }
  }, [documentStore, maybeIntent, navigate, rootPaneNode, structureContext]), null;
});
var PathSegment = pt.span`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`;
function formatStack(stack) {
  return stack.replace(/\(\.\.\.\)\./g, `(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g, "").replace(/___default\./g, ".").replace(new RegExp(` \\(https?:\\/\\/${window.location.host}`, "g"), " (");
}
function StructureError({ error }) {
  if (!(error instanceof PaneResolutionError))
    throw error;
  const { cause } = error, { t } = useTranslation(structureLocaleNamespace), stack = (cause == null ? void 0 : cause.stack) || error.stack, showStack = stack && !(cause instanceof SerializeError) && !error.message.includes("Module build failed:"), path = cause instanceof SerializeError ? cause.path : [], helpId = cause instanceof SerializeError && cause.helpId || error.helpId, handleReload = (0, import_react.useCallback)(() => {
    window.location.reload();
  }, []);
  return (0, import_jsx_runtime.jsx)(Card, { height: "fill", overflow: "auto", padding: 4, sizing: "border", tone: "critical", children: (0, import_jsx_runtime.jsxs)(Container, { children: [
    (0, import_jsx_runtime.jsx)(Heading, { as: "h2", children: t("structure-error.header.text") }),
    (0, import_jsx_runtime.jsxs)(Card, { marginTop: 4, padding: 4, radius: 2, overflow: "auto", shadow: 1, tone: "inherit", children: [
      path.length > 0 && (0, import_jsx_runtime.jsxs)(Stack, { space: 2, children: [
        (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: t("structure-error.structure-path.label") }),
        (0, import_jsx_runtime.jsx)(Code, { children: path.slice(1).map((segment, i) => (
          // eslint-disable-next-line react/no-array-index-key
          (0, import_jsx_runtime.jsx)(PathSegment, { children: segment }, `${segment}-${i}`)
        )) })
      ] }),
      (0, import_jsx_runtime.jsxs)(Stack, { marginTop: 4, space: 2, children: [
        (0, import_jsx_runtime.jsx)(Text, { size: 1, weight: "medium", children: t("structure-error.error.label") }),
        (0, import_jsx_runtime.jsx)(Code, { children: showStack ? formatStack(stack) : error.message })
      ] }),
      helpId && (0, import_jsx_runtime.jsx)(Box, { marginTop: 4, children: (0, import_jsx_runtime.jsx)(Text, { children: (0, import_jsx_runtime.jsx)("a", { href: generateHelpUrl(helpId), rel: "noopener noreferrer", target: "_blank", children: t("structure-error.docs-link.text") }) }) }),
      (0, import_jsx_runtime.jsx)(Box, { marginTop: 4, children: (0, import_jsx_runtime.jsx)(
        Button,
        {
          text: t("structure-error.reload-button.text"),
          icon: SyncIcon,
          tone: "primary",
          onClick: handleReload
        }
      ) })
    ] })
  ] }) });
}
function UnknownPane(props) {
  const { isSelected, pane: pane2, paneKey } = props, type = isRecord$4(pane2) && pane2.type || null, { t } = useTranslation(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsxs)(Pane, { id: paneKey, selected: isSelected, children: [
    (0, import_jsx_runtime.jsx)(PaneHeader$1, { title: t("panes.unknown-pane-type.title") }),
    (0, import_jsx_runtime.jsx)(PaneContent, { children: (0, import_jsx_runtime.jsx)(Box, { padding: 4, children: typeof type == "string" ? (0, import_jsx_runtime.jsx)(Text, { as: "p", muted: true, children: (0, import_jsx_runtime.jsx)(
      Translate,
      {
        t,
        i18nKey: "panes.unknown-pane-type.unknown-type.text",
        values: { type }
      }
    ) }) : (0, import_jsx_runtime.jsx)(Text, { as: "p", muted: true, children: (0, import_jsx_runtime.jsx)(Translate, { t, i18nKey: "panes.unknown-pane-type.missing-type.text" }) }) }) })
  ] });
}
var paneMap = {
  component: (0, import_react.lazy)(() => import("./_chunks-es-WYV3L4PE.js")),
  document: (0, import_react.lazy)(() => Promise.resolve().then(function() {
    return pane$1;
  })),
  documentList: (0, import_react.lazy)(() => Promise.resolve().then(function() {
    return pane;
  })),
  list: (0, import_react.lazy)(() => import("./index2-SQUKYFDA.js"))
};
var StructureToolPane = (0, import_react.memo)(
  function(props) {
    const {
      active,
      childItemId,
      groupIndex,
      index,
      itemId,
      pane: pane2,
      paneKey,
      params,
      payload,
      path,
      selected,
      siblingIndex
    } = props, PaneComponent = paneMap[pane2.type] || UnknownPane;
    return (0, import_jsx_runtime.jsx)(
      PaneRouterProvider,
      {
        flatIndex: index,
        index: groupIndex,
        params,
        payload,
        siblingIndex,
        children: (0, import_jsx_runtime.jsx)(import_react.Suspense, { fallback: (0, import_jsx_runtime.jsx)(LoadingPane, { paneKey, path, selected }), children: (0, import_jsx_runtime.jsx)(
          PaneComponent,
          {
            childItemId: childItemId || "",
            index,
            itemId,
            isActive: active,
            isSelected: selected,
            paneKey,
            pane: pane2
          }
        ) })
      }
    );
  },
  ({ params: prevParams = {}, payload: prevPayload = null, ...prev }, { params: nextParams = {}, payload: nextPayload = null, ...next }) => {
    if (!(0, import_isEqual.default)(prevParams, nextParams) || !(0, import_isEqual.default)(prevPayload, nextPayload))
      return false;
    const keys = /* @__PURE__ */ new Set([...Object.keys(prev), ...Object.keys(next)]);
    for (const key of keys)
      if (prev[key] !== next[key])
        return false;
    return true;
  }
);
function NoDocumentTypesScreen() {
  const { t } = useTranslation(structureLocaleNamespace);
  return (0, import_jsx_runtime.jsx)(Card, { height: "fill", children: (0, import_jsx_runtime.jsx)(Flex, { align: "center", height: "fill", justify: "center", padding: 4, sizing: "border", children: (0, import_jsx_runtime.jsx)(Container, { width: 0, children: (0, import_jsx_runtime.jsx)(Card, { padding: 4, radius: 2, shadow: 1, tone: "caution", children: (0, import_jsx_runtime.jsxs)(Flex, { children: [
    (0, import_jsx_runtime.jsx)(Box, { children: (0, import_jsx_runtime.jsx)(Text, { size: 1, children: (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {}) }) }),
    (0, import_jsx_runtime.jsxs)(Stack, { flex: 1, marginLeft: 3, space: 3, children: [
      (0, import_jsx_runtime.jsx)(Text, { as: "h1", size: 1, weight: "medium", children: t("no-document-types-screen.title") }),
      (0, import_jsx_runtime.jsx)(Text, { as: "p", muted: true, size: 1, children: t("no-document-types-screen.subtitle") }),
      (0, import_jsx_runtime.jsx)(Text, { as: "p", muted: true, size: 1, children: (0, import_jsx_runtime.jsx)(
        "a",
        {
          href: "https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",
          target: "_blank",
          rel: "noreferrer",
          children: t("no-document-types-screen.link-text")
        }
      ) })
    ] })
  ] }) }) }) }) });
}
var DocumentTitle = (props) => {
  const { documentId, documentType } = props, editState = useEditState(documentId, documentType), schema = useSchema(), { t } = useTranslation(structureLocaleNamespace), isNewDocument = !(editState != null && editState.published) && !(editState != null && editState.draft), documentValue = (editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published), schemaType = schema.get(documentType), { value, isLoading: previewValueIsLoading } = useDocumentPreview({
    enabled: true,
    schemaType,
    value: documentValue
  }), documentTitle = isNewDocument ? t("browser-document-title.new-document", {
    schemaType: (schemaType == null ? void 0 : schemaType.title) || (schemaType == null ? void 0 : schemaType.name)
  }) : (value == null ? void 0 : value.title) || t("browser-document-title.untitled-document"), settled = editState.ready && !previewValueIsLoading, newTitle = useConstructDocumentTitle(documentTitle);
  return (0, import_react.useEffect)(() => {
    settled && (document.title = newTitle);
  }, [documentTitle, settled, newTitle]), null;
};
var PassthroughTitle = (props) => {
  const { title } = props, newTitle = useConstructDocumentTitle(title);
  return (0, import_react.useEffect)(() => {
    document.title = newTitle;
  }, [newTitle, title]), null;
};
var StructureTitle = (props) => {
  const { resolvedPanes } = props;
  if (!(resolvedPanes != null && resolvedPanes.length))
    return null;
  const lastPane = resolvedPanes[resolvedPanes.length - 1];
  return isLoadingPane(lastPane) ? (0, import_jsx_runtime.jsx)(PassthroughTitle, {}) : isDocumentPane(lastPane) ? lastPane != null && lastPane.title ? (0, import_jsx_runtime.jsx)(PassthroughTitle, { title: lastPane.title }) : (0, import_jsx_runtime.jsx)(DocumentTitle, { documentId: lastPane.options.id, documentType: lastPane.options.type }) : (0, import_jsx_runtime.jsx)(PassthroughTitle, { title: lastPane == null ? void 0 : lastPane.title });
};
function useConstructDocumentTitle(activeTitle) {
  const structureToolBaseTitle = useStructureTool().structureContext.title;
  return [activeTitle, structureToolBaseTitle].filter((title) => title).join(" | ");
}
function isDocumentPane(pane2) {
  return pane2 !== LOADING_PANE && pane2.type === "document";
}
function isLoadingPane(pane2) {
  return pane2 === LOADING_PANE;
}
var StyledPaneLayout = pt(PaneLayout)`
  min-height: 100%;
  min-width: 320px;
`;
var isSaveHotkey = isHotkey("mod+s");
var StructureTool = (0, import_react.memo)(function({ onPaneChange }) {
  var _a;
  const { push: pushToast } = useToast(), schema = useSchema(), { layoutCollapsed, setLayoutCollapsed } = useStructureTool(), { paneDataItems, resolvedPanes } = useResolvedPanes(), isResolvingIntent = useRouterState(
    (0, import_react.useCallback)((routerState) => typeof routerState.intent == "string", [])
  ), {
    sanity: { media }
  } = useTheme(), [portalElement, setPortalElement] = (0, import_react.useState)(null), handleRootCollapse = (0, import_react.useCallback)(() => setLayoutCollapsed(true), [setLayoutCollapsed]), handleRootExpand = (0, import_react.useCallback)(() => setLayoutCollapsed(false), [setLayoutCollapsed]);
  return (0, import_react.useEffect)(() => {
    resolvedPanes.length && onPaneChange(resolvedPanes);
  }, [onPaneChange, resolvedPanes]), (0, import_react.useEffect)(() => {
    const handleGlobalKeyDown = (event) => {
      isSaveHotkey(event) && (event.preventDefault(), pushToast({
        closable: true,
        id: "auto-save-message",
        status: "info",
        title: "Your work is automatically saved!",
        duration: 4e3
      }));
    };
    return window.addEventListener("keydown", handleGlobalKeyDown), () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [pushToast]), (_a = schema._original) != null && _a.types.some(_isCustomDocumentTypeDefinition) ? (0, import_jsx_runtime.jsxs)(PortalProvider, { element: portalElement || null, children: [
    (0, import_jsx_runtime.jsxs)(
      StyledPaneLayout,
      {
        flex: 1,
        height: layoutCollapsed ? void 0 : "fill",
        minWidth: media[1],
        onCollapse: handleRootCollapse,
        onExpand: handleRootExpand,
        children: [
          paneDataItems.map(
            ({
              active,
              childItemId,
              groupIndex,
              itemId,
              key: paneKey,
              pane: pane2,
              index: paneIndex,
              params: paneParams,
              path,
              payload,
              siblingIndex,
              selected
            }) => (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: pane2 === LOADING_PANE ? (0, import_jsx_runtime.jsx)(LoadingPane, { paneKey, path, selected }) : (0, import_jsx_runtime.jsx)(
              StructureToolPane,
              {
                active,
                groupIndex,
                index: paneIndex,
                pane: pane2,
                childItemId,
                itemId,
                paneKey,
                params: paneParams,
                payload,
                path,
                selected,
                siblingIndex
              }
            ) }, `${pane2 === LOADING_PANE ? "loading" : pane2.type}-${paneIndex}`)
          ),
          paneDataItems.length <= 1 && isResolvingIntent && (0, import_jsx_runtime.jsx)(LoadingPane, { paneKey: "intent-resolver" })
        ]
      }
    ),
    (0, import_jsx_runtime.jsx)(StructureTitle, { resolvedPanes }),
    (0, import_jsx_runtime.jsx)("div", { "data-portal": "", ref: setPortalElement })
  ] }) : (0, import_jsx_runtime.jsx)(NoDocumentTypesScreen, {});
});
function StructureToolBoundary({ tool: { options } }) {
  const { unstable_sources: sources } = useWorkspace(), [firstSource] = sources, { source, defaultDocumentNode, structure } = options || {};
  (0, import_react.useEffect)(() => (setActivePanes([]), () => setActivePanes([])), []);
  const [{ error }, setError] = (0, import_react.useState)({ error: null });
  return error ? (0, import_jsx_runtime.jsx)(StructureError, { error }) : (0, import_jsx_runtime.jsx)(ErrorBoundary, { onCatch: setError, children: (0, import_jsx_runtime.jsx)(SourceProvider, { name: source || firstSource.name, children: (0, import_jsx_runtime.jsxs)(StructureToolProvider, { defaultDocumentNode, structure, children: [
    (0, import_jsx_runtime.jsx)(StructureTool, { onPaneChange: setActivePanes }),
    (0, import_jsx_runtime.jsx)(IntentResolver, {})
  ] }) }) });
}
var pane$1 = Object.freeze({
  __proto__: null,
  default: DocumentPane
});
var pane = Object.freeze({
  __proto__: null,
  default: PaneContainer
});
export {
  StructureToolBoundary as default
};
//# sourceMappingURL=index3-SDFOLBFY.js.map
