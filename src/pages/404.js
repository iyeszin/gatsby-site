import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

const NotFoundPage = () => {
	return(
		<Layout>
			<h1>Page Not Found</h1>
			<p>nothing here</p>
			<Link to="/">Home</Link>
		</Layout>
	);
};

export default NotFoundPage;