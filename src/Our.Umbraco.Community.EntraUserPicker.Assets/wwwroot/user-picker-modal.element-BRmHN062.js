import { UmbTextStyles as b } from "@umbraco-cms/backoffice/style";
import { html as U, css as y, customElement as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as M } from "@umbraco-cms/backoffice/modal";
import { UmbSelectionManager as k } from "@umbraco-cms/backoffice/utils";
var g = Object.defineProperty, E = Object.getOwnPropertyDescriptor, p = (e) => {
  throw TypeError(e);
}, P = (e, t, s, o) => {
  for (var a = o > 1 ? void 0 : o ? E(t, s) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (a = (o ? c(t, s, a) : c(a)) || a);
  return o && a && g(t, s, a), a;
}, h = (e, t, s) => t.has(e) || p("Cannot " + s), m = (e, t, s) => (h(e, t, "read from private field"), s ? s.call(e) : t.get(e)), d = (e, t, s) => t.has(e) ? p("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), u = (e, t, s) => (h(e, t, "access private method"), s), i, r, f, v, _;
let l = class extends M {
  constructor() {
    super(...arguments), d(this, r), d(this, i, new k(this));
  }
  // #userCollectionRepository = new UmbUserCollectionRepository(this);
  connectedCallback() {
    var e, t;
    super.connectedCallback(), m(this, i).setMultiple(((e = this.data) == null ? void 0 : e.multiple) ?? !1), m(this, i).setSelection(((t = this.value) == null ? void 0 : t.selection) ?? []);
  }
  firstUpdated(e) {
    super.firstUpdated(e), u(this, r, f).call(this);
  }
  render() {
    return U`
			<umb-body-layout headline=${this.localize.term("defaultdialogs_selectUsers")}>
				
				<div slot="actions">
					<uui-button label="Close" @click=${u(this, r, _)}></uui-button>
					<uui-button label="Submit" look="primary" color="positive" @click=${u(this, r, v)}></uui-button>
				</div>
			</umb-body-layout>
		`;
  }
};
i = /* @__PURE__ */ new WeakMap();
r = /* @__PURE__ */ new WeakSet();
f = async function() {
  console.log("requesting users");
};
v = function() {
  var e;
  this.value = { selection: m(this, i).getSelection() }, (e = this.modalContext) == null || e.submit();
};
_ = function() {
  var e;
  (e = this.modalContext) == null || e.reject();
};
l.styles = [
  b,
  y`
			umb-user-avatar {
				font-size: 12px;
			}
		`
];
l = P([
  C("umb-user-picker-modal")
], l);
const $ = l;
export {
  l as UmbUserPickerModalElement,
  $ as default
};
//# sourceMappingURL=user-picker-modal.element-BRmHN062.js.map
