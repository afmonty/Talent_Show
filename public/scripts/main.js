//import $ from 'jquery';
//import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
//import Home from './components/Home.js';
import App from './components/App.js';
import Submission from './components/Submission.js';
import SubmissionList from './components/SubmissionList.js';
import SubmissionDetails from './components/SubmissionDetails.js';
import Login from './components/Login.js';
import Register from './components/Registration.js';
import TalentRead from './components/TalentRead.js';



const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
		<Route path="/App" component={App}/>
		<Route path="/Submission" component={Submission}/>
		<Route path="/SubmissionList" component={SubmissionList}/>
		<Route path="/SubmissionDetails" component={SubmissionDetails}/>
		<Route path="Login" component={Login}/>
		<Route path="Registration" component={Register}/>
		<Route path="/TalentRead" component={TalentRead}/>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));