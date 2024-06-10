import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div key={index} className='image-container d-flex justify-content-start m-3'>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='movie' onClick={() => props.onMovieSelect(movie)}></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
