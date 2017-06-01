var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Search = require('./Search');
var Saved = require('./Saved');

var Main = React.createClass({
	render: function() {
		return (
			<router>
				<div>
					<Search />
					<br />
					
					<Saved />
				</div>
			</router>
		)

	}
});

ReactDOM.render(<Main />, document.getElementById('app'))

