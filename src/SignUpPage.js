import React from 'react';
import styles from './SignUpPage.module.scss';
import DefaultInput from './components/DefaultInput/DefaultInput.js';

const SignUpPage = () => {
	return (
		<div className={styles.wrapper}>
			<DefaultInput label="Vorname" />
		</div>
	);
};

export default SignUpPage;
