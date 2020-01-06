(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["util-util-module"],{

/***/ "./node_modules/print-js/dist/print.js":
/*!*********************************************!*\
  !*** ./node_modules/print-js/dist/print.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");

var _init = __webpack_require__(/*! ./js/init */ "./src/js/init.js");

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printJS = _init2.default.init;

if (typeof window !== 'undefined') {
  window.printJS = printJS;
}

exports.default = printJS;

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Browser = {
  // Firefox 1.0+
  isFirefox: function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  },
  // Internet Explorer 6-11
  isIE: function isIE() {
    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
  },
  // Edge 20+
  isEdge: function isEdge() {
    return !Browser.isIE() && !!window.StyleMedia;
  },
  // Chrome 1+
  isChrome: function isChrome() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    return !!context.chrome;
  },
  // At least Safari 3+: "[object HTMLElementConstructor]"
  isSafari: function isSafari() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
  }
};

exports.default = Browser;

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.addWrapper = addWrapper;
exports.capitalizePrint = capitalizePrint;
exports.collectStyles = collectStyles;
exports.addHeader = addHeader;
exports.cleanUp = cleanUp;
exports.isRawHTML = isRawHTML;

var _modal = __webpack_require__(/*! ./modal */ "./src/js/modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _browser = __webpack_require__(/*! ./browser */ "./src/js/browser.js");

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addWrapper(htmlData, params) {
  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
  return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
}

function capitalizePrint(obj) {
  return obj.charAt(0).toUpperCase() + obj.slice(1);
}

function collectStyles(element, params) {
  var win = document.defaultView || window;

  // String variable to hold styling for each element
  var elementStyle = '';

  // Loop over computed styles
  var styles = win.getComputedStyle(element, '');

  Object.keys(styles).map(function (key) {
    // Check if style should be processed
    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';
    }
  });

  // Print friendly defaults (deprecated)
  elementStyle += 'max-width: ' + params.maxWidth + 'px !important;' + params.font_size + ' !important;';

  return elementStyle;
}

function targetStylesMatch(styles, value) {
  for (var i = 0; i < styles.length; i++) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.indexOf(styles[i]) !== -1) return true;
  }
  return false;
}

function addHeader(printElement, params) {
  // Create the header container div
  var headerContainer = document.createElement('div');

  // Check if the header is text or raw html
  if (isRawHTML(params.header)) {
    headerContainer.innerHTML = params.header;
  } else {
    // Create header element
    var headerElement = document.createElement('h1');

    // Create header text node
    var headerNode = document.createTextNode(params.header);

    // Build and style
    headerElement.appendChild(headerNode);
    headerElement.setAttribute('style', params.headerStyle);
    headerContainer.appendChild(headerElement);
  }

  printElement.insertBefore(headerContainer, printElement.childNodes[0]);
}

function cleanUp(params) {
  // If we are showing a feedback message to user, remove it
  if (params.showModal) _modal2.default.close();

  // Check for a finished loading hook function
  if (params.onLoadingEnd) params.onLoadingEnd();

  // If preloading pdf files, clean blob url
  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable);

  // If a onPrintDialogClose callback is given, execute it
  if (params.onPrintDialogClose) {
    var event = 'mouseover';

    if (_browser2.default.isChrome() || _browser2.default.isFirefox()) {
      // Ps.: Firefox will require an extra click in the document to fire the focus event.
      event = 'focus';
    }
    var handler = function handler() {
      // Make sure the event only happens once.
      window.removeEventListener(event, handler);

      params.onPrintDialogClose();
    };

    window.addEventListener(event, handler);
  }
}

function isRawHTML(raw) {
  var regexHtml = new RegExp('<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>');
  return regexHtml.test(raw);
}

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Get the DOM printable element
    var printElement = document.getElementById(params.printable);

    // Check if the element exists
    if (!printElement) {
      window.console.error('Invalid HTML element id: ' + params.printable);
      return;
    }

    // Clone the target element including its children (if available)
    params.printableElement = cloneElement(printElement, params);

    // Add header
    if (params.header) {
      (0, _functions.addHeader)(params.printableElement, params);
    }

    // Print html element contents
    _print2.default.send(params, printFrame);
  }
};


function cloneElement(element, params) {
  // Clone the main node (if not already inside the recursion process)
  var clone = element.cloneNode();

  // Loop over and process the children elements / nodes (including text nodes)
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = element.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      // Check if we are skiping the current element
      if (params.ignoreElements.indexOf(child.id) !== -1) {
        continue;
      }

      // Clone the child element
      var clonedChild = cloneElement(child, params);

      // Attach the cloned child to the cloned parent node
      clone.appendChild(clonedChild);
    }

    // Get all styling for print element (for nodes of type element only)
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (params.scanStyles && element.nodeType === 1) {
    clone.setAttribute('style', (0, _functions.collectStyles)(element, params));
  }

  // Check if the element needs any state processing (copy user input data)
  switch (element.tagName) {
    case 'SELECT':
      // Copy the current selection value to its clone
      clone.value = element.value;
      break;
    case 'CANVAS':
      // Copy the canvas content to its clone
      clone.getContext('2d').drawImage(element, 0, 0);
      break;
  }

  return clone;
}

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Check if we are printing one image or multiple images
    if (params.printable.constructor !== Array) {
      // Create array with one image
      params.printable = [params.printable];
    }

    // Create printable element (container)
    params.printableElement = document.createElement('div');

    // Create all image elements and append them to the printable container
    params.printable.forEach(function (src) {
      // Create the image element
      var img = document.createElement('img');
      img.setAttribute('style', params.imageStyle);

      // Set image src with the file url
      img.src = src;

      // Create the image wrapper
      var imageWrapper = document.createElement('div');

      // Append image to the wrapper element
      imageWrapper.appendChild(img);

      // Append wrapper to the printable element
      params.printableElement.appendChild(imageWrapper);
    });

    // Check if we are adding a print header
    if (params.header) (0, _functions.addHeader)(params.printableElement, params);

    // Print image
    _print2.default.send(params, printFrame);
  }
};

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _browser = __webpack_require__(/*! ./browser */ "./src/js/browser.js");

var _browser2 = _interopRequireDefault(_browser);

var _modal = __webpack_require__(/*! ./modal */ "./src/js/modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _pdf = __webpack_require__(/*! ./pdf */ "./src/js/pdf.js");

var _pdf2 = _interopRequireDefault(_pdf);

var _html = __webpack_require__(/*! ./html */ "./src/js/html.js");

var _html2 = _interopRequireDefault(_html);

var _rawHtml = __webpack_require__(/*! ./raw-html */ "./src/js/raw-html.js");

var _rawHtml2 = _interopRequireDefault(_rawHtml);

var _image = __webpack_require__(/*! ./image */ "./src/js/image.js");

var _image2 = _interopRequireDefault(_image);

var _json = __webpack_require__(/*! ./json */ "./src/js/json.js");

var _json2 = _interopRequireDefault(_json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printTypes = ['pdf', 'html', 'image', 'json', 'raw-html'];

exports.default = {
  init: function init() {
    var params = {
      printable: null,
      fallbackPrintable: null,
      type: 'pdf',
      header: null,
      headerStyle: 'font-weight: 300;',
      maxWidth: 800,
      font: 'TimesNewRoman',
      font_size: '12pt',
      honorMarginPadding: true,
      honorColor: false,
      properties: null,
      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
      showModal: false,
      onError: function onError(error) {
        throw error;
      },
      onLoadingStart: null,
      onLoadingEnd: null,
      onPrintDialogClose: null,
      onPdfOpen: null,
      onBrowserIncompatible: function onBrowserIncompatible() {
        return true;
      },
      modalMessage: 'Retrieving Document...',
      frameId: 'printJS',
      printableElement: null,
      documentTitle: 'Document',
      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],
      targetStyles: ['border', 'box', 'break', 'text-decoration'],
      ignoreElements: [],
      imageStyle: 'max-width: 100%;',
      repeatTableHeader: true,
      css: null,
      style: null,
      scanStyles: true,
      base64: false

      // Check if a printable document or object was supplied
    };var args = arguments[0];
    if (args === undefined) throw new Error('printJS expects at least 1 attribute.');

    // Process parameters
    switch (typeof args === 'undefined' ? 'undefined' : _typeof(args)) {
      case 'string':
        params.printable = encodeURI(args);
        params.fallbackPrintable = params.printable;
        params.type = arguments[1] || params.type;
        break;
      case 'object':
        params.printable = args.printable;
        params.base64 = typeof args.base64 !== 'undefined';
        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
        params.fallbackPrintable = params.base64 ? 'data:application/pdf;base64,' + params.fallbackPrintable : params.fallbackPrintable;
        for (var k in params) {
          if (k === 'printable' || k === 'fallbackPrintable' || k === 'base64') continue;

          params[k] = typeof args[k] !== 'undefined' ? args[k] : params[k];
        }
        break;
      default:
        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + (typeof args === 'undefined' ? 'undefined' : _typeof(args)));
    }

    // Validate printable
    if (!params.printable) throw new Error('Missing printable information.');

    // Validate type
    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
    }

    // Check if we are showing a feedback message to the user (useful for large files)
    if (params.showModal) _modal2.default.show(params);

    // Check for a print start hook function
    if (params.onLoadingStart) params.onLoadingStart();

    // To prevent duplication and issues, remove any used printFrame from the DOM
    var usedFrame = document.getElementById(params.frameId);

    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame);

    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)
    var printFrame = void 0;

    // Create iframe element
    printFrame = document.createElement('iframe');

    // Hide iframe
    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;');

    // Set iframe element id
    printFrame.setAttribute('id', params.frameId);

    // For non pdf printing, pass an html document string to srcdoc (force onload callback)
    if (params.type !== 'pdf') {
      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>';

      // Attach css files
      if (params.css) {
        // Add support for single file
        if (!Array.isArray(params.css)) params.css = [params.css];

        // Create link tags for each css file
        params.css.forEach(function (file) {
          printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
        });
      }

      printFrame.srcdoc += '</head><body></body></html>';
    }

    // Check printable type
    switch (params.type) {
      case 'pdf':
        // Check browser support for pdf and if not supported we will just open the pdf file instead
        if (_browser2.default.isFirefox() || _browser2.default.isEdge() || _browser2.default.isIE()) {
          try {
            console.info('PrintJS currently doesn\'t support PDF printing in Firefox, Internet Explorer and Edge.');
            if (params.onBrowserIncompatible() === true) {
              var win = window.open(params.fallbackPrintable, '_blank');
              win.focus();
              if (params.onPdfOpen) params.onPdfOpen();
            }
          } catch (e) {
            params.onError(e);
          } finally {
            // Make sure there is no loading modal opened
            if (params.showModal) _modal2.default.close();
            if (params.onLoadingEnd) params.onLoadingEnd();
          }
        } else {
          _pdf2.default.print(params, printFrame);
        }
        break;
      case 'image':
        _image2.default.print(params, printFrame);
        break;
      case 'html':
        _html2.default.print(params, printFrame);
        break;
      case 'raw-html':
        _rawHtml2.default.print(params, printFrame);
        break;
      case 'json':
        _json2.default.print(params, printFrame);
        break;
    }
  }
};

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Check if we received proper data
    if (_typeof(params.printable) !== 'object') {
      throw new Error('Invalid javascript data object (JSON).');
    }

    // Validate repeatTableHeader
    if (typeof params.repeatTableHeader !== 'boolean') {
      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
    }

    // Validate properties
    if (!params.properties || !Array.isArray(params.properties)) {
      throw new Error('Invalid properties array for your JSON data.');
    }

    // We will format the property objects to keep the JSON api compatible with older releases
    params.properties = params.properties.map(function (property) {
      return {
        field: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.field : property,
        displayName: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.displayName : property,
        columnSize: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'
      };
    });

    // Create a print container element
    params.printableElement = document.createElement('div');

    // Check if we are adding a print header
    if (params.header) {
      (0, _functions.addHeader)(params.printableElement, params);
    }

    // Build the printable html data
    params.printableElement.innerHTML += jsonToHTML(params);

    // Print the json data
    _print2.default.send(params, printFrame);
  }
};


function jsonToHTML(params) {
  // Get the row and column data
  var data = params.printable;
  var properties = params.properties;

  // Create a html table
  var htmlData = '<table style="border-collapse: collapse; width: 100%;">';

  // Check if the header should be repeated
  if (params.repeatTableHeader) {
    htmlData += '<thead>';
  }

  // Add the table header row
  htmlData += '<tr>';

  // Add the table header columns
  for (var a = 0; a < properties.length; a++) {
    htmlData += '<th style="width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '">' + (0, _functions.capitalizePrint)(properties[a].displayName) + '</th>';
  }

  // Add the closing tag for the table header row
  htmlData += '</tr>';

  // If the table header is marked as repeated, add the closing tag
  if (params.repeatTableHeader) {
    htmlData += '</thead>';
  }

  // Create the table body
  htmlData += '<tbody>';

  // Add the table data rows
  for (var i = 0; i < data.length; i++) {
    // Add the row starting tag
    htmlData += '<tr>';

    // Print selected properties only
    for (var n = 0; n < properties.length; n++) {
      var stringData = data[i];

      // Support nested objects
      var property = properties[n].field.split('.');
      if (property.length > 1) {
        for (var p = 0; p < property.length; p++) {
          stringData = stringData[property[p]];
        }
      } else {
        stringData = stringData[properties[n].field];
      }

      // Add the row contents and styles
      htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + '</td>';
    }

    // Add the row closing tag
    htmlData += '</tr>';
  }

  // Add the table and body closing tags
  htmlData += '</tbody></table>';

  return htmlData;
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Modal = {
  show: function show(params) {
    // Build modal
    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;';

    // Create wrapper
    var printModal = document.createElement('div');
    printModal.setAttribute('style', modalStyle);
    printModal.setAttribute('id', 'printJS-Modal');

    // Create content div
    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;');

    // Add close button (requires print.css)
    var closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'printClose');
    closeButton.setAttribute('id', 'printClose');
    contentDiv.appendChild(closeButton);

    // Add spinner (requires print.css)
    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'printSpinner');
    contentDiv.appendChild(spinner);

    // Add message
    var messageNode = document.createTextNode(params.modalMessage);
    contentDiv.appendChild(messageNode);

    // Add contentDiv to printModal
    printModal.appendChild(contentDiv);

    // Append print modal element to document body
    document.getElementsByTagName('body')[0].appendChild(printModal);

    // Add event listener to close button
    document.getElementById('printClose').addEventListener('click', function () {
      Modal.close();
    });
  },
  close: function close() {
    var printFrame = document.getElementById('printJS-Modal');

    printFrame.parentNode.removeChild(printFrame);
  }
};

exports.default = Modal;

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Check if we have base64 data
    if (params.base64) {
      var bytesArray = Uint8Array.from(atob(params.printable), function (c) {
        return c.charCodeAt(0);
      });
      createBlobAndPrint(params, printFrame, bytesArray);
      return;
    }

    // Format pdf url
    params.printable = /^(blob|http)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable);

    // Get the file through a http request (Preload)
    var req = new window.XMLHttpRequest();
    req.responseType = 'arraybuffer';

    req.addEventListener('load', function () {
      // Check for errors
      if ([200, 201].indexOf(req.status) === -1) {
        (0, _functions.cleanUp)(params);
        params.onError(req.statusText);

        // Since we don't have a pdf document available, we will stop the print job
        return;
      }

      // Print requested document
      createBlobAndPrint(params, printFrame, req.response);
    });

    req.open('GET', params.printable, true);
    req.send();
  }
};


function createBlobAndPrint(params, printFrame, data) {
  // Pass response or base64 data to a blob and create a local object url
  var localPdf = new window.Blob([data], { type: 'application/pdf' });
  localPdf = window.URL.createObjectURL(localPdf);

  // Set iframe src with pdf document url
  printFrame.setAttribute('src', localPdf);

  _print2.default.send(params, printFrame);
}

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = __webpack_require__(/*! ./browser */ "./src/js/browser.js");

var _browser2 = _interopRequireDefault(_browser);

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Print = {
  send: function send(params, printFrame) {
    // Append iframe element to document body
    document.getElementsByTagName('body')[0].appendChild(printFrame);

    // Get iframe element
    var iframeElement = document.getElementById(params.frameId);

    // Wait for iframe to load all content
    iframeElement.onload = function () {
      if (params.type === 'pdf') {
        performPrint(iframeElement, params);
        return;
      }

      // Get iframe element document
      var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
      if (printDocument.document) printDocument = printDocument.document;

      // Append printable element to the iframe body
      printDocument.body.appendChild(params.printableElement);

      // Add custom style
      if (params.type !== 'pdf' && params.style) {
        // Create style element
        var style = document.createElement('style');
        style.innerHTML = params.style;

        // Append style element to iframe's head
        printDocument.head.appendChild(style);
      }

      // If printing images, wait for them to load inside the iframe
      var images = printDocument.getElementsByTagName('img');

      if (images.length > 0) {
        loadIframeImages(images).then(function () {
          return performPrint(iframeElement, params);
        });
      } else {
        performPrint(iframeElement, params);
      }
    };
  }
};

function performPrint(iframeElement, params) {
  try {
    iframeElement.focus();

    // If Edge or IE, try catch with execCommand
    if (_browser2.default.isEdge() || _browser2.default.isIE()) {
      try {
        iframeElement.contentWindow.document.execCommand('print', false, null);
      } catch (e) {
        iframeElement.contentWindow.print();
      }
    } else {
      // Other browsers
      iframeElement.contentWindow.print();
    }
  } catch (error) {
    params.onError(error);
  } finally {
    (0, _functions.cleanUp)(params);
  }
}

function loadIframeImages(images) {
  var promises = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var image = _step.value;

      promises.push(loadIframeImage(image));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return Promise.all(promises);
}

function loadIframeImage(image) {
  return new Promise(function (resolve) {
    var pollImage = function pollImage() {
      !image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage, 500) : resolve();
    };
    pollImage();
  });
}

exports.default = Print;

/***/ }),

/***/ "./src/js/raw-html.js":
/*!****************************!*\
  !*** ./src/js/raw-html.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Create printable element (container)
    params.printableElement = document.createElement('div');
    params.printableElement.setAttribute('style', 'width:100%');

    // Set our raw html as the printable element inner html content
    params.printableElement.innerHTML = params.printable;

    // Print html contents
    _print2.default.send(params, printFrame);
  }
};

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=print.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/add-field-to-table/add-field-to-table.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/add-field-to-table/add-field-to-table.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Agregar campo a una tabla\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div>\r\n      <p>Este proceso agrega un campo a todos los documentos de una colección. \r\n         Es importante que realice respaldo de los datos antes de realizar este proceso\r\n      </p>\r\n    </div>\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-3 align-self-end\">\r\n        <label for=\"tabla\" class=\"control-label\"> Nombre de la Tabla </label>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nomTabla\"/>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <label for=\"campo\" class=\"control-label\"> Nombre del campo </label>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nomCampo\"/>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-6\">\r\n        <button class=\"btn btn-primary btn-block\" (click)=\"onAddField()\">\r\n          Aceptar\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <button class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n          Cancelar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/backup/backup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/backup/backup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-12\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Respaldar datos\r\n\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h4> {{ mensaje }} </h4>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus > 0\"\r\n              (click)=\"generateDownloadJsonUri()\">\r\n              Procesar\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus < 2\"\r\n              (click)=\"exportarDatos()\">\r\n              Exportar\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-6 mx-auto\">\r\n            <button class=\"btn btn-block btn-secondary\" (click)=\"goBack()\">\r\n              Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <a #aDownload class=\"btn btn-clear d-none\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"FeBoCaK.json\">\r\n          Link\r\n        </a> \r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/copiar-distancias/copiar-distancias.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/copiar-distancias/copiar-distancias.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Copiar distancias\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th> Categoría </th>\r\n          <th> Embarcación </th>\r\n          <th> Distancia </th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let registro of distancias\">\r\n          <td> {{ registro.categoria }} </td>\r\n          <td> {{ registro.embarcacion }} </td>\r\n          <td> {{ registro.distancia }} </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button class=\"btn btn-block btn-primary\"(click)=\"onSubmit(submitBtn)\" #submitBtn>\r\n      Copiar distancias\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/detalle-club.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/detalle-club.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Palistas</p>\n<ng-container *ngIf=\"!!palistas\">\n  <table class=\"table\">\n    <tr *ngFor=\"let palista of palistas\">\n      <td class=\"p-1\"> {{ palista['D.N.I.'] }} </td>\n      <td class=\"p-1\"> {{ palista.APELLIDO }} </td>\n      <td class=\"p-1\"> {{ palista.NOMBRE }} </td>\n      <td class=\"p-1\"> {{ palista.CATEG }} </td>\n    </tr>\n  </table>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/importar-palistas.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/importar-palistas.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        Importar palistas\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n        <h5>Datos del archivo</h5>\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>Nombre: </th>\r\n            <td colspan=\"3\" *ngIf=\"!!file\"> {{ file.name }} </td>\r\n          </tr>\r\n          <tr>\r\n            <th>Fecha: </th>\r\n            <td *ngIf=\"!!file\"> {{ fecha }} </td>\r\n            <th>Hora: </th>\r\n            <td *ngIf=\"!!file\"> {{ hora }} </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>tipo: </th>\r\n            <td *ngIf=\"!!file\"> {{ file.type }} </td>\r\n            <th>tamaño: </th>\r\n            <td *ngIf=\"!!file\"> {{ file.size }} </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <label class=\"btn btn-primary btn-block btn-file\"  [class.btn-secondary]=\"fileUrl.value\">\r\n          <i class=\"fa fa-folder\"> </i> Seleccione el archivo\r\n          <input #fileUrl type=\"file\" style=\"display: none;\" accept=\".json\" (change)=\"onChange($event)\"\r\n            [disabled]=\"fileUrl.value\">\r\n        </label>\r\n\r\n        <div class=\"row  mt-2\">\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\" \r\n              [disabled]=\"!fileUrl.value\" (click)=\"onUpload()\">\r\n              <i class=\"fa fa-upload\"></i> Importar palistas\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n              Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"card mt-3\">\r\n\r\n      <div class=\"card-body\">\r\n\r\n        <h5>Resumen</h5>\r\n        <table class=\"table\" *ngIf=\"!!tblResumen\">\r\n          <tr *ngFor=\"let linea of tblResumen\">\r\n            <td (click)=\"showPalistas(linea.tipo)\" class=\"p-1\"> {{ linea.descrip }} </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <router-outlet class=\"mt-3\"></router-outlet>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/show-clubes.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/show-clubes.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Clubes</p>\n<ng-container *ngIf=\"!!clubes\">\n  <table class=\"table\">\n    <tr *ngFor=\"let club of clubes\">\n      <td routerLink=\"/importar-palistas/detalle-club/{{club.ENTIDAD}}\" class=\"p-1\"> {{ club.ENTIDAD }} </td>\n      <td routerLink=\"/importar-palistas/detalle-club/{{club.ENTIDAD}}\" class=\"p-1\"> {{ club.CIUDAD }} </td>\n      <td routerLink=\"/importar-palistas/detalle-club/{{club.ENTIDAD}}\" class=\"p-1\"> {{ club.cantidad }} </td>\n    </tr>\n  </table>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/show-palistas.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/show-palistas.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\" palistas$ | async as tblPalistas\">\n  <div id=\"printJS-table\">\n\n    <div class=\"row my-2\">\n      <div class=\"col-8\">\n        <h4>Palistas - {{ tblPalistas[1] }}</h4>\n      </div>\n      <div class=\"col-4\">\n        <button class=\"btn btn-outline-primary float-right\" (click)=\"imprimir()\">\n          <i class=\"fa fa-print\"></i> Imprimir\n        </button>\n      </div>\n    </div>\n\n    <table class=\"table\">\n      <tr>\n        <th>DNI</th>\n        <th>Apellido</th>\n        <th>Nombre</th>\n        <th>F nacimiento</th>\n      </tr>\n\n      <tr *ngFor=\"let palista of tblPalistas[0]\">\n        <td class=\"p-1\"> {{ palista['D.N.I.'] }} </td>\n        <td class=\"p-1\"> {{ palista.APELLIDO }} </td>\n        <td class=\"p-1\"> {{ palista.NOMBRE }} </td>\n        <td class=\"p-1\"> {{ palista['FECHA NAC.'] }} </td>\n      </tr>\n    </table>\n  </div>\n\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/restore/restore.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/restore/restore.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Restaurar BD\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-9\">\r\n\r\n            <h5>Datos del archivo</h5>\r\n            <table  class=\"table\">\r\n              <tr>\r\n                <th>Nombre: </th>\r\n                <td colspan=\"3\" *ngIf=\"!!file\"> {{ file.name }} </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Fecha: </th>\r\n                <td *ngIf=\"!!file\"> {{ fecha }} </td>\r\n                <th>Hora: </th>\r\n                <td *ngIf=\"!!file\"> {{ hora }} </td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <th>tipo: </th>\r\n                <td *ngIf=\"!!file\"> {{ file.type }} </td>\r\n                <th>tamaño: </th>\r\n                <td *ngIf=\"!!file\"> {{ file.size }} </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"col-3\">\r\n            <h5>Tablas</h5>\r\n            <table class=\"table\">\r\n              <ng-container *ngIf=\"!!tablas\"> \r\n                <tr *ngFor=\"let tabla of tablas\">\r\n                  <td class=\"p-1\"> {{ tabla }} </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div >\r\n\r\n        <label class=\"btn btn-primary btn-block btn-file\">\r\n            <i class=\"fa fa-folder\"> </i> Seleccione el archivo \r\n          <input #fileUrl type=\"file\" style=\"display: none;\" accept=\".json\" (change)=\"onChange($event)\">\r\n        </label>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!fileUrl.value\"\r\n              (click)=\"onUpload()\">\r\n              <i class=\"fa fa-upload\"></i> Restaurar BD\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-secondary btn-block\" (click)=\"goBack()\">\r\n              Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/util-menu/util-menu.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/util-menu/util-menu.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"card card-header mt-3\">\r\n    Utilitarios del sitema\r\n  </div>\r\n\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-3\">\r\n      <button class=\"btn btn-block btn-outline-primary\" \r\n        routerLink='backup' routerLinkActive=\"active\">\r\n        Backup</button>\r\n      <button class=\"btn btn-block btn-outline-primary\" \r\n        routerLink='restore' routerLinkActive=\"active\">\r\n        Restore</button>\r\n      <button class=\"btn btn-block btn-outline-primary\" \r\n        routerLink='importar-palistas' routerLinkActive=\"active\">\r\n        Importar palistas</button>\r\n      <button class=\"btn btn-block btn-outline-primary\" \r\n        routerLink='copiar-distancias' routerLinkActive=\"active\">\r\n        Copiar distancias</button>\r\n      <button class=\"btn btn-block btn-outline-primary\" \r\n        routerLink='add-field-to-table' routerLinkActive=\"active\">\r\n        Agregar campo a una tabla</button>\r\n    </div>\r\n    <div class=\"col-9\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/util/add-field-to-table/add-field-to-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/util/add-field-to-table/add-field-to-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddFieldToTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFieldToTableComponent", function() { return AddFieldToTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_add_field_to_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/add-field-to-table.service */ "./src/app/util/services/add-field-to-table.service.ts");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");






let AddFieldToTableComponent = class AddFieldToTableComponent {
    constructor(location, crudService, addFieldService, msg) {
        this.location = location;
        this.crudService = crudService;
        this.addFieldService = addFieldService;
        this.msg = msg;
        this.nomTabla = '';
        this.nomCampo = '';
    }
    ngOnInit() {
    }
    onAddField() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.nomTabla, this.nomCampo);
            if (!this.nomTabla || !this.nomCampo) {
                this.msg.error('Debe indicar el nombre de la tabla y el nombre del campo');
                return;
            }
            const obtenerDatos = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return this.crudService.getAllRecords$(this.nomTabla).toPromise(); });
            const tabla = yield obtenerDatos();
            if (tabla.length === 0) {
                this.msg.error('La tabla no existe o está vacia');
                return;
            }
            const nomCampo = this.nomCampo;
            tabla.forEach(el => {
                if (el.hasOwnProperty(nomCampo)) {
                    this.msg.error('Por lo menos un registro ya tiene el campo:' + nomCampo);
                    return;
                }
            });
            let procesando = true;
            tabla.forEach((el, index) => {
                const record = Object.assign({}, el, { [nomCampo]: '' });
                this.crudService.updateRecord$(this.nomTabla, record.id, record).subscribe(_ => {
                    console.log(index);
                    if (index + 1 === tabla.length) {
                        procesando = false;
                        this.msg.ok('Proceso realizado');
                        this.location.back();
                    }
                });
            });
        });
    }
    goBack() {
        this.location.back();
    }
};
AddFieldToTableComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] },
    { type: _services_add_field_to_table_service__WEBPACK_IMPORTED_MODULE_3__["AddFieldToTableService"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
];
AddFieldToTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-field-to-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-field-to-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/add-field-to-table/add-field-to-table.component.html")).default
    })
], AddFieldToTableComponent);



/***/ }),

/***/ "./src/app/util/backup/backup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/util/backup/backup.component.ts ***!
  \*************************************************/
/*! exports provided: BackupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupComponent", function() { return BackupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let BackupComponent = class BackupComponent {
    constructor(location, sanitizer, crudService) {
        this.location = location;
        this.sanitizer = sanitizer;
        this.crudService = crudService;
        this.emitExportar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.preparacionStatus = 0;
        this.mensaje = 'El proceso de exportar los datos puede tardar varios minutos. Para iniciar pulse en el botón preparar datos. Una vez finalizado el proceso pulse en el botón exportar';
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    exportarDatos() {
        this.aDownload.nativeElement.click();
        this.emitExportar.emit('Exportar');
        this.location.back();
    }
    generateDownloadJsonUri() {
        this.mensaje = 'P r e p a r a n d o . . .';
        this.preparacionStatus = 1;
        let jsonData = '{';
        let contador = 0;
        let nomTablas = ['categorias', 'clubes', 'distancias', 'competencias', 'consola', 'inscripciones', 'palistas', 'users'];
        let arrObs = [];
        nomTablas.forEach(tabla => arrObs.push(this.crudService.getAllRecords$(tabla)));
        const result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...arrObs);
        result$.subscribe({
            next: data => {
                jsonData = jsonData + '"' + nomTablas[contador] + '":' + JSON.stringify(data);
                contador++;
                if (contador < nomTablas.length) {
                    jsonData = jsonData + ',';
                }
            },
            complete: () => {
                jsonData = jsonData + '}';
                this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
                this.mensaje = 'Preparación finalizada';
                this.preparacionStatus = 2;
            }
        });
    }
};
BackupComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BackupComponent.prototype, "competencia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('aDownload', { static: false })
], BackupComponent.prototype, "aDownload", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BackupComponent.prototype, "emitExportar", void 0);
BackupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/backup/backup.component.html")).default
    })
], BackupComponent);



/***/ }),

/***/ "./src/app/util/backup/backup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/util/backup/backup.module.ts ***!
  \**********************************************/
/*! exports provided: BackupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupModule", function() { return BackupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _backup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backup.component */ "./src/app/util/backup/backup.component.ts");





const routes = [
    { path: '', component: _backup_component__WEBPACK_IMPORTED_MODULE_4__["BackupComponent"] }
];
let BackupModule = class BackupModule {
};
BackupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_backup_component__WEBPACK_IMPORTED_MODULE_4__["BackupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], BackupModule);



/***/ }),

/***/ "./src/app/util/copiar-distancias/copiar-distancias.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/util/copiar-distancias/copiar-distancias.component.ts ***!
  \***********************************************************************/
/*! exports provided: CopiarDistanciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopiarDistanciasComponent", function() { return CopiarDistanciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let CopiarDistanciasComponent = class CopiarDistanciasComponent {
    constructor(crudService) {
        this.crudService = crudService;
    }
    ngOnInit() {
        this.crudService.getRecord$('competencias', 'lJBIk7KClZmifrIrSysT').subscribe(data => this.distancias = data.distancia);
    }
    onSubmit(submitBtn) {
        submitBtn.disabled = true;
        this.crudService.getRecord$('tipos-de-competencias', 'pEyNIgxTDfONdV1Sq1xB').subscribe(data => {
            const record = Object.assign({}, data, { distancia: this.distancias });
            this.crudService.updateRecord$('tipos-de-competencias', 'pEyNIgxTDfONdV1Sq1xB', record).subscribe(_ => console.log('Proceso realizado satisfactoriamente'));
        });
    }
};
CopiarDistanciasComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
CopiarDistanciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-copiar-distancias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./copiar-distancias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/copiar-distancias/copiar-distancias.component.html")).default
    })
], CopiarDistanciasComponent);



/***/ }),

/***/ "./src/app/util/copiar-distancias/copiar-distancias.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/util/copiar-distancias/copiar-distancias.module.ts ***!
  \********************************************************************/
/*! exports provided: CopiarDistanciasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopiarDistanciasModule", function() { return CopiarDistanciasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _copiar_distancias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copiar-distancias.component */ "./src/app/util/copiar-distancias/copiar-distancias.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    { path: '', component: _copiar_distancias_component__WEBPACK_IMPORTED_MODULE_3__["CopiarDistanciasComponent"] }
];
let CopiarDistanciasModule = class CopiarDistanciasModule {
};
CopiarDistanciasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_copiar_distancias_component__WEBPACK_IMPORTED_MODULE_3__["CopiarDistanciasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], CopiarDistanciasModule);



/***/ }),

/***/ "./src/app/util/importar-palistas/detalle-club.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/util/importar-palistas/detalle-club.component.ts ***!
  \******************************************************************/
/*! exports provided: DetalleClubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClubComponent", function() { return DetalleClubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/share-data.service */ "./src/app/util/services/share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetalleClubComponent = class DetalleClubComponent {
    constructor(shareDataService, actRoute) {
        this.shareDataService = shareDataService;
        this.actRoute = actRoute;
    }
    ngOnInit() {
        const entidad = this.actRoute.snapshot.paramMap.get('entidad');
        this.palistas = this.shareDataService.getData('palistas');
        this.palistas = this.palistas.filter(el => el.ENTIDAD === entidad);
    }
};
DetalleClubComponent.ctorParameters = () => [
    { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__["ShareDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetalleClubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-club',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-club.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/detalle-club.component.html")).default
    })
], DetalleClubComponent);



/***/ }),

/***/ "./src/app/util/importar-palistas/importar-palistas.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/util/importar-palistas/importar-palistas.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImportarPalistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarPalistasComponent", function() { return ImportarPalistasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_array_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/array.service */ "./src/app/services/array.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/share-data.service */ "./src/app/util/services/share-data.service.ts");








let ImportarPalistasComponent = class ImportarPalistasComponent {
    constructor(router, location, msg, crudService, arrayService, shareDataService) {
        this.router = router;
        this.location = location;
        this.msg = msg;
        this.crudService = crudService;
        this.arrayService = arrayService;
        this.shareDataService = shareDataService;
        this.isEnableFileButton = true;
        this.tblResumen = [];
    }
    ngOnInit() {
    }
    onChange(e) {
        this.isEnableFileButton = false;
        this.file = e.target.files[0];
        let fecha = new Date(this.file.lastModified);
        this.fecha = fecha.toLocaleDateString();
        this.hora = fecha.toLocaleTimeString();
        let reader = new FileReader();
        reader.onloadend = () => {
            let datos = JSON.parse(reader.result);
            this.palistas = [...Object.values(datos)];
            this.checkAll();
            this.checkEmptyClub();
            this.checkEmptyDNI();
            this.checkEmptyName();
            this.checkEmptyFecha();
            this.checkFecha();
            this.checkRepeatedDNI();
        };
        reader.readAsText(this.file);
    }
    checkAll() {
        const palistasOriginales = [...this.palistas];
        this.sharePalistas = { 'original': [palistasOriginales, 'Archivo original'] };
        const resumen = {
            descrip: 'Número de registros en el archivo original: ' + palistasOriginales.length,
            tipo: 'original'
        };
        this.tblResumen.push(resumen);
    }
    checkEmptyClub() {
        const palistasEmptyClub = this.palistas.filter(el => el.ENTIDAD === '');
        this.palistas = this.palistas.filter(el => el.ENTIDAD !== '');
        this.sharePalistas['emptyClub'] = [palistasEmptyClub, , 'Registros con club en blanco'];
        const resumen = {
            descrip: 'Cantidad de registros con club en blanco: ' + palistasEmptyClub.length,
            tipo: 'emptyClub'
        };
        this.tblResumen.push(resumen);
    }
    checkEmptyDNI() {
        const palistasEmptyDni = this.palistas.filter(el => el['D.N.I.'] === '');
        this.sharePalistas['emptyDni'] = [palistasEmptyDni, 'Registros con DNI en blanco'];
        const resumen = {
            descrip: 'Número de registros con DNI en blanco: ' + palistasEmptyDni.length,
            tipo: 'emptyDni'
        };
        this.tblResumen.push(resumen);
    }
    checkEmptyName() {
        const palistasEmptyName = this.palistas.filter(el => el.APELLIDO === '' || el.NOMBRE === '');
        this.sharePalistas['emptyName'] = [palistasEmptyName, 'Registros con nombre o apellido en blanco'];
        const resumen = {
            descrip: 'Número de registros con Nombre o Apellido en blanco: ' + palistasEmptyName.length,
            tipo: 'emptyName'
        };
        this.tblResumen.push(resumen);
    }
    checkEmptyFecha() {
        const palistasEmptyFecha = this.palistas.filter(el => el['FECHA NAC.'] === '');
        this.sharePalistas['emptyFecha'] = [palistasEmptyFecha, 'Registros con fecha en blanco'];
        const resumen = {
            descrip: 'Número de registros con fecha en blanco: ' + palistasEmptyFecha.length,
            tipo: 'emptyFecha'
        };
        this.tblResumen.push(resumen);
    }
    checkFecha() {
        const palistasValidFecha = this.palistas.filter(el => el['FECHA NAC.'] !== '' && this.validateFecha(el['FECHA NAC.']));
        this.sharePalistas['validFecha'] = [palistasValidFecha, 'Registros con fecha invalida'];
        const resumen = {
            descrip: 'Número de registros con fecha invalida: ' + palistasValidFecha.length,
            tipo: 'validFecha'
        };
        this.tblResumen.push(resumen);
    }
    validateFecha(fecha) {
        if (fecha.length > 10) {
            return true;
        }
        if (fecha.length < 10) {
            fecha = '0' + fecha;
        }
        let vfecha = fecha.split('/');
        if (+vfecha[2] < 1900 || +vfecha[2] > 2015) {
            return true;
        }
        if (+vfecha[1] < 1 || +vfecha[1] > 12) {
            return true;
        }
        if (+vfecha[0] < 1 || +vfecha[0] > 31) {
            return true;
        }
        if ([4, 6, 9, 11].includes(+vfecha[1]) && +vfecha[0] > 30) {
            return true;
        }
        if (+vfecha[1] === 2 && +vfecha[0] > 29) {
            return true;
        }
        return false;
    }
    checkRepeatedDNI() {
        const palistasConDNI = this.palistas.filter(el => el['D.N.I.'] !== '');
        const palistasAgrupadosPorDni = this.arrayService.groupAndCount(palistasConDNI, ['D.N.I.']);
        const palistasRepeatedDni = palistasAgrupadosPorDni.filter(el => el.cantidad > 1);
        this.sharePalistas['repeatedDni'] = [palistasRepeatedDni, 'Registros con DNI repetido'];
        const resumen = {
            descrip: 'Número de registros con DNI en repetido: ' + palistasRepeatedDni.length,
            tipo: 'repeatedDni'
        };
        this.tblResumen.push(resumen);
    }
    extraerclubes() {
        this.clubes = this.arrayService.groupAndCount(this.palistas, ['ENTIDAD']);
        this.tblResumen.push('Número de clubes : ' + this.clubes.length);
    }
    filterPalistasClub(club) {
        this.palistasClub = this.palistas.filter(el => el.ENTIDAD === club);
    }
    showClubs() {
        this.shareDataService.sendData({ nombre: 'clubes', value: this.clubes });
        this.shareDataService.sendData({ nombre: 'palistas', value: this.palistas });
        this.router.navigate(['importar-palistas/show-clubs']);
    }
    showDNIrepetidos() {
        this.shareDataService.sendData({ nombre: 'palistas', value: this.palistas });
        this.router.navigate(['importar-palistas/show-dni-repetidos']);
    }
    showPalistas(tipo) {
        this.shareDataService.sendData({ palistas: this.sharePalistas[tipo] });
        this.router.navigate(['importar-palistas/show-palistas/' + tipo]);
    }
    onUpload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* let numRecordsInDB = 0;
            for (const tabla of this.tablas.filter(el => el !== 'users')) {
              let verifyData = await this.verifyTabla(tabla);
              let numRegistros = verifyData ? verifyData.length : 0;
              numRecordsInDB += numRegistros;
              let datos = JSON.stringify(this.datos[tabla])
            }
        
            if (numRecordsInDB === 0) {
              this.tablas.forEach( async tabla => {
                let datos = [...this.datos[tabla]];
                datos.forEach( record => {
                  this.crudService.setRecord$(tabla, record);
                });
              });
            }
            
            this.router.navigate(['home']);
            this.msg.ok('Datos restaurados satisfactoriamente'); */
        });
    }
    goBack() {
        this.location.back();
    }
    verifyTabla(tabla) {
        return this.crudService.getAllRecords$(tabla).toPromise();
    }
};
ImportarPalistasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _services_array_service__WEBPACK_IMPORTED_MODULE_6__["ArrayService"] },
    { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_7__["ShareDataService"] }
];
ImportarPalistasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-importar-palistas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./importar-palistas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/importar-palistas.component.html")).default
    })
], ImportarPalistasComponent);



/***/ }),

/***/ "./src/app/util/importar-palistas/importar-palistas.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/util/importar-palistas/importar-palistas.module.ts ***!
  \********************************************************************/
/*! exports provided: ImportarPalistasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarPalistasModule", function() { return ImportarPalistasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _importar_palistas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./importar-palistas.component */ "./src/app/util/importar-palistas/importar-palistas.component.ts");
/* harmony import */ var _show_clubes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-clubes.component */ "./src/app/util/importar-palistas/show-clubes.component.ts");
/* harmony import */ var _detalle_club_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-club.component */ "./src/app/util/importar-palistas/detalle-club.component.ts");
/* harmony import */ var _show_palistas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-palistas.component */ "./src/app/util/importar-palistas/show-palistas.component.ts");








const routes = [
    { path: '', component: _importar_palistas_component__WEBPACK_IMPORTED_MODULE_4__["ImportarPalistasComponent"],
        children: [
            { path: 'show-clubs', component: _show_clubes_component__WEBPACK_IMPORTED_MODULE_5__["ShowClubesComponent"] },
            { path: 'detalle-club/:entidad', component: _detalle_club_component__WEBPACK_IMPORTED_MODULE_6__["DetalleClubComponent"] },
            { path: 'show-palistas/:tipo', component: _show_palistas_component__WEBPACK_IMPORTED_MODULE_7__["ShowPalistasComponent"] }
        ]
    }
];
let ImportarPalistasModule = class ImportarPalistasModule {
};
ImportarPalistasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_importar_palistas_component__WEBPACK_IMPORTED_MODULE_4__["ImportarPalistasComponent"], _show_clubes_component__WEBPACK_IMPORTED_MODULE_5__["ShowClubesComponent"], _detalle_club_component__WEBPACK_IMPORTED_MODULE_6__["DetalleClubComponent"], _show_palistas_component__WEBPACK_IMPORTED_MODULE_7__["ShowPalistasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], ImportarPalistasModule);



/***/ }),

/***/ "./src/app/util/importar-palistas/show-clubes.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/util/importar-palistas/show-clubes.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowClubesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowClubesComponent", function() { return ShowClubesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/share-data.service */ "./src/app/util/services/share-data.service.ts");



let ShowClubesComponent = class ShowClubesComponent {
    constructor(shareDataService) {
        this.shareDataService = shareDataService;
    }
    ngOnInit() {
        this.clubes = this.shareDataService.getData('clubes');
    }
};
ShowClubesComponent.ctorParameters = () => [
    { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__["ShareDataService"] }
];
ShowClubesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-clubes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-clubes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/show-clubes.component.html")).default
    })
], ShowClubesComponent);



/***/ }),

/***/ "./src/app/util/importar-palistas/show-palistas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/util/importar-palistas/show-palistas.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowPalistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPalistasComponent", function() { return ShowPalistasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/share-data.service */ "./src/app/util/services/share-data.service.ts");
/* harmony import */ var _services_array_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/array.service */ "./src/app/services/array.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_6__);








let ShowPalistasComponent = class ShowPalistasComponent {
    constructor(actRoute, shareDataService, arrayService, ref) {
        this.actRoute = actRoute;
        this.shareDataService = shareDataService;
        this.arrayService = arrayService;
        this.ref = ref;
        this.showBtnImprimir = true;
        this.dataSource$ = this.shareDataService.data$;
    }
    ngOnInit() {
        const tipo = this.actRoute.snapshot.paramMap.get('tipo');
        this.palistas$ = this.dataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.palistas));
        this.dataSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.palistas))
            .subscribe(data => this.palistas = data);
    }
    imprimir() {
        print_js__WEBPACK_IMPORTED_MODULE_6__('printJS-table', 'html');
    }
};
ShowPalistasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__["ShareDataService"] },
    { type: _services_array_service__WEBPACK_IMPORTED_MODULE_3__["ArrayService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ShowPalistasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-palistas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-palistas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/importar-palistas/show-palistas.component.html")).default
    })
], ShowPalistasComponent);



/***/ }),

/***/ "./src/app/util/restore/restore.component.ts":
/*!***************************************************!*\
  !*** ./src/app/util/restore/restore.component.ts ***!
  \***************************************************/
/*! exports provided: RestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreComponent", function() { return RestoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");






let RestoreComponent = class RestoreComponent {
    constructor(router, location, msg, crudService) {
        this.router = router;
        this.location = location;
        this.msg = msg;
        this.crudService = crudService;
    }
    ngOnInit() {
    }
    onChange(e) {
        this.file = e.target.files[0];
        let fecha = new Date(this.file.lastModified);
        this.fecha = fecha.toLocaleDateString();
        this.hora = fecha.toLocaleTimeString();
        let reader = new FileReader();
        reader.onloadend = () => {
            this.datos = JSON.parse(reader.result);
            this.tablas = Object.keys(this.datos);
        };
        reader.readAsText(this.file);
    }
    onUpload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let numRecordsInDB = 0;
            for (const tabla of this.tablas.filter(el => el !== 'users')) {
                let verifyData = yield this.verifyTabla(tabla);
                let numRegistros = verifyData ? verifyData.length : 0;
                numRecordsInDB += numRegistros;
                // let datos = JSON.stringify(this.datos[tabla])
            }
            if (numRecordsInDB === 0) {
                this.tablas.forEach((tabla) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let datos = [...this.datos[tabla]];
                    console.log(tabla);
                    datos.forEach(record => {
                        this.crudService.setRecord$(tabla, record);
                    });
                }));
            }
            this.router.navigate(['home']);
            this.msg.ok('Datos restaurados satisfactoriamente');
        });
    }
    goBack() {
        this.location.back();
    }
    verifyTabla(tabla) {
        return this.crudService.getAllRecords$(tabla).toPromise();
    }
};
RestoreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }
];
RestoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restore',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/restore/restore.component.html")).default
    })
], RestoreComponent);



/***/ }),

/***/ "./src/app/util/restore/restore.module.ts":
/*!************************************************!*\
  !*** ./src/app/util/restore/restore.module.ts ***!
  \************************************************/
/*! exports provided: RestoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreModule", function() { return RestoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _restore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restore.component */ "./src/app/util/restore/restore.component.ts");





const routes = [
    { path: '', component: _restore_component__WEBPACK_IMPORTED_MODULE_4__["RestoreComponent"] }
];
let RestoreModule = class RestoreModule {
};
RestoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_restore_component__WEBPACK_IMPORTED_MODULE_4__["RestoreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], RestoreModule);



/***/ }),

/***/ "./src/app/util/services/add-field-to-table.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/util/services/add-field-to-table.service.ts ***!
  \*************************************************************/
/*! exports provided: AddFieldToTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFieldToTableService", function() { return AddFieldToTableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AddFieldToTableService = class AddFieldToTableService {
    constructor(crudService) {
        this.crudService = crudService;
    }
    addField(nomTabla, nomCampo, defaultValue) {
        this.crudService.getAllRecords$(nomTabla).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            const newData = [];
            data.forEach(el => {
                console.log(el);
                const record = Object.assign({}, el, { [nomCampo]: defaultValue });
                newData.push(record);
            });
            return newData;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(console.log));
    }
};
AddFieldToTableService.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
AddFieldToTableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddFieldToTableService);



/***/ }),

/***/ "./src/app/util/services/share-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/util/services/share-data.service.ts ***!
  \*****************************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShareDataService = class ShareDataService {
    constructor() {
        this.data = [];
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    clearMessages() {
        this.data$.next(null);
    }
    sendData(data) {
        this.data$.next(Object.assign({}, data));
        this.data.push(Object.assign({}, data));
    }
    getData(tipo) {
        /* let elemento = this.data.find( (el, index) => {
          return el.nombre === nombre
        });
        return elemento.value; */
        return this.data[tipo];
    }
};
ShareDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShareDataService);



/***/ }),

/***/ "./src/app/util/util-menu/util-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/util/util-menu/util-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: UtilMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilMenuComponent", function() { return UtilMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilMenuComponent = class UtilMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
UtilMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-util-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./util-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/util-menu/util-menu.component.html")).default
    })
], UtilMenuComponent);



/***/ }),

/***/ "./src/app/util/util-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/util/util-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UtilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilRoutingModule", function() { return UtilRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _util_menu_util_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util-menu/util-menu.component */ "./src/app/util/util-menu/util-menu.component.ts");
/* harmony import */ var _restore_restore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restore/restore.component */ "./src/app/util/restore/restore.component.ts");
/* harmony import */ var _backup_backup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./backup/backup.component */ "./src/app/util/backup/backup.component.ts");
/* harmony import */ var _add_field_to_table_add_field_to_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-field-to-table/add-field-to-table.component */ "./src/app/util/add-field-to-table/add-field-to-table.component.ts");
/* harmony import */ var _importar_palistas_importar_palistas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./importar-palistas/importar-palistas.component */ "./src/app/util/importar-palistas/importar-palistas.component.ts");
/* harmony import */ var _copiar_distancias_copiar_distancias_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./copiar-distancias/copiar-distancias.component */ "./src/app/util/copiar-distancias/copiar-distancias.component.ts");









const routes = [
    {
        path: '', component: _util_menu_util_menu_component__WEBPACK_IMPORTED_MODULE_3__["UtilMenuComponent"],
        children: [
            { path: 'backup', component: _backup_backup_component__WEBPACK_IMPORTED_MODULE_5__["BackupComponent"] },
            { path: 'restore', component: _restore_restore_component__WEBPACK_IMPORTED_MODULE_4__["RestoreComponent"] },
            { path: 'importar-palistas', component: _importar_palistas_importar_palistas_component__WEBPACK_IMPORTED_MODULE_7__["ImportarPalistasComponent"] },
            { path: 'copiar-distancias', component: _copiar_distancias_copiar_distancias_component__WEBPACK_IMPORTED_MODULE_8__["CopiarDistanciasComponent"] },
            { path: 'add-field-to-table', component: _add_field_to_table_add_field_to_table_component__WEBPACK_IMPORTED_MODULE_6__["AddFieldToTableComponent"] },
        ]
    }
];
let UtilRoutingModule = class UtilRoutingModule {
};
UtilRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UtilRoutingModule);

/* { path: 'backup', loadChildren: () => import('./backup/backup.module').then(m => m.BackupModule) },
{ path: 'restore', loadChildren: () => import('./restore/restore.module').then(m => m.RestoreModule) },
{ path: 'importar-palistas', loadChildren: () => import('./importar-palistas/importar-palistas.module').then(m => m.ImportarPalistasModule) },
{ path: 'copiar-distancias', loadChildren: () => import('./copiar-distancias/copiar-distancias.module').then(m => m.CopiarDistanciasModule) },
*/ 


/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _util_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util-routing.module */ "./src/app/util/util-routing.module.ts");
/* harmony import */ var _util_menu_util_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util-menu/util-menu.component */ "./src/app/util/util-menu/util-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _backup_backup_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backup/backup.module */ "./src/app/util/backup/backup.module.ts");
/* harmony import */ var _restore_restore_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./restore/restore.module */ "./src/app/util/restore/restore.module.ts");
/* harmony import */ var _add_field_to_table_add_field_to_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-field-to-table/add-field-to-table.component */ "./src/app/util/add-field-to-table/add-field-to-table.component.ts");
/* harmony import */ var _importar_palistas_importar_palistas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./importar-palistas/importar-palistas.module */ "./src/app/util/importar-palistas/importar-palistas.module.ts");
/* harmony import */ var _copiar_distancias_copiar_distancias_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./copiar-distancias/copiar-distancias.module */ "./src/app/util/copiar-distancias/copiar-distancias.module.ts");











let UtilModule = class UtilModule {
};
UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_util_menu_util_menu_component__WEBPACK_IMPORTED_MODULE_4__["UtilMenuComponent"], _add_field_to_table_add_field_to_table_component__WEBPACK_IMPORTED_MODULE_8__["AddFieldToTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _util_routing_module__WEBPACK_IMPORTED_MODULE_3__["UtilRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _backup_backup_module__WEBPACK_IMPORTED_MODULE_6__["BackupModule"],
            _restore_restore_module__WEBPACK_IMPORTED_MODULE_7__["RestoreModule"],
            _importar_palistas_importar_palistas_module__WEBPACK_IMPORTED_MODULE_9__["ImportarPalistasModule"],
            _copiar_distancias_copiar_distancias_module__WEBPACK_IMPORTED_MODULE_10__["CopiarDistanciasModule"]
        ]
    })
], UtilModule);



/***/ })

}]);
//# sourceMappingURL=util-util-module-es2015.js.map