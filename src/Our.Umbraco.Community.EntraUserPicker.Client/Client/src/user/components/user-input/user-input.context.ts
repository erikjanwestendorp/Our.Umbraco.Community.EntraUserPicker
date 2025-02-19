import { UMB_USER_ITEM_REPOSITORY_ALIAS } from '@umbraco-cms/backoffice/user';
// import { UMB_USER_ITEM_REPOSITORY_ALIAS, UMB_USER_PICKER_MODAL } from '@umbraco-cms/backoffice/user';
import { ENTRA_USER_PICKER_MODAL} from '../../modals/user-picker-modal.token';
import type { UmbUserDetailModel } from '@umbraco-cms/backoffice/user';
import { UmbPickerInputContext } from '@umbraco-cms/backoffice/picker-input';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

export class EntraUserPickerInputContext extends UmbPickerInputContext<UmbUserDetailModel> {
	constructor(host: UmbControllerHost) {
		super(host, UMB_USER_ITEM_REPOSITORY_ALIAS, ENTRA_USER_PICKER_MODAL);
	}
}