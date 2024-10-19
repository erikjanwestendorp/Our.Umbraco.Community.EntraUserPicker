import { property as u, customElement as U, LitElement as O, html as v, css as k, state as q, nothing as y, repeat as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as A } from "@umbraco-cms/backoffice/property-editor";
import { UmbUserPickerInputContext as T } from "@umbraco-cms/backoffice/user";
import { splitStringToArray as z } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as D } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as F } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as L } from "@umbraco-cms/backoffice/external/uui";
var N = Object.defineProperty, B = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, E = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? B(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (o ? m(t, r, i) : m(i)) || i);
  return o && i && N(t, r, i), i;
}, G = (e, t, r) => t.has(e) || b("Cannot " + r), R = (e, t, r) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), j = (e, t, r) => (G(e, t, "access private method"), r), _, $;
let d = class extends O {
  constructor() {
    super(...arguments), R(this, _), this.value = "";
  }
  render() {
    return v`
			<entra-user-input min="0" max="1" .value=${this.value ?? ""} @change=${j(this, _, $)}></entra-user-input>
		`;
  }
};
_ = /* @__PURE__ */ new WeakSet();
$ = function(e) {
  this.value = e.target.value, this.dispatchEvent(new A());
};
E([
  u({ type: String })
], d.prototype, "value", 2);
E([
  u({ attribute: !1 })
], d.prototype, "config", 2);
d = E([
  U("property-editor-ui-entra-user-picker")
], d);
var H = Object.defineProperty, J = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, l = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? J(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (o ? m(t, r, i) : m(i)) || i);
  return o && i && H(t, r, i), i;
}, w = (e, t, r) => t.has(e) || x("Cannot " + r), s = (e, t, r) => (w(e, t, "read from private field"), r ? r.call(e) : t.get(e)), f = (e, t, r) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), c = (e, t, r) => (w(e, t, "access private method"), r), g, n, p, S, C, I, P, M;
let a = class extends L(V, "") {
  constructor() {
    super(), f(this, p), f(this, g, new F(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "uui-ref-node-user",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new D());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", f(this, n, new T(this)), this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && s(this, n).getSelection().length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && s(this, n).getSelection().length > this.max
    ), this.observe(s(this, n).selection, (e) => this.value = e.join(","), "_observeSelection"), this.observe(s(this, n).selectedItems, (e) => this._items = e, "_observerItems");
  }
  get min() {
    return s(this, n).min;
  }
  set min(e) {
    s(this, n).min = e;
  }
  get max() {
    return s(this, n).max;
  }
  set max(e) {
    s(this, n).max = e;
  }
  set selection(e) {
    s(this, n).setSelection(e), s(this, g).setModel(e);
  }
  get selection() {
    return s(this, n).getSelection();
  }
  set value(e) {
    this.selection = z(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return v`${c(this, p, P).call(this)} ${c(this, p, I).call(this)}`;
  }
};
g = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
S = function() {
  s(this, n).openPicker({});
};
C = function(e) {
  s(this, n).requestRemoveItem(e.unique);
};
I = function() {
  return this.max > 0 && this.selection.length >= this.max ? y : v`
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${c(this, p, S)}></uui-button>
		`;
};
P = function() {
  return this._items ? v`
			<uui-ref-list>
				${W(
    this._items,
    (e) => e.unique,
    (e) => c(this, p, M).call(this, e)
  )}
			</uui-ref-list>
		` : y;
};
M = function(e) {
  return e.unique ? v`
			<uui-ref-node-user name=${e.name} id=${e.unique}>
				<umb-user-avatar
					slot="icon"
					.name=${e.name}
					.imgUrls=${e.avatarUrls}></umb-user-avatar>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => c(this, p, C).call(this, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node-user>
		` : y;
};
a.styles = [
  k`
			#btn-add {
				width: 100%;
			}

			umb-user-avatar {
				font-size: var(--uui-size-4);
			}
		`
];
l([
  u({ type: Number })
], a.prototype, "min", 1);
l([
  u({ type: String, attribute: "min-message" })
], a.prototype, "minMessage", 2);
l([
  u({ type: Number })
], a.prototype, "max", 1);
l([
  u({ type: String, attribute: "min-message" })
], a.prototype, "maxMessage", 2);
l([
  u({ type: Array })
], a.prototype, "selection", 1);
l([
  u()
], a.prototype, "value", 1);
l([
  q()
], a.prototype, "_items", 2);
a = l([
  U("entra-user-input")
], a);
const ie = a;
export {
  ie as EnttraUserInputElement,
  d as PropertyEditorUIEntraUserPickerElement
};
//# sourceMappingURL=client.js.map
