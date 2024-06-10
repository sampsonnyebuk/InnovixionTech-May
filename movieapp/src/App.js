import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import MovieDetail from './components/MovieDetail';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const getMovieRequest = async (searchValue) => {
        const apiKey = 'dd0cf0bb0269095485ed8342078fca84';
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;

        const searchResponse = await fetch(searchUrl);
        const searchJson = await searchResponse.json();

        if (searchJson.results) {
            const detailedMovies = await Promise.all(
                searchJson.results.map(async (movie) => {
                    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&append_to_response=videos`;
                    const movieDetailsResponse = await fetch(movieDetailsUrl);
                    const movieDetailsJson = await movieDetailsResponse.json();

                    // Extract trailer URL from the videos response
                    const trailer = movieDetailsJson.videos.results.find(
                        (video) => video.type === 'Trailer' && video.site === 'YouTube'
                    );

                    movieDetailsJson.Trailer = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
                    return movieDetailsJson;
                })
            );
            setMovies(detailedMovies);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        if (movieFavourites) {
            setFavourites(movieFavourites);
        }
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite.id !== movie.id
        );

        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseDetail = () => {
        setSelectedMovie(null);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <MovieList
                    movies={movies}
                    handleFavouritesClick={addFavouriteMovie}
                    favouriteComponent={AddFavourites}
                    onMovieSelect={handleMovieSelect}
                />
            </div>
            {selectedMovie && (
                <div className='row'>
                    <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
                </div>
            )}
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Favourites' />
            </div>
            <div className='row'>
                <MovieList
                    movies={favourites}
                    handleFavouritesClick={removeFavouriteMovie}
                    favouriteComponent={RemoveFavourites}
                    onMovieSelect={handleMovieSelect}
                />
            </div>
        </div>
    );
};

export default App;
