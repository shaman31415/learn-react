var $ = require('jquery');
var str = require('./constant');
require('./less/index');

var App = function () {
	console.log(str);
	$('body').html(str);
};

var app = new App();