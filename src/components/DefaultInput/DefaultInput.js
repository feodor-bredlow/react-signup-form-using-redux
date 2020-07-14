import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './DefaultInput.module.scss';

const DefaultInput = ({
	updateState,
	value,
	identifier,
	regex,
	type,
	label,
	notRequired,
	multiLine,
	maxLength,
}) => {
	useEffect(() => {
		const sessionStorageValue = window.sessionStorage.getItem(identifier);
		sessionStorageValue && updateState(identifier, sessionStorageValue);
	}, [updateState, identifier]);

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

		updateState(identifier, event.target.value);
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
							value={value}
							onChange={handleInputChange}
							maxLength={maxLength}
						/>
					)}
					{multiLine && (
						<textarea
							className={styles.inputElem}
							name="Text1"
							rows="5"
							value={value}
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
	updateState: PropTypes.func,
	value: PropTypes.string,
	maxLength: PropTypes.number,
	notRequired: PropTypes.bool,
};

export default DefaultInput;
