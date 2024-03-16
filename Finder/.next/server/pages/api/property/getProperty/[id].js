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
exports.id = "pages/api/property/getProperty/[id]";
exports.ids = ["pages/api/property/getProperty/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./model/property.js":
/*!***************************!*\
  !*** ./model/property.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PropertiesSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    thumbnails: {\n        type: Array\n    },\n    amenities: {\n        type: Array\n    },\n    href: {\n        type: String\n    },\n    images: {\n        type: Array\n    },\n    title: {\n        type: String\n    },\n    area: {\n        type: Number\n    },\n    category: {\n        type: String\n    },\n    address: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    price: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    footer: {\n        type: Array\n    },\n    featured: {\n        type: Boolean\n    },\n    propertyType: {\n        type: String\n    }\n});\nconst property = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Property) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Property\", PropertiesSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9wcm9wZXJ0eS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFHaEMsTUFBTUMsbUJBQW1CRCxzREFBZSxDQUFDO0lBQ3JDRyxZQUFZO1FBQ1JDLE1BQU1DO0lBRVY7SUFDQUMsV0FBVztRQUNQRixNQUFNQztJQUVWO0lBQ0FFLE1BQU07UUFDRkgsTUFBTUk7SUFFVjtJQUNBQyxRQUFRO1FBQ0pMLE1BQU1DO0lBRVY7SUFDQUssT0FBTztRQUNITixNQUFNSTtJQUVWO0lBQ0FHLE1BQU07UUFDRlAsTUFBTVE7SUFFVjtJQUNBQyxVQUFVO1FBQ05ULE1BQU1JO0lBRVY7SUFDQU0sU0FBUztRQUNMVixNQUFNSTtJQUVWO0lBQ0FPLE1BQU07UUFDRlgsTUFBTUk7SUFFVjtJQUNBUSxPQUFPO1FBQ0haLE1BQU1JO0lBRVY7SUFDQVMsYUFBYTtRQUNUYixNQUFNSTtJQUVWO0lBQ0FVLFFBQVE7UUFDSmQsTUFBTUM7SUFFVjtJQUNBYyxVQUFTO1FBQ0xmLE1BQU1nQjtJQUVWO0lBQ0FDLGNBQWE7UUFDVGpCLE1BQU1JO0lBRVY7QUFFSjtBQUlBLE1BQU1jLFdBQVV0QixpRUFBd0IsSUFBR0EscURBQWMsQ0FBQyxZQUFZQztBQUd0RSxpRUFBZXFCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kZXItcmVhY3QvLi9tb2RlbC9wcm9wZXJ0eS5qcz80MmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5cclxuY29uc3QgUHJvcGVydGllc1NjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYW1lbml0aWVzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBocmVmOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGFyZWE6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvL3JlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjaXR5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvL3JlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIC8vcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZWQ6e1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgLy9kZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0eVR5cGU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvL3JlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuY29uc3QgcHJvcGVydHk9IG1vbmdvb3NlLm1vZGVscy5Qcm9wZXJ0eSB8fG1vbmdvb3NlLm1vZGVsKCdQcm9wZXJ0eScsIFByb3BlcnRpZXNTY2hlbWEpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydHk7XHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9wZXJ0aWVzU2NoZW1hIiwiU2NoZW1hIiwidGh1bWJuYWlscyIsInR5cGUiLCJBcnJheSIsImFtZW5pdGllcyIsImhyZWYiLCJTdHJpbmciLCJpbWFnZXMiLCJ0aXRsZSIsImFyZWEiLCJOdW1iZXIiLCJjYXRlZ29yeSIsImFkZHJlc3MiLCJjaXR5IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImZvb3RlciIsImZlYXR1cmVkIiwiQm9vbGVhbiIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5IiwibW9kZWxzIiwiUHJvcGVydHkiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./model/property.js\n");

/***/ }),

/***/ "(api)/./pages/api/property/getProperty/[id].js":
/*!************************************************!*\
  !*** ./pages/api/property/getProperty/[id].js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _model_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../model/property */ \"(api)/./model/property.js\");\n\nasync function handler(req, res) {\n    // Optional: Check if the method is GET\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            msg: \"Method Not Allowed\"\n        });\n    }\n    try {\n        // Use req.query to access the URL parameters in Next.js\n        const { id  } = req.query;\n        const property = await _model_property__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n        if (!property) {\n            return res.status(404).json({\n                msg: \"Property not found\"\n            });\n        }\n        return res.status(200).json(property);\n    } catch (error) {\n        return res.status(500).json({\n            msg: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvcGVydHkvZ2V0UHJvcGVydHkvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRDtBQUdsQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1Qyx1Q0FBdUM7SUFDdkMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxLQUFLO1FBQXFCO0lBQzVELENBQUM7SUFFRCxJQUFJO1FBQ0Esd0RBQXdEO1FBQ3hELE1BQU0sRUFBRUMsR0FBRSxFQUFFLEdBQUdOLElBQUlPLEtBQUs7UUFHeEIsTUFBTUMsV0FBVyxNQUFNVixnRUFBaUIsQ0FBQ1E7UUFFekMsSUFBSSxDQUFDRSxVQUFVO1lBQ1gsT0FBT1AsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsS0FBSztZQUFxQjtRQUM1RCxDQUFDO1FBRUQsT0FBT0osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0k7SUFDaEMsRUFBRSxPQUFPRSxPQUFPO1FBQ1osT0FBT1QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxLQUFLSyxNQUFNQyxPQUFPO1FBQUM7SUFDckQ7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluZGVyLXJlYWN0Ly4vcGFnZXMvYXBpL3Byb3BlcnR5L2dldFByb3BlcnR5L1tpZF0uanM/Mjg5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvcGVydHknXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gT3B0aW9uYWw6IENoZWNrIGlmIHRoZSBtZXRob2QgaXMgR0VUXHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtc2c6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVXNlIHJlcS5xdWVyeSB0byBhY2Nlc3MgdGhlIFVSTCBwYXJhbWV0ZXJzIGluIE5leHQuanNcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IGF3YWl0IFByb3BlcnR5LmZpbmRCeUlkKGlkKTtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtc2c6ICdQcm9wZXJ0eSBub3QgZm91bmQnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb3BlcnR5KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlByb3BlcnR5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJpZCIsInF1ZXJ5IiwicHJvcGVydHkiLCJmaW5kQnlJZCIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/property/getProperty/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/property/getProperty/[id].js"));
module.exports = __webpack_exports__;

})();