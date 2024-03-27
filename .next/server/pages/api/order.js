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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Forder&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Corder.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Forder&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Corder.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_order_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\order.js */ \"(api)/./src/pages/api/order.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_order_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_order_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/order\",\n        pathname: \"/api/order\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_order_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRm9yZGVyJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGc3JjJTVDcGFnZXMlNUNhcGklNUNvcmRlci5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUN3RDtBQUN4RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsb0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLG9EQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtd2Vlay1yZWFjdC1hcHAtcGl6emEvP2RjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyY1xcXFxwYWdlc1xcXFxhcGlcXFxcb3JkZXIuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9vcmRlclwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29yZGVyXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Forder&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Corder.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./schema.js":
/*!*******************!*\
  !*** ./schema.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// schema.js\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst orderSchema = new mongoose.Schema({\n    nome: String,\n    pizza: String,\n    base: String,\n    impasto: String,\n    ingredienti: [\n        String\n    ]\n});\nlet Order;\nif (mongoose.models.Order) {\n    Order = mongoose.model(\"Order\");\n} else {\n    Order = mongoose.model(\"Order\", orderSchema);\n}\nmodule.exports = Order;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zY2hlbWEuanMiLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWixNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUVuQyxNQUFNQyxjQUFjLElBQUlGLFNBQVNHLE1BQU0sQ0FBQztJQUN0Q0MsTUFBTUM7SUFDTkMsT0FBT0Q7SUFDUEUsTUFBTUY7SUFDTkcsU0FBU0g7SUFDVEksYUFBYTtRQUFDSjtLQUFPO0FBQ3ZCO0FBRUEsSUFBSUs7QUFDSixJQUFJVixTQUFTVyxNQUFNLENBQUNELEtBQUssRUFBRTtJQUN6QkEsUUFBUVYsU0FBU1ksS0FBSyxDQUFDO0FBQ3pCLE9BQU87SUFDTEYsUUFBUVYsU0FBU1ksS0FBSyxDQUFDLFNBQVNWO0FBQ2xDO0FBRUFXLE9BQU9DLE9BQU8sR0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLXdlZWstcmVhY3QtYXBwLXBpenphLy4vc2NoZW1hLmpzP2EwNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2NoZW1hLmpzXHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBub21lOiBTdHJpbmcsXHJcbiAgcGl6emE6IFN0cmluZyxcclxuICBiYXNlOiBTdHJpbmcsXHJcbiAgaW1wYXN0bzogU3RyaW5nLFxyXG4gIGluZ3JlZGllbnRpOiBbU3RyaW5nXSxcclxufSk7XHJcblxyXG5sZXQgT3JkZXI7XHJcbmlmIChtb25nb29zZS5tb2RlbHMuT3JkZXIpIHtcclxuICBPcmRlciA9IG1vbmdvb3NlLm1vZGVsKFwiT3JkZXJcIik7XHJcbn0gZWxzZSB7XHJcbiAgT3JkZXIgPSBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIG9yZGVyU2NoZW1hKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPcmRlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIm9yZGVyU2NoZW1hIiwiU2NoZW1hIiwibm9tZSIsIlN0cmluZyIsInBpenphIiwiYmFzZSIsImltcGFzdG8iLCJpbmdyZWRpZW50aSIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./schema.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/order.js":
/*!********************************!*\
  !*** ./src/pages/api/order.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst express = __webpack_require__(/*! express */ \"express\");\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst Order = __webpack_require__(/*! ../../../schema */ \"(api)/./schema.js\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst app = express();\napp.use(cors());\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        };\n        cached.promise = mongoose.connect(process.env.DATABASE_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\nasync function handler(req, res) {\n    await dbConnect();\n    if (req.method === \"POST\") {\n        const { nome, pizza, base, impasto, ingredienti } = req.body;\n        const newOrder = new Order({\n            nome,\n            pizza,\n            base,\n            impasto,\n            ingredienti\n        });\n        newOrder.save().then(()=>res.status(200).json({\n                message: \"Ordine salvato con successo! file order.js\"\n            })).catch((error)=>res.status(500).json({\n                error: \"Errore durante il salvataggio dell'ordine file oerde.js\"\n            }));\n    } else {\n        res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL29yZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVQyxtQkFBT0EsQ0FBQyx3QkFBUztBQUNqQyxNQUFNQyxXQUFXRCxtQkFBT0EsQ0FBQywwQkFBVTtBQUNuQyxNQUFNRSxRQUFRRixtQkFBT0EsQ0FBQywwQ0FBaUI7QUFDdkMsTUFBTUcsT0FBT0gsbUJBQU9BLENBQUMsa0JBQU07QUFFM0IsTUFBTUksTUFBTUw7QUFDWkssSUFBSUMsR0FBRyxDQUFDRjtBQUVSLElBQUlHLFNBQVNDLE9BQU9OLFFBQVE7QUFFNUIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFFTyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUN6RDtBQUVBLGVBQWVDO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsaUJBQWlCO1lBQ2pCQyxvQkFBb0I7UUFDdEI7UUFFQVAsT0FBT0csT0FBTyxHQUFHUixTQUNkYSxPQUFPLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFTixNQUNsQ08sSUFBSSxDQUFDLENBQUNqQjtZQUNMLE9BQU9BO1FBQ1Q7SUFDSjtJQUNBSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCO0FBRWUsZUFBZVcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU1YO0lBRU4sSUFBSVUsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFdBQVcsRUFBRSxHQUFHUCxJQUFJUSxJQUFJO1FBQzVELE1BQU1DLFdBQVcsSUFBSTNCLE1BQU07WUFDekJxQjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBRUFFLFNBQ0dDLElBQUksR0FDSlosSUFBSSxDQUFDLElBQ0pHLElBQ0dVLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBNkMsSUFFakVDLEtBQUssQ0FBQyxDQUFDQyxRQUNOZCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkcsT0FBTztZQUNUO0lBRU4sT0FBTztRQUNMZCxJQUFJVSxNQUFNLENBQUMsS0FBS0ssR0FBRztJQUNyQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZS13ZWVrLXJlYWN0LWFwcC1waXp6YS8uL3NyYy9wYWdlcy9hcGkvb3JkZXIuanM/NWQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xyXG5jb25zdCBPcmRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zY2hlbWFcIik7XHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKFwiY29yc1wiKTtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxuICB9XHJcblxyXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlXHJcbiAgICAgIC5jb25uZWN0KHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSSSwgb3B0cylcclxuICAgICAgLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IG5vbWUsIHBpenphLCBiYXNlLCBpbXBhc3RvLCBpbmdyZWRpZW50aSB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBuZXdPcmRlciA9IG5ldyBPcmRlcih7XHJcbiAgICAgIG5vbWUsXHJcbiAgICAgIHBpenphLFxyXG4gICAgICBiYXNlLFxyXG4gICAgICBpbXBhc3RvLFxyXG4gICAgICBpbmdyZWRpZW50aSxcclxuICAgIH0pO1xyXG5cclxuICAgIG5ld09yZGVyXHJcbiAgICAgIC5zYXZlKClcclxuICAgICAgLnRoZW4oKCkgPT5cclxuICAgICAgICByZXNcclxuICAgICAgICAgIC5zdGF0dXMoMjAwKVxyXG4gICAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIk9yZGluZSBzYWx2YXRvIGNvbiBzdWNjZXNzbyEgZmlsZSBvcmRlci5qc1wiIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT5cclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgICAgICBlcnJvcjogXCJFcnJvcmUgZHVyYW50ZSBpbCBzYWx2YXRhZ2dpbyBkZWxsJ29yZGluZSBmaWxlIG9lcmRlLmpzXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJtb25nb29zZSIsIk9yZGVyIiwiY29ycyIsImFwcCIsInVzZSIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJJIiwidGhlbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJub21lIiwicGl6emEiLCJiYXNlIiwiaW1wYXN0byIsImluZ3JlZGllbnRpIiwiYm9keSIsIm5ld09yZGVyIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Forder&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Corder.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();