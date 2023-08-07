"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LanguageSwitcher */ \"./components/LanguageSwitcher.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n// import logoimg from \"../public/images/logo.png\";\n\n\n\n\nasync function getStaticProps(param) {\n    let { locale } = param;\n    return {\n        props: {\n            ...await serverSideTranslations(locale, [\n                \"common\",\n                \"home\"\n            ])\n        }\n    };\n}\nconst Header = ()=>{\n    _s();\n    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();\n    let Links = [\n        {\n            name: t(\"Home\"),\n            link: \"/\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-house\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"About Us\"),\n            link: \"/About Us\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Initiatives\"),\n            link: \"/Initiatives\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Events\"),\n            link: \"/Events\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 57,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Map\"),\n            link: \"/Map\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Contact Us\"),\n            link: \"/Contact Us\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Blog\"),\n            link: \"/Blog\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, undefined)\n        }\n    ];\n    let [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        class: \"flex justify-between items-center w-[90%]  mx-auto pt-4 pb-1 h-[62px] md:h-[118px] md:pt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \" w-[51.56px] h-[46.41px] md:w-[100px] md:h-[90px] cursor-pointer \",\n                    src: \"/images/logo.png\",\n                    alt: \"Picture of the author\",\n                    width: 100,\n                    height: 90\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                    lineNumber: 109,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"xl:flex items-center justify-between bg-white xl:px-10 px-7 z-30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"md:mt-[30px] xl:flex xl:items-center xl:pb-8  absolute xl:static bg-[#fff] xl:z-auto  left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in \".concat(open ? \"top-[60.5px] md:top-20\" : \"top-[-540px]\"),\n                    children: Links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"xl:ml-8 xl:my-0 my-7 hover:text-primary flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"xl:hidden pr-3 pt-[2px] md:px-4 md:pt-1 md:text-3xl\",\n                                    children: link.icons\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link.link,\n                                    className: \"font-bold md:text-[24px] duration-500\",\n                                    children: link.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, link.name, true, {\n                            fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                            lineNumber: 124,\n                            columnNumber: 7\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                    lineNumber: 118,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 117,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                        lineNumber: 142,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setOpen(!open),\n                        className: \"right-8 top-6 cursor-pointer xl:hidden\",\n                        children: open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: \"fa-solid fa-xmark\",\n                            className: \"px-2 text-[2rem]\",\n                            color: \"#E4A954\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                            lineNumber: 148,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: \"fa-solid fa-bars\",\n                            className: \"px-2 text-[2rem]\",\n                            color: \"#E4A954\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                            lineNumber: 154,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                        lineNumber: 143,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 141,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n        lineNumber: 107,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"mWpx7w3TVkgqFWGcbCsvWfAtUa8=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFPYjtHQXBKTVI7O1FBQ1NMLHdEQUFjQTs7O0tBRHZCSztBQXNKTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgbG9nb2ltZyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2hlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYW5ndWFnZVN3aXRjaGVyXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgbG9jYWxlIH0pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Li4uKGF3YWl0IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMobG9jYWxlLCBbXCJjb21tb25cIiwgXCJob21lXCJdKSksXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG5cdGxldCBMaW5rcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogdChcIkhvbWVcIiksXHJcblx0XHRcdGxpbms6IFwiL1wiLFxyXG5cdFx0XHRpY29uczogKFxyXG5cdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1ob3VzZVwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIGxnOnRleHQtWzEuNWVtXVwiXHJcblx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiB0KFwiQWJvdXQgVXNcIiksXHJcblx0XHRcdGxpbms6IFwiL0Fib3V0IFVzXCIsXHJcblx0XHRcdGljb25zOiAoXHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLWNvbW1lbnQtZG90c1wiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIGxnOnRleHQtWzEuNWVtXVwiXHJcblx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiB0KFwiSW5pdGlhdGl2ZXNcIiksXHJcblx0XHRcdGxpbms6IFwiL0luaXRpYXRpdmVzXCIsXHJcblx0XHRcdGljb25zOiAoXHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLWNvbW1lbnQtZG90c1wiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIGxnOnRleHQtWzEuNWVtXVwiXHJcblx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiB0KFwiRXZlbnRzXCIpLFxyXG5cdFx0XHRsaW5rOiBcIi9FdmVudHNcIixcclxuXHRcdFx0aWNvbnM6IChcclxuXHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0XHRpY29uPVwiZmEtc29saWQgZmEtY29tbWVudC1kb3RzXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInB4LTIgbGc6dGV4dC1bMS41ZW1dXCJcclxuXHRcdFx0XHRcdGNvbG9yPVwiI0U0QTk1NFwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IHQoXCJNYXBcIiksXHJcblx0XHRcdGxpbms6IFwiL01hcFwiLFxyXG5cdFx0XHRpY29uczogKFxyXG5cdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1jb21tZW50LWRvdHNcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHgtMiBsZzp0ZXh0LVsxLjVlbV1cIlxyXG5cdFx0XHRcdFx0Y29sb3I9XCIjRTRBOTU0XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogdChcIkNvbnRhY3QgVXNcIiksXHJcblx0XHRcdGxpbms6IFwiL0NvbnRhY3QgVXNcIixcclxuXHRcdFx0aWNvbnM6IChcclxuXHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0XHRpY29uPVwiZmEtc29saWQgZmEtY29tbWVudC1kb3RzXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInB4LTIgbGc6dGV4dC1bMS41ZW1dXCJcclxuXHRcdFx0XHRcdGNvbG9yPVwiI0U0QTk1NFwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IHQoXCJCbG9nXCIpLFxyXG5cdFx0XHRsaW5rOiBcIi9CbG9nXCIsXHJcblx0XHRcdGljb25zOiAoXHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLWNvbW1lbnQtZG90c1wiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIGxnOnRleHQtWzEuNWVtXVwiXHJcblx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCksXHJcblx0XHR9LFxyXG5cdFx0Ly8geyBuYW1lOiBcIkhvbWVcIiwgbGluazogXCIvXCIsIGljb25zOiA8QmlIb21lQWx0IC8+IH0sXHJcblx0XHQvLyB7IG5hbWU6IFwiQWJvdXQgVXNcIiwgbGluazogXCIvQWJvdXQgVXNcIiwgaWNvbnM6IDxSaVF1aWxsUGVuTGluZSAvPiB9LFxyXG5cdFx0Ly8geyBuYW1lOiBcIkluaXRpYXRpdmVzXCIsIGxpbms6IFwiL0luaXRpYXRpdmVzXCIsIGljb25zOiA8QWlPdXRsaW5lVHJvcGh5IC8+IH0sXHJcblx0XHQvLyB7IG5hbWU6IFwiRXZlbnRzXCIsIGxpbms6IFwiL0V2ZW50c1wiLCBpY29uczogPElvTWVnYXBob25lT3V0bGluZSAvPiB9LFxyXG5cdFx0Ly8geyBuYW1lOiBcIk1hcFwiLCBsaW5rOiBcIi9NYXBcIiwgaWNvbnM6IDxJb0xvY2F0aW9uT3V0bGluZSAvPiB9LFxyXG5cdFx0Ly8geyBuYW1lOiBcIkNvbnRhY3QgVXNcIiwgbGluazogXCIvQ29udGFjdCBVc1wiLCBpY29uczogPElvQ2hhdGJveE91dGxpbmUgLz4gfSxcclxuXHRcdC8vIHsgbmFtZTogXCJCbG9nXCIsIGxpbms6IFwiL0Jsb2dcIiwgaWNvbnM6IDxCaUhlYXJ0IC8+IH0sXHJcblx0XTtcclxuXHRsZXQgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8aGVhZGVyIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctWzkwJV0gIG14LWF1dG8gcHQtNCBwYi0xIGgtWzYycHhdIG1kOmgtWzExOHB4XSBtZDpwdC0wXCI+XHJcblx0XHRcdDxhIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PEltYWdlXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCIgdy1bNTEuNTZweF0gaC1bNDYuNDFweF0gbWQ6dy1bMTAwcHhdIG1kOmgtWzkwcHhdIGN1cnNvci1wb2ludGVyIFwiXHJcblx0XHRcdFx0XHRzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcclxuXHRcdFx0XHRcdGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcblx0XHRcdFx0XHR3aWR0aD17MTAwfVxyXG5cdFx0XHRcdFx0aGVpZ2h0PXs5MH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2E+XHJcblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwieGw6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlIHhsOnB4LTEwIHB4LTcgei0zMFwiPlxyXG5cdFx0XHRcdDx1bFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbWQ6bXQtWzMwcHhdIHhsOmZsZXggeGw6aXRlbXMtY2VudGVyIHhsOnBiLTggIGFic29sdXRlIHhsOnN0YXRpYyBiZy1bI2ZmZl0geGw6ei1hdXRvICBsZWZ0LTAgdy1mdWxsIHhsOnctYXV0byB4bDpwbC0wIHBsLTkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2UtaW4gJHtcclxuXHRcdFx0XHRcdFx0b3BlbiA/IFwidG9wLVs2MC41cHhdIG1kOnRvcC0yMFwiIDogXCJ0b3AtWy01NDBweF1cIlxyXG5cdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e0xpbmtzLm1hcCgobGluaykgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2xpbmsubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ4bDptbC04IHhsOm15LTAgbXktNyBob3Zlcjp0ZXh0LXByaW1hcnkgZmxleFwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInhsOmhpZGRlbiBwci0zIHB0LVsycHhdIG1kOnB4LTQgbWQ6cHQtMSBtZDp0ZXh0LTN4bFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2xpbmsuaWNvbnN9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e2xpbmsubGlua31cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtZDp0ZXh0LVsyNHB4XSBkdXJhdGlvbi01MDBcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtsaW5rLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9uYXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cclxuXHRcdFx0XHQ8TGFuZ3VhZ2VTd2l0Y2hlciAvPlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmlnaHQtOCB0b3AtNiBjdXJzb3ItcG9pbnRlciB4bDpoaWRkZW5cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtvcGVuID8gKFxyXG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLXhtYXJrXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIHRleHQtWzJyZW1dXCJcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1iYXJzXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIHRleHQtWzJyZW1dXCJcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2hlYWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRm9udEF3ZXNvbWVJY29uIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInVzZVRyYW5zbGF0aW9uIiwiZ2V0U3RhdGljUHJvcHMiLCJsb2NhbGUiLCJwcm9wcyIsInNlcnZlclNpZGVUcmFuc2xhdGlvbnMiLCJIZWFkZXIiLCJ0IiwiTGlua3MiLCJuYW1lIiwibGluayIsImljb25zIiwiaWNvbiIsImNsYXNzTmFtZSIsImNvbG9yIiwib3BlbiIsInNldE9wZW4iLCJoZWFkZXIiLCJjbGFzcyIsImEiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXYiLCJ1bCIsIm1hcCIsImxpIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});