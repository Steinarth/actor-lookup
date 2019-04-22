import React, { Component } from 'react';

import { layout } from './MainPageContainer.module.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ActorContainer from '../ActorContainer/ActorContainer';
import MoviesByActorContainer from '../MoviesByActorContainer/MoviesByActorContainer';

export class MainPageContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searched : false,
            actor    : '',
        }

        this.onSearch = this.onSearch.bind(this);

    };

    onSearch(actor) {
        if(actor.length > 0) {
            this.setState({actor, searched: true });
        }
    };

    render() {
      return (
        <div className={layout}>
            <SearchContainer 
                onSearch={this.onSearch}
            />
            { this.state.searched === true &&
                <div className="After-search-container">
                    <ActorContainer />
                    <MoviesByActorContainer />
                </div>
            }
        </div>
      );
    }
};

export default MainPageContainer;