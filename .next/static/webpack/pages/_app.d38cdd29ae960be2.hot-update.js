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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\nbody {\\n  margin: 0;\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n}\\n/* my home */\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container-main {\\n  display: flex;\\n  /* flex-direction: column; */\\n  align-items: center;\\n  flex-wrap: wrap;\\n  /* text-align: center; */\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  /* padding: 10px;\\n  gap: 20px;\\n  width: 100%;*/\\n  justify-content: center;\\n}\\n/* animazione h3 */\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n\\n  /* border: 1px solid red; */\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  /* gli elementi dispari arrivano da destra */\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  /* gli elementi pari arrivano da sinistra */\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\nh4 {\\n  margin: 0;\\n}\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n  /* margin-right: 10px; */\\n}\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n\\n  object-fit: contain;\\n}\\n/* .number {\\n  display: flex;\\n  justify-content: flex-end;\\n} */\\n/* .shadow {\\n  box-shadow: inset 0 0 200px rgba(255, 255, 255, 1);\\n} */\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n/* button Crea */\\n\\n.toolbar {\\n  /* position: fixed; */\\n  /* left: 50%;\\n  top: 50%; */\\n  /* transform: translate(-50%, -50%); */\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n}\\n\\n.ok {\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,4HAA4H;;AAE5H;EACE,SAAS;EACT,wCAAwC;EACxC,kCAAkC;AACpC;AACA;;;;;EAKE,oCAAoC;AACtC;AACA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,SAAS;EACT;;eAEa;EACb,uBAAuB;AACzB;AACA,kBAAkB;AAClB;EACE,YAAY;EACZ,aAAa;EACb,YAAY;;EAEZ,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,4CAA4C;EAC5C,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;;EAEb,mBAAmB;AACrB;AACA;;;GAGG;AACH;;GAEG;;AAEH;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;AACA,gBAAgB;;AAEhB;EACE,qBAAqB;EACrB;aACW;EACX,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,iBAAiB;;EAEjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;;EAElB,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;AACnC;AACA;EACE,mCAAmC;EACnC,wBAAwB;EACxB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;;EAEjC,kBAAkB;AACpB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;AACF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\nbody {\\n  margin: 0;\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n}\\n/* my home */\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container-main {\\n  display: flex;\\n  /* flex-direction: column; */\\n  align-items: center;\\n  flex-wrap: wrap;\\n  /* text-align: center; */\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  /* padding: 10px;\\n  gap: 20px;\\n  width: 100%;*/\\n  justify-content: center;\\n}\\n/* animazione h3 */\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n\\n  /* border: 1px solid red; */\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  /* gli elementi dispari arrivano da destra */\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  /* gli elementi pari arrivano da sinistra */\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\nh4 {\\n  margin: 0;\\n}\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n  /* margin-right: 10px; */\\n}\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n\\n  object-fit: contain;\\n}\\n/* .number {\\n  display: flex;\\n  justify-content: flex-end;\\n} */\\n/* .shadow {\\n  box-shadow: inset 0 0 200px rgba(255, 255, 255, 1);\\n} */\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n/* button Crea */\\n\\n.toolbar {\\n  /* position: fixed; */\\n  /* left: 50%;\\n  top: 50%; */\\n  /* transform: translate(-50%, -50%); */\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n}\\n\\n.ok {\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2SUFBNkksTUFBTSxzQkFBc0IsVUFBVSxjQUFjLDZDQUE2Qyx5Q0FBeUMsR0FBRywwQkFBMEIsMkNBQTJDLEdBQUcsNEJBQTRCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixHQUFHLG1CQUFtQixrQkFBa0IsK0JBQStCLDBCQUEwQixvQkFBb0IsMkJBQTJCLG1CQUFtQixrQkFBa0IsaUJBQWlCLGNBQWMscUJBQXFCLGNBQWMsZ0JBQWdCLDhCQUE4QixHQUFHLHFDQUFxQyxpQkFBaUIsa0JBQWtCLGlCQUFpQixnQ0FBZ0Msc0NBQXNDLEdBQUcsaUNBQWlDLHdGQUF3RixnQ0FBZ0MsR0FBRyxrQ0FBa0Msd0ZBQXdGLGlDQUFpQyxHQUFHLHlCQUF5QixRQUFRLCtCQUErQixLQUFLLEdBQUcsTUFBTSxjQUFjLEdBQUcsT0FBTyxpQkFBaUIsa0JBQWtCLGdCQUFnQix3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQixpQkFBaUIsaUJBQWlCLDJCQUEyQixLQUFLLFFBQVEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLGtCQUFrQiwwQkFBMEIsR0FBRyxjQUFjLGtCQUFrQiw4QkFBOEIsSUFBSSxnQkFBZ0IsdURBQXVELElBQUksNENBQTRDLGlCQUFpQixvQkFBb0IsS0FBSyxrQkFB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NkIsa0JBQWtCLEdBQUcsU0FBUyw0QkFBNEIsNEJBQTRCLEdBQUcsZUFBZSxxQ0FBcUMsMkJBQTJCLG1DQUFtQyxrQ0FBa0Msd0NBQXdDLHNDQUFzQyxHQUFHLGNBQWMsd0NBQXdDLDZCQUE2QixtQ0FBbUMsa0NBQWtDLHdDQUF3QyxzQ0FBc0MseUJBQXlCLEdBQUcsaUNBQWlDLFVBQVUsMEJBQTBCLEtBQUssU0FBUyx5QkFBeUIsbURBQW1ELEtBQUssUUFBUSwwQkFBMEIsS0FBSyxHQUFHLHFCQUFxQjtBQUNscVA7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzA2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzcsIDEpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxubGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRpZSBGbG93ZXJcXFwiLCBjdXJzaXZlO1xcbn1cXG4vKiBteSBob21lICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTAwJTsqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIGFuaW1hemlvbmUgaDMgKi9cXG4uZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZm9yd2FyZHM7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQob2RkKSB7XFxuICAvKiBnbGkgZWxlbWVudGkgZGlzcGFyaSBhcnJpdmFubyBkYSBkZXN0cmEgKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQoZXZlbikge1xcbiAgLyogZ2xpIGVsZW1lbnRpIHBhcmkgYXJyaXZhbm8gZGEgc2luaXN0cmEgKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuaDQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLmltZ19udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cXG59XFxuLmltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG5cXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi8qIC5udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufSAqL1xcbi8qIC5zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufSAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubm8tZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcbi8qIGJ1dHRvbiBDcmVhICovXFxuXFxuLnRvb2xiYXIge1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgLyogbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7ICovXFxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9rIHtcXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxMnB4IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5vayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cXG4ub2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b247XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuLm9rOmFjdGl2ZSB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uX2J1dHRvbl9nbztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uX2J1dHRvbiB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTJweCwgLTJweCk7XFxuICB9XFxuICB0byB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRIQUE0SDs7QUFFNUg7RUFDRSxTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLGtDQUFrQztBQUNwQztBQUNBOzs7OztFQUtFLG9DQUFvQztBQUN0QztBQUNBLFlBQVk7O0FBRVo7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNUOztlQUVhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZOztFQUVaLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0NBQWtDO0VBQ2xDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7O0VBRWIsbUJBQW1CO0FBQ3JCO0FBQ0E7OztHQUdHO0FBQ0g7O0dBRUc7O0FBRUg7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQSxnQkFBZ0I7O0FBRWhCO0VBQ0UscUJBQXFCO0VBQ3JCO2FBQ1c7RUFDWCxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLGlDQUFpQzs7RUFFakMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQiw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzcsIDEpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxubGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRpZSBGbG93ZXJcXFwiLCBjdXJzaXZlO1xcbn1cXG4vKiBteSBob21lICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTAwJTsqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIGFuaW1hemlvbmUgaDMgKi9cXG4uZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZm9yd2FyZHM7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQob2RkKSB7XFxuICAvKiBnbGkgZWxlbWVudGkgZGlzcGFyaSBhcnJpdmFubyBkYSBkZXN0cmEgKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQoZXZlbikge1xcbiAgLyogZ2xpIGVsZW1lbnRpIHBhcmkgYXJyaXZhbm8gZGEgc2luaXN0cmEgKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuaDQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLmltZ19udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cXG59XFxuLmltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG5cXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi8qIC5udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufSAqL1xcbi8qIC5zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxufSAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubm8tZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcbi8qIGJ1dHRvbiBDcmVhICovXFxuXFxuLnRvb2xiYXIge1xcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgLyogbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7ICovXFxuICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9rIHtcXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxMnB4IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5vayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cXG4ub2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b247XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuLm9rOmFjdGl2ZSB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uX2J1dHRvbl9nbztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uX2J1dHRvbiB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTJweCwgLTJweCk7XFxuICB9XFxuICB0byB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});