import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import combinedReducers from './redux/reducers/index';
import { USER_INFO } from './constants';

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

let address = {
	showAddress: true,
};

let initialState = { userInfo, address };

let store = createStore(combinedReducers, initialState);

test('renders SignUpForm', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<SignUpPage />
		</Provider>
	);
	expect(getByTestId('signup-form')).not.toBeNull();
	expect(getByTestId('signup-form')).toMatchSnapshot();
});
