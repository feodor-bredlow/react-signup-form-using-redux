import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
					checked={props.address.showAddress}
				/>
				{props.address.showAddress && (
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

const mapStateToProps = (state) => {
	return { address: state.address };
};

export default connect(mapStateToProps)(SignUpPage);
