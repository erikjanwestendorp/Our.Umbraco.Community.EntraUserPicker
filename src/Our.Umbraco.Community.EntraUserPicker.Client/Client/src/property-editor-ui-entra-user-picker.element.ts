import { LitElement, html, customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbPropertyEditorUiElement } from "@umbraco-cms/backoffice/extension-registry";

@customElement('property-editor-ui-entra-user-picker')
export default class PropertyEditorUIEntraUserPickerElement extends LitElement implements UmbPropertyEditorUiElement {
    @property({ type: String })
    public value = "";

    render() {
        return html`
            <umb-user-input min="0" max="1" .value=${this.value ?? ''}></umb-user-input>
          `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'property-editor-ui-entra-user-picker': PropertyEditorUIEntraUserPickerElement;
    }
}
