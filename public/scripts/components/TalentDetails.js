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
				<section className = 'talentdetailsContainer offset-by-two columns ten'>	
					<div className = 'talentdetailsTitleStatusContainer row'>
						<h2 className = 'talentdetailssubTitle'>{this.state.sub.get('title')}</h2>
					 	<span className = 'talentdetailStatus'>{this.state.sub.get('status')}</span>
					</div>
					<div className = 'talentdetailsvideoContainer'>
						<video className = 'talentdetailssubVideo' src={this.state.sub.get('url')} width="800" height="400" controls></video>
	 					<p className = 'talentdetailssubdescription'>{this.state.sub.get('description')}</p>
					</div>
					<div className='talentdetailssubMessage'>{this.state.sub.get('message') ? this.state.sub.get('message') : 'No School Messages'} 
					</div> 
					<div className = 'talentdetailsButtonContainer'>
						<button className='buttonPrimary'onClick = {this.close}>Back to Your List</button>
					</div>
				</section>
			</main> 
		);
	},
	close: function () {
		browserHistory.push('/TalentRead');
	},
	update: function (sub) {
		this.setState({sub: sub});
	}
	
});