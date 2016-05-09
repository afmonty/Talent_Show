let express = require('express');
let router = express.Router();
let path = require ('path');
let bookshelfApi = require('bookshelf-api')({
		path: path.join(__dirname, '..', 'models')
});
let loggedIn = require('../lib/middleware/logged-in');

// router.get('/products', function(req, res, next) {

// });
router.post(
	'/Submission',
	loggedIn,
	function(req, res, next){
		req.body.userId = req.user.id;
		next();
	},
	bookshelfApi
);
router.post(
	'/schoolSubmission',
	loggedIn,
	function(req, res, next){
		req.body.userId = req.user.id;
		next();
	},
	bookshelfApi
);

router.use('/', 
	loggedIn,
	bookshelfApi
);


module.exports = router;
