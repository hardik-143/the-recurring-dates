import { useMemo as Ks } from "react";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ns;
function o() {
  return ns.apply(null, arguments);
}
function Qs(e) {
  ns = e;
}
function j(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ye(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Y(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function xt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Y(e, t))
      return !1;
  return !0;
}
function F(e) {
  return e === void 0;
}
function le(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function He(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function is(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ce(e, t) {
  for (var s in t)
    Y(t, s) && (e[s] = t[s]);
  return Y(t, "toString") && (e.toString = t.toString), Y(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function J(e, t, s, r) {
  return xs(e, t, s, r, !0).utc();
}
function Xs() {
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
function _(e) {
  return e._pf == null && (e._pf = Xs()), e._pf;
}
var kt;
Array.prototype.some ? kt = Array.prototype.some : kt = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function bt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = _(e), s = kt.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function nt(e) {
  var t = J(NaN);
  return e != null ? ce(_(t), e) : _(t).userInvalidated = !0, t;
}
var Qt = o.momentProperties = [], Dt = !1;
function Wt(e, t) {
  var s, r, a, n = Qt.length;
  if (F(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), F(t._i) || (e._i = t._i), F(t._f) || (e._f = t._f), F(t._l) || (e._l = t._l), F(t._strict) || (e._strict = t._strict), F(t._tzm) || (e._tzm = t._tzm), F(t._isUTC) || (e._isUTC = t._isUTC), F(t._offset) || (e._offset = t._offset), F(t._pf) || (e._pf = _(t)), F(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = Qt[s], a = t[r], F(a) || (e[r] = a);
  return e;
}
function Ve(e) {
  Wt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Dt === !1 && (Dt = !0, o.updateOffset(this), Dt = !1);
}
function z(e) {
  return e instanceof Ve || e != null && e._isAMomentObject != null;
}
function os(e) {
  o.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function C(e, t) {
  var s = !0;
  return ce(function() {
    if (o.deprecationHandler != null && o.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            Y(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      os(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Xt = {};
function ls(e, t) {
  o.deprecationHandler != null && o.deprecationHandler(e, t), Xt[e] || (os(t), Xt[e] = !0);
}
o.suppressDeprecationWarnings = !1;
o.deprecationHandler = null;
function K(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function er(e) {
  var t, s;
  for (s in e)
    Y(e, s) && (t = e[s], K(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function gt(e, t) {
  var s = ce({}, e), r;
  for (r in t)
    Y(t, r) && (Ye(e[r]) && Ye(t[r]) ? (s[r] = {}, ce(s[r], e[r]), ce(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    Y(e, r) && !Y(t, r) && Ye(e[r]) && (s[r] = ce({}, s[r]));
  return s;
}
function Et(e) {
  e != null && this.set(e);
}
var vt;
Object.keys ? vt = Object.keys : vt = function(e) {
  var t, s = [];
  for (t in e)
    Y(e, t) && s.push(t);
  return s;
};
var tr = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function sr(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return K(r) ? r.call(t, s) : r;
}
function q(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Rt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, qe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Mt = {}, pe = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (pe[e] = a), t && (pe[t[0]] = function() {
    return q(a.apply(this, arguments), t[1], t[2]);
  }), s && (pe[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function rr(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ar(e) {
  var t = e.match(Rt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    pe[t[s]] ? t[s] = pe[t[s]] : t[s] = rr(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += K(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Ke(e, t) {
  return e.isValid() ? (t = us(t, e.localeData()), Mt[t] = Mt[t] || ar(t), Mt[t](e)) : e.localeData().invalidDate();
}
function us(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (qe.lastIndex = 0; s >= 0 && qe.test(e); )
    e = e.replace(
      qe,
      r
    ), qe.lastIndex = 0, s -= 1;
  return e;
}
var nr = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ir(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(Rt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var or = "Invalid date";
function lr() {
  return this._invalidDate;
}
var ur = "%d", dr = /\d{1,2}/;
function fr(e) {
  return this._ordinal.replace("%d", e);
}
var hr = {
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
function cr(e, t, s, r) {
  var a = this._relativeTime[s];
  return K(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function mr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return K(s) ? s(t) : s.replace(/%s/i, t);
}
var es = {
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
  return typeof e == "string" ? es[e] || es[e.toLowerCase()] : void 0;
}
function Pt(e) {
  var t = {}, s, r;
  for (r in e)
    Y(e, r) && (s = U(r), s && (t[s] = e[r]));
  return t;
}
var _r = {
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
function yr(e) {
  var t = [], s;
  for (s in e)
    Y(e, s) && t.push({ unit: s, priority: _r[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var ds = /\d/, I = /\d\d/, fs = /\d{3}/, Ft = /\d{4}/, it = /[+-]?\d{6}/, v = /\d\d?/, hs = /\d\d\d\d?/, cs = /\d\d\d\d\d\d?/, ot = /\d{1,3}/, It = /\d{1,4}/, lt = /[+-]?\d{1,6}/, Ne = /\d+/, ut = /[+-]?\d+/, Dr = /Z|[+-]\d\d:?\d\d/gi, dt = /Z|[+-]\d\d(?::?\d\d)?/gi, Mr = /[+-]?\d+(\.\d{1,3})?/, Ge = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, xe = /^[1-9]\d?/, At = /^([1-9]\d|\d)/, et;
et = {};
function d(e, t, s) {
  et[e] = K(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function Yr(e, t) {
  return Y(et, e) ? et[e](t._strict, t._locale) : new RegExp(wr(e));
}
function wr(e) {
  return ie(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function ie(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function L(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function D(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = L(t)), s;
}
var pt = {};
function k(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), le(t) && (r = function(n, i) {
    i[t] = D(n);
  }), a = e.length, s = 0; s < a; s++)
    pt[e[s]] = r;
}
function $e(e, t) {
  k(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function Sr(e, t, s) {
  t != null && Y(pt, e) && pt[e](t, s._a, s, e);
}
function ft(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var P = 0, ae = 1, B = 2, E = 3, $ = 4, ne = 5, Me = 6, kr = 7, gr = 8;
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? q(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", ut);
d("YY", v, I);
d("YYYY", It, Ft);
d("YYYYY", lt, it);
d("YYYYYY", lt, it);
k(["YYYYY", "YYYYYY"], P);
k("YYYY", function(e, t) {
  t[P] = e.length === 2 ? o.parseTwoDigitYear(e) : D(e);
});
k("YY", function(e, t) {
  t[P] = o.parseTwoDigitYear(e);
});
k("Y", function(e, t) {
  t[P] = parseInt(e, 10);
});
function Ie(e) {
  return ft(e) ? 366 : 365;
}
o.parseTwoDigitYear = function(e) {
  return D(e) + (D(e) > 68 ? 1900 : 2e3);
};
var ms = be("FullYear", !0);
function vr() {
  return ft(this.year());
}
function be(e, t) {
  return function(s) {
    return s != null ? (_s(this, e, s), o.updateOffset(this, t), this) : Ae(this, e);
  };
}
function Ae(e, t) {
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
function _s(e, t, s) {
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
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !ft(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function pr(e) {
  return e = U(e), K(this[e]) ? this[e]() : this;
}
function Or(e, t) {
  if (typeof e == "object") {
    e = Pt(e);
    var s = yr(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = U(e), K(this[e]))
    return this[e](t);
  return this;
}
function Tr(e, t) {
  return (e % t + t) % t;
}
var N;
Array.prototype.indexOf ? N = Array.prototype.indexOf : N = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Lt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Tr(t, 12);
  return e += (t - s) / 12, s === 1 ? ft(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
d("M", v, xe);
d("MM", v, I);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
k(["M", "MM"], function(e, t) {
  t[ae] = D(e) - 1;
});
k(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[ae] = a : _(s).invalidMonth = e;
});
var Nr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), ys = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ds = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, xr = Ge, br = Ge;
function Wr(e, t) {
  return e ? j(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ds).test(t) ? "format" : "standalone"][e.month()] : j(this._months) ? this._months : this._months.standalone;
}
function Er(e, t) {
  return e ? j(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ds.test(t) ? "format" : "standalone"][e.month()] : j(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Rr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = J([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = N.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = N.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = N.call(this._shortMonthsParse, i), a !== -1 ? a : (a = N.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = N.call(this._longMonthsParse, i), a !== -1 ? a : (a = N.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Pr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return Rr.call(this, e, t, s);
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
function Ms(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = D(t);
    else if (t = e.localeData().monthsParse(t), !le(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Lt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function Ys(e) {
  return e != null ? (Ms(this, e), o.updateOffset(this, !0), this) : Ae(this, "Month");
}
function Fr() {
  return Lt(this.year(), this.month());
}
function Ir(e) {
  return this._monthsParseExact ? (Y(this, "_monthsRegex") || ws.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Y(this, "_monthsShortRegex") || (this._monthsShortRegex = xr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Ar(e) {
  return this._monthsParseExact ? (Y(this, "_monthsRegex") || ws.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Y(this, "_monthsRegex") || (this._monthsRegex = br), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ws() {
  function e(c, m) {
    return m.length - c.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = J([2e3, a]), i = ie(this.monthsShort(n, "")), u = ie(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Lr(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function Le(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function tt(e, t, s) {
  var r = 7 + t - s, a = (7 + Le(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function Ss(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = tt(e, r, a), u = 1 + 7 * (t - 1) + n + i, c, m;
  return u <= 0 ? (c = e - 1, m = Ie(c) + u) : u > Ie(e) ? (c = e + 1, m = u - Ie(e)) : (c = e, m = u), {
    year: c,
    dayOfYear: m
  };
}
function Ce(e, t, s) {
  var r = tt(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + oe(i, t, s)) : a > oe(e.year(), t, s) ? (n = a - oe(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function oe(e, t, s) {
  var r = tt(e, t, s), a = tt(e + 1, t, s);
  return (Ie(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
d("w", v, xe);
d("ww", v, I);
d("W", v, xe);
d("WW", v, I);
$e(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = D(e);
  }
);
function Cr(e) {
  return Ce(e, this._week.dow, this._week.doy).week;
}
var Ur = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Hr() {
  return this._week.dow;
}
function Vr() {
  return this._week.doy;
}
function Gr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function $r(e) {
  var t = Ce(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
d("d", v);
d("e", v);
d("E", v);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
$e(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : _(s).invalidWeekday = e;
});
$e(["d", "e", "E"], function(e, t, s, r) {
  t[r] = D(e);
});
function jr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function zr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Ct(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Zr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ks = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Br = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), qr = Ge, Jr = Ge, Kr = Ge;
function Qr(e, t) {
  var s = j(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Ct(s, this._week.dow) : e ? s[e.day()] : s;
}
function Xr(e) {
  return e === !0 ? Ct(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ea(e) {
  return e === !0 ? Ct(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ta(e, t, s) {
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
  return s ? t === "dddd" ? (a = N.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = N.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = N.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = N.call(this._weekdaysParse, i), a !== -1 || (a = N.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = N.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = N.call(this._shortWeekdaysParse, i), a !== -1 || (a = N.call(this._weekdaysParse, i), a !== -1) ? a : (a = N.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = N.call(this._minWeekdaysParse, i), a !== -1 || (a = N.call(this._weekdaysParse, i), a !== -1) ? a : (a = N.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function sa(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return ta.call(this, e, t, s);
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
function ra(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ae(this, "Day");
  return e != null ? (e = jr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function aa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function na(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = zr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function ia(e) {
  return this._weekdaysParseExact ? (Y(this, "_weekdaysRegex") || Ut.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Y(this, "_weekdaysRegex") || (this._weekdaysRegex = qr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function oa(e) {
  return this._weekdaysParseExact ? (Y(this, "_weekdaysRegex") || Ut.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Jr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function la(e) {
  return this._weekdaysParseExact ? (Y(this, "_weekdaysRegex") || Ut.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ut() {
  function e(x, f) {
    return f.length - x.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, c, m;
  for (n = 0; n < 7; n++)
    i = J([2e3, 1]).day(n), u = ie(this.weekdaysMin(i, "")), c = ie(this.weekdaysShort(i, "")), m = ie(this.weekdays(i, "")), t.push(u), s.push(c), r.push(m), a.push(u), a.push(c), a.push(m);
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
function Ht() {
  return this.hours() % 12 || 12;
}
function ua() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, Ht);
h("k", ["kk", 2], 0, ua);
h("hmm", 0, 0, function() {
  return "" + Ht.apply(this) + q(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + Ht.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + q(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2);
});
function gs(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
gs("a", !0);
gs("A", !1);
function vs(e, t) {
  return t._meridiemParse;
}
d("a", vs);
d("A", vs);
d("H", v, At);
d("h", v, xe);
d("k", v, xe);
d("HH", v, I);
d("hh", v, I);
d("kk", v, I);
d("hmm", hs);
d("hmmss", cs);
d("Hmm", hs);
d("Hmmss", cs);
k(["H", "HH"], E);
k(["k", "kk"], function(e, t, s) {
  var r = D(e);
  t[E] = r === 24 ? 0 : r;
});
k(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
k(["h", "hh"], function(e, t, s) {
  t[E] = D(e), _(s).bigHour = !0;
});
k("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[E] = D(e.substr(0, r)), t[$] = D(e.substr(r)), _(s).bigHour = !0;
});
k("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[E] = D(e.substr(0, r)), t[$] = D(e.substr(r, 2)), t[ne] = D(e.substr(a)), _(s).bigHour = !0;
});
k("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[E] = D(e.substr(0, r)), t[$] = D(e.substr(r));
});
k("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[E] = D(e.substr(0, r)), t[$] = D(e.substr(r, 2)), t[ne] = D(e.substr(a));
});
function da(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var fa = /[ap]\.?m?\.?/i, ha = be("Hours", !0);
function ca(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var ps = {
  calendar: tr,
  longDateFormat: nr,
  invalidDate: or,
  ordinal: ur,
  dayOfMonthOrdinalParse: dr,
  relativeTime: hr,
  months: Nr,
  monthsShort: ys,
  week: Ur,
  weekdays: Zr,
  weekdaysMin: Br,
  weekdaysShort: ks,
  meridiemParse: fa
}, O = {}, Re = {}, Ue;
function ma(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function ts(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function _a(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = ts(e[t]).split("-"), s = n.length, r = ts(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = ht(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && ma(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Ue;
}
function ya(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ht(e) {
  var t = null, s;
  if (O[e] === void 0 && typeof module < "u" && module && module.exports && ya(e))
    try {
      t = Ue._abbr, s = require, s("./locale/" + e), _e(t);
    } catch {
      O[e] = null;
    }
  return O[e];
}
function _e(e, t) {
  var s;
  return e && (F(t) ? s = ue(e) : s = Vt(e, t), s ? Ue = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Ue._abbr;
}
function Vt(e, t) {
  if (t !== null) {
    var s, r = ps;
    if (t.abbr = e, O[e] != null)
      ls(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = O[e]._config;
    else if (t.parentLocale != null)
      if (O[t.parentLocale] != null)
        r = O[t.parentLocale]._config;
      else if (s = ht(t.parentLocale), s != null)
        r = s._config;
      else
        return Re[t.parentLocale] || (Re[t.parentLocale] = []), Re[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return O[e] = new Et(gt(r, t)), Re[e] && Re[e].forEach(function(a) {
      Vt(a.name, a.config);
    }), _e(e), O[e];
  } else
    return delete O[e], null;
}
function Da(e, t) {
  if (t != null) {
    var s, r, a = ps;
    O[e] != null && O[e].parentLocale != null ? O[e].set(gt(O[e]._config, t)) : (r = ht(e), r != null && (a = r._config), t = gt(a, t), r == null && (t.abbr = e), s = new Et(t), s.parentLocale = O[e], O[e] = s), _e(e);
  } else
    O[e] != null && (O[e].parentLocale != null ? (O[e] = O[e].parentLocale, e === _e() && _e(e)) : O[e] != null && delete O[e]);
  return O[e];
}
function ue(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Ue;
  if (!j(e)) {
    if (t = ht(e), t)
      return t;
    e = [e];
  }
  return _a(e);
}
function Ma() {
  return vt(O);
}
function Gt(e) {
  var t, s = e._a;
  return s && _(e).overflow === -2 && (t = s[ae] < 0 || s[ae] > 11 ? ae : s[B] < 1 || s[B] > Lt(s[P], s[ae]) ? B : s[E] < 0 || s[E] > 24 || s[E] === 24 && (s[$] !== 0 || s[ne] !== 0 || s[Me] !== 0) ? E : s[$] < 0 || s[$] > 59 ? $ : s[ne] < 0 || s[ne] > 59 ? ne : s[Me] < 0 || s[Me] > 999 ? Me : -1, _(e)._overflowDayOfYear && (t < P || t > B) && (t = B), _(e)._overflowWeeks && t === -1 && (t = kr), _(e)._overflowWeekday && t === -1 && (t = gr), _(e).overflow = t), e;
}
var Ya = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, wa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Sa = /Z|[+-]\d\d(?::?\d\d)?/, Je = [
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
], Yt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ka = /^\/?Date\((-?\d+)/i, ga = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, va = {
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
function Os(e) {
  var t, s, r = e._i, a = Ya.exec(r) || wa.exec(r), n, i, u, c, m = Je.length, x = Yt.length;
  if (a) {
    for (_(e).iso = !0, t = 0, s = m; t < s; t++)
      if (Je[t][1].exec(a[1])) {
        i = Je[t][0], n = Je[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = x; t < s; t++)
        if (Yt[t][1].exec(a[3])) {
          u = (a[2] || " ") + Yt[t][0];
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
      if (Sa.exec(a[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (c || ""), jt(e);
  } else
    e._isValid = !1;
}
function pa(e, t, s, r, a, n) {
  var i = [
    Oa(e),
    ys.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Oa(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Ta(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Na(e, t, s) {
  if (e) {
    var r = ks.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return _(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function xa(e, t, s) {
  if (e)
    return va[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function Ts(e) {
  var t = ga.exec(Ta(e._i)), s;
  if (t) {
    if (s = pa(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Na(t[1], s, e))
      return;
    e._a = s, e._tzm = xa(t[8], t[9], t[10]), e._d = Le.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ba(e) {
  var t = ka.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Os(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ts(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : o.createFromInputFallback(e);
}
o.createFromInputFallback = C(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ge(e, t, s) {
  return e ?? t ?? s;
}
function Wa(e) {
  var t = new Date(o.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function $t(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = Wa(e), e._w && e._a[B] == null && e._a[ae] == null && Ea(e), e._dayOfYear != null && (i = ge(e._a[P], a[P]), (e._dayOfYear > Ie(i) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), s = Le(i, 0, e._dayOfYear), e._a[ae] = s.getUTCMonth(), e._a[B] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[E] === 24 && e._a[$] === 0 && e._a[ne] === 0 && e._a[Me] === 0 && (e._nextDay = !0, e._a[E] = 0), e._d = (e._useUTC ? Le : Lr).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[E] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (_(e).weekdayMismatch = !0);
  }
}
function Ea(e) {
  var t, s, r, a, n, i, u, c, m;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = ge(
    t.GG,
    e._a[P],
    Ce(g(), 1, 4).year
  ), r = ge(t.W, 1), a = ge(t.E, 1), (a < 1 || a > 7) && (c = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, m = Ce(g(), n, i), s = ge(t.gg, e._a[P], m.year), r = ge(t.w, m.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (c = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (c = !0)) : a = n), r < 1 || r > oe(s, n, i) ? _(e)._overflowWeeks = !0 : c != null ? _(e)._overflowWeekday = !0 : (u = Ss(s, r, a, n, i), e._a[P] = u.year, e._dayOfYear = u.dayOfYear);
}
o.ISO_8601 = function() {
};
o.RFC_2822 = function() {
};
function jt(e) {
  if (e._f === o.ISO_8601) {
    Os(e);
    return;
  }
  if (e._f === o.RFC_2822) {
    Ts(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, c = 0, m, x;
  for (a = us(e._f, e._locale).match(Rt) || [], x = a.length, s = 0; s < x; s++)
    n = a[s], r = (t.match(Yr(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && _(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), pe[n] ? (r ? _(e).empty = !1 : _(e).unusedTokens.push(n), Sr(n, r, e)) : e._strict && !r && _(e).unusedTokens.push(n);
  _(e).charsLeftOver = u - c, t.length > 0 && _(e).unusedInput.push(t), e._a[E] <= 12 && _(e).bigHour === !0 && e._a[E] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[E] = Ra(
    e._locale,
    e._a[E],
    e._meridiem
  ), m = _(e).era, m !== null && (e._a[P] = e._locale.erasConvertYear(m, e._a[P])), $t(e), Gt(e);
}
function Ra(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Pa(e) {
  var t, s, r, a, n, i, u = !1, c = e._f.length;
  if (c === 0) {
    _(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < c; a++)
    n = 0, i = !1, t = Wt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], jt(t), bt(t) && (i = !0), n += _(t).charsLeftOver, n += _(t).unusedTokens.length * 10, _(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  ce(e, s || t);
}
function Fa(e) {
  if (!e._d) {
    var t = Pt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = is(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), $t(e);
  }
}
function Ia(e) {
  var t = new Ve(Gt(Ns(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ns(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ue(e._l), t === null || s === void 0 && t === "" ? nt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), z(t) ? new Ve(Gt(t)) : (He(t) ? e._d = t : j(s) ? Pa(e) : s ? jt(e) : Aa(e), bt(e) || (e._d = null), e));
}
function Aa(e) {
  var t = e._i;
  F(t) ? e._d = new Date(o.now()) : He(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ba(e) : j(t) ? (e._a = is(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), $t(e)) : Ye(t) ? Fa(e) : le(t) ? e._d = new Date(t) : o.createFromInputFallback(e);
}
function xs(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (Ye(e) && xt(e) || j(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, Ia(n);
}
function g(e, t, s, r) {
  return xs(e, t, s, r, !1);
}
var La = C(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = g.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : nt();
  }
), Ca = C(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = g.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : nt();
  }
);
function bs(e, t) {
  var s, r;
  if (t.length === 1 && j(t[0]) && (t = t[0]), !t.length)
    return g();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Ua() {
  var e = [].slice.call(arguments, 0);
  return bs("isBefore", e);
}
function Ha() {
  var e = [].slice.call(arguments, 0);
  return bs("isAfter", e);
}
var Va = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Pe = [
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
function Ga(e) {
  var t, s = !1, r, a = Pe.length;
  for (t in e)
    if (Y(e, t) && !(N.call(Pe, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Pe[r]]) {
      if (s)
        return !1;
      parseFloat(e[Pe[r]]) !== D(e[Pe[r]]) && (s = !0);
    }
  return !0;
}
function $a() {
  return this._isValid;
}
function ja() {
  return Z(NaN);
}
function ct(e) {
  var t = Pt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, c = t.minute || 0, m = t.second || 0, x = t.millisecond || 0;
  this._isValid = Ga(t), this._milliseconds = +x + m * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = ue(), this._bubble();
}
function Qe(e) {
  return e instanceof ct;
}
function Ot(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function za(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    D(e[i]) !== D(t[i]) && n++;
  return n + a;
}
function Ws(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + q(~~(s / 60), 2) + t + q(~~s % 60, 2);
  });
}
Ws("Z", ":");
Ws("ZZ", "");
d("Z", dt);
d("ZZ", dt);
k(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = zt(dt, e);
});
var Za = /([\+\-]|\d\d)/gi;
function zt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(Za) || ["-", 0, 0], n = +(a[1] * 60) + D(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Zt(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (z(e) || He(e) ? e.valueOf() : g(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), o.updateOffset(s, !1), s) : g(e).local();
}
function Tt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
o.updateOffset = function() {
};
function Ba(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = zt(dt, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = Tt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Ps(
      this,
      Z(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Tt(this);
}
function qa(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ja(e) {
  return this.utcOffset(0, e);
}
function Ka(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Tt(this), "m")), this;
}
function Qa() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = zt(Dr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Xa(e) {
  return this.isValid() ? (e = e ? g(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function en() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function tn() {
  if (!F(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Wt(e, this), e = Ns(e), e._a ? (t = e._isUTC ? J(e._a) : g(e._a), this._isDSTShifted = this.isValid() && za(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function sn() {
  return this.isValid() ? !this._isUTC : !1;
}
function rn() {
  return this.isValid() ? this._isUTC : !1;
}
function Es() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var an = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, nn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Z(e, t) {
  var s = e, r = null, a, n, i;
  return Qe(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : le(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = an.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: D(r[B]) * a,
    h: D(r[E]) * a,
    m: D(r[$]) * a,
    s: D(r[ne]) * a,
    ms: D(Ot(r[Me] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = nn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ye(r[2], a),
    M: ye(r[3], a),
    w: ye(r[4], a),
    d: ye(r[5], a),
    h: ye(r[6], a),
    m: ye(r[7], a),
    s: ye(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = on(
    g(s.from),
    g(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new ct(s), Qe(e) && Y(e, "_locale") && (n._locale = e._locale), Qe(e) && Y(e, "_isValid") && (n._isValid = e._isValid), n;
}
Z.fn = ct.prototype;
Z.invalid = ja;
function ye(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function ss(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function on(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Zt(t, e), e.isBefore(t) ? s = ss(e, t) : (s = ss(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Rs(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (ls(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = Z(s, r), Ps(this, a, e), this;
  };
}
function Ps(e, t, s, r) {
  var a = t._milliseconds, n = Ot(t._days), i = Ot(t._months);
  e.isValid() && (r = r ?? !0, i && Ms(e, Ae(e, "Month") + i * s), n && _s(e, "Date", Ae(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && o.updateOffset(e, n || i));
}
var ln = Rs(1, "add"), un = Rs(-1, "subtract");
function Fs(e) {
  return typeof e == "string" || e instanceof String;
}
function dn(e) {
  return z(e) || He(e) || Fs(e) || le(e) || hn(e) || fn(e) || e === null || e === void 0;
}
function fn(e) {
  var t = Ye(e) && !xt(e), s = !1, r = [
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
    n = r[a], s = s || Y(e, n);
  return t && s;
}
function hn(e) {
  var t = j(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !le(r) && Fs(e);
  }).length === 0), t && s;
}
function cn(e) {
  var t = Ye(e) && !xt(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || Y(e, n);
  return t && s;
}
function mn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function _n(e, t) {
  arguments.length === 1 && (arguments[0] ? dn(arguments[0]) ? (e = arguments[0], t = void 0) : cn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || g(), r = Zt(s, this).startOf("day"), a = o.calendarFormat(this, r) || "sameElse", n = t && (K(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, g(s))
  );
}
function yn() {
  return new Ve(this);
}
function Dn(e, t) {
  var s = z(e) ? e : g(e);
  return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Mn(e, t) {
  var s = z(e) ? e : g(e);
  return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Yn(e, t, s, r) {
  var a = z(e) ? e : g(e), n = z(t) ? t : g(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function wn(e, t) {
  var s = z(e) ? e : g(e), r;
  return this.isValid() && s.isValid() ? (t = U(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Sn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function kn(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function gn(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = Zt(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = U(t), t) {
    case "year":
      n = Xe(this, r) / 12;
      break;
    case "month":
      n = Xe(this, r);
      break;
    case "quarter":
      n = Xe(this, r) / 3;
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
  return s ? n : L(n);
}
function Xe(e, t) {
  if (e.date() < t.date())
    return -Xe(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function vn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function pn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Ke(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : K(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ke(s, "Z")) : Ke(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function On() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function Tn(e) {
  e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
  var t = Ke(this, e);
  return this.localeData().postformat(t);
}
function Nn(e, t) {
  return this.isValid() && (z(e) && e.isValid() || g(e).isValid()) ? Z({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function xn(e) {
  return this.from(g(), e);
}
function bn(e, t) {
  return this.isValid() && (z(e) && e.isValid() || g(e).isValid()) ? Z({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Wn(e) {
  return this.to(g(), e);
}
function Is(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ue(e), t != null && (this._locale = t), this);
}
var As = C(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ls() {
  return this._locale;
}
var st = 1e3, Oe = 60 * st, rt = 60 * Oe, Cs = (365 * 400 + 97) * 24 * rt;
function Te(e, t) {
  return (e % t + t) % t;
}
function Us(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Cs : new Date(e, t, s).valueOf();
}
function Hs(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Cs : Date.UTC(e, t, s);
}
function En(e) {
  var t, s;
  if (e = U(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Hs : Us, e) {
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
      t = this._d.valueOf(), t -= Te(
        t + (this._isUTC ? 0 : this.utcOffset() * Oe),
        rt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Te(t, Oe);
      break;
    case "second":
      t = this._d.valueOf(), t -= Te(t, st);
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function Rn(e) {
  var t, s;
  if (e = U(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Hs : Us, e) {
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
      t = this._d.valueOf(), t += rt - Te(
        t + (this._isUTC ? 0 : this.utcOffset() * Oe),
        rt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Oe - Te(t, Oe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += st - Te(t, st) - 1;
      break;
  }
  return this._d.setTime(t), o.updateOffset(this, !0), this;
}
function Pn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Fn() {
  return Math.floor(this.valueOf() / 1e3);
}
function In() {
  return new Date(this.valueOf());
}
function An() {
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
function Ln() {
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
function Cn() {
  return this.isValid() ? this.toISOString() : null;
}
function Un() {
  return bt(this);
}
function Hn() {
  return ce({}, _(this));
}
function Vn() {
  return _(this).overflow;
}
function Gn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
d("N", Bt);
d("NN", Bt);
d("NNN", Bt);
d("NNNN", ei);
d("NNNNN", ti);
k(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? _(s).era = a : _(s).invalidEra = e;
  }
);
d("y", Ne);
d("yy", Ne);
d("yyy", Ne);
d("yyyy", Ne);
d("yo", si);
k(["y", "yy", "yyy", "yyyy"], P);
k(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[P] = s._locale.eraYearOrdinalParse(e, a) : t[P] = parseInt(e, 10);
});
function $n(e, t) {
  var s, r, a, n = this._eras || ue("en")._eras;
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
function jn(e, t, s) {
  var r, a, n = this.eras(), i, u, c;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), c = n[r].narrow.toUpperCase(), s)
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
          if (c === e)
            return n[r];
          break;
      }
    else if ([i, u, c].indexOf(e) >= 0)
      return n[r];
}
function zn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? o(e.since).year() : o(e.since).year() + (t - e.offset) * s;
}
function Zn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Bn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function qn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function Jn() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - o(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Kn(e) {
  return Y(this, "_erasNameRegex") || qt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Qn(e) {
  return Y(this, "_erasAbbrRegex") || qt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Xn(e) {
  return Y(this, "_erasNarrowRegex") || qt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Bt(e, t) {
  return t.erasAbbrRegex(e);
}
function ei(e, t) {
  return t.erasNameRegex(e);
}
function ti(e, t) {
  return t.erasNarrowRegex(e);
}
function si(e, t) {
  return t._eraYearOrdinalRegex || Ne;
}
function qt() {
  var e = [], t = [], s = [], r = [], a, n, i, u, c, m = this.eras();
  for (a = 0, n = m.length; a < n; ++a)
    i = ie(m[a].name), u = ie(m[a].abbr), c = ie(m[a].narrow), t.push(i), e.push(u), s.push(c), r.push(i), r.push(u), r.push(c);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function mt(e, t) {
  h(0, [e, e.length], 0, t);
}
mt("gggg", "weekYear");
mt("ggggg", "weekYear");
mt("GGGG", "isoWeekYear");
mt("GGGGG", "isoWeekYear");
d("G", ut);
d("g", ut);
d("GG", v, I);
d("gg", v, I);
d("GGGG", It, Ft);
d("gggg", It, Ft);
d("GGGGG", lt, it);
d("ggggg", lt, it);
$e(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = D(e);
  }
);
$e(["gg", "GG"], function(e, t, s, r) {
  t[r] = o.parseTwoDigitYear(e);
});
function ri(e) {
  return Vs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function ai(e) {
  return Vs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ni() {
  return oe(this.year(), 1, 4);
}
function ii() {
  return oe(this.isoWeekYear(), 1, 4);
}
function oi() {
  var e = this.localeData()._week;
  return oe(this.year(), e.dow, e.doy);
}
function li() {
  var e = this.localeData()._week;
  return oe(this.weekYear(), e.dow, e.doy);
}
function Vs(e, t, s, r, a) {
  var n;
  return e == null ? Ce(this, r, a).year : (n = oe(e, r, a), t > n && (t = n), ui.call(this, e, t, s, r, a));
}
function ui(e, t, s, r, a) {
  var n = Ss(e, t, s, r, a), i = Le(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
d("Q", ds);
k("Q", function(e, t) {
  t[ae] = (D(e) - 1) * 3;
});
function di(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
d("D", v, xe);
d("DD", v, I);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
k(["D", "DD"], B);
k("Do", function(e, t) {
  t[B] = D(e.match(v)[0]);
});
var Gs = be("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", ot);
d("DDDD", fs);
k(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = D(e);
});
function fi(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
d("m", v, At);
d("mm", v, I);
k(["m", "mm"], $);
var hi = be("Minutes", !1);
h("s", ["ss", 2], 0, "second");
d("s", v, At);
d("ss", v, I);
k(["s", "ss"], ne);
var ci = be("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
d("S", ot, ds);
d("SS", ot, I);
d("SSS", ot, fs);
var me, $s;
for (me = "SSSS"; me.length <= 9; me += "S")
  d(me, Ne);
function mi(e, t) {
  t[Me] = D(("0." + e) * 1e3);
}
for (me = "S"; me.length <= 9; me += "S")
  k(me, mi);
$s = be("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function _i() {
  return this._isUTC ? "UTC" : "";
}
function yi() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Ve.prototype;
l.add = ln;
l.calendar = _n;
l.clone = yn;
l.diff = gn;
l.endOf = Rn;
l.format = Tn;
l.from = Nn;
l.fromNow = xn;
l.to = bn;
l.toNow = Wn;
l.get = pr;
l.invalidAt = Vn;
l.isAfter = Dn;
l.isBefore = Mn;
l.isBetween = Yn;
l.isSame = wn;
l.isSameOrAfter = Sn;
l.isSameOrBefore = kn;
l.isValid = Un;
l.lang = As;
l.locale = Is;
l.localeData = Ls;
l.max = Ca;
l.min = La;
l.parsingFlags = Hn;
l.set = Or;
l.startOf = En;
l.subtract = un;
l.toArray = An;
l.toObject = Ln;
l.toDate = In;
l.toISOString = pn;
l.inspect = On;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Cn;
l.toString = vn;
l.unix = Fn;
l.valueOf = Pn;
l.creationData = Gn;
l.eraName = Zn;
l.eraNarrow = Bn;
l.eraAbbr = qn;
l.eraYear = Jn;
l.year = ms;
l.isLeapYear = vr;
l.weekYear = ri;
l.isoWeekYear = ai;
l.quarter = l.quarters = di;
l.month = Ys;
l.daysInMonth = Fr;
l.week = l.weeks = Gr;
l.isoWeek = l.isoWeeks = $r;
l.weeksInYear = oi;
l.weeksInWeekYear = li;
l.isoWeeksInYear = ni;
l.isoWeeksInISOWeekYear = ii;
l.date = Gs;
l.day = l.days = ra;
l.weekday = aa;
l.isoWeekday = na;
l.dayOfYear = fi;
l.hour = l.hours = ha;
l.minute = l.minutes = hi;
l.second = l.seconds = ci;
l.millisecond = l.milliseconds = $s;
l.utcOffset = Ba;
l.utc = Ja;
l.local = Ka;
l.parseZone = Qa;
l.hasAlignedHourOffset = Xa;
l.isDST = en;
l.isLocal = sn;
l.isUtcOffset = rn;
l.isUtc = Es;
l.isUTC = Es;
l.zoneAbbr = _i;
l.zoneName = yi;
l.dates = C(
  "dates accessor is deprecated. Use date instead.",
  Gs
);
l.months = C(
  "months accessor is deprecated. Use month instead",
  Ys
);
l.years = C(
  "years accessor is deprecated. Use year instead",
  ms
);
l.zone = C(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  qa
);
l.isDSTShifted = C(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  tn
);
function Di(e) {
  return g(e * 1e3);
}
function Mi() {
  return g.apply(null, arguments).parseZone();
}
function js(e) {
  return e;
}
var w = Et.prototype;
w.calendar = sr;
w.longDateFormat = ir;
w.invalidDate = lr;
w.ordinal = fr;
w.preparse = js;
w.postformat = js;
w.relativeTime = cr;
w.pastFuture = mr;
w.set = er;
w.eras = $n;
w.erasParse = jn;
w.erasConvertYear = zn;
w.erasAbbrRegex = Qn;
w.erasNameRegex = Kn;
w.erasNarrowRegex = Xn;
w.months = Wr;
w.monthsShort = Er;
w.monthsParse = Pr;
w.monthsRegex = Ar;
w.monthsShortRegex = Ir;
w.week = Cr;
w.firstDayOfYear = Vr;
w.firstDayOfWeek = Hr;
w.weekdays = Qr;
w.weekdaysMin = ea;
w.weekdaysShort = Xr;
w.weekdaysParse = sa;
w.weekdaysRegex = ia;
w.weekdaysShortRegex = oa;
w.weekdaysMinRegex = la;
w.isPM = da;
w.meridiem = ca;
function at(e, t, s, r) {
  var a = ue(), n = J().set(r, t);
  return a[s](n, e);
}
function zs(e, t, s) {
  if (le(e) && (t = e, e = void 0), e = e || "", t != null)
    return at(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = at(e, r, s, "month");
  return a;
}
function Jt(e, t, s, r) {
  typeof e == "boolean" ? (le(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, le(t) && (s = t, t = void 0), t = t || "");
  var a = ue(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return at(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = at(t, (i + n) % 7, r, "day");
  return u;
}
function Yi(e, t) {
  return zs(e, t, "months");
}
function wi(e, t) {
  return zs(e, t, "monthsShort");
}
function Si(e, t, s) {
  return Jt(e, t, s, "weekdays");
}
function ki(e, t, s) {
  return Jt(e, t, s, "weekdaysShort");
}
function gi(e, t, s) {
  return Jt(e, t, s, "weekdaysMin");
}
_e("en", {
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
o.lang = C(
  "moment.lang is deprecated. Use moment.locale instead.",
  _e
);
o.langData = C(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ue
);
var se = Math.abs;
function vi() {
  var e = this._data;
  return this._milliseconds = se(this._milliseconds), this._days = se(this._days), this._months = se(this._months), e.milliseconds = se(e.milliseconds), e.seconds = se(e.seconds), e.minutes = se(e.minutes), e.hours = se(e.hours), e.months = se(e.months), e.years = se(e.years), this;
}
function Zs(e, t, s, r) {
  var a = Z(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function pi(e, t) {
  return Zs(this, e, t, 1);
}
function Oi(e, t) {
  return Zs(this, e, t, -1);
}
function rs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ti() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, c;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += rs(Nt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = L(e / 1e3), r.seconds = a % 60, n = L(a / 60), r.minutes = n % 60, i = L(n / 60), r.hours = i % 24, t += L(i / 24), c = L(Bs(t)), s += c, t -= rs(Nt(c)), u = L(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function Bs(e) {
  return e * 4800 / 146097;
}
function Nt(e) {
  return e * 146097 / 4800;
}
function Ni(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = U(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + Bs(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(Nt(this._months)), e) {
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
function de(e) {
  return function() {
    return this.as(e);
  };
}
var qs = de("ms"), xi = de("s"), bi = de("m"), Wi = de("h"), Ei = de("d"), Ri = de("w"), Pi = de("M"), Fi = de("Q"), Ii = de("y"), Ai = qs;
function Li() {
  return Z(this);
}
function Ci(e) {
  return e = U(e), this.isValid() ? this[e + "s"]() : NaN;
}
function we(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Ui = we("milliseconds"), Hi = we("seconds"), Vi = we("minutes"), Gi = we("hours"), $i = we("days"), ji = we("months"), zi = we("years");
function Zi() {
  return L(this.days() / 7);
}
var re = Math.round, ve = {
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
function Bi(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function qi(e, t, s, r) {
  var a = Z(e).abs(), n = re(a.as("s")), i = re(a.as("m")), u = re(a.as("h")), c = re(a.as("d")), m = re(a.as("M")), x = re(a.as("w")), f = re(a.as("y")), y = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || c <= 1 && ["d"] || c < s.d && ["dd", c];
  return s.w != null && (y = y || x <= 1 && ["w"] || x < s.w && ["ww", x]), y = y || m <= 1 && ["M"] || m < s.M && ["MM", m] || f <= 1 && ["y"] || ["yy", f], y[2] = t, y[3] = +e > 0, y[4] = r, Bi.apply(null, y);
}
function Ji(e) {
  return e === void 0 ? re : typeof e == "function" ? (re = e, !0) : !1;
}
function Ki(e, t) {
  return ve[e] === void 0 ? !1 : t === void 0 ? ve[e] : (ve[e] = t, e === "s" && (ve.ss = t - 1), !0);
}
function Qi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = ve, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, ve, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = qi(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var wt = Math.abs;
function ke(e) {
  return (e > 0) - (e < 0) || +e;
}
function _t() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = wt(this._milliseconds) / 1e3, t = wt(this._days), s = wt(this._months), r, a, n, i, u = this.asSeconds(), c, m, x, f;
  return u ? (r = L(e / 60), a = L(r / 60), e %= 60, r %= 60, n = L(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = u < 0 ? "-" : "", m = ke(this._months) !== ke(u) ? "-" : "", x = ke(this._days) !== ke(u) ? "-" : "", f = ke(this._milliseconds) !== ke(u) ? "-" : "", c + "P" + (n ? m + n + "Y" : "") + (s ? m + s + "M" : "") + (t ? x + t + "D" : "") + (a || r || e ? "T" : "") + (a ? f + a + "H" : "") + (r ? f + r + "M" : "") + (e ? f + i + "S" : "")) : "P0D";
}
var M = ct.prototype;
M.isValid = $a;
M.abs = vi;
M.add = pi;
M.subtract = Oi;
M.as = Ni;
M.asMilliseconds = qs;
M.asSeconds = xi;
M.asMinutes = bi;
M.asHours = Wi;
M.asDays = Ei;
M.asWeeks = Ri;
M.asMonths = Pi;
M.asQuarters = Fi;
M.asYears = Ii;
M.valueOf = Ai;
M._bubble = Ti;
M.clone = Li;
M.get = Ci;
M.milliseconds = Ui;
M.seconds = Hi;
M.minutes = Vi;
M.hours = Gi;
M.days = $i;
M.weeks = Zi;
M.months = ji;
M.years = zi;
M.humanize = Qi;
M.toISOString = _t;
M.toString = _t;
M.toJSON = _t;
M.locale = Is;
M.localeData = Ls;
M.toIsoString = C(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  _t
);
M.lang = As;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
d("x", ut);
d("X", Mr);
k("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
k("x", function(e, t, s) {
  s._d = new Date(D(e));
});
//! moment.js
o.version = "2.30.1";
Qs(g);
o.fn = l;
o.min = Ua;
o.max = Ha;
o.now = Va;
o.utc = J;
o.unix = Di;
o.months = Yi;
o.isDate = He;
o.locale = _e;
o.invalid = nt;
o.duration = Z;
o.isMoment = z;
o.weekdays = Si;
o.parseZone = Mi;
o.localeData = ue;
o.isDuration = Qe;
o.monthsShort = wi;
o.weekdaysMin = gi;
o.defineLocale = Vt;
o.updateLocale = Da;
o.locales = Ma;
o.weekdaysShort = ki;
o.normalizeUnits = U;
o.relativeTimeRounding = Ji;
o.relativeTimeThreshold = Ki;
o.calendarFormat = mn;
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
const De = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], St = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
], Fe = [
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
const Xi = (e) => {
  const {
    STARTS_ON: t,
    ENDS_ON: s,
    FREQUENCY: r,
    INTERVAL: a,
    MONTH_DATES: n = [],
    WEEK_ORDINALS: i = [],
    WEEK_DAYS: u = [],
    MONTH_NAMES: c = [],
    EXCLUDE_DATES: m = []
  } = e;
  if (!t || !s)
    return {
      isValid: !1,
      error: `Start Date and End Date are required 
Example: '01-01-2025' and '31-12-2025'`
    };
  if (!o(t, "DD-MM-YYYY").isValid())
    return {
      isValid: !1,
      error: "Start Date is not valid Date"
    };
  if (!o(s, "DD-MM-YYYY").isValid())
    return {
      isValid: !1,
      error: "End Date is not valid Date"
    };
  if (o(t, "DD-MM-YYYY").isAfter(o(s, "DD-MM-YYYY")))
    return {
      isValid: !1,
      error: "Start Date must be before End Date"
    };
  if (r === "W" && u.length === 0)
    return {
      isValid: !1,
      error: `Week Days are required 
Example: ['MON', 'TUE', 'WED']`
    };
  if (r === "M" && n.length === 0)
    return {
      isValid: !1,
      error: `Dates are required 
Example: [1, 2, 3, 4]`
    };
  if (r === "Y") {
    if (c.length === 0)
      return {
        isValid: !1,
        error: `Months are required 
Example: ['JAN', 'FEB', 'MAR']`
      };
    if (i.length === 0)
      return {
        isValid: !1,
        error: `Days of Week are required 
Example: ['FIRST', 'THIRD', 'SECOND']`
      };
    if (u.length === 0)
      return {
        isValid: !1,
        error: `Week Days are required 
Example: ['MON', 'TUE', 'WED']`
      };
  }
  return m.length > 0 && m.forEach((x) => {
    if (!o(x, "DD-MM-YYYY").isValid())
      return {
        isValid: !1,
        error: "Exclude Dates are not valid Dates"
      };
  }), {
    isValid: !0,
    error: null
  };
}, he = (e, t, s) => {
  let r = "DD-MM-YYYY";
  return o(e, r).isBetween(
    o(t, r),
    o(s, r),
    void 0,
    "[]"
  );
}, eo = (e) => o().day(e).format("dddd"), as = (e, t, s) => {
  var r = o(e).startOf("month"), a = r.clone().weekday(t);
  return a.month() != r.month() && s++, a.add(s, "weeks");
}, to = (e) => {
  let {
    STARTS_ON: t = null,
    ENDS_ON: s = null,
    FREQUENCY: r = "D",
    INTERVAL: a = 1,
    MONTH_DATES: n = [1],
    WEEK_ORDINALS: i = ["FIRST"],
    WEEK_DAYS: u = ["MON"],
    MONTH_NAMES: c = ["JAN"],
    EXCLUDE_DATES: m = []
  } = e, x = Xi(e);
  if (!x.isValid) {
    console.error(x.error);
    return;
  }
  let f = o(t, "DD-MM-YYYY"), y = o(s, "DD-MM-YYYY"), Q = t, X = s, A = [], We = "";
  if (r === "D")
    for (We = `Every ${a == 1 ? "day" : `${a} days`}`; f.isSameOrBefore(y); )
      A.push(f.format("DD-MM-YYYY")), f.add(a, "days");
  else if (r === "W") {
    let b = "", ee = u.sort(
      (p, W) => De.indexOf(p) - De.indexOf(W)
    ), H = u.length;
    if (ee.forEach((p, W) => {
      H === 1 ? b += `${p}` : H > 1 && W == H - 1 ? b += ` and ${p}` : W == H - 2 ? b += `${p}` : b += `${p}, `;
    }), We = `Every ${a == 1 ? "week" : `${a} weeks`} on ${b}`, a == 1) {
      let p = [];
      for (; f.isSameOrBefore(y); ) {
        if (u.includes(
          f.format("dddd").slice(0, 3).toUpperCase()
        )) {
          let R = f.format("DD-MM-YYYY");
          he(R, Q, X) && p.push(R);
        }
        if (f.isSame(y))
          break;
        f.add(1, "days"), f.month() == y.month() && f.year() == y.year() && f.isAfter(y) && (f = y);
      }
      A = p;
    } else
      for (; f.isSameOrBefore(y); ) {
        let p = f.week(), W = f.year(), R = [];
        u.forEach((te) => {
          let V = o().day(eo(te)).week(p).year(W).format("DD-MM-YYYY");
          he(V, Q, X) && R.push(V);
        }), A.push(...R), f.add(a, "weeks");
      }
  } else if (r === "M") {
    let b = "", ee = n.sort((p, W) => p - W), H = n.length;
    if (ee.forEach((p) => {
      let W = o(`${p}-01`, "DD-MM").format("Do");
      H === 1 ? b += ` ${W}.` : H > 1 && p == n[H - 1] ? b += ` and ${W}.` : p == n[H - 2] ? b += ` ${W}` : b += ` ${W},`;
    }), We = `Every ${a == 1 ? "month" : `${a} months`} on${b}`, a === 1) {
      let p = [];
      for (; f.isSameOrBefore(y); ) {
        if (n.includes(f.format("DD"))) {
          let R = f.format("DD-MM-YYYY");
          he(R, Q, X) && p.push(R);
        }
        if (f.isSame(y))
          break;
        f.add(1, "days"), f.month() == y.month() && f.year() == y.year() && f.isAfter(y) && (f = y);
      }
      A = p;
    } else
      for (; f.isSameOrBefore(y); ) {
        let p = f.month(), W = f.year(), R = [];
        n.forEach((te) => {
          let V = o().date(te).month(p).year(W).format("DD-MM-YYYY");
          he(V, Q, X) && R.push(V);
        }), A.push(...R), f.add(a, "months");
      }
  } else if (r === "Y") {
    let b = [];
    Fe.forEach((S, T) => {
      i.includes(S) && b.push(T);
    });
    let ee = [];
    De.forEach((S, T) => {
      u.includes(S) && ee.push(T);
    });
    let H = i.sort(
      (S, T) => Fe.indexOf(S) - Fe.indexOf(T)
    ), p = u.sort(
      (S, T) => De.indexOf(S) - De.indexOf(T)
    ), W = c.sort(
      (S, T) => St.indexOf(S) - St.indexOf(T)
    ), R = "", te = "", V = "", je = i.length, ze = u.length, Ze = c.length;
    if (H.forEach((S, T) => {
      je === 1 ? R += `${S}` : je > 1 && T == je - 1 ? R += ` and ${S}` : T == je - 2 ? R += `${S}` : R += `${S}, `;
    }), p.forEach((S, T) => {
      ze === 1 ? te += `${S}` : ze > 1 && T == ze - 1 ? te += ` and ${S}` : T == ze - 2 ? te += `${S}` : te += `${S}, `;
    }), W.forEach((S, T) => {
      Ze === 1 ? V += `${S}` : Ze > 1 && T == Ze - 1 ? V += ` and ${S}` : T == Ze - 2 ? V += `${S}` : V += `${S}, `;
    }), We = `Every ${a == 1 ? "year" : `${a} years`} on ${R} ${te} of ${V}`, a === 1) {
      let S = [];
      for (console.log("startDate ==>", f, y); f.isSameOrBefore(y) && (c.includes(
        f.format("MMM").toUpperCase()
      ) && b.forEach((Be) => {
        let Se = Fe[Be];
        ee.forEach((Ee) => {
          let yt = De[Ee], G = as(
            o().month(f.month()).year(f.year()),
            Ee,
            Be
          ).format("DD-MM-YYYY");
          o(G, "DD-MM-YYYY").month() === f.month() ? (console.log("isDateInMonth", G, Q, X), he(G, Q, X) && S.push(G)) : o(G, "DD-MM-YYYY").month() === f.month() + 1 && Se === "Last" && (G = o().month(f.month()).year(f.year()).endOf("month").day(yt).format("DD-MM-YYYY"), he(G, Q, X) && S.push(G));
        });
      }), !f.isSame(y)); )
        f.add(1, "months"), f.month() == y.month() && f.year() == y.year() && f.isAfter(y) && (f = y);
      A = S;
    } else
      for (; f.isSameOrBefore(y); ) {
        let S = f.year(), T = [];
        if (c.forEach((Be) => {
          let Se = St.indexOf(Be);
          b.forEach((Ee) => {
            let yt = Fe[Ee];
            ee.forEach((G) => {
              let Kt = De[G], fe = as(
                o().month(Se).year(S),
                G,
                Ee
              ).format("DD-MM-YYYY");
              o(fe, "DD-MM-YYYY").month() === Se ? he(fe, Q, X) && T.push(fe) : o(fe, "DD-MM-YYYY").month() === Se + 1 && yt === "Last" && (fe = o().month(Se).year(S).endOf("month").day(Kt).format("DD-MM-YYYY"), he(fe, Q, X) && T.push(fe));
            });
          });
        }), A.push(...T), f.isSame(y))
          break;
        f.add(a, "years"), f.year() == y.year() && f.isAfter(y) && (f = y);
      }
  }
  return A = A.sort(
    (b, ee) => o(b, "DD-MM-YYYY").diff(o(ee, "DD-MM-YYYY"))
  ), m.length > 0 && (A = A.filter((b) => !m.includes(b))), {
    text: We,
    dates: A
  };
}, no = (e) => Ks(() => to(e) || { text: "", dates: [] }, [e]);
export {
  to as generateRecurringDates,
  no as useRecurringDates
};
