import React from 'react';
import Nav from './Nav';
import Schools from './../collections/SchoolCollection';
import SubmissionCollection from './../collections/SubmissionCollection';
import filepicker from 'filepicker-js';
import schoolSubmissionCollection from './../collections/SchoolSubmissionCollection';
import user from './../models/UserModel';
import {browserHistory} from 'react-router';
// import Footer from './footer'; 

export default React.createClass({
	getInitialState: function(){
		return {
			Schools: Schools,
			Submission: SubmissionCollection,
			url: '',
			schoolSubmission: schoolSubmissionCollection,
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('update', () => {
			this.setState({user: user});
		});
		Schools.on('update', () => {
			this.setState({Schools: Schools});
		});
		Schools.fetch();
	},
	componentWillUnmount: function() {
		Schools.off('update');
	 },
	render: function() {
		 	const schoolList = this.state.Schools.map((school, index) => {
		 		return (
					<option ref = "schools" value={school.get('id')} key={index}>{school.get('schoolName')}</option> 
			);
		});
		return (
			<main>
				<Nav/>
				<form className = "submissionForm" onSubmit = {this.submit}>
					<div className='titleContainer'>
						<h3 className='titleLabel'>Enter a Title for your submission</h3>
						<input className ='title' type='text' ref='title' placeholder='Submission Title'/>
					</div>
					<h3> Select a school </h3>
						<div className="school-list">	
							<select name="mydropdown" ref = 'school'>
								<option value="Pick">Go to Schools</option>
										{schoolList}
							</select>
							<div></div>
						</div>
						<div className="video-container">
							<h3> Select a file to upload</h3>
							<button type = 'button' onClick = {this.upload}>Select File</button>
							<video src={this.state.url} width="350" height="175" controls>
								<p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
							</video>
						</div>
						<div className="sub-desc-container">
							<h3 className="desc_label">Enter a description for your submission</h3>
							<textarea className="desc_input" ref = "desc_input" placeholder="Enter a description"></textarea>
						</div>
						<div className = "sub-button-container">
							<button className= "sub-button" >Submit</button>
							<button className="subCancel" onClick={this.cancel}>Cancel</button>
						</div>
				</form>
			</main>
		);
	},
    upload: function() {
    	filepicker.pick( (Blob) => {	
	    	this.setState({
	    		url: Blob.url
	    	});
	    });
	
    },
    cancel: function(user) {
    	browserHistory.push('/TalentRead');
    },
    submit: function (e){
	    e.preventDefault();
		this.state.Submission.create(
			{
				//atrtributes
				schoolId: this.refs.school.value,
				url: this.state.url,
				description: this.refs.desc_input.value,
				status: 'new',
				title: this.refs.title.value
			},  //ending attributes
			//starting options
			{	
				success: (submission) => {
	    			this.state.schoolSubmission.create(
	    			{
	    				schoolId: this.refs.school.value,
	    				submissionId: submission.id
	    			},
					//ending options
					{
						complete: (user) => {
							window.alert('Your Submission is complete');
							browserHistory.push('/TalentRead');
						}
					});	
				}
  			}
    	);
    }
});