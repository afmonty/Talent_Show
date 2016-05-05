import React from 'react';
import Nav from './Nav';
import Schools from './../collections/SchoolCollection';
import filepicker from 'filepicker-js';

// import Footer from './footer'; 

export default React.createClass({
	getInitialState: function(){
		return {
			Schools: Schools
		};
	},
	componentDidMount: function() {
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
					<div className="video-container">
						<label> Select a file to upload</label>
						<button onClick = {this.upload}>Select File</button>
						<video></video>
					</div>	
			</main>
		);
	},
    upload: function() {
    	filepicker.pick(
    		function(Blob) {
	    		console.log(Blob.url);
	    		let url = Blob.url;
	    		console.log(url);
	    	});
    }
});