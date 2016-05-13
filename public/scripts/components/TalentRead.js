import React from 'react';
import Nav from './Nav';
import SubmissionItemTalent from './SubmissionItem';
import schools from './../collections/SchoolCollection';
import Submission from './../collections/SubmissionCollection';
import SubmissionModel from './../models/SubmissionModel';
import schoolSubmission from './../collections/SchoolSubmissionCollection';
import user from './../models/UserModel';
//import $ from 'jquery';
//import {moment} from 'moment';
var moment = require('moment');


export default React.createClass({
	getInitialState: function(){
		return {
			Schools: schools,
			Submission: Submission,
			submissionModel: new SubmissionModel(),
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
		this.state.submissionModel.on('change', () => {
			this.setState({
				SubmissionCollection: SubmissionCollection
			});
		});
		Submission.fetch({
			data: {
				withRelated: ['school']
			}
		});

    },
    componentWillUnmount: function() {
		Submission.off('update');
		user.off('update');	
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
					let format = moment(subs.get('createdAt'));
					let dateFormat = format.format('MMM Do YYYY');
					
				return (
					<SubmissionItemTalent
					key = {subs.get('id')}
					submissionId = {subs.get('id')}
					id = {subs.get('userId')}
					title={subs.get('title')}
					school = {subs.get('school') ? subs.get('school')[0].schoolName : ''}
					status = {subs.get('status')}
					message = {subs.get('message') ? subs.get('message'): ''}
					url = {subs.get('url')}
					desc = {subs.get('description')}
					date={dateFormat}
					deleteSubmission={this.deleteSubmission}/>
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
	},
	deleteSubmission: function(submissionId) {
		
		this.state.Submission.get(submissionId).destroy();
		
	}
	// goDetails: function() {
	// 	$('.subDetailsContainer').css('display', 'block');
	// }
});