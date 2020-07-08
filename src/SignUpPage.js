import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './redux/actions';
import * as regex from './utils/regex';

import { USER_INFO } from './constants';
import styles from './SignUpPage.module.scss';
import DefaultForm from './components/DefaultForm/DefaultForm.js';
import DefaultInput from './components/DefaultInput/DefaultInput.js';
import CheckboxInput from './components/CheckboxInput/CheckboxInput.js';

const SignUpPage = (props) => {
	return (
		<div className={styles.wrapper}>
			<DefaultForm>
				<DefaultInput
					label="Last name"
					identifier={USER_INFO.LAST_NAME}
				/>
				<DefaultInput
					label="First name"
					identifier={USER_INFO.FIRST_NAME}
				/>
				<DefaultInput
					label="Nick name"
					identifier={USER_INFO.NICK_NAME}
				/>
				<DefaultInput
					label="Email"
					identifier={USER_INFO.EMAIL}
					type="email"
				/>
				<DefaultInput
					label="Password"
					identifier={USER_INFO.PASSWORD}
					type="password"
				/>
				<DefaultInput
					label="Repeat Password"
					identifier={USER_INFO.REPEAT_PASSWORD}
					type="password"
				/>
				<CheckboxInput
					label="Show address"
					identifier={USER_INFO.SHOW_ADDRESS}
				/>
				{props.store.address.showAddress && (
					<>
						<DefaultInput
							label="Street"
							identifier={USER_INFO.STREET}
						/>
						<DefaultInput
							label="House number"
							identifier={USER_INFO.HOUSE_NR}
							notRequired
						/>
						<DefaultInput
							label="ZIP"
							identifier={USER_INFO.ZIP}
							maxLength={5}
							regex={regex.digit()}
						/>
						<DefaultInput
							label="City"
							identifier={USER_INFO.CITY}
						/>
					</>
				)}
				<DefaultInput
					label="Additional information"
					multiLine
					identifier={USER_INFO.ADDITIONAL_INFO}
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
