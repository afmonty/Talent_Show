import React from 'react';
import {Link} from 'react-router';
//import Rayon from 'rayon';
//import $ from 'jquery';
import user from './../models/UserModel';

//import Submission from './../collections/SubmissionCollection';

export default React.createClass({
		getInitialState: function() {
        	return {
            	//modalVisible: false,
            	user: user
        	};
    	},
    	componentDidMount: function() {
	    		console.log('nav didmount');
	    		this.state.user.on('change', ()=>{
				this.setState({
					user: user
				});
			});	
    	},
		render: function(){
			if(this.state.user.get('id')){
				return (
					<nav>
					<div className = 'nav-logo' > 
						<Link to="/"><img src="../../images/talentShow.jpg" /></Link>
					</div>
					<Link className="nav-link" to="Submission">Talent Submission</Link>
					<Link className="nav-link" to="SubmissionList">Schools</Link>
					<Link className="nav-link" to="SubmissionDetails">Details</Link>
					<Link className="nav-link" to="TalentRead">Talent</Link>
					<div className="nav-reg-link-container">
						<Link className="nav-link" to="Login">Login</Link>
						<Link className="nav-link" to="Registration">Register</Link>
					</div>
				</nav>);
			};
		},
		logout: function(e) {
    		e.preventDefault();
    		this.state.user.clear();
    		$.ajax({
    			type: 'POST',
    			url: '/auth/logout'
    		});
    	}
});


