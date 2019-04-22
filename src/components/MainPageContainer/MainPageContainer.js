import React, { Component } from 'react';

import { layout } from './MainPageContainer.module.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ActorContainer from '../ActorContainer/ActorContainer';
import MoviesByActorContainer from '../MoviesByActorContainer/MoviesByActorContainer';

import movieService from '../../services/movieService';


export class MainPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searched : false,
            actor: {
                id:'',
                name:'',
                imageUrl:'',
                place_of_birth: '',
                birthday:'',
                biography: '',
            },
            movies: [ ]
        }

        this.onSearch = this.onSearch.bind(this);

    };

    async onSearch(actorName) {
        if(actorName.length > 0) {
            let actor_inf = await movieService.getActor(actorName);
            let actorDetails = await movieService.getActorDetails(actor_inf.id);
            
            let actor = {
                id:             actorDetails.id,
                name:           actorDetails.name,
                imageUrl:       actorDetails.profile_path,
                place_of_birth: actorDetails.place_of_birth,
                birthday:       actorDetails.birthday,
                biography:      actorDetails.biography,
            };

            let movies = await movieService.getMoviesByActor(actor.id);
            console.log(movies);
            

            this.setState({actor,movies, searched: true });
        }
    };

    render() {
        let { actor, movies } = this.state;
      return (
        <div className={layout}>
            <SearchContainer 
                onSearch={this.onSearch}
            />
            { this.state.searched === true &&
                <div className="After-search-container">
                    <ActorContainer 
                        imageUrl={actor.imageUrl}
                        name={actor.name}
                        biography={actor.biography}
                        birthday={actor.birthday}
                        place_of_birth={actor.place_of_birth}

                        />
                    <MoviesByActorContainer 
                        movies={movies}
                    />
                </div>
            }
        </div>
      );
    }
};

export default MainPageContainer;