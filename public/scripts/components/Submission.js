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
		// Schools.fetch();
		 	const schoolList = this.state.Schools.map((school, index) => {
		 		return (
					<option ref="schools" value={Schools.get('id')} key={index}>{Schools.get('schoolName')}</option> 
			);
		});
		return (
			<main>
				<Nav/>
				<h1> Select a school </h1>
					<div className="school-list">	
						<select value = "Select a school" name="mydropdown" onChange={this.selectSchool}>
							<option value="Pick">Go to Schools</option>
									{schoolList}
						</select>
					</div>
					<div className="Select or Create a video to submit">
						
						<input type="filepicker" data-fp-apikey="AyvZxLzllQyuCAYDTZxvpz"
								onchange="alert(event.fpfile.url)"/>
					</div>	
			</main>
		);
	},
	selectSchool: function(e) {
     	this.setState({currentCategory: e.target.value});
     }
});