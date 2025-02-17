import { LitElement as c, html as E, ifDefined as h, property as l, state as m, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
var y = Object.defineProperty, g = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, s = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? g(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (a = (i ? p(t, r, a) : p(a)) || a);
  return i && a && y(t, r, a), a;
}, P = (e, t, r) => t.has(e) || v("Cannot " + r), x = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), C = (e, t, r) => (P(e, t, "access private method"), r), u, _;
let n = class extends c {
  constructor() {
    super(...arguments), x(this, u), this.value = "";
  }
  set config(e) {
    this._minEntries = e.getValueByAlias("minNumber"), this._maxEntries = e.getValueByAlias("maxNumber");
  }
  render() {
    return E`
			<entra-user-input min=${h(this._minEntries)} max=${h(this._maxEntries)} .value=${this.value ?? ""} @change=${C(this, u, _)}></entra-user-input>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
_ = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
s([
  l({ type: String })
], n.prototype, "value", 2);
s([
  l({ attribute: !1 })
], n.prototype, "config", 1);
s([
  m()
], n.prototype, "_minEntries", 2);
s([
  m()
], n.prototype, "_maxEntries", 2);
n = s([
  f("property-editor-ui-entra-user-picker")
], n);
export {
  n as default
};
//# sourceMappingURL=property-editor-ui-entra-user-picker.element-BUMFjQW-.js.map
