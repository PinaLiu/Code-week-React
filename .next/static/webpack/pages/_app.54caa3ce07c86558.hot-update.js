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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\nbody {\\n  margin: 0;\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 22px;\\n}\\n/* my home */\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container-main {\\n  display: flex;\\n  /* flex-direction: column; */\\n  align-items: center;\\n  flex-wrap: wrap;\\n  /* text-align: center; */\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  /* padding: 10px;\\n  gap: 20px;\\n  width: 100%;*/\\n  justify-content: center;\\n}\\n/* animazione h3 */\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n\\n  /* border: 1px solid red; */\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  /* gli elementi dispari arrivano da destra */\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  /* gli elementi pari arrivano da sinistra */\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\nh4 {\\n  margin: 0;\\n}\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n  /* margin-right: 10px; */\\n}\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n\\n  object-fit: contain;\\n}\\n/* .number {\\n  display: flex;\\n  justify-content: flex-end;\\n} */\\n/* .shadow {\\n  box-shadow: inset 0 0 200px rgba(255, 255, 255, 1);\\n} */\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n/* button Crea */\\n\\n.toolbar {\\n  /* position: fixed; */\\n  /* left: 50%;\\n  top: 50%; */\\n  /* transform: translate(-50%, -50%); */\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n}\\n\\n.ok {\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n/* Mobile */\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n/* Tablet and Smaller Desktop */\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,4HAA4H;;AAE5H;EACE,SAAS;EACT,wCAAwC;EACxC,kCAAkC;AACpC;AACA;;;;;EAKE,oCAAoC;EACpC,eAAe;AACjB;AACA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,SAAS;EACT;;eAEa;EACb,uBAAuB;AACzB;AACA,kBAAkB;AAClB;EACE,YAAY;EACZ,aAAa;EACb,YAAY;;EAEZ,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,4CAA4C;EAC5C,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;;EAEb,mBAAmB;AACrB;AACA;;;GAGG;AACH;;GAEG;;AAEH;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;AACA,gBAAgB;;AAEhB;EACE,qBAAqB;EACrB;aACW;EACX,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,iBAAiB;;EAEjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;AACnC;AACA;EACE,mCAAmC;EACnC,wBAAwB;EACxB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;;EAEjC,kBAAkB;AACpB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;AACF;AACA,WAAW;AACX;EACE;IACE,aAAa;EACf;AACF;;AAEA,+BAA+B;AAC/B;EACE;IACE,qCAAqC;EACvC;AACF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\nbody {\\n  margin: 0;\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 22px;\\n}\\n/* my home */\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container-main {\\n  display: flex;\\n  /* flex-direction: column; */\\n  align-items: center;\\n  flex-wrap: wrap;\\n  /* text-align: center; */\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  /* padding: 10px;\\n  gap: 20px;\\n  width: 100%;*/\\n  justify-content: center;\\n}\\n/* animazione h3 */\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n\\n  /* border: 1px solid red; */\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  /* gli elementi dispari arrivano da destra */\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  /* gli elementi pari arrivano da sinistra */\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\nh4 {\\n  margin: 0;\\n}\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n  /* margin-right: 10px; */\\n}\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n\\n  object-fit: contain;\\n}\\n/* .number {\\n  display: flex;\\n  justify-content: flex-end;\\n} */\\n/* .shadow {\\n  box-shadow: inset 0 0 200px rgba(255, 255, 255, 1);\\n} */\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n/* button Crea */\\n\\n.toolbar {\\n  /* position: fixed; */\\n  /* left: 50%;\\n  top: 50%; */\\n  /* transform: translate(-50%, -50%); */\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n}\\n\\n.ok {\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n/* Mobile */\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n/* Tablet and Smaller Desktop */\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2SUFBNkksTUFBTSxzQkFBc0IsVUFBVSxjQUFjLDZDQUE2Qyx5Q0FBeUMsR0FBRywwQkFBMEIsMkNBQTJDLG9CQUFvQixHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUIsa0JBQWtCLCtCQUErQiwwQkFBMEIsb0JBQW9CLDJCQUEyQixtQkFBbUIsa0JBQWtCLGlCQUFpQixjQUFjLHFCQUFxQixjQUFjLGdCQUFnQiw4QkFBOEIsR0FBRyxxQ0FBcUMsaUJBQWlCLGtCQUFrQixpQkFBaUIsZ0NBQWdDLHNDQUFzQyxHQUFHLGlDQUFpQyx3RkFBd0YsZ0NBQWdDLEdBQUcsa0NBQWtDLHdGQUF3RixpQ0FBaUMsR0FBRyx5QkFBeUIsUUFBUSwrQkFBK0IsS0FBSyxHQUFHLE1BQU0sY0FBYyxHQUFHLE9BQU8saUJBQWlCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLEdBQUcsZUFBZSxrQkFBa0IsaUJBQWlCLGlCQUFpQiwyQkFBMkIsS0FBSyxRQUFRLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGlCQUFpQixrQkFBa0IsMEJBQTBCLEdBQUcsY0FBYyxrQkFBa0IsOEJBQThCLElBQUksZ0JBQWdCLHVEQUF1RCxJQUFJLDRDQUE0QyxpQkFBaUIsb0JBQW9CLEtB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QUFrQixtQkFBbUIsS0FBSyxHQUFHLGlDQUFpQyx3QkFBd0IsbUJBQW1CLGNBQWMsMkNBQTJDLHlCQUF5QixHQUFHLFNBQVMsaUNBQWlDLGlCQUFpQixzQkFBc0IsdUJBQXVCLG9CQUFvQix3QkFBd0Isc0JBQXNCLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLGtCQUFrQixHQUFHLFNBQVMsNEJBQTRCLDRCQUE0QixHQUFHLGVBQWUscUNBQXFDLDJCQUEyQixtQ0FBbUMsa0NBQWtDLHdDQUF3QyxzQ0FBc0MsR0FBRyxjQUFjLHdDQUF3Qyw2QkFBNkIsbUNBQW1DLGtDQUFrQyx3Q0FBd0Msc0NBQXNDLHlCQUF5QixHQUFHLGlDQUFpQyxVQUFVLDBCQUEwQixLQUFLLFNBQVMseUJBQXlCLG1EQUFtRCxLQUFLLFFBQVEsMEJBQTBCLEtBQUssR0FBRyxzREFBc0QscUJBQXFCLG9CQUFvQixLQUFLLEdBQUcseUZBQXlGLFdBQVcsNENBQTRDLEtBQUssR0FBRyxxQkFBcUI7QUFDMXlRO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz8wNmFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmRpZStGbG93ZXImZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzEsMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NywgMjM3LCAxKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLyogbXkgaG9tZSAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7Ki9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBhbmltYXppb25lIGgzICovXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICBhbmltYXRpb246IHNsaWRlLWluIDFzIGZvcndhcmRzO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKG9kZCkge1xcbiAgLyogZ2xpIGVsZW1lbnRpIGRpc3BhcmkgYXJyaXZhbm8gZGEgZGVzdHJhICovXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIC8qIGdsaSBlbGVtZW50aSBwYXJpIGFycml2YW5vIGRhIHNpbmlzdHJhICovXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbmg0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5pbWdfbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXFxufVxcbi5pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4vKiAubnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn0gKi9cXG4vKiAuc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn0gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5vLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG4vKiBidXR0b24gQ3JlYSAqL1xcblxcbi50b29sYmFyIHtcXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXG4gIC8qIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlOyAqL1xcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vayB7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTJweCAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ub2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItY29sb3I6IGRhcmtncmVlbjtcXG59XFxuXFxuLm9rOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb25fYnV0dG9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcbi5vazphY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b25fZ287XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbl9idXR0b24ge1xcbiAgZnJvbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbn1cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5vLWRpc3BsYXkgaW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLyogVGFibGV0IGFuZCBTbWFsbGVyIERlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEhBQTRIOztBQUU1SDtFQUNFLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsa0NBQWtDO0FBQ3BDO0FBQ0E7Ozs7O0VBS0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7QUFDQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVDs7ZUFFYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTs7RUFFWiwyQkFBMkI7RUFDM0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhOztFQUViLG1CQUFtQjtBQUNyQjtBQUNBOzs7R0FHRztBQUNIOztHQUVHOztBQUVIO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0EsZ0JBQWdCOztBQUVoQjtFQUNFLHFCQUFxQjtFQUNyQjthQUNXO0VBQ1gsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHdCQUF3QjtFQUN4Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxpQ0FBaUM7O0VBRWpDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBLFdBQVc7QUFDWDtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmRpZStGbG93ZXImZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzEsMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NywgMjM3LCAxKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLyogbXkgaG9tZSAqL1xcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBnYXA6IDEwcHg7XFxuICAvKiBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7Ki9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBhbmltYXppb25lIGgzICovXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICBhbmltYXRpb246IHNsaWRlLWluIDFzIGZvcndhcmRzO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKG9kZCkge1xcbiAgLyogZ2xpIGVsZW1lbnRpIGRpc3BhcmkgYXJyaXZhbm8gZGEgZGVzdHJhICovXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIC8qIGdsaSBlbGVtZW50aSBwYXJpIGFycml2YW5vIGRhIHNpbmlzdHJhICovXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcbmg0IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5pbWdfbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXFxufVxcbi5pbWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuXFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4vKiAubnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn0gKi9cXG4vKiAuc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn0gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLm5vLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG4vKiBidXR0b24gQ3JlYSAqL1xcblxcbi50b29sYmFyIHtcXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXG4gIC8qIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlOyAqL1xcbiAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vayB7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTJweCAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ub2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItY29sb3I6IGRhcmtncmVlbjtcXG59XFxuXFxuLm9rOmhvdmVyIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb25fYnV0dG9uO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcbi5vazphY3RpdmUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b25fZ287XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGlvbl9idXR0b24ge1xcbiAgZnJvbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbn1cXG4vKiBNb2JpbGUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm5vLWRpc3BsYXkgaW1nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLyogVGFibGV0IGFuZCBTbWFsbGVyIERlc2t0b3AgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});