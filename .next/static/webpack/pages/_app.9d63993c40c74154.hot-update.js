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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  font-size: 18px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 22px;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding-top: 50px;\\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.container-main {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  justify-content: center;\\n}\\n\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\n\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n}\\n\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n  object-fit: contain;\\n}\\n\\n.toolbar {\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,4HAA4H;;AAE5H;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wCAAwC;EACxC,kCAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;;;;EAKE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,wBAAwB;EACxB,8BAA8B;EAC9B,6BAA6B;EAC7B,mCAAmC;EACnC,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,4CAA4C;EAC9C;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF\",\"sourcesContent\":[\"@import url(\\\"https://fonts.googleapis.com/css2?family=Indie+Flower&family=Poppins:ital,wght@0,300;0,400;1,300&display=swap\\\");\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: rgba(255, 247, 237, 1);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n  font-size: 18px;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nli {\\n  font-family: \\\"Indie Flower\\\", cursive;\\n  font-size: 22px;\\n}\\n\\n.header {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  padding-top: 50px;\\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.container-main {\\n  display: flex;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  width: 250px;\\n  height: 300px;\\n  padding: 5px;\\n  gap: 10px;\\n  justify-content: center;\\n}\\n\\n.description {\\n  width: 300px;\\n  height: 250px;\\n  margin: auto;\\n  animation: slide-in 1s forwards;\\n}\\n\\n.description:nth-child(odd) {\\n  animation-timing-function: ease-in;\\n  transform: translateX(100%);\\n}\\n\\n.description:nth-child(even) {\\n  animation-timing-function: ease-out;\\n  transform: translateX(-100%);\\n}\\n\\n@keyframes slide-in {\\n  to {\\n    transform: translateX(0);\\n  }\\n}\\n\\nimg {\\n  width: 100px;\\n  height: 100px;\\n  margin: 0px;\\n  object-fit: contain;\\n}\\n\\n.img_number {\\n  display: flex;\\n  width: 100px;\\n  height: 50px;\\n}\\n\\n.img {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 150px;\\n  height: 150px;\\n  object-fit: contain;\\n}\\n\\n.toolbar {\\n  text-align: center;\\n}\\n\\n.ok {\\n  padding: 15px 30px 12px 30px;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 1.1em;\\n  cursor: pointer;\\n  border-radius: 15px;\\n  margin-left: 10px;\\n  margin-right: 10px;\\n  border: 1px solid black;\\n  border-bottom-width: 8px;\\n  outline: none;\\n  background-color: green;\\n  border-color: darkgreen;\\n}\\n\\n.ok:hover {\\n  animation-name: animation_button;\\n  animation-duration: 1s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n}\\n\\n.ok:active {\\n  animation-name: animation_button_go;\\n  animation-duration: 0.5s;\\n  animation-direction: alternate;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: linear;\\n  position: relative;\\n}\\n\\n@keyframes animation_button {\\n  from {\\n    border-radius: 15px;\\n  }\\n  50% {\\n    border-radius: 8px;\\n    transform: scale(1.05) translate(-2px, -2px);\\n  }\\n  to {\\n    border-radius: 15px;\\n  }\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .no-display {\\n    display: none;\\n  }\\n  .description {\\n    margin: auto;\\n  }\\n}\\n\\n@media screen and (max-width: 600px) {\\n  .no-display img {\\n    display: none;\\n  }\\n}\\n\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw2SUFBNkksTUFBTSxzQkFBc0IsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSw2Q0FBNkMseUNBQXlDLGtCQUFrQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixHQUFHLDRCQUE0QiwyQ0FBMkMsb0JBQW9CLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isc0JBQXNCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0Isb0JBQW9CLGlCQUFpQixrQkFBa0IsaUJBQWlCLGNBQWMsNEJBQTRCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsaUJBQWlCLG9DQUFvQyxHQUFHLGlDQUFpQyx1Q0FBdUMsZ0NBQWdDLEdBQUcsa0NBQWtDLHdDQUF3QyxpQ0FBaUMsR0FBRyx5QkFBeUIsUUFBUSwrQkFBK0IsS0FBSyxHQUFHLFNBQVMsaUJBQWlCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIsaUJBQWlCLEdBQUcsVUFBVSxrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsU0FBUyxpQ0FBaUMsaUJBQWlCLHNCQUFzQixxQkFBcUIsb0JBQW9CLHdCQUF3QixzQkFBc0Is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QUEwQixLQUFLLFNBQVMseUJBQXlCLG1EQUFtRCxLQUFLLFFBQVEsMEJBQTBCLEtBQUssR0FBRywwQ0FBMEMsaUJBQWlCLG9CQUFvQixLQUFLLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLDBDQUEwQyxxQkFBcUIsb0JBQW9CLEtBQUssR0FBRyx1REFBdUQsV0FBVyw0Q0FBNEMsS0FBSyxHQUFHLHFCQUFxQjtBQUNodE87QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzA2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluZGllK0Zsb3dlciZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MSwzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjQ3LCAyMzcsIDEpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW5kaWUgRmxvd2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXItbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBhbmltYXRpb246IHNsaWRlLWluIDFzIGZvcndhcmRzO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246bnRoLWNoaWxkKG9kZCkge1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uOm50aC1jaGlsZChldmVuKSB7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaW1nX251bWJlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uaW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLnRvb2xiYXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ub2sge1xcbiAgcGFkZGluZzogMTVweCAzMHB4IDEycHggMzBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogOHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JlZW47XFxufVxcblxcbi5vazpob3ZlciB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uX2J1dHRvbjtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbn1cXG5cXG4ub2s6YWN0aXZlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb25fYnV0dG9uX2dvO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRpb25fYnV0dG9uIHtcXG4gIGZyb20ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5uby1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5uby1kaXNwbGF5IGltZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDFweCkgYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xcbiAgLmdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0SEFBNEg7O0FBRTVIO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7Ozs7O0VBS0Usb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDRDQUE0QztFQUM5QztFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmRpZStGbG93ZXImZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzEsMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0NywgMjM3LCAxKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5saSB7XFxuICBmb250LWZhbWlseTogXFxcIkluZGllIEZsb3dlclxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAxcyBmb3J3YXJkcztcXG59XFxuXFxuLmRlc2NyaXB0aW9uOm50aC1jaGlsZChvZGQpIHtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbjpudGgtY2hpbGQoZXZlbikge1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmltZ19udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi50b29sYmFyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm9rIHtcXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxMnB4IDMwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDhweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1jb2xvcjogZGFya2dyZWVuO1xcbn1cXG5cXG4ub2s6aG92ZXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbl9idXR0b247XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG59XFxuXFxuLm9rOmFjdGl2ZSB7XFxuICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uX2J1dHRvbl9nbztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0aW9uX2J1dHRvbiB7XFxuICBmcm9tIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGUoLTJweCwgLTJweCk7XFxuICB9XFxuICB0byB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubm8tZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubm8tZGlzcGxheSBpbWcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gIC5ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});