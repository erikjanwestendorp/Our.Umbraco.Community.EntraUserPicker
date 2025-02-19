const e = [
  {
    type: "propertyEditorUi",
    name: "Entra User Picker",
    alias: "Entra.PropertyEditorUi.UserPicker",
    element: () => import("./property-editor-ui-entra-user-picker.element-CFyfrGmm.js"),
    elementName: "property-editor-ui-entra-user-picker",
    meta: {
      label: "Entra User Picker",
      propertyEditorSchemaAlias: "Umbraco.Plain.String",
      icon: "icon-user",
      group: "people"
      // settings:{
      //     properties: [
      //         {
      //             alias: "minNumber",
      //             label: "Minimum number of users",
      //             propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
      //             config: [
      //                 {
      //                     alias: "min",
      //                     value: 0
      //                 }                            
      //             ]
      //         },
      //         {
      //             alias: "maxNumber",
      //             label: "Maximum number of users",
      //             propertyEditorUiAlias: "Umb.PropertyEditorUi.Integer",
      //             config: [
      //                 {
      //                     alias: "min",
      //                     value: 0
      //                 }
      //             ]
      //         }
      //     ],
      //     defaultData: [
      //         {
      //             alias : "minNumber",
      //             value : 0
      //         },
      //         {
      //             alias : "maxNumber",
      //             value : 1
      //         }
      //     ]
      // }
    }
  },
  {
    type: "modal",
    name: "Entra User Picker Modal",
    alias: "Entra.Modal.User.Picker",
    element: () => import("./user-picker-modal.element-BRmHN062.js")
  }
];
export {
  e as manifests
};
//# sourceMappingURL=client.js.map
