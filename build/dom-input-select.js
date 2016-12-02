(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.domInputSelect = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = domFocus;
  function domFocus(node) {
    if ('selectionStart' in node) {
      node.selectionStart = 0;
      node.selectionEnd = 9999;
    } else {
      node.select();
    }
  }
});
