// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _walletViewJs = require("./views/walletView.js");
var _walletViewJsDefault = parcelHelpers.interopDefault(_walletViewJs);
var _heroViewJs = require("./views/heroView.js");
var _heroViewJsDefault = parcelHelpers.interopDefault(_heroViewJs);
var _profileViewJs = require("./views/profileView.js");
var _profileViewJsDefault = parcelHelpers.interopDefault(_profileViewJs);
var _exploreViewJs = require("./views/exploreView.js");
var _exploreViewJsDefault = parcelHelpers.interopDefault(_exploreViewJs);
var _detailsViewJs = require("./views/detailsView.js");
var _detailsViewJsDefault = parcelHelpers.interopDefault(_detailsViewJs);
var _helpersJs = require("./helpers.js");
const token = localStorage.getItem("token");
const expiryDate = localStorage.getItem("expiryDate");
const address = localStorage.getItem("address");
///initial state
if (module.hot) module.hot.accept();
const controlInitialState = async ()=>{
    const currentUrl = window.location.href;
    const list = currentUrl.split("&");
    const accsessToken = list[0].split("=");
    console.log(accsessToken[1]);
    ethereum.on("chainChanged", (chainId)=>{
        if (chainId === "0x5") window.location.reload();
        console.log("please connect to the Goerli network!");
    });
    const stillValid = ()=>{
        if (new Date(expiryDate) > new Date()) return true;
        else return false;
    };
    if (token && stillValid) {
        _modelJs.state.isConnected = true;
        _modelJs.state.user.address = address;
        (0, _walletViewJsDefault.default).displayAddress(_modelJs.state.isConnected, _modelJs.state.user.address);
    }
    _modelJs.setAutoLogout(new Date(expiryDate) - new Date());
};
const controlDisplayWallet = function() {
    try {
        (0, _walletViewJsDefault.default).toggle();
    } catch (error) {
        console.log(error);
    }
};
const controlConnectWallet = async function() {
    try {
        await _modelJs.getUserAccount();
        await _modelJs.verifyMessage();
        (0, _walletViewJsDefault.default).displayAddress(_modelJs.state.isConnected, _modelJs.state.user.address);
        (0, _walletViewJsDefault.default).toggle();
    } catch (error) {
        console.log(error);
    }
};
const controlAuth = async function() {
    try {
        const result = await _modelJs.client.requestCode();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
const controlConnected = async function() {
    try {
        if (_modelJs.state.isConnected) (0, _walletViewJsDefault.default).displayAddress(_modelJs.state.address);
    } catch (error) {
        console.log(error);
    }
};
const controlHero = async function() {
    try {
        const data = await _modelJs.getHeroData();
        data.image = _helpersJs.getImage(data.image);
        (0, _heroViewJsDefault.default).render(data);
    } catch (error) {
        console.log(error);
    }
};
const controlProfile = async function() {
    try {
        if (!_modelJs.state.isConnected) (0, _profileViewJsDefault.default).renderError("You must connect first!");
        await _modelJs.getUserData();
        (0, _profileViewJsDefault.default).render(_modelJs.state.user.nfts);
    } catch (error) {
        console.log(error);
    }
};
const controlExplore = async function() {
    try {
        (0, _exploreViewJsDefault.default).render();
    } catch (error) {
        console.log(error);
    }
};
const controlDetailView = async function() {
    try {
        (0, _detailsViewJsDefault.default).render();
    } catch (error) {
        console.log(error);
    }
};
const controlLogout = async ()=>{
    try {
        _modelJs.logoutHandler();
        (0, _walletViewJsDefault.default).displayConnectBtn();
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};
const controlShowList = ()=>{
    (0, _profileViewJsDefault.default).openListContainer();
};
const controlCloseList = ()=>{
    (0, _profileViewJsDefault.default).openListContainer();
};
const controlPreview = ()=>{
    (0, _profileViewJsDefault.default).preview();
};
const controlProfilePreview = ()=>{
    (0, _profileViewJsDefault.default).changePreview();
};
const controlList = async ()=>{
    console.log(_modelJs.state);
    const listValues = (0, _profileViewJsDefault.default).getListingDetails();
    await _modelJs.list(listValues);
    (0, _profileViewJsDefault.default).openListContainer();
};
const init = function() {
    controlInitialState();
    (0, _walletViewJsDefault.default).WalletsHandler(controlDisplayWallet, controlConnectWallet, controlAuth);
    (0, _walletViewJsDefault.default).logoutHandler(controlLogout);
    controlConnected();
    controlHero();
    controlProfilePreview();
    (0, _exploreViewJsDefault.default).exploreHandler(controlExplore);
    (0, _exploreViewJsDefault.default).detailViewHandler(controlDetailView);
    (0, _profileViewJsDefault.default).profileHandler(controlProfile);
    (0, _profileViewJsDefault.default).showListHandler(controlShowList);
    (0, _profileViewJsDefault.default).listNFT(controlList);
    (0, _profileViewJsDefault.default).closeListHandler(controlCloseList);
};
init();

},{"./model.js":"Y4A21","./views/walletView.js":"3S0AV","./views/heroView.js":"8UYUH","./views/profileView.js":"8Hi5l","./views/exploreView.js":"dQpO2","./views/detailsView.js":"25RBo","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadNft", ()=>loadNft);
parcelHelpers.export(exports, "logoutHandler", ()=>logoutHandler);
parcelHelpers.export(exports, "setAutoLogout", ()=>setAutoLogout);
parcelHelpers.export(exports, "getUserAccount", ()=>getUserAccount);
parcelHelpers.export(exports, "verifyMessage", ()=>verifyMessage);
parcelHelpers.export(exports, "getHeroData", ()=>getHeroData);
parcelHelpers.export(exports, "getUserData", ()=>getUserData);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "oauthSignIn", ()=>oauthSignIn);
parcelHelpers.export(exports, "client", ()=>client);
var _helpersJs = require("./helpers.js");
const web3 = new Web3(Web3.givenProvider);
const state = {
    message: "",
    signature: "",
    isConnected: false,
    user: {
        address: "",
        nfts: []
    }
};
const remainingMilliseconds = 10800000;
const loadNft = async (id)=>{};
const logoutHandler = ()=>{
    state.isConnected = false;
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    localStorage.removeItem("address");
};
const getToken = ()=>{
    return localStorage.getItem("token");
};
const setAutoLogout = (milliseconds)=>{
    setTimeout(()=>{
        logoutHandler();
    }, milliseconds);
};
const setToStorage = (token, userId, address)=>{
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("address", address);
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem("expiryDate", expiryDate.toISOString());
};
const getUserAccount = async ()=>{
    try {
        const chainId = await ethereum.request({
            method: "eth_chainId"
        });
        console.log(chainId);
        if (chainId !== "0x5") return console.log("Please connect to the goerli network!");
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        const account = accounts[0];
        const result = await fetch("https://big3-backend.onrender.com/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                address: account
            })
        });
        const json = await result.json();
        state.message = json.message;
        state.signature = await web3.eth.personal.sign(state.message, account);
    } catch (error) {
        console.log(error);
    }
};
const verifyMessage = async ()=>{
    try {
        if (state.message && state.signature) {
            const result = await fetch("https://big3-backend.onrender.com/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    signature: state.signature,
                    message: state.message
                })
            });
            if (result.status === 200 || res2.status === 201) {
                state.isConnected = true;
                const verified = await result.json();
                state.user.address = verified.address;
                console.log(verified);
                setToStorage(verified.token, verified.userId, verified.address);
                setAutoLogout(remainingMilliseconds);
            }
        } else return console.log("could not connect to wallet");
    } catch (error) {
        console.log(error);
    }
};
const getHeroData = async ()=>{
    try {
        const result = await fetch("https://big3-backend.onrender.com/heroNFT", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await result.json();
        return JSON.parse(data.data);
    } catch (error) {
        console.log(error);
    }
};
const getUserData = async ()=>{
    const result = await fetch("https://big3-backend.onrender.com/profile", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + getToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userAddress: state.user.address
        })
    });
    const { data  } = await result.json();
    data.forEach((n)=>{
        if (!n.metadata) return;
        n.metadata.image = _helpersJs.getImage(n.metadata.image);
    });
    state.user.nfts = data;
};
const list = async (values)=>{
    const list = await fetch("https://big3-backend.onrender.com/list", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + getToken(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contractAddr: values.contractAddress,
            imageUrl: values.imageUrl,
            collection: values.collection,
            name: values.name,
            price: values.price,
            durationValue: values.durationValue,
            durationUnit: values.durationUnit
        })
    });
    console.log(await list.json());
};
const oauthSignIn = async ()=>{
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
        "client_id": "987872514521-42gaj8k34c809usv4b6jcq5e2lcbqqu5.apps.googleusercontent.com",
        "redirect_uri": "https://big3.onrender.com",
        "response_type": "token",
        "scope": "profile"
    };
    // Add form parameters as hidden input values.
    for(var p in params){
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", p);
        input.setAttribute("value", params[p]);
        form.appendChild(input);
    }
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
};
const client = google.accounts.oauth2.initCodeClient({
    client_id: "987872514521-42gaj8k34c809usv4b6jcq5e2lcbqqu5.apps.googleusercontent.com",
    scope: "email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid",
    ux_mode: "redirect",
    redirect_uri: "http://localhost:1234",
    state: "YOUR_BINDING_VALUE"
});

},{"./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getImage", ()=>getImage);
const getImage = (image)=>{
    if (!image) return;
    const link = image.split("//")[1];
    return `https://ipfs.moralis.io:2053/ipfs/${link}`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3S0AV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class WalletView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".wallets");
    metaWallet = document.querySelector(".metamask__btn");
    connectBtn = document.querySelector(".connect__wallet--btn");
    walletContainer = document.querySelector(".wallet__container");
    backdrop = document.querySelector(".backdrop");
    btnContainer = document.querySelector(".btn__container");
    logoutBtn = document.querySelector(".logout-btn");
    addrContainer = document.querySelector(".addr-container");
    authBtn = document.querySelector(".walletConnect__btn");
    toggle() {
        this.walletContainer.classList.toggle("open-wallets");
        this.backdrop.classList.toggle("open");
    }
    logoutHandler(handler) {
        this.logoutBtn.addEventListener("click", handler);
    }
    // showWallets() {
    //     this.walletContainer.classList.
    // }
    WalletsHandler(handler1, handler2, handler3) {
        this.connectBtn.addEventListener("click", function() {
            handler1();
        });
        this.metaWallet.addEventListener("click", function() {
            handler2();
        });
        this.backdrop.addEventListener("click", function() {
            handler1();
        });
        this.authBtn.addEventListener("click", function() {
            handler3();
        });
    }
    displayAddress(isConnected, address) {
        console.log("addr disp");
        if (address && isConnected) {
            console.log("dis addr2");
            this.connectBtn.classList.add("hidden");
            this.btnContainer.classList.add("connected");
            this.addrContainer.textContent = `${address.slice(0, 3)}...${address.slice(-4)}`;
            this.logoutBtn.classList.remove("hidden");
        }
    }
    displayConnectBtn() {
        this.addrContainer.textContent = "";
        this.btnContainer.classList.remove("connected");
        this.connectBtn.classList.remove("hidden");
        this.logoutBtn.classList.add("hidden");
    }
}
exports.default = new WalletView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./view.js":"bWlJ9"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    errorContainer = document.querySelector(".wallet__container");
    render(data, render = true) {
        if (data) this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderError(msg) {
        this.errorContainer.classList.add("");
        this.errorContainer.textContent = msg;
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UYUH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _uzumakiFamilyPng = require("../../../static/images/uzumakiFamily.png");
var _uzumakiFamilyPngDefault = parcelHelpers.interopDefault(_uzumakiFamilyPng);
var _itachiPng = require("../../../static/images/itachi.png");
var _itachiPngDefault = parcelHelpers.interopDefault(_itachiPng);
var _madaraPng = require("../../../static/images/madara.png");
var _madaraPngDefault = parcelHelpers.interopDefault(_madaraPng);
class heroView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".hero__nft-container");
    _generateMarkup() {
        return `
            <div class="hero__nft-image">
                <img
                    src="${this._data.image}"
                    alt="hero image"
                />
            </div>
            <div class="hero__nft-details">
                <img
                    src="${0, _itachiPngDefault.default}"
                />
                <div class="hero__nft-description">
                    <h3>${this._data.name}</h2>
                    <span>Floor: 0.25 ETH</span>
                </div>
            </div>
        `;
    }
}
exports.default = new heroView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../static/images/uzumakiFamily.png":"lYckW","../../../static/images/itachi.png":"4EBs5","../../../static/images/madara.png":"5ehne","./view.js":"bWlJ9"}],"lYckW":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "uzumakiFamily.f4577ba6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4EBs5":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "itachi.d8bd0eb3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5ehne":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "madara.5c650eb1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8Hi5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _uzumakiFamilyPng = require("../../../static/images/uzumakiFamily.png");
var _uzumakiFamilyPngDefault = parcelHelpers.interopDefault(_uzumakiFamilyPng);
var _itachiPng = require("../../../static/images/itachi.png");
var _itachiPngDefault = parcelHelpers.interopDefault(_itachiPng);
var _madaraPng = require("../../../static/images/madara.png");
var _madaraPngDefault = parcelHelpers.interopDefault(_madaraPng);
var _ethereumEthLogoSvg = require("../../../static/images/ethereum-eth-logo.svg");
var _ethereumEthLogoSvgDefault = parcelHelpers.interopDefault(_ethereumEthLogoSvg);
class profileView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".main");
    profileLink = document.querySelector(".profile-link");
    contentBody = document.querySelector(".profile__user--body");
    container = document.querySelector(".profile__user");
    listContainer = document.querySelector(".list__container");
    backdrop = document.querySelector("backdrop");
    // profileBody = document.querySelector(".profile__user--body");
    content = "";
    collectionName;
    imageUrl;
    name;
    contractAddress;
    profileHandler(handler) {
        this.profileLink.classList.add("active");
        this.profileLink.addEventListener("click", handler);
    }
    getListingDetails() {
        const price = document.querySelector(".list__price--input").value;
        const durationValue = document.querySelector(".list__duration--input").value;
        const durationUnit = document.querySelector(".list__duration--select").value;
        return {
            price: price,
            collection: this.collectionName,
            imageUrl: this.imageUrl,
            contractAddress: this.contractAddress,
            durationValue: durationValue,
            durationUnit: durationUnit,
            name: this.name
        };
    }
    changePreview(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            if (!e.target.closest("profile__nft-container")) return;
            console.log("here");
            const nft = e.target.closest(".profile__nft-container");
            this.name = nft.dataset.name;
            this.imageUrl = nft.dataset.image;
            this.contractAddress = nft.dataset.contractaddress;
            this.collectionName = nft.dataset.collection;
            const markup = `
            <div class="nft__details--preview">
            <img
            src="${this.imageUrl}"
            alt="nft"
            class="explore__nft--image"
                    />
                    <div class="explore__nft--details">
                    <p class="explore__nft--name">${this.name}</p>
                        <div class="explore__nft--price">
                        <p>23 ETH</p>
                        </div>
                        </div>
                        </div>
            `;
            this._parentElement.querySelector(".profile__nft-preview").innerHTML = markup;
            handler();
        });
    }
    listNFT(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            if (!e.target.closest(".list-btn")) return;
            handler();
        });
    }
    closeListHandler(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            e.preventDefault();
            if (!e.target.closest(".list-close")) return;
            handler();
        });
    }
    openListContainer() {
        document.querySelector(".list__container").classList.toggle("open-list");
    }
    showListHandler(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            e.preventDefault();
            if (e.target.closest(".profile__nft-container")) {
                const nft = e.target.closest(".profile__nft-container");
                this.name = nft.dataset.name;
                this.imageUrl = nft.dataset.image;
                this.collectionName = nft.dataset.collection;
                const markup2 = `
                <div class="nft__details--preview">
                <img
                src="${this.imageUrl}"
                alt="nft"
                class="explore__nft--image"
                        />
                        <div class="explore__nft--details">
                        <p class="explore__nft--name">${this.name}</p>
                            <div class="explore__nft--price">
                            <p>23 ETH</p>
                            </div>
                            </div>
                            </div>
                `;
                this._parentElement.querySelector(".profile__nft-preview").innerHTML = markup2;
            }
            if (!e.target.closest(".list-cta")) return;
            const nft1 = e.target.closest(".profile__nft-container");
            this.name = nft1.dataset.name;
            this.imageUrl = nft1.dataset.image;
            this.contractAddress = nft1.dataset.contractaddress;
            this.collectionName = nft1.dataset.collection;
            const markup = `
                <img src="${this.imageUrl}" class="list-preview__image">
                <div class="list-preview__details">
                    <span>${this.collectionName} collection</span>
                    <h3>${this.name}</h3>
                </div>
            `;
            document.querySelector(".list-preview").innerHTML = markup;
            handler();
        });
    }
    _generateMarkup() {
        if (!this._data) this.content = `
                <div class="profile-content">
                    <span> No Content Available </span>
                </div>
                `;
        else {
            console.log(this._data);
            this._data.forEach((n)=>{
                if (n.metadata) return this.content = this.content + `
                        <div class="profile__nft-container" data-name="${n.metadata.name}" data-image="${n.metadata.image}" data-contractAddress="${n.tokenAddress}" data-collection="${n.name}">
                            <p class="list-cta">+</p>
                            <div class="profile__nft-image">
                            <img
                                    src="${n.metadata.image}"
                                    alt="profile image"
                                />
                                </div>
                                <div class="profile__nft-details">
                                <div class="profile__nft-description">
                                    <span>${n.name} collection</span>
                                    <h3>${n.metadata.name}</h3>
                                    </div>
                                </div>
                        </div>    
                        `;
            });
        }
        return `
        <div class="profile">
            <div class="list__container">
                <span class="list-close">X</span>
                <div class="list-preview">
                    
                </div>
                <div class="list__price">
                    <p>Price</p>
                    <div class="list__price-container"> 
                        <input class="list__price--input" placeholder="Amount" type="number"></input>
                        <img src="${0, _ethereumEthLogoSvgDefault.default}">
                    </div>
                </div>
                <div class="list__price">
                <p>Duration</p>
                <div class="list__price-container"> 
                    <input class="list__duration--input" placeholder="24" type="number"></input>
                    <select name="duration" id="duration" class="list__duration--select">
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                </div>
                </div>
                <button class="list-btn">List</button>
            </div>
            <section class="profile__nft-preview">
            <div class="nft__details--preview">
            <img
            src="${this._data[0].metadata.image}"
            alt="nft"
            class="explore__nft--image"
                    />
                    <div class="explore__nft--details">
                    <p class="explore__nft--name">${this._data[0].metadata.name}</p>
                        <div class="explore__nft--price">
                        <p>23 ETH</p>
                        </div>
                        </div>
                        </div>
                        </section>
                        <section class="profile__user">
                        <div class="profile__user--header">
                        <img
                        src="${0, _madaraPngDefault.default}"
                        alt="user-avi"
                        class="profile__user--image"
                        />
                        <div class="profile__user--details">
                        <p class="profile__user--title">
                            Adebobola Oyedunmade
                            </p>
                        <span class="profile__user--address"
                        >0x000...000</span
                        >
                        </div>
                        </div>
                        <div class="profile__user--body">
                    ${this.content}
                    </div>
            </section>
            </div>
            `;
    }
}
exports.default = new profileView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../static/images/uzumakiFamily.png":"lYckW","../../../static/images/itachi.png":"4EBs5","../../../static/images/madara.png":"5ehne","../../../static/images/ethereum-eth-logo.svg":"1COko","./view.js":"bWlJ9"}],"1COko":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "ethereum-eth-logo.805344a2.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dQpO2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _uzumakiFamilyPng = require("../../../static/images/uzumakiFamily.png");
var _uzumakiFamilyPngDefault = parcelHelpers.interopDefault(_uzumakiFamilyPng);
var _itachiPng = require("../../../static/images/itachi.png");
var _itachiPngDefault = parcelHelpers.interopDefault(_itachiPng);
class exploreView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".main");
    exploreCta = document.querySelector(".explore-cta");
    exploreLink = document.querySelector(".explore-link");
    exploreHandler(handler) {
        this.exploreLink.addEventListener("click", handler);
        this.exploreCta.addEventListener("click", handler);
    }
    detailViewHandler(handler) {
        this._parentElement.addEventListener("click", (e)=>{
            if (e.target.closest(".explore__nft--container")) handler();
        });
    }
    _generateMarkup() {
        return `
        <div class="explore__container scrollbar">
        <div class="explore__sort">
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>

            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
            <p>aye sort ni mo fisi ile nibi bayi</p>
        </div>
        <div class="explore__main">
            <div class="scroll-down">
                <span>>></span>
            </div>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
            <a
                class="explore__nft--container"
                href="#"
            >
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--owner">
                        <img
                            src="${0, _itachiPngDefault.default}"
                            alt="nft__owner"
                            class="explore__nft--owner-image"
                        />
                        <p class="explore__nft--owner-name">
                            Adebobola
                        </p>
                    </div>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
        `;
    }
}
exports.default = new exploreView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../static/images/uzumakiFamily.png":"lYckW","../../../static/images/itachi.png":"4EBs5","./view.js":"bWlJ9"}],"25RBo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _uzumakiFamilyPng = require("../../../static/images/uzumakiFamily.png");
var _uzumakiFamilyPngDefault = parcelHelpers.interopDefault(_uzumakiFamilyPng);
var _itachiPng = require("../../../static/images/itachi.png");
var _itachiPngDefault = parcelHelpers.interopDefault(_itachiPng);
var _madaraPng = require("../../../static/images/madara.png");
var _madaraPngDefault = parcelHelpers.interopDefault(_madaraPng);
class detailsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".main");
    _generateMarkup() {
        return `
        <div class="nft">
        <section class="profile__nft-preview">
            <div class="nft__details--preview">
                <img
                    src="${0, _uzumakiFamilyPngDefault.default}"
                    alt="nft"
                    class="explore__nft--image"
                />
                <div class="explore__nft--details">
                    <p class="explore__nft--name">Azuki #25</p>
                    <div class="explore__nft--price">
                        <p>23 ETH</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="nft__details">
            <div class="nft__details--heading">
                <a href="#" class="nft__details--collection">Azuki</a>
                <h3 class="nft___details--name">Azuki #25</h3>
                <p class="nft__details--owner">
                    Owned by <a href="#">Adebobola</a>
                </p>
            </div>
            <div class="purchase">
                <p>Current Price</p>
                <span>0.2 ETH</span>
                <div class="purchase__btns">
                    <button class="purchase__btn buy-btn">BUY</button>
                    <button class="purchase__btn offer-btn">
                        Make Offer
                    </button>
                </div>
            </div>
            <div class="nft__details--body">
                <div class="description">
                    <h2>Description</h2>
                    <div class="description__body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Maxime mollitia, molestiae
                            quas vel sint commodi repudiandae
                            consequuntur voluptatum laborum numquam
                            blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque
                            rerum! Provident similique accusantium nemo
                            autem. Veritatis obcaecati tenetur iure eius
                            earum ut molestias architecto voluptate
                            aliquam nihil, eveniet aliquid culpa officia
                            aut! Impedit sit sunt quaerat, odit, tenetur
                            error, harum nesciunt ipsum debitis quas
                            aliquid. Reprehenderit,
                        </p>
                    </div>
                </div>
                <div class="properties">
                    <h2>Properties</h2>
                    <div class="properties__body">
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                        <div class="property">
                            <h2>Anime</h2>
                        </div>
                    </div>
                </div>
                <div class="details">
                    <h2>Details</h2>
                    <div class="details__body">
                        <div class="detail">
                            <span>Contract Address</span>
                            <span>0x23...8e90</span>
                        </div>
                        <div class="detail">
                            <span>Token ID</span>
                            <span>25</span>
                        </div>
                        <div class="detail">
                            <span>Chain</span>
                            <span>Goerli</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        `;
    }
}
exports.default = new detailsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../static/images/uzumakiFamily.png":"lYckW","../../../static/images/itachi.png":"4EBs5","../../../static/images/madara.png":"5ehne","./view.js":"bWlJ9"}]},["fA0o9","aenu9"], "aenu9", "parcelRequireb9b7")

//# sourceMappingURL=index.e37f48ea.js.map
