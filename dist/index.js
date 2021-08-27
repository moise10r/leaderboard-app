/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Typography */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #0cbaba;\n  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n\ninput,\nbutton {\n  outline: none;\n  border: none;\n}\n\nbutton {\n  cursor: pointer;\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  color: #fff;\n  font-size: 1rem;\n  align-self: flex-end;\n  border-radius: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n\nbutton::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border-radius: 0.5rem;\n  background-color: #6a93cb;\n  background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\nbutton:hover::before {\n  transform: scaleX(1);\n}\n\nul,\nli {\n  list-style: none;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-start {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-end {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.main-section {\n  width: 100%;\n}\n\n.main-section h1 {\n  margin: 4rem 0 0 10rem;\n  font-size: 2.8rem;\n  font-weight: 800;\n  color: #fff;\n}\n\n.main-container-section {\n  width: 100%;\n  height: 100%;\n}\n\n.main-wrapper {\n  width: 80%;\n  margin: 6rem auto;\n  align-items: flex-start;\n}\n\n.main-left-wrappe {\n  width: 50%;\n  flex-direction: column;\n}\n\n.refresh-container {\n  width: 100%;\n}\n\n.refresh-container p {\n  margin-right: 2rem;\n  font-size: 1.8rem;\n  color: #fff;\n}\n\n.refresh-container button {\n  padding: 0.5rem 1rem;\n}\n\n.scores-list {\n  width: 100%;\n  flex-direction: column;\n  margin-top: 2rem;\n  border: 3px solid #ccc;\n  border-radius: 0.5rem;\n}\n\n.scores-list li {\n  width: 100%;\n  padding: 0.5rem 0 0.5rem 1rem;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  background-color: #8989bb;\n  background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.scores-list li span {\n  font-size: 1.3rem;\n  color: #fff;\n}\n\n.scores-list li span:last-child {\n  margin-left: 1rem;\n  font-weight: bold;\n}\n\n.scores-list li:nth-child(2n-1) {\n  background-color: #abe9cd;\n  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.avatar {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n\n.avatar img {\n  width: 100%;\n}\n\n.main-right-wrapper {\n  width: 40%;\n  margin-left: 5rem;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.main-right-wrapper h2 {\n  margin-bottom: 2rem;\n  font-style: italic;\n  color: #fff;\n}\n\n.main-right-wrapper #add-score {\n  flex-direction: column;\n  width: 100%;\n}\n\n.main-right-wrapper #add-score input {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  font-size: 1rem;\n}\n\n.main-right-wrapper #add-score button {\n  padding: 0.6rem 1.5rem;\n}\n\n@media screen and (max-width: 900px) {\n  .main-wrapper {\n    flex-direction: column;\n  }\n  \n  .main-section h1 {\n    margin: 0;\n    text-align: center;\n    margin-top: 1rem;\n    font-size: 2rem;\n  }\n\n  .main-left-wrappe {\n    width: 100%;\n  }\n\n  .main-right-wrapper {\n    width: 80%;\n    margin: 2rem auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA,eAAe;;AAEf;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,kEAAkE;AACpE;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,kEAAkE;EAClE,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,WAAW;EACX,qBAAqB;EACrB,yBAAyB;EACzB,kEAAkE;EAClE,2BAA2B;EAC3B,sBAAsB;EACtB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,kEAAkE;EAClE,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,kEAAkE;EAClE,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,UAAU;IACV,iBAAiB;EACnB;AACF","sourcesContent":["/* Typography */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #0cbaba;\n  background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n}\n\ninput,\nbutton {\n  outline: none;\n  border: none;\n}\n\nbutton {\n  cursor: pointer;\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  color: #fff;\n  font-size: 1rem;\n  align-self: flex-end;\n  border-radius: 0.5rem;\n  position: relative;\n  z-index: 1;\n}\n\nbutton::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  border-radius: 0.5rem;\n  background-color: #6a93cb;\n  background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);\n  transition: transform 700ms;\n  transform-origin: left;\n  transform: scaleX(0);\n  z-index: -1;\n}\n\nbutton:hover::before {\n  transform: scaleX(1);\n}\n\nul,\nli {\n  list-style: none;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-start {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-end {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.main-section {\n  width: 100%;\n}\n\n.main-section h1 {\n  margin: 4rem 0 0 10rem;\n  font-size: 2.8rem;\n  font-weight: 800;\n  color: #fff;\n}\n\n.main-container-section {\n  width: 100%;\n  height: 100%;\n}\n\n.main-wrapper {\n  width: 80%;\n  margin: 6rem auto;\n  align-items: flex-start;\n}\n\n.main-left-wrappe {\n  width: 50%;\n  flex-direction: column;\n}\n\n.refresh-container {\n  width: 100%;\n}\n\n.refresh-container p {\n  margin-right: 2rem;\n  font-size: 1.8rem;\n  color: #fff;\n}\n\n.refresh-container button {\n  padding: 0.5rem 1rem;\n}\n\n.scores-list {\n  width: 100%;\n  flex-direction: column;\n  margin-top: 2rem;\n  border: 3px solid #ccc;\n  border-radius: 0.5rem;\n}\n\n.scores-list li {\n  width: 100%;\n  padding: 0.5rem 0 0.5rem 1rem;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  align-items: center;\n  background-color: #8989bb;\n  background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.scores-list li span {\n  font-size: 1.3rem;\n  color: #fff;\n}\n\n.scores-list li span:last-child {\n  margin-left: 1rem;\n  font-weight: bold;\n}\n\n.scores-list li:nth-child(2n-1) {\n  background-color: #abe9cd;\n  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.avatar {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n}\n\n.avatar img {\n  width: 100%;\n}\n\n.main-right-wrapper {\n  width: 40%;\n  margin-left: 5rem;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.main-right-wrapper h2 {\n  margin-bottom: 2rem;\n  font-style: italic;\n  color: #fff;\n}\n\n.main-right-wrapper #add-score {\n  flex-direction: column;\n  width: 100%;\n}\n\n.main-right-wrapper #add-score input {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  font-size: 1rem;\n}\n\n.main-right-wrapper #add-score button {\n  padding: 0.6rem 1.5rem;\n}\n\n@media screen and (max-width: 900px) {\n  .main-wrapper {\n    flex-direction: column;\n  }\n  \n  .main-section h1 {\n    margin: 0;\n    text-align: center;\n    margin-top: 1rem;\n    font-size: 2rem;\n  }\n\n  .main-left-wrappe {\n    width: 100%;\n  }\n\n  .main-right-wrapper {\n    width: 80%;\n    margin: 2rem auto;\n  }\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const get = async (endPoint) => {
  const result = await fetch(`${url}${endPoint}`);
  return result.json();
};

const post = async (endPoint, body) => {
  const result = await fetch(`${url}${endPoint}`, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result.json();
};


/***/ }),

/***/ "./src/avatar.jpg":
/*!************************!*\
  !*** ./src/avatar.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f0ff2e7ad480993d701.jpg";

/***/ }),

/***/ "./src/contollers.js":
/*!***************************!*\
  !*** ./src/contollers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGame": () => (/* binding */ createGame),
/* harmony export */   "getGames": () => (/* binding */ getGames),
/* harmony export */   "submitScore": () => (/* binding */ submitScore)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* eslint-disable import/prefer-default-export */


const createGame = async (name) => {
  const { result } = await _api__WEBPACK_IMPORTED_MODULE_0__.post('games/', JSON.stringify({ name }));
  return result;
};

const getGames = async (id) => {
  const { result } = await _api__WEBPACK_IMPORTED_MODULE_0__.get(`games/${id}/scores/`);
  return result;
};

const submitScore = async (data, id) => {
  const { result } = await _api__WEBPACK_IMPORTED_MODULE_0__.post(`games/${id}/scores/`, JSON.stringify(data));
  return result;
};


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _avatar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.jpg */ "./src/avatar.jpg");
/* harmony import */ var _contollers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contollers */ "./src/contollers.js");




const section = document.querySelector('.main-container-section');

section.innerHTML = `
<div class="main-wrapper flex-center">
<div class="main-left-wrappe flex-center">
  <div class="refresh-container flex-between">
    <p>Recent Scores</p>
    <button type="button" class="refresh">Refresh</button>
  </div>
  <ul class="scores-list flex-center">
  </ul>
</div>
<div class="main-right-wrapper flex-center">
  <h2>Add your score</h2>
  <form id="add-score"  class="flex-center" action="/">
    <input type="text" placeholder="Your name" required>
    <input type="number" placeholder="Your score" required>
    <button type="submit">submit</button>
  </form>
</div>
</div>
`;

const render = (scores) => {
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const li = document.createElement('li');
    li.classList.add('score');
    li.innerHTML = `
    <span class="flex-center">
      <span><img class="avatar" src="${_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__}" alt="avatar"></span>
      <span> ${user}:</span>
    </span>
    <span>${score}</span>`;
    scoresList.appendChild(li);
  });
};

const form = document.getElementById('add-score');
const inputs = form.querySelectorAll('input');
const refreshBtn = document.querySelector('.refresh');
const gameName = 'sokoba';
window.addEventListener('load', async () => {
  const result = await (0,_contollers__WEBPACK_IMPORTED_MODULE_2__.createGame)(gameName);
  const id = result.split(' ')[3];
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = inputs[0].value;
    const score = inputs[1].value;
    const data = {
      user,
      score,
    };
    await (0,_contollers__WEBPACK_IMPORTED_MODULE_2__.submitScore)(data, id);
    form.reset();
  });
  refreshBtn.addEventListener('click', async () => {
    const res = await (0,_contollers__WEBPACK_IMPORTED_MODULE_2__.getGames)(id);
    render(res);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvLi9zcmMvY29udG9sbGVycy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQtYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xlYWRlcmJvYXJkLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaUVBQWlFLGVBQWUsY0FBYywyQkFBMkIsR0FBRyxVQUFVLGNBQWMsZUFBZSw4QkFBOEIsdUVBQXVFLEdBQUcsT0FBTywwQkFBMEIsb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQixpQkFBaUIsR0FBRyxZQUFZLG9CQUFvQiw4QkFBOEIsdUVBQXVFLGdCQUFnQixvQkFBb0IseUJBQXlCLDBCQUEwQix1QkFBdUIsZUFBZSxHQUFHLG9CQUFvQix1QkFBdUIsV0FBVyxZQUFZLGFBQWEsY0FBYyxrQkFBa0IsMEJBQTBCLDhCQUE4Qix1RUFBdUUsZ0NBQWdDLDJCQUEyQix5QkFBeUIsZ0JBQWdCLEdBQUcsMEJBQTBCLHlCQUF5QixHQUFHLGFBQWEscUJBQXFCLEdBQUcsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsOEJBQThCLHdCQUF3QixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxzQkFBc0IsMkJBQTJCLHNCQUFzQixxQkFBcUIsZ0JBQWdCLEdBQUcsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyxtQkFBbUIsZUFBZSxzQkFBc0IsNEJBQTRCLEdBQUcsdUJBQXVCLGVBQWUsMkJBQTJCLEdBQUcsd0JBQXdCLGdCQUFnQixHQUFHLDBCQUEwQix1QkFBdUIsc0JBQXNCLGdCQUFnQixHQUFHLCtCQUErQix5QkFBeUIsR0FBRyxrQkFBa0IsZ0JBQWdCLDJCQUEyQixxQkFBcUIsMkJBQTJCLDBCQUEwQixHQUFHLHFCQUFxQixnQkFBZ0Isa0NBQWtDLGtDQUFrQyxrQkFBa0Isd0JBQXdCLDhCQUE4Qix1RUFBdUUsOEJBQThCLCtCQUErQixHQUFHLDBCQUEwQixzQkFBc0IsZ0JBQWdCLEdBQUcscUNBQXFDLHNCQUFzQixzQkFBc0IsR0FBRyxxQ0FBcUMsOEJBQThCLHVFQUF1RSxtQ0FBbUMsb0NBQW9DLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyx5QkFBeUIsZUFBZSxzQkFBc0IsMkJBQTJCLDBCQUEwQixHQUFHLDRCQUE0Qix3QkFBd0IsdUJBQXVCLGdCQUFnQixHQUFHLG9DQUFvQywyQkFBMkIsZ0JBQWdCLEdBQUcsMENBQTBDLGdCQUFnQiwyQkFBMkIsa0JBQWtCLHdCQUF3QixvQkFBb0IsR0FBRywyQ0FBMkMsMkJBQTJCLEdBQUcsMENBQTBDLG1CQUFtQiw2QkFBNkIsS0FBSywwQkFBMEIsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLEtBQUsseUJBQXlCLGtCQUFrQixLQUFLLDJCQUEyQixpQkFBaUIsd0JBQXdCLEtBQUssR0FBRyxTQUFTLDRGQUE0RixLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVks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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdDQUFNLENBQUM7QUFDOUMsZUFBZSxLQUFLO0FBQ3BCO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBVztBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBLHNCQUFzQixxREFBUTtBQUM5QjtBQUNBLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUeXBvZ3JhcGh5ICovXFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjYmFiYTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMwY2JhYmEgMCUsICMzODAwMzYgNzQlKTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5idXR0b246OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YTkzY2I7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNmE5M2NiIDAlLCAjYTRiZmVmIDc0JSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNzAwbXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1zdGFydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZXgtYmV0d2VlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZXgtZW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiBoMSB7XFxuICBtYXJnaW46IDRyZW0gMCAwIDEwcmVtO1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lci1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDZyZW0gYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWFpbi1sZWZ0LXdyYXBwZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVmcmVzaC1jb250YWluZXIgcCB7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ucmVmcmVzaC1jb250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uc2NvcmVzLWxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5zY29yZXMtbGlzdCBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwIDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTg5YmI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjODk4OWJiIDAlLCAjYTVhNGNiIDc0JSk7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi5zY29yZXMtbGlzdCBsaSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zY29yZXMtbGlzdCBsaSBzcGFuOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNjb3Jlcy1saXN0IGxpOm50aC1jaGlsZCgybi0xKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJlOWNkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2FiZTljZCAwJSwgIzNlYWRjZiA3NCUpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmF2YXRhciB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXJpZ2h0LXdyYXBwZXIge1xcbiAgd2lkdGg6IDQwJTtcXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1haW4tcmlnaHQtd3JhcHBlciBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tYWluLXJpZ2h0LXdyYXBwZXIgI2FkZC1zY29yZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXJpZ2h0LXdyYXBwZXIgI2FkZC1zY29yZSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1haW4tcmlnaHQtd3JhcHBlciAjYWRkLXNjb3JlIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1haW4td3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICBcXG4gIC5tYWluLXNlY3Rpb24gaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLm1haW4tbGVmdC13cmFwcGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5tYWluLXJpZ2h0LXdyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlOztBQUVmO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtFQUFrRTtFQUNsRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrRUFBa0U7RUFDbEUsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVHlwb2dyYXBoeSAqL1xcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwY2JhYmE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMGNiYWJhIDAlLCAjMzgwMDM2IDc0JSk7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhNzI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuYnV0dG9uOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE5M2NiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzZhOTNjYiAwJSwgI2E0YmZlZiA3NCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDcwMG1zO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZXgtc3RhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWVuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXNlY3Rpb24gaDEge1xcbiAgbWFyZ2luOiA0cmVtIDAgMCAxMHJlbTtcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXItc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA2cmVtIGF1dG87XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm1haW4tbGVmdC13cmFwcGUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yZWZyZXNoLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIHAge1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLnNjb3Jlcy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2NvcmVzLWxpc3QgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4OWJiO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzg5ODliYiAwJSwgI2E1YTRjYiA3NCUpO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG5cXG4uc2NvcmVzLWxpc3QgbGkgc3BhbiB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc2NvcmVzLWxpc3QgbGkgc3BhbjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zY29yZXMtbGlzdCBsaTpudGgtY2hpbGQoMm4tMSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZTljZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNhYmU5Y2QgMCUsICMzZWFkY2YgNzQlKTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5hdmF0YXIge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1yaWdodC13cmFwcGVyIHtcXG4gIHdpZHRoOiA0MCU7XFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5tYWluLXJpZ2h0LXdyYXBwZXIgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubWFpbi1yaWdodC13cmFwcGVyICNhZGQtc2NvcmUge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1yaWdodC13cmFwcGVyICNhZGQtc2NvcmUgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5tYWluLXJpZ2h0LXdyYXBwZXIgI2FkZC1zY29yZSBidXR0b24ge1xcbiAgcGFkZGluZzogMC42cmVtIDEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5tYWluLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgXFxuICAubWFpbi1zZWN0aW9uIGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5tYWluLWxlZnQtd3JhcHBlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubWFpbi1yaWdodC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJztcbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyAoZW5kUG9pbnQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7ZW5kUG9pbnR9YCk7XG4gIHJldHVybiByZXN1bHQuanNvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3QgPSBhc3luYyAoZW5kUG9pbnQsIGJvZHkpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7dXJsfSR7ZW5kUG9pbnR9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0ICogYXMgQXBpIGZyb20gJy4vYXBpJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdhbWUgPSBhc3luYyAobmFtZSkgPT4ge1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQXBpLnBvc3QoJ2dhbWVzLycsIEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IEFwaS5nZXQoYGdhbWVzLyR7aWR9L3Njb3Jlcy9gKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJtaXRTY29yZSA9IGFzeW5jIChkYXRhLCBpZCkgPT4ge1xuICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQXBpLnBvc3QoYGdhbWVzLyR7aWR9L3Njb3Jlcy9gLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBhdmF0YXIgZnJvbSAnLi9hdmF0YXIuanBnJztcbmltcG9ydCB7IGdldEdhbWVzLCBzdWJtaXRTY29yZSwgY3JlYXRlR2FtZSB9IGZyb20gJy4vY29udG9sbGVycyc7XG5cbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXItc2VjdGlvbicpO1xuXG5zZWN0aW9uLmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJtYWluLXdyYXBwZXIgZmxleC1jZW50ZXJcIj5cbjxkaXYgY2xhc3M9XCJtYWluLWxlZnQtd3JhcHBlIGZsZXgtY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJyZWZyZXNoLWNvbnRhaW5lciBmbGV4LWJldHdlZW5cIj5cbiAgICA8cD5SZWNlbnQgU2NvcmVzPC9wPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVmcmVzaFwiPlJlZnJlc2g8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDx1bCBjbGFzcz1cInNjb3Jlcy1saXN0IGZsZXgtY2VudGVyXCI+XG4gIDwvdWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYWluLXJpZ2h0LXdyYXBwZXIgZmxleC1jZW50ZXJcIj5cbiAgPGgyPkFkZCB5b3VyIHNjb3JlPC9oMj5cbiAgPGZvcm0gaWQ9XCJhZGQtc2NvcmVcIiAgY2xhc3M9XCJmbGV4LWNlbnRlclwiIGFjdGlvbj1cIi9cIj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHNjb3JlXCIgcmVxdWlyZWQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XG4gIDwvZm9ybT5cbjwvZGl2PlxuPC9kaXY+XG5gO1xuXG5jb25zdCByZW5kZXIgPSAoc2NvcmVzKSA9PiB7XG4gIGNvbnN0IHNjb3Jlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzLWxpc3QnKTtcbiAgc2NvcmVzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgc2NvcmVzLmZvckVhY2goKHsgdXNlciwgc2NvcmUgfSkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xuICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImZsZXgtY2VudGVyXCI+XG4gICAgICA8c3Bhbj48aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHthdmF0YXJ9XCIgYWx0PVwiYXZhdGFyXCI+PC9zcGFuPlxuICAgICAgPHNwYW4+ICR7dXNlcn06PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8c3Bhbj4ke3Njb3JlfTwvc3Bhbj5gO1xuICAgIHNjb3Jlc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXNjb3JlJyk7XG5jb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5jb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gnKTtcbmNvbnN0IGdhbWVOYW1lID0gJ3Nva29iYSc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlR2FtZShnYW1lTmFtZSk7XG4gIGNvbnN0IGlkID0gcmVzdWx0LnNwbGl0KCcgJylbM107XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlciA9IGlucHV0c1swXS52YWx1ZTtcbiAgICBjb25zdCBzY29yZSA9IGlucHV0c1sxXS52YWx1ZTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdXNlcixcbiAgICAgIHNjb3JlLFxuICAgIH07XG4gICAgYXdhaXQgc3VibWl0U2NvcmUoZGF0YSwgaWQpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG4gIHJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0R2FtZXMoaWQpO1xuICAgIHJlbmRlcihyZXMpO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==