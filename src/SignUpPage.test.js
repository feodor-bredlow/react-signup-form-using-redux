import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import combinedReducers from './redux/reducers/index';
import { USER_INFO } from './constants';

describe('SignUpForm', () => {
	let query;

	afterEach(cleanup);

	describe('initial page load with empty values', () => {
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

		beforeEach(() => {
			query = render(
				<Provider store={store}>
					<SignUpPage />
				</Provider>
			);
		});

		it('SignUpForm should render', () => {
			expect(query.getByTestId('signup-form')).not.toBeNull();
			expect(query.getByTestId('signup-form')).toMatchSnapshot();
		});

		it('submit button should initially be disabled', () => {
			expect(query.getByTestId('button-submit')).toBeDisabled();
		});
	});

	describe('page behaviour when input is filled', () => {
		let userInfo = {
			[USER_INFO.LAST_NAME]: 'nachname',
			[USER_INFO.FIRST_NAME]: 'vorname',
			[USER_INFO.NICK_NAME]: 'a',
			[USER_INFO.EMAIL]: 'asfd@asfd.com',
			[USER_INFO.PASSWORD]: '123asd',
			[USER_INFO.REPEAT_PASSWORD]: '123asd',
			[USER_INFO.STREET]: 'strasse',
			[USER_INFO.HOUSE_NR]: '123a',
			[USER_INFO.ZIP]: '12345',
			[USER_INFO.CITY]: 'stadt',
			[USER_INFO.ADDITIONAL_INFO]: 'more information',
		};

		let address = {
			showAddress: true,
		};

		let initialState = { userInfo, address };

		let store = createStore(combinedReducers, initialState);
		beforeEach(() => {
			query = render(
				<Provider store={store}>
					<SignUpPage />
				</Provider>
			);
		});

		it('submit button should be enabled', () => {
			expect(query.getByTestId('button-submit')).toBeEnabled();
		});
	});
});
