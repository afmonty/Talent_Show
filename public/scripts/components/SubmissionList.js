import React from 'react';
import Nav from './Nav';
 

export default React.createClass({
	render: function() {
		// const schoolItem = Schools.forEach((category, i, array) => {
			
		// 		return (
					
		// 			id = {schoolval.get('id')}
		// 			Name={schoolval.get('schoolName')}
		// 			Address = {schoolval.get('address2')} />
		// 			);
		// 	});
		return (
			<main>
				<Nav/>
				<h1> School Submission List Page</h1>
				<div>
					This will have a list of Submission data
				</div>
			</main>
		);
	}
});