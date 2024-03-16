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
exports.id = "pages/api/property/properties";
exports.ids = ["pages/api/property/properties"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./database/config.js":
/*!****************************!*\
  !*** ./database/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Connection = async ()=>{\n    const URL = `mongodb://user:user@ac-mrcno1m-shard-00-00.3klvm7x.mongodb.net:27017,ac-mrcno1m-shard-00-01.3klvm7x.mongodb.net:27017,ac-mrcno1m-shard-00-02.3klvm7x.mongodb.net:27017/?ssl=true&replicaSet=atlas-11waab-shard-0&authSource=admin&retryWrites=true&w=majority`;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(URL, {\n            useNewUrlParser: true\n        });\n        console.log(\"Database connected successfull\");\n    } catch (error) {\n        console.log(\"Error while connection\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBR2hDLE1BQU1DLGFBQVksVUFBUztJQUN2QixNQUFNQyxNQUFJLENBQUMsNlBBQTZQLENBQUM7SUFDelEsSUFBRztRQUNDLE1BQU1GLHVEQUFnQixDQUFDRSxLQUFJO1lBQUNFLGlCQUFnQixJQUFJO1FBQUE7UUFDaERDLFFBQVFDLEdBQUcsQ0FBQztJQUVoQixFQUNBLE9BQU1DLE9BQU07UUFDUkYsUUFBUUMsR0FBRyxDQUFDLDBCQUF5QkM7SUFFekM7QUFDSjtBQUNBLGlFQUFlTixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluZGVyLXJlYWN0Ly4vZGF0YWJhc2UvY29uZmlnLmpzPzZjNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcblxyXG5jb25zdCBDb25uZWN0aW9uPSBhc3luYygpPT57XHJcbiAgICBjb25zdCBVUkw9YG1vbmdvZGI6Ly91c2VyOnVzZXJAYWMtbXJjbm8xbS1zaGFyZC0wMC0wMC4za2x2bTd4Lm1vbmdvZGIubmV0OjI3MDE3LGFjLW1yY25vMW0tc2hhcmQtMDAtMDEuM2tsdm03eC5tb25nb2RiLm5ldDoyNzAxNyxhYy1tcmNubzFtLXNoYXJkLTAwLTAyLjNrbHZtN3gubW9uZ29kYi5uZXQ6MjcwMTcvP3NzbD10cnVlJnJlcGxpY2FTZXQ9YXRsYXMtMTF3YWFiLXNoYXJkLTAmYXV0aFNvdXJjZT1hZG1pbiZyZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXHJcbiAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChVUkwse3VzZU5ld1VybFBhcnNlcjp0cnVlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCBzdWNjZXNzZnVsbCcpXHJcblxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgY29ubmVjdGlvblwiLGVycm9yKTtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGlvbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDb25uZWN0aW9uIiwiVVJMIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/config.js\n");

/***/ }),

/***/ "(api)/./model/property.js":
/*!***************************!*\
  !*** ./model/property.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PropertiesSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    thumbnails: {\n        type: Array\n    },\n    amenities: {\n        type: Array\n    },\n    href: {\n        type: String\n    },\n    images: {\n        type: Array\n    },\n    title: {\n        type: String\n    },\n    area: {\n        type: Number\n    },\n    category: {\n        type: String\n    },\n    address: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    price: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    footer: {\n        type: Array\n    },\n    featured: {\n        type: Boolean\n    },\n    propertyType: {\n        type: String\n    }\n});\nconst property = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Property) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Property\", PropertiesSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (property);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9wcm9wZXJ0eS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFHaEMsTUFBTUMsbUJBQW1CRCxzREFBZSxDQUFDO0lBQ3JDRyxZQUFZO1FBQ1JDLE1BQU1DO0lBRVY7SUFDQUMsV0FBVztRQUNQRixNQUFNQztJQUVWO0lBQ0FFLE1BQU07UUFDRkgsTUFBTUk7SUFFVjtJQUNBQyxRQUFRO1FBQ0pMLE1BQU1DO0lBRVY7SUFDQUssT0FBTztRQUNITixNQUFNSTtJQUVWO0lBQ0FHLE1BQU07UUFDRlAsTUFBTVE7SUFFVjtJQUNBQyxVQUFVO1FBQ05ULE1BQU1JO0lBRVY7SUFDQU0sU0FBUztRQUNMVixNQUFNSTtJQUVWO0lBQ0FPLE1BQU07UUFDRlgsTUFBTUk7SUFFVjtJQUNBUSxPQUFPO1FBQ0haLE1BQU1JO0lBRVY7SUFDQVMsYUFBYTtRQUNUYixNQUFNSTtJQUVWO0lBQ0FVLFFBQVE7UUFDSmQsTUFBTUM7SUFFVjtJQUNBYyxVQUFTO1FBQ0xmLE1BQU1nQjtJQUVWO0lBQ0FDLGNBQWE7UUFDVGpCLE1BQU1JO0lBRVY7QUFFSjtBQUlBLE1BQU1jLFdBQVV0QixpRUFBd0IsSUFBR0EscURBQWMsQ0FBQyxZQUFZQztBQUd0RSxpRUFBZXFCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kZXItcmVhY3QvLi9tb2RlbC9wcm9wZXJ0eS5qcz80MmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5cclxuY29uc3QgUHJvcGVydGllc1NjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aHVtYm5haWxzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYW1lbml0aWVzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBocmVmOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgLy8gcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGFyZWE6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvL3JlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBjaXR5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIC8vcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcHJpY2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgLy9yZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvL3JlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIC8vcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZWQ6e1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgLy9kZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0eVR5cGU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAvL3JlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuY29uc3QgcHJvcGVydHk9IG1vbmdvb3NlLm1vZGVscy5Qcm9wZXJ0eSB8fG1vbmdvb3NlLm1vZGVsKCdQcm9wZXJ0eScsIFByb3BlcnRpZXNTY2hlbWEpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvcGVydHk7XHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9wZXJ0aWVzU2NoZW1hIiwiU2NoZW1hIiwidGh1bWJuYWlscyIsInR5cGUiLCJBcnJheSIsImFtZW5pdGllcyIsImhyZWYiLCJTdHJpbmciLCJpbWFnZXMiLCJ0aXRsZSIsImFyZWEiLCJOdW1iZXIiLCJjYXRlZ29yeSIsImFkZHJlc3MiLCJjaXR5IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImZvb3RlciIsImZlYXR1cmVkIiwiQm9vbGVhbiIsInByb3BlcnR5VHlwZSIsInByb3BlcnR5IiwibW9kZWxzIiwiUHJvcGVydHkiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./model/property.js\n");

/***/ }),

/***/ "(api)/./pages/api/property/properties.js":
/*!******************************************!*\
  !*** ./pages/api/property/properties.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _model_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../model/property */ \"(api)/./model/property.js\");\n/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database/config */ \"(api)/./database/config.js\");\n\n\nasync function handler(req, res) {\n    await (0,_database_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    let category = req.query.category;\n    let properties;\n    try {\n        if (category) {\n            // Assuming your Property model has a `categories` field to filter by\n            properties = await _model_property__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n                categories: category\n            });\n        } else {\n            properties = await _model_property__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        }\n        return res.status(200).json(properties);\n    } catch (error) {\n        return res.status(500).json({\n            msg: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvcGVydHkvcHJvcGVydGllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDSTtBQUduQyxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNSCw0REFBVUE7SUFDaEIsSUFBSUksV0FBV0YsSUFBSUcsS0FBSyxDQUFDRCxRQUFRO0lBQ2pDLElBQUlFO0lBQ0osSUFBSTtRQUNBLElBQUlGLFVBQVU7WUFDVixxRUFBcUU7WUFDckVFLGFBQWEsTUFBTVAsNERBQWEsQ0FBQztnQkFBRVMsWUFBWUo7WUFBUztRQUM1RCxPQUFPO1lBQ0hFLGFBQWEsTUFBTVAsNERBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxPQUFPSSxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtJQUNoQyxFQUFFLE9BQU9LLE9BQU87UUFDWixPQUFPUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLEtBQUtELE1BQU1FLE9BQU87UUFBQztJQUNyRDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kZXItcmVhY3QvLi9wYWdlcy9hcGkvcHJvcGVydHkvcHJvcGVydGllcy5qcz8zZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9wZXJ0eSdcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBhd2FpdCBDb25uZWN0aW9uKCk7XHJcbiAgICBsZXQgY2F0ZWdvcnkgPSByZXEucXVlcnkuY2F0ZWdvcnk7XHJcbiAgICBsZXQgcHJvcGVydGllcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHlvdXIgUHJvcGVydHkgbW9kZWwgaGFzIGEgYGNhdGVnb3JpZXNgIGZpZWxkIHRvIGZpbHRlciBieVxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gYXdhaXQgUHJvcGVydHkuZmluZCh7IGNhdGVnb3JpZXM6IGNhdGVnb3J5IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBhd2FpdCBQcm9wZXJ0eS5maW5kKHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb3BlcnRpZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByb3BlcnR5IiwiQ29ubmVjdGlvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjYXRlZ29yeSIsInF1ZXJ5IiwicHJvcGVydGllcyIsImZpbmQiLCJjYXRlZ29yaWVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibXNnIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/property/properties.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/property/properties.js"));
module.exports = __webpack_exports__;

})();