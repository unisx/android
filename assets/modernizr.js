window.Modernizr = function (e, d, y) {
    function s(a, b) {
        for (var k in a)if (w[a[k]] !== y)return "pfx" == b ? a[k] : !0;
        return !1
    }

    function t(a, b, k) {
        var f = a.charAt(0).toUpperCase() + a.substr(1), d = (a + " " + x.join(f + " ") + f).split(" ");
        if ("string" === typeof b || "undefined" === typeof b)b = s(d, b); else {
            d = (a + " " + m.join(f + " ") + f).split(" ");
            a:{
                var a = d, g;
                for (g in a)if (f = b[a[g]], f !== y) {
                    b = !1 === k ? a[g] : "function" === typeof f ? f.bind(k || b) : f;
                    break a
                }
                b = !1
            }
        }
        return b
    }

    var c = {}, v = d.documentElement, i = d.createElement("modernizr"), w = i.style, z = ["",
        "-webkit-", "-moz-", "-o-", "-ms-"], x = ["Webkit", "Moz", "O", "ms"], m = ["webkit", "moz", "o", "ms"], i = {}, h = [], q = h.slice, o, u = function (a, b, k, f) {
        var r, g, j, c = d.createElement("div"), l = d.body, A = l ? l : d.createElement("body");
        if (parseInt(k, 10))for (; k--;)j = d.createElement("div"), j.id = f ? f[k] : "modernizr" + (k + 1), c.appendChild(j);
        return r = ["&#173;<style>", a, "</style>"].join(""), c.id = "modernizr", A.innerHTML += r, A.appendChild(c), l || (A.style.background = "", v.appendChild(A)), g = b(c, a), l ? c.parentNode.removeChild(c) : A.parentNode.removeChild(A),
            !!g
    }, a = {}.hasOwnProperty, r;
    "undefined" !== typeof a && "undefined" !== typeof a.call ? r = function (d, b) {
        return a.call(d, b)
    } : r = function (a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    };
    Function.prototype.bind || (Function.prototype.bind = function (a) {
        var b = this;
        if ("function" != typeof b)throw new TypeError;
        var k = q.call(arguments, 1), f = function () {
            if (this instanceof f) {
                var d = function () {
                };
                d.prototype = b.prototype;
                var d = new d, g = b.apply(d, k.concat(q.call(arguments)));
                return Object(g) === g ? g : d
            }
            return b.apply(a,
                k.concat(q.call(arguments)))
        };
        return f
    });
    (function (a, b) {
        var k = a.join(""), f = b.length;
        u(k, function (a, k) {
            for (var b = d.styleSheets[d.styleSheets.length - 1], b = b ? b.cssRules && b.cssRules[0] ? b.cssRules[0].cssText : b.cssText || "" : "", r = a.childNodes, l = {}; f--;)l[r[f].id] = r[f];
            c.touch = "ontouchstart"in e || e.DocumentTouch && d instanceof DocumentTouch || 9 === (l.touch && l.touch.offsetTop);
            c.csstransforms3d = 9 === (l.csstransforms3d && l.csstransforms3d.offsetLeft) && 3 === l.csstransforms3d.offsetHeight;
            c.fontface = /src/i.test(b) &&
                0 === b.indexOf(k.split(" ")[0])
        }, f, b)
    })(['@font-face {font-family:"font";src:url("https://")}', ["@media (", z.join("touch-enabled),("), "modernizr){#touch{top:9px;position:absolute}}"].join(""), ["@media (", z.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], ["fontface", "touch", "csstransforms3d"]);
    i.touch = function () {
        return c.touch
    };
    i.csstransforms = function () {
        return !!t("transform")
    };
    i.csstransforms3d = function () {
        var a = !!t("perspective");
        return a &&
        "webkitPerspective"in v.style && (a = c.csstransforms3d), a
    };
    i.csstransitions = function () {
        return t("transition")
    };
    i.fontface = function () {
        return c.fontface
    };
    for (var B in i)r(i, B) && (o = B.toLowerCase(), c[o] = i[B](), h.push((c[o] ? "" : "no-") + o));
    w.cssText = "";
    return i = null, c._version = "2.5.3", c._prefixes = z, c._domPrefixes = m, c._cssomPrefixes = x, c.mq = function (a) {
        var b = e.matchMedia || e.msMatchMedia;
        if (b)return b(a).matches;
        var k;
        return u("@media " + a + " { #modernizr { position: absolute; } }", function (a) {
            k = "absolute" == (e.getComputedStyle ?
                    getComputedStyle(a, null) : a.currentStyle).position
        }), k
    }, c.testProp = function (a) {
        return s([a])
    }, c.testAllProps = t, c.testStyles = u, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + h.join(" ")), c
}(this, this.document);
(function (e, d) {
    function y(a, d) {
        var c = a.createElement("p"), i = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + d + "</style>", i.insertBefore(c.lastChild, i.firstChild)
    }

    function s() {
        var a = h.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function t(a) {
        var d = {}, c = a.createElement, i = a.createDocumentFragment, b = i();
        a.createElement = function (a) {
            var f = (d[a] || (d[a] = c(a))).cloneNode();
            return h.shivMethods && f.canHaveChildren && !z.test(a) ? b.appendChild(f) : f
        };
        a.createDocumentFragment =
            Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/\w+/g, function (a) {
                    return d[a] = c(a), b.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(h, b)
    }

    function c(a) {
        var d;
        return a.documentShived ? a : (h.shivCSS && !x && (d = !!y(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),
        m || (d = !t(a)), d && (a.documentShived = d), a)
    }

    function v(a) {
        for (var d, c = a.attributes, i = c.length, b = a.ownerDocument.createElement(o + ":" + a.nodeName); i--;)d = c[i], d.specified && b.setAttribute(d.nodeName, d.nodeValue);
        return b.style.cssText = a.style.cssText, b
    }

    function i(a) {
        var d, c, i = a.namespaces, b = a.parentWindow;
        return !u || a.printShived ? a : ("undefined" == typeof i[o] && i.add(o), b.attachEvent("onbeforeprint", function () {
            var b, f, i;
            b = a.styleSheets;
            for (var g = [], j = b.length, h = Array(j); j--;)h[j] = b[j];
            for (; i = h.pop();)if (!i.disabled &&
                q.test(i.media)) {
                b = i.imports;
                j = 0;
                for (f = b.length; j < f; j++)h.push(b[j]);
                try {
                    g.push(i.cssText)
                } catch (l) {
                }
            }
            j = g.reverse().join("").split("{");
            h = j.length;
            b = RegExp("(^|[\\s,>+~])(" + s().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi");
            for (f = "$1" + o + "\\:$2"; h--;)g = j[h] = j[h].split("}"), g[g.length - 1] = g[g.length - 1].replace(b, f), j[h] = g.join("}");
            g = j.join("{");
            h = a.getElementsByTagName("*");
            b = h.length;
            f = RegExp("^(?:" + s().join("|") + ")$", "i");
            for (i = []; b--;)j = h[b], f.test(j.nodeName) && i.push(j.applyElement(v(j)));
            c = i;
            d = y(a, g)
        }),
            b.attachEvent("onafterprint", function () {
                for (var a = c, b = a.length; b--;)a[b].removeNode();
                d.removeNode(!0)
            }), a.printShived = !0, a)
    }

    var w = e.html5 || {}, z = /^<|^(?:button|form|map|select|textarea)$/i, x, m;
    (function () {
        var a = d.createElement("a");
        a.innerHTML = "<xyz></xyz>";
        x = "hidden"in a;
        if (!(a = 1 == a.childNodes.length))a:{
            try {
                d.createElement("a")
            } catch (c) {
                a = !0;
                break a
            }
            a = d.createDocumentFragment();
            a = "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
        }
        m =
            a
    })();
    var h = {
        elements: w.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: !1 !== w.shivCSS,
        shivMethods: !1 !== w.shivMethods,
        type: "default",
        shivDocument: c
    };
    e.html5 = h;
    c(d);
    var q = /^$|\b(?:all|print)\b/, o = "html5shiv", u = !m && function () {
            var a = d.documentElement;
            return "undefined" != typeof d.namespaces && "undefined" != typeof d.parentWindow && "undefined" != typeof a.applyElement && "undefined" != typeof a.removeNode &&
                "undefined" != typeof e.attachEvent
        }();
    h.type += " print";
    h.shivPrint = i;
    i(d)
})(this, document);
(function (e, d, y) {
    function s(a) {
        return "[object Function]" == o.call(a)
    }

    function t(a) {
        return "string" == typeof a
    }

    function c() {
    }

    function v(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function i() {
        var b = u.shift();
        a = 1;
        b ? b.t ? h(function () {
            ("c" == b.t ? l.injectCss : l.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
        }, 0) : (b(), i()) : a = 0
    }

    function w(b, c, f, j, k, e, p) {
        function F(d) {
            if (!G && v(n.readyState) && (o.r = G = 1, !a && i(), n.onload = n.onreadystatechange = null, d)) {
                "img" != b && h(function () {
                    D.removeChild(n)
                }, 50);
                for (var f in g[c])g[c].hasOwnProperty(f) &&
                g[c][f].onload()
            }
        }

        var p = p || l.errorTimeout, n = {}, G = 0, m = 0, o = {t: f, s: c, e: k, a: e, x: p};
        1 === g[c] && (m = 1, g[c] = [], n = d.createElement(b));
        "object" == b ? n.data = c : (n.src = c, n.type = b);
        n.width = n.height = "0";
        n.onerror = n.onload = n.onreadystatechange = function () {
            F.call(this, m)
        };
        u.splice(j, 0, o);
        "img" != b && (m || 2 === g[c] ? (D.insertBefore(n, B ? null : q), h(F, p)) : g[c].push(n))
    }

    function z(d, c, f, g, h) {
        return a = 0, c = c || "j", t(d) ? w("c" == c ? k : b, d, c, this.i++, f, g, h) : (u.splice(this.i++, 0, d), 1 == u.length && i()), this
    }

    function x() {
        var a = l;
        return a.loader =
        {load: z, i: 0}, a
    }

    var m = d.documentElement, h = e.setTimeout, q = d.getElementsByTagName("script")[0], o = {}.toString, u = [], a = 0, r = "MozAppearance"in m.style, B = r && !!d.createRange().compareNode, D = B ? m : q.parentNode, m = e.opera && "[object Opera]" == o.call(e.opera), m = !!d.attachEvent && !m, b = r ? "object" : m ? "script" : "img", k = m ? "script" : b, f = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, C = [], g = {}, j = {
        timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, E, l;
    l = function (a) {
        function b(a) {
            var a = a.split("!"), d = C.length,
                c = a.pop(), i = a.length, c = {url: c, origUrl: c, prefixes: a}, f, h, g;
            for (h = 0; h < i; h++)g = a[h].split("="), (f = j[g.shift()]) && (c = f(c, g));
            for (h = 0; h < d; h++)c = C[h](c);
            return c
        }

        function d(a, c, f, h, k) {
            var e = b(a), j = e.autoCallback;
            e.url.split(".").pop().split("?").shift();
            e.bypass || (c && (c = s(c) ? c : c[a] || c[h] || c[a.split("/").pop().split("?")[0]] || i), e.instead ? e.instead(a, c, f, h, k) : (g[e.url] ? e.noexec = !0 : g[e.url] = 1, f.load(e.url, e.forceCSS || !e.forceJS && "css" == e.url.split(".").pop().split("?").shift() ? "c" : y, e.noexec, e.attrs, e.timeout),
            (s(c) || s(j)) && f.load(function () {
                x();
                c && c(e.origUrl, k, h);
                j && j(e.origUrl, k, h);
                g[e.url] = 2
            })))
        }

        function h(a, b) {
            function f(a, c) {
                if (a)if (t(a))c || (g = function () {
                    var a = [].slice.call(arguments);
                    k.apply(this, a);
                    j()
                }), d(a, g, b, 0, e); else {
                    if (Object(a) === a)for (p in l = function () {
                        var b = 0, c;
                        for (c in a)a.hasOwnProperty(c) && b++;
                        return b
                    }(), a)a.hasOwnProperty(p) && (!c && !--l && (s(g) ? g = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a);
                        j()
                    } : g[p] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this,
                                b);
                            j()
                        }
                    }(k[p])), d(a[p], g, b, p, e))
                } else!c && j()
            }

            var e = !!a.test, i = a.load || a.both, g = a.callback || c, k = g, j = a.complete || c, l, p;
            f(e ? a.yep : a.nope, !!i);
            i && f(i)
        }

        var k, e, p = this.yepnope.loader;
        if (t(a))d(a, 0, p, 0); else if (f(a))for (k = 0; k < a.length; k++)e = a[k], t(e) ? d(e, 0, p, 0) : f(e) ? l(e) : Object(e) === e && h(e, p); else Object(a) === a && h(a, p)
    };
    l.addPrefix = function (a, b) {
        j[a] = b
    };
    l.addFilter = function (a) {
        C.push(a)
    };
    l.errorTimeout = 1E4;
    null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded",
        E = function () {
            d.removeEventListener("DOMContentLoaded", E, 0);
            d.readyState = "complete"
        }, 0));
    e.yepnope = x();
    e.yepnope.executeStack = i;
    e.yepnope.injectJs = function (a, b, e, f, g, k) {
        var j = d.createElement("script"), m, n, f = f || l.errorTimeout;
        j.src = a;
        for (n in e)j.setAttribute(n, e[n]);
        b = k ? i : b || c;
        j.onreadystatechange = j.onload = function () {
            !m && v(j.readyState) && (m = 1, b(), j.onload = j.onreadystatechange = null)
        };
        h(function () {
            m || (m = 1, b(1))
        }, f);
        g ? j.onload() : q.parentNode.insertBefore(j, q)
    };
    e.yepnope.injectCss = function (a, b, f, e, g, j) {
        var e =
            d.createElement("link"), k, b = j ? i : b || c;
        e.href = a;
        e.rel = "stylesheet";
        e.type = "text/css";
        for (k in f)e.setAttribute(k, f[k]);
        g || (q.parentNode.insertBefore(e, q), h(b, 0))
    }
})(this, document);
Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
