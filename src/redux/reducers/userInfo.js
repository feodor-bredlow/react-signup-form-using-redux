import { USER_INFO } from '../../constants';
import { UPDATE_STATE } from '../actionTypes';

const initialState = {
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

const userInfo = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_STATE: {
			const { identifier, value } = action.payload;
			return {
				...state,
				[identifier]: value,
			};
		}
		default:
			return state;
	}
};

export default userInfo;
