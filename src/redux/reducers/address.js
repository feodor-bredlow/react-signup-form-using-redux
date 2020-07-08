import { UPDATE_SHOW_ADDRESS } from '../actionTypes';

const initialState = {
	showAddress: true,
};

const address = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SHOW_ADDRESS: {
			const { showAddress } = action.payload;
			return {
				...state,
				showAddress: showAddress,
			};
		}
		default:
			return state;
	}
};

export default address;
