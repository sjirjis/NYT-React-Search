var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var axios = require('axios');

var Search = require('./Search');
var Saved = require('./Saved');

var moment = require('moment');

var Main = React.createClass({

	getInitialState: function() {
		return {
			docs: []
		}
	},

	render: function() {

		var docs = this.state.docs;

		var docsList = docs.map(function(data, index) {

			var btnId = 'saveBtn' + index

			return (
				<div className="well" key={index}>
					<a href={data.web_url}><h3>{data.headline.main}</h3></a>
					<p>{moment(data.pub_date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
					<a href={data.web_url}>{data.web_url}</a><br />
					<br />
					<input type="submit" id={btnId} className="btn btn-primary" value="Save" ref='save' onClick={this.onSave}></input>
				</div>
			);
		}.bind(this));

		return (
			<router>
				<div>
					<Search onSearch={this.onSearch}/>

						<h2>Results</h2>

						<div className='wellContainer'>
								{docsList}
						</div>
					<br />
					
					<Saved />
				</div>
			</router>
		)

	},

	onSearch: function (data) {

		var query = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bc3155c676bb49f2891e0ed3857fd36a'
		+ '&q=' + data.topic
		+ '&begin_date=' + data.startYear + '0101' 
		+ '&end_date=' + data.endYear + '0101';	

		var updatedDocs = this.state.docs;

		axios.get(query).then(function(res) {

			updatedDocs = res.data.response.docs;

			this.setState({
				docs: updatedDocs
			});

		}.bind(this));
	},

	onSave: function () {
		console.log(this.refs.save);
	}


});

ReactDOM.render(<Main />, document.getElementById('app'))

