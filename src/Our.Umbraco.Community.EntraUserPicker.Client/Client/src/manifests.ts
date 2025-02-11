export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'propertyEditorUi',
		name: 'Entra User Picker',
		alias: 'Entra.PropertyEditorUi.UserPicker',
		element: () => import('./user/property-editor/user-picker/property-editor-ui-entra-user-picker.element'),
		meta: {
			label: 'Entra User Picker',
            propertyEditorSchemaAlias: "Umbraco.Plain.String",
            icon: 'icon-user',
            group: 'people',
			settings:{
                properties: [
                    {
                        alias: "minNumber",
                        label: "Minimum number of users",
                        propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
                        config: [
                            {
                                alias: "min",
                                value: 0
                            }                            
                        ]
                    },
                    {
                        alias: "maxNumber",
                        label: "Maximum number of users",
                        propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
                        config: [
                            {
                                alias: "min",
                                value: 0
                            }
                        ]
                    }
                ],
                defaultData: [
                    {
                        alias : "minNumber",
                        value : 0
                    },
                    {
                        alias : "maxNumber",
                        value : 1
                    }
                ]
            }
		}
	}
]