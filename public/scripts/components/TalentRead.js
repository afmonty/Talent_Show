import React from 'react';
import Nav from './Nav';
import SubmissionItemTalent from './SubmissionItem';
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
	// componentWillMount: function() {
			
	// },
	componentDidMount: function () {
	    		this.state.user.on('change', ()=>{
					this.setState({
						user: user
				});
			});
				Submission.on('update', this.updateSubmission);
				Submission.fetch();
    },
    updateSubmission: function () {
    	this.setState({
    		Submission: Submission
    	});
    },
	render: function() {
		let userId = this.state.user.get('id');
		const submissionRows = Submission.filter((subs, i, array) => {
				if (subs.get('userId') === userId) {
					return true;
				} else {
					return false;
				}
				}).map((subs, i, array)=>{
				return (
					<SubmissionItemTalent
					key = {subs.get('id')}
					id = {subs.get('userId')}
					title={subs.get('title')}
					url = {subs.get('url')}
					desc = {subs.get('description')}
					date={subs.get('createdAt')} />
					);
			});
		return (
			<main>
				<Nav/>
				<div className = 'talentReadContainer'>
						{submissionRows}
				</div>
			</main>
		);
	}
});