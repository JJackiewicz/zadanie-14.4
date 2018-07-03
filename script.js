var movies = [
    {id: 1, title: 'Blade Runner', desc: 'Film o androidzie', image: 'http://www.impawards.com/1982/posters/blade_runner.jpg'}, 
    {id: 2, title: 'King Kong', desc: 'Film o gorylu', image: 'http://www.impawards.com/1933/posters/king_kong.jpg'},
    {id: 3, title: 'Jurassic Park', desc: 'Film o dinozaurach', image: 'http://www.impawards.com/1993/posters/jurassic_park_ver1.jpg'}
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('li', {}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement(MovieImage, {image: this.props.movie.image})
            )
        );
    }
});

var MovieTitle = React.createClass({ 
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)  
        );
    }
});

var MovieDescription = React.createClass({ 
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('img', {src: this.props.image})
        );
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        var movieElements = this.props.movies.map(function(movie) {
            return React.createElement(Movie, { movie: movie, key: movie.id});
        });
        return React.createElement('div', {}, 
                React.createElement('h1', {}, 'Lista filmów'), 
                React.createElement('ul', {}, movieElements));
    }
});

var element = React.createElement(MoviesList, {movies:movies});
ReactDOM.render(element, document.getElementById('app'));