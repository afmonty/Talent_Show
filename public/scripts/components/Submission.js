import React from 'react';
import Nav from './Nav';
import Schools from './../collections/SchoolCollection';
var filepickerLibrary = require('filepicker-js');
// import Footer from './footer'; 

export default React.createClass({
	getInitialState: function(){
		console.log('init');
		return {
			Schools: Schools
		};
	},
	componentDidMount: function() {
		console.log('didmount');
		Schools.on('update', () => {
			this.setState({Schools: Schools});
		});
		Schools.fetch();
	},
	render: function() {
		 	const schoolList = this.state.Schools.map((school, index) => {
		 		return (
					<option ref="schools" value={school.get('id')} key={index}>{school.get('schoolName')}</option> 
			);
		});
		return (
			<main>
				<Nav/>
				<h3> Select a school </h3>
					<div className="school-list">	
						<select name="mydropdown">
							<option value="Pick">Go to Schools</option>
									{schoolList}
						</select>
					</div>
					<div className="Select or Create a video to submit">
						<button onClick = {this.upload}>Upload</button>
						<input type="filepicker" data-fp-apikey="AyvZxLzllQyuCAYDTZxvpz"
								onchange="alert(event.fpfile.url)"/>
					</div>	
			</main>
		);
	},
	selectSchool: function(e) {
     	this.setState({School: e.target.value});
     },
    upload: function() {
    	console.log('upload click');
    	filepicker.pick(function(Blob) {
    		console.log(Blob.url);
    	});
    }
});