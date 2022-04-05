/* Desgined by leejunghun */
;(function() {
	module.exports = function(_g) {

		const app = _g.app;

		function route() {
			app.get('/', function(req, res) {
				res.render('index.html', {});
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



