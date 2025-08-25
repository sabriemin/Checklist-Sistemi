"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useState = _React.useState;
window.DEFAULT_DATA = {
  checklists: []
};
var STORAGE_KEY = "checklist-multi-v1";
function loadState() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_unused) {
    return null;
  }
}
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_unused2) {}
}
function percent(n, d) {
  if (!d) return 0;
  return Math.round(n / d * 100);
}
function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : "id_" + Math.random().toString(36).slice(2);
}
function ChecklistApp() {
  var _window$DEFAULT_DATA, _checklists$;
  var loaded = loadState();
  var _useState = useState((loaded === null || loaded === void 0 ? void 0 : loaded.checklists) || ((_window$DEFAULT_DATA = window.DEFAULT_DATA) === null || _window$DEFAULT_DATA === void 0 ? void 0 : _window$DEFAULT_DATA.checklists) || []),
    _useState2 = _slicedToArray(_useState, 2),
    checklists = _useState2[0],
    setChecklists = _useState2[1];
  var _useState3 = useState((loaded === null || loaded === void 0 ? void 0 : loaded.selectedId) || ((_checklists$ = checklists[0]) === null || _checklists$ === void 0 ? void 0 : _checklists$.id) || null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedId = _useState4[0],
    setSelectedId = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showEditor = _useState8[0],
    setShowEditor = _useState8[1];
  var user = JSON.parse(localStorage.getItem("user") || "{}");
  var isAdmin = user.role === "admin";
  useEffect(function () {
    saveState({
      checklists: checklists,
      selectedId: selectedId
    });
  }, [checklists, selectedId]);
  var filtered = useMemo(function () {
    var q = search.trim().toLowerCase();
    if (!q) return checklists;
    return checklists.filter(function (c) {
      return c.name.toLowerCase().includes(q);
    });
  }, [search, checklists]);
  var selected = useMemo(function () {
    return checklists.find(function (c) {
      return c.id === selectedId;
    }) || null;
  }, [checklists, selectedId]);
  var progress = useMemo(function () {
    var _selected$items;
    if (!selected) return {
      done: 0,
      total: 0,
      pct: 0
    };
    var rec = selected.records || {};
    var total = ((_selected$items = selected.items) === null || _selected$items === void 0 ? void 0 : _selected$items.length) || 0;
    var done = (selected.items || []).filter(function (it) {
      var _rec$it$id;
      return (((_rec$it$id = rec[it.id]) === null || _rec$it$id === void 0 ? void 0 : _rec$it$id.status) || "") === "Evet";
    }).length;
    return {
      done: done,
      total: total,
      pct: percent(done, total)
    };
  }, [selected]);
  function addChecklist() {
    var name = prompt("Yeni checklist adı?");
    if (!name) return;
    var id = uid();
    var c = {
      id: id,
      name: name,
      items: [],
      records: {}
    };
    setChecklists(function (arr) {
      return [].concat(_toConsumableArray(arr), [c]);
    });
    setSelectedId(id);
  }
  function removeChecklist(id) {
    if (!confirm("Bu checklist silinsin mi?")) return;
    setChecklists(function (arr) {
      return arr.filter(function (c) {
        return c.id !== id;
      });
    });
    if (selectedId === id) {
      var next = checklists.find(function (c) {
        return c.id !== id;
      });
      setSelectedId(next ? next.id : null);
    }
  }
  function upsertRecord(itemId, patch) {
    setChecklists(function (arr) {
      return arr.map(function (c) {
        var _c$records;
        if (c.id !== selectedId) return c;
        return _objectSpread(_objectSpread({}, c), {}, {
          records: _objectSpread(_objectSpread({}, c.records), {}, _defineProperty({}, itemId, _objectSpread(_objectSpread({}, ((_c$records = c.records) === null || _c$records === void 0 ? void 0 : _c$records[itemId]) || {}), patch)))
        });
      });
    });
  }
  function resetSelected() {
    if (!selected) return;
    setChecklists(function (arr) {
      return arr.map(function (c) {
        return c.id === selectedId ? _objectSpread(_objectSpread({}, c), {}, {
          records: {}
        }) : c;
      });
    });
  }
  function exportJSON() {
    var blob = new Blob([JSON.stringify({
      checklists: checklists
    }, null, 2)], {
      type: "application/json"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "checklists.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  function importJSON() {
    return _importJSON.apply(this, arguments);
  }
  function _importJSON() {
    _importJSON = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var inp;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            inp = document.createElement("input");
            inp.type = "file";
            inp.accept = ".json,application/json";
            inp.onchange = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var _inp$files;
              var file, text, _data$checklists$, data, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    file = (_inp$files = inp.files) === null || _inp$files === void 0 ? void 0 : _inp$files[0];
                    if (file) {
                      _context.n = 1;
                      break;
                    }
                    return _context.a(2);
                  case 1:
                    _context.n = 2;
                    return file.text();
                  case 2:
                    text = _context.v;
                    _context.p = 3;
                    data = JSON.parse(text);
                    if (Array.isArray(data.checklists)) {
                      _context.n = 4;
                      break;
                    }
                    throw new Error("Geçersiz biçim");
                  case 4:
                    setChecklists(data.checklists);
                    setSelectedId(((_data$checklists$ = data.checklists[0]) === null || _data$checklists$ === void 0 ? void 0 : _data$checklists$.id) || null);
                    _context.n = 6;
                    break;
                  case 5:
                    _context.p = 5;
                    _t = _context.v;
                    alert("İçe aktarma hatası: " + _t.message);
                  case 6:
                    return _context.a(2);
                }
              }, _callee, null, [[3, 5]]);
            }));
            inp.click();
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return _importJSON.apply(this, arguments);
  }
  function addItem() {
    if (!selected) return;
    var label = prompt("Yeni madde?");
    if (!label) return;
    var item = {
      id: uid(),
      label: label,
      required: false
    };
    setChecklists(function (arr) {
      return arr.map(function (c) {
        return c.id === selectedId ? _objectSpread(_objectSpread({}, c), {}, {
          items: [].concat(_toConsumableArray(c.items), [item])
        }) : c;
      });
    });
  }
  function updateItem(itemId, patch) {
    setChecklists(function (arr) {
      return arr.map(function (c) {
        if (c.id !== selectedId) return c;
        return _objectSpread(_objectSpread({}, c), {}, {
          items: c.items.map(function (it) {
            return it.id === itemId ? _objectSpread(_objectSpread({}, it), patch) : it;
          })
        });
      });
    });
  }
  function removeItem(itemId) {
    setChecklists(function (arr) {
      return arr.map(function (c) {
        return c.id === selectedId ? _objectSpread(_objectSpread({}, c), {}, {
          items: c.items.filter(function (it) {
            return it.id !== itemId;
          })
        }) : c;
      });
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-20 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 py-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-lg"
  }, "Checklist Merkezi"), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto flex items-center gap-2"
  }, isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowEditor(function (s) {
        return !s;
      });
    },
    className: "px-3 py-2 rounded-xl text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
  }, "Maddeleri D\xFCzenle"), /*#__PURE__*/React.createElement("button", {
    onClick: exportJSON,
    className: "px-3 py-2 rounded-xl text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
  }, "D\u0131\u015Fa Aktar"), /*#__PURE__*/React.createElement("button", {
    onClick: importJSON,
    className: "px-3 py-2 rounded-xl text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
  }, "\u0130\xE7e Aktar"))))), /*#__PURE__*/React.createElement("main", {
    className: "max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-12 gap-4"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "md:col-span-4 lg:col-span-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block sticky top-[64px] max-h-[calc(100vh-80px)] overflow-auto p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Checklist ara",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    className: "w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
  }), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: addChecklist,
    className: "px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
  }, "+ Ekle")), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-1"
  }, filtered.map(function (c) {
    return /*#__PURE__*/React.createElement("li", {
      key: c.id,
      className: "group flex items-center gap-2 p-2 rounded-xl cursor-pointer ".concat(selectedId === c.id ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-50 dark:hover:bg-neutral-800/60"),
      onClick: function onClick() {
        return setSelectedId(c.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-medium text-sm"
    }, c.name), /*#__PURE__*/React.createElement(ProgressBar, {
      pct: function (_c$items) {
        var rec = c.records || {};
        var t = ((_c$items = c.items) === null || _c$items === void 0 ? void 0 : _c$items.length) || 0;
        var d = (c.items || []).filter(function (it) {
          var _rec$it$id2;
          return (((_rec$it$id2 = rec[it.id]) === null || _rec$it$id2 === void 0 ? void 0 : _rec$it$id2.status) || "") === "Evet";
        }).length;
        return percent(d, t);
      }()
    })), isAdmin && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeChecklist(c.id);
      },
      className: "opacity-0 group-hover:opacity-100 transition px-2 py-1 text-xs rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
    }, "Sil"));
  })))), /*#__PURE__*/React.createElement("section", {
    className: "md:col-span-8 lg:col-span-9"
  }, !selected ? /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
  }, "Checklist se\xE7iniz.") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-semibold flex-1"
  }, selected.name), isAdmin && /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: resetSelected,
    className: "px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700"
  }, "S\u0131f\u0131rla"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(ProgressCircle, {
    pct: progress.pct
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-neutral-500"
  }, "Tamamlanan"), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, progress.done, " / ", progress.total, " (%", progress.pct, ")")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, (selected.items || []).map(function (item) {
    var _selected$records, _selected$records2, _selected$records3, _selected$records4;
    return /*#__PURE__*/React.createElement(Card, {
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-medium"
    }, item.label, " ", item.required && /*#__PURE__*/React.createElement("span", {
      className: "ml-2 inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 align-middle"
    }, "Zorunlu")), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-neutral-500"
    }, "Madde ID: ", item.id.slice(0, 8), "\u2026")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 items-center"
    }, /*#__PURE__*/React.createElement(Select, {
      value: ((_selected$records = selected.records) === null || _selected$records === void 0 || (_selected$records = _selected$records[item.id]) === null || _selected$records === void 0 ? void 0 : _selected$records.status) || "",
      onChange: function onChange(v) {
        return upsertRecord(item.id, {
          status: v
        });
      },
      options: ["", "Evet", "Hayır", "Uygulanmaz"]
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "Not",
      value: ((_selected$records2 = selected.records) === null || _selected$records2 === void 0 || (_selected$records2 = _selected$records2[item.id]) === null || _selected$records2 === void 0 ? void 0 : _selected$records2.note) || "",
      onChange: function onChange(e) {
        return upsertRecord(item.id, {
          note: e.target.value
        });
      },
      className: "flex-1 min-w-[160px] rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "Foto\u011Fraf URL",
      value: ((_selected$records3 = selected.records) === null || _selected$records3 === void 0 || (_selected$records3 = _selected$records3[item.id]) === null || _selected$records3 === void 0 ? void 0 : _selected$records3.photo) || "",
      onChange: function onChange(e) {
        return upsertRecord(item.id, {
          photo: e.target.value
        });
      },
      className: "w-[180px] rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
    }))), (_selected$records4 = selected.records) !== null && _selected$records4 !== void 0 && (_selected$records4 = _selected$records4[item.id]) !== null && _selected$records4 !== void 0 && _selected$records4.photo ? /*#__PURE__*/React.createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/React.createElement("img", {
      src: selected.records[item.id].photo,
      alt: "Foto\u011Fraf",
      className: "max-h-48 rounded-xl border border-neutral-200 dark:border-neutral-800 object-contain"
    })) : null);
  }))))), isAdmin && showEditor && selected && /*#__PURE__*/React.createElement(Modal, {
    onClose: function onClose() {
      return setShowEditor(false);
    },
    title: "Maddeleri D\xFCzenle \u2014 ".concat(selected.name)
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, (selected.items || []).map(function (it) {
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      value: it.label,
      onChange: function onChange(e) {
        return updateItem(it.id, {
          label: e.target.value
        });
      },
      className: "flex-1 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
    }), /*#__PURE__*/React.createElement("label", {
      className: "text-sm flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: !!it.required,
      onChange: function onChange(e) {
        return updateItem(it.id, {
          required: e.target.checked
        });
      }
    }), " ", "Zorunlu"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeItem(it.id);
      },
      className: "px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    }, "Sil"));
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: addItem,
    className: "px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700"
  }, "+ Madde"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowEditor(false);
    },
    className: "px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700"
  }, "Kapat")))));
}
function Card(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
  }, children);
}
function Modal(_ref3) {
  var title = _ref3.title,
    children = _ref3.children,
    onClose = _ref3.onClose;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/40",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full sm:max-w-2xl sm:w-[640px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-t-2xl sm:rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-semibold flex-1"
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700"
  }, "Kapat")), children));
}
function ProgressBar(_ref4) {
  var pct = _ref4.pct;
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-1 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full bg-emerald-500",
    style: {
      width: pct + "%"
    }
  }));
}
function ProgressCircle(_ref5) {
  var pct = _ref5.pct;
  var size = 54,
    stroke = 7,
    r = (size - stroke) / 2,
    c = 2 * Math.PI * r,
    dash = pct / 100 * c;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size)
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    strokeWidth: stroke,
    stroke: "#e5e7eb",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    strokeWidth: stroke,
    strokeLinecap: "round",
    stroke: "#10b981",
    fill: "none",
    strokeDasharray: "".concat(dash, " ").concat(c),
    transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")")
  }), /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "50%",
    dominantBaseline: "middle",
    textAnchor: "middle",
    fontSize: "12",
    className: "fill-neutral-700 dark:fill-neutral-200"
  }, pct, "%"));
}
function Select(_ref6) {
  var value = _ref6.value,
    _onChange = _ref6.onChange,
    options = _ref6.options;
  return /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    className: "rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2"
  }, options.map(function (o) {
    return /*#__PURE__*/React.createElement("option", {
      key: o,
      value: o
    }, o || "Seçin");
  }));
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(ChecklistApp, null));
