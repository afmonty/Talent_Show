import React from 'react';



const SubmissionItemTalent = React.createClass({
	render: function() {
		return (
		<div className = 'itemContainer'>
			<span className = 'subDate'>{this.props.date}</span>
			<h2 className = "subTitle">{this.props.title}</h2>
			<video className = 'subVideo' src={this.props.url} width="200" height="100" controls></video>
			<p className = 'subdescription'>{this.props.desc}</p>

		</div>
		);
	}
});

export default SubmissionItemTalent;