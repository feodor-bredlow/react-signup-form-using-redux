import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const Form = ({
	children,
	isSubmitDisabled,
	handleFormSubmit,
	errorMsg,
	showError,
}) => {
	return (
		<>
			{showError && (
				<div className={styles.errorField} data-testid="errorField">
					<div>The following input fields are not valid yet:</div>
					{errorMsg}
				</div>
			)}
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
		</>
	);
};

Form.propTypes = {
	children: PropTypes.array,
	isSubmitDisabled: PropTypes.bool,
	handleFormSubmit: PropTypes.func,
	errorMsg: PropTypes.object,
	showError: PropTypes.bool,
};

export default Form;
