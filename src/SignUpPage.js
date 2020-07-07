import React, { useState } from 'react';
import styles from './SignUpPage.module.scss';
import DefaultForm from './components/DefaultForm/DefaultForm.js';
import DefaultInput from './components/DefaultInput/DefaultInput.js';
import CheckboxInput from './components/CheckboxInput/CheckboxInput.js';

const SignUpPage = () => {
	const [showAddress, setShowAddress] = useState(true);

	return (
		<div className={styles.wrapper}>
			<DefaultForm>
				<DefaultInput label="First name" />
				<DefaultInput label="Last name" />
				<DefaultInput label="Nick name" />
				<DefaultInput label="Email" />
				<DefaultInput label="Password" />
				<DefaultInput label="Password (repeat)" />
				<CheckboxInput
					label="Show address"
					setShowAddress={setShowAddress}
					checked={showAddress}
				/>
				{showAddress && (
					<>
						<DefaultInput label="Street" />
						<DefaultInput label="House number" />
						<DefaultInput label="ZIP" />
						<DefaultInput label="City" />
					</>
				)}
				<DefaultInput label="Additional information" multiLine />
			</DefaultForm>
		</div>
	);
};

export default SignUpPage;
