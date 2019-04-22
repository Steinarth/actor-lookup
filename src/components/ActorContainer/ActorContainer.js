import React from 'react';
import PropTypes from 'prop-types';

import { actorContainer, actorPicture, image, actorInfo } from './ActorContainer.module.css';

const ActorContainer = (props) => {
    const { imageUrl, name, biography, birthday, place_of_birth } = props;
    const style = {
        backgroundImage: "url("+imageUrl+")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }

    return (
        <div className={actorContainer}>
            <div className={actorPicture}>
                <div style={style} className={image}></div>
            </div>
            <div className={actorInfo}>
                <h2>{name}</h2>
                <div>
                    <p>{biography}</p>
                </div>
                <p>Born:{birthday}</p>
                <p>Place of birth:{place_of_birth}</p>
            </div>
        </div>
    );
};


ActorContainer.propTypes = {
    imageUrl      : PropTypes.string.isRequired,
    name          : PropTypes.string.isRequired,
    biography     : PropTypes.string.isRequired,
    birthday      : PropTypes.string,
    place_of_birth: PropTypes.string
  };

export default ActorContainer;