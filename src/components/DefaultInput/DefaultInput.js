import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './DefaultInput.module.scss';

const DefaultInput = (props) => {
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

		props.updateStore && props.updateStore(event.target.value);
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
							{props.label}
						</label>
					)}
					{!props.multiLine && (
						<input
							type={getType()}
							className={styles.inputElem}
							placeholder={props.placeholder}
							disabled={props.disabled}
							value={props.value}
							onChange={handleInputChange}
						/>
					)}
					{props.multiLine && (
						<textarea
							className={styles.inputElem}
							name="Text1"
							rows="5"
							value={props.value}
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
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	regex: PropTypes.instanceOf(RegExp),
	updateStore: PropTypes.func,
};

export default DefaultInput;
