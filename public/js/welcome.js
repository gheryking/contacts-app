/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/welcome.js":
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
/***/ (() => {

eval("var navbar = document.querySelector(\".navbar\");\nvar welcome = document.querySelector(\".welcome\");\nvar navbarToggle = document.querySelector(\"#navbarSupportedContent\");\n\nvar resizeBakgroundImg = function resizeBakgroundImg() {\n  var height = window.innerHeight - navbar.clientHeight;\n  welcome.style.height = \"\".concat(height, \"px\");\n};\n\nnavbarToggle.ontransitionend = resizeBakgroundImg;\nnavbarToggle.ontransitionstart = resizeBakgroundImg;\nwindow.onresize = resizeBakgroundImg;\nwindow.onload = resizeBakgroundImg;\ndocument.querySelector('main').classList.remove('py-4');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJuYXZiYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3ZWxjb21lIiwibmF2YmFyVG9nZ2xlIiwicmVzaXplQmFrZ3JvdW5kSW1nIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsIm9udHJhbnNpdGlvbmVuZCIsIm9udHJhbnNpdGlvbnN0YXJ0Iiwib25yZXNpemUiLCJvbmxvYWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3dlbGNvbWUuanM/MjZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcbmNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlbGNvbWVcIik7XG5jb25zdCBuYXZiYXJUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIik7XG5cbmNvbnN0IHJlc2l6ZUJha2dyb3VuZEltZyA9ICgpID0+IHtcbiAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gbmF2YmFyLmNsaWVudEhlaWdodDtcbiAgd2VsY29tZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xufTtcblxuXG5uYXZiYXJUb2dnbGUub250cmFuc2l0aW9uZW5kID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xubmF2YmFyVG9nZ2xlLm9udHJhbnNpdGlvbnN0YXJ0ID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xud2luZG93Lm9ucmVzaXplID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xud2luZG93Lm9ubG9hZCA9IHJlc2l6ZUJha2dyb3VuZEltZztcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdweS00Jyk7Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBckI7O0FBRUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0VBQy9CLElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCUixNQUFNLENBQUNTLFlBQTNDO0VBQ0FOLE9BQU8sQ0FBQ08sS0FBUixDQUFjSixNQUFkLGFBQTBCQSxNQUExQjtBQUNELENBSEQ7O0FBTUFGLFlBQVksQ0FBQ08sZUFBYixHQUErQk4sa0JBQS9CO0FBQ0FELFlBQVksQ0FBQ1EsaUJBQWIsR0FBaUNQLGtCQUFqQztBQUNBRSxNQUFNLENBQUNNLFFBQVAsR0FBa0JSLGtCQUFsQjtBQUNBRSxNQUFNLENBQUNPLE1BQVAsR0FBZ0JULGtCQUFoQjtBQUNBSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JhLFNBQS9CLENBQXlDQyxNQUF6QyxDQUFnRCxNQUFoRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy93ZWxjb21lLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/welcome.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/welcome.js"]();
/******/ 	
/******/ })()
;