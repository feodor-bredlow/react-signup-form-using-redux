import { UPDATE_SHOW_ADDRESS, UPDATE_STREET } from '../actionTypes';

const initialState = {
	showAddress: true,
	street: '',
	houseNr: '',
	zip: '',
	city: '',
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
		case UPDATE_STREET: {
			const { street } = action.payload;
			return {
				...state,
				street: street,
			};
		}
		default:
			return state;
	}
};

export default address;
