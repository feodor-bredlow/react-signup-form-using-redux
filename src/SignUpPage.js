import React from 'react';
import styles from './SignUpPage.module.scss';
import DefaultForm from './components/DefaultForm/DefaultForm.js';
import DefaultInput from './components/DefaultInput/DefaultInput.js';

const SignUpPage = () => {
	return (
		<div className={styles.wrapper}>
			<DefaultForm>
				<DefaultInput label="Vorname" />
			</DefaultForm>
		</div>
	);
};

export default SignUpPage;
