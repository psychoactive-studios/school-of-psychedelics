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
        globalObject
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
})({"2HlpA":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bde22a230d6229cf";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lMh9v":[function(require,module,exports,__globalThis) {
function handleVideoClick() {
    const videoWrappers = document.querySelectorAll(".video-wrapper");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log("Device type:", isMobile ? "Mobile" : "Desktop");
    // Exit if no video wrappers found
    if (!videoWrappers.length) {
        console.log("No video wrappers found ");
        return;
    }
    videoWrappers.forEach((wrapper)=>{
        wrapper.addEventListener("click", function(event) {
            console.log("Wrapper clicked");
            const video = this.querySelector("video");
            console.log("Video state:", {
                paused: video.paused,
                muted: video.muted,
                volume: video.volume,
                currentTime: video.currentTime
            });
            // Mobile-specific handling herefs
            // if (isMobile) {
            //   console.log("Mobile-specific handling");
            //   video.muted = false;
            //   video.volume = 1;
            //   video.play();
            //   console.log("After mobile play:", {
            //     paused: video.paused,
            //     muted: video.muted,
            //     volume: video.volume,
            //  why doesnt this work?
            //   });
            // }
            const hasPlayed = !video.paused && !video.muted && video.volume > 0;
            console.log("hasPlayed:", hasPlayed);
            const playOverlay = this.querySelector(".video-play-overlay");
            const pauseBtn = this.querySelector('[f-data-video="pause-button"]');
            const volumeSlider = this.querySelector('[f-data-video="volume-slider"]');
            const videoTimeline = wrapper.querySelector(".time-controls-wrapper");
            const volumeControl = this.querySelector(".volume-control");
            const playBtn = this.querySelector('[f-data-video="play-button"]');
            const volumeBtn = this.querySelector('[f-data-video="volume-button"]');
            const fullscreenBtn = this.querySelector('[f-data-video="fullscreen"]');
            console.log("Button states:", {
                playBtn: playBtn ? "found" : "not found",
                volumeBtn: volumeBtn ? "found" : "not found",
                pauseBtn: pauseBtn ? "found" : "not found",
                fullscreenBtn: fullscreenBtn ? "found" : "not found"
            });
            // hide video poster overlay
            if (playOverlay) {
                console.log("Hiding play overlay");
                playOverlay.style.display = "none";
            }
            // Show play overlay again on mouseleave if video has been interacted with
            wrapper.addEventListener("mouseleave", ()=>{
                console.log("Mouse leave event");
                if (playOverlay && video.paused) {
                    console.log("Showing play overlay on mouseleave");
                    playOverlay.style.display = "flex";
                }
            });
            // ignore pause btn clicks
            if (pauseBtn && pauseBtn.contains(event.target)) {
                console.log("Ignoring pause button click");
                return; // exit
            }
            // ignore volume change clicks
            if (volumeSlider && volumeSlider.contains(event.target)) {
                console.log("Ignoring volume slider click");
                return; // exit
            }
            // ignore volume center clicks
            if (volumeControl && volumeControl.contains(event.target) && !volumeBtn.contains(event.target)) {
                console.log("Ignoring volume control click");
                return; // exit
            }
            // ignore videoTimeline clicks
            if (videoTimeline && videoTimeline.contains(event.target)) {
                console.log("Ignoring video timeline click");
                return; // exit
            }
            if (playBtn && playBtn.contains(event.target)) {
                console.log("Play button clicked");
                keepHoverInteractionOnAllVideos();
                if (video.muted) {
                    console.log("Video muted, attempting to unmute");
                    volumeBtn.click();
                }
                pauseOtherVideos(video);
                showHideVideoInfo(true);
                return; // exit
            }
            // if the clicked element is volume btn logic
            if (volumeBtn && volumeBtn.contains(event.target)) {
                console.log("Volume button clicked");
                if (!playBtn.dataset.clicked) {
                    console.log("First time play button clicked");
                    resetCurrentPlayBtn(true);
                    showHideVideoInfo(true);
                    video.loop = false;
                    video.currentTime = 0;
                    video.muted = false;
                    video.volume = 1;
                    video.play();
                    playBtn.dataset.clicked = "true";
                }
                if (!volumeBtn.dataset.clicked) {
                    console.log("First time volume button clicked");
                    volumeBtn.dataset.clicked = "true";
                }
                return; // exit
            }
            // if the clicked element is fullscreen btn logic
            if (fullscreenBtn && fullscreenBtn.contains(event.target)) {
                console.log("Fullscreen button clicked");
                iOSFullscreen(video);
                if (!hasPlayed || !playBtn.dataset.clicked || !volumeBtn.dataset.clicked) {
                    console.log("Attempting to unmute for fullscreen");
                    video.muted = false;
                    video.volume = 1;
                }
                return; // exit
            }
            // handle fullscreen play/pause
            video.addEventListener("play", ()=>{
                console.log("Video play event");
                if (document.fullscreenElement === video) {
                    console.log("Video in fullscreen, resetting play button");
                    resetCurrentPlayBtn(true);
                    showHideVideoInfo(true);
                    return;
                }
            });
            video.addEventListener("pause", ()=>{
                console.log("Video pause event");
                if (document.fullscreenElement === video) {
                    console.log("Video in fullscreen, resetting pause button");
                    resetCurrentPlayBtn(false);
                    showHideVideoInfo(false);
                    return;
                }
            });
            // Skip play/pause logic if video itself is clicked in fullscreen
            if (document.fullscreenElement === video) {
                console.log("Video in fullscreen");
                if (video.paused) {
                    console.log("Playing fullscreen video");
                    resetCurrentPlayBtn(true);
                    showHideVideoInfo(true);
                } else {
                    console.log("Pausing fullscreen video");
                    resetCurrentPlayBtn(false);
                    showHideVideoInfo(false);
                }
                return;
            }
            // play / pause functionality if volume btn has been clicked
            if (volumeBtn.dataset.clicked) {
                console.log("Volume button previously clicked");
                if (video.paused) {
                    console.log("Playing video with volume");
                    pauseOtherVideos(video);
                    video.muted = false;
                    video.volume = 1;
                    video.play();
                    video.loop = false;
                    resetCurrentPlayBtn(true);
                    showHideVideoInfo(true);
                } else {
                    console.log("Pausing video");
                    video.pause();
                    resetCurrentPlayBtn(false);
                    showHideVideoInfo(false);
                }
                return;
            }
            // custom play or pause video logic for clicking on video itself
            if (hasPlayed) {
                console.log("Video has been played before, pausing");
                video.pause();
                resetCurrentPlayBtn(false);
                showHideVideoInfo(false);
            } else if (video.paused) {
                console.log("Playing paused video");
                pauseOtherVideos(video);
                video.muted = false;
                video.volume = 1;
                video.play();
                video.loop = false;
                resetCurrentPlayBtn(true);
                showHideVideoInfo(true);
            } else {
                console.log("First time playing video");
                if (!playBtn.dataset.clicked) {
                    console.log("Resetting video time");
                    video.currentTime = 0;
                    playBtn.dataset.clicked = "true";
                }
                video.muted = false;
                video.volume = 1;
                pauseOtherVideos(video);
                video.play();
                video.loop = false;
                resetCurrentPlayBtn(true);
                showHideVideoInfo(true);
            }
            function keepHoverInteractionOnAllVideos() {
                videoWrappers.forEach((wrapper)=>{
                    // Auto-play muted video on hover if not interacted with yet
                    wrapper.addEventListener("mouseenter", ()=>{
                        const currentVideo = video;
                        const thisVideo = wrapper.querySelector("video");
                        const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
                        // Only play other videos that aren't the current one being interacted with
                        if (thisVideo !== currentVideo && thisVideo.classList.contains("is-testimonial") && !playBtn.dataset.clicked && !wrapper.dataset.clicked) thisVideo.play();
                    });
                });
            }
            // Show/hide video info
            function showHideVideoInfo(inverse = false) {
                const videoInfo = wrapper.querySelector(".video-heading_wrapper");
                const timeControls = wrapper.querySelector(".time-controls-wrapper");
                const videoCaption = wrapper.querySelector(".video-caption_wrapper");
                if (videoInfo) videoInfo.style.display = inverse ? "none" : "block";
                // Handle time controls for all screen sizes
                if (timeControls) {
                    timeControls.style.display = inverse ? "flex" : "none";
                    timeControls.style.opacity = inverse ? 1 : 0;
                }
                // Handle video caption only for screens larger than 767px
                if (videoCaption && window.innerWidth > 767) {
                    videoCaption.style.display = inverse ? "block" : "none";
                    videoCaption.style.opacity = inverse ? 1 : 0;
                }
            }
            // Reset play/pause buttons for current video
            function resetCurrentPlayBtn(inverse = false) {
                const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
                const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');
                if (playBtn) playBtn.style.display = inverse ? "none" : "block";
                if (pauseBtn) pauseBtn.style.display = inverse ? "block" : "none";
            }
            // Pause video when 15% or less is in viewport
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.intersectionRatio <= 0.15 && !video.paused && !video.muted && video.volume > 0) {
                        video.pause();
                        resetCurrentPlayBtn(false);
                        showHideVideoInfo(false);
                    }
                });
            }, {
                threshold: [
                    0,
                    0.15
                ],
                rootMargin: "0px"
            });
            observer.observe(video);
        });
    });
}
function resetAllPlayBtns(inverse = false) {
    console.log("Resetting all play buttons:", inverse);
    const playBtns = document.querySelectorAll('[f-data-video="play-button"]');
    const pauseBtns = document.querySelectorAll('[f-data-video="pause-button"]');
    // Exit if no buttons found
    if (!playBtns.length && !pauseBtns.length) {
        console.log("No play/pause buttons found");
        return;
    }
    playBtns.forEach((btn)=>{
        btn.style.display = inverse ? "none" : "block";
    });
    pauseBtns.forEach((btn)=>{
        btn.style.display = inverse ? "block" : "none";
    });
}
// Utility function to pause all other playing videos
function pauseOtherVideos(currentVideo) {
    console.log("Pausing other videos");
    const allVideos = document.querySelectorAll("video");
    // Exit if no videos found
    if (!allVideos.length) {
        console.log("No videos found");
        return;
    }
    allVideos.forEach((otherVideo)=>{
        if (otherVideo !== currentVideo && !otherVideo.paused && !otherVideo.muted && otherVideo.volume > 0) {
            console.log("Pausing another video");
            otherVideo.pause();
            // Reset the play/pause buttons for the paused video's wrapper
            const otherWrapper = otherVideo.closest(".video-wrapper");
            if (otherWrapper) {
                const resetBtn = (inverse = false)=>{
                    const playBtn = otherWrapper.querySelector('[f-data-video="play-button"]');
                    const pauseBtn = otherWrapper.querySelector('[f-data-video="pause-button"]');
                    if (playBtn) playBtn.style.display = inverse ? "none" : "block";
                    if (pauseBtn) pauseBtn.style.display = inverse ? "block" : "none";
                };
                resetBtn(false);
                // Hide video info for the paused video
                const videoInfo = otherWrapper.querySelector(".video-heading_wrapper");
                const videoControls = otherWrapper.querySelectorAll(".time-controls-wrapper, .video-caption_wrapper");
                if (videoInfo) videoInfo.style.display = "block";
                if (videoControls) videoControls.forEach((div)=>{
                    div.style.display = "none";
                    div.style.opacity = 0;
                });
            }
        }
    });
}
function handleFullscreenChange() {
    console.log("Setting up fullscreen change handlers");
    // Add fullscreen change event listeners
    document.addEventListener("fullscreenchange", function() {
        console.log("Fullscreen change event");
        const videoPlayers = document.querySelectorAll(".video-player-style");
        if (document.fullscreenElement) {
            console.log("Entering fullscreen");
            videoPlayers.forEach((player)=>{
                player.style.objectFit = "contain";
            });
        } else {
            console.log("Exiting fullscreen");
            videoPlayers.forEach((player)=>{
                player.style.objectFit = "cover";
            });
        }
    });
    // Also handle webkit browsers
    document.addEventListener("webkitfullscreenchange", function() {
        console.log("Webkit fullscreen change event");
        const videoPlayers = document.querySelectorAll(".video-player-style");
        if (document.webkitFullscreenElement) {
            console.log("Entering webkit fullscreen");
            videoPlayers.forEach((player)=>{
                player.style.objectFit = "contain";
            });
        } else {
            console.log("Exiting webkit fullscreen");
            videoPlayers.forEach((player)=>{
                player.style.objectFit = "cover";
            });
        }
    });
}
function iOSFullscreen(video) {
    console.log("Attempting iOS fullscreen");
    let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS && video) {
        if (video.webkitEnterFullscreen) {
            console.log("Entering iOS fullscreen");
            video.webkitEnterFullscreen();
        } else console.warn("Fullscreen not supported on this video.");
    } else console.error("Video element not found or not iOS device.");
}
function fixVideoPreviewPosition() {
    console.log("Setting up video preview position fix");
    const element = document.querySelector(".video-preview-thumbnail_wrapper");
    const fixedY = -140;
    const observer = new MutationObserver(()=>{
        const computedStyle = window.getComputedStyle(element);
        const matrix = new DOMMatrix(computedStyle.transform);
        element.style.transform = `translateX(${matrix.m41}px) translateY(${fixedY}px)`;
    });
    observer.observe(element, {
        attributes: true,
        attributeFilter: [
            "style"
        ]
    });
}
function resetVideoPreviewPosition() {
    console.log("Resetting video preview position");
    const element = document.querySelector(".video-preview-thumbnail_wrapper");
    const observer = new MutationObserver(()=>{
        element.style.transform = `translate(0, 0)`;
    });
    observer.observe(element, {
        attributes: true,
        attributeFilter: [
            "style"
        ]
    });
}
function setAllPreviewVideoSources() {
    console.log("Setting preview video sources");
    const videoWrappers = document.querySelectorAll(".video-wrapper");
    if (!videoWrappers.length) {
        console.log("No video wrappers found for preview sources");
        return;
    }
    videoWrappers.forEach((wrapper)=>{
        const video = wrapper.querySelector('[f-data-video="video-element"]');
        const preview = wrapper.querySelector('[f-data-video="video-preview"]');
        if (!video || !preview) {
            console.log("Missing video or preview element");
            return;
        }
        const source = video.querySelector("source").src;
        preview.src = source;
    });
}
function addAutoPlayToDesktopTestimonials() {
    console.log("Adding auto play to desktop testimonials");
    const testimonials = document.querySelectorAll("video.is-testimonial");
    testimonials.forEach((testimonial)=>{
        testimonial.autoplay = false;
        testimonial.addEventListener("mouseenter", ()=>{
        // testimonial.play();
        });
    // testimonial.play();
    });
}
function forceVolumeControlHeight() {
    console.log("Forcing volume control height");
    const volumeControl = document.querySelector(".volume-control");
    if (volumeControl) volumeControl.style.height = "4.25rem!important";
}
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // Only run if we have video elements on the page
    const hasVideos = document.querySelectorAll("video").length > 0;
    if (!hasVideos) {
        console.log("No videos found on page");
        return;
    }
    if (isMobile) addAutoPlayToDesktopTestimonials();
    if (isMobile) forceVolumeControlHeight();
    setAllPreviewVideoSources();
    resetVideoPreviewPosition();
    handleFullscreenChange();
    resetAllPlayBtns();
    handleVideoClick();
});

},{}]},["2HlpA","lMh9v"], "lMh9v", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
