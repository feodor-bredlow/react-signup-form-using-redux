import { USER_INFO } from '../constants';
import * as regex from './regex';

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
	return inputIsEmpty(email) || !regex.email().test(email);
};

export const isPasswordNotValid = (password, repeatPassword) => {
	return (
		password.length < 6 ||
		!regex.twoDigits().test(password) ||
		password !== repeatPassword
	);
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
