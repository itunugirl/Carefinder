"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./src/components/shareButtons.tsx":
/*!*****************************************!*\
  !*** ./src/components/shareButtons.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaEnvelope_FaFacebook_FaInstagram_FaTwitter_FaWhatsapp_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FaEnvelope,FaFacebook,FaInstagram,FaTwitter,FaWhatsapp!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n// src/components/shareButtons/ShareButton.tsx\n\n\n\nconst ShareButton = (param)=>{\n    let { platform, url, color = \"text-blue-500\" } = param;\n    let Icon;\n    switch(platform){\n        case \"whatsapp\":\n            Icon = _barrel_optimize_names_FaEnvelope_FaFacebook_FaInstagram_FaTwitter_FaWhatsapp_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaWhatsapp;\n            break;\n        case \"instagram\":\n            Icon = _barrel_optimize_names_FaEnvelope_FaFacebook_FaInstagram_FaTwitter_FaWhatsapp_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram;\n            break;\n        case \"twitter\":\n            Icon = _barrel_optimize_names_FaEnvelope_FaFacebook_FaInstagram_FaTwitter_FaWhatsapp_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTwitter;\n            break;\n        case \"facebook\":\n            Icon = _barrel_optimize_names_FaEnvelope_FaFacebook_FaInstagram_FaTwitter_FaWhatsapp_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFacebook;\n            break;\n        case \"email\":\n            Icon = _barrel_optimize_names_FaEnvelope_FaFacebook_FaInstagram_FaTwitter_FaWhatsapp_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEnvelope;\n            break;\n        default:\n            return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: url,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        className: \"\".concat(color, \" hover:text-blue-700\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n            className: \"text-2xl mx-2\"\n        }, void 0, false, {\n            fileName: \"/Users/olayinka/Downloads/medEase/medEase/src/components/shareButtons.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/olayinka/Downloads/medEase/medEase/src/components/shareButtons.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ShareButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShareButton);\nvar _c;\n$RefreshReg$(_c, \"ShareButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NoYXJlQnV0dG9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBOEM7O0FBRXBCO0FBQ2tFO0FBUTVGLE1BQU1NLGNBQTBDO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsZUFBZSxFQUFFO0lBQ3pGLElBQUlDO0lBRUosT0FBUUg7UUFDTixLQUFLO1lBQ0hHLE9BQU9ULG9JQUFVQTtZQUNqQjtRQUNGLEtBQUs7WUFDSFMsT0FBT1IscUlBQVdBO1lBQ2xCO1FBQ0YsS0FBSztZQUNIUSxPQUFPUCxtSUFBU0E7WUFDaEI7UUFDRixLQUFLO1lBQ0hPLE9BQU9OLG9JQUFVQTtZQUNqQjtRQUNGLEtBQUs7WUFDSE0sT0FBT0wsb0lBQVVBO1lBQ2pCO1FBQ0Y7WUFDRSxPQUFPO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ007UUFBRUMsTUFBTUo7UUFBS0ssUUFBTztRQUFTQyxLQUFJO1FBQXNCQyxXQUFXLEdBQVMsT0FBTk4sT0FBTTtrQkFDMUUsNEVBQUNDO1lBQUtLLFdBQVU7Ozs7Ozs7Ozs7O0FBR3RCO0tBNUJNVDtBQThCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaGFyZUJ1dHRvbnMudHN4PzhhZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2NvbXBvbmVudHMvc2hhcmVCdXR0b25zL1NoYXJlQnV0dG9uLnRzeFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFXaGF0c2FwcCwgRmFJbnN0YWdyYW0sIEZhVHdpdHRlciwgRmFGYWNlYm9vaywgRmFFbnZlbG9wZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuaW50ZXJmYWNlIFNoYXJlQnV0dG9uUHJvcHMge1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7ICAvLyBPcHRpb25hbCBjb2xvciBwcm9wXG59XG5cbmNvbnN0IFNoYXJlQnV0dG9uOiBSZWFjdC5GQzxTaGFyZUJ1dHRvblByb3BzPiA9ICh7IHBsYXRmb3JtLCB1cmwsIGNvbG9yID0gJ3RleHQtYmx1ZS01MDAnIH0pID0+IHtcbiAgbGV0IEljb246IFJlYWN0LkVsZW1lbnRUeXBlO1xuXG4gIHN3aXRjaCAocGxhdGZvcm0pIHtcbiAgICBjYXNlICd3aGF0c2FwcCc6XG4gICAgICBJY29uID0gRmFXaGF0c2FwcDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2luc3RhZ3JhbSc6XG4gICAgICBJY29uID0gRmFJbnN0YWdyYW07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0d2l0dGVyJzpcbiAgICAgIEljb24gPSBGYVR3aXR0ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmYWNlYm9vayc6XG4gICAgICBJY29uID0gRmFGYWNlYm9vaztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgIEljb24gPSBGYUVudmVsb3BlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9e2Ake2NvbG9yfSBob3Zlcjp0ZXh0LWJsdWUtNzAwYH0+XG4gICAgICA8SWNvbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBteC0yXCIgLz5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGFyZUJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhV2hhdHNhcHAiLCJGYUluc3RhZ3JhbSIsIkZhVHdpdHRlciIsIkZhRmFjZWJvb2siLCJGYUVudmVsb3BlIiwiU2hhcmVCdXR0b24iLCJwbGF0Zm9ybSIsInVybCIsImNvbG9yIiwiSWNvbiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/shareButtons.tsx\n"));

/***/ })

});