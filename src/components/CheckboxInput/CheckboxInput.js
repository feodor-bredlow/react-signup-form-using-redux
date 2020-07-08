import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';

import styles from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
	const sessionStorageValue = window.sessionStorage.getItem(props.identifier);
	useEffect(() => {
		if (sessionStorageValue) {
			props.actions.updateShowAddress(sessionStorageValue === 'true');
		}
	}, []);

	const handleCheckboxChange = (event) => {
		window.sessionStorage.setItem(
			props.identifier,
			event.currentTarget.checked
		);
		props.actions.updateShowAddress(event.currentTarget.checked);
	};
	return (
		<div>
			<div className={styles.checkboxWrapper}>
				<input
					type="checkbox"
					onChange={handleCheckboxChange}
					checked={props.store.address.showAddress}
				/>

				{props.label}
			</div>
		</div>
	);
};

CheckboxInput.propTypes = {
	setShowAddress: PropTypes.func,
	updateShowAddress: PropTypes.func,
	label: PropTypes.string,
	identifier: PropTypes.string.isRequired,
	actions: PropTypes.object,
};

const mapStateToProps = (state) => {
	return { store: state };
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxInput);
