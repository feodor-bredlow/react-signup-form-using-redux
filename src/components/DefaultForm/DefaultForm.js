import React from 'react';
import PropTypes from 'prop-types';

import styles from './DefaultForm.module.scss';

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
			/>
		</form>
	);
};

DefaultForm.propTypes = {
	children: PropTypes.any,
};

export default DefaultForm;
