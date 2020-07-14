import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = ({
	updateShowAddress,
	identifier,
	showAddress,
	label,
}) => {
	useEffect(() => {
		const sessionStorageValue = window.sessionStorage.getItem(identifier);
		sessionStorageValue &&
			updateShowAddress(sessionStorageValue === 'true');
	}, [updateShowAddress, identifier]);

	const handleCheckboxChange = (event) => {
		window.sessionStorage.setItem(identifier, event.currentTarget.checked);
		updateShowAddress(event.currentTarget.checked);
	};
	return (
		<div>
			<div className={styles.checkboxWrapper}>
				<input
					type="checkbox"
					onChange={handleCheckboxChange}
					checked={showAddress}
				/>

				{label}
			</div>
		</div>
	);
};

CheckboxInput.propTypes = {
	updateShowAddress: PropTypes.func,
	label: PropTypes.string,
	identifier: PropTypes.string.isRequired,
	showAddress: PropTypes.bool,
};

export default CheckboxInput;
