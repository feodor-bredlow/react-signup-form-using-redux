import * as validateInput from './validateInput';
import { USER_INFO } from '../constants';

let userInfo = {
	[USER_INFO.LAST_NAME]: '',
	[USER_INFO.FIRST_NAME]: '',
	[USER_INFO.NICK_NAME]: '',
	[USER_INFO.EMAIL]: '',
	[USER_INFO.PASSWORD]: '',
	[USER_INFO.REPEAT_PASSWORD]: '',
	[USER_INFO.STREET]: '',
	[USER_INFO.HOUSE_NR]: '',
	[USER_INFO.ZIP]: '',
	[USER_INFO.CITY]: '',
	[USER_INFO.ADDITIONAL_INFO]: '',
};

describe('inputIsEmpty', () => {
	it('should return true if input is empty', () => {
		expect(validateInput.inputIsEmpty('')).toBeTruthy();
	});
	it('should return false if input is non-empty', () => {
		expect(validateInput.inputIsEmpty('asdf123')).toBeFalsy();
	});
});

describe('lastName input field', () => {
	it('isLastNameNotValid should return true if input is empty', () => {
		expect(validateInput.isLastNameNotValid('')).toBeTruthy();
	});
	it('isLastNameNotValid should return true if input is smaller thant 2 characters', () => {
		expect(validateInput.isLastNameNotValid('2')).toBeTruthy();
	});
	it('isLastNameNotValid should return false if input is at least 2 characters', () => {
		expect(validateInput.isLastNameNotValid('2c')).toBeFalsy();
	});
});

describe('firstName input field', () => {
	it('isFirstNameNotValid should return true if input is empty', () => {
		expect(validateInput.isFirstNameNotValid('')).toBeTruthy();
	});
	it('isFirstNameNotValid should return true if input is smaller thant 2 characters', () => {
		expect(validateInput.isFirstNameNotValid('2')).toBeTruthy();
	});
	it('isFirstNameNotValid should return false if input is at least 2 characters', () => {
		expect(validateInput.isFirstNameNotValid('2c')).toBeFalsy();
	});
});
