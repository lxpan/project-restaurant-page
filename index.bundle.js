/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/shinjuku-vending.jpg */ "./src/images/shinjuku-vending.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./ultra.otf */ "./src/ultra.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --content-background-colour: rgba(19, 5, 89, 0.8);\n    --content-font-colour: white;\n    --outer-border-colour: #120458;\n    --inner-border-colour: #7a04eb;\n    --menu-image-border-colour: #fe75fe;\n    --nav-hover-colour: hotpink;\n}\n\nhtml {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 100vh;\n    min-width: 100vw;\n    overflow-x: hidden;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    min-height: 100vh;\n}\n\n.tabContent {\n    display: none;\n}\n\n.tabContent.is-active {\n    display: block;\n}\n\n.tabs ul {\n    display: flex;\n    gap: 10px;\n    padding-left: 0px;\n    font-size: 2rem;\n}\n\n.tabs li {\n    display: inline;\n}\n\n.tabs a,\na:link,\na:visited {\n    text-decoration: none;\n    color: white;\n}\n\n.homeSplash {\n    width: 60vw;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 40vw;\n    border: 3px solid var(--section-border-colour);\n    border-radius: 10px;\n    background-color: var(--content-background-colour);\n    color: var(--content-font-colour);\n    padding: 0px 80px 30px;\n}\n\n#content h1 {\n    text-align: center;\n}\n\n.contentPane {\n    border: solid 2px var(--inner-border-colour);\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 20px;\n}\n\nfooter {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 100vw;\n    height: 30px;\n    background-color: var(--content-background-colour);\n    margin-top: 20px;\n    color: white;\n    font-size: .8rem;\n}\n\n.hoursOpen {\n    font-size: 1rem;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n@font-face {\n    font-family: 'Ultra';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n\n/* Adds the neon text effect */\n.neonText {\n    color: #fff;\n    font-family: 'Ultra';\n    text-shadow:\n        0 0 7px #fff,\n        0 0 10px #fff,\n        0 0 21px #fff,\n        0 0 42px #bc13fe,\n        0 0 82px #bc13fe,\n        0 0 92px #bc13fe,\n        0 0 102px #bc13fe,\n        0 0 151px #bc13fe;\n}\n\n/* Adds the neon border effect */\n.neonText {\n    font-size: 1.8rem;\n    border: 0.2rem solid #fff;\n    border-radius: 2rem;\n    padding: 0.4em;\n    box-shadow: 0 0 .2rem #fff,\n        0 0 .2rem #fff,\n        0 0 2rem #bc13fe,\n        0 0 0.8rem #bc13fe,\n        0 0 2.8rem #bc13fe,\n        inset 0 0 1.3rem #bc13fe;\n}\n\n.neonText:hover {\n    color: hotpink;\n    text-shadow:\n        0 0 7px #ff124f,\n        0 0 10px #ff124f,\n        0 0 21px #ff124f,\n        0 0 42px #ff00a0,\n        0 0 82px #ff00a0,\n        0 0 92px #ff00a0,\n        0 0 102px #ff00a0,\n        0 0 151px #ff00a0;\n\n    box-shadow:\n        0 0 .2rem #ff124f,\n        0 0 .2rem #ff124f,\n        0 0 2rem #ff00a0,\n        0 0 0.8rem #ff00a0,\n        0 0 2.8rem #ff00a0,\n        inset 0 0 1.3rem #ff00a0;\n}\n\n/* Menu Page */\n.menuItem {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    border: solid 2px var(--inner-border-colour);\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 20px;   \n}\n\n.menuItem p, .menuItem span {\n    padding-left: 50px;\n}\n\n.menuItem span {\n    font-weight: bolder;\n}\n\n.menuImage {\n    height: 250px;\n    width: 250px;\n    background-size: cover;\n    align-self: end;\n    border: 2px solid var(--menu-image-border-colour);\n    border-radius: 10px;\n}\n\n.contactItem {\n    width: 400px;\n    display: grid;\n    grid-template-columns: 2fr 2fr;\n    border: solid 2px var(--inner-border-colour);\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 20px;  \n    align-items: center;\n}\n\n.contactInfo h3 {\n    margin-top: 0;\n}\n\n.contactInfo p:nth-child(n+3) {\n    margin: 0;\n    font-size: .8rem;\n}\n\n.contactImage {\n    height: 150px;\n    background-size: cover;\n    border: 2px solid var(--menu-image-border-colour);\n    border-radius: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iDAAiD;IACjD,4BAA4B;IAC5B,8BAA8B;IAC9B,8BAA8B;IAC9B,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI,yDAAsD;IACtD,4BAA4B;IAC5B,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yCAAyC;IACzC,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;;IAGI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,8CAA8C;IAC9C,mBAAmB;IACnB,kDAAkD;IAClD,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kDAAkD;IAClD,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,oBAAoB;IACpB,4CAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,8BAA8B;AAC9B;IACI,WAAW;IACX,oBAAoB;IACpB;;;;;;;;yBAQqB;AACzB;;AAEA,gCAAgC;AAChC;IACI,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,cAAc;IACd;;;;;gCAK4B;AAChC;;AAEA;IACI,cAAc;IACd;;;;;;;;yBAQqB;;IAErB;;;;;;gCAM4B;AAChC;;AAEA,cAAc;AACd;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,eAAe;IACf,iDAAiD;IACjD,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iDAAiD;IACjD,mBAAmB;AACvB","sourcesContent":[":root {\n    --content-background-colour: rgba(19, 5, 89, 0.8);\n    --content-font-colour: white;\n    --outer-border-colour: #120458;\n    --inner-border-colour: #7a04eb;\n    --menu-image-border-colour: #fe75fe;\n    --nav-hover-colour: hotpink;\n}\n\nhtml {\n    background-image: url('./images/shinjuku-vending.jpg');\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 100vh;\n    min-width: 100vw;\n    overflow-x: hidden;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    min-height: 100vh;\n}\n\n.tabContent {\n    display: none;\n}\n\n.tabContent.is-active {\n    display: block;\n}\n\n.tabs ul {\n    display: flex;\n    gap: 10px;\n    padding-left: 0px;\n    font-size: 2rem;\n}\n\n.tabs li {\n    display: inline;\n}\n\n.tabs a,\na:link,\na:visited {\n    text-decoration: none;\n    color: white;\n}\n\n.homeSplash {\n    width: 60vw;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 40vw;\n    border: 3px solid var(--section-border-colour);\n    border-radius: 10px;\n    background-color: var(--content-background-colour);\n    color: var(--content-font-colour);\n    padding: 0px 80px 30px;\n}\n\n#content h1 {\n    text-align: center;\n}\n\n.contentPane {\n    border: solid 2px var(--inner-border-colour);\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 20px;\n}\n\nfooter {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 100vw;\n    height: 30px;\n    background-color: var(--content-background-colour);\n    margin-top: 20px;\n    color: white;\n    font-size: .8rem;\n}\n\n.hoursOpen {\n    font-size: 1rem;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n@font-face {\n    font-family: 'Ultra';\n    src: url('./ultra.otf');\n    font-weight: 600;\n    font-style: normal;\n}\n\n/* Adds the neon text effect */\n.neonText {\n    color: #fff;\n    font-family: 'Ultra';\n    text-shadow:\n        0 0 7px #fff,\n        0 0 10px #fff,\n        0 0 21px #fff,\n        0 0 42px #bc13fe,\n        0 0 82px #bc13fe,\n        0 0 92px #bc13fe,\n        0 0 102px #bc13fe,\n        0 0 151px #bc13fe;\n}\n\n/* Adds the neon border effect */\n.neonText {\n    font-size: 1.8rem;\n    border: 0.2rem solid #fff;\n    border-radius: 2rem;\n    padding: 0.4em;\n    box-shadow: 0 0 .2rem #fff,\n        0 0 .2rem #fff,\n        0 0 2rem #bc13fe,\n        0 0 0.8rem #bc13fe,\n        0 0 2.8rem #bc13fe,\n        inset 0 0 1.3rem #bc13fe;\n}\n\n.neonText:hover {\n    color: hotpink;\n    text-shadow:\n        0 0 7px #ff124f,\n        0 0 10px #ff124f,\n        0 0 21px #ff124f,\n        0 0 42px #ff00a0,\n        0 0 82px #ff00a0,\n        0 0 92px #ff00a0,\n        0 0 102px #ff00a0,\n        0 0 151px #ff00a0;\n\n    box-shadow:\n        0 0 .2rem #ff124f,\n        0 0 .2rem #ff124f,\n        0 0 2rem #ff00a0,\n        0 0 0.8rem #ff00a0,\n        0 0 2.8rem #ff00a0,\n        inset 0 0 1.3rem #ff00a0;\n}\n\n/* Menu Page */\n.menuItem {\n    width: 400px;\n    display: flex;\n    flex-direction: column;\n    border: solid 2px var(--inner-border-colour);\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 20px;   \n}\n\n.menuItem p, .menuItem span {\n    padding-left: 50px;\n}\n\n.menuItem span {\n    font-weight: bolder;\n}\n\n.menuImage {\n    height: 250px;\n    width: 250px;\n    background-size: cover;\n    align-self: end;\n    border: 2px solid var(--menu-image-border-colour);\n    border-radius: 10px;\n}\n\n.contactItem {\n    width: 400px;\n    display: grid;\n    grid-template-columns: 2fr 2fr;\n    border: solid 2px var(--inner-border-colour);\n    border-radius: 8px;\n    padding: 20px;\n    margin-top: 20px;  \n    align-items: center;\n}\n\n.contactInfo h3 {\n    margin-top: 0;\n}\n\n.contactInfo p:nth-child(n+3) {\n    margin: 0;\n    font-size: .8rem;\n}\n\n.contactImage {\n    height: 150px;\n    background-size: cover;\n    border: 2px solid var(--menu-image-border-colour);\n    border-radius: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _images_contact_robo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact/robo.jpg */ "./src/images/contact/robo.jpg");
/* harmony import */ var _images_contact_gepetto_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/contact/gepetto.jpg */ "./src/images/contact/gepetto.jpg");
/* harmony import */ var _images_contact_vending_machine_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/contact/vending-machine.jpg */ "./src/images/contact/vending-machine.jpg");




function loadContact(parent) {
    const headingOne = document.createElement('h1');
    headingOne.textContent = 'Contact';

    function createContactItem(name, description, number, email, image) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contactItem');
        
        const contactInfo = document.createElement('div');
        const contactName = document.createElement('h3');
        const contactDescription = document.createElement('p');
        const contactNumber = document.createElement('p');
        const contactEmail = document.createElement('p');
        
        contactName.textContent = name;
        contactDescription.textContent = description;
        contactNumber.textContent = number;
        contactEmail.textContent = email;
        contactInfo.append(contactName, contactDescription, contactNumber, contactEmail);
        contactInfo.classList.add('contactInfo');

        const contactImage = new Image();
        contactImage.src = image;
        contactImage.className = 'contactImage';

        contactItem.append(contactInfo, contactImage);

        return contactItem;
    }

    const contactContainer = document.createElement('div');

    const robot = createContactItem('Robo', 'Robo tends to our vending machines.', '5555-555-2049', 'notarealemail@2049.corp', _images_contact_robo_jpg__WEBPACK_IMPORTED_MODULE_0__);
    const gepetto = createContactItem('Gepetto', 'Our chief inventor.', '5555-555-2049', 'notarealemail@2049.corp', _images_contact_gepetto_jpg__WEBPACK_IMPORTED_MODULE_1__);
    const vendingMachine = createContactItem('Vendy', 'Our vendies provide impeccable service.', '5555-555-2049', 'notarealemail@2049.corp', _images_contact_vending_machine_jpg__WEBPACK_IMPORTED_MODULE_2__);

    contactContainer.append(robot, gepetto, vendingMachine);
    parent.append(headingOne, contactContainer);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_shinjuku_vending_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/shinjuku-vending.jpg */ "./src/images/shinjuku-vending.jpg");


function loadHome(parent) {
    const headingOne = document.createElement('h1');
    const headingTwo = document.createElement('h2');
    const paragraph = document.createElement('p');

    const hoursHeading = document.createElement('h2');
    const hoursPre = document.createElement('pre');

    const locationHeading = document.createElement('h2');
    const locationPara = document.createElement('p');
    
    const homeImage = new Image();
    // homeImage.src = shinjukuVending;
    // homeImage.className = 'homeSplash';

    function createContentDiv() {
        const contentPane = document.createElement('div');
        contentPane.classList.add('contentPane');
        return contentPane;
    }

    // const introDiv = document.createElement('div');
    const introDiv = createContentDiv();
    const hoursDiv = createContentDiv();
    const locationDiv = createContentDiv();

    headingOne.textContent = 'Shinjuku 2049 Vending Corp.';
    headingTwo.textContent = 'Bringing convenience back to the streets.';
    paragraph.textContent = 'Located on the streets of Shinjuku, Toyko, in an unnamed alleyway, is your gateway to convenience. From salarymen burning the midnight oil to errant travellers, you can find everything that you need (and more) at Shinjuku 2049. We have the largest selection of beverages and snacks guaranteed to give you that buzz. We are Shinjuku 2049.';

    introDiv.append(headingTwo, paragraph);
    
    hoursHeading.textContent = 'Hours';
    const hoursOpen = 'Open 24 hours';
    hoursPre.textContent = `Monday: ${hoursOpen}\nTuesday: ${hoursOpen}\nWednesday: ${hoursOpen}*\nThursday: ${hoursOpen}\nFriday: ${hoursOpen}\nSaturday: ${hoursOpen}\nSunday: ${hoursOpen}\n\n*Machines may occasionally be serviced at 12am midnight.`;
    hoursPre.className = 'hoursOpen';
    hoursDiv.append(hoursHeading, hoursPre)


    locationHeading.textContent = 'Location';
    locationPara.textContent = 'Located in Alleyway 2049, Shinjuku, Tokyo.'
    locationDiv.append(locationHeading, locationPara);

    parent.append(
        headingOne,
        introDiv,
        hoursDiv,
        locationDiv
    );
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_menu_energy_drink_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu/energy-drink.jpg */ "./src/images/menu/energy-drink.jpg");
/* harmony import */ var _images_menu_food_pills_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu/food-pills.webp */ "./src/images/menu/food-pills.webp");
/* harmony import */ var _images_menu_burgerCan_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu/burgerCan.jpeg */ "./src/images/menu/burgerCan.jpeg");




function loadMenu(parent) {
    const headingOne = document.createElement('h1');

    
    function createMenuItem(name, description, price, image) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        const itemName = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('span');

        itemName.textContent = name;
        itemDescription.textContent = description;
        itemPrice.textContent = price;

        const menuImage = new Image();
        menuImage.src = image;
        menuImage.className = 'menuImage';

        menuItem.append(itemName, itemDescription, itemPrice, menuImage);

        return menuItem;
    }

    const menuContainer = document.createElement('div');
    const menuDrink = createMenuItem('Super Energy Drink', 'An explosive energy drink infused with electrolytes, enzymes and over 100 stimulants. Start your day off with a bang!', '$2', _images_menu_energy_drink_jpg__WEBPACK_IMPORTED_MODULE_0__);
    const menuFoodPill = createMenuItem('Food Pill', 'For the doers of the world, for those who live fast and die young. When there ain\'t enough time to eat, pop a Food Pill for an entire meal in one!', '$4', _images_menu_food_pills_webp__WEBPACK_IMPORTED_MODULE_1__);
    const menuBurger = createMenuItem('Burger-In-A-Can', "It's a burger! It's a can! No, it's a Burger-In-A-Can! Why settle for the real thing when you can settle for the next best thing!", '$10', _images_menu_burgerCan_jpeg__WEBPACK_IMPORTED_MODULE_2__);

    menuContainer.append(menuDrink, menuFoodPill, menuBurger);
    
    headingOne.textContent = 'Menu';

    parent.append(headingOne, menuContainer);
}


/***/ }),

/***/ "./src/attribution.txt":
/*!*****************************!*\
  !*** ./src/attribution.txt ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ab91b00ea18b5cfbcf7.txt";

/***/ }),

/***/ "./src/images/contact/gepetto.jpg":
/*!****************************************!*\
  !*** ./src/images/contact/gepetto.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7c8c30ab24e60074c91.jpg";

/***/ }),

/***/ "./src/images/contact/robo.jpg":
/*!*************************************!*\
  !*** ./src/images/contact/robo.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3a4c16d7504b9bf4061.jpg";

/***/ }),

/***/ "./src/images/contact/vending-machine.jpg":
/*!************************************************!*\
  !*** ./src/images/contact/vending-machine.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0d3d58e17fa71ad6649.jpg";

/***/ }),

/***/ "./src/images/menu/burgerCan.jpeg":
/*!****************************************!*\
  !*** ./src/images/menu/burgerCan.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66c5b967eb4cda6d553f.jpeg";

/***/ }),

/***/ "./src/images/menu/energy-drink.jpg":
/*!******************************************!*\
  !*** ./src/images/menu/energy-drink.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80d86994017cfbfcf0a3.jpg";

/***/ }),

/***/ "./src/images/menu/food-pills.webp":
/*!*****************************************!*\
  !*** ./src/images/menu/food-pills.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaec3b464cea04018426.webp";

/***/ }),

/***/ "./src/images/shinjuku-vending.jpg":
/*!*****************************************!*\
  !*** ./src/images/shinjuku-vending.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea6a0a1d36a3bdee1ba0.jpg";

/***/ }),

/***/ "./src/ultra.otf":
/*!***********************!*\
  !*** ./src/ultra.otf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca13df22841e792e77c4.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _attribution_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribution.txt */ "./src/attribution.txt");







const TAB_ID = ['#tabOne', '#tabTwo', '#tabThree'];
const TAB_NAMES = ['Home', 'Menu', 'Contact'];
const TAB_LOADER = [_home_js__WEBPACK_IMPORTED_MODULE_0__["default"], _menu__WEBPACK_IMPORTED_MODULE_1__["default"], _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]];


function createHeader(parent) {
    const header = document.createElement('header');
    const tabNavGroup = document.createElement('nav');
    tabNavGroup.classList.add('tabs');

    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');

    const tabList = document.createElement('ul');
    tabList.append(homeTab, menuTab, contactTab)

    // removes 'is-active' class from all tabs (tab nav elements)
    function removeActiveTabNav() {
        const tabContentDivs = document.querySelector('#content');

        for (const tab of tabList.children) {
            tab.classList.remove('is-active');
        }

        for (const div of tabContentDivs.children) {
            div.classList.remove('is-active');
        }
    }

    function makeTabSectionActive(navTab) {
        const href = navTab.querySelector('a').getAttribute('href');
        const matchingTabSection = document.getElementById(href);

        matchingTabSection.classList.add('is-active');
    }

    // for each tab
    for (let i = 0; i < tabList.children.length; i++) {
        const tab = tabList.children[i];
        const tabAnchor = document.createElement('a');

        tabAnchor.href = TAB_ID[i];
        tabAnchor.textContent = TAB_NAMES[i];
        tabAnchor.classList.add('neonText');

        tab.appendChild(tabAnchor);

        // add eventListener to tab
        tab.addEventListener('click', e => {
            e.preventDefault();
            // remove all other active tabs (including content divs)
            removeActiveTabNav();
            // make this tab active
            tab.classList.add('is-active');

            // make the matching section active
            makeTabSectionActive(tab);
        })
    }

    tabNavGroup.append(tabList);
    header.appendChild(tabNavGroup);
    
    parent.body.appendChild(header);
}

function populateTabContent(parent) {
    const homeDiv = document.createElement('div');
    const MenuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');

    const tabDivArr =[homeDiv, MenuDiv, contactDiv]

    // Add classes and IDs to each tab container
    for (let i = 0; i < tabDivArr.length; i++) {
        const div = tabDivArr[i];

        div.classList.add('tabContent');
        div.id = TAB_ID[i];

        // Make 'home' tab active by default and inject content from module
        if(i == 0) { 
            div.classList.add('is-active');
            TAB_LOADER[0](div);
        } else {
            TAB_LOADER[i](div);
        }
    }

    parent.append(homeDiv, MenuDiv, contactDiv);
}

function loadTabContent(parent) {
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    populateTabContent(contentDiv);
    parent.body.appendChild(contentDiv);
}

function createFooter(parent) {
    const footer = document.createElement('footer');
    
    const bgCredit = document.createElement('span');
    const bgCreditLink = document.createElement('a');
    const otherCredit = document.createElement('span');
    const otherCreditLink = document.createElement('a');

    const disclaimer = document.createElement('span');
    disclaimer.textContent = 'Created for The Odin Project';

    bgCreditLink.href = 'https://www.pexels.com/photo/lighted-vending-machines-on-street-2338113/';
    bgCreditLink.textContent = 'Aleksandar Pasaric';
    bgCreditLink.style.textDecoration = 'underline';
    bgCredit.textContent = 'Background photo by ';
    bgCredit.appendChild(bgCreditLink);

    otherCredit.textContent = 'Full image attribution ';
    otherCreditLink.textContent = 'here';
    otherCreditLink.href = _attribution_txt__WEBPACK_IMPORTED_MODULE_4__;
    otherCreditLink.style.textDecoration = 'underline';
    otherCredit.appendChild(otherCreditLink);

    footer.append(bgCredit, otherCredit, disclaimer);

    parent.body.appendChild(footer);
}

createHeader(document);
loadTabContent(document);
createFooter(document);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBTztBQUNsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3NoaW5qdWt1LXZlbmRpbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi91bHRyYS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvdXI6IHJnYmEoMTksIDUsIDg5LCAwLjgpO1xcbiAgICAtLWNvbnRlbnQtZm9udC1jb2xvdXI6IHdoaXRlO1xcbiAgICAtLW91dGVyLWJvcmRlci1jb2xvdXI6ICMxMjA0NTg7XFxuICAgIC0taW5uZXItYm9yZGVyLWNvbG91cjogIzdhMDRlYjtcXG4gICAgLS1tZW51LWltYWdlLWJvcmRlci1jb2xvdXI6ICNmZTc1ZmU7XFxuICAgIC0tbmF2LWhvdmVyLWNvbG91cjogaG90cGluaztcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi50YWJDb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhYkNvbnRlbnQuaXMtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YWJzIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFicyBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLnRhYnMgYSxcXG5hOmxpbmssXFxuYTp2aXNpdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ob21lU3BsYXNoIHtcXG4gICAgd2lkdGg6IDYwdnc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXNlY3Rpb24tYm9yZGVyLWNvbG91cik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgICBjb2xvcjogdmFyKC0tY29udGVudC1mb250LWNvbG91cik7XFxuICAgIHBhZGRpbmc6IDBweCA4MHB4IDMwcHg7XFxufVxcblxcbiNjb250ZW50IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudFBhbmUge1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1pbm5lci1ib3JkZXItY29sb3VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbi5ob3Vyc09wZW4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdVbHRyYSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBBZGRzIHRoZSBuZW9uIHRleHQgZWZmZWN0ICovXFxuLm5lb25UZXh0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWx0cmEnO1xcbiAgICB0ZXh0LXNoYWRvdzpcXG4gICAgICAgIDAgMCA3cHggI2ZmZixcXG4gICAgICAgIDAgMCAxMHB4ICNmZmYsXFxuICAgICAgICAwIDAgMjFweCAjZmZmLFxcbiAgICAgICAgMCAwIDQycHggI2JjMTNmZSxcXG4gICAgICAgIDAgMCA4MnB4ICNiYzEzZmUsXFxuICAgICAgICAwIDAgOTJweCAjYmMxM2ZlLFxcbiAgICAgICAgMCAwIDEwMnB4ICNiYzEzZmUsXFxuICAgICAgICAwIDAgMTUxcHggI2JjMTNmZTtcXG59XFxuXFxuLyogQWRkcyB0aGUgbmVvbiBib3JkZXIgZWZmZWN0ICovXFxuLm5lb25UZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgICBib3gtc2hhZG93OiAwIDAgLjJyZW0gI2ZmZixcXG4gICAgICAgIDAgMCAuMnJlbSAjZmZmLFxcbiAgICAgICAgMCAwIDJyZW0gI2JjMTNmZSxcXG4gICAgICAgIDAgMCAwLjhyZW0gI2JjMTNmZSxcXG4gICAgICAgIDAgMCAyLjhyZW0gI2JjMTNmZSxcXG4gICAgICAgIGluc2V0IDAgMCAxLjNyZW0gI2JjMTNmZTtcXG59XFxuXFxuLm5lb25UZXh0OmhvdmVyIHtcXG4gICAgY29sb3I6IGhvdHBpbms7XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAgICAgMCAwIDdweCAjZmYxMjRmLFxcbiAgICAgICAgMCAwIDEwcHggI2ZmMTI0ZixcXG4gICAgICAgIDAgMCAyMXB4ICNmZjEyNGYsXFxuICAgICAgICAwIDAgNDJweCAjZmYwMGEwLFxcbiAgICAgICAgMCAwIDgycHggI2ZmMDBhMCxcXG4gICAgICAgIDAgMCA5MnB4ICNmZjAwYTAsXFxuICAgICAgICAwIDAgMTAycHggI2ZmMDBhMCxcXG4gICAgICAgIDAgMCAxNTFweCAjZmYwMGEwO1xcblxcbiAgICBib3gtc2hhZG93OlxcbiAgICAgICAgMCAwIC4ycmVtICNmZjEyNGYsXFxuICAgICAgICAwIDAgLjJyZW0gI2ZmMTI0ZixcXG4gICAgICAgIDAgMCAycmVtICNmZjAwYTAsXFxuICAgICAgICAwIDAgMC44cmVtICNmZjAwYTAsXFxuICAgICAgICAwIDAgMi44cmVtICNmZjAwYTAsXFxuICAgICAgICBpbnNldCAwIDAgMS4zcmVtICNmZjAwYTA7XFxufVxcblxcbi8qIE1lbnUgUGFnZSAqL1xcbi5tZW51SXRlbSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW5uZXItYm9yZGVyLWNvbG91cik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgICBcXG59XFxuXFxuLm1lbnVJdGVtIHAsIC5tZW51SXRlbSBzcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0gc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5tZW51SW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWVudS1pbWFnZS1ib3JkZXItY29sb3VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3RJdGVtIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWlubmVyLWJvcmRlci1jb2xvdXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIHA6bnRoLWNoaWxkKG4rMykge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbi5jb250YWN0SW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tZW51LWltYWdlLWJvcmRlci1jb2xvdXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5REFBc0Q7SUFDdEQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrREFBa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLDhCQUE4QjtBQUM5QjtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEI7Ozs7Ozs7O3lCQVFxQjtBQUN6Qjs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Q7Ozs7O2dDQUs0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7SUFDZDs7Ozs7Ozs7eUJBUXFCOztJQUVyQjs7Ozs7O2dDQU00QjtBQUNoQzs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaURBQWlEO0lBQ2pELG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kLWNvbG91cjogcmdiYSgxOSwgNSwgODksIDAuOCk7XFxuICAgIC0tY29udGVudC1mb250LWNvbG91cjogd2hpdGU7XFxuICAgIC0tb3V0ZXItYm9yZGVyLWNvbG91cjogIzEyMDQ1ODtcXG4gICAgLS1pbm5lci1ib3JkZXItY29sb3VyOiAjN2EwNGViO1xcbiAgICAtLW1lbnUtaW1hZ2UtYm9yZGVyLWNvbG91cjogI2ZlNzVmZTtcXG4gICAgLS1uYXYtaG92ZXItY29sb3VyOiBob3RwaW5rO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9zaGluanVrdS12ZW5kaW5nLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udGFiQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YWJDb250ZW50LmlzLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFicyB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRhYnMgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi50YWJzIGEsXFxuYTpsaW5rLFxcbmE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZVNwbGFzaCB7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zZWN0aW9uLWJvcmRlci1jb2xvdXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3VyKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQtZm9udC1jb2xvdXIpO1xcbiAgICBwYWRkaW5nOiAwcHggODBweCAzMHB4O1xcbn1cXG5cXG4jY29udGVudCBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRQYW5lIHtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW5uZXItYm9yZGVyLWNvbG91cik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQtY29sb3VyKTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4uaG91cnNPcGVuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWx0cmEnO1xcbiAgICBzcmM6IHVybCgnLi91bHRyYS5vdGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiBBZGRzIHRoZSBuZW9uIHRleHQgZWZmZWN0ICovXFxuLm5lb25UZXh0IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWx0cmEnO1xcbiAgICB0ZXh0LXNoYWRvdzpcXG4gICAgICAgIDAgMCA3cHggI2ZmZixcXG4gICAgICAgIDAgMCAxMHB4ICNmZmYsXFxuICAgICAgICAwIDAgMjFweCAjZmZmLFxcbiAgICAgICAgMCAwIDQycHggI2JjMTNmZSxcXG4gICAgICAgIDAgMCA4MnB4ICNiYzEzZmUsXFxuICAgICAgICAwIDAgOTJweCAjYmMxM2ZlLFxcbiAgICAgICAgMCAwIDEwMnB4ICNiYzEzZmUsXFxuICAgICAgICAwIDAgMTUxcHggI2JjMTNmZTtcXG59XFxuXFxuLyogQWRkcyB0aGUgbmVvbiBib3JkZXIgZWZmZWN0ICovXFxuLm5lb25UZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgICBib3gtc2hhZG93OiAwIDAgLjJyZW0gI2ZmZixcXG4gICAgICAgIDAgMCAuMnJlbSAjZmZmLFxcbiAgICAgICAgMCAwIDJyZW0gI2JjMTNmZSxcXG4gICAgICAgIDAgMCAwLjhyZW0gI2JjMTNmZSxcXG4gICAgICAgIDAgMCAyLjhyZW0gI2JjMTNmZSxcXG4gICAgICAgIGluc2V0IDAgMCAxLjNyZW0gI2JjMTNmZTtcXG59XFxuXFxuLm5lb25UZXh0OmhvdmVyIHtcXG4gICAgY29sb3I6IGhvdHBpbms7XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAgICAgMCAwIDdweCAjZmYxMjRmLFxcbiAgICAgICAgMCAwIDEwcHggI2ZmMTI0ZixcXG4gICAgICAgIDAgMCAyMXB4ICNmZjEyNGYsXFxuICAgICAgICAwIDAgNDJweCAjZmYwMGEwLFxcbiAgICAgICAgMCAwIDgycHggI2ZmMDBhMCxcXG4gICAgICAgIDAgMCA5MnB4ICNmZjAwYTAsXFxuICAgICAgICAwIDAgMTAycHggI2ZmMDBhMCxcXG4gICAgICAgIDAgMCAxNTFweCAjZmYwMGEwO1xcblxcbiAgICBib3gtc2hhZG93OlxcbiAgICAgICAgMCAwIC4ycmVtICNmZjEyNGYsXFxuICAgICAgICAwIDAgLjJyZW0gI2ZmMTI0ZixcXG4gICAgICAgIDAgMCAycmVtICNmZjAwYTAsXFxuICAgICAgICAwIDAgMC44cmVtICNmZjAwYTAsXFxuICAgICAgICAwIDAgMi44cmVtICNmZjAwYTAsXFxuICAgICAgICBpbnNldCAwIDAgMS4zcmVtICNmZjAwYTA7XFxufVxcblxcbi8qIE1lbnUgUGFnZSAqL1xcbi5tZW51SXRlbSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taW5uZXItYm9yZGVyLWNvbG91cik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgICBcXG59XFxuXFxuLm1lbnVJdGVtIHAsIC5tZW51SXRlbSBzcGFuIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4ubWVudUl0ZW0gc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5tZW51SW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWVudS1pbWFnZS1ib3JkZXItY29sb3VyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3RJdGVtIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWlubmVyLWJvcmRlci1jb2xvdXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIGgzIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmNvbnRhY3RJbmZvIHA6bnRoLWNoaWxkKG4rMykge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbi5jb250YWN0SW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tZW51LWltYWdlLWJvcmRlci1jb2xvdXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJvYm8gZnJvbSAnLi9pbWFnZXMvY29udGFjdC9yb2JvLmpwZyc7XG5pbXBvcnQgaW52ZW50b3IgZnJvbSAnLi9pbWFnZXMvY29udGFjdC9nZXBldHRvLmpwZyc7XG5pbXBvcnQgdmVuZGluZyBmcm9tICcuL2ltYWdlcy9jb250YWN0L3ZlbmRpbmctbWFjaGluZS5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdChwYXJlbnQpIHtcbiAgICBjb25zdCBoZWFkaW5nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nT25lLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdEl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIG51bWJlciwgZW1haWwsIGltYWdlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJdGVtJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBcbiAgICAgICAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBjb250YWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgICAgY29udGFjdEVtYWlsLnRleHRDb250ZW50ID0gZW1haWw7XG4gICAgICAgIGNvbnRhY3RJbmZvLmFwcGVuZChjb250YWN0TmFtZSwgY29udGFjdERlc2NyaXB0aW9uLCBjb250YWN0TnVtYmVyLCBjb250YWN0RW1haWwpO1xuICAgICAgICBjb250YWN0SW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb250YWN0SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgICAgIGNvbnRhY3RJbWFnZS5jbGFzc05hbWUgPSAnY29udGFjdEltYWdlJztcblxuICAgICAgICBjb250YWN0SXRlbS5hcHBlbmQoY29udGFjdEluZm8sIGNvbnRhY3RJbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhY3RJdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHJvYm90ID0gY3JlYXRlQ29udGFjdEl0ZW0oJ1JvYm8nLCAnUm9ibyB0ZW5kcyB0byBvdXIgdmVuZGluZyBtYWNoaW5lcy4nLCAnNTU1NS01NTUtMjA0OScsICdub3RhcmVhbGVtYWlsQDIwNDkuY29ycCcsIHJvYm8pO1xuICAgIGNvbnN0IGdlcGV0dG8gPSBjcmVhdGVDb250YWN0SXRlbSgnR2VwZXR0bycsICdPdXIgY2hpZWYgaW52ZW50b3IuJywgJzU1NTUtNTU1LTIwNDknLCAnbm90YXJlYWxlbWFpbEAyMDQ5LmNvcnAnLCBpbnZlbnRvcik7XG4gICAgY29uc3QgdmVuZGluZ01hY2hpbmUgPSBjcmVhdGVDb250YWN0SXRlbSgnVmVuZHknLCAnT3VyIHZlbmRpZXMgcHJvdmlkZSBpbXBlY2NhYmxlIHNlcnZpY2UuJywgJzU1NTUtNTU1LTIwNDknLCAnbm90YXJlYWxlbWFpbEAyMDQ5LmNvcnAnLCB2ZW5kaW5nKTtcblxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKHJvYm90LCBnZXBldHRvLCB2ZW5kaW5nTWFjaGluZSk7XG4gICAgcGFyZW50LmFwcGVuZChoZWFkaW5nT25lLCBjb250YWN0Q29udGFpbmVyKTtcbn1cbiIsImltcG9ydCBzaGluanVrdVZlbmRpbmcgZnJvbSAnLi9pbWFnZXMvc2hpbmp1a3UtdmVuZGluZy5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZShwYXJlbnQpIHtcbiAgICBjb25zdCBoZWFkaW5nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoZWFkaW5nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGhvdXJzUHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGxvY2F0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICBjb25zdCBob21lSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBob21lSW1hZ2Uuc3JjID0gc2hpbmp1a3VWZW5kaW5nO1xuICAgIC8vIGhvbWVJbWFnZS5jbGFzc05hbWUgPSAnaG9tZVNwbGFzaCc7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDb250ZW50RGl2KCkge1xuICAgICAgICBjb25zdCBjb250ZW50UGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50UGFuZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50UGFuZScpO1xuICAgICAgICByZXR1cm4gY29udGVudFBhbmU7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgaW50cm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnRyb0RpdiA9IGNyZWF0ZUNvbnRlbnREaXYoKTtcbiAgICBjb25zdCBob3Vyc0RpdiA9IGNyZWF0ZUNvbnRlbnREaXYoKTtcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGNyZWF0ZUNvbnRlbnREaXYoKTtcblxuICAgIGhlYWRpbmdPbmUudGV4dENvbnRlbnQgPSAnU2hpbmp1a3UgMjA0OSBWZW5kaW5nIENvcnAuJztcbiAgICBoZWFkaW5nVHdvLnRleHRDb250ZW50ID0gJ0JyaW5naW5nIGNvbnZlbmllbmNlIGJhY2sgdG8gdGhlIHN0cmVldHMuJztcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTG9jYXRlZCBvbiB0aGUgc3RyZWV0cyBvZiBTaGluanVrdSwgVG95a28sIGluIGFuIHVubmFtZWQgYWxsZXl3YXksIGlzIHlvdXIgZ2F0ZXdheSB0byBjb252ZW5pZW5jZS4gRnJvbSBzYWxhcnltZW4gYnVybmluZyB0aGUgbWlkbmlnaHQgb2lsIHRvIGVycmFudCB0cmF2ZWxsZXJzLCB5b3UgY2FuIGZpbmQgZXZlcnl0aGluZyB0aGF0IHlvdSBuZWVkIChhbmQgbW9yZSkgYXQgU2hpbmp1a3UgMjA0OS4gV2UgaGF2ZSB0aGUgbGFyZ2VzdCBzZWxlY3Rpb24gb2YgYmV2ZXJhZ2VzIGFuZCBzbmFja3MgZ3VhcmFudGVlZCB0byBnaXZlIHlvdSB0aGF0IGJ1enouIFdlIGFyZSBTaGluanVrdSAyMDQ5Lic7XG5cbiAgICBpbnRyb0Rpdi5hcHBlbmQoaGVhZGluZ1R3bywgcGFyYWdyYXBoKTtcbiAgICBcbiAgICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICAgIGNvbnN0IGhvdXJzT3BlbiA9ICdPcGVuIDI0IGhvdXJzJztcbiAgICBob3Vyc1ByZS50ZXh0Q29udGVudCA9IGBNb25kYXk6ICR7aG91cnNPcGVufVxcblR1ZXNkYXk6ICR7aG91cnNPcGVufVxcbldlZG5lc2RheTogJHtob3Vyc09wZW59KlxcblRodXJzZGF5OiAke2hvdXJzT3Blbn1cXG5GcmlkYXk6ICR7aG91cnNPcGVufVxcblNhdHVyZGF5OiAke2hvdXJzT3Blbn1cXG5TdW5kYXk6ICR7aG91cnNPcGVufVxcblxcbipNYWNoaW5lcyBtYXkgb2NjYXNpb25hbGx5IGJlIHNlcnZpY2VkIGF0IDEyYW0gbWlkbmlnaHQuYDtcbiAgICBob3Vyc1ByZS5jbGFzc05hbWUgPSAnaG91cnNPcGVuJztcbiAgICBob3Vyc0Rpdi5hcHBlbmQoaG91cnNIZWFkaW5nLCBob3Vyc1ByZSlcblxuXG4gICAgbG9jYXRpb25IZWFkaW5nLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvblBhcmEudGV4dENvbnRlbnQgPSAnTG9jYXRlZCBpbiBBbGxleXdheSAyMDQ5LCBTaGluanVrdSwgVG9reW8uJ1xuICAgIGxvY2F0aW9uRGl2LmFwcGVuZChsb2NhdGlvbkhlYWRpbmcsIGxvY2F0aW9uUGFyYSk7XG5cbiAgICBwYXJlbnQuYXBwZW5kKFxuICAgICAgICBoZWFkaW5nT25lLFxuICAgICAgICBpbnRyb0RpdixcbiAgICAgICAgaG91cnNEaXYsXG4gICAgICAgIGxvY2F0aW9uRGl2XG4gICAgKTtcbn1cbiIsImltcG9ydCBkcmluayBmcm9tICcuL2ltYWdlcy9tZW51L2VuZXJneS1kcmluay5qcGcnO1xuaW1wb3J0IGZvb2RQaWxsIGZyb20gJy4vaW1hZ2VzL21lbnUvZm9vZC1waWxscy53ZWJwJztcbmltcG9ydCBidXJnZXIgZnJvbSAnLi9pbWFnZXMvbWVudS9idXJnZXJDYW4uanBlZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KHBhcmVudCkge1xuICAgIGNvbnN0IGhlYWRpbmdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWFnZSkge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtZW51SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgICAgIG1lbnVJbWFnZS5jbGFzc05hbWUgPSAnbWVudUltYWdlJztcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVByaWNlLCBtZW51SW1hZ2UpO1xuXG4gICAgICAgIHJldHVybiBtZW51SXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudURyaW5rID0gY3JlYXRlTWVudUl0ZW0oJ1N1cGVyIEVuZXJneSBEcmluaycsICdBbiBleHBsb3NpdmUgZW5lcmd5IGRyaW5rIGluZnVzZWQgd2l0aCBlbGVjdHJvbHl0ZXMsIGVuenltZXMgYW5kIG92ZXIgMTAwIHN0aW11bGFudHMuIFN0YXJ0IHlvdXIgZGF5IG9mZiB3aXRoIGEgYmFuZyEnLCAnJDInLCBkcmluayk7XG4gICAgY29uc3QgbWVudUZvb2RQaWxsID0gY3JlYXRlTWVudUl0ZW0oJ0Zvb2QgUGlsbCcsICdGb3IgdGhlIGRvZXJzIG9mIHRoZSB3b3JsZCwgZm9yIHRob3NlIHdobyBsaXZlIGZhc3QgYW5kIGRpZSB5b3VuZy4gV2hlbiB0aGVyZSBhaW5cXCd0IGVub3VnaCB0aW1lIHRvIGVhdCwgcG9wIGEgRm9vZCBQaWxsIGZvciBhbiBlbnRpcmUgbWVhbCBpbiBvbmUhJywgJyQ0JywgZm9vZFBpbGwpO1xuICAgIGNvbnN0IG1lbnVCdXJnZXIgPSBjcmVhdGVNZW51SXRlbSgnQnVyZ2VyLUluLUEtQ2FuJywgXCJJdCdzIGEgYnVyZ2VyISBJdCdzIGEgY2FuISBObywgaXQncyBhIEJ1cmdlci1Jbi1BLUNhbiEgV2h5IHNldHRsZSBmb3IgdGhlIHJlYWwgdGhpbmcgd2hlbiB5b3UgY2FuIHNldHRsZSBmb3IgdGhlIG5leHQgYmVzdCB0aGluZyFcIiwgJyQxMCcsIGJ1cmdlcik7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51RHJpbmssIG1lbnVGb29kUGlsbCwgbWVudUJ1cmdlcik7XG4gICAgXG4gICAgaGVhZGluZ09uZS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIHBhcmVudC5hcHBlbmQoaGVhZGluZ09uZSwgbWVudUNvbnRhaW5lcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlZGl0cyBmcm9tICcuL2F0dHJpYnV0aW9uLnR4dCc7XG5cblxuY29uc3QgVEFCX0lEID0gWycjdGFiT25lJywgJyN0YWJUd28nLCAnI3RhYlRocmVlJ107XG5jb25zdCBUQUJfTkFNRVMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5jb25zdCBUQUJfTE9BREVSID0gW2xvYWRIb21lLCBsb2FkTWVudSwgbG9hZENvbnRhY3RdO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihwYXJlbnQpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCB0YWJOYXZHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIHRhYk5hdkdyb3VwLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcblxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgY29uc3QgdGFiTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdGFiTGlzdC5hcHBlbmQoaG9tZVRhYiwgbWVudVRhYiwgY29udGFjdFRhYilcblxuICAgIC8vIHJlbW92ZXMgJ2lzLWFjdGl2ZScgY2xhc3MgZnJvbSBhbGwgdGFicyAodGFiIG5hdiBlbGVtZW50cylcbiAgICBmdW5jdGlvbiByZW1vdmVBY3RpdmVUYWJOYXYoKSB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnREaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJMaXN0LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGRpdiBvZiB0YWJDb250ZW50RGl2cy5jaGlsZHJlbikge1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRhYlNlY3Rpb25BY3RpdmUobmF2VGFiKSB7XG4gICAgICAgIGNvbnN0IGhyZWYgPSBuYXZUYWIucXVlcnlTZWxlY3RvcignYScpLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBjb25zdCBtYXRjaGluZ1RhYlNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcblxuICAgICAgICBtYXRjaGluZ1RhYlNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yIGVhY2ggdGFiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJMaXN0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhYiA9IHRhYkxpc3QuY2hpbGRyZW5baV07XG4gICAgICAgIGNvbnN0IHRhYkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgICB0YWJBbmNob3IuaHJlZiA9IFRBQl9JRFtpXTtcbiAgICAgICAgdGFiQW5jaG9yLnRleHRDb250ZW50ID0gVEFCX05BTUVTW2ldO1xuICAgICAgICB0YWJBbmNob3IuY2xhc3NMaXN0LmFkZCgnbmVvblRleHQnKTtcblxuICAgICAgICB0YWIuYXBwZW5kQ2hpbGQodGFiQW5jaG9yKTtcblxuICAgICAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lciB0byB0YWJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIG90aGVyIGFjdGl2ZSB0YWJzIChpbmNsdWRpbmcgY29udGVudCBkaXZzKVxuICAgICAgICAgICAgcmVtb3ZlQWN0aXZlVGFiTmF2KCk7XG4gICAgICAgICAgICAvLyBtYWtlIHRoaXMgdGFiIGFjdGl2ZVxuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHRoZSBtYXRjaGluZyBzZWN0aW9uIGFjdGl2ZVxuICAgICAgICAgICAgbWFrZVRhYlNlY3Rpb25BY3RpdmUodGFiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0YWJOYXZHcm91cC5hcHBlbmQodGFiTGlzdCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYk5hdkdyb3VwKTtcbiAgICBcbiAgICBwYXJlbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRhYkNvbnRlbnQocGFyZW50KSB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IE1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YWJEaXZBcnIgPVtob21lRGl2LCBNZW51RGl2LCBjb250YWN0RGl2XVxuXG4gICAgLy8gQWRkIGNsYXNzZXMgYW5kIElEcyB0byBlYWNoIHRhYiBjb250YWluZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkRpdkFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaXYgPSB0YWJEaXZBcnJbaV07XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3RhYkNvbnRlbnQnKTtcbiAgICAgICAgZGl2LmlkID0gVEFCX0lEW2ldO1xuXG4gICAgICAgIC8vIE1ha2UgJ2hvbWUnIHRhYiBhY3RpdmUgYnkgZGVmYXVsdCBhbmQgaW5qZWN0IGNvbnRlbnQgZnJvbSBtb2R1bGVcbiAgICAgICAgaWYoaSA9PSAwKSB7IFxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgVEFCX0xPQURFUlswXShkaXYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVEFCX0xPQURFUltpXShkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZChob21lRGl2LCBNZW51RGl2LCBjb250YWN0RGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhYkNvbnRlbnQocGFyZW50KSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnREaXYuaWQgPSAnY29udGVudCc7XG4gICAgcG9wdWxhdGVUYWJDb250ZW50KGNvbnRlbnREaXYpO1xuICAgIHBhcmVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIocGFyZW50KSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgXG4gICAgY29uc3QgYmdDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgYmdDcmVkaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IG90aGVyQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IG90aGVyQ3JlZGl0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGNvbnN0IGRpc2NsYWltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGlzY2xhaW1lci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGZvciBUaGUgT2RpbiBQcm9qZWN0JztcblxuICAgIGJnQ3JlZGl0TGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vbGlnaHRlZC12ZW5kaW5nLW1hY2hpbmVzLW9uLXN0cmVldC0yMzM4MTEzLyc7XG4gICAgYmdDcmVkaXRMaW5rLnRleHRDb250ZW50ID0gJ0FsZWtzYW5kYXIgUGFzYXJpYyc7XG4gICAgYmdDcmVkaXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XG4gICAgYmdDcmVkaXQudGV4dENvbnRlbnQgPSAnQmFja2dyb3VuZCBwaG90byBieSAnO1xuICAgIGJnQ3JlZGl0LmFwcGVuZENoaWxkKGJnQ3JlZGl0TGluayk7XG5cbiAgICBvdGhlckNyZWRpdC50ZXh0Q29udGVudCA9ICdGdWxsIGltYWdlIGF0dHJpYnV0aW9uICc7XG4gICAgb3RoZXJDcmVkaXRMaW5rLnRleHRDb250ZW50ID0gJ2hlcmUnO1xuICAgIG90aGVyQ3JlZGl0TGluay5ocmVmID0gY3JlZGl0cztcbiAgICBvdGhlckNyZWRpdExpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICBvdGhlckNyZWRpdC5hcHBlbmRDaGlsZChvdGhlckNyZWRpdExpbmspO1xuXG4gICAgZm9vdGVyLmFwcGVuZChiZ0NyZWRpdCwgb3RoZXJDcmVkaXQsIGRpc2NsYWltZXIpO1xuXG4gICAgcGFyZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuY3JlYXRlSGVhZGVyKGRvY3VtZW50KTtcbmxvYWRUYWJDb250ZW50KGRvY3VtZW50KTtcbmNyZWF0ZUZvb3Rlcihkb2N1bWVudCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9