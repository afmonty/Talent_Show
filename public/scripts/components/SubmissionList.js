import React from 'react';
import Nav from './Nav';
import schools from './../collections/SchoolCollection';
import Submission from './../collections/SubmissionCollection';
import schoolSubmission from './../collections/SchoolSubmissionCollection';
import user from './../models/UserModel';
import SubmissionItemSchool from './SubmissionItemSchool';
import SchoolSubmissionCollection from './../collections/SchoolSubmissionCollection';
import SubmissionItemTalent from './SubmissionItem';

export default React.createClass({
	getInitialState: function(){
		return {
			Schools: schools,
			Submission: Submission,
			schoolSubmission: schoolSubmission,
			url: '',
			user: user
		};
	},
	componentDidMount: function () {
	    	this.state.user.on('update', ()=>{
				this.setState({
					user: user
				});
			});
			schoolSubmission.on('change', () => {
				this.setState({
					schoolSubmission: schoolSubmission
				});
			});
			Submission.on('update', () => {
				this.setState({
					Submission: Submission
				});
			});
			Submission.fetch({
				data: {
					withRelated: ['school']
				}
			});
			schoolSubmission.fetch({
				data: {
					withRelated: ['user', 'school', 'submission']
				}
			});
    },
	render: function() {
		console.log(user);
		console.log(this.state.user.get('school').id);
		let schoolId = this.state.user.get('school').id;
		const submissionRows =Submission.filter((subs, i, array) => {
				if (subs.get('schoolId') === schoolId) {
					console.log(schoolId);
					return true;
				} else {
					return false;
				}
				}).map((subs, i, array)=>{
				return (
					<SubmissionItemTalent
					key = {subs.get('id')}
					submissionId = {subs.get('id')}
					id = {subs.get('userId')}
					title={subs.get('title')}
					school = {subs.get('school')[0] ? subs.get('school')[0].schoolName : ''}
					status = {subs.get('status')}
					url = {subs.get('url')}
					desc = {subs.get('description')}
					date={subs.get('createdAt')} />
					);
			});
		return (
			<main>
				<Nav/>
				<h1> School Submission List Page</h1>
				<div>
					This will have a list of Submission data
					{submissionRows}
				</div>
			</main>
		);
	}
});