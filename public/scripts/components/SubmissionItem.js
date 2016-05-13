import React from 'react';
import {browserHistory} from 'react-router';





const SubmissionItemTalent = React.createClass({
	render: function() {
		return (
		<div className = 'itemContainer'>
			<div className = 'subSpanContainer'>
				<time className = 'subDate'>{this.props.date}</time>
				<span className = "subStatus">{this.props.status}</span>
			</div>
			
			<h2 className = "subTitle" onClick = {this.goDetails} >{this.props.title}</h2>
			<h3 className = "subSchool">{this.props.school}</h3>
			<div className = 'subDetailsContainer' style = {{display: 'none'}}>
				<video  className = 'subVideo' src={this.props.url} width="200" height="100" controls></video>
				<p className = 'subdescription'>{this.props.desc}</p>
			</div>
			<span style = {{display: 'none'}} className = 'subid'>{this.props.submissionId}</span>
			<p className = 'subMessage'>{this.props.message}</p>
			
			<button type='button' onClick = {this.deleteSubmission}>Delete this submission</button>

		</div>
		);
	},
	goDetails: function(e){
		browserHistory.push(`/TalentDetails/${this.props.submissionId}`);
		//this.props.goDetails(this.props.submissionId);
	},
	deleteSubmission: function() {
		this.props.deleteSubmission(this.props.submissionId);
	}
	
});

export default SubmissionItemTalent;


