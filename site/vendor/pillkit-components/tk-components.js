//#region node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, l, { is: u, defineProperty: d, getOwnPropertyDescriptor: f, getOwnPropertyNames: ee, getOwnPropertySymbols: te, getPrototypeOf: ne } = Object, p = globalThis, re = p.trustedTypes, ie = re ? re.emptyScript : "", ae = p.reactiveElementPolyfillSupport, oe = (e, t) => e, se = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ie : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, ce = (e, t) => !u(e, t), le = {
	attribute: !0,
	type: String,
	converter: se,
	reflect: !1,
	useDefault: !1,
	hasChanged: ce
};
(l = Symbol).metadata ?? (l.metadata = Symbol("metadata")), p.litPropertyMetadata ?? (p.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var m = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ?? (this.l = [])).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = le) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && d(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = f(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? le;
	}
	static _$Ei() {
		if (this.hasOwnProperty(oe("elementProperties"))) return;
		let e = ne(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(oe("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(oe("properties"))) {
			let e = this.properties, t = [...ee(e), ...te(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? se : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? se : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ?? (n = a.getPropertyOptions(e)), !((n.hasChanged ?? ce)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
m.elementStyles = [], m.shadowRootOptions = { mode: "open" }, m[oe("elementProperties")] = /* @__PURE__ */ new Map(), m[oe("finalized")] = /* @__PURE__ */ new Map(), ae?.({ ReactiveElement: m }), (p.reactiveElementVersions ?? (p.reactiveElementVersions = [])).push("2.1.2");
//#endregion
//#region node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
var ue = globalThis, de = (e) => e, fe = ue.trustedTypes, pe = fe ? fe.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, me = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + h, ge = `<${he}>`, g = document, _e = () => g.createComment(""), ve = (e) => e === null || typeof e != "object" && typeof e != "function", ye = Array.isArray, be = (e) => ye(e) || typeof e?.[Symbol.iterator] == "function", xe = "[ 	\n\f\r]", Se = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ce = /-->/g, we = />/g, _ = RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Te = /'/g, Ee = /"/g, De = /^(?:script|style|textarea|title)$/i, v = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), y = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), Oe = /* @__PURE__ */ new WeakMap(), x = g.createTreeWalker(g, 129);
function ke(e, t) {
	if (!ye(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return pe === void 0 ? t : pe.createHTML(t);
}
var Ae = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Se;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === Se ? c[1] === "!--" ? o = Ce : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = _) : (De.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = _) : o = we : o === _ ? c[0] === ">" ? (o = i ?? Se, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? _ : c[3] === "\"" ? Ee : Te) : o === Ee || o === Te ? o = _ : o === Ce || o === we ? o = Se : (o = _, i = void 0);
		let d = o === _ && e[t + 1].startsWith("/>") ? " " : "";
		a += o === Se ? n + ge : l >= 0 ? (r.push(s), n.slice(0, l) + me + n.slice(l) + h + d) : n + h + (l === -2 ? t : d);
	}
	return [ke(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, je = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Ae(t, n);
		if (this.el = e.createElement(l, r), x.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = x.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(me)) {
					let t = u[o++], n = i.getAttribute(e).split(h), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Fe : r[1] === "?" ? Ie : r[1] === "@" ? Le : Pe
					}), i.removeAttribute(e);
				} else e.startsWith(h) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (De.test(i.tagName)) {
					let e = i.textContent.split(h), t = e.length - 1;
					if (t > 0) {
						i.textContent = fe ? fe.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], _e()), x.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], _e());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === he) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(h, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += h.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = g.createElement("template");
		return n.innerHTML = e, n;
	}
};
function S(e, t, n = e, r) {
	if (t === y) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = ve(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ?? (n._$Co = []))[r] = i), i !== void 0 && (t = S(e, i._$AS(e, t.values), i, r)), t;
}
var Me = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? g).importNode(t, !0);
		x.currentNode = r;
		let i = x.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Ne(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Re(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = x.nextNode(), a++);
		}
		return x.currentNode = g, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Ne = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = S(this, e, t), ve(e) ? e === b || e == null || e === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : e !== this._$AH && e !== y && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? be(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== b && ve(this._$AH) ? this._$AA.nextSibling.data = e : this.T(g.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = je.createElement(ke(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Me(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Oe.get(e.strings);
		return t === void 0 && Oe.set(e.strings, t = new je(e)), t;
	}
	k(t) {
		ye(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(_e()), this.O(_e()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = de(e).nextSibling;
			de(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Pe = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = b, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = b;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = S(this, e, t, 0), a = !ve(e) || e !== this._$AH && e !== y, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = S(this, r[n + o], t, o), s === y && (s = this._$AH[o]), a || (a = !ve(s) || s !== this._$AH[o]), s === b ? e = b : e !== b && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Fe = class extends Pe {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === b ? void 0 : e;
	}
}, Ie = class extends Pe {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== b);
	}
}, Le = class extends Pe {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = S(this, e, t, 0) ?? b) === y) return;
		let n = this._$AH, r = e === b && n !== b || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== b && (n === b || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Re = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		S(this, e);
	}
}, ze = ue.litHtmlPolyfillSupport;
ze?.(je, Ne), (ue.litHtmlVersions ?? (ue.litHtmlVersions = [])).push("3.3.3");
var Be = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Ne(t.insertBefore(_e(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Ve = globalThis, C = class extends m {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		var e;
		let t = super.createRenderRoot();
		return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Be(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return y;
	}
};
C._$litElement$ = !0, C.finalized = !0, Ve.litElementHydrateSupport?.({ LitElement: C });
var He = Ve.litElementPolyfillSupport;
He?.({ LitElement: C }), (Ve.litElementVersions ?? (Ve.litElementVersions = [])).push("4.2.2");
//#endregion
//#region node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
var Ue = {
	attribute: !0,
	type: String,
	converter: se,
	reflect: !1,
	hasChanged: ce
}, We = (e = Ue, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function w(e) {
	return (t, n) => typeof n == "object" ? We(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region packages/components/src/article-card/article-card.css.ts
var Ge = o`
  :host {
    display: block;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  /* position:relative — the stitching context the link's ::after resolves against. */
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    min-width: 0;
    padding: var(--tk-article-card-padding, var(--tk-space-32));
    border-radius: var(--tk-article-card-radius, var(--tk-radius-xl));
    background: var(--tk-article-card-fill, var(--tk-color-tint-gray));
    color: var(--tk-article-card-text, var(--tk-color-text-primary));
    font-family: var(--tk-font-body);
  }

  /* --- Tint auto-pairing: per-tint token consumption (no theme branches) --- */

  :host([variant='bluegray']) .card {
    background: var(--tk-article-card-fill, var(--tk-color-tint-bluegray));
  }

  :host([variant='mint']) .card {
    background: var(--tk-article-card-fill, var(--tk-color-tint-mint));
  }

  :host([variant='beige']) .card {
    background: var(--tk-article-card-fill, var(--tk-color-tint-beige));
  }

  /* Charcoal pairs WHITE text (DESIGN Colors; the tint is theme-invariant);
     the whole-card link follows the pairing — white beats the on-tint blue. */
  :host([variant='charcoal']) .card {
    background: var(--tk-article-card-fill, var(--tk-color-tint-charcoal));
    color: var(--tk-article-card-text, var(--tk-color-white));
  }

  :host([variant='charcoal']) .card__link {
    color: var(--tk-article-card-link, var(--tk-color-white));
  }

  :host([variant='charcoal']) .card__description {
    color: var(--tk-article-card-text-muted, var(--tk-color-white));
  }

  /* --- Anatomy --------------------------------------------------------------- */

  /* 2-line clamp (the spec's webkit-prefix + standard pair): the title box
     is a -webkit-box; overflow hidden crops past the second line. */
  .card__heading {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    margin: 0 0 var(--tk-space-8);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-heading-6-size);
    font-weight: var(--tk-text-heading-6-weight);
    line-height: var(--tk-text-heading-6-leading);
  }

  .card__description {
    margin: 0;
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-article-card-text-muted, var(--tk-color-text-secondary));
  }

  /* The «Читать» link: pinned bottom (margin-top:auto), the semantic link
     token, and the UNDERLINE affordance (transparent decoration painted in
     on hover/:focus-visible over the motion token — the tk-link language;
     the underline is the keyboard focus indicator, never removed). */
  .card__link {
    margin-top: auto;
    padding-top: var(--tk-space-16);
    align-self: flex-start;
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    /* AA on tints (DESIGN text-link 'on-tint-color'): blue-100 = ~4.1-4.4:1
       on the tint surfaces (fails 4.5:1) — the on-tint step carries the card
       register; the dark layer remaps it to dark-link. */
    color: var(--tk-article-card-link, var(--tk-color-link-on-tint));
    text-decoration: underline;
    text-decoration-color: transparent;
    transition:
      text-decoration-color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .card__link:hover,
  .card__link:focus-visible {
    text-decoration-color: currentColor;
  }

  /* THE STITCH: the pseudo covers the whole card — clicks anywhere land on
     the ANCHOR (the pseudo's origin) and navigate natively; the card is one
     click target and one tab stop. */
  .card__link::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  /* --- Skeleton (the shared card pattern): quiet-rail blocks matching the
     final layout; STATIC by design (no shimmer — reduced-motion-safe). --- */

  .sk {
    /* border-default semantic (5.4 dark sweep): light value byte-identical
       to gray-200 (#E7E8EA), dark remaps to the white-alpha tonal step —
       gray-200 painted near-white skeleton blocks in dark. */
    background: var(--tk-color-border-default);
  }

  .sk--title {
    width: 90%;
    height: var(--tk-text-heading-6-size);
    margin-bottom: var(--tk-space-8);
    border-radius: var(--tk-radius-full);
  }

  .sk--line {
    width: 90%;
    height: var(--tk-text-body-m-size);
    margin-bottom: var(--tk-space-8);
    border-radius: var(--tk-radius-full);
  }

  .sk--link {
    width: 25%;
    height: var(--tk-text-body-m-size);
    margin-top: auto;
    border-radius: var(--tk-radius-full);
  }

  /* --- The EXPERIENCE responsive matrix: <768px card padding drops one
     spacing step (32 → 24) — the navbar's breakpoint value. --- */

  @media (max-width: 767px) {
    .card {
      padding: var(--tk-article-card-padding-mobile, var(--tk-space-24));
    }
  }
`;
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/decorate.js
function T(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/checkPrivateRedeclaration.js
function Ke(e, t) {
	if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/classPrivateMethodInitSpec.js
function E(e, t) {
	Ke(e, t), t.add(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/classPrivateFieldInitSpec.js
function D(e, t, n) {
	Ke(e, t), t.set(e, n);
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/assertClassBrand.js
function O(e, t, n) {
	if (typeof e == "function" ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw TypeError("Private element is not present on this object");
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/classPrivateFieldSet2.js
function k(e, t, n) {
	return e.set(O(e, t), n), n;
}
//#endregion
//#region \0@oxc-project+runtime@0.150.0/helpers/esm/classPrivateFieldGet2.js
function A(e, t) {
	return e.get(O(e, t));
}
//#endregion
//#region packages/components/src/article-card/article-card.ts
var qe, Je = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakSet(), M = class e extends C {
	constructor(...e) {
		super(...e), E(this, j), D(this, Je, void 0), D(this, Ye, void 0), this.variant = "gray", this.linkLabel = "Читать", this.skeleton = !1, k(Je, this, !1), k(Ye, this, !1);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "gray");
	}
	render() {
		if (this.skeleton) return v`
        <article class="card" aria-busy="true">
          <div class="sk sk--title" aria-hidden="true"></div>
          <div class="sk sk--title" aria-hidden="true"></div>
          <div class="sk sk--line" aria-hidden="true"></div>
          <div class="sk sk--line" aria-hidden="true"></div>
          <div class="sk sk--link" aria-hidden="true"></div>
        </article>
      `;
		let e = A(Je, this) || (this.heading ?? "").length > 0, t = A(Ye, this) || (this.description ?? "").length > 0;
		return v`
      <article class="card">
        ${e ? v`<h3 class="card__heading">
              <slot name="heading" @slotchange=${O(j, this, Ze)}>${this.heading}</slot>
            </h3>` : v`<slot name="heading" @slotchange=${O(j, this, Ze)} hidden></slot>`}
        ${t ? v`<p class="card__description">
              <slot name="description" @slotchange=${O(j, this, Qe)}>
                ${this.description}
              </slot>
            </p>` : v`<slot name="description" @slotchange=${O(j, this, Qe)} hidden></slot>`}
        <a class="card__link" href=${this.href ?? b}>${this.linkLabel}</a>
      </article>
    `;
	}
};
qe = M;
function Xe(e) {
	return e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0);
}
function Ze(e) {
	k(Je, this, O(j, this, Xe).call(this, e.target)), this.requestUpdate();
}
function Qe(e) {
	k(Ye, this, O(j, this, Xe).call(this, e.target)), this.requestUpdate();
}
qe.variants = [
	"gray",
	"bluegray",
	"mint",
	"beige",
	"charcoal"
], qe.styles = [Ge], T([w({ reflect: !0 })], M.prototype, "variant", void 0), T([w({ type: String })], M.prototype, "heading", void 0), T([w({ type: String })], M.prototype, "description", void 0), T([w({ type: String })], M.prototype, "href", void 0), T([w({
	type: String,
	attribute: "link-label"
})], M.prototype, "linkLabel", void 0), T([w({
	type: Boolean,
	reflect: !0
})], M.prototype, "skeleton", void 0), customElements.get("tk-article-card") || customElements.define("tk-article-card", M);
//#endregion
//#region packages/components/src/badge/badge.css.ts
var $e = o`
  :host {
    display: inline-flex;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  .badge {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    min-height: 22px;
    padding-inline: var(--tk-space-8);
    border-radius: var(--tk-radius-full);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-xs-size);
    font-weight: var(--tk-text-body-s-bold-weight);
    line-height: var(--tk-text-body-xs-leading);
    letter-spacing: var(--tk-text-body-xs-tracking);
    white-space: nowrap;
  }

  /* display:flex on the cells outranks the UA's [hidden] — restate it. The
     label cell (with its slot) stays in the DOM, hidden never absent, so
     slotchange fires in every state; hidden subtrees are unrendered and out
     of the accessibility tree — a count badge announces ONLY the count. */
  .badge__count[hidden],
  .badge__label[hidden] {
    display: none;
  }

  /* --- Variants: flat saturated fills, text pairs per the header notes. -- */

  :host([variant='incentive']) .badge {
    background: var(--tk-color-green-100);
    /* INK-on-saturated-brand-fill (the 2.1 AA pairing) — see the header. */
    color: var(--tk-color-ink-400);
  }

  :host([variant='stat']) .badge {
    background: var(--tk-color-ink-300);
    color: var(--tk-color-white);
  }
`, et, tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakSet(), rt = class e extends C {
	constructor(...e) {
		super(...e), E(this, nt), D(this, tt, void 0), this.variant = "incentive", k(tt, this, !1);
	}
	firstUpdated() {
		O(nt, this, at).call(this);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "incentive");
	}
	render() {
		let e = it.call(O(nt, this));
		return v`
      <span class="badge">
        <span class="badge__count" ?hidden=${e === null}>${e ?? b}</span>
        <span class="badge__label" ?hidden=${e !== null}
          >${A(tt, this) ? b : this.label ?? b}<slot
            @slotchange=${O(nt, this, ot)}
          ></slot
        ></span>
      </span>
    `;
	}
};
et = rt;
function it() {
	return typeof this.count != "number" || !Number.isFinite(this.count) ? null : this.count > et.COUNT_CAP ? "99+" : String(this.count);
}
function at() {
	let e = ((this.shadowRoot?.querySelector("slot:not([name])"))?.assignedNodes({ flatten: !0 }) ?? []).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0);
	e !== A(tt, this) && (k(tt, this, e), this.requestUpdate());
}
function ot() {
	O(nt, this, at).call(this);
}
et.variants = ["incentive", "stat"], et.COUNT_CAP = 99, et.styles = [$e], T([w({ reflect: !0 })], rt.prototype, "variant", void 0), T([w({ type: Number })], rt.prototype, "count", void 0), T([w({ type: String })], rt.prototype, "label", void 0), customElements.get("tk-badge") || customElements.define("tk-badge", rt);
//#endregion
//#region packages/components/src/button/button.css.ts
var st = o`
  :host {
    display: inline-flex;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  /* Interactive-target floor (EXPERIENCE a11y): the host never intercepts
     pointer events while disabled — clicks die at the element boundary. */
  :host([disabled]) {
    pointer-events: none;
  }

  .button {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-8);
    margin: 0;
    border: none;
    background: transparent;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-bold-size);
    font-weight: var(--tk-text-body-m-bold-weight);
    /* Bold steps carry no leading token — the base-step leading (1.5) governs. */
    line-height: var(--tk-text-body-m-leading);
    text-decoration: none;
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
  }

  /* The visual pill — a pseudo so the clickable/focusable box can exceed the
     painted pill (compact). Painted BELOW the label/spinner: ::before is the
     first child in tree order, and label (positioned below) + spinner
     (absolute) paint after it. Hover/press are color steps only (scale-free
     press) on motion tokens: hover 150ms (duration-fast), press 75ms
     (duration-fastest); both collapse to 0ms under prefers-reduced-motion
     via the token layer. */
  .button::before {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline: 0;
    box-sizing: border-box;
    border-radius: var(--tk-radius-full);
    transition:
      background-color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard),
      box-shadow var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .button:active::before {
    transition-duration: var(--tk-motion-duration-fastest);
  }

  /* Unified focus ring — 2px token ring, offset 2px, never removed (never
     set outline: none anywhere in this sheet). It draws around the button
     box: 56/48 hero/card (the pill), 44 for compact (the padded box — the
     interactive target — per the spec I/O row). */
  .button:focus-visible {
    outline: 2px solid var(--tk-color-focus-ring);
    outline-offset: 2px;
  }

  /* --- Sizes. The button box IS the hit target: 56 / 48 / 44 (floor) —
     compact keeps the faithful 32px VISUAL pill via the pseudo's 6px block
     inset below; the inset (44 − 32) is structural, not a token. --- */

  :host([size='hero']) .button {
    height: 56px;
    padding-inline: var(--tk-space-40);
  }

  :host([size='card']) .button {
    height: 48px;
    padding-inline: var(--tk-space-32);
  }

  :host([size='compact']) .button {
    height: 44px;
    padding-inline: var(--tk-space-24);
  }

  :host([size='compact']) .button::before {
    inset-block: 6px;
  }

  /* --- Variants: fills/shadows paint on the pill pseudo; text colors on the
     button (currentColor feeds the spinner too). --- */

  /* Primary: Protect blue fill with accessible white text. The semantic pair
     is invariant so light and dark render the same recognizable CTA. */
  :host([variant='primary']) .button {
    color: var(--tk-color-text-on-primary);
  }

  :host([variant='primary']) .button::before {
    background: var(--tk-color-yellow-100);
  }

  /* Affordance freeze: a loading button is inert (clicks intercepted at the
     host), so it also shows no hover/press affordance — the hover/active
     steps apply only when not loading. */
  :host([variant='primary']:not([loading])) .button:hover::before {
    background: var(--tk-color-yellow-200);
  }

  :host([variant='primary']:not([loading])) .button:active::before {
    background: var(--tk-color-yellow-300);
  }

  /* Secondary: surface fill + default shadow (light). Expressed with surface/
     text semantics so the dark layer restyles it (surface-base lifts, shadow
     collapses to none, hairline keeps the pill edge visible on a dark canvas).
     The 1px hairline is a structural hairline weight (flagged in the header). */
  :host([variant='secondary']) .button {
    color: var(--tk-color-text-primary);
  }

  :host([variant='secondary']) .button::before {
    background: var(--tk-color-surface-base);
    box-shadow: var(--tk-shadow-default);
    border: 1px solid var(--tk-color-border-default);
  }

  :host([variant='secondary']:not([loading])) .button:hover::before {
    box-shadow: var(--tk-shadow-hover);
  }

  /* Inverse: ink-300 fill, white text in light (DESIGN.md). Expressed as
     text-primary on surface-base so the pair inverts with the theme (the
     edge-case matrix: secondary/inverse adapt via surface/ink semantics). */
  :host([variant='inverse']) .button {
    color: var(--tk-color-surface-base);
  }

  :host([variant='inverse']) .button::before {
    background: var(--tk-color-text-primary);
  }

  :host([variant='inverse']:not([loading])) .button:hover::before {
    background: var(--tk-color-ink-200);
  }

  :host([variant='inverse']:not([loading])) .button:active::before {
    background: var(--tk-color-ink-100);
  }

  /* --- Disabled: 40% opacity, no pointer events (host-level above);
     aria-disabled is set on the inner button. Disabled wins visually over
     loading (the recorded precedence — the spinner may still render). The
     opacity sits on the button box, so pill + label + spinner all fade. --- */
  :host([disabled]) .button {
    opacity: 0.4;
    cursor: default;
  }

  /* --- Loading: in-place spinner, width frozen. The label stays in flow at
     opacity 0 — it still occupies its space (no layout shift) AND remains in
     the accessibility tree (screen readers keep the name); opacity never
     removes content from the tree (unlike visibility/display). The spinner
     overlays the center. Inert affordance: default cursor (the hover/press
     steps are excluded above). */
  :host([loading]) .button {
    cursor: default;
  }

  .button__label {
    display: inline-flex;
    align-items: center;
    gap: var(--tk-space-8);
    /* Paints above the pill pseudo (tree order among positioned boxes).
       Long-label stance (reference buttons are single-line): never wrap;
       under a consumer-constrained width the label truncates with an
       ellipsis VISUALLY — the slotted light-DOM text (the accessible name)
       keeps the full string. min-width lets the flex item actually shrink. */
    position: relative;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([loading]) .button__label {
    opacity: 0;
  }

  .button__spinner {
    position: absolute;
    box-sizing: border-box;
    width: var(--tk-text-body-m-bold-size);
    height: var(--tk-text-body-m-bold-size);
    /* 2px spinner stroke — structural hairline weight, no token counterpart. */
    border: 2px solid transparent;
    border-top-color: currentColor;
    border-right-color: currentColor;
    border-radius: var(--tk-radius-full);
    animation: tk-button-spin var(--tk-motion-duration-moderate) linear infinite;
    display: none;
  }

  :host([loading]) .button__spinner {
    display: block;
  }

  /* Spinner reduced-motion belt: the token layer already collapses
     --tk-motion-duration-moderate to 0ms; this explicit none keeps a paused
     (static two-tone ring) affordance instead of an instant loop. */
  @media (prefers-reduced-motion: reduce) {
    .button__spinner {
      animation: none;
    }
  }

  @keyframes tk-button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`, ct, lt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakSet(), N = class e extends C {
	constructor() {
		super(), E(this, ut), D(this, lt, void 0), this.variant = "primary", this.size = "card", this.loading = !1, this.disabled = !1, this.handleClick = (e) => {
			(this.disabled || this.loading) && (e.preventDefault(), e.stopImmediatePropagation());
		}, k(lt, this, !1), this.addEventListener("click", this.handleClick);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "primary"), t.has("size") && !e.sizes.includes(this.size) && (this.size = "card");
	}
	firstUpdated() {
		O(ut, this, dt).call(this);
	}
	handleSlotChange() {
		O(ut, this, dt).call(this);
	}
	render() {
		return this.href != null && this.href.length > 0 ? v`
        <a
          class="button"
          href=${this.href}
          target=${this.target != null && this.target.length > 0 ? this.target : b}
          rel=${O(ut, this, ft).call(this)}
          aria-disabled=${this.disabled ? "true" : b}
          aria-busy=${this.loading ? "true" : b}
        >
          <span class="button__spinner" aria-hidden="true"></span>
          <span class="button__label">
            <slot name="icon"></slot>
            <slot @slotchange=${this.handleSlotChange}></slot>
          </span>
        </a>
      ` : v`
      <button
        class="button"
        type="button"
        aria-disabled=${this.disabled ? "true" : b}
        aria-busy=${this.loading ? "true" : b}
      >
        <span class="button__spinner" aria-hidden="true"></span>
        <span class="button__label">
          <slot name="icon"></slot>
          <slot @slotchange=${this.handleSlotChange}></slot>
        </span>
      </button>
    `;
	}
};
ct = N;
function dt() {
	A(lt, this) || ((this.shadowRoot?.querySelector("slot:not([name])"))?.assignedNodes({ flatten: !0 }) ?? []).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0) || (k(lt, this, !0), console.warn("tk-button: no content in the default slot — the button has no accessible name. Give it a slotted label."));
}
function ft() {
	return this.rel != null && this.rel.length > 0 ? this.rel : this.target === "_blank" ? "noopener noreferrer" : b;
}
ct.variants = [
	"primary",
	"secondary",
	"inverse"
], ct.sizes = [
	"hero",
	"card",
	"compact"
], ct.styles = [st], T([w({ reflect: !0 })], N.prototype, "variant", void 0), T([w({ reflect: !0 })], N.prototype, "size", void 0), T([w({
	type: Boolean,
	reflect: !0
})], N.prototype, "loading", void 0), T([w({
	type: Boolean,
	reflect: !0
})], N.prototype, "disabled", void 0), T([w()], N.prototype, "href", void 0), T([w()], N.prototype, "target", void 0), T([w()], N.prototype, "rel", void 0), customElements.get("tk-button") || customElements.define("tk-button", N);
//#endregion
//#region packages/components/src/data-table/data-table.css.ts
var pt = o`
  :host {
    display: block;
    /* The narrow-viewport fence: the inner table keeps its min-width and
       the HOST scrolls horizontally — columns never reflow (spec). */
    overflow-x: auto;
  }

  /* 'hidden' must actually hide: the 'display: block' above is author-origin
     and BEATS the UA '[hidden] { display: none }' rule — without this guard
     a hidden table keeps painting (the 6.2/6.3 visual-gate lesson). */
  :host([hidden]) {
    display: none;
  }

  .table {
    min-width: 640px;
    font-family: var(--tk-font-body);
  }

  /* --- Header row cells: 15px/500 text-secondary, STATIC (no sort v2) ------ */

  .cell--header {
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-bold-weight);
    line-height: 24px;
    color: var(--tk-color-text-secondary);
    letter-spacing: normal;
  }

  /* --- Body rows: 81px, grid tracks, 1px divider on the row ---------------- */

  .row {
    position: relative; /* the stitching context the link's ::after resolves against */
    box-sizing: border-box;
    display: grid;
    align-items: center;
    column-gap: var(--tk-space-24);
    min-height: var(--tk-data-table-row-min-height, 81px);
    padding: var(--tk-space-8) var(--tk-space-16);
    border-bottom: 1px solid var(--tk-color-border-table);
    transition: background-color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  /* The header row override — AFTER the .row rule on purpose: the element
     carries BOTH classes, and the 81px rhythm belongs to the BODY rows only
     (NOTES §E). The reference header band measures 61px; natural
     padding+line (16+24+16=56px) is the token-nearest pick, so the
     inherited row min-height is zeroed here (source order decides equal
     specificity). */
  .row--header {
    min-height: 0;
    padding: var(--tk-space-16) var(--tk-space-16);
  }

  /* Hover rides the whole row — and only rows that GO somewhere (the §C
     real-hover fill; inert rows do not borrow the affordance). */
  .row--link:hover {
    background: var(--tk-color-surface-row-hover);
  }

  .row--link {
    cursor: pointer;
  }

  .cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--tk-space-4);
    min-width: 0; /* grid item discipline: long names shrink, never blow the track */
  }

  .cell--align-end {
    text-align: end;
  }

  /* Two-line anatomy (§E): primary 15/24 ink, secondary 13/20 muted.
     The primary GROUP keys on .row__link (lens B1): the first cell of a
     link row renders its primary line as the row anchor, and the anchor —
     the table's most prominent glyph — must receive the spec's 15/24
     DIRECTLY, not inherit the page's ambient leading (pre-fix the group's
     second member was a dead .cell__link selector the template never
     rendered, so the anchor rode the canvas's 1.5 leading = 22.5px). */
  .cell__primary,
  .row__link {
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: 24px;
    color: var(--tk-color-text-primary);
  }

  .cell__secondary {
    font-size: var(--tk-text-body-s-size);
    font-weight: var(--tk-text-body-s-weight);
    line-height: 20px;
    color: var(--tk-color-text-secondary);
  }

  /* Deltas (6.1 semantics): the direction color paints BOTH lines of the
     cell — the reference's ₽-line and %-line share it (§E). */
  .cell--delta-positive .cell__primary,
  .cell--delta-positive .cell__secondary {
    color: var(--tk-color-delta-positive);
  }

  .cell--delta-negative .cell__primary,
  .cell--delta-negative .cell__secondary {
    color: var(--tk-color-delta-negative);
  }

  /* --- The row-as-link stitch (the 3.9 article-card pick) ------------------
     The anchor carries ONLY the first cell's primary text; its ::after
     covers the positioned row, so clicks anywhere on the row navigate
     natively — one anchor, one tab stop per row. Ink text, no underline
     (the reference's net visual; the anchor's blue base is not used).
     This rule carries ONLY the anchor-specific declaration — the primary
     typography group above owns size/weight/leading/color for BOTH members
     (lens B1: no duplicated typography). */
  .row__link {
    text-decoration: none;
  }

  .row__link::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  /* --- Focus: the §8 unified ring around the WHOLE row ---------------------
     Keyboard focus (focus-visible) on any row's anchor rings the row box —
     the boxed register; the anchor itself carries no ring. :has() keys the
     ring to KEYBOARD focus only (see the module header). */
  .row__link:focus-visible {
    outline: none;
  }

  .row:has(.row__link:focus-visible) {
    outline: 2px solid var(--tk-color-focus-ring);
    outline-offset: 2px;
  }

  /* --- Zero state: never blank, outside the table role ---------------------
     (role=table demands row children — aria-required-children — so the
     message renders as the table's sibling, not inside it.) */
  .empty {
    margin: 0;
    padding: var(--tk-space-16);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-color-text-secondary);
  }
`, mt, ht = "Нет данных", P = /* @__PURE__ */ new WeakSet(), F = /* @__PURE__ */ new WeakMap(), gt = class extends C {
	constructor(...e) {
		super(...e), E(this, P), D(this, F, void 0), this.columns = [], this.rows = [], k(F, this, 0);
	}
	willUpdate(e) {
		if (e.has("rows")) {
			let e = vt.call(O(P, this));
			if (e.length === 0) {
				k(F, this, 0);
				return;
			}
			k(F, this, Math.min(A(F, this), e.length - 1)), e[A(F, this)] && !O(P, this, yt).call(this, A(F, this)) && k(F, this, O(P, this, bt).call(this, A(F, this), 1) ?? O(P, this, bt).call(this, A(F, this), -1) ?? 0);
		}
	}
	render() {
		let e = vt.call(O(P, this)), t = _t.call(O(P, this));
		return v`
      <div class="table" role="table" aria-label=${this.caption ?? b}>
        ${t.length > 0 ? O(P, this, kt).call(this) : b}
        ${e.length > 0 ? v`<div class="body" role="rowgroup" @focusin=${O(P, this, Tt)} @keydown=${O(P, this, Et)}>
              ${e.map((e, t) => O(P, this, At).call(this, e, t))}
            </div>` : b}
      </div>
      ${e.length === 0 ? v`<p class="empty">${ht}</p>` : b}
    `;
	}
};
mt = gt;
function _t() {
	return this.columns ?? [];
}
function vt() {
	return this.rows ?? [];
}
function yt(e) {
	let t = vt.call(O(P, this))[e]?.href;
	return typeof t == "string" && t.length > 0;
}
function bt(e, t) {
	let n = vt.call(O(P, this)), r = e + t;
	for (; r >= 0 && r < n.length;) {
		if (O(P, this, yt).call(this, r)) return r;
		r += t;
	}
	return null;
}
function xt(e) {
	let t = vt.call(O(P, this));
	if (e === "first") {
		for (let e = 0; e < t.length; e += 1) if (O(P, this, yt).call(this, e)) return e;
	} else for (let e = t.length - 1; e >= 0; --e) if (O(P, this, yt).call(this, e)) return e;
	return null;
}
function St(e) {
	return this.renderRoot.querySelector(`a[data-index="${e}"]`);
}
function Ct(e, t = {}) {
	let n = t.focus ?? !0;
	if (A(F, this) === e) {
		n && O(P, this, wt).call(this, e);
		return;
	}
	k(F, this, e), this.requestUpdate(), n && O(P, this, wt).call(this, e);
}
function wt(e) {
	let t = O(P, this, St).call(this, e);
	t && (t.focus(), typeof t.scrollIntoView == "function" && t.scrollIntoView({ block: "nearest" }));
}
function Tt(e) {
	let t = e.target?.closest?.("a[data-index]");
	if (!(t instanceof HTMLAnchorElement)) return;
	let n = Number(t.getAttribute("data-index"));
	Number.isInteger(n) && n !== A(F, this) && O(P, this, Ct).call(this, n, { focus: !1 });
}
function Et(e) {
	let t = e.target?.closest?.("a[data-index]");
	if (t instanceof HTMLAnchorElement) switch (e.key) {
		case "ArrowDown": {
			e.preventDefault();
			let t = O(P, this, bt).call(this, A(F, this), 1);
			t !== null && O(P, this, Ct).call(this, t);
			break;
		}
		case "ArrowUp": {
			e.preventDefault();
			let t = O(P, this, bt).call(this, A(F, this), -1);
			t !== null && O(P, this, Ct).call(this, t);
			break;
		}
		case "Home": {
			e.preventDefault();
			let t = O(P, this, xt).call(this, "first");
			t !== null && O(P, this, Ct).call(this, t);
			break;
		}
		case "End": {
			e.preventDefault();
			let t = O(P, this, xt).call(this, "last");
			t !== null && O(P, this, Ct).call(this, t);
			break;
		}
		case " ": e.preventDefault(), t.click();
	}
}
function Dt() {
	return _t.call(O(P, this)).map((e) => e?.width ?? "auto").join(" ");
}
function Ot(e) {
	return e?.delta === "positive" || e?.delta === "negative" ? e.delta : void 0;
}
function kt() {
	return v`
      <div class="row row--header" role="row" style="grid-template-columns: ${O(P, this, Dt).call(this)}">
        ${_t.call(O(P, this)).map((e) => e ? v`<div class="cell cell--header${e.align === "end" ? " cell--align-end" : ""}" role="columnheader">
            ${e.header ?? ""}
          </div>` : b)}
      </div>
    `;
}
function At(e, t) {
	let n = typeof e?.href == "string" && e.href.length > 0 ? e.href : null;
	return v`
      <div class=${n ? "row row--link" : "row"} role="row" style="grid-template-columns: ${O(P, this, Dt).call(this)}">
        ${_t.call(O(P, this)).map((r, i) => {
		if (!r) return b;
		let a = e?.cells?.[r.key], o = O(P, this, Ot).call(this, a), s = o ? ` cell--delta-${o}` : "", c = r.align === "end" ? " cell--align-end" : "", l = a?.primary == null ? "" : String(a.primary), u = a?.secondary == null ? "" : String(a.secondary);
		return v`<div class="cell${s}${c}" role="cell">
            ${i === 0 && n ? v`<a
                  class="row__link"
                  data-index=${t}
                  href=${n}
                  tabindex=${t === A(F, this) ? "0" : "-1"}
                  >${l}</a
                >` : v`<span class="cell__primary">${l}</span>`}
            ${u ? v`<span class="cell__secondary">${u}</span>` : b}
          </div>`;
	})}
      </div>
    `;
}
mt.styles = [pt], T([w({
	type: Array,
	attribute: !1
})], gt.prototype, "columns", void 0), T([w({
	type: Array,
	attribute: !1
})], gt.prototype, "rows", void 0), T([w({ type: String })], gt.prototype, "caption", void 0), customElements.get("tk-data-table") || customElements.define("tk-data-table", gt);
//#endregion
//#region packages/components/src/feature-card/feature-card.css.ts
var jt = o`
  :host {
    display: block;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    min-width: 0;
    min-height: var(--tk-feature-card-min-height, 320px);
    padding: var(--tk-feature-card-padding, var(--tk-space-32));
    border-radius: var(--tk-feature-card-radius, var(--tk-radius-xxl));
    background: var(--tk-feature-card-fill, var(--tk-color-tint-gray));
    color: var(--tk-feature-card-text, var(--tk-color-text-primary));
    font-family: var(--tk-font-body);
  }

  /* --- Tint auto-pairing: per-tint token consumption (no theme branches) --- */

  :host([variant='bluegray']) .card {
    background: var(--tk-feature-card-fill, var(--tk-color-tint-bluegray));
  }

  :host([variant='mint']) .card {
    background: var(--tk-feature-card-fill, var(--tk-color-tint-mint));
  }

  :host([variant='beige']) .card {
    background: var(--tk-feature-card-fill, var(--tk-color-tint-beige));
  }

  /* EDITORIAL = the charcoal register: white heading, white pairing, and the
     two-column grid with the art bleeding right — but the SECOND column only
     exists when art is slotted (data-has-art; no art → single column, review
     finding 2). Padding collapses onto the body column; the card's radius +
     overflow clip crop the bleed. */
  :host([variant='editorial']) .card {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    padding: 0;
    overflow: hidden;
    background: var(--tk-feature-card-fill, var(--tk-color-tint-charcoal));
    color: var(--tk-feature-card-text, var(--tk-color-white));
  }

  :host([variant='editorial'][data-has-art]) .card {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }

  :host([variant='editorial']) .card__description {
    color: var(--tk-feature-card-text-muted, var(--tk-color-white));
  }

  /* Editorial CTA pair (review finding 1): the slotted tk-button secondary's
     pill is --tk-color-surface-base (dark: #1A1A1A — invisible on the
     theme-invariant charcoal) and its label is --tk-color-text-primary
     (dark: white). Re-scoped to the hook PAIR inside the actions zone —
     flat-tree inheritance carries them into the slotted button. */
  :host([variant='editorial']) .card__actions {
    --tk-color-surface-base: var(--tk-feature-card-cta-fill, var(--tk-color-white));
    --tk-color-text-primary: var(--tk-feature-card-cta-text, var(--tk-color-ink-300));
  }

  /* Stretch fills the column's full height; the zone's flex justify/align
     flex-end anchors the ART low-right against the bleed edge. The second
     rule re-zeroes the anatomy margin at higher specificity — the bleed
     stays flush to the card's bottom-right edge. */
  :host([variant='editorial']) .card__art {
    grid-column: 2;
    grid-row: 1;
    align-self: stretch;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 0;
    overflow: hidden;
  }

  :host([variant='editorial'][data-has-art]) .card__art {
    margin-bottom: 0;
  }

  :host([variant='editorial']) .card__art ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :host([variant='editorial']) .card__body {
    grid-column: 1;
    grid-row: 1;
    padding: var(--tk-feature-card-padding, var(--tk-space-32));
  }

  /* --- Anatomy --------------------------------------------------------------- */

  /* Art zone: COLLAPSED without slotted art (the data-has-art attribute the
     element toggles on slotchange — no stray 24px margin when empty). */
  .card__art {
    display: none;
  }

  :host([data-has-art]) .card__art {
    display: flex;
    margin-bottom: var(--tk-space-24);
  }

  .card__art ::slotted(img) {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .card__body {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  .card__heading {
    margin: 0 0 var(--tk-space-8);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-heading-4-size);
    font-weight: var(--tk-text-heading-4-weight);
    line-height: var(--tk-text-heading-4-leading);
  }

  .card__description {
    margin: 0;
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-feature-card-text-muted, var(--tk-color-text-secondary));
  }

  /* The CTA zone: START-aligned (the banner register) and pinned bottom via
     margin-top:auto — the consumer's slotted tk-button secondary carries it. */
  .card__actions {
    display: flex;
    justify-content: flex-start;
    margin-top: auto;
    padding-top: var(--tk-space-24);
  }

  /* --- Skeleton (the shared card pattern): quiet-rail blocks matching the
     final layout; STATIC by design (no shimmer — reduced-motion-safe).
     Fill is the border-default semantic (5.4 dark sweep): light value
     byte-identical to gray-200 (#E7E8EA), dark remaps to the white-alpha
     tonal step — gray-200 painted near-white blocks in dark. --- */

  .sk {
    background: var(--tk-color-border-default);
  }

  .sk--heading {
    width: 60%;
    height: var(--tk-text-heading-4-size);
    margin-bottom: var(--tk-space-12);
    border-radius: var(--tk-radius-full);
  }

  .sk--line {
    width: 90%;
    height: var(--tk-text-body-m-size);
    margin-bottom: var(--tk-space-8);
    border-radius: var(--tk-radius-full);
  }

  .sk--cta {
    width: 40%;
    height: var(--tk-space-48);
    margin-top: auto;
    border-radius: var(--tk-radius-full);
  }

  /* --- The EXPERIENCE responsive matrix: <768px card padding drops one
     spacing step (32 → 24) — the navbar's breakpoint value. --- */

  @media (max-width: 767px) {
    .card {
      padding: var(--tk-feature-card-padding-mobile, var(--tk-space-24));
    }

    :host([variant='editorial']) .card__body {
      padding: var(--tk-feature-card-padding-mobile, var(--tk-space-24));
    }
  }
`, Mt, Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakSet(), L = class e extends C {
	constructor(...e) {
		super(...e), E(this, I), D(this, Nt, void 0), D(this, Pt, void 0), this.variant = "gray", this.skeleton = !1, k(Nt, this, !1), k(Pt, this, !1);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "gray");
	}
	render() {
		if (this.skeleton) return v`
        <article class="card" aria-busy="true">
          <div class="sk sk--heading" aria-hidden="true"></div>
          <div class="sk sk--line" aria-hidden="true"></div>
          <div class="sk sk--line" aria-hidden="true"></div>
          <div class="sk sk--cta" aria-hidden="true"></div>
        </article>
      `;
		let e = A(Nt, this) || (this.heading ?? "").length > 0, t = A(Pt, this) || (this.description ?? "").length > 0;
		return v`
      <article class="card">
        <div class="card__art">
          <slot name="art" @slotchange=${O(I, this, zt)}></slot>
        </div>
        <div class="card__body">
          ${e ? v`<h3 class="card__heading">
                <slot name="heading" @slotchange=${O(I, this, It)}>${this.heading}</slot>
              </h3>` : v`<slot name="heading" @slotchange=${O(I, this, It)} hidden></slot>`}
          ${t ? v`<p class="card__description">
                <slot name="description" @slotchange=${O(I, this, Lt)}>
                  ${this.description}
                </slot>
              </p>` : v`<slot
                name="description"
                @slotchange=${O(I, this, Lt)}
                hidden
              ></slot>`}
          <div class="card__actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </article>
    `;
	}
};
Mt = L;
function Ft(e) {
	return e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0);
}
function It(e) {
	k(Nt, this, O(I, this, Ft).call(this, e.target)), this.requestUpdate();
}
function Lt(e) {
	k(Pt, this, O(I, this, Ft).call(this, e.target)), this.requestUpdate();
}
function Rt(e) {
	for (let t of e.assignedElements({ flatten: !0 })) {
		let e = t instanceof HTMLImageElement ? [t] : [...t.querySelectorAll("img")];
		for (let t of e) t.setAttribute("loading", "lazy"), t.setAttribute("decoding", "async");
	}
}
function zt(e) {
	let t = e.target;
	this.toggleAttribute("data-has-art", t.assignedElements({ flatten: !0 }).length > 0), O(I, this, Rt).call(this, t);
}
Mt.variants = [
	"gray",
	"bluegray",
	"mint",
	"beige",
	"editorial"
], Mt.styles = [jt], T([w({ reflect: !0 })], L.prototype, "variant", void 0), T([w({ type: String })], L.prototype, "heading", void 0), T([w({ type: String })], L.prototype, "description", void 0), T([w({
	type: Boolean,
	reflect: !0
})], L.prototype, "skeleton", void 0), customElements.get("tk-feature-card") || customElements.define("tk-feature-card", L);
//#endregion
//#region packages/components/src/footer/footer.css.ts
var Bt = o`
  :host {
    display: block;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  .footer {
    font-family: var(--tk-font-body);
    color: var(--tk-color-text-primary);
  }

  /* --- The directory: columns ARE LISTS -------------------------------------- */
  .directory {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: var(--tk-footer-column-gap, var(--tk-space-40));
    align-items: start;
  }

  .column {
    min-width: 0;
  }

  /* caps-s UPPERCASE — the transform applied at render (the token carries no case). */
  .column__header {
    margin: 0 0 var(--tk-space-16);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-caps-s-size);
    font-weight: var(--tk-text-caps-s-weight);
    letter-spacing: var(--tk-text-caps-s-tracking);
    text-transform: uppercase;
    color: var(--tk-footer-header, var(--tk-color-text-secondary));
  }

  .column__list {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-8);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .column__link {
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-footer-link, var(--tk-color-text-secondary));
    text-decoration: none;
    transition: color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .column__link:hover {
    color: var(--tk-footer-link-hover, var(--tk-color-text-primary));
  }

  .column__link:focus-visible,
  .pill:focus-visible {
    outline: 2px solid var(--tk-color-focus-ring);
    outline-offset: 2px;
  }

  /* --- The bottom zone: pills + phone + legal --------------------------------- */
  .bottom {
    display: flex;
    flex-direction: column;
    gap: var(--tk-space-24);
    margin-top: var(--tk-footer-padding, var(--tk-space-32));
    padding-top: var(--tk-footer-padding, var(--tk-space-32));
    border-top: 1px solid var(--tk-color-border-default);
  }

  .bottom__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--tk-space-24);
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--tk-space-8);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* The frozen footer-pill-link spec: SELF-FILLED ink pill, white text,
     radius-full — the reference's dark-strip pill lifted onto any surface.
     Hover darkens one token step (ink-300 → ink-400) at the 150ms token,
     through the PAIRED hover hook — never a bare token past a custom fill. */
  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding-inline: var(--tk-space-16);
    border-radius: var(--tk-radius-full);
    font-size: var(--tk-text-body-s-size);
    font-weight: var(--tk-text-body-s-weight);
    line-height: var(--tk-text-body-s-leading);
    color: var(--tk-footer-pill-text, var(--tk-color-white));
    text-decoration: none;
    background: var(--tk-footer-pill-fill, var(--tk-color-ink-300));
    transition: background var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .pill:hover {
    background: var(--tk-footer-pill-fill-hover, var(--tk-color-ink-400));
  }

  /* The bold contact block (probe: white bold ~18px → body-l-bold 500 — the
     bold slots carry no leading of their own; the body-l leading serves). */
  .phone {
    margin: 0;
    margin-inline-start: auto;
    font-size: var(--tk-text-body-l-bold-size);
    font-weight: var(--tk-text-body-l-bold-weight);
    line-height: var(--tk-text-body-l-leading);
    color: var(--tk-color-text-primary);
  }

  /* The legal fine-print slot: body-xs gray; inline links inside are the
     consumer's tk-link legal instances (composed, not reimplemented). */
  .legal {
    font-size: var(--tk-text-body-xs-size);
    font-weight: var(--tk-text-body-xs-weight);
    line-height: var(--tk-text-body-xs-leading);
    letter-spacing: var(--tk-text-body-xs-tracking);
    color: var(--tk-color-text-secondary);
  }
`, Vt, Ht = (e) => typeof e == "object" && !!e && typeof e.label == "string" && e.label.length > 0 && typeof e.href == "string" && e.href.length > 0, Ut = /* @__PURE__ */ new WeakSet(), Wt = class extends C {
	constructor(...e) {
		super(...e), E(this, Ut), this.columns = [], this.quickLinks = [];
	}
	willUpdate(e) {
		if (e.has("quickLinks")) {
			let e = Array.isArray(this.quickLinks) ? this.quickLinks : [], t = e.filter(Ht);
			t.length !== e.length && (console.warn("tk-footer: malformed quickLinks entries dropped — each entry needs non-empty string label and href"), this.quickLinks = t);
		}
		if (e.has("columns")) {
			let e = Array.isArray(this.columns) ? this.columns : [], t = [], n = 0;
			for (let r of e) {
				let e = r, i = e?.title, a = Array.isArray(e?.links) ? e.links : [], o = a.filter(Ht);
				n += a.length - o.length, typeof i == "string" && i.length > 0 && o.length > 0 ? t.push({
					title: i,
					links: o
				}) : n += 1;
			}
			(n > 0 || t.length !== e.length) && (console.warn("tk-footer: malformed column entries dropped — columns need a non-empty title and at least one usable link"), this.columns = t);
		}
	}
	render() {
		let e = Gt.call(O(Ut, this)), t = Kt.call(O(Ut, this)), n = typeof this.phone == "string" && this.phone.length > 0 ? this.phone : null;
		return v`
      <footer class="footer">
        ${e.length > 0 ? v`
              <div class="directory">
                ${e.map((e) => v`
                    <section class="column">
                      <h3 class="column__header">${e.title}</h3>
                      <ul class="column__list">
                        ${(e.links ?? []).map((e) => Ht(e) ? v`
                                <li><a class="column__link" href=${e.href}>${e.label}</a></li>
                              ` : b)}
                      </ul>
                    </section>
                  `)}
              </div>
            ` : b}
        <div class="bottom">
          ${t.length > 0 ? v`
                <ul class="pills">
                  ${t.map((e) => Ht(e) ? v`
                          <li><a class="pill" href=${e.href}>${e.label}</a></li>
                        ` : b)}
                </ul>
              ` : b}
          ${n == null ? b : v`<p class="phone">${n}</p>`}
          <div class="legal">
            <slot></slot>
          </div>
        </div>
      </footer>
    `;
	}
};
Vt = Wt;
function Gt() {
	return (this.columns ?? []).filter((e) => e != null && typeof e.title == "string" && e.title.length > 0 && Array.isArray(e.links) && e.links.length > 0);
}
function Kt() {
	return this.quickLinks ?? [];
}
Vt.styles = [Bt], T([w({
	type: Array,
	attribute: !1
})], Wt.prototype, "columns", void 0), T([w({
	type: Array,
	attribute: !1
})], Wt.prototype, "quickLinks", void 0), T([w({
	type: String,
	attribute: "phone"
})], Wt.prototype, "phone", void 0), customElements.get("tk-footer") || customElements.define("tk-footer", Wt);
//#endregion
//#region packages/components/src/link/link.css.ts
var qt = o`
  /* Inline by default so the element flows inside sentences; the variant
     rules below reshape the anchor for the standalone box. */
  :host {
    display: inline;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  /* Interactive-target floor while disabled: clicks die at the element
     boundary (the aria-disabled pattern keeps the link focusable). */
  :host([disabled]) {
    pointer-events: none;
  }

  .link {
    font-family: var(--tk-font-body);
    color: var(--tk-color-link);
    /* Rest = NO visible underline (the capture's plain word): the line is
       painted with a TRANSPARENT decoration color rather than omitted, so
       its hover/focus appearance FADES on the motion token (EXPERIENCE
       State Patterns' 150ms letter — the token layer collapses it to 0ms
       under prefers-reduced-motion) instead of popping in. focus-visible
       means the underline is ALWAYS the keyboard's focus indicator —
       pointer clicks never flash it. */
    text-decoration: underline;
    text-decoration-color: transparent;
    transition:
      text-decoration-color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .link:hover,
  .link:focus-visible {
    text-decoration-color: currentColor;
  }

  /* --- Variants. -- */

  /* Standalone: body-m on its own line — the card «Читать далее» register.
     The interactive target is padded to the 44×44 floor without painting
     anything: min-height carries the block axis and the inline padding
     (space-12 each side) carries short labels («Далее») under 44px wide —
     the button-compact pairing precedent. align-items centers the text in
     the taller box, the underline stays at the text. */
  :host([variant='standalone']) .link {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding-inline: var(--tk-space-12);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
  }

  /* Legal: body-xs gray fine print (footer legal copy) — the ONLY variant
     that changes color; no underline at rest, same hover/focus affordance. */
  :host([variant='legal']) .link {
    font-size: var(--tk-text-body-xs-size);
    font-weight: var(--tk-text-body-xs-weight);
    line-height: var(--tk-text-body-xs-leading);
    letter-spacing: var(--tk-text-body-xs-tracking);
    color: var(--tk-color-text-secondary);
  }

  /* --- Disabled: 40% opacity, no pointer events (host-level above); the
     anchor carries aria-disabled (template). The element stays focusable —
     the underline may still show on keyboard focus, mirroring how the
     button's ring behaves while disabled. --- */
  :host([disabled]) .link {
    opacity: 0.4;
    cursor: default;
  }
`, Jt, R = class e extends C {
	constructor() {
		super(), this.variant = "inline", this.disabled = !1, this.handleClick = (e) => {
			this.disabled && (e.preventDefault(), e.stopImmediatePropagation());
		}, this.addEventListener("click", this.handleClick);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "inline");
	}
	render() {
		return v`
      <a
        class="link"
        href=${this.href ?? b}
        target=${this.target ?? b}
        rel=${this.rel ?? b}
        aria-disabled=${this.disabled ? "true" : b}
      >
        <slot></slot>
      </a>
    `;
	}
};
Jt = R, Jt.variants = [
	"inline",
	"standalone",
	"legal"
], Jt.styles = [qt], T([w({ reflect: !0 })], R.prototype, "variant", void 0), T([w({
	type: Boolean,
	reflect: !0
})], R.prototype, "disabled", void 0), T([w({ type: String })], R.prototype, "href", void 0), T([w({ type: String })], R.prototype, "target", void 0), T([w({ type: String })], R.prototype, "rel", void 0), customElements.get("tk-link") || customElements.define("tk-link", R);
//#endregion
//#region packages/components/src/overlays/controller.ts
var Yt = "tk-overlay-root", Xt = {
	dropdown: "var(--tk-z-dropdown)",
	popover: "var(--tk-z-popover)",
	tooltip: "var(--tk-z-tooltip)",
	modal: "var(--tk-z-modal)",
	toast: "var(--tk-z-toast)"
}, z = null, Zt = /* @__PURE__ */ new Map();
function Qt() {
	if (z && z.isConnected) return z;
	let e = z ? Array.from(z.children) : [];
	z = document.createElement("div"), z.id = Yt, z.style.position = "fixed", z.style.inset = "0", z.style.pointerEvents = "none", document.body.appendChild(z);
	for (let t of e) z.appendChild(t);
	return z;
}
function $t(e, t) {
	if (typeof document > "u" || !document.body) return {
		element: e,
		layer: t,
		strategy: "container",
		release: () => void 0
	};
	if (!Object.prototype.hasOwnProperty.call(Xt, t)) throw Error(`mountOverlay: unknown overlay layer '${String(t)}' — no --tk-z-* token for it`);
	let n = Zt.get(e);
	if (n) {
		if (n.layer !== t) throw Error(`mountOverlay: element is already mounted as layer '${n.layer}' — refusing the silent switch to '${t}' (release first)`);
		return n;
	}
	let r = e.style.zIndex, i = e.style.pointerEvents, a = e.getAttribute("popover"), o = "container";
	if (typeof e.showPopover == "function") {
		e.setAttribute("popover", "manual");
		try {
			e.showPopover(), o = "popover";
		} catch {
			a === null ? e.removeAttribute("popover") : e.setAttribute("popover", a);
		}
	}
	e.style.zIndex = Xt[t];
	let s = !1;
	o === "container" && (e.style.pointerEvents = "auto", s = !0, Qt().appendChild(e));
	let c = !1, l = {
		element: e,
		layer: t,
		strategy: o,
		release: () => {
			if (!c) {
				if (c = !0, Zt.delete(e), o === "popover") {
					try {
						e.matches(":popover-open") && e.hidePopover();
					} catch {}
					a === null ? e.removeAttribute("popover") : e.setAttribute("popover", a);
				}
				z && e.parentElement === z && z.removeChild(e), e.style.zIndex = r, s && (e.style.pointerEvents = i), z && z.childElementCount === 0 && (z.remove(), z = null);
			}
		}
	};
	return Zt.set(e, l), l;
}
//#endregion
//#region packages/components/src/overlays/scroll-lock.ts
var en = /* @__PURE__ */ new Set(), B = null;
function tn() {
	let e = document.documentElement, t = document.body;
	if (!t) return;
	let n = e.clientWidth, r = n > 0 ? Math.max(0, window.innerWidth - n) : 0;
	if (B = {
		htmlOverflow: e.style.overflow,
		htmlPaddingRight: e.style.paddingRight,
		bodyOverflow: t.style.overflow
	}, e.style.overflow = "hidden", t.style.overflow = "hidden", r > 0) {
		let t = parseFloat(getComputedStyle(e).paddingRight);
		e.style.paddingRight = `${r + (Number.isNaN(t) ? 0 : t)}px`;
	}
}
function nn() {
	if (!B) return;
	let e = document.documentElement, t = document.body;
	e.style.overflow = B.htmlOverflow, e.style.paddingRight = B.htmlPaddingRight, t && (t.style.overflow = B.bodyOverflow), B = null;
}
function rn() {
	if (typeof document > "u" || typeof window > "u" || !document.body) return { release: () => void 0 };
	let e = {};
	en.add(e), en.size === 1 && tn();
	let t = !1;
	return { release: () => {
		t || (t = !0, en.delete(e) && en.size === 0 && nn());
	} };
}
//#endregion
//#region packages/components/src/overlays/positioning.ts
var an = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function on(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
function sn(e, t, n, r = {}) {
	let i = r.placement ?? "bottom", a = r.offset ?? 0, o = r.viewportPadding ?? 8;
	if (!Object.prototype.hasOwnProperty.call(an, i)) throw Error(`positionFloating: unknown placement '${String(i)}' — expected top/right/bottom/left`);
	let s = e.left + e.width, c = e.top + e.height, l = (r) => {
		switch (r) {
			case "bottom": return c + a + t.height <= n.height - o;
			case "top": return e.top - a - t.height >= o;
			case "right": return s + a + t.width <= n.width - o;
			case "left": return e.left - a - t.width >= o;
		}
	}, u = i;
	!l(i) && l(an[i]) && (u = an[i]);
	let d, f;
	switch (u) {
		case "bottom":
			d = c + a, f = e.left;
			break;
		case "top":
			d = e.top - a - t.height, f = e.left;
			break;
		case "right":
			f = s + a, d = e.top;
			break;
		case "left": f = e.left - a - t.width, d = e.top;
	}
	return f = on(f, o, n.width - t.width - o), d = on(d, o, n.height - t.height - o), {
		top: d,
		left: f,
		placement: u
	};
}
function cn(e, t) {
	let n = t.placement ?? "bottom";
	if (typeof window > "u") return {
		get placement() {
			return n;
		},
		reposition: () => void 0,
		release: () => void 0
	};
	let r = {
		position: e.style.position,
		top: e.style.top,
		left: e.style.left,
		width: e.style.width,
		minWidth: e.style.minWidth
	}, i = n, a = !1, o = null, s = !1, c = (n) => {
		if (t.matchAnchorWidth === !0) e.style.width = `${n}px`;
		else if (t.matchAnchorWidth === "min") e.style.minWidth = `${n}px`;
		else if (t.matchAnchorWidth !== void 0) throw Error(`positionFloating: matchAnchorWidth must be true | 'min' | undefined — got '${String(t.matchAnchorWidth)}'`);
	}, l = () => {
		a || (a = !0, o !== null && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(o), o = null, s = !1, window.removeEventListener("scroll", d, { capture: !0 }), window.removeEventListener("resize", d), e.style.position = r.position, e.style.top = r.top, e.style.left = r.left, e.style.width = r.width, e.style.minWidth = r.minWidth);
	}, u = () => {
		if (a) return;
		if (!t.anchor.isConnected) {
			l();
			return;
		}
		let n = t.anchor.getBoundingClientRect();
		t.matchAnchorWidth !== void 0 && c(n.width);
		let r = e.getBoundingClientRect(), o = sn({
			top: n.top,
			left: n.left,
			width: n.width,
			height: n.height
		}, {
			width: r.width,
			height: r.height
		}, {
			width: window.innerWidth,
			height: window.innerHeight
		}, t);
		e.style.position = "fixed", e.style.top = `${o.top}px`, e.style.left = `${o.left}px`, i = o.placement;
	}, d = () => {
		if (!(a || s)) {
			if (typeof requestAnimationFrame != "function") {
				u();
				return;
			}
			s = !0, o = requestAnimationFrame(() => {
				s = !1, o = null, u();
			});
		}
	};
	return u(), window.addEventListener("scroll", d, {
		capture: !0,
		passive: !0
	}), window.addEventListener("resize", d, { passive: !0 }), {
		get placement() {
			return i;
		},
		reposition: u,
		release: l
	};
}
//#endregion
//#region packages/components/src/overlays/focus-trap.ts
var ln = [
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"iframe",
	"object",
	"embed",
	"summary",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable=\"false\"])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(","), un = [];
function dn(e) {
	let t = [];
	for (let n of Array.from(e.querySelectorAll("*"))) n.matches(ln) && t.push(n), n.shadowRoot && t.push(...dn(n.shadowRoot));
	return t;
}
function fn(e) {
	let t = dn(e);
	return e.shadowRoot && t.push(...dn(e.shadowRoot)), t;
}
function pn() {
	let e = document.activeElement instanceof HTMLElement ? document.activeElement : null;
	for (; e !== null && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement instanceof HTMLElement ? e.shadowRoot.activeElement : null;
	return e;
}
function mn(e, t) {
	let n = t;
	for (; n;) {
		if (n === e) return !0;
		let t = n.parentElement;
		if (t) {
			n = t;
			continue;
		}
		let r = n.getRootNode();
		n = r instanceof ShadowRoot ? r.host : null;
	}
	return !1;
}
function hn(e, t = {}) {
	if (typeof document > "u") return { release: () => void 0 };
	let n = {
		container: e,
		onKeydown: (t) => {
			if (t.key !== "Tab" || t.defaultPrevented || un[un.length - 1] !== n) return;
			let r = fn(e);
			if (r.length === 0) return;
			let i = r[0], a = r[r.length - 1], o = pn();
			if (!(o !== null && mn(e, o))) {
				t.preventDefault(), (t.shiftKey ? a : i).focus();
				return;
			}
			t.shiftKey && (o === i || o === e) ? (t.preventDefault(), a.focus()) : !t.shiftKey && o === a && (t.preventDefault(), i.focus());
		}
	};
	e.addEventListener("keydown", n.onKeydown), un.push(n);
	let r = pn();
	((t.initialFocus !== void 0 && t.initialFocus !== "first" ? t.initialFocus : void 0) ?? fn(e)[0])?.focus();
	let i = !1;
	return { release: () => {
		if (i) return;
		i = !0, e.removeEventListener("keydown", n.onKeydown);
		let t = un.indexOf(n);
		t !== -1 && un.splice(t, 1), r && r.isConnected && r.focus();
	} };
}
//#endregion
//#region packages/components/src/navbar/navbar.css.ts
var gn = o`
  :host {
    display: block;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  /* --- The bar ------------------------------------------------------------- */
  .bar {
    height: var(--tk-navbar-height, 72px);
    background: var(--tk-navbar-fill, var(--tk-color-surface-base));
    /* Transparent at rest: the hairline appears WITH the shadow on scroll. */
    border-bottom: 1px solid transparent;
    transition:
      box-shadow var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard),
      border-color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  /* Sticky bar: the one sanctioned non-overlay z consumption — the bar is
     in-flow (sticky), not a floating surface, and must out-paint page
     content sliding under it. The DRAWER never appears here: its stacking
     is the overlay controller's. */
  :host([sticky]) .bar {
    position: sticky;
    top: 0;
    z-index: var(--tk-z-nav);
  }

  /* Past the threshold (the passive scroll listener flips this attribute):
     shadow-default + hairline fade in over the 150ms token. */
  :host([data-scrolled]) .bar {
    box-shadow: var(--tk-shadow-default);
    border-bottom-color: var(--tk-color-border-default);
  }

  .bar__inner {
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    gap: var(--tk-space-8);
    max-width: var(--tk-space-container);
    height: 100%;
    margin-inline: auto;
    padding-inline: var(--tk-space-24);
  }

  .bar__logo {
    display: flex;
    align-items: center;
    flex: none;
    margin-inline-end: var(--tk-space-48);
  }

  .utilities {
    display: flex;
    align-items: center;
    gap: var(--tk-space-12);
    margin-inline-start: auto;
  }

  /* --- Links ---------------------------------------------------------------- */
  .links {
    display: flex;
    align-items: stretch;
    min-width: 0;
  }

  /* The anchor IS the full-height hit target (the underline sits on the bar's
     bottom edge); shrink-under-constraint like tabs — the LABEL span carries
     the ellipsis (an inline-flex anchor's own text-overflow never engages:
     its text lives in an anonymous box the overflow can't reach; the span is
     the flex child that finally shrinks, the tabs .tab__label mold). */
  .link {
    position: relative;
    display: inline-flex;
    flex: 0 1 auto;
    min-width: 0;
    align-items: center;
    padding-inline: var(--tk-space-12);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-navbar-link, var(--tk-color-text-secondary));
    text-decoration: none;
    transition: color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .link__label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .link:hover {
    color: var(--tk-navbar-link-hover, var(--tk-color-text-primary));
  }

  .link:focus-visible,
  .sublink:focus-visible,
  .drawer__link:focus-visible {
    outline: 2px solid var(--tk-color-focus-ring);
    outline-offset: 2px;
  }

  /* ACTIVE: the AA redundancy pair — 700-weight ink text + the 4px
     primary-blue underline pinned to the border edge. Color NEVER carries
     the state alone. */
  .link[aria-current='page'] {
    color: var(--tk-navbar-link-active, var(--tk-color-text-primary));
    font-weight: var(--tk-text-heading-2-weight);
  }

  .link[aria-current='page']::after {
    content: '';
    position: absolute;
    inset-inline: var(--tk-space-12);
    bottom: 0;
    height: 4px;
    background: var(--tk-navbar-underline, var(--tk-color-yellow-100));
  }

  /* --- Sub-nav row 2 (Story 7.1 — mega-nav) ---------------------------------- */
  /* The bar grows to its rows' own heights: row 1 keeps its DESIGN 72px via
     the explicit .bar__inner height (the v1 .bar__inner height:100% only
     resolves against the fixed 72px .bar; with the wrapper at auto the row
     must carry the height itself). Sticky/z, the scrolled shadow + hairline,
     and the fill all stay ON .bar — the shadow paints under the LAST row. */
  .bar--subnav {
    height: auto;
  }

  .bar--subnav .bar__inner {
    height: var(--tk-navbar-height, 72px);
  }

  /* 64px = the CAPTURE LITERAL (pattern-header-meganav.png row 2 spans
     y65–128; see the file header) — FLAGGED: no token exists, so the value
     rides this hook (override per instance, not per theme). */
  .subnav {
    height: var(--tk-navbar-subnav-height, 64px);
  }

  /* The row-2 REGISTER: the SAME container math as .bar__inner (max-width
     container, auto margins, space-24 inline padding) — the sub-nav link
     boxes start at the content-box register where row 1's flow starts
     (probe: row-2 links x88 == the container edge, NOT the row-1 post-logo
     text position x124). DIVIDER between the rows (TRUED, story 7.1
     triage): the reference paints a 1px hairline ON the seam spanning the
     CONTAINER register only (probe: y64, x88–1191 — nothing outside it),
     so it is a ::before on this container box, NOT a .subnav border (a
     border there would span the full bar width) and NOT on .bar (v1's
     bottom hairline must stay where it is). Token semantics:
     border-default (#E7E8EA) vs the capture's #DDDFE0 — nearest token,
     delta recorded in verify/mega-nav/NOTES.md. Without subLinks none of
     these nodes render — v1 stays byte-identical, no divider. */
  .subnav__inner {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    max-width: var(--tk-space-container);
    height: 100%;
    margin-inline: auto;
    padding-inline: var(--tk-space-24);
  }

  .subnav__inner::before {
    content: '';
    position: absolute;
    inset-inline: 0;
    top: 0;
    height: 1px;
    background: var(--tk-color-border-default);
  }

  /* Plain text links — the .link mold: full-row-height hit target (≥44px),
     padding-inline for the gap rhythm (probe: ~26px between row-2 label
     ends ≈ the two space-12 paddings), the label span as the shrinking
     ellipsis child (the .link__label precedent — an inline-flex anchor's
     own text-overflow never engages). position:relative anchors the ACTIVE
     underline's ::after exactly as .link anchors row 1's. */
  .sublink {
    position: relative;
    display: inline-flex;
    flex: 0 1 auto;
    min-width: 0;
    align-items: center;
    padding-inline: var(--tk-space-12);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-navbar-sublink, var(--tk-color-text-secondary));
    text-decoration: none;
    transition: color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .sublink__label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sublink:hover {
    color: var(--tk-navbar-sublink-hover, var(--tk-color-text-primary));
  }

  /* ACTIVE (TRUED, story 7.1 triage): 700 text-primary + a 2px underline at
     the row's bottom edge — the reference DOES paint one (probe: 2px
     #666666 at y127–128, x150–196 under «Каталог» — the row's last 2px;
     the initial y118–120 probes missed it, vision + extended scanlines
     found it). The mechanism mirrors row 1's ::after verbatim
     (inset-inline space-12 = the label box, bottom 0) at HALF the stroke
     and WITHOUT a yellow: the reference stripe is gray — token semantics
     text-secondary (#616871) vs the capture's #666666, delta recorded in
     verify/mega-nav/NOTES.md. */
  .sublink[aria-current='page'] {
    color: var(--tk-navbar-sublink-active, var(--tk-color-text-primary));
    font-weight: var(--tk-text-heading-2-weight);
  }

  .sublink[aria-current='page']::after {
    content: '';
    position: absolute;
    inset-inline: var(--tk-space-12);
    bottom: 0;
    height: 2px;
    background: var(--tk-color-text-secondary);
  }

  /* --- Burger (<768px — media query, container queries deferred) ------------- */
  .burger {
    display: none;
    flex: none;
    align-self: center;
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-inline-start: var(--tk-space-8);
    border: none;
    border-radius: var(--tk-radius-full);
    background: var(--tk-navbar-burger-fill, var(--tk-color-surface-muted));
    color: var(--tk-navbar-link-active, var(--tk-color-text-primary));
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .burger:focus-visible {
    outline: 2px solid var(--tk-color-focus-ring);
    outline-offset: 2px;
  }

  .burger svg {
    flex: none;
  }

  /* --- The drawer (bottom sheet; stacking/position/lock/trap are the
     controller's — this sheet only styles its own surface) ------------------- */
  .drawer {
    box-sizing: border-box;
    max-height: calc(100dvh - var(--tk-navbar-height, 72px));
    overflow-y: auto;
    padding: var(--tk-space-8) var(--tk-space-16) var(--tk-space-24);
    background: var(--tk-navbar-drawer-fill, var(--tk-color-surface-base));
    /* POPOVER UA RESET (found at the 3.10 composition; the tk-select panel
       precedent in select.css.ts): the controller mounts this sheet via the
       popover path, and UA [popover] styles it "inset: 0; margin: auto;
       border: solid" — without an author-origin reset the margin:auto
       re-centers the box between the positioner's inline top and the UA
       bottom:0 (a drawer floating ~260px below the bar at 360×800, measured
       live), and the UA border paints a stray dark outline. Author rules win
       over UA regardless of specificity. */
    border: none;
    margin: 0;
    inset: auto;
    border-radius: var(--tk-radius-lg) var(--tk-radius-lg) 0 0;
    box-shadow: var(--tk-shadow-popover);
  }

  .drawer[hidden] {
    display: none;
  }

  /* Entrance: productive-entrance curve (AD-9 overlay mapping), moderate
     duration. positionFloating owns the inline top/left; the transform
     rides on top without fighting it. */
  .drawer:not([hidden]) {
    animation: tk-navbar-drawer-in var(--tk-motion-duration-moderate)
      var(--tk-motion-curve-productive-entrance);
  }

  @keyframes tk-navbar-drawer-in {
    from {
      opacity: 0;
      transform: translateY(var(--tk-space-16));
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .drawer:not([hidden]) {
      animation: none;
    }
  }

  .drawer__content {
    display: block;
  }

  .drawer__nav {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  /* Drawer links: the same register as bar links, one per row at the ≥44px
     target; the active treatment repeats the redundancy pair (700 weight +
     the 4px underline pinned to the row's bottom edge). */
  .drawer__link {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 44px;
    padding-inline: var(--tk-space-12);
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-navbar-link, var(--tk-color-text-secondary));
    text-decoration: none;
  }

  .drawer__link[aria-current='page'] {
    color: var(--tk-navbar-link-active, var(--tk-color-text-primary));
    font-weight: var(--tk-text-heading-2-weight);
  }

  .drawer__link[aria-current='page']::after {
    content: '';
    position: absolute;
    inset-inline: var(--tk-space-12);
    bottom: 0;
    height: 4px;
    background: var(--tk-navbar-underline, var(--tk-color-yellow-100));
  }

  /* --- The breakpoint flip --------------------------------------------------- */
  @media (max-width: 767px) {
    .bar {
      height: var(--tk-navbar-height-mobile, 56px);
    }

    /* The sheet hangs from the MOBILE bar — the height cap must subtract
       the mobile token, not the desktop 72px default above. */
    .drawer {
      max-height: calc(100dvh - var(--tk-navbar-height-mobile, 56px));
    }

    .links {
      display: none;
    }

    /* The sub-nav row is DESKTOP-ONLY chrome (the mobile capture shows no
       row 2; the drawer stays v1's row-1 model) — display:none also drops
       its links from the tab order and the axe/landmark surface. */
    .subnav {
      display: none;
    }

    /* The .bar--subnav .bar__inner explicit height (72px, above) would
       out-specify the mobile flip — restate it at the same (0,2,0) here so
       the mobile bar keeps its 56px probe height with the sub-nav gone. */
    .bar--subnav .bar__inner {
      height: var(--tk-navbar-height-mobile, 56px);
    }

    .burger {
      display: inline-flex;
    }
  }
`, _n, vn = "Навигация", yn = "Разделы", bn = "Меню", V = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakSet(), On = /* @__PURE__ */ new WeakMap(), W = class extends C {
	constructor(...e) {
		super(...e), E(this, U), D(this, V, void 0), D(this, xn, void 0), D(this, Sn, void 0), D(this, H, void 0), D(this, Cn, void 0), D(this, wn, void 0), D(this, Tn, void 0), D(this, En, void 0), D(this, Dn, void 0), D(this, On, void 0), this.links = [], this.subLinks = [], this.subLabel = yn, this.sticky = !0, this.burgerLabel = bn, k(V, this, !1), k(xn, this, !1), k(Sn, this, !1), k(H, this, null), k(Cn, this, null), k(wn, this, null), k(Tn, this, null), k(En, this, null), k(On, this, () => {
			if (typeof window > "u") return;
			let e = (window.scrollY ?? 0) >= 10;
			e !== A(xn, this) && (k(xn, this, e), e ? this.setAttribute("data-scrolled", "") : this.removeAttribute("data-scrolled"));
		});
	}
	willUpdate(e) {
		e.has("links") && O(U, this, Mn).call(this, "links"), e.has("subLinks") && O(U, this, Mn).call(this, "subLinks");
	}
	connectedCallback() {
		super.connectedCallback(), typeof window < "u" && window.addEventListener("scroll", A(On, this), { passive: !0 }), A(On, this).call(this);
	}
	disconnectedCallback() {
		typeof window < "u" && window.removeEventListener("scroll", A(On, this)), A(V, this) && O(U, this, In).call(this), super.disconnectedCallback();
	}
	render() {
		let e = An.call(O(U, this)), t = this.activeValue, n = jn.call(O(U, this)), r = this.subActiveValue, i = n.length > 0, a = this.subLabel.trim() || yn, o = this.burgerLabel.trim() || bn;
		return v`
      <header class="bar${i ? " bar--subnav" : ""}">
        <div class="bar__inner">
          <div class="bar__logo">
            <slot name="logo"></slot>
          </div>
          <nav class="links" aria-label="${vn}">
            ${e.map((e) => {
			let n = e.value === t;
			return v`
                <a
                  class="link"
                  href=${e.href}
                  aria-current=${n ? "page" : b}
                ><span class="link__label">${e.label}</span></a
                >
              `;
		})}
          </nav>
          <div class="utilities">
            <slot name="utilities"></slot>
          </div>
          <button
            type="button"
            class="burger"
            aria-label=${o}
            aria-expanded=${A(V, this) ? "true" : "false"}
            aria-controls="${kn.call(O(U, this))}-drawer"
            @click=${O(U, this, Ln)}
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M4 7h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 17h16"></path>
            </svg>
          </button>
        </div>
        ${i ? v`
              <nav class="subnav" aria-label=${a}>
                <div class="subnav__inner">
                  ${n.map((e) => {
			let t = e.value === r;
			return v`
                      <a
                        class="sublink"
                        href=${e.href}
                        aria-current=${t ? "page" : b}
                      ><span class="sublink__label">${e.label}</span></a
                      >
                    `;
		})}
                </div>
              </nav>
            ` : b}
      </header>
      <div
        class="drawer"
        id="${kn.call(O(U, this))}-drawer"
        role="dialog"
        aria-modal="true"
        aria-label=${o}
        ?hidden=${!A(V, this)}
        @keydown=${O(U, this, Rn)}
        @click=${O(U, this, zn)}
      >
        <div class="drawer__content">
          <slot name="burger" @slotchange=${O(U, this, Bn)}>
            ${A(Sn, this) ? b : v`
                  <nav class="drawer__nav" aria-label="${vn}">
                    ${e.map((e) => {
			let n = e.value === t;
			return v`
                        <a
                          class="drawer__link"
                          href=${e.href}
                          aria-current=${n ? "page" : b}
                          >${e.label}</a
                        >
                      `;
		})}
                  </nav>
                `}
          </slot>
        </div>
      </div>
    `;
	}
};
_n = W;
function kn() {
	var e;
	return A(Dn, this) ?? k(Dn, this, `tk-navbar-${Vn._ = (e = Vn._, ++e)}`), A(Dn, this);
}
function An() {
	return this.links ?? [];
}
function jn() {
	return this.subLinks ?? [];
}
function Mn(e) {
	let t = this[e] ?? [], n = /* @__PURE__ */ new Set(), r = t.filter((e) => {
		let t = e?.value;
		return t == null || t === "" || n.has(t) ? !1 : (n.add(t), !0);
	});
	this[e] != null && r.length !== t.length && (console.warn(`tk-navbar: duplicate or value-less ${e === "links" ? "link" : "sub-link"} entries dropped — ${e === "links" ? "link values" : "sub-link values"} must be unique non-empty strings (first occurrence wins)`), this[e] = r);
}
function Nn() {
	return this.renderRoot.querySelector(".drawer") ?? A(En, this);
}
function Pn() {
	return this.renderRoot.querySelector(".burger");
}
async function Fn() {
	if (A(V, this) || (k(V, this, !0), this.requestUpdate(), await this.updateComplete, !A(V, this) || !this.isConnected || A(H, this))) return;
	let e = O(U, this, Nn).call(this), t = this.renderRoot.querySelector(".bar");
	if (!e || !t) {
		k(V, this, !1), this.requestUpdate();
		return;
	}
	k(En, this, e), e.hidden = !1, k(H, this, $t(e, "dropdown")), k(Cn, this, cn(e, {
		anchor: t,
		placement: "bottom",
		matchAnchorWidth: !0,
		viewportPadding: 0
	})), k(wn, this, rn()), k(Tn, this, hn(e));
}
function In() {
	if (!A(V, this)) return;
	k(V, this, !1), A(Tn, this)?.release(), k(Tn, this, null), A(wn, this)?.release(), k(wn, this, null), A(Cn, this)?.release(), k(Cn, this, null), A(H, this)?.release(), k(H, this, null);
	let e = O(U, this, Nn).call(this);
	e && (e.isConnected || this.renderRoot.appendChild(e), e.hidden = !0), this.requestUpdate(), O(U, this, Pn).call(this)?.focus();
}
function Ln() {
	A(V, this) ? O(U, this, In).call(this) : O(U, this, Fn).call(this).catch((e) => {
		console.warn("tk-navbar: drawer open failed — closing cleanly", e), O(U, this, In).call(this);
	});
}
function Rn(e) {
	e.key === "Escape" && (e.preventDefault(), O(U, this, In).call(this));
}
function zn(e) {
	if (!A(V, this)) return;
	let t = e.target;
	t && typeof t.closest == "function" && t.closest("a") && O(U, this, In).call(this);
}
function Bn(e) {
	let t = e.target.assignedElements({ flatten: !0 }).length > 0;
	t !== A(Sn, this) && (k(Sn, this, t), this.requestUpdate());
}
_n.styles = [gn];
var Vn = { _: 0 };
T([w({
	type: Array,
	attribute: !1
})], W.prototype, "links", void 0), T([w({
	type: String,
	attribute: "active-value"
})], W.prototype, "activeValue", void 0), T([w({
	type: Array,
	attribute: !1
})], W.prototype, "subLinks", void 0), T([w({
	type: String,
	attribute: "sub-active-value"
})], W.prototype, "subActiveValue", void 0), T([w({
	type: String,
	attribute: "sub-label"
})], W.prototype, "subLabel", void 0), T([w({
	type: Boolean,
	reflect: !0
})], W.prototype, "sticky", void 0), T([w({
	type: String,
	attribute: "burger-label"
})], W.prototype, "burgerLabel", void 0), customElements.get("tk-navbar") || customElements.define("tk-navbar", W);
//#endregion
//#region packages/components/src/promo-card/promo-card.css.ts
var Hn = o`
  :host {
    display: block;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    min-width: 0;
    padding: var(--tk-promo-card-padding, var(--tk-space-32));
    border-radius: var(--tk-promo-card-radius, var(--tk-radius-xxl));
    background: var(--tk-promo-card-fill, var(--tk-color-tint-gray));
    color: var(--tk-promo-card-text, var(--tk-color-text-primary));
    font-family: var(--tk-font-body);
  }

  /* --- Tint auto-pairing: per-tint token consumption (no theme branches) --- */

  :host([variant='bluegray']) .card {
    background: var(--tk-promo-card-fill, var(--tk-color-tint-bluegray));
  }

  :host([variant='mint']) .card {
    background: var(--tk-promo-card-fill, var(--tk-color-tint-mint));
  }

  :host([variant='beige']) .card {
    background: var(--tk-promo-card-fill, var(--tk-color-tint-beige));
  }

  /* Charcoal pairs WHITE text (DESIGN Colors: charcoal pairs white text;
     the tint itself is theme-invariant). */
  :host([variant='charcoal']) .card {
    background: var(--tk-promo-card-fill, var(--tk-color-tint-charcoal));
    color: var(--tk-promo-card-text, var(--tk-color-white));
  }

  :host([variant='charcoal']) .card__description {
    color: var(--tk-promo-card-text-muted, var(--tk-color-white));
  }

  /* Charcoal CTA pair (review finding 1): the slotted tk-button secondary's
     pill is --tk-color-surface-base (dark: #1A1A1A — invisible on the
     theme-invariant charcoal) and its label is --tk-color-text-primary
     (dark: white). Re-scoped to the hook PAIR inside the actions zone —
     flat-tree inheritance carries them into the slotted button. */
  :host([variant='charcoal']) .card__actions {
    --tk-color-surface-base: var(--tk-promo-card-cta-fill, var(--tk-color-white));
    --tk-color-text-primary: var(--tk-promo-card-cta-text, var(--tk-color-ink-300));
  }

  /* --- Anatomy --------------------------------------------------------------- */

  /* Art zone: COLLAPSED without slotted art (the data-has-art attribute the
     element toggles on slotchange — no stray 24px margin when empty). */
  .card__art {
    display: none;
  }

  :host([data-has-art]) .card__art {
    display: flex;
    margin-bottom: var(--tk-space-24);
  }

  .card__art ::slotted(img) {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .card__body {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  .card__heading {
    margin: 0 0 var(--tk-space-8);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-heading-5-size);
    font-weight: var(--tk-text-heading-5-weight);
    line-height: var(--tk-text-heading-5-leading);
    text-align: center;
  }

  .card__description {
    margin: 0;
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-promo-card-text-muted, var(--tk-color-text-secondary));
    text-align: center;
  }

  /* The CTA zone: the consumer's slotted tk-button secondary (white pill);
     margin-top:auto pins it BOTTOM-CENTER across varying description lengths. */
  .card__actions {
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top: var(--tk-space-24);
  }

  /* --- Skeleton (the shared card pattern): quiet-rail blocks matching the
     final layout; STATIC by design — no shimmer exists, so the
     reduced-motion path is the same render (noted in promo-card.ts).
     Fill is the border-default semantic (5.4 dark sweep): light value
     byte-identical to gray-200 (#E7E8EA), dark remaps to the white-alpha
     tonal step — gray-200 painted near-white blocks in dark. --- */

  .sk {
    background: var(--tk-color-border-default);
  }

  .sk--art {
    aspect-ratio: 4 / 3;
    margin-bottom: var(--tk-space-24);
    border-radius: var(--tk-radius-lg);
  }

  .sk--heading {
    width: 60%;
    height: var(--tk-text-heading-5-size);
    margin-bottom: var(--tk-space-12);
    border-radius: var(--tk-radius-full);
  }

  .sk--line {
    width: 90%;
    height: var(--tk-text-body-m-size);
    margin-bottom: var(--tk-space-8);
    border-radius: var(--tk-radius-full);
  }

  .sk--cta {
    width: 40%;
    height: var(--tk-space-48);
    margin-top: auto;
    border-radius: var(--tk-radius-full);
  }

  /* --- Art mode bleed (Story 10.3) — see the header's ART MODE BLEED
     section for the probe record. Every rule gated on [art-mode='bleed'];
     placed AFTER the anatomy rules so equal-specificity bleed overrides
     (margin-block-end over top mode's space-24) win by source order. --- */

  /* The actions overlay anchors to the card. */
  :host([art-mode='bleed']) .card {
    position: relative;
  }

  /* The zone: BELOW the body (flex order — the DOM stays art-first),
     escaping the padding on negative margins that track the SAME padding
     hooks, clipped to the card's bottom corners. margin-block-end replaces
     top mode's space-24 rhythm (negative — pulls flush to the card edge). */
  :host([art-mode='bleed']) .card__art {
    order: 2;
    margin-inline: calc(-1 * var(--tk-promo-card-padding, var(--tk-space-32)));
    margin-block-end: calc(-1 * var(--tk-promo-card-padding, var(--tk-space-32)));
    overflow: hidden;
    border-radius: 0 0 var(--tk-promo-card-radius, var(--tk-radius-xxl))
      var(--tk-promo-card-radius, var(--tk-radius-xxl));
  }

  /* Slotted art: the reference mold — full width, NATURAL height
     (object-fit unconsumed). The svg companion serves the showcase's
     inline illustration (header note). */
  :host([art-mode='bleed']) .card__art ::slotted(img),
  :host([art-mode='bleed']) .card__art ::slotted(svg) {
    display: block;
    width: 100%;
    height: auto;
  }

  /* The floating pill: absolute overlay (margin-top:auto is void out of
     flow; padding-top:0 kills the top-mode rhythm). Bottom offset probed
     at exactly 32px → space-32 (header record). The re-scope pair — the
     charcoal technique verbatim — keeps the composed tk-button secondary
     WHITE over art in both themes (charcoal + bleed: identical values). */
  :host([art-mode='bleed']) .card__actions {
    position: absolute;
    inset-inline: 0;
    bottom: var(--tk-space-32);
    justify-content: center;
    margin-top: 0;
    padding-top: 0;
    --tk-color-surface-base: var(--tk-promo-card-cta-fill, var(--tk-color-white));
    --tk-color-text-primary: var(--tk-promo-card-cta-text, var(--tk-color-ink-300));
  }

  /* Skeleton mirror: the art placeholder bleeds the same way (aspect 4/3
     stays — placeholder estimate); .sk--cta KEEPS margin-top:auto above —
     the in-flow approximation of the overlay (recorded, not re-derived). */
  :host([art-mode='bleed'][skeleton]) .sk--art {
    order: 2;
    margin-inline: calc(-1 * var(--tk-promo-card-padding, var(--tk-space-32)));
    margin-block-end: calc(-1 * var(--tk-promo-card-padding, var(--tk-space-32)));
    border-radius: 0 0 var(--tk-promo-card-radius, var(--tk-radius-xxl))
      var(--tk-promo-card-radius, var(--tk-radius-xxl));
  }

  /* --- The EXPERIENCE responsive matrix: <768px card padding drops one
     spacing step (32 → 24) — the navbar's breakpoint value. The bleed
     margins re-track the -mobile chain so the zone stays flush (a desktop
     padding override survives the breakpoint — the padding-mobile hook's
     own precedent). --- */

  @media (max-width: 767px) {
    .card {
      padding: var(--tk-promo-card-padding-mobile, var(--tk-space-24));
    }

    :host([art-mode='bleed']) .card__art,
    :host([art-mode='bleed'][skeleton]) .sk--art {
      margin-inline: calc(-1 * var(--tk-promo-card-padding-mobile, var(--tk-space-24)));
      margin-block-end: calc(-1 * var(--tk-promo-card-padding-mobile, var(--tk-space-24)));
    }
  }
`, Un, Wn = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakSet(), K = class e extends C {
	constructor(...e) {
		super(...e), E(this, G), D(this, Wn, void 0), D(this, Gn, void 0), this.variant = "gray", this.artMode = "top", this.skeleton = !1, k(Wn, this, !1), k(Gn, this, !1);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "gray"), t.has("artMode") && !e.artModes.includes(this.artMode) && (this.artMode = "top");
	}
	render() {
		if (this.skeleton) return v`
        <article class="card" aria-busy="true">
          <div class="sk sk--art" aria-hidden="true"></div>
          <div class="sk sk--heading" aria-hidden="true"></div>
          <div class="sk sk--line" aria-hidden="true"></div>
          <div class="sk sk--line" aria-hidden="true"></div>
          <div class="sk sk--cta" aria-hidden="true"></div>
        </article>
      `;
		let e = A(Wn, this) || (this.heading ?? "").length > 0, t = A(Gn, this) || (this.description ?? "").length > 0;
		return v`
      <article class="card">
        <div class="card__art">
          <slot name="art" @slotchange=${O(G, this, Xn)}></slot>
        </div>
        <div class="card__body">
          ${e ? v`<h3 class="card__heading">
                <slot name="heading" @slotchange=${O(G, this, qn)}>${this.heading}</slot>
              </h3>` : v`<slot name="heading" @slotchange=${O(G, this, qn)} hidden></slot>`}
          ${t ? v`<p class="card__description">
                <slot name="description" @slotchange=${O(G, this, Jn)}>
                  ${this.description}
                </slot>
              </p>` : v`<slot
                name="description"
                @slotchange=${O(G, this, Jn)}
                hidden
              ></slot>`}
          <div class="card__actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </article>
    `;
	}
};
Un = K;
function Kn(e) {
	return e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0);
}
function qn(e) {
	k(Wn, this, O(G, this, Kn).call(this, e.target)), this.requestUpdate();
}
function Jn(e) {
	k(Gn, this, O(G, this, Kn).call(this, e.target)), this.requestUpdate();
}
function Yn(e) {
	for (let t of e.assignedElements({ flatten: !0 })) {
		let e = t instanceof HTMLImageElement ? [t] : [...t.querySelectorAll("img")];
		for (let t of e) t.setAttribute("loading", "lazy"), t.setAttribute("decoding", "async");
	}
}
function Xn(e) {
	let t = e.target;
	this.toggleAttribute("data-has-art", t.assignedElements({ flatten: !0 }).length > 0), O(G, this, Yn).call(this, t);
}
Un.variants = [
	"gray",
	"bluegray",
	"mint",
	"beige",
	"charcoal"
], Un.artModes = ["top", "bleed"], Un.styles = [Hn], T([w({ reflect: !0 })], K.prototype, "variant", void 0), T([w({
	reflect: !0,
	attribute: "art-mode"
})], K.prototype, "artMode", void 0), T([w({ type: String })], K.prototype, "heading", void 0), T([w({ type: String })], K.prototype, "description", void 0), T([w({
	type: Boolean,
	reflect: !0
})], K.prototype, "skeleton", void 0), customElements.get("tk-promo-card") || customElements.define("tk-promo-card", K);
//#endregion
//#region packages/components/src/service-card/service-card.css.ts
var Zn = o`
  :host {
    display: block;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    min-width: 0;
    padding: var(--tk-service-card-padding, var(--tk-space-24));
    border-radius: var(--tk-service-card-radius, var(--tk-radius-xl));
    background: var(--tk-service-card-fill, var(--tk-color-tint-gray));
    color: var(--tk-service-card-text, var(--tk-color-text-primary));
    font-family: var(--tk-font-body);
  }

  /* --- Tint auto-pairing: per-tint token consumption (no theme branches) --- */

  :host([variant='bluegray']) .card {
    background: var(--tk-service-card-fill, var(--tk-color-tint-bluegray));
  }

  :host([variant='mint']) .card {
    background: var(--tk-service-card-fill, var(--tk-color-tint-mint));
  }

  :host([variant='beige']) .card {
    background: var(--tk-service-card-fill, var(--tk-color-tint-beige));
  }

  /* Charcoal pairs WHITE text (DESIGN Colors; the tint is theme-invariant);
     the action link follows through its hook — white beats the on-tint blue
     on the dark fill. */
  :host([variant='charcoal']) .card {
    background: var(--tk-service-card-fill, var(--tk-color-tint-charcoal));
    color: var(--tk-service-card-text, var(--tk-color-white));
  }

  :host([variant='charcoal']) .card__description {
    color: var(--tk-service-card-text-muted, var(--tk-color-white));
  }

  :host([variant='charcoal']) .card__actions {
    --tk-color-link: var(--tk-service-card-link, var(--tk-color-white));
  }

  /* --- Anatomy --------------------------------------------------------------- */

  /* Decorative icon tile: the CONTAINER is aria-hidden (set in the
     template) — the projected art announces nothing. */
  .card__icon {
    display: flex;
    width: var(--tk-space-48);
    height: var(--tk-space-48);
    margin-bottom: var(--tk-space-16);
    border-radius: var(--tk-service-card-icon-radius, var(--tk-radius-md));
    overflow: hidden;
  }

  .card__icon ::slotted(*) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__heading {
    margin: 0 0 var(--tk-space-8);
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-heading-5-size);
    font-weight: var(--tk-text-heading-5-weight);
    line-height: var(--tk-text-heading-5-leading);
  }

  .card__description {
    margin: 0;
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-service-card-text-muted, var(--tk-color-text-secondary));
  }

  /* The action zone: the consumer's slotted tk-link standalone; pinned
     BOTTOM across description lengths (flex column + margin-top:auto).
     The link re-scope (see the header's LINK DELIVERY note) sources from
     the own-grammar hook — blue-100 fails 4.5:1 on the tint surfaces, so
     the AA on-tint step is the default; charcoal overrides it to white. */
  .card__actions {
    display: flex;
    margin-top: auto;
    padding-top: var(--tk-space-16);
    --tk-color-link: var(--tk-service-card-link, var(--tk-color-link-on-tint));
  }

  /* --- The EXPERIENCE responsive matrix: <768px card padding drops one
     spacing step (24 → 20) — the navbar's breakpoint value. --- */

  @media (max-width: 767px) {
    .card {
      padding: var(--tk-service-card-padding-mobile, var(--tk-space-20));
    }
  }
`, Qn, $n = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakSet(), J = class e extends C {
	constructor(...e) {
		super(...e), E(this, q), D(this, $n, void 0), D(this, er, void 0), this.variant = "gray", k($n, this, !1), k(er, this, !1);
	}
	willUpdate(t) {
		t.has("variant") && !e.variants.includes(this.variant) && (this.variant = "gray");
	}
	render() {
		let e = A($n, this) || (this.heading ?? "").length > 0, t = A(er, this) || (this.description ?? "").length > 0;
		return v`
      <article class="card">
        <div class="card__icon" aria-hidden="true">
          <slot name="icon"></slot>
        </div>
        ${e ? v`<h3 class="card__heading">
              <slot name="heading" @slotchange=${O(q, this, nr)}>${this.heading}</slot>
            </h3>` : v`<slot name="heading" @slotchange=${O(q, this, nr)} hidden></slot>`}
        ${t ? v`<p class="card__description">
              <slot name="description" @slotchange=${O(q, this, rr)}>
                ${this.description}
              </slot>
            </p>` : v`<slot name="description" @slotchange=${O(q, this, rr)} hidden></slot>`}
        <div class="card__actions">
          <slot name="actions"></slot>
        </div>
      </article>
    `;
	}
};
Qn = J;
function tr(e) {
	return e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0);
}
function nr(e) {
	k($n, this, O(q, this, tr).call(this, e.target)), this.requestUpdate();
}
function rr(e) {
	k(er, this, O(q, this, tr).call(this, e.target)), this.requestUpdate();
}
Qn.variants = [
	"gray",
	"bluegray",
	"mint",
	"beige",
	"charcoal"
], Qn.styles = [Zn], T([w({ reflect: !0 })], J.prototype, "variant", void 0), T([w({ type: String })], J.prototype, "heading", void 0), T([w({ type: String })], J.prototype, "description", void 0), customElements.get("tk-service-card") || customElements.define("tk-service-card", J);
//#endregion
//#region packages/components/src/stepper/stepper.css.ts
var ir = o`
  :host {
    display: block;
    max-width: 100%;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  .stepper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* The block heading — heading-2 (the marketing register's section scale,
     probe-measured ~44/700 centered). Rendered ONLY when the prop is set. */
  .stepper__heading {
    margin: 0;
    text-align: center;
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-heading-2-size);
    font-weight: var(--tk-text-heading-2-weight);
    line-height: var(--tk-text-heading-2-leading);
    color: var(--tk-stepper-heading, var(--tk-color-text-primary));
  }

  /* The optional page subheading (slot subtitle, story 10.2) — PIXEL-PROBED
     from the business capture's steps block (2026-09-24, recorded in
     .playwright-cli/verify/batch-10-1-10-2/NOTES.md): body-m 15/400,
     text-primary ink (#30302E sampled → #333333, Δ3/255 — the SAME ink as
     the heading, refuting the expected secondary tier), centered. A plain
     <p>: the heading ramp stays at 2 (no h3 — slot content is copy, not a
     section title). The wrapper renders ONLY when the slot carries content
     (data-has-subtitle presence mold); these rules never fire slot-less. */
  .stepper__subtitle {
    margin: 0;
    text-align: center;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-stepper-subtitle, var(--tk-color-text-primary));
  }

  /* Heading→subtitle rhythm (probe 34px → space-32, Δ2). */
  .stepper__heading + .stepper__subtitle {
    margin-block-start: var(--tk-space-32);
  }

  /* Subtitle→cards (probe 81px card-top = margin 48 + the badge-clearance
     padding 32, Δ1 — the padding mirrors the heading→cards rule: the badge's
     above-card half stays clear whichever line sits above the row). */
  .stepper__subtitle + .stepper__steps {
    margin-block-start: var(--tk-space-48);
    padding-block-start: var(--tk-space-32);
  }

  /* Subtitle over the ZERO-state card (a kit-defined composite — the
     reference shows none): the subheading's own rhythm step. */
  .stepper__subtitle + .stepper__empty {
    margin-block-start: var(--tk-space-32);
  }

  /* The equal-height card row — the v1 card-grid mold: grid stretch keeps
     cards equal-height; auto-fit collapses 3→2→1 columns responsively. */
  .stepper__steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: var(--tk-space-48);
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Heading→cards rhythm (the reference's own section gap; also keeps the
     overlap badge's top half clear when a heading is rendered above). */
  .stepper__heading + .stepper__steps {
    margin-block-start: var(--tk-space-64);
    /* The badge's above-card half (28px) needs clearance from the heading —
       the token step nearest that covers it. */
    padding-block-start: var(--tk-space-32);
  }

  /* One step card: white surface, radius 24, centered copy. The padding-top
     reserves the badge's BELOW-card half (28) + the badge→copy gap (40 total
     visual to the first text line per the probe). */
  .step {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 68px var(--tk-space-24) var(--tk-space-40);
    border-radius: var(--tk-stepper-card-radius, var(--tk-radius-xl));
    background: var(--tk-stepper-card-fill, var(--tk-color-surface-base));
    text-align: center;
  }

  /* The number badge: 56×56 rounded square, centered on the card's centerline
     with its center EXACTLY on the card's top edge (the probe's half-overlap)
     — translate(-50%, -50%) against the card top achieves it by construction.
     aria-hidden in the template: the list semantics already announce «item N»,
     the painted numeral is the visual duplicate. */
  .step__badge {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    transform: translate(-50%, -50%);
    border-radius: var(--tk-stepper-badge-radius, var(--tk-radius-lg));
    background: var(--tk-stepper-badge-fill, var(--tk-color-tint-brown));
  }

  .step__number {
    font-family: var(--tk-font-heading);
    font-size: var(--tk-text-heading-6-size);
    font-weight: var(--tk-text-heading-6-weight);
    line-height: 1;
    color: var(--tk-stepper-badge-number, var(--tk-color-white));
  }

  /* Title/text: body-l both, SAME ink (probe), weight-only distinction — the
     API's title carries the emphasis, text stays regular. */
  .step__title {
    margin: 0;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-l-size);
    font-weight: var(--tk-text-body-l-bold-weight);
    line-height: var(--tk-text-body-l-leading);
    color: var(--tk-stepper-title, var(--tk-color-text-primary));
  }

  .step__text {
    margin: var(--tk-space-4) 0 0;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-l-size);
    font-weight: var(--tk-text-body-l-weight);
    line-height: var(--tk-text-body-l-leading);
    color: var(--tk-stepper-text, var(--tk-color-text-primary));
  }

  /* The optional CTA row under the cards — the UNNAMED slot. The container
     carries NO rhythm until content is assigned: the data-has-cta host
     attribute (toggled by slotchange, the promo-card data-has-art mold) gates
     the margin, so the reference's CTA-less block renders exactly as
     captured. */
  .stepper__cta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--tk-space-12);
  }

  :host([data-has-cta]) .stepper__cta {
    margin-block-start: var(--tk-space-40);
  }

  /* Zero state (steps=[]): the documented empty copy slot — never blank. */
  .stepper__empty {
    box-sizing: border-box;
    width: 100%;
    padding: var(--tk-space-40) var(--tk-space-24) var(--tk-space-24);
    border-radius: var(--tk-stepper-card-radius, var(--tk-radius-xl));
    background: var(--tk-stepper-card-fill, var(--tk-color-surface-base));
    text-align: center;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-color-text-secondary);
  }
`, ar, or = "Нет доступных шагов", Y = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakSet(), sr = class extends C {
	constructor(...e) {
		super(...e), E(this, X), D(this, Y, void 0), this.steps = [], k(Y, this, !1);
	}
	firstUpdated() {
		O(X, this, dr).call(this);
	}
	render() {
		let e = cr.call(O(X, this)), t = (this.heading ?? "").length > 0 ? this.heading : void 0;
		return v`
      <div class="stepper">
        ${t == null ? b : v`<h2 class="stepper__heading">${t}</h2>`}
        ${A(Y, this) ? v`<p class="stepper__subtitle">
              <slot name="subtitle" @slotchange=${O(X, this, fr)}></slot>
            </p>` : b}
        ${e.length > 0 ? v`
              <ol class="stepper__steps">
                ${e.map((e, t) => v`
                  <li class="step">
                    <div class="step__badge" aria-hidden="true">
                      <span class="step__number">${t + 1}</span>
                    </div>
                    <h3 class="step__title">${e.title}</h3>
                    <p class="step__text">${e.text}</p>
                  </li>
                `)}
              </ol>
              <div class="stepper__cta"><slot @slotchange=${O(X, this, ur)}></slot></div>
            ` : v`<div class="stepper__empty"><slot name="empty">${or}</slot></div>`}
        ${A(Y, this) ? b : v`<slot name="subtitle" @slotchange=${O(X, this, fr)} hidden></slot>`}
      </div>
    `;
	}
};
ar = sr;
function cr() {
	return this.steps ?? [];
}
function lr(e) {
	return e.assignedNodes({ flatten: !0 }).some((e) => e.nodeType === Node.ELEMENT_NODE || (e.textContent ?? "").trim().length > 0);
}
function ur(e) {
	this.toggleAttribute("data-has-cta", O(X, this, lr).call(this, e.target));
}
function dr() {
	let e = this.shadowRoot?.querySelector("slot[name=\"subtitle\"]"), t = e != null && O(X, this, lr).call(this, e);
	this.toggleAttribute("data-has-subtitle", t), t !== A(Y, this) && (k(Y, this, t), this.requestUpdate());
}
function fr() {
	O(X, this, dr).call(this);
}
ar.styles = [ir], T([w({ type: String })], sr.prototype, "heading", void 0), T([w({
	type: Array,
	attribute: !1
})], sr.prototype, "steps", void 0), customElements.get("tk-stepper") || customElements.define("tk-stepper", sr);
//#endregion
//#region packages/components/src/tabs/tabs.css.ts
var pr = o`
  :host {
    display: block;
    max-width: 100%;
  }

  /* :host display above out-ranks the UA [hidden] rule — enforce hidden. */
  :host([hidden]) {
    display: none;
  }

  /* --- The invisible track: no background ever paints here (DESIGN). The row
     is also the animation-free zone — the structural pin's subject. --- */
  .track {
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    gap: var(--tk-space-8);
    width: 100%;
    height: 44px;
  }

  /* The tab button IS the ≥44px interactive target; the VISUAL pill paints on
     the ::before pseudo with the probed 2px block inset (44 − 40). Disabled
     tabs are native <button disabled>: not focusable, not clickable, skipped
     by arrows (the spec's pick — unlike the aria-disabled focusable pattern). */
  .tab {
    position: relative;
    display: inline-flex;
    /* SHRINK route (3.3 review finding): flex:none + nowrap spilled long tab
       strips out of narrow hosts (3 tabs / 360px host = 62px over the
       adjacent layout) with the label ellipsis structurally unable to engage.
       Tabs keep their content size while space allows and SHRINK under
       constraint — no grow: text tabs stay content-sized like the reference,
       never equal segments. min-width:0 lets the button itself shrink so the
       label's ellipsis finally engages. */
    flex: 0 1 auto;
    min-width: 0;
    align-items: center;
    justify-content: center;
    gap: var(--tk-space-8);
    margin: 0;
    padding-inline: var(--tk-space-16);
    border: none;
    background: transparent;
    font-family: var(--tk-font-body);
    font-size: var(--tk-text-body-m-size);
    font-weight: var(--tk-text-body-m-weight);
    line-height: var(--tk-text-body-m-leading);
    color: var(--tk-tabs-text, var(--tk-color-text-secondary));
    white-space: nowrap;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    /* The ONE bar-side transition: the text-color hover step (EXPERIENCE State
       Patterns, 150ms). Background/shadow/transform are pinned motion-free —
       the pill snaps, the bar never animates a swap. */
    transition: color var(--tk-motion-duration-fast) var(--tk-motion-curve-productive-standard);
  }

  .tab:focus-visible {
    outline: 2px solid var(--tk-color-focus-ring);
    outline-offset: 2px;
  }

  .tab:disabled {
    color: var(--tk-color-text-muted);
    cursor: default;
  }

  /* Hover (inactive, enabled only): ONE token step at 150ms on a DEDICATED
     hook — NOT the active-text hook: tint consumers that override the text
     hooks to white would get a text-primary-defaulted hover that is 1:1
     invisible against the tint (3.3 review finding, proven live on the
     charcoal panel). The text-primary default is cross-theme-safe (dark
     remap); tint surfaces override BOTH text hooks together. */
  .tab:not([aria-selected='true']):not(:disabled):hover {
    color: var(--tk-tabs-text-hover, var(--tk-color-text-primary));
  }

  /* The visual pill — painted BELOW the label (pseudo precedes content), NO
     transition: activation moves it with zero bar motion (the pin). */
  .tab::before {
    content: '';
    position: absolute;
    inset-block: 2px;
    inset-inline: 0;
    box-sizing: border-box;
    border-radius: var(--tk-tabs-radius, var(--tk-radius-full));
  }

  /* ACTIVE: white pill + default shadow inside the invisible track (DESIGN).
     The border-default hairline is the button-secondary dark-canvas belt:
     in dark, surface-base-on-surface-base + shadow:none would leave the pill
     invisible — the hairline keeps the tonal edge (the 500-weight text stays
     the redundant state carrier either way). */
  .tab[aria-selected='true'] {
    color: var(--tk-tabs-text-active, var(--tk-color-text-primary));
    font-weight: var(--tk-text-body-m-bold-weight);
  }

  .tab[aria-selected='true']::before {
    background: var(--tk-tabs-pill-fill, var(--tk-color-surface-base));
    box-shadow: var(--tk-shadow-default);
    border: 1px solid var(--tk-color-border-default);
  }

  /* Long labels truncate visually (ellipsis); the accessible name keeps the
     full string (and the badge count with it). POSITIONED so the label
     paints ABOVE the pill pseudo (tree order among positioned boxes — the
     tk-button label mold; without it the white pill covers the active tab's
     text, caught by the 3.3 side-by-side pixel probe). */
  .tab__label {
    position: relative;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* The nested count chip rides the same paint rule: positioned, above the
     pill (the active tab's badge would vanish under it otherwise). flex:none
     keeps the chip unsquashed while the label absorbs the shrink. */
  .tab > tk-badge {
    position: relative;
    flex: none;
  }

  /* --- Panels: distinct per-tab elements; the hidden attribute toggling both
     removes an inactive panel from the tab order / a11y tree AND restarts the
     visible one's swap animation (display:none → block restarts CSS
     animations). The margin-block-start is the track→panel rhythm: panel text
     never starts flush under the 44px track. --- */
  .panel {
    display: block;
    margin-block-start: var(--tk-space-24);
  }

  .panel[hidden] {
    display: none;
  }

  /* The swap: content-only fade + 4px rise on the expressive-standard curve
     (AD-9 «tab swaps → expressive standard», moderate duration). */
  .panel:not([hidden]) {
    animation: tk-tabs-panel-swap var(--tk-motion-duration-moderate) var(--tk-motion-curve-expressive-standard);
  }

  @keyframes tk-tabs-panel-swap {
    from {
      opacity: 0;
      transform: translateY(var(--tk-space-4));
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* Reduced motion — explicit second belt (the token layer already collapsed
     the duration to 0ms; none kills any final-keyframe flash). */
  @media (prefers-reduced-motion: reduce) {
    .panel:not([hidden]) {
      animation: none;
    }
  }
`, mr, Z = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakSet(), _r = class extends C {
	constructor(...e) {
		super(...e), E(this, $), D(this, Z, void 0), D(this, hr, void 0), D(this, Q, void 0), D(this, gr, void 0), this.tabs = [], k(Z, this, ""), k(Q, this, !1);
	}
	get activeIndex() {
		let e = yr.call(O($, this));
		if (e.length === 0) return -1;
		let t = e.findIndex((e) => e.value === br.call(O($, this)));
		return t >= 0 && !e[t]?.disabled ? t : e.findIndex((e) => !e.disabled);
	}
	willUpdate(e) {
		if (e.has("defaultValue") && !this.hasUpdated && k(Z, this, this.defaultValue ?? ""), e.has("value") && (this.value != null && typeof this.value != "string" ? (this.value = String(this.value), k(Q, this, !0), k(hr, this, this.value)) : typeof this.value == "string" ? (k(Q, this, !0), k(hr, this, this.value)) : A(Q, this) && (k(Q, this, !1), k(Z, this, A(hr, this) ?? ""))), e.has("tabs")) {
			let e = /* @__PURE__ */ new Set(), t = (this.tabs ?? []).filter((t) => {
				let n = t?.value;
				return n == null || n === "" || e.has(n) ? !1 : (e.add(n), !0);
			});
			this.tabs != null && t.length !== this.tabs.length && (console.warn("tk-tabs: duplicate or value-less tab entries dropped — tab values must be unique non-empty strings (first occurrence wins)"), this.tabs = t);
		}
	}
	render() {
		let e = yr.call(O($, this)), t = this.activeIndex;
		return v`
      <div class="track" role="tablist">
        ${e.map((e, n) => {
			let r = n === t, i = O($, this, kr).call(this, e);
			return v`
            <button
              type="button"
              role="tab"
              class="tab"
              id="${vr.call(O($, this))}-tab-${n}"
              ?disabled=${e.disabled === !0}
              aria-selected=${r ? "true" : "false"}
              aria-controls="${vr.call(O($, this))}-panel-${n}"
              tabindex=${r ? "0" : "-1"}
              @click=${() => O($, this, Cr).call(this, n)}
              @keydown=${(e) => O($, this, Or).call(this, e, n)}
            >
              <span class="tab__label">${e.label}</span>
              ${i === null ? b : v`<tk-badge count=${i}></tk-badge>`}
            </button>
          `;
		})}
      </div>
      ${e.map((e, n) => {
			let r = n === t;
			return v`
          <div
            class="panel"
            role="tabpanel"
            id="${vr.call(O($, this))}-panel-${n}"
            aria-labelledby="${vr.call(O($, this))}-tab-${n}"
            ?hidden=${!r}
          >
            <slot name="tab-${n}"></slot>
          </div>
        `;
		})}
    `;
	}
};
mr = _r;
function vr() {
	var e;
	return A(gr, this) ?? k(gr, this, `tk-tabs-${Ar._ = (e = Ar._, ++e)}`), A(gr, this);
}
function yr() {
	return this.tabs ?? [];
}
function br() {
	return A(Q, this) ? this.value ?? "" : A(Z, this);
}
function xr(e) {
	this.dispatchEvent(new CustomEvent("value-change", {
		detail: { value: e },
		composed: !0,
		bubbles: !0
	}));
}
function Sr(e) {
	A(Q, this) || (k(Z, this, e), this.requestUpdate()), O($, this, xr).call(this, e);
}
function Cr(e) {
	let t = yr.call(O($, this))[e];
	t && !t.disabled && e !== this.activeIndex && O($, this, Sr).call(this, t.value);
}
function wr() {
	return [...this.renderRoot.querySelectorAll(".tab") ?? []];
}
function Tr(e, t) {
	let n = yr.call(O($, this));
	if (n.length === 0) return null;
	let r = e;
	for (let e = 0; e < n.length; e += 1) if (r = (r + t + n.length) % n.length, !n[r]?.disabled) return r;
	return null;
}
function Er(e) {
	let t = yr.call(O($, this)), n = (e === "first" ? t : [...t].reverse()).findIndex((e) => !e.disabled);
	return n >= 0 ? e === "first" ? n : t.length - 1 - n : null;
}
function Dr(e) {
	O($, this, wr).call(this)[e]?.focus(), O($, this, Cr).call(this, e);
}
function Or(e, t) {
	let n = e.key, r = n === "ArrowLeft" || n === "ArrowUp" || n === "ArrowRight" || n === "ArrowDown";
	if (!r && n !== "Home" && n !== "End") return;
	if (e.preventDefault(), r) {
		let e = n === "ArrowRight" || n === "ArrowDown" ? 1 : -1, r = O($, this, Tr).call(this, t, e);
		if (r === null || r === t) return;
		O($, this, Dr).call(this, r);
		return;
	}
	let i = O($, this, Er).call(this, n === "Home" ? "first" : "last");
	i !== null && i !== t && O($, this, Dr).call(this, i);
}
function kr(e) {
	return typeof e.badge == "number" && Number.isFinite(e.badge) ? e.badge : null;
}
mr.styles = [pr];
var Ar = { _: 0 };
T([w({
	type: String,
	attribute: !1
})], _r.prototype, "value", void 0), T([w({
	type: String,
	attribute: "default-value"
})], _r.prototype, "defaultValue", void 0), T([w({
	type: Array,
	attribute: !1
})], _r.prototype, "tabs", void 0), customElements.get("tk-tabs") || customElements.define("tk-tabs", _r);
//#endregion
