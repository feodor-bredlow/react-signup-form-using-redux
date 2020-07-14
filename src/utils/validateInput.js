import { USER_INFO } from '../constants';
import * as regex from './regex';

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
	return street.length < 4;
};

export const isZipNotValid = (zip) => {
	return zip.length !== 5 || !regex.digit().test(zip);
};

export const isCityNotValid = (city) => {
	return city.length < 4;
};

export const isTextAreaNotValid = (textArea) => {
	return inputIsEmpty(textArea);
};

export const inputIsEmpty = (input) => {
	return input.length < 1;
};

export const isSubmitDisabled = (userInfo) => {
	return {
		isDisabled:
			isLastNameNotValid(userInfo[USER_INFO.LAST_NAME]) ||
			isFirstNameNotValid(userInfo[USER_INFO.FIRST_NAME]) ||
			isNickNameNotValid(userInfo[USER_INFO.NICK_NAME]) ||
			isEmailNotValid(userInfo[USER_INFO.EMAIL]) ||
			isPasswordNotValid(
				userInfo[USER_INFO.PASSWORD],
				userInfo[USER_INFO.REPEAT_PASSWORD]
			) ||
			isStreetNotValid(userInfo[USER_INFO.STREET]) ||
			isZipNotValid(userInfo[USER_INFO.ZIP]) ||
			isCityNotValid(userInfo[USER_INFO.CITY]) ||
			isTextAreaNotValid(userInfo[USER_INFO.ADDITIONAL_INFO]),
		errorFields: {
			lastName: isLastNameNotValid(userInfo[USER_INFO.LAST_NAME]),
			firstName: isFirstNameNotValid(userInfo[USER_INFO.FIRST_NAME]),
			nickName: isNickNameNotValid(userInfo[USER_INFO.NICK_NAME]),
			email: isEmailNotValid(userInfo[USER_INFO.EMAIL]),
			password: isPasswordNotValid(
				userInfo[USER_INFO.PASSWORD],
				userInfo[USER_INFO.REPEAT_PASSWORD]
			),
			street: isStreetNotValid(userInfo[USER_INFO.STREET]),
			zip: isZipNotValid(userInfo[USER_INFO.ZIP]),
			city: isCityNotValid(userInfo[USER_INFO.CITY]),
			additionalInfo: isTextAreaNotValid(
				userInfo[USER_INFO.ADDITIONAL_INFO]
			),
		},
	};
};

export const isInitialSubmitDisabled = (userInfo) => {
	return (
		inputIsEmpty(userInfo[USER_INFO.LAST_NAME]) ||
		inputIsEmpty(userInfo[USER_INFO.FIRST_NAME]) ||
		inputIsEmpty(userInfo[USER_INFO.NICK_NAME]) ||
		inputIsEmpty(userInfo[USER_INFO.EMAIL]) ||
		inputIsEmpty(userInfo[USER_INFO.PASSWORD]) ||
		inputIsEmpty(userInfo[USER_INFO.REPEAT_PASSWORD]) ||
		inputIsEmpty(userInfo[USER_INFO.STREET]) ||
		inputIsEmpty(userInfo[USER_INFO.ZIP]) ||
		inputIsEmpty(userInfo[USER_INFO.CITY]) ||
		inputIsEmpty(userInfo[USER_INFO.ADDITIONAL_INFO])
	);
};
