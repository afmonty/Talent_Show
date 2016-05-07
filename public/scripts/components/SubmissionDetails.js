import React from 'react';
import Nav from './Nav';
// import Footer from './footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				<Nav/>
				<h1> Submission Details</h1>
				<video src={this.state.url} width="170" height="85" controls>
								<p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
							</video>
				<div>Name of Talent</div>
			</main>
		);
	}
});