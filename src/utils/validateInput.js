import { USER_INFO } from '../constants';

export const isSubmitDisabled = (userInfo) => {
	return true;
};

export const isLastNameNotValid = (lastName) => {
	return lastName.length < 2;
};

export const isFirstNameNotValid = (firstName) => {
	return firstName.length < 2;
};

export const isNickNameNotValid = (nickName) => {
	return inputIsEmpty(nickName);
};

export const isEmailNotValid = (email) => {
	return inputIsEmpty(email);
};

export const isPasswordNotValid = (password) => {
	return inputIsEmpty(password);
};

export const isStreetNotValid = (street) => {
	return inputIsEmpty(street);
};

export const isZipNotValid = (zip) => {
	return inputIsEmpty(zip);
};

export const isCityNotValid = (city) => {
	return inputIsEmpty(city);
};

export const isTextAreaNotValid = (textArea) => {
	return inputIsEmpty(textArea);
};

export const inputIsEmpty = (input) => {
	return input.length < 1;
};
