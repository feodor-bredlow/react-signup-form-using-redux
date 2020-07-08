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

describe('inputIsNonEmpty', () => {
	it('should return false if input is empty', () => {
		expect(validateInput.inputIsEmpty('')).toBeTruthy();
	});
	it('should return true if input is non-empty', () => {
		expect(validateInput.inputIsEmpty('asdf123')).toBeFalsy();
	});
});
