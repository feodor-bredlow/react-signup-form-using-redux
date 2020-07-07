import { UPDATE_SHOW_ADDRESS } from './actionTypes';

export const updateShowAddress = (showAddress) => ({
	type: UPDATE_SHOW_ADDRESS,
	payload: {
		showAddress,
	},
});
