/* Desgined by leejunghun */
;(function() {
	module.exports = function(_g) {

		const app = _g.app;
		const namer = require('korean-name-generator');

		function route() {
			app.get('/', function(req, res) {
				res.render('index.html', {name:namer.generate(false)});
			});

			// entry point
			_g.server.listen(4401, function() {
			  preLoad();
			  console.log('Study Chatting Server listen on *:4401');
			});
		}

		function preLoad() {
		}

		return {
			route:route,
		};
	}

})();



