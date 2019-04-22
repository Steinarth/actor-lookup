import React from 'react';

import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { movieContainer, movieDescription } from './Movie.module.css';

const Movie = (props) => {
  const  { imageUrl, title, description } = props;
    return (
        <Card className={movieContainer}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="280"
            image={imageUrl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p" className={movieDescription}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

Movie.propTypes = {
  // Poster of the image for the movie
  imageUrl    : PropTypes.string.isRequired,
  // Title of the movie
  title       : PropTypes.string.isRequired,
  // Short description of the movie
  description : PropTypes.string,
};

export default Movie;  