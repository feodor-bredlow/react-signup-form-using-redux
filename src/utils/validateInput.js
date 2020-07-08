import { USER_INFO } from '../constants';

export const isSubmitDisabled = (userInfo) => {
	return true;
};

export const isLastNameValid = (lastName) => {
	return lastName.length < 1;
};

export const isFirstNameValid = () => {
	return false;
};

export const isNickNameValid = () => {
	return false;
};

export const isEmailValid = () => {
	return false;
};

export const isPasswordValid = () => {
	return false;
};

export const isStreetValid = () => {
	return false;
};

export const isZipValid = () => {
	return false;
};

export const isCityValid = () => {
	return false;
};

export const isTextAreaValid = () => {
	return false;
};

export const inputIsEmpty = (input) => {
	return input.length < 1;
};
