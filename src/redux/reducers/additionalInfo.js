import { UPDATE_ADDITIONAL_INFO } from '../actionTypes';

const initialState = {
	additionalInfo: '',
};

const additionalInfo = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ADDITIONAL_INFO: {
			const { additionalInfo } = action.payload;
			return {
				...state,
				additionalInfo: additionalInfo,
			};
		}
		default:
			return state;
	}
};

export default additionalInfo;
