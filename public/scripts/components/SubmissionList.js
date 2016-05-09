import React from 'react';
import Nav from './Nav';
import schools from './../collections/SchoolCollection';
import submission from './../collections/SubmissionCollection';
import schoolSubmission from './../collections/SchoolSubmissionCollection';
import user from './../models/UserModel';
import SubmissionItemSchool from './SubmissionItemSchool';

export default React.createClass({
	getInitialState: function(){
		return {
			Schools: schools,
			Submission: submission,
			schoolSubmission: schoolSubmission,
			url: '',
			user: user
		};
	},
	componentDidMount: function () {
	    		this.state.user.on('change', ()=>{
					this.setState({
						user: user
				});
			});
				schoolSubmission.on('update', this.updateSchoolSubmission);
				schoolSubmission.fetch({
					data: {
						withRelated: ['school']
					}
				});
    },
    updateSchoolSubmission: function () {
    	this.setState({
    		schoolSubmission: schoolSubmission
    	});
    },
	render: function() {
		console.log(schoolSubmission);
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