/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/shinjuku-vending.jpg":
/*!*****************************************!*\
  !*** ./src/images/shinjuku-vending.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea6a0a1d36a3bdee1ba0.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_shinjuku_vending_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/shinjuku-vending.jpg */ "./src/images/shinjuku-vending.jpg");


function loadHome(parent) {
    const headingOne = document.createElement('h1');
    const headingTwo = document.createElement('h2');
    const paragraph = document.createElement('p');

    const hoursHeading = document.createElement('h2');
    const hoursPre = document.createElement('pre');

    const locationHeading = document.createElement('h2');
    const locationPara = document.createElement('p');
    
    const homeImage = new Image();
    // homeImage.src = shinjukuVending;
    // homeImage.className = 'homeSplash';

    function createContentDiv() {
        const contentPane = document.createElement('div');
        contentPane.classList.add('contentPane');
        return contentPane;
    }

    // const introDiv = document.createElement('div');
    const introDiv = createContentDiv();
    const hoursDiv = createContentDiv();
    const locationDiv = createContentDiv();

    headingOne.textContent = 'Shinjuku 2049 Vending Corp.';
    headingTwo.textContent = 'Bringing convenience back to the streets.';
    paragraph.textContent = 'Located on the streets of Shinjuku, Toyko, in an unnamed alleyway, is your gateway to convenience. From salarymen burning the midnight oil to errant travellers, you can find everything that you need (and more) at Shinjuku 2049. We have the largest selection of beverages and snacks guaranteed to give you that buzz. We are Shinjuku 2049.';

    introDiv.append(headingTwo, paragraph);
    
    hoursHeading.textContent = 'Hours';
    const hoursOpen = 'Open 24 hours';
    hoursPre.textContent = `Monday: ${hoursOpen}\nTuesday: ${hoursOpen}\nWednesday: ${hoursOpen}*\nThursday: ${hoursOpen}\nFriday: ${hoursOpen}\nSaturday: ${hoursOpen}\nSunday: ${hoursOpen}\n\n*Machines may occasionally be serviced at 12am midnight.`;
    hoursPre.className = 'hoursOpen';
    hoursDiv.append(hoursHeading, hoursPre)


    locationHeading.textContent = 'Location';
    locationPara.textContent = 'Located in Alleyway 2049, Shinjuku, Tokyo.'
    locationDiv.append(locationHeading, locationPara);

    parent.append(
        headingOne,
        introDiv,
        hoursDiv,
        locationDiv
    );
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmNEQ7O0FBRTdDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVUsYUFBYSxVQUFVLGVBQWUsVUFBVSxlQUFlLFVBQVUsWUFBWSxVQUFVLGNBQWMsVUFBVSxZQUFZLFVBQVU7QUFDN0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHNoaW5qdWt1VmVuZGluZyBmcm9tICcuL2ltYWdlcy9zaGluanVrdS12ZW5kaW5nLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKHBhcmVudCkge1xuICAgIGNvbnN0IGhlYWRpbmdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGhlYWRpbmdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaG91cnNQcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgbG9jYXRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIGNvbnN0IGhvbWVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGhvbWVJbWFnZS5zcmMgPSBzaGluanVrdVZlbmRpbmc7XG4gICAgLy8gaG9tZUltYWdlLmNsYXNzTmFtZSA9ICdob21lU3BsYXNoJztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnREaXYoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRQYW5lLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRQYW5lJyk7XG4gICAgICAgIHJldHVybiBjb250ZW50UGFuZTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCBpbnRyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGludHJvRGl2ID0gY3JlYXRlQ29udGVudERpdigpO1xuICAgIGNvbnN0IGhvdXJzRGl2ID0gY3JlYXRlQ29udGVudERpdigpO1xuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gY3JlYXRlQ29udGVudERpdigpO1xuXG4gICAgaGVhZGluZ09uZS50ZXh0Q29udGVudCA9ICdTaGluanVrdSAyMDQ5IFZlbmRpbmcgQ29ycC4nO1xuICAgIGhlYWRpbmdUd28udGV4dENvbnRlbnQgPSAnQnJpbmdpbmcgY29udmVuaWVuY2UgYmFjayB0byB0aGUgc3RyZWV0cy4nO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdMb2NhdGVkIG9uIHRoZSBzdHJlZXRzIG9mIFNoaW5qdWt1LCBUb3lrbywgaW4gYW4gdW5uYW1lZCBhbGxleXdheSwgaXMgeW91ciBnYXRld2F5IHRvIGNvbnZlbmllbmNlLiBGcm9tIHNhbGFyeW1lbiBidXJuaW5nIHRoZSBtaWRuaWdodCBvaWwgdG8gZXJyYW50IHRyYXZlbGxlcnMsIHlvdSBjYW4gZmluZCBldmVyeXRoaW5nIHRoYXQgeW91IG5lZWQgKGFuZCBtb3JlKSBhdCBTaGluanVrdSAyMDQ5LiBXZSBoYXZlIHRoZSBsYXJnZXN0IHNlbGVjdGlvbiBvZiBiZXZlcmFnZXMgYW5kIHNuYWNrcyBndWFyYW50ZWVkIHRvIGdpdmUgeW91IHRoYXQgYnV6ei4gV2UgYXJlIFNoaW5qdWt1IDIwNDkuJztcblxuICAgIGludHJvRGl2LmFwcGVuZChoZWFkaW5nVHdvLCBwYXJhZ3JhcGgpO1xuICAgIFxuICAgIGhvdXJzSGVhZGluZy50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG4gICAgY29uc3QgaG91cnNPcGVuID0gJ09wZW4gMjQgaG91cnMnO1xuICAgIGhvdXJzUHJlLnRleHRDb250ZW50ID0gYE1vbmRheTogJHtob3Vyc09wZW59XFxuVHVlc2RheTogJHtob3Vyc09wZW59XFxuV2VkbmVzZGF5OiAke2hvdXJzT3Blbn0qXFxuVGh1cnNkYXk6ICR7aG91cnNPcGVufVxcbkZyaWRheTogJHtob3Vyc09wZW59XFxuU2F0dXJkYXk6ICR7aG91cnNPcGVufVxcblN1bmRheTogJHtob3Vyc09wZW59XFxuXFxuKk1hY2hpbmVzIG1heSBvY2Nhc2lvbmFsbHkgYmUgc2VydmljZWQgYXQgMTJhbSBtaWRuaWdodC5gO1xuICAgIGhvdXJzUHJlLmNsYXNzTmFtZSA9ICdob3Vyc09wZW4nO1xuICAgIGhvdXJzRGl2LmFwcGVuZChob3Vyc0hlYWRpbmcsIGhvdXJzUHJlKVxuXG5cbiAgICBsb2NhdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIGxvY2F0aW9uUGFyYS50ZXh0Q29udGVudCA9ICdMb2NhdGVkIGluIEFsbGV5d2F5IDIwNDksIFNoaW5qdWt1LCBUb2t5by4nXG4gICAgbG9jYXRpb25EaXYuYXBwZW5kKGxvY2F0aW9uSGVhZGluZywgbG9jYXRpb25QYXJhKTtcblxuICAgIHBhcmVudC5hcHBlbmQoXG4gICAgICAgIGhlYWRpbmdPbmUsXG4gICAgICAgIGludHJvRGl2LFxuICAgICAgICBob3Vyc0RpdixcbiAgICAgICAgbG9jYXRpb25EaXZcbiAgICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9