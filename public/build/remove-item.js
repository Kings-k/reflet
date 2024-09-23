(self["webpackChunk"] = self["webpackChunk"] || []).push([["remove-item"],{

/***/ "./assets/remove-item.js":
/*!*******************************!*\
  !*** ./assets/remove-item.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

document.querySelectorAll('tbody > tr > td:last-child > a').forEach(function (btn) {
  var path = btn.dataset["delete"],
      entityName = btn.parentNode.parentNode.querySelector('td:nth-of-type(1)').textContent.trim();
  btn.addEventListener('click', function () {
    if (confirm("Voulez-vous vraiment supprimer ".concat(entityName, " ?"))) {
      fetch("".concat(baseUrl).concat(path, "/delete"), {
        method: 'DELETE'
      }).then(function (resp) {
        if (resp.ok) {
          resp.text().then(function (data) {
            showAlert(JSON.parse(data), 'success');
          });
        }
      });
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js","vendors-node_modules_core-js_internals_string-trim_js-node_modules_core-js_modules_es_array_f-3cc149"], () => (__webpack_exec__("./assets/remove-item.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVtb3ZlLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJwYXRoIiwiZGF0YXNldCIsImVudGl0eU5hbWUiLCJwYXJlbnROb2RlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwidHJpbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25maXJtIiwiZmV0Y2giLCJiYXNlVXJsIiwibWV0aG9kIiwidGhlbiIsInJlc3AiLCJvayIsInRleHQiLCJkYXRhIiwic2hvd0FsZXJ0IiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdDQUExQixFQUE0REMsT0FBNUQsQ0FBb0UsVUFBQUMsR0FBRyxFQUFJO0FBQ3ZFLE1BQU1DLElBQUksR0FBR0QsR0FBRyxDQUFDRSxPQUFKLFVBQWI7QUFBQSxNQUFpQ0MsVUFBVSxHQUFHSCxHQUFHLENBQUNJLFVBQUosQ0FBZUEsVUFBZixDQUEwQkMsYUFBMUIsQ0FBd0MsbUJBQXhDLEVBQTZEQyxXQUE3RCxDQUF5RUMsSUFBekUsRUFBOUM7QUFDQVAsS0FBRyxDQUFDUSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBQ2hDLFFBQUlDLE9BQU8sMENBQW1DTixVQUFuQyxRQUFYLEVBQStEO0FBQzNETyxXQUFLLFdBQUlDLE9BQUosU0FBY1YsSUFBZCxjQUE2QjtBQUM5QlcsY0FBTSxFQUFFO0FBRHNCLE9BQTdCLENBQUwsQ0FHQ0MsSUFIRCxDQUdNLFVBQUFDLElBQUksRUFBSTtBQUNWLFlBQUlBLElBQUksQ0FBQ0MsRUFBVCxFQUFhO0FBQ1RELGNBQUksQ0FBQ0UsSUFBTCxHQUFZSCxJQUFaLENBQWlCLFVBQUFJLElBQUksRUFBSTtBQUNyQkMscUJBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQVgsQ0FBRCxFQUFtQixTQUFuQixDQUFUO0FBQ0gsV0FGRDtBQUdIO0FBQ0osT0FURDtBQVVIO0FBQ0osR0FiRDtBQWNILENBaEJELEU7Ozs7Ozs7Ozs7QUNBQSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDWGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksMkdBQXdDO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicmVtb3ZlLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSA+IHRyID4gdGQ6bGFzdC1jaGlsZCA+IGEnKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICBjb25zdCBwYXRoID0gYnRuLmRhdGFzZXQuZGVsZXRlLCBlbnRpdHlOYW1lID0gYnRuLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCd0ZDpudGgtb2YtdHlwZSgxKScpLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybShgVm91bGV6LXZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyICR7ZW50aXR5TmFtZX0gP2ApKSB7XHJcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9JHtwYXRofS9kZWxldGVgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwLnRleHQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoSlNPTi5wYXJzZShkYXRhKSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=