var React = require('react');

var Saved = React.createClass ({
	render: function() {
		return (
			<div className='container'>
				<h2>Saved Articles</h2>
				<div className='wellContainer'>

					<div className="well">
					  Look, I'm in a well!
					</div>

					<div className="well">
					  Look, I'm in a well!
					</div>

					<div className="well">
					  Look, I'm in a well!
					</div>

				</div>
			</div>
		)
	}
});

module.exports = Saved;
