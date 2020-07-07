import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './redux/actions';

import styles from './SignUpPage.module.scss';
import DefaultForm from './components/DefaultForm/DefaultForm.js';
import DefaultInput from './components/DefaultInput/DefaultInput.js';
import CheckboxInput from './components/CheckboxInput/CheckboxInput.js';

const SignUpPage = (props) => {
	return (
		<div className={styles.wrapper}>
			<DefaultForm>
				<DefaultInput
					label="First name"
					value={props.store.user.firstName}
					updateStore={props.actions.updateFirstName}
				/>
				<DefaultInput
					label="Last name"
					value={props.store.user.lastName}
					updateStore={props.actions.updateLastName}
				/>
				<DefaultInput
					label="Nick name"
					value={props.store.user.nickName}
					updateStore={props.actions.updateNickName}
				/>
				<DefaultInput
					label="Email"
					value={props.store.user.email}
					updateStore={props.actions.updateEmail}
				/>
				<DefaultInput
					label="Password"
					value={props.store.user.password}
					updateStore={props.actions.updatePassword}
				/>
				<DefaultInput
					label="Repeat Password"
					value={props.store.user.repeatPassword}
					updateStore={props.actions.updateRepeatPassword}
				/>
				<CheckboxInput
					label="Show address"
					checked={props.store.address.showAddress}
				/>
				{props.store.address.showAddress && (
					<>
						<DefaultInput
							label="Street"
							value={props.store.address.street}
							updateStore={props.actions.updateStreet}
						/>
						<DefaultInput
							label="House number"
							value={props.store.address.houseNr}
							updateStore={props.actions.updateHouseNr}
						/>
						<DefaultInput
							label="ZIP"
							value={props.store.address.zip}
							updateStore={props.actions.updateZip}
						/>
						<DefaultInput
							label="City"
							value={props.store.address.city}
							updateStore={props.actions.updateCity}
						/>
					</>
				)}
				<DefaultInput
					label="Additional information"
					multiLine
					value={props.store.additionalInfo.additionalInfo}
					updateStore={props.actions.updateAdditionalInfo}
				/>
			</DefaultForm>
		</div>
	);
};

SignUpPage.propTypes = {
	store: PropTypes.object,
	actions: PropTypes.object,
};

const mapStateToProps = (state) => {
	return { store: state };
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
