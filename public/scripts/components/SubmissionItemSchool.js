import React from 'react';
import {browserHistory} from 'react-router';



const SubmissionItem = React.createClass({
	render: function() {
		return (
		<div className = 'itemContainer' onClick = {this.goDetails}>
			<div className = 'subSpanContainer'>
				<span className = 'subDate'>{this.props.date}</span>
				<span className = "subStatus">{this.props.status}</span>
			</div>
			<div className = 'titleAndName row'>
				<h2 className = "subTitle">{this.props.title}</h2>
				<div className = 'subTalentNameContainer'>
					<span className = 'subTalentName'>Submitted by: </span>
					<span className = 'subTalentName'>{this.props.name} </span> 
				</div>
			</div>
			<div className='videoContainer row'>
				<video className = 'subVideo' src={this.props.url}  controls></video>
				<p className = 'subdescription' >{this.props.desc}</p>
			</div>
			
			<span style = {{display: 'none'}}className = 'subid'>{this.props.submissionId}</span>
		</div>
		);
	},
	goDetails: function(e){
		browserHistory.push(`/SubmissionDetails/${this.props.submissionId}`);
	}
});

export default SubmissionItem;