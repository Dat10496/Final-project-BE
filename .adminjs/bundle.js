(function (React, designSystem) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return {
            value: void 0,
            done: !0
          };
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable || "" === iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      throw new TypeError(typeof iterable + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9hZG1pbi9jb21wb25lbnRzL3VwbG9hZC1pbWFnZS5lZGl0LnRzeCIsIi4uL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWltYWdlLmxpc3QudHN4IiwiLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIExhYmVsLFxuICBCb3gsXG4gIERyb3Bab25lLFxuICBEcm9wWm9uZVByb3BzLFxuICBEcm9wWm9uZUl0ZW0sXG59IGZyb20gXCJAYWRtaW5qcy9kZXNpZ24tc3lzdGVtXCI7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gXCJhZG1pbmpzXCI7XG5pbXBvcnQgY2xvdWRpbmFyeVVwbG9hZCBmcm9tIFwiLi4vLi4vaGVscGVycy9jbG91ZGluYXJ5XCI7XG5cbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVEcm9wWm9uZUNoYW5nZTogRHJvcFpvbmVQcm9wc1tcIm9uQ2hhbmdlXCJdID0gYXN5bmMgKGZpbGVzKSA9PiB7XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UocHJvcGVydHkubmFtZSwgZmlsZXNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IHVwbG9hZGVkUGhvdG8gPSByZWNvcmQ/LnBhcmFtcz8uaW1hZ2U7XG4gIGNvbnN0IHBob3RvVG9VcGxvYWQgPSByZWNvcmQ/LnBhcmFtcz8uaW1hZ2U/Lm5hbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1hcmdpbkJvdHRvbT1cInh4bFwiPlxuICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgPERyb3Bab25lIG9uQ2hhbmdlPXtoYW5kbGVEcm9wWm9uZUNoYW5nZX0gLz5cbiAgICAgIHt1cGxvYWRlZFBob3RvICYmICFwaG90b1RvVXBsb2FkICYmIDxEcm9wWm9uZUl0ZW0gc3JjPXt1cGxvYWRlZFBob3RvfSAvPn1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRcblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gXCJhZG1pbmpzXCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWNvcmQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHNyY0ltZyA9IHJlY29yZD8ucGFyYW1zW1wiaW1hZ2VcIl07XG4gIHJldHVybiA8Qm94PntzcmNJbWcgPyA8aW1nIHNyYz17c3JjSW1nfSB3aWR0aD1cIjEwMHB4XCIgLz4gOiBcIm5vIGltYWdlXCJ9PC9Cb3g+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2FkbWluL2NvbXBvbmVudHMvdXBsb2FkLWltYWdlLmVkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkltYWdlID0gSW1hZ2VcbmltcG9ydCBJbWFnZUxpc3QgZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy91cGxvYWQtaW1hZ2UubGlzdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuSW1hZ2VMaXN0ID0gSW1hZ2VMaXN0Il0sIm5hbWVzIjpbIkVkaXQiLCJwcm9wcyIsIl9yZWNvcmQkcGFyYW1zIiwiX3JlY29yZCRwYXJhbXMyIiwicHJvcGVydHkiLCJvbkNoYW5nZSIsInJlY29yZCIsImhhbmRsZURyb3Bab25lQ2hhbmdlIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZmlsZXMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibmFtZSIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwidXBsb2FkZWRQaG90byIsInBhcmFtcyIsImltYWdlIiwicGhvdG9Ub1VwbG9hZCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkJveCIsIm1hcmdpbkJvdHRvbSIsIkxhYmVsIiwibGFiZWwiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsInNyYyIsIkxpc3QiLCJzcmNJbWciLCJ3aWR0aCIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIkltYWdlIiwiSW1hZ2VMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBV0EsSUFBTUEsSUFBaUMsR0FBRyxTQUFwQ0EsSUFBaUNBLENBQUlDLEtBQUssRUFBSztJQUFBLElBQUFDLGNBQUEsRUFBQUMsZUFBQSxDQUFBO0VBQ25ELEVBQUEsSUFBUUMsUUFBUSxHQUF1QkgsS0FBSyxDQUFwQ0csUUFBUTtNQUFFQyxRQUFRLEdBQWFKLEtBQUssQ0FBMUJJLFFBQVE7TUFBRUMsTUFBTSxHQUFLTCxLQUFLLENBQWhCSyxNQUFNLENBQUE7RUFFbEMsRUFBQSxJQUFNQyxvQkFB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
