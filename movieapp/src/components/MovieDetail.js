import React from 'react';
import ReactPlayer from 'react-player';

const MovieDetail = ({ movie, onClose }) => {
    return (
        <div className="movie-detail">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            {movie.Trailer && (
                <ReactPlayer url={movie.Trailer} controls={true} />
            )}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default MovieDetail;
