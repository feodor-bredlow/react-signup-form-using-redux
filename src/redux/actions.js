import { UPDATE_SHOW_ADDRESS, UPDATE_STREET } from './actionTypes';

// Address actions
export const updateShowAddress = (showAddress) => ({
	type: UPDATE_SHOW_ADDRESS,
	payload: {
		showAddress,
	},
});

export const updateStreet = (street) => ({
	type: UPDATE_STREET,
	payload: {
		street,
	},
});
