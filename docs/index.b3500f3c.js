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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"UZvcg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "fe7fa9bdb3500f3c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"hD4hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _data = require("./data");
var _dataDefault = parcelHelpers.interopDefault(_data);
var _radar = require("./radar");
var _radarDefault = parcelHelpers.interopDefault(_radar);
_radarDefault.default(_dataDefault.default);

},{"./data":"iPetI","./radar":"3LjJE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iPetI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initialRadarData = {
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
    },
    title: "Tech Radar",
    quadrants: [
        {
            name: "Languages"
        },
        {
            name: "Infrastructure"
        },
        {
            name: "Tools"
        },
        {
            name: "Techniques"
        }, 
    ],
    rings: [
        {
            name: "ADOPT",
            color: "#93c47d"
        },
        {
            name: "TRIAL",
            color: "#93d2c2"
        },
        {
            name: "ASSESS",
            color: "#fbdb84"
        },
        {
            name: "HOLD",
            color: "#efafa9"
        }
    ],
    print_layout: true,
    // zoomed_quadrant: 0,
    entries: [
        {
            "quadrant": 1,
            "ring": 0,
            "label": "AWS DynamoDB",
            "active": true,
            "moved": 1
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Exasol",
            "active": true,
            "moved": 1
        }
    ]
};
exports.default = initialRadarData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"3LjJE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// The MIT License (MIT)
// Copyright (c) 2017 Zalando SE
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
function radar_visualization(config) {
    // custom random number generator, to make random sequence reproducible
    // source: https://stackoverflow.com/questions/521295
    var seed = 42;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    function random_between(min, max) {
        return min + random() * (max - min);
    }
    function normal_between(min, max) {
        return min + (random() + random()) * 0.5 * (max - min);
    }
    // radial_min / radial_max are multiples of PI
    const quadrants = [
        {
            radial_min: 0,
            radial_max: 0.5,
            factor_x: 1,
            factor_y: 1
        },
        {
            radial_min: 0.5,
            radial_max: 1,
            factor_x: -1,
            factor_y: 1
        },
        {
            radial_min: -1,
            radial_max: -0.5,
            factor_x: -1,
            factor_y: -1
        },
        {
            radial_min: -0.5,
            radial_max: 0,
            factor_x: 1,
            factor_y: -1
        }
    ];
    const rings = [
        {
            radius: 130
        },
        {
            radius: 220
        },
        {
            radius: 310
        },
        {
            radius: 400
        }
    ];
    const title_offset = {
        x: -675,
        y: -420
    };
    const footer_offset = {
        x: -675,
        y: 420
    };
    const legend_offset = [
        {
            x: 450,
            y: 90
        },
        {
            x: -675,
            y: 90
        },
        {
            x: -675,
            y: -310
        },
        {
            x: 450,
            y: -310
        }
    ];
    function polar1(cartesian) {
        var x = cartesian.x;
        var y = cartesian.y;
        return {
            t: Math.atan2(y, x),
            r: Math.sqrt(x * x + y * y)
        };
    }
    function cartesian1(polar) {
        return {
            x: polar.r * Math.cos(polar.t),
            y: polar.r * Math.sin(polar.t)
        };
    }
    function bounded_interval(value, min, max) {
        var low = Math.min(min, max);
        var high = Math.max(min, max);
        return Math.min(Math.max(value, low), high);
    }
    function bounded_ring(polar, r_min, r_max) {
        return {
            t: polar.t,
            r: bounded_interval(polar.r, r_min, r_max)
        };
    }
    function bounded_box(point, min, max) {
        return {
            x: bounded_interval(point.x, min.x, max.x),
            y: bounded_interval(point.y, min.y, max.y)
        };
    }
    function segment(quadrant, ring) {
        var polar_min = {
            t: quadrants[quadrant].radial_min * Math.PI,
            r: ring === 0 ? 30 : rings[ring - 1].radius
        };
        var polar_max = {
            t: quadrants[quadrant].radial_max * Math.PI,
            r: rings[ring].radius
        };
        var cartesian_min = {
            x: 15 * quadrants[quadrant].factor_x,
            y: 15 * quadrants[quadrant].factor_y
        };
        var cartesian_max = {
            x: rings[3].radius * quadrants[quadrant].factor_x,
            y: rings[3].radius * quadrants[quadrant].factor_y
        };
        return {
            clipx: function(d) {
                var c = bounded_box(d, cartesian_min, cartesian_max);
                var p = bounded_ring(polar1(c), polar_min.r + 15, polar_max.r - 15);
                d.x = cartesian1(p).x; // adjust data too!
                return d.x;
            },
            clipy: function(d) {
                var c = bounded_box(d, cartesian_min, cartesian_max);
                var p = bounded_ring(polar1(c), polar_min.r + 15, polar_max.r - 15);
                d.y = cartesian1(p).y; // adjust data too!
                return d.y;
            },
            random: function() {
                return cartesian1({
                    t: random_between(polar_min.t, polar_max.t),
                    r: normal_between(polar_min.r, polar_max.r)
                });
            }
        };
    }
    // position each entry randomly in its segment
    for(var i1 = 0; i1 < config.entries.length; i1++){
        var entry = config.entries[i1];
        entry.segment = segment(entry.quadrant, entry.ring);
        var point1 = entry.segment.random();
        entry.x = point1.x;
        entry.y = point1.y;
        entry.color = entry.active || config.print_layout ? config.rings[entry.ring].color : config.colors.inactive;
    }
    // partition entries according to segments
    var segmented = new Array(4);
    for(var quadrant = 0; quadrant < 4; quadrant++){
        segmented[quadrant] = new Array(4);
        for(var ring1 = 0; ring1 < 4; ring1++)segmented[quadrant][ring1] = [];
    }
    for(var i1 = 0; i1 < config.entries.length; i1++){
        var entry = config.entries[i1];
        segmented[entry.quadrant][entry.ring].push(entry);
    }
    // assign unique sequential id to each entry
    var id = 1;
    for (var quadrant of [
        2,
        3,
        1,
        0
    ])for(var ring1 = 0; ring1 < 4; ring1++){
        var entries = segmented[quadrant][ring1];
        entries.sort(function(a, b) {
            return a.label.localeCompare(b.label);
        });
        for(var i1 = 0; i1 < entries.length; i1++)entries[i1].id = "" + id++;
    }
    function translate(x, y) {
        return "translate(" + x + "," + y + ")";
    }
    function viewbox(quadrant) {
        return [
            Math.max(0, quadrants[quadrant].factor_x * 400) - 420,
            Math.max(0, quadrants[quadrant].factor_y * 400) - 420,
            440,
            440
        ].join(" ");
    }
    var svg = d3.select("svg#" + config.svg_id).style("background-color", config.colors.background).attr("width", config.width).attr("height", config.height);
    var radar = svg.append("g");
    if ("zoomed_quadrant" in config) svg.attr("viewBox", viewbox(config.zoomed_quadrant));
    else radar.attr("transform", translate(config.width / 2, config.height / 2));
    var grid = radar.append("g");
    // draw grid lines
    grid.append("line").attr("x1", 0).attr("y1", -400).attr("x2", 0).attr("y2", 400).style("stroke", config.colors.grid).style("stroke-width", 1);
    grid.append("line").attr("x1", -400).attr("y1", 0).attr("x2", 400).attr("y2", 0).style("stroke", config.colors.grid).style("stroke-width", 1);
    // background color. Usage `.attr("filter", "url(#solid)")`
    // SOURCE: https://stackoverflow.com/a/31013492/2609980
    var defs = grid.append("defs");
    var filter = defs.append("filter").attr("x", 0).attr("y", 0).attr("width", 1).attr("height", 1).attr("id", "solid");
    filter.append("feFlood").attr("flood-color", "rgb(0, 0, 0, 0.8)");
    filter.append("feComposite").attr("in", "SourceGraphic");
    // draw rings
    for(var i1 = 0; i1 < rings.length; i1++){
        grid.append("circle").attr("cx", 0).attr("cy", 0).attr("r", rings[i1].radius).style("fill", "none").style("stroke", config.colors.grid).style("stroke-width", 1);
        if (config.print_layout) grid.append("text").text(config.rings[i1].name).attr("y", -rings[i1].radius + 62).attr("text-anchor", "middle").style("fill", "#e5e5e5").style("font-family", "Arial, Helvetica").style("font-size", "42px").style("font-weight", "bold").style("pointer-events", "none").style("user-select", "none");
    }
    function legend_transform(quadrant, ring, index = null) {
        var dx = ring < 2 ? 0 : 120;
        var dy = index == null ? -16 : index * 12;
        if (ring % 2 === 1) dy = dy + 36 + segmented[quadrant][ring - 1].length * 12;
        return translate(legend_offset[quadrant].x + dx, legend_offset[quadrant].y + dy);
    }
    // draw title and legend (only in print layout)
    if (config.print_layout) {
        // title
        radar.append("text").attr("transform", translate(title_offset.x, title_offset.y)).text(config.title).style("font-family", "Arial, Helvetica").style("font-size", "34px");
        // footer
        radar.append("text").attr("transform", translate(footer_offset.x, footer_offset.y)).text("▲ moved up     ▼ moved down").attr("xml:space", "preserve").style("font-family", "Arial, Helvetica").style("font-size", "10px");
        // legend
        var legend = radar.append("g");
        for(var quadrant = 0; quadrant < 4; quadrant++){
            legend.append("text").attr("transform", translate(legend_offset[quadrant].x, legend_offset[quadrant].y - 45)).text(config.quadrants[quadrant].name).style("font-family", "Arial, Helvetica").style("font-size", "18px");
            for(var ring1 = 0; ring1 < 4; ring1++){
                legend.append("text").attr("transform", legend_transform(quadrant, ring1)).text(config.rings[ring1].name).style("font-family", "Arial, Helvetica").style("font-size", "12px").style("font-weight", "bold");
                legend.selectAll(".legend" + quadrant + ring1).data(segmented[quadrant][ring1]).enter().append("a").attr("href", function(d, i) {
                    return d.link ? d.link : "#"; // stay on same page if no link was provided
                }).append("text").attr("transform", function(d, i) {
                    return legend_transform(quadrant, ring1, i);
                }).attr("class", "legend" + quadrant + ring1).attr("id", function(d, i) {
                    return "legendItem" + d.id;
                }).text(function(d, i) {
                    return d.id + ". " + d.label;
                }).style("font-family", "Arial, Helvetica").style("font-size", "11px").on("mouseover", function(d) {
                    showBubble(d);
                    highlightLegendItem(d);
                }).on("mouseout", function(d) {
                    hideBubble(d);
                    unhighlightLegendItem(d);
                });
            }
        }
    }
    // layer for entries
    var rink = radar.append("g").attr("id", "rink");
    // rollover bubble (on top of everything else)
    var bubble = radar.append("g").attr("id", "bubble").attr("x", 0).attr("y", 0).style("opacity", 0).style("pointer-events", "none").style("user-select", "none");
    bubble.append("rect").attr("rx", 4).attr("ry", 4).style("fill", "#333");
    bubble.append("text").style("font-family", "sans-serif").style("font-size", "10px").style("fill", "#fff");
    bubble.append("path").attr("d", "M 0,0 10,0 5,8 z").style("fill", "#333");
    function showBubble(d) {
        if (d.active || config.print_layout) {
            var tooltip = d3.select("#bubble text").text(d.label);
            var bbox = tooltip.node().getBBox();
            d3.select("#bubble").attr("transform", translate(d.x - bbox.width / 2, d.y - 16)).style("opacity", 0.8);
            d3.select("#bubble rect").attr("x", -5).attr("y", -bbox.height).attr("width", bbox.width + 10).attr("height", bbox.height + 4);
            d3.select("#bubble path").attr("transform", translate(bbox.width / 2 - 5, 3));
        }
    }
    function hideBubble(d) {
        var bubble = d3.select("#bubble").attr("transform", translate(0, 0)).style("opacity", 0);
    }
    function highlightLegendItem(d) {
        var legendItem = document.getElementById("legendItem" + d.id);
        legendItem.setAttribute("filter", "url(#solid)");
        legendItem.setAttribute("fill", "white");
    }
    function unhighlightLegendItem(d) {
        var legendItem = document.getElementById("legendItem" + d.id);
        legendItem.removeAttribute("filter");
        legendItem.removeAttribute("fill");
    }
    // draw blips on radar
    var blips = rink.selectAll(".blip").data(config.entries).enter().append("g").attr("class", "blip").attr("transform", function(d, i) {
        return legend_transform(d.quadrant, d.ring, i);
    }).on("mouseover", function(d) {
        showBubble(d);
        highlightLegendItem(d);
    }).on("mouseout", function(d) {
        hideBubble(d);
        unhighlightLegendItem(d);
    });
    // configure each blip
    blips.each(function(d) {
        var blip = d3.select(this);
        // blip link
        if (!config.print_layout && d.active && d.hasOwnProperty("link")) blip = blip.append("a").attr("xlink:href", d.link);
        // blip shape
        if (d.moved > 0) blip.append("path").attr("d", "M -11,5 11,5 0,-13 z") // triangle pointing up
        .style("fill", d.color);
        else if (d.moved < 0) blip.append("path").attr("d", "M -11,-5 11,-5 0,13 z") // triangle pointing down
        .style("fill", d.color);
        else blip.append("circle").attr("r", 9).attr("fill", d.color);
        // blip text
        if (d.active || config.print_layout) {
            var blip_text = config.print_layout ? d.id : d.label.match(/[a-z]/i);
            blip.append("text").text(blip_text).attr("y", 3).attr("text-anchor", "middle").style("fill", "#fff").style("font-family", "Arial, Helvetica").style("font-size", function(d) {
                return blip_text.length > 2 ? "8px" : "9px";
            }).style("pointer-events", "none").style("user-select", "none");
        }
    });
    // make sure that blips stay inside their segment
    function ticked() {
        blips.attr("transform", function(d) {
            return translate(d.segment.clipx(d), d.segment.clipy(d));
        });
    }
    // distribute blips, while avoiding collisions
    d3.forceSimulation().nodes(config.entries).velocityDecay(0.19) // magic number (found by experimentation)
    .force("collision", d3.forceCollide().radius(12).strength(0.85)).on("tick", ticked);
}
exports.default = radar_visualization;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["UZvcg","hD4hw"], "hD4hw", "parcelRequire68e4")

//# sourceMappingURL=index.b3500f3c.js.map
