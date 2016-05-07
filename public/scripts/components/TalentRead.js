import React from 'react';
import Nav from './Nav';
import SubmissionItem from './SubmissionItem';
import schools from './../collections/SchoolCollection';
import Submission from './../collections/SubmissionCollection';
import schoolSubmission from './../collections/SchoolSubmissionCollection';
import user from './../models/UserModel';

export default React.createClass({
getInitialState: function(){
		return {
			Schools: schools,
			Submission: Submission,
			SchoolSubmission: schoolSubmission,
			url: '',
			user: user
		};
	},
	componentWillMount: function() {
			Submission.fetch();
	},
	componentDidMount: function () {
	    		this.state.user.on('change', ()=>{
				this.setState({
					user: user,
					Submission: Submission
				});
			});	

    	},
	render: function() {
		Submission.fetch();
		let userId = this.state.user.get('id');
		console.log(userId);
		console.log(Submission);
		const submissionRows = Submission.filter((user, i, array) => {
				if (user.get('id') === userId) {
					console.log(user.get('id'), userId);
					return true;
				} else {
					return false;
				}
				}).map((user, i, array)=>{
				return (
					<SubmissionItem
	
					id = {Submission.get('id')}
					title={user.get('title')}
					url = {user.get('url')}
					desc = {user.get('desc')}
					date={user.get('createdAt')} />
					);
			});
		return (
			<main>
				<Nav/>
				<h1> Talen Submission List Page</h1>
				<div>
					This will have a list of Submission data
						{submissionRows}
				</div>
			</main>
		);
	}
});