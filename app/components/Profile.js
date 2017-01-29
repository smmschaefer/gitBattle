var React = require('react');
var ReactDOM = require('react-dom');



var USER_DATA = { 
	name: 'David Lambert',
	username: 'dlamb3244',
	image: 'https://media.licdn.com/media/AAEAAQAAAAAAAAhJAAAAJDM2MmQ0OGE0LTE4YTMtNGY0Ni05Yjg4LTA5ZjE0Y2RjN2E3Nw.jpg'
}

var ProfilePic = React.createClass({
	render: function() {
		return (
			<img src={this.props.imageUrl} style={{height: 100, width: 100}} />
		)
	}
});


var Link = React.createClass({
		
	changeURL: function() {
		window.location.replace(this.props.href)
	},

	render: function() {
		return (
			<span style={{color: 'blue', cursor: 'pointer'}}
			onClick={this.changeURL}>
			{this.props.children}
			</span>
		)
	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<Link href={'https://www.linkedin.com/in/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

var Profile = React.createClass({
	
	propTypes: {
		user: React.PropTypes.arrayOf(
			React.PropTypes.string
		)
	},
	
	getInitialData: function() {
		user: {USER_DATA}
	},
	
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileName name={this.props.user.name}/>
				<ProfileLink username={this.props.user.username}/>
			</div>
		)
	}
});


module.exports = Profile;