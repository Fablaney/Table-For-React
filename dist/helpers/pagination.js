"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Pagination = function Pagination(_ref) {
  var activePage = _ref.activePage,
    count = _ref.count,
    rowsPerPage = _ref.rowsPerPage,
    totalPages = _ref.totalPages,
    setActivePage = _ref.setActivePage;
  var beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  var end = activePage === totalPages ? count : beginning + rowsPerPage - 1;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Page ", activePage, " of ", totalPages), /*#__PURE__*/_react.default.createElement("p", null, "Rows: ", beginning === end ? end : "".concat(beginning, " - ").concat(end), " of ", count), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons-next-prev"
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: function onClick() {
      return setActivePage(1);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-backward"
  }), "\xA0 First"), /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === 1,
    onClick: function onClick() {
      return setActivePage(activePage - 1);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid reverse fa-play"
  }), "\xA0 Previous"), /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === totalPages,
    onClick: function onClick() {
      return setActivePage(activePage + 1);
    }
  }, "Next \xA0", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-play"
  })), /*#__PURE__*/_react.default.createElement("button", {
    disabled: activePage === totalPages,
    onClick: function onClick() {
      return setActivePage(totalPages);
    }
  }, "Last \xA0", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-forward"
  })))));
};
exports.Pagination = Pagination;