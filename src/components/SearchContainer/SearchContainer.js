import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { searchBar, searchBarContainer } from './SearchContainer.module.css';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';


class SearchContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            actor: '',
        }
    }
    render() {

        let { actor } = this.state;

        return (
            <div className={searchBarContainer}>
                <TextField
                variant="outlined"
                label="Search for Actor"
                className={searchBar}
                value={actor}
                onChange={(e) => this.setState({actor: e.target.value})}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                        aria-label="Toggle password visibility"
                        onClick={() => this.props.onSearch(actor)}
                        >
                        <Search /> 
                        </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    />
            </div>
        );
    }
};

SearchContainer.propTypes = {
    // The search function we call when user is ready to search
    onSearch: PropTypes.func.isRequired
  };

export default SearchContainer;