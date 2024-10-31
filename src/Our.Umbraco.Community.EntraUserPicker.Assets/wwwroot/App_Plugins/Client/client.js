import { property as u, state as y, customElement as b, LitElement as k, html as v, ifDefined as x, css as T, nothing as U, repeat as q } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as D } from "@umbraco-cms/backoffice/property-editor";
import { UMB_USER_ITEM_REPOSITORY_ALIAS as R, UMB_USER_PICKER_MODAL as W } from "@umbraco-cms/backoffice/user";
import { UmbPickerInputContext as B } from "@umbraco-cms/backoffice/picker-input";
import { splitStringToArray as V } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as z } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as L } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as N } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as F } from "@umbraco-cms/backoffice/external/uui";
var G = Object.defineProperty, K = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, d = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? K(t, r) : t, m = e.length - 1, h; m >= 0; m--)
    (h = e[m]) && (i = (o ? h(t, r, i) : h(i)) || i);
  return o && i && G(t, r, i), i;
}, Y = (e, t, r) => t.has(e) || $("Cannot " + r), j = (e, t, r) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), H = (e, t, r) => (Y(e, t, "access private method"), r), g, I;
let c = class extends k {
  constructor() {
    super(...arguments), j(this, g), this.value = "";
  }
  set config(e) {
    this._minEntries = e.getValueByAlias("minNumber"), this._maxEntries = e.getValueByAlias("maxNumber");
  }
  render() {
    return v`
			<entra-user-input min=${x(this._minEntries)} max=${x(this._maxEntries)} .value=${this.value ?? ""} @change=${H(this, g, I)}></entra-user-input>
		`;
  }
};
g = /* @__PURE__ */ new WeakSet();
I = function(e) {
  this.value = e.target.value, this.dispatchEvent(new D());
};
d([
  u({ type: String })
], c.prototype, "value", 2);
d([
  u({ attribute: !1 })
], c.prototype, "config", 1);
d([
  y()
], c.prototype, "_minEntries", 2);
d([
  y()
], c.prototype, "_maxEntries", 2);
c = d([
  b("property-editor-ui-entra-user-picker")
], c);
class J extends B {
  constructor(t) {
    super(t, R, W);
  }
}
var Q = Object.defineProperty, X = Object.getOwnPropertyDescriptor, S = (e) => {
  throw TypeError(e);
}, l = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? X(t, r) : t, m = e.length - 1, h; m >= 0; m--)
    (h = e[m]) && (i = (o ? h(t, r, i) : h(i)) || i);
  return o && i && Q(t, r, i), i;
}, P = (e, t, r) => t.has(e) || S("Cannot " + r), s = (e, t, r) => (P(e, t, "read from private field"), r ? r.call(e) : t.get(e)), f = (e, t, r) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _ = (e, t, r) => (P(e, t, "access private method"), r), E, n, p, w, C, M, O, A;
let a = class extends F(L, "") {
  constructor() {
    super(), f(this, p), f(this, E, new N(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "uui-ref-node-user",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new z());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", f(this, n, new J(this)), this.addValidator(
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
    s(this, n).setSelection(e), s(this, E).setModel(e);
  }
  get selection() {
    return s(this, n).getSelection();
  }
  set value(e) {
    this.selection = V(e);
  }
  get value() {
    return this.selection.join(",");
  }
  getFormElement() {
  }
  render() {
    return v`${_(this, p, O).call(this)} ${_(this, p, M).call(this)}`;
  }
};
E = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
w = function() {
  s(this, n).openPicker({});
};
C = function(e) {
  s(this, n).requestRemoveItem(e.unique);
};
M = function() {
  return this.max > 0 && this.selection.length >= this.max ? U : v`
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${_(this, p, w)}></uui-button>
		`;
};
O = function() {
  return this._items ? v`
			<uui-ref-list>
				${q(
    this._items,
    (e) => e.unique,
    (e) => _(this, p, A).call(this, e)
  )}
			</uui-ref-list>
		` : U;
};
A = function(e) {
  return e.unique ? v`
			<uui-ref-node-user name=${e.name} id=${e.unique}>
				<umb-user-avatar
					slot="icon"
					.name=${e.name}
					.imgUrls=${e.avatarUrls}></umb-user-avatar>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => _(this, p, C).call(this, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node-user>
		` : U;
};
a.styles = [
  T`
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
  y()
], a.prototype, "_items", 2);
a = l([
  b("entra-user-input")
], a);
const ue = a;
export {
  ue as EnttraUserInputElement,
  c as PropertyEditorUIEntraUserPickerElement
};
//# sourceMappingURL=client.js.map
