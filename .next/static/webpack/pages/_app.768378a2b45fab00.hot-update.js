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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  font-size: 18px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 22px;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 30px;\\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.container-main {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  justify-content: center;\\n}\\n\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\n\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n}\\n\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n  object-fit: contain;\\n}\\n\\n.toolbar {\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,4HAA4H;;AAE5H;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;;;;EAKE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;EACxB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  font-size: 18px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 22px;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 30px;\\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.container-main {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  justify-content: center;\\n}\\n\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\n\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n}\\n\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n  object-fit: contain;\\n}\\n\\n.toolbar {\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2SUFBNkksTUFBTSxzQkFBc0IsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSw2Q0FBNkMseUNBQXlDLGtCQUFrQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixHQUFHLDRCQUE0QiwyQ0FBMkMsb0JBQW9CLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0Isb0JBQW9CLGlCQUFpQixrQkFBa0IsaUJBQWlCLGNBQWMsNEJBQTRCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsaUJBQWlCLG9DQUFvQyxHQUFHLGlDQUFpQyx1Q0FBdUMsZ0NBQWdDLEdBQUcsa0NBQWtDLHdDQUF3QyxpQ0FBaUMsR0FBRyx5QkFBeUIsUUFBUSwrQkFBK0IsS0FBSyxHQUFHLFNBQVMsaUJBQWlCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsU0FBUyxpQ0FBaUMsaUJBQWlCLHNCQUFzQixxQkFBcUIsb0JBQW9CLHdCQUF3QixzQkFBc0Is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QUEwQixLQUFLLFNBQVMseUJBQXlCLG1EQUFtRCxLQUFLLFFBQVEsMEJBQTBCLEtBQUssR0FBRywwQ0FBMEMsaUJBQWlCLG9CQUFvQixLQUFLLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLDBDQUEwQyxxQkFBcUIsb0JBQW9CLEtBQUssR0FBRyx1REFBdUQsV0FBVyw0Q0FBNEMsS0FBSyxHQUFHLHFCQUFxQjtBQUNyc087QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzA2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzcsIDEpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZm9yd2FyZHM7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQob2RkKSB7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5pbWdfbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4udG9vbGJhciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vayB7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTJweCAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItY29sb3I6IGRhcmtncmVlbjtcXG59XFxuXFxuLm9rOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb25fYnV0dG9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbi5vazphY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b25fZ287XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbl9idXR0b24ge1xcbiAgZnJvbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5vLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5vLWRpc3BsYXkgaW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRIQUE0SDs7QUFFNUg7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7Ozs7RUFLRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzcsIDEpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZm9yd2FyZHM7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQob2RkKSB7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5pbWdfbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4udG9vbGJhciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vayB7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTJweCAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItY29sb3I6IGRhcmtncmVlbjtcXG59XFxuXFxuLm9rOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb25fYnV0dG9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbi5vazphY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b25fZ287XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbl9idXR0b24ge1xcbiAgZnJvbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5vLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5vLWRpc3BsYXkgaW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});