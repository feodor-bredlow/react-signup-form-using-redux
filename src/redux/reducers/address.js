import {
	UPDATE_SHOW_ADDRESS,
	UPDATE_STREET,
	UPDATE_HOUSENR,
	UPDATE_ZIP,
	UPDATE_CITY,
} from '../actionTypes';

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
		case UPDATE_HOUSENR: {
			const { houseNr } = action.payload;
			return {
				...state,
				houseNr: houseNr,
			};
		}
		case UPDATE_ZIP: {
			const { zip } = action.payload;
			return {
				...state,
				zip: zip,
			};
		}
		case UPDATE_CITY: {
			const { city } = action.payload;
			return {
				...state,
				city: city,
			};
		}
		default:
			return state;
	}
};

export default address;
