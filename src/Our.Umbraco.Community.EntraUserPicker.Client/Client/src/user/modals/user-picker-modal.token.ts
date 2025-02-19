import type { UmbUserDetailModel } from '@umbraco-cms/backoffice/user';
import type { UmbPickerModalData } from '@umbraco-cms/backoffice/modal';
import { UmbModalToken } from '@umbraco-cms/backoffice/modal';

export type UmbUserPickerModalData = UmbPickerModalData<UmbUserDetailModel>;

export interface UmbUserPickerModalValue {
	selection: Array<string | null>;
}

export const ENTRA_USER_PICKER_MODAL = new UmbModalToken<UmbUserPickerModalData, UmbUserPickerModalValue>(
	'Entra.Modal.User.Picker',
	{
		modal: {
			type: 'sidebar',
			size: 'small',
		},
	},
);