import {
	UPDATE_FIRST_NAME,
	UPDATE_LAST_NAME,
	UPDATE_NICK_NAME,
	UPDATE_EMAIL,
	UPDATE_PASSWORD,
	UPDATE_REPEAT_PASSWORD,
	UPDATE_SHOW_ADDRESS,
	UPDATE_STREET,
	UPDATE_HOUSENR,
	UPDATE_ZIP,
	UPDATE_CITY,
	UPDATE_ADDITIONAL_INFO,
} from './actionTypes';

// user
export const updateFirstName = (firstName) => ({
	type: UPDATE_FIRST_NAME,
	payload: {
		firstName,
	},
});
export const updateLastName = (lastName) => ({
	type: UPDATE_LAST_NAME,
	payload: {
		lastName,
	},
});
export const updateNickName = (nickName) => ({
	type: UPDATE_NICK_NAME,
	payload: {
		nickName,
	},
});
export const updateEmail = (email) => ({
	type: UPDATE_EMAIL,
	payload: {
		email,
	},
});
export const updatePassword = (password) => ({
	type: UPDATE_PASSWORD,
	payload: {
		password,
	},
});
export const updateRepeatPassword = (repeatPassword) => ({
	type: UPDATE_REPEAT_PASSWORD,
	payload: {
		repeatPassword,
	},
});

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
export const updateHouseNr = (houseNr) => ({
	type: UPDATE_HOUSENR,
	payload: {
		houseNr,
	},
});
export const updateZip = (zip) => ({
	type: UPDATE_ZIP,
	payload: {
		zip,
	},
});
export const updateCity = (city) => ({
	type: UPDATE_CITY,
	payload: {
		city,
	},
});

// Additional information actions
export const updateAdditionalInfo = (additionalInfo) => ({
	type: UPDATE_ADDITIONAL_INFO,
	payload: {
		additionalInfo,
	},
});
