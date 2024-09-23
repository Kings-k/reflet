(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_mdb_src_js_pro_sidenav_js"],{

/***/ "./assets/mdb/src/js/bootstrap/src/collapse.js":
/*!*****************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/collapse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./util/index.js */ "./assets/mdb/src/js/bootstrap/src/util/index.js");
/* harmony import */ var _dom_data_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/data.js */ "./assets/mdb/src/js/bootstrap/src/dom/data.js");
/* harmony import */ var _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dom/event-handler.js */ "./assets/mdb/src/js/bootstrap/src/dom/event-handler.js");
/* harmony import */ var _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dom/manipulator.js */ "./assets/mdb/src/js/bootstrap/src/dom/manipulator.js");
/* harmony import */ var _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dom/selector-engine.js */ "./assets/mdb/src/js/bootstrap/src/dom/selector-engine.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'collapse';
var VERSION = '5.0.0-alpha2';
var DATA_KEY = 'bs.collapse';
var EVENT_KEY = ".".concat(DATA_KEY);
var DATA_API_KEY = '.data-api';
var Default = {
  toggle: true,
  parent: ''
};
var DefaultType = {
  toggle: 'boolean',
  parent: '(string|element)'
};
var EVENT_SHOW = "show".concat(EVENT_KEY);
var EVENT_SHOWN = "shown".concat(EVENT_KEY);
var EVENT_HIDE = "hide".concat(EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.show, .collapsing';
var SELECTOR_DATA_TOGGLE = '[data-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse = /*#__PURE__*/function () {
  function Collapse(element, config) {
    _classCallCheck(this, Collapse);

    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.find("".concat(SELECTOR_DATA_TOGGLE, "[href=\"#").concat(element.id, "\"],") + "".concat(SELECTOR_DATA_TOGGLE, "[data-target=\"#").concat(element.id, "\"]"));
    var toggleList = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.find(SELECTOR_DATA_TOGGLE);

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getSelectorFromElement)(elem);
      var filterElement = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.find(selector).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }

    _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.setData(element, DATA_KEY, this);
  } // Getters


  _createClass(Collapse, [{
    key: "toggle",
    value: // Public
    function toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.find(SELECTOR_ACTIVES, this._parent).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      var container = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.findOne(this._selector);

      if (actives) {
        var tempActiveData = actives.filter(function (elem) {
          return container !== elem;
        });
        activesData = tempActiveData[0] ? _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.getData(tempActiveData[0], DATA_KEY) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.trigger(this._element, EVENT_SHOW);

      if (startEvent.defaultPrevented) {
        return;
      }

      if (actives) {
        actives.forEach(function (elemActive) {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.setData(elemActive, DATA_KEY, null);
          }
        });
      }

      var dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(function (element) {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.trigger(_this._element, EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll".concat(capitalizedDimension);
      var transitionDuration = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getTransitionDurationFromElement)(this._element);
      _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.one(this._element, _util_index_js__WEBPACK_IMPORTED_MODULE_17__.TRANSITION_END, complete);
      (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.emulateTransitionEnd)(this._element, transitionDuration);
      this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      var startEvent = _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.trigger(this._element, EVENT_HIDE);

      if (startEvent.defaultPrevented) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
      (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.reflow)(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var elem = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getElementFromSelector)(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        _this2._element.classList.remove(CLASS_NAME_COLLAPSING);

        _this2._element.classList.add(CLASS_NAME_COLLAPSE);

        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.trigger(_this2._element, EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getTransitionDurationFromElement)(this._element);
      _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.one(this._element, _util_index_js__WEBPACK_IMPORTED_MODULE_17__.TRANSITION_END, complete);
      (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.emulateTransitionEnd)(this._element, transitionDuration);
    }
  }, {
    key: "setTransitioning",
    value: function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread(_objectSpread({}, Default), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.typeCheckConfig)(NAME, config, DefaultType);
      return config;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_getParent",
    value: function _getParent() {
      var _this3 = this;

      var parent = this._config.parent;

      if ((0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.isElement)(parent)) {
        // it's a jQuery object
        if (typeof parent.jquery !== 'undefined' || typeof parent[0] !== 'undefined') {
          parent = parent[0];
        }
      } else {
        parent = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.findOne(parent);
      }

      var selector = "".concat(SELECTOR_DATA_TOGGLE, "[data-parent=\"").concat(parent, "\"]");
      _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.find(selector, parent).forEach(function (element) {
        var selected = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getElementFromSelector)(element);

        _this3._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }

      var isOpen = element.classList.contains(CLASS_NAME_SHOW);
      triggerArray.forEach(function (elem) {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static

  }], [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "collapseInterface",
    value: function collapseInterface(element, config) {
      var data = _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.getData(element, DATA_KEY);

      var _config = _objectSpread(_objectSpread(_objectSpread({}, Default), _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_20__.default.getDataAttributes(element)), _typeof(config) === 'object' && config ? config : {});

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }

        data[config]();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(element) {
      return _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.getData(element, DATA_KEY);
    }
  }]);

  return Collapse;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_19__.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A') {
    event.preventDefault();
  }

  var triggerData = _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_20__.default.getDataAttributes(this);
  var selector = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getSelectorFromElement)(this);
  var selectorElements = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_21__.default.find(selector);
  selectorElements.forEach(function (element) {
    var data = _dom_data_js__WEBPACK_IMPORTED_MODULE_18__.default.getData(element, DATA_KEY);
    var config;

    if (data) {
      // update parent attribute
      if (data._parent === null && typeof triggerData.parent === 'string') {
        data._config.parent = triggerData.parent;
        data._parent = data._getParent();
      }

      config = 'toggle';
    } else {
      config = triggerData;
    }

    Collapse.collapseInterface(element, config);
  });
});
var $ = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_17__.getjQuery)();
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .collapse to jQuery only if jQuery is present
 */

/* istanbul ignore if */

if ($) {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Collapse.jQueryInterface;
  $.fn[NAME].Constructor = Collapse;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse.jQueryInterface;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);

/***/ }),

/***/ "./assets/mdb/src/js/bootstrap/src/dom/data.js":
/*!*****************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/dom/data.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element.bsKey === 'undefined') {
        element.bsKey = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element.bsKey.id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element.bsKey === 'undefined') {
        return null;
      }

      var keyProperties = element.bsKey;

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    "delete": function _delete(element, key) {
      if (typeof element.bsKey === 'undefined') {
        return;
      }

      var keyProperties = element.bsKey;

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element.bsKey;
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData["delete"](instance, key);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./assets/mdb/src/js/bootstrap/src/dom/event-handler.js":
/*!**************************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/dom/event-handler.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../util/index.js */ "./assets/mdb/src/js/bootstrap/src/util/index.js");
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./polyfill.js */ "./assets/mdb/src/js/bootstrap/src/dom/polyfill.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var $ = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_19__.getjQuery)();
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll'];
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
  var custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  var isNative = nativeEvents.indexOf(typeEvent) > -1;

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.indexOf(namespace) > -1) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.charAt(0) === '.';

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.indexOf(handlerKey) > -1) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var typeEvent = event.replace(stripNameRegex, '');
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.indexOf(typeEvent) > -1;
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();

      if (!_polyfill_js__WEBPACK_IMPORTED_MODULE_20__.defaultPreventedPreservedOnDispatch) {
        Object.defineProperty(evt, 'defaultPrevented', {
          get: function get() {
            return true;
          }
        });
      }
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);

/***/ }),

/***/ "./assets/mdb/src/js/bootstrap/src/dom/manipulator.js":
/*!************************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/dom/manipulator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = _objectSpread({}, element.dataset);

    Object.keys(attributes).forEach(function (key) {
      attributes[key] = normalizeData(attributes[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-".concat(normalizeDataKey(key))));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  },
  toggleClass: function toggleClass(element, className) {
    if (!element) {
      return;
    }

    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Manipulator);

/***/ }),

/***/ "./assets/mdb/src/js/bootstrap/src/dom/polyfill.js":
/*!*********************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/dom/polyfill.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findOne": () => (/* binding */ findOne),
/* harmony export */   "defaultPreventedPreservedOnDispatch": () => (/* binding */ defaultPreventedPreservedOnDispatch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/index.js */ "./assets/mdb/src/js/bootstrap/src/util/index.js");



/* istanbul ignore file */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): dom/polyfill.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var find = Element.prototype.querySelectorAll;
var findOne = Element.prototype.querySelector; // MSEdge resets defaultPrevented flag upon dispatchEvent call if at least one listener is attached

var defaultPreventedPreservedOnDispatch = function () {
  var e = new CustomEvent('Bootstrap', {
    cancelable: true
  });
  var element = document.createElement('div');
  element.addEventListener('Bootstrap', function () {
    return null;
  });
  e.preventDefault();
  element.dispatchEvent(e);
  return e.defaultPrevented;
}();

var scopeSelectorRegex = /:scope\b/;

var supportScopeQuery = function () {
  var element = document.createElement('div');

  try {
    element.querySelectorAll(':scope *');
  } catch (_) {
    return false;
  }

  return true;
}();

if (!supportScopeQuery) {
  find = function find(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelectorAll(selector);
    }

    var hasId = Boolean(this.id);

    if (!hasId) {
      this.id = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_2__.getUID)('scope');
    }

    var nodeList = null;

    try {
      selector = selector.replace(scopeSelectorRegex, "#".concat(this.id));
      nodeList = this.querySelectorAll(selector);
    } finally {
      if (!hasId) {
        this.removeAttribute('id');
      }
    }

    return nodeList;
  };

  findOne = function findOne(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelector(selector);
    }

    var matches = find.call(this, selector);

    if (typeof matches[0] !== 'undefined') {
      return matches[0];
    }

    return null;
  };
}



/***/ }),

/***/ "./assets/mdb/src/js/bootstrap/src/dom/selector-engine.js":
/*!****************************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/dom/selector-engine.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./polyfill.js */ "./assets/mdb/src/js/bootstrap/src/dom/polyfill.js");














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  matches: function matches(element, selector) {
    return element.matches(selector);
  },
  find: function find(selector) {
    var _ref;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref = []).concat.apply(_ref, _toConsumableArray(_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.find.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return _polyfill_js__WEBPACK_IMPORTED_MODULE_13__.findOne.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref2;

    var children = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children));

    return children.filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (this.matches(next, selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorEngine);

/***/ }),

/***/ "./assets/mdb/src/js/bootstrap/src/util/index.js":
/*!*******************************************************!*\
  !*** ./assets/mdb/src/js/bootstrap/src/util/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getjQuery": () => (/* binding */ getjQuery),
/* harmony export */   "TRANSITION_END": () => (/* binding */ TRANSITION_END),
/* harmony export */   "getUID": () => (/* binding */ getUID),
/* harmony export */   "getSelectorFromElement": () => (/* binding */ getSelectorFromElement),
/* harmony export */   "getElementFromSelector": () => (/* binding */ getElementFromSelector),
/* harmony export */   "getTransitionDurationFromElement": () => (/* binding */ getTransitionDurationFromElement),
/* harmony export */   "triggerTransitionEnd": () => (/* binding */ triggerTransitionEnd),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "emulateTransitionEnd": () => (/* binding */ emulateTransitionEnd),
/* harmony export */   "typeCheckConfig": () => (/* binding */ typeCheckConfig),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "findShadowRoot": () => (/* binding */ findShadowRoot),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "reflow": () => (/* binding */ reflow)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);














/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha2): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "".concat(obj);
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href');
    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = parseFloat(transitionDuration);
  var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  return (obj[0] || obj).nodeType;
};

var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
  var called = false;
  var durationPadding = 5;
  var emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    var elementStyle = getComputedStyle(element);
    var parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {
  return function () {};
};

var reflow = function reflow(element) {
  return element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = _window.jQuery;

  if (jQuery && !document.body.hasAttribute('data-no-jquery')) {
    return jQuery;
  }

  return null;
};



/***/ }),

/***/ "./assets/mdb/src/js/free/ripple.js":
/*!******************************************!*\
  !*** ./assets/mdb/src/js/free/ripple.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mdb_util_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../mdb/util/index.js */ "./assets/mdb/src/js/mdb/util/index.js");
/* harmony import */ var _mdb_dom_data_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../mdb/dom/data.js */ "./assets/mdb/src/js/mdb/dom/data.js");
/* harmony import */ var _bootstrap_src_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../bootstrap/src/dom/event-handler.js */ "./assets/mdb/src/js/bootstrap/src/dom/event-handler.js");
/* harmony import */ var _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../mdb/dom/manipulator.js */ "./assets/mdb/src/js/mdb/dom/manipulator.js");
/* harmony import */ var _mdb_dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../mdb/dom/selector-engine.js */ "./assets/mdb/src/js/mdb/dom/selector-engine.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'ripple';
var DATA_KEY = 'mdb.ripple';
var CLASSNAME_RIPPLE = 'ripple-surface';
var CLASSNAME_RIPPLE_WAVE = 'ripple-wave';
var SELECTOR_COMPONENT = ['.btn', '.ripple'];
var CLASSNAME_UNBOUND = 'ripple-surface-unbound';
var GRADIENT = 'rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%';
var DEFAULT_RIPPLE_COLOR = [0, 0, 0];
var BOOTSTRAP_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']; // Sets walue when run opacity transition
// Hide element after 50% (0.5) time of animation and finish on 100%

var TRANSITION_BREAK_OPACITY = 0.5;
var Default = {
  rippleCentered: false,
  rippleColor: '',
  rippleDuration: '500ms',
  rippleRadius: 0,
  rippleUnbound: false
};
var DefaultType = {
  rippleCentered: 'boolean',
  rippleColor: 'string',
  rippleDuration: 'string',
  rippleRadius: 'number',
  rippleUnbound: 'boolean'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Ripple = /*#__PURE__*/function () {
  function Ripple(element, options) {
    _classCallCheck(this, Ripple);

    this._element = element;
    this._options = this._getConfig(options);

    if (this._element) {
      _mdb_dom_data_js__WEBPACK_IMPORTED_MODULE_25__.default.setData(element, DATA_KEY, this);
      _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__.default.addClass(this._element, CLASSNAME_RIPPLE);
    }

    this._clickHandler = this._createRipple.bind(this);
    this.init();
  } // Getters


  _createClass(Ripple, [{
    key: "init",
    value: // Public
    function init() {
      this._addClickEvent(this._element);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      _mdb_dom_data_js__WEBPACK_IMPORTED_MODULE_25__.default.removeData(this._element, DATA_KEY);
      _bootstrap_src_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_26__.default.off(this._element, 'click', this._clickHandler);
      this._element = null;
      this._options = null;
    } // Private

  }, {
    key: "_autoInit",
    value: function _autoInit(event) {
      var _this = this;

      SELECTOR_COMPONENT.forEach(function (selector) {
        var target = _mdb_dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_28__.default.closest(event.target, selector);

        if (target) {
          _this._element = _mdb_dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_28__.default.closest(event.target, selector);
        }
      });
      _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__.default.addClass(this._element, CLASSNAME_RIPPLE);
      this._options = this._getConfig();

      this._createRipple(event);
    }
  }, {
    key: "_addClickEvent",
    value: function _addClickEvent(target) {
      _bootstrap_src_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_26__.default.on(target, 'click', this._clickHandler);
    }
  }, {
    key: "_createRipple",
    value: function _createRipple(event) {
      var layerX = event.layerX,
          layerY = event.layerY;
      var offsetX = layerX;
      var offsetY = layerY;
      var height = this._element.offsetHeight;
      var width = this._element.offsetWidth;

      var duration = this._durationToMsNumber(this._options.rippleDuration);

      var diameterOptions = {
        offsetX: this._options.rippleCentered ? height / 2 : offsetX,
        offsetY: this._options.rippleCentered ? width / 2 : offsetY,
        height: height,
        width: width
      };

      var diameter = this._getDiameter(diameterOptions);

      var radiusValue = this._options.rippleRadius || diameter / 2;
      var opacity = {
        delay: duration * TRANSITION_BREAK_OPACITY,
        duration: duration - duration * TRANSITION_BREAK_OPACITY
      };
      var styles = {
        left: this._options.rippleCentered ? "".concat(width / 2 - radiusValue, "px") : "".concat(offsetX - radiusValue, "px"),
        top: this._options.rippleCentered ? "".concat(height / 2 - radiusValue, "px") : "".concat(offsetY - radiusValue, "px"),
        height: "".concat(this._options.rippleRadius * 2 || diameter, "px"),
        width: "".concat(this._options.rippleRadius * 2 || diameter, "px"),
        transitionDelay: "0s, ".concat(opacity.delay, "ms"),
        transitionDuration: "".concat(duration, "ms, ").concat(opacity.duration, "ms")
      };
      var rippleHTML = (0,_mdb_util_index_js__WEBPACK_IMPORTED_MODULE_24__.element)('div');

      this._createHTMLRipple({
        wrapper: this._element,
        ripple: rippleHTML,
        styles: styles
      });

      this._removeHTMLRipple({
        ripple: rippleHTML,
        duration: duration
      });
    }
  }, {
    key: "_createHTMLRipple",
    value: function _createHTMLRipple(_ref) {
      var wrapper = _ref.wrapper,
          ripple = _ref.ripple,
          styles = _ref.styles;
      Object.keys(styles).forEach(function (property) {
        return ripple.style[property] = styles[property];
      });
      ripple.classList.add(CLASSNAME_RIPPLE_WAVE);

      if (this._options.rippleColor !== '') {
        this._removeOldColorClasses(wrapper);

        this._addColor(ripple, wrapper);
      }

      this._toggleUnbound(wrapper);

      this._appendRipple(ripple, wrapper);
    }
  }, {
    key: "_removeHTMLRipple",
    value: function _removeHTMLRipple(_ref2) {
      var ripple = _ref2.ripple,
          duration = _ref2.duration;
      setTimeout(function () {
        if (ripple) {
          ripple.remove();
        }
      }, duration);
    }
  }, {
    key: "_durationToMsNumber",
    value: function _durationToMsNumber(time) {
      return Number(time.replace('ms', '').replace('s', '000'));
    }
  }, {
    key: "_getConfig",
    value: function _getConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var dataAttributes = _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__.default.getDataAttributes(this._element);
      config = _objectSpread(_objectSpread(_objectSpread({}, Default), dataAttributes), config);
      (0,_mdb_util_index_js__WEBPACK_IMPORTED_MODULE_24__.typeCheckConfig)(NAME, config, DefaultType);
      return config;
    }
  }, {
    key: "_getDiameter",
    value: function _getDiameter(_ref3) {
      var offsetX = _ref3.offsetX,
          offsetY = _ref3.offsetY,
          height = _ref3.height,
          width = _ref3.width;
      var top = offsetY <= height / 2;
      var left = offsetX <= width / 2;

      var pythagorean = function pythagorean(sideA, sideB) {
        return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
      };

      var positionCenter = offsetY === height / 2 && offsetX === width / 2; // mouse position on the quadrants of the coordinate system

      var quadrant = {
        first: top === true && left === false,
        second: top === true && left === true,
        third: top === false && left === true,
        fourth: top === false && left === false
      };
      var getCorner = {
        topLeft: pythagorean(offsetX, offsetY),
        topRight: pythagorean(width - offsetX, offsetY),
        bottomLeft: pythagorean(offsetX, height - offsetY),
        bottomRight: pythagorean(width - offsetX, height - offsetY)
      };
      var diameter = 0;

      if (positionCenter || quadrant.fourth) {
        diameter = getCorner.topLeft;
      } else if (quadrant.third) {
        diameter = getCorner.topRight;
      } else if (quadrant.second) {
        diameter = getCorner.bottomRight;
      } else if (quadrant.first) {
        diameter = getCorner.bottomLeft;
      }

      return diameter * 2;
    }
  }, {
    key: "_appendRipple",
    value: function _appendRipple(target, parent) {
      var FIX_ADD_RIPPLE_EFFECT = 50; // delay for active animations

      parent.appendChild(target);
      setTimeout(function () {
        _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__.default.addClass(target, 'active');
      }, FIX_ADD_RIPPLE_EFFECT);
    }
  }, {
    key: "_toggleUnbound",
    value: function _toggleUnbound(target) {
      if (this._options.rippleUnbound === true) {
        _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__.default.addClass(target, CLASSNAME_UNBOUND);
      } else {
        target.classList.remove(CLASSNAME_UNBOUND);
      }
    }
  }, {
    key: "_addColor",
    value: function _addColor(target, parent) {
      var _this2 = this;

      var IS_BOOTSTRAP_COLOR = BOOTSTRAP_COLORS.find(function (color) {
        return color === _this2._options.rippleColor.toLowerCase();
      });

      if (IS_BOOTSTRAP_COLOR) {
        _mdb_dom_manipulator_js__WEBPACK_IMPORTED_MODULE_27__.default.addClass(parent, "".concat(CLASSNAME_RIPPLE, "-").concat(this._options.rippleColor.toLowerCase()));
      } else {
        var rgbValue = this._colorToRGB(this._options.rippleColor).join(',');

        var gradientImage = GRADIENT.split('{{color}}').join("".concat(rgbValue));
        target.style.backgroundImage = "radial-gradient(circle, ".concat(gradientImage, ")");
      }
    }
  }, {
    key: "_removeOldColorClasses",
    value: function _removeOldColorClasses(target) {
      var REGEXP_CLASS_COLOR = new RegExp("".concat(CLASSNAME_RIPPLE, "-[a-z]+"), 'gi');
      var PARENT_CLASSS_COLOR = target.classList.value.match(REGEXP_CLASS_COLOR) || [];
      PARENT_CLASSS_COLOR.forEach(function (className) {
        target.classList.remove(className);
      });
    }
  }, {
    key: "_colorToRGB",
    value: function _colorToRGB(color) {
      function hexToRgb(color) {
        var HEX_COLOR_LENGTH = 7;
        var IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;

        if (IS_SHORT_HEX) {
          color = "#".concat(color[1]).concat(color[1]).concat(color[2]).concat(color[2]).concat(color[3]).concat(color[3]);
        }

        return [parseInt(color.substr(1, 2), 16), parseInt(color.substr(3, 2), 16), parseInt(color.substr(5, 2), 16)];
      }

      function namedColorsToRgba(color) {
        var tempElem = document.body.appendChild(document.createElement('fictum'));
        var flag = 'rgb(1, 2, 3)';
        tempElem.style.color = flag;

        if (tempElem.style.color !== flag) {
          return DEFAULT_RIPPLE_COLOR;
        }

        tempElem.style.color = color;

        if (tempElem.style.color === flag || tempElem.style.color === '') {
          return DEFAULT_RIPPLE_COLOR;
        } // color parse failed


        color = getComputedStyle(tempElem).color;
        document.body.removeChild(tempElem);
        return color;
      }

      function rgbaToRgb(color) {
        color = color.match(/[.\d]+/g).map(function (a) {
          return +Number(a);
        });
        color.length = 3;
        return color;
      }

      if (color.toLowerCase() === 'transparent') {
        return DEFAULT_RIPPLE_COLOR;
      }

      if (color[0] === '#') {
        return hexToRgb(color);
      }

      if (color.indexOf('rgb') === -1) {
        color = namedColorsToRgba(color);
      }

      if (color.indexOf('rgb') === 0) {
        return rgbaToRgb(color);
      }

      return DEFAULT_RIPPLE_COLOR;
    } // Static

  }], [{
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "autoInitial",
    value: function autoInitial(instance) {
      return function (event) {
        instance._autoInit(event);
      };
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(options) {
      return this.each(function () {
        var data = _mdb_dom_data_js__WEBPACK_IMPORTED_MODULE_25__.default.getData(this, DATA_KEY);

        if (!data) {
          return new Ripple(this, options);
        }

        return null;
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(element) {
      return _mdb_dom_data_js__WEBPACK_IMPORTED_MODULE_25__.default.getData(element, DATA_KEY);
    }
  }]);

  return Ripple;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation - auto initialization
 * ------------------------------------------------------------------------
 */


SELECTOR_COMPONENT.forEach(function (slector) {
  _bootstrap_src_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_26__.default.one(document, 'click', slector, Ripple.autoInitial(new Ripple()));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ripple to jQuery only if jQuery is present
 */

var $ = (0,_mdb_util_index_js__WEBPACK_IMPORTED_MODULE_24__.getjQuery)();

if ($) {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Ripple.jQueryInterface;
  $.fn[NAME].Constructor = Ripple;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Ripple.jQueryInterface;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ripple);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/dom/data.js":
/*!*******************************************!*\
  !*** ./assets/mdb/src/js/mdb/dom/data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var mapData = function () {
  var storeData = {};
  var id = 1;
  return {
    set: function set(element, key, data) {
      if (typeof element[key] === 'undefined') {
        element[key] = {
          key: key,
          id: id
        };
        id++;
      }

      storeData[element[key].id] = data;
    },
    get: function get(element, key) {
      if (!element || typeof element[key] === 'undefined') {
        return null;
      }

      var keyProperties = element[key];

      if (keyProperties.key === key) {
        return storeData[keyProperties.id];
      }

      return null;
    },
    "delete": function _delete(element, key) {
      if (typeof element[key] === 'undefined') {
        return;
      }

      var keyProperties = element[key];

      if (keyProperties.key === key) {
        delete storeData[keyProperties.id];
        delete element[key];
      }
    }
  };
}();

var Data = {
  setData: function setData(instance, key, data) {
    mapData.set(instance, key, data);
  },
  getData: function getData(instance, key) {
    return mapData.get(instance, key);
  },
  removeData: function removeData(instance, key) {
    mapData["delete"](instance, key);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/dom/event-handler.js":
/*!****************************************************!*\
  !*** ./assets/mdb/src/js/mdb/dom/event-handler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandlerMulti": () => (/* binding */ EventHandlerMulti),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./polyfill.js */ "./assets/mdb/src/js/mdb/dom/polyfill.js");
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../util/index.js */ "./assets/mdb/src/js/mdb/util/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var $ = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_21__.getjQuery)();
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage

var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll'];
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function getUidEvent(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}

function getEvent(element) {
  var uid = getUidEvent(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);

    for (var target = event.target; target && target !== this; target = target.parentNode) {
      for (var i = domElements.length; i--; '') {
        if (domElements[i] === target) {
          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function findHandler(events, handler) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var uidEventList = Object.keys(events);

  for (var i = 0, len = uidEventList.length; i < len; i++) {
    var event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function normalizeParams(originalTypeEvent, handler, delegationFn) {
  var delegation = typeof handler === 'string';
  var originalHandler = delegation ? delegationFn : handler; // allow to get the native events from namespaced events ('click.bs.button' --> 'click')

  var typeEvent = originalTypeEvent.replace(stripNameRegex, '');
  var custom = customEvents[typeEvent];

  if (custom) {
    typeEvent = custom;
  }

  var isNative = nativeEvents.indexOf(typeEvent) > -1;

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  }

  var _normalizeParams = normalizeParams(originalTypeEvent, handler, delegationFn),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      delegation = _normalizeParams2[0],
      originalHandler = _normalizeParams2[1],
      typeEvent = _normalizeParams2[2];

  var events = getEvent(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(function (handlerKey) {
    if (handlerKey.indexOf(namespace) > -1) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

var EventHandler = {
  on: function on(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, false);
  },
  one: function one(element, event, handler, delegationFn) {
    addHandler(element, event, handler, delegationFn, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    var _normalizeParams3 = normalizeParams(originalTypeEvent, handler, delegationFn),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        delegation = _normalizeParams4[0],
        originalHandler = _normalizeParams4[1],
        typeEvent = _normalizeParams4[2];

    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getEvent(element);
    var isNamespace = originalTypeEvent.charAt(0) === '.';

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(function (elementEvent) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    var storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(function (keyHandlers) {
      var handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.indexOf(handlerKey) > -1) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    var typeEvent = event.replace(stripNameRegex, '');
    var inNamespace = event !== typeEvent;
    var isNative = nativeEvents.indexOf(typeEvent) > -1;
    var jQueryEvent;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    var evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles: bubbles,
        cancelable: true
      });
    } // merge custom informations in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(function (key) {
        Object.defineProperty(evt, key, {
          get: function get() {
            return args[key];
          }
        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();

      if (!_polyfill_js__WEBPACK_IMPORTED_MODULE_20__.defaultPreventedPreservedOnDispatch) {
        Object.defineProperty(evt, 'defaultPrevented', {
          get: function get() {
            return true;
          }
        });
      }
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }
};
var EventHandlerMulti = {
  on: function on(element, eventsName, handler, delegationFn) {
    var events = eventsName.split(' ');

    for (var i = 0; i < events.length; i++) {
      EventHandler.on(element, events[i], handler, delegationFn);
    }
  },
  off: function off(element, originalTypeEvent, handler, delegationFn) {
    var events = originalTypeEvent.split(' ');

    for (var i = 0; i < events.length; i++) {
      EventHandler.off(element, events[i], handler, delegationFn);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/dom/manipulator.js":
/*!**************************************************!*\
  !*** ./assets/mdb/src/js/mdb/dom/manipulator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}

var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }

    var attributes = _objectSpread({}, element.dataset);

    Object.keys(attributes).forEach(function (key) {
      attributes[key] = normalizeData(attributes[key]);
    });
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-".concat(normalizeDataKey(key))));
  },
  offset: function offset(element) {
    var rect = element.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },
  position: function position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  },
  style: function style(element, _style) {
    Object.assign(element.style, _style);
  },
  toggleClass: function toggleClass(element, className) {
    if (!element) {
      return;
    }

    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  },
  addClass: function addClass(element, className) {
    if (element.classList.contains(className)) return;
    element.classList.add(className);
  },
  addStyle: function addStyle(element, style) {
    Object.keys(style).forEach(function (property) {
      element.style[property] = style[property];
    });
  },
  removeClass: function removeClass(element, className) {
    if (!element.classList.contains(className)) return;
    element.classList.remove(className);
  },
  hasClass: function hasClass(element, className) {
    return element.classList.contains(className);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Manipulator);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/dom/polyfill.js":
/*!***********************************************!*\
  !*** ./assets/mdb/src/js/mdb/dom/polyfill.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "findOne": () => (/* binding */ findOne),
/* harmony export */   "defaultPreventedPreservedOnDispatch": () => (/* binding */ defaultPreventedPreservedOnDispatch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/index.js */ "./assets/mdb/src/js/mdb/util/index.js");



/* istanbul ignore file */

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/polyfill.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var findElements = Element.prototype.querySelectorAll;
var findElement = Element.prototype.querySelector; // MSEdge resets defaultPrevented flag upon dispatchEvent call if at least one listener is attached

var defaultPreventedPreservedOnDispatch = function () {
  var e = new CustomEvent('Bootstrap', {
    cancelable: true
  });
  var element = document.createElement('div');
  element.addEventListener('Bootstrap', function () {
    return null;
  });
  e.preventDefault();
  element.dispatchEvent(e);
  return e.defaultPrevented;
}();

var scopeSelectorRegex = /:scope\b/;

var supportScopeQuery = function () {
  var element = document.createElement('div');

  try {
    element.querySelectorAll(':scope *');
  } catch (_) {
    return false;
  }

  return true;
}();

if (!supportScopeQuery) {
  findElements = function findElements(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelectorAll(selector);
    }

    var hasId = Boolean(this.id);

    if (!hasId) {
      this.id = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_2__.getUID)('scope');
    }

    var nodeList = null;

    try {
      selector = selector.replace(scopeSelectorRegex, "#".concat(this.id));
      nodeList = this.querySelectorAll(selector);
    } finally {
      if (!hasId) {
        this.removeAttribute('id');
      }
    }

    return nodeList;
  };

  findElement = function findElement(selector) {
    if (!scopeSelectorRegex.test(selector)) {
      return this.querySelector(selector);
    }

    var matches = find.call(this, selector);

    if (typeof matches[0] !== 'undefined') {
      return matches[0];
    }

    return null;
  };
}

var find = findElements;
var findOne = findElement;


/***/ }),

/***/ "./assets/mdb/src/js/mdb/dom/selector-engine.js":
/*!******************************************************!*\
  !*** ./assets/mdb/src/js/mdb/dom/selector-engine.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _polyfill_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./polyfill.js */ "./assets/mdb/src/js/mdb/dom/polyfill.js");














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NODE_TEXT = 3;
var SelectorEngine = {
  closest: function closest(element, selector) {
    return element.closest(selector);
  },
  matches: function matches(element, selector) {
    return element.matches(selector);
  },
  find: function find(selector) {
    var _ref;

    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref = []).concat.apply(_ref, _toConsumableArray(_polyfill_js__WEBPACK_IMPORTED_MODULE_13__.find.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return _polyfill_js__WEBPACK_IMPORTED_MODULE_13__.findOne.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref2;

    var children = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children));

    return children.filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },
  next: function next(element, selector) {
    var next = element.nextElementSibling;

    while (next) {
      if (this.matches(next, selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorEngine);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/util/focusTrap.js":
/*!*************************************************!*\
  !*** ./assets/mdb/src/js/mdb/util/focusTrap.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/selector-engine.js */ "./assets/mdb/src/js/mdb/dom/selector-engine.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.js */ "./assets/mdb/src/js/mdb/util/index.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FocusTrap = /*#__PURE__*/function () {
  function FocusTrap(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FocusTrap);

    this._element = element;
    this._event = options.event || 'blur';

    this._condition = options.condition || function () {
      return true;
    };

    this._selector = options.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this._onlyVisible = options.onlyVisible || false;
    this._focusableElements = [];
    this._firstElement = null;
    this._lastElement = null;

    this.handler = function (e) {
      if (_this._condition(e) && e.target === _this._lastElement) {
        e.preventDefault();

        _this._firstElement.focus();
      }
    };
  }

  _createClass(FocusTrap, [{
    key: "trap",
    value: function trap() {
      this._setElements();

      this._init();

      this._setFocusTrap();
    }
  }, {
    key: "disable",
    value: function disable() {
      var _this2 = this;

      this._focusableElements.forEach(function (element) {
        element.removeEventListener(_this2._event, _this2.handler);
      });
    }
  }, {
    key: "update",
    value: function update() {
      this._setElements();

      this._setFocusTrap();
    }
  }, {
    key: "_init",
    value: function _init() {
      var _this3 = this;

      var handler = function handler(e) {
        if (!_this3._firstElement || e.key !== 'Tab') return;
        e.preventDefault();

        _this3._firstElement.focus();

        window.removeEventListener('keydown', handler);
      };

      window.addEventListener('keydown', handler);
    }
  }, {
    key: "_filterVisible",
    value: function _filterVisible(elements) {
      return elements.filter(function (el) {
        if (!(0,_index_js__WEBPACK_IMPORTED_MODULE_6__.isVisible)(el)) return false;
        var ancestors = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.parents(el, '*');

        for (var i = 0; i < ancestors.length; i++) {
          var style = window.getComputedStyle(ancestors[i]);
          if (style && (style.display === 'none' || style.visibility === 'hidden')) return false;
        }

        return true;
      });
    }
  }, {
    key: "_setElements",
    value: function _setElements() {
      this._focusableElements = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_5__.default.find(this._selector, this._element);

      if (this._onlyVisible) {
        this._focusableElements = this._filterVisible(this._focusableElements);
      }

      this._firstElement = this._focusableElements[0];
      this._lastElement = this._focusableElements[this._focusableElements.length - 1];
    }
  }, {
    key: "_setFocusTrap",
    value: function _setFocusTrap() {
      var _this4 = this;

      this._focusableElements.forEach(function (element, i) {
        if (i === _this4._focusableElements.length - 1) {
          element.addEventListener(_this4._event, _this4.handler);
        } else {
          element.removeEventListener(_this4._event, _this4.handler);
        }
      });
    }
  }]);

  return FocusTrap;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FocusTrap);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/util/index.js":
/*!*********************************************!*\
  !*** ./assets/mdb/src/js/mdb/util/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getjQuery": () => (/* binding */ getjQuery),
/* harmony export */   "TRANSITION_END": () => (/* binding */ TRANSITION_END),
/* harmony export */   "getUID": () => (/* binding */ getUID),
/* harmony export */   "getSelectorFromElement": () => (/* binding */ getSelectorFromElement),
/* harmony export */   "getElementFromSelector": () => (/* binding */ getElementFromSelector),
/* harmony export */   "getTransitionDurationFromElement": () => (/* binding */ getTransitionDurationFromElement),
/* harmony export */   "triggerTransitionEnd": () => (/* binding */ triggerTransitionEnd),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "emulateTransitionEnd": () => (/* binding */ emulateTransitionEnd),
/* harmony export */   "typeCheckConfig": () => (/* binding */ typeCheckConfig),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "findShadowRoot": () => (/* binding */ findShadowRoot),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "reflow": () => (/* binding */ reflow),
/* harmony export */   "array": () => (/* binding */ array),
/* harmony export */   "element": () => (/* binding */ element)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
















/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.0-alpha1): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

var toType = function toType(obj) {
  if (obj === null || obj === undefined) {
    return "".concat(obj);
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-target');

  if (!selector || selector === '#') {
    var hrefAttr = element.getAttribute('href');
    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;

  var floatTransitionDuration = parseFloat(transitionDuration);
  var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};

var isElement = function isElement(obj) {
  return (obj[0] || obj).nodeType;
};

var emulateTransitionEnd = function emulateTransitionEnd(element, duration) {
  var called = false;
  var durationPadding = 5;
  var emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener(TRANSITION_END, listener);
  }

  element.addEventListener(TRANSITION_END, listener);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};

var typeCheckConfig = function typeCheckConfig(componentName, config, configTypes) {
  Object.keys(configTypes).forEach(function (property) {
    var expectedTypes = configTypes[property];
    var value = config[property];
    var valueType = value && isElement(value) ? 'element' : toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
    }
  });
};

var isVisible = function isVisible(element) {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    var elementStyle = getComputedStyle(element);
    var parentNodeStyle = getComputedStyle(element.parentNode);
    return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
  }

  return false;
};

var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

var noop = function noop() {
  return function () {};
};

var reflow = function reflow(element) {
  return element.offsetHeight;
};

var getjQuery = function getjQuery() {
  var _window = window,
      jQuery = _window.jQuery;

  if (jQuery && !document.body.hasAttribute('data-no-jquery')) {
    return jQuery;
  }

  return null;
};

var array = function array(collection) {
  return Array.from(collection);
};

var element = function element(tag) {
  return document.createElement(tag);
};



/***/ }),

/***/ "./assets/mdb/src/js/mdb/util/keycodes.js":
/*!************************************************!*\
  !*** ./assets/mdb/src/js/mdb/util/keycodes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LEFT_ARROW": () => (/* binding */ LEFT_ARROW),
/* harmony export */   "UP_ARROW": () => (/* binding */ UP_ARROW),
/* harmony export */   "RIGHT_ARROW": () => (/* binding */ RIGHT_ARROW),
/* harmony export */   "DOWN_ARROW": () => (/* binding */ DOWN_ARROW),
/* harmony export */   "HOME": () => (/* binding */ HOME),
/* harmony export */   "END": () => (/* binding */ END),
/* harmony export */   "PAGE_UP": () => (/* binding */ PAGE_UP),
/* harmony export */   "PAGE_DOWN": () => (/* binding */ PAGE_DOWN),
/* harmony export */   "ENTER": () => (/* binding */ ENTER),
/* harmony export */   "SPACE": () => (/* binding */ SPACE),
/* harmony export */   "ESCAPE": () => (/* binding */ ESCAPE),
/* harmony export */   "TAB": () => (/* binding */ TAB),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "J": () => (/* binding */ J),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "O": () => (/* binding */ O),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "T": () => (/* binding */ T),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "V": () => (/* binding */ V),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z)
/* harmony export */ });
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var HOME = 36;
var END = 35;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var ENTER = 13;
var SPACE = 32;
var ESCAPE = 27;
var TAB = 9;
var A = 65;
var B = 66;
var C = 67;
var D = 68;
var E = 69;
var F = 70;
var G = 71;
var H = 72;
var I = 73;
var J = 74;
var K = 75;
var L = 76;
var M = 77;
var N = 78;
var O = 79;
var P = 80;
var Q = 81;
var R = 82;
var S = 83;
var T = 84;
var U = 85;
var V = 86;
var W = 87;
var X = 88;
var Y = 89;
var Z = 90;

/***/ }),

/***/ "./assets/mdb/src/js/mdb/util/touch/index.js":
/*!***************************************************!*\
  !*** ./assets/mdb/src/js/mdb/util/touch/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swipe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swipe.js */ "./assets/mdb/src/js/mdb/util/touch/swipe.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Touch = /*#__PURE__*/function () {
  function Touch(element) {
    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'swipe';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Touch);

    this._element = element;
    this._event = event; // events

    this.swipe = new _swipe_js__WEBPACK_IMPORTED_MODULE_2__.default(element, options); // handlers

    this._touchStartHandler = this._handleTouchStart.bind(this);
    this._touchMoveHandler = this._handleTouchMove.bind(this);
    this._touchEndHandler = this._handleTouchEnd.bind(this);
  }

  _createClass(Touch, [{
    key: "dispose",
    value: function dispose() {
      this._element.removeEventListener('touchstart', this._touchStartHandler);

      this._element.removeEventListener('touchmove', this._touchMoveHandler);

      window.removeEventListener('touchend', this._touchEndHandler);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      // istanbul ignore next
      this._element.addEventListener('touchstart', function (e) {
        return _this._handleTouchStart(e);
      }); // istanbul ignore next


      this._element.addEventListener('touchmove', function (e) {
        return _this._handleTouchMove(e);
      }); // istanbul ignore next


      window.addEventListener('touchend', function (e) {
        return _this._handleTouchEnd(e);
      });
    }
  }, {
    key: "_handleTouchStart",
    value: function _handleTouchStart(e) {
      this[this._event].handleTouchStart(e);
    }
  }, {
    key: "_handleTouchMove",
    value: function _handleTouchMove(e) {
      this[this._event].handleTouchMove(e);
    }
  }, {
    key: "_handleTouchEnd",
    value: function _handleTouchEnd(e) {
      this[this._event].handleTouchEnd(e);
    }
  }]);

  return Touch;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Touch);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/util/touch/swipe.js":
/*!***************************************************!*\
  !*** ./assets/mdb/src/js/mdb/util/touch/swipe.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _touchUtil_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./touchUtil.js */ "./assets/mdb/src/js/mdb/util/touch/touchUtil.js");
/* harmony import */ var _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../dom/event-handler.js */ "./assets/mdb/src/js/mdb/dom/event-handler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DEFAULT_OPTIONS = {
  threshold: 10,
  direction: 'all'
};

var Swipe = /*#__PURE__*/function (_TouchUtil) {
  _inherits(Swipe, _TouchUtil);

  var _super = _createSuper(Swipe);

  function Swipe(element, options) {
    var _this;

    _classCallCheck(this, Swipe);

    _this = _super.call(this);
    _this._element = element;
    _this._startPosition = null;
    _this._options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
    return _this;
  }

  _createClass(Swipe, [{
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      this._startPosition = this._getCoordinates(e);
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      if (!this._startPosition) return;

      var position = this._getCoordinates(e);

      var displacement = {
        x: position.x - this._startPosition.x,
        y: position.y - this._startPosition.y
      };

      var swipe = this._getDirection(displacement);

      if (this._options.direction === 'all') {
        if (swipe.y.value < this._options.threshold && swipe.x.value < this._options.threshold) {
          return;
        }

        var direction = swipe.y.value > swipe.x.value ? swipe.y.direction : swipe.x.direction;
        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_20__.default.trigger(this._element, "swipe".concat(direction));
        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_20__.default.trigger(this._element, 'swipe', {
          direction: direction
        });
        this._startPosition = null;
        return;
      }

      var axis = this._options.direction === 'left' || this._options === 'right' ? 'x' : 'y';

      if (swipe[axis].direction === this._options.direction && swipe[axis].value > this._options.threshold) {
        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_20__.default.trigger(this._element, "swipe".concat(swipe[axis].direction));
        this._startPosition = null;
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd() {
      this._startPosition = null;
    }
  }]);

  return Swipe;
}(_touchUtil_js__WEBPACK_IMPORTED_MODULE_19__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swipe);

/***/ }),

/***/ "./assets/mdb/src/js/mdb/util/touch/touchUtil.js":
/*!*******************************************************!*\
  !*** ./assets/mdb/src/js/mdb/util/touch/touchUtil.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TouchUtil = /*#__PURE__*/function () {
  function TouchUtil() {
    _classCallCheck(this, TouchUtil);
  }

  _createClass(TouchUtil, [{
    key: "_getCoordinates",
    value: function _getCoordinates(e) {
      var _e$touches = _slicedToArray(e.touches, 1),
          touch = _e$touches[0];

      return {
        x: touch.clientX,
        y: touch.clientY
      };
    }
  }, {
    key: "_getDirection",
    value: function _getDirection(displacement) {
      return {
        x: {
          direction: displacement.x < 0 ? 'left' : 'right',
          value: Math.abs(displacement.x)
        },
        y: {
          direction: displacement.y < 0 ? 'up' : 'down',
          value: Math.abs(displacement.y)
        }
      };
    }
  }]);

  return TouchUtil;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchUtil);

/***/ }),

/***/ "./assets/mdb/src/js/pro/sidenav.js":
/*!******************************************!*\
  !*** ./assets/mdb/src/js/pro/sidenav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _mdb_util_index__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../mdb/util/index */ "./assets/mdb/src/js/mdb/util/index.js");
/* harmony import */ var _mdb_util_focusTrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../mdb/util/focusTrap */ "./assets/mdb/src/js/mdb/util/focusTrap.js");
/* harmony import */ var _mdb_util_keycodes__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../mdb/util/keycodes */ "./assets/mdb/src/js/mdb/util/keycodes.js");
/* harmony import */ var _mdb_util_touch__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../mdb/util/touch */ "./assets/mdb/src/js/mdb/util/touch/index.js");
/* harmony import */ var _bootstrap_src_collapse__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../bootstrap/src/collapse */ "./assets/mdb/src/js/bootstrap/src/collapse.js");
/* harmony import */ var _mdb_dom_data__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../mdb/dom/data */ "./assets/mdb/src/js/mdb/dom/data.js");
/* harmony import */ var _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../bootstrap/src/dom/event-handler */ "./assets/mdb/src/js/bootstrap/src/dom/event-handler.js");
/* harmony import */ var _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../mdb/dom/manipulator */ "./assets/mdb/src/js/mdb/dom/manipulator.js");
/* harmony import */ var _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../mdb/dom/selector-engine */ "./assets/mdb/src/js/mdb/dom/selector-engine.js");
/* harmony import */ var _free_ripple__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../free/ripple */ "./assets/mdb/src/js/free/ripple.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }































function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'sidenav';
var DATA_KEY = 'mdb.sidenav';
var ARROW_CLASS = 'rotate-icon';
var BACKDROP_CLASS = 'sidenav-backdrop';
var SELECTOR_SIDENAV = '.sidenav';
var SELECTOR_TOGGLE = '[data-toggle="sidenav"]';
var SELECTOR_SHOW_SLIM = '[data-slim="true"]';
var SELECTOR_HIDE_SLIM = '[data-slim="false"]';
var SELECTOR_NAVIGATION = '.sidenav-menu';
var SELECTOR_COLLAPSE = '.sidenav-collapse';
var SELECTOR_LINK = '.sidenav-link';
var TRANSLATION_LEFT = -100;
var TRANSLATION_RIGHT = 100;
var instanceCount = 0;
var OPTIONS_TYPE = {
  accordion: '(boolean)',
  backdrop: '(boolean)',
  backdropClass: '(null|string)',
  closeOnEsc: '(boolean)',
  color: '(string)',
  content: '(null|string)',
  expandable: '(boolean)',
  expandOnHover: '(boolean)',
  focusTrap: '(boolean)',
  hidden: '(boolean)',
  mode: '(string)',
  scrollContainer: '(null|string)',
  slim: '(boolean)',
  slimCollapsed: '(boolean)',
  slimWidth: '(number)',
  position: '(string)',
  right: '(boolean)',
  transitionDuration: '(number)',
  width: '(number)'
};
var DEFAULT_OPTIONS = {
  accordion: false,
  backdrop: true,
  backdropClass: null,
  closeOnEsc: true,
  color: 'primary',
  content: null,
  expandable: true,
  expandOnHover: false,
  focusTrap: true,
  hidden: true,
  mode: 'over',
  scrollContainer: null,
  slim: false,
  slimCollapsed: false,
  slimWidth: 70,
  position: 'fixed',
  right: false,
  transitionDuration: 300,
  width: 240
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Sidenav = /*#__PURE__*/function () {
  function Sidenav(node) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sidenav);

    this._element = node;
    this._options = options;
    instanceCount++;
    this._ID = instanceCount;
    this._backdrop = null;
    this._content = null;
    this._initialContentStyle = null;
    this._slimCollapsed = false;
    this._activeNode = null;
    this._tempSlim = false;
    this._focusTrap = null;
    this._perfectScrollbar = null;
    this._touch = null;

    this.escHandler = function (e) {
      if (e.keyCode === _mdb_util_keycodes__WEBPACK_IMPORTED_MODULE_33__.ESCAPE && _this.toggler && (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.isVisible)(_this.toggler)) {
        _this._update(false);

        _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.off(window, 'keydown', _this.escHandler);
      }
    };

    this.hashHandler = function () {
      _this._setActiveElements();
    };

    if (node) {
      _mdb_dom_data__WEBPACK_IMPORTED_MODULE_36__.default.setData(node, DATA_KEY, this);

      this._setup();
    }
  } // Getters


  _createClass(Sidenav, [{
    key: "container",
    get: function get() {
      if (this.options.position === 'fixed') {
        return _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.findOne('body');
      }

      var findContainer = function findContainer(el) {
        if (!el.parentNode || el.parentNode === document) {
          return el;
        }

        if (el.parentNode.style.position === 'relative') {
          return el.parentNode;
        }

        return findContainer(el.parentNode);
      };

      return findContainer(this._element);
    }
  }, {
    key: "isVisible",
    get: function get() {
      var containerStart = 0;
      var containerEnd = window.innerWidth;

      if (this.options.position !== 'fixed') {
        var boundry = this.container.getBoundingClientRect();
        containerStart = boundry.x;
        containerEnd = boundry.x + boundry.width;
      }

      var _this$_element$getBou = this._element.getBoundingClientRect(),
          x = _this$_element$getBou.x;

      if (this.options.right) {
        return Math.abs(x - containerEnd) > 10;
      }

      return Math.abs(x - containerStart) < 10;
    }
  }, {
    key: "links",
    get: function get() {
      return _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_LINK, this._element);
    }
  }, {
    key: "navigation",
    get: function get() {
      return _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_NAVIGATION, this._element);
    }
  }, {
    key: "options",
    get: function get() {
      var config = _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_OPTIONS), _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.getDataAttributes(this._element)), this._options);

      (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.typeCheckConfig)(NAME, config, OPTIONS_TYPE);
      return config;
    }
  }, {
    key: "sidenavStyle",
    get: function get() {
      return {
        width: "".concat(this.width, "px"),
        height: this.options.position === 'fixed' ? '100vh' : '100%',
        position: this.options.position,
        transition: "all ".concat(this.transitionDuration, " linear")
      };
    }
  }, {
    key: "toggler",
    get: function get() {
      var _this2 = this;

      var toggleElement = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_TOGGLE).find(function (toggler) {
        var target = _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.getDataAttribute(toggler, 'target');
        return _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.findOne(target) === _this2._element;
      });
      return toggleElement;
    }
  }, {
    key: "transitionDuration",
    get: function get() {
      return "".concat(this.options.transitionDuration / 1000, "s");
    }
  }, {
    key: "translation",
    get: function get() {
      return this.options.right ? TRANSLATION_RIGHT : TRANSLATION_LEFT;
    }
  }, {
    key: "width",
    get: function get() {
      return this._slimCollapsed ? this.options.slimWidth : this.options.width;
    } // Public

  }, {
    key: "changeMode",
    value: function changeMode(mode) {
      this._setMode(mode);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (this._backdrop) {
        this._removeBackdrop();
      }

      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.off(window, 'keydown', this.escHandler);
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.off(window, 'hashchange', this.hashHandler);

      this._touch.dispose();

      _mdb_dom_data__WEBPACK_IMPORTED_MODULE_36__.default.removeData(this._element, DATA_KEY);
      this._element = null;
    }
  }, {
    key: "hide",
    value: function hide() {
      this._setVisibility(false);

      this._update(false);
    }
  }, {
    key: "show",
    value: function show() {
      this._setVisibility(true);

      this._update(true);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._setVisibility(!this.isVisible);

      this._update(!this.isVisible);
    }
  }, {
    key: "toggleSlim",
    value: function toggleSlim() {
      this._setSlim(!this._slimCollapsed);
    }
  }, {
    key: "update",
    value: function update(options) {
      this._options = options;

      this._setup();
    } // Private

  }, {
    key: "_appendArrow",
    value: function _appendArrow(node) {
      var arrow = (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.element)('i');
      ['fas', 'fa-angle-down', ARROW_CLASS].forEach(function (className) {
        _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.addClass(arrow, className);
      });

      if (_mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(".".concat(ARROW_CLASS), node).length === 0) {
        node.appendChild(arrow);
      }
    }
  }, {
    key: "_collapseItems",
    value: function _collapseItems() {
      this.navigation.forEach(function (menu) {
        var collapseElements = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_COLLAPSE, menu);
        collapseElements.forEach(function (el) {
          _bootstrap_src_collapse__WEBPACK_IMPORTED_MODULE_35__.default.getInstance(el).hide();
        });
      });
    }
  }, {
    key: "_setupBackdrop",
    value: function _setupBackdrop() {
      var _this3 = this,
          _this$_backdrop$class;

      var classes = [];

      if (this.options.backdropClass) {
        classes.push(this.options.backdropClass);
      }

      var style = {
        transition: "opacity ".concat(this.transitionDuration, " ease-out"),
        position: this.options.position,
        width: this.options.position === 'fixed' ? '100vw' : '100%',
        height: this.options.position === 'fixed' ? '100vh' : '100%'
      };

      if (!this._backdrop) {
        var backdrop = (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.element)('div');
        classes.push(BACKDROP_CLASS);
        style.opacity = 0;
        _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(backdrop, 'click', function () {
          _this3._setVisibility(false);

          _this3._update(false);
        });
        this._backdrop = backdrop;
      }

      (_this$_backdrop$class = this._backdrop.classList).add.apply(_this$_backdrop$class, classes);

      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(this._backdrop, style);
    }
  }, {
    key: "_getOffsetValue",
    value: function _getOffsetValue(show, _ref) {
      var index = _ref.index,
          property = _ref.property,
          offsets = _ref.offsets;

      var initialValue = this._getPxValue(this._initialContentStyle[index][offsets[property].property]);

      var offset = show ? offsets[property].value : 0;
      return initialValue + offset;
    }
  }, {
    key: "_getProperty",
    value: function _getProperty() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args.map(function (arg, i) {
        if (i === 0) {
          return arg;
        }

        return arg[0].toUpperCase().concat(arg.slice(1));
      }).join('');
    }
  }, {
    key: "_getPxValue",
    value: function _getPxValue(property) {
      if (!property) {
        return 0;
      }

      return parseFloat(property);
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe(e, inverseDirecion) {
      if (inverseDirecion && this._slimCollapsed && this.options.slim && this.options.expandable) {
        this.toggleSlim();
      } else if (!inverseDirecion) {
        if (this._slimCollapsed || !this.options.slim || !this.options.expandable) {
          if (this.toggler && (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.isVisible)(this.toggler)) {
            this.toggle();
          }
        } else {
          this.toggleSlim();
        }
      }
    }
  }, {
    key: "_isActive",
    value: function _isActive(link, reference) {
      if (reference) {
        return reference === link;
      }

      if (link.attributes.href) {
        return new URL(link, window.location.href).href === window.location.href;
      }

      return false;
    }
  }, {
    key: "_isAllCollapsed",
    value: function _isAllCollapsed() {
      return _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_COLLAPSE, this._element).filter(function (el) {
        return (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.isVisible)(el);
      }).length === 0;
    }
  }, {
    key: "_setup",
    value: function _setup() {
      // Touch events
      this._setupTouch(); // Focus trap


      if (this.options.focusTrap) {
        this._setupFocusTrap();
      } // Backdrop


      if (this.options.backdrop) {
        this._setupBackdrop();

        if (!this.options.hidden && this.options.mode === 'over') {
          this._appendBackdrop();
        }
      } // Collapse


      this._setupCollapse(); // Slim


      if (this.options.slim) {
        this._setupSlim();
      } // Initial position


      this._setupInitialStyling(); // Perfect Scrollbar


      this._setupScrolling(); // Content


      if (this.options.content) {
        this._setupContent();
      } // Active link


      this._setupActiveState(); // Ripple


      this._setupRippleEffect(); // Shown on init


      if (!this.options.hidden) {
        this._updateOffsets(true, true);
      }
    }
  }, {
    key: "_setupActiveState",
    value: function _setupActiveState() {
      var _this4 = this;

      this._setActiveElements();

      this.links.forEach(function (link) {
        _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(link, 'click', function () {
          return _this4._setActiveElements(link);
        });
        _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(link, 'keydown', function (e) {
          if (e.keyCode === _mdb_util_keycodes__WEBPACK_IMPORTED_MODULE_33__.ENTER) {
            _this4._setActiveElements(link);
          }
        });
      });
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(window, 'hashchange', this.hashHandler);
    }
  }, {
    key: "_setupCollapse",
    value: function _setupCollapse() {
      var _this5 = this;

      this.navigation.forEach(function (menu, menuIndex) {
        var categories = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_COLLAPSE, menu);
        categories.forEach(function (list, index) {
          return _this5._setupCollapseList({
            list: list,
            index: index,
            menu: menu,
            menuIndex: menuIndex
          });
        });
      });
    }
  }, {
    key: "_generateCollpaseID",
    value: function _generateCollpaseID(index, menuIndex) {
      return "sidenav-collapse-".concat(this._ID, "-").concat(menuIndex, "-").concat(index);
    }
  }, {
    key: "_setupCollapseList",
    value: function _setupCollapseList(_ref2) {
      var _this6 = this;

      var list = _ref2.list,
          index = _ref2.index,
          menu = _ref2.menu,
          menuIndex = _ref2.menuIndex;

      var ID = this._generateCollpaseID(index, menuIndex);

      list.classList.add('collapse');
      list.setAttribute('id', ID);

      var _SelectorEngine$prev = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.prev(list, SELECTOR_LINK),
          _SelectorEngine$prev2 = _slicedToArray(_SelectorEngine$prev, 1),
          toggler = _SelectorEngine$prev2[0];

      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.setDataAttribute(toggler, 'toggle', 'collapse');
      toggler.setAttribute('href', "#".concat(ID));
      toggler.setAttribute('role', 'button');
      var instance = _bootstrap_src_collapse__WEBPACK_IMPORTED_MODULE_35__.default.getInstance(list) || new _bootstrap_src_collapse__WEBPACK_IMPORTED_MODULE_35__.default(list, {
        toggle: false,
        parent: this.options.accordion ? menu : list
      }); // Arrow

      this._appendArrow(toggler); // Event listeners


      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(toggler, 'click', function (e) {
        return _this6._toggleCategory(e, instance, list);
      });
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(list, 'show.bs.collapse', function () {
        return _this6._rotateArrow(toggler, 180);
      });
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(list, 'hide.bs.collapse', function () {
        return _this6._rotateArrow(toggler, 0);
      });
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(list, 'shown.bs.collapse', function () {
        if (_this6.options.mode === 'over' && _this6._focusTrap) {
          _this6._focusTrap.update();
        }
      });
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(list, 'hidden.bs.collapse', function () {
        if (_this6._tempSlim && _this6._isAllCollapsed()) {
          _this6._setSlim(true);

          _this6._tempSlim = false;
        }

        if (_this6.options.mode === 'over' && _this6._focusTrap) {
          _this6._focusTrap.update();
        }
      });
    }
  }, {
    key: "_setupContent",
    value: function _setupContent() {
      this._content = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(this.options.content);
      this._initialContentStyle = this._content.map(function (el) {
        var _window$getComputedSt = window.getComputedStyle(el),
            paddingLeft = _window$getComputedSt.paddingLeft,
            paddingRight = _window$getComputedSt.paddingRight,
            marginLeft = _window$getComputedSt.marginLeft,
            marginRight = _window$getComputedSt.marginRight,
            transition = _window$getComputedSt.transition;

        return {
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          marginLeft: marginLeft,
          marginRight: marginRight,
          transition: transition
        };
      });
    }
  }, {
    key: "_setupFocusTrap",
    value: function _setupFocusTrap() {
      this._focusTrap = new _mdb_util_focusTrap__WEBPACK_IMPORTED_MODULE_32__.default(this._element, {
        event: 'keydown',
        condition: function condition(e) {
          return e.keyCode === _mdb_util_keycodes__WEBPACK_IMPORTED_MODULE_33__.TAB;
        },
        onlyVisible: true
      });
    }
  }, {
    key: "_setupInitialStyling",
    value: function _setupInitialStyling() {
      this._setColor();

      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(this._element, this.sidenavStyle);
    }
  }, {
    key: "_setupScrolling",
    value: function _setupScrolling() {
      var container = this._element;

      if (this.options.scrollContainer) {
        container = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.findOne(this.options.scrollContainer, this._element);
        var siblings = (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.array)(container.parentNode.children).filter(function (el) {
          return el !== container;
        });
        var siblingsHeight = siblings.reduce(function (a, b) {
          return a + b.clientHeight;
        }, 0);
        _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(container, {
          maxHeight: "calc(100% - ".concat(siblingsHeight, "px)"),
          position: 'relative'
        });
      }

      this._perfectScrollbar = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_30__.default(container, {
        suppressScrollX: true
      });
    }
  }, {
    key: "_setupSlim",
    value: function _setupSlim() {
      var _this7 = this;

      this._slimCollapsed = this.options.slimCollapsed;

      this._toggleSlimDisplay(this._slimCollapsed);

      if (this.options.expandOnHover) {
        this._element.addEventListener('mouseenter', function () {
          if (_this7._slimCollapsed) {
            _this7._setSlim(false);
          }
        });

        this._element.addEventListener('mouseleave', function () {
          if (!_this7._slimCollapsed) {
            _this7._setSlim(true);
          }
        });
      }
    }
  }, {
    key: "_setupRippleEffect",
    value: function _setupRippleEffect() {
      var _this8 = this;

      this.links.forEach(function (link) {
        var wave = _free_ripple__WEBPACK_IMPORTED_MODULE_40__.default.getInstance(link);

        if (wave && wave._options.color !== _this8.options.color) {
          wave.dispose();
        } else if (wave) {
          return;
        }

        wave = new _free_ripple__WEBPACK_IMPORTED_MODULE_40__.default(link, {
          rippleColor: _this8.options.color
        });
      });
    }
  }, {
    key: "_setupTouch",
    value: function _setupTouch() {
      var _this9 = this;

      this._touch = new _mdb_util_touch__WEBPACK_IMPORTED_MODULE_34__.default(this._element, 'swipe', {
        threshold: 20
      });

      this._touch.init();

      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(this._element, 'swipeleft', function (e) {
        return _this9._handleSwipe(e, _this9.options.right);
      });
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(this._element, 'swiperight', function (e) {
        return _this9._handleSwipe(e, !_this9.options.right);
      });
    }
  }, {
    key: "_setActive",
    value: function _setActive(link, reference) {
      // Link
      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.addClass(link, 'active');

      if (this._activeNode) {
        this._activeNode.classList.remove('active');
      }

      this._activeNode = link; // Collapse

      var _SelectorEngine$paren = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.parents(this._activeNode, SELECTOR_COLLAPSE),
          _SelectorEngine$paren2 = _slicedToArray(_SelectorEngine$paren, 1),
          collapse = _SelectorEngine$paren2[0];

      if (!collapse) {
        this._setActiveCategory();

        return;
      } // Category


      var _SelectorEngine$prev3 = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.prev(collapse, SELECTOR_LINK),
          _SelectorEngine$prev4 = _slicedToArray(_SelectorEngine$prev3, 1),
          category = _SelectorEngine$prev4[0];

      this._setActiveCategory(category); // Expand active collapse


      if (!reference && !this._slimCollapsed) {
        _bootstrap_src_collapse__WEBPACK_IMPORTED_MODULE_35__.default.getInstance(collapse).show();
      }
    }
  }, {
    key: "_setActiveCategory",
    value: function _setActiveCategory(el) {
      this.navigation.forEach(function (menu) {
        var categories = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_COLLAPSE, menu);
        categories.forEach(function (collapse) {
          var _SelectorEngine$prev5 = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.prev(collapse, SELECTOR_LINK),
              _SelectorEngine$prev6 = _slicedToArray(_SelectorEngine$prev5, 1),
              collapseToggler = _SelectorEngine$prev6[0];

          if (collapseToggler !== el) {
            collapseToggler.classList.remove('active');
          } else {
            _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.addClass(collapseToggler, 'active');
          }
        });
      });
    }
  }, {
    key: "_setActiveElements",
    value: function _setActiveElements(reference) {
      var _this10 = this;

      this.navigation.forEach(function (menu) {
        var links = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_LINK, menu);
        links.filter(function (link) {
          return _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.next(link, SELECTOR_COLLAPSE).length === 0;
        }).forEach(function (link) {
          if (_this10._isActive(link, reference) && link !== _this10._activeNode) {
            _this10._setActive(link, reference);
          }
        });
      });
    }
  }, {
    key: "_setColor",
    value: function _setColor() {
      var _this11 = this;

      var colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
      var optionColor = this.options.color;
      var color = colors.includes(optionColor) ? optionColor : 'primary';
      colors.forEach(function (color) {
        _this11._element.classList.remove("sidenav-".concat(color));
      });
      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.addClass(this._element, "sidenav-".concat(color));
    }
  }, {
    key: "_setContentOffsets",
    value: function _setContentOffsets(show, offsets, initial) {
      var _this12 = this;

      this._content.forEach(function (el, i) {
        var padding = _this12._getOffsetValue(show, {
          index: i,
          property: 'padding',
          offsets: offsets
        });

        var margin = _this12._getOffsetValue(show, {
          index: i,
          property: 'margin',
          offsets: offsets
        });

        var style = {};

        if (!initial) {
          style.transition = "all ".concat(_this12.transitionDuration, " linear");
        }

        style[offsets.padding.property] = "".concat(padding, "px");
        style[offsets.margin.property] = "".concat(margin, "px");
        _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(el, style);

        if (!show) {
          return;
        }

        if (initial) {
          _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(el, {
            transition: _this12._initialContentStyle[i].transition
          });
          return;
        }

        _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(el, 'transitionend', function () {
          _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(el, {
            transition: _this12._initialContentStyle[i].transition
          });
        });
      });
    }
  }, {
    key: "_setMode",
    value: function _setMode(mode) {
      if (this.options.mode === mode) {
        return;
      }

      this._options.mode = mode;

      this._update(this.isVisible);
    }
  }, {
    key: "_setSlim",
    value: function _setSlim(value) {
      var events = value ? ['collapse', 'collapsed'] : ['expand', 'expanded'];

      this._triggerEvents.apply(this, events);

      if (value) {
        this._collapseItems();
      }

      this._slimCollapsed = value;

      this._toggleSlimDisplay(value);

      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(this._element, {
        width: "".concat(this.width, "px")
      });

      this._updateOffsets(this.isVisible);
    }
  }, {
    key: "_setTabindex",
    value: function _setTabindex(value) {
      this.links.forEach(function (link) {
        link.tabIndex = value ? 1 : -1;
      });
    }
  }, {
    key: "_setVisibility",
    value: function _setVisibility(show) {
      var events = show ? ['show', 'shown'] : ['hide', 'hidden'];

      this._triggerEvents.apply(this, events);
    }
  }, {
    key: "_rotateArrow",
    value: function _rotateArrow(toggler, angle) {
      var _SelectorEngine$child = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.children(toggler, ".".concat(ARROW_CLASS)),
          _SelectorEngine$child2 = _slicedToArray(_SelectorEngine$child, 1),
          arrow = _SelectorEngine$child2[0];

      if (!arrow) {
        return;
      }

      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(arrow, {
        transform: "rotate(".concat(angle, "deg)")
      });
    }
  }, {
    key: "_toggleBackdrop",
    value: function () {
      var _toggleBackdrop2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
        var _this13 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(value && this.options.mode === 'over')) {
                  _context.next = 4;
                  break;
                }

                this._appendBackdrop();

                _context.next = 7;
                break;

              case 4:
                _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(this._backdrop, {
                  opacity: 0
                });
                _context.next = 7;
                return setTimeout(function () {
                  _this13._removeBackdrop();
                }, this.options.transitionDuration);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _toggleBackdrop(_x) {
        return _toggleBackdrop2.apply(this, arguments);
      }

      return _toggleBackdrop;
    }()
  }, {
    key: "_removeBackdrop",
    value: function _removeBackdrop() {
      if (this._backdrop.parentNode === this.container) {
        this.container.removeChild(this._backdrop);
      }
    }
  }, {
    key: "_appendBackdrop",
    value: function _appendBackdrop() {
      var _this14 = this;

      this.container.appendChild(this._backdrop);
      setTimeout(function () {
        return _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(_this14._backdrop, {
          opacity: 1
        });
      }, 0);
    }
  }, {
    key: "_toggleCategory",
    value: function _toggleCategory(e, instance) {
      e.preventDefault();
      instance.toggle();

      if (this._slimCollapsed && this.options.expandable) {
        this._tempSlim = true;

        this._setSlim(false);
      }
    }
  }, {
    key: "_toggleSlimDisplay",
    value: function _toggleSlimDisplay(slim) {
      var _this15 = this;

      var slimCollapsedElements = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_SHOW_SLIM, this._element);
      var fullWidthElements = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_HIDE_SLIM, this._element);

      var toggleElements = function toggleElements() {
        slimCollapsedElements.forEach(function (el) {
          _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(el, {
            display: _this15._slimCollapsed ? 'unset' : 'none'
          });
        });
        fullWidthElements.forEach(function (el) {
          _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(el, {
            display: _this15._slimCollapsed ? 'none' : 'unset'
          });
        });
      };

      if (slim) {
        setTimeout(function () {
          return toggleElements(true);
        }, this.options.transitionDuration);
      } else {
        toggleElements();
      }
    }
  }, {
    key: "_triggerEvents",
    value: function () {
      var _triggerEvents2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(startEvent, completeEvent) {
        var _this16 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.trigger(this._element, "".concat(startEvent, ".mdb.sidenav"));

                if (!completeEvent) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return setTimeout(function () {
                  _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.trigger(_this16._element, "".concat(completeEvent, ".mdb.sidenav"));
                }, this.options.transitionDuration + 5);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _triggerEvents(_x2, _x3) {
        return _triggerEvents2.apply(this, arguments);
      }

      return _triggerEvents;
    }()
  }, {
    key: "_update",
    value: function _update(show) {
      if (this.toggler) {
        this._updateTogglerAria(show);
      }

      this._updateDisplay(show);

      if (this.options.backdrop) {
        this._toggleBackdrop(show);
      }

      this._updateOffsets(show);

      if (show && this.options.closeOnEsc && this.options.mode !== 'side') {
        _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(window, 'keydown', this.escHandler);
      }

      if (this.options.focusTrap) {
        this._updateFocus(show);
      }
    }
  }, {
    key: "_updateDisplay",
    value: function _updateDisplay(value) {
      var translation = value ? 0 : this.translation;
      _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.style(this._element, {
        transform: "translateX(".concat(translation, "%)")
      });
    }
  }, {
    key: "_updateFocus",
    value: function _updateFocus(show) {
      this._setTabindex(show);

      if (this.options.mode === 'over' && this.options.focusTrap) {
        if (show) {
          this._focusTrap.trap();

          return;
        }

        this._focusTrap.disable();

        if (this.toggler) {
          this.toggler.focus();
        }
      }

      this._focusTrap.disable();
    }
  }, {
    key: "_updateOffsets",
    value: function _updateOffsets(show) {
      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _ref3 = this.options.right ? ['right', 'left'] : ['left', 'right'],
          _ref4 = _slicedToArray(_ref3, 2),
          paddingPosition = _ref4[0],
          marginPosition = _ref4[1];

      var padding = {
        property: this._getProperty('padding', paddingPosition),
        value: this.options.mode === 'over' ? 0 : this.width
      };
      var margin = {
        property: this._getProperty('margin', marginPosition),
        value: this.options.mode === 'push' ? -1 * this.width : 0
      };
      _bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.trigger(this._element, 'update.mdb.sidenav', {
        margin: margin,
        padding: padding
      });

      if (!this._content) {
        return;
      }

      this._setContentOffsets(show, {
        padding: padding,
        margin: margin
      }, initial);
    }
  }, {
    key: "_updateTogglerAria",
    value: function _updateTogglerAria(value) {
      this.toggler.setAttribute('aria-expanded', value);
    } // Static

  }], [{
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }, {
    key: "toggleSidenav",
    value: function toggleSidenav() {
      return function (e) {
        var toggler = _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.closest(e.target, SELECTOR_TOGGLE);
        var elementSelector = _mdb_dom_manipulator__WEBPACK_IMPORTED_MODULE_38__.default.getDataAttributes(toggler).target;
        _mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(elementSelector).forEach(function (element) {
          var instance = Sidenav.getInstance(element) || new Sidenav(element);
          instance.toggle();
        });
      };
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config, options) {
      return this.each(function () {
        var data = _mdb_dom_data__WEBPACK_IMPORTED_MODULE_36__.default.getData(this, DATA_KEY);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose/.test(config)) {
          return;
        }

        if (!data) {
          data = new Sidenav(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](options);
        }
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(element) {
      return _mdb_dom_data__WEBPACK_IMPORTED_MODULE_36__.default.getData(element, DATA_KEY);
    }
  }]);

  return Sidenav;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation - auto initialization
 * ------------------------------------------------------------------------
 */


_bootstrap_src_dom_event_handler__WEBPACK_IMPORTED_MODULE_37__.default.on(document, 'click', SELECTOR_TOGGLE, Sidenav.toggleSidenav());
_mdb_dom_selector_engine__WEBPACK_IMPORTED_MODULE_39__.default.find(SELECTOR_SIDENAV).forEach(function (sidenav) {
  var instance = Sidenav.getInstance(sidenav);

  if (!instance) {
    instance = new Sidenav(sidenav);
  }

  return instance;
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .sidenav to jQuery only if jQuery is present
 */

var $ = (0,_mdb_util_index__WEBPACK_IMPORTED_MODULE_31__.getjQuery)();

if ($) {
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  $.fn[NAME] = Sidenav.jQueryInterface;
  $.fn[NAME].Constructor = Sidenav;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Sidenav.jQueryInterface;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidenav);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9ib290c3RyYXAvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZGIvc3JjL2pzL2Jvb3RzdHJhcC9zcmMvZG9tL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21kYi9zcmMvanMvYm9vdHN0cmFwL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9ib290c3RyYXAvc3JjL2RvbS9tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9ib290c3RyYXAvc3JjL2RvbS9wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9ib290c3RyYXAvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21kYi9zcmMvanMvYm9vdHN0cmFwL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZGIvc3JjL2pzL2ZyZWUvcmlwcGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZGIvc3JjL2pzL21kYi9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21kYi9zcmMvanMvbWRiL2RvbS9tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvZG9tL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZGIvc3JjL2pzL21kYi9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZGIvc3JjL2pzL21kYi91dGlsL2ZvY3VzVHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvdXRpbC9rZXljb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvdXRpbC90b3VjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvdXRpbC90b3VjaC9zd2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWRiL3NyYy9qcy9tZGIvdXRpbC90b3VjaC90b3VjaFV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21kYi9zcmMvanMvcHJvL3NpZGVuYXYuanMiXSwibmFtZXMiOlsiTkFNRSIsIlZFUlNJT04iLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkRlZmF1bHQiLCJ0b2dnbGUiLCJwYXJlbnQiLCJEZWZhdWx0VHlwZSIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkVWRU5UX0hJREUiLCJFVkVOVF9ISURERU4iLCJFVkVOVF9DTElDS19EQVRBX0FQSSIsIkNMQVNTX05BTUVfU0hPVyIsIkNMQVNTX05BTUVfQ09MTEFQU0UiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIldJRFRIIiwiSEVJR0hUIiwiU0VMRUNUT1JfQUNUSVZFUyIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiQ29sbGFwc2UiLCJlbGVtZW50IiwiY29uZmlnIiwiX2lzVHJhbnNpdGlvbmluZyIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfdHJpZ2dlckFycmF5IiwiU2VsZWN0b3JFbmdpbmUiLCJpZCIsInRvZ2dsZUxpc3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZWxlbSIsInNlbGVjdG9yIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImZpbHRlckVsZW1lbnQiLCJmaWx0ZXIiLCJmb3VuZEVsZW0iLCJfc2VsZWN0b3IiLCJwdXNoIiwiX3BhcmVudCIsIl9nZXRQYXJlbnQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiRGF0YSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjb250YWluZXIiLCJ0ZW1wQWN0aXZlRGF0YSIsInN0YXJ0RXZlbnQiLCJFdmVudEhhbmRsZXIiLCJkZWZhdWx0UHJldmVudGVkIiwiZm9yRWFjaCIsImVsZW1BY3RpdmUiLCJjb2xsYXBzZUludGVyZmFjZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsInNldEF0dHJpYnV0ZSIsInNldFRyYW5zaXRpb25pbmciLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInNjcm9sbFNpemUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsIlRSQU5TSVRJT05fRU5EIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWZsb3ciLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJ0cmlnZ2VyIiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImlzVHJhbnNpdGlvbmluZyIsIkJvb2xlYW4iLCJ0eXBlQ2hlY2tDb25maWciLCJpc0VsZW1lbnQiLCJqcXVlcnkiLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsImRhdGEiLCJNYW5pcHVsYXRvciIsInRlc3QiLCJUeXBlRXJyb3IiLCJlYWNoIiwiZG9jdW1lbnQiLCJldmVudCIsInRhcmdldCIsInRhZ05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXJEYXRhIiwic2VsZWN0b3JFbGVtZW50cyIsIiQiLCJnZXRqUXVlcnkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIm1hcERhdGEiLCJzdG9yZURhdGEiLCJzZXQiLCJrZXkiLCJic0tleSIsImdldCIsImtleVByb3BlcnRpZXMiLCJzZXREYXRhIiwiaW5zdGFuY2UiLCJnZXREYXRhIiwicmVtb3ZlRGF0YSIsIm5hbWVzcGFjZVJlZ2V4Iiwic3RyaXBOYW1lUmVnZXgiLCJzdHJpcFVpZFJlZ2V4IiwiZXZlbnRSZWdpc3RyeSIsInVpZEV2ZW50IiwiY3VzdG9tRXZlbnRzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJuYXRpdmVFdmVudHMiLCJnZXRVaWRFdmVudCIsInVpZCIsImdldEV2ZW50IiwiYm9vdHN0cmFwSGFuZGxlciIsImhhbmRsZXIiLCJkZWxlZ2F0ZVRhcmdldCIsIm9uZU9mZiIsIm9mZiIsInR5cGUiLCJhcHBseSIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiZG9tRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsImZpbmRIYW5kbGVyIiwiZXZlbnRzIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidWlkRXZlbnRMaXN0IiwiT2JqZWN0Iiwia2V5cyIsIm9yaWdpbmFsSGFuZGxlciIsIm5vcm1hbGl6ZVBhcmFtcyIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiZGVsZWdhdGlvbkZuIiwiZGVsZWdhdGlvbiIsInR5cGVFdmVudCIsInJlcGxhY2UiLCJjdXN0b20iLCJpc05hdGl2ZSIsImluZGV4T2YiLCJhZGRIYW5kbGVyIiwiaGFuZGxlcnMiLCJwcmV2aW91c0ZuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwibmFtZXNwYWNlIiwic3RvcmVFbGVtZW50RXZlbnQiLCJoYW5kbGVyS2V5Iiwib24iLCJvbmUiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwiY2hhckF0IiwiZWxlbWVudEV2ZW50Iiwia2V5SGFuZGxlcnMiLCJhcmdzIiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJldnQiLCJFdmVudCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiY2FuY2VsYWJsZSIsImRlZmluZVByb3BlcnR5IiwiZGVmYXVsdFByZXZlbnRlZFByZXNlcnZlZE9uRGlzcGF0Y2giLCJkaXNwYXRjaEV2ZW50Iiwibm9ybWFsaXplRGF0YSIsInZhbCIsIk51bWJlciIsInRvU3RyaW5nIiwibm9ybWFsaXplRGF0YUtleSIsImNociIsInRvTG93ZXJDYXNlIiwic2V0RGF0YUF0dHJpYnV0ZSIsInZhbHVlIiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImRhdGFzZXQiLCJnZXREYXRhQXR0cmlidXRlIiwib2Zmc2V0IiwicmVjdCIsInRvcCIsImJvZHkiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInBvc2l0aW9uIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInRvZ2dsZUNsYXNzIiwiY2xhc3NOYW1lIiwiZmluZCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJmaW5kT25lIiwicXVlcnlTZWxlY3RvciIsImUiLCJjcmVhdGVFbGVtZW50Iiwic2NvcGVTZWxlY3RvclJlZ2V4Iiwic3VwcG9ydFNjb3BlUXVlcnkiLCJfIiwiaGFzSWQiLCJnZXRVSUQiLCJub2RlTGlzdCIsIm1hdGNoZXMiLCJjYWxsIiwiTk9ERV9URVhUIiwiZG9jdW1lbnRFbGVtZW50IiwiY29uY2F0IiwiZmluZEZuIiwiY2hpbGRyZW4iLCJjaGlsZCIsInBhcmVudHMiLCJhbmNlc3RvciIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInByZXYiLCJwcmV2aW91cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwidG9UeXBlIiwib2JqIiwidW5kZWZpbmVkIiwibWF0Y2giLCJwcmVmaXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yIiwiaHJlZkF0dHIiLCJ0cmltIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImR1cmF0aW9uIiwiY2FsbGVkIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImxpc3RlbmVyIiwic2V0VGltZW91dCIsImNvbXBvbmVudE5hbWUiLCJjb25maWdUeXBlcyIsInByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsIkVycm9yIiwiaXNWaXNpYmxlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJmaW5kU2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJub29wIiwib2Zmc2V0SGVpZ2h0IiwialF1ZXJ5IiwiaGFzQXR0cmlidXRlIiwiQ0xBU1NOQU1FX1JJUFBMRSIsIkNMQVNTTkFNRV9SSVBQTEVfV0FWRSIsIlNFTEVDVE9SX0NPTVBPTkVOVCIsIkNMQVNTTkFNRV9VTkJPVU5EIiwiR1JBRElFTlQiLCJERUZBVUxUX1JJUFBMRV9DT0xPUiIsIkJPT1RTVFJBUF9DT0xPUlMiLCJUUkFOU0lUSU9OX0JSRUFLX09QQUNJVFkiLCJyaXBwbGVDZW50ZXJlZCIsInJpcHBsZUNvbG9yIiwicmlwcGxlRHVyYXRpb24iLCJyaXBwbGVSYWRpdXMiLCJyaXBwbGVVbmJvdW5kIiwiUmlwcGxlIiwib3B0aW9ucyIsIl9vcHRpb25zIiwiX2NsaWNrSGFuZGxlciIsIl9jcmVhdGVSaXBwbGUiLCJiaW5kIiwiaW5pdCIsIl9hZGRDbGlja0V2ZW50IiwibGF5ZXJYIiwibGF5ZXJZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJoZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiX2R1cmF0aW9uVG9Nc051bWJlciIsImRpYW1ldGVyT3B0aW9ucyIsImRpYW1ldGVyIiwiX2dldERpYW1ldGVyIiwicmFkaXVzVmFsdWUiLCJvcGFjaXR5IiwiZGVsYXkiLCJzdHlsZXMiLCJyaXBwbGVIVE1MIiwiX2NyZWF0ZUhUTUxSaXBwbGUiLCJ3cmFwcGVyIiwicmlwcGxlIiwiX3JlbW92ZUhUTUxSaXBwbGUiLCJfcmVtb3ZlT2xkQ29sb3JDbGFzc2VzIiwiX2FkZENvbG9yIiwiX3RvZ2dsZVVuYm91bmQiLCJfYXBwZW5kUmlwcGxlIiwidGltZSIsImRhdGFBdHRyaWJ1dGVzIiwicHl0aGFnb3JlYW4iLCJzaWRlQSIsInNpZGVCIiwic3FydCIsInBvc2l0aW9uQ2VudGVyIiwicXVhZHJhbnQiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZ2V0Q29ybmVyIiwidG9wTGVmdCIsInRvcFJpZ2h0IiwiYm90dG9tTGVmdCIsImJvdHRvbVJpZ2h0IiwiRklYX0FERF9SSVBQTEVfRUZGRUNUIiwiYXBwZW5kQ2hpbGQiLCJJU19CT09UU1RSQVBfQ09MT1IiLCJjb2xvciIsInJnYlZhbHVlIiwiX2NvbG9yVG9SR0IiLCJqb2luIiwiZ3JhZGllbnRJbWFnZSIsImJhY2tncm91bmRJbWFnZSIsIlJFR0VYUF9DTEFTU19DT0xPUiIsIlBBUkVOVF9DTEFTU1NfQ09MT1IiLCJoZXhUb1JnYiIsIkhFWF9DT0xPUl9MRU5HVEgiLCJJU19TSE9SVF9IRVgiLCJwYXJzZUludCIsInN1YnN0ciIsIm5hbWVkQ29sb3JzVG9SZ2JhIiwidGVtcEVsZW0iLCJmbGFnIiwicmVtb3ZlQ2hpbGQiLCJyZ2JhVG9SZ2IiLCJtYXAiLCJhIiwiX2F1dG9Jbml0Iiwic2xlY3RvciIsImF1dG9Jbml0aWFsIiwiRXZlbnRIYW5kbGVyTXVsdGkiLCJldmVudHNOYW1lIiwiYXNzaWduIiwiYWRkQ2xhc3MiLCJhZGRTdHlsZSIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJmaW5kRWxlbWVudHMiLCJmaW5kRWxlbWVudCIsImNsb3Nlc3QiLCJGb2N1c1RyYXAiLCJfZXZlbnQiLCJfY29uZGl0aW9uIiwiY29uZGl0aW9uIiwiX29ubHlWaXNpYmxlIiwib25seVZpc2libGUiLCJfZm9jdXNhYmxlRWxlbWVudHMiLCJfZmlyc3RFbGVtZW50IiwiX2xhc3RFbGVtZW50IiwiZm9jdXMiLCJfc2V0RWxlbWVudHMiLCJfaW5pdCIsIl9zZXRGb2N1c1RyYXAiLCJlbGVtZW50cyIsImVsIiwiYW5jZXN0b3JzIiwiX2ZpbHRlclZpc2libGUiLCJhcnJheSIsImNvbGxlY3Rpb24iLCJBcnJheSIsImZyb20iLCJ0YWciLCJMRUZUX0FSUk9XIiwiVVBfQVJST1ciLCJSSUdIVF9BUlJPVyIsIkRPV05fQVJST1ciLCJIT01FIiwiRU5EIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVOVEVSIiwiU1BBQ0UiLCJFU0NBUEUiLCJUQUIiLCJBIiwiQiIsIkMiLCJEIiwiRSIsIkYiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJNIiwiTiIsIk8iLCJQIiwiUSIsIlIiLCJTIiwiVCIsIlUiLCJWIiwiVyIsIlgiLCJZIiwiWiIsIlRvdWNoIiwic3dpcGUiLCJTd2lwZSIsIl90b3VjaFN0YXJ0SGFuZGxlciIsIl9oYW5kbGVUb3VjaFN0YXJ0IiwiX3RvdWNoTW92ZUhhbmRsZXIiLCJfaGFuZGxlVG91Y2hNb3ZlIiwiX3RvdWNoRW5kSGFuZGxlciIsIl9oYW5kbGVUb3VjaEVuZCIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsIkRFRkFVTFRfT1BUSU9OUyIsInRocmVzaG9sZCIsImRpcmVjdGlvbiIsIl9zdGFydFBvc2l0aW9uIiwiX2dldENvb3JkaW5hdGVzIiwiZGlzcGxhY2VtZW50IiwieCIsInkiLCJfZ2V0RGlyZWN0aW9uIiwiYXhpcyIsIlRvdWNoVXRpbCIsInRvdWNoZXMiLCJ0b3VjaCIsImNsaWVudFgiLCJjbGllbnRZIiwiYWJzIiwiQVJST1dfQ0xBU1MiLCJCQUNLRFJPUF9DTEFTUyIsIlNFTEVDVE9SX1NJREVOQVYiLCJTRUxFQ1RPUl9UT0dHTEUiLCJTRUxFQ1RPUl9TSE9XX1NMSU0iLCJTRUxFQ1RPUl9ISURFX1NMSU0iLCJTRUxFQ1RPUl9OQVZJR0FUSU9OIiwiU0VMRUNUT1JfQ09MTEFQU0UiLCJTRUxFQ1RPUl9MSU5LIiwiVFJBTlNMQVRJT05fTEVGVCIsIlRSQU5TTEFUSU9OX1JJR0hUIiwiaW5zdGFuY2VDb3VudCIsIk9QVElPTlNfVFlQRSIsImFjY29yZGlvbiIsImJhY2tkcm9wIiwiYmFja2Ryb3BDbGFzcyIsImNsb3NlT25Fc2MiLCJjb250ZW50IiwiZXhwYW5kYWJsZSIsImV4cGFuZE9uSG92ZXIiLCJmb2N1c1RyYXAiLCJoaWRkZW4iLCJtb2RlIiwic2Nyb2xsQ29udGFpbmVyIiwic2xpbSIsInNsaW1Db2xsYXBzZWQiLCJzbGltV2lkdGgiLCJyaWdodCIsIlNpZGVuYXYiLCJub2RlIiwiX0lEIiwiX2JhY2tkcm9wIiwiX2NvbnRlbnQiLCJfaW5pdGlhbENvbnRlbnRTdHlsZSIsIl9zbGltQ29sbGFwc2VkIiwiX2FjdGl2ZU5vZGUiLCJfdGVtcFNsaW0iLCJfZm9jdXNUcmFwIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJfdG91Y2giLCJlc2NIYW5kbGVyIiwia2V5Q29kZSIsInRvZ2dsZXIiLCJfdXBkYXRlIiwiaGFzaEhhbmRsZXIiLCJfc2V0QWN0aXZlRWxlbWVudHMiLCJfc2V0dXAiLCJmaW5kQ29udGFpbmVyIiwiY29udGFpbmVyU3RhcnQiLCJjb250YWluZXJFbmQiLCJpbm5lcldpZHRoIiwiYm91bmRyeSIsInRyYW5zaXRpb24iLCJ0b2dnbGVFbGVtZW50IiwiX3NldE1vZGUiLCJfcmVtb3ZlQmFja2Ryb3AiLCJkaXNwb3NlIiwiX3NldFZpc2liaWxpdHkiLCJfc2V0U2xpbSIsImFycm93IiwibmF2aWdhdGlvbiIsIm1lbnUiLCJjb2xsYXBzZUVsZW1lbnRzIiwiY2xhc3NlcyIsImluZGV4Iiwib2Zmc2V0cyIsImluaXRpYWxWYWx1ZSIsIl9nZXRQeFZhbHVlIiwiYXJnIiwiaW52ZXJzZURpcmVjaW9uIiwidG9nZ2xlU2xpbSIsImxpbmsiLCJyZWZlcmVuY2UiLCJocmVmIiwiVVJMIiwibG9jYXRpb24iLCJfc2V0dXBUb3VjaCIsIl9zZXR1cEZvY3VzVHJhcCIsIl9zZXR1cEJhY2tkcm9wIiwiX2FwcGVuZEJhY2tkcm9wIiwiX3NldHVwQ29sbGFwc2UiLCJfc2V0dXBTbGltIiwiX3NldHVwSW5pdGlhbFN0eWxpbmciLCJfc2V0dXBTY3JvbGxpbmciLCJfc2V0dXBDb250ZW50IiwiX3NldHVwQWN0aXZlU3RhdGUiLCJfc2V0dXBSaXBwbGVFZmZlY3QiLCJfdXBkYXRlT2Zmc2V0cyIsImxpbmtzIiwibWVudUluZGV4IiwiY2F0ZWdvcmllcyIsImxpc3QiLCJfc2V0dXBDb2xsYXBzZUxpc3QiLCJJRCIsIl9nZW5lcmF0ZUNvbGxwYXNlSUQiLCJfYXBwZW5kQXJyb3ciLCJfdG9nZ2xlQ2F0ZWdvcnkiLCJfcm90YXRlQXJyb3ciLCJ1cGRhdGUiLCJfaXNBbGxDb2xsYXBzZWQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIl9zZXRDb2xvciIsInNpZGVuYXZTdHlsZSIsInNpYmxpbmdzIiwic2libGluZ3NIZWlnaHQiLCJyZWR1Y2UiLCJiIiwiY2xpZW50SGVpZ2h0IiwibWF4SGVpZ2h0IiwiUGVyZmVjdFNjcm9sbGJhciIsInN1cHByZXNzU2Nyb2xsWCIsIl90b2dnbGVTbGltRGlzcGxheSIsIndhdmUiLCJfaGFuZGxlU3dpcGUiLCJjb2xsYXBzZSIsIl9zZXRBY3RpdmVDYXRlZ29yeSIsImNhdGVnb3J5IiwiY29sbGFwc2VUb2dnbGVyIiwiX2lzQWN0aXZlIiwiX3NldEFjdGl2ZSIsImNvbG9ycyIsIm9wdGlvbkNvbG9yIiwiaW5jbHVkZXMiLCJpbml0aWFsIiwicGFkZGluZyIsIl9nZXRPZmZzZXRWYWx1ZSIsIm1hcmdpbiIsIl90cmlnZ2VyRXZlbnRzIiwiX2NvbGxhcHNlSXRlbXMiLCJ0YWJJbmRleCIsImFuZ2xlIiwidHJhbnNmb3JtIiwic2xpbUNvbGxhcHNlZEVsZW1lbnRzIiwiZnVsbFdpZHRoRWxlbWVudHMiLCJ0b2dnbGVFbGVtZW50cyIsImNvbXBsZXRlRXZlbnQiLCJfdXBkYXRlVG9nZ2xlckFyaWEiLCJfdXBkYXRlRGlzcGxheSIsIl90b2dnbGVCYWNrZHJvcCIsIl91cGRhdGVGb2N1cyIsInRyYW5zbGF0aW9uIiwiX3NldFRhYmluZGV4IiwidHJhcCIsImRpc2FibGUiLCJwYWRkaW5nUG9zaXRpb24iLCJtYXJnaW5Qb3NpdGlvbiIsIl9nZXRQcm9wZXJ0eSIsIl9zZXRDb250ZW50T2Zmc2V0cyIsImVsZW1lbnRTZWxlY3RvciIsImdldEluc3RhbmNlIiwidG9nZ2xlU2lkZW5hdiIsInNpZGVuYXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxVQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLGNBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLGFBQWpCO0FBQ0EsSUFBTUMsU0FBUyxjQUFPRCxRQUFQLENBQWY7QUFDQSxJQUFNRSxZQUFZLEdBQUcsV0FBckI7QUFFQSxJQUFNQyxPQUFPLEdBQUc7QUFDZEMsUUFBTSxFQUFFLElBRE07QUFFZEMsUUFBTSxFQUFFO0FBRk0sQ0FBaEI7QUFLQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJGLFFBQU0sRUFBRSxTQURVO0FBRWxCQyxRQUFNLEVBQUU7QUFGVSxDQUFwQjtBQUtBLElBQU1FLFVBQVUsaUJBQVVOLFNBQVYsQ0FBaEI7QUFDQSxJQUFNTyxXQUFXLGtCQUFXUCxTQUFYLENBQWpCO0FBQ0EsSUFBTVEsVUFBVSxpQkFBVVIsU0FBVixDQUFoQjtBQUNBLElBQU1TLFlBQVksbUJBQVlULFNBQVosQ0FBbEI7QUFDQSxJQUFNVSxvQkFBb0Isa0JBQVdWLFNBQVgsU0FBdUJDLFlBQXZCLENBQTFCO0FBRUEsSUFBTVUsZUFBZSxHQUFHLE1BQXhCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsVUFBNUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxZQUE5QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLFdBQTdCO0FBRUEsSUFBTUMsS0FBSyxHQUFHLE9BQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLElBQU1DLGdCQUFnQixHQUFHLG9CQUF6QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLDBCQUE3QjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLFE7QUFDSixvQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSCxPQUFoQjtBQUNBLFNBQUtJLE9BQUwsR0FBZSxLQUFLQyxVQUFMLENBQWdCSixNQUFoQixDQUFmO0FBQ0EsU0FBS0ssYUFBTCxHQUFxQkMsa0VBQUEsQ0FDbkIsVUFBR1Qsb0JBQUgsc0JBQWtDRSxPQUFPLENBQUNRLEVBQTFDLHNCQUNLVixvQkFETCw2QkFDMkNFLE9BQU8sQ0FBQ1EsRUFEbkQsUUFEbUIsQ0FBckI7QUFLQSxRQUFNQyxVQUFVLEdBQUdGLGtFQUFBLENBQW9CVCxvQkFBcEIsQ0FBbkI7O0FBRUEsU0FBSyxJQUFJWSxDQUFDLEdBQUcsQ0FBUixFQUFXQyxHQUFHLEdBQUdGLFVBQVUsQ0FBQ0csTUFBakMsRUFBeUNGLENBQUMsR0FBR0MsR0FBN0MsRUFBa0RELENBQUMsRUFBbkQsRUFBdUQ7QUFDckQsVUFBTUcsSUFBSSxHQUFHSixVQUFVLENBQUNDLENBQUQsQ0FBdkI7QUFDQSxVQUFNSSxRQUFRLEdBQUdDLHVFQUFzQixDQUFDRixJQUFELENBQXZDO0FBQ0EsVUFBTUcsYUFBYSxHQUFHVCxrRUFBQSxDQUFvQk8sUUFBcEIsRUFBOEJHLE1BQTlCLENBQ3BCLFVBQUNDLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLEtBQUtsQixPQUE3QjtBQUFBLE9BRG9CLENBQXRCOztBQUlBLFVBQUljLFFBQVEsS0FBSyxJQUFiLElBQXFCRSxhQUFhLENBQUNKLE1BQXZDLEVBQStDO0FBQzdDLGFBQUtPLFNBQUwsR0FBaUJMLFFBQWpCOztBQUNBLGFBQUtSLGFBQUwsQ0FBbUJjLElBQW5CLENBQXdCUCxJQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBS1EsT0FBTCxHQUFlLEtBQUtqQixPQUFMLENBQWFwQixNQUFiLEdBQXNCLEtBQUtzQyxVQUFMLEVBQXRCLEdBQTBDLElBQXpEOztBQUVBLFFBQUksQ0FBQyxLQUFLbEIsT0FBTCxDQUFhcEIsTUFBbEIsRUFBMEI7QUFDeEIsV0FBS3VDLHlCQUFMLENBQStCLEtBQUtwQixRQUFwQyxFQUE4QyxLQUFLRyxhQUFuRDtBQUNEOztBQUVELFFBQUksS0FBS0YsT0FBTCxDQUFhckIsTUFBakIsRUFBeUI7QUFDdkIsV0FBS0EsTUFBTDtBQUNEOztBQUVEeUMsOERBQUEsQ0FBYXhCLE9BQWIsRUFBc0JyQixRQUF0QixFQUFnQyxJQUFoQztBQUNELEcsQ0FFRDs7Ozs7V0FVQTtBQUVBLHNCQUFTO0FBQ1AsVUFBSSxLQUFLd0IsUUFBTCxDQUFjc0IsU0FBZCxDQUF3QkMsUUFBeEIsQ0FBaUNuQyxlQUFqQyxDQUFKLEVBQXVEO0FBQ3JELGFBQUtvQyxJQUFMO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsSUFBTDtBQUNEO0FBQ0Y7OztXQUVELGdCQUFPO0FBQUE7O0FBQ0wsVUFBSSxLQUFLMUIsZ0JBQUwsSUFBeUIsS0FBS0MsUUFBTCxDQUFjc0IsU0FBZCxDQUF3QkMsUUFBeEIsQ0FBaUNuQyxlQUFqQyxDQUE3QixFQUFnRjtBQUM5RTtBQUNEOztBQUVELFVBQUlzQyxPQUFKO0FBQ0EsVUFBSUMsV0FBSjs7QUFFQSxVQUFJLEtBQUtULE9BQVQsRUFBa0I7QUFDaEJRLGVBQU8sR0FBR3RCLGtFQUFBLENBQW9CVixnQkFBcEIsRUFBc0MsS0FBS3dCLE9BQTNDLEVBQW9ESixNQUFwRCxDQUEyRCxVQUFDSixJQUFELEVBQVU7QUFDN0UsY0FBSSxPQUFPLEtBQUksQ0FBQ1QsT0FBTCxDQUFhcEIsTUFBcEIsS0FBK0IsUUFBbkMsRUFBNkM7QUFDM0MsbUJBQU82QixJQUFJLENBQUNrQixZQUFMLENBQWtCLGFBQWxCLE1BQXFDLEtBQUksQ0FBQzNCLE9BQUwsQ0FBYXBCLE1BQXpEO0FBQ0Q7O0FBRUQsaUJBQU82QixJQUFJLENBQUNZLFNBQUwsQ0FBZUMsUUFBZixDQUF3QmxDLG1CQUF4QixDQUFQO0FBQ0QsU0FOUyxDQUFWOztBQVFBLFlBQUlxQyxPQUFPLENBQUNqQixNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCaUIsaUJBQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNRyxTQUFTLEdBQUd6QixxRUFBQSxDQUF1QixLQUFLWSxTQUE1QixDQUFsQjs7QUFDQSxVQUFJVSxPQUFKLEVBQWE7QUFDWCxZQUFNSSxjQUFjLEdBQUdKLE9BQU8sQ0FBQ1osTUFBUixDQUFlLFVBQUNKLElBQUQ7QUFBQSxpQkFBVW1CLFNBQVMsS0FBS25CLElBQXhCO0FBQUEsU0FBZixDQUF2QjtBQUNBaUIsbUJBQVcsR0FBR0csY0FBYyxDQUFDLENBQUQsQ0FBZCxHQUFvQlQsMERBQUEsQ0FBYVMsY0FBYyxDQUFDLENBQUQsQ0FBM0IsRUFBZ0N0RCxRQUFoQyxDQUFwQixHQUFnRSxJQUE5RTs7QUFFQSxZQUFJbUQsV0FBVyxJQUFJQSxXQUFXLENBQUM1QixnQkFBL0IsRUFBaUQ7QUFDL0M7QUFDRDtBQUNGOztBQUVELFVBQU1nQyxVQUFVLEdBQUdDLG1FQUFBLENBQXFCLEtBQUtoQyxRQUExQixFQUFvQ2pCLFVBQXBDLENBQW5COztBQUNBLFVBQUlnRCxVQUFVLENBQUNFLGdCQUFmLEVBQWlDO0FBQy9CO0FBQ0Q7O0FBRUQsVUFBSVAsT0FBSixFQUFhO0FBQ1hBLGVBQU8sQ0FBQ1EsT0FBUixDQUFnQixVQUFDQyxVQUFELEVBQWdCO0FBQzlCLGNBQUlOLFNBQVMsS0FBS00sVUFBbEIsRUFBOEI7QUFDNUJ2QyxvQkFBUSxDQUFDd0MsaUJBQVQsQ0FBMkJELFVBQTNCLEVBQXVDLE1BQXZDO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDUixXQUFMLEVBQWtCO0FBQ2hCTixzRUFBQSxDQUFhYyxVQUFiLEVBQXlCM0QsUUFBekIsRUFBbUMsSUFBbkM7QUFDRDtBQUNGLFNBUkQ7QUFTRDs7QUFFRCxVQUFNNkQsU0FBUyxHQUFHLEtBQUtDLGFBQUwsRUFBbEI7O0FBRUEsV0FBS3RDLFFBQUwsQ0FBY3NCLFNBQWQsQ0FBd0JpQixNQUF4QixDQUErQmxELG1CQUEvQjs7QUFDQSxXQUFLVyxRQUFMLENBQWNzQixTQUFkLENBQXdCa0IsR0FBeEIsQ0FBNEJsRCxxQkFBNUI7O0FBRUEsV0FBS1UsUUFBTCxDQUFjeUMsS0FBZCxDQUFvQkosU0FBcEIsSUFBaUMsQ0FBakM7O0FBRUEsVUFBSSxLQUFLbEMsYUFBTCxDQUFtQk0sTUFBdkIsRUFBK0I7QUFDN0IsYUFBS04sYUFBTCxDQUFtQitCLE9BQW5CLENBQTJCLFVBQUNyQyxPQUFELEVBQWE7QUFDdENBLGlCQUFPLENBQUN5QixTQUFSLENBQWtCaUIsTUFBbEIsQ0FBeUJoRCxvQkFBekI7QUFDQU0saUJBQU8sQ0FBQzZDLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDRCxTQUhEO0FBSUQ7O0FBRUQsV0FBS0MsZ0JBQUwsQ0FBc0IsSUFBdEI7O0FBRUEsVUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixhQUFJLENBQUM1QyxRQUFMLENBQWNzQixTQUFkLENBQXdCaUIsTUFBeEIsQ0FBK0JqRCxxQkFBL0I7O0FBQ0EsYUFBSSxDQUFDVSxRQUFMLENBQWNzQixTQUFkLENBQXdCa0IsR0FBeEIsQ0FBNEJuRCxtQkFBNUIsRUFBaURELGVBQWpEOztBQUVBLGFBQUksQ0FBQ1ksUUFBTCxDQUFjeUMsS0FBZCxDQUFvQkosU0FBcEIsSUFBaUMsRUFBakM7O0FBRUEsYUFBSSxDQUFDTSxnQkFBTCxDQUFzQixLQUF0Qjs7QUFFQVgsMkVBQUEsQ0FBcUIsS0FBSSxDQUFDaEMsUUFBMUIsRUFBb0NoQixXQUFwQztBQUNELE9BVEQ7O0FBV0EsVUFBTTZELG9CQUFvQixHQUFHUixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFTLFdBQWIsS0FBNkJULFNBQVMsQ0FBQ1UsS0FBVixDQUFnQixDQUFoQixDQUExRDtBQUNBLFVBQU1DLFVBQVUsbUJBQVlILG9CQUFaLENBQWhCO0FBQ0EsVUFBTUksa0JBQWtCLEdBQUdDLGlGQUFnQyxDQUFDLEtBQUtsRCxRQUFOLENBQTNEO0FBRUFnQyxxRUFBQSxDQUFpQixLQUFLaEMsUUFBdEIsRUFBZ0NtRCwyREFBaEMsRUFBZ0RQLFFBQWhEO0FBRUFRLDJFQUFvQixDQUFDLEtBQUtwRCxRQUFOLEVBQWdCaUQsa0JBQWhCLENBQXBCO0FBQ0EsV0FBS2pELFFBQUwsQ0FBY3lDLEtBQWQsQ0FBb0JKLFNBQXBCLGNBQW9DLEtBQUtyQyxRQUFMLENBQWNnRCxVQUFkLENBQXBDO0FBQ0Q7OztXQUVELGdCQUFPO0FBQUE7O0FBQ0wsVUFBSSxLQUFLakQsZ0JBQUwsSUFBeUIsQ0FBQyxLQUFLQyxRQUFMLENBQWNzQixTQUFkLENBQXdCQyxRQUF4QixDQUFpQ25DLGVBQWpDLENBQTlCLEVBQWlGO0FBQy9FO0FBQ0Q7O0FBRUQsVUFBTTJDLFVBQVUsR0FBR0MsbUVBQUEsQ0FBcUIsS0FBS2hDLFFBQTFCLEVBQW9DZixVQUFwQyxDQUFuQjs7QUFDQSxVQUFJOEMsVUFBVSxDQUFDRSxnQkFBZixFQUFpQztBQUMvQjtBQUNEOztBQUVELFVBQU1JLFNBQVMsR0FBRyxLQUFLQyxhQUFMLEVBQWxCOztBQUVBLFdBQUt0QyxRQUFMLENBQWN5QyxLQUFkLENBQW9CSixTQUFwQixjQUFvQyxLQUFLckMsUUFBTCxDQUFjcUQscUJBQWQsR0FBc0NoQixTQUF0QyxDQUFwQztBQUVBaUIsNkRBQU0sQ0FBQyxLQUFLdEQsUUFBTixDQUFOOztBQUVBLFdBQUtBLFFBQUwsQ0FBY3NCLFNBQWQsQ0FBd0JrQixHQUF4QixDQUE0QmxELHFCQUE1Qjs7QUFDQSxXQUFLVSxRQUFMLENBQWNzQixTQUFkLENBQXdCaUIsTUFBeEIsQ0FBK0JsRCxtQkFBL0IsRUFBb0RELGVBQXBEOztBQUVBLFVBQU1tRSxrQkFBa0IsR0FBRyxLQUFLcEQsYUFBTCxDQUFtQk0sTUFBOUM7O0FBQ0EsVUFBSThDLGtCQUFrQixHQUFHLENBQXpCLEVBQTRCO0FBQzFCLGFBQUssSUFBSWhELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnRCxrQkFBcEIsRUFBd0NoRCxDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLGNBQU1pRCxPQUFPLEdBQUcsS0FBS3JELGFBQUwsQ0FBbUJJLENBQW5CLENBQWhCO0FBQ0EsY0FBTUcsSUFBSSxHQUFHK0MsdUVBQXNCLENBQUNELE9BQUQsQ0FBbkM7O0FBRUEsY0FBSTlDLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNZLFNBQUwsQ0FBZUMsUUFBZixDQUF3Qm5DLGVBQXhCLENBQWIsRUFBdUQ7QUFDckRvRSxtQkFBTyxDQUFDbEMsU0FBUixDQUFrQmtCLEdBQWxCLENBQXNCakQsb0JBQXRCO0FBQ0FpRSxtQkFBTyxDQUFDZCxZQUFSLENBQXFCLGVBQXJCLEVBQXNDLEtBQXRDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQUtDLGdCQUFMLENBQXNCLElBQXRCOztBQUVBLFVBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsY0FBSSxDQUFDRCxnQkFBTCxDQUFzQixLQUF0Qjs7QUFDQSxjQUFJLENBQUMzQyxRQUFMLENBQWNzQixTQUFkLENBQXdCaUIsTUFBeEIsQ0FBK0JqRCxxQkFBL0I7O0FBQ0EsY0FBSSxDQUFDVSxRQUFMLENBQWNzQixTQUFkLENBQXdCa0IsR0FBeEIsQ0FBNEJuRCxtQkFBNUI7O0FBQ0EyQywyRUFBQSxDQUFxQixNQUFJLENBQUNoQyxRQUExQixFQUFvQ2QsWUFBcEM7QUFDRCxPQUxEOztBQU9BLFdBQUtjLFFBQUwsQ0FBY3lDLEtBQWQsQ0FBb0JKLFNBQXBCLElBQWlDLEVBQWpDO0FBQ0EsVUFBTVksa0JBQWtCLEdBQUdDLGlGQUFnQyxDQUFDLEtBQUtsRCxRQUFOLENBQTNEO0FBRUFnQyxxRUFBQSxDQUFpQixLQUFLaEMsUUFBdEIsRUFBZ0NtRCwyREFBaEMsRUFBZ0RQLFFBQWhEO0FBQ0FRLDJFQUFvQixDQUFDLEtBQUtwRCxRQUFOLEVBQWdCaUQsa0JBQWhCLENBQXBCO0FBQ0Q7OztXQUVELDBCQUFpQlMsZUFBakIsRUFBa0M7QUFDaEMsV0FBSzNELGdCQUFMLEdBQXdCMkQsZUFBeEI7QUFDRDs7O1dBRUQsbUJBQVU7QUFDUnJDLG1FQUFBLENBQWdCLEtBQUtyQixRQUFyQixFQUErQnhCLFFBQS9CO0FBRUEsV0FBS3lCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS2lCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS2xCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLRyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBS0osZ0JBQUwsR0FBd0IsSUFBeEI7QUFDRCxLLENBRUQ7Ozs7V0FFQSxvQkFBV0QsTUFBWCxFQUFtQjtBQUNqQkEsWUFBTSxtQ0FDRG5CLE9BREMsR0FFRG1CLE1BRkMsQ0FBTjtBQUlBQSxZQUFNLENBQUNsQixNQUFQLEdBQWdCK0UsT0FBTyxDQUFDN0QsTUFBTSxDQUFDbEIsTUFBUixDQUF2QixDQUxpQixDQUt1Qjs7QUFDeENnRixzRUFBZSxDQUFDdEYsSUFBRCxFQUFPd0IsTUFBUCxFQUFlaEIsV0FBZixDQUFmO0FBQ0EsYUFBT2dCLE1BQVA7QUFDRDs7O1dBRUQseUJBQWdCO0FBQ2QsYUFBTyxLQUFLRSxRQUFMLENBQWNzQixTQUFkLENBQXdCQyxRQUF4QixDQUFpQy9CLEtBQWpDLElBQTBDQSxLQUExQyxHQUFrREMsTUFBekQ7QUFDRDs7O1dBRUQsc0JBQWE7QUFBQTs7QUFDWCxVQUFNWixNQUFOLEdBQWlCLEtBQUtvQixPQUF0QixDQUFNcEIsTUFBTjs7QUFFQSxVQUFJZ0YsMERBQVMsQ0FBQ2hGLE1BQUQsQ0FBYixFQUF1QjtBQUNyQjtBQUNBLFlBQUksT0FBT0EsTUFBTSxDQUFDaUYsTUFBZCxLQUF5QixXQUF6QixJQUF3QyxPQUFPakYsTUFBTSxDQUFDLENBQUQsQ0FBYixLQUFxQixXQUFqRSxFQUE4RTtBQUM1RUEsZ0JBQU0sR0FBR0EsTUFBTSxDQUFDLENBQUQsQ0FBZjtBQUNEO0FBQ0YsT0FMRCxNQUtPO0FBQ0xBLGNBQU0sR0FBR3VCLHFFQUFBLENBQXVCdkIsTUFBdkIsQ0FBVDtBQUNEOztBQUVELFVBQU04QixRQUFRLGFBQU1oQixvQkFBTiw0QkFBMkNkLE1BQTNDLFFBQWQ7QUFFQXVCLHdFQUFBLENBQW9CTyxRQUFwQixFQUE4QjlCLE1BQTlCLEVBQXNDcUQsT0FBdEMsQ0FBOEMsVUFBQ3JDLE9BQUQsRUFBYTtBQUN6RCxZQUFNa0UsUUFBUSxHQUFHTix1RUFBc0IsQ0FBQzVELE9BQUQsQ0FBdkM7O0FBRUEsY0FBSSxDQUFDdUIseUJBQUwsQ0FBK0IyQyxRQUEvQixFQUF5QyxDQUFDbEUsT0FBRCxDQUF6QztBQUNELE9BSkQ7QUFNQSxhQUFPaEIsTUFBUDtBQUNEOzs7V0FFRCxtQ0FBMEJnQixPQUExQixFQUFtQ21FLFlBQW5DLEVBQWlEO0FBQy9DLFVBQUksQ0FBQ25FLE9BQUQsSUFBWSxDQUFDbUUsWUFBWSxDQUFDdkQsTUFBOUIsRUFBc0M7QUFDcEM7QUFDRDs7QUFFRCxVQUFNd0QsTUFBTSxHQUFHcEUsT0FBTyxDQUFDeUIsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJuQyxlQUEzQixDQUFmO0FBRUE0RSxrQkFBWSxDQUFDOUIsT0FBYixDQUFxQixVQUFDeEIsSUFBRCxFQUFVO0FBQzdCLFlBQUl1RCxNQUFKLEVBQVk7QUFDVnZELGNBQUksQ0FBQ1ksU0FBTCxDQUFlaUIsTUFBZixDQUFzQmhELG9CQUF0QjtBQUNELFNBRkQsTUFFTztBQUNMbUIsY0FBSSxDQUFDWSxTQUFMLENBQWVrQixHQUFmLENBQW1CakQsb0JBQW5CO0FBQ0Q7O0FBRURtQixZQUFJLENBQUNnQyxZQUFMLENBQWtCLGVBQWxCLEVBQW1DdUIsTUFBbkM7QUFDRCxPQVJEO0FBU0QsSyxDQUVEOzs7O1NBL05BLGVBQXFCO0FBQ25CLGFBQU8xRixPQUFQO0FBQ0Q7OztTQUVELGVBQXFCO0FBQ25CLGFBQU9JLE9BQVA7QUFDRDs7O1dBMk5ELDJCQUF5QmtCLE9BQXpCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUN4QyxVQUFJb0UsSUFBSSxHQUFHN0MsMERBQUEsQ0FBYXhCLE9BQWIsRUFBc0JyQixRQUF0QixDQUFYOztBQUNBLFVBQU15QixPQUFPLGlEQUNSdEIsT0FEUSxHQUVSd0YsMkVBQUEsQ0FBOEJ0RSxPQUE5QixDQUZRLEdBR1AsUUFBT0MsTUFBUCxNQUFrQixRQUFsQixJQUE4QkEsTUFBOUIsR0FBdUNBLE1BQXZDLEdBQWdELEVBSHpDLENBQWI7O0FBTUEsVUFBSSxDQUFDb0UsSUFBRCxJQUFTakUsT0FBTyxDQUFDckIsTUFBakIsSUFBMkIsT0FBT2tCLE1BQVAsS0FBa0IsUUFBN0MsSUFBeUQsWUFBWXNFLElBQVosQ0FBaUJ0RSxNQUFqQixDQUE3RCxFQUF1RjtBQUNyRkcsZUFBTyxDQUFDckIsTUFBUixHQUFpQixLQUFqQjtBQUNEOztBQUVELFVBQUksQ0FBQ3NGLElBQUwsRUFBVztBQUNUQSxZQUFJLEdBQUcsSUFBSXRFLFFBQUosQ0FBYUMsT0FBYixFQUFzQkksT0FBdEIsQ0FBUDtBQUNEOztBQUVELFVBQUksT0FBT0gsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixZQUFJLE9BQU9vRSxJQUFJLENBQUNwRSxNQUFELENBQVgsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkMsZ0JBQU0sSUFBSXVFLFNBQUosNkJBQWtDdkUsTUFBbEMsUUFBTjtBQUNEOztBQUVEb0UsWUFBSSxDQUFDcEUsTUFBRCxDQUFKO0FBQ0Q7QUFDRjs7O1dBRUQseUJBQXVCQSxNQUF2QixFQUErQjtBQUM3QixhQUFPLEtBQUt3RSxJQUFMLENBQVUsWUFBWTtBQUMzQjFFLGdCQUFRLENBQUN3QyxpQkFBVCxDQUEyQixJQUEzQixFQUFpQ3RDLE1BQWpDO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7OztXQUVELHFCQUFtQkQsT0FBbkIsRUFBNEI7QUFDMUIsYUFBT3dCLDBEQUFBLENBQWF4QixPQUFiLEVBQXNCckIsUUFBdEIsQ0FBUDtBQUNEOzs7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBd0QsOERBQUEsQ0FBZ0J1QyxRQUFoQixFQUEwQnBGLG9CQUExQixFQUFnRFEsb0JBQWhELEVBQXNFLFVBQVU2RSxLQUFWLEVBQWlCO0FBQ3JGO0FBQ0EsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWIsS0FBeUIsR0FBN0IsRUFBa0M7QUFDaENGLFNBQUssQ0FBQ0csY0FBTjtBQUNEOztBQUVELE1BQU1DLFdBQVcsR0FBR1QsMkVBQUEsQ0FBOEIsSUFBOUIsQ0FBcEI7QUFDQSxNQUFNeEQsUUFBUSxHQUFHQyx1RUFBc0IsQ0FBQyxJQUFELENBQXZDO0FBQ0EsTUFBTWlFLGdCQUFnQixHQUFHekUsa0VBQUEsQ0FBb0JPLFFBQXBCLENBQXpCO0FBRUFrRSxrQkFBZ0IsQ0FBQzNDLE9BQWpCLENBQXlCLFVBQUNyQyxPQUFELEVBQWE7QUFDcEMsUUFBTXFFLElBQUksR0FBRzdDLDBEQUFBLENBQWF4QixPQUFiLEVBQXNCckIsUUFBdEIsQ0FBYjtBQUNBLFFBQUlzQixNQUFKOztBQUNBLFFBQUlvRSxJQUFKLEVBQVU7QUFDUjtBQUNBLFVBQUlBLElBQUksQ0FBQ2hELE9BQUwsS0FBaUIsSUFBakIsSUFBeUIsT0FBTzBELFdBQVcsQ0FBQy9GLE1BQW5CLEtBQThCLFFBQTNELEVBQXFFO0FBQ25FcUYsWUFBSSxDQUFDakUsT0FBTCxDQUFhcEIsTUFBYixHQUFzQitGLFdBQVcsQ0FBQy9GLE1BQWxDO0FBQ0FxRixZQUFJLENBQUNoRCxPQUFMLEdBQWVnRCxJQUFJLENBQUMvQyxVQUFMLEVBQWY7QUFDRDs7QUFFRHJCLFlBQU0sR0FBRyxRQUFUO0FBQ0QsS0FSRCxNQVFPO0FBQ0xBLFlBQU0sR0FBRzhFLFdBQVQ7QUFDRDs7QUFFRGhGLFlBQVEsQ0FBQ3dDLGlCQUFULENBQTJCdkMsT0FBM0IsRUFBb0NDLE1BQXBDO0FBQ0QsR0FoQkQ7QUFpQkQsQ0EzQkQ7QUE2QkEsSUFBTWdGLENBQUMsR0FBR0MsMERBQVMsRUFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0EsSUFBSUQsQ0FBSixFQUFPO0FBQ0wsTUFBTUUsa0JBQWtCLEdBQUdGLENBQUMsQ0FBQ0csRUFBRixDQUFLM0csSUFBTCxDQUEzQjtBQUNBd0csR0FBQyxDQUFDRyxFQUFGLENBQUszRyxJQUFMLElBQWFzQixRQUFRLENBQUNzRixlQUF0QjtBQUNBSixHQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsRUFBVzZHLFdBQVgsR0FBeUJ2RixRQUF6Qjs7QUFDQWtGLEdBQUMsQ0FBQ0csRUFBRixDQUFLM0csSUFBTCxFQUFXOEcsVUFBWCxHQUF3QixZQUFNO0FBQzVCTixLQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsSUFBYTBHLGtCQUFiO0FBQ0EsV0FBT3BGLFFBQVEsQ0FBQ3NGLGVBQWhCO0FBQ0QsR0FIRDtBQUlEOztBQUVELGlFQUFldEYsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUN2YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNeUYsT0FBTyxHQUFJLFlBQU07QUFDckIsTUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsTUFBSWpGLEVBQUUsR0FBRyxDQUFUO0FBQ0EsU0FBTztBQUNMa0YsT0FESyxlQUNEMUYsT0FEQyxFQUNRMkYsR0FEUixFQUNhdEIsSUFEYixFQUNtQjtBQUN0QixVQUFJLE9BQU9yRSxPQUFPLENBQUM0RixLQUFmLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDNUYsZUFBTyxDQUFDNEYsS0FBUixHQUFnQjtBQUNkRCxhQUFHLEVBQUhBLEdBRGM7QUFFZG5GLFlBQUUsRUFBRkE7QUFGYyxTQUFoQjtBQUlBQSxVQUFFO0FBQ0g7O0FBRURpRixlQUFTLENBQUN6RixPQUFPLENBQUM0RixLQUFSLENBQWNwRixFQUFmLENBQVQsR0FBOEI2RCxJQUE5QjtBQUNELEtBWEk7QUFZTHdCLE9BWkssZUFZRDdGLE9BWkMsRUFZUTJGLEdBWlIsRUFZYTtBQUNoQixVQUFJLENBQUMzRixPQUFELElBQVksT0FBT0EsT0FBTyxDQUFDNEYsS0FBZixLQUF5QixXQUF6QyxFQUFzRDtBQUNwRCxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNRSxhQUFhLEdBQUc5RixPQUFPLENBQUM0RixLQUE5Qjs7QUFDQSxVQUFJRSxhQUFhLENBQUNILEdBQWQsS0FBc0JBLEdBQTFCLEVBQStCO0FBQzdCLGVBQU9GLFNBQVMsQ0FBQ0ssYUFBYSxDQUFDdEYsRUFBZixDQUFoQjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNELEtBdkJJO0FBQUEsK0JBd0JFUixPQXhCRixFQXdCVzJGLEdBeEJYLEVBd0JnQjtBQUNuQixVQUFJLE9BQU8zRixPQUFPLENBQUM0RixLQUFmLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDO0FBQ0Q7O0FBRUQsVUFBTUUsYUFBYSxHQUFHOUYsT0FBTyxDQUFDNEYsS0FBOUI7O0FBQ0EsVUFBSUUsYUFBYSxDQUFDSCxHQUFkLEtBQXNCQSxHQUExQixFQUErQjtBQUM3QixlQUFPRixTQUFTLENBQUNLLGFBQWEsQ0FBQ3RGLEVBQWYsQ0FBaEI7QUFDQSxlQUFPUixPQUFPLENBQUM0RixLQUFmO0FBQ0Q7QUFDRjtBQWxDSSxHQUFQO0FBb0NELENBdkNlLEVBQWhCOztBQXlDQSxJQUFNcEUsSUFBSSxHQUFHO0FBQ1h1RSxTQURXLG1CQUNIQyxRQURHLEVBQ09MLEdBRFAsRUFDWXRCLElBRFosRUFDa0I7QUFDM0JtQixXQUFPLENBQUNFLEdBQVIsQ0FBWU0sUUFBWixFQUFzQkwsR0FBdEIsRUFBMkJ0QixJQUEzQjtBQUNELEdBSFU7QUFJWDRCLFNBSlcsbUJBSUhELFFBSkcsRUFJT0wsR0FKUCxFQUlZO0FBQ3JCLFdBQU9ILE9BQU8sQ0FBQ0ssR0FBUixDQUFZRyxRQUFaLEVBQXNCTCxHQUF0QixDQUFQO0FBQ0QsR0FOVTtBQU9YTyxZQVBXLHNCQU9BRixRQVBBLEVBT1VMLEdBUFYsRUFPZTtBQUN4QkgsV0FBTyxVQUFQLENBQWVRLFFBQWYsRUFBeUJMLEdBQXpCO0FBQ0Q7QUFUVSxDQUFiO0FBWUEsaUVBQWVuRSxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNeUQsQ0FBQyxHQUFHQywwREFBUyxFQUFuQjtBQUNBLElBQU1pQixjQUFjLEdBQUcsb0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLE1BQXZCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFFBQXRCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLEVBQXRCLEMsQ0FBMEI7O0FBQzFCLElBQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxZQUFVLEVBQUUsV0FETztBQUVuQkMsWUFBVSxFQUFFO0FBRk8sQ0FBckI7QUFJQSxJQUFNQyxZQUFZLEdBQUcsQ0FDbkIsT0FEbUIsRUFFbkIsVUFGbUIsRUFHbkIsU0FIbUIsRUFJbkIsV0FKbUIsRUFLbkIsYUFMbUIsRUFNbkIsWUFObUIsRUFPbkIsZ0JBUG1CLEVBUW5CLFdBUm1CLEVBU25CLFVBVG1CLEVBVW5CLFdBVm1CLEVBV25CLGFBWG1CLEVBWW5CLFdBWm1CLEVBYW5CLFNBYm1CLEVBY25CLFVBZG1CLEVBZW5CLE9BZm1CLEVBZ0JuQixtQkFoQm1CLEVBaUJuQixZQWpCbUIsRUFrQm5CLFdBbEJtQixFQW1CbkIsVUFuQm1CLEVBb0JuQixhQXBCbUIsRUFxQm5CLGFBckJtQixFQXNCbkIsYUF0Qm1CLEVBdUJuQixXQXZCbUIsRUF3Qm5CLGNBeEJtQixFQXlCbkIsZUF6Qm1CLEVBMEJuQixjQTFCbUIsRUEyQm5CLGVBM0JtQixFQTRCbkIsWUE1Qm1CLEVBNkJuQixPQTdCbUIsRUE4Qm5CLE1BOUJtQixFQStCbkIsUUEvQm1CLEVBZ0NuQixPQWhDbUIsRUFpQ25CLFFBakNtQixFQWtDbkIsUUFsQ21CLEVBbUNuQixTQW5DbUIsRUFvQ25CLFVBcENtQixFQXFDbkIsTUFyQ21CLEVBc0NuQixRQXRDbUIsRUF1Q25CLGNBdkNtQixFQXdDbkIsUUF4Q21CLEVBeUNuQixNQXpDbUIsRUEwQ25CLGtCQTFDbUIsRUEyQ25CLGtCQTNDbUIsRUE0Q25CLE9BNUNtQixFQTZDbkIsT0E3Q21CLEVBOENuQixRQTlDbUIsQ0FBckI7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxXQUFULENBQXFCNUcsT0FBckIsRUFBOEI2RyxHQUE5QixFQUFtQztBQUNqQyxTQUFRQSxHQUFHLGNBQU9BLEdBQVAsZUFBZU4sUUFBUSxFQUF2QixDQUFKLElBQW9DdkcsT0FBTyxDQUFDdUcsUUFBNUMsSUFBd0RBLFFBQVEsRUFBdkU7QUFDRDs7QUFFRCxTQUFTTyxRQUFULENBQWtCOUcsT0FBbEIsRUFBMkI7QUFDekIsTUFBTTZHLEdBQUcsR0FBR0QsV0FBVyxDQUFDNUcsT0FBRCxDQUF2QjtBQUVBQSxTQUFPLENBQUN1RyxRQUFSLEdBQW1CTSxHQUFuQjtBQUNBUCxlQUFhLENBQUNPLEdBQUQsQ0FBYixHQUFxQlAsYUFBYSxDQUFDTyxHQUFELENBQWIsSUFBc0IsRUFBM0M7QUFFQSxTQUFPUCxhQUFhLENBQUNPLEdBQUQsQ0FBcEI7QUFDRDs7QUFFRCxTQUFTRSxnQkFBVCxDQUEwQi9HLE9BQTFCLEVBQW1Db0YsRUFBbkMsRUFBdUM7QUFDckMsU0FBTyxTQUFTNEIsT0FBVCxDQUFpQnJDLEtBQWpCLEVBQXdCO0FBQzdCQSxTQUFLLENBQUNzQyxjQUFOLEdBQXVCakgsT0FBdkI7O0FBRUEsUUFBSWdILE9BQU8sQ0FBQ0UsTUFBWixFQUFvQjtBQUNsQi9FLGtCQUFZLENBQUNnRixHQUFiLENBQWlCbkgsT0FBakIsRUFBMEIyRSxLQUFLLENBQUN5QyxJQUFoQyxFQUFzQ2hDLEVBQXRDO0FBQ0Q7O0FBRUQsV0FBT0EsRUFBRSxDQUFDaUMsS0FBSCxDQUFTckgsT0FBVCxFQUFrQixDQUFDMkUsS0FBRCxDQUFsQixDQUFQO0FBQ0QsR0FSRDtBQVNEOztBQUVELFNBQVMyQywwQkFBVCxDQUFvQ3RILE9BQXBDLEVBQTZDYyxRQUE3QyxFQUF1RHNFLEVBQXZELEVBQTJEO0FBQ3pELFNBQU8sU0FBUzRCLE9BQVQsQ0FBaUJyQyxLQUFqQixFQUF3QjtBQUM3QixRQUFNNEMsV0FBVyxHQUFHdkgsT0FBTyxDQUFDd0gsZ0JBQVIsQ0FBeUIxRyxRQUF6QixDQUFwQjs7QUFFQSxTQUFLLElBQU04RCxNQUFOLEdBQWlCRCxLQUFqQixDQUFNQyxNQUFYLEVBQTZCQSxNQUFNLElBQUlBLE1BQU0sS0FBSyxJQUFsRCxFQUF3REEsTUFBTSxHQUFHQSxNQUFNLENBQUM2QyxVQUF4RSxFQUFvRjtBQUNsRixXQUFLLElBQUkvRyxDQUFDLEdBQUc2RyxXQUFXLENBQUMzRyxNQUF6QixFQUFpQ0YsQ0FBQyxFQUFsQyxHQUF3QztBQUN0QyxZQUFJNkcsV0FBVyxDQUFDN0csQ0FBRCxDQUFYLEtBQW1Ca0UsTUFBdkIsRUFBK0I7QUFDN0JELGVBQUssQ0FBQ3NDLGNBQU4sR0FBdUJyQyxNQUF2Qjs7QUFFQSxjQUFJb0MsT0FBTyxDQUFDRSxNQUFaLEVBQW9CO0FBQ2xCL0Usd0JBQVksQ0FBQ2dGLEdBQWIsQ0FBaUJuSCxPQUFqQixFQUEwQjJFLEtBQUssQ0FBQ3lDLElBQWhDLEVBQXNDaEMsRUFBdEM7QUFDRDs7QUFFRCxpQkFBT0EsRUFBRSxDQUFDaUMsS0FBSCxDQUFTekMsTUFBVCxFQUFpQixDQUFDRCxLQUFELENBQWpCLENBQVA7QUFDRDtBQUNGO0FBQ0YsS0FmNEIsQ0FpQjdCOzs7QUFDQSxXQUFPLElBQVA7QUFDRCxHQW5CRDtBQW9CRDs7QUFFRCxTQUFTK0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkJYLE9BQTdCLEVBQWlFO0FBQUEsTUFBM0JZLGtCQUEyQix1RUFBTixJQUFNO0FBQy9ELE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQVosQ0FBckI7O0FBRUEsT0FBSyxJQUFJakgsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHa0gsWUFBWSxDQUFDakgsTUFBbkMsRUFBMkNGLENBQUMsR0FBR0MsR0FBL0MsRUFBb0RELENBQUMsRUFBckQsRUFBeUQ7QUFDdkQsUUFBTWlFLEtBQUssR0FBR2dELE1BQU0sQ0FBQ0UsWUFBWSxDQUFDbkgsQ0FBRCxDQUFiLENBQXBCOztBQUVBLFFBQUlpRSxLQUFLLENBQUNxRCxlQUFOLEtBQTBCaEIsT0FBMUIsSUFBcUNyQyxLQUFLLENBQUNpRCxrQkFBTixLQUE2QkEsa0JBQXRFLEVBQTBGO0FBQ3hGLGFBQU9qRCxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTc0QsZUFBVCxDQUF5QkMsaUJBQXpCLEVBQTRDbEIsT0FBNUMsRUFBcURtQixZQUFyRCxFQUFtRTtBQUNqRSxNQUFNQyxVQUFVLEdBQUcsT0FBT3BCLE9BQVAsS0FBbUIsUUFBdEM7QUFDQSxNQUFNZ0IsZUFBZSxHQUFHSSxVQUFVLEdBQUdELFlBQUgsR0FBa0JuQixPQUFwRCxDQUZpRSxDQUlqRTs7QUFDQSxNQUFJcUIsU0FBUyxHQUFHSCxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEJsQyxjQUExQixFQUEwQyxFQUExQyxDQUFoQjtBQUNBLE1BQU1tQyxNQUFNLEdBQUcvQixZQUFZLENBQUM2QixTQUFELENBQTNCOztBQUVBLE1BQUlFLE1BQUosRUFBWTtBQUNWRixhQUFTLEdBQUdFLE1BQVo7QUFDRDs7QUFFRCxNQUFNQyxRQUFRLEdBQUc3QixZQUFZLENBQUM4QixPQUFiLENBQXFCSixTQUFyQixJQUFrQyxDQUFDLENBQXBEOztBQUVBLE1BQUksQ0FBQ0csUUFBTCxFQUFlO0FBQ2JILGFBQVMsR0FBR0gsaUJBQVo7QUFDRDs7QUFFRCxTQUFPLENBQUNFLFVBQUQsRUFBYUosZUFBYixFQUE4QkssU0FBOUIsQ0FBUDtBQUNEOztBQUVELFNBQVNLLFVBQVQsQ0FBb0IxSSxPQUFwQixFQUE2QmtJLGlCQUE3QixFQUFnRGxCLE9BQWhELEVBQXlEbUIsWUFBekQsRUFBdUVqQixNQUF2RSxFQUErRTtBQUM3RSxNQUFJLE9BQU9nQixpQkFBUCxLQUE2QixRQUE3QixJQUF5QyxDQUFDbEksT0FBOUMsRUFBdUQ7QUFDckQ7QUFDRDs7QUFFRCxNQUFJLENBQUNnSCxPQUFMLEVBQWM7QUFDWkEsV0FBTyxHQUFHbUIsWUFBVjtBQUNBQSxnQkFBWSxHQUFHLElBQWY7QUFDRDs7QUFFRCx5QkFBaURGLGVBQWUsQ0FDOURDLGlCQUQ4RCxFQUU5RGxCLE9BRjhELEVBRzlEbUIsWUFIOEQsQ0FBaEU7QUFBQTtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkosZUFBbkI7QUFBQSxNQUFvQ0ssU0FBcEM7O0FBS0EsTUFBTVYsTUFBTSxHQUFHYixRQUFRLENBQUM5RyxPQUFELENBQXZCO0FBQ0EsTUFBTTJJLFFBQVEsR0FBR2hCLE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLEtBQXNCVixNQUFNLENBQUNVLFNBQUQsQ0FBTixHQUFvQixFQUExQyxDQUFqQjtBQUNBLE1BQU1PLFVBQVUsR0FBR2xCLFdBQVcsQ0FBQ2lCLFFBQUQsRUFBV1gsZUFBWCxFQUE0QkksVUFBVSxHQUFHcEIsT0FBSCxHQUFhLElBQW5ELENBQTlCOztBQUVBLE1BQUk0QixVQUFKLEVBQWdCO0FBQ2RBLGNBQVUsQ0FBQzFCLE1BQVgsR0FBb0IwQixVQUFVLENBQUMxQixNQUFYLElBQXFCQSxNQUF6QztBQUVBO0FBQ0Q7O0FBRUQsTUFBTUwsR0FBRyxHQUFHRCxXQUFXLENBQUNvQixlQUFELEVBQWtCRSxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEJuQyxjQUExQixFQUEwQyxFQUExQyxDQUFsQixDQUF2QjtBQUNBLE1BQU1mLEVBQUUsR0FBR2dELFVBQVUsR0FDakJkLDBCQUEwQixDQUFDdEgsT0FBRCxFQUFVZ0gsT0FBVixFQUFtQm1CLFlBQW5CLENBRFQsR0FFakJwQixnQkFBZ0IsQ0FBQy9HLE9BQUQsRUFBVWdILE9BQVYsQ0FGcEI7QUFJQTVCLElBQUUsQ0FBQ3dDLGtCQUFILEdBQXdCUSxVQUFVLEdBQUdwQixPQUFILEdBQWEsSUFBL0M7QUFDQTVCLElBQUUsQ0FBQzRDLGVBQUgsR0FBcUJBLGVBQXJCO0FBQ0E1QyxJQUFFLENBQUM4QixNQUFILEdBQVlBLE1BQVo7QUFDQTlCLElBQUUsQ0FBQ21CLFFBQUgsR0FBY00sR0FBZDtBQUNBOEIsVUFBUSxDQUFDOUIsR0FBRCxDQUFSLEdBQWdCekIsRUFBaEI7QUFFQXBGLFNBQU8sQ0FBQzZJLGdCQUFSLENBQXlCUixTQUF6QixFQUFvQ2pELEVBQXBDLEVBQXdDZ0QsVUFBeEM7QUFDRDs7QUFFRCxTQUFTVSxhQUFULENBQXVCOUksT0FBdkIsRUFBZ0MySCxNQUFoQyxFQUF3Q1UsU0FBeEMsRUFBbURyQixPQUFuRCxFQUE0RFksa0JBQTVELEVBQWdGO0FBQzlFLE1BQU14QyxFQUFFLEdBQUdzQyxXQUFXLENBQUNDLE1BQU0sQ0FBQ1UsU0FBRCxDQUFQLEVBQW9CckIsT0FBcEIsRUFBNkJZLGtCQUE3QixDQUF0Qjs7QUFFQSxNQUFJLENBQUN4QyxFQUFMLEVBQVM7QUFDUDtBQUNEOztBQUVEcEYsU0FBTyxDQUFDK0ksbUJBQVIsQ0FBNEJWLFNBQTVCLEVBQXVDakQsRUFBdkMsRUFBMkN0QixPQUFPLENBQUM4RCxrQkFBRCxDQUFsRDtBQUNBLFNBQU9ELE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLENBQWtCakQsRUFBRSxDQUFDbUIsUUFBckIsQ0FBUDtBQUNEOztBQUVELFNBQVN5Qyx3QkFBVCxDQUFrQ2hKLE9BQWxDLEVBQTJDMkgsTUFBM0MsRUFBbURVLFNBQW5ELEVBQThEWSxTQUE5RCxFQUF5RTtBQUN2RSxNQUFNQyxpQkFBaUIsR0FBR3ZCLE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLElBQXFCLEVBQS9DO0FBRUFQLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZbUIsaUJBQVosRUFBK0I3RyxPQUEvQixDQUF1QyxVQUFDOEcsVUFBRCxFQUFnQjtBQUNyRCxRQUFJQSxVQUFVLENBQUNWLE9BQVgsQ0FBbUJRLFNBQW5CLElBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDdEMsVUFBTXRFLEtBQUssR0FBR3VFLGlCQUFpQixDQUFDQyxVQUFELENBQS9CO0FBRUFMLG1CQUFhLENBQUM5SSxPQUFELEVBQVUySCxNQUFWLEVBQWtCVSxTQUFsQixFQUE2QjFELEtBQUssQ0FBQ3FELGVBQW5DLEVBQW9EckQsS0FBSyxDQUFDaUQsa0JBQTFELENBQWI7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRCxJQUFNekYsWUFBWSxHQUFHO0FBQ25CaUgsSUFEbUIsY0FDaEJwSixPQURnQixFQUNQMkUsS0FETyxFQUNBcUMsT0FEQSxFQUNTbUIsWUFEVCxFQUN1QjtBQUN4Q08sY0FBVSxDQUFDMUksT0FBRCxFQUFVMkUsS0FBVixFQUFpQnFDLE9BQWpCLEVBQTBCbUIsWUFBMUIsRUFBd0MsS0FBeEMsQ0FBVjtBQUNELEdBSGtCO0FBS25Ca0IsS0FMbUIsZUFLZnJKLE9BTGUsRUFLTjJFLEtBTE0sRUFLQ3FDLE9BTEQsRUFLVW1CLFlBTFYsRUFLd0I7QUFDekNPLGNBQVUsQ0FBQzFJLE9BQUQsRUFBVTJFLEtBQVYsRUFBaUJxQyxPQUFqQixFQUEwQm1CLFlBQTFCLEVBQXdDLElBQXhDLENBQVY7QUFDRCxHQVBrQjtBQVNuQmhCLEtBVG1CLGVBU2ZuSCxPQVRlLEVBU05rSSxpQkFUTSxFQVNhbEIsT0FUYixFQVNzQm1CLFlBVHRCLEVBU29DO0FBQ3JELFFBQUksT0FBT0QsaUJBQVAsS0FBNkIsUUFBN0IsSUFBeUMsQ0FBQ2xJLE9BQTlDLEVBQXVEO0FBQ3JEO0FBQ0Q7O0FBRUQsNEJBQWlEaUksZUFBZSxDQUM5REMsaUJBRDhELEVBRTlEbEIsT0FGOEQsRUFHOURtQixZQUg4RCxDQUFoRTtBQUFBO0FBQUEsUUFBT0MsVUFBUDtBQUFBLFFBQW1CSixlQUFuQjtBQUFBLFFBQW9DSyxTQUFwQzs7QUFLQSxRQUFNaUIsV0FBVyxHQUFHakIsU0FBUyxLQUFLSCxpQkFBbEM7QUFDQSxRQUFNUCxNQUFNLEdBQUdiLFFBQVEsQ0FBQzlHLE9BQUQsQ0FBdkI7QUFDQSxRQUFNdUosV0FBVyxHQUFHckIsaUJBQWlCLENBQUNzQixNQUFsQixDQUF5QixDQUF6QixNQUFnQyxHQUFwRDs7QUFFQSxRQUFJLE9BQU94QixlQUFQLEtBQTJCLFdBQS9CLEVBQTRDO0FBQzFDO0FBQ0EsVUFBSSxDQUFDTCxNQUFELElBQVcsQ0FBQ0EsTUFBTSxDQUFDVSxTQUFELENBQXRCLEVBQW1DO0FBQ2pDO0FBQ0Q7O0FBRURTLG1CQUFhLENBQUM5SSxPQUFELEVBQVUySCxNQUFWLEVBQWtCVSxTQUFsQixFQUE2QkwsZUFBN0IsRUFBOENJLFVBQVUsR0FBR3BCLE9BQUgsR0FBYSxJQUFyRSxDQUFiO0FBQ0E7QUFDRDs7QUFFRCxRQUFJdUMsV0FBSixFQUFpQjtBQUNmekIsWUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQVosRUFBb0J0RixPQUFwQixDQUE0QixVQUFDb0gsWUFBRCxFQUFrQjtBQUM1Q1QsZ0NBQXdCLENBQUNoSixPQUFELEVBQVUySCxNQUFWLEVBQWtCOEIsWUFBbEIsRUFBZ0N2QixpQkFBaUIsQ0FBQ2hGLEtBQWxCLENBQXdCLENBQXhCLENBQWhDLENBQXhCO0FBQ0QsT0FGRDtBQUdEOztBQUVELFFBQU1nRyxpQkFBaUIsR0FBR3ZCLE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLElBQXFCLEVBQS9DO0FBQ0FQLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZbUIsaUJBQVosRUFBK0I3RyxPQUEvQixDQUF1QyxVQUFDcUgsV0FBRCxFQUFpQjtBQUN0RCxVQUFNUCxVQUFVLEdBQUdPLFdBQVcsQ0FBQ3BCLE9BQVosQ0FBb0JqQyxhQUFwQixFQUFtQyxFQUFuQyxDQUFuQjs7QUFFQSxVQUFJLENBQUNpRCxXQUFELElBQWdCcEIsaUJBQWlCLENBQUNPLE9BQWxCLENBQTBCVSxVQUExQixJQUF3QyxDQUFDLENBQTdELEVBQWdFO0FBQzlELFlBQU14RSxLQUFLLEdBQUd1RSxpQkFBaUIsQ0FBQ1EsV0FBRCxDQUEvQjtBQUVBWixxQkFBYSxDQUFDOUksT0FBRCxFQUFVMkgsTUFBVixFQUFrQlUsU0FBbEIsRUFBNkIxRCxLQUFLLENBQUNxRCxlQUFuQyxFQUFvRHJELEtBQUssQ0FBQ2lELGtCQUExRCxDQUFiO0FBQ0Q7QUFDRixLQVJEO0FBU0QsR0FqRGtCO0FBbURuQmpFLFNBbkRtQixtQkFtRFgzRCxPQW5EVyxFQW1ERjJFLEtBbkRFLEVBbURLZ0YsSUFuREwsRUFtRFc7QUFDNUIsUUFBSSxPQUFPaEYsS0FBUCxLQUFpQixRQUFqQixJQUE2QixDQUFDM0UsT0FBbEMsRUFBMkM7QUFDekMsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTXFJLFNBQVMsR0FBRzFELEtBQUssQ0FBQzJELE9BQU4sQ0FBY2xDLGNBQWQsRUFBOEIsRUFBOUIsQ0FBbEI7QUFDQSxRQUFNa0QsV0FBVyxHQUFHM0UsS0FBSyxLQUFLMEQsU0FBOUI7QUFDQSxRQUFNRyxRQUFRLEdBQUc3QixZQUFZLENBQUM4QixPQUFiLENBQXFCSixTQUFyQixJQUFrQyxDQUFDLENBQXBEO0FBRUEsUUFBSXVCLFdBQUo7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBLFFBQUlDLGNBQWMsR0FBRyxJQUFyQjtBQUNBLFFBQUkxSCxnQkFBZ0IsR0FBRyxLQUF2QjtBQUNBLFFBQUkySCxHQUFHLEdBQUcsSUFBVjs7QUFFQSxRQUFJVCxXQUFXLElBQUlyRSxDQUFuQixFQUFzQjtBQUNwQjJFLGlCQUFXLEdBQUczRSxDQUFDLENBQUMrRSxLQUFGLENBQVFyRixLQUFSLEVBQWVnRixJQUFmLENBQWQ7QUFFQTFFLE9BQUMsQ0FBQ2pGLE9BQUQsQ0FBRCxDQUFXMkQsT0FBWCxDQUFtQmlHLFdBQW5CO0FBQ0FDLGFBQU8sR0FBRyxDQUFDRCxXQUFXLENBQUNLLG9CQUFaLEVBQVg7QUFDQUgsb0JBQWMsR0FBRyxDQUFDRixXQUFXLENBQUNNLDZCQUFaLEVBQWxCO0FBQ0E5SCxzQkFBZ0IsR0FBR3dILFdBQVcsQ0FBQ08sa0JBQVosRUFBbkI7QUFDRDs7QUFFRCxRQUFJM0IsUUFBSixFQUFjO0FBQ1p1QixTQUFHLEdBQUdyRixRQUFRLENBQUMwRixXQUFULENBQXFCLFlBQXJCLENBQU47QUFDQUwsU0FBRyxDQUFDTSxTQUFKLENBQWNoQyxTQUFkLEVBQXlCd0IsT0FBekIsRUFBa0MsSUFBbEM7QUFDRCxLQUhELE1BR087QUFDTEUsU0FBRyxHQUFHLElBQUlPLFdBQUosQ0FBZ0IzRixLQUFoQixFQUF1QjtBQUMzQmtGLGVBQU8sRUFBUEEsT0FEMkI7QUFFM0JVLGtCQUFVLEVBQUU7QUFGZSxPQUF2QixDQUFOO0FBSUQsS0FoQzJCLENBa0M1Qjs7O0FBQ0EsUUFBSSxPQUFPWixJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CN0IsWUFBTSxDQUFDQyxJQUFQLENBQVk0QixJQUFaLEVBQWtCdEgsT0FBbEIsQ0FBMEIsVUFBQ3NELEdBQUQsRUFBUztBQUNqQ21DLGNBQU0sQ0FBQzBDLGNBQVAsQ0FBc0JULEdBQXRCLEVBQTJCcEUsR0FBM0IsRUFBZ0M7QUFDOUJFLGFBRDhCLGlCQUN4QjtBQUNKLG1CQUFPOEQsSUFBSSxDQUFDaEUsR0FBRCxDQUFYO0FBQ0Q7QUFINkIsU0FBaEM7QUFLRCxPQU5EO0FBT0Q7O0FBRUQsUUFBSXZELGdCQUFKLEVBQXNCO0FBQ3BCMkgsU0FBRyxDQUFDakYsY0FBSjs7QUFFQSxVQUFJLENBQUMyRiw4RUFBTCxFQUEwQztBQUN4QzNDLGNBQU0sQ0FBQzBDLGNBQVAsQ0FBc0JULEdBQXRCLEVBQTJCLGtCQUEzQixFQUErQztBQUM3Q2xFLGFBQUcsRUFBRTtBQUFBLG1CQUFNLElBQU47QUFBQTtBQUR3QyxTQUEvQztBQUdEO0FBQ0Y7O0FBRUQsUUFBSWlFLGNBQUosRUFBb0I7QUFDbEI5SixhQUFPLENBQUMwSyxhQUFSLENBQXNCWCxHQUF0QjtBQUNEOztBQUVELFFBQUlBLEdBQUcsQ0FBQzNILGdCQUFKLElBQXdCLE9BQU93SCxXQUFQLEtBQXVCLFdBQW5ELEVBQWdFO0FBQzlEQSxpQkFBVyxDQUFDOUUsY0FBWjtBQUNEOztBQUVELFdBQU9pRixHQUFQO0FBQ0Q7QUFuSGtCLENBQXJCO0FBc0hBLGlFQUFlNUgsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBQVN3SSxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUMxQixNQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNsQixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJQSxHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQixXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJQSxHQUFHLEtBQUtDLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLFFBQVosRUFBWixFQUFvQztBQUNsQyxXQUFPRCxNQUFNLENBQUNELEdBQUQsQ0FBYjtBQUNEOztBQUVELE1BQUlBLEdBQUcsS0FBSyxFQUFSLElBQWNBLEdBQUcsS0FBSyxNQUExQixFQUFrQztBQUNoQyxXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPQSxHQUFQO0FBQ0Q7O0FBRUQsU0FBU0csZ0JBQVQsQ0FBMEJwRixHQUExQixFQUErQjtBQUM3QixTQUFPQSxHQUFHLENBQUMyQyxPQUFKLENBQVksUUFBWixFQUFzQixVQUFDMEMsR0FBRDtBQUFBLHNCQUFhQSxHQUFHLENBQUNDLFdBQUosRUFBYjtBQUFBLEdBQXRCLENBQVA7QUFDRDs7QUFFRCxJQUFNM0csV0FBVyxHQUFHO0FBQ2xCNEcsa0JBRGtCLDRCQUNEbEwsT0FEQyxFQUNRMkYsR0FEUixFQUNhd0YsS0FEYixFQUNvQjtBQUNwQ25MLFdBQU8sQ0FBQzZDLFlBQVIsZ0JBQTZCa0ksZ0JBQWdCLENBQUNwRixHQUFELENBQTdDLEdBQXNEd0YsS0FBdEQ7QUFDRCxHQUhpQjtBQUtsQkMscUJBTGtCLCtCQUtFcEwsT0FMRixFQUtXMkYsR0FMWCxFQUtnQjtBQUNoQzNGLFdBQU8sQ0FBQ3FMLGVBQVIsZ0JBQWdDTixnQkFBZ0IsQ0FBQ3BGLEdBQUQsQ0FBaEQ7QUFDRCxHQVBpQjtBQVNsQjJGLG1CQVRrQiw2QkFTQXRMLE9BVEEsRUFTUztBQUN6QixRQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLGFBQU8sRUFBUDtBQUNEOztBQUVELFFBQU11TCxVQUFVLHFCQUNYdkwsT0FBTyxDQUFDd0wsT0FERyxDQUFoQjs7QUFJQTFELFVBQU0sQ0FBQ0MsSUFBUCxDQUFZd0QsVUFBWixFQUF3QmxKLE9BQXhCLENBQWdDLFVBQUNzRCxHQUFELEVBQVM7QUFDdkM0RixnQkFBVSxDQUFDNUYsR0FBRCxDQUFWLEdBQWtCZ0YsYUFBYSxDQUFDWSxVQUFVLENBQUM1RixHQUFELENBQVgsQ0FBL0I7QUFDRCxLQUZEO0FBSUEsV0FBTzRGLFVBQVA7QUFDRCxHQXZCaUI7QUF5QmxCRSxrQkF6QmtCLDRCQXlCRHpMLE9BekJDLEVBeUJRMkYsR0F6QlIsRUF5QmE7QUFDN0IsV0FBT2dGLGFBQWEsQ0FBQzNLLE9BQU8sQ0FBQytCLFlBQVIsZ0JBQTZCZ0osZ0JBQWdCLENBQUNwRixHQUFELENBQTdDLEVBQUQsQ0FBcEI7QUFDRCxHQTNCaUI7QUE2QmxCK0YsUUE3QmtCLGtCQTZCWDFMLE9BN0JXLEVBNkJGO0FBQ2QsUUFBTTJMLElBQUksR0FBRzNMLE9BQU8sQ0FBQ3dELHFCQUFSLEVBQWI7QUFFQSxXQUFPO0FBQ0xvSSxTQUFHLEVBQUVELElBQUksQ0FBQ0MsR0FBTCxHQUFXbEgsUUFBUSxDQUFDbUgsSUFBVCxDQUFjQyxTQUR6QjtBQUVMQyxVQUFJLEVBQUVKLElBQUksQ0FBQ0ksSUFBTCxHQUFZckgsUUFBUSxDQUFDbUgsSUFBVCxDQUFjRztBQUYzQixLQUFQO0FBSUQsR0FwQ2lCO0FBc0NsQkMsVUF0Q2tCLG9CQXNDVGpNLE9BdENTLEVBc0NBO0FBQ2hCLFdBQU87QUFDTDRMLFNBQUcsRUFBRTVMLE9BQU8sQ0FBQ2tNLFNBRFI7QUFFTEgsVUFBSSxFQUFFL0wsT0FBTyxDQUFDbU07QUFGVCxLQUFQO0FBSUQsR0EzQ2lCO0FBNkNsQkMsYUE3Q2tCLHVCQTZDTnBNLE9BN0NNLEVBNkNHcU0sU0E3Q0gsRUE2Q2M7QUFDOUIsUUFBSSxDQUFDck0sT0FBTCxFQUFjO0FBQ1o7QUFDRDs7QUFFRCxRQUFJQSxPQUFPLENBQUN5QixTQUFSLENBQWtCQyxRQUFsQixDQUEyQjJLLFNBQTNCLENBQUosRUFBMkM7QUFDekNyTSxhQUFPLENBQUN5QixTQUFSLENBQWtCaUIsTUFBbEIsQ0FBeUIySixTQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMck0sYUFBTyxDQUFDeUIsU0FBUixDQUFrQmtCLEdBQWxCLENBQXNCMEosU0FBdEI7QUFDRDtBQUNGO0FBdkRpQixDQUFwQjtBQTBEQSxpRUFBZS9ILFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQUlnSSxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQmhGLGdCQUE3QjtBQUNBLElBQUlpRixPQUFPLEdBQUdGLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkUsYUFBaEMsQyxDQUVBOztBQUNBLElBQU1qQyxtQ0FBbUMsR0FBSSxZQUFNO0FBQ2pELE1BQU1rQyxDQUFDLEdBQUcsSUFBSXJDLFdBQUosQ0FBZ0IsV0FBaEIsRUFBNkI7QUFDckNDLGNBQVUsRUFBRTtBQUR5QixHQUE3QixDQUFWO0FBSUEsTUFBTXZLLE9BQU8sR0FBRzBFLFFBQVEsQ0FBQ2tJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQTVNLFNBQU8sQ0FBQzZJLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FBdEM7QUFFQThELEdBQUMsQ0FBQzdILGNBQUY7QUFDQTlFLFNBQU8sQ0FBQzBLLGFBQVIsQ0FBc0JpQyxDQUF0QjtBQUNBLFNBQU9BLENBQUMsQ0FBQ3ZLLGdCQUFUO0FBQ0QsQ0FYMkMsRUFBNUM7O0FBYUEsSUFBTXlLLGtCQUFrQixHQUFHLFVBQTNCOztBQUNBLElBQU1DLGlCQUFpQixHQUFJLFlBQU07QUFDL0IsTUFBTTlNLE9BQU8sR0FBRzBFLFFBQVEsQ0FBQ2tJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7O0FBRUEsTUFBSTtBQUNGNU0sV0FBTyxDQUFDd0gsZ0JBQVIsQ0FBeUIsVUFBekI7QUFDRCxHQUZELENBRUUsT0FBT3VGLENBQVAsRUFBVTtBQUNWLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBVnlCLEVBQTFCOztBQVlBLElBQUksQ0FBQ0QsaUJBQUwsRUFBd0I7QUFDdEJSLE1BQUksR0FBRyxjQUFVeEwsUUFBVixFQUFvQjtBQUN6QixRQUFJLENBQUMrTCxrQkFBa0IsQ0FBQ3RJLElBQW5CLENBQXdCekQsUUFBeEIsQ0FBTCxFQUF3QztBQUN0QyxhQUFPLEtBQUswRyxnQkFBTCxDQUFzQjFHLFFBQXRCLENBQVA7QUFDRDs7QUFFRCxRQUFNa00sS0FBSyxHQUFHbEosT0FBTyxDQUFDLEtBQUt0RCxFQUFOLENBQXJCOztBQUVBLFFBQUksQ0FBQ3dNLEtBQUwsRUFBWTtBQUNWLFdBQUt4TSxFQUFMLEdBQVV5TSxzREFBTSxDQUFDLE9BQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFDQSxRQUFJO0FBQ0ZwTSxjQUFRLEdBQUdBLFFBQVEsQ0FBQ3dILE9BQVQsQ0FBaUJ1RSxrQkFBakIsYUFBeUMsS0FBS3JNLEVBQTlDLEVBQVg7QUFDQTBNLGNBQVEsR0FBRyxLQUFLMUYsZ0JBQUwsQ0FBc0IxRyxRQUF0QixDQUFYO0FBQ0QsS0FIRCxTQUdVO0FBQ1IsVUFBSSxDQUFDa00sS0FBTCxFQUFZO0FBQ1YsYUFBSzNCLGVBQUwsQ0FBcUIsSUFBckI7QUFDRDtBQUNGOztBQUVELFdBQU82QixRQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBVCxTQUFPLEdBQUcsaUJBQVUzTCxRQUFWLEVBQW9CO0FBQzVCLFFBQUksQ0FBQytMLGtCQUFrQixDQUFDdEksSUFBbkIsQ0FBd0J6RCxRQUF4QixDQUFMLEVBQXdDO0FBQ3RDLGFBQU8sS0FBSzRMLGFBQUwsQ0FBbUI1TCxRQUFuQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTXFNLE9BQU8sR0FBR2IsSUFBSSxDQUFDYyxJQUFMLENBQVUsSUFBVixFQUFnQnRNLFFBQWhCLENBQWhCOztBQUVBLFFBQUksT0FBT3FNLE9BQU8sQ0FBQyxDQUFELENBQWQsS0FBc0IsV0FBMUIsRUFBdUM7QUFDckMsYUFBT0EsT0FBTyxDQUFDLENBQUQsQ0FBZDtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBWkQ7QUFhRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLENBQWxCO0FBRUEsSUFBTTlNLGNBQWMsR0FBRztBQUNyQjRNLFNBRHFCLG1CQUNibk4sT0FEYSxFQUNKYyxRQURJLEVBQ007QUFDekIsV0FBT2QsT0FBTyxDQUFDbU4sT0FBUixDQUFnQnJNLFFBQWhCLENBQVA7QUFDRCxHQUhvQjtBQUtyQndMLE1BTHFCLGdCQUtoQnhMLFFBTGdCLEVBSzhCO0FBQUE7O0FBQUEsUUFBcENkLE9BQW9DLHVFQUExQjBFLFFBQVEsQ0FBQzRJLGVBQWlCO0FBQ2pELFdBQU8sWUFBR0MsTUFBSCxnQ0FBYUMsb0RBQUEsQ0FBWXhOLE9BQVosRUFBcUJjLFFBQXJCLENBQWIsRUFBUDtBQUNELEdBUG9CO0FBU3JCMkwsU0FUcUIsbUJBU2IzTCxRQVRhLEVBU2lDO0FBQUEsUUFBcENkLE9BQW9DLHVFQUExQjBFLFFBQVEsQ0FBQzRJLGVBQWlCO0FBQ3BELFdBQU9iLHVEQUFBLENBQWF6TSxPQUFiLEVBQXNCYyxRQUF0QixDQUFQO0FBQ0QsR0FYb0I7QUFhckIyTSxVQWJxQixvQkFhWnpOLE9BYlksRUFhSGMsUUFiRyxFQWFPO0FBQUE7O0FBQzFCLFFBQU0yTSxRQUFRLEdBQUcsYUFBR0YsTUFBSCxpQ0FBYXZOLE9BQU8sQ0FBQ3lOLFFBQXJCLEVBQWpCOztBQUVBLFdBQU9BLFFBQVEsQ0FBQ3hNLE1BQVQsQ0FBZ0IsVUFBQ3lNLEtBQUQ7QUFBQSxhQUFXQSxLQUFLLENBQUNQLE9BQU4sQ0FBY3JNLFFBQWQsQ0FBWDtBQUFBLEtBQWhCLENBQVA7QUFDRCxHQWpCb0I7QUFtQnJCNk0sU0FuQnFCLG1CQW1CYjNOLE9BbkJhLEVBbUJKYyxRQW5CSSxFQW1CTTtBQUN6QixRQUFNNk0sT0FBTyxHQUFHLEVBQWhCO0FBRUEsUUFBSUMsUUFBUSxHQUFHNU4sT0FBTyxDQUFDeUgsVUFBdkI7O0FBRUEsV0FBT21HLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxRQUFULEtBQXNCQyxJQUFJLENBQUNDLFlBQXZDLElBQXVESCxRQUFRLENBQUNDLFFBQVQsS0FBc0JSLFNBQXBGLEVBQStGO0FBQzdGLFVBQUksS0FBS0YsT0FBTCxDQUFhUyxRQUFiLEVBQXVCOU0sUUFBdkIsQ0FBSixFQUFzQztBQUNwQzZNLGVBQU8sQ0FBQ3ZNLElBQVIsQ0FBYXdNLFFBQWI7QUFDRDs7QUFFREEsY0FBUSxHQUFHQSxRQUFRLENBQUNuRyxVQUFwQjtBQUNEOztBQUVELFdBQU9rRyxPQUFQO0FBQ0QsR0FqQ29CO0FBbUNyQkssTUFuQ3FCLGdCQW1DaEJoTyxPQW5DZ0IsRUFtQ1BjLFFBbkNPLEVBbUNHO0FBQ3RCLFFBQUltTixRQUFRLEdBQUdqTyxPQUFPLENBQUNrTyxzQkFBdkI7O0FBRUEsV0FBT0QsUUFBUCxFQUFpQjtBQUNmLFVBQUlBLFFBQVEsQ0FBQ2QsT0FBVCxDQUFpQnJNLFFBQWpCLENBQUosRUFBZ0M7QUFDOUIsZUFBTyxDQUFDbU4sUUFBRCxDQUFQO0FBQ0Q7O0FBRURBLGNBQVEsR0FBR0EsUUFBUSxDQUFDQyxzQkFBcEI7QUFDRDs7QUFFRCxXQUFPLEVBQVA7QUFDRCxHQS9Db0I7QUFpRHJCQyxNQWpEcUIsZ0JBaURoQm5PLE9BakRnQixFQWlEUGMsUUFqRE8sRUFpREc7QUFDdEIsUUFBSXFOLElBQUksR0FBR25PLE9BQU8sQ0FBQ29PLGtCQUFuQjs7QUFFQSxXQUFPRCxJQUFQLEVBQWE7QUFDWCxVQUFJLEtBQUtoQixPQUFMLENBQWFnQixJQUFiLEVBQW1Cck4sUUFBbkIsQ0FBSixFQUFrQztBQUNoQyxlQUFPLENBQUNxTixJQUFELENBQVA7QUFDRDs7QUFFREEsVUFBSSxHQUFHQSxJQUFJLENBQUNDLGtCQUFaO0FBQ0Q7O0FBRUQsV0FBTyxFQUFQO0FBQ0Q7QUE3RG9CLENBQXZCO0FBZ0VBLGlFQUFlN04sY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNOE4sT0FBTyxHQUFHLE9BQWhCO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcsSUFBaEM7QUFDQSxJQUFNaEwsY0FBYyxHQUFHLGVBQXZCLEMsQ0FFQTs7QUFDQSxJQUFNaUwsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCLE1BQUlBLEdBQUcsS0FBSyxJQUFSLElBQWdCQSxHQUFHLEtBQUtDLFNBQTVCLEVBQXVDO0FBQ3JDLHFCQUFVRCxHQUFWO0FBQ0Q7O0FBRUQsU0FBTyxHQUFHMUQsUUFBSCxDQUNKc0MsSUFESSxDQUNDb0IsR0FERCxFQUVKRSxLQUZJLENBRUUsYUFGRixFQUVpQixDQUZqQixFQUdKekQsV0FISSxFQUFQO0FBSUQsQ0FURDtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1nQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDMEIsTUFBRCxFQUFZO0FBQ3pCLEtBQUc7QUFDREEsVUFBTSxJQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCVCxPQUEzQixDQUFWO0FBQ0QsR0FGRCxRQUVTM0osUUFBUSxDQUFDcUssY0FBVCxDQUF3QkosTUFBeEIsQ0FGVDs7QUFJQSxTQUFPQSxNQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDaFAsT0FBRCxFQUFhO0FBQy9CLE1BQUljLFFBQVEsR0FBR2QsT0FBTyxDQUFDK0IsWUFBUixDQUFxQixhQUFyQixDQUFmOztBQUVBLE1BQUksQ0FBQ2pCLFFBQUQsSUFBYUEsUUFBUSxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDLFFBQU1tTyxRQUFRLEdBQUdqUCxPQUFPLENBQUMrQixZQUFSLENBQXFCLE1BQXJCLENBQWpCO0FBRUFqQixZQUFRLEdBQUdtTyxRQUFRLElBQUlBLFFBQVEsS0FBSyxHQUF6QixHQUErQkEsUUFBUSxDQUFDQyxJQUFULEVBQS9CLEdBQWlELElBQTVEO0FBQ0Q7O0FBRUQsU0FBT3BPLFFBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ2YsT0FBRCxFQUFhO0FBQzFDLE1BQU1jLFFBQVEsR0FBR2tPLFdBQVcsQ0FBQ2hQLE9BQUQsQ0FBNUI7O0FBRUEsTUFBSWMsUUFBSixFQUFjO0FBQ1osV0FBTzRELFFBQVEsQ0FBQ2dJLGFBQVQsQ0FBdUI1TCxRQUF2QixJQUFtQ0EsUUFBbkMsR0FBOEMsSUFBckQ7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVJEOztBQVVBLElBQU04QyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUM1RCxPQUFELEVBQWE7QUFDMUMsTUFBTWMsUUFBUSxHQUFHa08sV0FBVyxDQUFDaFAsT0FBRCxDQUE1QjtBQUVBLFNBQU9jLFFBQVEsR0FBRzRELFFBQVEsQ0FBQ2dJLGFBQVQsQ0FBdUI1TCxRQUF2QixDQUFILEdBQXNDLElBQXJEO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNdUMsZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFtQyxDQUFDckQsT0FBRCxFQUFhO0FBQ3BELE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBTyxDQUFQO0FBQ0QsR0FIbUQsQ0FLcEQ7OztBQUNBLDhCQUE4Q21QLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JwUCxPQUF4QixDQUE5QztBQUFBLE1BQU1vRCxrQkFBTix5QkFBTUEsa0JBQU47QUFBQSxNQUEwQmlNLGVBQTFCLHlCQUEwQkEsZUFBMUI7O0FBRUEsTUFBTUMsdUJBQXVCLEdBQUdDLFVBQVUsQ0FBQ25NLGtCQUFELENBQTFDO0FBQ0EsTUFBTW9NLG9CQUFvQixHQUFHRCxVQUFVLENBQUNGLGVBQUQsQ0FBdkMsQ0FUb0QsQ0FXcEQ7O0FBQ0EsTUFBSSxDQUFDQyx1QkFBRCxJQUE0QixDQUFDRSxvQkFBakMsRUFBdUQ7QUFDckQsV0FBTyxDQUFQO0FBQ0QsR0FkbUQsQ0FnQnBEOzs7QUFDQXBNLG9CQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ3FNLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCLENBQTlCLENBQXJCO0FBQ0FKLGlCQUFlLEdBQUdBLGVBQWUsQ0FBQ0ksS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsQ0FBbEI7QUFFQSxTQUFPLENBQUNGLFVBQVUsQ0FBQ25NLGtCQUFELENBQVYsR0FBaUNtTSxVQUFVLENBQUNGLGVBQUQsQ0FBNUMsSUFBaUVmLHVCQUF4RTtBQUNELENBckJEOztBQXVCQSxJQUFNb0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDMVAsT0FBRCxFQUFhO0FBQ3hDQSxTQUFPLENBQUMwSyxhQUFSLENBQXNCLElBQUlWLEtBQUosQ0FBVTFHLGNBQVYsQ0FBdEI7QUFDRCxDQUZEOztBQUlBLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN3SyxHQUFEO0FBQUEsU0FBUyxDQUFDQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVBLEdBQVgsRUFBZ0JYLFFBQXpCO0FBQUEsQ0FBbEI7O0FBRUEsSUFBTXRLLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ3ZELE9BQUQsRUFBVTJQLFFBQVYsRUFBdUI7QUFDbEQsTUFBSUMsTUFBTSxHQUFHLEtBQWI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsQ0FBeEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0gsUUFBUSxHQUFHRSxlQUFwQzs7QUFDQSxXQUFTRSxRQUFULEdBQW9CO0FBQ2xCSCxVQUFNLEdBQUcsSUFBVDtBQUNBNVAsV0FBTyxDQUFDK0ksbUJBQVIsQ0FBNEJ6RixjQUE1QixFQUE0Q3lNLFFBQTVDO0FBQ0Q7O0FBRUQvUCxTQUFPLENBQUM2SSxnQkFBUixDQUF5QnZGLGNBQXpCLEVBQXlDeU0sUUFBekM7QUFDQUMsWUFBVSxDQUFDLFlBQU07QUFDZixRQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNYRiwwQkFBb0IsQ0FBQzFQLE9BQUQsQ0FBcEI7QUFDRDtBQUNGLEdBSlMsRUFJUDhQLGdCQUpPLENBQVY7QUFLRCxDQWZEOztBQWlCQSxJQUFNL0wsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDa00sYUFBRCxFQUFnQmhRLE1BQWhCLEVBQXdCaVEsV0FBeEIsRUFBd0M7QUFDOURwSSxRQUFNLENBQUNDLElBQVAsQ0FBWW1JLFdBQVosRUFBeUI3TixPQUF6QixDQUFpQyxVQUFDOE4sUUFBRCxFQUFjO0FBQzdDLFFBQU1DLGFBQWEsR0FBR0YsV0FBVyxDQUFDQyxRQUFELENBQWpDO0FBQ0EsUUFBTWhGLEtBQUssR0FBR2xMLE1BQU0sQ0FBQ2tRLFFBQUQsQ0FBcEI7QUFDQSxRQUFNRSxTQUFTLEdBQUdsRixLQUFLLElBQUluSCxTQUFTLENBQUNtSCxLQUFELENBQWxCLEdBQTRCLFNBQTVCLEdBQXdDb0QsTUFBTSxDQUFDcEQsS0FBRCxDQUFoRTs7QUFFQSxRQUFJLENBQUMsSUFBSW1GLE1BQUosQ0FBV0YsYUFBWCxFQUEwQjdMLElBQTFCLENBQStCOEwsU0FBL0IsQ0FBTCxFQUFnRDtBQUM5QyxZQUFNLElBQUlFLEtBQUosQ0FDSixVQUFHTixhQUFhLENBQUNoTixXQUFkLEVBQUgsNkJBQ2FrTixRQURiLGdDQUN5Q0UsU0FEekMseUNBRXdCRCxhQUZ4QixRQURJLENBQU47QUFLRDtBQUNGLEdBWkQ7QUFhRCxDQWREOztBQWdCQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDeFEsT0FBRCxFQUFhO0FBQzdCLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsT0FBTyxDQUFDNEMsS0FBUixJQUFpQjVDLE9BQU8sQ0FBQ3lILFVBQXpCLElBQXVDekgsT0FBTyxDQUFDeUgsVUFBUixDQUFtQjdFLEtBQTlELEVBQXFFO0FBQ25FLFFBQU02TixZQUFZLEdBQUdyQixnQkFBZ0IsQ0FBQ3BQLE9BQUQsQ0FBckM7QUFDQSxRQUFNMFEsZUFBZSxHQUFHdEIsZ0JBQWdCLENBQUNwUCxPQUFPLENBQUN5SCxVQUFULENBQXhDO0FBRUEsV0FDRWdKLFlBQVksQ0FBQ0UsT0FBYixLQUF5QixNQUF6QixJQUNBRCxlQUFlLENBQUNDLE9BQWhCLEtBQTRCLE1BRDVCLElBRUFGLFlBQVksQ0FBQ0csVUFBYixLQUE0QixRQUg5QjtBQUtEOztBQUVELFNBQU8sS0FBUDtBQUNELENBakJEOztBQW1CQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUM3USxPQUFELEVBQWE7QUFDbEMsTUFBSSxDQUFDMEUsUUFBUSxDQUFDNEksZUFBVCxDQUF5QndELFlBQTlCLEVBQTRDO0FBQzFDLFdBQU8sSUFBUDtBQUNELEdBSGlDLENBS2xDOzs7QUFDQSxNQUFJLE9BQU85USxPQUFPLENBQUMrUSxXQUFmLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDLFFBQU1DLElBQUksR0FBR2hSLE9BQU8sQ0FBQytRLFdBQVIsRUFBYjtBQUNBLFdBQU9DLElBQUksWUFBWUMsVUFBaEIsR0FBNkJELElBQTdCLEdBQW9DLElBQTNDO0FBQ0Q7O0FBRUQsTUFBSWhSLE9BQU8sWUFBWWlSLFVBQXZCLEVBQW1DO0FBQ2pDLFdBQU9qUixPQUFQO0FBQ0QsR0FiaUMsQ0FlbEM7OztBQUNBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDeUgsVUFBYixFQUF5QjtBQUN2QixXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPb0osY0FBYyxDQUFDN1EsT0FBTyxDQUFDeUgsVUFBVCxDQUFyQjtBQUNELENBckJEOztBQXVCQSxJQUFNeUosSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUFNLFlBQVksQ0FBRSxDQUFwQjtBQUFBLENBQWI7O0FBRUEsSUFBTXpOLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUN6RCxPQUFEO0FBQUEsU0FBYUEsT0FBTyxDQUFDbVIsWUFBckI7QUFBQSxDQUFmOztBQUVBLElBQU1qTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLGdCQUFtQmlLLE1BQW5CO0FBQUEsTUFBUWlDLE1BQVIsV0FBUUEsTUFBUjs7QUFFQSxNQUFJQSxNQUFNLElBQUksQ0FBQzFNLFFBQVEsQ0FBQ21ILElBQVQsQ0FBY3dGLFlBQWQsQ0FBMkIsZ0JBQTNCLENBQWYsRUFBNkQ7QUFDM0QsV0FBT0QsTUFBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU0zUyxJQUFJLEdBQUcsUUFBYjtBQUNBLElBQU1FLFFBQVEsR0FBRyxZQUFqQjtBQUNBLElBQU0yUyxnQkFBZ0IsR0FBRyxnQkFBekI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxhQUE5QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLENBQUMsTUFBRCxFQUFTLFNBQVQsQ0FBM0I7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyx3QkFBMUI7QUFDQSxJQUFNQyxRQUFRLEdBQ1osOEhBREY7QUFFQSxJQUFNQyxvQkFBb0IsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUE3QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLENBQ3ZCLFNBRHVCLEVBRXZCLFdBRnVCLEVBR3ZCLFNBSHVCLEVBSXZCLFFBSnVCLEVBS3ZCLFNBTHVCLEVBTXZCLE1BTnVCLEVBT3ZCLE9BUHVCLEVBUXZCLE1BUnVCLENBQXpCLEMsQ0FXQTtBQUNBOztBQUNBLElBQU1DLHdCQUF3QixHQUFHLEdBQWpDO0FBRUEsSUFBTS9TLE9BQU8sR0FBRztBQUNkZ1QsZ0JBQWMsRUFBRSxLQURGO0FBRWRDLGFBQVcsRUFBRSxFQUZDO0FBR2RDLGdCQUFjLEVBQUUsT0FIRjtBQUlkQyxjQUFZLEVBQUUsQ0FKQTtBQUtkQyxlQUFhLEVBQUU7QUFMRCxDQUFoQjtBQVFBLElBQU1qVCxXQUFXLEdBQUc7QUFDbEI2UyxnQkFBYyxFQUFFLFNBREU7QUFFbEJDLGFBQVcsRUFBRSxRQUZLO0FBR2xCQyxnQkFBYyxFQUFFLFFBSEU7QUFJbEJDLGNBQVksRUFBRSxRQUpJO0FBS2xCQyxlQUFhLEVBQUU7QUFMRyxDQUFwQjtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLE07QUFDSixrQkFBWW5TLE9BQVosRUFBcUJvUyxPQUFyQixFQUE4QjtBQUFBOztBQUM1QixTQUFLalMsUUFBTCxHQUFnQkgsT0FBaEI7QUFDQSxTQUFLcVMsUUFBTCxHQUFnQixLQUFLaFMsVUFBTCxDQUFnQitSLE9BQWhCLENBQWhCOztBQUNBLFFBQUksS0FBS2pTLFFBQVQsRUFBbUI7QUFDakJxQixvRUFBQSxDQUFheEIsT0FBYixFQUFzQnJCLFFBQXRCLEVBQWdDLElBQWhDO0FBQ0EyRiw0RUFBQSxDQUFxQixLQUFLbkUsUUFBMUIsRUFBb0NtUixnQkFBcEM7QUFDRDs7QUFFRCxTQUFLZ0IsYUFBTCxHQUFxQixLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUVBLFNBQUtDLElBQUw7QUFDRCxHLENBRUQ7Ozs7O1dBTUE7QUFFQSxvQkFBTztBQUNMLFdBQUtDLGNBQUwsQ0FBb0IsS0FBS3ZTLFFBQXpCO0FBQ0Q7OztXQUVELG1CQUFVO0FBQ1JxQix1RUFBQSxDQUFnQixLQUFLckIsUUFBckIsRUFBK0J4QixRQUEvQjtBQUNBd0QsbUZBQUEsQ0FBaUIsS0FBS2hDLFFBQXRCLEVBQWdDLE9BQWhDLEVBQXlDLEtBQUttUyxhQUE5QztBQUNBLFdBQUtuUyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBS2tTLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRCxLLENBRUQ7Ozs7V0FFQSxtQkFBVTFOLEtBQVYsRUFBaUI7QUFBQTs7QUFDZjZNLHdCQUFrQixDQUFDblAsT0FBbkIsQ0FBMkIsVUFBQ3ZCLFFBQUQsRUFBYztBQUN2QyxZQUFNOEQsTUFBTSxHQUFHckUseUVBQUEsQ0FBdUJvRSxLQUFLLENBQUNDLE1BQTdCLEVBQXFDOUQsUUFBckMsQ0FBZjs7QUFDQSxZQUFJOEQsTUFBSixFQUFZO0FBQ1YsZUFBSSxDQUFDekUsUUFBTCxHQUFnQkkseUVBQUEsQ0FBdUJvRSxLQUFLLENBQUNDLE1BQTdCLEVBQXFDOUQsUUFBckMsQ0FBaEI7QUFDRDtBQUNGLE9BTEQ7QUFNQXdELDRFQUFBLENBQXFCLEtBQUtuRSxRQUExQixFQUFvQ21SLGdCQUFwQztBQUNBLFdBQUtlLFFBQUwsR0FBZ0IsS0FBS2hTLFVBQUwsRUFBaEI7O0FBQ0EsV0FBS2tTLGFBQUwsQ0FBbUI1TixLQUFuQjtBQUNEOzs7V0FFRCx3QkFBZUMsTUFBZixFQUF1QjtBQUNyQnpDLGtGQUFBLENBQWdCeUMsTUFBaEIsRUFBd0IsT0FBeEIsRUFBaUMsS0FBSzBOLGFBQXRDO0FBQ0Q7OztXQUVELHVCQUFjM04sS0FBZCxFQUFxQjtBQUNuQixVQUFRZ08sTUFBUixHQUEyQmhPLEtBQTNCLENBQVFnTyxNQUFSO0FBQUEsVUFBZ0JDLE1BQWhCLEdBQTJCak8sS0FBM0IsQ0FBZ0JpTyxNQUFoQjtBQUNBLFVBQU1DLE9BQU8sR0FBR0YsTUFBaEI7QUFDQSxVQUFNRyxPQUFPLEdBQUdGLE1BQWhCO0FBQ0EsVUFBTUcsTUFBTSxHQUFHLEtBQUs1UyxRQUFMLENBQWNnUixZQUE3QjtBQUNBLFVBQU02QixLQUFLLEdBQUcsS0FBSzdTLFFBQUwsQ0FBYzhTLFdBQTVCOztBQUNBLFVBQU10RCxRQUFRLEdBQUcsS0FBS3VELG1CQUFMLENBQXlCLEtBQUtiLFFBQUwsQ0FBY0wsY0FBdkMsQ0FBakI7O0FBQ0EsVUFBTW1CLGVBQWUsR0FBRztBQUN0Qk4sZUFBTyxFQUFFLEtBQUtSLFFBQUwsQ0FBY1AsY0FBZCxHQUErQmlCLE1BQU0sR0FBRyxDQUF4QyxHQUE0Q0YsT0FEL0I7QUFFdEJDLGVBQU8sRUFBRSxLQUFLVCxRQUFMLENBQWNQLGNBQWQsR0FBK0JrQixLQUFLLEdBQUcsQ0FBdkMsR0FBMkNGLE9BRjlCO0FBR3RCQyxjQUFNLEVBQU5BLE1BSHNCO0FBSXRCQyxhQUFLLEVBQUxBO0FBSnNCLE9BQXhCOztBQU1BLFVBQU1JLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCRixlQUFsQixDQUFqQjs7QUFDQSxVQUFNRyxXQUFXLEdBQUcsS0FBS2pCLFFBQUwsQ0FBY0osWUFBZCxJQUE4Qm1CLFFBQVEsR0FBRyxDQUE3RDtBQUVBLFVBQU1HLE9BQU8sR0FBRztBQUNkQyxhQUFLLEVBQUU3RCxRQUFRLEdBQUdrQyx3QkFESjtBQUVkbEMsZ0JBQVEsRUFBRUEsUUFBUSxHQUFHQSxRQUFRLEdBQUdrQztBQUZsQixPQUFoQjtBQUtBLFVBQU00QixNQUFNLEdBQUc7QUFDYjFILFlBQUksRUFBRSxLQUFLc0csUUFBTCxDQUFjUCxjQUFkLGFBQ0NrQixLQUFLLEdBQUcsQ0FBUixHQUFZTSxXQURiLG9CQUVDVCxPQUFPLEdBQUdTLFdBRlgsT0FETztBQUliMUgsV0FBRyxFQUFFLEtBQUt5RyxRQUFMLENBQWNQLGNBQWQsYUFDRWlCLE1BQU0sR0FBRyxDQUFULEdBQWFPLFdBRGYsb0JBRUVSLE9BQU8sR0FBR1EsV0FGWixPQUpRO0FBT2JQLGNBQU0sWUFBSyxLQUFLVixRQUFMLENBQWNKLFlBQWQsR0FBNkIsQ0FBN0IsSUFBa0NtQixRQUF2QyxPQVBPO0FBUWJKLGFBQUssWUFBSyxLQUFLWCxRQUFMLENBQWNKLFlBQWQsR0FBNkIsQ0FBN0IsSUFBa0NtQixRQUF2QyxPQVJRO0FBU2IvRCx1QkFBZSxnQkFBU2tFLE9BQU8sQ0FBQ0MsS0FBakIsT0FURjtBQVVicFEsMEJBQWtCLFlBQUt1TSxRQUFMLGlCQUFvQjRELE9BQU8sQ0FBQzVELFFBQTVCO0FBVkwsT0FBZjtBQWFBLFVBQU0rRCxVQUFVLEdBQUcxVCw0REFBTyxDQUFDLEtBQUQsQ0FBMUI7O0FBRUEsV0FBSzJULGlCQUFMLENBQXVCO0FBQUVDLGVBQU8sRUFBRSxLQUFLelQsUUFBaEI7QUFBMEIwVCxjQUFNLEVBQUVILFVBQWxDO0FBQThDRCxjQUFNLEVBQU5BO0FBQTlDLE9BQXZCOztBQUNBLFdBQUtLLGlCQUFMLENBQXVCO0FBQUVELGNBQU0sRUFBRUgsVUFBVjtBQUFzQi9ELGdCQUFRLEVBQVJBO0FBQXRCLE9BQXZCO0FBQ0Q7OztXQUVELGlDQUErQztBQUFBLFVBQTNCaUUsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsVUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLFVBQVZKLE1BQVUsUUFBVkEsTUFBVTtBQUM3QzNMLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZMEwsTUFBWixFQUFvQnBSLE9BQXBCLENBQTRCLFVBQUM4TixRQUFEO0FBQUEsZUFBZTBELE1BQU0sQ0FBQ2pSLEtBQVAsQ0FBYXVOLFFBQWIsSUFBeUJzRCxNQUFNLENBQUN0RCxRQUFELENBQTlDO0FBQUEsT0FBNUI7QUFDQTBELFlBQU0sQ0FBQ3BTLFNBQVAsQ0FBaUJrQixHQUFqQixDQUFxQjRPLHFCQUFyQjs7QUFDQSxVQUFJLEtBQUtjLFFBQUwsQ0FBY04sV0FBZCxLQUE4QixFQUFsQyxFQUFzQztBQUNwQyxhQUFLZ0Msc0JBQUwsQ0FBNEJILE9BQTVCOztBQUNBLGFBQUtJLFNBQUwsQ0FBZUgsTUFBZixFQUF1QkQsT0FBdkI7QUFDRDs7QUFFRCxXQUFLSyxjQUFMLENBQW9CTCxPQUFwQjs7QUFDQSxXQUFLTSxhQUFMLENBQW1CTCxNQUFuQixFQUEyQkQsT0FBM0I7QUFDRDs7O1dBRUQsa0NBQXdDO0FBQUEsVUFBcEJDLE1BQW9CLFNBQXBCQSxNQUFvQjtBQUFBLFVBQVpsRSxRQUFZLFNBQVpBLFFBQVk7QUFDdENLLGdCQUFVLENBQUMsWUFBTTtBQUNmLFlBQUk2RCxNQUFKLEVBQVk7QUFDVkEsZ0JBQU0sQ0FBQ25SLE1BQVA7QUFDRDtBQUNGLE9BSlMsRUFJUGlOLFFBSk8sQ0FBVjtBQUtEOzs7V0FFRCw2QkFBb0J3RSxJQUFwQixFQUEwQjtBQUN4QixhQUFPdEosTUFBTSxDQUFDc0osSUFBSSxDQUFDN0wsT0FBTCxDQUFhLElBQWIsRUFBbUIsRUFBbkIsRUFBdUJBLE9BQXZCLENBQStCLEdBQS9CLEVBQW9DLEtBQXBDLENBQUQsQ0FBYjtBQUNEOzs7V0FFRCxzQkFBd0I7QUFBQSxVQUFickksTUFBYSx1RUFBSixFQUFJO0FBQ3RCLFVBQU1tVSxjQUFjLEdBQUc5UCwrRUFBQSxDQUE4QixLQUFLbkUsUUFBbkMsQ0FBdkI7QUFFQUYsWUFBTSxpREFDRG5CLE9BREMsR0FFRHNWLGNBRkMsR0FHRG5VLE1BSEMsQ0FBTjtBQU1BOEQsMEVBQWUsQ0FBQ3RGLElBQUQsRUFBT3dCLE1BQVAsRUFBZWhCLFdBQWYsQ0FBZjtBQUNBLGFBQU9nQixNQUFQO0FBQ0Q7OztXQUVELDZCQUFrRDtBQUFBLFVBQW5DNFMsT0FBbUMsU0FBbkNBLE9BQW1DO0FBQUEsVUFBMUJDLE9BQTBCLFNBQTFCQSxPQUEwQjtBQUFBLFVBQWpCQyxNQUFpQixTQUFqQkEsTUFBaUI7QUFBQSxVQUFUQyxLQUFTLFNBQVRBLEtBQVM7QUFDaEQsVUFBTXBILEdBQUcsR0FBR2tILE9BQU8sSUFBSUMsTUFBTSxHQUFHLENBQWhDO0FBQ0EsVUFBTWhILElBQUksR0FBRzhHLE9BQU8sSUFBSUcsS0FBSyxHQUFHLENBQWhDOztBQUNBLFVBQU1xQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUFrQjNGLElBQUksQ0FBQzRGLElBQUwsQ0FBVSxTQUFBRixLQUFLLEVBQUksQ0FBSixDQUFMLFlBQWFDLEtBQWIsRUFBc0IsQ0FBdEIsQ0FBVixDQUFsQjtBQUFBLE9BQXBCOztBQUVBLFVBQU1FLGNBQWMsR0FBRzNCLE9BQU8sS0FBS0MsTUFBTSxHQUFHLENBQXJCLElBQTBCRixPQUFPLEtBQUtHLEtBQUssR0FBRyxDQUFyRSxDQUxnRCxDQU1oRDs7QUFDQSxVQUFNMEIsUUFBUSxHQUFHO0FBQ2ZDLGFBQUssRUFBRS9JLEdBQUcsS0FBSyxJQUFSLElBQWdCRyxJQUFJLEtBQUssS0FEakI7QUFFZjZJLGNBQU0sRUFBRWhKLEdBQUcsS0FBSyxJQUFSLElBQWdCRyxJQUFJLEtBQUssSUFGbEI7QUFHZjhJLGFBQUssRUFBRWpKLEdBQUcsS0FBSyxLQUFSLElBQWlCRyxJQUFJLEtBQUssSUFIbEI7QUFJZitJLGNBQU0sRUFBRWxKLEdBQUcsS0FBSyxLQUFSLElBQWlCRyxJQUFJLEtBQUs7QUFKbkIsT0FBakI7QUFPQSxVQUFNZ0osU0FBUyxHQUFHO0FBQ2hCQyxlQUFPLEVBQUVYLFdBQVcsQ0FBQ3hCLE9BQUQsRUFBVUMsT0FBVixDQURKO0FBRWhCbUMsZ0JBQVEsRUFBRVosV0FBVyxDQUFDckIsS0FBSyxHQUFHSCxPQUFULEVBQWtCQyxPQUFsQixDQUZMO0FBR2hCb0Msa0JBQVUsRUFBRWIsV0FBVyxDQUFDeEIsT0FBRCxFQUFVRSxNQUFNLEdBQUdELE9BQW5CLENBSFA7QUFJaEJxQyxtQkFBVyxFQUFFZCxXQUFXLENBQUNyQixLQUFLLEdBQUdILE9BQVQsRUFBa0JFLE1BQU0sR0FBR0QsT0FBM0I7QUFKUixPQUFsQjtBQU9BLFVBQUlNLFFBQVEsR0FBRyxDQUFmOztBQUVBLFVBQUlxQixjQUFjLElBQUlDLFFBQVEsQ0FBQ0ksTUFBL0IsRUFBdUM7QUFDckMxQixnQkFBUSxHQUFHMkIsU0FBUyxDQUFDQyxPQUFyQjtBQUNELE9BRkQsTUFFTyxJQUFJTixRQUFRLENBQUNHLEtBQWIsRUFBb0I7QUFDekJ6QixnQkFBUSxHQUFHMkIsU0FBUyxDQUFDRSxRQUFyQjtBQUNELE9BRk0sTUFFQSxJQUFJUCxRQUFRLENBQUNFLE1BQWIsRUFBcUI7QUFDMUJ4QixnQkFBUSxHQUFHMkIsU0FBUyxDQUFDSSxXQUFyQjtBQUNELE9BRk0sTUFFQSxJQUFJVCxRQUFRLENBQUNDLEtBQWIsRUFBb0I7QUFDekJ2QixnQkFBUSxHQUFHMkIsU0FBUyxDQUFDRyxVQUFyQjtBQUNEOztBQUNELGFBQU85QixRQUFRLEdBQUcsQ0FBbEI7QUFDRDs7O1dBRUQsdUJBQWN4TyxNQUFkLEVBQXNCNUYsTUFBdEIsRUFBOEI7QUFDNUIsVUFBTW9XLHFCQUFxQixHQUFHLEVBQTlCLENBRDRCLENBQ007O0FBQ2xDcFcsWUFBTSxDQUFDcVcsV0FBUCxDQUFtQnpRLE1BQW5CO0FBQ0FvTCxnQkFBVSxDQUFDLFlBQU07QUFDZjFMLDhFQUFBLENBQXFCTSxNQUFyQixFQUE2QixRQUE3QjtBQUNELE9BRlMsRUFFUHdRLHFCQUZPLENBQVY7QUFHRDs7O1dBRUQsd0JBQWV4USxNQUFmLEVBQXVCO0FBQ3JCLFVBQUksS0FBS3lOLFFBQUwsQ0FBY0gsYUFBZCxLQUFnQyxJQUFwQyxFQUEwQztBQUN4QzVOLDhFQUFBLENBQXFCTSxNQUFyQixFQUE2QjZNLGlCQUE3QjtBQUNELE9BRkQsTUFFTztBQUNMN00sY0FBTSxDQUFDbkQsU0FBUCxDQUFpQmlCLE1BQWpCLENBQXdCK08saUJBQXhCO0FBQ0Q7QUFDRjs7O1dBRUQsbUJBQVU3TSxNQUFWLEVBQWtCNUYsTUFBbEIsRUFBMEI7QUFBQTs7QUFDeEIsVUFBTXNXLGtCQUFrQixHQUFHMUQsZ0JBQWdCLENBQUN0RixJQUFqQixDQUN6QixVQUFDaUosS0FBRDtBQUFBLGVBQVdBLEtBQUssS0FBSyxNQUFJLENBQUNsRCxRQUFMLENBQWNOLFdBQWQsQ0FBMEI5RyxXQUExQixFQUFyQjtBQUFBLE9BRHlCLENBQTNCOztBQUlBLFVBQUlxSyxrQkFBSixFQUF3QjtBQUN0QmhSLDhFQUFBLENBQ0V0RixNQURGLFlBRUtzUyxnQkFGTCxjQUV5QixLQUFLZSxRQUFMLENBQWNOLFdBQWQsQ0FBMEI5RyxXQUExQixFQUZ6QjtBQUlELE9BTEQsTUFLTztBQUNMLFlBQU11SyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxDQUFpQixLQUFLcEQsUUFBTCxDQUFjTixXQUEvQixFQUE0QzJELElBQTVDLENBQWlELEdBQWpELENBQWpCOztBQUNBLFlBQU1DLGFBQWEsR0FBR2pFLFFBQVEsQ0FBQ2pDLEtBQVQsQ0FBZSxXQUFmLEVBQTRCaUcsSUFBNUIsV0FBb0NGLFFBQXBDLEVBQXRCO0FBQ0E1USxjQUFNLENBQUNoQyxLQUFQLENBQWFnVCxlQUFiLHFDQUEwREQsYUFBMUQ7QUFDRDtBQUNGOzs7V0FFRCxnQ0FBdUIvUSxNQUF2QixFQUErQjtBQUM3QixVQUFNaVIsa0JBQWtCLEdBQUcsSUFBSXZGLE1BQUosV0FBY2dCLGdCQUFkLGNBQXlDLElBQXpDLENBQTNCO0FBQ0EsVUFBTXdFLG1CQUFtQixHQUFHbFIsTUFBTSxDQUFDbkQsU0FBUCxDQUFpQjBKLEtBQWpCLENBQXVCdUQsS0FBdkIsQ0FBNkJtSCxrQkFBN0IsS0FBb0QsRUFBaEY7QUFDQUMseUJBQW1CLENBQUN6VCxPQUFwQixDQUE0QixVQUFDZ0ssU0FBRCxFQUFlO0FBQ3pDekgsY0FBTSxDQUFDbkQsU0FBUCxDQUFpQmlCLE1BQWpCLENBQXdCMkosU0FBeEI7QUFDRCxPQUZEO0FBR0Q7OztXQUVELHFCQUFZa0osS0FBWixFQUFtQjtBQUNqQixlQUFTUSxRQUFULENBQWtCUixLQUFsQixFQUF5QjtBQUN2QixZQUFNUyxnQkFBZ0IsR0FBRyxDQUF6QjtBQUNBLFlBQU1DLFlBQVksR0FBR1YsS0FBSyxDQUFDM1UsTUFBTixHQUFlb1YsZ0JBQXBDOztBQUNBLFlBQUlDLFlBQUosRUFBa0I7QUFDaEJWLGVBQUssY0FBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWixTQUFrQkEsS0FBSyxDQUFDLENBQUQsQ0FBdkIsU0FBNkJBLEtBQUssQ0FBQyxDQUFELENBQWxDLFNBQXdDQSxLQUFLLENBQUMsQ0FBRCxDQUE3QyxTQUFtREEsS0FBSyxDQUFDLENBQUQsQ0FBeEQsU0FBOERBLEtBQUssQ0FBQyxDQUFELENBQW5FLENBQUw7QUFDRDs7QUFDRCxlQUFPLENBQ0xXLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDWSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFELEVBQXFCLEVBQXJCLENBREgsRUFFTEQsUUFBUSxDQUFDWCxLQUFLLENBQUNZLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUQsRUFBcUIsRUFBckIsQ0FGSCxFQUdMRCxRQUFRLENBQUNYLEtBQUssQ0FBQ1ksTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBRCxFQUFxQixFQUFyQixDQUhILENBQVA7QUFLRDs7QUFFRCxlQUFTQyxpQkFBVCxDQUEyQmIsS0FBM0IsRUFBa0M7QUFDaEMsWUFBTWMsUUFBUSxHQUFHM1IsUUFBUSxDQUFDbUgsSUFBVCxDQUFjd0osV0FBZCxDQUEwQjNRLFFBQVEsQ0FBQ2tJLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBMUIsQ0FBakI7QUFDQSxZQUFNMEosSUFBSSxHQUFHLGNBQWI7QUFDQUQsZ0JBQVEsQ0FBQ3pULEtBQVQsQ0FBZTJTLEtBQWYsR0FBdUJlLElBQXZCOztBQUNBLFlBQUlELFFBQVEsQ0FBQ3pULEtBQVQsQ0FBZTJTLEtBQWYsS0FBeUJlLElBQTdCLEVBQW1DO0FBQ2pDLGlCQUFPM0Usb0JBQVA7QUFDRDs7QUFDRDBFLGdCQUFRLENBQUN6VCxLQUFULENBQWUyUyxLQUFmLEdBQXVCQSxLQUF2Qjs7QUFDQSxZQUFJYyxRQUFRLENBQUN6VCxLQUFULENBQWUyUyxLQUFmLEtBQXlCZSxJQUF6QixJQUFpQ0QsUUFBUSxDQUFDelQsS0FBVCxDQUFlMlMsS0FBZixLQUF5QixFQUE5RCxFQUFrRTtBQUNoRSxpQkFBTzVELG9CQUFQO0FBQ0QsU0FWK0IsQ0FVOUI7OztBQUNGNEQsYUFBSyxHQUFHbkcsZ0JBQWdCLENBQUNpSCxRQUFELENBQWhCLENBQTJCZCxLQUFuQztBQUNBN1EsZ0JBQVEsQ0FBQ21ILElBQVQsQ0FBYzBLLFdBQWQsQ0FBMEJGLFFBQTFCO0FBQ0EsZUFBT2QsS0FBUDtBQUNEOztBQUVELGVBQVNpQixTQUFULENBQW1CakIsS0FBbkIsRUFBMEI7QUFDeEJBLGFBQUssR0FBR0EsS0FBSyxDQUFDN0csS0FBTixDQUFZLFNBQVosRUFBdUIrSCxHQUF2QixDQUEyQixVQUFDQyxDQUFEO0FBQUEsaUJBQU8sQ0FBQzdMLE1BQU0sQ0FBQzZMLENBQUQsQ0FBZDtBQUFBLFNBQTNCLENBQVI7QUFDQW5CLGFBQUssQ0FBQzNVLE1BQU4sR0FBZSxDQUFmO0FBQ0EsZUFBTzJVLEtBQVA7QUFDRDs7QUFFRCxVQUFJQSxLQUFLLENBQUN0SyxXQUFOLE9BQXdCLGFBQTVCLEVBQTJDO0FBQ3pDLGVBQU8wRyxvQkFBUDtBQUNEOztBQUNELFVBQUk0RCxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsR0FBakIsRUFBc0I7QUFDcEIsZUFBT1EsUUFBUSxDQUFDUixLQUFELENBQWY7QUFDRDs7QUFDRCxVQUFJQSxLQUFLLENBQUM5TSxPQUFOLENBQWMsS0FBZCxNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQy9COE0sYUFBSyxHQUFHYSxpQkFBaUIsQ0FBQ2IsS0FBRCxDQUF6QjtBQUNEOztBQUNELFVBQUlBLEtBQUssQ0FBQzlNLE9BQU4sQ0FBYyxLQUFkLE1BQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8rTixTQUFTLENBQUNqQixLQUFELENBQWhCO0FBQ0Q7O0FBRUQsYUFBTzVELG9CQUFQO0FBQ0QsSyxDQUVEOzs7O1NBaFBBLGVBQWtCO0FBQ2hCLGFBQU9sVCxJQUFQO0FBQ0Q7OztXQStPRCxxQkFBbUJ1SCxRQUFuQixFQUE2QjtBQUMzQixhQUFPLFVBQVVyQixLQUFWLEVBQWlCO0FBQ3RCcUIsZ0JBQVEsQ0FBQzJRLFNBQVQsQ0FBbUJoUyxLQUFuQjtBQUNELE9BRkQ7QUFHRDs7O1dBRUQseUJBQXVCeU4sT0FBdkIsRUFBZ0M7QUFDOUIsYUFBTyxLQUFLM04sSUFBTCxDQUFVLFlBQVk7QUFDM0IsWUFBTUosSUFBSSxHQUFHN0MsOERBQUEsQ0FBYSxJQUFiLEVBQW1CN0MsUUFBbkIsQ0FBYjs7QUFDQSxZQUFJLENBQUMwRixJQUFMLEVBQVc7QUFDVCxpQkFBTyxJQUFJOE4sTUFBSixDQUFXLElBQVgsRUFBaUJDLE9BQWpCLENBQVA7QUFDRDs7QUFFRCxlQUFPLElBQVA7QUFDRCxPQVBNLENBQVA7QUFRRDs7O1dBRUQscUJBQW1CcFMsT0FBbkIsRUFBNEI7QUFDMUIsYUFBT3dCLDhEQUFBLENBQWF4QixPQUFiLEVBQXNCckIsUUFBdEIsQ0FBUDtBQUNEOzs7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBNlMsa0JBQWtCLENBQUNuUCxPQUFuQixDQUEyQixVQUFDdVUsT0FBRCxFQUFhO0FBQ3RDelUsK0VBQUEsQ0FBaUJ1QyxRQUFqQixFQUEyQixPQUEzQixFQUFvQ2tTLE9BQXBDLEVBQTZDekUsTUFBTSxDQUFDMEUsV0FBUCxDQUFtQixJQUFJMUUsTUFBSixFQUFuQixDQUE3QztBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWxOLENBQUMsR0FBR0MsOERBQVMsRUFBbkI7O0FBRUEsSUFBSUQsQ0FBSixFQUFPO0FBQ0wsTUFBTUUsa0JBQWtCLEdBQUdGLENBQUMsQ0FBQ0csRUFBRixDQUFLM0csSUFBTCxDQUEzQjtBQUNBd0csR0FBQyxDQUFDRyxFQUFGLENBQUszRyxJQUFMLElBQWEwVCxNQUFNLENBQUM5TSxlQUFwQjtBQUNBSixHQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsRUFBVzZHLFdBQVgsR0FBeUI2TSxNQUF6Qjs7QUFDQWxOLEdBQUMsQ0FBQ0csRUFBRixDQUFLM0csSUFBTCxFQUFXOEcsVUFBWCxHQUF3QixZQUFNO0FBQzVCTixLQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsSUFBYTBHLGtCQUFiO0FBQ0EsV0FBT2dOLE1BQU0sQ0FBQzlNLGVBQWQ7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsaUVBQWU4TSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQy9XQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0zTSxPQUFPLEdBQUksWUFBTTtBQUNyQixNQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFJakYsRUFBRSxHQUFHLENBQVQ7QUFDQSxTQUFPO0FBQ0xrRixPQURLLGVBQ0QxRixPQURDLEVBQ1EyRixHQURSLEVBQ2F0QixJQURiLEVBQ21CO0FBQ3RCLFVBQUksT0FBT3JFLE9BQU8sQ0FBQzJGLEdBQUQsQ0FBZCxLQUF3QixXQUE1QixFQUF5QztBQUN2QzNGLGVBQU8sQ0FBQzJGLEdBQUQsQ0FBUCxHQUFlO0FBQ2JBLGFBQUcsRUFBSEEsR0FEYTtBQUVibkYsWUFBRSxFQUFGQTtBQUZhLFNBQWY7QUFJQUEsVUFBRTtBQUNIOztBQUVEaUYsZUFBUyxDQUFDekYsT0FBTyxDQUFDMkYsR0FBRCxDQUFQLENBQWFuRixFQUFkLENBQVQsR0FBNkI2RCxJQUE3QjtBQUNELEtBWEk7QUFZTHdCLE9BWkssZUFZRDdGLE9BWkMsRUFZUTJGLEdBWlIsRUFZYTtBQUNoQixVQUFJLENBQUMzRixPQUFELElBQVksT0FBT0EsT0FBTyxDQUFDMkYsR0FBRCxDQUFkLEtBQXdCLFdBQXhDLEVBQXFEO0FBQ25ELGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1HLGFBQWEsR0FBRzlGLE9BQU8sQ0FBQzJGLEdBQUQsQ0FBN0I7O0FBQ0EsVUFBSUcsYUFBYSxDQUFDSCxHQUFkLEtBQXNCQSxHQUExQixFQUErQjtBQUM3QixlQUFPRixTQUFTLENBQUNLLGFBQWEsQ0FBQ3RGLEVBQWYsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRCxLQXZCSTtBQUFBLCtCQXdCRVIsT0F4QkYsRUF3QlcyRixHQXhCWCxFQXdCZ0I7QUFDbkIsVUFBSSxPQUFPM0YsT0FBTyxDQUFDMkYsR0FBRCxDQUFkLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDO0FBQ0Q7O0FBRUQsVUFBTUcsYUFBYSxHQUFHOUYsT0FBTyxDQUFDMkYsR0FBRCxDQUE3Qjs7QUFDQSxVQUFJRyxhQUFhLENBQUNILEdBQWQsS0FBc0JBLEdBQTFCLEVBQStCO0FBQzdCLGVBQU9GLFNBQVMsQ0FBQ0ssYUFBYSxDQUFDdEYsRUFBZixDQUFoQjtBQUNBLGVBQU9SLE9BQU8sQ0FBQzJGLEdBQUQsQ0FBZDtBQUNEO0FBQ0Y7QUFsQ0ksR0FBUDtBQW9DRCxDQXZDZSxFQUFoQjs7QUF5Q0EsSUFBTW5FLElBQUksR0FBRztBQUNYdUUsU0FEVyxtQkFDSEMsUUFERyxFQUNPTCxHQURQLEVBQ1l0QixJQURaLEVBQ2tCO0FBQzNCbUIsV0FBTyxDQUFDRSxHQUFSLENBQVlNLFFBQVosRUFBc0JMLEdBQXRCLEVBQTJCdEIsSUFBM0I7QUFDRCxHQUhVO0FBSVg0QixTQUpXLG1CQUlIRCxRQUpHLEVBSU9MLEdBSlAsRUFJWTtBQUNyQixXQUFPSCxPQUFPLENBQUNLLEdBQVIsQ0FBWUcsUUFBWixFQUFzQkwsR0FBdEIsQ0FBUDtBQUNELEdBTlU7QUFPWE8sWUFQVyxzQkFPQUYsUUFQQSxFQU9VTCxHQVBWLEVBT2U7QUFDeEJILFdBQU8sVUFBUCxDQUFlUSxRQUFmLEVBQXlCTCxHQUF6QjtBQUNEO0FBVFUsQ0FBYjtBQVlBLGlFQUFlbkUsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU15RCxDQUFDLEdBQUdDLDBEQUFTLEVBQW5CO0FBQ0EsSUFBTWlCLGNBQWMsR0FBRyxvQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsTUFBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsUUFBdEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsRUFBdEIsQyxDQUEwQjs7QUFDMUIsSUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFlBQVUsRUFBRSxXQURPO0FBRW5CQyxZQUFVLEVBQUU7QUFGTyxDQUFyQjtBQUlBLElBQU1DLFlBQVksR0FBRyxDQUNuQixPQURtQixFQUVuQixVQUZtQixFQUduQixTQUhtQixFQUluQixXQUptQixFQUtuQixhQUxtQixFQU1uQixZQU5tQixFQU9uQixnQkFQbUIsRUFRbkIsV0FSbUIsRUFTbkIsVUFUbUIsRUFVbkIsV0FWbUIsRUFXbkIsYUFYbUIsRUFZbkIsV0FabUIsRUFhbkIsU0FibUIsRUFjbkIsVUFkbUIsRUFlbkIsT0FmbUIsRUFnQm5CLG1CQWhCbUIsRUFpQm5CLFlBakJtQixFQWtCbkIsV0FsQm1CLEVBbUJuQixVQW5CbUIsRUFvQm5CLGFBcEJtQixFQXFCbkIsYUFyQm1CLEVBc0JuQixhQXRCbUIsRUF1Qm5CLFdBdkJtQixFQXdCbkIsY0F4Qm1CLEVBeUJuQixlQXpCbUIsRUEwQm5CLGNBMUJtQixFQTJCbkIsZUEzQm1CLEVBNEJuQixZQTVCbUIsRUE2Qm5CLE9BN0JtQixFQThCbkIsTUE5Qm1CLEVBK0JuQixRQS9CbUIsRUFnQ25CLE9BaENtQixFQWlDbkIsUUFqQ21CLEVBa0NuQixRQWxDbUIsRUFtQ25CLFNBbkNtQixFQW9DbkIsVUFwQ21CLEVBcUNuQixNQXJDbUIsRUFzQ25CLFFBdENtQixFQXVDbkIsY0F2Q21CLEVBd0NuQixRQXhDbUIsRUF5Q25CLE1BekNtQixFQTBDbkIsa0JBMUNtQixFQTJDbkIsa0JBM0NtQixFQTRDbkIsT0E1Q21CLEVBNkNuQixPQTdDbUIsRUE4Q25CLFFBOUNtQixDQUFyQjtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUI1RyxPQUFyQixFQUE4QjZHLEdBQTlCLEVBQW1DO0FBQ2pDLFNBQVFBLEdBQUcsY0FBT0EsR0FBUCxlQUFlTixRQUFRLEVBQXZCLENBQUosSUFBb0N2RyxPQUFPLENBQUN1RyxRQUE1QyxJQUF3REEsUUFBUSxFQUF2RTtBQUNEOztBQUVELFNBQVNPLFFBQVQsQ0FBa0I5RyxPQUFsQixFQUEyQjtBQUN6QixNQUFNNkcsR0FBRyxHQUFHRCxXQUFXLENBQUM1RyxPQUFELENBQXZCO0FBRUFBLFNBQU8sQ0FBQ3VHLFFBQVIsR0FBbUJNLEdBQW5CO0FBQ0FQLGVBQWEsQ0FBQ08sR0FBRCxDQUFiLEdBQXFCUCxhQUFhLENBQUNPLEdBQUQsQ0FBYixJQUFzQixFQUEzQztBQUVBLFNBQU9QLGFBQWEsQ0FBQ08sR0FBRCxDQUFwQjtBQUNEOztBQUVELFNBQVNFLGdCQUFULENBQTBCL0csT0FBMUIsRUFBbUNvRixFQUFuQyxFQUF1QztBQUNyQyxTQUFPLFNBQVM0QixPQUFULENBQWlCckMsS0FBakIsRUFBd0I7QUFDN0IsUUFBSXFDLE9BQU8sQ0FBQ0UsTUFBWixFQUFvQjtBQUNsQi9FLGtCQUFZLENBQUNnRixHQUFiLENBQWlCbkgsT0FBakIsRUFBMEIyRSxLQUFLLENBQUN5QyxJQUFoQyxFQUFzQ2hDLEVBQXRDO0FBQ0Q7O0FBRUQsV0FBT0EsRUFBRSxDQUFDaUMsS0FBSCxDQUFTckgsT0FBVCxFQUFrQixDQUFDMkUsS0FBRCxDQUFsQixDQUFQO0FBQ0QsR0FORDtBQU9EOztBQUVELFNBQVMyQywwQkFBVCxDQUFvQ3RILE9BQXBDLEVBQTZDYyxRQUE3QyxFQUF1RHNFLEVBQXZELEVBQTJEO0FBQ3pELFNBQU8sU0FBUzRCLE9BQVQsQ0FBaUJyQyxLQUFqQixFQUF3QjtBQUM3QixRQUFNNEMsV0FBVyxHQUFHdkgsT0FBTyxDQUFDd0gsZ0JBQVIsQ0FBeUIxRyxRQUF6QixDQUFwQjs7QUFFQSxTQUFLLElBQU04RCxNQUFOLEdBQWlCRCxLQUFqQixDQUFNQyxNQUFYLEVBQTZCQSxNQUFNLElBQUlBLE1BQU0sS0FBSyxJQUFsRCxFQUF3REEsTUFBTSxHQUFHQSxNQUFNLENBQUM2QyxVQUF4RSxFQUFvRjtBQUNsRixXQUFLLElBQUkvRyxDQUFDLEdBQUc2RyxXQUFXLENBQUMzRyxNQUF6QixFQUFpQ0YsQ0FBQyxFQUFsQyxFQUFzQyxFQUF0QyxFQUEwQztBQUN4QyxZQUFJNkcsV0FBVyxDQUFDN0csQ0FBRCxDQUFYLEtBQW1Ca0UsTUFBdkIsRUFBK0I7QUFDN0IsY0FBSW9DLE9BQU8sQ0FBQ0UsTUFBWixFQUFvQjtBQUNsQi9FLHdCQUFZLENBQUNnRixHQUFiLENBQWlCbkgsT0FBakIsRUFBMEIyRSxLQUFLLENBQUN5QyxJQUFoQyxFQUFzQ2hDLEVBQXRDO0FBQ0Q7O0FBRUQsaUJBQU9BLEVBQUUsQ0FBQ2lDLEtBQUgsQ0FBU3pDLE1BQVQsRUFBaUIsQ0FBQ0QsS0FBRCxDQUFqQixDQUFQO0FBQ0Q7QUFDRjtBQUNGLEtBYjRCLENBZTdCOzs7QUFDQSxXQUFPLElBQVA7QUFDRCxHQWpCRDtBQWtCRDs7QUFFRCxTQUFTK0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkJYLE9BQTdCLEVBQWlFO0FBQUEsTUFBM0JZLGtCQUEyQix1RUFBTixJQUFNO0FBQy9ELE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQVosQ0FBckI7O0FBRUEsT0FBSyxJQUFJakgsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHa0gsWUFBWSxDQUFDakgsTUFBbkMsRUFBMkNGLENBQUMsR0FBR0MsR0FBL0MsRUFBb0RELENBQUMsRUFBckQsRUFBeUQ7QUFDdkQsUUFBTWlFLEtBQUssR0FBR2dELE1BQU0sQ0FBQ0UsWUFBWSxDQUFDbkgsQ0FBRCxDQUFiLENBQXBCOztBQUVBLFFBQUlpRSxLQUFLLENBQUNxRCxlQUFOLEtBQTBCaEIsT0FBMUIsSUFBcUNyQyxLQUFLLENBQUNpRCxrQkFBTixLQUE2QkEsa0JBQXRFLEVBQTBGO0FBQ3hGLGFBQU9qRCxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTc0QsZUFBVCxDQUF5QkMsaUJBQXpCLEVBQTRDbEIsT0FBNUMsRUFBcURtQixZQUFyRCxFQUFtRTtBQUNqRSxNQUFNQyxVQUFVLEdBQUcsT0FBT3BCLE9BQVAsS0FBbUIsUUFBdEM7QUFDQSxNQUFNZ0IsZUFBZSxHQUFHSSxVQUFVLEdBQUdELFlBQUgsR0FBa0JuQixPQUFwRCxDQUZpRSxDQUlqRTs7QUFDQSxNQUFJcUIsU0FBUyxHQUFHSCxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEJsQyxjQUExQixFQUEwQyxFQUExQyxDQUFoQjtBQUNBLE1BQU1tQyxNQUFNLEdBQUcvQixZQUFZLENBQUM2QixTQUFELENBQTNCOztBQUVBLE1BQUlFLE1BQUosRUFBWTtBQUNWRixhQUFTLEdBQUdFLE1BQVo7QUFDRDs7QUFFRCxNQUFNQyxRQUFRLEdBQUc3QixZQUFZLENBQUM4QixPQUFiLENBQXFCSixTQUFyQixJQUFrQyxDQUFDLENBQXBEOztBQUVBLE1BQUksQ0FBQ0csUUFBTCxFQUFlO0FBQ2JILGFBQVMsR0FBR0gsaUJBQVo7QUFDRDs7QUFFRCxTQUFPLENBQUNFLFVBQUQsRUFBYUosZUFBYixFQUE4QkssU0FBOUIsQ0FBUDtBQUNEOztBQUVELFNBQVNLLFVBQVQsQ0FBb0IxSSxPQUFwQixFQUE2QmtJLGlCQUE3QixFQUFnRGxCLE9BQWhELEVBQXlEbUIsWUFBekQsRUFBdUVqQixNQUF2RSxFQUErRTtBQUM3RSxNQUFJLE9BQU9nQixpQkFBUCxLQUE2QixRQUE3QixJQUF5QyxDQUFDbEksT0FBOUMsRUFBdUQ7QUFDckQ7QUFDRDs7QUFFRCxNQUFJLENBQUNnSCxPQUFMLEVBQWM7QUFDWkEsV0FBTyxHQUFHbUIsWUFBVjtBQUNBQSxnQkFBWSxHQUFHLElBQWY7QUFDRDs7QUFFRCx5QkFBaURGLGVBQWUsQ0FDOURDLGlCQUQ4RCxFQUU5RGxCLE9BRjhELEVBRzlEbUIsWUFIOEQsQ0FBaEU7QUFBQTtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkosZUFBbkI7QUFBQSxNQUFvQ0ssU0FBcEM7O0FBS0EsTUFBTVYsTUFBTSxHQUFHYixRQUFRLENBQUM5RyxPQUFELENBQXZCO0FBQ0EsTUFBTTJJLFFBQVEsR0FBR2hCLE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLEtBQXNCVixNQUFNLENBQUNVLFNBQUQsQ0FBTixHQUFvQixFQUExQyxDQUFqQjtBQUNBLE1BQU1PLFVBQVUsR0FBR2xCLFdBQVcsQ0FBQ2lCLFFBQUQsRUFBV1gsZUFBWCxFQUE0QkksVUFBVSxHQUFHcEIsT0FBSCxHQUFhLElBQW5ELENBQTlCOztBQUVBLE1BQUk0QixVQUFKLEVBQWdCO0FBQ2RBLGNBQVUsQ0FBQzFCLE1BQVgsR0FBb0IwQixVQUFVLENBQUMxQixNQUFYLElBQXFCQSxNQUF6QztBQUVBO0FBQ0Q7O0FBRUQsTUFBTUwsR0FBRyxHQUFHRCxXQUFXLENBQUNvQixlQUFELEVBQWtCRSxpQkFBaUIsQ0FBQ0ksT0FBbEIsQ0FBMEJuQyxjQUExQixFQUEwQyxFQUExQyxDQUFsQixDQUF2QjtBQUNBLE1BQU1mLEVBQUUsR0FBR2dELFVBQVUsR0FDakJkLDBCQUEwQixDQUFDdEgsT0FBRCxFQUFVZ0gsT0FBVixFQUFtQm1CLFlBQW5CLENBRFQsR0FFakJwQixnQkFBZ0IsQ0FBQy9HLE9BQUQsRUFBVWdILE9BQVYsQ0FGcEI7QUFJQTVCLElBQUUsQ0FBQ3dDLGtCQUFILEdBQXdCUSxVQUFVLEdBQUdwQixPQUFILEdBQWEsSUFBL0M7QUFDQTVCLElBQUUsQ0FBQzRDLGVBQUgsR0FBcUJBLGVBQXJCO0FBQ0E1QyxJQUFFLENBQUM4QixNQUFILEdBQVlBLE1BQVo7QUFDQTlCLElBQUUsQ0FBQ21CLFFBQUgsR0FBY00sR0FBZDtBQUNBOEIsVUFBUSxDQUFDOUIsR0FBRCxDQUFSLEdBQWdCekIsRUFBaEI7QUFFQXBGLFNBQU8sQ0FBQzZJLGdCQUFSLENBQXlCUixTQUF6QixFQUFvQ2pELEVBQXBDLEVBQXdDZ0QsVUFBeEM7QUFDRDs7QUFFRCxTQUFTVSxhQUFULENBQXVCOUksT0FBdkIsRUFBZ0MySCxNQUFoQyxFQUF3Q1UsU0FBeEMsRUFBbURyQixPQUFuRCxFQUE0RFksa0JBQTVELEVBQWdGO0FBQzlFLE1BQU14QyxFQUFFLEdBQUdzQyxXQUFXLENBQUNDLE1BQU0sQ0FBQ1UsU0FBRCxDQUFQLEVBQW9CckIsT0FBcEIsRUFBNkJZLGtCQUE3QixDQUF0Qjs7QUFFQSxNQUFJLENBQUN4QyxFQUFMLEVBQVM7QUFDUDtBQUNEOztBQUVEcEYsU0FBTyxDQUFDK0ksbUJBQVIsQ0FBNEJWLFNBQTVCLEVBQXVDakQsRUFBdkMsRUFBMkN0QixPQUFPLENBQUM4RCxrQkFBRCxDQUFsRDtBQUNBLFNBQU9ELE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLENBQWtCakQsRUFBRSxDQUFDbUIsUUFBckIsQ0FBUDtBQUNEOztBQUVELFNBQVN5Qyx3QkFBVCxDQUFrQ2hKLE9BQWxDLEVBQTJDMkgsTUFBM0MsRUFBbURVLFNBQW5ELEVBQThEWSxTQUE5RCxFQUF5RTtBQUN2RSxNQUFNQyxpQkFBaUIsR0FBR3ZCLE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLElBQXFCLEVBQS9DO0FBRUFQLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZbUIsaUJBQVosRUFBK0I3RyxPQUEvQixDQUF1QyxVQUFDOEcsVUFBRCxFQUFnQjtBQUNyRCxRQUFJQSxVQUFVLENBQUNWLE9BQVgsQ0FBbUJRLFNBQW5CLElBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDdEMsVUFBTXRFLEtBQUssR0FBR3VFLGlCQUFpQixDQUFDQyxVQUFELENBQS9CO0FBRUFMLG1CQUFhLENBQUM5SSxPQUFELEVBQVUySCxNQUFWLEVBQWtCVSxTQUFsQixFQUE2QjFELEtBQUssQ0FBQ3FELGVBQW5DLEVBQW9EckQsS0FBSyxDQUFDaUQsa0JBQTFELENBQWI7QUFDRDtBQUNGLEdBTkQ7QUFPRDs7QUFFRCxJQUFNekYsWUFBWSxHQUFHO0FBQ25CaUgsSUFEbUIsY0FDaEJwSixPQURnQixFQUNQMkUsS0FETyxFQUNBcUMsT0FEQSxFQUNTbUIsWUFEVCxFQUN1QjtBQUN4Q08sY0FBVSxDQUFDMUksT0FBRCxFQUFVMkUsS0FBVixFQUFpQnFDLE9BQWpCLEVBQTBCbUIsWUFBMUIsRUFBd0MsS0FBeEMsQ0FBVjtBQUNELEdBSGtCO0FBS25Ca0IsS0FMbUIsZUFLZnJKLE9BTGUsRUFLTjJFLEtBTE0sRUFLQ3FDLE9BTEQsRUFLVW1CLFlBTFYsRUFLd0I7QUFDekNPLGNBQVUsQ0FBQzFJLE9BQUQsRUFBVTJFLEtBQVYsRUFBaUJxQyxPQUFqQixFQUEwQm1CLFlBQTFCLEVBQXdDLElBQXhDLENBQVY7QUFDRCxHQVBrQjtBQVNuQmhCLEtBVG1CLGVBU2ZuSCxPQVRlLEVBU05rSSxpQkFUTSxFQVNhbEIsT0FUYixFQVNzQm1CLFlBVHRCLEVBU29DO0FBQ3JELFFBQUksT0FBT0QsaUJBQVAsS0FBNkIsUUFBN0IsSUFBeUMsQ0FBQ2xJLE9BQTlDLEVBQXVEO0FBQ3JEO0FBQ0Q7O0FBRUQsNEJBQWlEaUksZUFBZSxDQUM5REMsaUJBRDhELEVBRTlEbEIsT0FGOEQsRUFHOURtQixZQUg4RCxDQUFoRTtBQUFBO0FBQUEsUUFBT0MsVUFBUDtBQUFBLFFBQW1CSixlQUFuQjtBQUFBLFFBQW9DSyxTQUFwQzs7QUFLQSxRQUFNaUIsV0FBVyxHQUFHakIsU0FBUyxLQUFLSCxpQkFBbEM7QUFDQSxRQUFNUCxNQUFNLEdBQUdiLFFBQVEsQ0FBQzlHLE9BQUQsQ0FBdkI7QUFDQSxRQUFNdUosV0FBVyxHQUFHckIsaUJBQWlCLENBQUNzQixNQUFsQixDQUF5QixDQUF6QixNQUFnQyxHQUFwRDs7QUFFQSxRQUFJLE9BQU94QixlQUFQLEtBQTJCLFdBQS9CLEVBQTRDO0FBQzFDO0FBQ0EsVUFBSSxDQUFDTCxNQUFELElBQVcsQ0FBQ0EsTUFBTSxDQUFDVSxTQUFELENBQXRCLEVBQW1DO0FBQ2pDO0FBQ0Q7O0FBRURTLG1CQUFhLENBQUM5SSxPQUFELEVBQVUySCxNQUFWLEVBQWtCVSxTQUFsQixFQUE2QkwsZUFBN0IsRUFBOENJLFVBQVUsR0FBR3BCLE9BQUgsR0FBYSxJQUFyRSxDQUFiO0FBQ0E7QUFDRDs7QUFFRCxRQUFJdUMsV0FBSixFQUFpQjtBQUNmekIsWUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQVosRUFBb0J0RixPQUFwQixDQUE0QixVQUFDb0gsWUFBRCxFQUFrQjtBQUM1Q1QsZ0NBQXdCLENBQUNoSixPQUFELEVBQVUySCxNQUFWLEVBQWtCOEIsWUFBbEIsRUFBZ0N2QixpQkFBaUIsQ0FBQ2hGLEtBQWxCLENBQXdCLENBQXhCLENBQWhDLENBQXhCO0FBQ0QsT0FGRDtBQUdEOztBQUVELFFBQU1nRyxpQkFBaUIsR0FBR3ZCLE1BQU0sQ0FBQ1UsU0FBRCxDQUFOLElBQXFCLEVBQS9DO0FBQ0FQLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZbUIsaUJBQVosRUFBK0I3RyxPQUEvQixDQUF1QyxVQUFDcUgsV0FBRCxFQUFpQjtBQUN0RCxVQUFNUCxVQUFVLEdBQUdPLFdBQVcsQ0FBQ3BCLE9BQVosQ0FBb0JqQyxhQUFwQixFQUFtQyxFQUFuQyxDQUFuQjs7QUFFQSxVQUFJLENBQUNpRCxXQUFELElBQWdCcEIsaUJBQWlCLENBQUNPLE9BQWxCLENBQTBCVSxVQUExQixJQUF3QyxDQUFDLENBQTdELEVBQWdFO0FBQzlELFlBQU14RSxLQUFLLEdBQUd1RSxpQkFBaUIsQ0FBQ1EsV0FBRCxDQUEvQjtBQUVBWixxQkFBYSxDQUFDOUksT0FBRCxFQUFVMkgsTUFBVixFQUFrQlUsU0FBbEIsRUFBNkIxRCxLQUFLLENBQUNxRCxlQUFuQyxFQUFvRHJELEtBQUssQ0FBQ2lELGtCQUExRCxDQUFiO0FBQ0Q7QUFDRixLQVJEO0FBU0QsR0FqRGtCO0FBbURuQmpFLFNBbkRtQixtQkFtRFgzRCxPQW5EVyxFQW1ERjJFLEtBbkRFLEVBbURLZ0YsSUFuREwsRUFtRFc7QUFDNUIsUUFBSSxPQUFPaEYsS0FBUCxLQUFpQixRQUFqQixJQUE2QixDQUFDM0UsT0FBbEMsRUFBMkM7QUFDekMsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTXFJLFNBQVMsR0FBRzFELEtBQUssQ0FBQzJELE9BQU4sQ0FBY2xDLGNBQWQsRUFBOEIsRUFBOUIsQ0FBbEI7QUFDQSxRQUFNa0QsV0FBVyxHQUFHM0UsS0FBSyxLQUFLMEQsU0FBOUI7QUFDQSxRQUFNRyxRQUFRLEdBQUc3QixZQUFZLENBQUM4QixPQUFiLENBQXFCSixTQUFyQixJQUFrQyxDQUFDLENBQXBEO0FBRUEsUUFBSXVCLFdBQUo7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBLFFBQUlDLGNBQWMsR0FBRyxJQUFyQjtBQUNBLFFBQUkxSCxnQkFBZ0IsR0FBRyxLQUF2QjtBQUNBLFFBQUkySCxHQUFHLEdBQUcsSUFBVjs7QUFFQSxRQUFJVCxXQUFXLElBQUlyRSxDQUFuQixFQUFzQjtBQUNwQjJFLGlCQUFXLEdBQUczRSxDQUFDLENBQUMrRSxLQUFGLENBQVFyRixLQUFSLEVBQWVnRixJQUFmLENBQWQ7QUFFQTFFLE9BQUMsQ0FBQ2pGLE9BQUQsQ0FBRCxDQUFXMkQsT0FBWCxDQUFtQmlHLFdBQW5CO0FBQ0FDLGFBQU8sR0FBRyxDQUFDRCxXQUFXLENBQUNLLG9CQUFaLEVBQVg7QUFDQUgsb0JBQWMsR0FBRyxDQUFDRixXQUFXLENBQUNNLDZCQUFaLEVBQWxCO0FBQ0E5SCxzQkFBZ0IsR0FBR3dILFdBQVcsQ0FBQ08sa0JBQVosRUFBbkI7QUFDRDs7QUFFRCxRQUFJM0IsUUFBSixFQUFjO0FBQ1p1QixTQUFHLEdBQUdyRixRQUFRLENBQUMwRixXQUFULENBQXFCLFlBQXJCLENBQU47QUFDQUwsU0FBRyxDQUFDTSxTQUFKLENBQWNoQyxTQUFkLEVBQXlCd0IsT0FBekIsRUFBa0MsSUFBbEM7QUFDRCxLQUhELE1BR087QUFDTEUsU0FBRyxHQUFHLElBQUlPLFdBQUosQ0FBZ0IzRixLQUFoQixFQUF1QjtBQUMzQmtGLGVBQU8sRUFBUEEsT0FEMkI7QUFFM0JVLGtCQUFVLEVBQUU7QUFGZSxPQUF2QixDQUFOO0FBSUQsS0FoQzJCLENBa0M1Qjs7O0FBQ0EsUUFBSSxPQUFPWixJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CN0IsWUFBTSxDQUFDQyxJQUFQLENBQVk0QixJQUFaLEVBQWtCdEgsT0FBbEIsQ0FBMEIsVUFBQ3NELEdBQUQsRUFBUztBQUNqQ21DLGNBQU0sQ0FBQzBDLGNBQVAsQ0FBc0JULEdBQXRCLEVBQTJCcEUsR0FBM0IsRUFBZ0M7QUFDOUJFLGFBRDhCLGlCQUN4QjtBQUNKLG1CQUFPOEQsSUFBSSxDQUFDaEUsR0FBRCxDQUFYO0FBQ0Q7QUFINkIsU0FBaEM7QUFLRCxPQU5EO0FBT0Q7O0FBRUQsUUFBSXZELGdCQUFKLEVBQXNCO0FBQ3BCMkgsU0FBRyxDQUFDakYsY0FBSjs7QUFFQSxVQUFJLENBQUMyRiw4RUFBTCxFQUEwQztBQUN4QzNDLGNBQU0sQ0FBQzBDLGNBQVAsQ0FBc0JULEdBQXRCLEVBQTJCLGtCQUEzQixFQUErQztBQUM3Q2xFLGFBQUcsRUFBRTtBQUFBLG1CQUFNLElBQU47QUFBQTtBQUR3QyxTQUEvQztBQUdEO0FBQ0Y7O0FBRUQsUUFBSWlFLGNBQUosRUFBb0I7QUFDbEI5SixhQUFPLENBQUMwSyxhQUFSLENBQXNCWCxHQUF0QjtBQUNEOztBQUVELFFBQUlBLEdBQUcsQ0FBQzNILGdCQUFKLElBQXdCLE9BQU93SCxXQUFQLEtBQXVCLFdBQW5ELEVBQWdFO0FBQzlEQSxpQkFBVyxDQUFDOUUsY0FBWjtBQUNEOztBQUVELFdBQU9pRixHQUFQO0FBQ0Q7QUFuSGtCLENBQXJCO0FBc0hPLElBQU0rTSxpQkFBaUIsR0FBRztBQUMvQjFOLElBRCtCLGNBQzVCcEosT0FENEIsRUFDbkIrVyxVQURtQixFQUNQL1AsT0FETyxFQUNFbUIsWUFERixFQUNnQjtBQUM3QyxRQUFNUixNQUFNLEdBQUdvUCxVQUFVLENBQUN0SCxLQUFYLENBQWlCLEdBQWpCLENBQWY7O0FBRUEsU0FBSyxJQUFJL08sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lILE1BQU0sQ0FBQy9HLE1BQTNCLEVBQW1DRixDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDeUIsa0JBQVksQ0FBQ2lILEVBQWIsQ0FBZ0JwSixPQUFoQixFQUF5QjJILE1BQU0sQ0FBQ2pILENBQUQsQ0FBL0IsRUFBb0NzRyxPQUFwQyxFQUE2Q21CLFlBQTdDO0FBQ0Q7QUFDRixHQVA4QjtBQVEvQmhCLEtBUitCLGVBUTNCbkgsT0FSMkIsRUFRbEJrSSxpQkFSa0IsRUFRQ2xCLE9BUkQsRUFRVW1CLFlBUlYsRUFRd0I7QUFDckQsUUFBTVIsTUFBTSxHQUFHTyxpQkFBaUIsQ0FBQ3VILEtBQWxCLENBQXdCLEdBQXhCLENBQWY7O0FBRUEsU0FBSyxJQUFJL08sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lILE1BQU0sQ0FBQy9HLE1BQTNCLEVBQW1DRixDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDeUIsa0JBQVksQ0FBQ2dGLEdBQWIsQ0FBaUJuSCxPQUFqQixFQUEwQjJILE1BQU0sQ0FBQ2pILENBQUQsQ0FBaEMsRUFBcUNzRyxPQUFyQyxFQUE4Q21CLFlBQTlDO0FBQ0Q7QUFDRjtBQWQ4QixDQUExQjtBQWlCUCxpRUFBZWhHLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFTd0ksYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7QUFDMUIsTUFBSUEsR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsR0FBRyxLQUFLLE9BQVosRUFBcUI7QUFDbkIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsR0FBRyxLQUFLQyxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxRQUFaLEVBQVosRUFBb0M7QUFDbEMsV0FBT0QsTUFBTSxDQUFDRCxHQUFELENBQWI7QUFDRDs7QUFFRCxNQUFJQSxHQUFHLEtBQUssRUFBUixJQUFjQSxHQUFHLEtBQUssTUFBMUIsRUFBa0M7QUFDaEMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsR0FBUDtBQUNEOztBQUVELFNBQVNHLGdCQUFULENBQTBCcEYsR0FBMUIsRUFBK0I7QUFDN0IsU0FBT0EsR0FBRyxDQUFDMkMsT0FBSixDQUFZLFFBQVosRUFBc0IsVUFBQzBDLEdBQUQ7QUFBQSxzQkFBYUEsR0FBRyxDQUFDQyxXQUFKLEVBQWI7QUFBQSxHQUF0QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTTNHLFdBQVcsR0FBRztBQUNsQjRHLGtCQURrQiw0QkFDRGxMLE9BREMsRUFDUTJGLEdBRFIsRUFDYXdGLEtBRGIsRUFDb0I7QUFDcENuTCxXQUFPLENBQUM2QyxZQUFSLGdCQUE2QmtJLGdCQUFnQixDQUFDcEYsR0FBRCxDQUE3QyxHQUFzRHdGLEtBQXREO0FBQ0QsR0FIaUI7QUFLbEJDLHFCQUxrQiwrQkFLRXBMLE9BTEYsRUFLVzJGLEdBTFgsRUFLZ0I7QUFDaEMzRixXQUFPLENBQUNxTCxlQUFSLGdCQUFnQ04sZ0JBQWdCLENBQUNwRixHQUFELENBQWhEO0FBQ0QsR0FQaUI7QUFTbEIyRixtQkFUa0IsNkJBU0F0TCxPQVRBLEVBU1M7QUFDekIsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixhQUFPLEVBQVA7QUFDRDs7QUFFRCxRQUFNdUwsVUFBVSxxQkFDWHZMLE9BQU8sQ0FBQ3dMLE9BREcsQ0FBaEI7O0FBSUExRCxVQUFNLENBQUNDLElBQVAsQ0FBWXdELFVBQVosRUFBd0JsSixPQUF4QixDQUFnQyxVQUFDc0QsR0FBRCxFQUFTO0FBQ3ZDNEYsZ0JBQVUsQ0FBQzVGLEdBQUQsQ0FBVixHQUFrQmdGLGFBQWEsQ0FBQ1ksVUFBVSxDQUFDNUYsR0FBRCxDQUFYLENBQS9CO0FBQ0QsS0FGRDtBQUlBLFdBQU80RixVQUFQO0FBQ0QsR0F2QmlCO0FBeUJsQkUsa0JBekJrQiw0QkF5QkR6TCxPQXpCQyxFQXlCUTJGLEdBekJSLEVBeUJhO0FBQzdCLFdBQU9nRixhQUFhLENBQUMzSyxPQUFPLENBQUMrQixZQUFSLGdCQUE2QmdKLGdCQUFnQixDQUFDcEYsR0FBRCxDQUE3QyxFQUFELENBQXBCO0FBQ0QsR0EzQmlCO0FBNkJsQitGLFFBN0JrQixrQkE2QlgxTCxPQTdCVyxFQTZCRjtBQUNkLFFBQU0yTCxJQUFJLEdBQUczTCxPQUFPLENBQUN3RCxxQkFBUixFQUFiO0FBRUEsV0FBTztBQUNMb0ksU0FBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUwsR0FBV2xILFFBQVEsQ0FBQ21ILElBQVQsQ0FBY0MsU0FEekI7QUFFTEMsVUFBSSxFQUFFSixJQUFJLENBQUNJLElBQUwsR0FBWXJILFFBQVEsQ0FBQ21ILElBQVQsQ0FBY0c7QUFGM0IsS0FBUDtBQUlELEdBcENpQjtBQXNDbEJDLFVBdENrQixvQkFzQ1RqTSxPQXRDUyxFQXNDQTtBQUNoQixXQUFPO0FBQ0w0TCxTQUFHLEVBQUU1TCxPQUFPLENBQUNrTSxTQURSO0FBRUxILFVBQUksRUFBRS9MLE9BQU8sQ0FBQ21NO0FBRlQsS0FBUDtBQUlELEdBM0NpQjtBQTZDbEJ2SixPQTdDa0IsaUJBNkNaNUMsT0E3Q1ksRUE2Q0g0QyxNQTdDRyxFQTZDSTtBQUNwQmtGLFVBQU0sQ0FBQ2tQLE1BQVAsQ0FBY2hYLE9BQU8sQ0FBQzRDLEtBQXRCLEVBQTZCQSxNQUE3QjtBQUNELEdBL0NpQjtBQWlEbEJ3SixhQWpEa0IsdUJBaUROcE0sT0FqRE0sRUFpREdxTSxTQWpESCxFQWlEYztBQUM5QixRQUFJLENBQUNyTSxPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUVELFFBQUlBLE9BQU8sQ0FBQ3lCLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCMkssU0FBM0IsQ0FBSixFQUEyQztBQUN6Q3JNLGFBQU8sQ0FBQ3lCLFNBQVIsQ0FBa0JpQixNQUFsQixDQUF5QjJKLFNBQXpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xyTSxhQUFPLENBQUN5QixTQUFSLENBQWtCa0IsR0FBbEIsQ0FBc0IwSixTQUF0QjtBQUNEO0FBQ0YsR0EzRGlCO0FBNkRsQjRLLFVBN0RrQixvQkE2RFRqWCxPQTdEUyxFQTZEQXFNLFNBN0RBLEVBNkRXO0FBQzNCLFFBQUlyTSxPQUFPLENBQUN5QixTQUFSLENBQWtCQyxRQUFsQixDQUEyQjJLLFNBQTNCLENBQUosRUFBMkM7QUFDM0NyTSxXQUFPLENBQUN5QixTQUFSLENBQWtCa0IsR0FBbEIsQ0FBc0IwSixTQUF0QjtBQUNELEdBaEVpQjtBQWtFbEI2SyxVQWxFa0Isb0JBa0VUbFgsT0FsRVMsRUFrRUE0QyxLQWxFQSxFQWtFTztBQUN2QmtGLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZbkYsS0FBWixFQUFtQlAsT0FBbkIsQ0FBMkIsVUFBQzhOLFFBQUQsRUFBYztBQUN2Q25RLGFBQU8sQ0FBQzRDLEtBQVIsQ0FBY3VOLFFBQWQsSUFBMEJ2TixLQUFLLENBQUN1TixRQUFELENBQS9CO0FBQ0QsS0FGRDtBQUdELEdBdEVpQjtBQXdFbEJnSCxhQXhFa0IsdUJBd0VOblgsT0F4RU0sRUF3RUdxTSxTQXhFSCxFQXdFYztBQUM5QixRQUFJLENBQUNyTSxPQUFPLENBQUN5QixTQUFSLENBQWtCQyxRQUFsQixDQUEyQjJLLFNBQTNCLENBQUwsRUFBNEM7QUFDNUNyTSxXQUFPLENBQUN5QixTQUFSLENBQWtCaUIsTUFBbEIsQ0FBeUIySixTQUF6QjtBQUNELEdBM0VpQjtBQTZFbEIrSyxVQTdFa0Isb0JBNkVUcFgsT0E3RVMsRUE2RUFxTSxTQTdFQSxFQTZFVztBQUMzQixXQUFPck0sT0FBTyxDQUFDeUIsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkIySyxTQUEzQixDQUFQO0FBQ0Q7QUEvRWlCLENBQXBCO0FBa0ZBLGlFQUFlL0gsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBSStTLFlBQVksR0FBRzlLLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQmhGLGdCQUFyQztBQUNBLElBQUk4UCxXQUFXLEdBQUcvSyxPQUFPLENBQUNDLFNBQVIsQ0FBa0JFLGFBQXBDLEMsQ0FFQTs7QUFDQSxJQUFNakMsbUNBQW1DLEdBQUksWUFBTTtBQUNqRCxNQUFNa0MsQ0FBQyxHQUFHLElBQUlyQyxXQUFKLENBQWdCLFdBQWhCLEVBQTZCO0FBQ3JDQyxjQUFVLEVBQUU7QUFEeUIsR0FBN0IsQ0FBVjtBQUlBLE1BQU12SyxPQUFPLEdBQUcwRSxRQUFRLENBQUNrSSxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0E1TSxTQUFPLENBQUM2SSxnQkFBUixDQUF5QixXQUF6QixFQUFzQztBQUFBLFdBQU0sSUFBTjtBQUFBLEdBQXRDO0FBRUE4RCxHQUFDLENBQUM3SCxjQUFGO0FBQ0E5RSxTQUFPLENBQUMwSyxhQUFSLENBQXNCaUMsQ0FBdEI7QUFDQSxTQUFPQSxDQUFDLENBQUN2SyxnQkFBVDtBQUNELENBWDJDLEVBQTVDOztBQWFBLElBQU15SyxrQkFBa0IsR0FBRyxVQUEzQjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBSSxZQUFNO0FBQy9CLE1BQU05TSxPQUFPLEdBQUcwRSxRQUFRLENBQUNrSSxhQUFULENBQXVCLEtBQXZCLENBQWhCOztBQUVBLE1BQUk7QUFDRjVNLFdBQU8sQ0FBQ3dILGdCQUFSLENBQXlCLFVBQXpCO0FBQ0QsR0FGRCxDQUVFLE9BQU91RixDQUFQLEVBQVU7QUFDVixXQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVZ5QixFQUExQjs7QUFZQSxJQUFJLENBQUNELGlCQUFMLEVBQXdCO0FBQ3RCdUssY0FBWSxHQUFHLHNCQUFVdlcsUUFBVixFQUFvQjtBQUNqQyxRQUFJLENBQUMrTCxrQkFBa0IsQ0FBQ3RJLElBQW5CLENBQXdCekQsUUFBeEIsQ0FBTCxFQUF3QztBQUN0QyxhQUFPLEtBQUswRyxnQkFBTCxDQUFzQjFHLFFBQXRCLENBQVA7QUFDRDs7QUFFRCxRQUFNa00sS0FBSyxHQUFHbEosT0FBTyxDQUFDLEtBQUt0RCxFQUFOLENBQXJCOztBQUVBLFFBQUksQ0FBQ3dNLEtBQUwsRUFBWTtBQUNWLFdBQUt4TSxFQUFMLEdBQVV5TSxzREFBTSxDQUFDLE9BQUQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFDQSxRQUFJO0FBQ0ZwTSxjQUFRLEdBQUdBLFFBQVEsQ0FBQ3dILE9BQVQsQ0FBaUJ1RSxrQkFBakIsYUFBeUMsS0FBS3JNLEVBQTlDLEVBQVg7QUFDQTBNLGNBQVEsR0FBRyxLQUFLMUYsZ0JBQUwsQ0FBc0IxRyxRQUF0QixDQUFYO0FBQ0QsS0FIRCxTQUdVO0FBQ1IsVUFBSSxDQUFDa00sS0FBTCxFQUFZO0FBQ1YsYUFBSzNCLGVBQUwsQ0FBcUIsSUFBckI7QUFDRDtBQUNGOztBQUVELFdBQU82QixRQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBb0ssYUFBVyxHQUFHLHFCQUFVeFcsUUFBVixFQUFvQjtBQUNoQyxRQUFJLENBQUMrTCxrQkFBa0IsQ0FBQ3RJLElBQW5CLENBQXdCekQsUUFBeEIsQ0FBTCxFQUF3QztBQUN0QyxhQUFPLEtBQUs0TCxhQUFMLENBQW1CNUwsUUFBbkIsQ0FBUDtBQUNEOztBQUVELFFBQU1xTSxPQUFPLEdBQUdiLElBQUksQ0FBQ2MsSUFBTCxDQUFVLElBQVYsRUFBZ0J0TSxRQUFoQixDQUFoQjs7QUFFQSxRQUFJLE9BQU9xTSxPQUFPLENBQUMsQ0FBRCxDQUFkLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3JDLGFBQU9BLE9BQU8sQ0FBQyxDQUFELENBQWQ7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHQVpEO0FBYUQ7O0FBRUQsSUFBTWIsSUFBSSxHQUFHK0ssWUFBYjtBQUNBLElBQU01SyxPQUFPLEdBQUc2SyxXQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNakssU0FBUyxHQUFHLENBQWxCO0FBRUEsSUFBTTlNLGNBQWMsR0FBRztBQUNyQmdYLFNBRHFCLG1CQUNidlgsT0FEYSxFQUNKYyxRQURJLEVBQ007QUFDekIsV0FBT2QsT0FBTyxDQUFDdVgsT0FBUixDQUFnQnpXLFFBQWhCLENBQVA7QUFDRCxHQUhvQjtBQUtyQnFNLFNBTHFCLG1CQUtibk4sT0FMYSxFQUtKYyxRQUxJLEVBS007QUFDekIsV0FBT2QsT0FBTyxDQUFDbU4sT0FBUixDQUFnQnJNLFFBQWhCLENBQVA7QUFDRCxHQVBvQjtBQVNyQndMLE1BVHFCLGdCQVNoQnhMLFFBVGdCLEVBUzhCO0FBQUE7O0FBQUEsUUFBcENkLE9BQW9DLHVFQUExQjBFLFFBQVEsQ0FBQzRJLGVBQWlCO0FBQ2pELFdBQU8sWUFBR0MsTUFBSCxnQ0FBYUMsb0RBQUEsQ0FBWXhOLE9BQVosRUFBcUJjLFFBQXJCLENBQWIsRUFBUDtBQUNELEdBWG9CO0FBYXJCMkwsU0FicUIsbUJBYWIzTCxRQWJhLEVBYWlDO0FBQUEsUUFBcENkLE9BQW9DLHVFQUExQjBFLFFBQVEsQ0FBQzRJLGVBQWlCO0FBQ3BELFdBQU9iLHVEQUFBLENBQWF6TSxPQUFiLEVBQXNCYyxRQUF0QixDQUFQO0FBQ0QsR0Fmb0I7QUFpQnJCMk0sVUFqQnFCLG9CQWlCWnpOLE9BakJZLEVBaUJIYyxRQWpCRyxFQWlCTztBQUFBOztBQUMxQixRQUFNMk0sUUFBUSxHQUFHLGFBQUdGLE1BQUgsaUNBQWF2TixPQUFPLENBQUN5TixRQUFyQixFQUFqQjs7QUFFQSxXQUFPQSxRQUFRLENBQUN4TSxNQUFULENBQWdCLFVBQUN5TSxLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDUCxPQUFOLENBQWNyTSxRQUFkLENBQVg7QUFBQSxLQUFoQixDQUFQO0FBQ0QsR0FyQm9CO0FBdUJyQjZNLFNBdkJxQixtQkF1QmIzTixPQXZCYSxFQXVCSmMsUUF2QkksRUF1Qk07QUFDekIsUUFBTTZNLE9BQU8sR0FBRyxFQUFoQjtBQUVBLFFBQUlDLFFBQVEsR0FBRzVOLE9BQU8sQ0FBQ3lILFVBQXZCOztBQUVBLFdBQU9tRyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQkMsSUFBSSxDQUFDQyxZQUF2QyxJQUF1REgsUUFBUSxDQUFDQyxRQUFULEtBQXNCUixTQUFwRixFQUErRjtBQUM3RixVQUFJLEtBQUtGLE9BQUwsQ0FBYVMsUUFBYixFQUF1QjlNLFFBQXZCLENBQUosRUFBc0M7QUFDcEM2TSxlQUFPLENBQUN2TSxJQUFSLENBQWF3TSxRQUFiO0FBQ0Q7O0FBRURBLGNBQVEsR0FBR0EsUUFBUSxDQUFDbkcsVUFBcEI7QUFDRDs7QUFFRCxXQUFPa0csT0FBUDtBQUNELEdBckNvQjtBQXVDckJLLE1BdkNxQixnQkF1Q2hCaE8sT0F2Q2dCLEVBdUNQYyxRQXZDTyxFQXVDRztBQUN0QixRQUFJbU4sUUFBUSxHQUFHak8sT0FBTyxDQUFDa08sc0JBQXZCOztBQUVBLFdBQU9ELFFBQVAsRUFBaUI7QUFDZixVQUFJQSxRQUFRLENBQUNkLE9BQVQsQ0FBaUJyTSxRQUFqQixDQUFKLEVBQWdDO0FBQzlCLGVBQU8sQ0FBQ21OLFFBQUQsQ0FBUDtBQUNEOztBQUVEQSxjQUFRLEdBQUdBLFFBQVEsQ0FBQ0Msc0JBQXBCO0FBQ0Q7O0FBRUQsV0FBTyxFQUFQO0FBQ0QsR0FuRG9CO0FBcURyQkMsTUFyRHFCLGdCQXFEaEJuTyxPQXJEZ0IsRUFxRFBjLFFBckRPLEVBcURHO0FBQ3RCLFFBQUlxTixJQUFJLEdBQUduTyxPQUFPLENBQUNvTyxrQkFBbkI7O0FBRUEsV0FBT0QsSUFBUCxFQUFhO0FBQ1gsVUFBSSxLQUFLaEIsT0FBTCxDQUFhZ0IsSUFBYixFQUFtQnJOLFFBQW5CLENBQUosRUFBa0M7QUFDaEMsZUFBTyxDQUFDcU4sSUFBRCxDQUFQO0FBQ0Q7O0FBRURBLFVBQUksR0FBR0EsSUFBSSxDQUFDQyxrQkFBWjtBQUNEOztBQUVELFdBQU8sRUFBUDtBQUNEO0FBakVvQixDQUF2QjtBQW9FQSxpRUFBZTdOLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7O0lBRU1pWCxTO0FBQ0oscUJBQVl4WCxPQUFaLEVBQW1DO0FBQUE7O0FBQUEsUUFBZG9TLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDakMsU0FBS2pTLFFBQUwsR0FBZ0JILE9BQWhCO0FBQ0EsU0FBS3lYLE1BQUwsR0FBY3JGLE9BQU8sQ0FBQ3pOLEtBQVIsSUFBaUIsTUFBL0I7O0FBQ0EsU0FBSytTLFVBQUwsR0FBa0J0RixPQUFPLENBQUN1RixTQUFSLElBQXNCO0FBQUEsYUFBTSxJQUFOO0FBQUEsS0FBeEM7O0FBQ0EsU0FBS3hXLFNBQUwsR0FDRWlSLE9BQU8sQ0FBQ3RSLFFBQVIsSUFBb0IscUVBRHRCO0FBRUEsU0FBSzhXLFlBQUwsR0FBb0J4RixPQUFPLENBQUN5RixXQUFSLElBQXVCLEtBQTNDO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsRUFBMUI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjs7QUFFQSxTQUFLaFIsT0FBTCxHQUFlLFVBQUMyRixDQUFELEVBQU87QUFDcEIsVUFBSSxLQUFJLENBQUMrSyxVQUFMLENBQWdCL0ssQ0FBaEIsS0FBc0JBLENBQUMsQ0FBQy9ILE1BQUYsS0FBYSxLQUFJLENBQUNvVCxZQUE1QyxFQUEwRDtBQUN4RHJMLFNBQUMsQ0FBQzdILGNBQUY7O0FBQ0EsYUFBSSxDQUFDaVQsYUFBTCxDQUFtQkUsS0FBbkI7QUFDRDtBQUNGLEtBTEQ7QUFNRDs7OztXQUVELGdCQUFPO0FBQ0wsV0FBS0MsWUFBTDs7QUFDQSxXQUFLQyxLQUFMOztBQUNBLFdBQUtDLGFBQUw7QUFDRDs7O1dBRUQsbUJBQVU7QUFBQTs7QUFDUixXQUFLTixrQkFBTCxDQUF3QnpWLE9BQXhCLENBQWdDLFVBQUNyQyxPQUFELEVBQWE7QUFDM0NBLGVBQU8sQ0FBQytJLG1CQUFSLENBQTRCLE1BQUksQ0FBQzBPLE1BQWpDLEVBQXlDLE1BQUksQ0FBQ3pRLE9BQTlDO0FBQ0QsT0FGRDtBQUdEOzs7V0FFRCxrQkFBUztBQUNQLFdBQUtrUixZQUFMOztBQUNBLFdBQUtFLGFBQUw7QUFDRDs7O1dBRUQsaUJBQVE7QUFBQTs7QUFDTixVQUFNcFIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQzJGLENBQUQsRUFBTztBQUNyQixZQUFJLENBQUMsTUFBSSxDQUFDb0wsYUFBTixJQUF1QnBMLENBQUMsQ0FBQ2hILEdBQUYsS0FBVSxLQUFyQyxFQUE0QztBQUM1Q2dILFNBQUMsQ0FBQzdILGNBQUY7O0FBQ0EsY0FBSSxDQUFDaVQsYUFBTCxDQUFtQkUsS0FBbkI7O0FBRUE5SSxjQUFNLENBQUNwRyxtQkFBUCxDQUEyQixTQUEzQixFQUFzQy9CLE9BQXRDO0FBQ0QsT0FORDs7QUFRQW1JLFlBQU0sQ0FBQ3RHLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DN0IsT0FBbkM7QUFDRDs7O1dBRUQsd0JBQWVxUixRQUFmLEVBQXlCO0FBQ3ZCLGFBQU9BLFFBQVEsQ0FBQ3BYLE1BQVQsQ0FBZ0IsVUFBQ3FYLEVBQUQsRUFBUTtBQUM3QixZQUFJLENBQUM5SCxvREFBUyxDQUFDOEgsRUFBRCxDQUFkLEVBQW9CLE9BQU8sS0FBUDtBQUVwQixZQUFNQyxTQUFTLEdBQUdoWSxvRUFBQSxDQUF1QitYLEVBQXZCLEVBQTJCLEdBQTNCLENBQWxCOztBQUVBLGFBQUssSUFBSTVYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2WCxTQUFTLENBQUMzWCxNQUE5QixFQUFzQ0YsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxjQUFNa0MsS0FBSyxHQUFHdU0sTUFBTSxDQUFDQyxnQkFBUCxDQUF3Qm1KLFNBQVMsQ0FBQzdYLENBQUQsQ0FBakMsQ0FBZDtBQUNBLGNBQUlrQyxLQUFLLEtBQUtBLEtBQUssQ0FBQytOLE9BQU4sS0FBa0IsTUFBbEIsSUFBNEIvTixLQUFLLENBQUNnTyxVQUFOLEtBQXFCLFFBQXRELENBQVQsRUFBMEUsT0FBTyxLQUFQO0FBQzNFOztBQUNELGVBQU8sSUFBUDtBQUNELE9BVk0sQ0FBUDtBQVdEOzs7V0FFRCx3QkFBZTtBQUNiLFdBQUtrSCxrQkFBTCxHQUEwQnZYLGlFQUFBLENBQW9CLEtBQUtZLFNBQXpCLEVBQW9DLEtBQUtoQixRQUF6QyxDQUExQjs7QUFFQSxVQUFJLEtBQUt5WCxZQUFULEVBQXVCO0FBQ3JCLGFBQUtFLGtCQUFMLEdBQTBCLEtBQUtVLGNBQUwsQ0FBb0IsS0FBS1Ysa0JBQXpCLENBQTFCO0FBQ0Q7O0FBRUQsV0FBS0MsYUFBTCxHQUFxQixLQUFLRCxrQkFBTCxDQUF3QixDQUF4QixDQUFyQjtBQUNBLFdBQUtFLFlBQUwsR0FBb0IsS0FBS0Ysa0JBQUwsQ0FBd0IsS0FBS0Esa0JBQUwsQ0FBd0JsWCxNQUF4QixHQUFpQyxDQUF6RCxDQUFwQjtBQUNEOzs7V0FFRCx5QkFBZ0I7QUFBQTs7QUFDZCxXQUFLa1gsa0JBQUwsQ0FBd0J6VixPQUF4QixDQUFnQyxVQUFDckMsT0FBRCxFQUFVVSxDQUFWLEVBQWdCO0FBQzlDLFlBQUlBLENBQUMsS0FBSyxNQUFJLENBQUNvWCxrQkFBTCxDQUF3QmxYLE1BQXhCLEdBQWlDLENBQTNDLEVBQThDO0FBQzVDWixpQkFBTyxDQUFDNkksZ0JBQVIsQ0FBeUIsTUFBSSxDQUFDNE8sTUFBOUIsRUFBc0MsTUFBSSxDQUFDelEsT0FBM0M7QUFDRCxTQUZELE1BRU87QUFDTGhILGlCQUFPLENBQUMrSSxtQkFBUixDQUE0QixNQUFJLENBQUMwTyxNQUFqQyxFQUF5QyxNQUFJLENBQUN6USxPQUE5QztBQUNEO0FBQ0YsT0FORDtBQU9EOzs7Ozs7QUFHSCxpRUFBZXdRLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNbkosT0FBTyxHQUFHLE9BQWhCO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcsSUFBaEM7QUFDQSxJQUFNaEwsY0FBYyxHQUFHLGVBQXZCLEMsQ0FFQTs7QUFDQSxJQUFNaUwsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3RCLE1BQUlBLEdBQUcsS0FBSyxJQUFSLElBQWdCQSxHQUFHLEtBQUtDLFNBQTVCLEVBQXVDO0FBQ3JDLHFCQUFVRCxHQUFWO0FBQ0Q7O0FBRUQsU0FBTyxHQUFHMUQsUUFBSCxDQUNKc0MsSUFESSxDQUNDb0IsR0FERCxFQUVKRSxLQUZJLENBRUUsYUFGRixFQUVpQixDQUZqQixFQUdKekQsV0FISSxFQUFQO0FBSUQsQ0FURDtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1nQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDMEIsTUFBRCxFQUFZO0FBQ3pCLEtBQUc7QUFDREEsVUFBTSxJQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCVCxPQUEzQixDQUFWO0FBQ0QsR0FGRCxRQUVTM0osUUFBUSxDQUFDcUssY0FBVCxDQUF3QkosTUFBeEIsQ0FGVDs7QUFJQSxTQUFPQSxNQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDaFAsT0FBRCxFQUFhO0FBQy9CLE1BQUljLFFBQVEsR0FBR2QsT0FBTyxDQUFDK0IsWUFBUixDQUFxQixhQUFyQixDQUFmOztBQUVBLE1BQUksQ0FBQ2pCLFFBQUQsSUFBYUEsUUFBUSxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDLFFBQU1tTyxRQUFRLEdBQUdqUCxPQUFPLENBQUMrQixZQUFSLENBQXFCLE1BQXJCLENBQWpCO0FBRUFqQixZQUFRLEdBQUdtTyxRQUFRLElBQUlBLFFBQVEsS0FBSyxHQUF6QixHQUErQkEsUUFBUSxDQUFDQyxJQUFULEVBQS9CLEdBQWlELElBQTVEO0FBQ0Q7O0FBRUQsU0FBT3BPLFFBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ2YsT0FBRCxFQUFhO0FBQzFDLE1BQU1jLFFBQVEsR0FBR2tPLFdBQVcsQ0FBQ2hQLE9BQUQsQ0FBNUI7O0FBRUEsTUFBSWMsUUFBSixFQUFjO0FBQ1osV0FBTzRELFFBQVEsQ0FBQ2dJLGFBQVQsQ0FBdUI1TCxRQUF2QixJQUFtQ0EsUUFBbkMsR0FBOEMsSUFBckQ7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVJEOztBQVVBLElBQU04QyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUM1RCxPQUFELEVBQWE7QUFDMUMsTUFBTWMsUUFBUSxHQUFHa08sV0FBVyxDQUFDaFAsT0FBRCxDQUE1QjtBQUVBLFNBQU9jLFFBQVEsR0FBRzRELFFBQVEsQ0FBQ2dJLGFBQVQsQ0FBdUI1TCxRQUF2QixDQUFILEdBQXNDLElBQXJEO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNdUMsZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFtQyxDQUFDckQsT0FBRCxFQUFhO0FBQ3BELE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBTyxDQUFQO0FBQ0QsR0FIbUQsQ0FLcEQ7OztBQUNBLDhCQUE4Q21QLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JwUCxPQUF4QixDQUE5QztBQUFBLE1BQU1vRCxrQkFBTix5QkFBTUEsa0JBQU47QUFBQSxNQUEwQmlNLGVBQTFCLHlCQUEwQkEsZUFBMUI7O0FBRUEsTUFBTUMsdUJBQXVCLEdBQUdDLFVBQVUsQ0FBQ25NLGtCQUFELENBQTFDO0FBQ0EsTUFBTW9NLG9CQUFvQixHQUFHRCxVQUFVLENBQUNGLGVBQUQsQ0FBdkMsQ0FUb0QsQ0FXcEQ7O0FBQ0EsTUFBSSxDQUFDQyx1QkFBRCxJQUE0QixDQUFDRSxvQkFBakMsRUFBdUQ7QUFDckQsV0FBTyxDQUFQO0FBQ0QsR0FkbUQsQ0FnQnBEOzs7QUFDQXBNLG9CQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ3FNLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCLENBQTlCLENBQXJCO0FBQ0FKLGlCQUFlLEdBQUdBLGVBQWUsQ0FBQ0ksS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkIsQ0FBM0IsQ0FBbEI7QUFFQSxTQUFPLENBQUNGLFVBQVUsQ0FBQ25NLGtCQUFELENBQVYsR0FBaUNtTSxVQUFVLENBQUNGLGVBQUQsQ0FBNUMsSUFBaUVmLHVCQUF4RTtBQUNELENBckJEOztBQXVCQSxJQUFNb0Isb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDMVAsT0FBRCxFQUFhO0FBQ3hDQSxTQUFPLENBQUMwSyxhQUFSLENBQXNCLElBQUlWLEtBQUosQ0FBVTFHLGNBQVYsQ0FBdEI7QUFDRCxDQUZEOztBQUlBLElBQU1VLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN3SyxHQUFEO0FBQUEsU0FBUyxDQUFDQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVVBLEdBQVgsRUFBZ0JYLFFBQXpCO0FBQUEsQ0FBbEI7O0FBRUEsSUFBTXRLLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ3ZELE9BQUQsRUFBVTJQLFFBQVYsRUFBdUI7QUFDbEQsTUFBSUMsTUFBTSxHQUFHLEtBQWI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsQ0FBeEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0gsUUFBUSxHQUFHRSxlQUFwQzs7QUFDQSxXQUFTRSxRQUFULEdBQW9CO0FBQ2xCSCxVQUFNLEdBQUcsSUFBVDtBQUNBNVAsV0FBTyxDQUFDK0ksbUJBQVIsQ0FBNEJ6RixjQUE1QixFQUE0Q3lNLFFBQTVDO0FBQ0Q7O0FBRUQvUCxTQUFPLENBQUM2SSxnQkFBUixDQUF5QnZGLGNBQXpCLEVBQXlDeU0sUUFBekM7QUFDQUMsWUFBVSxDQUFDLFlBQU07QUFDZixRQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNYRiwwQkFBb0IsQ0FBQzFQLE9BQUQsQ0FBcEI7QUFDRDtBQUNGLEdBSlMsRUFJUDhQLGdCQUpPLENBQVY7QUFLRCxDQWZEOztBQWlCQSxJQUFNL0wsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDa00sYUFBRCxFQUFnQmhRLE1BQWhCLEVBQXdCaVEsV0FBeEIsRUFBd0M7QUFDOURwSSxRQUFNLENBQUNDLElBQVAsQ0FBWW1JLFdBQVosRUFBeUI3TixPQUF6QixDQUFpQyxVQUFDOE4sUUFBRCxFQUFjO0FBQzdDLFFBQU1DLGFBQWEsR0FBR0YsV0FBVyxDQUFDQyxRQUFELENBQWpDO0FBQ0EsUUFBTWhGLEtBQUssR0FBR2xMLE1BQU0sQ0FBQ2tRLFFBQUQsQ0FBcEI7QUFDQSxRQUFNRSxTQUFTLEdBQUdsRixLQUFLLElBQUluSCxTQUFTLENBQUNtSCxLQUFELENBQWxCLEdBQTRCLFNBQTVCLEdBQXdDb0QsTUFBTSxDQUFDcEQsS0FBRCxDQUFoRTs7QUFFQSxRQUFJLENBQUMsSUFBSW1GLE1BQUosQ0FBV0YsYUFBWCxFQUEwQjdMLElBQTFCLENBQStCOEwsU0FBL0IsQ0FBTCxFQUFnRDtBQUM5QyxZQUFNLElBQUlFLEtBQUosQ0FDSixVQUFHTixhQUFhLENBQUNoTixXQUFkLEVBQUgsNkJBQ2FrTixRQURiLGdDQUN5Q0UsU0FEekMseUNBRXdCRCxhQUZ4QixRQURJLENBQU47QUFLRDtBQUNGLEdBWkQ7QUFhRCxDQWREOztBQWdCQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDeFEsT0FBRCxFQUFhO0FBQzdCLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsT0FBTyxDQUFDNEMsS0FBUixJQUFpQjVDLE9BQU8sQ0FBQ3lILFVBQXpCLElBQXVDekgsT0FBTyxDQUFDeUgsVUFBUixDQUFtQjdFLEtBQTlELEVBQXFFO0FBQ25FLFFBQU02TixZQUFZLEdBQUdyQixnQkFBZ0IsQ0FBQ3BQLE9BQUQsQ0FBckM7QUFDQSxRQUFNMFEsZUFBZSxHQUFHdEIsZ0JBQWdCLENBQUNwUCxPQUFPLENBQUN5SCxVQUFULENBQXhDO0FBRUEsV0FDRWdKLFlBQVksQ0FBQ0UsT0FBYixLQUF5QixNQUF6QixJQUNBRCxlQUFlLENBQUNDLE9BQWhCLEtBQTRCLE1BRDVCLElBRUFGLFlBQVksQ0FBQ0csVUFBYixLQUE0QixRQUg5QjtBQUtEOztBQUVELFNBQU8sS0FBUDtBQUNELENBakJEOztBQW1CQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUM3USxPQUFELEVBQWE7QUFDbEMsTUFBSSxDQUFDMEUsUUFBUSxDQUFDNEksZUFBVCxDQUF5QndELFlBQTlCLEVBQTRDO0FBQzFDLFdBQU8sSUFBUDtBQUNELEdBSGlDLENBS2xDOzs7QUFDQSxNQUFJLE9BQU85USxPQUFPLENBQUMrUSxXQUFmLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDLFFBQU1DLElBQUksR0FBR2hSLE9BQU8sQ0FBQytRLFdBQVIsRUFBYjtBQUNBLFdBQU9DLElBQUksWUFBWUMsVUFBaEIsR0FBNkJELElBQTdCLEdBQW9DLElBQTNDO0FBQ0Q7O0FBRUQsTUFBSWhSLE9BQU8sWUFBWWlSLFVBQXZCLEVBQW1DO0FBQ2pDLFdBQU9qUixPQUFQO0FBQ0QsR0FiaUMsQ0FlbEM7OztBQUNBLE1BQUksQ0FBQ0EsT0FBTyxDQUFDeUgsVUFBYixFQUF5QjtBQUN2QixXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPb0osY0FBYyxDQUFDN1EsT0FBTyxDQUFDeUgsVUFBVCxDQUFyQjtBQUNELENBckJEOztBQXVCQSxJQUFNeUosSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUFNLFlBQVksQ0FBRSxDQUFwQjtBQUFBLENBQWI7O0FBRUEsSUFBTXpOLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUN6RCxPQUFEO0FBQUEsU0FBYUEsT0FBTyxDQUFDbVIsWUFBckI7QUFBQSxDQUFmOztBQUVBLElBQU1qTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLGdCQUFtQmlLLE1BQW5CO0FBQUEsTUFBUWlDLE1BQVIsV0FBUUEsTUFBUjs7QUFFQSxNQUFJQSxNQUFNLElBQUksQ0FBQzFNLFFBQVEsQ0FBQ21ILElBQVQsQ0FBY3dGLFlBQWQsQ0FBMkIsZ0JBQTNCLENBQWYsRUFBNkQ7QUFDM0QsV0FBT0QsTUFBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBUkQ7O0FBVUEsSUFBTXFILEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLFVBQUQsRUFBZ0I7QUFDNUIsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdGLFVBQVgsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTTFZLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUM2WSxHQUFELEVBQVM7QUFDdkIsU0FBT25VLFFBQVEsQ0FBQ2tJLGFBQVQsQ0FBdUJpTSxHQUF2QixDQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xPLElBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQSxJQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsRUFBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxFQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUcsQ0FBWjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHLEVBQVYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ1A7O0lBRU1DLEs7QUFDSixpQkFBWXBiLE9BQVosRUFBb0Q7QUFBQSxRQUEvQjJFLEtBQStCLHVFQUF2QixPQUF1QjtBQUFBLFFBQWR5TixPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xELFNBQUtqUyxRQUFMLEdBQWdCSCxPQUFoQjtBQUNBLFNBQUt5WCxNQUFMLEdBQWM5UyxLQUFkLENBRmtELENBSWxEOztBQUVBLFNBQUswVyxLQUFMLEdBQWEsSUFBSUMsOENBQUosQ0FBVXRiLE9BQVYsRUFBbUJvUyxPQUFuQixDQUFiLENBTmtELENBUWxEOztBQUVBLFNBQUttSixrQkFBTCxHQUEwQixLQUFLQyxpQkFBTCxDQUF1QmhKLElBQXZCLENBQTRCLElBQTVCLENBQTFCO0FBQ0EsU0FBS2lKLGlCQUFMLEdBQXlCLEtBQUtDLGdCQUFMLENBQXNCbEosSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBekI7QUFDQSxTQUFLbUosZ0JBQUwsR0FBd0IsS0FBS0MsZUFBTCxDQUFxQnBKLElBQXJCLENBQTBCLElBQTFCLENBQXhCO0FBQ0Q7Ozs7V0FFRCxtQkFBVTtBQUNSLFdBQUtyUyxRQUFMLENBQWM0SSxtQkFBZCxDQUFrQyxZQUFsQyxFQUFnRCxLQUFLd1Msa0JBQXJEOztBQUNBLFdBQUtwYixRQUFMLENBQWM0SSxtQkFBZCxDQUFrQyxXQUFsQyxFQUErQyxLQUFLMFMsaUJBQXBEOztBQUNBdE0sWUFBTSxDQUFDcEcsbUJBQVAsQ0FBMkIsVUFBM0IsRUFBdUMsS0FBSzRTLGdCQUE1QztBQUNEOzs7V0FFRCxnQkFBTztBQUFBOztBQUNMO0FBQ0EsV0FBS3hiLFFBQUwsQ0FBYzBJLGdCQUFkLENBQStCLFlBQS9CLEVBQTZDLFVBQUM4RCxDQUFEO0FBQUEsZUFBTyxLQUFJLENBQUM2TyxpQkFBTCxDQUF1QjdPLENBQXZCLENBQVA7QUFBQSxPQUE3QyxFQUZLLENBR0w7OztBQUNBLFdBQUt4TSxRQUFMLENBQWMwSSxnQkFBZCxDQUErQixXQUEvQixFQUE0QyxVQUFDOEQsQ0FBRDtBQUFBLGVBQU8sS0FBSSxDQUFDK08sZ0JBQUwsQ0FBc0IvTyxDQUF0QixDQUFQO0FBQUEsT0FBNUMsRUFKSyxDQUtMOzs7QUFDQXdDLFlBQU0sQ0FBQ3RHLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFVBQUM4RCxDQUFEO0FBQUEsZUFBTyxLQUFJLENBQUNpUCxlQUFMLENBQXFCalAsQ0FBckIsQ0FBUDtBQUFBLE9BQXBDO0FBQ0Q7OztXQUVELDJCQUFrQkEsQ0FBbEIsRUFBcUI7QUFDbkIsV0FBSyxLQUFLOEssTUFBVixFQUFrQm9FLGdCQUFsQixDQUFtQ2xQLENBQW5DO0FBQ0Q7OztXQUVELDBCQUFpQkEsQ0FBakIsRUFBb0I7QUFDbEIsV0FBSyxLQUFLOEssTUFBVixFQUFrQnFFLGVBQWxCLENBQWtDblAsQ0FBbEM7QUFDRDs7O1dBRUQseUJBQWdCQSxDQUFoQixFQUFtQjtBQUNqQixXQUFLLEtBQUs4SyxNQUFWLEVBQWtCc0UsY0FBbEIsQ0FBaUNwUCxDQUFqQztBQUNEOzs7Ozs7QUFHSCxpRUFBZXlPLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBRUEsSUFBTVksZUFBZSxHQUFHO0FBQ3RCQyxXQUFTLEVBQUUsRUFEVztBQUV0QkMsV0FBUyxFQUFFO0FBRlcsQ0FBeEI7O0lBS01aLEs7Ozs7O0FBQ0osaUJBQVl0YixPQUFaLEVBQXFCb1MsT0FBckIsRUFBOEI7QUFBQTs7QUFBQTs7QUFDNUI7QUFDQSxVQUFLalMsUUFBTCxHQUFnQkgsT0FBaEI7QUFDQSxVQUFLbWMsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFVBQUs5SixRQUFMLG1DQUNLMkosZUFETCxHQUVLNUosT0FGTDtBQUo0QjtBQVE3Qjs7OztXQUVELDBCQUFpQnpGLENBQWpCLEVBQW9CO0FBQ2xCLFdBQUt3UCxjQUFMLEdBQXNCLEtBQUtDLGVBQUwsQ0FBcUJ6UCxDQUFyQixDQUF0QjtBQUNEOzs7V0FFRCx5QkFBZ0JBLENBQWhCLEVBQW1CO0FBQ2pCLFVBQUksQ0FBQyxLQUFLd1AsY0FBVixFQUEwQjs7QUFFMUIsVUFBTWxRLFFBQVEsR0FBRyxLQUFLbVEsZUFBTCxDQUFxQnpQLENBQXJCLENBQWpCOztBQUNBLFVBQU0wUCxZQUFZLEdBQUc7QUFDbkJDLFNBQUMsRUFBRXJRLFFBQVEsQ0FBQ3FRLENBQVQsR0FBYSxLQUFLSCxjQUFMLENBQW9CRyxDQURqQjtBQUVuQkMsU0FBQyxFQUFFdFEsUUFBUSxDQUFDc1EsQ0FBVCxHQUFhLEtBQUtKLGNBQUwsQ0FBb0JJO0FBRmpCLE9BQXJCOztBQUtBLFVBQU1sQixLQUFLLEdBQUcsS0FBS21CLGFBQUwsQ0FBbUJILFlBQW5CLENBQWQ7O0FBRUEsVUFBSSxLQUFLaEssUUFBTCxDQUFjNkosU0FBZCxLQUE0QixLQUFoQyxFQUF1QztBQUNyQyxZQUFJYixLQUFLLENBQUNrQixDQUFOLENBQVFwUixLQUFSLEdBQWdCLEtBQUtrSCxRQUFMLENBQWM0SixTQUE5QixJQUEyQ1osS0FBSyxDQUFDaUIsQ0FBTixDQUFRblIsS0FBUixHQUFnQixLQUFLa0gsUUFBTCxDQUFjNEosU0FBN0UsRUFBd0Y7QUFDdEY7QUFDRDs7QUFDRCxZQUFNQyxTQUFTLEdBQUdiLEtBQUssQ0FBQ2tCLENBQU4sQ0FBUXBSLEtBQVIsR0FBZ0JrUSxLQUFLLENBQUNpQixDQUFOLENBQVFuUixLQUF4QixHQUFnQ2tRLEtBQUssQ0FBQ2tCLENBQU4sQ0FBUUwsU0FBeEMsR0FBb0RiLEtBQUssQ0FBQ2lCLENBQU4sQ0FBUUosU0FBOUU7QUFDQS9aLDJFQUFBLENBQXFCLEtBQUtoQyxRQUExQixpQkFBNEMrYixTQUE1QztBQUNBL1osMkVBQUEsQ0FBcUIsS0FBS2hDLFFBQTFCLEVBQW9DLE9BQXBDLEVBQTZDO0FBQUUrYixtQkFBUyxFQUFUQTtBQUFGLFNBQTdDO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTU0sSUFBSSxHQUFHLEtBQUtwSyxRQUFMLENBQWM2SixTQUFkLEtBQTRCLE1BQTVCLElBQXNDLEtBQUs3SixRQUFMLEtBQWtCLE9BQXhELEdBQWtFLEdBQWxFLEdBQXdFLEdBQXJGOztBQUVBLFVBQ0VnSixLQUFLLENBQUNvQixJQUFELENBQUwsQ0FBWVAsU0FBWixLQUEwQixLQUFLN0osUUFBTCxDQUFjNkosU0FBeEMsSUFDQWIsS0FBSyxDQUFDb0IsSUFBRCxDQUFMLENBQVl0UixLQUFaLEdBQW9CLEtBQUtrSCxRQUFMLENBQWM0SixTQUZwQyxFQUdFO0FBQ0E5WiwyRUFBQSxDQUFxQixLQUFLaEMsUUFBMUIsaUJBQTRDa2IsS0FBSyxDQUFDb0IsSUFBRCxDQUFMLENBQVlQLFNBQXhEO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNEO0FBQ0Y7OztXQUVELDBCQUFpQjtBQUNmLFdBQUtBLGNBQUwsR0FBc0IsSUFBdEI7QUFDRDs7OztFQWxEaUJPLG1EOztBQXFEcEIsaUVBQWVwQixLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM3RE1vQixTOzs7Ozs7O1dBQ0oseUJBQWdCL1AsQ0FBaEIsRUFBbUI7QUFDakIsc0NBQWdCQSxDQUFDLENBQUNnUSxPQUFsQjtBQUFBLFVBQU9DLEtBQVA7O0FBQ0EsYUFBTztBQUNMTixTQUFDLEVBQUVNLEtBQUssQ0FBQ0MsT0FESjtBQUVMTixTQUFDLEVBQUVLLEtBQUssQ0FBQ0U7QUFGSixPQUFQO0FBSUQ7OztXQUVELHVCQUFjVCxZQUFkLEVBQTRCO0FBQzFCLGFBQU87QUFDTEMsU0FBQyxFQUFFO0FBQ0RKLG1CQUFTLEVBQUVHLFlBQVksQ0FBQ0MsQ0FBYixHQUFpQixDQUFqQixHQUFxQixNQUFyQixHQUE4QixPQUR4QztBQUVEblIsZUFBSyxFQUFFeUQsSUFBSSxDQUFDbU8sR0FBTCxDQUFTVixZQUFZLENBQUNDLENBQXRCO0FBRk4sU0FERTtBQUtMQyxTQUFDLEVBQUU7QUFDREwsbUJBQVMsRUFBRUcsWUFBWSxDQUFDRSxDQUFiLEdBQWlCLENBQWpCLEdBQXFCLElBQXJCLEdBQTRCLE1BRHRDO0FBRURwUixlQUFLLEVBQUV5RCxJQUFJLENBQUNtTyxHQUFMLENBQVNWLFlBQVksQ0FBQ0UsQ0FBdEI7QUFGTjtBQUxFLE9BQVA7QUFVRDs7Ozs7O0FBR0gsaUVBQWVHLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNamUsSUFBSSxHQUFHLFNBQWI7QUFDQSxJQUFNRSxRQUFRLEdBQUcsYUFBakI7QUFDQSxJQUFNcWUsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGtCQUF2QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFVBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLHlCQUF4QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLHFCQUEzQjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLGVBQTVCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLEdBQTFCO0FBRUEsSUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsV0FEUTtBQUVuQkMsVUFBUSxFQUFFLFdBRlM7QUFHbkJDLGVBQWEsRUFBRSxlQUhJO0FBSW5CQyxZQUFVLEVBQUUsV0FKTztBQUtuQnpJLE9BQUssRUFBRSxVQUxZO0FBTW5CMEksU0FBTyxFQUFFLGVBTlU7QUFPbkJDLFlBQVUsRUFBRSxXQVBPO0FBUW5CQyxlQUFhLEVBQUUsV0FSSTtBQVNuQkMsV0FBUyxFQUFFLFdBVFE7QUFVbkJDLFFBQU0sRUFBRSxXQVZXO0FBV25CQyxNQUFJLEVBQUUsVUFYYTtBQVluQkMsaUJBQWUsRUFBRSxlQVpFO0FBYW5CQyxNQUFJLEVBQUUsV0FiYTtBQWNuQkMsZUFBYSxFQUFFLFdBZEk7QUFlbkJDLFdBQVMsRUFBRSxVQWZRO0FBZ0JuQnpTLFVBQVEsRUFBRSxVQWhCUztBQWlCbkIwUyxPQUFLLEVBQUUsV0FqQlk7QUFrQm5CdmIsb0JBQWtCLEVBQUUsVUFsQkQ7QUFtQm5CNFAsT0FBSyxFQUFFO0FBbkJZLENBQXJCO0FBc0JBLElBQU1nSixlQUFlLEdBQUc7QUFDdEI2QixXQUFTLEVBQUUsS0FEVztBQUV0QkMsVUFBUSxFQUFFLElBRlk7QUFHdEJDLGVBQWEsRUFBRSxJQUhPO0FBSXRCQyxZQUFVLEVBQUUsSUFKVTtBQUt0QnpJLE9BQUssRUFBRSxTQUxlO0FBTXRCMEksU0FBTyxFQUFFLElBTmE7QUFPdEJDLFlBQVUsRUFBRSxJQVBVO0FBUXRCQyxlQUFhLEVBQUUsS0FSTztBQVN0QkMsV0FBUyxFQUFFLElBVFc7QUFVdEJDLFFBQU0sRUFBRSxJQVZjO0FBV3RCQyxNQUFJLEVBQUUsTUFYZ0I7QUFZdEJDLGlCQUFlLEVBQUUsSUFaSztBQWF0QkMsTUFBSSxFQUFFLEtBYmdCO0FBY3RCQyxlQUFhLEVBQUUsS0FkTztBQWV0QkMsV0FBUyxFQUFFLEVBZlc7QUFnQnRCelMsVUFBUSxFQUFFLE9BaEJZO0FBaUJ0QjBTLE9BQUssRUFBRSxLQWpCZTtBQWtCdEJ2YixvQkFBa0IsRUFBRSxHQWxCRTtBQW1CdEI0UCxPQUFLLEVBQUU7QUFuQmUsQ0FBeEI7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTTRMLE87QUFDSixtQkFBWUMsSUFBWixFQUFnQztBQUFBOztBQUFBLFFBQWR6TSxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQzlCLFNBQUtqUyxRQUFMLEdBQWdCMGUsSUFBaEI7QUFDQSxTQUFLeE0sUUFBTCxHQUFnQkQsT0FBaEI7QUFFQXVMLGlCQUFhO0FBQ2IsU0FBS21CLEdBQUwsR0FBV25CLGFBQVg7QUFFQSxTQUFLb0IsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixJQUE1QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBRUEsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUVBLFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkOztBQUVBLFNBQUtDLFVBQUwsR0FBa0IsVUFBQzdTLENBQUQsRUFBTztBQUN2QixVQUFJQSxDQUFDLENBQUM4UyxPQUFGLEtBQWNqRyx1REFBZCxJQUF3QixLQUFJLENBQUNrRyxPQUE3QixJQUF3Q2xQLDJEQUFTLENBQUMsS0FBSSxDQUFDa1AsT0FBTixDQUFyRCxFQUFxRTtBQUNuRSxhQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFiOztBQUVBeGQsa0ZBQUEsQ0FBaUJnTixNQUFqQixFQUF5QixTQUF6QixFQUFvQyxLQUFJLENBQUNxUSxVQUF6QztBQUNEO0FBQ0YsS0FORDs7QUFRQSxTQUFLSSxXQUFMLEdBQW1CLFlBQU07QUFDdkIsV0FBSSxDQUFDQyxrQkFBTDtBQUNELEtBRkQ7O0FBSUEsUUFBSWhCLElBQUosRUFBVTtBQUNScmQsaUVBQUEsQ0FBYXFkLElBQWIsRUFBbUJsZ0IsUUFBbkIsRUFBNkIsSUFBN0I7O0FBRUEsV0FBS21oQixNQUFMO0FBQ0Q7QUFDRixHLENBRUQ7Ozs7O1NBTUEsZUFBZ0I7QUFDZCxVQUFJLEtBQUsxTixPQUFMLENBQWFuRyxRQUFiLEtBQTBCLE9BQTlCLEVBQXVDO0FBQ3JDLGVBQU8xTCxzRUFBQSxDQUF1QixNQUF2QixDQUFQO0FBQ0Q7O0FBRUQsVUFBTXdmLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3pILEVBQUQsRUFBUTtBQUM1QixZQUFJLENBQUNBLEVBQUUsQ0FBQzdRLFVBQUosSUFBa0I2USxFQUFFLENBQUM3USxVQUFILEtBQWtCL0MsUUFBeEMsRUFBa0Q7QUFDaEQsaUJBQU80VCxFQUFQO0FBQ0Q7O0FBQ0QsWUFBSUEsRUFBRSxDQUFDN1EsVUFBSCxDQUFjN0UsS0FBZCxDQUFvQnFKLFFBQXBCLEtBQWlDLFVBQXJDLEVBQWlEO0FBQy9DLGlCQUFPcU0sRUFBRSxDQUFDN1EsVUFBVjtBQUNEOztBQUNELGVBQU9zWSxhQUFhLENBQUN6SCxFQUFFLENBQUM3USxVQUFKLENBQXBCO0FBQ0QsT0FSRDs7QUFVQSxhQUFPc1ksYUFBYSxDQUFDLEtBQUs1ZixRQUFOLENBQXBCO0FBQ0Q7OztTQUVELGVBQWdCO0FBQ2QsVUFBSTZmLGNBQWMsR0FBRyxDQUFyQjtBQUNBLFVBQUlDLFlBQVksR0FBRzlRLE1BQU0sQ0FBQytRLFVBQTFCOztBQUVBLFVBQUksS0FBSzlOLE9BQUwsQ0FBYW5HLFFBQWIsS0FBMEIsT0FBOUIsRUFBdUM7QUFDckMsWUFBTWtVLE9BQU8sR0FBRyxLQUFLbmUsU0FBTCxDQUFld0IscUJBQWYsRUFBaEI7QUFDQXdjLHNCQUFjLEdBQUdHLE9BQU8sQ0FBQzdELENBQXpCO0FBQ0EyRCxvQkFBWSxHQUFHRSxPQUFPLENBQUM3RCxDQUFSLEdBQVk2RCxPQUFPLENBQUNuTixLQUFuQztBQUNEOztBQUVELGtDQUFjLEtBQUs3UyxRQUFMLENBQWNxRCxxQkFBZCxFQUFkO0FBQUEsVUFBUThZLENBQVIseUJBQVFBLENBQVI7O0FBRUEsVUFBSSxLQUFLbEssT0FBTCxDQUFhdU0sS0FBakIsRUFBd0I7QUFDdEIsZUFBTy9QLElBQUksQ0FBQ21PLEdBQUwsQ0FBU1QsQ0FBQyxHQUFHMkQsWUFBYixJQUE2QixFQUFwQztBQUNEOztBQUNELGFBQU9yUixJQUFJLENBQUNtTyxHQUFMLENBQVNULENBQUMsR0FBRzBELGNBQWIsSUFBK0IsRUFBdEM7QUFDRDs7O1NBRUQsZUFBWTtBQUNWLGFBQU96ZixtRUFBQSxDQUFvQmlkLGFBQXBCLEVBQW1DLEtBQUtyZCxRQUF4QyxDQUFQO0FBQ0Q7OztTQUVELGVBQWlCO0FBQ2YsYUFBT0ksbUVBQUEsQ0FBb0IrYyxtQkFBcEIsRUFBeUMsS0FBS25kLFFBQTlDLENBQVA7QUFDRDs7O1NBRUQsZUFBYztBQUNaLFVBQU1GLE1BQU0saURBQ1ArYixlQURPLEdBRVAxWCw0RUFBQSxDQUE4QixLQUFLbkUsUUFBbkMsQ0FGTyxHQUdQLEtBQUtrUyxRQUhFLENBQVo7O0FBTUF0Tyx1RUFBZSxDQUFDdEYsSUFBRCxFQUFPd0IsTUFBUCxFQUFlMmQsWUFBZixDQUFmO0FBRUEsYUFBTzNkLE1BQVA7QUFDRDs7O1NBRUQsZUFBbUI7QUFDakIsYUFBTztBQUNMK1MsYUFBSyxZQUFLLEtBQUtBLEtBQVYsT0FEQTtBQUVMRCxjQUFNLEVBQUUsS0FBS1gsT0FBTCxDQUFhbkcsUUFBYixLQUEwQixPQUExQixHQUFvQyxPQUFwQyxHQUE4QyxNQUZqRDtBQUdMQSxnQkFBUSxFQUFFLEtBQUttRyxPQUFMLENBQWFuRyxRQUhsQjtBQUlMbVUsa0JBQVUsZ0JBQVMsS0FBS2hkLGtCQUFkO0FBSkwsT0FBUDtBQU1EOzs7U0FFRCxlQUFjO0FBQUE7O0FBQ1osVUFBTWlkLGFBQWEsR0FBRzlmLG1FQUFBLENBQW9CNGMsZUFBcEIsRUFBcUM3USxJQUFyQyxDQUEwQyxVQUFDb1QsT0FBRCxFQUFhO0FBQzNFLFlBQU05YSxNQUFNLEdBQUdOLDJFQUFBLENBQTZCb2IsT0FBN0IsRUFBc0MsUUFBdEMsQ0FBZjtBQUNBLGVBQU9uZixzRUFBQSxDQUF1QnFFLE1BQXZCLE1BQW1DLE1BQUksQ0FBQ3pFLFFBQS9DO0FBQ0QsT0FIcUIsQ0FBdEI7QUFJQSxhQUFPa2dCLGFBQVA7QUFDRDs7O1NBRUQsZUFBeUI7QUFDdkIsdUJBQVUsS0FBS2pPLE9BQUwsQ0FBYWhQLGtCQUFiLEdBQWtDLElBQTVDO0FBQ0Q7OztTQUVELGVBQWtCO0FBQ2hCLGFBQU8sS0FBS2dQLE9BQUwsQ0FBYXVNLEtBQWIsR0FBcUJqQixpQkFBckIsR0FBeUNELGdCQUFoRDtBQUNEOzs7U0FFRCxlQUFZO0FBQ1YsYUFBTyxLQUFLeUIsY0FBTCxHQUFzQixLQUFLOU0sT0FBTCxDQUFhc00sU0FBbkMsR0FBK0MsS0FBS3RNLE9BQUwsQ0FBYVksS0FBbkU7QUFDRCxLLENBRUQ7Ozs7V0FFQSxvQkFBV3NMLElBQVgsRUFBaUI7QUFDZixXQUFLZ0MsUUFBTCxDQUFjaEMsSUFBZDtBQUNEOzs7V0FFRCxtQkFBVTtBQUNSLFVBQUksS0FBS1MsU0FBVCxFQUFvQjtBQUNsQixhQUFLd0IsZUFBTDtBQUNEOztBQUVEcGUsZ0ZBQUEsQ0FBaUJnTixNQUFqQixFQUF5QixTQUF6QixFQUFvQyxLQUFLcVEsVUFBekM7QUFFQXJkLGdGQUFBLENBQWlCZ04sTUFBakIsRUFBeUIsWUFBekIsRUFBdUMsS0FBS3lRLFdBQTVDOztBQUVBLFdBQUtMLE1BQUwsQ0FBWWlCLE9BQVo7O0FBRUFoZixvRUFBQSxDQUFnQixLQUFLckIsUUFBckIsRUFBK0J4QixRQUEvQjtBQUVBLFdBQUt3QixRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7OztXQUVELGdCQUFPO0FBQ0wsV0FBS3NnQixjQUFMLENBQW9CLEtBQXBCOztBQUNBLFdBQUtkLE9BQUwsQ0FBYSxLQUFiO0FBQ0Q7OztXQUVELGdCQUFPO0FBQ0wsV0FBS2MsY0FBTCxDQUFvQixJQUFwQjs7QUFDQSxXQUFLZCxPQUFMLENBQWEsSUFBYjtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLFdBQUtjLGNBQUwsQ0FBb0IsQ0FBQyxLQUFLalEsU0FBMUI7O0FBQ0EsV0FBS21QLE9BQUwsQ0FBYSxDQUFDLEtBQUtuUCxTQUFuQjtBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtrUSxRQUFMLENBQWMsQ0FBQyxLQUFLeEIsY0FBcEI7QUFDRDs7O1dBRUQsZ0JBQU85TSxPQUFQLEVBQWdCO0FBQ2QsV0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7O0FBRUEsV0FBSzBOLE1BQUw7QUFDRCxLLENBRUQ7Ozs7V0FFQSxzQkFBYWpCLElBQWIsRUFBbUI7QUFDakIsVUFBTThCLEtBQUssR0FBRzNnQix5REFBTyxDQUFDLEdBQUQsQ0FBckI7QUFFQSxPQUFDLEtBQUQsRUFBUSxlQUFSLEVBQXlCZ2QsV0FBekIsRUFBc0MzYSxPQUF0QyxDQUE4QyxVQUFDZ0ssU0FBRCxFQUFlO0FBQzNEL0gsMkVBQUEsQ0FBcUJxYyxLQUFyQixFQUE0QnRVLFNBQTVCO0FBQ0QsT0FGRDs7QUFJQSxVQUFJOUwsbUVBQUEsWUFBd0J5YyxXQUF4QixHQUF1QzZCLElBQXZDLEVBQTZDamUsTUFBN0MsS0FBd0QsQ0FBNUQsRUFBK0Q7QUFDN0RpZSxZQUFJLENBQUN4SixXQUFMLENBQWlCc0wsS0FBakI7QUFDRDtBQUNGOzs7V0FFRCwwQkFBaUI7QUFDZixXQUFLQyxVQUFMLENBQWdCdmUsT0FBaEIsQ0FBd0IsVUFBQ3dlLElBQUQsRUFBVTtBQUNoQyxZQUFNQyxnQkFBZ0IsR0FBR3ZnQixtRUFBQSxDQUFvQmdkLGlCQUFwQixFQUF1Q3NELElBQXZDLENBQXpCO0FBQ0FDLHdCQUFnQixDQUFDemUsT0FBakIsQ0FBeUIsVUFBQ2lXLEVBQUQsRUFBUTtBQUMvQnZZLG1GQUFBLENBQXFCdVksRUFBckIsRUFBeUIzVyxJQUF6QjtBQUNELFNBRkQ7QUFHRCxPQUxEO0FBTUQ7OztXQUVELDBCQUFpQjtBQUFBO0FBQUE7O0FBQ2YsVUFBTW9mLE9BQU8sR0FBRyxFQUFoQjs7QUFDQSxVQUFJLEtBQUszTyxPQUFMLENBQWEyTCxhQUFqQixFQUFnQztBQUM5QmdELGVBQU8sQ0FBQzNmLElBQVIsQ0FBYSxLQUFLZ1IsT0FBTCxDQUFhMkwsYUFBMUI7QUFDRDs7QUFDRCxVQUFNbmIsS0FBSyxHQUFHO0FBQ1p3ZCxrQkFBVSxvQkFBYSxLQUFLaGQsa0JBQWxCLGNBREU7QUFFWjZJLGdCQUFRLEVBQUUsS0FBS21HLE9BQUwsQ0FBYW5HLFFBRlg7QUFHWitHLGFBQUssRUFBRSxLQUFLWixPQUFMLENBQWFuRyxRQUFiLEtBQTBCLE9BQTFCLEdBQW9DLE9BQXBDLEdBQThDLE1BSHpDO0FBSVo4RyxjQUFNLEVBQUUsS0FBS1gsT0FBTCxDQUFhbkcsUUFBYixLQUEwQixPQUExQixHQUFvQyxPQUFwQyxHQUE4QztBQUoxQyxPQUFkOztBQU9BLFVBQUksQ0FBQyxLQUFLOFMsU0FBVixFQUFxQjtBQUNuQixZQUFNakIsUUFBUSxHQUFHOWQseURBQU8sQ0FBQyxLQUFELENBQXhCO0FBRUErZ0IsZUFBTyxDQUFDM2YsSUFBUixDQUFhNmIsY0FBYjtBQUNBcmEsYUFBSyxDQUFDMlEsT0FBTixHQUFnQixDQUFoQjtBQUVBcFIsaUZBQUEsQ0FBZ0IyYixRQUFoQixFQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3ZDLGdCQUFJLENBQUMyQyxjQUFMLENBQW9CLEtBQXBCOztBQUNBLGdCQUFJLENBQUNkLE9BQUwsQ0FBYSxLQUFiO0FBQ0QsU0FIRDtBQUtBLGFBQUtaLFNBQUwsR0FBaUJqQixRQUFqQjtBQUNEOztBQUVELG9DQUFLaUIsU0FBTCxDQUFldGQsU0FBZixFQUF5QmtCLEdBQXpCLDhCQUFnQ29lLE9BQWhDOztBQUVBemMsc0VBQUEsQ0FBa0IsS0FBS3lhLFNBQXZCLEVBQWtDbmMsS0FBbEM7QUFDRDs7O1dBRUQseUJBQWdCaEIsSUFBaEIsUUFBb0Q7QUFBQSxVQUE1Qm9mLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLFVBQXJCN1EsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsVUFBWDhRLE9BQVcsUUFBWEEsT0FBVzs7QUFDbEQsVUFBTUMsWUFBWSxHQUFHLEtBQUtDLFdBQUwsQ0FDbkIsS0FBS2xDLG9CQUFMLENBQTBCK0IsS0FBMUIsRUFBaUNDLE9BQU8sQ0FBQzlRLFFBQUQsQ0FBUCxDQUFrQkEsUUFBbkQsQ0FEbUIsQ0FBckI7O0FBR0EsVUFBTXpFLE1BQU0sR0FBRzlKLElBQUksR0FBR3FmLE9BQU8sQ0FBQzlRLFFBQUQsQ0FBUCxDQUFrQmhGLEtBQXJCLEdBQTZCLENBQWhEO0FBQ0EsYUFBTytWLFlBQVksR0FBR3hWLE1BQXRCO0FBQ0Q7OztXQUVELHdCQUFzQjtBQUFBLHdDQUFOL0IsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BCLGFBQU9BLElBQUksQ0FDUjhNLEdBREksQ0FDQSxVQUFDMkssR0FBRCxFQUFNMWdCLENBQU4sRUFBWTtBQUNmLFlBQUlBLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWCxpQkFBTzBnQixHQUFQO0FBQ0Q7O0FBQ0QsZUFBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPbmUsV0FBUCxHQUFxQnNLLE1BQXJCLENBQTRCNlQsR0FBRyxDQUFDbGUsS0FBSixDQUFVLENBQVYsQ0FBNUIsQ0FBUDtBQUNELE9BTkksRUFPSndTLElBUEksQ0FPQyxFQVBELENBQVA7QUFRRDs7O1dBRUQscUJBQVl2RixRQUFaLEVBQXNCO0FBQ3BCLFVBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsYUFBT1osVUFBVSxDQUFDWSxRQUFELENBQWpCO0FBQ0Q7OztXQUVELHNCQUFheEQsQ0FBYixFQUFnQjBVLGVBQWhCLEVBQWlDO0FBQy9CLFVBQUlBLGVBQWUsSUFBSSxLQUFLbkMsY0FBeEIsSUFBMEMsS0FBSzlNLE9BQUwsQ0FBYW9NLElBQXZELElBQStELEtBQUtwTSxPQUFMLENBQWE4TCxVQUFoRixFQUE0RjtBQUMxRixhQUFLb0QsVUFBTDtBQUNELE9BRkQsTUFFTyxJQUFJLENBQUNELGVBQUwsRUFBc0I7QUFDM0IsWUFBSSxLQUFLbkMsY0FBTCxJQUF1QixDQUFDLEtBQUs5TSxPQUFMLENBQWFvTSxJQUFyQyxJQUE2QyxDQUFDLEtBQUtwTSxPQUFMLENBQWE4TCxVQUEvRCxFQUEyRTtBQUN6RSxjQUFJLEtBQUt3QixPQUFMLElBQWdCbFAsMkRBQVMsQ0FBQyxLQUFLa1AsT0FBTixDQUE3QixFQUE2QztBQUMzQyxpQkFBSzNnQixNQUFMO0FBQ0Q7QUFDRixTQUpELE1BSU87QUFDTCxlQUFLdWlCLFVBQUw7QUFDRDtBQUNGO0FBQ0Y7OztXQUVELG1CQUFVQyxJQUFWLEVBQWdCQyxTQUFoQixFQUEyQjtBQUN6QixVQUFJQSxTQUFKLEVBQWU7QUFDYixlQUFPQSxTQUFTLEtBQUtELElBQXJCO0FBQ0Q7O0FBRUQsVUFBSUEsSUFBSSxDQUFDaFcsVUFBTCxDQUFnQmtXLElBQXBCLEVBQTBCO0FBQ3hCLGVBQU8sSUFBSUMsR0FBSixDQUFRSCxJQUFSLEVBQWNwUyxNQUFNLENBQUN3UyxRQUFQLENBQWdCRixJQUE5QixFQUFvQ0EsSUFBcEMsS0FBNkN0UyxNQUFNLENBQUN3UyxRQUFQLENBQWdCRixJQUFwRTtBQUNEOztBQUVELGFBQU8sS0FBUDtBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEIsYUFDRWxoQixtRUFBQSxDQUFvQmdkLGlCQUFwQixFQUF1QyxLQUFLcGQsUUFBNUMsRUFBc0RjLE1BQXRELENBQTZELFVBQUNxWCxFQUFEO0FBQUEsZUFBUTlILDJEQUFTLENBQUM4SCxFQUFELENBQWpCO0FBQUEsT0FBN0QsRUFBb0YxWCxNQUFwRixLQUNBLENBRkY7QUFJRDs7O1dBRUQsa0JBQVM7QUFDUDtBQUNBLFdBQUtnaEIsV0FBTCxHQUZPLENBSVA7OztBQUVBLFVBQUksS0FBS3hQLE9BQUwsQ0FBYWdNLFNBQWpCLEVBQTRCO0FBQzFCLGFBQUt5RCxlQUFMO0FBQ0QsT0FSTSxDQVVQOzs7QUFFQSxVQUFJLEtBQUt6UCxPQUFMLENBQWEwTCxRQUFqQixFQUEyQjtBQUN6QixhQUFLZ0UsY0FBTDs7QUFFQSxZQUFJLENBQUMsS0FBSzFQLE9BQUwsQ0FBYWlNLE1BQWQsSUFBd0IsS0FBS2pNLE9BQUwsQ0FBYWtNLElBQWIsS0FBc0IsTUFBbEQsRUFBMEQ7QUFDeEQsZUFBS3lELGVBQUw7QUFDRDtBQUNGLE9BbEJNLENBb0JQOzs7QUFFQSxXQUFLQyxjQUFMLEdBdEJPLENBd0JQOzs7QUFFQSxVQUFJLEtBQUs1UCxPQUFMLENBQWFvTSxJQUFqQixFQUF1QjtBQUNyQixhQUFLeUQsVUFBTDtBQUNELE9BNUJNLENBOEJQOzs7QUFFQSxXQUFLQyxvQkFBTCxHQWhDTyxDQWtDUDs7O0FBRUEsV0FBS0MsZUFBTCxHQXBDTyxDQXNDUDs7O0FBRUEsVUFBSSxLQUFLL1AsT0FBTCxDQUFhNkwsT0FBakIsRUFBMEI7QUFDeEIsYUFBS21FLGFBQUw7QUFDRCxPQTFDTSxDQTRDUDs7O0FBRUEsV0FBS0MsaUJBQUwsR0E5Q08sQ0FnRFA7OztBQUVBLFdBQUtDLGtCQUFMLEdBbERPLENBb0RQOzs7QUFFQSxVQUFJLENBQUMsS0FBS2xRLE9BQUwsQ0FBYWlNLE1BQWxCLEVBQTBCO0FBQ3hCLGFBQUtrRSxjQUFMLENBQW9CLElBQXBCLEVBQTBCLElBQTFCO0FBQ0Q7QUFDRjs7O1dBRUQsNkJBQW9CO0FBQUE7O0FBQ2xCLFdBQUsxQyxrQkFBTDs7QUFFQSxXQUFLMkMsS0FBTCxDQUFXbmdCLE9BQVgsQ0FBbUIsVUFBQ2tmLElBQUQsRUFBVTtBQUMzQnBmLGlGQUFBLENBQWdCb2YsSUFBaEIsRUFBc0IsT0FBdEIsRUFBK0I7QUFBQSxpQkFBTSxNQUFJLENBQUMxQixrQkFBTCxDQUF3QjBCLElBQXhCLENBQU47QUFBQSxTQUEvQjtBQUNBcGYsaUZBQUEsQ0FBZ0JvZixJQUFoQixFQUFzQixTQUF0QixFQUFpQyxVQUFDNVUsQ0FBRCxFQUFPO0FBQ3RDLGNBQUlBLENBQUMsQ0FBQzhTLE9BQUYsS0FBY25HLHNEQUFsQixFQUF5QjtBQUN2QixrQkFBSSxDQUFDdUcsa0JBQUwsQ0FBd0IwQixJQUF4QjtBQUNEO0FBQ0YsU0FKRDtBQUtELE9BUEQ7QUFTQXBmLCtFQUFBLENBQWdCZ04sTUFBaEIsRUFBd0IsWUFBeEIsRUFBc0MsS0FBS3lRLFdBQTNDO0FBQ0Q7OztXQUVELDBCQUFpQjtBQUFBOztBQUNmLFdBQUtnQixVQUFMLENBQWdCdmUsT0FBaEIsQ0FBd0IsVUFBQ3dlLElBQUQsRUFBTzRCLFNBQVAsRUFBcUI7QUFDM0MsWUFBTUMsVUFBVSxHQUFHbmlCLG1FQUFBLENBQW9CZ2QsaUJBQXBCLEVBQXVDc0QsSUFBdkMsQ0FBbkI7QUFDQTZCLGtCQUFVLENBQUNyZ0IsT0FBWCxDQUFtQixVQUFDc2dCLElBQUQsRUFBTzNCLEtBQVA7QUFBQSxpQkFDakIsTUFBSSxDQUFDNEIsa0JBQUwsQ0FBd0I7QUFBRUQsZ0JBQUksRUFBSkEsSUFBRjtBQUFRM0IsaUJBQUssRUFBTEEsS0FBUjtBQUFlSCxnQkFBSSxFQUFKQSxJQUFmO0FBQXFCNEIscUJBQVMsRUFBVEE7QUFBckIsV0FBeEIsQ0FEaUI7QUFBQSxTQUFuQjtBQUdELE9BTEQ7QUFNRDs7O1dBRUQsNkJBQW9CekIsS0FBcEIsRUFBMkJ5QixTQUEzQixFQUFzQztBQUNwQyx3Q0FBMkIsS0FBSzNELEdBQWhDLGNBQXVDMkQsU0FBdkMsY0FBb0R6QixLQUFwRDtBQUNEOzs7V0FFRCxtQ0FBcUQ7QUFBQTs7QUFBQSxVQUFoQzJCLElBQWdDLFNBQWhDQSxJQUFnQztBQUFBLFVBQTFCM0IsS0FBMEIsU0FBMUJBLEtBQTBCO0FBQUEsVUFBbkJILElBQW1CLFNBQW5CQSxJQUFtQjtBQUFBLFVBQWI0QixTQUFhLFNBQWJBLFNBQWE7O0FBQ25ELFVBQU1JLEVBQUUsR0FBRyxLQUFLQyxtQkFBTCxDQUF5QjlCLEtBQXpCLEVBQWdDeUIsU0FBaEMsQ0FBWDs7QUFFQUUsVUFBSSxDQUFDbGhCLFNBQUwsQ0FBZWtCLEdBQWYsQ0FBbUIsVUFBbkI7QUFDQWdnQixVQUFJLENBQUM5ZixZQUFMLENBQWtCLElBQWxCLEVBQXdCZ2dCLEVBQXhCOztBQUVBLGlDQUFrQnRpQixtRUFBQSxDQUFvQm9pQixJQUFwQixFQUEwQm5GLGFBQTFCLENBQWxCO0FBQUE7QUFBQSxVQUFPa0MsT0FBUDs7QUFFQXBiLGlGQUFBLENBQTZCb2IsT0FBN0IsRUFBc0MsUUFBdEMsRUFBZ0QsVUFBaEQ7QUFDQUEsYUFBTyxDQUFDN2MsWUFBUixDQUFxQixNQUFyQixhQUFpQ2dnQixFQUFqQztBQUNBbkQsYUFBTyxDQUFDN2MsWUFBUixDQUFxQixNQUFyQixFQUE2QixRQUE3QjtBQUVBLFVBQU1tRCxRQUFRLEdBQ1pqRyx5RUFBQSxDQUFxQjRpQixJQUFyQixLQUNBLElBQUk1aUIsNkRBQUosQ0FBYTRpQixJQUFiLEVBQW1CO0FBQ2pCNWpCLGNBQU0sRUFBRSxLQURTO0FBRWpCQyxjQUFNLEVBQUUsS0FBS29ULE9BQUwsQ0FBYXlMLFNBQWIsR0FBeUJnRCxJQUF6QixHQUFnQzhCO0FBRnZCLE9BQW5CLENBRkYsQ0FabUQsQ0FtQm5EOztBQUVBLFdBQUtJLFlBQUwsQ0FBa0JyRCxPQUFsQixFQXJCbUQsQ0F1Qm5EOzs7QUFFQXZkLCtFQUFBLENBQWdCdWQsT0FBaEIsRUFBeUIsT0FBekIsRUFBa0MsVUFBQy9TLENBQUQ7QUFBQSxlQUFPLE1BQUksQ0FBQ3FXLGVBQUwsQ0FBcUJyVyxDQUFyQixFQUF3QjNHLFFBQXhCLEVBQWtDMmMsSUFBbEMsQ0FBUDtBQUFBLE9BQWxDO0FBRUF4Z0IsK0VBQUEsQ0FBZ0J3Z0IsSUFBaEIsRUFBc0Isa0JBQXRCLEVBQTBDO0FBQUEsZUFBTSxNQUFJLENBQUNNLFlBQUwsQ0FBa0J2RCxPQUFsQixFQUEyQixHQUEzQixDQUFOO0FBQUEsT0FBMUM7QUFFQXZkLCtFQUFBLENBQWdCd2dCLElBQWhCLEVBQXNCLGtCQUF0QixFQUEwQztBQUFBLGVBQU0sTUFBSSxDQUFDTSxZQUFMLENBQWtCdkQsT0FBbEIsRUFBMkIsQ0FBM0IsQ0FBTjtBQUFBLE9BQTFDO0FBRUF2ZCwrRUFBQSxDQUFnQndnQixJQUFoQixFQUFzQixtQkFBdEIsRUFBMkMsWUFBTTtBQUMvQyxZQUFJLE1BQUksQ0FBQ3ZRLE9BQUwsQ0FBYWtNLElBQWIsS0FBc0IsTUFBdEIsSUFBZ0MsTUFBSSxDQUFDZSxVQUF6QyxFQUFxRDtBQUNuRCxnQkFBSSxDQUFDQSxVQUFMLENBQWdCNkQsTUFBaEI7QUFDRDtBQUNGLE9BSkQ7QUFNQS9nQiwrRUFBQSxDQUFnQndnQixJQUFoQixFQUFzQixvQkFBdEIsRUFBNEMsWUFBTTtBQUNoRCxZQUFJLE1BQUksQ0FBQ3ZELFNBQUwsSUFBa0IsTUFBSSxDQUFDK0QsZUFBTCxFQUF0QixFQUE4QztBQUM1QyxnQkFBSSxDQUFDekMsUUFBTCxDQUFjLElBQWQ7O0FBRUEsZ0JBQUksQ0FBQ3RCLFNBQUwsR0FBaUIsS0FBakI7QUFDRDs7QUFFRCxZQUFJLE1BQUksQ0FBQ2hOLE9BQUwsQ0FBYWtNLElBQWIsS0FBc0IsTUFBdEIsSUFBZ0MsTUFBSSxDQUFDZSxVQUF6QyxFQUFxRDtBQUNuRCxnQkFBSSxDQUFDQSxVQUFMLENBQWdCNkQsTUFBaEI7QUFDRDtBQUNGLE9BVkQ7QUFXRDs7O1dBRUQseUJBQWdCO0FBQ2QsV0FBS2xFLFFBQUwsR0FBZ0J6ZSxtRUFBQSxDQUFvQixLQUFLNlIsT0FBTCxDQUFhNkwsT0FBakMsQ0FBaEI7QUFDQSxXQUFLZ0Isb0JBQUwsR0FBNEIsS0FBS0QsUUFBTCxDQUFjdkksR0FBZCxDQUFrQixVQUFDNkIsRUFBRCxFQUFRO0FBQ3BELG9DQU1JbkosTUFBTSxDQUFDQyxnQkFBUCxDQUF3QmtKLEVBQXhCLENBTko7QUFBQSxZQUNFOEssV0FERix5QkFDRUEsV0FERjtBQUFBLFlBRUVDLFlBRkYseUJBRUVBLFlBRkY7QUFBQSxZQUdFQyxVQUhGLHlCQUdFQSxVQUhGO0FBQUEsWUFJRUMsV0FKRix5QkFJRUEsV0FKRjtBQUFBLFlBS0VuRCxVQUxGLHlCQUtFQSxVQUxGOztBQU9BLGVBQU87QUFBRWdELHFCQUFXLEVBQVhBLFdBQUY7QUFBZUMsc0JBQVksRUFBWkEsWUFBZjtBQUE2QkMsb0JBQVUsRUFBVkEsVUFBN0I7QUFBeUNDLHFCQUFXLEVBQVhBLFdBQXpDO0FBQXNEbkQsb0JBQVUsRUFBVkE7QUFBdEQsU0FBUDtBQUNELE9BVDJCLENBQTVCO0FBVUQ7OztXQUVELDJCQUFrQjtBQUNoQixXQUFLZixVQUFMLEdBQWtCLElBQUk3SCx5REFBSixDQUFjLEtBQUtyWCxRQUFuQixFQUE2QjtBQUM3Q3dFLGFBQUssRUFBRSxTQURzQztBQUU3Q2dULGlCQUFTLEVBQUUsbUJBQUNoTCxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQzhTLE9BQUYsS0FBY2hHLG9EQUFyQjtBQUFBLFNBRmtDO0FBRzdDNUIsbUJBQVcsRUFBRTtBQUhnQyxPQUE3QixDQUFsQjtBQUtEOzs7V0FFRCxnQ0FBdUI7QUFDckIsV0FBSzJMLFNBQUw7O0FBQ0FsZixzRUFBQSxDQUFrQixLQUFLbkUsUUFBdkIsRUFBaUMsS0FBS3NqQixZQUF0QztBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEIsVUFBSXpoQixTQUFTLEdBQUcsS0FBSzdCLFFBQXJCOztBQUVBLFVBQUksS0FBS2lTLE9BQUwsQ0FBYW1NLGVBQWpCLEVBQWtDO0FBQ2hDdmMsaUJBQVMsR0FBR3pCLHNFQUFBLENBQXVCLEtBQUs2UixPQUFMLENBQWFtTSxlQUFwQyxFQUFxRCxLQUFLcGUsUUFBMUQsQ0FBWjtBQUVBLFlBQU11akIsUUFBUSxHQUFHakwsdURBQUssQ0FBQ3pXLFNBQVMsQ0FBQ3lGLFVBQVYsQ0FBcUJnRyxRQUF0QixDQUFMLENBQXFDeE0sTUFBckMsQ0FBNEMsVUFBQ3FYLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxLQUFLdFcsU0FBZjtBQUFBLFNBQTVDLENBQWpCO0FBRUEsWUFBTTJoQixjQUFjLEdBQUdELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDbE4sQ0FBRCxFQUFJbU4sQ0FBSixFQUFVO0FBQy9DLGlCQUFPbk4sQ0FBQyxHQUFHbU4sQ0FBQyxDQUFDQyxZQUFiO0FBQ0QsU0FGc0IsRUFFcEIsQ0FGb0IsQ0FBdkI7QUFJQXhmLHdFQUFBLENBQWtCdEMsU0FBbEIsRUFBNkI7QUFDM0IraEIsbUJBQVMsd0JBQWlCSixjQUFqQixRQURrQjtBQUUzQjFYLGtCQUFRLEVBQUU7QUFGaUIsU0FBN0I7QUFJRDs7QUFFRCxXQUFLcVQsaUJBQUwsR0FBeUIsSUFBSTBFLHVEQUFKLENBQXFCaGlCLFNBQXJCLEVBQWdDO0FBQUVpaUIsdUJBQWUsRUFBRTtBQUFuQixPQUFoQyxDQUF6QjtBQUNEOzs7V0FFRCxzQkFBYTtBQUFBOztBQUNYLFdBQUsvRSxjQUFMLEdBQXNCLEtBQUs5TSxPQUFMLENBQWFxTSxhQUFuQzs7QUFFQSxXQUFLeUYsa0JBQUwsQ0FBd0IsS0FBS2hGLGNBQTdCOztBQUVBLFVBQUksS0FBSzlNLE9BQUwsQ0FBYStMLGFBQWpCLEVBQWdDO0FBQzlCLGFBQUtoZSxRQUFMLENBQWMwSSxnQkFBZCxDQUErQixZQUEvQixFQUE2QyxZQUFNO0FBQ2pELGNBQUksTUFBSSxDQUFDcVcsY0FBVCxFQUF5QjtBQUN2QixrQkFBSSxDQUFDd0IsUUFBTCxDQUFjLEtBQWQ7QUFDRDtBQUNGLFNBSkQ7O0FBTUEsYUFBS3ZnQixRQUFMLENBQWMwSSxnQkFBZCxDQUErQixZQUEvQixFQUE2QyxZQUFNO0FBQ2pELGNBQUksQ0FBQyxNQUFJLENBQUNxVyxjQUFWLEVBQTBCO0FBQ3hCLGtCQUFJLENBQUN3QixRQUFMLENBQWMsSUFBZDtBQUNEO0FBQ0YsU0FKRDtBQUtEO0FBQ0Y7OztXQUVELDhCQUFxQjtBQUFBOztBQUNuQixXQUFLOEIsS0FBTCxDQUFXbmdCLE9BQVgsQ0FBbUIsVUFBQ2tmLElBQUQsRUFBVTtBQUMzQixZQUFJNEMsSUFBSSxHQUFHaFMsOERBQUEsQ0FBbUJvUCxJQUFuQixDQUFYOztBQUVBLFlBQUk0QyxJQUFJLElBQUlBLElBQUksQ0FBQzlSLFFBQUwsQ0FBY2tELEtBQWQsS0FBd0IsTUFBSSxDQUFDbkQsT0FBTCxDQUFhbUQsS0FBakQsRUFBd0Q7QUFDdEQ0TyxjQUFJLENBQUMzRCxPQUFMO0FBQ0QsU0FGRCxNQUVPLElBQUkyRCxJQUFKLEVBQVU7QUFDZjtBQUNEOztBQUVEQSxZQUFJLEdBQUcsSUFBSWhTLGtEQUFKLENBQVdvUCxJQUFYLEVBQWlCO0FBQUV4UCxxQkFBVyxFQUFFLE1BQUksQ0FBQ0ssT0FBTCxDQUFhbUQ7QUFBNUIsU0FBakIsQ0FBUDtBQUNELE9BVkQ7QUFXRDs7O1dBRUQsdUJBQWM7QUFBQTs7QUFDWixXQUFLZ0ssTUFBTCxHQUFjLElBQUluRSxxREFBSixDQUFVLEtBQUtqYixRQUFmLEVBQXlCLE9BQXpCLEVBQWtDO0FBQUU4YixpQkFBUyxFQUFFO0FBQWIsT0FBbEMsQ0FBZDs7QUFDQSxXQUFLc0QsTUFBTCxDQUFZOU0sSUFBWjs7QUFFQXRRLCtFQUFBLENBQWdCLEtBQUtoQyxRQUFyQixFQUErQixXQUEvQixFQUE0QyxVQUFDd00sQ0FBRDtBQUFBLGVBQU8sTUFBSSxDQUFDeVgsWUFBTCxDQUFrQnpYLENBQWxCLEVBQXFCLE1BQUksQ0FBQ3lGLE9BQUwsQ0FBYXVNLEtBQWxDLENBQVA7QUFBQSxPQUE1QztBQUVBeGMsK0VBQUEsQ0FBZ0IsS0FBS2hDLFFBQXJCLEVBQStCLFlBQS9CLEVBQTZDLFVBQUN3TSxDQUFEO0FBQUEsZUFBTyxNQUFJLENBQUN5WCxZQUFMLENBQWtCelgsQ0FBbEIsRUFBcUIsQ0FBQyxNQUFJLENBQUN5RixPQUFMLENBQWF1TSxLQUFuQyxDQUFQO0FBQUEsT0FBN0M7QUFDRDs7O1dBRUQsb0JBQVc0QyxJQUFYLEVBQWlCQyxTQUFqQixFQUE0QjtBQUMxQjtBQUNBbGQseUVBQUEsQ0FBcUJpZCxJQUFyQixFQUEyQixRQUEzQjs7QUFFQSxVQUFJLEtBQUtwQyxXQUFULEVBQXNCO0FBQ3BCLGFBQUtBLFdBQUwsQ0FBaUIxZCxTQUFqQixDQUEyQmlCLE1BQTNCLENBQWtDLFFBQWxDO0FBQ0Q7O0FBQ0QsV0FBS3ljLFdBQUwsR0FBbUJvQyxJQUFuQixDQVAwQixDQVMxQjs7QUFFQSxrQ0FBbUJoaEIsc0VBQUEsQ0FBdUIsS0FBSzRlLFdBQTVCLEVBQXlDNUIsaUJBQXpDLENBQW5CO0FBQUE7QUFBQSxVQUFPOEcsUUFBUDs7QUFFQSxVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiLGFBQUtDLGtCQUFMOztBQUNBO0FBQ0QsT0FoQnlCLENBa0IxQjs7O0FBRUEsa0NBQW1CL2pCLG1FQUFBLENBQW9COGpCLFFBQXBCLEVBQThCN0csYUFBOUIsQ0FBbkI7QUFBQTtBQUFBLFVBQU8rRyxRQUFQOztBQUNBLFdBQUtELGtCQUFMLENBQXdCQyxRQUF4QixFQXJCMEIsQ0F1QjFCOzs7QUFFQSxVQUFJLENBQUMvQyxTQUFELElBQWMsQ0FBQyxLQUFLdEMsY0FBeEIsRUFBd0M7QUFDdENuZixpRkFBQSxDQUFxQnNrQixRQUFyQixFQUErQnppQixJQUEvQjtBQUNEO0FBQ0Y7OztXQUVELDRCQUFtQjBXLEVBQW5CLEVBQXVCO0FBQ3JCLFdBQUtzSSxVQUFMLENBQWdCdmUsT0FBaEIsQ0FBd0IsVUFBQ3dlLElBQUQsRUFBVTtBQUNoQyxZQUFNNkIsVUFBVSxHQUFHbmlCLG1FQUFBLENBQW9CZ2QsaUJBQXBCLEVBQXVDc0QsSUFBdkMsQ0FBbkI7QUFFQTZCLGtCQUFVLENBQUNyZ0IsT0FBWCxDQUFtQixVQUFDZ2lCLFFBQUQsRUFBYztBQUMvQixzQ0FBMEI5akIsbUVBQUEsQ0FBb0I4akIsUUFBcEIsRUFBOEI3RyxhQUE5QixDQUExQjtBQUFBO0FBQUEsY0FBT2dILGVBQVA7O0FBRUEsY0FBSUEsZUFBZSxLQUFLbE0sRUFBeEIsRUFBNEI7QUFDMUJrTSwyQkFBZSxDQUFDL2lCLFNBQWhCLENBQTBCaUIsTUFBMUIsQ0FBaUMsUUFBakM7QUFDRCxXQUZELE1BRU87QUFDTDRCLCtFQUFBLENBQXFCa2dCLGVBQXJCLEVBQXNDLFFBQXRDO0FBQ0Q7QUFDRixTQVJEO0FBU0QsT0FaRDtBQWFEOzs7V0FFRCw0QkFBbUJoRCxTQUFuQixFQUE4QjtBQUFBOztBQUM1QixXQUFLWixVQUFMLENBQWdCdmUsT0FBaEIsQ0FBd0IsVUFBQ3dlLElBQUQsRUFBVTtBQUNoQyxZQUFNMkIsS0FBSyxHQUFHamlCLG1FQUFBLENBQW9CaWQsYUFBcEIsRUFBbUNxRCxJQUFuQyxDQUFkO0FBQ0EyQixhQUFLLENBQ0Z2aEIsTUFESCxDQUNVLFVBQUNzZ0IsSUFBRCxFQUFVO0FBQ2hCLGlCQUFPaGhCLG1FQUFBLENBQW9CZ2hCLElBQXBCLEVBQTBCaEUsaUJBQTFCLEVBQTZDM2MsTUFBN0MsS0FBd0QsQ0FBL0Q7QUFDRCxTQUhILEVBSUd5QixPQUpILENBSVcsVUFBQ2tmLElBQUQsRUFBVTtBQUNqQixjQUFJLE9BQUksQ0FBQ2tELFNBQUwsQ0FBZWxELElBQWYsRUFBcUJDLFNBQXJCLEtBQW1DRCxJQUFJLEtBQUssT0FBSSxDQUFDcEMsV0FBckQsRUFBa0U7QUFDaEUsbUJBQUksQ0FBQ3VGLFVBQUwsQ0FBZ0JuRCxJQUFoQixFQUFzQkMsU0FBdEI7QUFDRDtBQUNGLFNBUkg7QUFTRCxPQVhEO0FBWUQ7OztXQUVELHFCQUFZO0FBQUE7O0FBQ1YsVUFBTW1ELE1BQU0sR0FBRyxDQUNiLFNBRGEsRUFFYixXQUZhLEVBR2IsU0FIYSxFQUliLE1BSmEsRUFLYixTQUxhLEVBTWIsUUFOYSxFQU9iLE9BUGEsRUFRYixNQVJhLENBQWY7QUFVQSxVQUFlQyxXQUFmLEdBQStCLEtBQUt4UyxPQUFwQyxDQUFRbUQsS0FBUjtBQUNBLFVBQU1BLEtBQUssR0FBR29QLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkQsV0FBaEIsSUFBK0JBLFdBQS9CLEdBQTZDLFNBQTNEO0FBRUFELFlBQU0sQ0FBQ3RpQixPQUFQLENBQWUsVUFBQ2tULEtBQUQsRUFBVztBQUN4QixlQUFJLENBQUNwVixRQUFMLENBQWNzQixTQUFkLENBQXdCaUIsTUFBeEIsbUJBQTBDNlMsS0FBMUM7QUFDRCxPQUZEO0FBSUFqUix5RUFBQSxDQUFxQixLQUFLbkUsUUFBMUIsb0JBQStDb1YsS0FBL0M7QUFDRDs7O1dBRUQsNEJBQW1CM1QsSUFBbkIsRUFBeUJxZixPQUF6QixFQUFrQzZELE9BQWxDLEVBQTJDO0FBQUE7O0FBQ3pDLFdBQUs5RixRQUFMLENBQWMzYyxPQUFkLENBQXNCLFVBQUNpVyxFQUFELEVBQUs1WCxDQUFMLEVBQVc7QUFDL0IsWUFBTXFrQixPQUFPLEdBQUcsT0FBSSxDQUFDQyxlQUFMLENBQXFCcGpCLElBQXJCLEVBQTJCO0FBQUVvZixlQUFLLEVBQUV0Z0IsQ0FBVDtBQUFZeVAsa0JBQVEsRUFBRSxTQUF0QjtBQUFpQzhRLGlCQUFPLEVBQVBBO0FBQWpDLFNBQTNCLENBQWhCOztBQUNBLFlBQU1nRSxNQUFNLEdBQUcsT0FBSSxDQUFDRCxlQUFMLENBQXFCcGpCLElBQXJCLEVBQTJCO0FBQUVvZixlQUFLLEVBQUV0Z0IsQ0FBVDtBQUFZeVAsa0JBQVEsRUFBRSxRQUF0QjtBQUFnQzhRLGlCQUFPLEVBQVBBO0FBQWhDLFNBQTNCLENBQWY7O0FBRUEsWUFBTXJlLEtBQUssR0FBRyxFQUFkOztBQUVBLFlBQUksQ0FBQ2tpQixPQUFMLEVBQWM7QUFDWmxpQixlQUFLLENBQUN3ZCxVQUFOLGlCQUEwQixPQUFJLENBQUNoZCxrQkFBL0I7QUFDRDs7QUFFRFIsYUFBSyxDQUFDcWUsT0FBTyxDQUFDOEQsT0FBUixDQUFnQjVVLFFBQWpCLENBQUwsYUFBcUM0VSxPQUFyQztBQUVBbmlCLGFBQUssQ0FBQ3FlLE9BQU8sQ0FBQ2dFLE1BQVIsQ0FBZTlVLFFBQWhCLENBQUwsYUFBb0M4VSxNQUFwQztBQUVBM2dCLHdFQUFBLENBQWtCZ1UsRUFBbEIsRUFBc0IxVixLQUF0Qjs7QUFFQSxZQUFJLENBQUNoQixJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVELFlBQUlrakIsT0FBSixFQUFhO0FBQ1h4Z0IsMEVBQUEsQ0FBa0JnVSxFQUFsQixFQUFzQjtBQUFFOEgsc0JBQVUsRUFBRSxPQUFJLENBQUNuQixvQkFBTCxDQUEwQnZlLENBQTFCLEVBQTZCMGY7QUFBM0MsV0FBdEI7QUFDQTtBQUNEOztBQUVEamUsaUZBQUEsQ0FBZ0JtVyxFQUFoQixFQUFvQixlQUFwQixFQUFxQyxZQUFNO0FBQ3pDaFUsMEVBQUEsQ0FBa0JnVSxFQUFsQixFQUFzQjtBQUFFOEgsc0JBQVUsRUFBRSxPQUFJLENBQUNuQixvQkFBTCxDQUEwQnZlLENBQTFCLEVBQTZCMGY7QUFBM0MsV0FBdEI7QUFDRCxTQUZEO0FBR0QsT0E1QkQ7QUE2QkQ7OztXQUVELGtCQUFTOUIsSUFBVCxFQUFlO0FBQ2IsVUFBSSxLQUFLbE0sT0FBTCxDQUFha00sSUFBYixLQUFzQkEsSUFBMUIsRUFBZ0M7QUFDOUI7QUFDRDs7QUFFRCxXQUFLak0sUUFBTCxDQUFjaU0sSUFBZCxHQUFxQkEsSUFBckI7O0FBRUEsV0FBS3FCLE9BQUwsQ0FBYSxLQUFLblAsU0FBbEI7QUFDRDs7O1dBRUQsa0JBQVNyRixLQUFULEVBQWdCO0FBQ2QsVUFBTXhELE1BQU0sR0FBR3dELEtBQUssR0FBRyxDQUFDLFVBQUQsRUFBYSxXQUFiLENBQUgsR0FBK0IsQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUFuRDs7QUFDQSxXQUFLK1osY0FBTCxhQUF1QnZkLE1BQXZCOztBQUVBLFVBQUl3RCxLQUFKLEVBQVc7QUFDVCxhQUFLZ2EsY0FBTDtBQUNEOztBQUVELFdBQUtqRyxjQUFMLEdBQXNCL1QsS0FBdEI7O0FBRUEsV0FBSytZLGtCQUFMLENBQXdCL1ksS0FBeEI7O0FBRUE3RyxzRUFBQSxDQUFrQixLQUFLbkUsUUFBdkIsRUFBaUM7QUFBRTZTLGFBQUssWUFBSyxLQUFLQSxLQUFWO0FBQVAsT0FBakM7O0FBRUEsV0FBS3VQLGNBQUwsQ0FBb0IsS0FBSy9SLFNBQXpCO0FBQ0Q7OztXQUVELHNCQUFhckYsS0FBYixFQUFvQjtBQUNsQixXQUFLcVgsS0FBTCxDQUFXbmdCLE9BQVgsQ0FBbUIsVUFBQ2tmLElBQUQsRUFBVTtBQUMzQkEsWUFBSSxDQUFDNkQsUUFBTCxHQUFnQmphLEtBQUssR0FBRyxDQUFILEdBQU8sQ0FBQyxDQUE3QjtBQUNELE9BRkQ7QUFHRDs7O1dBRUQsd0JBQWV2SixJQUFmLEVBQXFCO0FBQ25CLFVBQU0rRixNQUFNLEdBQUcvRixJQUFJLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFILEdBQXVCLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBMUM7O0FBRUEsV0FBS3NqQixjQUFMLGFBQXVCdmQsTUFBdkI7QUFDRDs7O1dBRUQsc0JBQWErWCxPQUFiLEVBQXNCMkYsS0FBdEIsRUFBNkI7QUFDM0Isa0NBQWdCOWtCLHVFQUFBLENBQXdCbWYsT0FBeEIsYUFBcUMxQyxXQUFyQyxFQUFoQjtBQUFBO0FBQUEsVUFBTzJELEtBQVA7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVjtBQUNEOztBQUNEcmMsc0VBQUEsQ0FBa0JxYyxLQUFsQixFQUF5QjtBQUN2QjJFLGlCQUFTLG1CQUFZRCxLQUFaO0FBRGMsT0FBekI7QUFHRDs7OztxRkFFRCxpQkFBc0JsYSxLQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ01BLEtBQUssSUFBSSxLQUFLaUgsT0FBTCxDQUFha00sSUFBYixLQUFzQixNQURyQztBQUFBO0FBQUE7QUFBQTs7QUFFSSxxQkFBS3lELGVBQUw7O0FBRko7QUFBQTs7QUFBQTtBQUlJemQsZ0ZBQUEsQ0FBa0IsS0FBS3lhLFNBQXZCLEVBQWtDO0FBQUV4TCx5QkFBTyxFQUFFO0FBQVgsaUJBQWxDO0FBSko7QUFBQSx1QkFNVXZELFVBQVUsQ0FBQyxZQUFNO0FBQ3JCLHlCQUFJLENBQUN1USxlQUFMO0FBQ0QsaUJBRmUsRUFFYixLQUFLbk8sT0FBTCxDQUFhaFAsa0JBRkEsQ0FOcEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQVlBLDJCQUFrQjtBQUNoQixVQUFJLEtBQUsyYixTQUFMLENBQWV0WCxVQUFmLEtBQThCLEtBQUt6RixTQUF2QyxFQUFrRDtBQUNoRCxhQUFLQSxTQUFMLENBQWV1VSxXQUFmLENBQTJCLEtBQUt3SSxTQUFoQztBQUNEO0FBQ0Y7OztXQUVELDJCQUFrQjtBQUFBOztBQUNoQixXQUFLL2MsU0FBTCxDQUFlcVQsV0FBZixDQUEyQixLQUFLMEosU0FBaEM7QUFFQS9PLGdCQUFVLENBQUM7QUFBQSxlQUFNMUwsZ0VBQUEsQ0FBa0IsT0FBSSxDQUFDeWEsU0FBdkIsRUFBa0M7QUFBRXhMLGlCQUFPLEVBQUU7QUFBWCxTQUFsQyxDQUFOO0FBQUEsT0FBRCxFQUEwRCxDQUExRCxDQUFWO0FBQ0Q7OztXQUVELHlCQUFnQjVHLENBQWhCLEVBQW1CM0csUUFBbkIsRUFBNkI7QUFDM0IyRyxPQUFDLENBQUM3SCxjQUFGO0FBRUFrQixjQUFRLENBQUNqSCxNQUFUOztBQUVBLFVBQUksS0FBS21nQixjQUFMLElBQXVCLEtBQUs5TSxPQUFMLENBQWE4TCxVQUF4QyxFQUFvRDtBQUNsRCxhQUFLa0IsU0FBTCxHQUFpQixJQUFqQjs7QUFFQSxhQUFLc0IsUUFBTCxDQUFjLEtBQWQ7QUFDRDtBQUNGOzs7V0FFRCw0QkFBbUJsQyxJQUFuQixFQUF5QjtBQUFBOztBQUN2QixVQUFNK0cscUJBQXFCLEdBQUdobEIsbUVBQUEsQ0FBb0I2YyxrQkFBcEIsRUFBd0MsS0FBS2pkLFFBQTdDLENBQTlCO0FBQ0EsVUFBTXFsQixpQkFBaUIsR0FBR2psQixtRUFBQSxDQUFvQjhjLGtCQUFwQixFQUF3QyxLQUFLbGQsUUFBN0MsQ0FBMUI7O0FBRUEsVUFBTXNsQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JGLDZCQUFxQixDQUFDbGpCLE9BQXRCLENBQThCLFVBQUNpVyxFQUFELEVBQVE7QUFDcENoVSwwRUFBQSxDQUFrQmdVLEVBQWxCLEVBQXNCO0FBQUUzSCxtQkFBTyxFQUFFLE9BQUksQ0FBQ3VPLGNBQUwsR0FBc0IsT0FBdEIsR0FBZ0M7QUFBM0MsV0FBdEI7QUFDRCxTQUZEO0FBSUFzRyx5QkFBaUIsQ0FBQ25qQixPQUFsQixDQUEwQixVQUFDaVcsRUFBRCxFQUFRO0FBQ2hDaFUsMEVBQUEsQ0FBa0JnVSxFQUFsQixFQUFzQjtBQUFFM0gsbUJBQU8sRUFBRSxPQUFJLENBQUN1TyxjQUFMLEdBQXNCLE1BQXRCLEdBQStCO0FBQTFDLFdBQXRCO0FBQ0QsU0FGRDtBQUdELE9BUkQ7O0FBVUEsVUFBSVYsSUFBSixFQUFVO0FBQ1J4TyxrQkFBVSxDQUFDO0FBQUEsaUJBQU15VixjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBLFNBQUQsRUFBNkIsS0FBS3JULE9BQUwsQ0FBYWhQLGtCQUExQyxDQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xxaUIsc0JBQWM7QUFDZjtBQUNGOzs7O29GQUVELGtCQUFxQnZqQixVQUFyQixFQUFpQ3dqQixhQUFqQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0V2akIsOEZBQUEsQ0FBcUIsS0FBS2hDLFFBQTFCLFlBQXVDK0IsVUFBdkM7O0FBREYscUJBR013akIsYUFITjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUlVMVYsVUFBVSxDQUFDLFlBQU07QUFDckI3TixnR0FBQSxDQUFxQixPQUFJLENBQUNoQyxRQUExQixZQUF1Q3VsQixhQUF2QztBQUNELGlCQUZlLEVBRWIsS0FBS3RULE9BQUwsQ0FBYWhQLGtCQUFiLEdBQWtDLENBRnJCLENBSnBCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FVQSxpQkFBUXhCLElBQVIsRUFBYztBQUNaLFVBQUksS0FBSzhkLE9BQVQsRUFBa0I7QUFDaEIsYUFBS2lHLGtCQUFMLENBQXdCL2pCLElBQXhCO0FBQ0Q7O0FBRUQsV0FBS2drQixjQUFMLENBQW9CaGtCLElBQXBCOztBQUVBLFVBQUksS0FBS3dRLE9BQUwsQ0FBYTBMLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUsrSCxlQUFMLENBQXFCamtCLElBQXJCO0FBQ0Q7O0FBRUQsV0FBSzJnQixjQUFMLENBQW9CM2dCLElBQXBCOztBQUVBLFVBQUlBLElBQUksSUFBSSxLQUFLd1EsT0FBTCxDQUFhNEwsVUFBckIsSUFBbUMsS0FBSzVMLE9BQUwsQ0FBYWtNLElBQWIsS0FBc0IsTUFBN0QsRUFBcUU7QUFDbkVuYyxpRkFBQSxDQUFnQmdOLE1BQWhCLEVBQXdCLFNBQXhCLEVBQW1DLEtBQUtxUSxVQUF4QztBQUNEOztBQUVELFVBQUksS0FBS3BOLE9BQUwsQ0FBYWdNLFNBQWpCLEVBQTRCO0FBQzFCLGFBQUswSCxZQUFMLENBQWtCbGtCLElBQWxCO0FBQ0Q7QUFDRjs7O1dBRUQsd0JBQWV1SixLQUFmLEVBQXNCO0FBQ3BCLFVBQU00YSxXQUFXLEdBQUc1YSxLQUFLLEdBQUcsQ0FBSCxHQUFPLEtBQUs0YSxXQUFyQztBQUNBemhCLHNFQUFBLENBQWtCLEtBQUtuRSxRQUF2QixFQUFpQztBQUFFbWxCLGlCQUFTLHVCQUFnQlMsV0FBaEI7QUFBWCxPQUFqQztBQUNEOzs7V0FFRCxzQkFBYW5rQixJQUFiLEVBQW1CO0FBQ2pCLFdBQUtva0IsWUFBTCxDQUFrQnBrQixJQUFsQjs7QUFFQSxVQUFJLEtBQUt3USxPQUFMLENBQWFrTSxJQUFiLEtBQXNCLE1BQXRCLElBQWdDLEtBQUtsTSxPQUFMLENBQWFnTSxTQUFqRCxFQUE0RDtBQUMxRCxZQUFJeGMsSUFBSixFQUFVO0FBQ1IsZUFBS3lkLFVBQUwsQ0FBZ0I0RyxJQUFoQjs7QUFDQTtBQUNEOztBQUVELGFBQUs1RyxVQUFMLENBQWdCNkcsT0FBaEI7O0FBRUEsWUFBSSxLQUFLeEcsT0FBVCxFQUFrQjtBQUNoQixlQUFLQSxPQUFMLENBQWF6SCxLQUFiO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLb0gsVUFBTCxDQUFnQjZHLE9BQWhCO0FBQ0Q7OztXQUVELHdCQUFldGtCLElBQWYsRUFBc0M7QUFBQSxVQUFqQmtqQixPQUFpQix1RUFBUCxLQUFPOztBQUNwQyxrQkFBMEMsS0FBSzFTLE9BQUwsQ0FBYXVNLEtBQWIsR0FDdEMsQ0FBQyxPQUFELEVBQVUsTUFBVixDQURzQyxHQUV0QyxDQUFDLE1BQUQsRUFBUyxPQUFULENBRko7QUFBQTtBQUFBLFVBQU93SCxlQUFQO0FBQUEsVUFBd0JDLGNBQXhCOztBQUlBLFVBQU1yQixPQUFPLEdBQUc7QUFDZDVVLGdCQUFRLEVBQUUsS0FBS2tXLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJGLGVBQTdCLENBREk7QUFFZGhiLGFBQUssRUFBRSxLQUFLaUgsT0FBTCxDQUFha00sSUFBYixLQUFzQixNQUF0QixHQUErQixDQUEvQixHQUFtQyxLQUFLdEw7QUFGakMsT0FBaEI7QUFLQSxVQUFNaVMsTUFBTSxHQUFHO0FBQ2I5VSxnQkFBUSxFQUFFLEtBQUtrVyxZQUFMLENBQWtCLFFBQWxCLEVBQTRCRCxjQUE1QixDQURHO0FBRWJqYixhQUFLLEVBQUUsS0FBS2lILE9BQUwsQ0FBYWtNLElBQWIsS0FBc0IsTUFBdEIsR0FBK0IsQ0FBQyxDQUFELEdBQUssS0FBS3RMLEtBQXpDLEdBQWlEO0FBRjNDLE9BQWY7QUFLQTdRLG9GQUFBLENBQXFCLEtBQUtoQyxRQUExQixFQUFvQyxvQkFBcEMsRUFBMEQ7QUFBRThrQixjQUFNLEVBQU5BLE1BQUY7QUFBVUYsZUFBTyxFQUFQQTtBQUFWLE9BQTFEOztBQUVBLFVBQUksQ0FBQyxLQUFLL0YsUUFBVixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFdBQUtzSCxrQkFBTCxDQUF3QjFrQixJQUF4QixFQUE4QjtBQUFFbWpCLGVBQU8sRUFBUEEsT0FBRjtBQUFXRSxjQUFNLEVBQU5BO0FBQVgsT0FBOUIsRUFBbURILE9BQW5EO0FBQ0Q7OztXQUVELDRCQUFtQjNaLEtBQW5CLEVBQTBCO0FBQ3hCLFdBQUt1VSxPQUFMLENBQWE3YyxZQUFiLENBQTBCLGVBQTFCLEVBQTJDc0ksS0FBM0M7QUFDRCxLLENBRUQ7Ozs7U0E3d0JBLGVBQWtCO0FBQ2hCLGFBQU8xTSxJQUFQO0FBQ0Q7OztXQTZ3QkQseUJBQXVCO0FBQ3JCLGFBQU8sVUFBVWtPLENBQVYsRUFBYTtBQUNsQixZQUFNK1MsT0FBTyxHQUFHbmYsc0VBQUEsQ0FBdUJvTSxDQUFDLENBQUMvSCxNQUF6QixFQUFpQ3VZLGVBQWpDLENBQWhCO0FBRUEsWUFBTW9KLGVBQWUsR0FBR2ppQiw0RUFBQSxDQUE4Qm9iLE9BQTlCLEVBQXVDOWEsTUFBL0Q7QUFFQXJFLDJFQUFBLENBQW9CZ21CLGVBQXBCLEVBQXFDbGtCLE9BQXJDLENBQTZDLFVBQUNyQyxPQUFELEVBQWE7QUFDeEQsY0FBTWdHLFFBQVEsR0FBRzRZLE9BQU8sQ0FBQzRILFdBQVIsQ0FBb0J4bUIsT0FBcEIsS0FBZ0MsSUFBSTRlLE9BQUosQ0FBWTVlLE9BQVosQ0FBakQ7QUFDQWdHLGtCQUFRLENBQUNqSCxNQUFUO0FBQ0QsU0FIRDtBQUlELE9BVEQ7QUFVRDs7O1dBRUQseUJBQXVCa0IsTUFBdkIsRUFBK0JtUyxPQUEvQixFQUF3QztBQUN0QyxhQUFPLEtBQUszTixJQUFMLENBQVUsWUFBWTtBQUMzQixZQUFJSixJQUFJLEdBQUc3QywyREFBQSxDQUFhLElBQWIsRUFBbUI3QyxRQUFuQixDQUFYOztBQUNBLFlBQU15QixPQUFPLEdBQUcsUUFBT0gsTUFBUCxNQUFrQixRQUFsQixJQUE4QkEsTUFBOUM7O0FBRUEsWUFBSSxDQUFDb0UsSUFBRCxJQUFTLFVBQVVFLElBQVYsQ0FBZXRFLE1BQWYsQ0FBYixFQUFxQztBQUNuQztBQUNEOztBQUVELFlBQUksQ0FBQ29FLElBQUwsRUFBVztBQUNUQSxjQUFJLEdBQUcsSUFBSXVhLE9BQUosQ0FBWSxJQUFaLEVBQWtCeGUsT0FBbEIsQ0FBUDtBQUNEOztBQUVELFlBQUksT0FBT0gsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixjQUFJLE9BQU9vRSxJQUFJLENBQUNwRSxNQUFELENBQVgsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkMsa0JBQU0sSUFBSXVFLFNBQUosNkJBQWtDdkUsTUFBbEMsUUFBTjtBQUNEOztBQUVEb0UsY0FBSSxDQUFDcEUsTUFBRCxDQUFKLENBQWFtUyxPQUFiO0FBQ0Q7QUFDRixPQW5CTSxDQUFQO0FBb0JEOzs7V0FFRCxxQkFBbUJwUyxPQUFuQixFQUE0QjtBQUMxQixhQUFPd0IsMkRBQUEsQ0FBYXhCLE9BQWIsRUFBc0JyQixRQUF0QixDQUFQO0FBQ0Q7Ozs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUF3RCx5RUFBQSxDQUFnQnVDLFFBQWhCLEVBQTBCLE9BQTFCLEVBQW1DeVksZUFBbkMsRUFBb0R5QixPQUFPLENBQUM2SCxhQUFSLEVBQXBEO0FBRUFsbUIsbUVBQUEsQ0FBb0IyYyxnQkFBcEIsRUFBc0M3YSxPQUF0QyxDQUE4QyxVQUFDcWtCLE9BQUQsRUFBYTtBQUN6RCxNQUFJMWdCLFFBQVEsR0FBRzRZLE9BQU8sQ0FBQzRILFdBQVIsQ0FBb0JFLE9BQXBCLENBQWY7O0FBQ0EsTUFBSSxDQUFDMWdCLFFBQUwsRUFBZTtBQUNiQSxZQUFRLEdBQUcsSUFBSTRZLE9BQUosQ0FBWThILE9BQVosQ0FBWDtBQUNEOztBQUVELFNBQU8xZ0IsUUFBUDtBQUNELENBUEQ7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWYsQ0FBQyxHQUFHQywyREFBUyxFQUFuQjs7QUFFQSxJQUFJRCxDQUFKLEVBQU87QUFDTCxNQUFNRSxrQkFBa0IsR0FBR0YsQ0FBQyxDQUFDRyxFQUFGLENBQUszRyxJQUFMLENBQTNCO0FBQ0F3RyxHQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsSUFBYW1nQixPQUFPLENBQUN2WixlQUFyQjtBQUNBSixHQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsRUFBVzZHLFdBQVgsR0FBeUJzWixPQUF6Qjs7QUFDQTNaLEdBQUMsQ0FBQ0csRUFBRixDQUFLM0csSUFBTCxFQUFXOEcsVUFBWCxHQUF3QixZQUFNO0FBQzVCTixLQUFDLENBQUNHLEVBQUYsQ0FBSzNHLElBQUwsSUFBYTBHLGtCQUFiO0FBQ0EsV0FBT3laLE9BQU8sQ0FBQ3ZaLGVBQWY7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsaUVBQWV1WixPQUFmLEUiLCJmaWxlIjoiYXNzZXRzX21kYl9zcmNfanNfcHJvX3NpZGVuYXZfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQm9vdHN0cmFwICh2NS4wLjAtYWxwaGEyKTogY29sbGFwc2UuanNcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRqUXVlcnksXHJcbiAgVFJBTlNJVElPTl9FTkQsXHJcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXHJcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcclxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxyXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxyXG4gIGlzRWxlbWVudCxcclxuICByZWZsb3csXHJcbiAgdHlwZUNoZWNrQ29uZmlnLFxyXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcyc7XHJcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEuanMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnO1xyXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnO1xyXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJztcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29uc3RhbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnO1xyXG5jb25zdCBWRVJTSU9OID0gJzUuMC4wLWFscGhhMic7XHJcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJztcclxuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWA7XHJcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xyXG5cclxuY29uc3QgRGVmYXVsdCA9IHtcclxuICB0b2dnbGU6IHRydWUsXHJcbiAgcGFyZW50OiAnJyxcclxufTtcclxuXHJcbmNvbnN0IERlZmF1bHRUeXBlID0ge1xyXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxyXG4gIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknLFxyXG59O1xyXG5cclxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YDtcclxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gO1xyXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gO1xyXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YDtcclxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gO1xyXG5cclxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnO1xyXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJztcclxuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnO1xyXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnO1xyXG5cclxuY29uc3QgV0lEVEggPSAnd2lkdGgnO1xyXG5jb25zdCBIRUlHSFQgPSAnaGVpZ2h0JztcclxuXHJcbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJztcclxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nO1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNsYXNzIENvbGxhcHNlIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcclxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcclxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFNlbGVjdG9yRW5naW5lLmZpbmQoXHJcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXHJcbiAgICAgICAgYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXTtcclxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pO1xyXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZmlsdGVyKFxyXG4gICAgICAgIChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XHJcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnNcclxuXHJcbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xyXG4gICAgcmV0dXJuIFZFUlNJT047XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4gRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIC8vIFB1YmxpY1xyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFjdGl2ZXM7XHJcbiAgICBsZXQgYWN0aXZlc0RhdGE7XHJcblxyXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICBhY3RpdmVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVTLCB0aGlzLl9wYXJlbnQpLmZpbHRlcigoZWxlbSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NPTExBUFNFKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBhY3RpdmVzID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5fc2VsZWN0b3IpO1xyXG4gICAgaWYgKGFjdGl2ZXMpIHtcclxuICAgICAgY29uc3QgdGVtcEFjdGl2ZURhdGEgPSBhY3RpdmVzLmZpbHRlcigoZWxlbSkgPT4gY29udGFpbmVyICE9PSBlbGVtKTtcclxuICAgICAgYWN0aXZlc0RhdGEgPSB0ZW1wQWN0aXZlRGF0YVswXSA/IERhdGEuZ2V0RGF0YSh0ZW1wQWN0aXZlRGF0YVswXSwgREFUQV9LRVkpIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpO1xyXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGl2ZXMpIHtcclxuICAgICAgYWN0aXZlcy5mb3JFYWNoKChlbGVtQWN0aXZlKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gZWxlbUFjdGl2ZSkge1xyXG4gICAgICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbUFjdGl2ZSwgJ2hpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcclxuICAgICAgICAgIERhdGEuc2V0RGF0YShlbGVtQWN0aXZlLCBEQVRBX0tFWSwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XHJcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKTtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKTtcclxuXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xyXG5cclxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKTtcclxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XHJcblxyXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgY29tcGxldGUpO1xyXG5cclxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YDtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSk7XHJcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgO1xyXG5cclxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKTtcclxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpO1xyXG5cclxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGg7XHJcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXTtcclxuICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW0gJiYgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcclxuICAgICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRCk7XHJcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSk7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpO1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSk7XHJcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTik7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XHJcblxyXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBUUkFOU0lUSU9OX0VORCwgY29tcGxldGUpO1xyXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XHJcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgRGF0YS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcclxuXHJcbiAgICB0aGlzLl9jb25maWcgPSBudWxsO1xyXG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gbnVsbDtcclxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBQcml2YXRlXHJcblxyXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIC4uLkRlZmF1bHQsXHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgIH07XHJcbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKTsgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcclxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBfZ2V0RGltZW5zaW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFdJRFRIKSA/IFdJRFRIIDogSEVJR0hUO1xyXG4gIH1cclxuXHJcbiAgX2dldFBhcmVudCgpIHtcclxuICAgIGxldCB7IHBhcmVudCB9ID0gdGhpcy5fY29uZmlnO1xyXG5cclxuICAgIGlmIChpc0VsZW1lbnQocGFyZW50KSkge1xyXG4gICAgICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdFxyXG4gICAgICBpZiAodHlwZW9mIHBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBwYXJlbnRbMF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcGFyZW50ID0gcGFyZW50WzBdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXJlbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHBhcmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1wYXJlbnQ9XCIke3BhcmVudH1cIl1gO1xyXG5cclxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHBhcmVudCkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCk7XHJcblxyXG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3Moc2VsZWN0ZWQsIFtlbGVtZW50XSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcclxuICAgIGlmICghZWxlbWVudCB8fCAhdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNPcGVuID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKTtcclxuXHJcbiAgICB0cmlnZ2VyQXJyYXkuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3Blbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFN0YXRpY1xyXG5cclxuICBzdGF0aWMgY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XHJcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSk7XHJcbiAgICBjb25zdCBfY29uZmlnID0ge1xyXG4gICAgICAuLi5EZWZhdWx0LFxyXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSxcclxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xyXG4gICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICBkYXRhID0gbmV3IENvbGxhcHNlKGVsZW1lbnQsIF9jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhW2NvbmZpZ10oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UodGhpcywgY29uZmlnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxyXG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdHJpZ2dlckRhdGEgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKTtcclxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcyk7XHJcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpO1xyXG5cclxuICBzZWxlY3RvckVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldERhdGEoZWxlbWVudCwgREFUQV9LRVkpO1xyXG4gICAgbGV0IGNvbmZpZztcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgYXR0cmlidXRlXHJcbiAgICAgIGlmIChkYXRhLl9wYXJlbnQgPT09IG51bGwgJiYgdHlwZW9mIHRyaWdnZXJEYXRhLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBkYXRhLl9jb25maWcucGFyZW50ID0gdHJpZ2dlckRhdGEucGFyZW50O1xyXG4gICAgICAgIGRhdGEuX3BhcmVudCA9IGRhdGEuX2dldFBhcmVudCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25maWcgPSAndG9nZ2xlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmZpZyA9IHRyaWdnZXJEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgJCA9IGdldGpRdWVyeSgpO1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBqUXVlcnlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGFkZCAuY29sbGFwc2UgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcclxuICovXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG5pZiAoJCkge1xyXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XHJcbiAgJC5mbltOQU1FXSA9IENvbGxhcHNlLmpRdWVyeUludGVyZmFjZTtcclxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2U7XHJcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xyXG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcclxuICAgIHJldHVybiBDb2xsYXBzZS5qUXVlcnlJbnRlcmZhY2U7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2U7XHJcbiIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTIpOiBkb20vZGF0YS5qc1xyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnN0YW50c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5jb25zdCBtYXBEYXRhID0gKCgpID0+IHtcclxuICBjb25zdCBzdG9yZURhdGEgPSB7fTtcclxuICBsZXQgaWQgPSAxO1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXQoZWxlbWVudCwga2V5LCBkYXRhKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5ic0tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBlbGVtZW50LmJzS2V5ID0ge1xyXG4gICAgICAgICAga2V5LFxyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZCsrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdG9yZURhdGFbZWxlbWVudC5ic0tleS5pZF0gPSBkYXRhO1xyXG4gICAgfSxcclxuICAgIGdldChlbGVtZW50LCBrZXkpIHtcclxuICAgICAgaWYgKCFlbGVtZW50IHx8IHR5cGVvZiBlbGVtZW50LmJzS2V5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBrZXlQcm9wZXJ0aWVzID0gZWxlbWVudC5ic0tleTtcclxuICAgICAgaWYgKGtleVByb3BlcnRpZXMua2V5ID09PSBrZXkpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmVEYXRhW2tleVByb3BlcnRpZXMuaWRdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbiAgICBkZWxldGUoZWxlbWVudCwga2V5KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5ic0tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSBlbGVtZW50LmJzS2V5O1xyXG4gICAgICBpZiAoa2V5UHJvcGVydGllcy5rZXkgPT09IGtleSkge1xyXG4gICAgICAgIGRlbGV0ZSBzdG9yZURhdGFba2V5UHJvcGVydGllcy5pZF07XHJcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuYnNLZXk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IERhdGEgPSB7XHJcbiAgc2V0RGF0YShpbnN0YW5jZSwga2V5LCBkYXRhKSB7XHJcbiAgICBtYXBEYXRhLnNldChpbnN0YW5jZSwga2V5LCBkYXRhKTtcclxuICB9LFxyXG4gIGdldERhdGEoaW5zdGFuY2UsIGtleSkge1xyXG4gICAgcmV0dXJuIG1hcERhdGEuZ2V0KGluc3RhbmNlLCBrZXkpO1xyXG4gIH0sXHJcbiAgcmVtb3ZlRGF0YShpbnN0YW5jZSwga2V5KSB7XHJcbiAgICBtYXBEYXRhLmRlbGV0ZShpbnN0YW5jZSwga2V5KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTtcclxuIiwiLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEJvb3RzdHJhcCAodjUuMC4wLWFscGhhMik6IGRvbS9ldmVudC1oYW5kbGVyLmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0UHJldmVudGVkUHJlc2VydmVkT25EaXNwYXRjaCB9IGZyb20gJy4vcG9seWZpbGwuanMnO1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb25zdGFudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuY29uc3QgJCA9IGdldGpRdWVyeSgpO1xyXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi87XHJcbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qLztcclxuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskLztcclxuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9OyAvLyBFdmVudHMgc3RvcmFnZVxyXG5sZXQgdWlkRXZlbnQgPSAxO1xyXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XHJcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXHJcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0JyxcclxufTtcclxuY29uc3QgbmF0aXZlRXZlbnRzID0gW1xyXG4gICdjbGljaycsXHJcbiAgJ2RibGNsaWNrJyxcclxuICAnbW91c2V1cCcsXHJcbiAgJ21vdXNlZG93bicsXHJcbiAgJ2NvbnRleHRtZW51JyxcclxuICAnbW91c2V3aGVlbCcsXHJcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcclxuICAnbW91c2VvdmVyJyxcclxuICAnbW91c2VvdXQnLFxyXG4gICdtb3VzZW1vdmUnLFxyXG4gICdzZWxlY3RzdGFydCcsXHJcbiAgJ3NlbGVjdGVuZCcsXHJcbiAgJ2tleWRvd24nLFxyXG4gICdrZXlwcmVzcycsXHJcbiAgJ2tleXVwJyxcclxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxyXG4gICd0b3VjaHN0YXJ0JyxcclxuICAndG91Y2htb3ZlJyxcclxuICAndG91Y2hlbmQnLFxyXG4gICd0b3VjaGNhbmNlbCcsXHJcbiAgJ3BvaW50ZXJkb3duJyxcclxuICAncG9pbnRlcm1vdmUnLFxyXG4gICdwb2ludGVydXAnLFxyXG4gICdwb2ludGVybGVhdmUnLFxyXG4gICdwb2ludGVyY2FuY2VsJyxcclxuICAnZ2VzdHVyZXN0YXJ0JyxcclxuICAnZ2VzdHVyZWNoYW5nZScsXHJcbiAgJ2dlc3R1cmVlbmQnLFxyXG4gICdmb2N1cycsXHJcbiAgJ2JsdXInLFxyXG4gICdjaGFuZ2UnLFxyXG4gICdyZXNldCcsXHJcbiAgJ3NlbGVjdCcsXHJcbiAgJ3N1Ym1pdCcsXHJcbiAgJ2ZvY3VzaW4nLFxyXG4gICdmb2N1c291dCcsXHJcbiAgJ2xvYWQnLFxyXG4gICd1bmxvYWQnLFxyXG4gICdiZWZvcmV1bmxvYWQnLFxyXG4gICdyZXNpemUnLFxyXG4gICdtb3ZlJyxcclxuICAnRE9NQ29udGVudExvYWRlZCcsXHJcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxyXG4gICdlcnJvcicsXHJcbiAgJ2Fib3J0JyxcclxuICAnc2Nyb2xsJyxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpdmF0ZSBtZXRob2RzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGdldFVpZEV2ZW50KGVsZW1lbnQsIHVpZCkge1xyXG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50KGVsZW1lbnQpIHtcclxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KTtcclxuXHJcbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZDtcclxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge307XHJcblxyXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50O1xyXG5cclxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xyXG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSBkb21FbGVtZW50cy5sZW5ndGg7IGktLTsgKSB7XHJcbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGFyZ2V0O1xyXG5cclxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xyXG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcclxuICBjb25zdCB1aWRFdmVudExpc3QgPSBPYmplY3Qua2V5cyhldmVudHMpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdWlkRXZlbnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dO1xyXG5cclxuICAgIGlmIChldmVudC5vcmlnaW5hbEhhbmRsZXIgPT09IGhhbmRsZXIgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XHJcbiAgY29uc3QgZGVsZWdhdGlvbiA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJztcclxuICBjb25zdCBvcmlnaW5hbEhhbmRsZXIgPSBkZWxlZ2F0aW9uID8gZGVsZWdhdGlvbkZuIDogaGFuZGxlcjtcclxuXHJcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxyXG4gIGxldCB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJyk7XHJcbiAgY29uc3QgY3VzdG9tID0gY3VzdG9tRXZlbnRzW3R5cGVFdmVudF07XHJcblxyXG4gIGlmIChjdXN0b20pIHtcclxuICAgIHR5cGVFdmVudCA9IGN1c3RvbTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmluZGV4T2YodHlwZUV2ZW50KSA+IC0xO1xyXG5cclxuICBpZiAoIWlzTmF0aXZlKSB7XHJcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIG9uZU9mZikge1xyXG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWhhbmRsZXIpIHtcclxuICAgIGhhbmRsZXIgPSBkZWxlZ2F0aW9uRm47XHJcbiAgICBkZWxlZ2F0aW9uRm4gPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhcclxuICAgIG9yaWdpbmFsVHlwZUV2ZW50LFxyXG4gICAgaGFuZGxlcixcclxuICAgIGRlbGVnYXRpb25GblxyXG4gICk7XHJcbiAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudCk7XHJcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSk7XHJcbiAgY29uc3QgcHJldmlvdXNGbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbCk7XHJcblxyXG4gIGlmIChwcmV2aW91c0ZuKSB7XHJcbiAgICBwcmV2aW91c0ZuLm9uZU9mZiA9IHByZXZpb3VzRm4ub25lT2ZmICYmIG9uZU9mZjtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChvcmlnaW5hbEhhbmRsZXIsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSk7XHJcbiAgY29uc3QgZm4gPSBkZWxlZ2F0aW9uXHJcbiAgICA/IGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcclxuICAgIDogYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyKTtcclxuXHJcbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsO1xyXG4gIGZuLm9yaWdpbmFsSGFuZGxlciA9IG9yaWdpbmFsSGFuZGxlcjtcclxuICBmbi5vbmVPZmYgPSBvbmVPZmY7XHJcbiAgZm4udWlkRXZlbnQgPSB1aWQ7XHJcbiAgaGFuZGxlcnNbdWlkXSA9IGZuO1xyXG5cclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgZGVsZWdhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xyXG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcik7XHJcblxyXG4gIGlmICghZm4pIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpO1xyXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XHJcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcclxuXHJcbiAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goKGhhbmRsZXJLZXkpID0+IHtcclxuICAgIGlmIChoYW5kbGVyS2V5LmluZGV4T2YobmFtZXNwYWNlKSA+IC0xKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRbaGFuZGxlcktleV07XHJcblxyXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcclxuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XHJcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIGZhbHNlKTtcclxuICB9LFxyXG5cclxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xyXG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCB0cnVlKTtcclxuICB9LFxyXG5cclxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xyXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMoXHJcbiAgICAgIG9yaWdpbmFsVHlwZUV2ZW50LFxyXG4gICAgICBoYW5kbGVyLFxyXG4gICAgICBkZWxlZ2F0aW9uRm5cclxuICAgICk7XHJcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnQ7XHJcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KTtcclxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuY2hhckF0KDApID09PSAnLic7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbEhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxyXG4gICAgICBpZiAoIWV2ZW50cyB8fCAhZXZlbnRzW3R5cGVFdmVudF0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hbWVzcGFjZSkge1xyXG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goKGVsZW1lbnRFdmVudCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9O1xyXG4gICAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goKGtleUhhbmRsZXJzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKTtcclxuXHJcbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5kZXhPZihoYW5kbGVyS2V5KSA+IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc107XHJcblxyXG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xyXG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xyXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50O1xyXG4gICAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaW5kZXhPZih0eXBlRXZlbnQpID4gLTE7XHJcblxyXG4gICAgbGV0IGpRdWVyeUV2ZW50O1xyXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlO1xyXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZTtcclxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXZ0ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xyXG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpO1xyXG5cclxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KTtcclxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO1xyXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpO1xyXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTmF0aXZlKSB7XHJcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgICAgIGV2dC5pbml0RXZlbnQodHlwZUV2ZW50LCBidWJibGVzLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xyXG4gICAgICAgIGJ1YmJsZXMsXHJcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWVyZ2UgY3VzdG9tIGluZm9ybWF0aW9uIGluIG91ciBldmVudFxyXG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZ0LCBrZXksIHtcclxuICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyZ3Nba2V5XTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKCFkZWZhdWx0UHJldmVudGVkUHJlc2VydmVkT25EaXNwYXRjaCkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsICdkZWZhdWx0UHJldmVudGVkJywge1xyXG4gICAgICAgICAgZ2V0OiAoKSA9PiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XHJcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiB0eXBlb2YgalF1ZXJ5RXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGV2dDtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyO1xyXG4iLCIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQm9vdHN0cmFwICh2NS4wLjAtYWxwaGEyKTogZG9tL21hbmlwdWxhdG9yLmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsKSB7XHJcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh2YWwgPT09IE51bWJlcih2YWwpLnRvU3RyaW5nKCkpIHtcclxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWwgPT09ICcnIHx8IHZhbCA9PT0gJ251bGwnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XHJcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCAoY2hyKSA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YCk7XHJcbn1cclxuXHJcbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xyXG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpO1xyXG4gIH0sXHJcblxyXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKTtcclxuICB9LFxyXG5cclxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgIC4uLmVsZW1lbnQuZGF0YXNldCxcclxuICAgIH07XHJcblxyXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IG5vcm1hbGl6ZURhdGEoYXR0cmlidXRlc1trZXldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gIH0sXHJcblxyXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSk7XHJcbiAgfSxcclxuXHJcbiAgb2Zmc2V0KGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcclxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBwb3NpdGlvbihlbGVtZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxyXG4gICAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvcjtcclxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTIpOiBkb20vcG9seWZpbGwuanNcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0VUlEIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcyc7XHJcblxyXG5sZXQgZmluZCA9IEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGw7XHJcbmxldCBmaW5kT25lID0gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvcjtcclxuXHJcbi8vIE1TRWRnZSByZXNldHMgZGVmYXVsdFByZXZlbnRlZCBmbGFnIHVwb24gZGlzcGF0Y2hFdmVudCBjYWxsIGlmIGF0IGxlYXN0IG9uZSBsaXN0ZW5lciBpcyBhdHRhY2hlZFxyXG5jb25zdCBkZWZhdWx0UHJldmVudGVkUHJlc2VydmVkT25EaXNwYXRjaCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnQm9vdHN0cmFwJywge1xyXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignQm9vdHN0cmFwJywgKCkgPT4gbnVsbCk7XHJcblxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgcmV0dXJuIGUuZGVmYXVsdFByZXZlbnRlZDtcclxufSkoKTtcclxuXHJcbmNvbnN0IHNjb3BlU2VsZWN0b3JSZWdleCA9IC86c2NvcGVcXGIvO1xyXG5jb25zdCBzdXBwb3J0U2NvcGVRdWVyeSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICB0cnkge1xyXG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgKicpO1xyXG4gIH0gY2F0Y2ggKF8pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59KSgpO1xyXG5cclxuaWYgKCFzdXBwb3J0U2NvcGVRdWVyeSkge1xyXG4gIGZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgIGlmICghc2NvcGVTZWxlY3RvclJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc0lkID0gQm9vbGVhbih0aGlzLmlkKTtcclxuXHJcbiAgICBpZiAoIWhhc0lkKSB7XHJcbiAgICAgIHRoaXMuaWQgPSBnZXRVSUQoJ3Njb3BlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5vZGVMaXN0ID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShzY29wZVNlbGVjdG9yUmVnZXgsIGAjJHt0aGlzLmlkfWApO1xyXG4gICAgICBub2RlTGlzdCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpZiAoIWhhc0lkKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbm9kZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZmluZE9uZSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgaWYgKCFzY29wZVNlbGVjdG9yUmVnZXgudGVzdChzZWxlY3RvcikpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWF0Y2hlcyA9IGZpbmQuY2FsbCh0aGlzLCBzZWxlY3Rvcik7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVzWzBdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm4gbWF0Y2hlc1swXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBmaW5kLCBmaW5kT25lLCBkZWZhdWx0UHJldmVudGVkUHJlc2VydmVkT25EaXNwYXRjaCB9O1xyXG4iLCIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQm9vdHN0cmFwICh2NS4wLjAtYWxwaGEyKTogZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5pbXBvcnQgeyBmaW5kIGFzIGZpbmRGbiwgZmluZE9uZSB9IGZyb20gJy4vcG9seWZpbGwuanMnO1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb25zdGFudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuY29uc3QgTk9ERV9URVhUID0gMztcclxuXHJcbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xyXG4gIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xyXG4gIH0sXHJcblxyXG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZmluZEZuLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKTtcclxuICB9LFxyXG5cclxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZmluZE9uZS5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcclxuICB9LFxyXG5cclxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbik7XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKTtcclxuICB9LFxyXG5cclxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCBwYXJlbnRzID0gW107XHJcblxyXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG5cclxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xyXG4gICAgICBpZiAodGhpcy5tYXRjaGVzKGFuY2VzdG9yLCBzZWxlY3RvcikpIHtcclxuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudHM7XHJcbiAgfSxcclxuXHJcbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIHdoaWxlIChwcmV2aW91cykge1xyXG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcclxuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG5cclxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIHdoaWxlIChuZXh0KSB7XHJcbiAgICAgIGlmICh0aGlzLm1hdGNoZXMobmV4dCwgc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtuZXh0XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmU7XHJcbiIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTIpOiB1dGlsL2luZGV4LmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwO1xyXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDA7XHJcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnO1xyXG5cclxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxyXG5jb25zdCB0b1R5cGUgPSAob2JqKSA9PiB7XHJcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGAke29ian1gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHt9LnRvU3RyaW5nXHJcbiAgICAuY2FsbChvYmopXHJcbiAgICAubWF0Y2goL1xccyhbYS16XSspL2kpWzFdXHJcbiAgICAudG9Mb3dlckNhc2UoKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQdWJsaWMgVXRpbCBBcGlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5jb25zdCBnZXRVSUQgPSAocHJlZml4KSA9PiB7XHJcbiAgZG8ge1xyXG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpO1xyXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpO1xyXG5cclxuICByZXR1cm4gcHJlZml4O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2VsZWN0b3IgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xyXG5cclxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcclxuICAgIGNvbnN0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlbGVjdG9yO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcclxuXHJcbiAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudCk7XHJcblxyXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcclxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pO1xyXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpO1xyXG5cclxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXHJcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxyXG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdO1xyXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdO1xyXG5cclxuICByZXR1cm4gKHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUjtcclxufTtcclxuXHJcbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSk7XHJcbn07XHJcblxyXG5jb25zdCBpc0VsZW1lbnQgPSAob2JqKSA9PiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGU7XHJcblxyXG5jb25zdCBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xyXG4gIGxldCBjYWxsZWQgPSBmYWxzZTtcclxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1O1xyXG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBkdXJhdGlvbiArIGR1cmF0aW9uUGFkZGluZztcclxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcclxuICAgIGNhbGxlZCA9IHRydWU7XHJcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfSwgZW11bGF0ZWREdXJhdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCB0eXBlQ2hlY2tDb25maWcgPSAoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykgPT4ge1xyXG4gIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XTtcclxuICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcclxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlICYmIGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpO1xyXG5cclxuICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xyXG4gICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xyXG4gICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGlzVmlzaWJsZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbWVudC5zdHlsZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlKSB7XHJcbiAgICBjb25zdCBlbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgY29uc3QgcGFyZW50Tm9kZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LnBhcmVudE5vZGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGVsZW1lbnRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcclxuICAgICAgcGFyZW50Tm9kZVN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxyXG4gICAgICBlbGVtZW50U3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbidcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IChlbGVtZW50KSA9PiB7XHJcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxyXG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcclxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XHJcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSk7XHJcbn07XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4gZnVuY3Rpb24gKCkge307XHJcblxyXG5jb25zdCByZWZsb3cgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblxyXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBqUXVlcnkgfSA9IHdpbmRvdztcclxuXHJcbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tanF1ZXJ5JykpIHtcclxuICAgIHJldHVybiBqUXVlcnk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0alF1ZXJ5LFxyXG4gIFRSQU5TSVRJT05fRU5ELFxyXG4gIGdldFVJRCxcclxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxyXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXHJcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXHJcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXHJcbiAgaXNFbGVtZW50LFxyXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxyXG4gIHR5cGVDaGVja0NvbmZpZyxcclxuICBpc1Zpc2libGUsXHJcbiAgZmluZFNoYWRvd1Jvb3QsXHJcbiAgbm9vcCxcclxuICByZWZsb3csXHJcbn07XHJcbiIsImltcG9ydCB7IGVsZW1lbnQsIGdldGpRdWVyeSwgdHlwZUNoZWNrQ29uZmlnIH0gZnJvbSAnLi4vbWRiL3V0aWwvaW5kZXguanMnO1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi9tZGIvZG9tL2RhdGEuanMnO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2Jvb3RzdHJhcC9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMnO1xyXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vbWRiL2RvbS9tYW5pcHVsYXRvci5qcyc7XHJcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9tZGIvZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyc7XHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnN0YW50c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5jb25zdCBOQU1FID0gJ3JpcHBsZSc7XHJcbmNvbnN0IERBVEFfS0VZID0gJ21kYi5yaXBwbGUnO1xyXG5jb25zdCBDTEFTU05BTUVfUklQUExFID0gJ3JpcHBsZS1zdXJmYWNlJztcclxuY29uc3QgQ0xBU1NOQU1FX1JJUFBMRV9XQVZFID0gJ3JpcHBsZS13YXZlJztcclxuY29uc3QgU0VMRUNUT1JfQ09NUE9ORU5UID0gWycuYnRuJywgJy5yaXBwbGUnXTtcclxuXHJcbmNvbnN0IENMQVNTTkFNRV9VTkJPVU5EID0gJ3JpcHBsZS1zdXJmYWNlLXVuYm91bmQnO1xyXG5jb25zdCBHUkFESUVOVCA9XHJcbiAgJ3JnYmEoe3tjb2xvcn19LCAwLjIpIDAsIHJnYmEoe3tjb2xvcn19LCAwLjMpIDQwJSwgcmdiYSh7e2NvbG9yfX0sIDAuNCkgNTAlLCByZ2JhKHt7Y29sb3J9fSwgMC41KSA2MCUsIHJnYmEoe3tjb2xvcn19LCAwKSA3MCUnO1xyXG5jb25zdCBERUZBVUxUX1JJUFBMRV9DT0xPUiA9IFswLCAwLCAwXTtcclxuY29uc3QgQk9PVFNUUkFQX0NPTE9SUyA9IFtcclxuICAncHJpbWFyeScsXHJcbiAgJ3NlY29uZGFyeScsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdkYW5nZXInLFxyXG4gICd3YXJuaW5nJyxcclxuICAnaW5mbycsXHJcbiAgJ2xpZ2h0JyxcclxuICAnZGFyaycsXHJcbl07XHJcblxyXG4vLyBTZXRzIHdhbHVlIHdoZW4gcnVuIG9wYWNpdHkgdHJhbnNpdGlvblxyXG4vLyBIaWRlIGVsZW1lbnQgYWZ0ZXIgNTAlICgwLjUpIHRpbWUgb2YgYW5pbWF0aW9uIGFuZCBmaW5pc2ggb24gMTAwJVxyXG5jb25zdCBUUkFOU0lUSU9OX0JSRUFLX09QQUNJVFkgPSAwLjU7XHJcblxyXG5jb25zdCBEZWZhdWx0ID0ge1xyXG4gIHJpcHBsZUNlbnRlcmVkOiBmYWxzZSxcclxuICByaXBwbGVDb2xvcjogJycsXHJcbiAgcmlwcGxlRHVyYXRpb246ICc1MDBtcycsXHJcbiAgcmlwcGxlUmFkaXVzOiAwLFxyXG4gIHJpcHBsZVVuYm91bmQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XHJcbiAgcmlwcGxlQ2VudGVyZWQ6ICdib29sZWFuJyxcclxuICByaXBwbGVDb2xvcjogJ3N0cmluZycsXHJcbiAgcmlwcGxlRHVyYXRpb246ICdzdHJpbmcnLFxyXG4gIHJpcHBsZVJhZGl1czogJ251bWJlcicsXHJcbiAgcmlwcGxlVW5ib3VuZDogJ2Jvb2xlYW4nLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNsYXNzIFJpcHBsZSB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fZ2V0Q29uZmlnKG9wdGlvbnMpO1xyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgRGF0YS5zZXREYXRhKGVsZW1lbnQsIERBVEFfS0VZLCB0aGlzKTtcclxuICAgICAgTWFuaXB1bGF0b3IuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgQ0xBU1NOQU1FX1JJUFBMRSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2xpY2tIYW5kbGVyID0gdGhpcy5fY3JlYXRlUmlwcGxlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBHZXR0ZXJzXHJcblxyXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcclxuICAgIHJldHVybiBOQU1FO1xyXG4gIH1cclxuXHJcbiAgLy8gUHVibGljXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLl9hZGRDbGlja0V2ZW50KHRoaXMuX2VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZGlzcG9zZSgpIHtcclxuICAgIERhdGEucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XHJcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsICdjbGljaycsIHRoaXMuX2NsaWNrSGFuZGxlcik7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gUHJpdmF0ZVxyXG5cclxuICBfYXV0b0luaXQoZXZlbnQpIHtcclxuICAgIFNFTEVDVE9SX0NPTVBPTkVOVC5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5jbG9zZXN0KGV2ZW50LnRhcmdldCwgc2VsZWN0b3IpO1xyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmNsb3Nlc3QoZXZlbnQudGFyZ2V0LCBzZWxlY3Rvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgTWFuaXB1bGF0b3IuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgQ0xBU1NOQU1FX1JJUFBMRSk7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fZ2V0Q29uZmlnKCk7XHJcbiAgICB0aGlzLl9jcmVhdGVSaXBwbGUoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgX2FkZENsaWNrRXZlbnQodGFyZ2V0KSB7XHJcbiAgICBFdmVudEhhbmRsZXIub24odGFyZ2V0LCAnY2xpY2snLCB0aGlzLl9jbGlja0hhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZVJpcHBsZShldmVudCkge1xyXG4gICAgY29uc3QgeyBsYXllclgsIGxheWVyWSB9ID0gZXZlbnQ7XHJcbiAgICBjb25zdCBvZmZzZXRYID0gbGF5ZXJYO1xyXG4gICAgY29uc3Qgb2Zmc2V0WSA9IGxheWVyWTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuX2VsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLl9lbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLl9kdXJhdGlvblRvTXNOdW1iZXIodGhpcy5fb3B0aW9ucy5yaXBwbGVEdXJhdGlvbik7XHJcbiAgICBjb25zdCBkaWFtZXRlck9wdGlvbnMgPSB7XHJcbiAgICAgIG9mZnNldFg6IHRoaXMuX29wdGlvbnMucmlwcGxlQ2VudGVyZWQgPyBoZWlnaHQgLyAyIDogb2Zmc2V0WCxcclxuICAgICAgb2Zmc2V0WTogdGhpcy5fb3B0aW9ucy5yaXBwbGVDZW50ZXJlZCA/IHdpZHRoIC8gMiA6IG9mZnNldFksXHJcbiAgICAgIGhlaWdodCxcclxuICAgICAgd2lkdGgsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZGlhbWV0ZXIgPSB0aGlzLl9nZXREaWFtZXRlcihkaWFtZXRlck9wdGlvbnMpO1xyXG4gICAgY29uc3QgcmFkaXVzVmFsdWUgPSB0aGlzLl9vcHRpb25zLnJpcHBsZVJhZGl1cyB8fCBkaWFtZXRlciAvIDI7XHJcblxyXG4gICAgY29uc3Qgb3BhY2l0eSA9IHtcclxuICAgICAgZGVsYXk6IGR1cmF0aW9uICogVFJBTlNJVElPTl9CUkVBS19PUEFDSVRZLFxyXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gLSBkdXJhdGlvbiAqIFRSQU5TSVRJT05fQlJFQUtfT1BBQ0lUWSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICBsZWZ0OiB0aGlzLl9vcHRpb25zLnJpcHBsZUNlbnRlcmVkXHJcbiAgICAgICAgPyBgJHt3aWR0aCAvIDIgLSByYWRpdXNWYWx1ZX1weGBcclxuICAgICAgICA6IGAke29mZnNldFggLSByYWRpdXNWYWx1ZX1weGAsXHJcbiAgICAgIHRvcDogdGhpcy5fb3B0aW9ucy5yaXBwbGVDZW50ZXJlZFxyXG4gICAgICAgID8gYCR7aGVpZ2h0IC8gMiAtIHJhZGl1c1ZhbHVlfXB4YFxyXG4gICAgICAgIDogYCR7b2Zmc2V0WSAtIHJhZGl1c1ZhbHVlfXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHt0aGlzLl9vcHRpb25zLnJpcHBsZVJhZGl1cyAqIDIgfHwgZGlhbWV0ZXJ9cHhgLFxyXG4gICAgICB3aWR0aDogYCR7dGhpcy5fb3B0aW9ucy5yaXBwbGVSYWRpdXMgKiAyIHx8IGRpYW1ldGVyfXB4YCxcclxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgMHMsICR7b3BhY2l0eS5kZWxheX1tc2AsXHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7ZHVyYXRpb259bXMsICR7b3BhY2l0eS5kdXJhdGlvbn1tc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJpcHBsZUhUTUwgPSBlbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICB0aGlzLl9jcmVhdGVIVE1MUmlwcGxlKHsgd3JhcHBlcjogdGhpcy5fZWxlbWVudCwgcmlwcGxlOiByaXBwbGVIVE1MLCBzdHlsZXMgfSk7XHJcbiAgICB0aGlzLl9yZW1vdmVIVE1MUmlwcGxlKHsgcmlwcGxlOiByaXBwbGVIVE1MLCBkdXJhdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIF9jcmVhdGVIVE1MUmlwcGxlKHsgd3JhcHBlciwgcmlwcGxlLCBzdHlsZXMgfSkge1xyXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4gKHJpcHBsZS5zdHlsZVtwcm9wZXJ0eV0gPSBzdHlsZXNbcHJvcGVydHldKSk7XHJcbiAgICByaXBwbGUuY2xhc3NMaXN0LmFkZChDTEFTU05BTUVfUklQUExFX1dBVkUpO1xyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMucmlwcGxlQ29sb3IgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuX3JlbW92ZU9sZENvbG9yQ2xhc3Nlcyh3cmFwcGVyKTtcclxuICAgICAgdGhpcy5fYWRkQ29sb3IocmlwcGxlLCB3cmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90b2dnbGVVbmJvdW5kKHdyYXBwZXIpO1xyXG4gICAgdGhpcy5fYXBwZW5kUmlwcGxlKHJpcHBsZSwgd3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBfcmVtb3ZlSFRNTFJpcHBsZSh7IHJpcHBsZSwgZHVyYXRpb24gfSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmIChyaXBwbGUpIHtcclxuICAgICAgICByaXBwbGUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIGR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIF9kdXJhdGlvblRvTXNOdW1iZXIodGltZSkge1xyXG4gICAgcmV0dXJuIE51bWJlcih0aW1lLnJlcGxhY2UoJ21zJywgJycpLnJlcGxhY2UoJ3MnLCAnMDAwJykpO1xyXG4gIH1cclxuXHJcbiAgX2dldENvbmZpZyhjb25maWcgPSB7fSkge1xyXG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KTtcclxuXHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIC4uLkRlZmF1bHQsXHJcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxyXG4gICAgICAuLi5jb25maWcsXHJcbiAgICB9O1xyXG5cclxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBfZ2V0RGlhbWV0ZXIoeyBvZmZzZXRYLCBvZmZzZXRZLCBoZWlnaHQsIHdpZHRoIH0pIHtcclxuICAgIGNvbnN0IHRvcCA9IG9mZnNldFkgPD0gaGVpZ2h0IC8gMjtcclxuICAgIGNvbnN0IGxlZnQgPSBvZmZzZXRYIDw9IHdpZHRoIC8gMjtcclxuICAgIGNvbnN0IHB5dGhhZ29yZWFuID0gKHNpZGVBLCBzaWRlQikgPT4gTWF0aC5zcXJ0KHNpZGVBICoqIDIgKyBzaWRlQiAqKiAyKTtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbkNlbnRlciA9IG9mZnNldFkgPT09IGhlaWdodCAvIDIgJiYgb2Zmc2V0WCA9PT0gd2lkdGggLyAyO1xyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gb24gdGhlIHF1YWRyYW50cyBvZiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW1cclxuICAgIGNvbnN0IHF1YWRyYW50ID0ge1xyXG4gICAgICBmaXJzdDogdG9wID09PSB0cnVlICYmIGxlZnQgPT09IGZhbHNlLFxyXG4gICAgICBzZWNvbmQ6IHRvcCA9PT0gdHJ1ZSAmJiBsZWZ0ID09PSB0cnVlLFxyXG4gICAgICB0aGlyZDogdG9wID09PSBmYWxzZSAmJiBsZWZ0ID09PSB0cnVlLFxyXG4gICAgICBmb3VydGg6IHRvcCA9PT0gZmFsc2UgJiYgbGVmdCA9PT0gZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldENvcm5lciA9IHtcclxuICAgICAgdG9wTGVmdDogcHl0aGFnb3JlYW4ob2Zmc2V0WCwgb2Zmc2V0WSksXHJcbiAgICAgIHRvcFJpZ2h0OiBweXRoYWdvcmVhbih3aWR0aCAtIG9mZnNldFgsIG9mZnNldFkpLFxyXG4gICAgICBib3R0b21MZWZ0OiBweXRoYWdvcmVhbihvZmZzZXRYLCBoZWlnaHQgLSBvZmZzZXRZKSxcclxuICAgICAgYm90dG9tUmlnaHQ6IHB5dGhhZ29yZWFuKHdpZHRoIC0gb2Zmc2V0WCwgaGVpZ2h0IC0gb2Zmc2V0WSksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBkaWFtZXRlciA9IDA7XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uQ2VudGVyIHx8IHF1YWRyYW50LmZvdXJ0aCkge1xyXG4gICAgICBkaWFtZXRlciA9IGdldENvcm5lci50b3BMZWZ0O1xyXG4gICAgfSBlbHNlIGlmIChxdWFkcmFudC50aGlyZCkge1xyXG4gICAgICBkaWFtZXRlciA9IGdldENvcm5lci50b3BSaWdodDtcclxuICAgIH0gZWxzZSBpZiAocXVhZHJhbnQuc2Vjb25kKSB7XHJcbiAgICAgIGRpYW1ldGVyID0gZ2V0Q29ybmVyLmJvdHRvbVJpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChxdWFkcmFudC5maXJzdCkge1xyXG4gICAgICBkaWFtZXRlciA9IGdldENvcm5lci5ib3R0b21MZWZ0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpYW1ldGVyICogMjtcclxuICB9XHJcblxyXG4gIF9hcHBlbmRSaXBwbGUodGFyZ2V0LCBwYXJlbnQpIHtcclxuICAgIGNvbnN0IEZJWF9BRERfUklQUExFX0VGRkVDVCA9IDUwOyAvLyBkZWxheSBmb3IgYWN0aXZlIGFuaW1hdGlvbnNcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIE1hbmlwdWxhdG9yLmFkZENsYXNzKHRhcmdldCwgJ2FjdGl2ZScpO1xyXG4gICAgfSwgRklYX0FERF9SSVBQTEVfRUZGRUNUKTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVVbmJvdW5kKHRhcmdldCkge1xyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMucmlwcGxlVW5ib3VuZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBNYW5pcHVsYXRvci5hZGRDbGFzcyh0YXJnZXQsIENMQVNTTkFNRV9VTkJPVU5EKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTTkFNRV9VTkJPVU5EKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hZGRDb2xvcih0YXJnZXQsIHBhcmVudCkge1xyXG4gICAgY29uc3QgSVNfQk9PVFNUUkFQX0NPTE9SID0gQk9PVFNUUkFQX0NPTE9SUy5maW5kKFxyXG4gICAgICAoY29sb3IpID0+IGNvbG9yID09PSB0aGlzLl9vcHRpb25zLnJpcHBsZUNvbG9yLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcblxyXG4gICAgaWYgKElTX0JPT1RTVFJBUF9DT0xPUikge1xyXG4gICAgICBNYW5pcHVsYXRvci5hZGRDbGFzcyhcclxuICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgYCR7Q0xBU1NOQU1FX1JJUFBMRX0tJHt0aGlzLl9vcHRpb25zLnJpcHBsZUNvbG9yLnRvTG93ZXJDYXNlKCl9YFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcmdiVmFsdWUgPSB0aGlzLl9jb2xvclRvUkdCKHRoaXMuX29wdGlvbnMucmlwcGxlQ29sb3IpLmpvaW4oJywnKTtcclxuICAgICAgY29uc3QgZ3JhZGllbnRJbWFnZSA9IEdSQURJRU5ULnNwbGl0KCd7e2NvbG9yfX0nKS5qb2luKGAke3JnYlZhbHVlfWApO1xyXG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICR7Z3JhZGllbnRJbWFnZX0pYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9yZW1vdmVPbGRDb2xvckNsYXNzZXModGFyZ2V0KSB7XHJcbiAgICBjb25zdCBSRUdFWFBfQ0xBU1NfQ09MT1IgPSBuZXcgUmVnRXhwKGAke0NMQVNTTkFNRV9SSVBQTEV9LVthLXpdK2AsICdnaScpO1xyXG4gICAgY29uc3QgUEFSRU5UX0NMQVNTU19DT0xPUiA9IHRhcmdldC5jbGFzc0xpc3QudmFsdWUubWF0Y2goUkVHRVhQX0NMQVNTX0NPTE9SKSB8fCBbXTtcclxuICAgIFBBUkVOVF9DTEFTU1NfQ09MT1IuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jb2xvclRvUkdCKGNvbG9yKSB7XHJcbiAgICBmdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xyXG4gICAgICBjb25zdCBIRVhfQ09MT1JfTEVOR1RIID0gNztcclxuICAgICAgY29uc3QgSVNfU0hPUlRfSEVYID0gY29sb3IubGVuZ3RoIDwgSEVYX0NPTE9SX0xFTkdUSDtcclxuICAgICAgaWYgKElTX1NIT1JUX0hFWCkge1xyXG4gICAgICAgIGNvbG9yID0gYCMke2NvbG9yWzFdfSR7Y29sb3JbMV19JHtjb2xvclsyXX0ke2NvbG9yWzJdfSR7Y29sb3JbM119JHtjb2xvclszXX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDEsIDIpLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDMsIDIpLCAxNiksXHJcbiAgICAgICAgcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDUsIDIpLCAxNiksXHJcbiAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmFtZWRDb2xvcnNUb1JnYmEoY29sb3IpIHtcclxuICAgICAgY29uc3QgdGVtcEVsZW0gPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpY3R1bScpKTtcclxuICAgICAgY29uc3QgZmxhZyA9ICdyZ2IoMSwgMiwgMyknO1xyXG4gICAgICB0ZW1wRWxlbS5zdHlsZS5jb2xvciA9IGZsYWc7XHJcbiAgICAgIGlmICh0ZW1wRWxlbS5zdHlsZS5jb2xvciAhPT0gZmxhZykge1xyXG4gICAgICAgIHJldHVybiBERUZBVUxUX1JJUFBMRV9DT0xPUjtcclxuICAgICAgfVxyXG4gICAgICB0ZW1wRWxlbS5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICBpZiAodGVtcEVsZW0uc3R5bGUuY29sb3IgPT09IGZsYWcgfHwgdGVtcEVsZW0uc3R5bGUuY29sb3IgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUklQUExFX0NPTE9SO1xyXG4gICAgICB9IC8vIGNvbG9yIHBhcnNlIGZhaWxlZFxyXG4gICAgICBjb2xvciA9IGdldENvbXB1dGVkU3R5bGUodGVtcEVsZW0pLmNvbG9yO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBFbGVtKTtcclxuICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJnYmFUb1JnYihjb2xvcikge1xyXG4gICAgICBjb2xvciA9IGNvbG9yLm1hdGNoKC9bLlxcZF0rL2cpLm1hcCgoYSkgPT4gK051bWJlcihhKSk7XHJcbiAgICAgIGNvbG9yLmxlbmd0aCA9IDM7XHJcbiAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PT0gJ3RyYW5zcGFyZW50Jykge1xyXG4gICAgICByZXR1cm4gREVGQVVMVF9SSVBQTEVfQ09MT1I7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sb3JbMF0gPT09ICcjJykge1xyXG4gICAgICByZXR1cm4gaGV4VG9SZ2IoY29sb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbG9yLmluZGV4T2YoJ3JnYicpID09PSAtMSkge1xyXG4gICAgICBjb2xvciA9IG5hbWVkQ29sb3JzVG9SZ2JhKGNvbG9yKTtcclxuICAgIH1cclxuICAgIGlmIChjb2xvci5pbmRleE9mKCdyZ2InKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gcmdiYVRvUmdiKGNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gREVGQVVMVF9SSVBQTEVfQ09MT1I7XHJcbiAgfVxyXG5cclxuICAvLyBTdGF0aWNcclxuICBzdGF0aWMgYXV0b0luaXRpYWwoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaW5zdGFuY2UuX2F1dG9Jbml0KGV2ZW50KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKTtcclxuICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSaXBwbGUodGhpcywgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uIC0gYXV0byBpbml0aWFsaXphdGlvblxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5TRUxFQ1RPUl9DT01QT05FTlQuZm9yRWFjaCgoc2xlY3RvcikgPT4ge1xyXG4gIEV2ZW50SGFuZGxlci5vbmUoZG9jdW1lbnQsICdjbGljaycsIHNsZWN0b3IsIFJpcHBsZS5hdXRvSW5pdGlhbChuZXcgUmlwcGxlKCkpKTtcclxufSk7XHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIGpRdWVyeVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYWRkIC5yaXBwbGUgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcclxuICovXHJcblxyXG5jb25zdCAkID0gZ2V0alF1ZXJ5KCk7XHJcblxyXG5pZiAoJCkge1xyXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XHJcbiAgJC5mbltOQU1FXSA9IFJpcHBsZS5qUXVlcnlJbnRlcmZhY2U7XHJcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFJpcHBsZTtcclxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XHJcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xyXG4gICAgcmV0dXJuIFJpcHBsZS5qUXVlcnlJbnRlcmZhY2U7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlwcGxlO1xyXG4iLCIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQm9vdHN0cmFwICh2NS4wLjAtYWxwaGExKTogZG9tL2RhdGEuanNcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvbnN0YW50c1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5jb25zdCBtYXBEYXRhID0gKCgpID0+IHtcclxuICBjb25zdCBzdG9yZURhdGEgPSB7fTtcclxuICBsZXQgaWQgPSAxO1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXQoZWxlbWVudCwga2V5LCBkYXRhKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFtrZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGVsZW1lbnRba2V5XSA9IHtcclxuICAgICAgICAgIGtleSxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWQrKztcclxuICAgICAgfVxyXG5cclxuICAgICAgc3RvcmVEYXRhW2VsZW1lbnRba2V5XS5pZF0gPSBkYXRhO1xyXG4gICAgfSxcclxuICAgIGdldChlbGVtZW50LCBrZXkpIHtcclxuICAgICAgaWYgKCFlbGVtZW50IHx8IHR5cGVvZiBlbGVtZW50W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSBlbGVtZW50W2tleV07XHJcbiAgICAgIGlmIChrZXlQcm9wZXJ0aWVzLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JlRGF0YVtrZXlQcm9wZXJ0aWVzLmlkXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlKGVsZW1lbnQsIGtleSkge1xyXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGtleVByb3BlcnRpZXMgPSBlbGVtZW50W2tleV07XHJcbiAgICAgIGlmIChrZXlQcm9wZXJ0aWVzLmtleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHN0b3JlRGF0YVtrZXlQcm9wZXJ0aWVzLmlkXTtcclxuICAgICAgICBkZWxldGUgZWxlbWVudFtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBEYXRhID0ge1xyXG4gIHNldERhdGEoaW5zdGFuY2UsIGtleSwgZGF0YSkge1xyXG4gICAgbWFwRGF0YS5zZXQoaW5zdGFuY2UsIGtleSwgZGF0YSk7XHJcbiAgfSxcclxuICBnZXREYXRhKGluc3RhbmNlLCBrZXkpIHtcclxuICAgIHJldHVybiBtYXBEYXRhLmdldChpbnN0YW5jZSwga2V5KTtcclxuICB9LFxyXG4gIHJlbW92ZURhdGEoaW5zdGFuY2UsIGtleSkge1xyXG4gICAgbWFwRGF0YS5kZWxldGUoaW5zdGFuY2UsIGtleSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7XHJcbiIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGRlZmF1bHRQcmV2ZW50ZWRQcmVzZXJ2ZWRPbkRpc3BhdGNoIH0gZnJvbSAnLi9wb2x5ZmlsbC5qcyc7XHJcbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnO1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb25zdGFudHNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuY29uc3QgJCA9IGdldGpRdWVyeSgpO1xyXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi87XHJcbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qLztcclxuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskLztcclxuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9OyAvLyBFdmVudHMgc3RvcmFnZVxyXG5sZXQgdWlkRXZlbnQgPSAxO1xyXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XHJcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXHJcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0JyxcclxufTtcclxuY29uc3QgbmF0aXZlRXZlbnRzID0gW1xyXG4gICdjbGljaycsXHJcbiAgJ2RibGNsaWNrJyxcclxuICAnbW91c2V1cCcsXHJcbiAgJ21vdXNlZG93bicsXHJcbiAgJ2NvbnRleHRtZW51JyxcclxuICAnbW91c2V3aGVlbCcsXHJcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcclxuICAnbW91c2VvdmVyJyxcclxuICAnbW91c2VvdXQnLFxyXG4gICdtb3VzZW1vdmUnLFxyXG4gICdzZWxlY3RzdGFydCcsXHJcbiAgJ3NlbGVjdGVuZCcsXHJcbiAgJ2tleWRvd24nLFxyXG4gICdrZXlwcmVzcycsXHJcbiAgJ2tleXVwJyxcclxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxyXG4gICd0b3VjaHN0YXJ0JyxcclxuICAndG91Y2htb3ZlJyxcclxuICAndG91Y2hlbmQnLFxyXG4gICd0b3VjaGNhbmNlbCcsXHJcbiAgJ3BvaW50ZXJkb3duJyxcclxuICAncG9pbnRlcm1vdmUnLFxyXG4gICdwb2ludGVydXAnLFxyXG4gICdwb2ludGVybGVhdmUnLFxyXG4gICdwb2ludGVyY2FuY2VsJyxcclxuICAnZ2VzdHVyZXN0YXJ0JyxcclxuICAnZ2VzdHVyZWNoYW5nZScsXHJcbiAgJ2dlc3R1cmVlbmQnLFxyXG4gICdmb2N1cycsXHJcbiAgJ2JsdXInLFxyXG4gICdjaGFuZ2UnLFxyXG4gICdyZXNldCcsXHJcbiAgJ3NlbGVjdCcsXHJcbiAgJ3N1Ym1pdCcsXHJcbiAgJ2ZvY3VzaW4nLFxyXG4gICdmb2N1c291dCcsXHJcbiAgJ2xvYWQnLFxyXG4gICd1bmxvYWQnLFxyXG4gICdiZWZvcmV1bmxvYWQnLFxyXG4gICdyZXNpemUnLFxyXG4gICdtb3ZlJyxcclxuICAnRE9NQ29udGVudExvYWRlZCcsXHJcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxyXG4gICdlcnJvcicsXHJcbiAgJ2Fib3J0JyxcclxuICAnc2Nyb2xsJyxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHJpdmF0ZSBtZXRob2RzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGdldFVpZEV2ZW50KGVsZW1lbnQsIHVpZCkge1xyXG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50KGVsZW1lbnQpIHtcclxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KTtcclxuXHJcbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZDtcclxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge307XHJcblxyXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xyXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XHJcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcclxuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IGRvbUVsZW1lbnRzLmxlbmd0aDsgaS0tOyAnJykge1xyXG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcclxuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG8gcGxlYXNlIEVTTGludFxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XHJcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHVpZEV2ZW50TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbdWlkRXZlbnRMaXN0W2ldXTtcclxuXHJcbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBldmVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xyXG4gIGNvbnN0IGRlbGVnYXRpb24gPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZyc7XHJcbiAgY29uc3Qgb3JpZ2luYWxIYW5kbGVyID0gZGVsZWdhdGlvbiA/IGRlbGVnYXRpb25GbiA6IGhhbmRsZXI7XHJcblxyXG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcclxuICBsZXQgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpO1xyXG4gIGNvbnN0IGN1c3RvbSA9IGN1c3RvbUV2ZW50c1t0eXBlRXZlbnRdO1xyXG5cclxuICBpZiAoY3VzdG9tKSB7XHJcbiAgICB0eXBlRXZlbnQgPSBjdXN0b207XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5pbmRleE9mKHR5cGVFdmVudCkgPiAtMTtcclxuXHJcbiAgaWYgKCFpc05hdGl2ZSkge1xyXG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBvbmVPZmYpIHtcclxuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFoYW5kbGVyKSB7XHJcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuO1xyXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMoXHJcbiAgICBvcmlnaW5hbFR5cGVFdmVudCxcclxuICAgIGhhbmRsZXIsXHJcbiAgICBkZWxlZ2F0aW9uRm5cclxuICApO1xyXG4gIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpO1xyXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pO1xyXG4gIGNvbnN0IHByZXZpb3VzRm4gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpO1xyXG5cclxuICBpZiAocHJldmlvdXNGbikge1xyXG4gICAgcHJldmlvdXNGbi5vbmVPZmYgPSBwcmV2aW91c0ZuLm9uZU9mZiAmJiBvbmVPZmY7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQob3JpZ2luYWxIYW5kbGVyLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpO1xyXG4gIGNvbnN0IGZuID0gZGVsZWdhdGlvblxyXG4gICAgPyBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXHJcbiAgICA6IGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlcik7XHJcblxyXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbDtcclxuICBmbi5vcmlnaW5hbEhhbmRsZXIgPSBvcmlnaW5hbEhhbmRsZXI7XHJcbiAgZm4ub25lT2ZmID0gb25lT2ZmO1xyXG4gIGZuLnVpZEV2ZW50ID0gdWlkO1xyXG4gIGhhbmRsZXJzW3VpZF0gPSBmbjtcclxuXHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGRlbGVnYXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcclxuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpO1xyXG5cclxuICBpZiAoIWZuKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKTtcclxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xyXG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge307XHJcblxyXG4gIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKChoYW5kbGVyS2V5KSA9PiB7XHJcbiAgICBpZiAoaGFuZGxlcktleS5pbmRleE9mKG5hbWVzcGFjZSkgPiAtMSkge1xyXG4gICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldO1xyXG5cclxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XHJcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xyXG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBmYWxzZSk7XHJcbiAgfSxcclxuXHJcbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcclxuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgdHJ1ZSk7XHJcbiAgfSxcclxuXHJcbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcclxuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKFxyXG4gICAgICBvcmlnaW5hbFR5cGVFdmVudCxcclxuICAgICAgaGFuZGxlcixcclxuICAgICAgZGVsZWdhdGlvbkZuXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50O1xyXG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudCk7XHJcbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LmNoYXJBdCgwKSA9PT0gJy4nO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxIYW5kbGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cclxuICAgICAgaWYgKCFldmVudHMgfHwgIWV2ZW50c1t0eXBlRXZlbnRdKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcclxuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKChlbGVtZW50RXZlbnQpID0+IHtcclxuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fTtcclxuICAgIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKChrZXlIYW5kbGVycykgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJyk7XHJcblxyXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluZGV4T2YoaGFuZGxlcktleSkgPiAtMSkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdO1xyXG5cclxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3Rvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcclxuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKTtcclxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudDtcclxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmluZGV4T2YodHlwZUV2ZW50KSA+IC0xO1xyXG5cclxuICAgIGxldCBqUXVlcnlFdmVudDtcclxuICAgIGxldCBidWJibGVzID0gdHJ1ZTtcclxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWU7XHJcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGV2dCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcclxuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKTtcclxuXHJcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudCk7XHJcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTtcclxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTtcclxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05hdGl2ZSkge1xyXG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xyXG4gICAgICBldnQuaW5pdEV2ZW50KHR5cGVFdmVudCwgYnViYmxlcywgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcclxuICAgICAgICBidWJibGVzLFxyXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbnMgaW4gb3VyIGV2ZW50XHJcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xyXG4gICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJnc1trZXldO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoIWRlZmF1bHRQcmV2ZW50ZWRQcmVzZXJ2ZWRPbkRpc3BhdGNoKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2dCwgJ2RlZmF1bHRQcmV2ZW50ZWQnLCB7XHJcbiAgICAgICAgICBnZXQ6ICgpID0+IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcclxuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIHR5cGVvZiBqUXVlcnlFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXZ0O1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRIYW5kbGVyTXVsdGkgPSB7XHJcbiAgb24oZWxlbWVudCwgZXZlbnRzTmFtZSwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XHJcbiAgICBjb25zdCBldmVudHMgPSBldmVudHNOYW1lLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIGV2ZW50c1tpXSwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XHJcbiAgICBjb25zdCBldmVudHMgPSBvcmlnaW5hbFR5cGVFdmVudC5zcGxpdCgnICcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnRzW2ldLCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7XHJcbiIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiBkb20vbWFuaXB1bGF0b3IuanNcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbCkge1xyXG4gIGlmICh2YWwgPT09ICd0cnVlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsID09PSAnZmFsc2UnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsID09PSBOdW1iZXIodmFsKS50b1N0cmluZygpKSB7XHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICdudWxsJykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xyXG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgKGNocikgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApO1xyXG59XHJcblxyXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcclxuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKTtcclxuICB9LFxyXG5cclxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCk7XHJcbiAgfSxcclxuXHJcbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge1xyXG4gICAgICAuLi5lbGVtZW50LmRhdGFzZXQsXHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBhdHRyaWJ1dGVzW2tleV0gPSBub3JtYWxpemVEYXRhKGF0dHJpYnV0ZXNba2V5XSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYXR0cmlidXRlcztcclxuICB9LFxyXG5cclxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpO1xyXG4gIH0sXHJcblxyXG4gIG9mZnNldChlbGVtZW50KSB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXHJcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgcG9zaXRpb24oZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcclxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBzdHlsZShlbGVtZW50LCBzdHlsZSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkgcmV0dXJuO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgfSxcclxuXHJcbiAgYWRkU3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcclxuICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHN0eWxlW3Byb3BlcnR5XTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm47XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICB9LFxyXG5cclxuICBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvcjtcclxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiBkb20vcG9seWZpbGwuanNcclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5pbXBvcnQgeyBnZXRVSUQgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJztcclxuXHJcbmxldCBmaW5kRWxlbWVudHMgPSBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsO1xyXG5sZXQgZmluZEVsZW1lbnQgPSBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yO1xyXG5cclxuLy8gTVNFZGdlIHJlc2V0cyBkZWZhdWx0UHJldmVudGVkIGZsYWcgdXBvbiBkaXNwYXRjaEV2ZW50IGNhbGwgaWYgYXQgbGVhc3Qgb25lIGxpc3RlbmVyIGlzIGF0dGFjaGVkXHJcbmNvbnN0IGRlZmF1bHRQcmV2ZW50ZWRQcmVzZXJ2ZWRPbkRpc3BhdGNoID0gKCgpID0+IHtcclxuICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCdCb290c3RyYXAnLCB7XHJcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdCb290c3RyYXAnLCAoKSA9PiBudWxsKTtcclxuXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcclxuICByZXR1cm4gZS5kZWZhdWx0UHJldmVudGVkO1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc2NvcGVTZWxlY3RvclJlZ2V4ID0gLzpzY29wZVxcYi87XHJcbmNvbnN0IHN1cHBvcnRTY29wZVF1ZXJ5ID0gKCgpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSAqJyk7XHJcbiAgfSBjYXRjaCAoXykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn0pKCk7XHJcblxyXG5pZiAoIXN1cHBvcnRTY29wZVF1ZXJ5KSB7XHJcbiAgZmluZEVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICBpZiAoIXNjb3BlU2VsZWN0b3JSZWdleC50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNJZCA9IEJvb2xlYW4odGhpcy5pZCk7XHJcblxyXG4gICAgaWYgKCFoYXNJZCkge1xyXG4gICAgICB0aGlzLmlkID0gZ2V0VUlEKCdzY29wZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBub2RlTGlzdCA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2Uoc2NvcGVTZWxlY3RvclJlZ2V4LCBgIyR7dGhpcy5pZH1gKTtcclxuICAgICAgbm9kZUxpc3QgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgaWYgKCFoYXNJZCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5vZGVMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZpbmRFbGVtZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICBpZiAoIXNjb3BlU2VsZWN0b3JSZWdleC50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtYXRjaGVzID0gZmluZC5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIG1hdGNoZXNbMF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGZpbmQgPSBmaW5kRWxlbWVudHM7XHJcbmNvbnN0IGZpbmRPbmUgPSBmaW5kRWxlbWVudDtcclxuXHJcbmV4cG9ydCB7IGZpbmQsIGZpbmRPbmUsIGRlZmF1bHRQcmV2ZW50ZWRQcmVzZXJ2ZWRPbkRpc3BhdGNoIH07XHJcbiIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZmluZCBhcyBmaW5kRm4sIGZpbmRPbmUgfSBmcm9tICcuL3BvbHlmaWxsLmpzJztcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29uc3RhbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNvbnN0IE5PREVfVEVYVCA9IDM7XHJcblxyXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcclxuICBjbG9zZXN0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcclxuICB9LFxyXG5cclxuICBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcclxuICB9LFxyXG5cclxuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmZpbmRGbi5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSk7XHJcbiAgfSxcclxuXHJcbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGZpbmRPbmUuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XHJcbiAgfSxcclxuXHJcbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pO1xyXG5cclxuICAgIHJldHVybiBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSk7XHJcbiAgfSxcclxuXHJcbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgY29uc3QgcGFyZW50cyA9IFtdO1xyXG5cclxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuXHJcbiAgICB3aGlsZSAoYW5jZXN0b3IgJiYgYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIGFuY2VzdG9yLm5vZGVUeXBlICE9PSBOT0RFX1RFWFQpIHtcclxuICAgICAgaWYgKHRoaXMubWF0Y2hlcyhhbmNlc3Rvciwgc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnRzO1xyXG4gIH0sXHJcblxyXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICB3aGlsZSAocHJldmlvdXMpIHtcclxuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxuXHJcbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICB3aGlsZSAobmV4dCkge1xyXG4gICAgICBpZiAodGhpcy5tYXRjaGVzKG5leHQsIHNlbGVjdG9yKSkge1xyXG4gICAgICAgIHJldHVybiBbbmV4dF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lO1xyXG4iLCJpbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyc7XHJcbmltcG9ydCB7IGlzVmlzaWJsZSB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5cclxuY2xhc3MgRm9jdXNUcmFwIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5fZXZlbnQgPSBvcHRpb25zLmV2ZW50IHx8ICdibHVyJztcclxuICAgIHRoaXMuX2NvbmRpdGlvbiA9IG9wdGlvbnMuY29uZGl0aW9uIHx8ICgoKSA9PiB0cnVlKTtcclxuICAgIHRoaXMuX3NlbGVjdG9yID1cclxuICAgICAgb3B0aW9ucy5zZWxlY3RvciB8fCAnYnV0dG9uLCBhLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJztcclxuICAgIHRoaXMuX29ubHlWaXNpYmxlID0gb3B0aW9ucy5vbmx5VmlzaWJsZSB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzID0gW107XHJcbiAgICB0aGlzLl9maXJzdEVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5fbGFzdEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9jb25kaXRpb24oZSkgJiYgZS50YXJnZXQgPT09IHRoaXMuX2xhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuX2ZpcnN0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdHJhcCgpIHtcclxuICAgIHRoaXMuX3NldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB0aGlzLl9zZXRGb2N1c1RyYXAoKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudCwgdGhpcy5oYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5fc2V0RWxlbWVudHMoKTtcclxuICAgIHRoaXMuX3NldEZvY3VzVHJhcCgpO1xyXG4gIH1cclxuXHJcbiAgX2luaXQoKSB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLl9maXJzdEVsZW1lbnQgfHwgZS5rZXkgIT09ICdUYWInKSByZXR1cm47XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5fZmlyc3RFbGVtZW50LmZvY3VzKCk7XHJcblxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgX2ZpbHRlclZpc2libGUoZWxlbWVudHMpIHtcclxuICAgIHJldHVybiBlbGVtZW50cy5maWx0ZXIoKGVsKSA9PiB7XHJcbiAgICAgIGlmICghaXNWaXNpYmxlKGVsKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgY29uc3QgYW5jZXN0b3JzID0gU2VsZWN0b3JFbmdpbmUucGFyZW50cyhlbCwgJyonKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5jZXN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhbmNlc3RvcnNbaV0pO1xyXG4gICAgICAgIGlmIChzdHlsZSAmJiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0RWxlbWVudHMoKSB7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vbmx5VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cyA9IHRoaXMuX2ZpbHRlclZpc2libGUodGhpcy5fZm9jdXNhYmxlRWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZpcnN0RWxlbWVudCA9IHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzWzBdO1xyXG4gICAgdGhpcy5fbGFzdEVsZW1lbnQgPSB0aGlzLl9mb2N1c2FibGVFbGVtZW50c1t0aGlzLl9mb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIF9zZXRGb2N1c1RyYXAoKSB7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgIGlmIChpID09PSB0aGlzLl9mb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2V2ZW50LCB0aGlzLmhhbmRsZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9ldmVudCwgdGhpcy5oYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXA7XHJcbiIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY1LjAuMC1hbHBoYTEpOiB1dGlsL2luZGV4LmpzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDA7XHJcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMDtcclxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCc7XHJcblxyXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXHJcbmNvbnN0IHRvVHlwZSA9IChvYmopID0+IHtcclxuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gYCR7b2JqfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge30udG9TdHJpbmdcclxuICAgIC5jYWxsKG9iailcclxuICAgIC5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV1cclxuICAgIC50b0xvd2VyQ2FzZSgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFB1YmxpYyBVdGlsIEFwaVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNvbnN0IGdldFVJRCA9IChwcmVmaXgpID0+IHtcclxuICBkbyB7XHJcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCk7XHJcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XHJcblxyXG4gIHJldHVybiBwcmVmaXg7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWxlY3RvciA9IChlbGVtZW50KSA9PiB7XHJcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcblxyXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xyXG4gICAgY29uc3QgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VsZWN0b3I7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpO1xyXG5cclxuICBpZiAoc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RWxlbWVudEZyb21TZWxlY3RvciA9IChlbGVtZW50KSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KTtcclxuXHJcbiAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxyXG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuXHJcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSk7XHJcblxyXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcclxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XHJcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF07XHJcbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF07XHJcblxyXG4gIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSO1xyXG59O1xyXG5cclxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKTtcclxufTtcclxuXHJcbmNvbnN0IGlzRWxlbWVudCA9IChvYmopID0+IChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZTtcclxuXHJcbmNvbnN0IGVtdWxhdGVUcmFuc2l0aW9uRW5kID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XHJcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDU7XHJcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGR1cmF0aW9uICsgZHVyYXRpb25QYWRkaW5nO1xyXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xyXG4gICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBpZiAoIWNhbGxlZCkge1xyXG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KTtcclxuICAgIH1cclxuICB9LCBlbXVsYXRlZER1cmF0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IHR5cGVDaGVja0NvbmZpZyA9IChjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSA9PiB7XHJcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldO1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldO1xyXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXHJcbiAgICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXHJcbiAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgaXNWaXNpYmxlID0gKGVsZW1lbnQpID0+IHtcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtZW50LnN0eWxlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuc3R5bGUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQucGFyZW50Tm9kZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgZWxlbWVudFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxyXG4gICAgICBwYXJlbnROb2RlU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXHJcbiAgICAgIGVsZW1lbnRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJ1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gKGVsZW1lbnQpID0+IHtcclxuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XHJcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpO1xyXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcclxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKTtcclxufTtcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbmNvbnN0IHJlZmxvdyA9IChlbGVtZW50KSA9PiBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcclxuICBjb25zdCB7IGpRdWVyeSB9ID0gd2luZG93O1xyXG5cclxuICBpZiAoalF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1qcXVlcnknKSkge1xyXG4gICAgcmV0dXJuIGpRdWVyeTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgYXJyYXkgPSAoY29sbGVjdGlvbikgPT4ge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKGNvbGxlY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgZWxlbWVudCA9ICh0YWcpID0+IHtcclxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRqUXVlcnksXHJcbiAgVFJBTlNJVElPTl9FTkQsXHJcbiAgZ2V0VUlELFxyXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXHJcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcclxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcclxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcclxuICBpc0VsZW1lbnQsXHJcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXHJcbiAgdHlwZUNoZWNrQ29uZmlnLFxyXG4gIGlzVmlzaWJsZSxcclxuICBmaW5kU2hhZG93Um9vdCxcclxuICBub29wLFxyXG4gIHJlZmxvdyxcclxuICBhcnJheSxcclxuICBlbGVtZW50LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgTEVGVF9BUlJPVyA9IDM3O1xyXG5leHBvcnQgY29uc3QgVVBfQVJST1cgPSAzODtcclxuZXhwb3J0IGNvbnN0IFJJR0hUX0FSUk9XID0gMzk7XHJcbmV4cG9ydCBjb25zdCBET1dOX0FSUk9XID0gNDA7XHJcbmV4cG9ydCBjb25zdCBIT01FID0gMzY7XHJcbmV4cG9ydCBjb25zdCBFTkQgPSAzNTtcclxuZXhwb3J0IGNvbnN0IFBBR0VfVVAgPSAzMztcclxuZXhwb3J0IGNvbnN0IFBBR0VfRE9XTiA9IDM0O1xyXG5leHBvcnQgY29uc3QgRU5URVIgPSAxMztcclxuZXhwb3J0IGNvbnN0IFNQQUNFID0gMzI7XHJcbmV4cG9ydCBjb25zdCBFU0NBUEUgPSAyNztcclxuZXhwb3J0IGNvbnN0IFRBQiA9IDk7XHJcbmV4cG9ydCBjb25zdCBBID0gNjU7XHJcbmV4cG9ydCBjb25zdCBCID0gNjY7XHJcbmV4cG9ydCBjb25zdCBDID0gNjc7XHJcbmV4cG9ydCBjb25zdCBEID0gNjg7XHJcbmV4cG9ydCBjb25zdCBFID0gNjk7XHJcbmV4cG9ydCBjb25zdCBGID0gNzA7XHJcbmV4cG9ydCBjb25zdCBHID0gNzE7XHJcbmV4cG9ydCBjb25zdCBIID0gNzI7XHJcbmV4cG9ydCBjb25zdCBJID0gNzM7XHJcbmV4cG9ydCBjb25zdCBKID0gNzQ7XHJcbmV4cG9ydCBjb25zdCBLID0gNzU7XHJcbmV4cG9ydCBjb25zdCBMID0gNzY7XHJcbmV4cG9ydCBjb25zdCBNID0gNzc7XHJcbmV4cG9ydCBjb25zdCBOID0gNzg7XHJcbmV4cG9ydCBjb25zdCBPID0gNzk7XHJcbmV4cG9ydCBjb25zdCBQID0gODA7XHJcbmV4cG9ydCBjb25zdCBRID0gODE7XHJcbmV4cG9ydCBjb25zdCBSID0gODI7XHJcbmV4cG9ydCBjb25zdCBTID0gODM7XHJcbmV4cG9ydCBjb25zdCBUID0gODQ7XHJcbmV4cG9ydCBjb25zdCBVID0gODU7XHJcbmV4cG9ydCBjb25zdCBWID0gODY7XHJcbmV4cG9ydCBjb25zdCBXID0gODc7XHJcbmV4cG9ydCBjb25zdCBYID0gODg7XHJcbmV4cG9ydCBjb25zdCBZID0gODk7XHJcbmV4cG9ydCBjb25zdCBaID0gOTA7XHJcbiIsImltcG9ydCBTd2lwZSBmcm9tICcuL3N3aXBlLmpzJztcclxuXHJcbmNsYXNzIFRvdWNoIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudCA9ICdzd2lwZScsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLl9ldmVudCA9IGV2ZW50O1xyXG5cclxuICAgIC8vIGV2ZW50c1xyXG5cclxuICAgIHRoaXMuc3dpcGUgPSBuZXcgU3dpcGUoZWxlbWVudCwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gaGFuZGxlcnNcclxuXHJcbiAgICB0aGlzLl90b3VjaFN0YXJ0SGFuZGxlciA9IHRoaXMuX2hhbmRsZVRvdWNoU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX3RvdWNoTW92ZUhhbmRsZXIgPSB0aGlzLl9oYW5kbGVUb3VjaE1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX3RvdWNoRW5kSGFuZGxlciA9IHRoaXMuX2hhbmRsZVRvdWNoRW5kLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fdG91Y2hTdGFydEhhbmRsZXIpO1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl90b3VjaE1vdmVIYW5kbGVyKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX3RvdWNoRW5kSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChlKSA9PiB0aGlzLl9oYW5kbGVUb3VjaFN0YXJ0KGUpKTtcclxuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLl9oYW5kbGVUb3VjaE1vdmUoZSkpO1xyXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlKSA9PiB0aGlzLl9oYW5kbGVUb3VjaEVuZChlKSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlVG91Y2hTdGFydChlKSB7XHJcbiAgICB0aGlzW3RoaXMuX2V2ZW50XS5oYW5kbGVUb3VjaFN0YXJ0KGUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVRvdWNoTW92ZShlKSB7XHJcbiAgICB0aGlzW3RoaXMuX2V2ZW50XS5oYW5kbGVUb3VjaE1vdmUoZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlVG91Y2hFbmQoZSkge1xyXG4gICAgdGhpc1t0aGlzLl9ldmVudF0uaGFuZGxlVG91Y2hFbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3VjaDtcclxuIiwiaW1wb3J0IFRvdWNoVXRpbCBmcm9tICcuL3RvdWNoVXRpbC5qcyc7XHJcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnO1xyXG5cclxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xyXG4gIHRocmVzaG9sZDogMTAsXHJcbiAgZGlyZWN0aW9uOiAnYWxsJyxcclxufTtcclxuXHJcbmNsYXNzIFN3aXBlIGV4dGVuZHMgVG91Y2hVdGlsIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gbnVsbDtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgIC4uLkRFRkFVTFRfT1BUSU9OUyxcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcclxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLl9nZXRDb29yZGluYXRlcyhlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVRvdWNoTW92ZShlKSB7XHJcbiAgICBpZiAoIXRoaXMuX3N0YXJ0UG9zaXRpb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldENvb3JkaW5hdGVzKGUpO1xyXG4gICAgY29uc3QgZGlzcGxhY2VtZW50ID0ge1xyXG4gICAgICB4OiBwb3NpdGlvbi54IC0gdGhpcy5fc3RhcnRQb3NpdGlvbi54LFxyXG4gICAgICB5OiBwb3NpdGlvbi55IC0gdGhpcy5fc3RhcnRQb3NpdGlvbi55LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzd2lwZSA9IHRoaXMuX2dldERpcmVjdGlvbihkaXNwbGFjZW1lbnQpO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2FsbCcpIHtcclxuICAgICAgaWYgKHN3aXBlLnkudmFsdWUgPCB0aGlzLl9vcHRpb25zLnRocmVzaG9sZCAmJiBzd2lwZS54LnZhbHVlIDwgdGhpcy5fb3B0aW9ucy50aHJlc2hvbGQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gc3dpcGUueS52YWx1ZSA+IHN3aXBlLngudmFsdWUgPyBzd2lwZS55LmRpcmVjdGlvbiA6IHN3aXBlLnguZGlyZWN0aW9uO1xyXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBgc3dpcGUke2RpcmVjdGlvbn1gKTtcclxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgJ3N3aXBlJywgeyBkaXJlY3Rpb24gfSk7XHJcbiAgICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXhpcyA9IHRoaXMuX29wdGlvbnMuZGlyZWN0aW9uID09PSAnbGVmdCcgfHwgdGhpcy5fb3B0aW9ucyA9PT0gJ3JpZ2h0JyA/ICd4JyA6ICd5JztcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHN3aXBlW2F4aXNdLmRpcmVjdGlvbiA9PT0gdGhpcy5fb3B0aW9ucy5kaXJlY3Rpb24gJiZcclxuICAgICAgc3dpcGVbYXhpc10udmFsdWUgPiB0aGlzLl9vcHRpb25zLnRocmVzaG9sZFxyXG4gICAgKSB7XHJcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIGBzd2lwZSR7c3dpcGVbYXhpc10uZGlyZWN0aW9ufWApO1xyXG4gICAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRvdWNoRW5kKCkge1xyXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2lwZTtcclxuIiwiY2xhc3MgVG91Y2hVdGlsIHtcclxuICBfZ2V0Q29vcmRpbmF0ZXMoZSkge1xyXG4gICAgY29uc3QgW3RvdWNoXSA9IGUudG91Y2hlcztcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHRvdWNoLmNsaWVudFgsXHJcbiAgICAgIHk6IHRvdWNoLmNsaWVudFksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgX2dldERpcmVjdGlvbihkaXNwbGFjZW1lbnQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICBkaXJlY3Rpb246IGRpc3BsYWNlbWVudC54IDwgMCA/ICdsZWZ0JyA6ICdyaWdodCcsXHJcbiAgICAgICAgdmFsdWU6IE1hdGguYWJzKGRpc3BsYWNlbWVudC54KSxcclxuICAgICAgfSxcclxuICAgICAgeToge1xyXG4gICAgICAgIGRpcmVjdGlvbjogZGlzcGxhY2VtZW50LnkgPCAwID8gJ3VwJyA6ICdkb3duJyxcclxuICAgICAgICB2YWx1ZTogTWF0aC5hYnMoZGlzcGxhY2VtZW50LnkpLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdWNoVXRpbDtcclxuIiwiaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xyXG5pbXBvcnQgeyBhcnJheSwgZWxlbWVudCwgaXNWaXNpYmxlLCBnZXRqUXVlcnksIHR5cGVDaGVja0NvbmZpZyB9IGZyb20gJy4uL21kYi91dGlsL2luZGV4JztcclxuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuLi9tZGIvdXRpbC9mb2N1c1RyYXAnO1xyXG5pbXBvcnQgeyBFTlRFUiwgVEFCLCBFU0NBUEUgfSBmcm9tICcuLi9tZGIvdXRpbC9rZXljb2Rlcyc7XHJcbmltcG9ydCBUb3VjaCBmcm9tICcuLi9tZGIvdXRpbC90b3VjaCc7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuLi9ib290c3RyYXAvc3JjL2NvbGxhcHNlJztcclxuaW1wb3J0IERhdGEgZnJvbSAnLi4vbWRiL2RvbS9kYXRhJztcclxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9ib290c3RyYXAvc3JjL2RvbS9ldmVudC1oYW5kbGVyJztcclxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL21kYi9kb20vbWFuaXB1bGF0b3InO1xyXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vbWRiL2RvbS9zZWxlY3Rvci1lbmdpbmUnO1xyXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uL2ZyZWUvcmlwcGxlJztcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29uc3RhbnRzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNvbnN0IE5BTUUgPSAnc2lkZW5hdic7XHJcbmNvbnN0IERBVEFfS0VZID0gJ21kYi5zaWRlbmF2JztcclxuY29uc3QgQVJST1dfQ0xBU1MgPSAncm90YXRlLWljb24nO1xyXG5jb25zdCBCQUNLRFJPUF9DTEFTUyA9ICdzaWRlbmF2LWJhY2tkcm9wJztcclxuY29uc3QgU0VMRUNUT1JfU0lERU5BViA9ICcuc2lkZW5hdic7XHJcbmNvbnN0IFNFTEVDVE9SX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJzaWRlbmF2XCJdJztcclxuY29uc3QgU0VMRUNUT1JfU0hPV19TTElNID0gJ1tkYXRhLXNsaW09XCJ0cnVlXCJdJztcclxuY29uc3QgU0VMRUNUT1JfSElERV9TTElNID0gJ1tkYXRhLXNsaW09XCJmYWxzZVwiXSc7XHJcbmNvbnN0IFNFTEVDVE9SX05BVklHQVRJT04gPSAnLnNpZGVuYXYtbWVudSc7XHJcbmNvbnN0IFNFTEVDVE9SX0NPTExBUFNFID0gJy5zaWRlbmF2LWNvbGxhcHNlJztcclxuY29uc3QgU0VMRUNUT1JfTElOSyA9ICcuc2lkZW5hdi1saW5rJztcclxuXHJcbmNvbnN0IFRSQU5TTEFUSU9OX0xFRlQgPSAtMTAwO1xyXG5jb25zdCBUUkFOU0xBVElPTl9SSUdIVCA9IDEwMDtcclxuXHJcbmxldCBpbnN0YW5jZUNvdW50ID0gMDtcclxuXHJcbmNvbnN0IE9QVElPTlNfVFlQRSA9IHtcclxuICBhY2NvcmRpb246ICcoYm9vbGVhbiknLFxyXG4gIGJhY2tkcm9wOiAnKGJvb2xlYW4pJyxcclxuICBiYWNrZHJvcENsYXNzOiAnKG51bGx8c3RyaW5nKScsXHJcbiAgY2xvc2VPbkVzYzogJyhib29sZWFuKScsXHJcbiAgY29sb3I6ICcoc3RyaW5nKScsXHJcbiAgY29udGVudDogJyhudWxsfHN0cmluZyknLFxyXG4gIGV4cGFuZGFibGU6ICcoYm9vbGVhbiknLFxyXG4gIGV4cGFuZE9uSG92ZXI6ICcoYm9vbGVhbiknLFxyXG4gIGZvY3VzVHJhcDogJyhib29sZWFuKScsXHJcbiAgaGlkZGVuOiAnKGJvb2xlYW4pJyxcclxuICBtb2RlOiAnKHN0cmluZyknLFxyXG4gIHNjcm9sbENvbnRhaW5lcjogJyhudWxsfHN0cmluZyknLFxyXG4gIHNsaW06ICcoYm9vbGVhbiknLFxyXG4gIHNsaW1Db2xsYXBzZWQ6ICcoYm9vbGVhbiknLFxyXG4gIHNsaW1XaWR0aDogJyhudW1iZXIpJyxcclxuICBwb3NpdGlvbjogJyhzdHJpbmcpJyxcclxuICByaWdodDogJyhib29sZWFuKScsXHJcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnKG51bWJlciknLFxyXG4gIHdpZHRoOiAnKG51bWJlciknLFxyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xyXG4gIGFjY29yZGlvbjogZmFsc2UsXHJcbiAgYmFja2Ryb3A6IHRydWUsXHJcbiAgYmFja2Ryb3BDbGFzczogbnVsbCxcclxuICBjbG9zZU9uRXNjOiB0cnVlLFxyXG4gIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgY29udGVudDogbnVsbCxcclxuICBleHBhbmRhYmxlOiB0cnVlLFxyXG4gIGV4cGFuZE9uSG92ZXI6IGZhbHNlLFxyXG4gIGZvY3VzVHJhcDogdHJ1ZSxcclxuICBoaWRkZW46IHRydWUsXHJcbiAgbW9kZTogJ292ZXInLFxyXG4gIHNjcm9sbENvbnRhaW5lcjogbnVsbCxcclxuICBzbGltOiBmYWxzZSxcclxuICBzbGltQ29sbGFwc2VkOiBmYWxzZSxcclxuICBzbGltV2lkdGg6IDcwLFxyXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gIHJpZ2h0OiBmYWxzZSxcclxuICB0cmFuc2l0aW9uRHVyYXRpb246IDMwMCxcclxuICB3aWR0aDogMjQwLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNsYXNzIFNpZGVuYXYge1xyXG4gIGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdGhpcy5fZWxlbWVudCA9IG5vZGU7XHJcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuXHJcbiAgICBpbnN0YW5jZUNvdW50Kys7XHJcbiAgICB0aGlzLl9JRCA9IGluc3RhbmNlQ291bnQ7XHJcblxyXG4gICAgdGhpcy5fYmFja2Ryb3AgPSBudWxsO1xyXG4gICAgdGhpcy5fY29udGVudCA9IG51bGw7XHJcbiAgICB0aGlzLl9pbml0aWFsQ29udGVudFN0eWxlID0gbnVsbDtcclxuICAgIHRoaXMuX3NsaW1Db2xsYXBzZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9hY3RpdmVOb2RlID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl90ZW1wU2xpbSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX2ZvY3VzVHJhcCA9IG51bGw7XHJcbiAgICB0aGlzLl9wZXJmZWN0U2Nyb2xsYmFyID0gbnVsbDtcclxuICAgIHRoaXMuX3RvdWNoID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmVzY0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy50b2dnbGVyICYmIGlzVmlzaWJsZSh0aGlzLnRvZ2dsZXIpKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csICdrZXlkb3duJywgdGhpcy5lc2NIYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhc2hIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zZXRBY3RpdmVFbGVtZW50cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICBEYXRhLnNldERhdGEobm9kZSwgREFUQV9LRVksIHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5fc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldHRlcnNcclxuXHJcbiAgc3RhdGljIGdldCBOQU1FKCkge1xyXG4gICAgcmV0dXJuIE5BTUU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udGFpbmVyKCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xyXG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSgnYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRDb250YWluZXIgPSAoZWwpID0+IHtcclxuICAgICAgaWYgKCFlbC5wYXJlbnROb2RlIHx8IGVsLnBhcmVudE5vZGUgPT09IGRvY3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbC5wYXJlbnROb2RlLnN0eWxlLnBvc2l0aW9uID09PSAncmVsYXRpdmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpbmRDb250YWluZXIoZWwucGFyZW50Tm9kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBmaW5kQ29udGFpbmVyKHRoaXMuX2VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVmlzaWJsZSgpIHtcclxuICAgIGxldCBjb250YWluZXJTdGFydCA9IDA7XHJcbiAgICBsZXQgY29udGFpbmVyRW5kID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xyXG4gICAgICBjb25zdCBib3VuZHJ5ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnRhaW5lclN0YXJ0ID0gYm91bmRyeS54O1xyXG4gICAgICBjb250YWluZXJFbmQgPSBib3VuZHJ5LnggKyBib3VuZHJ5LndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgeCB9ID0gdGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnJpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmFicyh4IC0gY29udGFpbmVyRW5kKSA+IDEwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguYWJzKHggLSBjb250YWluZXJTdGFydCkgPCAxMDtcclxuICB9XHJcblxyXG4gIGdldCBsaW5rcygpIHtcclxuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0xJTkssIHRoaXMuX2VsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hdmlnYXRpb24oKSB7XHJcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9OQVZJR0FUSU9OLCB0aGlzLl9lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCkge1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAuLi5ERUZBVUxUX09QVElPTlMsXHJcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxyXG4gICAgICAuLi50aGlzLl9vcHRpb25zLFxyXG4gICAgfTtcclxuXHJcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBPUFRJT05TX1RZUEUpO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2lkZW5hdlN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/ICcxMDB2aCcgOiAnMTAwJScsXHJcbiAgICAgIHBvc2l0aW9uOiB0aGlzLm9wdGlvbnMucG9zaXRpb24sXHJcbiAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0aGlzLnRyYW5zaXRpb25EdXJhdGlvbn0gbGluZWFyYCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgdG9nZ2xlcigpIHtcclxuICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RPR0dMRSkuZmluZCgodG9nZ2xlcikgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKHRvZ2dsZXIsICd0YXJnZXQnKTtcclxuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGFyZ2V0KSA9PT0gdGhpcy5fZWxlbWVudDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvZ2dsZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdHJhbnNpdGlvbkR1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24gLyAxMDAwfXNgO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRyYW5zbGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yaWdodCA/IFRSQU5TTEFUSU9OX1JJR0hUIDogVFJBTlNMQVRJT05fTEVGVDtcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zbGltQ29sbGFwc2VkID8gdGhpcy5vcHRpb25zLnNsaW1XaWR0aCA6IHRoaXMub3B0aW9ucy53aWR0aDtcclxuICB9XHJcblxyXG4gIC8vIFB1YmxpY1xyXG5cclxuICBjaGFuZ2VNb2RlKG1vZGUpIHtcclxuICAgIHRoaXMuX3NldE1vZGUobW9kZSk7XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlKCkge1xyXG4gICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csICdrZXlkb3duJywgdGhpcy5lc2NIYW5kbGVyKTtcclxuXHJcbiAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCB0aGlzLmhhc2hIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLl90b3VjaC5kaXNwb3NlKCk7XHJcblxyXG4gICAgRGF0YS5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLl9zZXRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIHRoaXMuX3VwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5fc2V0VmlzaWJpbGl0eSh0cnVlKTtcclxuICAgIHRoaXMuX3VwZGF0ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuX3NldFZpc2liaWxpdHkoIXRoaXMuaXNWaXNpYmxlKTtcclxuICAgIHRoaXMuX3VwZGF0ZSghdGhpcy5pc1Zpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2xpbSgpIHtcclxuICAgIHRoaXMuX3NldFNsaW0oIXRoaXMuX3NsaW1Db2xsYXBzZWQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuICAgIHRoaXMuX3NldHVwKCk7XHJcbiAgfVxyXG5cclxuICAvLyBQcml2YXRlXHJcblxyXG4gIF9hcHBlbmRBcnJvdyhub2RlKSB7XHJcbiAgICBjb25zdCBhcnJvdyA9IGVsZW1lbnQoJ2knKTtcclxuXHJcbiAgICBbJ2ZhcycsICdmYS1hbmdsZS1kb3duJywgQVJST1dfQ0xBU1NdLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgICBNYW5pcHVsYXRvci5hZGRDbGFzcyhhcnJvdywgY2xhc3NOYW1lKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChTZWxlY3RvckVuZ2luZS5maW5kKGAuJHtBUlJPV19DTEFTU31gLCBub2RlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY29sbGFwc2VJdGVtcygpIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5mb3JFYWNoKChtZW51KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbGxhcHNlRWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0NPTExBUFNFLCBtZW51KTtcclxuICAgICAgY29sbGFwc2VFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIENvbGxhcHNlLmdldEluc3RhbmNlKGVsKS5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0dXBCYWNrZHJvcCgpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2Ryb3BDbGFzcykge1xyXG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5vcHRpb25zLmJhY2tkcm9wQ2xhc3MpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhpcy50cmFuc2l0aW9uRHVyYXRpb259IGVhc2Utb3V0YCxcclxuICAgICAgcG9zaXRpb246IHRoaXMub3B0aW9ucy5wb3NpdGlvbixcclxuICAgICAgd2lkdGg6IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyA/ICcxMDB2dycgOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLnBvc2l0aW9uID09PSAnZml4ZWQnID8gJzEwMHZoJyA6ICcxMDAlJyxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLl9iYWNrZHJvcCkge1xyXG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgY2xhc3Nlcy5wdXNoKEJBQ0tEUk9QX0NMQVNTKTtcclxuICAgICAgc3R5bGUub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICBFdmVudEhhbmRsZXIub24oYmFja2Ryb3AsICdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZXRWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgICB0aGlzLl91cGRhdGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gYmFja2Ryb3A7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuXHJcbiAgICBNYW5pcHVsYXRvci5zdHlsZSh0aGlzLl9iYWNrZHJvcCwgc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgX2dldE9mZnNldFZhbHVlKHNob3csIHsgaW5kZXgsIHByb3BlcnR5LCBvZmZzZXRzIH0pIHtcclxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuX2dldFB4VmFsdWUoXHJcbiAgICAgIHRoaXMuX2luaXRpYWxDb250ZW50U3R5bGVbaW5kZXhdW29mZnNldHNbcHJvcGVydHldLnByb3BlcnR5XVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHNob3cgPyBvZmZzZXRzW3Byb3BlcnR5XS52YWx1ZSA6IDA7XHJcbiAgICByZXR1cm4gaW5pdGlhbFZhbHVlICsgb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgX2dldFByb3BlcnR5KC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBhcmdzXHJcbiAgICAgIC5tYXAoKGFyZywgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJnWzBdLnRvVXBwZXJDYXNlKCkuY29uY2F0KGFyZy5zbGljZSgxKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcnKTtcclxuICB9XHJcblxyXG4gIF9nZXRQeFZhbHVlKHByb3BlcnR5KSB7XHJcbiAgICBpZiAoIXByb3BlcnR5KSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJvcGVydHkpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN3aXBlKGUsIGludmVyc2VEaXJlY2lvbikge1xyXG4gICAgaWYgKGludmVyc2VEaXJlY2lvbiAmJiB0aGlzLl9zbGltQ29sbGFwc2VkICYmIHRoaXMub3B0aW9ucy5zbGltICYmIHRoaXMub3B0aW9ucy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlU2xpbSgpO1xyXG4gICAgfSBlbHNlIGlmICghaW52ZXJzZURpcmVjaW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLl9zbGltQ29sbGFwc2VkIHx8ICF0aGlzLm9wdGlvbnMuc2xpbSB8fCAhdGhpcy5vcHRpb25zLmV4cGFuZGFibGUpIHtcclxuICAgICAgICBpZiAodGhpcy50b2dnbGVyICYmIGlzVmlzaWJsZSh0aGlzLnRvZ2dsZXIpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNsaW0oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2lzQWN0aXZlKGxpbmssIHJlZmVyZW5jZSkge1xyXG4gICAgaWYgKHJlZmVyZW5jZSkge1xyXG4gICAgICByZXR1cm4gcmVmZXJlbmNlID09PSBsaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsaW5rLmF0dHJpYnV0ZXMuaHJlZikge1xyXG4gICAgICByZXR1cm4gbmV3IFVSTChsaW5rLCB3aW5kb3cubG9jYXRpb24uaHJlZikuaHJlZiA9PT0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX2lzQWxsQ29sbGFwc2VkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9DT0xMQVBTRSwgdGhpcy5fZWxlbWVudCkuZmlsdGVyKChlbCkgPT4gaXNWaXNpYmxlKGVsKSkubGVuZ3RoID09PVxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX3NldHVwKCkge1xyXG4gICAgLy8gVG91Y2ggZXZlbnRzXHJcbiAgICB0aGlzLl9zZXR1cFRvdWNoKCk7XHJcblxyXG4gICAgLy8gRm9jdXMgdHJhcFxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuX3NldHVwRm9jdXNUcmFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmFja2Ryb3BcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuX3NldHVwQmFja2Ryb3AoKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmhpZGRlbiAmJiB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ292ZXInKSB7XHJcbiAgICAgICAgdGhpcy5fYXBwZW5kQmFja2Ryb3AoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbGxhcHNlXHJcblxyXG4gICAgdGhpcy5fc2V0dXBDb2xsYXBzZSgpO1xyXG5cclxuICAgIC8vIFNsaW1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnNsaW0pIHtcclxuICAgICAgdGhpcy5fc2V0dXBTbGltKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxyXG5cclxuICAgIHRoaXMuX3NldHVwSW5pdGlhbFN0eWxpbmcoKTtcclxuXHJcbiAgICAvLyBQZXJmZWN0IFNjcm9sbGJhclxyXG5cclxuICAgIHRoaXMuX3NldHVwU2Nyb2xsaW5nKCk7XHJcblxyXG4gICAgLy8gQ29udGVudFxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGVudCkge1xyXG4gICAgICB0aGlzLl9zZXR1cENvbnRlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3RpdmUgbGlua1xyXG5cclxuICAgIHRoaXMuX3NldHVwQWN0aXZlU3RhdGUoKTtcclxuXHJcbiAgICAvLyBSaXBwbGVcclxuXHJcbiAgICB0aGlzLl9zZXR1cFJpcHBsZUVmZmVjdCgpO1xyXG5cclxuICAgIC8vIFNob3duIG9uIGluaXRcclxuXHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5oaWRkZW4pIHtcclxuICAgICAgdGhpcy5fdXBkYXRlT2Zmc2V0cyh0cnVlLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXR1cEFjdGl2ZVN0YXRlKCkge1xyXG4gICAgdGhpcy5fc2V0QWN0aXZlRWxlbWVudHMoKTtcclxuXHJcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGxpbmssICdjbGljaycsICgpID0+IHRoaXMuX3NldEFjdGl2ZUVsZW1lbnRzKGxpbmspKTtcclxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGxpbmssICdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAgICAgdGhpcy5fc2V0QWN0aXZlRWxlbWVudHMobGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csICdoYXNoY2hhbmdlJywgdGhpcy5oYXNoSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBfc2V0dXBDb2xsYXBzZSgpIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5mb3JFYWNoKChtZW51LCBtZW51SW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQ09MTEFQU0UsIG1lbnUpO1xyXG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGxpc3QsIGluZGV4KSA9PlxyXG4gICAgICAgIHRoaXMuX3NldHVwQ29sbGFwc2VMaXN0KHsgbGlzdCwgaW5kZXgsIG1lbnUsIG1lbnVJbmRleCB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2VuZXJhdGVDb2xscGFzZUlEKGluZGV4LCBtZW51SW5kZXgpIHtcclxuICAgIHJldHVybiBgc2lkZW5hdi1jb2xsYXBzZS0ke3RoaXMuX0lEfS0ke21lbnVJbmRleH0tJHtpbmRleH1gO1xyXG4gIH1cclxuXHJcbiAgX3NldHVwQ29sbGFwc2VMaXN0KHsgbGlzdCwgaW5kZXgsIG1lbnUsIG1lbnVJbmRleCB9KSB7XHJcbiAgICBjb25zdCBJRCA9IHRoaXMuX2dlbmVyYXRlQ29sbHBhc2VJRChpbmRleCwgbWVudUluZGV4KTtcclxuXHJcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XHJcbiAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCBJRCk7XHJcblxyXG4gICAgY29uc3QgW3RvZ2dsZXJdID0gU2VsZWN0b3JFbmdpbmUucHJldihsaXN0LCBTRUxFQ1RPUl9MSU5LKTtcclxuXHJcbiAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRvZ2dsZXIsICd0b2dnbGUnLCAnY29sbGFwc2UnKTtcclxuICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKCdocmVmJywgYCMke0lEfWApO1xyXG4gICAgdG9nZ2xlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgaW5zdGFuY2UgPVxyXG4gICAgICBDb2xsYXBzZS5nZXRJbnN0YW5jZShsaXN0KSB8fFxyXG4gICAgICBuZXcgQ29sbGFwc2UobGlzdCwge1xyXG4gICAgICAgIHRvZ2dsZTogZmFsc2UsXHJcbiAgICAgICAgcGFyZW50OiB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uID8gbWVudSA6IGxpc3QsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIEFycm93XHJcblxyXG4gICAgdGhpcy5fYXBwZW5kQXJyb3codG9nZ2xlcik7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzXHJcblxyXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRvZ2dsZXIsICdjbGljaycsIChlKSA9PiB0aGlzLl90b2dnbGVDYXRlZ29yeShlLCBpbnN0YW5jZSwgbGlzdCkpO1xyXG5cclxuICAgIEV2ZW50SGFuZGxlci5vbihsaXN0LCAnc2hvdy5icy5jb2xsYXBzZScsICgpID0+IHRoaXMuX3JvdGF0ZUFycm93KHRvZ2dsZXIsIDE4MCkpO1xyXG5cclxuICAgIEV2ZW50SGFuZGxlci5vbihsaXN0LCAnaGlkZS5icy5jb2xsYXBzZScsICgpID0+IHRoaXMuX3JvdGF0ZUFycm93KHRvZ2dsZXIsIDApKTtcclxuXHJcbiAgICBFdmVudEhhbmRsZXIub24obGlzdCwgJ3Nob3duLmJzLmNvbGxhcHNlJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGUgPT09ICdvdmVyJyAmJiB0aGlzLl9mb2N1c1RyYXApIHtcclxuICAgICAgICB0aGlzLl9mb2N1c1RyYXAudXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIEV2ZW50SGFuZGxlci5vbihsaXN0LCAnaGlkZGVuLmJzLmNvbGxhcHNlJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fdGVtcFNsaW0gJiYgdGhpcy5faXNBbGxDb2xsYXBzZWQoKSkge1xyXG4gICAgICAgIHRoaXMuX3NldFNsaW0odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RlbXBTbGltID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ292ZXInICYmIHRoaXMuX2ZvY3VzVHJhcCkge1xyXG4gICAgICAgIHRoaXMuX2ZvY3VzVHJhcC51cGRhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0dXBDb250ZW50KCkge1xyXG4gICAgdGhpcy5fY29udGVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5vcHRpb25zLmNvbnRlbnQpO1xyXG4gICAgdGhpcy5faW5pdGlhbENvbnRlbnRTdHlsZSA9IHRoaXMuX2NvbnRlbnQubWFwKChlbCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0LFxyXG4gICAgICAgIG1hcmdpbkxlZnQsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQsXHJcbiAgICAgICAgdHJhbnNpdGlvbixcclxuICAgICAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgcmV0dXJuIHsgcGFkZGluZ0xlZnQsIHBhZGRpbmdSaWdodCwgbWFyZ2luTGVmdCwgbWFyZ2luUmlnaHQsIHRyYW5zaXRpb24gfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldHVwRm9jdXNUcmFwKCkge1xyXG4gICAgdGhpcy5fZm9jdXNUcmFwID0gbmV3IEZvY3VzVHJhcCh0aGlzLl9lbGVtZW50LCB7XHJcbiAgICAgIGV2ZW50OiAna2V5ZG93bicsXHJcbiAgICAgIGNvbmRpdGlvbjogKGUpID0+IGUua2V5Q29kZSA9PT0gVEFCLFxyXG4gICAgICBvbmx5VmlzaWJsZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldHVwSW5pdGlhbFN0eWxpbmcoKSB7XHJcbiAgICB0aGlzLl9zZXRDb2xvcigpO1xyXG4gICAgTWFuaXB1bGF0b3Iuc3R5bGUodGhpcy5fZWxlbWVudCwgdGhpcy5zaWRlbmF2U3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgX3NldHVwU2Nyb2xsaW5nKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zY3JvbGxDb250YWluZXIpIHtcclxuICAgICAgY29udGFpbmVyID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0aGlzLm9wdGlvbnMuc2Nyb2xsQ29udGFpbmVyLCB0aGlzLl9lbGVtZW50KTtcclxuXHJcbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gYXJyYXkoY29udGFpbmVyLnBhcmVudE5vZGUuY2hpbGRyZW4pLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb250YWluZXIpO1xyXG5cclxuICAgICAgY29uc3Qgc2libGluZ3NIZWlnaHQgPSBzaWJsaW5ncy5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gYSArIGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgICB9LCAwKTtcclxuXHJcbiAgICAgIE1hbmlwdWxhdG9yLnN0eWxlKGNvbnRhaW5lciwge1xyXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwJSAtICR7c2libGluZ3NIZWlnaHR9cHgpYCxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGVyZmVjdFNjcm9sbGJhciA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGNvbnRhaW5lciwgeyBzdXBwcmVzc1Njcm9sbFg6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0dXBTbGltKCkge1xyXG4gICAgdGhpcy5fc2xpbUNvbGxhcHNlZCA9IHRoaXMub3B0aW9ucy5zbGltQ29sbGFwc2VkO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZVNsaW1EaXNwbGF5KHRoaXMuX3NsaW1Db2xsYXBzZWQpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZXhwYW5kT25Ib3Zlcikge1xyXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NsaW1Db2xsYXBzZWQpIHtcclxuICAgICAgICAgIHRoaXMuX3NldFNsaW0oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zbGltQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZXRTbGltKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2V0dXBSaXBwbGVFZmZlY3QoKSB7XHJcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGV0IHdhdmUgPSBSaXBwbGUuZ2V0SW5zdGFuY2UobGluayk7XHJcblxyXG4gICAgICBpZiAod2F2ZSAmJiB3YXZlLl9vcHRpb25zLmNvbG9yICE9PSB0aGlzLm9wdGlvbnMuY29sb3IpIHtcclxuICAgICAgICB3YXZlLmRpc3Bvc2UoKTtcclxuICAgICAgfSBlbHNlIGlmICh3YXZlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3YXZlID0gbmV3IFJpcHBsZShsaW5rLCB7IHJpcHBsZUNvbG9yOiB0aGlzLm9wdGlvbnMuY29sb3IgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXR1cFRvdWNoKCkge1xyXG4gICAgdGhpcy5fdG91Y2ggPSBuZXcgVG91Y2godGhpcy5fZWxlbWVudCwgJ3N3aXBlJywgeyB0aHJlc2hvbGQ6IDIwIH0pO1xyXG4gICAgdGhpcy5fdG91Y2guaW5pdCgpO1xyXG5cclxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCAnc3dpcGVsZWZ0JywgKGUpID0+IHRoaXMuX2hhbmRsZVN3aXBlKGUsIHRoaXMub3B0aW9ucy5yaWdodCkpO1xyXG5cclxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCAnc3dpcGVyaWdodCcsIChlKSA9PiB0aGlzLl9oYW5kbGVTd2lwZShlLCAhdGhpcy5vcHRpb25zLnJpZ2h0KSk7XHJcbiAgfVxyXG5cclxuICBfc2V0QWN0aXZlKGxpbmssIHJlZmVyZW5jZSkge1xyXG4gICAgLy8gTGlua1xyXG4gICAgTWFuaXB1bGF0b3IuYWRkQ2xhc3MobGluaywgJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmICh0aGlzLl9hY3RpdmVOb2RlKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZU5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9hY3RpdmVOb2RlID0gbGluaztcclxuXHJcbiAgICAvLyBDb2xsYXBzZVxyXG5cclxuICAgIGNvbnN0IFtjb2xsYXBzZV0gPSBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRoaXMuX2FjdGl2ZU5vZGUsIFNFTEVDVE9SX0NPTExBUFNFKTtcclxuXHJcbiAgICBpZiAoIWNvbGxhcHNlKSB7XHJcbiAgICAgIHRoaXMuX3NldEFjdGl2ZUNhdGVnb3J5KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYXRlZ29yeVxyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yeV0gPSBTZWxlY3RvckVuZ2luZS5wcmV2KGNvbGxhcHNlLCBTRUxFQ1RPUl9MSU5LKTtcclxuICAgIHRoaXMuX3NldEFjdGl2ZUNhdGVnb3J5KGNhdGVnb3J5KTtcclxuXHJcbiAgICAvLyBFeHBhbmQgYWN0aXZlIGNvbGxhcHNlXHJcblxyXG4gICAgaWYgKCFyZWZlcmVuY2UgJiYgIXRoaXMuX3NsaW1Db2xsYXBzZWQpIHtcclxuICAgICAgQ29sbGFwc2UuZ2V0SW5zdGFuY2UoY29sbGFwc2UpLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRBY3RpdmVDYXRlZ29yeShlbCkge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQ09MTEFQU0UsIG1lbnUpO1xyXG5cclxuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChjb2xsYXBzZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtjb2xsYXBzZVRvZ2dsZXJdID0gU2VsZWN0b3JFbmdpbmUucHJldihjb2xsYXBzZSwgU0VMRUNUT1JfTElOSyk7XHJcblxyXG4gICAgICAgIGlmIChjb2xsYXBzZVRvZ2dsZXIgIT09IGVsKSB7XHJcbiAgICAgICAgICBjb2xsYXBzZVRvZ2dsZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIE1hbmlwdWxhdG9yLmFkZENsYXNzKGNvbGxhcHNlVG9nZ2xlciwgJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXRBY3RpdmVFbGVtZW50cyhyZWZlcmVuY2UpIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5mb3JFYWNoKChtZW51KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpbmtzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9MSU5LLCBtZW51KTtcclxuICAgICAgbGlua3NcclxuICAgICAgICAuZmlsdGVyKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUubmV4dChsaW5rLCBTRUxFQ1RPUl9DT0xMQVBTRSkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLl9pc0FjdGl2ZShsaW5rLCByZWZlcmVuY2UpICYmIGxpbmsgIT09IHRoaXMuX2FjdGl2ZU5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0QWN0aXZlKGxpbmssIHJlZmVyZW5jZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXRDb2xvcigpIHtcclxuICAgIGNvbnN0IGNvbG9ycyA9IFtcclxuICAgICAgJ3ByaW1hcnknLFxyXG4gICAgICAnc2Vjb25kYXJ5JyxcclxuICAgICAgJ3N1Y2Nlc3MnLFxyXG4gICAgICAnaW5mbycsXHJcbiAgICAgICd3YXJuaW5nJyxcclxuICAgICAgJ2RhbmdlcicsXHJcbiAgICAgICdsaWdodCcsXHJcbiAgICAgICdkYXJrJyxcclxuICAgIF07XHJcbiAgICBjb25zdCB7IGNvbG9yOiBvcHRpb25Db2xvciB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgY29uc3QgY29sb3IgPSBjb2xvcnMuaW5jbHVkZXMob3B0aW9uQ29sb3IpID8gb3B0aW9uQ29sb3IgOiAncHJpbWFyeSc7XHJcblxyXG4gICAgY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgc2lkZW5hdi0ke2NvbG9yfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgTWFuaXB1bGF0b3IuYWRkQ2xhc3ModGhpcy5fZWxlbWVudCwgYHNpZGVuYXYtJHtjb2xvcn1gKTtcclxuICB9XHJcblxyXG4gIF9zZXRDb250ZW50T2Zmc2V0cyhzaG93LCBvZmZzZXRzLCBpbml0aWFsKSB7XHJcbiAgICB0aGlzLl9jb250ZW50LmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLl9nZXRPZmZzZXRWYWx1ZShzaG93LCB7IGluZGV4OiBpLCBwcm9wZXJ0eTogJ3BhZGRpbmcnLCBvZmZzZXRzIH0pO1xyXG4gICAgICBjb25zdCBtYXJnaW4gPSB0aGlzLl9nZXRPZmZzZXRWYWx1ZShzaG93LCB7IGluZGV4OiBpLCBwcm9wZXJ0eTogJ21hcmdpbicsIG9mZnNldHMgfSk7XHJcblxyXG4gICAgICBjb25zdCBzdHlsZSA9IHt9O1xyXG5cclxuICAgICAgaWYgKCFpbml0aWFsKSB7XHJcbiAgICAgICAgc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHt0aGlzLnRyYW5zaXRpb25EdXJhdGlvbn0gbGluZWFyYDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3R5bGVbb2Zmc2V0cy5wYWRkaW5nLnByb3BlcnR5XSA9IGAke3BhZGRpbmd9cHhgO1xyXG5cclxuICAgICAgc3R5bGVbb2Zmc2V0cy5tYXJnaW4ucHJvcGVydHldID0gYCR7bWFyZ2lufXB4YDtcclxuXHJcbiAgICAgIE1hbmlwdWxhdG9yLnN0eWxlKGVsLCBzdHlsZSk7XHJcblxyXG4gICAgICBpZiAoIXNob3cpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpbml0aWFsKSB7XHJcbiAgICAgICAgTWFuaXB1bGF0b3Iuc3R5bGUoZWwsIHsgdHJhbnNpdGlvbjogdGhpcy5faW5pdGlhbENvbnRlbnRTdHlsZVtpXS50cmFuc2l0aW9uIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsLCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICBNYW5pcHVsYXRvci5zdHlsZShlbCwgeyB0cmFuc2l0aW9uOiB0aGlzLl9pbml0aWFsQ29udGVudFN0eWxlW2ldLnRyYW5zaXRpb24gfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0TW9kZShtb2RlKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm1vZGUgPT09IG1vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29wdGlvbnMubW9kZSA9IG1vZGU7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlKHRoaXMuaXNWaXNpYmxlKTtcclxuICB9XHJcblxyXG4gIF9zZXRTbGltKHZhbHVlKSB7XHJcbiAgICBjb25zdCBldmVudHMgPSB2YWx1ZSA/IFsnY29sbGFwc2UnLCAnY29sbGFwc2VkJ10gOiBbJ2V4cGFuZCcsICdleHBhbmRlZCddO1xyXG4gICAgdGhpcy5fdHJpZ2dlckV2ZW50cyguLi5ldmVudHMpO1xyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jb2xsYXBzZUl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2xpbUNvbGxhcHNlZCA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMuX3RvZ2dsZVNsaW1EaXNwbGF5KHZhbHVlKTtcclxuXHJcbiAgICBNYW5pcHVsYXRvci5zdHlsZSh0aGlzLl9lbGVtZW50LCB7IHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCB9KTtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVPZmZzZXRzKHRoaXMuaXNWaXNpYmxlKTtcclxuICB9XHJcblxyXG4gIF9zZXRUYWJpbmRleCh2YWx1ZSkge1xyXG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIGxpbmsudGFiSW5kZXggPSB2YWx1ZSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldFZpc2liaWxpdHkoc2hvdykge1xyXG4gICAgY29uc3QgZXZlbnRzID0gc2hvdyA/IFsnc2hvdycsICdzaG93biddIDogWydoaWRlJywgJ2hpZGRlbiddO1xyXG5cclxuICAgIHRoaXMuX3RyaWdnZXJFdmVudHMoLi4uZXZlbnRzKTtcclxuICB9XHJcblxyXG4gIF9yb3RhdGVBcnJvdyh0b2dnbGVyLCBhbmdsZSkge1xyXG4gICAgY29uc3QgW2Fycm93XSA9IFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKHRvZ2dsZXIsIGAuJHtBUlJPV19DTEFTU31gKTtcclxuICAgIGlmICghYXJyb3cpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgTWFuaXB1bGF0b3Iuc3R5bGUoYXJyb3csIHtcclxuICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7YW5nbGV9ZGVnKWAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIF90b2dnbGVCYWNrZHJvcCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMub3B0aW9ucy5tb2RlID09PSAnb3ZlcicpIHtcclxuICAgICAgdGhpcy5fYXBwZW5kQmFja2Ryb3AoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1hbmlwdWxhdG9yLnN0eWxlKHRoaXMuX2JhY2tkcm9wLCB7IG9wYWNpdHk6IDAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVCYWNrZHJvcCgpO1xyXG4gICAgICB9LCB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9yZW1vdmVCYWNrZHJvcCgpIHtcclxuICAgIGlmICh0aGlzLl9iYWNrZHJvcC5wYXJlbnROb2RlID09PSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLl9iYWNrZHJvcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwZW5kQmFja2Ryb3AoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9iYWNrZHJvcCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBNYW5pcHVsYXRvci5zdHlsZSh0aGlzLl9iYWNrZHJvcCwgeyBvcGFjaXR5OiAxIH0pLCAwKTtcclxuICB9XHJcblxyXG4gIF90b2dnbGVDYXRlZ29yeShlLCBpbnN0YW5jZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGluc3RhbmNlLnRvZ2dsZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLl9zbGltQ29sbGFwc2VkICYmIHRoaXMub3B0aW9ucy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMuX3RlbXBTbGltID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuX3NldFNsaW0oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZVNsaW1EaXNwbGF5KHNsaW0pIHtcclxuICAgIGNvbnN0IHNsaW1Db2xsYXBzZWRFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfU0hPV19TTElNLCB0aGlzLl9lbGVtZW50KTtcclxuICAgIGNvbnN0IGZ1bGxXaWR0aEVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9ISURFX1NMSU0sIHRoaXMuX2VsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICBzbGltQ29sbGFwc2VkRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBNYW5pcHVsYXRvci5zdHlsZShlbCwgeyBkaXNwbGF5OiB0aGlzLl9zbGltQ29sbGFwc2VkID8gJ3Vuc2V0JyA6ICdub25lJyB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdWxsV2lkdGhFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIE1hbmlwdWxhdG9yLnN0eWxlKGVsLCB7IGRpc3BsYXk6IHRoaXMuX3NsaW1Db2xsYXBzZWQgPyAnbm9uZScgOiAndW5zZXQnIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHNsaW0pIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0b2dnbGVFbGVtZW50cyh0cnVlKSwgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2dnbGVFbGVtZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgX3RyaWdnZXJFdmVudHMoc3RhcnRFdmVudCwgY29tcGxldGVFdmVudCkge1xyXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgYCR7c3RhcnRFdmVudH0ubWRiLnNpZGVuYXZgKTtcclxuXHJcbiAgICBpZiAoY29tcGxldGVFdmVudCkge1xyXG4gICAgICBhd2FpdCBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBgJHtjb21wbGV0ZUV2ZW50fS5tZGIuc2lkZW5hdmApO1xyXG4gICAgICB9LCB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uICsgNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlKHNob3cpIHtcclxuICAgIGlmICh0aGlzLnRvZ2dsZXIpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlVG9nZ2xlckFyaWEoc2hvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlRGlzcGxheShzaG93KTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tkcm9wKSB7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZUJhY2tkcm9wKHNob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZU9mZnNldHMoc2hvdyk7XHJcblxyXG4gICAgaWYgKHNob3cgJiYgdGhpcy5vcHRpb25zLmNsb3NlT25Fc2MgJiYgdGhpcy5vcHRpb25zLm1vZGUgIT09ICdzaWRlJykge1xyXG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCAna2V5ZG93bicsIHRoaXMuZXNjSGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5fdXBkYXRlRm9jdXMoc2hvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlRGlzcGxheSh2YWx1ZSkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB2YWx1ZSA/IDAgOiB0aGlzLnRyYW5zbGF0aW9uO1xyXG4gICAgTWFuaXB1bGF0b3Iuc3R5bGUodGhpcy5fZWxlbWVudCwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRpb259JSlgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUZvY3VzKHNob3cpIHtcclxuICAgIHRoaXMuX3NldFRhYmluZGV4KHNob3cpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ292ZXInICYmIHRoaXMub3B0aW9ucy5mb2N1c1RyYXApIHtcclxuICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICB0aGlzLl9mb2N1c1RyYXAudHJhcCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fZm9jdXNUcmFwLmRpc2FibGUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXIpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZXIuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2ZvY3VzVHJhcC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlT2Zmc2V0cyhzaG93LCBpbml0aWFsID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IFtwYWRkaW5nUG9zaXRpb24sIG1hcmdpblBvc2l0aW9uXSA9IHRoaXMub3B0aW9ucy5yaWdodFxyXG4gICAgICA/IFsncmlnaHQnLCAnbGVmdCddXHJcbiAgICAgIDogWydsZWZ0JywgJ3JpZ2h0J107XHJcblxyXG4gICAgY29uc3QgcGFkZGluZyA9IHtcclxuICAgICAgcHJvcGVydHk6IHRoaXMuX2dldFByb3BlcnR5KCdwYWRkaW5nJywgcGFkZGluZ1Bvc2l0aW9uKSxcclxuICAgICAgdmFsdWU6IHRoaXMub3B0aW9ucy5tb2RlID09PSAnb3ZlcicgPyAwIDogdGhpcy53aWR0aCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWFyZ2luID0ge1xyXG4gICAgICBwcm9wZXJ0eTogdGhpcy5fZ2V0UHJvcGVydHkoJ21hcmdpbicsIG1hcmdpblBvc2l0aW9uKSxcclxuICAgICAgdmFsdWU6IHRoaXMub3B0aW9ucy5tb2RlID09PSAncHVzaCcgPyAtMSAqIHRoaXMud2lkdGggOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCAndXBkYXRlLm1kYi5zaWRlbmF2JywgeyBtYXJnaW4sIHBhZGRpbmcgfSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9jb250ZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZXRDb250ZW50T2Zmc2V0cyhzaG93LCB7IHBhZGRpbmcsIG1hcmdpbiB9LCBpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVUb2dnbGVyQXJpYSh2YWx1ZSkge1xyXG4gICAgdGhpcy50b2dnbGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIFN0YXRpY1xyXG5cclxuICBzdGF0aWMgdG9nZ2xlU2lkZW5hdigpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCB0b2dnbGVyID0gU2VsZWN0b3JFbmdpbmUuY2xvc2VzdChlLnRhcmdldCwgU0VMRUNUT1JfVE9HR0xFKTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRvZ2dsZXIpLnRhcmdldDtcclxuXHJcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoZWxlbWVudFNlbGVjdG9yKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBTaWRlbmF2LmdldEluc3RhbmNlKGVsZW1lbnQpIHx8IG5ldyBTaWRlbmF2KGVsZW1lbnQpO1xyXG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXREYXRhKHRoaXMsIERBVEFfS0VZKTtcclxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcclxuXHJcbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZS8udGVzdChjb25maWcpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICBkYXRhID0gbmV3IFNpZGVuYXYodGhpcywgX2NvbmZpZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGFbY29uZmlnXShvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIERhdGEuZ2V0RGF0YShlbGVtZW50LCBEQVRBX0tFWSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uIC0gYXV0byBpbml0aWFsaXphdGlvblxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsICdjbGljaycsIFNFTEVDVE9SX1RPR0dMRSwgU2lkZW5hdi50b2dnbGVTaWRlbmF2KCkpO1xyXG5cclxuU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9TSURFTkFWKS5mb3JFYWNoKChzaWRlbmF2KSA9PiB7XHJcbiAgbGV0IGluc3RhbmNlID0gU2lkZW5hdi5nZXRJbnN0YW5jZShzaWRlbmF2KTtcclxuICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICBpbnN0YW5jZSA9IG5ldyBTaWRlbmF2KHNpZGVuYXYpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGluc3RhbmNlO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogalF1ZXJ5XHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBhZGQgLnNpZGVuYXYgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcclxuICovXHJcblxyXG5jb25zdCAkID0gZ2V0alF1ZXJ5KCk7XHJcblxyXG5pZiAoJCkge1xyXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XHJcbiAgJC5mbltOQU1FXSA9IFNpZGVuYXYualF1ZXJ5SW50ZXJmYWNlO1xyXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTaWRlbmF2O1xyXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcclxuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XHJcbiAgICByZXR1cm4gU2lkZW5hdi5qUXVlcnlJbnRlcmZhY2U7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZW5hdjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==