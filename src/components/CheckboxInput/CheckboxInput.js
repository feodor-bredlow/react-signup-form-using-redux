import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
	const handleCheckboxChange = (event) => {
		props.actions.updateShowAddress(event.currentTarget.checked);
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
	actions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(CheckboxInput);
