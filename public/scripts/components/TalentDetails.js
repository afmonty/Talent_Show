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
					<h2 className = 'subTitle'>{this.state.sub.get('title')}</h2>
					 <span className = 'detailStatus'>{this.state.sub.get('status')}</span>
					<video className = 'subVideo' src={this.state.sub.get('url')} width="500" height="250" controls></video>
	 				<p className = 'subdescription'>{this.state.sub.get('description')}</p>
					
					<textarea 
					className='subMessage' 
					placeholder='No Messages'
					cols='80'
					rows='70'>
					</textarea>
					<button onClick = {this.close}>Back to Your List</button>
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