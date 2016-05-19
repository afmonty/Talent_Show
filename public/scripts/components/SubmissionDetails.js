import React from 'react';
import Nav from './Nav';
import {browserHistory} from 'react-router';
import SubmissionModel from './../models/SubmissionModel';
//import SubmissionItemTalent from './SubmissionItem';
// import Footer from './footer'; 

export default React.createClass({
	getInitialState: function () {
		let sub = new SubmissionModel({id: this.props.params.submissionId});
		return {sub: sub};
	},
	componentDidMount: function () {
		this.state.sub.on('change', this.update);
		this.state.sub.fetch();
	},
	render: function() {
		return (
			<section >
				<Nav/>
				<div className = 'schoolDetailsContainer'>
					<div className = 'row detailstitleStatus'>	
						<h2 className = 'detailsTitle'>{this.state.sub.get('title')}</h2>
						 <span className = 'detailStatus'>{this.state.sub.get('status')}</span>
					</div>
					<div className='detailsTextarea'>
						<div className = 'detailsSubdescription'>{this.state.sub.get('description')}</div>
					</div>
					<div className = 'detailsVid'>
						<video className = 'detailsSubVideo' src={this.state.sub.get('url')} controls></video>	
					</div>
					<div className = 'detailsMessageContainer'>
						<textarea className='detailsMessage' placeholder = 'Send a message this person' ref='message'></textarea>
					</div>
					<div className='detailsAcceptRejectContainer row offset-by-three' ref='accept'>
						<label className = 'detailsChoiceAccept'>Accept</label>
						<input name ='accept'className='detailsAccept' type ='radio' value = 'accept'/>
						<label className = 'detailsChoiceReject'>Reject</label>
						<input name ='accept'className='detailsReject' type ='radio' value = 'reject'/>
					</div>
					<div className='detailsButtonContainer'>
						<button className = 'detailsList' onClick = {this.close}>Back to Your List</button>
						<button type='button' className='detailsAcceptRejectbutton buttonPrimary' onClick={this.changeStatus}>Send Update to Student</button>
					</div>
				</div>
			</section> 
		);
	},
	close: function () {
		browserHistory.push('/SubmissionList');
	},
	update: function (sub) {
		this.setState({sub: sub});
	},
	changeStatus: function (accept) {
		this.state.sub.save({
			status: this.refs.accept.querySelector('input:checked').value,
			message: this.refs.message.value
		},
		{
		success: (accept) => {
			browserHistory.push('/SubmissionList');
		}
		});
	}
});

	

