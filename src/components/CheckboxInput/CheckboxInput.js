import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = ({
	updateShowAddress,
	identifier,
	showAddress,
	label,
}) => {
	const sessionStorageValue = window.sessionStorage.getItem(identifier);
	useEffect(() => {
		if (sessionStorageValue) {
			updateShowAddress(sessionStorageValue === 'true');
		}
	}, [updateShowAddress, sessionStorageValue]);

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

const mapStateToProps = (state) => {
	return { showAddress: state.address.showAddress };
};

const mapDispatchToProps = (dispatch) => ({
	updateShowAddress: bindActionCreators(actions, dispatch).updateShowAddress,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);
