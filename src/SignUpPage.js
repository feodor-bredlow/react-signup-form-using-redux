import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './redux/actions';
import * as regex from './utils/regex';
import * as validateInput from './utils/validateInput';

import { USER_INFO } from './constants';
import styles from './SignUpPage.module.scss';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Checkbox from './components/Checkbox/Checkbox';

const SignUpPage = ({ userInfo, address, updateState, updateShowAddress }) => {
	const handleFormSubmit = (event) => {
		event.preventDefault();

		// define here what happens after successfull form submit
		alert('Submit was successfully clicked');
	};

	return (
		<div className={styles.wrapper} data-testid="signup-form">
			<Form
				isSubmitDisabled={validateInput.isSubmitDisabled(userInfo)}
				handleFormSubmit={handleFormSubmit}
			>
				<Input
					label="Last name"
					identifier={USER_INFO.LAST_NAME}
					updateState={updateState}
					value={userInfo[USER_INFO.LAST_NAME]}
				/>
				<Input
					label="First name"
					identifier={USER_INFO.FIRST_NAME}
					updateState={updateState}
					value={userInfo[USER_INFO.FIRST_NAME]}
				/>
				<Input
					label="Nick name"
					identifier={USER_INFO.NICK_NAME}
					updateState={updateState}
					value={userInfo[USER_INFO.NICK_NAME]}
				/>
				<Input
					label="Email"
					identifier={USER_INFO.EMAIL}
					type="email"
					updateState={updateState}
					value={userInfo[USER_INFO.EMAIL]}
				/>
				<Input
					label="Password"
					identifier={USER_INFO.PASSWORD}
					type="password"
					updateState={updateState}
					value={userInfo[USER_INFO.PASSWORD]}
				/>
				<Input
					label="Repeat Password"
					identifier={USER_INFO.REPEAT_PASSWORD}
					type="password"
					updateState={updateState}
					value={userInfo[USER_INFO.REPEAT_PASSWORD]}
				/>
				<Checkbox
					label="Show address"
					identifier={USER_INFO.SHOW_ADDRESS}
					updateShowAddress={updateShowAddress}
					showAddress={address.showAddress}
				/>
				{address.showAddress && (
					<>
						<Input
							label="Street"
							identifier={USER_INFO.STREET}
							updateState={updateState}
							value={userInfo[USER_INFO.STREET]}
						/>
						<Input
							label="House number"
							identifier={USER_INFO.HOUSE_NR}
							notRequired
							updateState={updateState}
							value={userInfo[USER_INFO.HOUSE_NR]}
						/>
						<Input
							label="ZIP"
							identifier={USER_INFO.ZIP}
							maxLength={5}
							regex={regex.digit()}
							updateState={updateState}
							value={userInfo[USER_INFO.ZIP]}
						/>
						<Input
							label="City"
							identifier={USER_INFO.CITY}
							updateState={updateState}
							value={userInfo[USER_INFO.CITY]}
						/>
					</>
				)}
				<Input
					label="Additional information"
					multiLine
					identifier={USER_INFO.ADDITIONAL_INFO}
					updateState={updateState}
					value={userInfo[USER_INFO.ADDITIONAL_INFO]}
				/>
			</Form>
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
