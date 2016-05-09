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
	componentDidMount: function () {
		this.state.user.on('update', ()=>{
			this.setState({
				user: user
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
    },
    componentWillUnMount: function() {
		Submission.off('update');
		user.off('update');	
	},
	render: function() {
		let userId = this.state.user.get('id');
		const submissionRows = Submission.filter((subs, i, array) => {
			console.log(subs);
				if (subs.get('userId') === userId) {
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
					school = {subs.get('schoolId')}
					status = {subs.get('status')}
					url = {subs.get('url')}
					desc = {subs.get('description')}
					date={subs.get('createdAt')} />
					);
			});
		return (
			<main className="talentContainer">
				<Nav/>
				<div className = 'titleContainer'>
					<span className='title'>Submission</span>
					<span className='school'>School</span>
					<span className='status'>Status</span>
				</div>
				<div className = 'talentReadContainer'>
						{submissionRows}
				</div>
			</main>
		);
	}
});