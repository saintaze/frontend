webpackHotUpdate_N_E('pages/_app', {
  /***/ './src/components/Nav/index.js':
    /*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");\n/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");\n/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");\n/* harmony import */ var _Auth_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Auth/AuthContext */ "./src/components/Auth/AuthContext.js");\n\n\nvar _jsxFileName = "/Users/angelo.cordon/workspace/codebuddies/frontend/src/components/Nav/index.js",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(() => ({\n  root: {\n    display: \'flex\',\n    margin: \'1em 0em\'\n  },\n  ul: {\n    display: \'flex\',\n    listStyle: \'none\',\n    justifyContent: \'space-between\',\n    width: \'100%\',\n    padding: \'0\'\n  },\n  navItems: {\n    display: \'flex\',\n    alignItems: \'center\',\n    \'& li\': {\n      margin: \'0em .5em\'\n    }\n  }\n}));\nfunction Nav() {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: isMenuExpanded,\n    1: setIsMenuExpanded\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);\n  const anchorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);\n  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_12__["AuthContext"]);\n\n  const logout = () => {\n    authContext.setAuthTokens();\n    localStorage.clear(\'tokens\');\n  };\n\n  const handleMenuOpen = () => {\n    setIsMenuExpanded(prevMenuState => !prevMenuState);\n  };\n\n  const handleMenuClose = event => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setIsMenuExpanded(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === \'Tab\') {\n      event.preventDefault();\n      setIsMenuExpanded(false);\n    }\n  } // return focus to the button when we transitioned from !open -> open\n\n\n  const prevMenuState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(isMenuExpanded);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    if (prevMenuState.current === true && isMenuExpanded === false) {\n      anchorRef.current.focus();\n    }\n\n    prevMenuState.current = isMenuExpanded;\n  }, [isMenuExpanded]);\n  return __jsx("nav", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx("ul", {\n    className: classes.ul,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx("div", {\n    className: classes.logoArea,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx("img", {\n    src: "/assets/logo.png",\n    alt: "Codebuddies Logo",\n    width: "200",\n    className: classes.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  })))), __jsx("div", {\n    className: classes.navItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/about",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }, "About")), __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/newsfeed",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, "Newsfeed")), __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/resources",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, "Resources")), __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/groups",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, "Groups")), __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/projects",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, "Projects")), __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    ref: anchorRef,\n    "aria-controls": "menu-list-grow",\n    "aria-haspopup": "true",\n    onClick: handleMenuOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: "/profile",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 17\n    }\n  }))), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__["default"], {\n    open: isMenuExpanded,\n    anchorEl: anchorRef.current,\n    transition: true,\n    disablePortal: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, ({\n    TransitionProps,\n    placement\n  }) => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {\n    style: {\n      transformOrigin: placement === \'bottom\' ? \'center top\' : \'center bottom\'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 17\n    }\n  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    id: "menu-list-grow",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__["default"], {\n    onClickAway: handleMenuClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    autoFocusItem: isMenuExpanded,\n    onKeyDown: handleListKeyDown,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 23\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    onClick: handleMenuClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 25\n    }\n  }, __jsx("a", {\n    onClick: logout,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 27\n    }\n  }, "Logout")))))))))));\n}\n\n_s(Nav, "HlinSMkbvI5Xp6unhAPUR+lVXcU=", false, function () {\n  return [useStyles];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzP2M3YzAiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwidWwiLCJsaXN0U3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsIm5hdkl0ZW1zIiwiYWxpZ25JdGVtcyIsIk5hdiIsImNsYXNzZXMiLCJpc01lbnVFeHBhbmRlZCIsInNldElzTWVudUV4cGFuZGVkIiwidXNlU3RhdGUiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImxvZ291dCIsInNldEF1dGhUb2tlbnMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImhhbmRsZU1lbnVPcGVuIiwicHJldk1lbnVTdGF0ZSIsImhhbmRsZU1lbnVDbG9zZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImZvY3VzIiwibG9nb0FyZWEiLCJsb2dvIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsT0FBTztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLFVBQU0sRUFBRTtBQUZKLEdBRDRCO0FBS2xDQyxJQUFFLEVBQUU7QUFDRkYsV0FBTyxFQUFFLE1BRFA7QUFFRkcsYUFBUyxFQUFFLE1BRlQ7QUFHRkMsa0JBQWMsRUFBRSxlQUhkO0FBSUZDLFNBQUssRUFB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T0FGdEI7QUFHRSxjQUFVLE1BSFo7QUFJRSxpQkFBYSxNQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRyxDQUFDO0FBQUVVLG1CQUFGO0FBQW1CQztBQUFuQixHQUFELEtBQ0MsTUFBQyw4REFBRCx5RkFDTUQsZUFETjtBQUVFLFNBQUssRUFBRTtBQUNMRSxxQkFBZSxFQUNiRCxTQUFTLEtBQUssUUFBZCxHQUF5QixZQUF6QixHQUF3QztBQUZyQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFPRSxNQUFDLCtEQUFEO0FBQU8sTUFBRSxFQUFDLGdCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRFQUFEO0FBQW1CLGVBQVcsRUFBRWIsZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxpQkFBYSxFQUFFZCxjQURqQjtBQUVFLGFBQVMsRUFBRW1CLGlCQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLGtFQUFEO0FBQVUsV0FBTyxFQUFFTCxlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxXQUFPLEVBQUVOLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBSkYsQ0FERixDQURGLENBUEYsQ0FQSixDQVhGLENBaEJGLENBYkYsQ0FERixDQURGO0FBNEVEOztHQW5IdUJWLEc7VUFDTlosUzs7O0tBRE1ZLEciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCBNZW51TGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdCc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgR3JvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Hcm93JztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlcic7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXInO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9BdXRoL0F1dGhDb250ZXh0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpbjogJzFlbSAwZW0nLFxuICB9LFxuICB1bDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogJzAnLFxuICB9LFxuICBuYXZJdGVtczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnJiBsaSc6IHtcbiAgICAgIG1hcmdpbjogJzBlbSAuNWVtJyxcbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2lzTWVudUV4cGFuZGVkLCBzZXRJc01lbnVFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFuY2hvclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgYXV0aENvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXV0aENvbnRleHQuc2V0QXV0aFRva2VucygpO1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigndG9rZW5zJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVudU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0SXNNZW51RXhwYW5kZWQocHJldk1lbnVTdGF0ZSA9PiAhcHJldk1lbnVTdGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gZXZlbnQgPT4ge1xuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldElzTWVudUV4cGFuZGVkKGZhbHNlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0SXNNZW51RXhwYW5kZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxuICBjb25zdCBwcmV2TWVudVN0YXRlID0gdXNlUmVmKGlzTWVudUV4cGFuZGVkKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJldk1lbnVTdGF0ZS5jdXJyZW50ID09PSB0cnVlICYmIGlzTWVudUV4cGFuZGVkID09PSBmYWxzZSkge1xuICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcmV2TWVudVN0YXRlLmN1cnJlbnQgPSBpc01lbnVFeHBhbmRlZDtcbiAgfSwgW2lzTWVudUV4cGFuZGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMudWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQXJlYX0+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkNvZGVidWRkaWVzIExvZ29cIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2SXRlbXN9PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c2ZlZWRcIj5OZXdzZmVlZDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzb3VyY2VzXCI+UmVzb3VyY2VzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm91cHNcIj5Hcm91cHM8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+UHJvamVjdHM8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICByZWY9e2FuY2hvclJlZn1cbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnUtbGlzdC1ncm93XCJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51T3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGVJY29uIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxQb3BwZXJcbiAgICAgICAgICAgICAgb3Blbj17aXNNZW51RXhwYW5kZWR9XG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICAgICAgICBkaXNhYmxlUG9ydGFsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBhcGVyIGlkPVwibWVudS1saXN0LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVNZW51Q2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17aXNNZW51RXhwYW5kZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Qb3BwZXI+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Nav/index.js\n'
      );

      /***/
    },
});