const { init } = require('express/lib/application');

/* Desgined by leejunghun */
;(function() {

	module.exports = function() {

		function loadNodeModules() {
			_g = {};
			_g.express = require('express');
			_g.app = require('express')();
			_g.bodyParser = require('body-parser');
			_g.mysql = require('mysql');
			_g.http = require('http');
    		_g.server = _g.http.createServer(_g.app);
			const { Server } = require('socket.io');
			_g.io = new Server(_g.server);
		}

		function loadRoute() {
			var route = require('./Route.js')(_g);
			route.route();
		}

		function initSocket() {
			require('./Socket')(_g).init();
		}

		function initialize() {
			const app = _g.app;
			app.set('view engine', 'ejs');
			app.engine('html', require('ejs').renderFile);
			app.use('/assets', _g.express.static(__dirname + '/../assets'));
			app.use(_g.bodyParser.urlencoded({
			    extended: true
			}));
			app.use(_g.bodyParser.json());
		}

		function doInBackend() {
			loadNodeModules();
			initialize();
			loadRoute();
			initSocket();
		}

		return {
			doInBackend:doInBackend,
		};
	}

})();

