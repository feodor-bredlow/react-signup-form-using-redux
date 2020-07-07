import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateShowAddress } from '../../redux/actions.js';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
	const handleCheckboxChange = (event) => {
		props.updateShowAddress(event.currentTarget.checked);
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
	updateShowAddress: PropTypes.func,
	label: PropTypes.string,
};

export default connect(null, { updateShowAddress })(CheckboxInput);
