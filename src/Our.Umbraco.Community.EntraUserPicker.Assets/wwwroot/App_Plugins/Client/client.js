import { property as i, customElement as a, LitElement as m, html as v } from "@umbraco-cms/backoffice/external/lit";
var c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = (o, r, u, t) => {
  for (var e = t > 1 ? void 0 : t ? f(r, u) : r, p = o.length - 1, s; p >= 0; p--)
    (s = o[p]) && (e = (t ? s(r, u, e) : s(e)) || e);
  return t && e && c(r, u, e), e;
};
let n = class extends m {
  constructor() {
    super(...arguments), this.value = "";
  }
  render() {
    return v`
            <umb-user-input min="0" max="1" .value=${this.value ?? ""}></umb-user-input>
          `;
  }
};
l([
  i({ type: String })
], n.prototype, "value", 2);
n = l([
  a("property-editor-ui-entra-user-picker")
], n);
export {
  n as default
};
//# sourceMappingURL=client.js.map
