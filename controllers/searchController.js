module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index')
	})

	// app.get('/search', function(req, res) {
	// 	res.send('testing again');
	// })
};