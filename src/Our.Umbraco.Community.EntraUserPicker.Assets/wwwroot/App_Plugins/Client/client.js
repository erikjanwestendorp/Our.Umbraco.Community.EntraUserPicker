import { property as u, state as y, customElement as U, LitElement as A, html as d, ifDefined as b, css as q, nothing as x, repeat as W } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyValueChangeEvent as D } from "@umbraco-cms/backoffice/property-editor";
import { UmbUserPickerInputContext as T } from "@umbraco-cms/backoffice/user";
import { splitStringToArray as V } from "@umbraco-cms/backoffice/utils";
import { UmbChangeEvent as z } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as N } from "@umbraco-cms/backoffice/lit-element";
import { UmbSorterController as B } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as F } from "@umbraco-cms/backoffice/external/uui";
var L = Object.defineProperty, G = Object.getOwnPropertyDescriptor, $ = (e) => {
  throw TypeError(e);
}, f = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? G(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (o ? m(t, r, i) : m(i)) || i);
  return o && i && L(t, r, i), i;
}, R = (e, t, r) => t.has(e) || $("Cannot " + r), j = (e, t, r) => t.has(e) ? $("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), H = (e, t, r) => (R(e, t, "access private method"), r), g, w;
let c = class extends A {
  constructor() {
    super(...arguments), j(this, g), this.value = "";
  }
  set config(e) {
    this._minEntries = e.getValueByAlias("minNumber"), this._maxEntries = e.getValueByAlias("maxNumber");
  }
  render() {
    return d`
			<entra-user-input min=${b(this._minEntries)} max=${b(this._maxEntries)} .value=${this.value ?? ""} @change=${H(this, g, w)}></entra-user-input>
		`;
  }
};
g = /* @__PURE__ */ new WeakSet();
w = function(e) {
  this.value = e.target.value, this.dispatchEvent(new D());
};
f([
  u({ type: String })
], c.prototype, "value", 2);
f([
  u({ attribute: !1 })
], c.prototype, "config", 1);
f([
  y()
], c.prototype, "_minEntries", 2);
f([
  y()
], c.prototype, "_maxEntries", 2);
c = f([
  U("property-editor-ui-entra-user-picker")
], c);
var J = Object.defineProperty, K = Object.getOwnPropertyDescriptor, S = (e) => {
  throw TypeError(e);
}, l = (e, t, r, o) => {
  for (var i = o > 1 ? void 0 : o ? K(t, r) : t, h = e.length - 1, m; h >= 0; h--)
    (m = e[h]) && (i = (o ? m(t, r, i) : m(i)) || i);
  return o && i && J(t, r, i), i;
}, C = (e, t, r) => t.has(e) || S("Cannot " + r), s = (e, t, r) => (C(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _ = (e, t, r) => t.has(e) ? S("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), v = (e, t, r) => (C(e, t, "access private method"), r), E, n, p, I, P, M, O, k;
let a = class extends F(N, "") {
  constructor() {
    super(), _(this, p), _(this, E, new B(this, {
      getUniqueOfElement: (e) => e.id,
      getUniqueOfModel: (e) => e,
      identifier: "Umb.SorterIdentifier.InputUser",
      itemSelector: "uui-ref-node-user",
      containerSelector: "uui-ref-list",
      onChange: ({ model: e }) => {
        this.selection = e, this.dispatchEvent(new z());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", _(this, n, new T(this)), this.addValidator(
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
    return d`${v(this, p, O).call(this)} ${v(this, p, M).call(this)}`;
  }
};
E = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
I = function() {
  s(this, n).openPicker({});
};
P = function(e) {
  s(this, n).requestRemoveItem(e.unique);
};
M = function() {
  return this.max > 0 && this.selection.length >= this.max ? x : d`
			<uui-button
				id="btn-add"
				look="placeholder"
				label=${this.localize.term("general_choose")}
				@click=${v(this, p, I)}></uui-button>
		`;
};
O = function() {
  return this._items ? d`
			<uui-ref-list>
				${W(
    this._items,
    (e) => e.unique,
    (e) => v(this, p, k).call(this, e)
  )}
			</uui-ref-list>
		` : x;
};
k = function(e) {
  return e.unique ? d`
			<uui-ref-node-user name=${e.name} id=${e.unique}>
				<umb-user-avatar
					slot="icon"
					.name=${e.name}
					.imgUrls=${e.avatarUrls}></umb-user-avatar>
				<uui-action-bar slot="actions">
					<uui-button label=${this.localize.term("general_remove")} @click=${() => v(this, p, P).call(this, e)}></uui-button>
				</uui-action-bar>
			</uui-ref-node-user>
		` : x;
};
a.styles = [
  q`
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
  U("entra-user-input")
], a);
const ne = a;
export {
  ne as EnttraUserInputElement,
  c as PropertyEditorUIEntraUserPickerElement
};
//# sourceMappingURL=client.js.map
