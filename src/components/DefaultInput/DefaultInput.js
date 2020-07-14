import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../redux/actions';
import styles from './DefaultInput.module.scss';

const DefaultInput = ({
	actions,
	userInfo,
	identifier,
	regex,
	type,
	label,
	notRequired,
	multiLine,
	maxLength,
}) => {
	const sessionStorageValue = window.sessionStorage.getItem(identifier);
	useEffect(() => {
		if (sessionStorageValue) {
			actions.updateState(identifier, sessionStorageValue);
		}
	}, [actions, identifier, sessionStorageValue]);

	const [err, setErr] = useState(false);

	const handleInputChange = (event) => {
		event.preventDefault();

		if (regex !== undefined) {
			if (regex.test(event.target.value) || event.target.value === '') {
				setInputVal(event);
			}
		} else {
			setInputVal(event);
		}
	};

	const setInputVal = (event) => {
		setErr(false);

		window.sessionStorage.setItem(identifier, event.target.value);

		actions.updateState(identifier, event.target.value);
	};

	const getType = () => {
		if (type === 'email' || type === 'password') {
			return type;
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
					{label && (
						<label className={styles.formLabel}>
							{label} {!notRequired && <span>*</span>}
						</label>
					)}
					{!multiLine && (
						<input
							type={getType()}
							className={styles.inputElem}
							value={userInfo[identifier]}
							onChange={handleInputChange}
							maxLength={maxLength}
						/>
					)}
					{multiLine && (
						<textarea
							className={styles.inputElem}
							name="Text1"
							rows="5"
							value={userInfo[identifier]}
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
