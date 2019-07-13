import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

const AboutMePage = () => {
	return (
		<Layout>
			<h1>Iye Szin</h1>
			<ul>
				<li>Full-Snack Developer</li>
				<li>Selangor, Malaysia</li>
			</ul>
			<Link to="/">Home</Link>
		</Layout>
	)
}

export default AboutMePage;