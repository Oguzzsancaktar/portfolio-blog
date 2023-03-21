"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-it */ \"markdown-it\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(\"blogs\");\n    const paths = files.map((fileName)=>({\n            params: {\n                slug: fileName.replace(\".md\", \"\")\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    const fileName = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`blogs/${slug}.md`, \"utf-8\");\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileName);\n    return {\n        props: {\n            frontmatter,\n            content\n        }\n    };\n}\nfunction PostPage({ frontmatter , content  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"prose mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: frontmatter.title\n            }, void 0, false, {\n                fileName: \"/Users/oguzsancaktar/Projects/oguzsancaktar/pages/blog/[slug].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: markdown_it__WEBPACK_IMPORTED_MODULE_3___default()().render(content)\n                }\n            }, void 0, false, {\n                fileName: \"/Users/oguzsancaktar/Projects/oguzsancaktar/pages/blog/[slug].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oguzsancaktar/Projects/oguzsancaktar/pages/blog/[slug].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUI7QUFDYTtBQUNKO0FBRXJCLGVBQWVHLGlCQUFrQjtJQUN0QyxNQUFNQyxRQUFRSixxREFBYyxDQUFDO0lBQzdCLE1BQU1NLFFBQVFGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxXQUFjO1lBQ3JDQyxRQUFRO2dCQUNOQyxNQUFNRixTQUFTRyxPQUFPLENBQUMsT0FBTztZQUNoQztRQUNGO0lBQ0EsT0FBTztRQUNMTDtRQUNBTSxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRU0sZUFBZUMsZUFBZ0IsRUFBRUosUUFBUSxFQUFFQyxLQUFJLEVBQUUsR0FBRSxFQUFFO0lBQzFELE1BQU1GLFdBQVdSLHNEQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUVVLEtBQUssR0FBRyxDQUFDLEVBQUU7SUFDckQsTUFBTSxFQUFFSyxNQUFNQyxZQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHaEIsa0RBQU1BLENBQUNPO0lBQzlDLE9BQU87UUFDTFUsT0FBTztZQUNMRjtZQUNBQztRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRWMsU0FBU0UsU0FBVSxFQUFFSCxZQUFXLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQzFELHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUlOLFlBQVlPLEtBQUs7Ozs7OzswQkFDdEIsOERBQUNIO2dCQUFJSSx5QkFBeUI7b0JBQUVDLFFBQVF2QixrREFBRUEsR0FBR3dCLE1BQU0sQ0FBQ1Q7Z0JBQVM7Ozs7Ozs7Ozs7OztBQUduRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2d1enNhbmNha3Rhci8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcbmltcG9ydCBtZCBmcm9tICdtYXJrZG93bi1pdCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzICgpIHtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygnYmxvZ3MnKVxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZU5hbWUpID0+ICh7XG4gICAgcGFyYW1zOiB7XG4gICAgICBzbHVnOiBmaWxlTmFtZS5yZXBsYWNlKCcubWQnLCAnJylcbiAgICB9XG4gIH0pKVxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcbiAgY29uc3QgZmlsZU5hbWUgPSBmcy5yZWFkRmlsZVN5bmMoYGJsb2dzLyR7c2x1Z30ubWRgLCAndXRmLTgnKVxuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZU5hbWUpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGZyb250bWF0dGVyLFxuICAgICAgY29udGVudFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSAoeyBmcm9udG1hdHRlciwgY29udGVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Byb3NlIG14LWF1dG8nPlxuICAgICAgPGgxPntmcm9udG1hdHRlci50aXRsZX08L2gxPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1kKCkucmVuZGVyKGNvbnRlbnQpIH19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJmcyIsIm1hdHRlciIsIm1kIiwiZ2V0U3RhdGljUGF0aHMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwicGF0aHMiLCJtYXAiLCJmaWxlTmFtZSIsInBhcmFtcyIsInNsdWciLCJyZXBsYWNlIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJmcm9udG1hdHRlciIsImNvbnRlbnQiLCJwcm9wcyIsIlBvc3RQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("markdown-it");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();