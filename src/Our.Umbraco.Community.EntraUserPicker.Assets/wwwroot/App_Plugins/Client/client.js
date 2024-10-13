import { property as v, customElement as l, LitElement as _, html as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as d } from "@umbraco-cms/backoffice/property-editor";
var f = Object.defineProperty, E = Object.getOwnPropertyDescriptor, c = (e) => {
  throw TypeError(e);
}, u = (e, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? E(t, r) : t, o = e.length - 1, p; o >= 0; o--)
    (p = e[o]) && (a = (n ? p(t, r, a) : p(a)) || a);
  return n && a && f(t, r, a), a;
}, y = (e, t, r) => t.has(e) || c("Cannot " + r), P = (e, t, r) => t.has(e) ? c("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), g = (e, t, r) => (y(e, t, "access private method"), r), i, h;
let s = class extends _ {
  constructor() {
    super(...arguments), P(this, i), this.value = "";
  }
  render() {
    return m`
			<umb-user-input min="0" max="1" .value=${this.value ?? ""} @change=${g(this, i, h)}></umb-user-input>
		`;
  }
};
i = /* @__PURE__ */ new WeakSet();
h = function(e) {
  this.value = e.target.value, this.dispatchEvent(new d());
};
u([
  v({ type: String })
], s.prototype, "value", 2);
u([
  v({ attribute: !1 })
], s.prototype, "config", 2);
s = u([
  l("property-editor-ui-entra-user-picker")
], s);
export {
  s as default
};
//# sourceMappingURL=client.js.map
