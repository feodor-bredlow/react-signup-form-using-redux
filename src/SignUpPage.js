import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './redux/actions';
import * as regex from './utils/regex';
import * as validateInput from './utils/validateInput';

import { USER_INFO } from './constants';
import styles from './SignUpPage.module.scss';
import DefaultForm from './components/DefaultForm/DefaultForm.js';
import DefaultInput from './components/DefaultInput/DefaultInput.js';
import CheckboxInput from './components/CheckboxInput/CheckboxInput.js';

const SignUpPage = ({ userInfo, address, updateState, updateShowAddress }) => {
	const handleFormSubmit = (event) => {
		event.preventDefault();

		// define here what happens after successfull form submit
		alert('Submit was successfully clicked');
	};

	return (
		<div className={styles.wrapper} data-testid="signup-form">
			<DefaultForm
				isSubmitDisabled={validateInput.isSubmitDisabled(userInfo)}
				handleFormSubmit={handleFormSubmit}
			>
				<DefaultInput
					label="Last name"
					identifier={USER_INFO.LAST_NAME}
					updateState={updateState}
					value={userInfo[USER_INFO.LAST_NAME]}
				/>
				<DefaultInput
					label="First name"
					identifier={USER_INFO.FIRST_NAME}
					updateState={updateState}
					value={userInfo[USER_INFO.FIRST_NAME]}
				/>
				<DefaultInput
					label="Nick name"
					identifier={USER_INFO.NICK_NAME}
					updateState={updateState}
					value={userInfo[USER_INFO.NICK_NAME]}
				/>
				<DefaultInput
					label="Email"
					identifier={USER_INFO.EMAIL}
					type="email"
					updateState={updateState}
					value={userInfo[USER_INFO.EMAIL]}
				/>
				<DefaultInput
					label="Password"
					identifier={USER_INFO.PASSWORD}
					type="password"
					updateState={updateState}
					value={userInfo[USER_INFO.PASSWORD]}
				/>
				<DefaultInput
					label="Repeat Password"
					identifier={USER_INFO.REPEAT_PASSWORD}
					type="password"
					updateState={updateState}
					value={userInfo[USER_INFO.REPEAT_PASSWORD]}
				/>
				<CheckboxInput
					label="Show address"
					identifier={USER_INFO.SHOW_ADDRESS}
					updateShowAddress={updateShowAddress}
					showAddress={address.showAddress}
				/>
				{address.showAddress && (
					<>
						<DefaultInput
							label="Street"
							identifier={USER_INFO.STREET}
							updateState={updateState}
							value={userInfo[USER_INFO.STREET]}
						/>
						<DefaultInput
							label="House number"
							identifier={USER_INFO.HOUSE_NR}
							notRequired
							updateState={updateState}
							value={userInfo[USER_INFO.HOUSE_NR]}
						/>
						<DefaultInput
							label="ZIP"
							identifier={USER_INFO.ZIP}
							maxLength={5}
							regex={regex.digit()}
							updateState={updateState}
							value={userInfo[USER_INFO.ZIP]}
						/>
						<DefaultInput
							label="City"
							identifier={USER_INFO.CITY}
							updateState={updateState}
							value={userInfo[USER_INFO.CITY]}
						/>
					</>
				)}
				<DefaultInput
					label="Additional information"
					multiLine
					identifier={USER_INFO.ADDITIONAL_INFO}
					updateState={updateState}
					value={userInfo[USER_INFO.ADDITIONAL_INFO]}
				/>
			</DefaultForm>
		</div>
	);
};

SignUpPage.propTypes = {
	userInfo: PropTypes.object,
	address: PropTypes.object,
	updateState: PropTypes.func,
	updateShowAddress: PropTypes.func,
};

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo, address: state.address };
};

const mapDispatchToProps = (dispatch) => ({
	updateState: bindActionCreators(actions, dispatch).updateState,
	updateShowAddress: bindActionCreators(actions, dispatch).updateShowAddress,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
