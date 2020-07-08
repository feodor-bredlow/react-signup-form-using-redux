import { UPDATE_STATE, UPDATE_SHOW_ADDRESS } from './actionTypes';

export const updateState = (identifier, value) => ({
	type: UPDATE_STATE,
	payload: {
		identifier,
		value,
	},
});

export const updateShowAddress = (showAddress) => ({
	type: UPDATE_SHOW_ADDRESS,
	payload: {
		showAddress,
	},
});
