(self["webpackChunk"] = self["webpackChunk"] || []).push([["layout"],{

/***/ "./assets/layout.js":
/*!**************************!*\
  !*** ./assets/layout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdb_src_js_pro_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdb/src/js/pro/sidenav */ "./assets/mdb/src/js/pro/sidenav.js");





var sidenav = document.getElementById("sidenav-1");
var instance = mdb.Sidenav.getInstance(sidenav);
var innerWidth = null;

var setMode = function setMode(e) {
  // Check necessary for Android devices
  if (window.innerWidth === innerWidth) {
    return;
  }

  innerWidth = window.innerWidth;

  if (window.innerWidth < 1400) {
    instance.changeMode("over");
    instance.hide();
  } else {
    instance.changeMode("side");
    instance.show();
  }
};

setMode(); // Event listeners

window.addEventListener("resize", setMode);

(function () {
  'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll('form'); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js","vendors-node_modules_core-js_internals_string-trim_js-node_modules_core-js_modules_es_array_f-3cc149","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-c35c4f","vendors-node_modules_core-js_modules_es_array_join_js-node_modules_core-js_modules_es_functio-59b264","vendors-node_modules_jquery_dist_jquery_js","assets_mdb_src_js_pro_sidenav_js"], () => (__webpack_exec__("./assets/layout.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbInNpZGVuYXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zdGFuY2UiLCJtZGIiLCJTaWRlbmF2IiwiZ2V0SW5zdGFuY2UiLCJpbm5lcldpZHRoIiwic2V0TW9kZSIsImUiLCJ3aW5kb3ciLCJjaGFuZ2VNb2RlIiwiaGlkZSIsInNob3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJmb3JFYWNoIiwiZm9ybSIsImV2ZW50IiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHQyxHQUFHLENBQUNDLE9BQUosQ0FBWUMsV0FBWixDQUF3Qk4sT0FBeEIsQ0FBakI7QUFFQSxJQUFJTyxVQUFVLEdBQUcsSUFBakI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3JCO0FBQ0EsTUFBSUMsTUFBTSxDQUFDSCxVQUFQLEtBQXNCQSxVQUExQixFQUFzQztBQUNwQztBQUNEOztBQUVEQSxZQUFVLEdBQUdHLE1BQU0sQ0FBQ0gsVUFBcEI7O0FBRUEsTUFBSUcsTUFBTSxDQUFDSCxVQUFQLEdBQW9CLElBQXhCLEVBQThCO0FBQzVCSixZQUFRLENBQUNRLFVBQVQsQ0FBb0IsTUFBcEI7QUFDQVIsWUFBUSxDQUFDUyxJQUFUO0FBQ0QsR0FIRCxNQUdPO0FBQ0xULFlBQVEsQ0FBQ1EsVUFBVCxDQUFvQixNQUFwQjtBQUNBUixZQUFRLENBQUNVLElBQVQ7QUFDRDtBQUNGLENBZkQ7O0FBaUJNTCxPQUFPLEcsQ0FFUDs7QUFDTkUsTUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sT0FBbEM7O0FBRUEsQ0FBQyxZQUFNO0FBQ0gsZUFERyxDQUVIOztBQUNBLE1BQU1PLEtBQUssR0FBR2QsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixNQUExQixDQUFkLENBSEcsQ0FJSDs7QUFDQUMsT0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJMLEtBQTNCLEVBQWtDTSxPQUFsQyxDQUEwQyxVQUFBQyxJQUFJLEVBQUk7QUFDOUNBLFFBQUksQ0FBQ1IsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBQVMsS0FBSyxFQUFJO0FBQ3JDLFVBQUksQ0FBQ0QsSUFBSSxDQUFDRSxhQUFMLEVBQUwsRUFBMkI7QUFDdkJELGFBQUssQ0FBQ0UsY0FBTjtBQUNBRixhQUFLLENBQUNHLGVBQU47QUFDSDs7QUFDREosVUFBSSxDQUFDSyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsZUFBbkI7QUFDSCxLQU5ELEVBTUcsS0FOSDtBQU9ILEdBUkQ7QUFTSCxDQWRELEkiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFNpZGVuYXYgZnJvbSAnLi9tZGIvc3JjL2pzL3Byby9zaWRlbmF2JztcclxuXHJcbmNvbnN0IHNpZGVuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVuYXYtMVwiKTtcclxuY29uc3QgaW5zdGFuY2UgPSBtZGIuU2lkZW5hdi5nZXRJbnN0YW5jZShzaWRlbmF2KTtcclxuXHJcbmxldCBpbm5lcldpZHRoID0gbnVsbDtcclxuXHJcbmNvbnN0IHNldE1vZGUgPSAoZSkgPT4ge1xyXG4gIC8vIENoZWNrIG5lY2Vzc2FyeSBmb3IgQW5kcm9pZCBkZXZpY2VzXHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID09PSBpbm5lcldpZHRoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpbm5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDE0MDApIHtcclxuICAgIGluc3RhbmNlLmNoYW5nZU1vZGUoXCJvdmVyXCIpO1xyXG4gICAgaW5zdGFuY2UuaGlkZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnN0YW5jZS5jaGFuZ2VNb2RlKFwic2lkZVwiKTtcclxuICAgIGluc3RhbmNlLnNob3coKTtcclxuICB9XHJcbn07XHJcblxyXG4gICAgICBzZXRNb2RlKCk7XHJcblxyXG4gICAgICAvLyBFdmVudCBsaXN0ZW5lcnNcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgc2V0TW9kZSk7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgLy8gRmV0Y2ggYWxsIHRoZSBmb3JtcyB3ZSB3YW50IHRvIGFwcGx5IGN1c3RvbSBCb290c3RyYXAgdmFsaWRhdGlvbiBzdHlsZXMgdG9cclxuICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xyXG4gICAgLy8gTG9vcCBvdmVyIHRoZW0gYW5kIHByZXZlbnQgc3VibWlzc2lvblxyXG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9ybXMpLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==