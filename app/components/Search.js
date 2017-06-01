var React = require('react');

var Search = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<h2>Search</h2>
				<form className="form-horizontal">
					<fieldset>
						<div className="form-group">
							
							<label className="col-lg-2 control-label">Topic</label>
							<div className="col-lg-10">
								<input type="text" className="form-control" id="topic" placeholder="Topic"></input>
							<br /><br /></div>

							<label className="col-lg-2 control-label">Start Year</label>
							<div className="col-lg-10">
								<input type="text" className="form-control" id="startYear" placeholder="Start Year"></input>
							<br /><br /></div>

							<label className="col-lg-2 control-label">End Year</label>
							<div className="col-lg-10">
								<input type="text" className="form-control" id="endYear" placeholder="End Year"></input>
							<br /><br /></div>
							
							<a href="#" id='searchBtn' className="btn btn-primary">Search</a>																		
						</div>
					</fieldset>
				</form><br />

				<h2>Results</h2>
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

module.exports = Search;