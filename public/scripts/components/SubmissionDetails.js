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
			<main>
				<Nav/>
				<section className = 'detailsContainer'>	
					<h2>{this.state.sub.get('title')}</h2>
					 <span className = 'detailStatus'>{this.state.sub.get('status')}</span>
					<video className = 'subVideo' src={this.state.sub.get('url')} width="400" height="200" controls></video>
	 				<p className = 'subdescription'>{this.state.sub.get('description')}</p>
					<button onClick = {this.close}>Back to Your List</button>
				</section>
				<div className='acceptRejectContainer' ref='accept'>
					<label>Accept<input name ='accept'className='accept' type ='radio' value = 'accept'/></label>
					<label>Reject<input name ='accept'className='reject' type ='radio' value = 'reject'/></label>
				</div>
				<div className='sendMessageContainer'>
					<input className='message' placeholder = 'Send a message this person' ref='message'></input>
					<button type='button' className='acceptRejectbutton buttonPrimary' onClick={this.changeStatus}>Send Update to Student</button>
				</div>
			</main> 
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

	

