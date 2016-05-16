import React from 'react';
import Nav from './Nav.js';
// import Footer from './footer'; 

export default React.createClass({
	render: function() {
		return (
			<main className = 'homepage'>
				<Nav className = 'homeNav'/>
				<div className = 'display'>
					<h2 className = 'greeting'>Welcome to the Talent Show</h2>
					<div className = 'welcome'>
						What's your talent?  Are you a dancer, a singer?  Do you love to play football?  You want your talent to take you places, but how?  Finding the right college program can help you be Excellent, and Talent Show can help you get there.  With Talent Show, you can select a college or Univeristy and submit a video of you at your best!  Welcome to your Talent Show!  
					</div>
				</div>
			</main>
		);
	}
});