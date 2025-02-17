import { LitElement, html, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/property-editor";
import { UmbPropertyEditorConfigCollection, UmbPropertyValueChangeEvent } from "@umbraco-cms/backoffice/property-editor";
import '../../components/user-input/user-input.element.ts';

@customElement('property-editor-ui-entra-user-picker')
export default class PropertyEditorUIEntraUserPickerElement extends LitElement implements UmbPropertyEditorUiElement {

    @property({ type: String })
    public value = '';

	@property({ attribute: false })
	public config?: UmbPropertyEditorConfigCollection;

	#onChange(event: CustomEvent & { target: HTMLInputElement  }) {
		this.value = event.target.value;
		this.dispatchEvent(new UmbPropertyValueChangeEvent());
	}

    override render() {
		return html`
			<entra-user-input min="0" max="1" .value=${this.value ?? ''} @change=${this.#onChange}></entra-user-input>
		`;
	}
}

declare global {
    interface HTMLElementTagNameMap {
        'property-editor-ui-entra-user-picker': PropertyEditorUIEntraUserPickerElement;
    }
}
