(self["webpackChunk"] = self["webpackChunk"] || []).push([["sale"],{

/***/ "./assets/sale.js":
/*!************************!*\
  !*** ./assets/sale.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

var total = 0,
    workforce = 0,
    discount = 0,
    net = 0,
    client = {
  id: null
},
    licenceId = 0,
    currentService,
    currentInvoice = {
  id: null,
  client: {
    id: null
  },
  articles: {},
  services: {},
  total: 0,
  workforce: 0,
  discount: 0
},
    selectedDebts = [],
    amountPaid = 0,
    amountDueSold,
    clotureElts = [],
    licenses = [],
    expertises = [];

var clientAutocomplete = document.querySelector('#client-autocomplete'),
    serviceAutocomplete = document.querySelector('#service-autocomplete'),
    grid = document.querySelector('#grid'),
    gridContent = document.querySelector('#gridContent'),
    newCustomerForm = document.querySelector('#newCustomerForm'),
    depenseModal = new mdb.Modal(document.getElementById('newDepense'), {}),
    printReceiptModal = new mdb.Modal(document.getElementById('confirm-print-receipt'), {}),
    newControleModal = new mdb.Modal(document.querySelector('#new-ct-modal'), {}),
    newExpertiseModal = new mdb.Modal(document.querySelector('#new-expertise-modal'), {}),
    fetchAllInterval = function fetchAllInterval() {
  return setInterval(fetchAll, 10000);
},
    clientsFilter = function clientsFilter(value) {
  return clients.filter(function (client) {
    return client.nomClient.toLowerCase().includes(value.toLowerCase());
  });
},
    servicesFilter = function servicesFilter(value) {
  return services.filter(function (service) {
    return service.name.toLowerCase().includes(value.toLowerCase());
  });
},
    disableCustomerDetailsButtons = function disableCustomerDetailsButtons(detailsBtn, purchasesBtn) {
  document.querySelector('#' + detailsBtn).disabled = 'disabled';
  document.querySelector('#' + purchasesBtn).disabled = 'disabled';
},
    enableCustomerDetailsButtons = function enableCustomerDetailsButtons(detailsBtn, purchasesBtn) {
  document.querySelector('#' + detailsBtn).removeAttribute('disabled');
  document.querySelector('#' + purchasesBtn).removeAttribute('disabled');
},
    showLatestVehicles = function showLatestVehicles(vehiclesList) {
  var vehiclesListElt = document.querySelector('#vehicles-modal .modal-content > .modal-body > .tab-content > .tab-pane:first-child > div:last-child > .list-group');
  vehiclesList = vehiclesList.slice(0, 10);
  vehiclesListElt.innerHTML = '';

  for (var idx = 0; idx < 10; idx++) {
    if (typeof vehiclesList[idx] !== 'undefined') {
      vehiclesListElt.innerHTML += "\n                    <a class=\"list-group-item list-group-item-action d-flex justify-content-between\" href=\"#\">\n                        <span>".concat(vehiclesList[idx]['genre'], " (").concat(vehiclesList[idx]['numeroImmatriculation'], ")</span>\n                    </a>\n                ");
    }
  }
},
    populateLicensesTable = function populateLicensesTable(data) {
  var datatable = document.querySelector('#ct-pill-content > .card > .datatable');
  var rows = [];
  licenses = data;

  if (licenses.length > 0) {
    for (var idx in licenses) {
      rows.push([Number.parseInt(idx, 10) + 1, licenses[idx].numeroPv, "".concat(licenses[idx].numeroImmatriculation, " (").concat(licenses[idx].genre, ")"), licenses[idx].nomClient, new Date(licenses[idx].createdAt.date).toLocaleDateString('fr-Fr', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }), new Date(licenses[idx].prochainevisite.date).toLocaleDateString('fr-Fr', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }), "<i class=\"fas fa-eye\" style=\"cursor: pointer\"></i>"]);
    }
  } // datatable.removeAttribute('hidden');


  datatable.innerHTML = '';
  datatable.dataset.maxHeight = 400;
  var ctDatatableInstance = new mdb.Datatable(datatable, {
    columns: ['#', 'Numéro PV', 'Véhicule', 'Propriétaire', 'Création', 'Expiration', 'Action'],
    rows: rows
  });
  document.getElementById('ct-search-input').addEventListener('input', function (e) {
    ctDatatableInstance.search(e.target.value);
  });
},
    populateExpertisesTable = function populateExpertisesTable(data) {
  var datatable = document.querySelector('#ev-pill-content > .card > .datatable');
  var rows = [];
  expertises = data;

  if (expertises.length > 0) {
    for (var idx in expertises) {
      rows.push([Number.parseInt(idx, 10) + 1, new Date(expertises[idx].createdAt.date).toLocaleDateString('fr-Fr', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }), "".concat(expertises[idx].numeroImmatriculation, " (").concat(expertises[idx].genre, ")"), expertises[idx].nomClient, expertises[idx].username, "<i class=\"fas fa-eye\" style=\"cursor: pointer\"></i>"]);
    }
  } // datatable.removeAttribute('hidden');


  datatable.innerHTML = '';
  datatable.dataset.maxHeight = 400;
  var evDatatableInstance = new mdb.Datatable(datatable, {
    columns: ['#', 'Date', 'Véhicule', 'Propriétaire', 'Faite par', 'Action'],
    rows: rows
  });
  document.getElementById('ev-search-input').addEventListener('input', function (e) {
    evDatatableInstance.search(e.target.value);
  });
},
    showVehiclesModal = function showVehiclesModal() {
  var options = '';
  var spinner = document.querySelector('#spinner');
  var newVehicleModal = new mdb.Modal(document.querySelector('#vehicles-modal'), {});
  var clientSelect = document.querySelector('#client');
  var vehicleSelect = document.querySelector('#vehicule-controle'); // populate client select

  clients.forEach(function (c) {
    options += "<option value=\"".concat(c.id, "\"").concat(Number.parseInt(clientSelect.value) === c.id ? ' selected' : '', ">").concat(c.nomClient, "</option>");
  });
  clientSelect.innerHTML = options;
  spinner.removeAttribute('hidden'); // fetch vehicles

  fetch("".concat(baseUrl, "/vehicules"), {
    method: 'GET',
    headers: new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    })
  }).then(function (resp) {
    if (resp.ok) {
      resp.text().then(function (responseBody) {
        vehicles = JSON.parse(responseBody).data; // populate vehicle select

        options = '';
        vehicles.forEach(function (v) {
          options += "<option value=\"".concat(v.id, "\"").concat(Number.parseInt(vehicleSelect.value) === v.id ? ' selected' : '', ">").concat(v.genre, " (").concat(v.numeroImmatriculation, ")</option>");
        });
        vehicleSelect.innerHTML = options; // fetch licenses

        fetch("".concat(baseUrl, "/licences"), {
          method: 'GET',
          headers: new Headers({
            'X-Requested-With': 'XMLHttpRequest'
          })
        }).then(function (resp) {
          if (resp.ok) {
            resp.text().then(function (responseBody) {
              licenses = JSON.parse(responseBody).data; // fetch expertises

              fetch("".concat(baseUrl, "/expertises"), {
                method: 'GET',
                headers: new Headers({
                  'X-Requested-With': 'XMLHttpRequest'
                })
              }).then(function (resp) {
                if (resp.ok) {
                  resp.text().then(function (responseBody) {
                    expertises = JSON.parse(responseBody).data;
                    populateExpertisesTable(expertises); // showLatestLicenses(licenses);
                  });
                }
              });
              populateLicensesTable(licenses);
            });
          }
        });
        showLatestVehicles(vehicles);
        spinner.setAttribute('hidden', 'hidden');
        newVehicleModal.show();
      });
    }
  });
},
    saveVehicle = function saveVehicle() {
  var payload = {};

  var _iterator = _createForOfIteratorHelper(new FormData(document.querySelector('#new-vehicle-form')).entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pair = _step.value;
      Object.assign(payload, _defineProperty({}, pair[0], pair[1]));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  fetch("".concat(baseUrl, "/vehicule/new"), {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }),
    body: JSON.stringify(payload)
  }).then(function (response) {
    if (response.ok) {
      response.text().then(function (responseBody) {
        var vehicle = JSON.parse(responseBody).data; // if (vehicles.length === 10) {
        //     vehicles.pop();
        // }

        vehicles.unshift(vehicle);
        showLatestVehicles(vehicles);
        showAlert(JSON.parse(responseBody).message, 'success', false);
      });
    }
  });
},
    savePv = function savePv() {
  var payload = {};
  var spinner = document.querySelector('#spinner');
  spinner.removeAttribute('hidden');

  var _iterator2 = _createForOfIteratorHelper(new FormData(document.querySelector('#new-ct-form')).entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var pair = _step2.value;
      Object.assign(payload, _defineProperty({}, pair[0], pair[1]));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  fetch("".concat(baseUrl, "/licence/new"), {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }),
    body: JSON.stringify(payload)
  }).then(function (response) {
    if (response.ok) {
      response.text().then(function (responseBody) {
        var data = JSON.parse(responseBody);
        var divtoprint = document.createElement('div');
        var vehicle = vehicles.find(function (v) {
          return v.id === Number.parseInt(payload.vehicule, 10);
        });
        divtoprint.innerHTML = "\n                        <div id=\"divHead\"></div>\n                        <div>\n                            <h3 style=\"text-align: center; border-top: 1px solid #000; border-bottom: 1px solid #000; margin-top: 0;\">RE\xC7U N&deg; ".concat(data.data.numeroPv, "</h3>\n                            <span>MOTIF : Paiement PV Contr\xF4le Technique</span><br>\n                            <span>CLIENT : ").concat(data.data.nomClient, " </span><br>\n                            <span>MARQUE : ").concat(data.data.marque, " </span><br>\n                            <span>MODELE : ").concat(data.data.typeOuModele, " </span><br>\n                            <span>PLAQUE : ").concat(data.data.numeroImmatriculation, " </span>\n                            <div style=\"font-weight: bold; text-align: center; border-top: 1px solid #000; border-bottom: 1px solid #000; margin: 10px 0;\">Montant pay\xE9 : ").concat(data.sommesent, " $</div>\n                        </div>\n                        <span style=\"float: right;\">Imprim\xE9 le ").concat(data.createdat, " par ").concat(data.doneby, " </span>\n                    ");
        divtoprint.style.backgroundColor = "#fff !important";
        divtoprint.style.fontSize = "5px !important";
        spinner.setAttribute('hidden', 'hidden');
        newControleModal.hide();
        licenses.unshift(data.data);
        populateLicensesTable(licenses);
        printElementsWithHead(divtoprint);
        showAlert(data.message, 'success', false);
      });
    }
  });
},
    saveExpertise = function saveExpertise() {
  var payload = {};
  var spinner = document.querySelector('#spinner');
  spinner.removeAttribute('hidden');

  var _iterator3 = _createForOfIteratorHelper(new FormData(document.querySelector('#new-expertise-form')).entries()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var pair = _step3.value;
      Object.assign(payload, _defineProperty({}, pair[0], pair[1]));
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  fetch("".concat(baseUrl, "/expertise/new"), {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }),
    body: JSON.stringify(payload)
  }).then(function (resp) {
    if (resp.ok) {
      resp.text().then(function (responseBody) {
        var data = JSON.parse(responseBody);
        var divtoprint = document.createElement('div');
        divtoprint.innerHTML = "\n                        <div id=\"divHead\"></div>\n                        <div class=\"mb-2\">\n                            <div style=\"text-align: center;\">\n                                <h2>RECU N&deg; ".concat(data.data.id, "</h2><br>\n                                <span>Motif : Paiement Expertise de vehicule</span></br>\n                                <span>Client : ").concat(data.data.nomClient, " </span>\n                                <hr>\n                                <span style=\"font-weight:bold;font-size:2em;\">Montant Paye : ").concat(data.amountPaid, " $</span>\n                            </div>\n                            <hr>\n                            <span style=\"float:right;\">Imprim\xE9 le ").concat(new Date(data.data.createdAt.date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }), " par ").concat(data.data.username, "</span>\n                        </div>\n                    ");
        spinner.setAttribute('hidden', 'hidden');
        newExpertiseModal.hide();
        expertises.unshift(data.data);
        populateExpertisesTable(expertises);
        printElementsWithHead(divtoprint);
        showAlert(data.message, 'success', false);
      });
    }
  });
},
    setPhysicalPersonInputs = function setPhysicalPersonInputs() {
  document.querySelector('#gender-section').appendChild(document.importNode(document.querySelector('#gender-section-template').content, true));
  document.querySelector('#employer-section').appendChild(document.importNode(document.querySelector('#employer-section-template').content, true));
},
    removePhysicalPersonInputs = function removePhysicalPersonInputs() {
  document.querySelector('#gender-section').innerHTML = '';
  document.querySelector('#employer-section').innerHTML = '';
},
    displayGrid = function displayGrid(container, content) {
  var client = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    id: null
  };
  var categoriesFragment = content.querySelector('#categories');
  var servicesFragment = content.querySelector('#services');
  fetchAllInterval();

  if (client['id'] === null) {
    disableCustomerDetailsButtons('customerDetails', 'customerPurchases');
  }

  categoriesFragment.innerHTML = '';
  servicesFragment.innerHTML = '';

  for (var i = -1; i < 5; i++) {
    categoriesFragment.innerHTML += "\n                <div class=\"col-md-2\">\n                    <div class=\"card bg-".concat(i === -1 ? 'success' : 'primary', " text-light\">\n                        <div id=\"hold-invoice\" class=\"card-body category\" title=\"").concat(i === -1 ? 'Mettre la facture en pause' : typeof categories[i] !== 'undefined' ? categories[i]['name'] : '', "\">").concat(i === -1 ? '<i class="fas fa-pause fa-2x text-center text-dark"></i>' : typeof categories[i] !== 'undefined' ? categories[i]['name'].length > 25 ? categories[i]['name'].slice(0, 25) + '...' : categories[i]['name'] : '', "</div>\n                    </div>\n                </div>\n            ");
  }

  for (var _i = 0; _i < 24; _i++) {
    var serviceExists = typeof services[_i] !== 'undefined';
    servicesFragment.innerHTML += "\n                <div class=\"col-md-2\">\n                    <div class=\"card bg-accent text-light service\" data-depot-details-id=\"".concat(serviceExists && typeof services[_i]['id'] !== 'undefined' ? services[_i]['id'] : '', "\" data-service-id=\"").concat(serviceExists ? services[_i]['serviceId'] : '', "\" data-service-type=\"").concat(serviceExists ? services[_i]['type'] : '', "\" data-quantity=\"").concat(serviceExists && typeof services[_i]['quantity'] !== 'undefined' ? services[_i]['quantity'] : '', "\" data-price=\"").concat(serviceExists ? services[_i]['unitPrice'] : '', "\">\n                        <div class=\"card-body position-relative\">\n                            <div class=\"h6\" title=\"").concat(serviceExists ? services[_i]['name'] : '', "\">").concat(serviceExists ? services[_i]['name'].length > 25 ? services[_i]['name'].slice(0, 25) + '...' : services[_i]['name'] : '', "</div>\n                            <div>").concat(serviceExists ? services[_i]['unitPrice'] + ' $' : '', "</div>\n                            <div class=\"position-absolute badge bg-primary text-light\">").concat(serviceExists && typeof services[_i]['quantity'] !== 'undefined' ? services[_i]['quantity'] : '', "</div>\n                        </div>\n                    </div>\n                </div>\n            ");
  }

  container.appendChild(document.importNode(content, true));
  document.querySelectorAll('.service').forEach(function (serv) {
    serv.addEventListener('click', function () {
      var serviceId = Number.parseInt(serv.dataset.serviceId, 10);
      var service = services.find(function (s) {
        return s.serviceId === serviceId;
      });

      if ('undefined' !== typeof service) {
        currentInvoice = addToCart(service.serviceId, 1, currentInvoice);
      }
    });
  });
  document.querySelector('#hold-invoice').addEventListener('click', function () {
    sell('hold', currentInvoice);
  });
  document.querySelector('#print-receipt').addEventListener('click', function () {
    printInvoice('REÇU', permissions);
  });
  document.querySelector('#print-invoice').addEventListener('click', function () {
    printInvoice('FACTURE', permissions);
  });
  document.querySelector('#proforma').addEventListener('click', function () {
    sell('proforma', currentInvoice);
  });
  document.querySelector('#pay').addEventListener('click', function () {
    sell('sale', currentInvoice);
  });
  document.querySelectorAll('#createCustomer, #customerDetails').forEach(function (editBtn, idx) {
    editBtn.addEventListener('click', function () {
      // Save article quantities in the session storage
      document.querySelectorAll('.service').forEach(function (service) {
        if (Number.parseInt(service.dataset.serviceType, 10) === 2) {
          sessionStorage.setItem(service.dataset.depotDetailsId, service.dataset.quantity);
        }
      });
      grid.innerHTML = '';
      grid.appendChild(document.importNode(newCustomerForm.content, true));
      document.querySelector('#type-section').innerHTML = "\n                    <label for=\"typeClient\">Type</label>\n                    <select name=\"typeClient\" id=\"typeClient\" class=\"form-control\">\n                        <option value=\"physique\">Personne physique</option>\n                        <option value=\"morale\"".concat(idx === 1 && currentInvoice.client.typeClient === 'morale' ? ' selected' : '', ">Personne morale</option>\n                    </select>\n                ");
      document.querySelector('#typeClient').addEventListener('change', function (event) {
        event.currentTarget.value === 'morale' ? removePhysicalPersonInputs() : setPhysicalPersonInputs();
      });

      if (idx === 1) {
        var toExclude = ['id', 'categoryId', 'categoryName', 'totalFactures', 'totalBonus'];

        if (currentInvoice.client.typeClient === 'morale') {
          toExclude.push(['sexe', 'etatCivil', 'employeur']);
          removePhysicalPersonInputs();
        }

        document.querySelector('#newCustomerTitle').textContent = "D\xE9tails ".concat(currentInvoice.client['sexe'] === 'F' ? 'de la cliente' : 'du client', " ").concat(client['nomClient']);

        for (var prop in currentInvoice.client) {
          if (toExclude.indexOf(prop) === -1) {
            var propInput = document.querySelector('#' + prop);

            if (propInput !== null) {
              propInput.value = currentInvoice.client[prop];
            } else {
              currentInvoice.client[prop] = '';
            }
          }

          if (prop === 'categoryId') {
            document.querySelector('#category').value = currentInvoice.client['categoryId'];
          }
        }

        if (currentInvoice.client.typeClient === 'physique') {
          document.querySelectorAll('#employeur > option').forEach(function (option) {
            if (option.textContent === currentInvoice.client.employeur) {
              option.setAttribute('selected', 'selected');
            }
          });
        }

        document.querySelectorAll('#category > option').forEach(function (option) {
          if (option.value === '0') {
            document.querySelector('#category').removeChild(option);
          }

          if (option.value === currentInvoice.client.category) {
            option.setAttribute('selected', 'selected');
          }
        });
        document.querySelector('#addCustomer').textContent = 'Modifier';
      } else {
        setPhysicalPersonInputs();
      }

      document.querySelector('#addCustomer').addEventListener('click', function () {
        var _currentInvoice$clien;

        var formData = new FormData(document.querySelector('form')),
            headers = new Headers();

        if (idx === 0) {
          currentInvoice.client = {
            id: null
          };
        }

        var _iterator4 = _createForOfIteratorHelper(formData.entries()),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var pair = _step4.value;
            Object.assign(currentInvoice.client, _defineProperty({}, pair[0], pair[1]));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        headers.append('Content-Type', 'application/json');
        headers.append('X-Requested-With', 'XMLHttpRequest');
        fetch("".concat(baseUrl, "/clients/").concat((_currentInvoice$clien = currentInvoice.client.id) !== null && _currentInvoice$clien !== void 0 ? _currentInvoice$clien : 'new'), {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(currentInvoice.client)
        }).then(function (resp) {
          if (resp.ok) {
            resp.text().then(function (responseBody) {
              var data = JSON.parse(responseBody).data;
              var verb = currentInvoice.client.id === null ? 'créé' : 'modifié';
              currentInvoice.client.id = data.id;
              currentInvoice.client.discountApplicable = data.discountApplicable;
              currentInvoice.client.totalFactures = isNaN(currentInvoice.client.totalFactures) || 'undefined' === currentInvoice.client.totalFactures || null === currentInvoice.client.totalFactures ? 0 : 'string' === typeof currentInvoice.client.totalFactures ? Number.parseInt(currentInvoice.client.totalFactures, 10) : currentInvoice.client.totalFactures;
              currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus || null === currentInvoice.client.totalBonus ? 0 : 'string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus;
              alert("Client".concat(currentInvoice.client.sexe === 'F' ? 'e' : '', " ").concat(currentInvoice.client.nomClient, " ").concat(verb).concat(currentInvoice.client.sexe === 'F' ? 'e' : '', " avec succ\xE8s"));
              document.querySelector('#customerName').textContent = currentInvoice.client.nomClient;
              document.querySelector('#total-factures').textContent = currentInvoice.client.totalFactures;
              document.querySelector('#total-bonus').textContent = currentInvoice.client.totalBonus.toFixed(2);
              enableCustomerDetailsButtons('customerDetails', 'customerPurchases'); // updateTotalElements(total, client.discountApplicable);
            });
          } else {
            resp.text().then(function (respBody) {
              console.log(respBody);
            });
          }
        });
      });
      document.querySelector('#close').addEventListener('click', function () {
        grid.innerHTML = '';
        displayGrid(grid, gridContent.content, currentInvoice.client);
        document.querySelectorAll('.service').forEach(function (service) {
          if (Number.parseInt(service.dataset.serviceType, 10) === 2) {
            var qty = sessionStorage.getItem(service.dataset.depotDetailsId);
            service.dataset.quantity = qty;
            service.querySelector('.card-body > div:last-child').textContent = qty;
          }
        });
      });
    });
  });
  document.querySelector('#createDepense').addEventListener('click', function (event) {
    var parentNode = event.currentTarget.parentNode.parentNode;
    fetch("".concat(baseUrl, "/sales/clotures/new"), {
      method: 'GET'
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (responseBody) {
          var _clotureElts$cash, _clotureElts$dettes;

          clotureElts = JSON.parse(responseBody).data;

          if (Number.parseFloat((_clotureElts$cash = clotureElts.cash) !== null && _clotureElts$cash !== void 0 ? _clotureElts$cash : 0) + Number.parseFloat((_clotureElts$dettes = clotureElts.dettes) !== null && _clotureElts$dettes !== void 0 ? _clotureElts$dettes : 0) > Number.parseFloat(parentNode.querySelector('#amount').value)) {
            var formData = new FormData(parentNode.querySelector('form')),
                headers = new Headers({
              'X-Requested-With': 'XMLHttpRequest'
            });
            fetch("".concat(baseUrl, "/depenses/new"), {
              method: 'POST',
              headers: headers,
              body: formData
            }).then(function (resp) {
              if (resp.ok) {
                resp.text().then(function (data) {
                  showAlert(JSON.parse(data), 'success', false);
                });
              }
            });
          } else {
            showAlert('Vous ne pouvez pas dépenser un montant supérieur au solde de votre caisse.', 'warning', false);
          }
        });
      }
    });
  });
  document.querySelector('#toggleNewDepense').addEventListener('click', function (e) {
    if (permissions.includes('depense')) {
      cloture === null ? depenseModal.show() : showAlert('Impossible d\'effectuer une dépense ! Vous avez déjà clôturé la journée.', 'warning', false);
    } else {
      showAlert('Vous n\'êtes pas autorisé à faire une dépense.', 'warning', false);
    }
  });
  document.querySelector('#toggle-paiement-dettes').addEventListener('click', function () {
    if (cloture === null) {
      if (currentInvoice.client.id !== null) {
        var debtPaymentModal = new mdb.Modal(document.getElementById('paiement-dettes'), {}); // amountPaid = 0;

        debtPaymentModal.show();
      } else {
        showAlert('Veuillez sélectionner un client', 'warning', false);
      }
    } else {
      showAlert('Impossible d\'effectuer l\'opération ! Vous avez déjà clôturé la journée.', 'warning', false);
    }
  });
  document.querySelector('#cloturer').addEventListener('click', function () {
    fetch("".concat(baseUrl, "/sales/clotures/new"), {
      method: 'GET'
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (responseBody) {
          var _clotureElts$ventes$t, _clotureElts$ventes$w, _clotureElts$ventes$d, _clotureElts$cash$tot, _clotureElts$cash$wor, _clotureElts$cash$dis, _clotureElts$credits$, _clotureElts$credits$2, _clotureElts$credits$3, _clotureElts$paiement, _clotureElts$depenses, _clotureElts$paiement2;

          clotureElts = JSON.parse(responseBody).data;
          var ventes = Number.parseFloat((_clotureElts$ventes$t = clotureElts.ventes.total) !== null && _clotureElts$ventes$t !== void 0 ? _clotureElts$ventes$t : 0) + Number.parseFloat((_clotureElts$ventes$w = clotureElts.ventes.workforce) !== null && _clotureElts$ventes$w !== void 0 ? _clotureElts$ventes$w : 0) - Number.parseFloat((_clotureElts$ventes$d = clotureElts.ventes.discount) !== null && _clotureElts$ventes$d !== void 0 ? _clotureElts$ventes$d : 0);
          var cash = Number.parseFloat((_clotureElts$cash$tot = clotureElts.cash.total) !== null && _clotureElts$cash$tot !== void 0 ? _clotureElts$cash$tot : 0) + Number.parseFloat((_clotureElts$cash$wor = clotureElts.cash.workforce) !== null && _clotureElts$cash$wor !== void 0 ? _clotureElts$cash$wor : 0) - Number.parseFloat((_clotureElts$cash$dis = clotureElts.cash.discount) !== null && _clotureElts$cash$dis !== void 0 ? _clotureElts$cash$dis : 0);
          var credits = Number.parseFloat((_clotureElts$credits$ = clotureElts.credits.total) !== null && _clotureElts$credits$ !== void 0 ? _clotureElts$credits$ : 0) + Number.parseFloat((_clotureElts$credits$2 = clotureElts.credits.workforce) !== null && _clotureElts$credits$2 !== void 0 ? _clotureElts$credits$2 : 0) - Number.parseFloat((_clotureElts$credits$3 = clotureElts.credits.discount) !== null && _clotureElts$credits$3 !== void 0 ? _clotureElts$credits$3 : 0);
          var paiementsDettes = Number.parseFloat((_clotureElts$paiement = clotureElts.paiementsDettes) !== null && _clotureElts$paiement !== void 0 ? _clotureElts$paiement : 0);
          var depenses = Number.parseFloat((_clotureElts$depenses = clotureElts.depenses) !== null && _clotureElts$depenses !== void 0 ? _clotureElts$depenses : 0);
          var paiementsParBonus = Number.parseFloat((_clotureElts$paiement2 = clotureElts.paiementsParBonus) !== null && _clotureElts$paiement2 !== void 0 ? _clotureElts$paiement2 : 0);
          document.querySelector('#ventes > td:nth-child(2)').textContent = ventes.toFixed(2) + ' $';
          document.querySelector('#cash > td:nth-child(2)').textContent = cash.toFixed(2) + ' $';
          document.querySelector('#credits > td:nth-child(2)').textContent = credits.toFixed(2) + ' $';
          document.querySelector('#ventes-par-bonus > td:nth-child(2)').textContent = paiementsParBonus.toFixed(2) + ' $';
          document.querySelector('#dettes > td:nth-child(2)').textContent = paiementsDettes.toFixed(2) + ' $';
          document.querySelector('#depenses > td:nth-child(2)').textContent = depenses.toFixed(2) + ' $';
          document.querySelector('#totalVentes > td:nth-child(2)').textContent = "".concat((cash + paiementsDettes - depenses - paiementsParBonus).toFixed(2), " $");
        });
      }
    });
  });
  document.querySelector('#listfactures').addEventListener('click', function () {
    var datatable = document.querySelector('#factureslist .modal-body > .datatable');
    datatable.innerHTML = '';
    var invoicesTableInstance = new mdb.Datatable(datatable, {
      columns: [{
        label: 'Date',
        field: 'dateFact'
      }, {
        label: 'N° facture',
        field: 'id'
      }, {
        label: 'Type',
        field: 'typeFacture'
      }, {
        label: 'Client',
        field: 'nomClient'
      }, {
        label: 'Montant',
        field: 'amount'
      }, {
        label: 'Réduction',
        field: 'discount'
      }]
    }, {
      loading: true
    });
    datatable.removeAttribute('hidden');
    fetch("".concat(baseUrl, "/factures/vente/guichetier"), {
      method: 'GET'
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (data) {
          // let invoiceItems = JSON.parse(data);
          // let invoiceItems;
          sessionStorage.setItem('invoiceItems', data);

          var setActions = function setActions(e) {
            e.currentTarget.querySelectorAll('tbody > tr').forEach(function (rowElt) {
              rowElt.style.cursor = 'pointer'; // rowElt.addEventListener('click', (event) => {

              rowElt.addEventListener('click', function (event) {
                var invoiceItems = JSON.parse(sessionStorage.getItem('invoiceItems'));
                var index = Number.parseInt(event.currentTarget.dataset.index); // console.log(invoiceItems[idx]);

                populatechartboad(invoiceItems[index]);
                currentInvoice.type = invoiceItems[index].typeFacture;
              });
            });
          };

          datatable.addEventListener('render.mdb.datatable', setActions);
          invoicesTableInstance.update({
            rows: JSON.parse(sessionStorage.getItem('invoiceItems')).map(function (row) {
              var _row$discount;

              return _objectSpread(_objectSpread({}, row), {}, {
                dateFact: "".concat(new Date(row.dateFact.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })),
                amount: "".concat((row.total + ('number' === typeof row.workforce ? row.workforce : 0)).toFixed(2), " $"),
                discount: "".concat(((_row$discount = row.discount) !== null && _row$discount !== void 0 ? _row$discount : 0).toFixed(2), " $")
              });
            })
          }, {
            loading: false,
            hover: true
          });
          document.getElementById('invoice-search-input').addEventListener('input', function (e) {
            invoicesTableInstance.search(e.target.value);
          });
        });
      }
    });
  });
  document.querySelectorAll('.confirm-cloture').forEach(function (elt) {
    cloture !== null ? elt.setAttribute('hidden', 'hidden') : elt.removeAttribute('hidden');
  });
  initDebtPayment('paiement-dettes');
  initDebtPayment('paiement-dettes-employees', '/employes');
  oneTimePayment();
  oneTimePayment('-employees');
},
    serviceExistence = function serviceExistence(arr, fn) {
  var _iterator5 = _createForOfIteratorHelper(arr),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var value = _step5.value;

      if (fn(value)) {
        return value;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return false;
};

function emptyInput(input) {
  input.value = '';
} // Update clients, services, categories,... lists


function fetchAll() {
  fetch("".concat(baseUrl, "/sales/new"), {
    method: 'GET',
    headers: new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    })
  }).then(function (response) {
    if (response.ok) {
      response.text().then(function (responseBody) {
        var data = JSON.parse(responseBody).data;
        clients = data.clients;
        services = data.services;
        categories = data.categories;
      });
    }
  });
}

function addToCart(serviceId, qty, invoice) {
  var isDiscountApplicable = invoice.client.id !== null && invoice.client.discountApplicable;
  var names = document.querySelectorAll('.table > tbody > tr > td:first-child');
  var s = services.find(function (service) {
    return service.serviceId === Number.parseInt(serviceId, 10);
  });

  if ('undefined' !== typeof s) {
    var serviceExists = serviceExistence(names, function (n) {
      return s.name == n.textContent;
    });
    var serviceType = s.type === 1 ? 'service' : 'article';

    if ((serviceType === 'service' || qty > 0) && qty > 0 || qty < 0) {
      var key = s.type === 1 ? s.serviceId : s.id; // Verifier si le nom du service existe dans la colonne des noms. Si oui, ajouter la quantite ; sinon ajouter une nouvelle ligne.

      if (!!serviceExists) {
        var qtyElt = serviceExists.parentNode.querySelector('td:nth-of-type(2)'),
            priceElt = serviceExists.parentNode.querySelector('td:nth-of-type(3)');
        qtyElt.textContent = Number.parseInt(qtyElt.textContent, 10) + qty;
        priceElt.textContent = (Number.parseFloat(priceElt.textContent) + qty * s.unitPrice).toFixed(2);
      } else {
        var cartItem = document.querySelector('#cartItem').content;
        cartItem.querySelector('tr').dataset.serviceId = serviceId;
        cartItem.querySelector('td').textContent = s.name;
        cartItem.querySelector('td:nth-of-type(2)').textContent = qty;
        cartItem.querySelector('td:nth-of-type(3)').textContent = (qty * s.unitPrice).toFixed(2);
        document.querySelector('#cart > tbody').appendChild(document.importNode(cartItem, true));
        document.querySelector('tr:last-of-type > td > .btn-group > button').addEventListener('click', function () {
          currentInvoice = addToCart(s.serviceId, 1, currentInvoice);
        });
        document.querySelector('tr:last-of-type > td > .btn-group > button:nth-child(2)').addEventListener('click', function (event) {
          var ancestor = event.currentTarget.parentNode.parentNode.parentNode;
          currentInvoice = addToCart(s.serviceId, -1, currentInvoice);

          if (Number.parseInt(ancestor.querySelector('td:nth-of-type(2)').textContent, 10) === 0) {
            document.querySelector('#cart > tbody').removeChild(ancestor);
          }
        });
        document.querySelector('tr:last-of-type > td > .btn-group > button:last-child').addEventListener('click', function (event) {
          var ancestor = event.currentTarget.parentNode.parentNode.parentNode;
          currentInvoice = addToCart(s.serviceId, -Number.parseInt(ancestor.querySelector('td:nth-of-type(2)').textContent, 10), currentInvoice);
          document.querySelector('#cart > tbody').removeChild(ancestor);
        });
      }

      invoice.total += qty * s.unitPrice;

      if (isDiscountApplicable && discountables.indexOf(s.serviceId) > -1) {
        invoice.discount += qty * Math.abs(s.unitPrice - s.deflatedPrice);
      } // Update total elements


      updateTotalElements(invoice.total, invoice.discount); // Diminuer ou augmenter la quantite de l'article

      if (serviceType === 'article') {
        var serviceElt = document.querySelector("#services > div > [data-service-id=\"".concat(s.serviceId, "\"]"));
        s.quantity -= qty;

        if (serviceElt !== null) {
          serviceElt.dataset.quantity = s.quantity;
          serviceElt.querySelector('.card-body > .badge').textContent = s.quantity;
        }
      }

      if ('undefined' !== typeof invoice[serviceType + 's'] && invoice[serviceType + 's'].hasOwnProperty(key)) {
        invoice[serviceType + 's'][key]['nbUnites'] += qty;
      } else {
        if ('undefined' === typeof invoice[serviceType + 's']) {
          Object.assign(invoice, _defineProperty({}, serviceType + 's', {}));
        }

        Object.assign(invoice[serviceType + 's'], _defineProperty({}, key, {
          id: s.serviceId,
          nbUnites: qty,
          service: s.name,
          unitPrice: s.unitPrice,
          deflatedPrice: s.deflatedPrice,
          bonusApplicable: s.bonusApplicable
        }));
      }
    }
  }

  return invoice;
}

function editQuantity(e) {
  var currentTarget = e.currentTarget;
  var serviceId = Number.parseInt(currentTarget.parentNode.dataset.serviceId, 10);
  var quantity = Number.parseInt(prompt("Quantité"), 10);

  if (!isNaN(quantity) && typeof quantity === 'number') {
    currentInvoice = addToCart(serviceId, -Number.parseInt(currentTarget.textContent, 10), currentInvoice);
    var available = services.find(function (service) {
      return service.serviceId === serviceId;
    }).quantity;
    currentInvoice = addToCart(serviceId, quantity > available ? available : quantity, currentInvoice);
  }
}

function updateTotalElements(total) {
  var discountAmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var discountElt = document.querySelector('#discount');
  var workforceElt = document.querySelector('#workforce');
  var workforceAmount = 'number' === typeof workforcePercent && workforcePercent > 0 ? workforcePercent * total : 0; // const discountAmount = isDiscountApplicable ? Math.abs(discount) : 0;

  document.querySelector('#total').textContent = '$' + Math.abs(total).toFixed(2);

  if (null !== discountElt) {
    discountElt.textContent = '$' + discountAmount.toFixed(2);
  }

  if (null !== workforceElt) {
    workforceElt.textContent = '$' + workforceAmount.toFixed(2);
  }

  document.querySelector('#net').textContent = '$' + (total + workforceAmount - discountAmount).toFixed(2);
}

function resetCart() {
  document.querySelectorAll('tr > td > .btn-group > button:last-child').forEach(function (removeBtn) {
    removeBtn.click();
  });
  document.querySelectorAll('#sale-amount, #sale-workforce').forEach(function (amountElt) {
    amountElt.value = 0;

    if (amountElt.id === 'workforce') {
      amountElt.parentNode.hidden = 'hidden';
    }
  });
  document.querySelector('#sale-total > span:last-child').textContent = 0;
  updateTotalElements(0);
  document.querySelector('#customerName').textContent = 'Client anonyme';
  document.querySelector('#total-factures').textContent = 0;
  document.querySelector('#total-bonus').textContent = 0.00;
  currentInvoice = {
    id: null,
    client: {
      id: null
    },
    articles: {},
    services: {},
    total: 0,
    workforce: 0,
    discount: 0
  };
  licenceId = 0;
  amountPaid = 0;
  console.log(currentInvoice);
}

function applyDiscount(invoice, discountables) {
  invoice.discount = 0;

  for (var idx in invoice.services) {
    var service = invoice.services[idx];

    if (discountables.indexOf(service.id) > -1) {
      invoice.discount += service.nbUnites * Math.abs(service.unitPrice - service.deflatedPrice);
      invoice.services[idx].unitPrice = service.deflatedPrice;
    }
  }

  for (var _idx in invoice.articles) {
    var article = invoice.articles[_idx];

    if (discountables.indexOf(article.id) > -1) {
      invoice.discount += article.nbUnites * Math.abs(article.unitPrice - article.deflatedPrice);
      invoice.articles[_idx].unitPrice = article.deflatedPrice;
    }
  }

  return invoice;
}

function removeDiscount(invoice) {
  invoice.discount = 0;

  var _loop = function _loop(idx) {
    var service = services.find(function (s) {
      return s.serviceId === invoice.services[idx].id;
    });
    invoice.services[idx].unitPrice = service.unitPrice;
  };

  for (var idx in invoice.services) {
    _loop(idx);
  }

  var _loop2 = function _loop2(_idx2) {
    var article = services.find(function (s) {
      return s.serviceId === invoice.articles[_idx2].id;
    });
    invoice.articles[_idx2].unitPrice = article.unitPrice;
  };

  for (var _idx2 in invoice.articles) {
    _loop2(_idx2);
  }

  return invoice;
}

function proceedToSell(saleType) {
  var paymentMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var netAmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var saleModal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var saleModalContainer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var montantPaye = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var isDiscountApplicable = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  // let invoice = JSON.parse(sessionStorage.getItem('facture'));
  var invoice = currentInvoice;
  var saleTotal = invoice.total + invoice.workforce - invoice.discount;

  if (!['proforma', 'hold'].includes(saleType) && !permissions.includes('credit') && montantPaye < saleTotal) {
    showAlert('Vous n\'êtes pas autorisé à faire une vente à crédit.', 'warning', false);
  } else if (!['proforma', 'hold'].includes(saleType) && !permissions.includes('cash') && montantPaye >= saleTotal) {
    showAlert('Vous n\'êtes pas autorisé à faire une vente cash.', 'warning', false);
  } else if (invoice.total > 0) {
    if (!['proforma', 'hold'].includes(saleType) && 'undefined' !== typeof netAmount && montantPaye < saleTotal && typeof invoice.client['id'] !== 'number') {
      showAlert('Veuillez sélectionner un client pour continuer.', 'warning', false);
    } else {
      var dateTosentElt = document.querySelector('#dateretraitinput');
      var dateTosent = '';
      var payload;

      if (dateTosentElt !== null) {
        dateTosent = dateTosentElt.value;
      }

      if ('' === dateTosent) {
        // echeance de 7 jours par defaut
        dateTosent = new Date(Date.now() + 604800000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        });
      } // invoice = isDiscountApplicable ? applyDiscount(invoice, discountables) : removeDiscount(invoice);


      document.querySelector('#spinner').removeAttribute('hidden');
      payload = {
        sourceInvoiceId: invoice === null || invoice === void 0 ? void 0 : invoice.id,
        client: invoice.client['id'],
        saleType: saleType,
        paymentMode: paymentMode,
        amountPaid: montantPaye,
        total: invoice.total,
        workforce: invoice.workforce === 0 && 'number' === typeof workforcePercent && workforcePercent > 0 ? workforcePercent * invoice.total : invoice.workforce,
        workforcePercent: workforcePercent,
        discount: invoice.discount,
        details: invoice,
        licenceid: licenceId,
        date: dateTosent
      }; // payload = { client: client['id'], saleType: saleType, paymentMode: paymentMode, amountPaid: montantPaye, total: invoice.total, workforce: invoice.workforce, workforcePercent: workforcePercent, discount: invoice.discount, details: invoice, date: dateTosent };
      // console.log(payload);

      fetch("".concat(baseUrl, "/sales/new"), {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
      }).then(function (resp) {
        var saleButton = saleModalContainer === null || saleModalContainer === void 0 ? void 0 : saleModalContainer.querySelector('.modal-footer > button:nth-child(2)'); // document.querySelector('#spinner').setAttribute('hidden', 'hidden');

        if (resp.ok) {
          resp.text().then(function (respBody) {
            var parsedBody = JSON.parse(respBody);
            var totalFacturesElt = document.querySelector('#total-factures');
            var clientId = parsedBody.clientId;
            sessionStorage.setItem('invoiceId', parsedBody.invoiceId);
            invoice.id = parsedBody.invoiceId;
            invoice.type = saleType;

            if (['cash', 'credit'].indexOf(saleType) > -1) {
              if (clientId !== null) {
                var totalBonusElt = document.querySelector('#total-bonus');
                currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus ? 0 : 'string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus;
                totalBonusElt.textContent = currentInvoice.client.totalBonus.toFixed(2);
                document.querySelector('#spinner').setAttribute('hidden', 'hidden');
                var bonuses = parsedBody.bonuses;
                var totalBonus = bonuses.length > 0 ? bonuses.reduce(function (accu, next) {
                  return accu + next;
                }, 0) : 0;
                var suffixe = '';

                if (totalBonus > 0) {
                  suffixe = " Le client vient de gagner ".concat(totalBonus.toFixed(2), " $ en bonus.");
                  currentInvoice.client.totalBonus += totalBonus;
                  totalBonusElt.textContent = (Number.parseFloat(totalBonusElt.textContent) + totalBonus).toFixed(2);
                }

                showAlert("Vente ".concat(saleType, " effectu\xE9e avec succ\xE8s !").concat(suffixe), 'success', false);
              } else {
                document.querySelector('#spinner').setAttribute('hidden', 'hidden');
                showAlert("Vente ".concat(saleType, " effectu\xE9e avec succ\xE8s !"), 'success', false);
              } // printInvoice('FACTURE', invoice);

            } else if (saleType === 'proforma') {
              document.querySelector('#spinner').setAttribute('hidden', 'hidden');
              showAlert('Facture proforma enregistrée', 'success', false); // printInvoice('FACTURE', invoice);
            } else if (saleType === 'hold') {
              document.querySelector('#spinner').setAttribute('hidden', 'hidden');
              showAlert('Facture mise en pause', 'success', false);
            }

            if (clientId !== null) {
              totalFacturesElt.textContent = Number.parseInt(totalFacturesElt.textContent, 10) + 1;
            }
          });
        } else {
          resp.text().then(function (responseBody) {
            showAlert(JSON.parse(responseBody).message, 'danger', false); // showAlert(responseBody, 'danger', false);
          });
        }

        if (null !== saleButton && !['proforma', 'hold'].includes(saleType)) {
          saleButton.removeEventListener('click', proceedToSell, false);
        }
      });

      if (!['proforma', 'hold'].includes(saleType)) {
        saleModal.hide();
      }

      sessionStorage.setItem('invoice', JSON.stringify(payload));
      resetCart();

      if (null !== saleModal) {
        saleModal.hide();
      }

      window.location.reload();
    }
  } // resetCart();
  // saleModal.hide();

}

function sell(type, invoice) {
  if (cloture === null) {
    if (!permissions.includes('proforma') && type === 'proforma') {
      showAlert('Vous n\'êtes pas autorisé à faire une facture proforma.', 'warning', false);
    } else if (invoice.total > 0) {
      var montantPaye = null;
      var saleType = type;
      var paymentMode = 1;
      var isDiscountApplicable = false;
      var netAmount = invoice.total - invoice.discount;
      invoice.workforce = 0;

      if (saleType === 'sale') {
        var saleModalElt = document.querySelector('#sale-modal');
        var saleModal = new mdb.Modal(saleModalElt);
        var paymentModeSelect = saleModalElt.querySelector('#payment-mode');
        var saleModalContainer;
        var amountElt;
        var saleTotalElt;

        if (!isNaN(currentInvoice.client.totalBonus) && currentInvoice.client.totalBonus >= netAmount + invoice.workforce) {
          paymentModeSelect.removeAttribute('disabled');
          paymentModeSelect.addEventListener('change', function (e) {
            paymentMode = Number.parseFloat(e.currentTarget.value);
          });
        }

        isDiscountApplicable = currentInvoice.client.id !== null && currentInvoice.client.discountApplicable && paymentMode === 1;
        saleModalElt.addEventListener('shown.bs.modal', function (e) {
          saleModalContainer = e.currentTarget;
          amountElt = saleModalContainer.querySelector('#sale-amount');
          saleTotalElt = saleModalContainer.querySelector('#sale-total > span:nth-child(2)');
          amountElt.value = netAmount.toFixed(2);
          montantPaye = netAmount;
          saleTotalElt.textContent = montantPaye.toFixed(2);

          if ('number' === typeof workforcePercent && workforcePercent > 0) {
            var _workforcePercent;

            var workforceElt = saleModalContainer.querySelector('#sale-workforce');
            workforceElt.value = null === workforcePercent ? 0 : netAmount * workforcePercent;

            var updateSaleTotal = function updateSaleTotal(currentTarget) {
              if (!Number.parseFloat(workforceElt.value)) {
                workforceElt.value = 0;
              }

              if ('undefined' !== typeof currentTarget) {
                if (currentTarget.id === 'sale-workforce') {
                  invoice.workforce = Number.parseFloat(workforceElt.value);
                } else {
                  netAmount = Number.parseFloat(amountElt.value);
                }
              }

              montantPaye = netAmount + Number.parseFloat(invoice.workforce);
              saleTotalElt.textContent = montantPaye.toFixed(2);

              if (!isNaN(currentInvoice.client.totalBonus)) {
                if (montantPaye <= currentInvoice.client.totalBonus) {
                  paymentModeSelect.removeAttribute('disabled');
                } else {
                  paymentMode = 1;
                  paymentModeSelect.setAttribute('disabled', 'disabled');
                }
              }
            };

            invoice.workforce = (((_workforcePercent = workforcePercent) !== null && _workforcePercent !== void 0 ? _workforcePercent : 0.2) * netAmount).toFixed(2);

            if (null !== workforceElt) {
              workforceElt.value = invoice.workforce;
            }

            updateSaleTotal();

            if (null !== workforceElt) {
              workforceElt.parentNode.removeAttribute('hidden');
            }

            [amountElt, workforceElt].forEach(function (elt) {
              elt.addEventListener('blur', function (e) {
                var currentTarget = e.currentTarget;
                updateSaleTotal(currentTarget);
              });
              elt.addEventListener('keypress', function (e) {
                var currentTarget = e.currentTarget;
                setTimeout(function () {
                  updateSaleTotal(currentTarget);
                }, 10);
              });
            });
          } else {
            var _updateSaleTotal = function _updateSaleTotal(currentTarget) {
              if ('undefined' !== typeof currentTarget) {
                netAmount = Number.parseFloat(amountElt.value);
              }

              montantPaye = netAmount;
              saleTotalElt.textContent = montantPaye.toFixed(2);

              if (!isNaN(currentInvoice.client.totalBonus)) {
                if (montantPaye <= currentInvoice.client.totalBonus) {
                  paymentModeSelect.removeAttribute('disabled');
                } else {
                  paymentMode = 1;
                  paymentModeSelect.setAttribute('disabled', 'disabled');
                }
              }
            };

            amountElt.addEventListener('blur', function (e) {
              var currentTarget = e.currentTarget;

              _updateSaleTotal(currentTarget);
            });
            amountElt.addEventListener('keypress', function (e) {
              var currentTarget = e.currentTarget;
              setTimeout(function () {
                _updateSaleTotal(currentTarget);
              }, 10);
            });
          }

          saleModalContainer.querySelector('#sale-modal-close').addEventListener('click', function () {
            resetCart();
            saleModal.hide(); // console.log(currentInvoice.total);

            window.location.reload();
          }); // saleType = montantPaye < invoice.total + invoice.workforce - invoice.discount ? 'credit' : 'cash';

          sessionStorage.setItem('invoice', JSON.stringify(invoice)); // console.log(saleType);

          saleModalContainer.querySelector('.modal-footer > button:first-child').addEventListener('click', function () {
            currentInvoice = JSON.parse(sessionStorage.getItem('invoice'));
            sessionStorage.removeItem('invoice');
            saleType = montantPaye < invoice.total + invoice.workforce - invoice.discount ? 'credit' : 'cash'; // console.log(saleType);
            // console.log('paye: ' + montantPaye);
            // console.log('total: ' + invoice.total);
            // console.log('workforce: ' + invoice.workforce);
            // console.log('discount: ' + invoice.discount);
            // sessionStorage.setItem('facture', JSON.stringify(currentInvoice));

            proceedToSell(saleType, paymentMode, netAmount, saleModal, saleModalContainer, montantPaye, isDiscountApplicable);
          });
        });
        saleModal.show();
      } else {
        if ('number' === typeof workforcePercent && workforcePercent > 0) {
          if (saleType === 'proforma') {
            var _workforcePercent2;

            var proformaModalElt = document.querySelector('#proforma-modal');
            var proformaModal = new mdb.Modal(proformaModalElt);
            var workforceValue = ((_workforcePercent2 = workforcePercent) !== null && _workforcePercent2 !== void 0 ? _workforcePercent2 : 0) * currentInvoice.total;
            proformaModalElt.addEventListener('shown.bs.modal', function (e) {
              var proformaModalContainer = e.currentTarget;
              proformaModalElt.querySelector('#proforma-workforce-input').value = workforceValue.toFixed(2);
              proformaModalElt.querySelector('#discount-proforma').textContent = currentInvoice.discount.toFixed(2);
              proformaModalElt.querySelector('#total-proforma').textContent = currentInvoice.total.toFixed(2);
              proformaModalElt.querySelector('#net-proforma').textContent = (workforceValue + currentInvoice.total - currentInvoice.discount).toFixed(2);
              proformaModalContainer.querySelector('#proforma-modal-close').addEventListener('click', function () {
                resetCart();
                proformaModal.hide();
                window.location.reload();
              });
              sessionStorage.setItem('invoice', JSON.stringify(invoice));
              proformaModalContainer.querySelector('.modal-footer > button').addEventListener('click', function () {
                currentInvoice = JSON.parse(sessionStorage.getItem('invoice'));
                sessionStorage.removeItem('invoice');
                proformaModal.hide(); // sessionStorage.setItem('facture', JSON.stringify(currentInvoice));

                proceedToSell('proforma');
              });
            });
            proformaModal.show();
          } else {
            proceedToSell('hold');
          }
        } else {
          proceedToSell(saleType);
        }
      }
    }
  } else {
    showAlert('Vous avez déjà clôturé la journée', 'warning', false);
  }
}

function payerDettes() {
  var employes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var spinnerElt = document.getElementById('spinner');
  document.querySelector('#confirm-print-receipt .modal-body > div:last-child > button:first-child').addEventListener('click', function () {
    printReceiptModal.hide();
  });

  if (amountPaid > 0) {
    fetch("".concat(baseUrl, "/dettes/").concat(currentInvoice.client.id, "/paiement").concat(employes === '' ? '' : '/employees', "?amount=").concat(amountPaid), {
      method: 'GET'
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (data) {
          spinnerElt.setAttribute('hidden', 'hidden');
          document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(2) > div:last-child').textContent = amountPaid;
          document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(3) > div:last-child').textContent = amountDueSold - amountPaid;
          printReceiptModal.show();
        });
      }
    });
  } else if (selectedDebts.length > 0) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    var debts = selectedDebts.map(function (debt) {
      return {
        id: debt.id,
        amountPaid: Number.parseFloat(document.querySelector("#debts-table".concat(employes, " tbody > tr:nth-child(").concat(debt.rowIndex + 1, ") > td:nth-child(6)")).textContent)
      };
    });
    fetch("".concat(baseUrl, "/dettes/").concat(currentInvoice.client.id, "/paiement"), {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(debts)
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (data) {
          spinnerElt.setAttribute('hidden', 'hidden');
          amountPaid = debts.reduce(function (accu, debt) {
            return accu + debt.amountPaid;
          }, 0);
          document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(2) > div:last-child').textContent = amountPaid;
          document.querySelector('#confirm-print-receipt .modal-body > div:nth-child(3) > div:last-child').textContent = amountDueSold - amountPaid;
          printReceiptModal.show();
        });
      }
    });
  }

  spinnerElt.removeAttribute('hidden');
}

function initDebtPayment(modalId) {
  var urlFragment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  document.getElementById(modalId).addEventListener('shown.bs.modal', function () {
    var datatable = document.querySelector("#".concat(modalId, " .modal-body > .datatable"));
    var payForEmployeesBtn = document.querySelector('#paiement-dettes .modal-footer button:first-child');
    var isEnterprise;
    var columns = [{
      label: 'Date d\'octroi',
      field: 'dateOctroi'
    }, {
      label: 'Echéance',
      field: 'echeance'
    }, {
      label: 'Crédit',
      field: 'amount'
    }, {
      label: 'Déjà payé',
      field: 'paid'
    }, {
      label: 'A payer',
      field: 'sold'
    }, {
      label: 'Solde',
      field: 'remainder'
    }, {
      label: 'ID',
      field: 'id',
      sort: false
    }];

    if (!!urlFragment) {
      columns.push({
        label: 'Employé',
        field: 'nomClient'
      });
    }

    datatable.removeAttribute('hidden');
    datatable.innerHTML = '';
    datatable.dataset.maxHeight = 400;
    var debtsTableInstance = new mdb.Datatable(datatable, {
      columns: columns
    }, {
      loading: true
    });

    if (currentInvoice.client.typeClient === 'morale') {
      payForEmployeesBtn.removeAttribute('hidden');
      isEnterprise = true;
    } else {
      payForEmployeesBtn.setAttribute('hidden', 'hidden');
      isEnterprise = false;
    }

    document.querySelector('#paiementDettesModalLabel > span').textContent = currentInvoice.client.nomClient;
    fetch("".concat(baseUrl, "/dettes/").concat(currentInvoice.client.id).concat(urlFragment), {
      method: 'GET'
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (responseBody) {
          var body = JSON.parse(responseBody);
          var dettes = body.data.debts; // const rows = [];

          var total = dettes.reduce(function (accu, next) {
            return accu + next.sold;
          }, 0);

          var setDynamicParts = function setDynamicParts() {
            amountDueSold = (total + (isEnterprise && urlFragment === '' ? !!body.data.totalEmployees ? Number.parseFloat(body.data.totalEmployees) : 0 : 0)).toFixed(2);
            document.querySelector("#".concat(modalId, " .modal-footer > div:first-child > div > span:nth-child(2)")).textContent = amountDueSold;
            document.querySelectorAll('#paiement-dettes .modal-footer > div:first-child > div > span:not(:first-child):not(:nth-child(2))').forEach(function (span) {
              isEnterprise ? span.removeAttribute('hidden') : span.setAttribute('hidden', 'hidden');
            });
            document.querySelector('#enterprise-debts').textContent = (isEnterprise ? total : 0).toFixed(2);
            document.querySelector('#employees-debts').textContent = (isEnterprise ? !!body.data.totalEmployees ? Number.parseFloat(body.data.totalEmployees) : 0 : 0).toFixed(2);
            datatable.querySelectorAll('tbody > tr > td:nth-child(8), thead > tr > th:nth-child(8)').forEach(function (idElt) {
              idElt.setAttribute('hidden', 'hidden');
            });
            datatable.querySelectorAll('tbody > tr').forEach(function (rowElt) {
              rowElt.style.cursor = 'pointer';
            });
            datatable.querySelectorAll('tbody > tr > td:nth-child(6)').forEach(function (elt) {
              var amountDue = Number.parseFloat(elt.textContent); // Number.parseFloat(elt.parentNode.querySelector('td:nth-child(5)').textContent)

              elt.setAttribute('contenteditable', true);
              elt.addEventListener('keyup', function () {
                var eltContent = Number.parseFloat(elt.textContent);
                var pay = isNaN(eltContent) ? 0 : eltContent;
                var diff = amountDue - pay;

                if (pay >= 0 && diff >= 0) {
                  elt.parentNode.querySelector('td:nth-child(7)').textContent = diff.toFixed(2);
                } else {
                  elt.blur();
                  elt.textContent = amountDue.toFixed(2);
                  elt.parentNode.querySelector('td:nth-child(7)').textContent = 0 .toFixed(2);
                }
              });
            });
            datatable.addEventListener('selectRows.mdb.datatable', function (e) {
              var payBtn = document.getElementById('payer-dettes' + (modalId === 'paiement-dettes' ? '' : '-employees'));
              e.selectedIndexes.length > 0 ? payBtn.removeAttribute('disabled') : payBtn.setAttribute('disabled', 'disabled');
              selectedDebts = e.selectedRows;
              amountPaid = 0;
            });
          };

          datatable.addEventListener('render.mdb.datatable', setDynamicParts);
          debtsTableInstance.update({
            rows: dettes.map(function (row) {
              var newRow = _objectSpread(_objectSpread({}, row), {}, {
                dateOctroi: "".concat(new Date(row.dateOctroi.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })),
                echeance: "".concat(new Date(row.echeance.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })),
                amount: "".concat(row.amount.toFixed(2)),
                paid: "".concat((row.amount - row.sold).toFixed(2)),
                sold: "".concat(row.sold.toFixed(2)),
                remainder: "".concat(0 .toFixed(2))
              });

              if (!!urlFragment) {
                Object.assign(newRow, {
                  nomClient: nomClient
                });
              }

              return newRow;
            })
          }, {
            loading: false,
            hover: true
          });
        });
      }
    });
    document.getElementById((modalId.indexOf('employees') === -1 ? '' : 'employees-') + 'debt-search-input').addEventListener('input', function (e) {
      debtsTableInstance.search(e.target.value);
    });
  });
}

function oneTimePayment(amountPaid) {
  var suffixe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  document.getElementById("debt-amount".concat(suffixe)).addEventListener('keyup', function (event) {
    var payBtn = document.getElementById("payer-dettes".concat(suffixe));
    var checkboxes = document.querySelectorAll("#paiement-dettes".concat(suffixe, " .modal-body > .datatable .form-check-input"));
    amountPaid = Number.parseFloat(event.currentTarget.value);

    if (amountPaid > 0) {
      payBtn.removeAttribute('disabled');
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
        checkbox.setAttribute('disabled', 'disabled');
      });
    } else {
      payBtn.setAttribute('disabled', 'disabled');
      checkboxes.forEach(function (checkbox) {
        checkbox.removeAttribute('disabled');
      });
    }
  });
}

function printInvoice(printType, permissions) {
  var facture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var invoice = facture !== null && facture !== void 0 ? facture : currentInvoice;

  if (null !== invoice.id) {
    var invoiceTemplate = document.querySelector('#invoice-template');
    var invoiceTableBody = document.querySelector('#invoice-table-body');
    var invoiceFooter = document.getElementById('invoice-footer');
    var invoiceTotals = document.getElementById('invoice-totals');
    var servicesForBonus = [];
    var dateRetrait;
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    var dateTosentElt = document.querySelector('#dateretraitinput');
    var dateTosent = '';

    if (dateTosentElt !== null) {
      dateTosent = dateTosentElt.value;
    }

    fetch("".concat(baseUrl, "/facturedateretrait"), {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        factureId: invoice.id,
        date: dateTosent
      })
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (responseData) {
          var _dbInvoice$licenceId, _maison$adressePhysiq;

          var data = JSON.parse(responseData);
          var dbInvoice = data.invoice;
          var client = data.client;
          var marque = data.marque;
          var typeOuModele = data.typeOuModele;
          var numeroImmatriculation = data.numeroImmatriculation; // const kilometrage = data.kilometrage;

          var invoiceNet;
          invoice.total = dbInvoice.total;
          invoice.discount = dbInvoice.discount;
          invoice.amountPaid = dbInvoice.amountPaid;
          invoice.workforce = dbInvoice.workforce;
          invoice.workforcePercent = dbInvoice.workforcePercent;
          invoice.type = dbInvoice.type;
          invoice.paymentMode = dbInvoice.paymentMode;
          invoice.date = dbInvoice.date;
          invoiceNet = invoice.total + invoice.workforce - (client.id !== null ? invoice.discount : 0);
          dateRetrait = data.dateRetrait;
          licenceId = (_dbInvoice$licenceId = dbInvoice.licenceId) !== null && _dbInvoice$licenceId !== void 0 ? _dbInvoice$licenceId : 0; // invoiceFooter.innerHTML = `
          //     <div class="${permissions.includes('facture-controle-technique') ? 'd-flex flex-row-reverse justify-content-between align-items-center w-100' : '' }">
          //         <div class="${permissions.includes('facture-controle-technique') ? 'text-right ' : '' }w-50" id="invoice-totals"></div>
          //         ${permissions.includes('facture-controle-technique') ? '<div class="text-left w-50"><b>Règlement :&nbsp;</b>espèces</div>' : ''}
          //     </div>
          // `;

          if (permissions.includes('facture-controle-technique')) {
            document.querySelector('#invoice-client').innerHTML = "\n                                <div class=\"w-100 d-flex justify-content-between text-left border-dark\">\n                                    <div class=\"p-1 w-50 border-right\">\n                                        <div class=\"w-100 bg-yellow font-weight-bold\">".concat(maison['nomSociete'], "</div>\n                                        <div class=\"w-100\">").concat(maison['adressePhysique'], "</div>\n                                        <div class=\"w-100\">N\xB0 Imp\xF4t :&nbsp;").concat(maison['numImpot'], "&nbsp;/&nbsp;Id.Nat. :&nbsp;").concat(maison['idNationnal'], "</div>\n                                        <div class=\"w-100\">RCCM :&nbsp;").concat(maison['registreCommerce'], "</div>\n                                        <div class=\"w-100\">T\xE9l\xE9phone :&nbsp;").concat(maison['telephone'], "</div>\n                                        <div class=\"w-100\">E-mail :&nbsp;").concat(maison['mail'], "</div>\n                                    </div>\n                                    <div class=\"p-1 w-50\">\n                                        <div class=\"w-100 bg-yellow\">\n                                            <span>\xC0&nbsp;:&nbsp;</span>\n                                            <span>").concat(client.nomClient, "</span>\n                                        </div>\n                                        <div>\n                                            <span>Adresse&nbsp;:&nbsp;</span>\n                                            <span>").concat(client.adressePhys, "</span>\n                                        </div>\n                                        <div>\n                                            <span>Plaque&nbsp;:&nbsp;</span>\n                                            <span>").concat(numeroImmatriculation !== null && numeroImmatriculation !== void 0 ? numeroImmatriculation : '', "</span>\n                                        </div>\n                                        <div>\n                                            <span>V\xE9hicule&nbsp;:&nbsp;</span>\n                                            <span>").concat(marque !== null && marque !== void 0 ? marque : '', " ").concat(typeOuModele !== null && typeOuModele !== void 0 ? typeOuModele : '', "</span>\n                                        </div>\n                                        <div>\n                                            <span>T\xE9l\xE9phone&nbsp;:&nbsp;</span>\n                                            <span>").concat(client.telephone, "</span>\n                                        </div>\n                                        <div>\n                                            <span>Code&nbsp;client&nbsp;:&nbsp;</span>\n                                            <span>").concat(client.id, "</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            ");
          } else {
            document.querySelector('#invoice-client').innerHTML = "".concat(client.id === null ? '' : '<b>Client : ' + client.nomClient, "</b>");
          }

          invoiceTableBody.innerHTML = '';

          var _loop3 = function _loop3(key) {
            var unitPrice = services.find(function (s) {
              return s.serviceId === invoice.articles[key].id;
            }).unitPrice;
            var totalPrice = Number.parseInt(invoice.articles[key].nbUnites, 10) * unitPrice;
            invoiceTableBody.innerHTML += "\n                            <tr>\n                                <td class=\"".concat(permissions.includes('facture-controle-technique') ? 'border-right ' : '', "text-right\">").concat(invoice.articles[key].nbUnites, "</td>\n                                <td class=\"").concat(permissions.includes('facture-controle-technique') ? 'border-right' : '', "\">").concat(invoice.articles[key].service, "</td>\n                                ").concat(permissions.includes('facture-controle-technique') ? '<td class="border-right text-right">' + unitPrice.toFixed(2) + '</td>' : '', "\n                                <td class=\"text-right\">").concat(totalPrice.toFixed(2), "</td>\n                            </tr>\n                        ");
          };

          for (var key in invoice.articles) {
            _loop3(key);
          }

          var _loop4 = function _loop4(_key) {
            var unitPrice = services.find(function (s) {
              return s.serviceId === invoice.services[_key].id;
            }).unitPrice;
            var totalPrice = Number.parseInt(invoice.services[_key].nbUnites, 10) * unitPrice;
            invoiceTableBody.innerHTML += "\n                            <tr>\n                                <td class=\"".concat(permissions.includes('facture-controle-technique') ? 'border-right ' : '', "text-right\">").concat(invoice.services[_key].nbUnites, "</td>\n                                <td class=\"").concat(permissions.includes('facture-controle-technique') ? 'border-right' : '', "\">").concat(invoice.services[_key].service, "</td>\n                                ").concat(permissions.includes('facture-controle-technique') ? '<td class="border-right text-right">' + unitPrice.toFixed(2) + '</td>' : '', "\n                                <td class=\"text-right\">").concat(totalPrice.toFixed(2), "</td>\n                            </tr>\n                        ");
          };

          for (var _key in invoice.services) {
            _loop4(_key);
          }

          for (var idx in invoice.articles) {
            if (invoice.articles[idx].bonusApplicable) {
              servicesForBonus.push(invoice.articles[idx]);
            }
          }

          for (var _idx3 in invoice.services) {
            if (invoice.services[_idx3].bonusApplicable) {
              servicesForBonus.push(invoice.services[_idx3]);
            }
          }

          invoiceTotals.innerHTML = '';

          if (servicesForBonus.length > 0) {
            if (bonusThreshold > 1) {
              invoiceTotals.innerHTML += "<small><em>N.B.: Pour un lot de ".concat(bonusThreshold, " \xE9l\xE9ments, on vous accorde un bonus.</em></small>");
            } else if (bonusThreshold === 1) {
              invoiceTotals.innerHTML += "<small><em>N.B.: Vous b\xE9n\xE9ficiez de ".concat((bonusPercentage * 100).toFixed(2), " % de bonus pour tout achat.</em></small>");
            }
          }

          invoiceTotals.innerHTML += "\n                        <br><br>\n                        <span>Total&nbsp;:&nbsp;".concat(invoice.total.toFixed(2), "&nbsp;$</span>\n                    ");

          if ('number' === typeof invoice.discount) {
            invoiceTotals.innerHTML += "<br><em><small>R\xE9duction : ".concat(invoice.discount.toFixed(2), " $</small></em>");
          }

          if ('number' === typeof invoice.workforce && invoice.workforce > 0) {
            invoiceTotals.innerHTML += "<br><em><small>Main d'oeuvre : ".concat(invoice.workforce.toFixed(2), " $</small></em>");
          }

          invoiceTotals.innerHTML += "<br><b>Total net : ".concat(invoiceNet.toFixed(2), " $</b>");

          if (invoice.type === 'credit' && invoiceNet > invoice.amountPaid) {
            invoiceTotals.innerHTML += "<br>Avance : ".concat(invoice.amountPaid.toFixed(2), " $");
          } // if (!invoice.type.startsWith('proforma') || invoice.type !== 'cash') {


          if (pos.toLowerCase().indexOf('lavage') > -1 && !invoice.type.startsWith('proforma') || invoice.type === 'credit') {
            var today = new Date().toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            var rendezVous = new Date(dateRetrait.date);
            var rendezVousShort = rendezVous.toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            invoiceTotals.innerHTML += "<br><br><em>Rendez-vous : ".concat(rendezVous.toLocaleDateString('fr-FR', today === rendezVousShort ? {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            } : 'Aujourd\'hui'), "</em>");
          } // console.log(invoice.type);


          invoiceFooter.innerHTML = permissions.includes('facture-controle-technique') ? "\n                            <div class=\"d-flex justify-content-between w-100\">\n                                <div class=\"flex-grow-1\">\n                                    <em>\n                                        <b>Merci ".concat(invoice.type === 'proforma' ? 'de nous retourner cette facture proforma signée avec la mention "bon pour accord"' : 'pour votre confiance', "</b>\n                                    </em>\n                                </div>\n                                <div class=\"flex-grow-1 text-right\">\n                                    <em class=\"text-right\">Le centre de contr\xF4le technique</em>\n                                </div>\n                            </div>\n                        ") : "\n                            Fait par : ".concat(user, "<br>\n                            <b>Date : ").concat(new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          }), "</b>\n                        ");
          invoiceTemplate.removeAttribute('hidden');
          printJS({
            printable: 'invoice-template',
            type: 'html',
            header: "\n                            <div id=\"invoice-header\">\n                                ".concat(maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise">' : '<h1>' + maison['nomSociete'] + '</h1>', "\n                                <div>\n                                    <small><em>").concat(!!maison['registreCommerce'] ? 'RCCM : ' + maison['registreCommerce'] + ', ' : '').concat(!!maison['idNationnal'] ? 'ID Nat. : ' + maison['idNationnal'] + ', ' : '').concat(!!maison['numImpot'] ? 'N° Impôt : ' + maison['numImpot'] + ', ' : '').concat(!!maison['autorisationFct'] ? 'Autorisation : ' + maison['autorisationFct'] : '', "</em></small><br>\n                                    <small><em>").concat((_maison$adressePhysiq = maison['adressePhysique']) !== null && _maison$adressePhysiq !== void 0 ? _maison$adressePhysiq : '').concat(!!maison['telephone'] ? ', ' + maison['telephone'] : '').concat(!!maison['mail'] ? ', ' + maison['mail'] : '').concat(!!maison['site'] ? ', ' + maison['site'] : '', "</em></small>\n                                </div>\n                                <h3>").concat(printType, " N\xB0").concat(invoice.id).concat(invoice.type === 'proforma' ? printType === 'FACTURE' ? ' (PROFORMA)' : '' : '', "</h3>\n                            </div>\n                        "),
            css: ['assets/styles/print-invoice.css']
          });
          currentInvoice = {
            id: null,
            client: {
              id: null
            },
            articles: {},
            services: {},
            total: 0,
            workforce: 0,
            discount: 0
          };
          invoiceTemplate.setAttribute('hidden', 'hidden');
        });
      }
    });
  } else {
    showAlert('Aucune facture à imprimer !', 'warning', false);
  }
}

function cloturer(event) {
  var divToPrint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var headers = new Headers();
  event.target.removeAttribute('hidden');
  headers.append('Content-Type', 'application/json');
  fetch("".concat(baseUrl, "/sales/clotures/new"), {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(clotureElts)
  }).then(function (resp) {
    if (resp.ok) {
      resp.text().then(function (data) {
        var responseBody = JSON.parse(data);
        cloture = responseBody.data;
        showAlert(responseBody.message, 'success');

        if (!!divToPrint) {
          $.print(divToPrint);
        }
      });
    }
  });
}

function populatechartboad(invoice) {
  var invoiceId = invoice.id;
  fetch("".concat(baseUrl, "/factures/").concat(invoiceId, "/populate/cartboard"), {
    method: 'GET'
  }).then(function (resp) {
    if (resp.ok) {
      resp.text().then(function (data) {
        var invoiceData = JSON.parse(data).data;
        var workforceElt = document.querySelector('#workforce');
        var discountElt = document.querySelector('#discount');

        for (var idx in currentInvoice.services) {
          var service = currentInvoice.services[idx];
          currentInvoice = addToCart(service.serviceId, 0 - Math.abs(service.quantity), currentInvoice);
        }

        for (var _idx4 in currentInvoice.articles) {
          var article = currentInvoice.articles[_idx4];
          currentInvoice = addToCart(article.serviceId, 0 - Math.abs(article.quantity), currentInvoice);
        }

        document.querySelectorAll('#cart > tbody > tr').forEach(function (rowElt) {
          rowElt.parentNode.removeChild(rowElt);
        });
        invoice = {
          id: invoiceId,
          articles: {},
          services: {},
          total: 0,
          discount: 0
        }; // Update total elements

        document.querySelector('#total').textContent = '$0.00';

        if (null !== discountElt) {
          discountElt.textContent = '$0.00';
        }

        if (null !== workforceElt) {
          workforceElt.textContent = '$0.00';
        }

        document.querySelector('#net').textContent = '$0.00';
        invoice.type = invoiceData.typeFacture;
        invoice.workforce = invoiceData.workforce;
        invoice.workforcePercent = invoiceData.workforcePercent;
        Object.assign(currentInvoice, invoice);
        updateClientDetails(currentInvoice);
        invoiceData.services.forEach(function (serv) {
          currentInvoice = addToCart(serv.serviceId, Math.abs(serv.quantity), currentInvoice);
        });
      });
    }
  });
}

function updateClientDetails(invoice) {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  fetch("".concat(baseUrl, "/factures/updatetotalelements/").concat(invoice.id), {
    method: 'GET',
    headers: headers
  }).then(function (resp) {
    if (resp.ok) {
      resp.text().then(function (jsonData) {
        var _data$licenceId;

        var data = JSON.parse(jsonData);
        var clientInput = document.querySelector('#client-autocomplete > input');
        var c = clients.find(function (client) {
          return client.id === ('string' === typeof data.clientId ? Number.parseInt(data.clientId, 10) : data.clientId);
        }); // clientInput.focus();

        clientInput.value = ''; // clientInput.blur();

        currentInvoice.client = typeof c === 'undefined' ? {
          id: null,
          nomClient: 'Client anonyme',
          totalFactures: 0,
          totalBonus: 0.00
        } : c;
        currentInvoice.client.totalFactures = isNaN(currentInvoice.client.totalFactures) || 'undefined' === currentInvoice.client.totalFactures || null === currentInvoice.client.totalFactures ? 0 : 'string' === typeof currentInvoice.client.totalFactures ? Number.parseInt(currentInvoice.client.totalFactures, 10) : currentInvoice.client.totalFactures;
        currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus || null === currentInvoice.client.totalBonus ? 0 : 'string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus;
        document.querySelector('#customerName').textContent = currentInvoice.client.nomClient;
        document.querySelector('#total-factures').textContent = currentInvoice.client.totalFactures;
        document.querySelector('#total-bonus').textContent = currentInvoice.client.totalBonus.toFixed(2);
        invoice.licenceId = (_data$licenceId = data.licenceId) !== null && _data$licenceId !== void 0 ? _data$licenceId : 0;
        licenceId = invoice.licenceId;
      });
    }
  }); // return {invoice, client};
}

function printReceipt() {
  var receiptTemplate = document.querySelector('#debt-payment-receipt').content;
  receiptTemplate.querySelector('.receipt-body > div:first-child > div:last-child > div:last-child').textContent = currentInvoice.client.nomClient;
  receiptTemplate.querySelector('.receipt-details > div:first-child > div:last-child').textContent = amountPaid;
  receiptTemplate.querySelector('.receipt-details > div:last-child > div:last-child').textContent = amountDueSold - amountPaid;
  printReceiptModal.hide();
  printElementsWithHead(document.importNode(receiptTemplate, true));
}

function newControle() {
  var options = '';
  var optionsArticle = '';
  var vehicleSelect = document.querySelector('#vehicule-controle');
  var articleSelect = document.querySelector('#article-controle');
  vehicles.forEach(function (v) {
    options += "<option value=\"".concat(v.id, "\"").concat(Number.parseInt(vehicleSelect.value) === v.id ? ' selected' : '', ">").concat(v.genre, " (").concat(v.numeroImmatriculation, ")</option>");
  });
  services.filter(function (service) {
    return service.type === 2;
  }).forEach(function (article) {
    optionsArticle += "<option value=\"".concat(article.serviceId, "\"").concat(Number.parseInt(articleSelect.value) === article.serviceId ? ' selected' : '', ">").concat(article.name, "</option>");
  });
  vehicleSelect.innerHTML = options;
  articleSelect.innerHTML = optionsArticle;
  newControleModal.show();
}

function newExpertise() {
  var options = '';
  var vehicleSelect = document.querySelector('#vehicule-expertise');
  vehicles.forEach(function (v) {
    options += "<option value=\"".concat(v.id, "\"").concat(Number.parseInt(vehicleSelect.value) === v.id ? ' selected' : '', ">").concat(v.genre, " (").concat(v.numeroImmatriculation, ")</option>");
  });
  vehicleSelect.innerHTML = options; // vehicleSelect.dataset.filter = 'true';

  newExpertiseModal.show();
}

function newControleGarage() {
  if (document.querySelector('#pill-tab-ct').classList.value.indexOf('active') > -1) {
    newControle();
  } else if (document.querySelector('#pill-tab-ev').classList.value.indexOf('active') > -1) {
    newExpertise();
  }
}

function printDailyReport(e) {
  // const parent = e.currentTarget.parentNode;
  // const mask = document.createElement('div');
  // parent.appendChild(mask);
  if (permissions.includes('rapport')) {
    fetch("".concat(baseUrl, "/invoices/dailyreport"), {
      method: 'GET',
      headers: new Headers({
        'X-Requested-With': 'XMLHttpRequest'
      })
    }).then(function (resp) {
      if (resp.ok) {
        resp.text().then(function (data) {
          var _totalInvoices, _totalInvoiceAdvances, _totalInvoiceSolds, _totalInvoiceAdvances2, _totalDebtPayments, _ref;

          var _JSON$parse$data = JSON.parse(data).data,
              invoices = _JSON$parse$data.invoices,
              debtPayments = _JSON$parse$data.debtPayments,
              stock = _JSON$parse$data.stock;
          var dailyReport = document.querySelector('#daily-report');
          var index = 0;
          var totalInvoices = 0;
          var totalDebtPayments = 0;
          var totalInvoiceAdvances = 0;
          var totalInvoiceSolds = 0;
          var procurements = '';
          var dailyInvoices = "\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\" colspan=\"7\">Factures \xE9mises</th>\n                                </tr>\n                                <tr>\n                                    <th class=\"text-right\">#</th>\n                                    <th>Client</th>\n                                    <th>Montant</th>\n                                    <th>Avance</th>\n                                    <th>Reste \xE0 payer</th>\n                                    <th>Rendez-vous de paiment</th>\n                                    <th>N\xB0 de t\xE9l\xE9phone</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                    ";
          var dailyDebtPayments = "\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\" colspan=\"4\">Factures pay\xE9es</th>\n                                </tr>\n                                <tr>\n                                    <th class=\"text-right\">#</th>\n                                    <th>Client</th>\n                                    <th>N\xB0 Facture</th>\n                                    <th>Montant</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                    ";
          var dailyInvoiceAdvances = "\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th class=\"text-center\" colspan=\"4\">Avances sur factures \xE9mises</th>\n                                </tr>\n                                <tr>\n                                    <th class=\"text-right\">#</th>\n                                    <th>Client</th>\n                                    <th>N\xB0 Facture</th>\n                                    <th>Montant</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                    ";

          if (stock.procurements.length > 0) {
            procurements = "\n                            <table>\n                                <thead>\n                                    <tr>\n                                        <th class=\"text-center\" colspan=\"7\">Rapport stock</th>\n                                    </tr>\n                                    <tr>\n                                        <th class=\"text-right\">#</th>\n                                        <th>Article</th>\n                                        <th>Entr\xE9es</th>\n                                        <th>Sorties</th>\n                                        <th>Ventes</th>\n                                        <th>Aujourd'hui</th>\n                                        <th>Solde</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                        ";
          }

          invoices.forEach(function (invoice, idx) {
            var _invoice$amountPaid, _invoice$total, _invoice$amountPaid2;

            var invoiceSold = invoice['total'] - ((_invoice$amountPaid = invoice['amountPaid']) !== null && _invoice$amountPaid !== void 0 ? _invoice$amountPaid : 0);
            totalInvoices += invoice['total'];
            totalInvoiceSolds += invoiceSold;
            dailyInvoices += "\n                            <tr>\n                                <td class=\"text-right\">".concat(idx + 1, "</td>\n                                <td>").concat(invoice['nomClient'], "</td>\n                                <td class=\"text-right\">$ ").concat((_invoice$total = invoice['total']) === null || _invoice$total === void 0 ? void 0 : _invoice$total.toFixed(2), "</td>\n                                <td class=\"text-right\">$ ").concat(((_invoice$amountPaid2 = invoice['amountPaid']) !== null && _invoice$amountPaid2 !== void 0 ? _invoice$amountPaid2 : 0).toFixed(2), "</td>\n                                <td class=\"text-right\">$ ").concat(invoiceSold === null || invoiceSold === void 0 ? void 0 : invoiceSold.toFixed(2), "</td>\n                                <td></td>\n                                <td>").concat(invoice['telephone'], "</td>\n                            </tr>\n                        ");

            if (invoice['amountPaid'] > 0) {
              var _invoice$amountPaid3;

              totalInvoiceAdvances += invoice['amountPaid'];
              index++;
              dailyInvoiceAdvances += "\n                                <tr>\n                                    <td class=\"text-right\">".concat(index, "</td>\n                                    <td>").concat(invoice['nomClient'], "</td>\n                                    <td>").concat(invoice['id'], "</td>\n                                    <td class=\"text-right\">$ ").concat((_invoice$amountPaid3 = invoice['amountPaid']) === null || _invoice$amountPaid3 === void 0 ? void 0 : _invoice$amountPaid3.toFixed(2), "</td>\n                                </tr>\n                            ");
            }
          });
          debtPayments.forEach(function (debtPayment, idx) {
            var _debtPayment$montantP;

            totalDebtPayments += debtPayment['montantPaye'];
            dailyDebtPayments += "\n                            <tr>\n                                <td>".concat(idx + 1, "</td>\n                                <td>").concat(debtPayment['nomClient'], "</td>\n                                <td>").concat(debtPayment['invoiceId'], "</td>\n                                <td class=\"text-right\">$ ").concat((_debtPayment$montantP = debtPayment['montantPaye']) === null || _debtPayment$montantP === void 0 ? void 0 : _debtPayment$montantP.toFixed(2), "</td>\n                            </tr>\n                        ");
          });

          if (debtPayments.length > index) {
            for (var i = 0, count = debtPayments.length - index; i < count; i++) {
              dailyInvoiceAdvances += "\n                                <tr>\n                                    <td class=\"text-center\">-</td>\n                                    <td class=\"text-center\">-</td>\n                                    <td class=\"text-center\">-</td>\n                                    <td class=\"text-center\">-</td>\n                                </tr>      \n                            ";
            }
          }

          if (debtPayments.length < index) {
            for (var _i2 = 0, _count = index - debtPayments.length; _i2 < _count; _i2++) {
              dailyDebtPayments += "\n                                <tr>\n                                    <td class=\"text-center\">-</td>\n                                    <td class=\"text-center\">-</td>\n                                    <td class=\"text-center\">-</td>\n                                    <td class=\"text-center\">-</td>\n                                </tr>      \n                            ";
            }
          }

          if (stock.procurements.length > 0) {
            var groupedProcurements = groupArrayOfObjects(stock.procurements, 'article');
            var groupedSales;
            var idx = 0;

            if (stock.sales.length > 0) {
              groupedSales = groupArrayOfObjects(stock.sales, 'article');
            }

            if (stock.todaySales.length > 0) {
              groupedTodaySales = groupArrayOfObjects(stock.todaySales, 'article');
            }

            if (stock.outOfStock.length > 0) {
              groupedOutOfStock = groupArrayOfObjects(stock.outOfStock, 'article');
            }

            var _loop5 = function _loop5(key) {
              var _stock$posDetails$fin;

              idx++;
              procurements += "\n                                <tr>\n                                    <td class=\"text-right\">".concat(idx, "</td>\n                                    <td>").concat(key, "</td>\n                                    <td class=\"text-right\">").concat(groupedProcurements[key].reduce(function (accu, next) {
                return accu + next['quantity'];
              }, 0), "</td>\n                            ");
              procurements += '<td class="text-right">' + (typeof groupedOutOfStock !== 'undefined' && Object.keys(groupedOutOfStock).indexOf(key) > -1 ? groupedOutOfStock[key].reduce(function (accu, next) {
                return accu + Math.abs(next['quantity']);
              }, 0) : 0) + '</td>';
              procurements += '<td class="text-right">' + (typeof groupedSales !== 'undefined' && Object.keys(groupedSales).indexOf(key) > -1 ? groupedSales[key].reduce(function (accu, next) {
                return accu + Math.abs(next['quantity']);
              }, 0) : 0) + '</td>';
              procurements += '<td class="text-right">' + (typeof groupedTodaySales !== 'undefined' && Object.keys(groupedTodaySales).indexOf(key) > -1 ? groupedTodaySales[key].reduce(function (accu, next) {
                return accu + Math.abs(next['quantity']);
              }, 0) : 0) + '</td>';
              procurements += "\n                                    <td class=\"text-right\">".concat((_stock$posDetails$fin = stock.posDetails.find(function (detail) {
                return detail.article === key;
              })) === null || _stock$posDetails$fin === void 0 ? void 0 : _stock$posDetails$fin.quantity, "</td>\n                                </tr>\n                            ");
            };

            for (var key in groupedProcurements) {
              _loop5(key);
            }

            procurements += "\n                                </tbody>\n                            </table>\n                        ";
          }

          dailyInvoices += "\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                    <td colspan=\"2\"><b>TOTAL (1)</b></td>\n                                    <td class=\"text-right\"><b>$ ".concat((_totalInvoices = totalInvoices) === null || _totalInvoices === void 0 ? void 0 : _totalInvoices.toFixed(2), "</b></td>\n                                    <td class=\"text-right\"><b>$ ").concat((_totalInvoiceAdvances = totalInvoiceAdvances) === null || _totalInvoiceAdvances === void 0 ? void 0 : _totalInvoiceAdvances.toFixed(2), "</b></td>\n                                    <td class=\"text-right\"><b>$ ").concat((_totalInvoiceSolds = totalInvoiceSolds) === null || _totalInvoiceSolds === void 0 ? void 0 : _totalInvoiceSolds.toFixed(2), "</b></td>\n                                    <td class=\"text-center\"><b>-</b></td>\n                                    <td class=\"text-center\"><b>-</b></td>\n                                </tr>\n                            </tfoot>\n                        </table><br>\n                    ");
          dailyInvoiceAdvances += "\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                    <td colspan=\"3\"><b>TOTAL (3)</b></td>\n                                    <td class=\"text-right\"><b>$ ".concat((_totalInvoiceAdvances2 = totalInvoiceAdvances) === null || _totalInvoiceAdvances2 === void 0 ? void 0 : _totalInvoiceAdvances2.toFixed(2), "</b></td>\n                                </tr>\n                            </tfoot>\n                        </table><br>\n                    ");
          dailyDebtPayments += "\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                    <td colspan=\"3\"><b>TOTAL (2)</b></td>\n                                    <td class=\"text-right\"><b>$ ".concat((_totalDebtPayments = totalDebtPayments) === null || _totalDebtPayments === void 0 ? void 0 : _totalDebtPayments.toFixed(2), "</b></td>\n                                </tr>\n                            </tfoot>\n                        </table>\n                    ");
          dailyReport.innerHTML = dailyInvoices + "<div class=\"d-flex flex-column mb-5\" id=\"daily-payments-section\"><div class=\"d-flex flex-row justify-content-between\" id=\"daily-payments\">" + dailyDebtPayments + dailyInvoiceAdvances + "</div><div class=\"border border-dark w-100 mt-2\" id=\"daily-report-totals-2-3\"><b>TOTAUX (2) + (3) : $ ".concat((_ref = totalDebtPayments + totalInvoiceAdvances) === null || _ref === void 0 ? void 0 : _ref.toFixed(2), "</b></div>") + '</div>' + procurements;
          dailyReport.innerHTML += "<br><br><div class=\"float-right\">".concat(user, "</div>");
          dailyReport.removeAttribute('hidden');
          printJS({
            printable: 'daily-report',
            type: 'html',
            header: "\n                            <div class=\"d-flex justify-content-between\" id=\"daily-report-header\">\n                                <div id=\"daily-report-logo\">\n                                    ".concat(maison['logo'] !== null ? '<img src="/uploads/logos/' + maison['logo'] + '" alt="Logo entreprise" class="w-25">' : '<h2 class="w-25">' + maison['nomSociete'] + '</h2>', "\n                                </div>\n                                <div>").concat(new Date().toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }), "</div>\n                            </div>\n                            <h4 class=\"text-center font-weight-bold\">Rapport journalier <span>").concat(pos, "</span></h4>\n                        "),
            css: ['public/build/app.css', 'assets/styles/print-daily-report.css']
          });
          dailyReport.setAttribute('hidden', 'hidden');
        });
      }
    });
  } else {
    showAlert('Vous n\'êtes pas autorisé à voir le rapport.', 'warning', false);
  }
}

function logout() {
  window.location.assign("".concat(baseUrl, "/logout"));
}

function groupArrayOfObjects(list, key) {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

;

function refreshFetchAllInterval() {
  clearInterval(fetchAll);
  setInterval(fetchAll, 10000);
}

document.querySelector('#vehicles-modal').addEventListener('shown.bs.modal', function () {
  refreshFetchAllInterval();
});
document.querySelector('#vehicles-modal').addEventListener('hidden.bs.modal', function () {
  refreshFetchAllInterval();
});
window.addEventListener('DOMContentLoaded', function () {
  var jsonSessionInvoice = sessionStorage.getItem('invoice');

  if (null !== jsonSessionInvoice) {
    var _sessionInvoice$licen, _sessionInvoice$detai, _sessionInvoice$detai2;

    var sessionInvoice = JSON.parse(jsonSessionInvoice);

    if (null !== sessionInvoice.client) {
      client = clients.find(function (c) {
        return c.id === sessionInvoice.client;
      });
    }

    licenceId = (_sessionInvoice$licen = sessionInvoice.licenceId) !== null && _sessionInvoice$licen !== void 0 ? _sessionInvoice$licen : 0;
    currentInvoice.id = sessionStorage.getItem('invoiceId');
    currentInvoice.type = sessionInvoice.saleType;
    currentInvoice.date = sessionInvoice.date;
    currentInvoice.total = sessionInvoice.total;
    currentInvoice.discount = sessionInvoice.discount;
    currentInvoice.workforce = sessionInvoice.workforce;
    currentInvoice.workforcePercent = sessionInvoice.workforcePercent;
    currentInvoice.paymentMode = sessionInvoice.paymentMode;
    currentInvoice.articles = (_sessionInvoice$detai = sessionInvoice.details) === null || _sessionInvoice$detai === void 0 ? void 0 : _sessionInvoice$detai.articles;
    currentInvoice.services = (_sessionInvoice$detai2 = sessionInvoice.details) === null || _sessionInvoice$detai2 === void 0 ? void 0 : _sessionInvoice$detai2.services;
    sessionInvoice.id = currentInvoice.id; // currentInvoice = { id: null, client: { id: null }, articles: {}, services: {}, total: 0, workforce: 0, discount: 0 };

    if (currentInvoice.type !== 'hold') {
      // printInvoice(permissions.includes('pv-controle-technique') ? 'REÇU' : 'FACTURE', permissions, currentInvoice);
      printInvoice('FACTURE', permissions, currentInvoice);
    }

    currentInvoice.total = 0;
    sessionStorage.removeItem('invoice');
    sessionStorage.removeItem('invoiceId');
  }
});
new mdb.Autocomplete(clientAutocomplete, {
  filter: clientsFilter,
  displayValue: function displayValue(value) {
    currentInvoice.client = value;
    currentInvoice.client.totalFactures = isNaN(currentInvoice.client.totalFactures) || 'undefined' === currentInvoice.client.totalFactures || null === currentInvoice.client.totalFactures ? 0 : 'string' === typeof currentInvoice.client.totalFactures ? Number.parseInt(currentInvoice.client.totalFactures, 10) : currentInvoice.client.totalFactures;
    currentInvoice.client.totalBonus = isNaN(currentInvoice.client.totalBonus) || 'undefined' === currentInvoice.client.totalBonus || null === currentInvoice.client.totalBonus ? 0 : 'string' === typeof currentInvoice.client.totalBonus ? Number.parseFloat(currentInvoice.client.totalBonus) : currentInvoice.client.totalBonus; // const client = value;

    document.querySelector('#total-factures').textContent = currentInvoice.client.totalFactures;
    document.querySelector('#total-bonus').textContent = currentInvoice.client.totalBonus.toFixed(2);
    return value.nomClient;
  }
});
new mdb.Autocomplete(serviceAutocomplete, {
  filter: servicesFilter,
  displayValue: function displayValue(value) {
    currentService = value;
    return value.name;
  }
});
[clientAutocomplete, serviceAutocomplete].forEach(function (elt, idx) {
  elt.addEventListener('itemSelect.mdb.autocomplete', function (event) {
    if (idx === 0) {
      setTimeout(function () {
        var isDiscountApplicable = currentInvoice.client.id !== null && currentInvoice.client.discountApplicable;
        var discountAmount = (isDiscountApplicable ? applyDiscount(currentInvoice, discountables) : removeDiscount(currentInvoice)).discount;
        var workforceAmount = 'number' === typeof workforcePercent && workforcePercent > 0 ? workforcePercent * currentInvoice.total : 0;
        var discountElt = document.querySelector('#discount');
        var workforceElt = document.querySelector('#workforce');
        document.querySelector('#customerName').textContent = currentInvoice.client.nomClient;
        enableCustomerDetailsButtons('customerDetails', 'customerPurchases');

        if (null !== discountElt) {
          discountElt.textContent = '$' + discountAmount.toFixed(2);
        }

        if (null !== workforceElt) {
          workforceElt.textContent = '$' + workforceAmount.toFixed(2);
        }

        document.querySelector('#net').textContent = '$' + (currentInvoice.total + workforceAmount - discountAmount).toFixed(2);
      }, 10);
    } else {
      setTimeout(function () {
        currentInvoice = addToCart(currentService.serviceId, 1, currentInvoice);
      }, 10);
    }

    setTimeout(function () {
      var input = elt.querySelector('input');
      emptyInput(input);
      input.blur();
    }, 1000);
  });
});
displayGrid(grid, gridContent.content);

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.now.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-float.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-float.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseFloat != parseFloat }, {
  parseFloat: parseFloat
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-int.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-int.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var $startsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js","vendors-node_modules_core-js_internals_string-trim_js-node_modules_core-js_modules_es_array_f-3cc149","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-c35c4f"], () => (__webpack_exec__("./assets/sale.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLm5vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIl0sIm5hbWVzIjpbInRvdGFsIiwid29ya2ZvcmNlIiwiZGlzY291bnQiLCJuZXQiLCJjbGllbnQiLCJpZCIsImxpY2VuY2VJZCIsImN1cnJlbnRTZXJ2aWNlIiwiY3VycmVudEludm9pY2UiLCJhcnRpY2xlcyIsInNlcnZpY2VzIiwic2VsZWN0ZWREZWJ0cyIsImFtb3VudFBhaWQiLCJhbW91bnREdWVTb2xkIiwiY2xvdHVyZUVsdHMiLCJsaWNlbnNlcyIsImV4cGVydGlzZXMiLCJjbGllbnRBdXRvY29tcGxldGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXJ2aWNlQXV0b2NvbXBsZXRlIiwiZ3JpZCIsImdyaWRDb250ZW50IiwibmV3Q3VzdG9tZXJGb3JtIiwiZGVwZW5zZU1vZGFsIiwibWRiIiwiTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInByaW50UmVjZWlwdE1vZGFsIiwibmV3Q29udHJvbGVNb2RhbCIsIm5ld0V4cGVydGlzZU1vZGFsIiwiZmV0Y2hBbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwiZmV0Y2hBbGwiLCJjbGllbnRzRmlsdGVyIiwidmFsdWUiLCJjbGllbnRzIiwiZmlsdGVyIiwibm9tQ2xpZW50IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNlcnZpY2VzRmlsdGVyIiwic2VydmljZSIsIm5hbWUiLCJkaXNhYmxlQ3VzdG9tZXJEZXRhaWxzQnV0dG9ucyIsImRldGFpbHNCdG4iLCJwdXJjaGFzZXNCdG4iLCJkaXNhYmxlZCIsImVuYWJsZUN1c3RvbWVyRGV0YWlsc0J1dHRvbnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzaG93TGF0ZXN0VmVoaWNsZXMiLCJ2ZWhpY2xlc0xpc3QiLCJ2ZWhpY2xlc0xpc3RFbHQiLCJzbGljZSIsImlubmVySFRNTCIsImlkeCIsInBvcHVsYXRlTGljZW5zZXNUYWJsZSIsImRhdGEiLCJkYXRhdGFibGUiLCJyb3dzIiwibGVuZ3RoIiwicHVzaCIsIk51bWJlciIsInBhcnNlSW50IiwibnVtZXJvUHYiLCJudW1lcm9JbW1hdHJpY3VsYXRpb24iLCJnZW5yZSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwicHJvY2hhaW5ldmlzaXRlIiwiZGF0YXNldCIsIm1heEhlaWdodCIsImN0RGF0YXRhYmxlSW5zdGFuY2UiLCJEYXRhdGFibGUiLCJjb2x1bW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZWFyY2giLCJ0YXJnZXQiLCJwb3B1bGF0ZUV4cGVydGlzZXNUYWJsZSIsInVzZXJuYW1lIiwiZXZEYXRhdGFibGVJbnN0YW5jZSIsInNob3dWZWhpY2xlc01vZGFsIiwib3B0aW9ucyIsInNwaW5uZXIiLCJuZXdWZWhpY2xlTW9kYWwiLCJjbGllbnRTZWxlY3QiLCJ2ZWhpY2xlU2VsZWN0IiwiZm9yRWFjaCIsImMiLCJmZXRjaCIsImJhc2VVcmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiSGVhZGVycyIsInRoZW4iLCJyZXNwIiwib2siLCJ0ZXh0IiwicmVzcG9uc2VCb2R5IiwidmVoaWNsZXMiLCJKU09OIiwicGFyc2UiLCJ2Iiwic2V0QXR0cmlidXRlIiwic2hvdyIsInNhdmVWZWhpY2xlIiwicGF5bG9hZCIsIkZvcm1EYXRhIiwiZW50cmllcyIsInBhaXIiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5Iiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJ2ZWhpY2xlIiwidW5zaGlmdCIsInNob3dBbGVydCIsIm1lc3NhZ2UiLCJzYXZlUHYiLCJkaXZ0b3ByaW50IiwiY3JlYXRlRWxlbWVudCIsImZpbmQiLCJ2ZWhpY3VsZSIsIm1hcnF1ZSIsInR5cGVPdU1vZGVsZSIsInNvbW1lc2VudCIsImNyZWF0ZWRhdCIsImRvbmVieSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJoaWRlIiwicHJpbnRFbGVtZW50c1dpdGhIZWFkIiwic2F2ZUV4cGVydGlzZSIsInNldFBoeXNpY2FsUGVyc29uSW5wdXRzIiwiYXBwZW5kQ2hpbGQiLCJpbXBvcnROb2RlIiwiY29udGVudCIsInJlbW92ZVBoeXNpY2FsUGVyc29uSW5wdXRzIiwiZGlzcGxheUdyaWQiLCJjb250YWluZXIiLCJjYXRlZ29yaWVzRnJhZ21lbnQiLCJzZXJ2aWNlc0ZyYWdtZW50IiwiaSIsImNhdGVnb3JpZXMiLCJzZXJ2aWNlRXhpc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlcnYiLCJzZXJ2aWNlSWQiLCJzIiwiYWRkVG9DYXJ0Iiwic2VsbCIsInByaW50SW52b2ljZSIsInBlcm1pc3Npb25zIiwiZWRpdEJ0biIsInNlcnZpY2VUeXBlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiZGVwb3REZXRhaWxzSWQiLCJxdWFudGl0eSIsInR5cGVDbGllbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ0b0V4Y2x1ZGUiLCJ0ZXh0Q29udGVudCIsInByb3AiLCJpbmRleE9mIiwicHJvcElucHV0Iiwib3B0aW9uIiwiZW1wbG95ZXVyIiwicmVtb3ZlQ2hpbGQiLCJjYXRlZ29yeSIsImZvcm1EYXRhIiwiYXBwZW5kIiwidmVyYiIsImRpc2NvdW50QXBwbGljYWJsZSIsInRvdGFsRmFjdHVyZXMiLCJpc05hTiIsInRvdGFsQm9udXMiLCJwYXJzZUZsb2F0IiwiYWxlcnQiLCJzZXhlIiwidG9GaXhlZCIsInJlc3BCb2R5IiwiY29uc29sZSIsImxvZyIsInF0eSIsImdldEl0ZW0iLCJwYXJlbnROb2RlIiwiY2FzaCIsImRldHRlcyIsImNsb3R1cmUiLCJkZWJ0UGF5bWVudE1vZGFsIiwidmVudGVzIiwiY3JlZGl0cyIsInBhaWVtZW50c0RldHRlcyIsImRlcGVuc2VzIiwicGFpZW1lbnRzUGFyQm9udXMiLCJpbnZvaWNlc1RhYmxlSW5zdGFuY2UiLCJsYWJlbCIsImZpZWxkIiwibG9hZGluZyIsInNldEFjdGlvbnMiLCJyb3dFbHQiLCJjdXJzb3IiLCJpbnZvaWNlSXRlbXMiLCJpbmRleCIsInBvcHVsYXRlY2hhcnRib2FkIiwidHlwZSIsInR5cGVGYWN0dXJlIiwidXBkYXRlIiwibWFwIiwicm93IiwiZGF0ZUZhY3QiLCJhbW91bnQiLCJob3ZlciIsImVsdCIsImluaXREZWJ0UGF5bWVudCIsIm9uZVRpbWVQYXltZW50Iiwic2VydmljZUV4aXN0ZW5jZSIsImFyciIsImZuIiwiZW1wdHlJbnB1dCIsImlucHV0IiwiaW52b2ljZSIsImlzRGlzY291bnRBcHBsaWNhYmxlIiwibmFtZXMiLCJuIiwia2V5IiwicXR5RWx0IiwicHJpY2VFbHQiLCJ1bml0UHJpY2UiLCJjYXJ0SXRlbSIsImFuY2VzdG9yIiwiZGlzY291bnRhYmxlcyIsIk1hdGgiLCJhYnMiLCJkZWZsYXRlZFByaWNlIiwidXBkYXRlVG90YWxFbGVtZW50cyIsInNlcnZpY2VFbHQiLCJoYXNPd25Qcm9wZXJ0eSIsIm5iVW5pdGVzIiwiYm9udXNBcHBsaWNhYmxlIiwiZWRpdFF1YW50aXR5IiwicHJvbXB0IiwiYXZhaWxhYmxlIiwiZGlzY291bnRBbW91bnQiLCJkaXNjb3VudEVsdCIsIndvcmtmb3JjZUVsdCIsIndvcmtmb3JjZUFtb3VudCIsIndvcmtmb3JjZVBlcmNlbnQiLCJyZXNldENhcnQiLCJyZW1vdmVCdG4iLCJjbGljayIsImFtb3VudEVsdCIsImhpZGRlbiIsImFwcGx5RGlzY291bnQiLCJhcnRpY2xlIiwicmVtb3ZlRGlzY291bnQiLCJwcm9jZWVkVG9TZWxsIiwic2FsZVR5cGUiLCJwYXltZW50TW9kZSIsIm5ldEFtb3VudCIsInNhbGVNb2RhbCIsInNhbGVNb2RhbENvbnRhaW5lciIsIm1vbnRhbnRQYXllIiwic2FsZVRvdGFsIiwiZGF0ZVRvc2VudEVsdCIsImRhdGVUb3NlbnQiLCJub3ciLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwic291cmNlSW52b2ljZUlkIiwiZGV0YWlscyIsImxpY2VuY2VpZCIsInNhbGVCdXR0b24iLCJwYXJzZWRCb2R5IiwidG90YWxGYWN0dXJlc0VsdCIsImNsaWVudElkIiwiaW52b2ljZUlkIiwidG90YWxCb251c0VsdCIsImJvbnVzZXMiLCJyZWR1Y2UiLCJhY2N1IiwibmV4dCIsInN1ZmZpeGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzYWxlTW9kYWxFbHQiLCJwYXltZW50TW9kZVNlbGVjdCIsInNhbGVUb3RhbEVsdCIsInVwZGF0ZVNhbGVUb3RhbCIsInNldFRpbWVvdXQiLCJyZW1vdmVJdGVtIiwicHJvZm9ybWFNb2RhbEVsdCIsInByb2Zvcm1hTW9kYWwiLCJ3b3JrZm9yY2VWYWx1ZSIsInByb2Zvcm1hTW9kYWxDb250YWluZXIiLCJwYXllckRldHRlcyIsImVtcGxveWVzIiwic3Bpbm5lckVsdCIsImRlYnRzIiwiZGVidCIsInJvd0luZGV4IiwibW9kYWxJZCIsInVybEZyYWdtZW50IiwicGF5Rm9yRW1wbG95ZWVzQnRuIiwiaXNFbnRlcnByaXNlIiwic29ydCIsImRlYnRzVGFibGVJbnN0YW5jZSIsInNvbGQiLCJzZXREeW5hbWljUGFydHMiLCJ0b3RhbEVtcGxveWVlcyIsInNwYW4iLCJpZEVsdCIsImFtb3VudER1ZSIsImVsdENvbnRlbnQiLCJwYXkiLCJkaWZmIiwiYmx1ciIsInBheUJ0biIsInNlbGVjdGVkSW5kZXhlcyIsInNlbGVjdGVkUm93cyIsIm5ld1JvdyIsImRhdGVPY3Ryb2kiLCJlY2hlYW5jZSIsInBhaWQiLCJyZW1haW5kZXIiLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJjaGVja2VkIiwicHJpbnRUeXBlIiwiZmFjdHVyZSIsImludm9pY2VUZW1wbGF0ZSIsImludm9pY2VUYWJsZUJvZHkiLCJpbnZvaWNlRm9vdGVyIiwiaW52b2ljZVRvdGFscyIsInNlcnZpY2VzRm9yQm9udXMiLCJkYXRlUmV0cmFpdCIsImZhY3R1cmVJZCIsInJlc3BvbnNlRGF0YSIsImRiSW52b2ljZSIsImludm9pY2VOZXQiLCJtYWlzb24iLCJhZHJlc3NlUGh5cyIsInRlbGVwaG9uZSIsInRvdGFsUHJpY2UiLCJib251c1RocmVzaG9sZCIsImJvbnVzUGVyY2VudGFnZSIsInBvcyIsInN0YXJ0c1dpdGgiLCJ0b2RheSIsInJlbmRlelZvdXMiLCJyZW5kZXpWb3VzU2hvcnQiLCJ1c2VyIiwicHJpbnRKUyIsInByaW50YWJsZSIsImhlYWRlciIsImNzcyIsImNsb3R1cmVyIiwiZGl2VG9QcmludCIsIiQiLCJwcmludCIsImludm9pY2VEYXRhIiwidXBkYXRlQ2xpZW50RGV0YWlscyIsImpzb25EYXRhIiwiY2xpZW50SW5wdXQiLCJwcmludFJlY2VpcHQiLCJyZWNlaXB0VGVtcGxhdGUiLCJuZXdDb250cm9sZSIsIm9wdGlvbnNBcnRpY2xlIiwiYXJ0aWNsZVNlbGVjdCIsIm5ld0V4cGVydGlzZSIsIm5ld0NvbnRyb2xlR2FyYWdlIiwiY2xhc3NMaXN0IiwicHJpbnREYWlseVJlcG9ydCIsImludm9pY2VzIiwiZGVidFBheW1lbnRzIiwic3RvY2siLCJkYWlseVJlcG9ydCIsInRvdGFsSW52b2ljZXMiLCJ0b3RhbERlYnRQYXltZW50cyIsInRvdGFsSW52b2ljZUFkdmFuY2VzIiwidG90YWxJbnZvaWNlU29sZHMiLCJwcm9jdXJlbWVudHMiLCJkYWlseUludm9pY2VzIiwiZGFpbHlEZWJ0UGF5bWVudHMiLCJkYWlseUludm9pY2VBZHZhbmNlcyIsImludm9pY2VTb2xkIiwiZGVidFBheW1lbnQiLCJjb3VudCIsImdyb3VwZWRQcm9jdXJlbWVudHMiLCJncm91cEFycmF5T2ZPYmplY3RzIiwiZ3JvdXBlZFNhbGVzIiwic2FsZXMiLCJ0b2RheVNhbGVzIiwiZ3JvdXBlZFRvZGF5U2FsZXMiLCJvdXRPZlN0b2NrIiwiZ3JvdXBlZE91dE9mU3RvY2siLCJrZXlzIiwicG9zRGV0YWlscyIsImRldGFpbCIsIndlZWtkYXkiLCJsb2dvdXQiLCJsaXN0IiwicnYiLCJ4IiwicmVmcmVzaEZldGNoQWxsSW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwianNvblNlc3Npb25JbnZvaWNlIiwic2Vzc2lvbkludm9pY2UiLCJBdXRvY29tcGxldGUiLCJkaXNwbGF5VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYixvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbENZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQywrQkFBK0Isc0pBQTREO0FBQzNGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQztBQUN6RSxjQUFjLG1CQUFPLENBQUMseUVBQXNCOztBQUU1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsdUZBQXVGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoic2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB0b3RhbCA9IDAsXHJcbiAgICB3b3JrZm9yY2UgPSAwLFxyXG4gICAgZGlzY291bnQgPSAwLFxyXG4gICAgbmV0ID0gMCxcclxuICAgIGNsaWVudCA9IHsgaWQ6IG51bGwgfSxcclxuICAgIGxpY2VuY2VJZCA9IDAsXHJcbiAgICBjdXJyZW50U2VydmljZSxcclxuICAgIGN1cnJlbnRJbnZvaWNlID0geyBpZDogbnVsbCwgY2xpZW50OiB7IGlkOiBudWxsIH0sIGFydGljbGVzOiB7fSwgc2VydmljZXM6IHt9LCB0b3RhbDogMCwgd29ya2ZvcmNlOiAwLCBkaXNjb3VudDogMCB9LFxyXG4gICAgc2VsZWN0ZWREZWJ0cyA9IFtdLFxyXG4gICAgYW1vdW50UGFpZCA9IDAsXHJcbiAgICBhbW91bnREdWVTb2xkLFxyXG4gICAgY2xvdHVyZUVsdHMgPSBbXSxcclxuICAgIGxpY2Vuc2VzID0gW10sXHJcbiAgICBleHBlcnRpc2VzID0gW11cclxuO1xyXG5cclxuY29uc3QgY2xpZW50QXV0b2NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsaWVudC1hdXRvY29tcGxldGUnKSxcclxuICAgIHNlcnZpY2VBdXRvY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VydmljZS1hdXRvY29tcGxldGUnKSxcclxuICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZCcpLFxyXG4gICAgZ3JpZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JpZENvbnRlbnQnKSxcclxuICAgIG5ld0N1c3RvbWVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdDdXN0b21lckZvcm0nKSxcclxuICAgIGRlcGVuc2VNb2RhbCA9IG5ldyBtZGIuTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0RlcGVuc2UnKSwge30pLFxyXG4gICAgcHJpbnRSZWNlaXB0TW9kYWwgPSBuZXcgbWRiLk1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLXByaW50LXJlY2VpcHQnKSwge30pLFxyXG4gICAgbmV3Q29udHJvbGVNb2RhbCA9IG5ldyBtZGIuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1jdC1tb2RhbCcpLCB7fSksXHJcbiAgICBuZXdFeHBlcnRpc2VNb2RhbCA9IG5ldyBtZGIuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1leHBlcnRpc2UtbW9kYWwnKSwge30pLFxyXG4gICAgZmV0Y2hBbGxJbnRlcnZhbCA9ICgpID0+IHNldEludGVydmFsKGZldGNoQWxsLCAxMDAwMCksXHJcbiAgICBjbGllbnRzRmlsdGVyID0gdmFsdWUgPT4gY2xpZW50cy5maWx0ZXIoY2xpZW50ID0+IGNsaWVudC5ub21DbGllbnQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSksXHJcbiAgICBzZXJ2aWNlc0ZpbHRlciA9IHZhbHVlID0+IHNlcnZpY2VzLmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2UubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSxcclxuXHJcbiAgICBkaXNhYmxlQ3VzdG9tZXJEZXRhaWxzQnV0dG9ucyA9IChkZXRhaWxzQnRuLCBwdXJjaGFzZXNCdG4pID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGRldGFpbHNCdG4pLmRpc2FibGVkID0gJ2Rpc2FibGVkJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHB1cmNoYXNlc0J0bikuZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbmFibGVDdXN0b21lckRldGFpbHNCdXR0b25zID0gKGRldGFpbHNCdG4sIHB1cmNoYXNlc0J0bikgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZGV0YWlsc0J0bikucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHVyY2hhc2VzQnRuKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dMYXRlc3RWZWhpY2xlcyA9ICh2ZWhpY2xlc0xpc3QpID0+IHtcclxuICAgICAgICBsZXQgdmVoaWNsZXNMaXN0RWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlaGljbGVzLW1vZGFsIC5tb2RhbC1jb250ZW50ID4gLm1vZGFsLWJvZHkgPiAudGFiLWNvbnRlbnQgPiAudGFiLXBhbmU6Zmlyc3QtY2hpbGQgPiBkaXY6bGFzdC1jaGlsZCA+IC5saXN0LWdyb3VwJyk7XHJcbiAgICAgICAgdmVoaWNsZXNMaXN0ID0gdmVoaWNsZXNMaXN0LnNsaWNlKDAsIDEwKTtcclxuICAgICAgICB2ZWhpY2xlc0xpc3RFbHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgMTA7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmVoaWNsZXNMaXN0W2lkeF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB2ZWhpY2xlc0xpc3RFbHQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dmVoaWNsZXNMaXN0W2lkeF1bJ2dlbnJlJ119ICgke3ZlaGljbGVzTGlzdFtpZHhdWydudW1lcm9JbW1hdHJpY3VsYXRpb24nXX0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBvcHVsYXRlTGljZW5zZXNUYWJsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YXRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N0LXBpbGwtY29udGVudCA+IC5jYXJkID4gLmRhdGF0YWJsZScpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgICAgICBsaWNlbnNlcyA9IGRhdGE7XHJcblxyXG4gICAgICAgIGlmIChsaWNlbnNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaWR4IGluIGxpY2Vuc2VzKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlci5wYXJzZUludChpZHgsIDEwKSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGljZW5zZXNbaWR4XS5udW1lcm9QdixcclxuICAgICAgICAgICAgICAgICAgICBgJHtsaWNlbnNlc1tpZHhdLm51bWVyb0ltbWF0cmljdWxhdGlvbn0gKCR7bGljZW5zZXNbaWR4XS5nZW5yZX0pYCxcclxuICAgICAgICAgICAgICAgICAgICBsaWNlbnNlc1tpZHhdLm5vbUNsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICAobmV3IERhdGUobGljZW5zZXNbaWR4XS5jcmVhdGVkQXQuZGF0ZSkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRnInLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIChuZXcgRGF0ZShsaWNlbnNlc1tpZHhdLnByb2NoYWluZXZpc2l0ZS5kYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GcicsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgYDxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCI+PC9pPmBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRhdGF0YWJsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGRhdGF0YWJsZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkYXRhdGFibGUuZGF0YXNldC5tYXhIZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgICAgIGNvbnN0IGN0RGF0YXRhYmxlSW5zdGFuY2UgPSBuZXcgbWRiLkRhdGF0YWJsZShkYXRhdGFibGUsIHtcclxuICAgICAgICAgICAgY29sdW1uczogWycjJywgJ051bcOpcm8gUFYnLCAnVsOpaGljdWxlJywgJ1Byb3ByacOpdGFpcmUnLCAnQ3LDqWF0aW9uJywgJ0V4cGlyYXRpb24nLCAnQWN0aW9uJ10sXHJcbiAgICAgICAgICAgIHJvd3M6IHJvd3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N0LXNlYXJjaC1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY3REYXRhdGFibGVJbnN0YW5jZS5zZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwb3B1bGF0ZUV4cGVydGlzZXNUYWJsZSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YXRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V2LXBpbGwtY29udGVudCA+IC5jYXJkID4gLmRhdGF0YWJsZScpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgICAgICBleHBlcnRpc2VzID0gZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKGV4cGVydGlzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlkeCBpbiBleHBlcnRpc2VzKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgIE51bWJlci5wYXJzZUludChpZHgsIDEwKSArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgKG5ldyBEYXRlKGV4cGVydGlzZXNbaWR4XS5jcmVhdGVkQXQuZGF0ZSkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRnInLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGAke2V4cGVydGlzZXNbaWR4XS5udW1lcm9JbW1hdHJpY3VsYXRpb259ICgke2V4cGVydGlzZXNbaWR4XS5nZW5yZX0pYCxcclxuICAgICAgICAgICAgICAgICAgICBleHBlcnRpc2VzW2lkeF0ubm9tQ2xpZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVydGlzZXNbaWR4XS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBgPGkgY2xhc3M9XCJmYXMgZmEtZXllXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIj48L2k+YFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGF0YXRhYmxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgZGF0YXRhYmxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRhdGF0YWJsZS5kYXRhc2V0Lm1heEhlaWdodCA9IDQwMDtcclxuXHJcbiAgICAgICAgY29uc3QgZXZEYXRhdGFibGVJbnN0YW5jZSA9IG5ldyBtZGIuRGF0YXRhYmxlKGRhdGF0YWJsZSwge1xyXG4gICAgICAgICAgICBjb2x1bW5zOiBbJyMnLCAnRGF0ZScsICdWw6loaWN1bGUnLCAnUHJvcHJpw6l0YWlyZScsICdGYWl0ZSBwYXInLCAnQWN0aW9uJ10sXHJcbiAgICAgICAgICAgIHJvd3M6IHJvd3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2LXNlYXJjaC1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgZXZEYXRhdGFibGVJbnN0YW5jZS5zZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93VmVoaWNsZXNNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Bpbm5lcicpO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZlaGljbGVNb2RhbCA9IG5ldyBtZGIuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlaGljbGVzLW1vZGFsJyksIHt9KTtcclxuICAgICAgICBjb25zdCBjbGllbnRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xpZW50Jyk7XHJcbiAgICAgICAgY29uc3QgdmVoaWNsZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZWhpY3VsZS1jb250cm9sZScpO1xyXG5cclxuICAgICAgICAvLyBwb3B1bGF0ZSBjbGllbnQgc2VsZWN0XHJcbiAgICAgICAgY2xpZW50cy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtjLmlkfVwiJHtOdW1iZXIucGFyc2VJbnQoY2xpZW50U2VsZWN0LnZhbHVlKSA9PT0gYy5pZCA/ICcgc2VsZWN0ZWQnIDogJyd9PiR7Yy5ub21DbGllbnR9PC9vcHRpb24+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjbGllbnRTZWxlY3QuaW5uZXJIVE1MID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgc3Bpbm5lci5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgICAgIC8vIGZldGNoIHZlaGljbGVzXHJcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vdmVoaWN1bGVzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwLnRleHQoKS50aGVuKHJlc3BvbnNlQm9keSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSkuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwb3B1bGF0ZSB2ZWhpY2xlIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB2ZWhpY2xlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHt2LmlkfVwiJHtOdW1iZXIucGFyc2VJbnQodmVoaWNsZVNlbGVjdC52YWx1ZSkgPT09IHYuaWQgPyAnIHNlbGVjdGVkJyA6ICcnfT4ke3YuZ2VucmV9ICgke3YubnVtZXJvSW1tYXRyaWN1bGF0aW9ufSk8L29wdGlvbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGVTZWxlY3QuaW5uZXJIVE1MID0gb3B0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaCBsaWNlbnNlc1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2xpY2VuY2VzYCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwLnRleHQoKS50aGVuKHJlc3BvbnNlQm9keSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGljZW5zZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSkuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaCBleHBlcnRpc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vZXhwZXJ0aXNlc2AsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVydGlzZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSkuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUV4cGVydGlzZXNUYWJsZShleHBlcnRpc2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93TGF0ZXN0TGljZW5zZXMobGljZW5zZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUxpY2Vuc2VzVGFibGUobGljZW5zZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xhdGVzdFZlaGljbGVzKHZlaGljbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGlubmVyLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZlaGljbGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXZlVmVoaWNsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIChuZXcgRm9ybURhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy12ZWhpY2xlLWZvcm0nKSkpLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcclxuICAgICAgICAgICAgICAgIFtwYWlyWzBdXTogcGFpclsxXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vdmVoaWN1bGUvbmV3YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSksXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4ocmVzcG9uc2VCb2R5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZWhpY2xlID0gSlNPTi5wYXJzZShyZXNwb25zZUJvZHkpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHZlaGljbGVzLmxlbmd0aCA9PT0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmVoaWNsZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGVzLnVuc2hpZnQodmVoaWNsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xhdGVzdFZlaGljbGVzKHZlaGljbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoSlNPTi5wYXJzZShyZXNwb25zZUJvZHkpLm1lc3NhZ2UsICdzdWNjZXNzJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZVB2ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwaW5uZXInKTtcclxuICAgICAgICBzcGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiAobmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctY3QtZm9ybScpKSkuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGF5bG9hZCwge1xyXG4gICAgICAgICAgICAgICAgW3BhaXJbMF1dOiBwYWlyWzFdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vbGljZW5jZS9uZXdgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9KSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2dG9wcmludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlaGljbGUgPSB2ZWhpY2xlcy5maW5kKHYgPT4gdi5pZCA9PT0gTnVtYmVyLnBhcnNlSW50KHBheWxvYWQudmVoaWN1bGUsIDEwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2dG9wcmludC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkaXZIZWFkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgbWFyZ2luLXRvcDogMDtcIj5SRcOHVSBOJmRlZzsgJHtkYXRhLmRhdGEubnVtZXJvUHZ9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1PVElGIDogUGFpZW1lbnQgUFYgQ29udHLDtGxlIFRlY2huaXF1ZTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DTElFTlQgOiAke2RhdGEuZGF0YS5ub21DbGllbnR9IDwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NQVJRVUUgOiAke2RhdGEuZGF0YS5tYXJxdWV9IDwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NT0RFTEUgOiAke2RhdGEuZGF0YS50eXBlT3VNb2RlbGV9IDwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QTEFRVUUgOiAke2RhdGEuZGF0YS5udW1lcm9JbW1hdHJpY3VsYXRpb259IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7IG1hcmdpbjogMTBweCAwO1wiPk1vbnRhbnQgcGF5w6kgOiAke2RhdGEuc29tbWVzZW50fSAkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZsb2F0OiByaWdodDtcIj5JbXByaW3DqSBsZSAke2RhdGEuY3JlYXRlZGF0fSBwYXIgJHtkYXRhLmRvbmVieX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2dG9wcmludC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmYgIWltcG9ydGFudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdnRvcHJpbnQuc3R5bGUuZm9udFNpemUgPSBcIjVweCAhaW1wb3J0YW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb250cm9sZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWNlbnNlcy51bnNoaWZ0KGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVMaWNlbnNlc1RhYmxlKGxpY2Vuc2VzKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmludEVsZW1lbnRzV2l0aEhlYWQoZGl2dG9wcmludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KGRhdGEubWVzc2FnZSwgJ3N1Y2Nlc3MnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXZlRXhwZXJ0aXNlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwaW5uZXInKTtcclxuICAgICAgICBzcGlubmVyLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiAobmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctZXhwZXJ0aXNlLWZvcm0nKSkpLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHBheWxvYWQsIHtcclxuICAgICAgICAgICAgICAgIFtwYWlyWzBdXTogcGFpclsxXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2V4cGVydGlzZS9uZXdgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9KSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcclxuICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2dG9wcmludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdnRvcHJpbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZGl2SGVhZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UkVDVSBOJmRlZzsgJHtkYXRhLmRhdGEuaWR9PC9oMj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW90aWYgOiBQYWllbWVudCBFeHBlcnRpc2UgZGUgdmVoaWN1bGU8L3NwYW4+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DbGllbnQgOiAke2RhdGEuZGF0YS5ub21DbGllbnR9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToyZW07XCI+TW9udGFudCBQYXllIDogJHtkYXRhLmFtb3VudFBhaWR9ICQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHQ7XCI+SW1wcmltw6kgbGUgJHsobmV3IERhdGUoZGF0YS5kYXRhLmNyZWF0ZWRBdC5kYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsIHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnfSl9IHBhciAke2RhdGEuZGF0YS51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5lci5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFeHBlcnRpc2VNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJ0aXNlcy51bnNoaWZ0KGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVFeHBlcnRpc2VzVGFibGUoZXhwZXJ0aXNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRFbGVtZW50c1dpdGhIZWFkKGRpdnRvcHJpbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydChkYXRhLm1lc3NhZ2UsICdzdWNjZXNzJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UGh5c2ljYWxQZXJzb25JbnB1dHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmRlci1zZWN0aW9uJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZGVyLXNlY3Rpb24tdGVtcGxhdGUnKS5jb250ZW50LCB0cnVlKSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtcGxveWVyLXNlY3Rpb24nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5pbXBvcnROb2RlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbXBsb3llci1zZWN0aW9uLXRlbXBsYXRlJykuY29udGVudCwgdHJ1ZSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVQaHlzaWNhbFBlcnNvbklucHV0cyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZGVyLXNlY3Rpb24nKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1wbG95ZXItc2VjdGlvbicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwbGF5R3JpZCA9IChjb250YWluZXIsIGNvbnRlbnQsIGNsaWVudCA9IHtpZDogbnVsbH0pID0+IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzRnJhZ21lbnQgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yaWVzJyk7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZXNGcmFnbWVudCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignI3NlcnZpY2VzJyk7XHJcblxyXG4gICAgICAgIGZldGNoQWxsSW50ZXJ2YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWVudFsnaWQnXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaXNhYmxlQ3VzdG9tZXJEZXRhaWxzQnV0dG9ucygnY3VzdG9tZXJEZXRhaWxzJywgJ2N1c3RvbWVyUHVyY2hhc2VzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXRlZ29yaWVzRnJhZ21lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgc2VydmljZXNGcmFnbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IC0xOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNGcmFnbWVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYmctJHtpID09PSAtMSA/ICdzdWNjZXNzJyA6ICdwcmltYXJ5J30gdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaG9sZC1pbnZvaWNlXCIgY2xhc3M9XCJjYXJkLWJvZHkgY2F0ZWdvcnlcIiB0aXRsZT1cIiR7aSA9PT0gLTEgPyAnTWV0dHJlIGxhIGZhY3R1cmUgZW4gcGF1c2UnIDogKHR5cGVvZiBjYXRlZ29yaWVzW2ldICE9PSAndW5kZWZpbmVkJyA/IGNhdGVnb3JpZXNbaV1bJ25hbWUnXSA6ICcnKX1cIj4ke2kgPT09IC0xID8gJzxpIGNsYXNzPVwiZmFzIGZhLXBhdXNlIGZhLTJ4IHRleHQtY2VudGVyIHRleHQtZGFya1wiPjwvaT4nIDogKHR5cGVvZiBjYXRlZ29yaWVzW2ldICE9PSAndW5kZWZpbmVkJyA/IChjYXRlZ29yaWVzW2ldWyduYW1lJ10ubGVuZ3RoID4gMjUgPyBjYXRlZ29yaWVzW2ldWyduYW1lJ10uc2xpY2UoMCwgMjUpICsgJy4uLicgOiBjYXRlZ29yaWVzW2ldWyduYW1lJ10pIDogJycpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZUV4aXN0cyA9IHR5cGVvZiBzZXJ2aWNlc1tpXSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzRnJhZ21lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJnLWFjY2VudCB0ZXh0LWxpZ2h0IHNlcnZpY2VcIiBkYXRhLWRlcG90LWRldGFpbHMtaWQ9XCIke3NlcnZpY2VFeGlzdHMgJiYgdHlwZW9mIHNlcnZpY2VzW2ldWydpZCddICE9PSAndW5kZWZpbmVkJyA/IHNlcnZpY2VzW2ldWydpZCddIDogJyd9XCIgZGF0YS1zZXJ2aWNlLWlkPVwiJHtzZXJ2aWNlRXhpc3RzID8gc2VydmljZXNbaV1bJ3NlcnZpY2VJZCddIDogJyd9XCIgZGF0YS1zZXJ2aWNlLXR5cGU9XCIke3NlcnZpY2VFeGlzdHMgPyBzZXJ2aWNlc1tpXVsndHlwZSddIDogJyd9XCIgZGF0YS1xdWFudGl0eT1cIiR7c2VydmljZUV4aXN0cyAmJiB0eXBlb2Ygc2VydmljZXNbaV1bJ3F1YW50aXR5J10gIT09ICd1bmRlZmluZWQnID8gc2VydmljZXNbaV1bJ3F1YW50aXR5J10gOiAnJ31cIiBkYXRhLXByaWNlPVwiJHtzZXJ2aWNlRXhpc3RzID8gc2VydmljZXNbaV1bJ3VuaXRQcmljZSddIDogJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoNlwiIHRpdGxlPVwiJHtzZXJ2aWNlRXhpc3RzID8gc2VydmljZXNbaV1bJ25hbWUnXSA6ICcnfVwiPiR7c2VydmljZUV4aXN0cyA/IChzZXJ2aWNlc1tpXVsnbmFtZSddLmxlbmd0aCA+IDI1ID8gc2VydmljZXNbaV1bJ25hbWUnXS5zbGljZSgwLCAyNSkgKyAnLi4uJyA6IHNlcnZpY2VzW2ldWyduYW1lJ10pIDogJyd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7c2VydmljZUV4aXN0cyA/IHNlcnZpY2VzW2ldWyd1bml0UHJpY2UnXSArICcgJCcgOiAnJ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBiYWRnZSBiZy1wcmltYXJ5IHRleHQtbGlnaHRcIj4ke3NlcnZpY2VFeGlzdHMgJiYgdHlwZW9mIHNlcnZpY2VzW2ldWydxdWFudGl0eSddICE9PSAndW5kZWZpbmVkJyA/IHNlcnZpY2VzW2ldWydxdWFudGl0eSddIDogJyd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuaW1wb3J0Tm9kZShjb250ZW50LCB0cnVlKSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlJykuZm9yRWFjaCgoc2VydikgPT4ge1xyXG4gICAgICAgICAgICBzZXJ2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZUlkID0gTnVtYmVyLnBhcnNlSW50KHNlcnYuZGF0YXNldC5zZXJ2aWNlSWQsIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBzZXJ2aWNlcy5maW5kKHMgPT4gcy5zZXJ2aWNlSWQgPT09IHNlcnZpY2VJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBzZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UgPSBhZGRUb0NhcnQoc2VydmljZS5zZXJ2aWNlSWQsIDEsIGN1cnJlbnRJbnZvaWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob2xkLWludm9pY2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgc2VsbCgnaG9sZCcsIGN1cnJlbnRJbnZvaWNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50LXJlY2VpcHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcHJpbnRJbnZvaWNlKCdSRcOHVScsIHBlcm1pc3Npb25zKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnQtaW52b2ljZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcmludEludm9pY2UoJ0ZBQ1RVUkUnLCBwZXJtaXNzaW9ucyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9mb3JtYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxsKCdwcm9mb3JtYScsIGN1cnJlbnRJbnZvaWNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxsKCdzYWxlJywgY3VycmVudEludm9pY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY3JlYXRlQ3VzdG9tZXIsICNjdXN0b21lckRldGFpbHMnKS5mb3JFYWNoKChlZGl0QnRuLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgYXJ0aWNsZSBxdWFudGl0aWVzIGluIHRoZSBzZXNzaW9uIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlJykuZm9yRWFjaChzZXJ2aWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KHNlcnZpY2UuZGF0YXNldC5zZXJ2aWNlVHlwZSwgMTApID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc2VydmljZS5kYXRhc2V0LmRlcG90RGV0YWlsc0lkLCBzZXJ2aWNlLmRhdGFzZXQucXVhbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGdyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRvY3VtZW50LmltcG9ydE5vZGUobmV3Q3VzdG9tZXJGb3JtLmNvbnRlbnQsIHRydWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZS1zZWN0aW9uJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eXBlQ2xpZW50XCI+VHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidHlwZUNsaWVudFwiIGlkPVwidHlwZUNsaWVudFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaHlzaXF1ZVwiPlBlcnNvbm5lIHBoeXNpcXVlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb3JhbGVcIiR7aWR4ID09PSAxICYmIGN1cnJlbnRJbnZvaWNlLmNsaWVudC50eXBlQ2xpZW50ID09PSAnbW9yYWxlJyA/ICcgc2VsZWN0ZWQnIDogJyd9PlBlcnNvbm5lIG1vcmFsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNsaWVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUgPT09ICdtb3JhbGUnID8gcmVtb3ZlUGh5c2ljYWxQZXJzb25JbnB1dHMoKSA6IHNldFBoeXNpY2FsUGVyc29uSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9FeGNsdWRlID0gWydpZCcsICdjYXRlZ29yeUlkJywgJ2NhdGVnb3J5TmFtZScsICd0b3RhbEZhY3R1cmVzJywgJ3RvdGFsQm9udXMnXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEludm9pY2UuY2xpZW50LnR5cGVDbGllbnQgPT09ICdtb3JhbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRXhjbHVkZS5wdXNoKFsnc2V4ZScsICdldGF0Q2l2aWwnLCAnZW1wbG95ZXVyJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQaHlzaWNhbFBlcnNvbklucHV0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3Q3VzdG9tZXJUaXRsZScpLnRleHRDb250ZW50ID0gYETDqXRhaWxzICR7Y3VycmVudEludm9pY2UuY2xpZW50WydzZXhlJ10gPT09ICdGJyA/ICdkZSBsYSBjbGllbnRlJyA6ICdkdSBjbGllbnQnfSAke2NsaWVudFsnbm9tQ2xpZW50J119YDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gY3VycmVudEludm9pY2UuY2xpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b0V4Y2x1ZGUuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcElucHV0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcElucHV0LnZhbHVlID0gY3VycmVudEludm9pY2UuY2xpZW50W3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnRbcHJvcF0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2NhdGVnb3J5SWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnknKS52YWx1ZSA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudFsnY2F0ZWdvcnlJZCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW52b2ljZS5jbGllbnQudHlwZUNsaWVudCA9PT0gJ3BoeXNpcXVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZW1wbG95ZXVyID4gb3B0aW9uJykuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LmVtcGxveWV1cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2F0ZWdvcnkgPiBvcHRpb24nKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5JykucmVtb3ZlQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnZhbHVlID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQuY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkQ3VzdG9tZXInKS50ZXh0Q29udGVudCA9ICdNb2RpZmllcic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBoeXNpY2FsUGVyc29uSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEN1c3RvbWVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UuY2xpZW50ID0geyBpZDogbnVsbCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRJbnZvaWNlLmNsaWVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhaXJbMF1dOiBwYWlyWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vY2xpZW50cy8ke2N1cnJlbnRJbnZvaWNlLmNsaWVudC5pZCA/PyAnbmV3J31gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50SW52b2ljZS5jbGllbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4ocmVzcG9uc2VCb2R5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZUJvZHkpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVyYiA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC5pZCA9PT0gbnVsbCA/ICdjcsOpw6knIDogJ21vZGlmacOpJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnQuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbnZvaWNlLmNsaWVudC5kaXNjb3VudEFwcGxpY2FibGUgPSBkYXRhLmRpc2NvdW50QXBwbGljYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxGYWN0dXJlcyA9IGlzTmFOKGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzKSB8fCAndW5kZWZpbmVkJyA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMgfHwgbnVsbCA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMgPyAwIDogKCdzdHJpbmcnID09PSB0eXBlb2YgY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMgPyBOdW1iZXIucGFyc2VJbnQoY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMsIDEwKSA6IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyA9IGlzTmFOKGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKSB8fCAndW5kZWZpbmVkJyA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMgfHwgbnVsbCA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMgPyAwIDogKCdzdHJpbmcnID09PSB0eXBlb2YgY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMgPyBOdW1iZXIucGFyc2VGbG9hdChjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cykgOiBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYENsaWVudCR7Y3VycmVudEludm9pY2UuY2xpZW50LnNleGUgPT09ICdGJyA/ICdlJyA6ICcnfSAke2N1cnJlbnRJbnZvaWNlLmNsaWVudC5ub21DbGllbnR9ICR7dmVyYn0ke2N1cnJlbnRJbnZvaWNlLmNsaWVudC5zZXhlID09PSAnRicgPyAnZScgOiAnJ30gYXZlYyBzdWNjw6hzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyTmFtZScpLnRleHRDb250ZW50ID0gY3VycmVudEludm9pY2UuY2xpZW50Lm5vbUNsaWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwtZmFjdHVyZXMnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1ib251cycpLnRleHRDb250ZW50ID0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDdXN0b21lckRldGFpbHNCdXR0b25zKCdjdXN0b21lckRldGFpbHMnLCAnY3VzdG9tZXJQdXJjaGFzZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGVUb3RhbEVsZW1lbnRzKHRvdGFsLCBjbGllbnQuZGlzY291bnRBcHBsaWNhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihyZXNwQm9keSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUdyaWQoZ3JpZCwgZ3JpZENvbnRlbnQuY29udGVudCwgY3VycmVudEludm9pY2UuY2xpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZScpLmZvckVhY2goc2VydmljZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoc2VydmljZS5kYXRhc2V0LnNlcnZpY2VUeXBlLCAxMCkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF0eSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc2VydmljZS5kYXRhc2V0LmRlcG90RGV0YWlsc0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuZGF0YXNldC5xdWFudGl0eSA9IHF0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UucXVlcnlTZWxlY3RvcignLmNhcmQtYm9keSA+IGRpdjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBxdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZURlcGVuc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L3NhbGVzL2Nsb3R1cmVzL25ld2AsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4ocmVzcG9uc2VCb2R5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvdHVyZUVsdHMgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSkuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5wYXJzZUZsb2F0KGNsb3R1cmVFbHRzLmNhc2ggPz8gMCkgKyBOdW1iZXIucGFyc2VGbG9hdChjbG90dXJlRWx0cy5kZXR0ZXMgPz8gMCkgPiBOdW1iZXIucGFyc2VGbG9hdChwYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnQnKS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignZm9ybScpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2RlcGVuc2VzL25ld2AsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoSlNPTi5wYXJzZShkYXRhKSwgJ3N1Y2Nlc3MnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KCdWb3VzIG5lIHBvdXZleiBwYXMgZMOpcGVuc2VyIHVuIG1vbnRhbnQgc3Vww6lyaWV1ciBhdSBzb2xkZSBkZSB2b3RyZSBjYWlzc2UuJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGVOZXdEZXBlbnNlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGVybWlzc2lvbnMuaW5jbHVkZXMoJ2RlcGVuc2UnKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvdHVyZSA9PT0gbnVsbCA/IGRlcGVuc2VNb2RhbC5zaG93KCkgOiBzaG93QWxlcnQoJ0ltcG9zc2libGUgZFxcJ2VmZmVjdHVlciB1bmUgZMOpcGVuc2UgISBWb3VzIGF2ZXogZMOpasOgIGNsw7R0dXLDqSBsYSBqb3VybsOpZS4nLCAnd2FybmluZycsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydCgnVm91cyBuXFwnw6p0ZXMgcGFzIGF1dG9yaXPDqSDDoCBmYWlyZSB1bmUgZMOpcGVuc2UuJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1wYWllbWVudC1kZXR0ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNsb3R1cmUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW52b2ljZS5jbGllbnQuaWQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWJ0UGF5bWVudE1vZGFsID0gbmV3IG1kYi5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFpZW1lbnQtZGV0dGVzJyksIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbW91bnRQYWlkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkZWJ0UGF5bWVudE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KCdWZXVpbGxleiBzw6lsZWN0aW9ubmVyIHVuIGNsaWVudCcsICd3YXJuaW5nJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0KCdJbXBvc3NpYmxlIGRcXCdlZmZlY3R1ZXIgbFxcJ29ww6lyYXRpb24gISBWb3VzIGF2ZXogZMOpasOgIGNsw7R0dXLDqSBsYSBqb3VybsOpZS4nLCAnd2FybmluZycsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvdHVyZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vc2FsZXMvY2xvdHVyZXMvbmV3YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG90dXJlRWx0cyA9IEpTT04ucGFyc2UocmVzcG9uc2VCb2R5KS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZW50ZXMgPSBOdW1iZXIucGFyc2VGbG9hdChjbG90dXJlRWx0cy52ZW50ZXMudG90YWwgPz8gMCkgKyBOdW1iZXIucGFyc2VGbG9hdChjbG90dXJlRWx0cy52ZW50ZXMud29ya2ZvcmNlID8/IDApIC0gTnVtYmVyLnBhcnNlRmxvYXQoY2xvdHVyZUVsdHMudmVudGVzLmRpc2NvdW50ID8/IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXNoID0gTnVtYmVyLnBhcnNlRmxvYXQoY2xvdHVyZUVsdHMuY2FzaC50b3RhbCA/PyAwKSArIE51bWJlci5wYXJzZUZsb2F0KGNsb3R1cmVFbHRzLmNhc2gud29ya2ZvcmNlID8/IDApIC0gTnVtYmVyLnBhcnNlRmxvYXQoY2xvdHVyZUVsdHMuY2FzaC5kaXNjb3VudCA/PyAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlZGl0cyA9IE51bWJlci5wYXJzZUZsb2F0KGNsb3R1cmVFbHRzLmNyZWRpdHMudG90YWwgPz8gMCkgKyBOdW1iZXIucGFyc2VGbG9hdChjbG90dXJlRWx0cy5jcmVkaXRzLndvcmtmb3JjZSA/PyAwKSAtIE51bWJlci5wYXJzZUZsb2F0KGNsb3R1cmVFbHRzLmNyZWRpdHMuZGlzY291bnQgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhaWVtZW50c0RldHRlcyA9IE51bWJlci5wYXJzZUZsb2F0KGNsb3R1cmVFbHRzLnBhaWVtZW50c0RldHRlcyA/PyAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5zZXMgPSBOdW1iZXIucGFyc2VGbG9hdChjbG90dXJlRWx0cy5kZXBlbnNlcyA/PyAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpZW1lbnRzUGFyQm9udXMgPSBOdW1iZXIucGFyc2VGbG9hdChjbG90dXJlRWx0cy5wYWllbWVudHNQYXJCb251cyA/PyAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlbnRlcyA+IHRkOm50aC1jaGlsZCgyKScpLnRleHRDb250ZW50ID0gdmVudGVzLnRvRml4ZWQoMikgKyAnICQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FzaCA+IHRkOm50aC1jaGlsZCgyKScpLnRleHRDb250ZW50ID0gY2FzaC50b0ZpeGVkKDIpICsgJyAkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWRpdHMgPiB0ZDpudGgtY2hpbGQoMiknKS50ZXh0Q29udGVudCA9IGNyZWRpdHMudG9GaXhlZCgyKSArICcgJCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZW50ZXMtcGFyLWJvbnVzID4gdGQ6bnRoLWNoaWxkKDIpJykudGV4dENvbnRlbnQgPSBwYWllbWVudHNQYXJCb251cy50b0ZpeGVkKDIpICsgJyAkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldHRlcyA+IHRkOm50aC1jaGlsZCgyKScpLnRleHRDb250ZW50ID0gcGFpZW1lbnRzRGV0dGVzLnRvRml4ZWQoMikgKyAnICQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVwZW5zZXMgPiB0ZDpudGgtY2hpbGQoMiknKS50ZXh0Q29udGVudCA9IGRlcGVuc2VzLnRvRml4ZWQoMikgKyAnICQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxWZW50ZXMgPiB0ZDpudGgtY2hpbGQoMiknKS50ZXh0Q29udGVudCA9IGAkeyhjYXNoICsgcGFpZW1lbnRzRGV0dGVzIC0gZGVwZW5zZXMgLSBwYWllbWVudHNQYXJCb251cykudG9GaXhlZCgyKX0gJGA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGZhY3R1cmVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGF0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYWN0dXJlc2xpc3QgLm1vZGFsLWJvZHkgPiAuZGF0YXRhYmxlJyk7XHJcbiAgICAgICAgICAgIGRhdGF0YWJsZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgaW52b2ljZXNUYWJsZUluc3RhbmNlID0gbmV3IG1kYi5EYXRhdGFibGUoZGF0YXRhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RhdGUnLCBmaWVsZDogJ2RhdGVGYWN0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdOwrAgZmFjdHVyZScsIGZpZWxkOiAnaWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1R5cGUnLCBmaWVsZDogJ3R5cGVGYWN0dXJlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDbGllbnQnLCBmaWVsZDogJ25vbUNsaWVudCcgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTW9udGFudCcsIGZpZWxkOiAnYW1vdW50JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdSw6lkdWN0aW9uJywgZmllbGQ6ICdkaXNjb3VudCcgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LCB7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICBkYXRhdGFibGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2ZhY3R1cmVzL3ZlbnRlL2d1aWNoZXRpZXJgLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBpbnZvaWNlSXRlbXMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgaW52b2ljZUl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpbnZvaWNlSXRlbXMnLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldEFjdGlvbnMgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5ID4gdHInKS5mb3JFYWNoKChyb3dFbHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dFbHQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJvd0VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZvaWNlSXRlbXMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ludm9pY2VJdGVtcycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW52b2ljZUl0ZW1zW2lkeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZWNoYXJ0Ym9hZChpbnZvaWNlSXRlbXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UudHlwZSA9IGludm9pY2VJdGVtc1tpbmRleF0udHlwZUZhY3R1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5hZGRFdmVudExpc3RlbmVyKCdyZW5kZXIubWRiLmRhdGF0YWJsZScsIHNldEFjdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZXNUYWJsZUluc3RhbmNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ludm9pY2VJdGVtcycpKS5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGYWN0OiBgJHsobmV3IERhdGUocm93LmRhdGVGYWN0LmRhdGUpKS50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJywge3llYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnfSl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBgJHsocm93LnRvdGFsICsgKCdudW1iZXInID09PSB0eXBlb2Ygcm93Lndvcmtmb3JjZSA/IHJvdy53b3JrZm9yY2UgOiAwKSkudG9GaXhlZCgyKX0gJGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50OiBgJHsocm93LmRpc2NvdW50ID8/IDApLnRvRml4ZWQoMil9ICRgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7IGxvYWRpbmc6IGZhbHNlLCBob3ZlcjogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZvaWNlLXNlYXJjaC1pbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2VzVGFibGVJbnN0YW5jZS5zZWFyY2goZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25maXJtLWNsb3R1cmUnKS5mb3JFYWNoKGVsdCA9PiB7XHJcbiAgICAgICAgICAgIGNsb3R1cmUgIT09IG51bGwgPyBlbHQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJykgOiBlbHQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5pdERlYnRQYXltZW50KCdwYWllbWVudC1kZXR0ZXMnKTtcclxuICAgICAgICBpbml0RGVidFBheW1lbnQoJ3BhaWVtZW50LWRldHRlcy1lbXBsb3llZXMnLCAnL2VtcGxveWVzJyk7XHJcblxyXG4gICAgICAgIG9uZVRpbWVQYXltZW50KCk7XHJcbiAgICAgICAgb25lVGltZVBheW1lbnQoJy1lbXBsb3llZXMnKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VydmljZUV4aXN0ZW5jZSA9IChhcnIsIGZuKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnIpIHtcclxuICAgICAgICAgICAgaWYgKGZuKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG5mdW5jdGlvbiBlbXB0eUlucHV0KGlucHV0KSB7XHJcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG59XHJcblxyXG4vLyBVcGRhdGUgY2xpZW50cywgc2VydmljZXMsIGNhdGVnb3JpZXMsLi4uIGxpc3RzXHJcbmZ1bmN0aW9uIGZldGNoQWxsKCkge1xyXG4gICAgZmV0Y2goYCR7YmFzZVVybH0vc2FsZXMvbmV3YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSlcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VCb2R5KS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cyA9IGRhdGEuY2xpZW50cztcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VzID0gZGF0YS5zZXJ2aWNlcztcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSBkYXRhLmNhdGVnb3JpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0NhcnQoc2VydmljZUlkLCBxdHksIGludm9pY2UpIHtcclxuICAgIGNvbnN0IGlzRGlzY291bnRBcHBsaWNhYmxlID0gaW52b2ljZS5jbGllbnQuaWQgIT09IG51bGwgJiYgaW52b2ljZS5jbGllbnQuZGlzY291bnRBcHBsaWNhYmxlO1xyXG4gICAgY29uc3QgbmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGUgPiB0Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQnKTtcclxuICAgIGNvbnN0IHMgPSBzZXJ2aWNlcy5maW5kKHNlcnZpY2UgPT4gc2VydmljZS5zZXJ2aWNlSWQgPT09IE51bWJlci5wYXJzZUludChzZXJ2aWNlSWQsIDEwKSk7XHJcblxyXG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygcykge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2VFeGlzdHMgPSBzZXJ2aWNlRXhpc3RlbmNlKG5hbWVzLCAobikgPT4gcy5uYW1lID09IG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2VUeXBlID0gcy50eXBlID09PSAxID8gJ3NlcnZpY2UnIDogJ2FydGljbGUnO1xyXG5cclxuICAgICAgICBpZiAoKChzZXJ2aWNlVHlwZSA9PT0gJ3NlcnZpY2UnIHx8IHF0eSA+IDApICYmIHF0eSA+IDApIHx8IHF0eSA8IDApIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gcy50eXBlID09PSAxID8gcy5zZXJ2aWNlSWQgOiBzLmlkO1xyXG4gICAgICAgICAgICAvLyBWZXJpZmllciBzaSBsZSBub20gZHUgc2VydmljZSBleGlzdGUgZGFucyBsYSBjb2xvbm5lIGRlcyBub21zLiBTaSBvdWksIGFqb3V0ZXIgbGEgcXVhbnRpdGUgOyBzaW5vbiBham91dGVyIHVuZSBub3V2ZWxsZSBsaWduZS5cclxuICAgICAgICAgICAgaWYgKCEhc2VydmljZUV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXR5RWx0ID0gc2VydmljZUV4aXN0cy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3RkOm50aC1vZi10eXBlKDIpJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VFbHQgPSBzZXJ2aWNlRXhpc3RzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcigndGQ6bnRoLW9mLXR5cGUoMyknKTtcclxuICAgICAgICAgICAgICAgIHF0eUVsdC50ZXh0Q29udGVudCA9IE51bWJlci5wYXJzZUludChxdHlFbHQudGV4dENvbnRlbnQsIDEwKSArIHF0eTtcclxuICAgICAgICAgICAgICAgIHByaWNlRWx0LnRleHRDb250ZW50ID0gKE51bWJlci5wYXJzZUZsb2F0KHByaWNlRWx0LnRleHRDb250ZW50KSArIHF0eSAqIHMudW5pdFByaWNlKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FydEl0ZW0nKS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW0ucXVlcnlTZWxlY3RvcigndHInKS5kYXRhc2V0LnNlcnZpY2VJZCA9IHNlcnZpY2VJZDtcclxuICAgICAgICAgICAgICAgIGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RkJykudGV4dENvbnRlbnQgPSBzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCd0ZDpudGgtb2YtdHlwZSgyKScpLnRleHRDb250ZW50ID0gcXR5O1xyXG4gICAgICAgICAgICAgICAgY2FydEl0ZW0ucXVlcnlTZWxlY3RvcigndGQ6bnRoLW9mLXR5cGUoMyknKS50ZXh0Q29udGVudCA9IChxdHkgKiBzLnVuaXRQcmljZSkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0ID4gdGJvZHknKS5hcHBlbmRDaGlsZChkb2N1bWVudC5pbXBvcnROb2RlKGNhcnRJdGVtLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0cjpsYXN0LW9mLXR5cGUgPiB0ZCA+IC5idG4tZ3JvdXAgPiBidXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZSA9IGFkZFRvQ2FydChzLnNlcnZpY2VJZCwgMSwgY3VycmVudEludm9pY2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0cjpsYXN0LW9mLXR5cGUgPiB0ZCA+IC5idG4tZ3JvdXAgPiBidXR0b246bnRoLWNoaWxkKDIpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UgPSBhZGRUb0NhcnQocy5zZXJ2aWNlSWQsIC0xLCBjdXJyZW50SW52b2ljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5wYXJzZUludChhbmNlc3Rvci5xdWVyeVNlbGVjdG9yKCd0ZDpudGgtb2YtdHlwZSgyKScpLnRleHRDb250ZW50LCAxMCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnQgPiB0Ym9keScpLnJlbW92ZUNoaWxkKGFuY2VzdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RyOmxhc3Qtb2YtdHlwZSA+IHRkID4gLmJ0bi1ncm91cCA+IGJ1dHRvbjpsYXN0LWNoaWxkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RvciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UgPSBhZGRUb0NhcnQocy5zZXJ2aWNlSWQsIC1OdW1iZXIucGFyc2VJbnQoYW5jZXN0b3IucXVlcnlTZWxlY3RvcigndGQ6bnRoLW9mLXR5cGUoMiknKS50ZXh0Q29udGVudCwgMTApLCBjdXJyZW50SW52b2ljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnQgPiB0Ym9keScpLnJlbW92ZUNoaWxkKGFuY2VzdG9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnZvaWNlLnRvdGFsICs9IHF0eSAqIHMudW5pdFByaWNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRGlzY291bnRBcHBsaWNhYmxlICYmIGRpc2NvdW50YWJsZXMuaW5kZXhPZihzLnNlcnZpY2VJZCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgaW52b2ljZS5kaXNjb3VudCArPSBxdHkgKiAoTWF0aC5hYnMocy51bml0UHJpY2UgLSBzLmRlZmxhdGVkUHJpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRvdGFsIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsRWxlbWVudHMoaW52b2ljZS50b3RhbCwgaW52b2ljZS5kaXNjb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEaW1pbnVlciBvdSBhdWdtZW50ZXIgbGEgcXVhbnRpdGUgZGUgbCdhcnRpY2xlXHJcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlVHlwZSA9PT0gJ2FydGljbGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlRWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlcnZpY2VzID4gZGl2ID4gW2RhdGEtc2VydmljZS1pZD1cIiR7cy5zZXJ2aWNlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBzLnF1YW50aXR5IC09IHF0eTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlRWx0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZUVsdC5kYXRhc2V0LnF1YW50aXR5ID0gcy5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlRWx0LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWJvZHkgPiAuYmFkZ2UnKS50ZXh0Q29udGVudCA9IHMucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgaW52b2ljZVtzZXJ2aWNlVHlwZSArICdzJ10gJiYgaW52b2ljZVtzZXJ2aWNlVHlwZSArICdzJ10uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaW52b2ljZVtzZXJ2aWNlVHlwZSArICdzJ11ba2V5XVsnbmJVbml0ZXMnXSArPSBxdHk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBpbnZvaWNlW3NlcnZpY2VUeXBlICsgJ3MnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaW52b2ljZSwge1tzZXJ2aWNlVHlwZSArICdzJ106IHt9fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGludm9pY2Vbc2VydmljZVR5cGUgKyAncyddLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2tleV06IHsgaWQ6IHMuc2VydmljZUlkLCBuYlVuaXRlczogcXR5LCBzZXJ2aWNlOiBzLm5hbWUsIHVuaXRQcmljZTogcy51bml0UHJpY2UsIGRlZmxhdGVkUHJpY2U6IHMuZGVmbGF0ZWRQcmljZSwgYm9udXNBcHBsaWNhYmxlOiBzLmJvbnVzQXBwbGljYWJsZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW52b2ljZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFF1YW50aXR5KGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCBzZXJ2aWNlSWQgPSBOdW1iZXIucGFyc2VJbnQoY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuc2VydmljZUlkLCAxMCk7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IE51bWJlci5wYXJzZUludChwcm9tcHQoXCJRdWFudGl0w6lcIiksIDEwKTtcclxuXHJcbiAgICBpZiAoIWlzTmFOKHF1YW50aXR5KSAmJiB0eXBlb2YgcXVhbnRpdHkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgY3VycmVudEludm9pY2UgPSBhZGRUb0NhcnQoc2VydmljZUlkLCAtTnVtYmVyLnBhcnNlSW50KGN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQsIDEwKSwgY3VycmVudEludm9pY2UpO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHNlcnZpY2VzLmZpbmQoc2VydmljZSA9PiBzZXJ2aWNlLnNlcnZpY2VJZCA9PT0gc2VydmljZUlkKS5xdWFudGl0eTtcclxuICAgICAgICBjdXJyZW50SW52b2ljZSA9IGFkZFRvQ2FydChzZXJ2aWNlSWQsIHF1YW50aXR5ID4gYXZhaWxhYmxlID8gYXZhaWxhYmxlIDogcXVhbnRpdHksIGN1cnJlbnRJbnZvaWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG90YWxFbGVtZW50cyh0b3RhbCwgZGlzY291bnRBbW91bnQgPSAwKSB7XHJcbiAgICBjb25zdCBkaXNjb3VudEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNjb3VudCcpO1xyXG4gICAgY29uc3Qgd29ya2ZvcmNlRWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtmb3JjZScpO1xyXG4gICAgY29uc3Qgd29ya2ZvcmNlQW1vdW50ID0gJ251bWJlcicgPT09IHR5cGVvZiB3b3JrZm9yY2VQZXJjZW50ICYmIHdvcmtmb3JjZVBlcmNlbnQgPiAwID8gd29ya2ZvcmNlUGVyY2VudCAqIHRvdGFsIDogMDtcclxuICAgIC8vIGNvbnN0IGRpc2NvdW50QW1vdW50ID0gaXNEaXNjb3VudEFwcGxpY2FibGUgPyBNYXRoLmFicyhkaXNjb3VudCkgOiAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJykudGV4dENvbnRlbnQgPSAnJCcgKyBNYXRoLmFicyh0b3RhbCkudG9GaXhlZCgyKTtcclxuICAgIGlmIChudWxsICE9PSBkaXNjb3VudEVsdCkge1xyXG4gICAgICAgIGRpc2NvdW50RWx0LnRleHRDb250ZW50ID0gJyQnICsgZGlzY291bnRBbW91bnQudG9GaXhlZCgyKTtcclxuICAgIH1cclxuICAgIGlmIChudWxsICE9PSB3b3JrZm9yY2VFbHQpIHtcclxuICAgICAgICB3b3JrZm9yY2VFbHQudGV4dENvbnRlbnQgPSAnJCcgKyB3b3JrZm9yY2VBbW91bnQudG9GaXhlZCgyKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXQnKS50ZXh0Q29udGVudCA9ICckJyArICh0b3RhbCArIHdvcmtmb3JjZUFtb3VudCAtIGRpc2NvdW50QW1vdW50KS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENhcnQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ciA+IHRkID4gLmJ0bi1ncm91cCA+IGJ1dHRvbjpsYXN0LWNoaWxkJykuZm9yRWFjaChyZW1vdmVCdG4gPT4ge1xyXG4gICAgICAgIHJlbW92ZUJ0bi5jbGljaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NhbGUtYW1vdW50LCAjc2FsZS13b3JrZm9yY2UnKS5mb3JFYWNoKGFtb3VudEVsdCA9PiB7XHJcbiAgICAgICAgYW1vdW50RWx0LnZhbHVlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGFtb3VudEVsdC5pZCA9PT0gJ3dvcmtmb3JjZScpIHtcclxuICAgICAgICAgICAgYW1vdW50RWx0LnBhcmVudE5vZGUuaGlkZGVuID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhbGUtdG90YWwgPiBzcGFuOmxhc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IDA7XHJcblxyXG4gICAgdXBkYXRlVG90YWxFbGVtZW50cygwKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJOYW1lJykudGV4dENvbnRlbnQgPSAnQ2xpZW50IGFub255bWUnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsLWZhY3R1cmVzJykudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsLWJvbnVzJykudGV4dENvbnRlbnQgPSAwLjAwO1xyXG5cclxuICAgIGN1cnJlbnRJbnZvaWNlID0geyBpZDogbnVsbCwgY2xpZW50OiB7IGlkOiBudWxsIH0sIGFydGljbGVzOiB7fSwgc2VydmljZXM6IHt9LCB0b3RhbDogMCwgd29ya2ZvcmNlOiAwLCBkaXNjb3VudDogMCB9O1xyXG4gICAgbGljZW5jZUlkID0gMDtcclxuICAgIGFtb3VudFBhaWQgPSAwO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudEludm9pY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseURpc2NvdW50KGludm9pY2UsIGRpc2NvdW50YWJsZXMpIHtcclxuICAgIGludm9pY2UuZGlzY291bnQgPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3QgaWR4IGluIGludm9pY2Uuc2VydmljZXMpIHtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gaW52b2ljZS5zZXJ2aWNlc1tpZHhdO1xyXG4gICAgICAgIGlmIChkaXNjb3VudGFibGVzLmluZGV4T2Yoc2VydmljZS5pZCkgPiAtMSkge1xyXG4gICAgICAgICAgICBpbnZvaWNlLmRpc2NvdW50ICs9IHNlcnZpY2UubmJVbml0ZXMgKiBNYXRoLmFicyhzZXJ2aWNlLnVuaXRQcmljZSAtIHNlcnZpY2UuZGVmbGF0ZWRQcmljZSk7XHJcbiAgICAgICAgICAgIGludm9pY2Uuc2VydmljZXNbaWR4XS51bml0UHJpY2UgPSBzZXJ2aWNlLmRlZmxhdGVkUHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgaWR4IGluIGludm9pY2UuYXJ0aWNsZXMpIHtcclxuICAgICAgICBjb25zdCBhcnRpY2xlID0gaW52b2ljZS5hcnRpY2xlc1tpZHhdO1xyXG4gICAgICAgIGlmIChkaXNjb3VudGFibGVzLmluZGV4T2YoYXJ0aWNsZS5pZCkgPiAtMSkge1xyXG4gICAgICAgICAgICBpbnZvaWNlLmRpc2NvdW50ICs9IGFydGljbGUubmJVbml0ZXMgKiBNYXRoLmFicyhhcnRpY2xlLnVuaXRQcmljZSAtIGFydGljbGUuZGVmbGF0ZWRQcmljZSk7XHJcbiAgICAgICAgICAgIGludm9pY2UuYXJ0aWNsZXNbaWR4XS51bml0UHJpY2UgPSBhcnRpY2xlLmRlZmxhdGVkUHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnZvaWNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEaXNjb3VudChpbnZvaWNlKSB7XHJcbiAgICBpbnZvaWNlLmRpc2NvdW50ID0gMDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGlkeCBpbiBpbnZvaWNlLnNlcnZpY2VzKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHNlcnZpY2VzLmZpbmQocyA9PiBzLnNlcnZpY2VJZCA9PT0gaW52b2ljZS5zZXJ2aWNlc1tpZHhdLmlkKTtcclxuICAgICAgICBpbnZvaWNlLnNlcnZpY2VzW2lkeF0udW5pdFByaWNlID0gc2VydmljZS51bml0UHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBpZHggaW4gaW52b2ljZS5hcnRpY2xlcykge1xyXG4gICAgICAgIGNvbnN0IGFydGljbGUgPSBzZXJ2aWNlcy5maW5kKHMgPT4gcy5zZXJ2aWNlSWQgPT09IGludm9pY2UuYXJ0aWNsZXNbaWR4XS5pZCk7XHJcbiAgICAgICAgaW52b2ljZS5hcnRpY2xlc1tpZHhdLnVuaXRQcmljZSA9IGFydGljbGUudW5pdFByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnZvaWNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZWVkVG9TZWxsKHNhbGVUeXBlLCBwYXltZW50TW9kZSA9IG51bGwsIG5ldEFtb3VudCA9IG51bGwsIHNhbGVNb2RhbCA9IG51bGwsIHNhbGVNb2RhbENvbnRhaW5lciA9IG51bGwsIG1vbnRhbnRQYXllID0gbnVsbCwgaXNEaXNjb3VudEFwcGxpY2FibGUgPSBmYWxzZSkge1xyXG4gICAgLy8gbGV0IGludm9pY2UgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZhY3R1cmUnKSk7XHJcbiAgICBsZXQgaW52b2ljZSA9IGN1cnJlbnRJbnZvaWNlO1xyXG4gICAgY29uc3Qgc2FsZVRvdGFsID0gaW52b2ljZS50b3RhbCArIGludm9pY2Uud29ya2ZvcmNlIC0gaW52b2ljZS5kaXNjb3VudDtcclxuXHJcbiAgICBpZiAoIShbJ3Byb2Zvcm1hJywgJ2hvbGQnXS5pbmNsdWRlcyhzYWxlVHlwZSkpICYmICFwZXJtaXNzaW9ucy5pbmNsdWRlcygnY3JlZGl0JykgJiYgbW9udGFudFBheWUgPCBzYWxlVG90YWwpIHtcclxuICAgICAgICBzaG93QWxlcnQoJ1ZvdXMgblxcJ8OqdGVzIHBhcyBhdXRvcmlzw6kgw6AgZmFpcmUgdW5lIHZlbnRlIMOgIGNyw6lkaXQuJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKCEoWydwcm9mb3JtYScsICdob2xkJ10uaW5jbHVkZXMoc2FsZVR5cGUpKSAmJiAhcGVybWlzc2lvbnMuaW5jbHVkZXMoJ2Nhc2gnKSAmJiBtb250YW50UGF5ZSA+PSBzYWxlVG90YWwpIHtcclxuICAgICAgICBzaG93QWxlcnQoJ1ZvdXMgblxcJ8OqdGVzIHBhcyBhdXRvcmlzw6kgw6AgZmFpcmUgdW5lIHZlbnRlIGNhc2guJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKGludm9pY2UudG90YWwgPiAwKSB7XHJcbiAgICAgICAgaWYgKCEoWydwcm9mb3JtYScsICdob2xkJ10uaW5jbHVkZXMoc2FsZVR5cGUpKSAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG5ldEFtb3VudCAmJiBtb250YW50UGF5ZSA8IHNhbGVUb3RhbCAmJiB0eXBlb2YgaW52b2ljZS5jbGllbnRbJ2lkJ10gIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHNob3dBbGVydCgnVmV1aWxsZXogc8OpbGVjdGlvbm5lciB1biBjbGllbnQgcG91ciBjb250aW51ZXIuJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZVRvc2VudEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlcmV0cmFpdGlucHV0Jyk7XHJcbiAgICAgICAgICAgIGxldCBkYXRlVG9zZW50ID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBwYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGVUb3NlbnRFbHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVUb3NlbnQgPSBkYXRlVG9zZW50RWx0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJycgPT09IGRhdGVUb3NlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVjaGVhbmNlIGRlIDcgam91cnMgcGFyIGRlZmF1dFxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvc2VudCA9IChuZXcgRGF0ZShEYXRlLm5vdygpICsgNjA0ODAwMDAwKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnLCBzZWNvbmQ6ICdudW1lcmljJ30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpbnZvaWNlID0gaXNEaXNjb3VudEFwcGxpY2FibGUgPyBhcHBseURpc2NvdW50KGludm9pY2UsIGRpc2NvdW50YWJsZXMpIDogcmVtb3ZlRGlzY291bnQoaW52b2ljZSk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Bpbm5lcicpLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHBheWxvYWQgPSB7IHNvdXJjZUludm9pY2VJZDogaW52b2ljZT8uaWQsIGNsaWVudDogaW52b2ljZS5jbGllbnRbJ2lkJ10sIHNhbGVUeXBlOiBzYWxlVHlwZSwgcGF5bWVudE1vZGU6IHBheW1lbnRNb2RlLCBhbW91bnRQYWlkOiBtb250YW50UGF5ZSwgdG90YWw6IGludm9pY2UudG90YWwsIHdvcmtmb3JjZTogKGludm9pY2Uud29ya2ZvcmNlID09PSAwICYmICdudW1iZXInID09PSB0eXBlb2Ygd29ya2ZvcmNlUGVyY2VudCAmJiB3b3JrZm9yY2VQZXJjZW50ID4gMCA/IHdvcmtmb3JjZVBlcmNlbnQgKiBpbnZvaWNlLnRvdGFsIDogaW52b2ljZS53b3JrZm9yY2UpLCB3b3JrZm9yY2VQZXJjZW50OiB3b3JrZm9yY2VQZXJjZW50LCBkaXNjb3VudDogaW52b2ljZS5kaXNjb3VudCwgZGV0YWlsczogaW52b2ljZSwgbGljZW5jZWlkOiBsaWNlbmNlSWQsIGRhdGU6IGRhdGVUb3NlbnQgfTtcclxuICAgICAgICAgICAgLy8gcGF5bG9hZCA9IHsgY2xpZW50OiBjbGllbnRbJ2lkJ10sIHNhbGVUeXBlOiBzYWxlVHlwZSwgcGF5bWVudE1vZGU6IHBheW1lbnRNb2RlLCBhbW91bnRQYWlkOiBtb250YW50UGF5ZSwgdG90YWw6IGludm9pY2UudG90YWwsIHdvcmtmb3JjZTogaW52b2ljZS53b3JrZm9yY2UsIHdvcmtmb3JjZVBlcmNlbnQ6IHdvcmtmb3JjZVBlcmNlbnQsIGRpc2NvdW50OiBpbnZvaWNlLmRpc2NvdW50LCBkZXRhaWxzOiBpbnZvaWNlLCBkYXRlOiBkYXRlVG9zZW50IH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vc2FsZXMvbmV3YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSksXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZUJ1dHRvbiA9IHNhbGVNb2RhbENvbnRhaW5lcj8ucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvb3RlciA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGlubmVyJykuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4ocmVzcEJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRCb2R5ID0gSlNPTi5wYXJzZShyZXNwQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsRmFjdHVyZXNFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwtZmFjdHVyZXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpZW50SWQgPSBwYXJzZWRCb2R5LmNsaWVudElkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaW52b2ljZUlkJywgcGFyc2VkQm9keS5pbnZvaWNlSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZS5pZCA9IHBhcnNlZEJvZHkuaW52b2ljZUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlLnR5cGUgPSBzYWxlVHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChbJ2Nhc2gnLCAnY3JlZGl0J10uaW5kZXhPZihzYWxlVHlwZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWVudElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxCb251c0VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1ib251cycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyA9IGlzTmFOKGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKSB8fCAndW5kZWZpbmVkJyA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMgPyAwIDogKCdzdHJpbmcnID09PSB0eXBlb2YgY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMgPyBOdW1iZXIucGFyc2VGbG9hdChjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cykgOiBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxCb251c0VsdC50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzLnRvRml4ZWQoMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGlubmVyJykuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvbnVzZXMgPSBwYXJzZWRCb2R5LmJvbnVzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxCb251cyA9IGJvbnVzZXMubGVuZ3RoID4gMCA/IGJvbnVzZXMucmVkdWNlKChhY2N1LCBuZXh0KSA9PiBhY2N1ICsgbmV4dCwgMCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWZmaXhlID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbEJvbnVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXhlID0gYCBMZSBjbGllbnQgdmllbnQgZGUgZ2FnbmVyICR7dG90YWxCb251cy50b0ZpeGVkKDIpfSAkIGVuIGJvbnVzLmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzICs9IHRvdGFsQm9udXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsQm9udXNFbHQudGV4dENvbnRlbnQgPSAoTnVtYmVyLnBhcnNlRmxvYXQodG90YWxCb251c0VsdC50ZXh0Q29udGVudCkgKyB0b3RhbEJvbnVzKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KGBWZW50ZSAke3NhbGVUeXBlfSBlZmZlY3R1w6llIGF2ZWMgc3VjY8OocyAhJHtzdWZmaXhlfWAsICdzdWNjZXNzJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwaW5uZXInKS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoYFZlbnRlICR7c2FsZVR5cGV9IGVmZmVjdHXDqWUgYXZlYyBzdWNjw6hzICFgLCAnc3VjY2VzcycsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmludEludm9pY2UoJ0ZBQ1RVUkUnLCBpbnZvaWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2FsZVR5cGUgPT09ICdwcm9mb3JtYScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGlubmVyJykuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoJ0ZhY3R1cmUgcHJvZm9ybWEgZW5yZWdpc3Ryw6llJywgJ3N1Y2Nlc3MnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmludEludm9pY2UoJ0ZBQ1RVUkUnLCBpbnZvaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzYWxlVHlwZSA9PT0gJ2hvbGQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Bpbm5lcicpLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KCdGYWN0dXJlIG1pc2UgZW4gcGF1c2UnLCAnc3VjY2VzcycsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWVudElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEZhY3R1cmVzRWx0LnRleHRDb250ZW50ID0gTnVtYmVyLnBhcnNlSW50KHRvdGFsRmFjdHVyZXNFbHQudGV4dENvbnRlbnQsIDEwKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4ocmVzcG9uc2VCb2R5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KEpTT04ucGFyc2UocmVzcG9uc2VCb2R5KS5tZXNzYWdlLCAnZGFuZ2VyJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93QWxlcnQocmVzcG9uc2VCb2R5LCAnZGFuZ2VyJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBzYWxlQnV0dG9uICYmICEoWydwcm9mb3JtYScsICdob2xkJ10uaW5jbHVkZXMoc2FsZVR5cGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9jZWVkVG9TZWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEoWydwcm9mb3JtYScsICdob2xkJ10uaW5jbHVkZXMoc2FsZVR5cGUpKSkge1xyXG4gICAgICAgICAgICAgICAgc2FsZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaW52b2ljZScsIEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcclxuICAgICAgICAgICAgcmVzZXRDYXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gc2FsZU1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXRDYXJ0KCk7XHJcbiAgICAvLyBzYWxlTW9kYWwuaGlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxsKHR5cGUsIGludm9pY2UpIHtcclxuICAgIGlmIChjbG90dXJlID09PSBudWxsKSB7XHJcblxyXG4gICAgICAgIGlmICghcGVybWlzc2lvbnMuaW5jbHVkZXMoJ3Byb2Zvcm1hJykgJiYgdHlwZSA9PT0gJ3Byb2Zvcm1hJykge1xyXG4gICAgICAgICAgICBzaG93QWxlcnQoJ1ZvdXMgblxcJ8OqdGVzIHBhcyBhdXRvcmlzw6kgw6AgZmFpcmUgdW5lIGZhY3R1cmUgcHJvZm9ybWEuJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnZvaWNlLnRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbW9udGFudFBheWUgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgc2FsZVR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICBsZXQgcGF5bWVudE1vZGUgPSAxO1xyXG4gICAgICAgICAgICBsZXQgaXNEaXNjb3VudEFwcGxpY2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IG5ldEFtb3VudCA9IGludm9pY2UudG90YWwgLSBpbnZvaWNlLmRpc2NvdW50O1xyXG5cclxuICAgICAgICAgICAgaW52b2ljZS53b3JrZm9yY2UgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNhbGVUeXBlID09PSAnc2FsZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbGVNb2RhbEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYWxlLW1vZGFsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYWxlTW9kYWwgPSBuZXcgbWRiLk1vZGFsKHNhbGVNb2RhbEVsdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF5bWVudE1vZGVTZWxlY3QgPSBzYWxlTW9kYWxFbHQucXVlcnlTZWxlY3RvcignI3BheW1lbnQtbW9kZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNhbGVNb2RhbENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGxldCBhbW91bnRFbHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2FsZVRvdGFsRWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMpICYmIGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzID49IG5ldEFtb3VudCArIGludm9pY2Uud29ya2ZvcmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1vZGVTZWxlY3QucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlID0gTnVtYmVyLnBhcnNlRmxvYXQoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpc0Rpc2NvdW50QXBwbGljYWJsZSA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC5pZCAhPT0gbnVsbCAmJiBjdXJyZW50SW52b2ljZS5jbGllbnQuZGlzY291bnRBcHBsaWNhYmxlICYmIHBheW1lbnRNb2RlID09PSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHNhbGVNb2RhbEVsdC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZU1vZGFsQ29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudEVsdCA9IHNhbGVNb2RhbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc2FsZS1hbW91bnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzYWxlVG90YWxFbHQgPSBzYWxlTW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvcignI3NhbGUtdG90YWwgPiBzcGFuOm50aC1jaGlsZCgyKScpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRFbHQudmFsdWUgPSBuZXRBbW91bnQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBtb250YW50UGF5ZSA9IG5ldEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBzYWxlVG90YWxFbHQudGV4dENvbnRlbnQgPSBtb250YW50UGF5ZS50b0ZpeGVkKDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiB3b3JrZm9yY2VQZXJjZW50ICYmIHdvcmtmb3JjZVBlcmNlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtmb3JjZUVsdCA9IHNhbGVNb2RhbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc2FsZS13b3JrZm9yY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2ZvcmNlRWx0LnZhbHVlID0gbnVsbCA9PT0gd29ya2ZvcmNlUGVyY2VudCA/IDAgOiBuZXRBbW91bnQgKiB3b3JrZm9yY2VQZXJjZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU2FsZVRvdGFsID0gKGN1cnJlbnRUYXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLnBhcnNlRmxvYXQod29ya2ZvcmNlRWx0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtmb3JjZUVsdC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGFyZ2V0LmlkID09PSAnc2FsZS13b3JrZm9yY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2Uud29ya2ZvcmNlID0gTnVtYmVyLnBhcnNlRmxvYXQod29ya2ZvcmNlRWx0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXRBbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdChhbW91bnRFbHQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250YW50UGF5ZSA9IG5ldEFtb3VudCArIE51bWJlci5wYXJzZUZsb2F0KGludm9pY2Uud29ya2ZvcmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVUb3RhbEVsdC50ZXh0Q29udGVudCA9IG1vbnRhbnRQYXllLnRvRml4ZWQoMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9udGFudFBheWUgPD0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1vZGVTZWxlY3QucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1vZGVTZWxlY3Quc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2Uud29ya2ZvcmNlID0gKCh3b3JrZm9yY2VQZXJjZW50ID8/IDAuMikgKiBuZXRBbW91bnQpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gd29ya2ZvcmNlRWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZm9yY2VFbHQudmFsdWUgPSBpbnZvaWNlLndvcmtmb3JjZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2FsZVRvdGFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gd29ya2ZvcmNlRWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZm9yY2VFbHQucGFyZW50Tm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Ftb3VudEVsdCwgd29ya2ZvcmNlRWx0XS5mb3JFYWNoKGVsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTYWxlVG90YWwoY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2FsZVRvdGFsKGN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVTYWxlVG90YWwgPSAoY3VycmVudFRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldEFtb3VudCA9IE51bWJlci5wYXJzZUZsb2F0KGFtb3VudEVsdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGFudFBheWUgPSBuZXRBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlVG90YWxFbHQudGV4dENvbnRlbnQgPSBtb250YW50UGF5ZS50b0ZpeGVkKDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRhbnRQYXllIDw9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlU2VsZWN0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TW9kZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNb2RlU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRFbHQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2FsZVRvdGFsKGN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50RWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTYWxlVG90YWwoY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZU1vZGFsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNzYWxlLW1vZGFsLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q2FydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWxlTW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50SW52b2ljZS50b3RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2FsZVR5cGUgPSBtb250YW50UGF5ZSA8IGludm9pY2UudG90YWwgKyBpbnZvaWNlLndvcmtmb3JjZSAtIGludm9pY2UuZGlzY291bnQgPyAnY3JlZGl0JyA6ICdjYXNoJztcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpbnZvaWNlJywgSlNPTi5zdHJpbmdpZnkoaW52b2ljZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNhbGVUeXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZU1vZGFsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb290ZXIgPiBidXR0b246Zmlyc3QtY2hpbGQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ludm9pY2UnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2ludm9pY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVR5cGUgPSBtb250YW50UGF5ZSA8IGludm9pY2UudG90YWwgKyBpbnZvaWNlLndvcmtmb3JjZSAtIGludm9pY2UuZGlzY291bnQgPyAnY3JlZGl0JyA6ICdjYXNoJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2FsZVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncGF5ZTogJyArIG1vbnRhbnRQYXllKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RvdGFsOiAnICsgaW52b2ljZS50b3RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd3b3JrZm9yY2U6ICcgKyBpbnZvaWNlLndvcmtmb3JjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXNjb3VudDogJyArIGludm9pY2UuZGlzY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmYWN0dXJlJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudEludm9pY2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2VlZFRvU2VsbChzYWxlVHlwZSwgcGF5bWVudE1vZGUsIG5ldEFtb3VudCwgc2FsZU1vZGFsLCBzYWxlTW9kYWxDb250YWluZXIsIG1vbnRhbnRQYXllLCBpc0Rpc2NvdW50QXBwbGljYWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzYWxlTW9kYWwuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mIHdvcmtmb3JjZVBlcmNlbnQgJiYgd29ya2ZvcmNlUGVyY2VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2FsZVR5cGUgPT09ICdwcm9mb3JtYScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZm9ybWFNb2RhbEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9mb3JtYS1tb2RhbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9mb3JtYU1vZGFsID0gbmV3IG1kYi5Nb2RhbChwcm9mb3JtYU1vZGFsRWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ya2ZvcmNlVmFsdWUgPSAod29ya2ZvcmNlUGVyY2VudCA/PyAwKSAqIGN1cnJlbnRJbnZvaWNlLnRvdGFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZm9ybWFNb2RhbEVsdC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9mb3JtYU1vZGFsQ29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zvcm1hTW9kYWxFbHQucXVlcnlTZWxlY3RvcignI3Byb2Zvcm1hLXdvcmtmb3JjZS1pbnB1dCcpLnZhbHVlID0gd29ya2ZvcmNlVmFsdWUudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zvcm1hTW9kYWxFbHQucXVlcnlTZWxlY3RvcignI2Rpc2NvdW50LXByb2Zvcm1hJykudGV4dENvbnRlbnQgPSBjdXJyZW50SW52b2ljZS5kaXNjb3VudC50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZm9ybWFNb2RhbEVsdC5xdWVyeVNlbGVjdG9yKCcjdG90YWwtcHJvZm9ybWEnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLnRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9mb3JtYU1vZGFsRWx0LnF1ZXJ5U2VsZWN0b3IoJyNuZXQtcHJvZm9ybWEnKS50ZXh0Q29udGVudCA9ICh3b3JrZm9yY2VWYWx1ZSArIGN1cnJlbnRJbnZvaWNlLnRvdGFsIC0gY3VycmVudEludm9pY2UuZGlzY291bnQpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZm9ybWFNb2RhbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjcHJvZm9ybWEtbW9kYWwtY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldENhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9mb3JtYU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpbnZvaWNlJywgSlNPTi5zdHJpbmdpZnkoaW52b2ljZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Zvcm1hTW9kYWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvb3RlciA+IGJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbnZvaWNlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpbnZvaWNlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2ludm9pY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9mb3JtYU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmYWN0dXJlJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudEludm9pY2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWVkVG9TZWxsKCdwcm9mb3JtYScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9mb3JtYU1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZWVkVG9TZWxsKCdob2xkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2VlZFRvU2VsbChzYWxlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93QWxlcnQoJ1ZvdXMgYXZleiBkw6lqw6AgY2zDtHR1csOpIGxhIGpvdXJuw6llJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBheWVyRGV0dGVzKGVtcGxveWVzID0gJycpIHtcclxuICAgIGNvbnN0IHNwaW5uZXJFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXByaW50LXJlY2VpcHQgLm1vZGFsLWJvZHkgPiBkaXY6bGFzdC1jaGlsZCA+IGJ1dHRvbjpmaXJzdC1jaGlsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHByaW50UmVjZWlwdE1vZGFsLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChhbW91bnRQYWlkID4gMCkge1xyXG4gICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2RldHRlcy8ke2N1cnJlbnRJbnZvaWNlLmNsaWVudC5pZH0vcGFpZW1lbnQke2VtcGxveWVzID09PSAnJyA/ICcnIDogJy9lbXBsb3llZXMnfT9hbW91bnQ9JHthbW91bnRQYWlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwLnRleHQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwaW5uZXJFbHQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcHJpbnQtcmVjZWlwdCAubW9kYWwtYm9keSA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bGFzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gYW1vdW50UGFpZDtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1wcmludC1yZWNlaXB0IC5tb2RhbC1ib2R5ID4gZGl2Om50aC1jaGlsZCgzKSA+IGRpdjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBhbW91bnREdWVTb2xkIC0gYW1vdW50UGFpZDtcclxuICAgICAgICAgICAgICAgICAgICBwcmludFJlY2VpcHRNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWREZWJ0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRlYnRzID0gc2VsZWN0ZWREZWJ0cy5tYXAoZGVidCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZGVidC5pZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWQ6IE51bWJlci5wYXJzZUZsb2F0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZWJ0cy10YWJsZSR7ZW1wbG95ZXN9IHRib2R5ID4gdHI6bnRoLWNoaWxkKCR7ZGVidC5yb3dJbmRleCArIDF9KSA+IHRkOm50aC1jaGlsZCg2KWApLnRleHRDb250ZW50KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS9kZXR0ZXMvJHtjdXJyZW50SW52b2ljZS5jbGllbnQuaWR9L3BhaWVtZW50YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGVidHMpXHJcbiAgICAgICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICAgICAgICAgIHJlc3AudGV4dCgpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5lckVsdC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnRQYWlkID0gZGVidHMucmVkdWNlKChhY2N1LCBkZWJ0KSA9PiBhY2N1ICsgZGVidC5hbW91bnRQYWlkLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1wcmludC1yZWNlaXB0IC5tb2RhbC1ib2R5ID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBhbW91bnRQYWlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXByaW50LXJlY2VpcHQgLm1vZGFsLWJvZHkgPiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2Omxhc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGFtb3VudER1ZVNvbGQgLSBhbW91bnRQYWlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW50UmVjZWlwdE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbm5lckVsdC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGVidFBheW1lbnQobW9kYWxJZCwgdXJsRnJhZ21lbnQgPSAnJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJZCkuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YXRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9kYWxJZH0gLm1vZGFsLWJvZHkgPiAuZGF0YXRhYmxlYCk7XHJcbiAgICAgICAgY29uc3QgcGF5Rm9yRW1wbG95ZWVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhaWVtZW50LWRldHRlcyAubW9kYWwtZm9vdGVyIGJ1dHRvbjpmaXJzdC1jaGlsZCcpO1xyXG4gICAgICAgIGxldCBpc0VudGVycHJpc2U7XHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0RhdGUgZFxcJ29jdHJvaScsIGZpZWxkOiAnZGF0ZU9jdHJvaScgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0VjaMOpYW5jZScsIGZpZWxkOiAnZWNoZWFuY2UnIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdDcsOpZGl0JywgZmllbGQ6ICdhbW91bnQnIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdEw6lqw6AgcGF5w6knLCBmaWVsZDogJ3BhaWQnIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6ICdBIHBheWVyJywgZmllbGQ6ICdzb2xkJyB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiAnU29sZGUnLCBmaWVsZDogJ3JlbWFpbmRlcicgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogJ0lEJywgZmllbGQ6ICdpZCcsIHNvcnQ6IGZhbHNlIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoISF1cmxGcmFnbWVudCkge1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goeyBsYWJlbDogJ0VtcGxvecOpJywgZmllbGQ6ICdub21DbGllbnQnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YXRhYmxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgZGF0YXRhYmxlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRhdGF0YWJsZS5kYXRhc2V0Lm1heEhlaWdodCA9IDQwMDtcclxuXHJcbiAgICAgICAgY29uc3QgZGVidHNUYWJsZUluc3RhbmNlID0gbmV3IG1kYi5EYXRhdGFibGUoZGF0YXRhYmxlLCB7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnNcclxuICAgICAgICB9LCB7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50SW52b2ljZS5jbGllbnQudHlwZUNsaWVudCA9PT0gJ21vcmFsZScpIHtcclxuICAgICAgICAgICAgcGF5Rm9yRW1wbG95ZWVzQnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGlzRW50ZXJwcmlzZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGF5Rm9yRW1wbG95ZWVzQnRuLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBpc0VudGVycHJpc2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWllbWVudERldHRlc01vZGFsTGFiZWwgPiBzcGFuJykudGV4dENvbnRlbnQgPSBjdXJyZW50SW52b2ljZS5jbGllbnQubm9tQ2xpZW50O1xyXG5cclxuICAgICAgICBmZXRjaChgJHtiYXNlVXJsfS9kZXR0ZXMvJHtjdXJyZW50SW52b2ljZS5jbGllbnQuaWR9JHt1cmxGcmFnbWVudH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihyZXNwb25zZUJvZHkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKHJlc3BvbnNlQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0dGVzID0gYm9keS5kYXRhLmRlYnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJvd3MgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IGRldHRlcy5yZWR1Y2UoKGFjY3UsIG5leHQpID0+IGFjY3UgKyBuZXh0LnNvbGQsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXREeW5hbWljUGFydHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudER1ZVNvbGQgPSAodG90YWwgKyAoaXNFbnRlcnByaXNlICYmIHVybEZyYWdtZW50ID09PSAnJyA/ICghIWJvZHkuZGF0YS50b3RhbEVtcGxveWVlcyA/IE51bWJlci5wYXJzZUZsb2F0KGJvZHkuZGF0YS50b3RhbEVtcGxveWVlcykgOiAwKSA6IDApKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHttb2RhbElkfSAubW9kYWwtZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2ID4gc3BhbjpudGgtY2hpbGQoMilgKS50ZXh0Q29udGVudCA9IGFtb3VudER1ZVNvbGQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BhaWVtZW50LWRldHRlcyAubW9kYWwtZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2ID4gc3Bhbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOm50aC1jaGlsZCgyKSknKS5mb3JFYWNoKHNwYW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbnRlcnByaXNlID8gc3Bhbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpIDogc3Bhbi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbnRlcnByaXNlLWRlYnRzJykudGV4dENvbnRlbnQgPSAoaXNFbnRlcnByaXNlID8gdG90YWwgOiAwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1wbG95ZWVzLWRlYnRzJykudGV4dENvbnRlbnQgPSAoaXNFbnRlcnByaXNlID8gKCEhYm9keS5kYXRhLnRvdGFsRW1wbG95ZWVzID8gTnVtYmVyLnBhcnNlRmxvYXQoYm9keS5kYXRhLnRvdGFsRW1wbG95ZWVzKSA6IDApIDogMCkudG9GaXhlZCgyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCg4KSwgdGhlYWQgPiB0ciA+IHRoOm50aC1jaGlsZCg4KScpLmZvckVhY2goaWRFbHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRFbHQuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSA+IHRyJykuZm9yRWFjaChyb3dFbHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RWx0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5ID4gdHIgPiB0ZDpudGgtY2hpbGQoNiknKS5mb3JFYWNoKGVsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbW91bnREdWUgPSBOdW1iZXIucGFyc2VGbG9hdChlbHQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyLnBhcnNlRmxvYXQoZWx0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcigndGQ6bnRoLWNoaWxkKDUpJykudGV4dENvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbHRDb250ZW50ID0gTnVtYmVyLnBhcnNlRmxvYXQoZWx0LnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXkgPSBpc05hTihlbHRDb250ZW50KSA/IDAgOiBlbHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBhbW91bnREdWUgLSBwYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBheSA+PSAwICYmIGRpZmYgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCd0ZDpudGgtY2hpbGQoNyknKS50ZXh0Q29udGVudCA9IGRpZmYudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQuYmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHQudGV4dENvbnRlbnQgPSBhbW91bnREdWUudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWx0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcigndGQ6bnRoLWNoaWxkKDcpJykudGV4dENvbnRlbnQgPSAoMCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdFJvd3MubWRiLmRhdGF0YWJsZScsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheWVyLWRldHRlcycgKyAobW9kYWxJZCA9PT0gJ3BhaWVtZW50LWRldHRlcycgPyAnJyA6ICctZW1wbG95ZWVzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zZWxlY3RlZEluZGV4ZXMubGVuZ3RoID4gMCA/IHBheUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgOiBwYXlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREZWJ0cyA9IGUuc2VsZWN0ZWRSb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50UGFpZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5hZGRFdmVudExpc3RlbmVyKCdyZW5kZXIubWRiLmRhdGF0YWJsZScsIHNldER5bmFtaWNQYXJ0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlYnRzVGFibGVJbnN0YW5jZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBkZXR0ZXMubWFwKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3cgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPY3Ryb2k6IGAkeyhuZXcgRGF0ZShyb3cuZGF0ZU9jdHJvaS5kYXRlKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsIHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJ30pfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWNoZWFuY2U6IGAkeyhuZXcgRGF0ZShyb3cuZWNoZWFuY2UuZGF0ZSkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7eWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYyd9KX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogYCR7cm93LmFtb3VudC50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFpZDogYCR7KHJvdy5hbW91bnQgLSByb3cuc29sZCkudG9GaXhlZCgyKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGQ6IGAke3Jvdy5zb2xkLnRvRml4ZWQoMil9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXI6IGAkeygwKS50b0ZpeGVkKDIpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXVybEZyYWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdSb3csIHsgbm9tQ2xpZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdSb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHsgbG9hZGluZzogZmFsc2UsIGhvdmVyOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKG1vZGFsSWQuaW5kZXhPZignZW1wbG95ZWVzJykgPT09IC0xID8gJycgOiAnZW1wbG95ZWVzLScpICsgJ2RlYnQtc2VhcmNoLWlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkZWJ0c1RhYmxlSW5zdGFuY2Uuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbmVUaW1lUGF5bWVudChhbW91bnRQYWlkLCBzdWZmaXhlID0gJycpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkZWJ0LWFtb3VudCR7c3VmZml4ZX1gKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwYXllci1kZXR0ZXMke3N1ZmZpeGV9YCk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNwYWllbWVudC1kZXR0ZXMke3N1ZmZpeGV9IC5tb2RhbC1ib2R5ID4gLmRhdGF0YWJsZSAuZm9ybS1jaGVjay1pbnB1dGApO1xyXG5cclxuICAgICAgICBhbW91bnRQYWlkID0gTnVtYmVyLnBhcnNlRmxvYXQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChhbW91bnRQYWlkID4gMCkge1xyXG4gICAgICAgICAgICBwYXlCdG4ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXlCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3gucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRJbnZvaWNlKHByaW50VHlwZSwgcGVybWlzc2lvbnMsIGZhY3R1cmUgPSBudWxsKSB7XHJcbiAgICBjb25zdCBpbnZvaWNlID0gZmFjdHVyZSA/PyBjdXJyZW50SW52b2ljZTtcclxuXHJcbiAgICBpZiAobnVsbCAhPT0gaW52b2ljZS5pZCkge1xyXG4gICAgICAgIGNvbnN0IGludm9pY2VUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnZvaWNlLXRlbXBsYXRlJyk7XHJcbiAgICAgICAgY29uc3QgaW52b2ljZVRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnZvaWNlLXRhYmxlLWJvZHknKTtcclxuICAgICAgICBjb25zdCBpbnZvaWNlRm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ludm9pY2UtZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgaW52b2ljZVRvdGFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZvaWNlLXRvdGFscycpO1xyXG4gICAgICAgIGxldCBzZXJ2aWNlc0ZvckJvbnVzID0gW107XHJcbiAgICAgICAgbGV0IGRhdGVSZXRyYWl0O1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pOyAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGVUb3NlbnRFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZXJldHJhaXRpbnB1dCcpO1xyXG4gICAgICAgIGxldCBkYXRlVG9zZW50ID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChkYXRlVG9zZW50RWx0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGVUb3NlbnQgPSBkYXRlVG9zZW50RWx0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2goYCR7YmFzZVVybH0vZmFjdHVyZWRhdGVyZXRyYWl0YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmYWN0dXJlSWQ6IGludm9pY2UuaWQsIGRhdGU6IGRhdGVUb3NlbnQgfSlcclxuICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihyZXNwb25zZURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGJJbnZvaWNlID0gZGF0YS5pbnZvaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGRhdGEuY2xpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcnF1ZSA9IGRhdGEubWFycXVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVPdU1vZGVsZSA9IGRhdGEudHlwZU91TW9kZWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWVyb0ltbWF0cmljdWxhdGlvbiA9IGRhdGEubnVtZXJvSW1tYXRyaWN1bGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGtpbG9tZXRyYWdlID0gZGF0YS5raWxvbWV0cmFnZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW52b2ljZU5ldDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZS50b3RhbCA9IGRiSW52b2ljZS50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlLmRpc2NvdW50ID0gZGJJbnZvaWNlLmRpc2NvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2UuYW1vdW50UGFpZCA9IGRiSW52b2ljZS5hbW91bnRQYWlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2Uud29ya2ZvcmNlID0gZGJJbnZvaWNlLndvcmtmb3JjZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlLndvcmtmb3JjZVBlcmNlbnQgPSBkYkludm9pY2Uud29ya2ZvcmNlUGVyY2VudDtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlLnR5cGUgPSBkYkludm9pY2UudHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlLnBheW1lbnRNb2RlID0gZGJJbnZvaWNlLnBheW1lbnRNb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2UuZGF0ZSA9IGRiSW52b2ljZS5kYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2VOZXQgPSBpbnZvaWNlLnRvdGFsICsgaW52b2ljZS53b3JrZm9yY2UgLSAoY2xpZW50LmlkICE9PSBudWxsID8gaW52b2ljZS5kaXNjb3VudCA6IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVSZXRyYWl0ID0gZGF0YS5kYXRlUmV0cmFpdDtcclxuICAgICAgICAgICAgICAgICAgICBsaWNlbmNlSWQgPSBkYkludm9pY2UubGljZW5jZUlkID8/IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludm9pY2VGb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzPVwiJHtwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpID8gJ2QtZmxleCBmbGV4LXJvdy1yZXZlcnNlIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCcgOiAnJyB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiJHtwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpID8gJ3RleHQtcmlnaHQgJyA6ICcnIH13LTUwXCIgaWQ9XCJpbnZvaWNlLXRvdGFsc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJHtwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpID8gJzxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnQgdy01MFwiPjxiPlLDqGdsZW1lbnQgOiZuYnNwOzwvYj5lc3DDqGNlczwvZGl2PicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25zLmluY2x1ZGVzKCdmYWN0dXJlLXZlaGljdWxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludm9pY2UtY2xpZW50JykuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRleHQtbGVmdCBib3JkZXItZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0xIHctNTAgYm9yZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgYmcteWVsbG93IGZvbnQtd2VpZ2h0LWJvbGRcIj4ke21haXNvblsnbm9tU29jaWV0ZSddfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+JHttYWlzb25bJ2FkcmVzc2VQaHlzaXF1ZSddfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+TsKwIEltcMO0dCA6Jm5ic3A7JHttYWlzb25bJ251bUltcG90J119Jm5ic3A7LyZuYnNwO0lkLk5hdC4gOiZuYnNwOyR7bWFpc29uWydpZE5hdGlvbm5hbCddfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+UkNDTSA6Jm5ic3A7JHttYWlzb25bJ3JlZ2lzdHJlQ29tbWVyY2UnXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlTDqWzDqXBob25lIDombmJzcDske21haXNvblsndGVsZXBob25lJ119PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIj5FLW1haWwgOiZuYnNwOyR7bWFpc29uWydtYWlsJ119PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0xIHctNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBiZy15ZWxsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7DgCZuYnNwOzombmJzcDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjbGllbnQubm9tQ2xpZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZHJlc3NlJm5ic3A7OiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2NsaWVudC5hZHJlc3NlUGh5c308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxhcXVlJm5ic3A7OiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke251bWVyb0ltbWF0cmljdWxhdGlvbiA/PyAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VsOpaGljdWxlJm5ic3A7OiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke21hcnF1ZSA/PyAnJ30gJHt0eXBlT3VNb2RlbGUgPz8gJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlTDqWzDqXBob25lJm5ic3A7OiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2NsaWVudC50ZWxlcGhvbmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvZGUmbmJzcDtjbGllbnQmbmJzcDs6Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7Y2xpZW50LmlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnZvaWNlLWNsaWVudCcpLmlubmVySFRNTCA9IGAke2NsaWVudC5pZCA9PT0gbnVsbCA/ICcnIDogJzxiPkNsaWVudCA6ICcgKyBjbGllbnQubm9tQ2xpZW50fTwvYj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZVRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaW52b2ljZS5hcnRpY2xlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0UHJpY2UgPSBzZXJ2aWNlcy5maW5kKHMgPT4gcy5zZXJ2aWNlSWQgPT09IGludm9pY2UuYXJ0aWNsZXNba2V5XS5pZCkudW5pdFByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFByaWNlID0gTnVtYmVyLnBhcnNlSW50KGludm9pY2UuYXJ0aWNsZXNba2V5XS5uYlVuaXRlcywgMTApICogdW5pdFByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlVGFibGVCb2R5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiJHtwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpID8gJ2JvcmRlci1yaWdodCAnIDogJyd9dGV4dC1yaWdodFwiPiR7aW52b2ljZS5hcnRpY2xlc1trZXldLm5iVW5pdGVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiJHtwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpID8gJ2JvcmRlci1yaWdodCcgOiAnJ31cIj4ke2ludm9pY2UuYXJ0aWNsZXNba2V5XS5zZXJ2aWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpID8gJzx0ZCBjbGFzcz1cImJvcmRlci1yaWdodCB0ZXh0LXJpZ2h0XCI+JyArIHVuaXRQcmljZS50b0ZpeGVkKDIpICsgJzwvdGQ+JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj4ke3RvdGFsUHJpY2UudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGludm9pY2Uuc2VydmljZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdFByaWNlID0gc2VydmljZXMuZmluZChzID0+IHMuc2VydmljZUlkID09PSBpbnZvaWNlLnNlcnZpY2VzW2tleV0uaWQpLnVuaXRQcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxQcmljZSA9IE51bWJlci5wYXJzZUludChpbnZvaWNlLnNlcnZpY2VzW2tleV0ubmJVbml0ZXMsIDEwKSAqIHVuaXRQcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZVRhYmxlQm9keS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIiR7cGVybWlzc2lvbnMuaW5jbHVkZXMoJ2ZhY3R1cmUtdmVoaWN1bGUnKSA/ICdib3JkZXItcmlnaHQgJyA6ICcnfXRleHQtcmlnaHRcIj4ke2ludm9pY2Uuc2VydmljZXNba2V5XS5uYlVuaXRlc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIiR7cGVybWlzc2lvbnMuaW5jbHVkZXMoJ2ZhY3R1cmUtdmVoaWN1bGUnKSA/ICdib3JkZXItcmlnaHQnIDogJyd9XCI+JHtpbnZvaWNlLnNlcnZpY2VzW2tleV0uc2VydmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cGVybWlzc2lvbnMuaW5jbHVkZXMoJ2ZhY3R1cmUtdmVoaWN1bGUnKSA/ICc8dGQgY2xhc3M9XCJib3JkZXItcmlnaHQgdGV4dC1yaWdodFwiPicgKyB1bml0UHJpY2UudG9GaXhlZCgyKSArICc8L3RkPicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JHt0b3RhbFByaWNlLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlkeCBpbiBpbnZvaWNlLmFydGljbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZvaWNlLmFydGljbGVzW2lkeF0uYm9udXNBcHBsaWNhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlc0ZvckJvbnVzLnB1c2goaW52b2ljZS5hcnRpY2xlc1tpZHhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpZHggaW4gaW52b2ljZS5zZXJ2aWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW52b2ljZS5zZXJ2aWNlc1tpZHhdLmJvbnVzQXBwbGljYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZXNGb3JCb251cy5wdXNoKGludm9pY2Uuc2VydmljZXNbaWR4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2VUb3RhbHMuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlc0ZvckJvbnVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvbnVzVGhyZXNob2xkID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZVRvdGFscy5pbm5lckhUTUwgKz0gYDxzbWFsbD48ZW0+Ti5CLjogUG91ciB1biBsb3QgZGUgJHtib251c1RocmVzaG9sZH0gw6lsw6ltZW50cywgb24gdm91cyBhY2NvcmRlIHVuIGJvbnVzLjwvZW0+PC9zbWFsbD5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJvbnVzVGhyZXNob2xkID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlVG90YWxzLmlubmVySFRNTCArPSBgPHNtYWxsPjxlbT5OLkIuOiBWb3VzIGLDqW7DqWZpY2lleiBkZSAkeyhib251c1BlcmNlbnRhZ2UgKiAxMDApLnRvRml4ZWQoMil9ICUgZGUgYm9udXMgcG91ciB0b3V0IGFjaGF0LjwvZW0+PC9zbWFsbD5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlVG90YWxzLmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsJm5ic3A7OiZuYnNwOyR7aW52b2ljZS50b3RhbC50b0ZpeGVkKDIpfSZuYnNwOyQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgaW52b2ljZS5kaXNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlVG90YWxzLmlubmVySFRNTCArPSBgPGJyPjxlbT48c21hbGw+UsOpZHVjdGlvbiA6ICR7aW52b2ljZS5kaXNjb3VudC50b0ZpeGVkKDIpfSAkPC9zbWFsbD48L2VtPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnZvaWNlLndvcmtmb3JjZSAmJiBpbnZvaWNlLndvcmtmb3JjZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZVRvdGFscy5pbm5lckhUTUwgKz0gYDxicj48ZW0+PHNtYWxsPk1haW4gZCdvZXV2cmUgOiAke2ludm9pY2Uud29ya2ZvcmNlLnRvRml4ZWQoMil9ICQ8L3NtYWxsPjwvZW0+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2VUb3RhbHMuaW5uZXJIVE1MICs9IGA8YnI+PGI+VG90YWwgbmV0IDogJHtpbnZvaWNlTmV0LnRvRml4ZWQoMil9ICQ8L2I+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludm9pY2UudHlwZSA9PT0gJ2NyZWRpdCcgJiYgaW52b2ljZU5ldCA+IGludm9pY2UuYW1vdW50UGFpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlVG90YWxzLmlubmVySFRNTCArPSBgPGJyPkF2YW5jZSA6ICR7aW52b2ljZS5hbW91bnRQYWlkLnRvRml4ZWQoMil9ICRgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFpbnZvaWNlLnR5cGUuc3RhcnRzV2l0aCgncHJvZm9ybWEnKSB8fCBpbnZvaWNlLnR5cGUgIT09ICdjYXNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocG9zLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbGF2YWdlJykgPiAtMSAmJiAhaW52b2ljZS50eXBlLnN0YXJ0c1dpdGgoJ3Byb2Zvcm1hJykpIHx8IGludm9pY2UudHlwZSA9PT0gJ2NyZWRpdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSAobmV3IERhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsIHt5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlelZvdXMgPSBuZXcgRGF0ZShkYXRlUmV0cmFpdC5kYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVuZGV6Vm91c1Nob3J0ID0gcmVuZGV6Vm91cy50b0xvY2FsZURhdGVTdHJpbmcoJ2ZyLUZSJywge3llYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZVRvdGFscy5pbm5lckhUTUwgKz0gYDxicj48YnI+PGVtPlJlbmRlei12b3VzIDogJHtyZW5kZXpWb3VzLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB0b2RheSA9PT0gcmVuZGV6Vm91c1Nob3J0ID8ge3llYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCBob3VyOiAnbnVtZXJpYycsIG1pbnV0ZTogJ251bWVyaWMnfSA6ICdBdWpvdXJkXFwnaHVpJyl9PC9lbT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW52b2ljZS50eXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZUZvb3Rlci5pbm5lckhUTUwgPSBwZXJtaXNzaW9ucy5pbmNsdWRlcygnZmFjdHVyZS12ZWhpY3VsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5NZXJjaSAke2ludm9pY2UudHlwZSA9PT0gJ3Byb2Zvcm1hJyA/ICdkZSBub3VzIHJldG91cm5lciBjZXR0ZSBmYWN0dXJlIHByb2Zvcm1hIHNpZ27DqWUgYXZlYyBsYSBtZW50aW9uIFwiYm9uIHBvdXIgYWNjb3JkXCInIDogJ3BvdXIgdm90cmUgY29uZmlhbmNlJ308L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzPVwidGV4dC1yaWdodFwiPkxlIGNlbnRyZSBkZSBjb250csO0bGUgdGVjaG5pcXVlPC9lbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmFpdCBwYXIgOiAke3VzZXJ9PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+RGF0ZSA6ICR7KG5ldyBEYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7eWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycsIGhvdXI6ICdudW1lcmljJywgbWludXRlOiAnbnVtZXJpYyd9KX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGludm9pY2VUZW1wbGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcmludEpTKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRhYmxlOiAnaW52b2ljZS10ZW1wbGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW52b2ljZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21haXNvblsnbG9nbyddICE9PSBudWxsID8gJzxpbWcgc3JjPVwiL3VwbG9hZHMvbG9nb3MvJyArIG1haXNvblsnbG9nbyddICsgJ1wiIGFsdD1cIkxvZ28gZW50cmVwcmlzZVwiPicgOiAnPGgxPicgKyBtYWlzb25bJ25vbVNvY2lldGUnXSArICc8L2gxPid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPjxlbT4keyEhbWFpc29uWydyZWdpc3RyZUNvbW1lcmNlJ10gPyAnUkNDTSA6ICcgKyBtYWlzb25bJ3JlZ2lzdHJlQ29tbWVyY2UnXSArICcsICcgOiAnJ30keyEhbWFpc29uWydpZE5hdGlvbm5hbCddID8gJ0lEIE5hdC4gOiAnICsgbWFpc29uWydpZE5hdGlvbm5hbCddICsgJywgJyA6ICcnfSR7ISFtYWlzb25bJ251bUltcG90J10gPyAnTsKwIEltcMO0dCA6ICcgKyBtYWlzb25bJ251bUltcG90J10gKyAnLCAnIDogJyd9JHshIW1haXNvblsnYXV0b3Jpc2F0aW9uRmN0J10gPyAnQXV0b3Jpc2F0aW9uIDogJyArIG1haXNvblsnYXV0b3Jpc2F0aW9uRmN0J10gOiAnJ308L2VtPjwvc21hbGw+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+PGVtPiR7bWFpc29uWydhZHJlc3NlUGh5c2lxdWUnXSA/PyAnJ30keyEhbWFpc29uWyd0ZWxlcGhvbmUnXSA/ICcsICcgKyBtYWlzb25bJ3RlbGVwaG9uZSddIDogJyd9JHshIW1haXNvblsnbWFpbCddID8gJywgJyArIG1haXNvblsnbWFpbCddIDogJyd9JHshIW1haXNvblsnc2l0ZSddID8gJywgJyArIG1haXNvblsnc2l0ZSddIDogJyd9PC9lbT48L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke3ByaW50VHlwZX0gTsKwJHtpbnZvaWNlLmlkfSR7aW52b2ljZS50eXBlID09PSAncHJvZm9ybWEnID8gKHByaW50VHlwZSA9PT0gJ0ZBQ1RVUkUnID8gJyAoUFJPRk9STUEpJyA6ICcnKSA6ICcnfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiBbJ2Fzc2V0cy9zdHlsZXMvcHJpbnQtaW52b2ljZS5jc3MnXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZSA9IHsgaWQ6IG51bGwsIGNsaWVudDogeyBpZDogbnVsbCB9LCBhcnRpY2xlczoge30sIHNlcnZpY2VzOiB7fSwgdG90YWw6IDAsIHdvcmtmb3JjZTogMCwgZGlzY291bnQ6IDAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlVGVtcGxhdGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0FsZXJ0KCdBdWN1bmUgZmFjdHVyZSDDoCBpbXByaW1lciAhJywgJ3dhcm5pbmcnLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3R1cmVyKGV2ZW50LCBkaXZUb1ByaW50ID0gJycpIHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIGZldGNoKGAke2Jhc2VVcmx9L3NhbGVzL2Nsb3R1cmVzL25ld2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNsb3R1cmVFbHRzKVxyXG4gICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgICBpZiAocmVzcC5vaykge1xyXG4gICAgICAgICAgICByZXNwLnRleHQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VCb2R5ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNsb3R1cmUgPSByZXNwb25zZUJvZHkuZGF0YTtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydChyZXNwb25zZUJvZHkubWVzc2FnZSwgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIGlmICghIWRpdlRvUHJpbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkLnByaW50KGRpdlRvUHJpbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVjaGFydGJvYWQoaW52b2ljZSkge1xyXG4gICAgY29uc3QgaW52b2ljZUlkID0gaW52b2ljZS5pZDtcclxuXHJcbiAgICBmZXRjaChgJHtiYXNlVXJsfS9mYWN0dXJlcy8ke2ludm9pY2VJZH0vcG9wdWxhdGUvY2FydGJvYXJkYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludm9pY2VEYXRhID0gSlNPTi5wYXJzZShkYXRhKS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2ZvcmNlRWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtmb3JjZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzY291bnRFbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzY291bnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGlkeCBpbiBjdXJyZW50SW52b2ljZS5zZXJ2aWNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBjdXJyZW50SW52b2ljZS5zZXJ2aWNlc1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbnZvaWNlID0gYWRkVG9DYXJ0KHNlcnZpY2Uuc2VydmljZUlkLCAoMCAtIE1hdGguYWJzKHNlcnZpY2UucXVhbnRpdHkpKSwgY3VycmVudEludm9pY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaWR4IGluIGN1cnJlbnRJbnZvaWNlLmFydGljbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGN1cnJlbnRJbnZvaWNlLmFydGljbGVzW2lkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEludm9pY2UgPSBhZGRUb0NhcnQoYXJ0aWNsZS5zZXJ2aWNlSWQsICgwIC0gTWF0aC5hYnMoYXJ0aWNsZS5xdWFudGl0eSkpLCBjdXJyZW50SW52b2ljZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhcnQgPiB0Ym9keSA+IHRyJykuZm9yRWFjaCgocm93RWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93RWx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93RWx0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGludm9pY2UgPSB7IGlkOiBpbnZvaWNlSWQsIGFydGljbGVzOiB7fSwgc2VydmljZXM6IHt9LCB0b3RhbDogMCwgZGlzY291bnQ6IDAgfTtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0b3RhbCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJykudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGRpc2NvdW50RWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRFbHQudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHdvcmtmb3JjZUVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtmb3JjZUVsdC50ZXh0Q29udGVudCA9ICckMC4wMCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV0JykudGV4dENvbnRlbnQgPSAnJDAuMDAnO1xyXG5cclxuICAgICAgICAgICAgICAgIGludm9pY2UudHlwZSA9IGludm9pY2VEYXRhLnR5cGVGYWN0dXJlO1xyXG4gICAgICAgICAgICAgICAgaW52b2ljZS53b3JrZm9yY2UgPSBpbnZvaWNlRGF0YS53b3JrZm9yY2U7XHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlLndvcmtmb3JjZVBlcmNlbnQgPSBpbnZvaWNlRGF0YS53b3JrZm9yY2VQZXJjZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3VycmVudEludm9pY2UsIGludm9pY2UpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2xpZW50RGV0YWlscyhjdXJyZW50SW52b2ljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGEuc2VydmljZXMuZm9yRWFjaChzZXJ2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZSA9IGFkZFRvQ2FydChzZXJ2LnNlcnZpY2VJZCwgTWF0aC5hYnMoc2Vydi5xdWFudGl0eSksIGN1cnJlbnRJbnZvaWNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2xpZW50RGV0YWlscyhpbnZvaWNlKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cclxuICAgIGZldGNoKGAke2Jhc2VVcmx9L2ZhY3R1cmVzL3VwZGF0ZXRvdGFsZWxlbWVudHMvJHtpbnZvaWNlLmlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3Aub2spIHtcclxuICAgICAgICAgICAgcmVzcC50ZXh0KCkudGhlbihqc29uRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGllbnQtYXV0b2NvbXBsZXRlID4gaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjbGllbnRzLmZpbmQoY2xpZW50ID0+IGNsaWVudC5pZCA9PT0gKCdzdHJpbmcnID09PSB0eXBlb2YgZGF0YS5jbGllbnRJZCA/IE51bWJlci5wYXJzZUludChkYXRhLmNsaWVudElkLCAxMCkgOiBkYXRhLmNsaWVudElkKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2xpZW50SW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGNsaWVudElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGllbnRJbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnQgPSB0eXBlb2YgYyA9PT0gJ3VuZGVmaW5lZCcgPyB7IGlkOiBudWxsLCBub21DbGllbnQ6ICdDbGllbnQgYW5vbnltZScsIHRvdGFsRmFjdHVyZXM6IDAsIHRvdGFsQm9udXM6IDAuMDAgfSA6IGM7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxGYWN0dXJlcyA9IGlzTmFOKGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzKSB8fCAndW5kZWZpbmVkJyA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMgfHwgbnVsbCA9PT0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMgPyAwIDogKCdzdHJpbmcnID09PSB0eXBlb2YgY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMgPyBOdW1iZXIucGFyc2VJbnQoY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMsIDEwKSA6IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzID0gaXNOYU4oY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMpIHx8ICd1bmRlZmluZWQnID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyB8fCBudWxsID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyA/IDAgOiAoJ3N0cmluZycgPT09IHR5cGVvZiBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyA/IE51bWJlci5wYXJzZUZsb2F0KGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKSA6IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lck5hbWUnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC5ub21DbGllbnQ7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwtZmFjdHVyZXMnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsLWJvbnVzJykudGV4dENvbnRlbnQgPSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cy50b0ZpeGVkKDIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGludm9pY2UubGljZW5jZUlkID0gZGF0YS5saWNlbmNlSWQgPz8gMDtcclxuICAgICAgICAgICAgICAgIGxpY2VuY2VJZCA9IGludm9pY2UubGljZW5jZUlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZXR1cm4ge2ludm9pY2UsIGNsaWVudH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50UmVjZWlwdCgpIHtcclxuICAgIGNvbnN0IHJlY2VpcHRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWJ0LXBheW1lbnQtcmVjZWlwdCcpLmNvbnRlbnQ7XHJcbiAgICByZWNlaXB0VGVtcGxhdGUucXVlcnlTZWxlY3RvcignLnJlY2VpcHQtYm9keSA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkID4gZGl2Omxhc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC5ub21DbGllbnQ7XHJcbiAgICByZWNlaXB0VGVtcGxhdGUucXVlcnlTZWxlY3RvcignLnJlY2VpcHQtZGV0YWlscyA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBhbW91bnRQYWlkO1xyXG4gICAgcmVjZWlwdFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5yZWNlaXB0LWRldGFpbHMgPiBkaXY6bGFzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBhbW91bnREdWVTb2xkIC0gYW1vdW50UGFpZDtcclxuICAgIHByaW50UmVjZWlwdE1vZGFsLmhpZGUoKTtcclxuICAgIHByaW50RWxlbWVudHNXaXRoSGVhZChkb2N1bWVudC5pbXBvcnROb2RlKHJlY2VpcHRUZW1wbGF0ZSwgdHJ1ZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdDb250cm9sZSgpIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcbiAgICBsZXQgb3B0aW9uc0FydGljbGUgPSAnJztcclxuICAgIGNvbnN0IHZlaGljbGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmVoaWN1bGUtY29udHJvbGUnKTtcclxuICAgIGNvbnN0IGFydGljbGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJ0aWNsZS1jb250cm9sZScpO1xyXG5cclxuICAgIHZlaGljbGVzLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7di5pZH1cIiR7TnVtYmVyLnBhcnNlSW50KHZlaGljbGVTZWxlY3QudmFsdWUpID09PSB2LmlkID8gJyBzZWxlY3RlZCcgOiAnJ30+JHt2LmdlbnJlfSAoJHt2Lm51bWVyb0ltbWF0cmljdWxhdGlvbn0pPC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHNlcnZpY2VzLmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2UudHlwZSA9PT0gMikuZm9yRWFjaChhcnRpY2xlID0+IHtcclxuICAgICAgICBvcHRpb25zQXJ0aWNsZSArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7YXJ0aWNsZS5zZXJ2aWNlSWR9XCIke051bWJlci5wYXJzZUludChhcnRpY2xlU2VsZWN0LnZhbHVlKSA9PT0gYXJ0aWNsZS5zZXJ2aWNlSWQgPyAnIHNlbGVjdGVkJyA6ICcnfT4ke2FydGljbGUubmFtZX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmVoaWNsZVNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zO1xyXG4gICAgYXJ0aWNsZVNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zQXJ0aWNsZTtcclxuICAgIG5ld0NvbnRyb2xlTW9kYWwuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdFeHBlcnRpc2UoKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG4gICAgY29uc3QgdmVoaWNsZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZWhpY3VsZS1leHBlcnRpc2UnKTtcclxuXHJcbiAgICB2ZWhpY2xlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke3YuaWR9XCIke051bWJlci5wYXJzZUludCh2ZWhpY2xlU2VsZWN0LnZhbHVlKSA9PT0gdi5pZCA/ICcgc2VsZWN0ZWQnIDogJyd9PiR7di5nZW5yZX0gKCR7di5udW1lcm9JbW1hdHJpY3VsYXRpb259KTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2ZWhpY2xlU2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnM7XHJcbiAgICAvLyB2ZWhpY2xlU2VsZWN0LmRhdGFzZXQuZmlsdGVyID0gJ3RydWUnO1xyXG4gICAgbmV3RXhwZXJ0aXNlTW9kYWwuc2hvdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdDb250cm9sZUdhcmFnZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGlsbC10YWItY3QnKS5jbGFzc0xpc3QudmFsdWUuaW5kZXhPZignYWN0aXZlJykgPiAtMSkge1xyXG4gICAgICAgIG5ld0NvbnRyb2xlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaWxsLXRhYi1ldicpLmNsYXNzTGlzdC52YWx1ZS5pbmRleE9mKCdhY3RpdmUnKSA+IC0xKSB7XHJcbiAgICAgICAgbmV3RXhwZXJ0aXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50RGFpbHlSZXBvcnQoZSkge1xyXG4gICAgLy8gY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAvLyBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvLyBwYXJlbnQuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICBpZiAocGVybWlzc2lvbnMuaW5jbHVkZXMoJ3JhcHBvcnQnKSkge1xyXG4gICAgICAgIGZldGNoKGAke2Jhc2VVcmx9L2ludm9pY2VzL2RhaWx5cmVwb3J0YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9KVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwLnRleHQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaW52b2ljZXMsIGRlYnRQYXltZW50cywgc3RvY2sgfSA9IEpTT04ucGFyc2UoZGF0YSkuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYWlseVJlcG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYWlseS1yZXBvcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbEludm9pY2VzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxEZWJ0UGF5bWVudHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbEludm9pY2VBZHZhbmNlcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsSW52b2ljZVNvbGRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvY3VyZW1lbnRzID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYWlseUludm9pY2VzID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIGNvbHNwYW49XCI3XCI+RmFjdHVyZXMgw6ltaXNlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsaWVudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb250YW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkF2YW5jZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZXN0ZSDDoCBwYXllcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SZW5kZXotdm91cyBkZSBwYWltZW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk7CsCBkZSB0w6lsw6lwaG9uZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhaWx5RGVidFBheW1lbnRzID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIGNvbHNwYW49XCI0XCI+RmFjdHVyZXMgcGF5w6llczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNsaWVudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OwrAgRmFjdHVyZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb250YW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGFpbHlJbnZvaWNlQWR2YW5jZXMgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCIgY29sc3Bhbj1cIjRcIj5BdmFuY2VzIHN1ciBmYWN0dXJlcyDDqW1pc2VzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1yaWdodFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2xpZW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk7CsCBGYWN0dXJlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vbnRhbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9jay5wcm9jdXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jdXJlbWVudHMgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIGNvbHNwYW49XCI3XCI+UmFwcG9ydCBzdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BcnRpY2xlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbnRyw6llczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U29ydGllczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VmVudGVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BdWpvdXJkJ2h1aTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U29sZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZXMuZm9yRWFjaCgoaW52b2ljZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludm9pY2VTb2xkID0gaW52b2ljZVsndG90YWwnXSAtIChpbnZvaWNlWydhbW91bnRQYWlkJ10gPz8gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSW52b2ljZXMgKz0gaW52b2ljZVsndG90YWwnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxJbnZvaWNlU29sZHMgKz0gaW52b2ljZVNvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5SW52b2ljZXMgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj4ke2lkeCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpbnZvaWNlWydub21DbGllbnQnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj4kICR7aW52b2ljZVsndG90YWwnXT8udG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj4kICR7KGludm9pY2VbJ2Ftb3VudFBhaWQnXT8/IDApLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JCAke2ludm9pY2VTb2xkPy50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aW52b2ljZVsndGVsZXBob25lJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnZvaWNlWydhbW91bnRQYWlkJ10gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEludm9pY2VBZHZhbmNlcyArPSBpbnZvaWNlWydhbW91bnRQYWlkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlJbnZvaWNlQWR2YW5jZXMgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPiR7aW5kZXh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aW52b2ljZVsnbm9tQ2xpZW50J119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aW52b2ljZVsnaWQnXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JCAke2ludm9pY2VbJ2Ftb3VudFBhaWQnXT8udG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWJ0UGF5bWVudHMuZm9yRWFjaCgoZGVidFBheW1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbERlYnRQYXltZW50cyArPSBkZWJ0UGF5bWVudFsnbW9udGFudFBheWUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlEZWJ0UGF5bWVudHMgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2lkeCArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtkZWJ0UGF5bWVudFsnbm9tQ2xpZW50J119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtkZWJ0UGF5bWVudFsnaW52b2ljZUlkJ119PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JCAke2RlYnRQYXltZW50Wydtb250YW50UGF5ZSddPy50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVidFBheW1lbnRzLmxlbmd0aCA+IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBjb3VudCA9IGRlYnRQYXltZW50cy5sZW5ndGggLSBpbmRleDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhaWx5SW52b2ljZUFkdmFuY2VzICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+LTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWJ0UGF5bWVudHMubGVuZ3RoIDwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGNvdW50ID0gaW5kZXggLSBkZWJ0UGF5bWVudHMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFpbHlEZWJ0UGF5bWVudHMgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b2NrLnByb2N1cmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwZWRQcm9jdXJlbWVudHMgPSBncm91cEFycmF5T2ZPYmplY3RzKHN0b2NrLnByb2N1cmVtZW50cywgJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwZWRTYWxlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvY2suc2FsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBlZFNhbGVzID0gZ3JvdXBBcnJheU9mT2JqZWN0cyhzdG9jay5zYWxlcywgJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvY2sudG9kYXlTYWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cGVkVG9kYXlTYWxlcyA9IGdyb3VwQXJyYXlPZk9iamVjdHMoc3RvY2sudG9kYXlTYWxlcywgJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvY2sub3V0T2ZTdG9jay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cGVkT3V0T2ZTdG9jayA9IGdyb3VwQXJyYXlPZk9iamVjdHMoc3RvY2sub3V0T2ZTdG9jaywgJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZ3JvdXBlZFByb2N1cmVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWR4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jdXJlbWVudHMgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPiR7aWR4fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2tleX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JHtncm91cGVkUHJvY3VyZW1lbnRzW2tleV0ucmVkdWNlKChhY2N1LCBuZXh0KSA9PiBhY2N1ICsgbmV4dFsncXVhbnRpdHknXSwgMCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY3VyZW1lbnRzICs9ICc8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+JyArICgodHlwZW9mIGdyb3VwZWRPdXRPZlN0b2NrICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3Qua2V5cyhncm91cGVkT3V0T2ZTdG9jaykuaW5kZXhPZihrZXkpID4gLTEpID8gZ3JvdXBlZE91dE9mU3RvY2tba2V5XS5yZWR1Y2UoKGFjY3UsIG5leHQpID0+IGFjY3UgKyBNYXRoLmFicyhuZXh0WydxdWFudGl0eSddKSwgMCkgOiAwKSArICc8L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jdXJlbWVudHMgKz0gJzx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj4nICsgKCh0eXBlb2YgZ3JvdXBlZFNhbGVzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3Qua2V5cyhncm91cGVkU2FsZXMpLmluZGV4T2Yoa2V5KSA+IC0xKSA/IGdyb3VwZWRTYWxlc1trZXldLnJlZHVjZSgoYWNjdSwgbmV4dCkgPT4gYWNjdSArIE1hdGguYWJzKG5leHRbJ3F1YW50aXR5J10pLCAwKSA6IDApICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2N1cmVtZW50cyArPSAnPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPicgKyAoKHR5cGVvZiBncm91cGVkVG9kYXlTYWxlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LmtleXMoZ3JvdXBlZFRvZGF5U2FsZXMpLmluZGV4T2Yoa2V5KSA+IC0xKSA/IGdyb3VwZWRUb2RheVNhbGVzW2tleV0ucmVkdWNlKChhY2N1LCBuZXh0KSA9PiBhY2N1ICsgTWF0aC5hYnMobmV4dFsncXVhbnRpdHknXSksIDApIDogMCkgKyAnPC90ZD4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2N1cmVtZW50cyArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj4ke3N0b2NrLnBvc0RldGFpbHMuZmluZChkZXRhaWwgPT4gZGV0YWlsLmFydGljbGUgPT09IGtleSk/LnF1YW50aXR5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2N1cmVtZW50cyArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYWlseUludm9pY2VzICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj48Yj5UT1RBTCAoMSk8L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPjxiPiQgJHt0b3RhbEludm9pY2VzPy50b0ZpeGVkKDIpfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+PGI+JCAke3RvdGFsSW52b2ljZUFkdmFuY2VzPy50b0ZpeGVkKDIpfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+PGI+JCAke3RvdGFsSW52b2ljZVNvbGRzPy50b0ZpeGVkKDIpfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxiPi08L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48Yj4tPC9iPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhaWx5SW52b2ljZUFkdmFuY2VzICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj48Yj5UT1RBTCAoMyk8L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPjxiPiQgJHt0b3RhbEludm9pY2VBZHZhbmNlcz8udG9GaXhlZCgyKX08L2I+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlEZWJ0UGF5bWVudHMgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPjxiPlRPVEFMICgyKTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+PGI+JCAke3RvdGFsRGVidFBheW1lbnRzPy50b0ZpeGVkKDIpfTwvYj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhaWx5UmVwb3J0LmlubmVySFRNTCA9IGRhaWx5SW52b2ljZXMgKyBgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtYi01XCIgaWQ9XCJkYWlseS1wYXltZW50cy1zZWN0aW9uXCI+PGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIGlkPVwiZGFpbHktcGF5bWVudHNcIj5gICsgZGFpbHlEZWJ0UGF5bWVudHMgKyBkYWlseUludm9pY2VBZHZhbmNlcyArIGA8L2Rpdj48ZGl2IGNsYXNzPVwiYm9yZGVyIGJvcmRlci1kYXJrIHctMTAwIG10LTJcIiBpZD1cImRhaWx5LXJlcG9ydC10b3RhbHMtMi0zXCI+PGI+VE9UQVVYICgyKSArICgzKSA6ICQgJHsodG90YWxEZWJ0UGF5bWVudHMgKyB0b3RhbEludm9pY2VBZHZhbmNlcyk/LnRvRml4ZWQoMil9PC9iPjwvZGl2PmAgKyAnPC9kaXY+JyArIHByb2N1cmVtZW50cztcclxuICAgICAgICAgICAgICAgICAgICBkYWlseVJlcG9ydC5pbm5lckhUTUwgKz0gYDxicj48YnI+PGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+JHt1c2VyfTwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGFpbHlSZXBvcnQucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRKUyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50YWJsZTogJ2RhaWx5LXJlcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdodG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgaWQ9XCJkYWlseS1yZXBvcnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImRhaWx5LXJlcG9ydC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWFpc29uWydsb2dvJ10gIT09IG51bGwgPyAnPGltZyBzcmM9XCIvdXBsb2Fkcy9sb2dvcy8nICsgbWFpc29uWydsb2dvJ10gKyAnXCIgYWx0PVwiTG9nbyBlbnRyZXByaXNlXCIgY2xhc3M9XCJ3LTI1XCI+JyA6ICc8aDIgY2xhc3M9XCJ3LTI1XCI+JyArIG1haXNvblsnbm9tU29jaWV0ZSddICsgJzwvaDI+J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7KG5ldyBEYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXIgZm9udC13ZWlnaHQtYm9sZFwiPlJhcHBvcnQgam91cm5hbGllciA8c3Bhbj4ke3Bvc308L3NwYW4+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzOiBbJ3B1YmxpYy9idWlsZC9hcHAuY3NzJywgJ2Fzc2V0cy9zdHlsZXMvcHJpbnQtZGFpbHktcmVwb3J0LmNzcyddXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhaWx5UmVwb3J0LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0FsZXJ0KCdWb3VzIG5cXCfDqnRlcyBwYXMgYXV0b3Jpc8OpIMOgIHZvaXIgbGUgcmFwcG9ydC4nLCAnd2FybmluZycsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihgJHtiYXNlVXJsfS9sb2dvdXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ3JvdXBBcnJheU9mT2JqZWN0cyhsaXN0LCBrZXkpIHtcclxuICAgIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbihydiwgeCkge1xyXG4gICAgICAgIChydlt4W2tleV1dID0gcnZbeFtrZXldXSB8fCBbXSkucHVzaCh4KTtcclxuICAgICAgICByZXR1cm4gcnY7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoRmV0Y2hBbGxJbnRlcnZhbCgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoZmV0Y2hBbGwpO1xyXG4gICAgc2V0SW50ZXJ2YWwoZmV0Y2hBbGwsIDEwMDAwKTtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlaGljbGVzLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCAoKSA9PiB7XHJcbiAgICByZWZyZXNoRmV0Y2hBbGxJbnRlcnZhbCgpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2ZWhpY2xlcy1tb2RhbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGRlbi5icy5tb2RhbCcsICgpID0+IHtcclxuICAgIHJlZnJlc2hGZXRjaEFsbEludGVydmFsKCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBqc29uU2Vzc2lvbkludm9pY2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpbnZvaWNlJyk7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IGpzb25TZXNzaW9uSW52b2ljZSkge1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb25JbnZvaWNlID0gSlNPTi5wYXJzZShqc29uU2Vzc2lvbkludm9pY2UpO1xyXG4gICAgICAgIGlmIChudWxsICE9PSBzZXNzaW9uSW52b2ljZS5jbGllbnQpIHtcclxuICAgICAgICAgICAgY2xpZW50ID0gY2xpZW50cy5maW5kKGMgPT4gYy5pZCA9PT0gc2Vzc2lvbkludm9pY2UuY2xpZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpY2VuY2VJZCA9IHNlc3Npb25JbnZvaWNlLmxpY2VuY2VJZCA/PyAwO1xyXG5cclxuICAgICAgICBjdXJyZW50SW52b2ljZS5pZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ludm9pY2VJZCcpO1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLnR5cGUgPSBzZXNzaW9uSW52b2ljZS5zYWxlVHlwZTtcclxuICAgICAgICBjdXJyZW50SW52b2ljZS5kYXRlID0gc2Vzc2lvbkludm9pY2UuZGF0ZTtcclxuICAgICAgICBjdXJyZW50SW52b2ljZS50b3RhbCA9IHNlc3Npb25JbnZvaWNlLnRvdGFsO1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLmRpc2NvdW50ID0gc2Vzc2lvbkludm9pY2UuZGlzY291bnQ7XHJcbiAgICAgICAgY3VycmVudEludm9pY2Uud29ya2ZvcmNlID0gc2Vzc2lvbkludm9pY2Uud29ya2ZvcmNlO1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLndvcmtmb3JjZVBlcmNlbnQgPSBzZXNzaW9uSW52b2ljZS53b3JrZm9yY2VQZXJjZW50O1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLnBheW1lbnRNb2RlID0gc2Vzc2lvbkludm9pY2UucGF5bWVudE1vZGU7XHJcbiAgICAgICAgY3VycmVudEludm9pY2UuYXJ0aWNsZXMgPSBzZXNzaW9uSW52b2ljZS5kZXRhaWxzPy5hcnRpY2xlcztcclxuICAgICAgICBjdXJyZW50SW52b2ljZS5zZXJ2aWNlcyA9IHNlc3Npb25JbnZvaWNlLmRldGFpbHM/LnNlcnZpY2VzO1xyXG4gICAgICAgIHNlc3Npb25JbnZvaWNlLmlkID0gY3VycmVudEludm9pY2UuaWQ7XHJcblxyXG4gICAgICAgIC8vIGN1cnJlbnRJbnZvaWNlID0geyBpZDogbnVsbCwgY2xpZW50OiB7IGlkOiBudWxsIH0sIGFydGljbGVzOiB7fSwgc2VydmljZXM6IHt9LCB0b3RhbDogMCwgd29ya2ZvcmNlOiAwLCBkaXNjb3VudDogMCB9O1xyXG4gICAgICAgIGlmIChjdXJyZW50SW52b2ljZS50eXBlICE9PSAnaG9sZCcpIHtcclxuICAgICAgICAgICAgLy8gcHJpbnRJbnZvaWNlKHBlcm1pc3Npb25zLmluY2x1ZGVzKCdyZWN1LXZlaGljdWxlJykgPyAnUkXDh1UnIDogJ0ZBQ1RVUkUnLCBwZXJtaXNzaW9ucywgY3VycmVudEludm9pY2UpO1xyXG4gICAgICAgICAgICBwcmludEludm9pY2UoJ0ZBQ1RVUkUnLCBwZXJtaXNzaW9ucywgY3VycmVudEludm9pY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudEludm9pY2UudG90YWwgPSAwO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2ludm9pY2UnKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdpbnZvaWNlSWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5uZXcgbWRiLkF1dG9jb21wbGV0ZShjbGllbnRBdXRvY29tcGxldGUsIHtcclxuICAgIGZpbHRlcjogY2xpZW50c0ZpbHRlcixcclxuICAgIGRpc3BsYXlWYWx1ZTogdmFsdWUgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLmNsaWVudCA9IHZhbHVlO1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzID0gaXNOYU4oY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMpIHx8ICd1bmRlZmluZWQnID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxGYWN0dXJlcyB8fCBudWxsID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxGYWN0dXJlcyA/IDAgOiAoJ3N0cmluZycgPT09IHR5cGVvZiBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxGYWN0dXJlcyA/IE51bWJlci5wYXJzZUludChjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxGYWN0dXJlcywgMTApIDogY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsRmFjdHVyZXMpO1xyXG4gICAgICAgIGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzID0gaXNOYU4oY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMpIHx8ICd1bmRlZmluZWQnID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyB8fCBudWxsID09PSBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyA/IDAgOiAoJ3N0cmluZycgPT09IHR5cGVvZiBjdXJyZW50SW52b2ljZS5jbGllbnQudG90YWxCb251cyA/IE51bWJlci5wYXJzZUZsb2F0KGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKSA6IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEJvbnVzKTtcclxuICAgICAgICAvLyBjb25zdCBjbGllbnQgPSB2YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwtZmFjdHVyZXMnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC50b3RhbEZhY3R1cmVzO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC1ib251cycpLnRleHRDb250ZW50ID0gY3VycmVudEludm9pY2UuY2xpZW50LnRvdGFsQm9udXMudG9GaXhlZCgyKTtcclxuICAgICAgICByZXR1cm4gdmFsdWUubm9tQ2xpZW50O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm5ldyBtZGIuQXV0b2NvbXBsZXRlKHNlcnZpY2VBdXRvY29tcGxldGUsIHtcclxuICAgIGZpbHRlcjogc2VydmljZXNGaWx0ZXIsXHJcbiAgICBkaXNwbGF5VmFsdWU6IHZhbHVlID0+IHtcclxuICAgICAgICBjdXJyZW50U2VydmljZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5uYW1lO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbltjbGllbnRBdXRvY29tcGxldGUsIHNlcnZpY2VBdXRvY29tcGxldGVdLmZvckVhY2goKGVsdCwgaWR4KSA9PiB7XHJcbiAgICBlbHQuYWRkRXZlbnRMaXN0ZW5lcignaXRlbVNlbGVjdC5tZGIuYXV0b2NvbXBsZXRlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlkeCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzRGlzY291bnRBcHBsaWNhYmxlID0gY3VycmVudEludm9pY2UuY2xpZW50LmlkICE9PSBudWxsICYmIGN1cnJlbnRJbnZvaWNlLmNsaWVudC5kaXNjb3VudEFwcGxpY2FibGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudEFtb3VudCA9IChpc0Rpc2NvdW50QXBwbGljYWJsZSA/IGFwcGx5RGlzY291bnQoY3VycmVudEludm9pY2UsIGRpc2NvdW50YWJsZXMpIDogcmVtb3ZlRGlzY291bnQoY3VycmVudEludm9pY2UpKS5kaXNjb3VudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtmb3JjZUFtb3VudCA9ICdudW1iZXInID09PSB0eXBlb2Ygd29ya2ZvcmNlUGVyY2VudCAmJiB3b3JrZm9yY2VQZXJjZW50ID4gMCA/IHdvcmtmb3JjZVBlcmNlbnQgKiBjdXJyZW50SW52b2ljZS50b3RhbCA6IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudEVsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNjb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2ZvcmNlRWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dvcmtmb3JjZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lck5hbWUnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRJbnZvaWNlLmNsaWVudC5ub21DbGllbnQ7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVDdXN0b21lckRldGFpbHNCdXR0b25zKCdjdXN0b21lckRldGFpbHMnLCAnY3VzdG9tZXJQdXJjaGFzZXMnKTtcclxuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBkaXNjb3VudEVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50RWx0LnRleHRDb250ZW50ID0gJyQnICsgZGlzY291bnRBbW91bnQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSB3b3JrZm9yY2VFbHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrZm9yY2VFbHQudGV4dENvbnRlbnQgPSAnJCcgKyB3b3JrZm9yY2VBbW91bnQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXQnKS50ZXh0Q29udGVudCA9ICckJyArIChjdXJyZW50SW52b2ljZS50b3RhbCArIHdvcmtmb3JjZUFtb3VudCAtIGRpc2NvdW50QW1vdW50KS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW52b2ljZSA9IGFkZFRvQ2FydChjdXJyZW50U2VydmljZS5zZXJ2aWNlSWQsIDEsIGN1cnJlbnRJbnZvaWNlKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWx0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGVtcHR5SW5wdXQoaW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5ibHVyKCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5kaXNwbGF5R3JpZChncmlkLCBncmlkQ29udGVudC5jb250ZW50KTtcclxuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmIChuIDwgMCB8fCBuID09IEluZmluaXR5KSB0aHJvdyBSYW5nZUVycm9yKCdXcm9uZyBudW1iZXIgb2YgcmVwZXRpdGlvbnMnKTtcbiAgZm9yICg7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKSBpZiAobiAmIDEpIHJlc3VsdCArPSBzdHI7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYHRoaXNOdW1iZXJWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRoaXNudW1iZXJ2YWx1ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyAmJiBjbGFzc29mKHZhbHVlKSAhPSAnTnVtYmVyJykge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbiAgfVxuICByZXR1cm4gK3ZhbHVlO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xuXG4vLyBgRGF0ZS5ub3dgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLm5vd1xuJCh7IHRhcmdldDogJ0RhdGUnLCBzdGF0OiB0cnVlIH0sIHtcbiAgbm93OiBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlRmxvYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0Jyk7XG5cbi8vIGBOdW1iZXIucGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wYXJzZUZsb2F0XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbnVtYmVyLXBhcnNlZmxvYXQgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE51bWJlci5wYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXQgfSwge1xuICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYE51bWJlci5wYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wYXJzZWludFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW51bWJlci1wYXJzZWludCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuJCh7IHRhcmdldDogJ051bWJlcicsIHN0YXQ6IHRydWUsIGZvcmNlZDogTnVtYmVyLnBhcnNlSW50ICE9IHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgdGhpc051bWJlclZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RoaXMtbnVtYmVyLXZhbHVlJyk7XG52YXIgcmVwZWF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgbmF0aXZlVG9GaXhlZCA9IDEuMC50b0ZpeGVkO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxudmFyIHBvdyA9IGZ1bmN0aW9uICh4LCBuLCBhY2MpIHtcbiAgcmV0dXJuIG4gPT09IDAgPyBhY2MgOiBuICUgMiA9PT0gMSA/IHBvdyh4LCBuIC0gMSwgYWNjICogeCkgOiBwb3coeCAqIHgsIG4gLyAyLCBhY2MpO1xufTtcblxudmFyIGxvZyA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciBuID0gMDtcbiAgdmFyIHgyID0geDtcbiAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICBuICs9IDEyO1xuICAgIHgyIC89IDQwOTY7XG4gIH1cbiAgd2hpbGUgKHgyID49IDIpIHtcbiAgICBuICs9IDE7XG4gICAgeDIgLz0gMjtcbiAgfSByZXR1cm4gbjtcbn07XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChkYXRhLCBuLCBjKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgYzIgPSBjO1xuICB3aGlsZSAoKytpbmRleCA8IDYpIHtcbiAgICBjMiArPSBuICogZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBjMiAlIDFlNztcbiAgICBjMiA9IGZsb29yKGMyIC8gMWU3KTtcbiAgfVxufTtcblxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uIChkYXRhLCBuKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBjID0gMDtcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGMgKz0gZGF0YVtpbmRleF07XG4gICAgZGF0YVtpbmRleF0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG5cbnZhciBkYXRhVG9TdHJpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgcyA9ICcnO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgaWYgKHMgIT09ICcnIHx8IGluZGV4ID09PSAwIHx8IGRhdGFbaW5kZXhdICE9PSAwKSB7XG4gICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2luZGV4XSk7XG4gICAgICBzID0gcyA9PT0gJycgPyB0IDogcyArIHJlcGVhdC5jYWxsKCcwJywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgfVxuICB9IHJldHVybiBzO1xufTtcblxudmFyIEZPUkNFRCA9IG5hdGl2ZVRvRml4ZWQgJiYgKFxuICAwLjAwMDA4LnRvRml4ZWQoMykgIT09ICcwLjAwMCcgfHxcbiAgMC45LnRvRml4ZWQoMCkgIT09ICcxJyB8fFxuICAxLjI1NS50b0ZpeGVkKDIpICE9PSAnMS4yNScgfHxcbiAgMTAwMDAwMDAwMDAwMDAwMDEyOC4wLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICBuYXRpdmVUb0ZpeGVkLmNhbGwoe30pO1xufSk7XG5cbi8vIGBOdW1iZXIucHJvdG90eXBlLnRvRml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXIucHJvdG90eXBlLnRvZml4ZWRcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICB0b0ZpeGVkOiBmdW5jdGlvbiB0b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKSB7XG4gICAgdmFyIG51bWJlciA9IHRoaXNOdW1iZXJWYWx1ZSh0aGlzKTtcbiAgICB2YXIgZnJhY3REaWdpdHMgPSB0b0ludGVnZXIoZnJhY3Rpb25EaWdpdHMpO1xuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHZhciBzaWduID0gJyc7XG4gICAgdmFyIHJlc3VsdCA9ICcwJztcbiAgICB2YXIgZSwgeiwgaiwgaztcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseShkYXRhLCAxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShkYXRhLCBwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IGopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcbiAgICAgICAgZGl2aWRlKGRhdGEsIDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSA8PCAtZSwgMCk7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZnJhY3REaWdpdHMgPiAwKSB7XG4gICAgICBrID0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyAoayA8PSBmcmFjdERpZ2l0c1xuICAgICAgICA/ICcwLicgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzIC0gaykgKyByZXN1bHRcbiAgICAgICAgOiByZXN1bHQuc2xpY2UoMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHJlc3VsdC5zbGljZShrIC0gZnJhY3REaWdpdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gc2lnbiArIHJlc3VsdDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+dG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSlcbiAgICAgIC5pbmRleE9mKHRvU3RyaW5nKG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKSksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgICByZXR1cm4gc2VhcmNoZXIgIT09IHVuZGVmaW5lZCA/IHNlYXJjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBub3RBUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vdC1hLXJlZ2V4cCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgY29ycmVjdElzUmVnRXhwTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN0cmluZy1wcm90b3R5cGUtc3RhcnRzd2l0aCAtLSBzYWZlXG52YXIgJHN0YXJ0c1dpdGggPSAnJy5zdGFydHNXaXRoO1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG52YXIgQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgPSBjb3JyZWN0SXNSZWdFeHBMb2dpYygnc3RhcnRzV2l0aCcpO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvcHVsbC83MDJcbnZhciBNRE5fUE9MWUZJTExfQlVHID0gIUlTX1BVUkUgJiYgIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDICYmICEhZnVuY3Rpb24gKCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihTdHJpbmcucHJvdG90eXBlLCAnc3RhcnRzV2l0aCcpO1xuICByZXR1cm4gZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci53cml0YWJsZTtcbn0oKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3RhcnRzd2l0aFxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFNRE5fUE9MWUZJTExfQlVHICYmICFDT1JSRUNUX0lTX1JFR0VYUF9MT0dJQyB9LCB7XG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgdmFyIHRoYXQgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICBub3RBUmVnRXhwKHNlYXJjaFN0cmluZyk7XG4gICAgdmFyIGluZGV4ID0gdG9MZW5ndGgobWluKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpO1xuICAgIHZhciBzZWFyY2ggPSB0b1N0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aFxuICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9