(function (React, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw new Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  var Edit = function Edit(props) {
    var _record$params, _record$params2;
    var property = props.property,
      onChange = props.onChange,
      record = props.record;
    var handleDropZoneChange = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(files) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              onChange && onChange(property.name, files[0]);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function handleDropZoneChange(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var uploadedPhoto = record === null || record === void 0 || (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params.image;
    var photoToUpload = record === null || record === void 0 || (_record$params2 = record.params) === null || _record$params2 === void 0 || (_record$params2 = _record$params2.image) === null || _record$params2 === void 0 ? void 0 : _record$params2.name;
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      marginBottom: "xxl"
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, property.label), /*#__PURE__*/React__default["default"].createElement(designSystem.DropZone, {
      onChange: handleDropZoneChange
    }), uploadedPhoto && !photoToUpload && /*#__PURE__*/React__default["default"].createElement(designSystem.DropZoneItem, {
      src: uploadedPhoto
    }));
  };

  var List = function List(props) {
    var record = props.record;
    var srcImg = record === null || record === void 0 ? void 0 : record.params["image"];
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, srcImg ? /*#__PURE__*/React__default["default"].createElement("img", {
      src: srcImg,
      width: "100px"
    }) : "no image");
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Image = Edit;
  AdminJS.UserComponents.ImageList = List;

})(React, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hZG1pbi9jb21wb25lbnRzL3VwbG9hZC1pbWFnZS5lZGl0LnRzeCIsIi4uL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWltYWdlLmxpc3QudHN4IiwiLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExhYmVsLFxuICBCb3gsXG4gIERyb3Bab25lLFxuICBEcm9wWm9uZVByb3BzLFxuICBEcm9wWm9uZUl0ZW0sXG59IGZyb20gXCJAYWRtaW5qcy9kZXNpZ24tc3lzdGVtXCI7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gXCJhZG1pbmpzXCI7XG5pbXBvcnQgY2xvdWRpbmFyeVVwbG9hZCBmcm9tIFwiLi4vLi4vaGVscGVycy9jbG91ZGluYXJ5XCI7XG5cbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVEcm9wWm9uZUNoYW5nZTogRHJvcFpvbmVQcm9wc1tcIm9uQ2hhbmdlXCJdID0gYXN5bmMgKGZpbGVzKSA9PiB7XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgZmlsZXNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IHVwbG9hZGVkUGhvdG8gPSByZWNvcmQ/LnBhcmFtcz8uaW1hZ2U7XG4gIGNvbnN0IHBob3RvVG9VcGxvYWQgPSByZWNvcmQ/LnBhcmFtcz8uaW1hZ2U/Lm5hbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkJvdHRvbT1cInh4bFwiPlxuICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgPERyb3Bab25lIG9uQ2hhbmdlPXtoYW5kbGVEcm9wWm9uZUNoYW5nZX0gLz5cbiAgICAgIHt1cGxvYWRlZFBob3RvICYmICFwaG90b1RvVXBsb2FkICYmIDxEcm9wWm9uZUl0ZW0gc3JjPXt1cGxvYWRlZFBob3RvfSAvPn1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRcblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gXCJhZG1pbmpzXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWNvcmQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHNyY0ltZyA9IHJlY29yZD8ucGFyYW1zW1wiaW1hZ2VcIl07XG4gIHJldHVybiA8Qm94PntzcmNJbWcgPyA8aW1nIHNyYz17c3JjSW1nfSB3aWR0aD1cIjEwMHB4XCIgLz4gOiBcIm5vIGltYWdlXCJ9PC9Cb3g+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWltYWdlLmVkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkltYWdlID0gSW1hZ2VcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy91cGxvYWQtaW1hZ2UubGlzdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuSW1hZ2VMaXN0ID0gSW1hZ2VMaXN0Il0sIm5hbWVzIjpbIkVkaXQiLCJwcm9wcyIsIl9yZWNvcmQkcGFyYW1zIiwiX3JlY29yZCRwYXJhbXMyIiwicHJvcGVydHkiLCJvbkNoYW5nZSIsInJlY29yZCIsImhhbmRsZURyb3Bab25lQ2hhbmdlIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZmlsZXMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibmFtZSIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwidXBsb2FkZWRQaG90byIsInBhcmFtcyIsImltYWdlIiwicGhvdG9Ub1VwbG9hZCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkJveCIsIm1hcmdpbkJvdHRvbSIsIkxhYmVsIiwibGFiZWwiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsInNyYyIsIkxpc3QiLCJzcmNJbWciLCJ3aWR0aCIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIkltYWdlIiwiSW1hZ2VMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFXQSxJQUFNQSxJQUFpQyxHQUFHLFNBQXBDQSxJQUFpQ0EsQ0FBSUMsS0FBSyxFQUFLO0lBQUEsSUFBQUMsY0FBQSxFQUFBQyxlQUFBLENBQUE7RUFDbkQsRUFBQSxJQUFRQyxRQUFRLEdBQXVCSCxLQUFLLENBQXBDRyxRQUFRO01BQUVDLFFBQVEsR0FBYUosS0FBSyxDQUExQkksUUFBUTtNQUFFQyxNQUFNLEdBQUtMLEtBQUssQ0FBaEJLLE1BQU0sQ0FBQTtFQUVsQyxFQUFBLElBQU1D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
