"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("./helpers/helpers");
var _pagination = require("./helpers/pagination");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DisplayTable(_ref) {
  var columns = _ref.columns,
    rows = _ref.rows,
    lines = _ref.lines;
  var allrows = rows;

  // set default lines per pages at 10, 25, 50 100
  var linesPerPage = [];
  if (lines != undefined) {
    linesPerPage = lines;
  } else {
    linesPerPage = [10, 25, 50, 100];
  }

  // ok
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    activePage = _useState2[0],
    setActivePage = _useState2[1];

  // ok
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    globalSearch = _useState4[0],
    setGlobalSearch = _useState4[1];

  // ok
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    filters = _useState6[0],
    setFilters = _useState6[1];

  // ok
  var _useState7 = (0, _react.useState)({
      order: 'asc',
      orderBy: 'id'
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    sort = _useState8[0],
    setSort = _useState8[1];

  // ok
  var _useState9 = (0, _react.useState)(10),
    _useState10 = _slicedToArray(_useState9, 2),
    rowsPerPage = _useState10[0],
    setRowsPerPage = _useState10[1];

  // ok
  var globalSearchRows = (0, _react.useMemo)(function () {
    return (0, _helpers.searchRows)(rows, columns, globalSearch);
  }, [rows, columns, globalSearch]);

  // origine marche
  // lignes + filtres
  var filteredRows = (0, _react.useMemo)(function () {
    return (0, _helpers.filterRows)(globalSearchRows, filters);
  }, [globalSearchRows, filters]);

  // lignes + filtres => sort asc / desc
  var sortedRows = (0, _react.useMemo)(function () {
    return (0, _helpers.sortRows)(filteredRows, sort);
  }, [filteredRows, sort]);

  // lignes + filtre + sort => paginées
  var calculatedRows = rows = (0, _helpers.paginateRows)(sortedRows, activePage, rowsPerPage);
  var count = filteredRows.length;
  var totalPages = Math.ceil(count / rowsPerPage);

  // recherche globale
  function handleGlobalSearch(value) {
    setActivePage(1);
    if (value) {
      setGlobalSearch(value);
    } else {
      setGlobalSearch("");
    }
  }

  // recherche par mot dans chaque colonne
  function handleSearch(value, title) {
    setActivePage(1);
    if (value) {
      setFilters(function (prevFilters) {
        return _objectSpread(_objectSpread({}, prevFilters), {}, _defineProperty({}, title, value));
      });
    } else {
      setFilters(function (prevFilters) {
        var updatedFilters = _objectSpread({}, prevFilters);
        delete updatedFilters[title];
        return updatedFilters;
      });
    }
  }

  // tri par titre de colonne
  function handleSort(title) {
    setActivePage(1);
    setSort(function (prevSort) {
      return {
        order: prevSort.order === 'asc' && prevSort.orderBy === title ? 'desc' : 'asc',
        orderBy: title
      };
    });
  }

  // reset tous les filtres
  function clearAll() {
    setActivePage(1);
    setSort({
      order: 'asc',
      orderBy: 'id'
    });
    setFilters({});
    setRowsPerPage(10);
    setGlobalSearch("");
    // je vide la valeur des inputs
    document.querySelectorAll("input").forEach(function (input) {
      input.value = "";
    });
    rows = allrows;
  }

  // affiche XX lignes par page
  function handleEntries(numberEntries) {
    var entries = numberEntries;
    clearAll();
    setRowsPerPage(entries);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "show-search"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "show"
  }, "Show \xA0", /*#__PURE__*/_react.default.createElement("select", {
    id: "select-entries",
    name: "entries-number",
    onChange: function onChange(event) {
      return handleEntries(event.target.value);
    }
  }, linesPerPage.map(function (line, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index
    }, line);
  })), "\xA0 Entries"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    id: "input-search",
    placeholder: "Search ...",
    onChange: function onChange(event) {
      return handleGlobalSearch(event.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (column) {
    var sortIcon = function sortIcon() {
      if (column.title === sort.orderBy) {
        if (sort.order === 'asc') {
          return /*#__PURE__*/_react.default.createElement("i", {
            className: "fa-solid fa-caret-up"
          });
        } else {
          return /*#__PURE__*/_react.default.createElement("i", {
            className: "fa-solid fa-caret-down"
          });
        }
      } else {
        return /*#__PURE__*/_react.default.createElement("i", {
          className: "fa-solid fa-sort"
        });
      }
    };
    return /*#__PURE__*/_react.default.createElement("th", {
      key: column.title,
      onClick: function onClick() {
        return handleSort(column.title);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, column.label), "\xA0", /*#__PURE__*/_react.default.createElement("button", null, sortIcon()));
  })), /*#__PURE__*/_react.default.createElement("tr", null, columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("input", {
      key: "".concat(column.title, "-search"),
      type: "search",
      placeholder: "".concat(column.title),
      value: filters[column.title] || "",
      onChange: function onChange(event) {
        return handleSearch(event.target.value, column.title);
      }
    }));
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, calculatedRows.map(function (row, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: row.id
    }, columns.map(function (column) {
      if (column.format) {
        return /*#__PURE__*/_react.default.createElement("td", {
          key: column.title
        }, column.format(row[column.title]));
      } else {
        return /*#__PURE__*/_react.default.createElement("td", {
          key: column.title
        }, row[column.title]);
      }
    }));
  }))), count > 0 ? /*#__PURE__*/_react.default.createElement(_pagination.Pagination, {
    activePage: activePage,
    count: count,
    rowsPerPage: rowsPerPage,
    totalPages: totalPages,
    setActivePage: setActivePage
  }) : /*#__PURE__*/_react.default.createElement("p", null, "No data found"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: clearAll
  }, "Clear all"))));
}
var _default = DisplayTable;
exports.default = _default;