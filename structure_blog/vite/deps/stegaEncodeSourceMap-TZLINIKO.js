import {
  C
} from "./chunk-QWZQRRZG.js";
import "./chunk-AUZ3RYOM.js";

// node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js
var reKeySegment = /_key\s*==\s*['"](.*)['"]/;
function isKeySegment(segment) {
  return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function toString(path) {
  if (!Array.isArray(path))
    throw new Error("Path is not an array");
  return path.reduce((target, segment, i) => {
    const segmentType = typeof segment;
    if (segmentType === "number")
      return `${target}[${segment}]`;
    if (segmentType === "string")
      return `${target}${i === 0 ? "" : "."}${segment}`;
    if (isKeySegment(segment) && segment._key)
      return `${target}[_key=="${segment._key}"]`;
    if (Array.isArray(segment)) {
      const [from, to] = segment;
      return `${target}[${from}:${to}]`;
    }
    throw new Error(`Unsupported path segment \`${JSON.stringify(segment)}\``);
  }, "");
}
var ESCAPE = {
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "'": "\\'",
  "\\": "\\\\"
};
var UNESCAPE = {
  "\\f": "\f",
  "\\n": `
`,
  "\\r": "\r",
  "\\t": "	",
  "\\'": "'",
  "\\\\": "\\"
};
function jsonPath(path) {
  return `$${path.map((segment) => typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match) => ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key !== "" ? `[?(@._key=='${segment._key.replace(/['\\]/g, (match) => ESCAPE[match])}')]` : `[${segment._index}]`).join("")}`;
}
function parseJsonPath(path) {
  const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
  let match;
  for (; (match = parseRe.exec(path)) !== null; ) {
    if (match[1] !== void 0) {
      const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m) => UNESCAPE[m]);
      parsed.push(key);
      continue;
    }
    if (match[2] !== void 0) {
      parsed.push(parseInt(match[2], 10));
      continue;
    }
    if (match[3] !== void 0) {
      const _key = match[3].replace(/\\(\\')/g, (m) => UNESCAPE[m]);
      parsed.push({
        _key,
        _index: -1
      });
      continue;
    }
  }
  return parsed;
}
function jsonPathToStudioPath(path) {
  return path.map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (segment._key !== "")
      return { _key: segment._key };
    if (segment._index !== -1)
      return segment._index;
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function jsonPathToMappingPath(path) {
  return path.map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (segment._index !== -1)
      return segment._index;
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function resolveMapping(resultPath, csm) {
  if (!(csm != null && csm.mappings))
    return;
  const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
  if (csm.mappings[resultMappingPath] !== void 0)
    return {
      mapping: csm.mappings[resultMappingPath],
      matchedPath: resultMappingPath,
      pathSuffix: ""
    };
  const mappings = Object.entries(csm.mappings).filter(([key]) => resultMappingPath.startsWith(key)).sort(([key1], [key2]) => key2.length - key1.length);
  if (mappings.length == 0)
    return;
  const [matchedPath, mapping] = mappings[0], pathSuffix = resultMappingPath.substring(matchedPath.length);
  return { mapping, matchedPath, pathSuffix };
}
function isArray(value) {
  return value !== null && Array.isArray(value);
}
function isRecord(value) {
  return typeof value == "object" && value !== null;
}
function walkMap(value, mappingFn, path = []) {
  return isArray(value) ? value.map((v, idx) => {
    if (isRecord(v)) {
      const _key = v._key;
      if (typeof _key == "string")
        return walkMap(v, mappingFn, path.concat({ _key, _index: idx }));
    }
    return walkMap(v, mappingFn, path.concat(idx));
  }) : isRecord(value) ? Object.fromEntries(
    Object.entries(value).map(([k, v]) => [k, walkMap(v, mappingFn, path.concat(k))])
  ) : mappingFn(value, path);
}
function encodeIntoResult(result, csm, encoder) {
  return walkMap(result, (value, path) => {
    if (typeof value != "string")
      return value;
    const resolveMappingResult = resolveMapping(path, csm);
    if (!resolveMappingResult)
      return value;
    const { mapping, matchedPath } = resolveMappingResult;
    if (mapping.type !== "value" || mapping.source.type !== "documentValue")
      return value;
    const sourceDocument = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path], matchPathSegments = parseJsonPath(matchedPath), fullSourceSegments = parseJsonPath(sourcePath).concat(path.slice(matchPathSegments.length));
    return encoder({
      sourcePath: fullSourceSegments,
      sourceDocument,
      resultPath: path,
      value
    });
  });
}
var DRAFTS_PREFIX = "drafts.";
function getPublishedId(id) {
  return id.startsWith(DRAFTS_PREFIX) ? id.slice(DRAFTS_PREFIX.length) : id;
}
function createEditUrl(options) {
  const {
    baseUrl,
    workspace: _workspace = "default",
    tool: _tool = "default",
    id: _id,
    type,
    path,
    projectId,
    dataset
  } = options;
  if (!baseUrl)
    throw new Error("baseUrl is required");
  if (!path)
    throw new Error("path is required");
  if (!_id)
    throw new Error("id is required");
  if (baseUrl !== "/" && baseUrl.endsWith("/"))
    throw new Error("baseUrl must not end with a slash");
  const workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
    baseUrl,
    id,
    type,
    path: stringifiedPath
  });
  workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), _id.startsWith(DRAFTS_PREFIX) && searchParams.set("isDraft", "");
  const segments = [baseUrl === "/" ? "" : baseUrl];
  workspace && segments.push(workspace);
  const routerParams = [
    "mode=presentation",
    `id=${id}`,
    `type=${type}`,
    `path=${encodeURIComponent(stringifiedPath)}`
  ];
  return tool && routerParams.push(`tool=${tool}`), segments.push("intent", "edit", `${routerParams.join(";")}?${searchParams}`), segments.join("/");
}
function resolveStudioBaseRoute(studioUrl) {
  let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
  return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? { baseUrl } : { ...studioUrl, baseUrl };
}
var filterDefault = ({ sourcePath, resultPath, value }) => {
  if (isValidDate(value) || isValidURL(value))
    return false;
  const endPath = sourcePath.at(-1);
  return !(sourcePath.at(-2) === "slug" && endPath === "current" || typeof endPath == "string" && endPath.startsWith("_") || typeof endPath == "number" && sourcePath.at(-2) === "marks" || endPath === "href" && typeof sourcePath.at(-2) == "number" && sourcePath.at(-3) === "markDefs" || endPath === "style" || endPath === "listItem" || sourcePath.some(
    (path) => path === "meta" || path === "metadata" || path === "openGraph" || path === "seo"
  ) || hasTypeLike(sourcePath) || hasTypeLike(resultPath) || typeof endPath == "string" && denylist.has(endPath));
};
var denylist = /* @__PURE__ */ new Set([
  "color",
  "colour",
  "currency",
  "email",
  "format",
  "gid",
  "hex",
  "href",
  "hsl",
  "hsla",
  "icon",
  "id",
  "index",
  "key",
  "language",
  "layout",
  "link",
  "linkAction",
  "locale",
  "lqip",
  "page",
  "path",
  "ref",
  "rgb",
  "rgba",
  "route",
  "secret",
  "slug",
  "status",
  "tag",
  "template",
  "theme",
  "type",
  "unit",
  "url",
  "username",
  "variant",
  "website"
]);
function isValidDate(dateString) {
  return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? !!Date.parse(dateString) : false;
}
function isValidURL(url) {
  try {
    new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return false;
  }
  return true;
}
function hasTypeLike(path) {
  return path.some((segment) => typeof segment == "string" && segment.match(/type/i) !== null);
}
var TRUNCATE_LENGTH = 20;
function stegaEncodeSourceMap(result, resultSourceMap, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { filter, logger, enabled } = config;
  if (!enabled) {
    const msg = "config.enabled must be true, don't call this function otherwise";
    throw (_a = logger == null ? void 0 : logger.error) == null || _a.call(logger, `[@sanity/client]: ${msg}`, { result, resultSourceMap, config }), new TypeError(msg);
  }
  if (!resultSourceMap)
    return (_b = logger == null ? void 0 : logger.error) == null || _b.call(logger, "[@sanity/client]: Missing Content Source Map from response body", {
      result,
      resultSourceMap,
      config
    }), result;
  if (!config.studioUrl) {
    const msg = "config.studioUrl must be defined";
    throw (_c = logger == null ? void 0 : logger.error) == null || _c.call(logger, `[@sanity/client]: ${msg}`, { result, resultSourceMap, config }), new TypeError(msg);
  }
  const report = {
    encoded: [],
    skipped: []
  }, resultWithStega = encodeIntoResult(
    result,
    resultSourceMap,
    ({ sourcePath, sourceDocument, resultPath, value }) => {
      if ((typeof filter == "function" ? filter({ sourcePath, resultPath, filterDefault, sourceDocument, value }) : filterDefault({ sourcePath, resultPath, filterDefault, sourceDocument, value })) === false)
        return logger && report.skipped.push({
          path: prettyPathForLogging(sourcePath),
          value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
          length: value.length
        }), value;
      logger && report.encoded.push({
        path: prettyPathForLogging(sourcePath),
        value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
        length: value.length
      });
      const { baseUrl, workspace, tool } = resolveStudioBaseRoute(
        typeof config.studioUrl == "function" ? config.studioUrl(sourceDocument) : config.studioUrl
      );
      if (!baseUrl)
        return value;
      const { _id: id, _type: type, _projectId: projectId, _dataset: dataset } = sourceDocument;
      return C(
        value,
        {
          origin: "sanity.io",
          href: createEditUrl({
            baseUrl,
            workspace,
            tool,
            id,
            type,
            path: sourcePath,
            ...!config.omitCrossDatasetReferenceData && { dataset, projectId }
          })
        },
        // We use custom logic to determine if we should skip encoding
        false
      );
    }
  );
  if (logger) {
    const isSkipping = report.skipped.length, isEncoding = report.encoded.length;
    if ((isSkipping || isEncoding) && ((_d = (logger == null ? void 0 : logger.groupCollapsed) || logger.log) == null || _d("[@sanity/client]: Encoding source map into result"), (_e = logger.log) == null || _e.call(
      logger,
      `[@sanity/client]: Paths encoded: ${report.encoded.length}, skipped: ${report.skipped.length}`
    )), report.encoded.length > 0 && ((_f = logger == null ? void 0 : logger.log) == null || _f.call(logger, "[@sanity/client]: Table of encoded paths"), (_g = (logger == null ? void 0 : logger.table) || logger.log) == null || _g(report.encoded)), report.skipped.length > 0) {
      const skipped = /* @__PURE__ */ new Set();
      for (const { path } of report.skipped)
        skipped.add(path.replace(reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
      (_h = logger == null ? void 0 : logger.log) == null || _h.call(logger, "[@sanity/client]: List of skipped paths", [...skipped.values()]);
    }
    (isSkipping || isEncoding) && ((_i = logger == null ? void 0 : logger.groupEnd) == null || _i.call(logger));
  }
  return resultWithStega;
}
function prettyPathForLogging(path) {
  return toString(jsonPathToStudioPath(path));
}
var stegaEncodeSourceMap$1 = Object.freeze({
  __proto__: null,
  stegaEncodeSourceMap
});
export {
  encodeIntoResult,
  stegaEncodeSourceMap,
  stegaEncodeSourceMap$1
};
//# sourceMappingURL=stegaEncodeSourceMap-TZLINIKO.js.map
