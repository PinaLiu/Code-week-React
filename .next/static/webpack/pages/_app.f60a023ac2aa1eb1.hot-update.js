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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\nbody {\\n  margin: 0;\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-size: 18px;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 19px;\\n}\\n/* my home */\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container-main {\\n  display: flex;\\n  /* flex-direction: column; */\\n  align-items: center;\\n  flex-wrap: wrap;\\n  /* text-align: center; */\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  /* padding: 10px;\\n  gap: 20px;\\n  width: 100%;*/\\n  justify-content: center;\\n}\\n/* animazione h3 */\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n\\n  /* border: 1px solid red; */\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  /* gli elementi dispari arrivano da destra */\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  /* gli elementi pari arrivano da sinistra */\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\nh4 {\\n  margin: 0;\\n}\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n.img_number {\\n  display: flex;\\n  /* width: 100px; */\\n  height: 50px;\\n  /* margin-right: 10px; */\\n}\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n\\n  object-fit: contain;\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n/* button Crea */\\n\\n.toolbar {\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin: 30px 10px 10px 10px;\\n\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n}\\n\\n.ok {\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n/* Mobile */\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n/* Tablet and Smaller Desktop */\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,4HAA4H;;AAE5H;EACE,SAAS;EACT,wCAAwC;EACxC,kCAAkC;EAClC,eAAe;AACjB;AACA;;;;;EAKE,oCAAoC;EACpC,eAAe;AACjB;AACA,YAAY;;AAEZ;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,4BAA4B;EAC5B,mBAAmB;EACnB,eAAe;EACf,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,SAAS;EACT;;eAEa;EACb,uBAAuB;AACzB;AACA,kBAAkB;AAClB;EACE,YAAY;EACZ,aAAa;EACb,YAAY;;EAEZ,2BAA2B;EAC3B,+BAA+B;AACjC;;AAEA;EACE,4CAA4C;EAC5C,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF;AACA;EACE,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;;EAEb,mBAAmB;AACrB;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;AACA,gBAAgB;;AAEhB;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,iBAAiB;;EAEjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,2BAA2B;;EAE3B,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;AACnC;AACA;EACE,mCAAmC;EACnC,wBAAwB;EACxB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;;EAEjC,kBAAkB;AACpB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;AACF;AACA,WAAW;AACX;EACE;IACE,aAAa;EACf;AACF;;AAEA,+BAA+B;AAC/B;EACE;IACE,qCAAqC;EACvC;AACF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\nbody {\\n  margin: 0;\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  font-size: 18px;\\n}\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 19px;\\n}\\n/* my home */\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.container-main {\\n  display: flex;\\n  /* flex-direction: column; */\\n  align-items: center;\\n  flex-wrap: wrap;\\n  /* text-align: center; */\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  /* padding: 10px;\\n  gap: 20px;\\n  width: 100%;*/\\n  justify-content: center;\\n}\\n/* animazione h3 */\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n\\n  /* border: 1px solid red; */\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  /* gli elementi dispari arrivano da destra */\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  /* gli elementi pari arrivano da sinistra */\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\nh4 {\\n  margin: 0;\\n}\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n.img_number {\\n  display: flex;\\n  /* width: 100px; */\\n  height: 50px;\\n  /* margin-right: 10px; */\\n}\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n\\n  object-fit: contain;\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n/* button Crea */\\n\\n.toolbar {\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin: 30px 10px 10px 10px;\\n\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n}\\n\\n.ok {\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n/* Mobile */\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n/* Tablet and Smaller Desktop */\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2SUFBNkksTUFBTSxzQkFBc0IsVUFBVSxjQUFjLDZDQUE2Qyx5Q0FBeUMsb0JBQW9CLEdBQUcsMEJBQTBCLDJDQUEyQyxvQkFBb0IsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsVUFBVSxrQkFBa0IsMkJBQTJCLEdBQUcsbUJBQW1CLGtCQUFrQiwrQkFBK0IsMEJBQTBCLG9CQUFvQiwyQkFBMkIsbUJBQW1CLGtCQUFrQixpQkFBaUIsY0FBYyxxQkFBcUIsY0FBYyxnQkFBZ0IsOEJBQThCLEdBQUcscUNBQXFDLGlCQUFpQixrQkFBa0IsaUJBQWlCLGdDQUFnQyxzQ0FBc0MsR0FBRyxpQ0FBaUMsd0ZBQXdGLGdDQUFnQyxHQUFHLGtDQUFrQyx3RkFBd0YsaUNBQWlDLEdBQUcseUJBQXlCLFFBQVEsK0JBQStCLEtBQUssR0FBRyxNQUFNLGNBQWMsR0FBRyxPQUFPLGlCQUFpQixrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLGVBQWUsa0JBQWtCLHFCQUFxQixtQkFBbUIsMkJBQTJCLEtBQUssUUFBUSxrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsa0JBQWtCLDBCQUEwQixHQUFHLDBDQUEwQyxpQkFBaUIsb0JBQW9CLEtBQUssa0JBQWtCLG1CQUFtQixLQUFLLEdBQUcsaUNBQWlDLHVC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ZUFBZSxxQ0FBcUMsMkJBQTJCLG1DQUFtQyxrQ0FBa0Msd0NBQXdDLHNDQUFzQyxHQUFHLGNBQWMsd0NBQXdDLDZCQUE2QixtQ0FBbUMsa0NBQWtDLHdDQUF3QyxzQ0FBc0MseUJBQXlCLEdBQUcsaUNBQWlDLFVBQVUsMEJBQTBCLEtBQUssU0FBUyx5QkFBeUIsbURBQW1ELEtBQUssUUFBUSwwQkFBMEIsS0FBSyxHQUFHLHNEQUFzRCxxQkFBcUIsb0JBQW9CLEtBQUssR0FBRyx5RkFBeUYsV0FBVyw0Q0FBNEMsS0FBSyxHQUFHLHFCQUFxQjtBQUNoeVA7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzA2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzcsIDEpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxubGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbmRpZSBGbG93ZXJcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG4vKiBteSBob21lICovXFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGdhcDogMTBweDtcXG4gIC8qIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICB3aWR0aDogMTAwJTsqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIGFuaW1hemlvbmUgaDMgKi9cXG4uZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMXMgZm9yd2FyZHM7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQob2RkKSB7XFxuICAvKiBnbGkgZWxlbWVudGkgZGlzcGFyaSBhcnJpdmFubyBkYSBkZXN0cmEgKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQoZXZlbikge1xcbiAgLyogZ2xpIGVsZW1lbnRpIHBhcmkgYXJyaXZhbm8gZGEgc2luaXN0cmEgKi9cXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuaDQge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLmltZ19udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cXG4gIGhlaWdodDogNTBweDtcXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cXG59XFxuLmltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG5cXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubm8tZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcbi8qIGJ1dHRvbiBDcmVhICovXFxuXFxuLnRvb2xiYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub2sge1xcbiAgcGFkZGluZzogMTVweCAzMHB4IDEycHggMzBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW46IDMwcHggMTBweCAxMHB4IDEwcHg7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5vayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cXG4ub2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b247XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuLm9rOmFjdGl2ZSB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uX2J1dHRvbl9nbztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uX2J1dHRvbiB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTJweCwgLTJweCk7XFxuICB9XFxuICB0byB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcbi8qIE1vYmlsZSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubm8tZGlzcGxheSBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKiBUYWJsZXQgYW5kIFNtYWxsZXIgRGVza3RvcCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0SEFBNEg7O0FBRTVIO0VBQ0UsU0FBUztFQUNULHdDQUF3QztFQUN4QyxrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjtBQUNBOzs7OztFQUtFLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCO0FBQ0EsWUFBWTs7QUFFWjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1Q7O2VBRWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQSxrQkFBa0I7QUFDbEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7O0VBRVosMkJBQTJCO0VBQzNCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxrQ0FBa0M7RUFDbEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTs7RUFFYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjs7RUFFM0IsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsaUNBQWlDOztFQUVqQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDRDQUE0QztFQUM5QztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQSxXQUFXO0FBQ1g7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5kaWUrRmxvd2VyJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDsxLDMwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDcsIDIzNywgMSk7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5saSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGllIEZsb3dlclxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcbi8qIG15IGhvbWUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb250YWluZXItbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlOyovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogYW5pbWF6aW9uZSBoMyAqL1xcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcblxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxcyBmb3J3YXJkcztcXG59XFxuXFxuLmRlc2NyaXB0aW9uOm50aC1jaGlsZChvZGQpIHtcXG4gIC8qIGdsaSBlbGVtZW50aSBkaXNwYXJpIGFycml2YW5vIGRhIGRlc3RyYSAqL1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uOm50aC1jaGlsZChldmVuKSB7XFxuICAvKiBnbGkgZWxlbWVudGkgcGFyaSBhcnJpdmFubyBkYSBzaW5pc3RyYSAqL1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5oNCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4uaW1nX251bWJlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogd2lkdGg6IDEwMHB4OyAqL1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xcbn1cXG4uaW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcblxcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uby1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuLyogYnV0dG9uIENyZWEgKi9cXG5cXG4udG9vbGJhciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5vayB7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTJweCAzMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMzBweCAxMHB4IDEwcHggMTBweDtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm9rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JlZW47XFxufVxcblxcbi5vazpob3ZlciB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uX2J1dHRvbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbn1cXG4ub2s6YWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb25fYnV0dG9uX2dvO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRpb25fYnV0dG9uIHtcXG4gIGZyb20ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG59XFxuLyogTW9iaWxlICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5uby1kaXNwbGF5IGltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi8qIFRhYmxldCBhbmQgU21hbGxlciBEZXNrdG9wICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});