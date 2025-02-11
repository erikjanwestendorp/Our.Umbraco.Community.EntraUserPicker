import { LitElement, html, customElement, property, state, ifDefined } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/property-editor";
import { UmbPropertyEditorConfigCollection, UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";

@customElement('property-editor-ui-entra-user-picker')
export default class PropertyEditorUIEntraUserPickerElement extends LitElement implements UmbPropertyEditorUiElement {
    @property({ type: String })
    public value = '';

	@property({ attribute: false })
	public set config(config: UmbPropertyEditorConfigCollection) {
	  this._minEntries = config.getValueByAlias("minNumber");
	  this._maxEntries = config.getValueByAlias("maxNumber");
	}

	#onChange(event: CustomEvent & { target: HTMLInputElement  }) {
		this.value = event.target.value;
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

	@state()
	private _minEntries?: number;
  
	@state()
	private _maxEntries?: number;

    override render() {
		return html`
			<entra-user-input min=${ifDefined(this._minEntries)} max=${ifDefined(this._maxEntries)} .value=${this.value ?? ''} @change=${this.#onChange}></entra-user-input>
		`;
	}
}

declare global {
    interface HTMLElementTagNameMap {
        'property-editor-ui-entra-user-picker': PropertyEditorUIEntraUserPickerElement;
    }
}
