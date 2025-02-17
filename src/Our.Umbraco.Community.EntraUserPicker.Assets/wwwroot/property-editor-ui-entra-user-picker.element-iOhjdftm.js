import { html as v, css as O, property as u, state as k, customElement as U, nothing as E, repeat as A, LitElement as T } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as q } from "@umbraco-cms/backoffice/property-editor";
import { UMB_USER_ITEM_REPOSITORY_ALIAS as R, UMB_USER_PICKER_MODAL as W } from "@umbraco-cms/backoffice/user";
import { UmbPickerInputContext as D } from "@umbraco-cms/backoffice/picker-input";
import { splitStringToArray as z } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as L } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as V } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as F } from "@umbraco-cms/backoffice/external/uui";
class N extends D {
  constructor(t) {
    super(t, R, W);
  }
}
var G = Object.defineProperty, K = Object.getOwnPropertyDescriptor, x = (e) => {
  throw TypeError(e);
}, l = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? K(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (o ? m(t, r, i) : m(i)) || i);
  return o && i && G(t, r, i), i;
}, b = (e, t, r) => t.has(e) || x("Cannot " + r), s = (e, t, r) => (b(e, t, "read from private field"), r ? r.call(e) : t.get(e)), f = (e, t, r) => t.has(e) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), c = (e, t, r) => (b(e, t, "access private method"), r), _, n, p, S, I, $, P, w;
let a = class extends F(B, "") {
  constructor() {
    super(), f(this, p), f(this, _, new V(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "uui-ref-node-user",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new L());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", f(this, n, new N(this)), console.log("EntraUserInputElement.constructor()"), this.addValidator(
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
    s(this, n).setSelection(e), s(this, _).setModel(e);
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
    return v`${c(this, p, P).call(this)} ${c(this, p, $).call(this)}`;
  }
};
_ = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
S = function() {
  s(this, n).openPicker({});
};
I = function(e) {
  s(this, n).requestRemoveItem(e.unique);
};
$ = function() {
  return this.max > 0 && this.selection.length >= this.max ? E : v`
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
				${A(
    this._items,
    (e) => e.unique,
    (e) => c(this, p, w).call(this, e)
  )}
			</uui-ref-list>
		` : E;
};
w = function(e) {
  return e.unique ? v`
			<uui-ref-node-user name=${e.name} id=${e.unique}>
				<umb-user-avatar
					slot="icon"
					.name=${e.name}
					.imgUrls=${e.avatarUrls}></umb-user-avatar>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => c(this, p, I).call(this, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node-user>
		` : E;
};
a.styles = [
  O`
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
  k()
], a.prototype, "_items", 2);
a = l([
  U("entra-user-input")
], a);
var Y = Object.defineProperty, j = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, y = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? j(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (o ? m(t, r, i) : m(i)) || i);
  return o && i && Y(t, r, i), i;
}, H = (e, t, r) => t.has(e) || C("Cannot " + r), J = (e, t, r) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Q = (e, t, r) => (H(e, t, "access private method"), r), g, M;
let d = class extends T {
  constructor() {
    super(...arguments), J(this, g), this.value = "";
  }
  render() {
    return v`
			<entra-user-input min="0" max="1" .value=${this.value ?? ""} @change=${Q(this, g, M)}></entra-user-input>
		`;
  }
};
g = /* @__PURE__ */ new WeakSet();
M = function(e) {
  this.value = e.target.value, this.dispatchEvent(new q());
};
y([
  u({ type: String })
], d.prototype, "value", 2);
y([
  u({ attribute: !1 })
], d.prototype, "config", 2);
d = y([
  U("property-editor-ui-entra-user-picker")
], d);
export {
  d as default
};
//# sourceMappingURL=property-editor-ui-entra-user-picker.element-iOhjdftm.js.map
