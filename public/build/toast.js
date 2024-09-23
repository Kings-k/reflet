(self["webpackChunk"] = self["webpackChunk"] || []).push([["toast"],{

/***/ "./assets/toast.js":
/*!*************************!*\
  !*** ./assets/toast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

var alertElt = document.querySelector('.alert');

if (alertElt !== null) {
  setTimeout(function () {
    alertElt.parentNode.innerHTML = '';
  }, 5000);
}

function showAlert(message, type) {
  var reload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var jsAlertElt = document.querySelector('#jsAlert');
  window.scrollTo(0, 0);

  if (!!jsAlertElt) {
    var icon;

    switch (type) {
      case 'success':
        icon = 'check-circle-fill';
        break;

      case 'warning':
        icon = 'exclamation-triangle-fill';
        break;

      case 'danger':
        icon = 'exclamation-triangle-fill';
        break;

      case 'info':
        icon = 'info-fill';
        break;
    }

    jsAlertElt.removeAttribute('hidden');
    jsAlertElt.innerHTML = "\n            <div class=\"alert alert-".concat(type, " alert-dismissible fade show d-flex align-items-center\" style=\"margin: 0;\" role=\"alert\">\n                <svg class=\"bi flex-shrink-0 me-2\" width=\"24\" height=\"24\" role=\"img\" aria-label=\"").concat(type.substr(0, 1).toUpperCase() + type.substr(1), ":\"><use xlink:href=\"#").concat(icon, "\"/></svg>\n                <div class=\"ml-3 mr-5\">").concat(message, "</div>\n                <button type=\"button\" class=\"btn-close\" data-dismiss=\"alert\" aria-label=\"Close\"></button>\n            </div>\n        ");
    jsAlertElt.style.boxShadow = '0 5px 5px 2px #ccc';
    jsAlertElt.style.borderRadius = '5px';
    setTimeout(function () {
      if (reload) {
        window.location.reload();
      } else {
        jsAlertElt.setAttribute('hidden', 'hidden');
        jsAlertElt.innerHTML = '';
        jsAlertElt.style.boxShadow = '0 0 0 0 #fff';
      }
    }, 5000);
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js"], () => (__webpack_exec__("./assets/toast.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbImFsZXJ0RWx0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsInBhcmVudE5vZGUiLCJpbm5lckhUTUwiLCJzaG93QWxlcnQiLCJtZXNzYWdlIiwidHlwZSIsInJlbG9hZCIsImpzQWxlcnRFbHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImljb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInN0eWxlIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwibG9jYXRpb24iLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWpCOztBQUVBLElBQUlGLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQkcsWUFBVSxDQUFDLFlBQU07QUFDYkgsWUFBUSxDQUFDSSxVQUFULENBQW9CQyxTQUFwQixHQUFnQyxFQUFoQztBQUNILEdBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDs7QUFFRCxTQUFTQyxTQUFULENBQW1CQyxPQUFuQixFQUE0QkMsSUFBNUIsRUFBaUQ7QUFBQSxNQUFmQyxNQUFlLHVFQUFOLElBQU07QUFDN0MsTUFBTUMsVUFBVSxHQUFHVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBbkI7QUFFQVMsUUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5COztBQUVBLE1BQUksQ0FBQyxDQUFDRixVQUFOLEVBQWtCO0FBQ2QsUUFBSUcsSUFBSjs7QUFFQSxZQUFRTCxJQUFSO0FBQ0ksV0FBSyxTQUFMO0FBQ0lLLFlBQUksR0FBRyxtQkFBUDtBQUNBOztBQUVKLFdBQUssU0FBTDtBQUNJQSxZQUFJLEdBQUcsMkJBQVA7QUFDQTs7QUFFSixXQUFLLFFBQUw7QUFDSUEsWUFBSSxHQUFHLDJCQUFQO0FBQ0E7O0FBRUosV0FBSyxNQUFMO0FBQ0lBLFlBQUksR0FBRyxXQUFQO0FBQ0E7QUFmUjs7QUFrQkFILGNBQVUsQ0FBQ0ksZUFBWCxDQUEyQixRQUEzQjtBQUNBSixjQUFVLENBQUNMLFNBQVgsb0RBQzhCRyxJQUQ5QixzTkFFMkZBLElBQUksQ0FBQ08sTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCQyxXQUFsQixLQUFrQ1IsSUFBSSxDQUFDTyxNQUFMLENBQVksQ0FBWixDQUY3SCxvQ0FFbUtGLElBRm5LLGtFQUdpQ04sT0FIakM7QUFPQUcsY0FBVSxDQUFDTyxLQUFYLENBQWlCQyxTQUFqQixHQUE2QixvQkFBN0I7QUFDQVIsY0FBVSxDQUFDTyxLQUFYLENBQWlCRSxZQUFqQixHQUFnQyxLQUFoQztBQUNBaEIsY0FBVSxDQUFDLFlBQU07QUFDYixVQUFJTSxNQUFKLEVBQVk7QUFDUkUsY0FBTSxDQUFDUyxRQUFQLENBQWdCWCxNQUFoQjtBQUNILE9BRkQsTUFFTztBQUNIQyxrQkFBVSxDQUFDVyxZQUFYLENBQXdCLFFBQXhCLEVBQWtDLFFBQWxDO0FBQ0FYLGtCQUFVLENBQUNMLFNBQVgsR0FBdUIsRUFBdkI7QUFDQUssa0JBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsY0FBN0I7QUFDSDtBQUNKLEtBUlMsRUFRUCxJQVJPLENBQVY7QUFTSDtBQUNKLEM7Ozs7Ozs7Ozs7QUN0REQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcseUNBQXlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGVydEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpO1xyXG5cclxuaWYgKGFsZXJ0RWx0ICE9PSBudWxsKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbGVydEVsdC5wYXJlbnROb2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfSwgNTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dBbGVydChtZXNzYWdlLCB0eXBlLCByZWxvYWQgPSB0cnVlKSB7XHJcbiAgICBjb25zdCBqc0FsZXJ0RWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzQWxlcnQnKTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG4gICAgaWYgKCEhanNBbGVydEVsdCkge1xyXG4gICAgICAgIGxldCBpY29uO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICAgICAgICBpY29uID0gJ2NoZWNrLWNpcmNsZS1maWxsJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgICAgICAgICBpY29uID0gJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLWZpbGwnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkYW5nZXInOlxyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICdleGNsYW1hdGlvbi10cmlhbmdsZS1maWxsJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgICAgICAgICBpY29uID0gJ2luZm8tZmlsbCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpzQWxlcnRFbHQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuICAgICAgICBqc0FsZXJ0RWx0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cIm1hcmdpbjogMDtcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJiaSBmbGV4LXNocmluay0wIG1lLTJcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIiR7dHlwZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIHR5cGUuc3Vic3RyKDEpfTpcIj48dXNlIHhsaW5rOmhyZWY9XCIjJHtpY29ufVwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0zIG1yLTVcIj4ke21lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAganNBbGVydEVsdC5zdHlsZS5ib3hTaGFkb3cgPSAnMCA1cHggNXB4IDJweCAjY2NjJztcclxuICAgICAgICBqc0FsZXJ0RWx0LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqc0FsZXJ0RWx0LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAganNBbGVydEVsdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIGpzQWxlcnRFbHQuc3R5bGUuYm94U2hhZG93ID0gJzAgMCAwIDAgI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBzcGVjIHJlcXVpcmVtZW50XG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9