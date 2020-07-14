import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Form = ({ children, isSubmitDisabled, handleFormSubmit }) => {
	return (
		<form onSubmit={handleFormSubmit}>
			<div>{children}</div>
			<input
				type="submit"
				value="Submit"
				className={styles.submitButton}
				disabled={isSubmitDisabled}
				data-testid="button-submit"
			/>
		</form>
	);
};

Form.propTypes = {
	children: PropTypes.array,
	isSubmitDisabled: PropTypes.bool,
	handleFormSubmit: PropTypes.func,
};

export default Form;
