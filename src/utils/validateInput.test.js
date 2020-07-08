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

describe('nickName input field', () => {
	it('isNickNameNotValid should return true if input is empty', () => {
		expect(validateInput.isNickNameNotValid('')).toBeTruthy();
	});
	it('isNickNameNotValid should return false if input is not empty', () => {
		expect(validateInput.isNickNameNotValid('c')).toBeFalsy();
	});
});

describe('email input field', () => {
	it('isEmailNotValid should return true if input is empty', () => {
		expect(validateInput.isEmailNotValid('')).toBeTruthy();
	});
	it('isEmailNotValid should return true if input is not empty', () => {
		expect(validateInput.isEmailNotValid('c')).toBeTruthy();
	});
	it('isEmailNotValid should return true if input is not a valid email', () => {
		expect(validateInput.isEmailNotValid('cgd@as')).toBeTruthy();
	});
	it('isEmailNotValid should return false if input is a valid email', () => {
		expect(validateInput.isEmailNotValid('asdf@asdf.cw')).toBeFalsy();
	});
});

describe('password input field', () => {
	it('isPasswordNotValid should return true if password is empty', () => {
		expect(validateInput.isPasswordNotValid('')).toBeTruthy();
	});
	it('isPasswordNotValid should return true if password less than 6 characters long', () => {
		expect(validateInput.isPasswordNotValid('as23d')).toBeTruthy();
	});
	it('isPasswordNotValid should return true if password contains less than 2 numbers', () => {
		expect(validateInput.isPasswordNotValid('as2sdgf')).toBeTruthy();
	});
	it('isPasswordNotValid should return true if password and repeat password dont match', () => {
		expect(
			validateInput.isPasswordNotValid('fg65ffff', 'fg65f5ff')
		).toBeTruthy();
	});
	it('isPasswordNotValid should return false if password is at least 6 characters long, has at least 2 numbers and matches repeatPassword', () => {
		expect(
			validateInput.isPasswordNotValid('5aasdf2ag', '5aasdf2ag')
		).toBeFalsy();
	});
});

describe('street input field', () => {
	it('isStreetNotValid should return true if input is empty', () => {
		expect(validateInput.isStreetNotValid('')).toBeTruthy();
	});
	it('isStreetNotValid should return true if input is smaller thant 4 characters', () => {
		expect(validateInput.isStreetNotValid('fgd')).toBeTruthy();
	});
	it('isStreetNotValid should return false if input is at least 4 characters', () => {
		expect(validateInput.isStreetNotValid('gwh4')).toBeFalsy();
	});
});

describe('city input field', () => {
	it('isCityNotValid should return true if input is empty', () => {
		expect(validateInput.isCityNotValid('')).toBeTruthy();
	});
	it('isCityNotValid should return true if input is smaller thant 4 characters', () => {
		expect(validateInput.isCityNotValid('fgd')).toBeTruthy();
	});
	it('isCityNotValid should return false if input is at least 4 characters', () => {
		expect(validateInput.isCityNotValid('gwh4')).toBeFalsy();
	});
});

describe('additional info textarea input field', () => {
	it('isTextAreaNotValid should return true if input is empty', () => {
		expect(validateInput.isTextAreaNotValid('')).toBeTruthy();
	});
	it('isTextAreaNotValid should return false if input is not empty', () => {
		expect(validateInput.isTextAreaNotValid('c')).toBeFalsy();
	});
});
