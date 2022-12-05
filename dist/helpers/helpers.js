"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDateString = convertDateString;
exports.convertType = convertType;
exports.filterRows = filterRows;
exports.isBoolean = isBoolean;
exports.isDateString = isDateString;
exports.isEmpty = isEmpty;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isString = isString;
exports.paginateRows = paginateRows;
exports.searchRows = searchRows;
exports.sortRows = sortRows;
exports.toLower = toLower;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function isEmpty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(obj).length === 0;
}
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
function isNumber(value) {
  return typeof value == 'number' && !isNaN(value);
}
function isBoolean(value) {
  return value === true || value === false;
}
function isNil(value) {
  return typeof value === 'undefined' || value === null;
}
function isDateString(value) {
  if (!isString(value)) return false;
  return value.match(/^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g);
}
function convertDateString(value) {
  return value.substr(6, 4) + value.substr(3, 2) + value.substr(0, 2);
}
function toLower(value) {
  if (isString(value)) {
    return value.toLowerCase();
  }
  if (isNumber(value)) {
    return value.toString().toLowerCase();
  }
  return value;
}
function convertType(value) {
  if (isNumber(value)) {
    return value.toString();
  }
  if (isDateString(value)) {
    return convertDateString(value);
  }
  if (isBoolean(value)) {
    return value ? '1' : '-1';
  }
  return value;
}

// recherche globale
function searchRows(rows, columns, search) {
  rows = rows.filter(function (row) {
    for (var i = 0; i < columns.length; i++) {
      if (toLower(row[columns[i].title]).includes(toLower(search))) {
        return row;
      }
    }
  });
  return rows;
}

// filtre par colonne
function filterRows(rows, filters) {
  if (isEmpty(filters)) return rows;
  return rows.filter(function (row) {
    return Object.keys(filters).every(function (title) {
      var value = row[title];
      var searchValue = filters[title];
      if (isString(value)) {
        return toLower(value).includes(toLower(searchValue));
      }
      if (isBoolean(value)) {
        return searchValue === 'true' && value || searchValue === 'false' && !value;
      }
      if (isNumber(value)) {
        return value == searchValue;
      }
      return false;
    });
  });
}

// sort asc /desc
function sortRows(rows, sort) {
  rows = _toConsumableArray(rows).sort(function (a, b) {
    var order = sort.order,
      orderBy = sort.orderBy;
    if (isNil(a[orderBy])) return 1;
    if (isNil(b[orderBy])) return -1;
    var aLocale = convertType(a[orderBy]);
    var bLocale = convertType(b[orderBy]);
    if (order === 'asc') {
      return aLocale.localeCompare(bLocale, 'fr', {
        numeric: isNumber(b[orderBy])
      });
    } else {
      return bLocale.localeCompare(aLocale, 'fr', {
        numeric: isNumber(a[orderBy])
      });
    }
  });
  return rows;
}

// pagination
function paginateRows(sortedRows, activePage, rowsPerPage) {
  return _toConsumableArray(sortedRows).slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage);
}