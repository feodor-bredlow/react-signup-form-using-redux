import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';

test.skip('renders learn react link', () => {
	const { getByText } = render(<SignUpPage />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
