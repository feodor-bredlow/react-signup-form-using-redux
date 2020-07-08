import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import styles from './DefaultInput.module.scss';

const DefaultInput = (props) => {
	const sessionStorageValue = window.sessionStorage.getItem(props.identifier);
	useEffect(() => {
		if (sessionStorageValue) {
			props.actions.updateState(props.identifier, sessionStorageValue);
		}
	}, []);

	const [err, setErr] = useState(false);

	const handleInputChange = (event) => {
		event.preventDefault();

		if (props.regex !== undefined) {
			if (
				props.regex.test(event.target.value) ||
				event.target.value === ''
			) {
				setInputVal(event);
			}
		} else {
			setInputVal(event);
		}
	};

	const setInputVal = (event) => {
		setErr(false);

		window.sessionStorage.setItem(props.identifier, event.target.value);

		props.actions.updateState(props.identifier, event.target.value);
	};

	const getType = () => {
		if (
			props.type === 'email' ||
			props.type === 'password' ||
			props.type === 'tel'
		) {
			return props.type;
		} else {
			return 'text';
		}
	};

	return (
		<div>
			<div>
				<div
					className={classNames(styles.inputOuterWrapper, {
						[styles.inputError]: err,
					})}
				>
					{props.label && (
						<label className={styles.formLabel}>
							{props.label} {!props.notRequired && <span>*</span>}
						</label>
					)}
					{!props.multiLine && (
						<input
							type={getType()}
							className={styles.inputElem}
							value={props.userInfo[props.identifier]}
							onChange={handleInputChange}
							maxLength={props.maxLength}
						/>
					)}
					{props.multiLine && (
						<textarea
							className={styles.inputElem}
							name="Text1"
							rows="5"
							value={props.userInfo[props.identifier]}
							onChange={handleInputChange}
						></textarea>
					)}
				</div>
			</div>
		</div>
	);
};

DefaultInput.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string.isRequired,
	identifier: PropTypes.string.isRequired,
	regex: PropTypes.instanceOf(RegExp),
	multiLine: PropTypes.bool,
	actions: PropTypes.object,
	userInfo: PropTypes.object,
	maxLength: PropTypes.number,
	notRequired: PropTypes.bool,
};

const mapStateToProps = (state) => {
	return { userInfo: state.userInfo };
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultInput);
