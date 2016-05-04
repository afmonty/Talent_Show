import React from 'react';
import Nav from './Nav';
// import Footer from './footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				<Nav/>
				<h1> Submission Details</h1>
				<video>Video</video>
				<div>Name of Talent</div>
			</main>
		);
	}
});