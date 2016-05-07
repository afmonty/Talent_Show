import React from 'react';
import Nav from './Nav';
import schools from './../collections/SchoolCollection';
import submission from './../collections/SubmissionCollection';
import schoolSubmission from './../collections/SchoolSubmissionCollection';
 

export default React.createClass({
getInitialState: function(){
		return {
			Schools: schools,
			Submission: submission,
			SchoolSubmission: schoolSubmission,
			url: ''
		};
	},
	componentWillMount: function() {
		console.log(this.props.params);
	},
	render: function() {
		 // const submissionlItem = schoolSubmission.forEach((category, i, array) => {
			
		 // 		return (
					
		 // 			id = {schoolsubmissionval.get('id')}
		// 			Name={submissionval.get('schoolName')}
		// 			Address = {submissionval.get('address2')} 
		// 			url = {submissionval.get('url')}
		//			desc = {submissionval.get('description')}/>
		 	// 		);
		 	// });
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