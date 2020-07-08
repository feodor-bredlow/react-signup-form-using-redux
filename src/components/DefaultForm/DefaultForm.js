import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './DefaultForm.module.scss';
import * as validateInput from '../../utils/validateInput';

const DefaultForm = (props) => {
	const handleFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div>{props.children}</div>
			<input
				type="submit"
				value="Submit"
				className={styles.submitButton}
				disabled={validateInput.isSubmitDisabled(props.userInfo)}
			/>
		</form>
	);
};

DefaultForm.propTypes = {
	children: PropTypes.any,
	userInfo: PropTypes.object,
};

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo };
};

export default connect(mapStateToProps)(DefaultForm);
