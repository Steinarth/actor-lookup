import React from 'react';
import Proptypes from 'prop-types';

import Movie from '../Movie/Movie';

import { movieContainer } from './MoviesByActorContainer.module.css';

const MoviesByActorContainer = (props) => {
    return (
        <div className={movieContainer}>
            {props.movies.map((movie) => movie.poster_path && movie.title &&
                <Movie 
                    key={movie.id} 
                    imageUrl={movie.poster_path} 
                    title={movie.title} 
                    description={movie.overview} 
                >
                </Movie>)}
        </div>
    );
};

MoviesByActorContainer.propTypes = {
    // Array of all the movies the actor has 'acted' in ..
    movies: Proptypes.array.isRequired,
};

export default MoviesByActorContainer;