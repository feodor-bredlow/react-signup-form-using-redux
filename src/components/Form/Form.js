import React from 'react';
import PropTypes from 'prop-types';
import { USER_INFO } from '../../constants';

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
					{errorMsg.lastName && <div>{USER_INFO.LAST_NAME}</div>}
					{errorMsg.firstName && <div>{USER_INFO.FIRST_NAME}</div>}
					{errorMsg.nickName && <div>{USER_INFO.NICK_NAME}</div>}
					{errorMsg.email && <div>{USER_INFO.EMAIL}</div>}
					{errorMsg.password && <div>{USER_INFO.PASSWORD}</div>}
					{errorMsg.street && <div>{USER_INFO.STREET}</div>}
					{errorMsg.city && <div>{USER_INFO.CITY}</div>}
					{errorMsg.zip && <div>{USER_INFO.ZIP}</div>}
					{errorMsg.additionalInfo && (
						<div>{USER_INFO.ADDITIONAL_INFO}</div>
					)}
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
