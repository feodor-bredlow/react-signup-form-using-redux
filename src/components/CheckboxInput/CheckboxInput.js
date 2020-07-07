import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
	const handleCheckboxChange = (event) => {
		props.setShowAddress(event.currentTarget.checked);
	};
	return (
		<div>
			<div className={styles.checkboxWrapper}>
				<input
					type="checkbox"
					onChange={handleCheckboxChange}
					checked={props.checked}
				/>

				{props.label}
			</div>
		</div>
	);
};

CheckboxInput.propTypes = {
	checked: PropTypes.bool,
	setShowAddress: PropTypes.func,
};

export default CheckboxInput;
