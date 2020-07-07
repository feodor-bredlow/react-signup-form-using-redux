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
				<DefaultInput label="First name" />
				<DefaultInput label="Last name" />
				<DefaultInput label="Nick name" />
				<DefaultInput label="Email" />
				<DefaultInput label="Password" />
				<DefaultInput label="Password (repeat)" />
				<CheckboxInput
					label="Show address"
					checked={props.store.address.showAddress}
				/>
				{props.store.address.showAddress && (
					<>
						<DefaultInput label="Street" />
						<DefaultInput label="House number" />
						<DefaultInput label="ZIP" />
						<DefaultInput label="City" />
					</>
				)}
				<DefaultInput label="Additional information" multiLine />
			</DefaultForm>
		</div>
	);
};

SignUpPage.propTypes = {
	store: PropTypes.object,
};

const mapStateToProps = (state) => {
	return { store: state };
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
