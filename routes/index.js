let express = require('express');
let router = express.Router();
let School = require('../models/School');
let Submission = require('../models/Submission');

let loggedIn = require('../lib/middleware/logged-in');
// let NotificationService = require('../lib/notification')([
// 	{
// 		pattern: 'forgot-password/:id',
// 		handler: 'forgot-password'
// 	}
// ], path.join(config.rootPath, 'views', 'notifications'));

/* GET home page. */
router.get('/', function(req, res, next) {
	if(!req.user) {
		return res.render('index', {user: null, school: null});
	}
	let s = new School({});
	s.where({userId: req.user.id})
	.fetch()
	.then(school => {
		 res.render('index', {
			//title: 'Talent Show'
			user: req.user,
			school: school
		});
	});
});

router.get('/dashboard', loggedIn, function(req, res, next) {
	res.render('dashboard', {
		title: 'User Dashboard'
	});
});

router.get('/schools', function(req, res, next) {
	let school = new School();
	school.fetchAll().then(schools => {
		res.render('schools', {
			title: 'Schools',
			schools: schools
		});
	});
});

router.get('/submissions', function(req, res, next) {
	let submission = new Submission();
	submission.fetchAll().then(apps => {
		res.render('submissions', {
			title: 'Submissions',
			submissions: submissions
		});
	});
});

router.get('/submissions/:id', function(req, res, next) {
	new Submission({id: req.params.id}).fetch({withRelated: ['schools']}).then(submission => {
		res.render('submission', {
			submission: submission
		});
	});
});

router.get('/schools/:id', function(req, res, next) {
	new School({id: req.params.id}).fetch({withRelated: ['submissions']}).then(school => {
		res.render('school', {
			school: school
		});
	});
});

module.exports = router;


