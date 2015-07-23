var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('template', {
		title: 'Blank',
		scriptsList:[],
		cssList:[]
	});
});

router.get('/schooler/', function(req, res, next) {
	res.render('template', {
		title: 'schooler',
		viewFile: 'pages/schooler',
		scriptsList:[],
		cssList:[]
	});
});

router.get('/dashboard/', function(req, res, next) {
	res.render('template', {
		title:"Dashboard",
		viewFile: 'pages/dashboard',
		scriptsList:["raphael","morris"],
		cssList:["timeline","morris"]
	});
});

router.get('/tables/', function(req, res, next) {
	getScholarsFromDB

	res.render('template', {
		scholar:scholar,
		title:"Tables",
		viewFile: 'pages/tables',
		scriptsList:["datatables"],
		cssList:["datatables","datatables-responsive"]
	});
});
// chart dakly
router.get('/flot/', function(req, res, next) {
	res.render('template', {
		title:"flot",
		viewFile: 'pages/flot',
		scriptsList:["flot"],
		cssList:["timeline",]
	});
});
// chart dakly
router.get('/morris/', function(req, res, next) {
	res.render('template', {
		title:"morris",
		viewFile: 'pages/morris',
		scriptsList:["raphael","morris"],
		cssList:["morris",]
	});
});

router.get('/forms/', function(req, res, next) {
	res.render('template', {
		title:"forms",
		viewFile: 'pages/forms',
		scriptsList:[],
		cssList:[]
	});
});
// ul element dakly
router.get('/panels/', function(req, res, next) {
	res.render('template', {
		title:"panels",
		viewFile: 'pages/panels',
		scriptsList:[],
		cssList:[]
	});
});

// ul element dakly
router.get('/buttons/', function(req, res, next) {
	res.render('template', {
		title:"buttons",
		viewFile: 'pages/buttons',
		scriptsList:[],
		cssList:["bootstrap-social"]
	});
});

// ul element dakly
router.get('/notifications/', function(req, res, next) {
	res.render('template', {
		title:"notifications",
		viewFile: 'pages/notifications',
		scriptsList:[],
		cssList:[]
	});
});


// ul element dakly
router.get('/typography/', function(req, res, next) {
	res.render('template', {
		title:"typography",
		viewFile: 'pages/typography',
		scriptsList:[],
		cssList:[]
	});
});


// ul element dakly
router.get('/icons/', function(req, res, next) {
	res.render('template', {
		title:"icons",
		viewFile: 'pages/icons',
		scriptsList:[],
		cssList:[]
	});
});


// ul element dakly
router.get('/grid/', function(req, res, next) {
	res.render('template', {
		title:"grid",
		viewFile: 'pages/grid',
		scriptsList:[],
		cssList:[]
	});
});

router.get('/login/', function(req, res, next) {
	res.render('login', { title: 'Express' });
});

/* GET home page. */
/*
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/test/', function(req, res, next) {
	res.render('test', { title: 'Express' });
});

router.get('/template/', function(req, res, next) {
	res.render('basic_template', { title: 'Express' });
});
router.get('/anas/', function(req, res, next) {
	res.render('anasView', { title: 'Express' });
});
router.get('/anas1/', function(req, res, next) {
	res.render('anaspage', { title: 'Express' });
});
router.get('/anas2/', function(req, res, next) {
	res.render('anas-log-in', { title: 'Express' });
});
router.get('/anas3/', function(req, res, next) {
	res.render('anas-go', { title: 'Express' });
});
router.get('/anas4/', function(req, res, next) {
	res.render('anas-rejest', { title: 'Express' });
});
router.get('/anas5/', function(req, res, next) {
	res.render('control', { title: 'Express' });
});

router.get('/anas6/', function(req, res, next) {
	res.render('js_test', { title: 'Express' });
});
*/

module.exports = router;
