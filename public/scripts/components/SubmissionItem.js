import React from 'react';
import {browserHistory} from 'react-router';





const SubmissionItemTalent = React.createClass({
	render: function() {
		return (
		<div className = 'talentitemContainer'>
			<h3 className = "talentsubTitle" onClick = {this.goDetails} >{this.props.title}</h3>
			<h4 className = "talentsubSchool">{this.props.school}</h4>
			<div className = 'talentsubDetailsContainer' style = {{display: 'none'}}>
				<video  className = 'talentdetailssubVideo' src={this.props.url} width="400" height="200" controls></video>
				<p className = 'talentsubdescription'>{this.props.desc}</p>
			</div>
			<span style = {{display: 'none'}} className = 'subid'>{this.props.submissionId}</span>

			<div className = 'talentsubSpanContainer'>
				<span className = "talentsubStatus">{this.props.status}</span>
				<span className = 'talentsubDate'>{this.props.date}</span>
			</div>
			
			<div className="talentdeleteSub">
				<button className = ' talentButton buttonPrimary' type='button' onClick = {this.deleteSubmission}>Delete</button>
			</div>
			<p className = 'talentsubMessage' style = {{display: 'none'}}>{this.props.message}</p>
 
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
	// sort: function(e){
	// 	this.props.status;
	// }
	
});

export default SubmissionItemTalent;


