import { useMemo as js } from "react";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Qt;
function o() {
  return Qt.apply(null, arguments);
}
function zs(e) {
  Qt = e;
}
function G(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function _e(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function S(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (S(e, t))
      return !1;
  return !0;
}
function P(e) {
  return e === void 0;
}
function ae(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ae(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Xt(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ue(e, t) {
  for (var s in t)
    S(t, s) && (e[s] = t[s]);
  return S(t, "toString") && (e.toString = t.toString), S(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function J(e, t, s, r) {
  return gs(e, t, s, r, !0).utc();
}
function Zs() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function y(e) {
  return e._pf == null && (e._pf = Zs()), e._pf;
}
var mt;
Array.prototype.some ? mt = Array.prototype.some : mt = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Yt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = y(e), s = mt.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Qe(e) {
  var t = J(NaN);
  return e != null ? ue(y(t), e) : y(t).userInvalidated = !0, t;
}
var jt = o.momentProperties = [], dt = !1;
function Ot(e, t) {
  var s, r, a, n = jt.length;
  if (P(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), P(t._i) || (e._i = t._i), P(t._f) || (e._f = t._f), P(t._l) || (e._l = t._l), P(t._strict) || (e._strict = t._strict), P(t._tzm) || (e._tzm = t._tzm), P(t._isUTC) || (e._isUTC = t._isUTC), P(t._offset) || (e._offset = t._offset), P(t._pf) || (e._pf = y(t)), P(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = jt[s], a = t[r], P(a) || (e[r] = a);
  return e;
}
function Ce(e) {
  Ot(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), dt === !1 && (dt = !0, o.updateOffset(this), dt = !1);
}
function $(e) {
  return e instanceof Ce || e != null && e._isAMomentObject != null;
}
function es(e) {
  o.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function L(e, t) {
  var s = !0;
  return ue(function() {
    if (o.deprecationHandler != null && o.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            S(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      es(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var zt = {};
function ts(e, t) {
  o.deprecationHandler != null && o.deprecationHandler(e, t), zt[e] || (es(t), zt[e] = !0);
}
o.suppressDeprecationWarnings = !1;
o.deprecationHandler = null;
function K(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Bs(e) {
  var t, s;
  for (s in e)
    S(e, s) && (t = e[s], K(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function _t(e, t) {
  var s = ue({}, e), r;
  for (r in t)
    S(t, r) && (_e(e[r]) && _e(t[r]) ? (s[r] = {}, ue(s[r], e[r]), ue(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    S(e, r) && !S(t, r) && _e(e[r]) && (s[r] = ue({}, s[r]));
  return s;
}
function pt(e) {
  e != null && this.set(e);
}
var yt;
Object.keys ? yt = Object.keys : yt = function(e) {
  var t, s = [];
  for (t in e)
    S(e, t) && s.push(t);
  return s;
};
var qs = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Js(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return K(r) ? r.call(t, s) : r;
}
function q(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var vt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, He = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ft = {}, ke = {};
function c(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (ke[e] = a), t && (ke[t[0]] = function() {
    return q(a.apply(this, arguments), t[1], t[2]);
  }), s && (ke[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Ks(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Qs(e) {
  var t = e.match(vt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    ke[t[s]] ? t[s] = ke[t[s]] : t[s] = Ks(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += K(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function $e(e, t) {
  return e.isValid() ? (t = ss(t, e.localeData()), ft[t] = ft[t] || Qs(t), ft[t](e)) : e.localeData().invalidDate();
}
function ss(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (He.lastIndex = 0; s >= 0 && He.test(e); )
    e = e.replace(
      He,
      r
    ), He.lastIndex = 0, s -= 1;
  return e;
}
var Xs = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function er(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(vt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var tr = "Invalid date";
function sr() {
  return this._invalidDate;
}
var rr = "%d", ar = /\d{1,2}/;
function nr(e) {
  return this._ordinal.replace("%d", e);
}
var ir = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function or(e, t, s, r) {
  var a = this._relativeTime[s];
  return K(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function lr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return K(s) ? s(t) : s.replace(/%s/i, t);
}
var Zt = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function U(e) {
  return typeof e == "string" ? Zt[e] || Zt[e.toLowerCase()] : void 0;
}
function Tt(e) {
  var t = {}, s, r;
  for (r in e)
    S(e, r) && (s = U(r), s && (t[s] = e[r]));
  return t;
}
var ur = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function dr(e) {
  var t = [], s;
  for (s in e)
    S(e, s) && t.push({ unit: s, priority: ur[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var rs = /\d/, I = /\d\d/, as = /\d{3}/, Nt = /\d{4}/, Xe = /[+-]?\d{6}/, v = /\d\d?/, ns = /\d\d\d\d?/, is = /\d\d\d\d\d\d?/, et = /\d{1,3}/, xt = /\d{1,4}/, tt = /[+-]?\d{1,6}/, Oe = /\d+/, st = /[+-]?\d+/, fr = /Z|[+-]\d\d:?\d\d/gi, rt = /Z|[+-]\d\d(?::?\d\d)?/gi, hr = /[+-]?\d+(\.\d{1,3})?/, Le = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, pe = /^[1-9]\d?/, Wt = /^([1-9]\d|\d)/, Ze;
Ze = {};
function f(e, t, s) {
  Ze[e] = K(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function cr(e, t) {
  return S(Ze, e) ? Ze[e](t._strict, t._locale) : new RegExp(mr(e));
}
function mr(e) {
  return se(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function se(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function C(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function D(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = C(t)), s;
}
var Dt = {};
function Y(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), ae(t) && (r = function(n, i) {
    i[t] = D(n);
  }), a = e.length, s = 0; s < a; s++)
    Dt[e[s]] = r;
}
function Ue(e, t) {
  Y(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function _r(e, t, s) {
  t != null && S(Dt, e) && Dt[e](t, s._a, s, e);
}
function at(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var R = 0, ee = 1, B = 2, b = 3, V = 4, te = 5, ce = 6, yr = 7, Dr = 8;
c("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? q(e, 4) : "+" + e;
});
c(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
c(0, ["YYYY", 4], 0, "year");
c(0, ["YYYYY", 5], 0, "year");
c(0, ["YYYYYY", 6, !0], 0, "year");
f("Y", st);
f("YY", v, I);
f("YYYY", xt, Nt);
f("YYYYY", tt, Xe);
f("YYYYYY", tt, Xe);
Y(["YYYYY", "YYYYYY"], R);
Y("YYYY", function(e, t) {
  t[R] = e.length === 2 ? o.parseTwoDigitYear(e) : D(e);
});
Y("YY", function(e, t) {
  t[R] = o.parseTwoDigitYear(e);
});
Y("Y", function(e, t) {
  t[R] = parseInt(e, 10);
});
function be(e) {
  return at(e) ? 366 : 365;
}
o.parseTwoDigitYear = function(e) {
  return D(e) + (D(e) > 68 ? 1900 : 2e3);
};
var os = ve("FullYear", !0);
function wr() {
  return at(this.year());
}
function ve(e, t) {
  return function(s) {
    return s != null ? (ls(this, e, s), o.updateOffset(this, t), this) : Re(this, e);
  };
}
function Re(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function ls(e, t, s) {
  var r, a, n, i, u;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !at(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function Sr(e) {
  return e = U(e), K(this[e]) ? this[e]() : this;
}
function Mr(e, t) {
  if (typeof e == "object") {
    e = Tt(e);
    var s = dr(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = U(e), K(this[e]))
    return this[e](t);
  return this;
}
function kr(e, t) {
  return (e % t + t) % t;
}
var x;
Array.prototype.indexOf ? x = Array.prototype.indexOf : x = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function bt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = kr(t, 12);
  return e += (t - s) / 12, s === 1 ? at(e) ? 29 : 28 : 31 - s % 7 % 2;
}
c("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
c("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
c("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
f("M", v, pe);
f("MM", v, I);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Y(["M", "MM"], function(e, t) {
  t[ee] = D(e) - 1;
});
Y(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[ee] = a : y(s).invalidMonth = e;
});
var gr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), us = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ds = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Yr = Le, Or = Le;
function pr(e, t) {
  return e ? G(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || ds).test(t) ? "format" : "standalone"][e.month()] : G(this._months) ? this._months : this._months.standalone;
}
function vr(e, t) {
  return e ? G(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[ds.test(t) ? "format" : "standalone"][e.month()] : G(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Tr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = J([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = x.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = x.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = x.call(this._shortMonthsParse, i), a !== -1 ? a : (a = x.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = x.call(this._longMonthsParse, i), a !== -1 ? a : (a = x.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Nr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return Tr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = J([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function fs(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = D(t);
    else if (t = e.localeData().monthsParse(t), !ae(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, bt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function hs(e) {
  return e != null ? (fs(this, e), o.updateOffset(this, !0), this) : Re(this, "Month");
}
function xr() {
  return bt(this.year(), this.month());
}
function Wr(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || cs.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (S(this, "_monthsShortRegex") || (this._monthsShortRegex = Yr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function br(e) {
  return this._monthsParseExact ? (S(this, "_monthsRegex") || cs.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (S(this, "_monthsRegex") || (this._monthsRegex = Or), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function cs() {
  function e(d, m) {
    return m.length - d.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = J([2e3, a]), i = se(this.monthsShort(n, "")), u = se(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Er(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function Pe(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Be(e, t, s) {
  var r = 7 + t - s, a = (7 + Pe(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function ms(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Be(e, r, a), u = 1 + 7 * (t - 1) + n + i, d, m;
  return u <= 0 ? (d = e - 1, m = be(d) + u) : u > be(e) ? (d = e + 1, m = u - be(e)) : (d = e, m = u), {
    year: d,
    dayOfYear: m
  };
}
function Fe(e, t, s) {
  var r = Be(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + re(i, t, s)) : a > re(e.year(), t, s) ? (n = a - re(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function re(e, t, s) {
  var r = Be(e, t, s), a = Be(e + 1, t, s);
  return (be(e) - r + a) / 7;
}
c("w", ["ww", 2], "wo", "week");
c("W", ["WW", 2], "Wo", "isoWeek");
f("w", v, pe);
f("ww", v, I);
f("W", v, pe);
f("WW", v, I);
Ue(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = D(e);
  }
);
function Rr(e) {
  return Fe(e, this._week.dow, this._week.doy).week;
}
var Pr = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Fr() {
  return this._week.dow;
}
function Ir() {
  return this._week.doy;
}
function Ar(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Cr(e) {
  var t = Fe(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
c("d", 0, "do", "day");
c("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
c("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
c("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
c("e", 0, 0, "weekday");
c("E", 0, 0, "isoWeekday");
f("d", v);
f("e", v);
f("E", v);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ue(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : y(s).invalidWeekday = e;
});
Ue(["d", "e", "E"], function(e, t, s, r) {
  t[r] = D(e);
});
function Lr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Ur(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Et(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Hr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), _s = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Vr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Gr = Le, $r = Le, jr = Le;
function zr(e, t) {
  var s = G(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Et(s, this._week.dow) : e ? s[e.day()] : s;
}
function Zr(e) {
  return e === !0 ? Et(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Br(e) {
  return e === !0 ? Et(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function qr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = J([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = x.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = x.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = x.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = x.call(this._weekdaysParse, i), a !== -1 || (a = x.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = x.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = x.call(this._shortWeekdaysParse, i), a !== -1 || (a = x.call(this._weekdaysParse, i), a !== -1) ? a : (a = x.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = x.call(this._minWeekdaysParse, i), a !== -1 || (a = x.call(this._weekdaysParse, i), a !== -1) ? a : (a = x.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Jr(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return qr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = J([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Kr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Re(this, "Day");
  return e != null ? (e = Lr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Qr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Xr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Ur(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function ea(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Rt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (S(this, "_weekdaysRegex") || (this._weekdaysRegex = Gr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function ta(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Rt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (S(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $r), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function sa(e) {
  return this._weekdaysParseExact ? (S(this, "_weekdaysRegex") || Rt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (S(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = jr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Rt() {
  function e(_, W) {
    return W.length - _.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, d, m;
  for (n = 0; n < 7; n++)
    i = J([2e3, 1]).day(n), u = se(this.weekdaysMin(i, "")), d = se(this.weekdaysShort(i, "")), m = se(this.weekdays(i, "")), t.push(u), s.push(d), r.push(m), a.push(u), a.push(d), a.push(m);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Pt() {
  return this.hours() % 12 || 12;
}
function ra() {
  return this.hours() || 24;
}
c("H", ["HH", 2], 0, "hour");
c("h", ["hh", 2], 0, Pt);
c("k", ["kk", 2], 0, ra);
c("hmm", 0, 0, function() {
  return "" + Pt.apply(this) + q(this.minutes(), 2);
});
c("hmmss", 0, 0, function() {
  return "" + Pt.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2);
});
c("Hmm", 0, 0, function() {
  return "" + this.hours() + q(this.minutes(), 2);
});
c("Hmmss", 0, 0, function() {
  return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2);
});
function ys(e, t) {
  c(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ys("a", !0);
ys("A", !1);
function Ds(e, t) {
  return t._meridiemParse;
}
f("a", Ds);
f("A", Ds);
f("H", v, Wt);
f("h", v, pe);
f("k", v, pe);
f("HH", v, I);
f("hh", v, I);
f("kk", v, I);
f("hmm", ns);
f("hmmss", is);
f("Hmm", ns);
f("Hmmss", is);
Y(["H", "HH"], b);
Y(["k", "kk"], function(e, t, s) {
  var r = D(e);
  t[b] = r === 24 ? 0 : r;
});
Y(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
Y(["h", "hh"], function(e, t, s) {
  t[b] = D(e), y(s).bigHour = !0;
});
Y("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[b] = D(e.substr(0, r)), t[V] = D(e.substr(r)), y(s).bigHour = !0;
});
Y("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[b] = D(e.substr(0, r)), t[V] = D(e.substr(r, 2)), t[te] = D(e.substr(a)), y(s).bigHour = !0;
});
Y("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[b] = D(e.substr(0, r)), t[V] = D(e.substr(r));
});
Y("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[b] = D(e.substr(0, r)), t[V] = D(e.substr(r, 2)), t[te] = D(e.substr(a));
});
function aa(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var na = /[ap]\.?m?\.?/i, ia = ve("Hours", !0);
function oa(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var ws = {
  calendar: qs,
  longDateFormat: Xs,
  invalidDate: tr,
  ordinal: rr,
  dayOfMonthOrdinalParse: ar,
  relativeTime: ir,
  months: gr,
  monthsShort: us,
  week: Pr,
  weekdays: Hr,
  weekdaysMin: Vr,
  weekdaysShort: _s,
  meridiemParse: na
}, T = {}, xe = {}, Ie;
function la(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function Bt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ua(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = Bt(e[t]).split("-"), s = n.length, r = Bt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = nt(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && la(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Ie;
}
function da(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function nt(e) {
  var t = null, s;
  if (T[e] === void 0 && typeof module < "u" && module && module.exports && da(e))
    try {
      t = Ie._abbr, s = require, s("./locale/" + e), fe(t);
    } catch {
      T[e] = null;
    }
  return T[e];
}
function fe(e, t) {
  var s;
  return e && (P(t) ? s = ne(e) : s = Ft(e, t), s ? Ie = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ie._abbr;
}
function Ft(e, t) {
  if (t !== null) {
    var s, r = ws;
    if (t.abbr = e, T[e] != null)
      ts(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = T[e]._config;
    else if (t.parentLocale != null)
      if (T[t.parentLocale] != null)
        r = T[t.parentLocale]._config;
      else if (s = nt(t.parentLocale), s != null)
        r = s._config;
      else
        return xe[t.parentLocale] || (xe[t.parentLocale] = []), xe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return T[e] = new pt(_t(r, t)), xe[e] && xe[e].forEach(function(a) {
      Ft(a.name, a.config);
    }), fe(e), T[e];
  } else
    return delete T[e], null;
}
function fa(e, t) {
  if (t != null) {
    var s, r, a = ws;
    T[e] != null && T[e].parentLocale != null ? T[e].set(_t(T[e]._config, t)) : (r = nt(e), r != null && (a = r._config), t = _t(a, t), r == null && (t.abbr = e), s = new pt(t), s.parentLocale = T[e], T[e] = s), fe(e);
  } else
    T[e] != null && (T[e].parentLocale != null ? (T[e] = T[e].parentLocale, e === fe() && fe(e)) : T[e] != null && delete T[e]);
  return T[e];
}
function ne(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ie;
  if (!G(e)) {
    if (t = nt(e), t)
      return t;
    e = [e];
  }
  return ua(e);
}
function ha() {
  return yt(T);
}
function It(e) {
  var t, s = e._a;
  return s && y(e).overflow === -2 && (t = s[ee] < 0 || s[ee] > 11 ? ee : s[B] < 1 || s[B] > bt(s[R], s[ee]) ? B : s[b] < 0 || s[b] > 24 || s[b] === 24 && (s[V] !== 0 || s[te] !== 0 || s[ce] !== 0) ? b : s[V] < 0 || s[V] > 59 ? V : s[te] < 0 || s[te] > 59 ? te : s[ce] < 0 || s[ce] > 999 ? ce : -1, y(e)._overflowDayOfYear && (t < R || t > B) && (t = B), y(e)._overflowWeeks && t === -1 && (t = yr), y(e)._overflowWeekday && t === -1 && (t = Dr), y(e).overflow = t), e;
}
var ca = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ma = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _a = /Z|[+-]\d\d(?::?\d\d)?/, Ve = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], ht = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ya = /^\/?Date\((-?\d+)/i, Da = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, wa = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ss(e) {
  var t, s, r = e._i, a = ca.exec(r) || ma.exec(r), n, i, u, d, m = Ve.length, _ = ht.length;
  if (a) {
    for (y(e).iso = !0, t = 0, s = m; t < s; t++)
      if (Ve[t][1].exec(a[1])) {
        i = Ve[t][0], n = Ve[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = _; t < s; t++)
        if (ht[t][1].exec(a[3])) {
          u = (a[2] || " ") + ht[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (_a.exec(a[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (d || ""), Ct(e);
  } else
    e._isValid = !1;
}
function Sa(e, t, s, r, a, n) {
  var i = [
    Ma(e),
    us.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Ma(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ka(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function ga(e, t, s) {
  if (e) {
    var r = _s.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return y(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Ya(e, t, s) {
  if (e)
    return wa[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function Ms(e) {
  var t = Da.exec(ka(e._i)), s;
  if (t) {
    if (s = Sa(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !ga(t[1], s, e))
      return;
    e._a = s, e._tzm = Ya(t[8], t[9], t[10]), e._d = Pe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Oa(e) {
  var t = ya.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ss(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ms(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : o.createFromInputFallback(e);
}
o.createFromInputFallback = L(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Se(e, t, s) {
  return e ?? t ?? s;
}
function pa(e) {
  var t = new Date(o.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function At(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = pa(e), e._w && e._a[B] == null && e._a[ee] == null && va(e), e._dayOfYear != null && (i = Se(e._a[R], a[R]), (e._dayOfYear > be(i) || e._dayOfYear === 0) && (y(e)._overflowDayOfYear = !0), s = Pe(i, 0, e._dayOfYear), e._a[ee] = s.getUTCMonth(), e._a[B] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[b] === 24 && e._a[V] === 0 && e._a[te] === 0 && e._a[ce] === 0 && (e._nextDay = !0, e._a[b] = 0), e._d = (e._useUTC ? Pe : Er).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[b] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (y(e).weekdayMismatch = !0);
  }
}
function va(e) {
  var t, s, r, a, n, i, u, d, m;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = Se(
    t.GG,
    e._a[R],
    Fe(p(), 1, 4).year
  ), r = Se(t.W, 1), a = Se(t.E, 1), (a < 1 || a > 7) && (d = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, m = Fe(p(), n, i), s = Se(t.gg, e._a[R], m.year), r = Se(t.w, m.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (d = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (d = !0)) : a = n), r < 1 || r > re(s, n, i) ? y(e)._overflowWeeks = !0 : d != null ? y(e)._overflowWeekday = !0 : (u = ms(s, r, a, n, i), e._a[R] = u.year, e._dayOfYear = u.dayOfYear);
}
o.ISO_8601 = function() {
};
o.RFC_2822 = function() {
};
function Ct(e) {
  if (e._f === o.ISO_8601) {
    Ss(e);
    return;
  }
  if (e._f === o.RFC_2822) {
    Ms(e);
    return;
  }
  e._a = [], y(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, d = 0, m, _;
  for (a = ss(e._f, e._locale).match(vt) || [], _ = a.length, s = 0; s < _; s++)
    n = a[s], r = (t.match(cr(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && y(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), ke[n] ? (r ? y(e).empty = !1 : y(e).unusedTokens.push(n), _r(n, r, e)) : e._strict && !r && y(e).unusedTokens.push(n);
  y(e).charsLeftOver = u - d, t.length > 0 && y(e).unusedInput.push(t), e._a[b] <= 12 && y(e).bigHour === !0 && e._a[b] > 0 && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[b] = Ta(
    e._locale,
    e._a[b],
    e._meridiem
  ), m = y(e).era, m !== null && (e._a[R] = e._locale.erasConvertYear(m, e._a[R])), At(e), It(e);
}
function Ta(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Na(e) {
  var t, s, r, a, n, i, u = !1, d = e._f.length;
  if (d === 0) {
    y(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < d; a++)
    n = 0, i = !1, t = Ot({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ct(t), Yt(t) && (i = !0), n += y(t).charsLeftOver, n += y(t).unusedTokens.length * 10, y(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  ue(e, s || t);
}
function xa(e) {
  if (!e._d) {
    var t = Tt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Xt(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), At(e);
  }
}
function Wa(e) {
  var t = new Ce(It(ks(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ks(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ne(e._l), t === null || s === void 0 && t === "" ? Qe({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), $(t) ? new Ce(It(t)) : (Ae(t) ? e._d = t : G(s) ? Na(e) : s ? Ct(e) : ba(e), Yt(e) || (e._d = null), e));
}
function ba(e) {
  var t = e._i;
  P(t) ? e._d = new Date(o.now()) : Ae(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Oa(e) : G(t) ? (e._a = Xt(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), At(e)) : _e(t) ? xa(e) : ae(t) ? e._d = new Date(t) : o.createFromInputFallback(e);
}
function gs(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (_e(e) && gt(e) || G(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, Wa(n);
}
function p(e, t, s, r) {
  return gs(e, t, s, r, !1);
}
var Ea = L(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = p.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Qe();
  }
), Ra = L(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = p.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Qe();
  }
);
function Ys(e, t) {
  var s, r;
  if (t.length === 1 && G(t[0]) && (t = t[0]), !t.length)
    return p();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Pa() {
  var e = [].slice.call(arguments, 0);
  return Ys("isBefore", e);
}
function Fa() {
  var e = [].slice.call(arguments, 0);
  return Ys("isAfter", e);
}
var Ia = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, We = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Aa(e) {
  var t, s = !1, r, a = We.length;
  for (t in e)
    if (S(e, t) && !(x.call(We, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[We[r]]) {
      if (s)
        return !1;
      parseFloat(e[We[r]]) !== D(e[We[r]]) && (s = !0);
    }
  return !0;
}
function Ca() {
  return this._isValid;
}
function La() {
  return j(NaN);
}
function it(e) {
  var t = Tt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, d = t.minute || 0, m = t.second || 0, _ = t.millisecond || 0;
  this._isValid = Aa(t), this._milliseconds = +_ + m * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = ne(), this._bubble();
}
function je(e) {
  return e instanceof it;
}
function wt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Ua(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    D(e[i]) !== D(t[i]) && n++;
  return n + a;
}
function Os(e, t) {
  c(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + q(~~(s / 60), 2) + t + q(~~s % 60, 2);
  });
}
Os("Z", ":");
Os("ZZ", "");
f("Z", rt);
f("ZZ", rt);
Y(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Lt(rt, e);
});
var Ha = /([\+\-]|\d\d)/gi;
function Lt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(Ha) || ["-", 0, 0], n = +(a[1] * 60) + D(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Ut(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = ($(e) || Ae(e) ? e.valueOf() : p(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), o.updateOffset(s, !1), s) : p(e).local();
}
function St(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
o.updateOffset = function() {
};
function Va(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Lt(rt, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = St(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ts(
      this,
      j(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : St(this);
}
function Ga(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function $a(e) {
  return this.utcOffset(0, e);
}
function ja(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(St(this), "m")), this;
}
function za() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Lt(fr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Za(e) {
  return this.isValid() ? (e = e ? p(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Ba() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function qa() {
  if (!P(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ot(e, this), e = ks(e), e._a ? (t = e._isUTC ? J(e._a) : p(e._a), this._isDSTShifted = this.isValid() && Ua(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Ja() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ka() {
  return this.isValid() ? this._isUTC : !1;
}
function ps() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Qa = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Xa = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function j(e, t) {
  var s = e, r = null, a, n, i;
  return je(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ae(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Qa.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: D(r[B]) * a,
    h: D(r[b]) * a,
    m: D(r[V]) * a,
    s: D(r[te]) * a,
    ms: D(wt(r[ce] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = Xa.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: he(r[2], a),
    M: he(r[3], a),
    w: he(r[4], a),
    d: he(r[5], a),
    h: he(r[6], a),
    m: he(r[7], a),
    s: he(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = en(
    p(s.from),
    p(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new it(s), je(e) && S(e, "_locale") && (n._locale = e._locale), je(e) && S(e, "_isValid") && (n._isValid = e._isValid), n;
}
j.fn = it.prototype;
j.invalid = La;
function he(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function qt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function en(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Ut(t, e), e.isBefore(t) ? s = qt(e, t) : (s = qt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function vs(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (ts(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = j(s, r), Ts(this, a, e), this;
  };
}
function Ts(e, t, s, r) {
  var a = t._milliseconds, n = wt(t._days), i = wt(t._months);
  e.isValid() && (r = r ?? !0, i && fs(e, Re(e, "Month") + i * s), n && ls(e, "Date", Re(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && o.updateOffset(e, n || i));
}
var tn = vs(1, "add"), sn = vs(-1, "subtract");
function Ns(e) {
  return typeof e == "string" || e instanceof String;
}
function rn(e) {
  return $(e) || Ae(e) || Ns(e) || ae(e) || nn(e) || an(e) || e === null || e === void 0;
}
function an(e) {
  var t = _e(e) && !gt(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || S(e, n);
  return t && s;
}
function nn(e) {
  var t = G(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !ae(r) && Ns(e);
  }).length === 0), t && s;
}
function on(e) {
  var t = _e(e) && !gt(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || S(e, n);
  return t && s;
}
function ln(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function un(e, t) {
  arguments.length === 1 && (arguments[0] ? rn(arguments[0]) ? (e = arguments[0], t = void 0) : on(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || p(), r = Ut(s, this).startOf("day"), a = o.calendarFormat(this, r) || "sameElse", n = t && (K(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, p(s))
  );
}
function dn() {
  return new Ce(this);
}
function fn(e, t) {
  var s = $(e) ? e : p(e);
  return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function hn(e, t) {
  var s = $(e) ? e : p(e);
  return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function cn(e, t, s, r) {
  var a = $(e) ? e : p(e), n = $(t) ? t : p(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function mn(e, t) {
  var s = $(e) ? e : p(e), r;
  return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function _n(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function yn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Dn(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = Ut(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = U(t), t) {
    case "year":
      n = ze(this, r) / 12;
      break;
    case "month":
      n = ze(this, r);
      break;
    case "quarter":
      n = ze(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - a) / 864e5;
      break;
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : C(n);
}
function ze(e, t) {
  if (e.date() < t.date())
    return -ze(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function wn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Sn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? $e(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : K(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", $e(s, "Z")) : $e(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Mn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function kn(e) {
  e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
  var t = $e(this, e);
  return this.localeData().postformat(t);
}
function gn(e, t) {
  return this.isValid() && ($(e) && e.isValid() || p(e).isValid()) ? j({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Yn(e) {
  return this.from(p(), e);
}
function On(e, t) {
  return this.isValid() && ($(e) && e.isValid() || p(e).isValid()) ? j({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function pn(e) {
  return this.to(p(), e);
}
function xs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ne(e), t != null && (this._locale = t), this);
}
var Ws = L(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function bs() {
  return this._locale;
}
var qe = 1e3, ge = 60 * qe, Je = 60 * ge, Es = (365 * 400 + 97) * 24 * Je;
function Ye(e, t) {
  return (e % t + t) % t;
}
function Rs(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Es : new Date(e, t, s).valueOf();
}
function Ps(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Es : Date.UTC(e, t, s);
}
function vn(e) {
  var t, s;
  if (e = U(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Ps : Rs, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Ye(
        t + (this._isUTC ? 0 : this.utcOffset() * ge),
        Je
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ye(t, ge);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ye(t, qe);
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function Tn(e) {
  var t, s;
  if (e = U(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Ps : Rs, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Je - Ye(
        t + (this._isUTC ? 0 : this.utcOffset() * ge),
        Je
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ge - Ye(t, ge) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += qe - Ye(t, qe) - 1;
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function Nn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function xn() {
  return Math.floor(this.valueOf() / 1e3);
}
function Wn() {
  return new Date(this.valueOf());
}
function bn() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function En() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Rn() {
  return this.isValid() ? this.toISOString() : null;
}
function Pn() {
  return Yt(this);
}
function Fn() {
  return ue({}, y(this));
}
function In() {
  return y(this).overflow;
}
function An() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
c("N", 0, 0, "eraAbbr");
c("NN", 0, 0, "eraAbbr");
c("NNN", 0, 0, "eraAbbr");
c("NNNN", 0, 0, "eraName");
c("NNNNN", 0, 0, "eraNarrow");
c("y", ["y", 1], "yo", "eraYear");
c("y", ["yy", 2], 0, "eraYear");
c("y", ["yyy", 3], 0, "eraYear");
c("y", ["yyyy", 4], 0, "eraYear");
f("N", Ht);
f("NN", Ht);
f("NNN", Ht);
f("NNNN", Bn);
f("NNNNN", qn);
Y(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? y(s).era = a : y(s).invalidEra = e;
  }
);
f("y", Oe);
f("yy", Oe);
f("yyy", Oe);
f("yyyy", Oe);
f("yo", Jn);
Y(["y", "yy", "yyy", "yyyy"], R);
Y(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[R] = s._locale.eraYearOrdinalParse(e, a) : t[R] = parseInt(e, 10);
});
function Cn(e, t) {
  var s, r, a, n = this._eras || ne("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = o(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = o(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function Ln(e, t, s) {
  var r, a, n = this.eras(), i, u, d;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), d = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (d === e)
            return n[r];
          break;
      }
    else if ([i, u, d].indexOf(e) >= 0)
      return n[r];
}
function Un(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? o(e.since).year() : o(e.since).year() + (t - e.offset) * s;
}
function Hn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Vn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Gn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function $n() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - o(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function jn(e) {
  return S(this, "_erasNameRegex") || Vt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function zn(e) {
  return S(this, "_erasAbbrRegex") || Vt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Zn(e) {
  return S(this, "_erasNarrowRegex") || Vt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ht(e, t) {
  return t.erasAbbrRegex(e);
}
function Bn(e, t) {
  return t.erasNameRegex(e);
}
function qn(e, t) {
  return t.erasNarrowRegex(e);
}
function Jn(e, t) {
  return t._eraYearOrdinalRegex || Oe;
}
function Vt() {
  var e = [], t = [], s = [], r = [], a, n, i, u, d, m = this.eras();
  for (a = 0, n = m.length; a < n; ++a)
    i = se(m[a].name), u = se(m[a].abbr), d = se(m[a].narrow), t.push(i), e.push(u), s.push(d), r.push(i), r.push(u), r.push(d);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
c(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
c(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function ot(e, t) {
  c(0, [e, e.length], 0, t);
}
ot("gggg", "weekYear");
ot("ggggg", "weekYear");
ot("GGGG", "isoWeekYear");
ot("GGGGG", "isoWeekYear");
f("G", st);
f("g", st);
f("GG", v, I);
f("gg", v, I);
f("GGGG", xt, Nt);
f("gggg", xt, Nt);
f("GGGGG", tt, Xe);
f("ggggg", tt, Xe);
Ue(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = D(e);
  }
);
Ue(["gg", "GG"], function(e, t, s, r) {
  t[r] = o.parseTwoDigitYear(e);
});
function Kn(e) {
  return Fs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Qn(e) {
  return Fs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Xn() {
  return re(this.year(), 1, 4);
}
function ei() {
  return re(this.isoWeekYear(), 1, 4);
}
function ti() {
  var e = this.localeData()._week;
  return re(this.year(), e.dow, e.doy);
}
function si() {
  var e = this.localeData()._week;
  return re(this.weekYear(), e.dow, e.doy);
}
function Fs(e, t, s, r, a) {
  var n;
  return e == null ? Fe(this, r, a).year : (n = re(e, r, a), t > n && (t = n), ri.call(this, e, t, s, r, a));
}
function ri(e, t, s, r, a) {
  var n = ms(e, t, s, r, a), i = Pe(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
c("Q", 0, "Qo", "quarter");
f("Q", rs);
Y("Q", function(e, t) {
  t[ee] = (D(e) - 1) * 3;
});
function ai(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
c("D", ["DD", 2], "Do", "date");
f("D", v, pe);
f("DD", v, I);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Y(["D", "DD"], B);
Y("Do", function(e, t) {
  t[B] = D(e.match(v)[0]);
});
var Is = ve("Date", !0);
c("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
f("DDD", et);
f("DDDD", as);
Y(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = D(e);
});
function ni(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
c("m", ["mm", 2], 0, "minute");
f("m", v, Wt);
f("mm", v, I);
Y(["m", "mm"], V);
var ii = ve("Minutes", !1);
c("s", ["ss", 2], 0, "second");
f("s", v, Wt);
f("ss", v, I);
Y(["s", "ss"], te);
var oi = ve("Seconds", !1);
c("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
c(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
c(0, ["SSS", 3], 0, "millisecond");
c(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
c(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
c(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
c(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
c(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
c(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
f("S", et, rs);
f("SS", et, I);
f("SSS", et, as);
var de, As;
for (de = "SSSS"; de.length <= 9; de += "S")
  f(de, Oe);
function li(e, t) {
  t[ce] = D(("0." + e) * 1e3);
}
for (de = "S"; de.length <= 9; de += "S")
  Y(de, li);
As = ve("Milliseconds", !1);
c("z", 0, 0, "zoneAbbr");
c("zz", 0, 0, "zoneName");
function ui() {
  return this._isUTC ? "UTC" : "";
}
function di() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Ce.prototype;
l.add = tn;
l.calendar = un;
l.clone = dn;
l.diff = Dn;
l.endOf = Tn;
l.format = kn;
l.from = gn;
l.fromNow = Yn;
l.to = On;
l.toNow = pn;
l.get = Sr;
l.invalidAt = In;
l.isAfter = fn;
l.isBefore = hn;
l.isBetween = cn;
l.isSame = mn;
l.isSameOrAfter = _n;
l.isSameOrBefore = yn;
l.isValid = Pn;
l.lang = Ws;
l.locale = xs;
l.localeData = bs;
l.max = Ra;
l.min = Ea;
l.parsingFlags = Fn;
l.set = Mr;
l.startOf = vn;
l.subtract = sn;
l.toArray = bn;
l.toObject = En;
l.toDate = Wn;
l.toISOString = Sn;
l.inspect = Mn;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Rn;
l.toString = wn;
l.unix = xn;
l.valueOf = Nn;
l.creationData = An;
l.eraName = Hn;
l.eraNarrow = Vn;
l.eraAbbr = Gn;
l.eraYear = $n;
l.year = os;
l.isLeapYear = wr;
l.weekYear = Kn;
l.isoWeekYear = Qn;
l.quarter = l.quarters = ai;
l.month = hs;
l.daysInMonth = xr;
l.week = l.weeks = Ar;
l.isoWeek = l.isoWeeks = Cr;
l.weeksInYear = ti;
l.weeksInWeekYear = si;
l.isoWeeksInYear = Xn;
l.isoWeeksInISOWeekYear = ei;
l.date = Is;
l.day = l.days = Kr;
l.weekday = Qr;
l.isoWeekday = Xr;
l.dayOfYear = ni;
l.hour = l.hours = ia;
l.minute = l.minutes = ii;
l.second = l.seconds = oi;
l.millisecond = l.milliseconds = As;
l.utcOffset = Va;
l.utc = $a;
l.local = ja;
l.parseZone = za;
l.hasAlignedHourOffset = Za;
l.isDST = Ba;
l.isLocal = Ja;
l.isUtcOffset = Ka;
l.isUtc = ps;
l.isUTC = ps;
l.zoneAbbr = ui;
l.zoneName = di;
l.dates = L(
  "dates accessor is deprecated. Use date instead.",
  Is
);
l.months = L(
  "months accessor is deprecated. Use month instead",
  hs
);
l.years = L(
  "years accessor is deprecated. Use year instead",
  os
);
l.zone = L(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ga
);
l.isDSTShifted = L(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  qa
);
function fi(e) {
  return p(e * 1e3);
}
function hi() {
  return p.apply(null, arguments).parseZone();
}
function Cs(e) {
  return e;
}
var M = pt.prototype;
M.calendar = Js;
M.longDateFormat = er;
M.invalidDate = sr;
M.ordinal = nr;
M.preparse = Cs;
M.postformat = Cs;
M.relativeTime = or;
M.pastFuture = lr;
M.set = Bs;
M.eras = Cn;
M.erasParse = Ln;
M.erasConvertYear = Un;
M.erasAbbrRegex = zn;
M.erasNameRegex = jn;
M.erasNarrowRegex = Zn;
M.months = pr;
M.monthsShort = vr;
M.monthsParse = Nr;
M.monthsRegex = br;
M.monthsShortRegex = Wr;
M.week = Rr;
M.firstDayOfYear = Ir;
M.firstDayOfWeek = Fr;
M.weekdays = zr;
M.weekdaysMin = Br;
M.weekdaysShort = Zr;
M.weekdaysParse = Jr;
M.weekdaysRegex = ea;
M.weekdaysShortRegex = ta;
M.weekdaysMinRegex = sa;
M.isPM = aa;
M.meridiem = oa;
function Ke(e, t, s, r) {
  var a = ne(), n = J().set(r, t);
  return a[s](n, e);
}
function Ls(e, t, s) {
  if (ae(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ke(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ke(e, r, s, "month");
  return a;
}
function Gt(e, t, s, r) {
  typeof e == "boolean" ? (ae(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, ae(t) && (s = t, t = void 0), t = t || "");
  var a = ne(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return Ke(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = Ke(t, (i + n) % 7, r, "day");
  return u;
}
function ci(e, t) {
  return Ls(e, t, "months");
}
function mi(e, t) {
  return Ls(e, t, "monthsShort");
}
function _i(e, t, s) {
  return Gt(e, t, s, "weekdays");
}
function yi(e, t, s) {
  return Gt(e, t, s, "weekdaysShort");
}
function Di(e, t, s) {
  return Gt(e, t, s, "weekdaysMin");
}
fe("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = D(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
o.lang = L(
  "moment.lang is deprecated. Use moment.locale instead.",
  fe
);
o.langData = L(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ne
);
var Q = Math.abs;
function wi() {
  var e = this._data;
  return this._milliseconds = Q(this._milliseconds), this._days = Q(this._days), this._months = Q(this._months), e.milliseconds = Q(e.milliseconds), e.seconds = Q(e.seconds), e.minutes = Q(e.minutes), e.hours = Q(e.hours), e.months = Q(e.months), e.years = Q(e.years), this;
}
function Us(e, t, s, r) {
  var a = j(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function Si(e, t) {
  return Us(this, e, t, 1);
}
function Mi(e, t) {
  return Us(this, e, t, -1);
}
function Jt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ki() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, d;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Jt(Mt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = C(e / 1e3), r.seconds = a % 60, n = C(a / 60), r.minutes = n % 60, i = C(n / 60), r.hours = i % 24, t += C(i / 24), d = C(Hs(t)), s += d, t -= Jt(Mt(d)), u = C(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function Hs(e) {
  return e * 4800 / 146097;
}
function Mt(e) {
  return e * 146097 / 4800;
}
function gi(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = U(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Hs(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(Mt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ie(e) {
  return function() {
    return this.as(e);
  };
}
var Vs = ie("ms"), Yi = ie("s"), Oi = ie("m"), pi = ie("h"), vi = ie("d"), Ti = ie("w"), Ni = ie("M"), xi = ie("Q"), Wi = ie("y"), bi = Vs;
function Ei() {
  return j(this);
}
function Ri(e) {
  return e = U(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ye(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Pi = ye("milliseconds"), Fi = ye("seconds"), Ii = ye("minutes"), Ai = ye("hours"), Ci = ye("days"), Li = ye("months"), Ui = ye("years");
function Hi() {
  return C(this.days() / 7);
}
var X = Math.round, Me = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Vi(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Gi(e, t, s, r) {
  var a = j(e).abs(), n = X(a.as("s")), i = X(a.as("m")), u = X(a.as("h")), d = X(a.as("d")), m = X(a.as("M")), _ = X(a.as("w")), W = X(a.as("y")), h = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || d <= 1 && ["d"] || d < s.d && ["dd", d];
  return s.w != null && (h = h || _ <= 1 && ["w"] || _ < s.w && ["ww", _]), h = h || m <= 1 && ["M"] || m < s.M && ["MM", m] || W <= 1 && ["y"] || ["yy", W], h[2] = t, h[3] = +e > 0, h[4] = r, Vi.apply(null, h);
}
function $i(e) {
  return e === void 0 ? X : typeof e == "function" ? (X = e, !0) : !1;
}
function ji(e, t) {
  return Me[e] === void 0 ? !1 : t === void 0 ? Me[e] : (Me[e] = t, e === "s" && (Me.ss = t - 1), !0);
}
function zi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = Me, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, Me, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = Gi(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var ct = Math.abs;
function we(e) {
  return (e > 0) - (e < 0) || +e;
}
function lt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ct(this._milliseconds) / 1e3, t = ct(this._days), s = ct(this._months), r, a, n, i, u = this.asSeconds(), d, m, _, W;
  return u ? (r = C(e / 60), a = C(r / 60), e %= 60, r %= 60, n = C(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = u < 0 ? "-" : "", m = we(this._months) !== we(u) ? "-" : "", _ = we(this._days) !== we(u) ? "-" : "", W = we(this._milliseconds) !== we(u) ? "-" : "", d + "P" + (n ? m + n + "Y" : "") + (s ? m + s + "M" : "") + (t ? _ + t + "D" : "") + (a || r || e ? "T" : "") + (a ? W + a + "H" : "") + (r ? W + r + "M" : "") + (e ? W + i + "S" : "")) : "P0D";
}
var w = it.prototype;
w.isValid = Ca;
w.abs = wi;
w.add = Si;
w.subtract = Mi;
w.as = gi;
w.asMilliseconds = Vs;
w.asSeconds = Yi;
w.asMinutes = Oi;
w.asHours = pi;
w.asDays = vi;
w.asWeeks = Ti;
w.asMonths = Ni;
w.asQuarters = xi;
w.asYears = Wi;
w.valueOf = bi;
w._bubble = ki;
w.clone = Ei;
w.get = Ri;
w.milliseconds = Pi;
w.seconds = Fi;
w.minutes = Ii;
w.hours = Ai;
w.days = Ci;
w.weeks = Hi;
w.months = Li;
w.years = Ui;
w.humanize = zi;
w.toISOString = lt;
w.toString = lt;
w.toJSON = lt;
w.locale = xs;
w.localeData = bs;
w.toIsoString = L(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  lt
);
w.lang = Ws;
c("X", 0, 0, "unix");
c("x", 0, 0, "valueOf");
f("x", st);
f("X", hr);
Y("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
Y("x", function(e, t, s) {
  s._d = new Date(D(e));
});
//! moment.js
o.version = "2.30.1";
zs(p);
o.fn = l;
o.min = Pa;
o.max = Fa;
o.now = Ia;
o.utc = J;
o.unix = fi;
o.months = ci;
o.isDate = Ae;
o.locale = fe;
o.invalid = Qe;
o.duration = j;
o.isMoment = $;
o.weekdays = _i;
o.parseZone = hi;
o.localeData = ne;
o.isDuration = je;
o.monthsShort = mi;
o.weekdaysMin = Di;
o.defineLocale = Ft;
o.updateLocale = fa;
o.locales = ha;
o.weekdaysShort = yi;
o.normalizeUnits = U;
o.relativeTimeRounding = $i;
o.relativeTimeThreshold = ji;
o.calendarFormat = ln;
o.prototype = l;
o.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const me = o.weekdays().map((e) => e.slice(0, 3).toUpperCase()), kt = o.months().map((e) => e.slice(0, 3).toUpperCase()), Ee = [
  "FIRST",
  "SECOND",
  "THIRD",
  "FOURTH",
  "FIFTH",
  "LAST"
];
Array.from({ length: 31 }, (e, t) => t + 1);
Array.from({ length: 365 }, (e, t) => t + 1);
Array.from({ length: 12 }, (e, t) => t + 1);
const Zi = (e) => {
  const {
    STARTS_ON: t,
    ENDS_ON: s,
    FREQUENCY: r,
    MONTH_DATES: a = [],
    WEEK_ORDINALS: n = [],
    WEEK_DAYS: i = [],
    MONTH_NAMES: u = [],
    EXCLUDE_DATES: d = [],
    FORMAT: m = "DD-MM-YYYY"
  } = e;
  if (!t || !s) {
    let _ = o().startOf("month").format(m), W = o().endOf("month").format(m);
    return {
      isValid: !1,
      error: `Start Date and End Date are required 
Example: '${_}' and '${W}'`
    };
  }
  if (!o(t, m).isValid())
    return {
      isValid: !1,
      error: "Start Date is not valid Date"
    };
  if (!o(s, m).isValid())
    return {
      isValid: !1,
      error: "End Date is not valid Date"
    };
  if (o(t, m).isAfter(o(s, m)))
    return {
      isValid: !1,
      error: "Start Date must be before End Date"
    };
  if (r === "W" && i.length === 0)
    return {
      isValid: !1,
      error: `Week Days are required 
Example: ['MON', 'TUE', 'WED']`
    };
  if (r === "M" && a.length === 0)
    return {
      isValid: !1,
      error: `Dates are required 
Example: [1, 2, 3, 4]`
    };
  if (r === "Y") {
    if (u.length === 0)
      return {
        isValid: !1,
        error: `Months are required 
Example: ['JAN', 'FEB', 'MAR']`
      };
    if (n.length === 0)
      return {
        isValid: !1,
        error: `Days of Week are required 
Example: ['FIRST', 'THIRD', 'SECOND']`
      };
    if (i.length === 0)
      return {
        isValid: !1,
        error: `Week Days are required 
Example: ['MON', 'TUE', 'WED']`
      };
  }
  return d.length > 0 && d.forEach((_) => {
    if (!o(_, m).isValid())
      return {
        isValid: !1,
        error: "Exclude Dates are not valid Dates"
      };
  }), {
    isValid: !0,
    error: null
  };
}, le = (e, t, s, r = "DD-MM-YYYY") => o(e, r).isBetween(
  o(t, r),
  o(s, r),
  void 0,
  "[]"
), Bi = (e) => o().day(e).format("dddd"), Kt = (e, t, s) => {
  var r = o(e).startOf("month"), a = r.clone().weekday(t);
  return a.month() != r.month() && s++, a.add(s, "weeks");
}, Ge = (e, t, s) => {
  if (e === "D")
    return `Every ${t == 1 ? "day" : `${t} days`}`;
  if (e === "W") {
    const { WEEK_DAYS: r } = s;
    let a = "", n = r.sort(
      (u, d) => me.indexOf(u) - me.indexOf(d)
    ), i = r.length;
    return n.forEach((u, d) => {
      i === 1 ? a += `${u}` : i > 1 && d == i - 1 ? a += ` and ${u}` : d == i - 2 ? a += `${u}` : a += `${u}, `;
    }), `Every ${t == 1 ? "week" : `${t} weeks`} on ${a}`;
  } else if (e === "M") {
    const { MONTH_DATES: r } = s;
    let a = "", n = r.sort((u, d) => u - d), i = r.length;
    return n.forEach((u) => {
      let d = o(`${u}-01`, "DD-MM").format("Do");
      i === 1 ? a += ` ${d}.` : i > 1 && u == r[i - 1] ? a += ` and ${d}.` : u == r[i - 2] ? a += ` ${d}` : a += ` ${d},`;
    }), `Every ${t == 1 ? "month" : `${t} months`} on${a}`;
  } else if (e === "Y") {
    const { WEEK_ORDINALS: r, WEEK_DAYS: a, MONTH_NAMES: n } = s;
    let i = r.sort(
      (g, O) => Ee.indexOf(g) - Ee.indexOf(O)
    ), u = a.sort(
      (g, O) => me.indexOf(g) - me.indexOf(O)
    ), d = n.sort(
      (g, O) => kt.indexOf(g) - kt.indexOf(O)
    ), m = "", _ = "", W = "", h = r.length, k = a.length, F = n.length;
    return i.forEach((g, O) => {
      h === 1 ? m += `${g}` : h > 1 && O == h - 1 ? m += ` and ${g}` : O == h - 2 ? m += `${g}` : m += `${g}, `;
    }), u.forEach((g, O) => {
      k === 1 ? _ += `${g}` : k > 1 && O == k - 1 ? _ += ` and ${g}` : O == k - 2 ? _ += `${g}` : _ += `${g}, `;
    }), d.forEach((g, O) => {
      F === 1 ? W += `${g}` : F > 1 && O == F - 1 ? W += ` and ${g}` : O == F - 2 ? W += `${g}` : W += `${g}, `;
    }), `Every ${t == 1 ? "year" : `${t} years`} on ${m} ${_} of ${W}`;
  }
}, Gs = (e) => {
  let {
    STARTS_ON: t = null,
    ENDS_ON: s = null,
    FREQUENCY: r = "D",
    INTERVAL: a = 1,
    MONTH_DATES: n = [1],
    WEEK_ORDINALS: i = ["FIRST"],
    WEEK_DAYS: u = ["MON"],
    MONTH_NAMES: d = ["JAN"],
    EXCLUDE_DATES: m = [],
    FORMAT: _ = "DD-MM-YYYY"
  } = e, W = Zi(e);
  if (!W.isValid) {
    console.error(W.error);
    return;
  }
  let h = o(t, _), k = o(s, _), F = t, g = s, O = [], Te = "";
  if (r === "D")
    for (Te = Ge(r, a); h.isSameOrBefore(k); )
      O.push(h.format(_)), h.add(a, "days");
  else if (r === "W")
    if (Te = Ge(r, a, {
      WEEK_DAYS: u
    }), a == 1) {
      let E = [];
      for (; h.isSameOrBefore(k); ) {
        if (u.includes(
          h.format("dddd").slice(0, 3).toUpperCase()
        )) {
          let N = h.format(_);
          le(N, F, g, _) && E.push(N);
        }
        if (h.isSame(k))
          break;
        h.add(1, "days"), h.month() == k.month() && h.year() == k.year() && h.isAfter(k) && (h = k);
      }
      O = E;
    } else
      for (; h.isSameOrBefore(k); ) {
        let E = h.week(), H = h.year(), N = [];
        u.forEach((A) => {
          let z = o().day(Bi(A)).week(E).year(H).format(_);
          le(z, F, g, _) && N.push(z);
        }), O.push(...N), h.add(a, "weeks");
      }
  else if (r === "M")
    if (Te = Ge(r, a, {
      MONTH_DATES: n
    }), a === 1) {
      let E = [];
      for (; h.isSameOrBefore(k); ) {
        if (n.includes(
          parseInt(h.format("DD"))
        )) {
          let N = h.format(_);
          le(N, F, g, _) && E.push(N);
        }
        if (h.isSame(k))
          break;
        h.add(1, "day"), h.month() == k.month() && h.year() == k.year() && h.isAfter(k) && (h = k);
      }
      O = E;
    } else
      for (; h.isSameOrBefore(k); ) {
        let E = h.month(), H = h.year(), N = [];
        n.forEach((A) => {
          let z = o().date(A).month(E).year(H).format(_);
          le(z, F, g, _) && N.push(z);
        }), O.push(...N), h.add(a, "months");
      }
  else if (r === "Y") {
    let E = [];
    Ee.forEach((N, A) => {
      i.includes(N) && E.push(A);
    });
    let H = [];
    if (me.forEach((N, A) => {
      u.includes(N) && H.push(A);
    }), Te = Ge(r, a, {
      WEEK_ORDINALS: i,
      WEEK_DAYS: u,
      MONTH_NAMES: d
    }), a === 1) {
      let N = [];
      for (; h.isSameOrBefore(k) && (d.includes(
        h.format("MMM").toUpperCase()
      ) && E.forEach((z) => {
        let De = Ee[z];
        H.forEach((Ne) => {
          let ut = me[Ne], Z = Kt(
            o().month(h.month()).year(h.year()),
            Ne,
            z
          ).format(_);
          o(Z, _).month() === h.month() ? le(Z, F, g, _) && N.push(Z) : o(Z, _).month() === h.month() + 1 && De === "Last" && (Z = o().month(h.month()).year(h.year()).endOf("month").day(ut).format(_), le(Z, F, g, _) && N.push(Z));
        });
      }), !h.isSame(k)); )
        h.add(1, "months"), h.month() == k.month() && h.year() == k.year() && h.isAfter(k) && (h = k);
      O = N;
    } else
      for (; h.isSameOrBefore(k); ) {
        let N = h.year(), A = [];
        if (d.forEach((z) => {
          let De = kt.indexOf(z);
          E.forEach((Ne) => {
            let ut = Ee[Ne];
            H.forEach((Z) => {
              let $t = me[Z], oe = Kt(
                o().month(De).year(N),
                Z,
                Ne
              ).format(_);
              o(oe, _).month() === De ? le(oe, F, g, _) && A.push(oe) : o(oe, _).month() === De + 1 && ut === "Last" && (oe = o().month(De).year(N).endOf("month").day($t).format(_), le(oe, F, g, _) && A.push(oe));
            });
          });
        }), O.push(...A), h.isSame(k))
          break;
        h.add(a, "years"), h.year() == k.year() && h.isAfter(k) && (h = k);
      }
  }
  return O = O.sort((E, H) => o(E, _).diff(o(H, _))), m.length > 0 && (O = O.filter((E) => !m.includes(E))), {
    text: Te,
    dates: O
  };
}, Qi = (e) => js(() => Gs(e) || { text: "", dates: [] }, [e]), Xi = (e) => Gs(e) || { text: "", dates: [] };
export {
  Gs as generateRecurringDates,
  Xi as getRecurringDates,
  Qi as useRecurringDates
};
//# sourceMappingURL=index.es.js.map
