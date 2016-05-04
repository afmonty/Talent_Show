import React from 'react';
// import Footer from './footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				<Nav/>
				<h1>Landing</h1>
				<div className="nav-reg-link-container">
					<Link className="nav-link" to="Login">Login</Link>
					<Link className="nav-link" to="Registration">Register</Link>
				</div>
			</main>
		);
	}
});