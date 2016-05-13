import React from 'react';
import Nav from './Nav';
import schools from './../collections/SchoolCollection';
import Submission from './../collections/SubmissionCollection';
import schoolSubmission from './../collections/SchoolSubmissionCollection';
import user from './../models/UserModel';
import SubmissionItem from './SubmissionItemSchool';
var moment = require('moment');

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
   componentWillUnmount: function() {
		Submission.off('update');
		user.off('update');
		schoolSubmission.off('change');	
	},
	render: function() {
		let schoolId = this.state.user.get('school').id;
		const submissionRows = Submission.filter((subs, i, array) => {
				if (subs.get('schoolId') === schoolId) {
					return true;
				} else {
					return false;
				}
				}).map((subs, i, array)=>{
						let format = moment(subs.get('createdAt'));
					let dateFormat = format.format('MMM Do YYYY');
				return (
					<SubmissionItem
					key = {subs.get('id')}
					submissionId = {subs.get('id')}
					id = {subs.get('userId')}
					title={subs.get('title')}
					school = {subs.get('school') ? subs.get('school')[0].schoolName : ''}
					status = {subs.get('status')}
					url = {subs.get('url')}
					desc = {subs.get('description')}
					date={dateFormat} />
					);
			});
		return (
			<main>
				<Nav/>
				<h1> {this.state.user.get('school').schoolName}</h1>
				<div>
					{submissionRows}
				</div>
			</main>
		);
	}
});