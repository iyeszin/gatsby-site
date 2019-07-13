import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';

const HomePage = () => {
	return (
		<Layout>
			<h1>
				Welcome to Iye Szin's Gatsby Site
			</h1>
			<p>
				crafted with tears and love.
			</p>
			<Link to="/about-me">About</Link>
		</Layout>
	)
}

export default HomePage;