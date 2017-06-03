var React = require('react');

var Search = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<h2>Search</h2>
				<form className="form-horizontal" onSubmit={this.handleSearch}>
					<fieldset>
						<div className="form-group">
							
							<label className="col-lg-2 control-label">Topic</label>
							<div className="col-lg-10">
								<input type="text" className="form-control" id="topic" placeholder="Topic" ref='topic'></input>
							<br /><br /></div>

							<label className="col-lg-2 control-label">Start Year</label>
							<div className="col-lg-10">
								<input type="text" className="form-control" id="startYear" placeholder="Start Year" ref='startYear'></input>
							<br /><br /></div>

							<label className="col-lg-2 control-label">End Year</label>
							<div className="col-lg-10">
								<input type="text" className="form-control" id="endYear" placeholder="End Year" ref='endYear'></input>
							<br /><br /></div>
							
							<input type="submit" id='searchBtn' className="btn btn-primary" value="Search"></input>
						</div>
					</fieldset>
				</form><br />			
			</div>
		)
	},

	handleSearch: function(e) {
		e.preventDefault();

		var formValues = {
			topic: this.refs.topic.value,
			startYear: this.refs.startYear.value,
			endYear: this.refs.endYear.value
		};

		this.props.onSearch(formValues)
	}

	//displayDocs: function(docs)
});

module.exports = Search;